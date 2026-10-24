const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-239.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const doc = {url: 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk', label: 'ITIC Academy, bloque 39 Calidad y Mantenimiento, versión 2026.1 (23-09-2026)'};
const mapping = {
  1511: {detail: 'pruebas de regresión, defectos introducidos o descubiertos tras cambios y aseguramiento de la calidad', topics: ['A1-96', 'A1-98', 'A2-III-7', 'A2-III-13']},
  1512: {detail: 'modelos y evaluación de calidad del software; portabilidad y evolución del modelo ISO/IEC 25010', topics: ['A1-98', 'A2-III-13']},
  1513: {detail: 'despliegue, entornos de producción, responsabilidades operativas y DevOps; la correspondencia curricular no resuelve la falta de un modelo organizativo en el enunciado', topics: ['A1-97', 'A2-III-6']},
  1514: {detail: 'interfaz de gestión de configuración, control de cambios, entornos y despliegue', topics: ['A1-95', 'A1-102', 'A2-III-2', 'A2-III-6']},
  1515: {detail: 'EFQM 2025, calidad de los servicios de información y excelencia en instituciones públicas', topics: ['A1-23', 'A1-103']}
};
for (const change of log.cambios) {
  const question = bank.preguntas.find(item => item.id === change.id);
  const row = mapping[change.id];
  assert.ok(question?.revision && row, `Falta revisión o cotejo académico para ${change.id}`);
  const codes = row.topics.join('/');
  const source = {url: doc.url, referencia: `${doc.label}; ${row.detail}; correspondencia ${codes}, contrastada con revision/temario-oficial.json y BOE-A-2025-25938/BOE-A-2025-26262`};
  const note = `Cotejo curricular: ${doc.label}; ${row.detail}; temas oficiales ${codes} (revision/temario-oficial.json y BOE-A-2025-25938/BOE-A-2025-26262). El documento se usa para encaje curricular; no sustituye a las fuentes técnicas primarias citadas en las fichas. La cuestión 1513 sigue pendiente de contexto pese a su clasificación temática.`;
  question.clasificacion.bloque_academia = `${doc.label}; ${row.detail}; correspondencia ${codes}.`;
  question.clasificacion.nota = note;
  question.revision.observaciones += ` ${note}`;
  question.comentarios = question.revision.observaciones;
  question.revision.fuentes.push(source);
  change.actualizada = structuredClone(question);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo de academia y convocatorias añadido a los IDs 1511–1515.');
