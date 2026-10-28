const fs = require('node:fs');
const path = require('node:path');
const bp = path.join(__dirname, '..', 'preguntas_preparatic.json');
const lp = path.join(__dirname, 'cambios-lote-439.json');
const bank = JSON.parse(fs.readFileSync(bp, 'utf8'));
const log = JSON.parse(fs.readFileSync(lp, 'utf8'));
const programs = JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas;
const valid = new Set(programs.flatMap(p => p.temas.map(t => t.id)));
const calls = [
  'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',
  'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262'
];
const docs = {
  informationTechnology: { url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', label: 'ITIC Academy, bloque 30 «Tecnologías de Sistemas de Información», versión 2026.1; su programa incluye expresamente el tema A1-85 (blockchain, EBP y EBSI).' },
  administration: { url: 'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk', label: 'ITIC Academy, bloque 03 «Actuación Administrativa y Administración Digital», versión 2026.2; apartado 6.4, interoperabilidad europea y datos.' },
  design: { url: 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk', label: 'ITIC Academy, bloque 38 «Análisis, Diseño y Construcción de Sistemas de Información», edición 2026; incluye MVC, UML, diagramas de despliegue y patrones de diseño.' },
  networks: { url: 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk', label: 'ITIC Academy, bloque 42 «Redes», versión 2026.1; redes IP, protocolos de encaminamiento, LAN y direccionamiento.' }
};
const map = {
  2506: { doc: 'informationTechnology', a1: ['A1-85'], a2: ['A2-I-6'], detail: 'EBP/EBSI como iniciativa e infraestructura europea basada en blockchain dentro de la sociedad de la información.' },
  2507: { doc: 'administration', a1: ['A1-45', 'A1-46'], a2: ['A2-I-9'], detail: 'Principios y marco europeo de interoperabilidad en servicios públicos digitales.' },
  2508: { doc: 'design', a1: ['A1-93'], a2: ['A2-III-9'], detail: 'Separación de responsabilidades, dependencias en MVC y diseño de software.' },
  2509: { doc: 'design', a1: ['A1-92', 'A1-93'], a2: ['A2-III-9'], detail: 'Lenguaje UML y diagramas de despliegue dentro del análisis/diseño orientado a objetos.' },
  2510: { doc: 'networks', a1: ['A1-115', 'A1-118'], a2: ['A2-II-8', 'A2-IV-8'], detail: 'Direccionamiento IPv4/CIDR y subnetting aplicado a redes locales.' }
};
if (log.cambios.map(c => c.id).join(',') !== '2506,2507,2508,2509,2510') throw new Error('IDs del lote 439 inesperados.');
for (const c of log.cambios) {
  const q = bank.preguntas.find(item => item.id === c.id);
  const m = map[c.id], d = docs[m?.doc];
  if (!q?.revision || !d) throw new Error('Falta revisión o mapeo curricular de ' + c.id);
  if (![...m.a1, ...m.a2].every(topic => valid.has(topic))) throw new Error('Tema no oficial para ' + c.id);
  q.clasificacion.A1 = m.a1;
  q.clasificacion.A2 = m.a2;
  const note = `Cotejo curricular: ${d.label} ${m.detail} Documento consultado en Google Drive: ${d.url}. Las correspondencias se comprobaron en revision/temario-oficial.json y las convocatorias A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262 (${calls.join('; ')}). ITIC Academy contextualiza el temario; las fuentes técnicas primarias de revision.fuentes sustentan las respuestas.`;
  q.clasificacion.bloque_academia = d.url;
  q.clasificacion.nota = note;
  q.revision.observaciones = `${c.actualizada.revision.observaciones} ${note}`;
  q.comentarios = q.revision.observaciones;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(lp, JSON.stringify(log, null, 2) + '\n');
fs.writeFileSync(bp, JSON.stringify(bank, null, 2) + '\n');
console.log('Cotejo curricular de 2506–2510 con Drive, temario oficial y convocatorias aplicado.');
