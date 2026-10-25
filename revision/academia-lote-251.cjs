const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-251.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  bi: {url: 'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk', label: 'ITIC Academy, bloque Business Intelligence y Big Data, versión 2026.1 (16-09-2026)'},
  tech: {url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', label: 'ITIC Academy, bloque 30 Tecnologías de Sistemas de la Información, versión 2026.1 (31-08-2026)'},
  bbdd: {url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', label: 'ITIC Academy, bloque 29 Bases de Datos, SQL y Modelado de Datos, versión 2026.1 (31-08-2026)'},
  seguridad: {url: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk', label: 'ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma, versión 2026.1 (17-09-2026)'}
};
const mapping = {
  1571: {docs: ['bi'], detail: 'el bloque cubre tecnologías de explotación de datos (A1-75), inteligencia de negocios (A2-II-4), Big Data y entornos Hadoop o similares (A2-III-15); el temario sitúa el producto, mientras la documentación del fabricante acredita sus funciones actuales', topics: ['A1-75', 'A2-II-4', 'A2-III-15']},
  1572: {docs: ['tech'], detail: 'el bloque incluye los entornos Microsoft .NET (A1-66 y A2-III-11); la clasificación como código abierto y el alcance de MIT frente a las licencias de distribución se apoyan en las fuentes oficiales del proyecto', topics: ['A1-66', 'A1-69', 'A2-II-14', 'A2-III-11']},
  1573: {docs: ['bbdd'], detail: 'el bloque desarrolla claves, modelo relacional, SQL y normalización; la ficha delimita clave primaria y clave foránea con apoyo en la documentación del SGBD', topics: ['A1-64', 'A2-II-5', 'A2-III-4']},
  1574: {docs: ['tech'], detail: 'el bloque recoge el entorno de desarrollo Java (A1-67) y la arquitectura Java EE/Jakarta EE (A2-III-10); la especificación JVM determina el término y el papel exactos del heap', topics: ['A1-67', 'A2-III-10']},
  1575: {docs: ['seguridad'], detail: 'el bloque desarrolla certificados, PKI, identificación y firma electrónica; la definición de autoridad certificadora se verifica en las fuentes primarias IETF', topics: ['A1-80', 'A1-81', 'A2-I-6']}
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
for (const change of log.cambios) {
  const question = bank.preguntas.find(item => item.id === change.id);
  const row = mapping[change.id];
  assert.ok(question?.revision && row, `Falta revisión o cotejo académico para ${change.id}`);
  for (const topic of [...question.clasificacion.A1, ...question.clasificacion.A2]) assert.ok(official.has(topic), `Tema oficial inexistente: ${topic}`);
  for (const topic of row.topics) assert.ok(official.has(topic), `Cotejo oficial inexistente: ${topic}`);
  const refs = row.docs.map(key => ({url: docs[key].url, referencia: `${docs[key].label}; ${row.detail}. Correspondencia oficial contrastada con revision/temario-oficial.json y los programas BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2).`}));
  const curriculum = row.docs.map(key => docs[key].label).join('; ');
  const note = `Cotejo curricular: ${curriculum}; ${row.detail}. Correspondencia con ${row.topics.join(', ')} contrastada con revision/temario-oficial.json y BOE-A-2025-25938/BOE-A-2025-26262. El temario de academia guía la clasificación; las fuentes técnicas primarias de la ficha acreditan la respuesta.`;
  question.clasificacion.bloque_academia = `${curriculum}; ${row.detail}`;
  question.clasificacion.nota = note;
  question.revision.observaciones += ` ${note}`;
  question.comentarios = question.revision.observaciones;
  question.revision.fuentes.push(...refs);
  change.actualizada = structuredClone(question);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo ITIC Academy y temas oficiales añadido para 1571–1575.');
