const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1409.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  7346: {
    url: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',
    title: 'ITIC Academy, bloque Seguridad, Criptografía, Identificación y Firma, versión 2026',
    detail: 'El bloque incluye A1-81 (PKI, smart cards y DNIe) y A2-I-6 (identidad y firma electrónica); se coteja el funcionamiento de AV/AC con el portal oficial DNIe, que conserva nomenclatura heredada para algunos prestadores.'
  },
  7347: {
    url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 30 Tecnologías de sistemas de información, edición 2026',
    detail: 'El temario incorpora A1-85 (blockchain, redes y consenso); sirve para ubicar el concepto de criptoactivos, pero no respalda que Bittrex siga operativa. La respuesta se etiqueta histórica por el cierre acreditado en fuente corporativa/judicial.'
  },
  7348: {
    url: 'https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 15 Metodologías Ágiles y Modelos de Ciclo de Vida, edición 2026',
    detail: 'El bloque desarrolla el modelo en espiral y su carácter iterativo y guiado por riesgos; se contrasta la secuencia con la descripción original de Boehm/NASA y se clasifica en A1-86/A2-III-1 y A2-III-2.'
  },
  7349: {
    url: 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 38 Análisis, Diseño y Construcción de Sistemas de Información, edición 2026',
    detail: 'El apartado 5 de análisis estructurado describe el DFD: procesos, flujos de datos, almacenes y entidades externas; corresponde a A1-88/A2-III-3.'
  },
  7350: {
    url: 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 38 Análisis, Diseño y Construcción de Sistemas de Información, edición 2026',
    detail: 'El programa vincula la estrategia de determinación de requisitos y su especificación con A2-III-3; las tres formulaciones históricas atribuidas a Pressman se localizan por separado en su manual de ingeniería del software.'
  }
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
assert.equal(log.cambios.length, 5);
for (const change of log.cambios) {
  const q = bank.preguntas.find(x => x.id === change.id);
  assert.ok(q?.revision, 'Falta revisión ' + change.id);
  for (const id of [...q.clasificacion.A1, ...q.clasificacion.A2]) assert.ok(official.has(id), 'Tema oficial inválido: ' + id);
  const doc = docs[change.id];
  const note = 'Cotejo curricular ITIC Academy/Drive: ' + doc.title + '. ' + doc.detail;
  q.clasificacion.bloque_academia = note;
  q.clasificacion.nota = (q.clasificacion.nota + ' ' + note).trim();
  q.comentarios = (q.comentarios + ' ' + note).trim();
  q.revision.observaciones = (q.revision.observaciones + ' ' + note).trim();
  q.revision.fuentes.push({ url: doc.url, referencia: doc.title + '; cotejo: ' + doc.detail });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo Academy/Drive registrado para 7346–7350 con clasificación A1/A2 oficial.');
