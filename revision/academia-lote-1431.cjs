const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1431.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  7456: [{ url: 'https://drive.google.com/file/d/1Og6yI-YaZ48UA3pBT-HQhTh7TfvdPW_C/view?usp=drivesdk', title: 'ITIC Academy, bloque 18 Protección jurídica, licencias y control del software, versión 2026.1', detail: 'Cotejo curricular de propiedad intelectual y protección jurídica del software, correspondiente a A1-43/A2-II-14. La identificación de la directiva que sustituyó a 91/250 y su regla de protección se verifican en EUR-Lex.' }],
  7457: [{ url: 'https://drive.google.com/file/d/1fB8jeg7SA1k3gCCapKlWX1VLLksWb5qO/view?usp=drivesdk', title: 'ITIC Academy, Tema 044 Accesibilidad y usabilidad', detail: 'El temario desarrolla W3C, accesibilidad web y estándares WCAG (A1-44/A2-III-14), donde se contextualiza la iniciativa WAI. La expansión del acrónimo se comprueba en la página oficial del W3C.' }],
  7458: [{ url: 'https://drive.google.com/file/d/1fB8jeg7SA1k3gCCapKlWX1VLLksWb5qO/view?usp=drivesdk', title: 'ITIC Academy, Tema 044 Accesibilidad y usabilidad', detail: 'El bloque trata usabilidad en ISO, familia ISO 25000 y serie ISO 9241 (A1-44/A2-III-14), además de calidad software (A1-98/A2-III-13). Sus referencias a ediciones anteriores sirven de encaje curricular; vigencia y alcance se comprueban en las fichas actuales de ISO.' }],
  7459: [{ url: 'https://drive.google.com/file/d/1fB8jeg7SA1k3gCCapKlWX1VLLksWb5qO/view?usp=drivesdk', title: 'ITIC Academy, Tema 044 Accesibilidad y usabilidad', detail: 'Incluye W3C y las pautas WCAG 2.1, encaje A1-44/A2-III-14. Para resolver el distractor sobre compatibilidad y sustitución se usa la explicación vigente de W3C WAI, no solo la edición histórica del material.' }],
  7460: [{ url: 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk', title: 'ITIC Academy, bloque 48 Seguridad de Redes y Aplicación, versión 2026', detail: 'Cotejo curricular del ENS y su marco vigente, correspondiente a A1-48/A2-I-9. El contenido exacto de los principios básicos se verifica en el artículo 5 del RD 311/2022.' }]
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
console.log('Cotejo Academy/Drive, convocatorias A1/A2 y temas oficiales registrado para 7456–7460.');
