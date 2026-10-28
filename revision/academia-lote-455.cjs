const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-455.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const doc = {
  url: 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',
  label: 'ITIC Academy, Bloque 39 Calidad y Mantenimiento, edición 2026.1 (23-09-2026): A1 96/98/103 y A2 D7/D13; SQuaRE, ISO/IEC 25010:2023, EFQM 2025, métricas de producto/proceso, McCall, FPA/COSMIC y estrategia de pruebas.'
};
const mapping = {
  2586: {topics: ['A1-98', 'A2-III-13'], detail: 'El material actual sitúa SQuaRE y sus divisiones dentro de modelos/normas de calidad; la función diferenciada de las divisiones de requisitos y evaluación se contrasta con ISO/IEC 25000 y JTC 1/SC 7.'},
  2587: {topics: ['A1-98', 'A2-III-13'], detail: 'El bloque trata ISO/IEC 25010:2023, medidas de calidad y evaluación; esa edición actual establece que el modelo apoya la evaluación a lo largo del ciclo de vida.'},
  2588: {topics: ['A1-98', 'A1-99', 'A2-III-13'], detail: 'El bloque 39 incluye Halstead/McCabe, métricas de calidad, FPA/COSMIC y medición funcional; Boehm/COCOMO se comprueba en su fuente específica y se distingue tamaño de productividad.'},
  2589: {topics: ['A1-98', 'A1-99', 'A2-III-13', 'A2-II-15'], detail: 'El bloque 39 incluye medición funcional FPA/COSMIC; el tema oficial de estimación permite ubicar el uso del tamaño funcional como base de estimación. El origen IFPUG se comprueba directamente con la historia de IFPUG.'},
  2590: {topics: ['A1-98', 'A2-III-13'], detail: 'El bloque actualizado cubre ISO/IEC 25010:2023 como modelo actual de calidad; la pregunta usa la subcaracterística de compatibilidad definida en esa edición.'}
};

assert.equal(log.cambios.length, 5);
for (const change of log.cambios) {
  const row = mapping[change.id];
  const q = bank.preguntas.find(item => item.id === change.id);
  assert.ok(row && q?.revision, `Falta el cotejo curricular de ${change.id}`);
  for (const topic of [...row.topics, ...q.clasificacion.A1, ...q.clasificacion.A2]) assert.ok(official.has(topic), `Tema oficial inexistente: ${topic}`);
  q.clasificacion.A1 = row.topics.filter(topic => topic.startsWith('A1-'));
  q.clasificacion.A2 = row.topics.filter(topic => topic.startsWith('A2-'));
  const note = `Cotejo curricular: ${doc.label} ${row.detail} Correspondencias contrastadas con revision/temario-oficial.json y convocatorias A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262. ITIC Academy aporta contexto curricular, no sustituye las fuentes técnicas primarias citadas.`;
  q.clasificacion.bloque_academia = doc.label;
  q.clasificacion.nota = note;
  q.revision.observaciones = `${q.revision.observaciones} ${note}`.trim();
  q.comentarios = q.revision.observaciones;
  for (const source of [{url: doc.url, referencia: `${doc.label} ${row.detail}`}]) {
    if (!q.revision.fuentes.some(item => item.url === source.url)) q.revision.fuentes.push(source);
  }
  change.actualizada = structuredClone(q);
}

fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), `${JSON.stringify(bank, null, 2)}\n`);
fs.writeFileSync(logPath, `${JSON.stringify(log, null, 2)}\n`);
console.log('Cotejo curricular ITIC Academy, temario y convocatorias añadido para 2586–2590.');
