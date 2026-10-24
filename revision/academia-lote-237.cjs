const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-237.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  hardware: {url: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk', label: 'ITIC Academy, bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1'},
  speech: {url: 'https://drive.google.com/file/d/0Bw-rS_kOHzMKQVFfV3cxQks2VGs/view?usp=drivesdk&resourcekey=0-3ynF5TtgOiaV5UVU2o1b8Q', label: 'ITIC Academy, tema 94, reconocimiento de voz, edición 2009'},
  ai: {url: 'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk', label: 'ITIC Academy, bloque 32 Inteligencia artificial y ciencia de datos, versión 2026.1'},
  blockchain: {url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view', label: 'ITIC Academy, bloque 30 Tecnologías de sistemas de información, versión 2026.1'},
  planning: {url: 'https://drive.google.com/file/d/1fti1UIhEIqK3pY8GBENi-4rTKwoEG8tF/view', label: 'ITIC Academy, bloque 12 Directivo TIC y planificación estratégica, versión 2026'},
  requirements: {url: 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view', label: 'ITIC Academy, bloque 38 Análisis, diseño y construcción de sistemas, versión 2026.1'}
};
const mapping = {
  1501: {doc: 'hardware', detail: 'tecnologías de digitalización y periféricos de entrada; referencia curricular A1-83 y A2-II-1', topics: ['A1-83', 'A2-II-1']},
  1502: {doc: 'speech', detail: 'reconocimiento de voz, rasgos acústicos y niveles de análisis del habla; cobertura general de IA cotejada también con el bloque 32 de 2026.1', topics: ['A1-70', 'A2-III-5']},
  1503: {doc: 'blockchain', detail: 'blockchain/DLT, tipos de redes, permisos y smart contracts', topics: ['A1-85']},
  1504: {doc: 'planning', detail: 'análisis estratégico de capacidades y recursos organizativos; planificación estratégica de sistemas de información', topics: ['A1-35', 'A1-87']},
  1505: {doc: 'requirements', detail: 'determinación, especificación y validación de requisitos de software', topics: ['A1-88', 'A2-III-3']}
};
for (const change of log.cambios) {
  const question = bank.preguntas.find(item => item.id === change.id);
  const row = mapping[change.id];
  const doc = docs[row?.doc];
  if (!question?.revision || !row || !doc) throw new Error(`Falta revisión o cotejo académico para ${change.id}`);
  const codes = row.topics.join('/');
  const source = {url: doc.url, referencia: `${doc.label}; ${row.detail}; correspondencia ${codes}, contrastada con revision/temario-oficial.json y BOE-A-2025-25938/BOE-A-2025-26262`};
  const note = `Cotejo curricular: ${doc.label}; ${row.detail}; temas oficiales ${codes} (revision/temario-oficial.json y BOE-A-2025-25938/BOE-A-2025-26262). El documento de academia se emplea para encaje curricular; la fuente técnica primaria citada en la ficha fundamenta la respuesta.`;
  question.clasificacion.bloque_academia = `${doc.label}; ${row.detail}; correspondencia ${codes}.`;
  question.clasificacion.nota = note;
  question.revision.observaciones += ` ${note}`;
  question.comentarios = question.revision.observaciones;
  question.revision.fuentes.push(source);
  change.actualizada = structuredClone(question);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo de academia y convocatorias añadido a los IDs 1501–1505.');
