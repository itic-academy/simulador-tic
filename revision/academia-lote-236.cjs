const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-236.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  systems: {url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view', label: 'ITIC Academy, bloque 30, Tecnologías de Sistemas de la Información, versión 2026.1 (31-08-2026)'},
  invoice: {url: 'https://drive.google.com/file/d/1FPkzhljZaHbxADbo36QNm9U9gwGy7lIt/view', label: 'ITIC Academy, bloque 35, Tema 78, Comercio y factura electrónica, versión 2026'},
  trust: {url: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view', label: 'ITIC Academy, bloque 36, temas 79–81, seguridad, criptografía, identificación y firma electrónica, versión 2026'},
  privacy: {url: 'https://drive.google.com/file/d/1uS8S8axBSb22s9Dbv2mTsFaHUUVlowiM/view?usp=drivesdk', label: 'ITIC Academy, bloque 08 Protección de Datos, versión 2026.3 (01-10-2026)'}
};
const mapping = {
  1496: {doc: 'systems', detail: 'estándares web, lenguajes de hojas de estilo y transformación XML mediante XSLT', topics: ['A1-65', 'A2-II-9']},
  1497: {doc: 'systems', detail: 'elementos HTML para representar e incrustar recursos externos en aplicaciones web', topics: ['A1-65', 'A2-II-9', 'A2-III-12']},
  1498: {doc: 'invoice', detail: 'comercio electrónico y factura electrónica, con referencia a su evolución normativa en la contratación pública', topics: ['A1-11', 'A1-78', 'A2-I-9']},
  1499: {doc: 'trust', detail: 'marco eIDAS, servicios de confianza, prestadores cualificados y evaluación de conformidad', topics: ['A1-80', 'A2-I-6']},
  1500: {doc: 'privacy', detail: 'análisis y gestión de riesgos de tratamientos y herramientas de ayuda al cumplimiento del RGPD', topics: ['A1-27', 'A2-I-7']}
};
for (const change of log.cambios) {
  const question = bank.preguntas.find(item => item.id === change.id);
  const row = mapping[change.id];
  const doc = docs[row?.doc];
  if (!question?.revision || !row || !doc) throw new Error(`Falta revisión o cotejo académico para ${change.id}`);
  const codes = row.topics.join('/');
  const source = {url: doc.url, referencia: `${doc.label}; ${row.detail}; correspondencia ${codes}, contrastada con revision/temario-oficial.json y BOE-A-2025-25938/BOE-A-2025-26262`};
  const note = `Cotejo curricular: ${doc.label}, ${row.detail}; temas oficiales ${codes} (revision/temario-oficial.json; BOE-A-2025-25938 y BOE-A-2025-26262). El material de academia sirve para encaje temático, no sustituye la fuente técnica o normativa primaria.`;
  question.clasificacion.bloque_academia = `${doc.label}, ${row.detail}; correspondencia ${codes}.`;
  question.clasificacion.nota = note;
  if (!question.revision.observaciones.includes(note)) question.revision.observaciones += ` ${note}`;
  question.comentarios = question.revision.observaciones;
  if (!question.revision.fuentes.some(item => item.url === doc.url)) question.revision.fuentes.push(source);
  change.actualizada = structuredClone(question);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo de ITIC Academy y temario oficial añadido a los IDs 1496–1500.');
