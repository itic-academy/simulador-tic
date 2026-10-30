const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-630.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  data: {url: 'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk', title: 'ITIC Academy, bloque 34 BI y Big Data, actualización 2026'},
  science: {url: 'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk', title: 'ITIC Academy, bloque 32 Inteligencia Artificial y Ciencia de Datos'},
  workflow: {url: 'https://docs.google.com/document/d/1GdG6vnpLbrJqXyh7oO0HMHO0JzX5nlU9/edit?usp=drivesdk', title: 'ITIC Academy, Temas 103 y 104: Gestión Documental, versión 2026'},
  os: {url: 'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk', title: 'ITIC Academy, bloque 27 Sistemas Operativos'},
  crypto: {url: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk', title: 'ITIC Academy, bloque 36 Seguridad y Criptografía'}
};
const mappings = {
  3466: {a1: [75], a2: ['II-4'], use: [docs.data], detail: 'El bloque 34 cubre Business Intelligence, Big Data y almacenes de datos (A2-D15 en el material académico); el encuadre de almacenes de datos y OLTP/OLAP se coteja además con A2-II-4. Las características clásicas se acreditan con Oracle Database Concepts.'},
  3467: {a1: [71], a2: ['III-15'], use: [docs.science, docs.data], detail: 'El bloque 32 sitúa la preparación de datos en el ciclo de ciencia de datos; el bloque 34 desarrolla minería de datos y sus algoritmos. La pertinencia de cada operación se contrasta con los capítulos de preprocesamiento del texto de Han, Pei y Tong.'},
  3468: {a1: [103], a2: ['II-16'], use: [docs.workflow], detail: 'El material de los temas 103/104 desarrolla gestión documental y de contenidos y el tema A2-T16 de sistemas de gestión de flujos de trabajo. No localicé una expansión literal de WAPI en el material académico: la expansión de la WfMC se acredita con la especificación primaria de esta organización.'},
  3469: {a1: [60], a2: ['II-2'], use: [docs.os], detail: 'El bloque 27 aborda sistemas operativos y el temario A1/A2 incluye UNIX/Linux y administración de permisos. La interpretación exacta de los bits octales 0500 se verifica en documentación de chmod, no se atribuye literalmente al material de academia.'},
  3470: {a1: [79], a2: ['IV-12'], use: [docs.crypto], detail: 'El bloque 36 aborda criptografía y algoritmos hash. La clasificación de SHA-1 como función hash y su estado para protección criptográfica nueva se acreditan con FIPS 180-4 y la política/transición de NIST.'}
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
  q.clasificacion = {...q.clasificacion, A1: m.a1.map(n => `A1-${n}`), A2: m.a2.map(n => `A2-${n}`), bloque_academia: m.use.map(d => `${d.title}; ${m.detail}; ${d.url}`).join(' | '), estado: 'revisada', nota: 'Correspondencia cotejada con los programas A1/A2 publicados en BOE y revision/temario-oficial.json; el material académico se usa como encuadre, no como sustituto de la evidencia técnica primaria.'};
  q.revision.observaciones += ` Cotejo ITIC Academy: ${m.detail} Correspondencia oficial: ${[...m.a1.map(n => `A1-${n}`), ...m.a2.map(n => `A2-${n}`)].join(', ')}.`;
  for (const d of m.use) q.revision.fuentes.push({url: d.url, referencia: `${d.title}. ${m.detail}`});
  q.revision.fuentes.push({url: examA1, referencia: 'Convocatoria BOE-A-2025-25938, programa A1 del anexo I; correspondencia contrastada con revision/temario-oficial.json.'});
  q.revision.fuentes.push({url: examA2, referencia: 'Convocatoria BOE-A-2025-26262, programa A2 GSI del anexo IX; correspondencia contrastada con revision/temario-oficial.json.'});
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejadas cinco preguntas con ITIC Academy, convocatorias A1/A2 y temario oficial local.');
