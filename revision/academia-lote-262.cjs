const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-262.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  technology: {url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', label: 'ITIC Academy, bloque 30 Tecnologías de Sistemas de la Información, versión 2026.1 (31-08-2026)'},
  hardware: {url: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk', label: 'ITIC Academy, bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1 (31-08-2026)'},
  images: {url: 'https://drive.google.com/file/d/1xTMCpPmwNi8hpb0nZ3sMqpgvrhLXT-yf/view?usp=drivesdk', label: 'ITIC Academy, bloque 37 Imágenes, OCR, biometría y gestión de contenidos, versión 2026.1 (18-09-2026)'}
};
const mapping = {
  1626: {docs: ['technology'], detail: 'el bloque sitúa lenguajes de servidor y desarrollo web; el programa A1 contempla expresamente PHP en A1-68', topics: ['A1-68']},
  1627: {docs: ['hardware'], detail: 'el bloque cubre almacenamiento, copias de seguridad y sus estrategias; A2-IV-3 menciona procedimientos de backup y recuperación', topics: ['A1-56', 'A2-IV-3']},
  1628: {docs: ['technology'], detail: 'el bloque trata tecnologías y lenguajes web; el encaje oficial específico de PHP es A1-68', topics: ['A1-68']},
  1629: {docs: ['technology'], detail: 'el bloque aborda herramientas de desarrollo web; Sass, Less y Stylus encajan en lenguajes/herramientas para redes globales y CSS (A1-77)', topics: ['A1-77']},
  1630: {docs: ['images'], detail: 'el bloque 37 trata tecnologías de digitalización y tratamiento de imágenes; el programa A1 recoge expresamente el tratamiento de imágenes en A1-83', topics: ['A1-83']}
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
for (const change of log.cambios) {
  const question = bank.preguntas.find(item => item.id === change.id);
  const row = mapping[change.id];
  assert.ok(question?.revision && row, `Falta revisión o cotejo académico para ${change.id}`);
  for (const topic of [...question.clasificacion.A1, ...question.clasificacion.A2, ...row.topics]) assert.ok(official.has(topic), `Tema oficial inexistente: ${topic}`);
  const refs = row.docs.map(key => ({url: docs[key].url, referencia: `${docs[key].label}; ${row.detail}. Correspondencia oficial cotejada con revision/temario-oficial.json y BOE-A-2025-25938 (A1)/BOE-A-2025-26262 (A2).`}));
  const curriculum = row.docs.map(key => docs[key].label).join('; ');
  const note = `Cotejo curricular: ${curriculum}; ${row.detail}. Correspondencia ${row.topics.join(', ')} contrastada con revision/temario-oficial.json y BOE-A-2025-25938/BOE-A-2025-26262. La academia orienta la clasificación; no sustituye las fuentes técnicas primarias.`;
  question.clasificacion.bloque_academia = `${curriculum}; ${row.detail}`;
  question.clasificacion.nota = note;
  question.revision.observaciones += ` ${note}`;
  question.comentarios = question.revision.observaciones;
  question.revision.fuentes.push(...refs);
  change.actualizada = structuredClone(question);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo ITIC Academy y temas oficiales añadido para 1626–1630.');
