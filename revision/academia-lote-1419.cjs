const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1419.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  7396: [{ url: 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk', title: 'ITIC Academy, bloque 48 Seguridad de redes y sistemas, edición 2026', detail: 'Cotejo curricular de amenazas y medidas de protección. El material sirve como guía de temario; la definición y el alcance de TEMPEST se contrastan con NIST/NCSC.' }],
  7397: [{ url: 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk', title: 'ITIC Academy, bloque 48 Seguridad de redes y sistemas, edición 2026', detail: 'Cotejo curricular de seguridad de las comunicaciones; se distingue el fenómeno de emanación comprometedor de la disciplina TEMPEST.' }],
  7398: [{ url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', title: 'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información, edición 2026', detail: 'Cotejo curricular de fundamentos de representación y tratamiento de información; se añade el desarrollo posicional para comprobar la respuesta sin depender de una clave de academia.' }],
  7399: [{ url: 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk', title: 'ITIC Academy, bloque 42 Redes, edición 2026', detail: 'Cotejo curricular de VoIP y arquitecturas de comunicación; se contrasta la diferencia entre H.323 y SIP con ITU-T e IETF.' }],
  7400: [{ url: 'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk', title: 'ITIC Academy, bloque 43 Protocolos, edición 2026', detail: 'Cotejo curricular del modelo OSI y los protocolos; la función de PDU, procedimientos y primitivas se verifica en recomendaciones ITU-T.' }]
};

const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
assert.equal(log.cambios.length, 5);
for (const change of log.cambios) {
  const q = bank.preguntas.find(x => x.id === change.id);
  assert.ok(q?.revision, 'Falta revisión ' + change.id);
  for (const id of [...q.clasificacion.A1, ...q.clasificacion.A2]) assert.ok(official.has(id), 'Tema oficial inválido: ' + id);
  const notes = docs[change.id];
  assert.ok(notes?.length, 'Falta cotejo curricular ' + change.id);
  for (const doc of notes) {
    const note = `Cotejo curricular ITIC Academy/Drive: ${doc.title}. ${doc.detail}`;
    q.revision.fuentes.push({ url: doc.url, referencia: note });
    q.clasificacion.nota = (q.clasificacion.nota + ' ' + note).trim();
    q.comentarios = (q.comentarios + ' ' + note).trim();
    q.revision.observaciones = (q.revision.observaciones + ' ' + note).trim();
  }
  q.clasificacion.bloque_academia = notes.map(x => `${x.title}: ${x.detail}`).join(' ');
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo Academy/Drive registrado para 7396–7400 con temas A1/A2 oficiales.');
