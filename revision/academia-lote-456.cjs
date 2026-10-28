const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-456.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const academy = {
  url: 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',
  label: 'ITIC Academy, Bloque 39 Calidad y Mantenimiento, edición 2026.1 (23-09-2026): A1 96/98/99 y A2 D7/D13; modelos de calidad, McCall, métricas, productividad y pruebas.'
};
const mapping = {
  2591: {topics: ['A1-98', 'A1-99', 'A2-III-13'], detail: 'El bloque aborda productividad y métricas de software, pero no establece una jerarquía universal de criterios para medir productividad en orientación a objetos; el reactivo sigue pendiente.'},
  2592: {topics: ['A1-98', 'A2-III-13'], detail: 'El bloque aborda coste/calidad y modelos históricos, pero no identifica “teoría libre”; la posible referencia a Crosby no basta para validar una de las opciones.'},
  2593: {topics: ['A1-98', 'A2-III-13'], detail: 'El bloque presenta McCall como modelo histórico y lo compara con SQuaRE; la agrupación concreta product transition se contrasta con el informe original de McCall et al.'},
  2594: {topics: ['A1-96', 'A1-98', 'A2-III-13'], detail: 'El bloque incluye factores históricos de calidad y pruebas; el significado de testability se contrasta con McCall et al. (1977), no se infiere de la mera presencia curricular.'},
  2595: {topics: ['A1-98', 'A2-III-13'], detail: 'El bloque incluye Halstead y métricas de complejidad; operadores/operandos y las magnitudes derivadas se verifican de forma independiente con NIST SP 500-234.'}
};

assert.equal(log.cambios.length, 5);
for (const change of log.cambios) {
  const row = mapping[change.id];
  const q = bank.preguntas.find(item => item.id === change.id);
  assert.ok(row && q?.revision, `Falta el cotejo curricular de ${change.id}`);
  for (const topic of [...row.topics, ...q.clasificacion.A1, ...q.clasificacion.A2]) assert.ok(official.has(topic), `Tema oficial inexistente: ${topic}`);
  q.clasificacion.A1 = row.topics.filter(topic => topic.startsWith('A1-'));
  q.clasificacion.A2 = row.topics.filter(topic => topic.startsWith('A2-'));
  const note = `Cotejo curricular: ${academy.label} ${row.detail} Correspondencias contrastadas con revision/temario-oficial.json y convocatorias A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262. ITIC Academy aporta encuadre curricular, no sustituye las fuentes técnicas primarias.`;
  q.clasificacion.bloque_academia = academy.label;
  q.clasificacion.nota = note;
  q.revision.observaciones = `${q.revision.observaciones} ${note}`.trim();
  q.comentarios = q.revision.observaciones;
  if (!q.revision.fuentes.some(item => item.url === academy.url)) q.revision.fuentes.push({url: academy.url, referencia: `${academy.label} ${row.detail}`});
  change.actualizada = structuredClone(q);
}

fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), `${JSON.stringify(bank, null, 2)}\n`);
fs.writeFileSync(logPath, `${JSON.stringify(log, null, 2)}\n`);
console.log('Cotejo curricular ITIC Academy, temario oficial y convocatorias añadido para 2591–2595.');
