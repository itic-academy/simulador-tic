const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-259.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  networks: {url: 'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk', label: 'ITIC Academy, bloque 46 Redes inalámbricas y comunicaciones móviles, versión 2026.1 (30-09-2026)'},
  hardware: {url: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk', label: 'ITIC Academy, bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1 (31-08-2026)'},
  identity: {url: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk', label: 'ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma, versión 2026.1 (17-09-2026)'},
  technology: {url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', label: 'ITIC Academy, bloque 30 Tecnologías de Sistemas de la Información, versión 2026.1 (31-08-2026)'}
};
const mapping = {
  1611: {docs: ['networks'], detail: 'el bloque incluye redes por satélite y sistemas de navegación; el mensaje NAV y sus parámetros se contrastan con la especificación oficial GPS SPS (A1-108/A1-114 y A2-IV-11)', topics: ['A1-108', 'A1-114', 'A2-IV-11']},
  1612: {docs: ['hardware'], detail: 'el bloque desarrolla arquitectura de computadores y sistemas de altas prestaciones (A1-52/A2-II-1); la taxonomía se contrasta con Flynn y el informe NASA sobre los límites clasificatorios de ciertos pipelines', topics: ['A1-52', 'A2-II-1']},
  1613: {docs: ['identity'], detail: 'el bloque incluye certificados, DNI electrónico y mecanismos de identificación electrónica (A1-80/A1-81/A2-I-6); se contrasta con la documentación de interfaz dual de Policía Nacional', topics: ['A1-80', 'A1-81', 'A2-I-6']},
  1614: {docs: ['technology'], detail: 'el bloque cubre Java y desarrollo de software; la terminología se comprueba con la Java Language Specification (A1-67/A2-III-10)', topics: ['A1-67', 'A2-III-10']},
  1615: {docs: ['identity'], detail: 'el bloque de PKI, certificados y servicios de validación orienta la clasificación de OCSP (A1-80/A1-81/A2-I-6); RFC 6960 determina su semántica exacta', topics: ['A1-80', 'A1-81', 'A2-I-6']}
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
for (const change of log.cambios) {
  const question = bank.preguntas.find(item => item.id === change.id);
  const row = mapping[change.id];
  assert.ok(question?.revision && row, `Falta revisión o cotejo académico para ${change.id}`);
  for (const topic of [...question.clasificacion.A1, ...question.clasificacion.A2, ...row.topics]) assert.ok(official.has(topic), `Tema oficial inexistente: ${topic}`);
  const refs = row.docs.map(key => ({url: docs[key].url, referencia: `${docs[key].label}; ${row.detail}. Correspondencia oficial contrastada con revision/temario-oficial.json y los programas BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2).`}));
  const curriculum = row.docs.map(key => docs[key].label).join('; ');
  const note = `Cotejo curricular: ${curriculum}; ${row.detail}. Correspondencia con ${row.topics.join(', ')} contrastada con revision/temario-oficial.json y BOE-A-2025-25938/BOE-A-2025-26262. El temario de academia orienta la clasificación; las fuentes primarias determinan las respuestas.`;
  question.clasificacion.bloque_academia = `${curriculum}; ${row.detail}`;
  question.clasificacion.nota = note;
  question.revision.observaciones += ` ${note}`;
  question.comentarios = question.revision.observaciones;
  question.revision.fuentes.push(...refs);
  change.actualizada = structuredClone(question);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo ITIC Academy y temas oficiales añadido para 1611–1615.');
