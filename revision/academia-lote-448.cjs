const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-448.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(program => program.temas.map(topic => topic.id)));
const docs = {
  java: {
    url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',
    label: 'ITIC Academy, bloque 30, Tecnologías de Sistemas de Información, versión 2026.1; Java, Jakarta EE/JPA y persistencia.'
  },
  governance: {
    url: 'https://drive.google.com/file/d/1alTzv7f2Katg4EdxJ72SYkLm6UScCCho/view?usp=drivesdk',
    label: 'ITIC Academy, bloque 10, Gobernanza TIC y Administración Digital, actualización 2026; AEAD, servicios comunes/transversales y RD 1125/2024.'
  },
  ai: {
    url: 'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk',
    label: 'ITIC Academy, bloque 32, Inteligencia Artificial y Ciencia de Datos, nuevo temario 2026; machine learning, redes neuronales, clasificación y regresión.'
  },
  agile: {
    url: 'https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view?usp=drivesdk',
    label: 'ITIC Academy, bloque 15, Metodologías ágiles y ciclo de vida, edición 2026; A1-37/A1-88 y A2-D2, incluye Scrum y gestión del backlog.'
  },
  gis: {
    url: 'https://drive.google.com/file/d/1tVfcKtzyXWLEcINm_dwDActD-kLfpKva/view?usp=drivesdk',
    label: 'ITIC Academy, Tema 074, Sistemas de Información Geográfica; apartado de georreferenciación y sistemas de coordenadas, encuadrado en A1-74.'
  }
};
const mapping = {
  2551: { docs: ['java'], topics: ['A1-67', 'A2-III-10'], detail: 'el material académico contextualiza Java/Jakarta EE y persistencia; la semántica técnica de Hibernate se contrasta con la documentación oficial del proyecto.' },
  2552: { docs: ['governance'], topics: ['A1-49', 'A2-I-10'], detail: 'el bloque cubre gobernanza TIC y servicios comunes; carácter obligatorio, sustitutivo y excepciones se determinan por el RD 1125/2024, no por el material académico.' },
  2553: { docs: ['ai'], topics: ['A1-70', 'A2-III-5'], detail: 'el bloque incluye aprendizaje automático, clasificación, regresión y redes neuronales; la caracterización concreta de las tareas se contrasta con documentación técnica oficial.' },
  2554: { docs: ['agile'], topics: ['A1-88', 'A2-III-2'], detail: 'el bloque encuadra Scrum, metodologías ágiles y planificación; la definición normativa del artefacto procede de la Scrum Guide.' },
  2555: { docs: ['gis'], topics: ['A1-74'], detail: 'el Tema 074 incluye georreferenciación y sistemas de coordenadas. No se asigna A2 porque el programa oficial A2 no contiene un epígrafe específico de SIG/georreferenciación.' }
};

assert.equal(log.cambios.length, 5);
for (const change of log.cambios) {
  const row = mapping[change.id];
  const question = bank.preguntas.find(item => item.id === change.id);
  assert.ok(row && question?.revision, `Falta el cotejo curricular de ${change.id}`);
  for (const topic of [...row.topics, ...question.clasificacion.A1, ...question.clasificacion.A2]) {
    assert.ok(official.has(topic), `Tema oficial inexistente: ${topic}`);
  }
  question.clasificacion.A1 = row.topics.filter(topic => topic.startsWith('A1-'));
  question.clasificacion.A2 = row.topics.filter(topic => topic.startsWith('A2-'));
  const labels = row.docs.map(key => docs[key].label);
  const curriculum = labels.join('; ');
  const note = `Cotejo curricular: ${curriculum}. ${row.detail} Correspondencia contrastada con revision/temario-oficial.json y convocatorias A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262; el material académico aporta encuadre, no es la evidencia decisoria de la respuesta.`;
  question.clasificacion.bloque_academia = curriculum;
  question.clasificacion.nota = note;
  question.revision.observaciones = `${question.revision.observaciones} ${note}`.trim();
  question.comentarios = question.revision.observaciones;
  for (const key of row.docs) {
    const ref = { url: docs[key].url, referencia: `${docs[key].label} ${row.detail}` };
    if (!question.revision.fuentes.some(source => source.url === ref.url)) question.revision.fuentes.push(ref);
  }
  change.actualizada = structuredClone(question);
}

fs.writeFileSync(bankPath, `${JSON.stringify(bank, null, 2)}\n`);
fs.writeFileSync(logPath, `${JSON.stringify(log, null, 2)}\n`);
console.log('Cotejo ITIC Academy, temario oficial y convocatorias añadido para 2551–2555.');
