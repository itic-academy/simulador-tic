const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-632.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  hardware: {url: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk', title: 'ITIC Academy, bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026'},
  web: {url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', title: 'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información, versión 2026.1'}
};
const mappings = {
  3476: {a1: [52], a2: ['II-1'], use: [docs.hardware], detail: 'El bloque 26 incluye Grid Computing dentro del tema A1-52 y arquitecturas de alto rendimiento. No localicé en el documento una exposición literal de las cinco capas de Globus; el nombre Fabric se comprueba en la fuente primaria de Foster, Kesselman y Tuecke.'},
  3477: {a1: [52], a2: ['II-1'], use: [docs.hardware], detail: 'El bloque 26 encuadra hardware y arquitectura de computadores. No localicé una comparación literal de unidades de control cableadas y microprogramadas en el material académico; esa distinción se contrasta con material docente universitario de arquitectura.'},
  3478: {a1: [50], a2: ['II-9'], use: [], detail: 'No localicé en el material de ITIC Academy consultado una exposición específica del acrónimo ASCII. Se clasifica por proximidad en A1-50 (estándares) y A2-II-9 (lenguajes de marca y estándares de texto), sin afirmar que esos epígrafes citen expresamente ASCII.'},
  3479: {a1: [56], a2: ['IV-5'], use: [docs.hardware], detail: 'El bloque 26 trata sistemas de almacenamiento y virtualización del almacenamiento. No se atribuye al material académico la afirmación de que toda virtualización tenga un defecto inevitable; la compatibilidad con sistemas de terceros se plantea como riesgo dependiente del entorno y se contrasta con SNIA y las matrices de compatibilidad de IBM.'},
  3480: {a1: [65], a2: ['III-12'], use: [docs.web], detail: 'El bloque 30 cubre tecnologías web y Java/Jakarta EE. No localicé una definición literal de scriptlet en el extracto consultado; la sintaxis y distinción frente a expresión/declaración se verifica con la especificación Jakarta Server Pages.'}
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
  q.clasificacion = {...q.clasificacion, A1: m.a1.map(n => `A1-${n}`), A2: m.a2.map(n => `A2-${n}`), bloque_academia: `${m.use.map(d => `${d.title}; ${m.detail}; ${d.url}`).join(' | ')}${m.use.length ? ' | ' : ''}${m.detail}`, estado: 'revisada', nota: 'Correspondencia cotejada con los programas A1/A2 publicados en BOE y revision/temario-oficial.json; el grado de cobertura académica se expresa sin atribuir al material afirmaciones no localizadas.'};
  q.revision.observaciones += ` Cotejo ITIC Academy: ${m.detail} Correspondencia oficial: ${[...m.a1.map(n => `A1-${n}`), ...m.a2.map(n => `A2-${n}`)].join(', ')}.`;
  for (const d of m.use) q.revision.fuentes.push({url: d.url, referencia: `${d.title}. ${m.detail}`});
  q.revision.fuentes.push({url: examA1, referencia: 'Convocatoria BOE-A-2025-25938, programa A1 del anexo I; correspondencia contrastada con revision/temario-oficial.json.'});
  q.revision.fuentes.push({url: examA2, referencia: 'Convocatoria BOE-A-2025-26262, programa A2 GSI del anexo IX; correspondencia contrastada con revision/temario-oficial.json.'});
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejadas cinco preguntas con materiales accesibles de ITIC Academy, programas BOE y temario oficial local.');
