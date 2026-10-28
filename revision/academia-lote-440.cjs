const fs = require('node:fs');
const path = require('node:path');
const bp = path.join(__dirname, '..', 'preguntas_preparatic.json');
const lp = path.join(__dirname, 'cambios-lote-440.json');
const bank = JSON.parse(fs.readFileSync(bp, 'utf8'));
const log = JSON.parse(fs.readFileSync(lp, 'utf8'));
const programs = JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas;
const valid = new Set(programs.flatMap(p => p.temas.map(t => t.id)));
const calls = [
  'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',
  'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262'
];
const docs = {
  hardware: { url: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk', label: 'ITIC Academy, bloque 26 «Hardware», versión 2026.1 (31-08-2026); incluye A1-56 y virtualización del almacenamiento.' },
  networks: { url: 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk', label: 'ITIC Academy, bloque 42 «Redes», versión 2026.1 (29-09-2026); telecomunicaciones, redes de acceso, servicios y comunicaciones móviles. No se halló un apartado del bloque dedicado específicamente a CAMEL.' },
  data: { url: 'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk', label: 'ITIC Academy, bloque 32 «Inteligencia Artificial y Ciencia de Datos», versión 2026.1; incluye machine learning, clasificación de algoritmos, fundamentos estadísticos y métodos bayesianos.' }
};
const map = {
  2511: { doc: 'hardware', a1: ['A1-56'], a2: ['A2-IV-5'], detail: 'Sistemas de almacenamiento y niveles host, subsistema/cabina y red de la virtualización.' },
  2512: { doc: 'networks', a1: ['A1-112'], a2: ['A2-IV-15'], detail: 'Servicios de red móvil durante itinerancia; CAMEL se contrasta con 3GPP aunque el temario de Academy no desarrolle el mecanismo de forma específica.' },
  2513: { doc: 'data', a1: ['A1-70', 'A1-71'], a2: ['A2-III-15'], detail: 'Machine learning supervisado, clasificación y minería de datos.' },
  2514: { doc: 'networks', a1: ['A1-118'], a2: ['A2-IV-8'], detail: 'Redes locales y métodos de acceso al medio; el bloque Academy trata LAN y protocolos Ethernet, aunque IEEE 802.4 sea una tecnología histórica.' },
  2515: { doc: 'networks', a1: ['A1-117'], a2: ['A2-IV-13'], detail: 'Internet de las cosas, redes de acceso e interconexión de objetos físicos.' }
};
if (log.cambios.map(c => c.id).join(',') !== '2511,2512,2513,2514,2515') throw new Error('IDs del lote 440 inesperados.');
for (const c of log.cambios) {
  const q = bank.preguntas.find(item => item.id === c.id);
  const m = map[c.id], d = docs[m?.doc];
  if (!q?.revision || !d) throw new Error('Falta revisión o mapeo curricular de ' + c.id);
  if (![...m.a1, ...m.a2].every(topic => valid.has(topic))) throw new Error('Tema no oficial para ' + c.id);
  q.clasificacion.A1 = m.a1;
  q.clasificacion.A2 = m.a2;
  const note = `Cotejo curricular: ${d.label} ${m.detail} Documento consultado en Google Drive: ${d.url}. Las correspondencias se verificaron en revision/temario-oficial.json y las convocatorias A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262 (${calls.join('; ')}). Academy encuadra el temario; las fuentes primarias de revision.fuentes fundamentan las respuestas.`;
  q.clasificacion.bloque_academia = d.url;
  q.clasificacion.nota = note;
  q.revision.observaciones = `${c.actualizada.revision.observaciones} ${note}`;
  q.comentarios = q.revision.observaciones;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(lp, JSON.stringify(log, null, 2) + '\n');
fs.writeFileSync(bp, JSON.stringify(bank, null, 2) + '\n');
console.log('Cotejo curricular de 2511–2515 con Drive, temario oficial y convocatorias aplicado.');
