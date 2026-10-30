const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-623.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  protocols: {url: 'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk', title: 'ITIC Academy, Bloque 43 Protocolos, versión 2026.1'},
  mobile: {url: 'https://drive.google.com/file/d/1nXa2jkiUqpu31smkt5D8WswcTgEN7XlB/view?usp=drivesdk', title: 'ITIC Academy, Bloque 47 Aplicaciones móviles y sistemas operativos, versión 2026.1'},
  hardware: {url: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk', title: 'ITIC Academy, Bloque 26 Hardware, versión 2026.1'},
  security: {url: 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk', title: 'ITIC Academy, Bloque 48 Seguridad en redes y nivel de aplicación, versión 2026.1'},
  crypto: {url: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk', title: 'ITIC Academy, Bloque 36 Criptografía, identidad y certificados, versión 2026.1'},
  voip: {url: 'https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk', title: 'ITIC Academy, Bloque 50 Videoconferencia, SSO y trabajo colaborativo, versión 2026.1'},
  raids: {url: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk', title: 'ITIC Academy, Bloque 26 Hardware, versión 2026.1'}
};
const mappings = {
  3431: {a1: [116, 130], a2: ['IV-14', 'IV-16'], use: [docs.protocols, docs.voip], detail: 'El bloque 43 cubre protocolos y el 50 videoconferencia/comunicaciones. La búsqueda no halló una exposición específica de las funciones obligatorias del gatekeeper H.323; el requisito RAS se acredita con UIT-T H.323.'},
  3432: {a1: [54, 131], a2: ['IV-12'], use: [docs.voip], detail: 'El bloque 50 aporta contexto de acceso y colaboración remotos. No se localizó en Drive material específico sobre VNC/RFB; la distinción entre tecnología VNC y protocolo RFB se comprueba con RFC 6143 y RFC 7869.'},
  3433: {a1: [44, 65, 124], a2: ['III-14'], use: [docs.mobile], detail: 'El bloque 47 incluye diseño adaptable (RWD) en su sección 2.1; el epígrafe A2-III-14 incluye expresamente la Guía de Comunicación Digital de la AGE. La respuesta concreta procede de §1.4 de la edición 2014, que se identifica como fuente histórica y no como estándar web vigente.'},
  3434: {a1: [56], a2: ['IV-5'], use: [docs.hardware], detail: 'El bloque 26 cubre hardware y almacenamiento RAID. La distinción entre paridad dedicada en RAID 4 y distribuida en RAID 5 se verifica con documentación de Oracle y Linux md(4).'},
  3435: {a1: [80, 81], a2: ['I-6'], use: [docs.security, docs.crypto], detail: 'Los bloques 48 y 36 aportan contexto de seguridad, certificados e identidad. No se tomó el material académico como autoridad legal: el alcance de los prestadores, el umbral de impacto y el plazo de 24 horas se comprueban en el art. 19.2 del Reglamento eIDAS consolidado.'}
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
  q.clasificacion = {...q.clasificacion, A1: m.a1.map(n => `A1-${n}`), A2: m.a2.map(n => `A2-${n}`), bloque_academia: m.use.map(d => `${d.title}; ${m.detail}; ${d.url}`).join(' | '), estado: 'revisada', nota: 'Correspondencia cotejada con los programas A1/A2 publicados en BOE y revision/temario-oficial.json.'};
  q.revision.observaciones += ` Cotejo curricular ITIC Academy: ${m.detail} Correspondencia oficial: ${[...m.a1.map(n => `A1-${n}`), ...m.a2.map(n => `A2-${n}`)].join(', ')}. La academia sirve de encuadre curricular; la evidencia técnica/legal se cita por separado.`;
  for (const d of m.use) q.revision.fuentes.push({url: d.url, referencia: `${d.title}. ${m.detail}`});
  for (const url of examUrls) q.revision.fuentes.push({url, referencia: `Convocatoria TIC consultada en BOE el 30-10-2026: programa A1 del anexo I (BOE-A-2025-25938) o programa A2 GSI del anexo IX (BOE-A-2025-26262), según la correspondencia indicada; cotejo registrado también en revision/temario-oficial.json. No se localizó rectificación de los programas en las fichas consultadas a la fecha.`});
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejadas cinco preguntas con Drive, temas oficiales A1/A2 y convocatorias BOE vigentes.');
