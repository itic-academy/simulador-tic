const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-257.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  hardware: {url: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk', label: 'ITIC Academy, bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1 (31-08-2026)'},
  technology: {url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', label: 'ITIC Academy, bloque 30 Tecnologías de Sistemas de la Información, versión 2026.1 (31-08-2026)'},
  database: {url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', label: 'ITIC Academy, bloque 29 Bases de Datos, SQL y Modelado de Datos, versión 2026.1 (31-08-2026)'}
};
const mapping = {
  1601: {docs: ['technology'], detail: 'el bloque cubre arquitecturas de componentes, aplicaciones distribuidas e interoperabilidad (A1-58 y A2-II-6); Microsoft especifica COM/DCOM, QueryInterface y la herencia simple de interfaces', topics: ['A1-58', 'A2-II-6']},
  1602: {docs: ['technology'], detail: 'el bloque desarrolla Java, Jakarta EE y tecnologías de aplicaciones web (A1-65/67 y A2-III-10/III-12); la especificación Jakarta Faces vigente describe el framework MVC basado en componentes', topics: ['A1-65', 'A1-67', 'A2-III-10', 'A2-III-12']},
  1603: {docs: ['database'], detail: 'el bloque de SGBD y administración de bases de datos sitúa curricularmente la consulta de sesiones BASIS (A1-63 y A2-IV-2); se deja pendiente la respuesta hasta hallar el manual primario del producto y versión', topics: ['A1-63', 'A2-IV-2']},
  1604: {docs: ['hardware'], detail: 'el bloque aborda organización de procesadores y arquitecturas de altas prestaciones (A1-52 y A2-II-1); la secuencia concreta se contrasta con el manual técnico ARM9EJ-S', topics: ['A1-52', 'A2-II-1']},
  1605: {docs: ['hardware'], detail: 'el bloque trata equipos y periféricos personales (A1-54 y A2-II-1); fuentes institucionales e históricas documentan el primer ratón y su prototipo en SRI', topics: ['A1-54', 'A2-II-1']}
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
for (const change of log.cambios) {
  const question = bank.preguntas.find(item => item.id === change.id);
  const row = mapping[change.id];
  assert.ok(question?.revision && row, `Falta revisión o cotejo académico para ${change.id}`);
  for (const topic of [...question.clasificacion.A1, ...question.clasificacion.A2, ...row.topics]) assert.ok(official.has(topic), `Tema oficial inexistente: ${topic}`);
  const refs = row.docs.map(key => ({url: docs[key].url, referencia: `${docs[key].label}; ${row.detail}. Correspondencia oficial contrastada con revision/temario-oficial.json y los programas BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2).`}));
  const curriculum = row.docs.map(key => docs[key].label).join('; ');
  const note = `Cotejo curricular: ${curriculum}; ${row.detail}. Correspondencia con ${row.topics.join(', ')} contrastada con revision/temario-oficial.json y BOE-A-2025-25938/BOE-A-2025-26262. El temario de academia orienta la clasificación; las fuentes técnicas primarias determinan las respuestas.`;
  question.clasificacion.bloque_academia = `${curriculum}; ${row.detail}`;
  question.clasificacion.nota = note;
  question.revision.observaciones += ` ${note}`;
  question.comentarios = question.revision.observaciones;
  question.revision.fuentes.push(...refs);
  change.actualizada = structuredClone(question);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo ITIC Academy y temas oficiales añadido para 1601–1605.');
