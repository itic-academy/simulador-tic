const fs = require('node:fs');
const path = require('node:path');
const cp = require('node:child_process');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const current = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const baseline = '96f1e7ea1c36c0bdc832861bf5ef14aa451f2b51';
const before = JSON.parse(cp.execFileSync('git', ['show', `${baseline}:preguntas_preparatic.json`], {cwd: root, encoding: 'utf8', maxBuffer: 20 * 1024 * 1024}));
const changes = fs.readdirSync(__dirname).filter(n => /^cambios-lote-\d+\.json$/.test(n)).sort().flatMap(n => JSON.parse(fs.readFileSync(path.join(__dirname, n), 'utf8')).cambios);
assert.equal(current.total, before.total);
assert.equal(current.preguntas.length, before.preguntas.length);
const changed = new Map(changes.map(c => [c.id, c]));
assert.equal(changed.size, changes.length, 'Cada pregunta debe figurar una sola vez en los lotes de esta entrega');
for (let i = 0; i < current.preguntas.length; i++) {
  const q = current.preguntas[i];
  const entry = changed.get(q.id);
  if (!entry) assert.deepEqual(q, before.preguntas[i]);
  else {
    assert.deepEqual(entry.original, before.preguntas[i]);
    assert.deepEqual(entry.actualizada, q);
    if (['vigente', 'corregida', 'historica'].includes(q.revision.estado)) assert.ok(q.revision.fuentes.length && q.comentarios);
    else assert.match(q.revision.estado, /^pendiente_/);
  }
}
const vm = require('node:vm');
const context = vm.createContext({document: {addEventListener() {}}});
vm.runInContext(fs.readFileSync(path.join(root, 'app.js'), 'utf8'), context);
assert.match(context.questionTopicLabel(current.preguntas[9]), /A1 · Tema 80/);
assert.match(context.questionTopicLabel(current.preguntas[9]), /A2 · I · Tema 6/);
assert.match(context.questionTopicLabel(current.preguntas[10]), /Pendiente de verificar/);
assert.match(context.questionTopicLabel(current.preguntas[12]), /ambiguo/);
assert.match(context.questionTopicLabel(current.preguntas[24]), /Histórica verificada/);
assert.match(context.questionTopicLabel(current.preguntas.find(q => !q.revision)), /Vigencia sin revisar/);
assert.match(context.questionTopicLabel(current.preguntas[40]), /Bloque de academia pendiente/);
console.log(`Banco válido: ${changed.size} cambios registrados; ${current.preguntas.length - changed.size} preguntas restantes idénticas al original. Etiquetas de interfaz verificadas.`);
