const fs = require('node:fs');
const path = require('node:path');
const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-459.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const academy = {
  url: 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',
  label: 'ITIC Academy, Bloque 39 Calidad y Mantenimiento, edición 2026.1 (23-09-2026): contenido oficial del bloque A1-96/98/103 y A2-D7/D13; incluye métricas y modelos de calidad, McCall, EFQM 2025, garantía de calidad y procesos de prueba.'
};
const mapping = {
  2606: {topics: ['A1-96', 'A1-98', 'A2-III-7', 'A2-III-13'], detail: 'El temario cubre garantía de calidad y modelos/métricas; se usa solo como encaje curricular. El método concreto del PGGC y sus escalas proceden del manual oficial de 1991 enlazado en la ficha.'},
  2607: {topics: ['A1-98', 'A2-III-13'], detail: 'El bloque incluye el modelo histórico de McCall y métricas de calidad; la jerarquía concreta factores–criterios–métricas se comprueba con el informe original y referencias técnicas.'},
  2608: {topics: ['A1-96', 'A1-98', 'A2-III-7', 'A2-III-13'], detail: 'El bloque aborda garantía y planificación de calidad/pruebas; el procedimiento de foco e intensidades se verifica en el manual oficial PGGC de 1991.'},
  2609: {topics: ['A1-103', 'A2-III-13'], detail: 'El documento cubre calidad organizativa y presenta EFQM 2025; las ponderaciones solicitadas pertenecen expresamente al modelo EFQM 2003 y se contrastan con su scorebook histórico, no con el modelo actual.'},
  2610: {topics: ['A1-98', 'A2-III-13'], detail: 'El bloque incluye McCall como modelo clásico; se usa como contexto curricular y la definición de mantenibilidad se contrasta con el informe original de McCall et al.'}
};
for (const change of log.cambios) {
  const row = mapping[change.id];
  const q = bank.preguntas.find(item => item.id === change.id);
  if (!row || !q?.revision) throw new Error(`Falta cotejo o revisión de ${change.id}`);
  for (const topic of [...row.topics, ...q.clasificacion.A1, ...q.clasificacion.A2]) {
    if (!official.has(topic)) throw new Error(`Tema oficial inexistente: ${topic}`);
  }
  q.clasificacion.A1 = row.topics.filter(topic => topic.startsWith('A1-'));
  q.clasificacion.A2 = row.topics.filter(topic => topic.startsWith('A2-'));
  q.clasificacion.bloque_academia = academy.label;
  const note = `Cotejo curricular: ${academy.label} ${row.detail} Correspondencias contrastadas con revision/temario-oficial.json y los anexos de las convocatorias A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262. La academia sirve de encaje temático, no sustituye la fuente primaria; el PGGC 1991, McCall 1977 y EFQM 2003 se etiquetan como referencias históricas.`;
  q.clasificacion.nota = `${q.revision.observaciones} ${note}`.trim();
  q.revision.observaciones = `${q.revision.observaciones} ${note}`.trim();
  q.comentarios = q.revision.observaciones;
  if (!q.revision.fuentes.some(item => item.url === academy.url)) q.revision.fuentes.push({url: academy.url, referencia: `${academy.label} ${row.detail}`});
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, `${JSON.stringify(bank, null, 2)}\n`);
fs.writeFileSync(logPath, `${JSON.stringify(log, null, 2)}\n`);
console.log('Cotejo curricular ITIC Academy, temario oficial y convocatorias añadido para 2606–2610.');

