const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1417.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  7386: [{
    url: 'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 43 Protocolos, edición 2026',
    detail: 'Cotejo curricular con el bloque de protocolos y capas; se distingue expresamente la función de IP de la de TCP según RFC 791 y RFC 9293.'
  }],
  7387: [{
    url: 'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 43 Protocolos, edición 2026',
    detail: 'Cotejo curricular de protocolos de red y servicios; el estado de las generaciones NFS se resuelve con sus especificaciones RFC, no con un recuento pedagógico de instalaciones existentes.'
  }],
  7388: [{
    url: 'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 46 Redes inalámbricas, edición 2026',
    detail: 'Cotejo curricular de comunicaciones móviles; la continuidad de conexión al cambiar de celda se verifica en ETSI/3GPP TS 23.009 vigente.'
  }],
  7389: [{
    kind: 'convocatoria',
    url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',
    title: 'Convocatoria oficial A1 GSI 2025, tema 128',
    detail: 'Cotejo con el tema oficial de continuidad del negocio. La búsqueda en los materiales ITIC Academy/Drive accesibles no localizó un documento pedagógico que defina específicamente cold sites; la propiedad técnica se fundamenta en NIST SP 800-34 Rev. 1.'
  }],
  7390: [{
    url: 'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 43 Protocolos, edición 2026',
    detail: 'Cotejo curricular con DNS y protocolos de Internet; el tipo de registro AAAA se determina por RFC 3596.'
  }]
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
    const note = `${doc.kind === 'convocatoria' ? 'Cotejo con programa oficial' : 'Cotejo curricular ITIC Academy/Drive'}: ${doc.title}. ${doc.detail}`;
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
console.log('Cotejo curricular registrado para 7386–7390.');
