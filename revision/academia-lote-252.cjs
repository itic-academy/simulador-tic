const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-252.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  so: {url: 'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk', label: 'ITIC Academy, bloque Sistemas Operativos, versión 2026.1 (14-08-2026)'},
  tecnologia: {url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', label: 'ITIC Academy, bloque 30 Tecnologías de Sistemas de la Información, versión 2026.1 (31-08-2026)'},
  seguridad: {url: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk', label: 'ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma, versión 2026.1 (17-09-2026)'},
  sig: {url: 'https://docs.google.com/document/d/147Tmzz9NHqZP1bi6gk7yNGGGNsIk0Pdd/edit?usp=drivesdk', label: 'ITIC Academy, bloque E-Learning y Sistemas de Información Geográfica, versión 2026.1 (31-07-2026)'}
};
const mapping = {
  1576: {docs: ['so'], detail: 'el temario incluye iOS y sistemas operativos móviles (A1-62/A2-II-2); se contrasta el sistema de archivos del dispositivo con Apple Platform Security', topics: ['A1-62', 'A2-II-2']},
  1577: {docs: ['tecnologia'], detail: 'el bloque incluye desarrollo web y especificación/documentación de servicios web (A1-65/A2-III-12); OpenAPI delimita el campo normativo de versión', topics: ['A1-65', 'A2-III-12']},
  1578: {docs: ['seguridad'], detail: 'el temario trata cifrado, función hash y seguridad criptográfica (A1-79); la naturaleza y limitación del test de rachas se verifica directamente con NIST', topics: ['A1-79']},
  1579: {docs: ['sig'], detail: 'el bloque aborda los sistemas de información geográfica e INSPIRE; la transposición española y la coordinación institucional se comprueban en LISIGE/BOE', topics: ['A1-74']},
  1580: {docs: ['tecnologia'], detail: 'el bloque cubre el entorno Java y la arquitectura Java EE/Jakarta EE, incluidos servidores y configuración web; la opción concreta de Tomcat se trata con su documentación oficial de versión', topics: ['A1-67', 'A2-III-10', 'A2-III-12']}
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
for (const change of log.cambios) {
  const question = bank.preguntas.find(item => item.id === change.id);
  const row = mapping[change.id];
  assert.ok(question?.revision && row, `Falta revisión o cotejo académico para ${change.id}`);
  for (const topic of [...question.clasificacion.A1, ...question.clasificacion.A2]) assert.ok(official.has(topic), `Tema oficial inexistente: ${topic}`);
  for (const topic of row.topics) assert.ok(official.has(topic), `Cotejo oficial inexistente: ${topic}`);
  const refs = row.docs.map(key => ({url: docs[key].url, referencia: `${docs[key].label}; ${row.detail}. Correspondencia oficial cotejada con revision/temario-oficial.json y BOE-A-2025-25938/BOE-A-2025-26262.`}));
  const curriculum = row.docs.map(key => docs[key].label).join('; ');
  const note = `Cotejo curricular: ${curriculum}; ${row.detail}. Correspondencia con ${row.topics.join(', ')} contrastada con revision/temario-oficial.json y las convocatorias BOE-A-2025-25938/BOE-A-2025-26262. La academia orienta la clasificación; las fuentes primarias técnicas y jurídicas sustentan las respuestas.`;
  question.clasificacion.bloque_academia = `${curriculum}; ${row.detail}`;
  question.clasificacion.nota = note;
  question.revision.observaciones += ` ${note}`;
  question.comentarios = question.revision.observaciones;
  question.revision.fuentes.push(...refs);
  change.actualizada = structuredClone(question);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo ITIC Academy y temas oficiales añadido para 1576–1580.');
