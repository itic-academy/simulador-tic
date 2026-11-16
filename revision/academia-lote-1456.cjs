const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const root = path.join(__dirname, '..'), bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8')), log = JSON.parse(fs.readFileSync(path.join(__dirname, 'cambios-lote-1456.json'), 'utf8'));
const networks = 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk', hardware = 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk', protocols = 'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk', wireless = 'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk', security = 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk';
const docs = {
  7581: [{ url: protocols, title: 'ITIC Academy, bloque 43: Protocolos, edición 2026', detail: 'Cotejo con A1-115/A2-T8 sobre protocolos IP; el caso se acota a resolución IPv4 sobre Ethernet. La LAN y resolución de enlace se incluyen además en A2-C6.' }, { url: networks, title: 'ITIC Academy, bloque 42: Redes, edición 2026', detail: 'El programa aborda A1-118 y A2-C6, redes locales y sus protocolos/dispositivos.' }],
  7582: [{ url: hardware, title: 'ITIC Academy, bloque 26: Hardware, servidores, CPD, almacenamiento y virtualización, edición 2026', detail: 'Cotejo directo con A1-53 y A2-C6, planificación física/dimensionamiento de CPD y servidores.' }, { url: networks, title: 'ITIC Academy, bloque 42: Redes, edición 2026', detail: 'A1-110/118 y A2-C6 cubren switches, equipos de interconexión y redes de área local.' }],
  7583: [{ url: hardware, title: 'ITIC Academy, bloque 26: Hardware, servidores, CPD, almacenamiento y virtualización, edición 2026', detail: 'Cotejo con A1-53 y A2-C6 sobre arquitectura de CPD, racks, alta disponibilidad y diseño de redes de servidores.' }, { url: networks, title: 'ITIC Academy, bloque 42: Redes, edición 2026', detail: 'Cotejo con A1-110/118 y A2-C6 sobre topologías, switches y conexiones de red local.' }],
  7584: [{ url: wireless, title: 'ITIC Academy, bloque 46: Redes inalámbricas y comunicaciones móviles, edición 2026', detail: 'Cotejo directo con A1-123 y A2-C13, generaciones de tecnologías celulares y comunicaciones móviles; la comparación de tasa teórica se comprueba con ITU-R/ETSI.' }],
  7585: [{ url: security, title: 'ITIC Academy, bloque 48: Seguridad en redes y en el nivel de aplicación, edición 2026', detail: 'Cotejo con A1-125 y A2-T13, herramientas de ciberseguridad y tratamiento/correlación de eventos; las funciones concretas de SIEM se contrastan con NIST.' }]
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id))), a1url = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', a2url = 'https://www.boe.es/buscar/doc.php?id=BOE-A-2025-26262';
assert.equal(log.cambios.length, 5);
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id); assert.ok(q?.revision, `Falta revisión de ${c.id}`);
  for (const id of [...q.clasificacion.A1, ...q.clasificacion.A2]) assert.ok(official.has(id), `Tema no oficial ${id}`);
  assert.ok(docs[c.id]?.length, `Falta cotejo Academy ${c.id}`);
  const prior = q.revision.observaciones.split(' Cotejo curricular:')[0], comments = q.comentarios.split(' Cotejo curricular:')[0];
  q.revision.fuentes = q.revision.fuentes.filter(f => !f.referencia.startsWith('Cotejo curricular:') && !f.referencia.startsWith('Convocatoria oficial Cuerpo Superior TIC, A1,') && !f.referencia.startsWith('Convocatoria oficial Cuerpo de Gestión de Sistemas e Informática, A2,'));
  const notes = [];
  for (const d of docs[c.id]) { const n = `Cotejo curricular: ${d.title}. ${d.detail}`; notes.push(n); q.revision.fuentes.push({ url: d.url, referencia: n }); }
  q.revision.fuentes.push({ url: a1url, referencia: `Convocatoria oficial A1, BOE-A-2025-25938; temas: ${q.clasificacion.A1.join(', ') || 'sin tema A1 específico'}.` }, { url: a2url, referencia: `Convocatoria oficial A2, BOE-A-2025-26262; temas: ${q.clasificacion.A2.join(', ') || 'sin epígrafe A2 específico'}.` });
  q.revision.observaciones = [prior, ...notes].filter(Boolean).join(' Cotejo curricular: ');
  q.comentarios = `${comments} Cotejo curricular: ${notes.map(n => n.replace(/^Cotejo curricular: /, '')).join(' ')}`;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(__dirname, 'cambios-lote-1456.json'), JSON.stringify(log, null, 2) + '\n');
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
console.log('Cotejo académico y convocatorias añadido: cinco registros.');
