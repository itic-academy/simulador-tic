const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-256.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  gis: {url: 'https://docs.google.com/document/d/147Tmzz9NHqZP1bi6gk7yNGGGNsIk0Pdd/edit?usp=drivesdk', label: 'ITIC Academy, bloque 33 E-Learning y Sistemas de Información Geográfica, versión 2026.1 (31-07-2026)'},
  hardware: {url: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk', label: 'ITIC Academy, bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1 (31-08-2026)'},
  database: {url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', label: 'ITIC Academy, bloque 29 Bases de Datos, SQL y Modelado de Datos, versión 2026.1 (31-08-2026)'},
  images: {url: 'https://drive.google.com/file/d/1xTMCpPmwNi8hpb0nZ3sMqpgvrhLXT-yf/view?usp=drivesdk', label: 'ITIC Academy, bloque 37 Imágenes, OCR, biometría y gestión de contenidos, versión 2026.1 (18-09-2026)'}
};
const mapping = {
  1596: {docs: ['gis'], detail: 'el bloque desarrolla conceptos y funcionalidad de los sistemas de información geográfica (A1-74); los puntos de control son una técnica dentro de la georreferenciación, como precisa USGS', topics: ['A1-74']},
  1597: {docs: ['hardware'], detail: 'el bloque cubre almacenamiento, copias de seguridad y recuperación (A1-56 y A2-IV-5); Microsoft Learn documenta las dependencias de restauración completa, diferencial e incremental en su producto', topics: ['A1-56', 'A2-IV-5']},
  1598: {docs: ['hardware'], detail: 'el bloque abarca almacenamiento y redundancia de discos (A1-56 y A2-IV-5); documentación de Oracle e IBM compara espejo, paridad y capacidad útil', topics: ['A1-56', 'A2-IV-5']},
  1599: {docs: ['database'], detail: 'el bloque estudia SGBD, modelo relacional y SQL (A1-63/64, A2-II-5 y A2-III-4); PostgreSQL documenta vistas, privilegios y restricciones de acceso', topics: ['A1-63', 'A1-64', 'A2-II-5', 'A2-III-4']},
  1600: {docs: ['images'], detail: 'el bloque trata dispositivos y formatos de información multimedia (A1-56); ISO/IEC 13818-2 es la norma de vídeo MPEG-2 que sustenta la clasificación de imágenes', topics: ['A1-56']}
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
console.log('Cotejo ITIC Academy y temas oficiales añadido para 1596–1600.');
