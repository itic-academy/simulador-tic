const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1436.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const agile = 'https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view?usp=drivesdk';
const design = 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const sec = 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk';
const docs = {
  7481: [{ url: agile, title: 'ITIC Academy, temas 37/86/88 Metodologías Ágiles y Ciclo de Vida, edición 2026', detail: 'Cotejo curricular de metodologías ágiles Scrum/Kanban y modelos de ciclo de vida (A1-88/A2-III-2); se confirma la naturaleza de DSDM con Agile Business Consortium y el carácter estructurado de SSADM con literatura técnica.' }],
  7482: [{ url: design, title: 'ITIC Academy, bloque 38 Análisis, Diseño y Construcción de Sistemas de Información, edición 2026', detail: 'Cotejo curricular de UML y análisis/diseño orientado a objetos (A1-93/A2-III-9); la categorización de diagramas se verifica en la especificación normativa OMG UML 2.5.1.' }],
  7483: [{ url: agile, title: 'ITIC Academy, temas 37/86/88 Metodologías Ágiles y Ciclo de Vida, edición 2026', detail: 'Cotejo curricular de Kanban y Scrum (A1-37/A1-88/A2-III-2); las reglas y prácticas de cada método se contrastan con sus guías oficiales vigentes.' }],
  7484: [
    { url: sec, title: 'ITIC Academy, bloque 48 Seguridad en Redes y en el Nivel de Aplicación, edición 2026', detail: 'Cotejo curricular de seguridad de aplicaciones (A1-126/A2-II-13), integrado con prácticas de desarrollo y operación segura.' },
    { url: design, title: 'ITIC Academy, bloque 38 Análisis, Diseño y Construcción de Sistemas de Información, edición 2026', detail: 'Cotejo curricular de construcción, pruebas y ciclo de vida del software (A2-III-6), relacionado con integración de seguridad continua.' }
  ],
  7485: [{ url: design, title: 'ITIC Academy, bloque 38 Análisis, Diseño y Construcción de Sistemas de Información, edición 2026', detail: 'Cotejo curricular de diseño orientado a objetos, lenguajes y construcción de sistemas (A1-93/A2-II-3/A2-III-9); la propiedad descrita se comprueba en documentación oficial de Eiffel.' }]
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const boeA1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const boeA2 = 'https://www.boe.es/buscar/doc.php?id=BOE-A-2025-26262';
assert.equal(log.cambios.length, 5);
for (const change of log.cambios) {
  const q = bank.preguntas.find(x => x.id === change.id);
  assert.ok(q?.revision, 'Falta revisión ' + change.id);
  for (const id of [...q.clasificacion.A1, ...q.clasificacion.A2]) assert.ok(official.has(id), 'Tema oficial inválido: ' + id);
  const notes = docs[change.id];
  assert.ok(notes?.length, 'Falta cotejo curricular ' + change.id);
  const matchA1 = q.clasificacion.A1.join(', ') || 'sin tema específico A1 asignado';
  const matchA2 = q.clasificacion.A2.join(', ') || 'sin tema específico A2 asignado';
  const priorNotes = q.revision.observaciones.split(' Cotejo curricular:')[0];
  const priorComments = q.comentarios.split(' Cotejo curricular:')[0];
  q.revision.fuentes = q.revision.fuentes.filter(source => !source.referencia.startsWith('Cotejo curricular:') && !source.referencia.startsWith('Convocatoria oficial Cuerpo Superior TIC, A1,') && !source.referencia.startsWith('Convocatoria oficial Cuerpo de Gestión de Sistemas e Informática, A2,'));
  const curriculumNotes = [];
  for (const doc of notes) {
    const note = `Cotejo curricular: ${doc.title}. ${doc.detail}`;
    curriculumNotes.push(note);
    q.revision.fuentes.push({ url: doc.url, referencia: note });
  }
  q.revision.fuentes.push(
    { url: boeA1, referencia: `Convocatoria oficial Cuerpo Superior TIC, A1, BOE-A-2025-25938; correspondencia curricular con ${matchA1}.` },
    { url: boeA2, referencia: `Convocatoria oficial Cuerpo de Gestión de Sistemas e Informática, A2, BOE-A-2025-26262; correspondencia curricular con ${matchA2}.` }
  );
  q.clasificacion.bloque_academia = notes.map(x => `${x.title}: ${x.detail}`).join(' ');
  q.clasificacion.nota = `Cotejo de Academy registrado. ${notes.map(x => x.detail).join(' ')}`;
  q.comentarios = [priorComments, ...curriculumNotes].filter(Boolean).join(' ');
  q.revision.observaciones = [priorNotes, ...curriculumNotes].filter(Boolean).join(' ');
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo curricular actualizado para IDs 7481–7485.');
