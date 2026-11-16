const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1428.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  7441: [{ url: 'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk', title: 'ITIC Academy, bloque 03 Actuación administrativa y administración digital, edición 2026', detail: 'El bloque cubre las Leyes 39/2015 y 40/2015 y el régimen jurídico administrativo. La delimitación concreta del objeto legal de la Ley 40/2015 se contrasta con su artículo 1 en el BOE.' }],
  7442: [{ url: 'https://drive.google.com/file/d/1KTz7CNz88u_4zyVLC2oYQBnmJRHIG7J7/view?usp=drivesdk', title: 'ITIC Academy, bloque 02 Unión Europea, edición 2026', detail: 'Correspondencia directa con las instituciones de la UE y la Comisión. La búsqueda de Academy no devolvió la frecuencia semanal del Colegio; se confirma con el artículo 5 del Reglamento interno vigente de 2024.' }],
  7443: [{ url: 'https://drive.google.com/file/d/1dW2ffNhCduFHJ1hI2nT6fqs_G8DeNpo3/view?usp=drivesdk', title: 'ITIC Academy, bloque 03 Actuación administrativa y administración digital, edición 2026', detail: 'Correspondencia curricular con la Ley 39/2015 y los servicios de administración digital. La búsqueda por artículo 17 y plazo de cinco años no localizó esa cifra en Academy; se comprueba directamente el texto consolidado del BOE.' }],
  7444: [{ url: 'https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk', title: 'ITIC Academy, bloque 06 Economía, sociedad, empleo y transformación digital, edición 2026', detail: 'Correspondencia curricular con estructura social y políticas de igualdad; la edición 2026 mantiene el epígrafe de igualdad de género. La diferencia entre objeto de la Ley y medidas positivas se verifica en los artículos 1 y 11 de la Ley Orgánica 3/2007.' }],
  7445: [{ url: 'https://drive.google.com/file/d/1alTzv7f2Katg4EdxJ72SYkLm6UScCCho/view?usp=drivesdk', title: 'ITIC Academy, bloque 10 Gobernanza TIC y administración digital, edición 2026', detail: 'Correspondencia temática con modernización digital de la Administración y servicios electrónicos. La búsqueda del plan específico 2016–2020 no localizó su exposición en Academy; sus prioridades se verifican con la comunicación histórica COM(2016) 179 de la Comisión.' }]
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
  const matchA1 = q.clasificacion.A1.join(', ') || 'sin tema específico de la convocatoria A1';
  const matchA2 = q.clasificacion.A2.join(', ') || 'sin tema específico de la convocatoria A2';
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
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo Academy/Drive, convocatorias A1/A2 y temas oficiales registrado para 7441–7445.');
