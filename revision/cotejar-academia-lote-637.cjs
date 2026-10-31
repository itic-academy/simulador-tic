const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const dir = __dirname;
const bankPath = path.join(dir, '..', 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(dir, 'cambios-lote-637.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  java: {url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', title: 'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información, versión 2026.1'},
  os: {url: 'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk', title: 'ITIC Academy, bloque 27 Sistemas Operativos, versión 2026.1'},
  databases: {url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', title: 'ITIC Academy, bloque 29 Bases de datos, SQL y modelado de datos, versión 2026.1'},
  bi: {url: 'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk', title: 'ITIC Academy, bloque 34 Business Intelligence y Big Data, versión 2026.1'}
};
const mappings = {
  3501: {a1: [67], a2: ['III-10'], use: [docs.java], detail: 'El bloque 30 incluye Java y la arquitectura Jakarta EE (A2-D10, normalizado A2-III-10); la diferencia precisa entre MDB y session beans asíncronos procede de la especificación Enterprise Beans.'},
  3502: {a1: [60], a2: ['II-2'], use: [docs.os], detail: 'El bloque 27 cubre administración de Unix/Linux y fundamentos de SO (A1-60/A2-T2, normalizado A2-II-2); las tareas de monitorización de rendimiento se contrastan con documentación Microsoft.'},
  3503: {a1: [61], a2: ['II-2'], use: [docs.os], detail: 'El bloque 27 incluye sistemas operativos Microsoft y su administración (A1-61/A2-T2, normalizado A2-II-2); el ciclo del producto, inventario y cumplimiento se verifican con Microsoft Learn.'},
  3504: {a1: [71], a2: ['III-15'], use: [docs.bi], detail: 'El bloque 34 encuadra análisis/transformación y explotación de datos dentro de ciencia de datos/Big Data; el programa oficial A2-III-15 comprende minería de datos. La función concreta de las herramientas se contrasta en su documentación oficial.'},
  3505: {a1: [63], a2: ['II-5'], use: [docs.databases], detail: 'El bloque 29 incluye el modelo ANSI/SPARC en A1-63 y A2-T5, normalizado A2-II-5; el informe NBS/ANSI-SPARC acredita la separación de vistas externas, esquema conceptual e interno.'}
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(dir, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const examA1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const examA2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
assert.equal(log.cambios.length, 5);
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  const m = mappings[c.id];
  assert.ok(q?.revision && m, `Falta revisión o cotejo de ${c.id}`);
  for (const id of [...m.a1.map(n => `A1-${n}`), ...m.a2.map(n => `A2-${n}`)]) assert.ok(official.has(id), `Tema oficial inexistente: ${id}`);
  q.clasificacion = {...q.clasificacion, A1: m.a1.map(n => `A1-${n}`), A2: m.a2.map(n => `A2-${n}`), bloque_academia: `${m.use.map(d => `${d.title}; ${m.detail}; ${d.url}`).join(' | ')}`, estado: 'revisada', nota: 'Correspondencia cotejada con programas oficiales BOE y revision/temario-oficial.json; se explicitan los límites de la cobertura académica localizada.'};
  q.revision.observaciones += ` Cotejo ITIC Academy: ${m.detail} Correspondencia oficial: ${[...m.a1.map(n => `A1-${n}`), ...m.a2.map(n => `A2-${n}`)].join(', ')}.`;
  for (const d of m.use) q.revision.fuentes.push({url: d.url, referencia: `${d.title}. ${m.detail}`});
  q.revision.fuentes.push({url: examA1, referencia: 'Convocatoria BOE-A-2025-25938, programa A1 del anexo I; epígrafes cotejados con revision/temario-oficial.json.'});
  q.revision.fuentes.push({url: examA2, referencia: 'Convocatoria BOE-A-2025-26262, programa A2 GSI del anexo IX; epígrafes cotejados con revision/temario-oficial.json.'});
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo Academy, programas BOE y clasificación oficial completado para lote 637.');
