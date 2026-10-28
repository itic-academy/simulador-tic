const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-453.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const doc = {
  url: 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',
  label: 'ITIC Academy, Bloque 39 Calidad y Mantenimiento, edición 2026.1 (23-09-2026), actualización integral de estándares, examen y prácticas: temario A1 96/98/103 y A2 D7/D13; contenidos sobre ISO/IEC 25010:2023, EFQM 2025, ISO/IEC 330xx, pruebas, métricas y medición funcional FPA/COSMIC.'
};
const mapping = {
  2576: {topics: ['A1-103', 'A2-III-13'], detail: 'El bloque 39 vigente incluye el Modelo EFQM, pero estudia la edición 2025; el reactivo se mantiene como histórico para la ponderación del modelo 2003. La comparación entre versiones se resuelve con la publicación EFQM 2003 reproducida y la página actual EFQM Model 2025.'},
  2577: {topics: ['A1-98', 'A2-III-14'], detail: 'El bloque 39 cubre modelos actuales de calidad de producto, incluida ISO/IEC 25010:2023; la clasificación A2-III-14 añade accesibilidad/usabilidad. La definición concreta se atribuye a IEEE 610.12-1990 y se fecha como histórica.'},
  2578: {topics: ['A1-98', 'A1-99', 'A2-III-13', 'A2-II-15'], detail: 'El bloque 39 cubre métricas de calidad y medición funcional FPA/COSMIC; el temario oficial añade estimación de esfuerzo/costes para el uso del tamaño funcional como base de estimaciones. IFPUG determina qué mide directamente la métrica.'},
  2579: {topics: ['A1-96', 'A2-III-7', 'A2-III-13'], detail: 'El bloque 39 incluye planificación, estándares y estrategia de pruebas; la clasificación oficial A2-III-7 trata pruebas y A2-III-13 calidad. El significado exacto de regression se verifica en el glosario ISTQB.'},
  2580: {topics: ['A1-98', 'A2-III-13'], detail: 'El bloque 39 actualizado cubre la familia ISO/IEC 330xx actual y distingue modelos de madurez; la pregunta histórica sobre 15504 se enlaza al antecedente recogido en la página de JTC 1/SC 7 y al marco actual ISO/IEC 33020.'}
};

assert.equal(log.cambios.length, 5);
for (const change of log.cambios) {
  const row = mapping[change.id];
  const q = bank.preguntas.find(item => item.id === change.id);
  assert.ok(row && q?.revision, `Falta el cotejo curricular de ${change.id}`);
  for (const topic of [...row.topics, ...q.clasificacion.A1, ...q.clasificacion.A2]) assert.ok(official.has(topic), `Tema oficial inexistente: ${topic}`);
  q.clasificacion.A1 = row.topics.filter(topic => topic.startsWith('A1-'));
  q.clasificacion.A2 = row.topics.filter(topic => topic.startsWith('A2-'));
  const note = `Cotejo curricular: ${doc.label} ${row.detail} Correspondencias contrastadas con revision/temario-oficial.json y convocatorias A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262. La academia aporta encuadre curricular y no sustituye la evidencia primaria citada en cada respuesta.`;
  q.clasificacion.bloque_academia = doc.label;
  q.clasificacion.nota = note;
  q.revision.observaciones = `${q.revision.observaciones} ${note}`.trim();
  q.comentarios = q.revision.observaciones;
  if (!q.revision.fuentes.some(source => source.url === doc.url)) q.revision.fuentes.push({url: doc.url, referencia: `${doc.label} ${row.detail}`});
  change.actualizada = structuredClone(q);
}

fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), `${JSON.stringify(bank, null, 2)}\n`);
fs.writeFileSync(logPath, `${JSON.stringify(log, null, 2)}\n`);
console.log('Cotejo de ITIC Academy, temario oficial y convocatorias añadido para 2576–2580.');
