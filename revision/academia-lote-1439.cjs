const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1439.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const networks = 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const wireless = 'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk';
const protocols = 'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk';
const docs = {
  7496: [{ url: networks, title: 'ITIC Academy, bloque 42 Redes, edición 2026', detail: 'Cotejo curricular con tecnologías de acceso, medios y redes de telecomunicaciones (A1-108/112, A2-IV-7); las correspondencias de números UIT-T se validan en el catálogo oficial de recomendaciones.' }],
  7497: [{ url: networks, title: 'ITIC Academy, bloque 42 Redes, edición 2026', detail: 'Cotejo curricular de acceso de banda ancha y medios de transmisión (A1-108/112, A2-IV-7); la diferencia entre línea xDSL y multiplexación óptica se comprueba con UIT-T.' }],
  7498: [{ url: networks, title: 'ITIC Academy, bloque 42 Redes, edición 2026', detail: 'Cotejo curricular con redes de transporte óptico y WDM (A1-113/A2-IV-10); las rejillas CWDM/DWDM se contrastan de forma independiente con UIT-T G.694.2/G.694.1.' }],
  7499: [{ url: wireless, title: 'ITIC Academy, bloque 46 Redes inalámbricas y comunicaciones móviles, edición 2026', detail: 'Cotejo curricular con IEEE 802.11/Wi-Fi y características técnicas (A1-114/A2-IV-11); el alcance histórico de 802.11ac se verifica en IEEE SA y en certificación Wi-Fi Alliance.' }],
  7500: [{ url: protocols, title: 'ITIC Academy, bloque 43 Protocolos, edición 2026', detail: 'Cotejo curricular con QoS, redes convergentes, VoIP/ToIP y servicios de voz (A1-108/A2-IV-14); las métricas MOS y el efecto de la latencia se comprueban en recomendaciones UIT-T.' }]
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
console.log('Cotejo curricular actualizado para IDs 7496–7500.');
