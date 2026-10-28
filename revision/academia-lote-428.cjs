const fs = require('node:fs');
const path = require('node:path');
const bp = path.join(__dirname, '..', 'preguntas_preparatic.json');
const lp = path.join(__dirname, 'cambios-lote-428.json');
const bank = JSON.parse(fs.readFileSync(bp, 'utf8'));
const log = JSON.parse(fs.readFileSync(lp, 'utf8'));
const valid = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const calls = [
  'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',
  'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262'
];
const docs = {
  networks: { url: 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk', label: 'ITIC Academy, bloque 42 «Redes», versión 2026.1 (29-09-2026); trata capa de enlace, UDP/TCP, SDH/ATM, medios de transmisión e interconexión.' },
  wireless: { url: 'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk', label: 'ITIC Academy, bloque 46 «Redes inalámbricas y movilidad», versión 2026.1 (30-09-2026); sitúa WiMAX y WLAN dentro de las tecnologías de acceso y seguridad inalámbrica.' },
  security: { url: 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk', label: 'ITIC Academy, bloque 48 «Seguridad en redes y en el nivel de aplicación», versión 2026; desarrolla controles y protección de redes inalámbricas.' }
};
const map = {
  2451: { doc: 'networks', topics: ['A1-108'], a2: ['A2-II-8'], detail: 'Protocolos de control de enlace, encuadre por bits y por caracteres.' },
  2452: { doc: 'networks', topics: ['A1-115'], a2: ['A2-II-8'], detail: 'Modelo TCP/IP, protocolos de transporte UDP/TCP y control de flujo/congestión.' },
  2453: { doc: 'networks', topics: ['A1-108'], a2: ['A2-IV-10'], detail: 'Interfuncionamiento de ATM y SDH en redes de transporte de área extensa.' },
  2454: { doc: 'wireless', topics: ['A1-108'], a2: ['A2-IV-11'], detail: 'Acceso inalámbrico de banda ancha y redes metropolitanas IEEE 802.16.' },
  2455: { doc: 'security', topics: ['A1-48'], a2: ['A2-IV-12'], detail: 'Seguridad de WLAN, WEP/WPA y autenticación 802.1X.' }
};
if (log.cambios.map(c => c.id).join(',') !== '2451,2452,2453,2454,2455') throw new Error('IDs del lote 428 inesperados.');
for (const c of log.cambios) {
  const q = bank.preguntas.find(item => item.id === c.id);
  const m = map[c.id], d = docs[m.doc];
  if (!q?.revision) throw new Error('Falta revisión de ' + c.id);
  if (![...m.topics, ...m.a2].every(topic => valid.has(topic))) throw new Error('Tema no oficial para ' + c.id);
  q.clasificacion.A1 = m.topics;
  q.clasificacion.A2 = m.a2;
  const note = 'Cotejo curricular: ' + d.label + ' ' + m.detail + ' Drive: ' + d.url + '. Correspondencia contrastada con revision/temario-oficial.json y anexos de las convocatorias A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262 (' + calls.join('; ') + '). Academy aporta encuadre curricular; la evidencia técnica está en las fuentes enlazadas en revision.fuentes.';
  q.clasificacion.bloque_academia = d.url;
  q.clasificacion.nota = note;
  q.revision.observaciones += ' ' + note;
  q.comentarios = q.revision.observaciones;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(lp, JSON.stringify(log, null, 2) + '\n');
fs.writeFileSync(bp, JSON.stringify(bank, null, 2) + '\n');
console.log('Cotejo curricular del lote 428 completado.');
