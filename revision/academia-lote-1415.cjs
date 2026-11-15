const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1415.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  7376: [{
    url: 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 42 Redes, edición 2026',
    detail: 'Cotejo con el temario de redes, LAN y medios de transmisión/cableado. El alcance de 100BASE-FX y sus interfaces se comprueba en IEEE 802.3 y en la documentación de mantenimiento de IEEE.'
  }],
  7377: [{
    url: 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 42 Redes, edición 2026',
    detail: 'Cotejo curricular de Ethernet, redes locales y fibra; las condiciones de 1000BASE-LX en SMF/MMF se contrastan con IEEE 802.3 y la instalación condicionada de MMF con documentación técnica del fabricante.'
  }],
  7378: [{
    url: 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 42 Redes, edición 2026',
    detail: 'Cotejo curricular con los apartados de cableado y medios de transmisión; las ventanas y parámetros de fibra se verifican mediante recomendaciones ITU-T actuales.'
  }],
  7379: [{
    url: 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 42 Redes, edición 2026',
    detail: 'Cotejo curricular de redes y medios ópticos. Se distingue la descripción del índice escalonado del material sobre fibras multimodo de índice gradual; los perfiles se contrastan con recomendaciones ITU-T.'
  }],
  7380: [{
    url: 'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 46 Redes inalámbricas, edición 2026',
    detail: 'Cotejo con el tema de comunicaciones móviles y generaciones; la identificación de los objetivos IMT-Advanced y sus velocidades se contrasta con ITU-R, no se toma la academia como fuente de normalización.'
  }]
};

const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
assert.equal(log.cambios.length, 5);
for (const change of log.cambios) {
  const q = bank.preguntas.find(x => x.id === change.id);
  assert.ok(q?.revision, 'Falta revisión ' + change.id);
  for (const id of [...q.clasificacion.A1, ...q.clasificacion.A2]) assert.ok(official.has(id), 'Tema oficial inválido: ' + id);
  const notes = docs[change.id];
  assert.ok(notes?.length, 'Falta cotejo académico ' + change.id);
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
console.log('Cotejo Academy/Drive registrado para 7376–7380 con temas A1/A2 oficiales.');
