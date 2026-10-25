const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-249.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  datos: {url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', label: 'ITIC Academy, bloque 29 Bases de Datos, SQL y Modelado de Datos, versión 2026.1 (31-08-2026)'},
  elearning: {url: 'https://drive.google.com/file/d/147Tmzz9NHqZP1bi6gk7yNGGGNsIk0Pdd/view?usp=drivesdk', label: 'ITIC Academy, bloque 33 E-Learning y Sistemas de Información Geográfica, versión 2026.1 (31-07-2026)'},
  redes: {url: 'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk', label: 'ITIC Academy, bloque 46 Redes inalámbricas y comunicaciones móviles, versión 2026.1 (30-09-2026)'},
  imagen: {url: 'https://docs.google.com/document/d/1hv1jJNaZpGO7UTq596MuGzILT8WTpWQW/edit', label: 'ITIC Academy, bloque 37 Imágenes, OCR, biometría y gestión de contenidos, versión 2026.1 (18-09-2026)'}
};
const mapping = {
  1561: {docs: ['datos'], detail: 'el bloque desarrolla almacenes de datos, OLAP, dimensiones, jerarquías geográficas y operaciones de exploración; el enunciado pregunta por bajar del agregado nacional al detalle provincial', topics: ['A1-75', 'A2-II-4', 'A2-III-15']},
  1562: {docs: ['elearning'], detail: 'e-learning, LMS y SCORM; la sección curricular identifica Moodle como LMS y los contenidos de interoperabilidad de objetos de aprendizaje', topics: ['A1-69', 'A1-73', 'A2-II-14']},
  1563: {docs: ['datos'], detail: 'el bloque incluye problemas de concurrencia de acceso y mecanismos de resolución, en el temario oficial A2; se distingue nivel de aislamiento de fenómeno de lectura', topics: ['A1-63', 'A1-64', 'A2-III-4']},
  1564: {docs: ['redes'], detail: 'el bloque incluye radio, redes inalámbricas y comunicaciones por satélite; la cifra de altitud se verifica independientemente en GPS.gov', topics: ['A1-108', 'A1-114', 'A2-IV-11']},
  1565: {docs: ['imagen'], detail: 'el bloque aborda imagen ráster, color y compresión; las modalidades concretas de GIF, PNG y JPEG se contrastan con las respectivas especificaciones y referencias técnicas primarias', topics: ['A1-56']}
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
for (const change of log.cambios) {
  const question = bank.preguntas.find(item => item.id === change.id);
  const row = mapping[change.id];
  assert.ok(question?.revision && row, `Falta revisión o cotejo académico para ${change.id}`);
  for (const topic of [...question.clasificacion.A1, ...question.clasificacion.A2]) assert.ok(official.has(topic), `Tema oficial inexistente: ${topic}`);
  for (const topic of row.topics) assert.ok(official.has(topic), `Cotejo oficial inexistente: ${topic}`);
  const refs = row.docs.map(key => ({url: docs[key].url, referencia: `${docs[key].label}; ${row.detail}. Correspondencia oficial cotejada con revision/temario-oficial.json y los programas BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2).`}));
  const curriculum = row.docs.map(key => docs[key].label).join('; ');
  const note = `Cotejo curricular: ${curriculum}; ${row.detail} Correspondencia con ${row.topics.join(', ')} verificada en revision/temario-oficial.json y las convocatorias BOE-A-2025-25938/BOE-A-2025-26262. La academia orienta el encaje curricular; las fuentes técnicas o normativas primarias de la ficha sustentan la respuesta.`;
  question.clasificacion.bloque_academia = `${curriculum}; ${row.detail}`;
  question.clasificacion.nota = note;
  question.revision.observaciones += ` ${note}`;
  question.comentarios = question.revision.observaciones;
  question.revision.fuentes.push(...refs);
  change.actualizada = structuredClone(question);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo ITIC Academy y temas oficiales añadido para 1561–1565.');
