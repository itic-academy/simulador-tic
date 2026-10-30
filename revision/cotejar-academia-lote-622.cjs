const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-622.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  networks: {url: 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk', title: 'ITIC Academy, Bloque 42 Redes, versión 2026.1'},
  protocols: {url: 'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk', title: 'ITIC Academy, Bloque 43 Protocolos, versión 2026.1'},
  security: {url: 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk', title: 'ITIC Academy, Bloque 48 Seguridad en redes y nivel de aplicación, versión 2026.1'},
  voip: {url: 'https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk', title: 'ITIC Academy, Bloque 50 Videoconferencia, SSO y trabajo colaborativo, versión 2026.1'}
};
const mappings = {
  3426: {a1: [125], a2: ['IV-12'], use: [docs.security], detail: 'El bloque 48 trata seguridad perimetral y cortafuegos. Su clasificación incluye el epígrafe de redes de los programas oficiales; el criterio de cabecera frente a carga útil se verificó con NIST.'},
  3427: {a1: [126], a2: ['III-12'], use: [docs.security], detail: 'El bloque 48 actualiza TLS y protección de servicios web. La búsqueda en Drive no localizó una explicación específica de la directiva Apache SSLProtocol; el dato de sintaxis se verificó en la documentación oficial de Apache.'},
  3428: {a1: [125], a2: ['IV-12'], use: [docs.security], detail: 'El bloque 48 incluye un apartado explícito de IPsec y túneles. Los formatos AH/ESP y sus modos se contrastaron directamente con RFC 4301, 4302 y 4303.'},
  3429: {a1: [116], a2: ['IV-14'], use: [docs.protocols, docs.voip], detail: 'Los bloques 43 y 50 incluyen señalización, VoIP y protocolos de videoconferencia/comunicaciones unificadas; el intercambio INVITE y la oferta SDP se verificaron con RFC 3261, 3264 y 8866.'},
  3430: {a1: [108, 130], a2: ['IV-16'], use: [docs.networks, docs.voip], detail: 'Los bloques 42 y 50 cubren QoS en redes y comunicaciones de voz/videoconferencia. La pregunta se circunscribe a calidad percibida de voz IP; latencia/jitter y eco se comprobaron con recomendaciones UIT-T vigentes.'}
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
  const a1 = q.clasificacion.A1.join(', ');
  const a2 = q.clasificacion.A2.join(', ');
  q.revision.observaciones += ` Cotejo curricular ITIC Academy: ${m.detail} Correspondencia: ${a1}; ${a2}. La academia sirve de encuadre curricular, no sustituye la evidencia normativa/técnica.`;
  for (const d of m.use) q.revision.fuentes.push({url: d.url, referencia: `${d.title}. ${m.detail}`});
  for (const url of examUrls) q.revision.fuentes.push({url, referencia: 'Convocatorias vigentes consultadas en BOE el 30-10-2026: programa A1 del anexo I (BOE-A-2025-25938) y programa A2 GSI del anexo IX (BOE-A-2025-26262); el epígrafe se coteja con revision/temario-oficial.json. La página consolidada no mostraba una rectificación posterior de estos programas en la fecha de consulta.'});
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejadas cinco preguntas con Drive (bloques 42, 43, 48 y 50), programas BOE A1/A2 y documentación primaria.');
