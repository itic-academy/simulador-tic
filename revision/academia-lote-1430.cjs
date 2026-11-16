const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1430.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  7451: [{ url: 'https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view?usp=drivesdk', title: 'ITIC Academy, bloque 15 Metodologías ágiles y modelos de ciclo de vida, versión 2026.1', detail: 'El índice vincula expresamente Lean con A1-37 y metodologías de desarrollo con A2-III-2. La terminología de cada uno de los siete principios de Poppendieck se contrasta con GAO-20-590G y la bibliografía original, no se atribuye literalmente a Academy.' }],
  7452: [
    { url: 'https://drive.google.com/file/d/1alTzv7f2Katg4EdxJ72SYkLm6UScCCho/view?usp=drivesdk', title: 'ITIC Academy, bloque 10 Gobernanza TIC y Administración digital, versión 2026.4', detail: 'Actualiza el modelo de gobernanza y la Agencia Estatal de Administración Digital con el RD 1125/2024, en correspondencia con A1-30.' },
    { url: 'https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view?usp=drivesdk', title: 'ITIC Academy, bloque 17 Adquisición de sistemas, alternativas y rentabilidad, versión 2026.2', detail: 'Cubre adquisición y contratación TIC, análisis de alternativas y viabilidad (A1-40/A2-II-15); el alcance, las excepciones y el cómputo del plazo se verifican en los arts. 13–14 del BOE.' }
  ],
  7453: [{ url: 'https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view?usp=drivesdk', title: 'ITIC Academy, bloque 17 Adquisición de sistemas, alternativas y rentabilidad, versión 2026.2', detail: 'El documento incluye decisión multicriterio discreta y la asignación de pesos por entropía; encaje A1-40/A2-II-15. La formulación y procedencia de la ponderación entrópica se comprueban en Zeleny (1974).' }],
  7454: [{ url: 'https://docs.google.com/document/d/1DH-igjyag_aw_p36LaNS1djSWTKTakxb/edit?usp=drivesdk', title: 'ITIC Academy, temas 40–42 Adquisición de sistemas, alternativas y rentabilidad de inversiones, versión 2026', detail: 'El apartado de hardware recoge presupuesto, amortización relativa al tiempo de utilidad y factores medioambientales; también trata la evolución tecnológica y rápida obsolescencia. Este cotejo apoya que son aspectos de análisis, no requisitos universales que por sí solos obliguen a comprar. A1-41/A2-II-15.' }],
  7455: [{ url: 'https://drive.google.com/file/d/1Og6yI-YaZ48UA3pBT-HQhTh7TfvdPW_C/view?usp=drivesdk', title: 'ITIC Academy, bloque 18 Protección jurídica, licencias y control del software, versión 2026.1', detail: 'Cotejo directo del TRLPI, protección autoral de programas, licencias y control del software; A1-43/A2-II-14. La inclusión y exigencia de originalidad se comprueban en los arts. 10.1 y 96.2 del BOE.' }]
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
  q.revision.fuentes = q.revision.fuentes.filter(source =>
    !source.referencia.startsWith('Cotejo curricular:') &&
    !source.referencia.startsWith('Convocatoria oficial Cuerpo Superior TIC, A1,') &&
    !source.referencia.startsWith('Convocatoria oficial Cuerpo de Gestión de Sistemas e Informática, A2,')
  );
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
console.log('Cotejo Academy/Drive, convocatorias A1/A2 y temas oficiales registrado para 7451–7455.');
