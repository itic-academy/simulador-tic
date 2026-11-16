const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const log = JSON.parse(fs.readFileSync(path.join(__dirname, 'cambios-lote-1440.json'), 'utf8'));
const docs = {
  7501: [{ url: 'https://drive.google.com/file/d/1y8QAt955aL_65VRCmo-ijgttcj0xiYTn/view?usp=drivesdk', title: 'ITIC Academy, Tema 121: Correo electrónico y servicios de directorio, edición 2026', detail: 'Cotejo curricular con correo electrónico y servicios de mensajería. El mapa de convocatoria vigente sitúa los servicios básicos de Internet en A1-109 y A2-IV-13; el tema de academia conserva la numeración histórica 121 y su documento incluye C6/C7/C10 de A2. La respuesta normativa se contrasta con RFC, no se toma la academia como fuente primaria.' }],
  7502: [{ url: 'https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk', title: 'ITIC Academy, bloque 6: Economía, sociedad, empleo y transformación digital, edición 2026.2', detail: 'El índice curricular incluye políticas de igualdad, discapacidad y dependencia (A1-16; mapeo A2 O5, relacionado con A2-I-5). La definición concreta de acoso se coteja en el artículo 2.f) del texto consolidado del RDL 1/2013.' }],
  7503: [{ url: 'https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk', title: 'ITIC Academy, bloque 6: Economía, sociedad, empleo y transformación digital, edición 2026.2', detail: 'El propio temario enumera el impacto de las TIC en la economía y sus principales magnitudes (A1-19). No identifica equivalente específico A2 para esta magnitud macroeconómica. El dato de 2019 se coteja con la publicación original de ONTSI.' }],
  7504: [{ url: 'https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk', title: 'ITIC Academy, bloque 5: Contratación, presupuestos y compra TIC, edición 2026', detail: 'El bloque contiene la Ley 9/2017 y asigna los contratos públicos a A1-11; el propio mapa indica que no tiene equivalente en temario A2. La respuesta se contrasta con los artículos 38 y 39 LCSP consolidados.' }],
  7505: [{ url: 'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk', title: 'ITIC Academy, bloque 3: Actuación administrativa y Administración digital, edición 2026', detail: 'El bloque incluye fuentes del Derecho administrativo y el mapa asigna el contenido a A1-7; para A2 no se identifica equivalencia curricular específica de fuentes del Derecho. El precepto se verifica en el artículo 1 del Código Civil consolidado.' }]
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
  const priorNotes = q.revision.observaciones.split(' Cotejo curricular:')[0];
  const priorComments = q.comentarios.split(' Cotejo curricular:')[0];
  q.revision.fuentes = q.revision.fuentes.filter(source => !source.referencia.startsWith('Cotejo curricular:') && !source.referencia.startsWith('Convocatoria oficial Cuerpo Superior TIC, A1,') && !source.referencia.startsWith('Convocatoria oficial Cuerpo de Gestión de Sistemas e Informática, A2,'));
  const curriculumNotes = [];
  for (const doc of notes) {
    const note = `Cotejo curricular: ${doc.title}. ${doc.detail}`;
    curriculumNotes.push(note);
    q.revision.fuentes.push({ url: doc.url, referencia: note });
  }
  const a1 = q.clasificacion.A1.join(', ') || 'sin tema específico A1 asignado';
  const a2 = q.clasificacion.A2.join(', ') || 'sin tema específico A2 asignado';
  q.revision.fuentes.push({ url: boeA1, referencia: `Convocatoria oficial Cuerpo Superior TIC, A1, BOE-A-2025-25938; temas asignados: ${a1}.` });
  q.revision.fuentes.push({ url: boeA2, referencia: `Convocatoria oficial Cuerpo de Gestión de Sistemas e Informática, A2, BOE-A-2025-26262; temas asignados: ${a2}.` });
  q.revision.observaciones = [priorNotes, ...curriculumNotes].filter(Boolean).join(' Cotejo curricular: ');
  q.comentarios = priorComments + ' Cotejo curricular: ' + curriculumNotes.map(n => n.replace(/^Cotejo curricular: /, '')).join(' ');
  const entry = change.actualizada;
  entry.revision = structuredClone(q.revision);
  entry.clasificacion = structuredClone(q.clasificacion);
  entry.comentarios = q.comentarios;
}
fs.writeFileSync(path.join(__dirname, 'cambios-lote-1440.json'), JSON.stringify(log, null, 2) + '\n');
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
console.log('Cotejo curricular y convocatorias añadidos: cinco registros.');
