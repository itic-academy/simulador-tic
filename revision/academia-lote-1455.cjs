const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const root = path.join(__dirname, '..'), bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8')), log = JSON.parse(fs.readFileSync(path.join(__dirname, 'cambios-lote-1455.json'), 'utf8'));
const itil = 'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk', networks = 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk', protocols = 'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk';
const docs = {
  7576: [{ url: itil, title: 'ITIC Academy, bloque 41: ITIL y COBIT, edición 2026', detail: 'El material coteja la mejora continua y el registro CIR con el tema A1-106; la convocatoria A2 no tiene epígrafe específico de ITIL/mejora continua.' }],
  7577: [{ url: protocols, title: 'ITIC Academy, bloque 43: Protocolos, edición 2026', detail: 'Cotejo de UDP y arquitectura de protocolos con A1-111/115 y A2-T8; se comprueban puerto y ausencia de autenticación en RFC 1350.' }],
  7578: [{ url: networks, title: 'ITIC Academy, bloque 42: Redes, edición 2026', detail: 'Cotejo con A1-110/118 y A2-C6 sobre repetidores y dispositivos de interconexión LAN; la limitación del switch a capa 2 se expresa solo para un switch básico, no multicapa.' }],
  7579: [{ url: protocols, title: 'ITIC Academy, bloque 43: Protocolos, edición 2026', detail: 'Cotejo con A1-111/115 y A2-T8, arquitecturas OSI/TCP-IP y correspondencia funcional de capas.' }],
  7580: [{ url: protocols, title: 'ITIC Academy, bloque 43: Protocolos, edición 2026', detail: 'Cotejo con A1-111 y A2-T8 sobre servicios y capas OSI; la función de transformación de sintaxis se acredita con ITU-T X.216.' }]
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id))), a1url = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', a2url = 'https://www.boe.es/buscar/doc.php?id=BOE-A-2025-26262';
assert.equal(log.cambios.length, 5);
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id); assert.ok(q?.revision, `Falta revisión de ${c.id}`);
  for (const id of [...q.clasificacion.A1, ...q.clasificacion.A2]) assert.ok(official.has(id), `Tema no oficial ${id}`);
  assert.ok(docs[c.id]?.length, `Falta cotejo académico ${c.id}`);
  const prior = q.revision.observaciones.split(' Cotejo curricular:')[0], comments = q.comentarios.split(' Cotejo curricular:')[0];
  q.revision.fuentes = q.revision.fuentes.filter(f => !f.referencia.startsWith('Cotejo curricular:') && !f.referencia.startsWith('Convocatoria oficial Cuerpo Superior TIC, A1,') && !f.referencia.startsWith('Convocatoria oficial Cuerpo de Gestión de Sistemas e Informática, A2,'));
  const notes = [];
  for (const d of docs[c.id]) { const n = `Cotejo curricular: ${d.title}. ${d.detail}`; notes.push(n); q.revision.fuentes.push({ url: d.url, referencia: n }); }
  q.revision.fuentes.push({ url: a1url, referencia: `Convocatoria oficial A1, BOE-A-2025-25938; temas: ${q.clasificacion.A1.join(', ') || 'sin tema A1 específico'}.` }, { url: a2url, referencia: `Convocatoria oficial A2, BOE-A-2025-26262; temas: ${q.clasificacion.A2.join(', ') || 'sin epígrafe A2 específico'}.` });
  q.revision.observaciones = [prior, ...notes].filter(Boolean).join(' Cotejo curricular: ');
  q.comentarios = `${comments} Cotejo curricular: ${notes.map(n => n.replace(/^Cotejo curricular: /, '')).join(' ')}`;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(__dirname, 'cambios-lote-1455.json'), JSON.stringify(log, null, 2) + '\n');
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
console.log('Cotejo académico y convocatorias añadido: cinco registros.');
