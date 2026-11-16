const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1434.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const sys = 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk';
const os = 'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk';
const bi = 'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk';
const docs = {
  7471: [{ url: sys, title: 'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información, A1-65/66/67/68/72/77/85/107, edición 2026', detail: 'Cotejo curricular de desarrollo web, scripting de cliente y tecnologías XML; correspondencia A1-65/A2-II-9. AJAX y sus requisitos se verifican con MDN.' }],
  7472: [{ url: os, title: 'ITIC Academy, temas 59/62 Sistemas Operativos, edición 2026', detail: 'Cotejo curricular de sistemas operativos y Linux/Unix; correspondencia A1-62/A2-II-2. La naturaleza y compatibilidad de Wine se contrastan con WineHQ.' }],
  7473: [{ url: bi, title: 'ITIC Academy, bloque 34 Business Intelligence y Big Data, edición 2026', detail: 'Cotejo curricular de BI, almacenes de datos, OLTP/OLAP y explotación de información; correspondencia A1-75/A2-II-4/III-15. Se precisa la función operacional de OLTP frente al análisis con IBM.' }],
  7474: [{ url: bi, title: 'ITIC Academy, bloque 34 Business Intelligence y Big Data, edición 2026', detail: 'Cotejo curricular de BI y procesamiento analítico OLAP; correspondencia A1-75/A2-II-4/III-15. La pregunta se limita a la terna común documentada por IBM y registra una acepción especializada de VOLAP.' }],
  7475: [{ url: sys, title: 'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información, A1-65/66/67/68/72/77/85/107, edición 2026', detail: 'Cotejo curricular de lenguajes de marca y tecnologías derivadas de XML; correspondencia A1-77/A2-II-9. Las capacidades de Xerces, las reglas de DTD y el propósito de XSLT se verifican en Apache y W3C.' }]
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
console.log('Cotejo curricular actualizado para IDs 7471–7475.');
