const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-629.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  hardware: {url: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk', title: 'ITIC Academy, Bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026'},
  databases: {url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', title: 'ITIC Academy, Bloque 29 Bases de datos, SQL y modelado de datos, versión 2026.1'},
  technology: {url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', title: 'ITIC Academy, Bloque 30 Tecnologías de Sistemas de Información, versión 2026.1'},
  security: {url: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk', title: 'ITIC Academy, Bloque 36 Seguridad, Criptografía, Identificación y Firma, versión 2026'}
};
const mappings = {
  3461: {a1: [64], a2: ['II-5', 'III-4'], use: [docs.databases], detail: 'El bloque 29 cubre el modelo relacional, sus conceptos y SQL. La independencia entre modelo lógico y almacenamiento físico se contrasta con el artículo fundacional de Codd y documentación de PostgreSQL sobre JOIN.'},
  3462: {a1: [80], a2: ['I-6'], use: [docs.security], detail: 'El bloque 36 desarrolla firma electrónica simple, avanzada y cualificada, junto con identificación y criptografía. La lista exacta de condiciones y la distinción frente al dispositivo cualificado se verifican en el artículo 26 eIDAS vigente.'},
  3463: {a1: [54], a2: ['II-1'], use: [docs.hardware], detail: 'El bloque 26 trata hardware y dispositivos periféricos en el contexto de equipos personales y conectividad; no localicé una exposición literal de la taxonomía entrada/salida/almacenamiento. Esta clasificación básica se contrasta con un texto educativo del Ministerio de Educación de Sri Lanka; se indica que es simplificada y no exhaustiva.'},
  3464: {a1: [68], a2: ['III-12'], use: [docs.technology], detail: 'El bloque 30 incluye el tema A1-68 de PHP y el desarrollo web en servidor. No localicé una mención literal a $_COOKIE; la definición vigente de la superglobal se comprueba directamente en el manual de PHP.'},
  3465: {a1: [64], a2: ['II-5', 'III-4'], use: [docs.databases], detail: 'El bloque 29 trata el modelo relacional y declara que el dominio de un atributo define los valores admisibles. La definición se contrasta además con Codd y se diferencia de los tipos definidos por un SGBD concreto.'}
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
  q.clasificacion = {...q.clasificacion, A1: m.a1.map(n => `A1-${n}`), A2: m.a2.map(n => `A2-${n}`), bloque_academia: m.use.map(d => `${d.title}; ${m.detail}; ${d.url}`).join(' | '), estado: 'revisada', nota: 'Correspondencia cotejada con programas A1/A2 publicados en BOE y revision/temario-oficial.json; se declaran las correspondencias contextuales o no localizadas.'};
  q.revision.observaciones += ` Cotejo ITIC Academy: ${m.detail} Correspondencia oficial: ${[...m.a1.map(n => `A1-${n}`), ...m.a2.map(n => `A2-${n}`)].join(', ') || 'sin correspondencia directa localizada'}.`;
  for (const d of m.use) q.revision.fuentes.push({url: d.url, referencia: `${d.title}. ${m.detail}`});
  q.revision.fuentes.push({url: examA1, referencia: 'Convocatoria BOE-A-2025-25938, programa A1 del anexo I; cotejo realizado el 30-10-2026 contra revision/temario-oficial.json.'});
  q.revision.fuentes.push({url: examA2, referencia: 'Convocatoria BOE-A-2025-26262, programa A2 GSI del anexo IX; cotejo realizado el 30-10-2026 contra revision/temario-oficial.json.'});
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejadas cinco preguntas con ITIC Academy, BOE de convocatorias A1/A2 y temario oficial local.');
