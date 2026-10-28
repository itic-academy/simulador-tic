const fs = require('node:fs');
const path = require('node:path');
const bp = path.join(__dirname, '..', 'preguntas_preparatic.json');
const lp = path.join(__dirname, 'cambios-lote-429.json');
const bank = JSON.parse(fs.readFileSync(bp, 'utf8'));
const log = JSON.parse(fs.readFileSync(lp, 'utf8'));
const valid = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const calls = [
  'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',
  'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262'
];
const docs = {
  networks: { url: 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk', label: 'ITIC Academy, bloque 42 «Redes», versión 2026.1 (29-09-2026); encuadra las tecnologías de acceso por cobre, las redes TCP/IP y su administración.' },
  protocols: { url: 'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk', label: 'ITIC Academy, bloque 43 «Protocolos», versión 2026.1; encuadra NGN/IMS, VoIP y comunicaciones unificadas.' }
};
const map = {
  2456: { doc: 'networks', a1: ['A1-108'], a2: ['A2-IV-7'], detail: 'Acceso ADSL por par de cobre, medio guiado y parámetros físicos que condicionan la transmisión.' },
  2457: { doc: 'protocols', a1: ['A1-116'], a2: ['A2-IV-14'], detail: 'VoIP y evaluación de calidad percibida en servicios de comunicaciones convergentes.' },
  2458: { doc: 'networks', a1: ['A1-108'], a2: ['A2-II-8'], detail: 'Protocolo de enlace HDLC, encuadre y delimitación de tramas.' },
  2459: { doc: 'networks', a1: ['A1-108', 'A1-115'], a2: ['A2-II-8'], detail: 'Conmutación de paquetes, servicio IP de datagramas, encaminamiento y garantías de entrega.' },
  2460: { doc: 'networks', a1: ['A1-108'], a2: ['A2-IV-9'], detail: 'Gestión y monitorización de redes mediante SNMP, agentes y estaciones gestoras.' }
};
if (log.cambios.map(c => c.id).join(',') !== '2456,2457,2458,2459,2460') throw new Error('IDs del lote 429 inesperados.');
for (const c of log.cambios) {
  const q = bank.preguntas.find(item => item.id === c.id);
  const m = map[c.id], d = docs[m.doc];
  if (!q?.revision) throw new Error('Falta revisión de ' + c.id);
  if (![...m.a1, ...m.a2].every(topic => valid.has(topic))) throw new Error('Tema no oficial para ' + c.id);
  q.clasificacion.A1 = m.a1;
  q.clasificacion.A2 = m.a2;
  const note = `Cotejo curricular: ${d.label} ${m.detail} Drive: ${d.url}. Correspondencia contrastada con revision/temario-oficial.json y anexos de las convocatorias A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262 (${calls.join('; ')}). Academy aporta encuadre curricular; la evidencia técnica está en las fuentes primarias enlazadas en revision.fuentes.`;
  q.clasificacion.bloque_academia = d.url;
  q.clasificacion.nota = note;
  q.revision.observaciones += ' ' + note;
  q.comentarios = q.revision.observaciones;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(lp, JSON.stringify(log, null, 2) + '\n');
fs.writeFileSync(bp, JSON.stringify(bank, null, 2) + '\n');
console.log('Cotejo curricular y temario oficial aplicados a 2456–2460.');
