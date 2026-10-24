const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-235.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  systems: {url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', label: 'ITIC Academy, bloque 30 Tecnologías de Sistemas de la Información, versión 2026'},
  gis: {url: 'https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view?usp=drivesdk', label: 'ITIC Academy, bloque 33 E-learning y Sistemas de Información Geográfica, versión 2026.1 (31-07-2026)'}
};
const mapping = {
  1491: {doc: 'gis', detail: 'apartado de sistemas de información geográfica: conceptos, componentes y funcionalidad', topics: ['A1-74']},
  1492: {doc: 'systems', detail: 'estándares para representar/intercambiar información estructurada en aplicaciones y servicios web', topics: ['A1-65', 'A2-II-9']},
  1493: {doc: 'systems', detail: 'arquitectura de desarrollo web y tecnologías de navegador; el caso Presto se trata históricamente', topics: ['A1-65', 'A2-II-9']},
  1494: {doc: 'systems', detail: 'estándares HTML, desarrollo web y accesibilidad mediante WAI-ARIA', topics: ['A1-65', 'A2-II-9', 'A2-III-12']},
  1495: {doc: 'systems', detail: 'elementos HTML y desarrollo de aplicaciones web', topics: ['A1-65', 'A2-II-9', 'A2-III-12']}
};
for (const change of log.cambios) {
  const question = bank.preguntas.find(item => item.id === change.id);
  const row = mapping[change.id];
  const doc = docs[row?.doc];
  if (!question?.revision || !row || !doc) throw new Error(`Falta revisión o mapeo académico para ${change.id}`);
  const codes = row.topics.join('/');
  const source = {url: doc.url, referencia: `${doc.label}; ${row.detail}; correspondencia ${codes}, contrastada con temario-oficial.json y BOE-A-2025-25938/BOE-A-2025-26262`};
  const note = `Cotejo curricular: ${doc.label}, ${row.detail}; temas oficiales ${codes} (revision/temario-oficial.json; BOE-A-2025-25938 y BOE-A-2025-26262). La academia sirve para el encaje temático, no sustituye la fuente técnica primaria.`;
  question.clasificacion.bloque_academia = `${doc.label}, ${row.detail}; correspondencia ${codes}.`;
  question.clasificacion.nota = note;
  if (!question.revision.observaciones.includes(note)) question.revision.observaciones += ` ${note}`;
  question.comentarios = question.revision.observaciones;
  if (!question.revision.fuentes.some(item => item.url === doc.url)) question.revision.fuentes.push(source);
  change.actualizada = structuredClone(question);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo de ITIC Academy y temario oficial añadido a los IDs 1491–1495.');
