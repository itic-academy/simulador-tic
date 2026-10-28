const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-454.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const doc = {
  url: 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',
  label: 'ITIC Academy, Bloque 39 Calidad y Mantenimiento, edición 2026.1 (23-09-2026): A1 96/98/103 y A2 D7/D13; repasa McCall/SQuaRE, ISO/IEC 25010:2023, EFQM 2025, ISO/IEC 330xx, FPA/COSMIC y procesos de prueba.'
};
const mapping = {
  2581: {topics: ['A1-96', 'A2-III-7'], detail: 'El bloque 39 actual y el programa oficial sitúan técnicas y planificación de pruebas en los temas asignados; el término y definición concreta se comprueban en el glosario ISTQB.'},
  2582: {topics: ['A1-96', 'A1-98', 'A2-III-13'], detail: 'El material actual cubre marcos de calidad y procesos; la descripción y amplitud del CMMI se verifican directamente con ISACA/CMMI Institute.'},
  2583: {topics: ['A1-98', 'A2-III-13'], detail: 'El bloque actual presenta el paso del modelo de McCall a SQuaRE; no resuelve la equivalencia cuestionada entre “situaciones no previstas” y fiabilidad. El ítem queda pendiente y visible para revisión.'},
  2584: {topics: ['A1-103', 'A2-III-13'], detail: 'El temario vigente incluye EFQM 2025. El contraste con la edición 2010 del modelo y el recuento histórico de criterios/partes se documenta por separado.'},
  2585: {topics: ['A1-98', 'A1-99', 'A2-II-15', 'A2-III-13'], detail: 'El bloque de calidad actual aporta encuadre general de modelos y métricas, pero no presenta una ley universal de coste exponencial. El enunciado carece de autor/modelo identificable y permanece pendiente.'}
};

assert.equal(log.cambios.length, 5);
for (const change of log.cambios) {
  const row = mapping[change.id];
  const q = bank.preguntas.find(item => item.id === change.id);
  assert.ok(row && q?.revision, `Falta el cotejo curricular de ${change.id}`);
  for (const topic of [...row.topics, ...q.clasificacion.A1, ...q.clasificacion.A2]) assert.ok(official.has(topic), `Tema oficial inexistente: ${topic}`);
  q.clasificacion.A1 = row.topics.filter(topic => topic.startsWith('A1-'));
  q.clasificacion.A2 = row.topics.filter(topic => topic.startsWith('A2-'));
  const note = `Cotejo curricular: ${doc.label} ${row.detail} Correspondencias contrastadas con revision/temario-oficial.json y convocatorias A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262. El material de academia da contexto curricular, no reemplaza las fuentes técnicas primarias; las preguntas ambiguas no se marcan como verificadas.`;
  q.clasificacion.bloque_academia = doc.label;
  q.clasificacion.nota = note;
  q.revision.observaciones = `${q.revision.observaciones} ${note}`.trim();
  q.comentarios = q.revision.observaciones;
  if (!q.revision.fuentes.some(source => source.url === doc.url)) q.revision.fuentes.push({url: doc.url, referencia: `${doc.label} ${row.detail}`});
  change.actualizada = structuredClone(q);
}

fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), `${JSON.stringify(bank, null, 2)}\n`);
fs.writeFileSync(logPath, `${JSON.stringify(log, null, 2)}\n`);
console.log('Cotejo curricular de ITIC Academy, temario y convocatorias añadido para 2581–2585; dudas explicitadas en la interfaz.');
