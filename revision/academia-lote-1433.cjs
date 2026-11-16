const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1433.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  7466: [{ url: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk', title: 'ITIC Academy, Hardware A1-52/53/54/56/57/132 A2-T1, edición 2026', detail: 'Cotejo curricular de centros de proceso de datos, infraestructura y eficiencia/gestión energética; correspondencia A1-53/A2-II-1. La fórmula y vigencia de PUE se verifican con ISO/IEC 30134-2:2026.' }],
  7467: [{ url: 'https://drive.google.com/file/d/16Er3cneQ-Vik3zSjYq6zQUOfSKK4vxVu/view?usp=drivesdk', title: 'ITIC Academy, Cloud Computing A1-55 A2-T1, edición 2026', detail: 'Cotejo curricular de PaaS y despliegue de aplicaciones en nube (A1-55/A2-II-1); la lista exacta de runtimes depende del entorno de App Engine y se valida con Google Cloud.' }],
  7468: [
    { url: 'https://drive.google.com/file/d/1nXa2jkiUqpu31smkt5D8WswcTgEN7XlB/view?usp=drivesdk', title: 'ITIC Academy, bloque 47 Aplicaciones Móviles, edición 2026', detail: 'Cotejo curricular de frameworks multiplataforma para aplicaciones móviles (A1-124).' },
    { url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', title: 'ITIC Academy, Tecnologías de Sistemas de Información, edición 2026', detail: 'Cotejo curricular de tecnologías .NET y desarrollo de aplicaciones (A2-II-3/A2-III-11); vigencia y plataforma vigente contrastadas en Microsoft Learn.' }
  ],
  7469: [{ url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', title: 'ITIC Academy, Bases de Datos A1-63/64/89 A2-T5/D4/C2, edición 2026', detail: 'Incluye SGBD y modelo ANSI/SPARC (A1-63/A2-II-5); los tres niveles se contrastan con la publicación técnica NBS/NIST.' }],
  7470: [{ url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', title: 'ITIC Academy, Bases de Datos A1-63/64/89 A2-T5/D4/C2, edición 2026', detail: 'Cotejo curricular de SQL sobre el modelo relacional (A1-64/A2-II-5); semántica de UPDATE contrastada con documentación actual del gestor PostgreSQL.' }]
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
console.log('Cotejo Academy/Drive, convocatorias A1/A2 y temas oficiales registrado para 7466–7470.');
