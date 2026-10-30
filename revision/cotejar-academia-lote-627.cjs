const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-627.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  legal: {url: 'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk', title: 'ITIC Academy, Bloque 3 Actuación Administrativa, versión 2026'},
  os: {url: 'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk', title: 'ITIC Academy, Bloque 27 Sistemas Operativos, versión 2026.1'},
  gis: {url: 'https://docs.google.com/document/d/13sxQ3m8eNgg-dLxtbUHY9AzXaEnJtyyN/edit?usp=drivesdk', title: 'ITIC Academy, Tema 074 Sistemas de Información Geográfica, versión 2026'},
  protocols: {url: 'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk', title: 'ITIC Academy, Bloque 43 Protocolos, versión 2026'},
  data: {url: 'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk', title: 'ITIC Academy, Bloque 32 Inteligencia Artificial y Ciencia de Datos, versión 2026'},
  bi: {url: 'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk', title: 'ITIC Academy, Bloque 34 Business Intelligence y Big Data, versión 2026'}
};
const mappings = {
  3451: {a1: [80, 81], a2: ['I-6'], use: [docs.legal], detail: 'El bloque 3 trata eIDAS, Ley 6/2020 e identificación/servicios de confianza. La definición exacta y actual se comprueba en el Reglamento eIDAS consolidado, no en apuntes históricos sobre PSC.'},
  3452: {a1: [59], a2: ['II-2'], use: [docs.os], detail: 'El bloque 27 cubre fundamentos y funciones de sistemas operativos, como encuadre del sistema de tiempo real. La definición de tiempo real se contrasta con el glosario NIST; no se halló en el material académico localizado una sección específica de control nuclear RTOS.'},
  3453: {a1: [74], a2: [], use: [docs.gis], detail: 'El tema 074 cubre modelos vectorial y ráster en SIG. La topología vectorial se contrasta con QGIS Documentation 3.44, que advierte que las reglas no suelen imponerse automáticamente por defecto.'},
  3454: {a1: [109], a2: ['IV-13'], use: [docs.protocols], detail: 'El bloque 43 cubre protocolos, QUIC y HTTP/3. La versión y su estado de estandarización se acreditan con RFC 9114 del IETF/RFC Editor.'},
  3455: {a1: [71], a2: ['II-4'], use: [docs.data, docs.bi], detail: 'Los bloques 32 (ciencia de datos y aprendizaje automático) y 34 (Business Intelligence y Big Data) encuadran el modelado/predicción. La distinción de campo objetivo y entradas se acredita directamente con documentación IBM de modelado predictivo.'}
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const examA1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const examA2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
assert.equal(log.cambios.length, 5);
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  const m = mappings[c.id];
  assert.ok(q?.revision && m, `Falta revisión o cotejo de ${c.id}`);
  for (const id of [...m.a1.map(n => `A1-${n}`), ...m.a2.map(n => `A2-${n}`)]) assert.ok(official.has(id), `Tema oficial inexistente: ${id}`);
  q.clasificacion = {...q.clasificacion, A1: m.a1.map(n => `A1-${n}`), A2: m.a2.map(n => `A2-${n}`), bloque_academia: m.use.length ? m.use.map(d => `${d.title}; ${m.detail}; ${d.url}`).join(' | ') : m.detail, estado: 'revisada', nota: 'Correspondencia cotejada con programas A1/A2 publicados en BOE y revision/temario-oficial.json; se explicita cuando la correspondencia académica es solo contextual.'};
  q.revision.observaciones += ` Cotejo ITIC Academy: ${m.detail} Correspondencia oficial: ${[...m.a1.map(n => `A1-${n}`), ...m.a2.map(n => `A2-${n}`)].join(', ') || 'sin correspondencia A2 directa localizada'}.`;
  for (const d of m.use) q.revision.fuentes.push({url: d.url, referencia: `${d.title}. ${m.detail}`});
  q.revision.fuentes.push({url: examA1, referencia: 'Convocatoria BOE-A-2025-25938, programa A1 del anexo I, consultada el 30-10-2026; los temas se cotejaron con revision/temario-oficial.json.'});
  q.revision.fuentes.push({url: examA2, referencia: 'Convocatoria BOE-A-2025-26262, programa A2 GSI del anexo IX, consultada el 30-10-2026; los temas se cotejaron con revision/temario-oficial.json.'});
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejadas cinco preguntas con materiales ITIC Academy, programas oficiales A1/A2 y convocatorias BOE.');
