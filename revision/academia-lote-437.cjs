const fs = require('node:fs');
const path = require('node:path');
const bp = path.join(__dirname, '..', 'preguntas_preparatic.json');
const lp = path.join(__dirname, 'cambios-lote-437.json');
const bank = JSON.parse(fs.readFileSync(bp, 'utf8'));
const log = JSON.parse(fs.readFileSync(lp, 'utf8'));
const programs = JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas;
const valid = new Set(programs.flatMap(p => p.temas.map(t => t.id)));
const calls = [
  'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',
  'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262'
];
const docs = {
  databases: { url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', label: 'ITIC Academy, bloque 29 «Bases de datos, SQL y modelado de datos», versión 2026.1; encuadra transacciones, SGBD relacionales y propiedades de consistencia.' },
  admin: { url: 'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk', label: 'ITIC Academy, bloque 3 «Actuación administrativa y Administración Digital», versión 2026.2 (01-10-2026); firma/sello electrónicos y actuación automatizada.' },
  networks: { url: 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk', label: 'ITIC Academy, bloque 42 «Redes», versión 2026.1 (29-09-2026); arquitectura, servicios y nodos de red.' },
  security: { url: 'https://drive.google.com/file/d/18tJzWuBHyd4FbkzQIE5fIbSCRdlrt_1U/view?usp=drivesdk', label: 'ITIC Academy, bloque 22 «Seguridad, ENS y Ciberseguridad», versión 2026; amenazas y capacidades de seguridad.' },
  development: { url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', label: 'ITIC Academy, bloque 30 «Tecnologías de Sistemas de Información», versión 2026.1 (31-08-2026); desarrollo web, JavaScript y herramientas del entorno .NET/Java.' }
};
const map = {
  2496: { doc: 'databases', a1: ['A1-64'], a2: ['A2-II-5'], detail: 'Transacciones, integridad/consistencia y SGBD relacionales.' },
  2497: { doc: 'admin', a1: ['A1-22'], a2: ['A2-I-9'], detail: 'Firma electrónica en la actuación administrativa automatizada.' },
  2498: { doc: 'networks', a1: ['A1-108'], a2: ['A2-IV-13'], detail: 'Arquitectura de pares P2P como servicio/arquitectura distribuida de Internet.' },
  2499: { doc: 'security', a1: ['A1-48'], a2: ['A2-IV-12'], detail: 'Vigilancia y reducción de superficie de exposición frente a amenazas; el sistema descrito es un recurso del CCN-CERT.' },
  2500: { doc: 'development', a1: ['A1-65'], a2: ['A2-II-9'], detail: 'Desarrollo web y scripts de cliente; ESLint analiza código JavaScript y reglas de calidad/estilo.' }
};
if (log.cambios.map(c => c.id).join(',') !== '2496,2497,2498,2499,2500') throw new Error('IDs del lote 437 inesperados.');
for (const c of log.cambios) {
  const q = bank.preguntas.find(item => item.id === c.id);
  const m = map[c.id], d = docs[m?.doc];
  if (!q?.revision || !d) throw new Error('Falta revisión o mapeo curricular de ' + c.id);
  if (![...m.a1, ...m.a2].every(topic => valid.has(topic))) throw new Error('Tema no oficial para ' + c.id);
  q.clasificacion.A1 = m.a1;
  q.clasificacion.A2 = m.a2;
  const note = `Cotejo curricular: ${d.label} ${m.detail} Documento consultado en Drive: ${d.url}. La correspondencia se contrastó con revision/temario-oficial.json y los anexos de las convocatorias A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262 (${calls.join('; ')}). Academy contextualiza el temario; las fuentes normativas y técnicas primarias citadas en revision.fuentes sustentan las respuestas.`;
  q.clasificacion.bloque_academia = d.url;
  q.clasificacion.nota = note;
  q.revision.observaciones = `${c.actualizada.revision.observaciones} ${note}`;
  q.comentarios = q.revision.observaciones;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(lp, JSON.stringify(log, null, 2) + '\n');
fs.writeFileSync(bp, JSON.stringify(bank, null, 2) + '\n');
console.log('Cotejo curricular de 2496–2500 con Drive, temario oficial y convocatorias aplicado.');
