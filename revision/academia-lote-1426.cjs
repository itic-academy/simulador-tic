const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1426.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  7431: [{ url: 'https://drive.google.com/file/d/1nHGBMG4P3il5v4hZ1-RKdHmGzUPiwqnA/view?usp=drivesdk', title: 'ITIC Academy, bloque 45 Correo electrónico, mensajería y servicios de directorio, edición 2026', detail: 'Correspondencia directa con el epígrafe oficial de servicios de mensajería. La búsqueda específica de IRC devuelve también material de mensajería instantánea anterior; no se atribuye al bloque una historia exhaustiva de los primeros chats.' }],
  7432: [{ url: 'https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk', title: 'ITIC Academy, bloque 50 Videoconferencia, SSO y trabajo colaborativo, edición 2026', detail: 'Correspondencia directa con sistemas de videoconferencia y protocolos. El documento incluye la familia H.323; la recomendación vigente y su alcance de red de paquetes se verifican con ITU-T.' }],
  7433: [{ url: 'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk', title: 'ITIC Academy, bloque 43 Protocolos, edición 2026', detail: 'Correspondencia directa con el modelo OSI y sus capas, incluido el ámbito del tema oficial A1-111/A2-II-8; la definición de la función de sesión se contrasta con ITU-T X.200.' }],
  7434: [{ url: 'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk', title: 'ITIC Academy, bloque 32 Inteligencia artificial y ciencia de datos, edición 2026', detail: 'La búsqueda en Drive devuelve OWL Lite en material sobre tecnologías de conocimiento/datos; se registra como correspondencia temática. La clasificación exacta de OWL 1 y la diferencia con perfiles OWL 2 se contrastan con W3C. El temario oficial A1-76 menciona expresamente semánticas y ontologías.' }],
  7435: [{ url: 'https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk', title: 'ITIC Academy, bloque 50 Videoconferencia, SSO y trabajo colaborativo, edición 2026', detail: 'Correspondencia con calidad de comunicaciones y videoconferencia; el material Protocolos (bloque 43) aporta el cruce con VoIP. ITU-T P.800.1/P.800.2 aclaran que MOS puede provenir de opinión subjetiva o de modelos objetivos.' }]
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const boe = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
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
  for (const doc of notes) {
    const note = `Cotejo curricular: ${doc.title}. ${doc.detail}`;
    q.revision.fuentes.push({ url: doc.url, referencia: note });
    q.clasificacion.nota = (q.clasificacion.nota + ' ' + note).trim();
    q.comentarios = (q.comentarios + ' ' + note).trim();
    q.revision.observaciones = (q.revision.observaciones + ' ' + note).trim();
  }
  q.revision.fuentes.push(
    { url: boe, referencia: `Convocatoria oficial Cuerpo Superior TIC, A1, BOE-A-2025-25938; correspondencia curricular con ${matchA1}.` },
    { url: boeA2, referencia: `Convocatoria oficial Cuerpo de Gestión de Sistemas e Informática, A2, BOE-A-2025-26262; correspondencia curricular con ${matchA2}.` }
  );
  q.clasificacion.bloque_academia = notes.map(x => `${x.title}: ${x.detail}`).join(' ');
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo Academy/Drive, convocatorias A1/A2 y temas oficiales registrado para 7431–7435.');
