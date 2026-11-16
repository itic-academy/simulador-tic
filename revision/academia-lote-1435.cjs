const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1435.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  7476: [{ url: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk', title: 'ITIC Academy, temas 79/80/81 Seguridad, Criptografía, Identificación y Firma, edición 2026', detail: 'Cotejo curricular de formatos de firma electrónica y criptografía (A1-80/A2-I-6/A2-IV-12). La distinción entre nomenclatura histórica XAdES-A y el perfil actual LTA se fundamenta en ETSI.' }],
  7477: [{ url: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk', title: 'ITIC Academy, temas 79/80/81 Seguridad, Criptografía, Identificación y Firma, edición 2026', detail: 'Cotejo curricular de sintaxis criptográfica, claves y firma digital (A1-80/A2-I-6/A2-IV-12); los tipos de contenido se verifican en RFC 2315/5652.' }],
  7478: [{ url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', title: 'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información, edición 2026', detail: 'Cotejo curricular con el temario A1-85 sobre blockchain y smart contracts, y A2-II-3/A2-III-5 sobre lenguajes y fundamentos de programación/algoritmos. La historia y capacidades de Go, clientes Ethereum y Solidity se contrastan en sus fuentes primarias.' }],
  7479: [
    { url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', title: 'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información, edición 2026', detail: 'Cotejo curricular del ciclo de vida de sistemas y sus modelos (A1-86/A2-III-1); las fases del ciclo se contrastan con la guía de ingeniería de software de NASA.' },
    { url: 'https://drive.google.com/file/d/1fti1UIhEIqK3pY8GBENi-4rTKwoEG8tF/view?usp=drivesdk', title: 'ITIC Academy, bloque 12 Planificación Estratégica, edición 2026', detail: 'Cotejo curricular de planificación, seguimiento y gestión de proyectos TIC (A1-35/A2-III-2); la distinción entre modelo de proceso y técnica de implementación se contrasta con fuentes de ingeniería de software.' }
  ],
  7480: [{ url: 'https://drive.google.com/file/d/1fti1UIhEIqK3pY8GBENi-4rTKwoEG8tF/view?usp=drivesdk', title: 'ITIC Academy, bloque 12 Planificación Estratégica, edición 2026', detail: 'Cotejo curricular de planificación estratégica organizacional (A1-35/A2-III-2); el ciclo de objetivos, opciones y selección se contrasta con guías públicas de planificación estratégica.' }]
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
console.log('Cotejo curricular actualizado para IDs 7476–7480.');
