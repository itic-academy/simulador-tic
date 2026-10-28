const fs = require('node:fs');
const path = require('node:path');
const bp = path.join(__dirname, '..', 'preguntas_preparatic.json');
const lp = path.join(__dirname, 'cambios-lote-427.json');
const bank = JSON.parse(fs.readFileSync(bp, 'utf8'));
const log = JSON.parse(fs.readFileSync(lp, 'utf8'));
const valid = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const calls = [
  'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',
  'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262'
];
const docs = {
  itil: { url: 'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk', label: 'ITIC Academy, bloque 41 «ITIL y COBIT», versión 2026; encuadra gestión de servicios, procesos de operación y valor del servicio dentro del temario A1/A2.' },
  networks: { url: 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk', label: 'ITIC Academy, bloque 42 «Redes», versión 2026.1 (29-09-2026); aborda medios de transmisión, fibra óptica, formatos/transceptores e interconexión y protocolos TCP/IP.' }
};
const map = {
  2446: { doc: 'itil', topics: ['A1-34'], a2: ['A2-IV-4'], detail: 'Gestión operativa de solicitudes predefinidas y procedimientos normalizados de atención a usuarios.' },
  2447: { doc: 'itil', topics: ['A1-34'], a2: ['A2-IV-4'], detail: 'Gestión del servicio y distinción de outputs y outcomes al valorar los resultados del servicio.' },
  2448: { doc: 'networks', topics: ['A1-108'], a2: ['A2-IV-7'], detail: 'Módulos transceptores pluggable y medios de transmisión ópticos.' },
  2449: { doc: 'networks', topics: ['A1-108'], a2: ['A2-IV-7'], detail: 'Fibras monomodo/multimodo, dispersión y parámetros de transmisión.' },
  2450: { doc: 'networks', topics: ['A1-115'], a2: ['A2-II-8'], detail: 'Arquitectura TCP/IP, cabecera TCP, direccionamiento y separación entre protocolos de red y transporte.' }
};
if (log.cambios.map(c => c.id).join(',') !== '2446,2447,2448,2449,2450') throw new Error('IDs del lote 427 inesperados.');
for (const c of log.cambios) {
  const q = bank.preguntas.find(item => item.id === c.id);
  const m = map[c.id], d = docs[m.doc];
  if (!q?.revision) throw new Error('Falta revisión de ' + c.id);
  if (![...m.topics, ...m.a2].every(topic => valid.has(topic))) throw new Error('Tema no oficial para ' + c.id);
  q.clasificacion.A1 = m.topics;
  q.clasificacion.A2 = m.a2;
  const note = 'Cotejo curricular: ' + d.label + ' ' + m.detail + ' Drive: ' + d.url + '. Correspondencia contrastada con revision/temario-oficial.json y anexos de las convocatorias A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262 (' + calls.join('; ') + '). Academy orienta la ubicación curricular; la respuesta técnica se apoya en las fuentes primarias enlazadas en revision.fuentes.';
  q.clasificacion.bloque_academia = d.url;
  q.clasificacion.nota = note;
  q.revision.observaciones += ' ' + note;
  q.comentarios = q.revision.observaciones;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(lp, JSON.stringify(log, null, 2) + '\n');
fs.writeFileSync(bp, JSON.stringify(bank, null, 2) + '\n');
console.log('Cotejo curricular del lote 427 completado.');
