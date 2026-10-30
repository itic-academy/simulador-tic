const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-621.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  networks: {url: 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk', title: 'ITIC Academy, Bloque 42 «Redes», versión 2026.1'},
  wireless: {url: 'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk', title: 'ITIC Academy, Bloque 46 «Redes inalámbricas y comunicaciones móviles», versión 2026'},
  apps: {url: 'https://drive.google.com/file/d/1nXa2jkiUqpu31smkt5D8WswcTgEN7XlB/view?usp=drivesdk', title: 'ITIC Academy, Bloque 47 «Aplicaciones móviles y Sistemas Operativos», versión 2026'},
  security: {url: 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk', title: 'ITIC Academy, Bloque 48 «Seguridad en redes y capa de aplicación», versión 2026'}
};
const mappings = {
  3421: {a1: [108, 121], a2: ['IV-7', 'IV-8'], use: [docs.networks], detail: 'El bloque 42 aborda CATV/HFC y acceso por fibra/coaxial; el efecto sobre el número de amplificadores se contrastó con fuentes de arquitectura CableLabs.'},
  3422: {a1: [123], a2: ['IV-15'], use: [docs.wireless], detail: 'El bloque 46 cubre sistemas móviles y bandas celulares. La banda P-GSM concreta se contrastó con 3GPP TS 45.005/ETSI; no se generalizó a E-GSM ni R-GSM.'},
  3423: {a1: [108, 114], a2: ['IV-7', 'IV-11'], use: [docs.wireless], detail: 'El bloque 46 aborda comunicaciones móviles y satelitales. Se cotejó el intervalo convencional de Ku con la tabla institucional de NASA; las asignaciones de servicios requieren regulación aparte.'},
  3424: {a1: [124], a2: [], use: [docs.apps], detail: 'El bloque 47 cubre desarrollo de aplicaciones móviles y plataformas, en particular Flutter/React Native. No se fuerza un epígrafe A2: II-2 trata sistemas operativos móviles, no el framework/categoría exacta de la pregunta.'},
  3425: {a1: [125], a2: ['II-13'], use: [docs.security], detail: 'El bloque 48 trata seguridad y ataques de disponibilidad. La definición y el efecto DoS se comprobaron con NIST CSRC; escaneo de puertos es reconocimiento, no por sí mismo DoS.'}
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
  const a2 = q.clasificacion.A2.length ? q.clasificacion.A2.join(', ') : 'sin epígrafe A2 directo';
  q.revision.observaciones += ` Cotejo curricular ITIC Academy: ${m.detail} Correspondencia: ${a1}; ${a2}. La academia sirve de encuadre curricular, no sustituye la evidencia normativa/técnica.`;
  for (const d of m.use) q.revision.fuentes.push({url: d.url, referencia: `${d.title}. ${m.detail}`});
  for (const url of examUrls) q.revision.fuentes.push({url, referencia: 'Programa oficial A1/A2 de la convocatoria de 2025; epígrafe clasificado según el mapeo incluido en revision/temario-oficial.json.'});
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejadas cinco preguntas con bloques ITIC Academy 42, 46, 47 y 48 y programas oficiales A1/A2.');
