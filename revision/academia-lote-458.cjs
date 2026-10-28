const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-458.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const refs = {
  quality: {url: 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk', label: 'ITIC Academy, Bloque 39 Calidad y Mantenimiento, edición 2026.1 (23-09-2026): A1 96/98/99 y A2 D7/D13; incluye fiabilidad, métricas, McCall, Halstead/McCabe y estimación.'},
  dev: {url: 'https://docs.google.com/document/d/1za_7e_LlvUEpja7VJyYelIgRIPu_AbE3/edit?usp=drivesdk&ouid=107088454749630873035&rtpof=true&sd=true', label: 'ITIC Academy, Bloque 38 Análisis, Diseño y Construcción de Sistemas de Información, edición 2026.1 (18-09-2026): integra construcción, integración continua y pruebas.'}
};
const mapping = {
  2601: {topics: ['A1-98', 'A2-III-13'], ref: 'quality', detail: 'El bloque incluye fiabilidad y modelos/métricas de calidad; la atribución específica del modelo Jelinski–Moranda a crecimiento de fiabilidad se verifica con el trabajo original de 1972.'},
  2602: {topics: ['A1-99', 'A2-II-15'], ref: 'quality', detail: 'El bloque cubre COCOMO y métricas/estimación; la cronología COCOMO II.1997 y el uso de Object Points se verifican con el material de USC/Boehm, no por el temario de academia.'},
  2603: {topics: ['A1-96', 'A1-102', 'A2-IV-4'], ref: 'dev', detail: 'El bloque de construcción incorpora integración continua y pruebas; Jenkins se identifica por su documentación oficial como servidor de automatización.'},
  2604: {topics: ['A1-98', 'A2-III-13'], ref: 'quality', detail: 'El bloque incluye métricas de calidad y McCabe; la equivalencia con regiones y la fórmula se contrastan con la referencia técnica NIST.'},
  2605: {topics: ['A1-98', 'A2-III-13'], ref: 'quality', detail: 'El bloque cubre factores de calidad de McCall; la definición de Correctness se contrasta con el informe original de McCall et al.'}
};

assert.equal(log.cambios.length, 5);
for (const change of log.cambios) {
  const row = mapping[change.id];
  const q = bank.preguntas.find(item => item.id === change.id);
  assert.ok(row && q?.revision, `Falta el cotejo curricular de ${change.id}`);
  for (const topic of [...row.topics, ...q.clasificacion.A1, ...q.clasificacion.A2]) assert.ok(official.has(topic), `Tema oficial inexistente: ${topic}`);
  q.clasificacion.A1 = row.topics.filter(topic => topic.startsWith('A1-'));
  q.clasificacion.A2 = row.topics.filter(topic => topic.startsWith('A2-'));
  const doc = refs[row.ref];
  const note = `Cotejo curricular: ${doc.label} ${row.detail} Correspondencias contrastadas con revision/temario-oficial.json y convocatorias A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262. ITIC Academy aporta encuadre académico, no sustituye las fuentes técnicas primarias.`;
  q.clasificacion.bloque_academia = doc.label;
  q.clasificacion.nota = `${q.revision.observaciones} ${note}`.trim();
  q.revision.observaciones = `${q.revision.observaciones} ${note}`.trim();
  q.comentarios = q.revision.observaciones;
  if (!q.revision.fuentes.some(item => item.url === doc.url)) q.revision.fuentes.push({url: doc.url, referencia: `${doc.label} ${row.detail}`});
  change.actualizada = structuredClone(q);
}

fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), `${JSON.stringify(bank, null, 2)}\n`);
fs.writeFileSync(logPath, `${JSON.stringify(log, null, 2)}\n`);
console.log('Cotejo curricular ITIC Academy, temario oficial y convocatorias añadido para 2601–2605.');
