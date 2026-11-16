const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1437.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const design = 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const ux = 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk';
const quality = 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk';
const docs = {
  7486: [{ url: design, title: 'ITIC Academy, bloque 38 Análisis, Diseño y Construcción de Sistemas de Información, edición 2026', detail: 'Cotejo de encaje con fundamentos de análisis/construcción del software y con el programa oficial A2-III-5 (estrategias de diseño y análisis de algoritmos); el temario de academia se usa como mapa curricular, y la comparación de cotas se comprueba independientemente con MIT OpenCourseWare.' }],
  7487: [{ url: design, title: 'ITIC Academy, bloque 38 Análisis, Diseño y Construcción de Sistemas de Información, edición 2026', detail: 'Cotejo curricular de diseño orientado a objetos (A1-93/A2-II-3/III-9); los conceptos y principios se contrastan con documentación de Oracle y Eiffel.' }],
  7488: [
    { url: ux, title: 'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información, edición 2026', detail: 'Cotejo general de diseño de interfaces y tecnologías de cliente; la correspondencia oficial específica es A1-44/A2-III-14 (usabilidad/UX). La diferencia Hick-Hyman/Fitts se valida con fuentes de HCI.' },
    { url: design, title: 'ITIC Academy, bloque 38 Análisis, Diseño y Construcción de Sistemas de Información, edición 2026', detail: 'Cotejo curricular de diseño de interfaces de usuario y prototipos; no se atribuye al material una fórmula psicológica concreta.' }
  ],
  7489: [{ url: design, title: 'ITIC Academy, bloque 38 Análisis, Diseño y Construcción de Sistemas de Información, edición 2026', detail: 'Cotejo curricular de prototipado e interacción durante análisis/diseño (A1-94/A2-III-3); la diferencia entre prototipo evolutivo y desechable se contrasta con NIST y SEI.' }],
  7490: [{ url: quality, title: 'ITIC Academy, bloque 39 Calidad y Mantenimiento del Software, edición 2026', detail: 'Cotejo curricular de calidad del producto, evaluación y aseguramiento de procesos (A1-98/A2-III-13); la interpretación se contrasta con ISO/IEC 25010 y procesos de QA.' }]
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
console.log('Cotejo curricular actualizado para IDs 7486–7490.');
