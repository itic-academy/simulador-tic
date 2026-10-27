const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-261.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  systems: {url: 'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk', label: 'ITIC Academy, bloque 27 Sistemas Operativos, versión 2026.1 (14-08-2026)'},
  hardware: {url: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk', label: 'ITIC Academy, bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1 (31-08-2026)'},
  technology: {url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', label: 'ITIC Academy, bloque 30 Tecnologías de Sistemas de la Información, versión 2026.1 (31-08-2026)'},
  data: {url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', label: 'ITIC Academy, bloque 29 Bases de Datos, SQL y Modelado de Datos, versión 2026.1 (31-08-2026)'}
};
const mapping = {
  1621: {docs: ['systems'], detail: 'JCL se sitúa en el tratamiento de trabajos en sistemas z/OS y mainframe; la respuesta concreta procede del manual IBM (A1-62 y A2-IV-1)', topics: ['A1-62', 'A2-IV-1']},
  1622: {docs: ['hardware'], detail: 'arbitraje de acceso al bus en arquitectura de computadores (A1-52/A2-II-1); el bloque orienta la materia, pero no confirma la taxonomía ambigua del enunciado', topics: ['A1-52', 'A2-II-1']},
  1623: {docs: ['technology'], detail: 'el bloque 30 incluye CRM y gestión de clientes; el epígrafe oficial A1-72 cubre sistemas CRM y ERP. La definición se contrasta aparte con documentación de CRM analítico', topics: ['A1-72']},
  1624: {docs: ['data'], detail: 'el bloque de bases de datos orienta las reglas del modelo relacional y su administración (A1-63/A1-64/A2-IV-2); las reglas y fechas se contrastan con los artículos de Codd', topics: ['A1-63', 'A1-64', 'A2-IV-2']},
  1625: {docs: ['hardware'], detail: 'el bloque aborda dispositivos y tratamiento de información multimedia; el procesamiento de voz se encuadra en tratamiento de señal multimedia (A1-56)', topics: ['A1-56']}
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
for (const change of log.cambios) {
  const question = bank.preguntas.find(item => item.id === change.id);
  const row = mapping[change.id];
  assert.ok(question?.revision && row, `Falta revisión o cotejo académico para ${change.id}`);
  for (const topic of [...question.clasificacion.A1, ...question.clasificacion.A2, ...row.topics]) assert.ok(official.has(topic), `Tema oficial inexistente: ${topic}`);
  const refs = row.docs.map(key => ({url: docs[key].url, referencia: `${docs[key].label}; ${row.detail}. Correspondencia oficial cotejada con revision/temario-oficial.json y BOE-A-2025-25938 (A1)/BOE-A-2025-26262 (A2).`}));
  const curriculum = row.docs.map(key => docs[key].label).join('; ');
  const note = `Cotejo curricular: ${curriculum}; ${row.detail}. Correspondencia ${row.topics.join(', ')} contrastada con revision/temario-oficial.json y BOE-A-2025-25938/BOE-A-2025-26262. El temario de academia orienta la clasificación; no sustituye la evidencia técnica primaria.`;
  question.clasificacion.bloque_academia = `${curriculum}; ${row.detail}`;
  question.clasificacion.nota = note;
  question.revision.observaciones += ` ${note}`;
  question.comentarios = question.revision.observaciones;
  question.revision.fuentes.push(...refs);
  change.actualizada = structuredClone(question);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo ITIC Academy y temas oficiales añadido para 1621–1625.');
