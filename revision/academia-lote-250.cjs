const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-250.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  bi: {url: 'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk', label: 'ITIC Academy, bloque 34 Business Intelligence y Big Data, versión 2026 (20-09-2026)'},
  soa: {url: 'https://drive.google.com/file/d/1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ/view?usp=drivesdk', label: 'ITIC Academy, bloque 28 Arquitectura SOA y requisitos no funcionales, versión 2026 V2 (26-09-2026)'},
  bbdd: {url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', label: 'ITIC Academy, bloque 29 Bases de Datos, SQL y Modelado de Datos, versión 2026.1 (31-08-2026)'},
  so: {url: 'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk', label: 'ITIC Academy, bloque 27 Sistemas Operativos, versión 2026 actualizado (01-09-2026)'},
  gis: {url: 'https://docs.google.com/document/d/147Tmzz9NHqZP1bi6gk7yNGGGNsIk0Pdd/edit?usp=drivesdk', label: 'ITIC Academy, bloque 33 E-Learning y Sistemas de Información Geográfica, versión 2026.1 (31-07-2026)'}
};
const mapping = {
  1566: {docs: ['bi'], detail: 'el material desarrolla inteligencia de negocio, transformación de datos y apoyo analítico a decisiones; permite distinguir BI de un servidor de aplicaciones', topics: ['A1-75', 'A2-II-4']},
  1567: {docs: ['soa'], detail: 'la sección 2.4 aborda arquitectura de referencia y gobernanza SOA; fija el encaje temático, mientras OASIS aporta la definición del ámbito de gobernanza frente a gestión operativa', topics: ['A1-58', 'A2-II-6']},
  1568: {docs: ['bbdd'], detail: 'el bloque cubre modelo relacional, dependencias funcionales, normalización y formas normales; la clave se ajusta a la definición formal con claves candidatas', topics: ['A1-64', 'A2-II-5', 'A2-III-4']},
  1569: {docs: ['so'], detail: 'el bloque actualizado cubre sistemas operativos y sistemas de archivos, incluidos sus límites, compatibilidad y dependencia de versión', topics: ['A1-59', 'A1-60', 'A1-62', 'A2-II-2', 'A2-IV-1']},
  1570: {docs: ['gis'], detail: 'el apartado SIG incluye interoperabilidad geográfica e INSPIRE/LISIGE; se contrasta la condición legal exacta con el artículo 4 de la Directiva', topics: ['A1-74']}
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
console.log('Cotejo ITIC Academy y temas oficiales añadido para 1566–1570.');
