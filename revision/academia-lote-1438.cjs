const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1438.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const quality = 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk';
const networks = 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const docs = {
  7491: [{ url: quality, title: 'ITIC Academy, bloque 39 Calidad y Mantenimiento, edición 2026', detail: 'Cotejo curricular con el apartado de calidad, modelos de excelencia y evaluación (A1-103/A2-III-13). El documento de academia aporta el encuadre formativo; la ponderación histórica se comprueba en la guía AEVAL/BOE EFQM 2013.' }],
  7492: [{ url: quality, title: 'ITIC Academy, bloque 39 Calidad y Mantenimiento, edición 2026', detail: 'Cotejo curricular con garantía de calidad y madurez de procesos (A1-96/A2-III-13); la nomenclatura de SW-CMM se verifica separadamente en publicaciones del Software Engineering Institute.' }],
  7493: [{ url: quality, title: 'ITIC Academy, bloque 39 Calidad y Mantenimiento, edición 2026', detail: 'Cotejo curricular con EFQM, ISO 9004 y evaluación de calidad (A1-103/A2-III-13); no se atribuye al material de academia la afirmación sobre certificabilidad, que se comprueba con ISO.' }],
  7494: [{ url: quality, title: 'ITIC Academy, bloque 39 Calidad y Mantenimiento, edición 2026', detail: 'Cotejo curricular con calidad del software, requisitos y evaluación del producto (A1-96/98, A2-III-3/13); el sentido de adecuación funcional y calidad en uso se contrasta con ISO/IEC 25010:2023 e ISO/IEC 25019:2023.' }],
  7495: [{ url: networks, title: 'ITIC Academy, bloque 42 Redes, edición 2026', detail: 'Cotejo curricular con Internet, DNS y servicios básicos de red (A1-109/A2-IV-13); la separación entre coordinación de políticas y gestión operativa de la zona raíz se contrasta con la documentación vigente de IANA/PTI.' }]
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
console.log('Cotejo curricular actualizado para IDs 7491–7495.');
