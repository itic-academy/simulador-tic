const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-238.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  database: {url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', label: 'ITIC Academy, bloque 29 Bases de Datos, SQL y Modelado de Datos, versión 2026.1 (31-08-2026)'},
  metric: {url: 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk', label: 'ITIC Academy, bloque 38 Análisis, diseño y construcción de sistemas, versión 2026.1 (18-09-2026)'}
};
const mapping = {
  1506: {doc: 'database', detail: 'modelo entidad-relación, entidades, tipos fuertes y débiles y atributos', topics: ['A1-63', 'A1-64', 'A2-II-5']},
  1507: {doc: 'metric', detail: 'MÉTRICA v3, análisis del sistema y definición de interfaces de usuario', topics: ['A1-88', 'A1-95', 'A2-III-2']},
  1508: {doc: 'metric', detail: 'MÉTRICA v3, perfiles y participantes en el desarrollo de sistemas', topics: ['A1-95', 'A2-III-2']},
  1509: {doc: 'metric', detail: 'MÉTRICA v3, especificación de requisitos de software (ERS)', topics: ['A1-88', 'A1-95', 'A2-III-3']},
  1510: {doc: 'metric', detail: 'MÉTRICA v3, establecimiento y especificación de requisitos mediante casos de uso', topics: ['A1-88', 'A1-95', 'A2-III-3']}
};
for (const change of log.cambios) {
  const question = bank.preguntas.find(item => item.id === change.id);
  const row = mapping[change.id];
  const doc = docs[row?.doc];
  if (!question?.revision || !row || !doc) throw new Error(`Falta revisión o cotejo académico para ${change.id}`);
  const codes = row.topics.join('/');
  const source = {url: doc.url, referencia: `${doc.label}; ${row.detail}; correspondencia ${codes}, contrastada con revision/temario-oficial.json y BOE-A-2025-25938/BOE-A-2025-26262`};
  const note = `Cotejo curricular: ${doc.label}; ${row.detail}; temas oficiales ${codes} (revision/temario-oficial.json y BOE-A-2025-25938/BOE-A-2025-26262). El material de academia se usa para encaje curricular; la fuente técnica primaria citada en la ficha fundamenta la respuesta.`;
  question.clasificacion.bloque_academia = `${doc.label}; ${row.detail}; correspondencia ${codes}.`;
  question.clasificacion.nota = note;
  question.revision.observaciones += ` ${note}`;
  question.comentarios = question.revision.observaciones;
  question.revision.fuentes.push(source);
  change.actualizada = structuredClone(question);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo de academia y convocatorias añadido a los IDs 1506–1510.');
