const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-620.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  networks: {url: 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk', title: 'ITIC Academy, Bloque 42 «Redes», versión 2026.1'},
  protocols: {url: 'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk', title: 'ITIC Academy, Bloque 43 «Protocolos», versión 2026.1'},
  wireless: {url: 'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk', title: 'ITIC Academy, Bloque 46 «Redes inalámbricas y comunicaciones móviles», versión 2026'},
  voice: {url: 'https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk', title: 'ITIC Academy, Bloque 50 «Videoconferencia, SSO y trabajo colaborativo», versión 2026'},
  tests: {url: 'https://drive.google.com/file/d/0Bw-rS_kOHzMKRmpNZXgyRkpqSzQ/view?usp=drivesdk&resourcekey=0-KrkxJiH6ADkelFzUMtDHtw', title: 'ITIC Academy, test de Redes, preguntas históricas sobre FDDI y CDDI'}
};
const mappings = {
  3416: {a1: [108, 116], a2: ['IV-8', 'IV-14'], use: [docs.protocols, docs.voice], detail: 'Los bloques actuales de Protocolos y Videoconferencia tratan H.323 y sus componentes; el bloque 43 identifica RAS y registro de terminales con el gatekeeper. La edición legacy de H.323 se cotejó técnicamente con la recomendación UIT-T vigente.'},
  3417: {a1: [114, 123], a2: ['IV-11', 'IV-15'], use: [docs.wireless], detail: 'El bloque 46 incluye redes inalámbricas, movilidad y handover, y señala de forma expresa que 802.21 es el traspaso entre redes heterogéneas.'},
  3418: {a1: [108], a2: ['IV-8'], use: [docs.networks, docs.protocols], detail: 'Los bloques de Redes y Protocolos cubren conmutación de paquetes y los servicios de red IP; el alcance y las garantías de entrega se verificaron con RFC 1812.'},
  3419: {a1: [110, 118], a2: ['IV-8'], use: [docs.networks, docs.tests], detail: 'El bloque 42 enumera FDDI como topología de anillo LAN histórica; el test de redes de ITIC contiene la pregunta heredada sobre FDDI/CDDI. La denominación física TP-PMD se contrastó además con el catálogo ANSI.'},
  3420: {a1: [108, 118], a2: ['IV-9'], use: [docs.networks], detail: 'El bloque 42 incluye gestión, FCAPS y la arquitectura de gestión TMN de la UIT-T; el número y alcance concretos de M.3010 se comprobaron directamente en el catálogo oficial UIT-T.'}
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const examUrls = [
  'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',
  'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262'
];
assert.equal(log.cambios.length, 5);
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  const m = mappings[c.id];
  assert.ok(q?.revision && m, `Falta revisión o cotejo de ${c.id}`);
  for (const id of [...m.a1.map(n => `A1-${n}`), ...m.a2.map(n => `A2-${n}`)]) assert.ok(official.has(id), `Tema oficial inexistente: ${id}`);
  q.clasificacion = {...q.clasificacion, A1: m.a1.map(n => `A1-${n}`), A2: m.a2.map(n => `A2-${n}`), bloque_academia: m.use.map(d => `${d.title}; ${m.detail}; ${d.url}`).join(' | '), estado: 'revisada', nota: 'Correspondencia cotejada con programas A1/A2 publicados en BOE y revision/temario-oficial.json.'};
  q.revision.observaciones += ` Cotejo curricular ITIC Academy: ${m.detail} Correspondencia: ${q.clasificacion.A1.join(', ')}; ${q.clasificacion.A2.join(', ')}. La academia sirve de encuadre curricular, no sustituye la evidencia normativa/técnica.`;
  for (const d of m.use) q.revision.fuentes.push({url: d.url, referencia: `${d.title}. ${m.detail}`});
  for (const url of examUrls) q.revision.fuentes.push({url, referencia: 'Programa oficial A1/A2 de la convocatoria de 2025; epígrafe clasificado según el mapeo incluido en revision/temario-oficial.json.'});
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejadas cinco preguntas con los materiales ITIC Academy de redes, protocolos, Wi-Fi/movilidad y videoconferencia, más programas oficiales A1/A2.');
