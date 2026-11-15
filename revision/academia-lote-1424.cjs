const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1424.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  7421: [{ url: 'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk', title: 'ITIC Academy, bloque 46 Redes inalámbricas y comunicaciones móviles, edición 2026', detail: 'Cotejo próximo de radiocomunicación, sistemas de acceso inalámbrico y espectro. La búsqueda del término LMDS no localizó una unidad que cubra expresamente este sistema; se marca como correspondencia temática, no como mención literal.' }],
  7422: [{ url: 'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk', title: 'ITIC Academy, bloque 43 Protocolos, edición 2026', detail: 'Cubre protocolos de encaminamiento/MPLS y se complementa con el bloque 42 Redes. Las distinciones terminológicas LSR/LER se verifican en las RFC.' }],
  7423: [{ url: 'https://drive.google.com/file/d/1nXa2jkiUqpu31smkt5D8WswcTgEN7XlB/view?usp=drivesdk', title: 'ITIC Academy, bloque 47 Aplicaciones móviles y sistemas operativos, edición 2026', detail: 'Cotejo temático de aplicaciones móviles nativas y sistemas operativos móviles; la semántica concreta de Activity, Intent y callbacks se verifica en la documentación oficial de Android. La búsqueda de esos términos exactos no localizó una sección Academy explícita.' }],
  7424: [{ url: 'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk', title: 'ITIC Academy, bloque 46 Redes inalámbricas y comunicaciones móviles, edición 2026', detail: 'Cotejo del área de movilidad y comunicaciones celulares; el procedimiento técnico de handover se verifica en ETSI/3GPP.' }],
  7425: [{ url: 'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk', title: 'ITIC Academy, bloque 43 Protocolos, edición 2026', detail: 'Cotejo de pila de protocolos de Internet y servicios de transporte; las propiedades de FTP, NNTP y NTP se contrastan directamente con RFC.' }]
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
    const note = `Cotejo curricular: ${doc.title}. ${doc.detail}`;
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
console.log('Cotejo Academy/Drive y programas oficiales registrado para 7421–7425.');
