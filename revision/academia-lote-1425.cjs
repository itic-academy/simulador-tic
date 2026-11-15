const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1425.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  7426: [{ url: 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk', title: 'ITIC Academy, bloque 42 Redes, edición 2026', detail: 'Correspondencia temática con redes de acceso y conmutación. La búsqueda específica de ATM no localizó una explicación literal de la estructura de celda de 53 octetos; se contrasta con ITU-T I.361.' }],
  7427: [{ url: 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk', title: 'ITIC Academy, bloque 42 Redes, edición 2026', detail: 'Correspondencia con redes y gestión de protocolos. La búsqueda específica del término GetBulk no localizó una sección literal; las versiones y PDU se verifican con RFC del IETF.' }],
  7428: [{ url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262', title: 'Convocatoria oficial A2 GSI 2025, BOE-A-2025-26262', detail: 'La convocatoria incluye en el programa oficial la operación y mantenimiento de sistemas, continuidad y disponibilidad; se consigna esa relación temática. La búsqueda en los materiales Academy accesibles no localizó un tema específico de MTBF o sistemas en serie.' }],
  7429: [{ url: 'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk', title: 'ITIC Academy, bloque 46 Redes inalámbricas y comunicaciones móviles, edición 2026', detail: 'Correspondencia temática con radiocomunicaciones y espectro. Las búsquedas específicas de Ku/Ka no localizaron sección literal sobre bandas satelitales; capacidad y atenuación se contrastan con NASA, ESA e ITU-R.' }],
  7430: [{ url: 'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk', title: 'ITIC Academy, bloque 43 Protocolos, edición 2026', detail: 'Correspondencia curricular directa con IPv6 y protocolos de Internet; RFC 4291 precisa el tamaño de 128 bits y la arquitectura de direccionamiento.' }]
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
console.log('Cotejo Academy/convocatoria y programas oficiales registrado para 7426–7430.');
