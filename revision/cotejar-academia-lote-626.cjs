const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-626.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  hardware: {url: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk', title: 'ITIC Academy, Bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización, 2026'},
  os: {url: 'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk', title: 'ITIC Academy, Bloque 27 Sistemas Operativos, versión 2026.1'},
  db: {url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', title: 'ITIC Academy, Bloque 29 Bases de datos, SQL y modelado de datos, 2026'},
  java: {url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', title: 'ITIC Academy, Bloque 30 Tecnologías de Sistemas de la Información, versión 2026.1'}
};
const mappings = {
  3446: {a1: [69], a2: ['II-14'], use: [], detail: 'La búsqueda de materiales ITIC Academy no localizó un bloque de contenido dedicado a las libertades del software libre; el tema se contrasta directamente con la definición GNU y el epígrafe oficial A2-II-14.'},
  3447: {a1: [67], a2: ['II-3'], use: [docs.java], detail: 'El bloque 30 cubre el entorno Java. La especificación JNI de Java SE es la fuente directa para la interoperabilidad con C/C++; no se atribuye al temario una explicación específica de JNI.'},
  3448: {a1: [64], a2: ['II-5', 'III-4'], use: [docs.db], detail: 'El bloque 29 cubre el modelo relacional, SQL y modelado de datos; el material incluye dominios como valores y restricciones. La definición formal de dominio de atributo se coteja con el texto de modelo relacional y documentación PostgreSQL.'},
  3449: {a1: [59], a2: ['II-2'], use: [docs.os], detail: 'El bloque 27 incluye memoria virtual, segmentación y traducción de direcciones. La relación entre direcciones virtuales y físicas se verifica asimismo con documentación técnica de Microsoft y Oracle Linux.'},
  3450: {a1: [52], a2: ['II-1'], use: [docs.hardware], detail: 'El bloque 26 cubre hardware y arquitectura de computadores; se usa solo como encuadre curricular. No se encontró una explicación específica del pipeline de instrucciones y el tema oficial se asigna por proximidad a sistemas/arquitecturas de altas prestaciones, sin afirmar que el temario mencione expresamente el cauce.'}
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
  q.clasificacion = {...q.clasificacion, A1: m.a1.map(n => `A1-${n}`), A2: m.a2.map(n => `A2-${n}`), bloque_academia: m.use.length ? m.use.map(d => `${d.title}; ${m.detail}; ${d.url}`).join(' | ') : m.detail, estado: 'revisada', nota: 'Correspondencia cotejada con programas A1/A2 publicados en BOE y revision/temario-oficial.json; el tema de mayor proximidad se señala cuando no hay epígrafe literal.'};
  q.revision.observaciones += ` Cotejo ITIC Academy: ${m.detail} Correspondencia oficial: ${[...m.a1.map(n => `A1-${n}`), ...m.a2.map(n => `A2-${n}`)].join(', ')}.`;
  for (const d of m.use) q.revision.fuentes.push({url: d.url, referencia: `${d.title}. ${m.detail}`});
  q.revision.fuentes.push({url: examA1, referencia: 'Convocatoria BOE-A-2025-25938, programa A1 del anexo I, consultada el 30-10-2026; los temas consignados se cotejaron con revision/temario-oficial.json.'});
  q.revision.fuentes.push({url: examA2, referencia: 'Convocatoria BOE-A-2025-26262, programa A2 GSI del anexo IX, consultada el 30-10-2026; los temas consignados se cotejaron con revision/temario-oficial.json.'});
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejadas cinco preguntas con materiales ITIC Academy localizados/no localizados, programas oficiales A1/A2 y convocatorias BOE.');
