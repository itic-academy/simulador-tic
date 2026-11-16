const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1427.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  7436: [{ url: 'https://drive.google.com/file/d/1nHGBMG4P3il5v4hZ1-RKdHmGzUPiwqnA/view?usp=drivesdk', title: 'ITIC Academy, bloque 45 Correo, mensajería y servicios de directorio, edición 2026', detail: 'Correspondencia curricular directa con correo electrónico y servicios de mensajería. La búsqueda de PGP/OpenPGP/S/MIME en el material accesible no localizó una explicación técnica específica; el uso de ambos formatos para cifrado de mensaje se verifica con RFC 3156, RFC 9580 y RFC 8551.' }],
  7437: [{ url: 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk', title: 'ITIC Academy, bloque 42 Redes, edición 2026', detail: 'Cotejo temático con el programa de redes y transmisión. Las búsquedas en Drive por Nyquist, baud y tasa de símbolos no devolvieron una explicación específica; por ello la cota y sus hipótesis se fundamentan en el trabajo original de Nyquist y el manual técnico citado.' }],
  7438: [{ url: 'https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk', title: 'ITIC Academy, bloque 50 Videoconferencia, SSO y trabajo colaborativo, edición 2026', detail: 'El bloque ofrece contexto curricular general sobre colaboración y enlaza con la Guía de Comunicación Digital; las búsquedas no hallaron allí las tres pautas históricas de LinkedIn. Se atribuyen solo al fascículo oficial de 2013, sin calificarlas como obligaciones vigentes.' }],
  7439: [{ url: 'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk', title: 'ITIC Academy, bloque 46 Redes inalámbricas y comunicaciones móviles, edición 2026', detail: 'Correspondencia temática con comunicaciones móviles. La búsqueda W-CDMA/UMTS en el material Academy actual no localizó el detalle sobre multicódigo; la especificación física vigente de ETSI/3GPP determina la respuesta.' }],
  7440: [{ url: 'https://drive.google.com/file/d/12Wg-7ntV5f97Fsxj9YLqHqeYerH6PW48/view?usp=drivesdk', title: 'ITIC Academy, tema 003 Constitución (III), edición 2025', detail: 'Coincidencia directa con el epígrafe A1 de comunidades autónomas y su organización constitucional. El PDF de Constitución consolidada accesible en Drive también contiene el art. 147; para confirmar vigencia se contrasta con el texto consolidado del BOE a 20-05-2026.' }]
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
  const matchA1 = q.clasificacion.A1.join(', ');
  const matchA2 = q.clasificacion.A2.join(', ');
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
    { url: boeA1, referencia: `Convocatoria oficial Cuerpo Superior TIC, A1, BOE-A-2025-25938; correspondencia con temas ${matchA1}.` },
    { url: boeA2, referencia: `Convocatoria oficial Cuerpo de Gestión de Sistemas e Informática, A2, BOE-A-2025-26262; correspondencia con temas ${matchA2}.` }
  );
  q.clasificacion.bloque_academia = notes.map(x => `${x.title}: ${x.detail}`).join(' ');
  q.clasificacion.nota = `Cotejo de Academia registrado. ${notes.map(x => x.detail).join(' ')}`;
  q.comentarios = [priorComments, ...curriculumNotes].filter(Boolean).join(' ');
  q.revision.observaciones = [priorNotes, ...curriculumNotes].filter(Boolean).join(' ');
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo Academy/Drive, convocatorias A1/A2 y temas oficiales registrado para 7436–7440.');
