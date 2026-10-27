const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-255.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  os: {url: 'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk', label: 'ITIC Academy, bloque 27 Sistemas Operativos, versión 2026.1 (14-08-2026)'},
  tech: {url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', label: 'ITIC Academy, bloque 30 Tecnologías de Sistemas de la Información, versión 2026.1 (31-08-2026)'},
  data: {url: 'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk', label: 'ITIC Academy, bloque 34 Business Intelligence y Big Data, versión 2026.1 (16-09-2026)'}
};
const mapping = {
  1591: {docs: ['os'], detail: 'el bloque desarrolla Linux/UNIX y las características y administración de sistemas operativos (A1-60 y A2-II-2); Wine se contrasta con la documentación del propio proyecto', topics: ['A1-60', 'A2-II-2']},
  1592: {docs: ['tech'], detail: 'el bloque incluye Java y el desarrollo de aplicaciones Java/Jakarta EE (A1-67, A2-II-3 y A2-III-10); las especificaciones de la JVM, las APIs de concurrencia y las guías de codificación segura determinan el alcance de cada afirmación', topics: ['A1-67', 'A2-II-3', 'A2-III-10']},
  1593: {docs: ['tech'], detail: 'el bloque aborda tecnologías Java y aplicaciones web (A1-67, A2-III-10 y A2-III-12); la documentación oficial JAXP diferencia los modelos de procesamiento de StAX y SAX', topics: ['A1-67', 'A2-III-10', 'A2-III-12']},
  1594: {docs: ['data'], detail: 'el bloque cubre explotación de datos y Big Data (A1-75), inteligencia de negocio y almacenes (A2-II-4) y minería de datos (A2-III-15); las publicaciones de investigación sustentan las áreas Web Mining y Text Mining', topics: ['A1-75', 'A2-II-4', 'A2-III-15']},
  1595: {docs: ['tech'], detail: 'el bloque trata frameworks y desarrollo web de cliente y servidor (A1-65, A2-III-10 y A2-III-12); se registra AngularJS como tecnología histórica conforme a su aviso oficial de fin de soporte', topics: ['A1-65', 'A2-III-10', 'A2-III-12']}
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
for (const change of log.cambios) {
  const question = bank.preguntas.find(item => item.id === change.id);
  const row = mapping[change.id];
  assert.ok(question?.revision && row, `Falta revisión o cotejo académico para ${change.id}`);
  for (const topic of [...question.clasificacion.A1, ...question.clasificacion.A2, ...row.topics]) assert.ok(official.has(topic), `Tema oficial inexistente: ${topic}`);
  const refs = row.docs.map(key => ({url: docs[key].url, referencia: `${docs[key].label}; ${row.detail}. Correspondencia oficial contrastada con revision/temario-oficial.json y los programas BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2).`}));
  const curriculum = row.docs.map(key => docs[key].label).join('; ');
  const note = `Cotejo curricular: ${curriculum}; ${row.detail}. Correspondencia con ${row.topics.join(', ')} contrastada con revision/temario-oficial.json y BOE-A-2025-25938/BOE-A-2025-26262. El temario de academia orienta la clasificación; las fuentes técnicas primarias determinan las respuestas.`;
  question.clasificacion.bloque_academia = `${curriculum}; ${row.detail}`;
  question.clasificacion.nota = note;
  question.revision.observaciones += ` ${note}`;
  question.comentarios = question.revision.observaciones;
  question.revision.fuentes.push(...refs);
  change.actualizada = structuredClone(question);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo ITIC Academy y temas oficiales añadido para 1591–1595.');
