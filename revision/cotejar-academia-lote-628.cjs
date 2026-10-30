const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-628.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  databases: {url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', title: 'ITIC Academy, Bloque 29 Bases de datos, SQL y modelado de datos, versión 2026.1'},
  security: {url: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk', title: 'ITIC Academy, Bloque 36 Seguridad, Criptografía, Identificación y Firma, versión 2026'},
  os: {url: 'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk', title: 'ITIC Academy, Bloque 27 Sistemas Operativos, versión 2026.1'},
  data: {url: 'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk', title: 'ITIC Academy, Bloque 32 Inteligencia Artificial y Ciencia de Datos, versión 2026'},
  bi: {url: 'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk', title: 'ITIC Academy, Bloque 34 Business Intelligence y Big Data, versión 2026.1'}
};
const mappings = {
  3456: {a1: [64], a2: ['II-5'], use: [docs.databases], detail: 'El bloque 29 aborda SGBD, modelo relacional y SQL como contexto curricular; no localicé una mención literal a SQL*Loader. La identificación exacta del producto se verifica con la documentación de Oracle Database 26ai.'},
  3457: {a1: [79, 80], a2: ['IV-12'], use: [docs.security], detail: 'El bloque 36 aborda cifrado simétrico/asimétrico y claves públicas/privadas. El uso de las claves en cifrado y firma se comprueba con el glosario vigente de NIST.'},
  3458: {a1: [61], a2: ['II-2'], use: [docs.os], detail: 'El bloque 27 incluye administración de Windows y el apartado NTFS/ReFS. El cotejo académico es curricular/contextual; la identificación exacta de EFS y su alcance se fundamenta en Microsoft Learn y MS-GPEF.'},
  3459: {a1: [], a2: ['III-5'], use: [docs.data], detail: 'El bloque 32 incluye en el programa A2 D5, que nombra expresamente organizaciones de ficheros, y desarrolla estructuras de datos. No se fuerza un tema A1: el programa A1 cotejado no contiene un epígrafe directo de organización de ficheros. La función hash y colisiones se comprueban con material docente universitario de organización de ficheros.'},
  3460: {a1: [71], a2: ['III-15'], use: [docs.data, docs.bi], detail: 'El bloque 32 trata ciencia de datos, modelado y minería de datos; el bloque 34 incluye el programa A2 D15 de minería de datos, tecnología y algoritmos. El cotejo es curricular; la advertencia sobre la mezcla de taxonomías se apoya en bibliografía universitaria de minería de datos.'}
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
  q.clasificacion = {...q.clasificacion, A1: m.a1.map(n => `A1-${n}`), A2: m.a2.map(n => `A2-${n}`), bloque_academia: m.use.map(d => `${d.title}; ${m.detail}; ${d.url}`).join(' | '), estado: 'revisada', nota: 'Correspondencia cotejada con programas A1/A2 publicados en BOE y revision/temario-oficial.json; una correspondencia indirecta o ausente se declara expresamente.'};
  q.revision.observaciones += ` Cotejo ITIC Academy: ${m.detail} Correspondencia oficial: ${[...m.a1.map(n => `A1-${n}`), ...m.a2.map(n => `A2-${n}`)].join(', ') || 'sin correspondencia directa localizada'}.`;
  for (const d of m.use) q.revision.fuentes.push({url: d.url, referencia: `${d.title}. ${m.detail}`});
  q.revision.fuentes.push({url: examA1, referencia: 'Convocatoria BOE-A-2025-25938, programa A1 del anexo I; cotejo realizado el 30-10-2026 contra revision/temario-oficial.json.'});
  q.revision.fuentes.push({url: examA2, referencia: 'Convocatoria BOE-A-2025-26262, programa A2 GSI del anexo IX; cotejo realizado el 30-10-2026 contra revision/temario-oficial.json.'});
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejadas cinco preguntas con apuntes ITIC Academy accesibles, programas oficiales A1/A2 y convocatorias BOE.');
