const fs = require('node:fs');
const path = require('node:path');
const bp = path.join(__dirname, '..', 'preguntas_preparatic.json');
const lp = path.join(__dirname, 'cambios-lote-438.json');
const bank = JSON.parse(fs.readFileSync(bp, 'utf8'));
const log = JSON.parse(fs.readFileSync(lp, 'utf8'));
const programs = JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas;
const valid = new Set(programs.flatMap(p => p.temas.map(t => t.id)));
const calls = [
  'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',
  'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262'
];
const docs = {
  networks: { url: 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk', label: 'ITIC Academy, bloque 42 «Redes», versión 2026.1 (29-09-2026); incluye encaminamiento, protocolos IP y redes de área extensa.' },
  administration: { url: 'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk', label: 'ITIC Academy, bloque 03 «Actuación Administrativa y Administración Digital», versión 2026.2 (01-10-2026); el apartado 4.6 trata comunicación digital y accesibilidad de sitios públicos.' },
  databases: { url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', label: 'ITIC Academy, bloque 29 «Bases de datos, SQL y modelado de datos», versión 2026.1 (31-08-2026); contiene el modelo relacional y las reglas de Codd.' },
  security: { url: 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk', label: 'ITIC Academy, bloque 48 «Seguridad en redes y en el nivel de aplicación», versión 2026.1 (30-09-2026); incluye técnicas criptográficas y mecanismos de firma.' }
};
const map = {
  2501: { doc: 'networks', a1: ['A1-115'], a2: ['A2-II-8'], detail: 'IPv4, prefijos de red y encaminamiento en las redes IP.' },
  2502: { doc: 'administration', a1: ['A1-44'], a2: ['A2-III-14'], detail: 'Accesibilidad y usabilidad de sitios y servicios digitales.' },
  2503: { doc: 'databases', a1: ['A1-64'], a2: ['A2-III-4'], detail: 'Reglas de Codd, modelo relacional, restricciones e integridad de datos.' },
  2504: { doc: 'security', a1: ['A1-80'], a2: ['A2-IV-12'], detail: 'Claves públicas/privadas, confidencialidad y técnicas criptográficas.' },
  2505: { doc: 'administration', a1: ['A1-44'], a2: ['A2-III-14'], detail: 'Principios W3C de accesibilidad del contenido web.' }
};
if (log.cambios.map(c => c.id).join(',') !== '2501,2502,2503,2504,2505') throw new Error('IDs del lote 438 inesperados.');
for (const c of log.cambios) {
  const q = bank.preguntas.find(item => item.id === c.id);
  const m = map[c.id], d = docs[m?.doc];
  if (!q?.revision || !d) throw new Error('Falta revisión o mapeo curricular de ' + c.id);
  if (![...m.a1, ...m.a2].every(topic => valid.has(topic))) throw new Error('Tema no oficial para ' + c.id);
  q.clasificacion.A1 = m.a1;
  q.clasificacion.A2 = m.a2;
  const note = `Cotejo curricular: ${d.label} ${m.detail} Documento consultado en Google Drive: ${d.url}. Las correspondencias se contrastaron con revision/temario-oficial.json y las convocatorias A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262 (${calls.join('; ')}). ITIC Academy contextualiza la materia; las fuentes normativas y técnicas primarias de revision.fuentes sustentan las respuestas.`;
  q.clasificacion.bloque_academia = d.url;
  q.clasificacion.nota = note;
  q.revision.observaciones = `${c.actualizada.revision.observaciones} ${note}`;
  q.comentarios = q.revision.observaciones;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(lp, JSON.stringify(log, null, 2) + '\n');
fs.writeFileSync(bp, JSON.stringify(bank, null, 2) + '\n');
console.log('Cotejo curricular de 2501–2505 con Drive, temario oficial y convocatorias aplicado.');
