const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1405.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  7326: {
    url: 'https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 50 Videoconferencia, SSO y herramientas de trabajo colaborativo, edición 2026',
    detail: 'La sección 5.1 define groupware como aplicaciones que permiten comunicarse, coordinarse y cooperar sobre un objetivo común; corresponde a A1-133 y A2-II-16.'
  },
  7327: {
    url: 'https://drive.google.com/file/d/1LuUHoQr8oDmptteHIQ72VdCvJFsnu3LF/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información, actualización octubre de 2026',
    detail: 'El bloque de desarrollo y construcción de software permite situar makefile como herramienta técnica de construcción, no como instrumento de dirección. Se clasifica por A1-35/A1-95 y A2-III-2; la función concreta se verifica en el manual GNU.'
  },
  7328: {
    url: 'https://drive.google.com/file/d/1-xmHgvxArWY8GroFD1eSdyPrAQjkBpzo/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 09 Organización y gestión de Sistemas de Información, edición 2026',
    detail: 'El bloque distingue planificación estratégica, información organizativa y sistemas de información actuales. El proceso PSI y sus actividades se verifican directamente en la publicación oficial de MÉTRICA v3.'
  },
  7329: {
    url: 'https://drive.google.com/file/d/1-xmHgvxArWY8GroFD1eSdyPrAQjkBpzo/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 09 Organización y gestión de Sistemas de Información, edición 2026',
    detail: 'La tabla sobre demanda y capacidad diferencia explícitamente demanda (trabajo solicitado, entrada) de productividad/throughput (trabajo útil procesado por unidad de tiempo), cotejo alineado con A1-91/A2-IV-4.'
  },
  7330: {
    url: 'https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 17 Adquisición de sistemas y rentabilidad de inversiones, versión 2026.2',
    detail: 'El bloque incluye A1-42/A1-95 y A2-II-15, reproduce la fórmula ROI de MÉTRICA v3 y distingue el período de amortización/payback como método separado.'
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
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo Academy/Drive registrado para 7326–7330 con clasificación A1/A2 oficial.');
