const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-631.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  data: {url: 'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk', title: 'ITIC Academy, bloque 34 Business Intelligence y Big Data, versión 2026'},
  crypto: {url: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk', title: 'ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma, versión 2026'},
  db: {url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', title: 'ITIC Academy, bloque 29 Bases de datos, SQL y modelado de datos, versión 2026'},
  security: {url: 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5Z2N-W5oh82/view?usp=drivesdk', title: 'ITIC Academy, bloque 48 Seguridad en redes y en el nivel de aplicación, actualización 2026'}
};
const mappings = {
  3471: {a1: [75], a2: ['II-4'], use: [docs.data], detail: 'El bloque 34 cubre almacenes de datos, BI y el programa A2 de OLTP/OLAP. La distinción entre data marts dependientes e independientes se comprueba en Oracle Database Data Warehousing Guide.'},
  3472: {a1: [80], a2: ['I-6'], use: [docs.crypto], detail: 'El bloque 36 aborda certificados, claves y formatos de intercambio. El formato exacto ofrecido por el asistente de exportación de Windows se confirma en Microsoft Learn; el temario académico no se utiliza como evidencia de la extensión.'},
  3473: {a1: [64], a2: ['III-4'], use: [docs.db], detail: 'El bloque 29 desarrolla el modelo relacional y SQL; la semántica de INNER JOIN, condiciones, USING/NATURAL y outer joins se coteja con la documentación actual de PostgreSQL.'},
  3474: {a1: [125], a2: ['IV-12'], use: [docs.security], detail: 'El bloque 48 desarrolla seguridad en redes, protocolos seguros y criptografía. La descripción de SSLv3 se toma de RFC 6101, y la prohibición de uso de SSLv3 de RFC 7568.'},
  3475: {a1: [63], a2: ['III-15'], use: [docs.db], detail: 'El bloque 29 incluye familias de bases de datos NoSQL y caracteriza MongoDB como documental; el bloque A2-D15 de Big Data abarca expresamente bases NoSQL. La definición del formato BSON y del almacenamiento en colecciones se verifica en el manual oficial de MongoDB.'}
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
