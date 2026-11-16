const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1429.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  7446: [{ url: 'https://drive.google.com/file/d/11xq0o8TLESDT7J2PLC_MVbZHGoqWmGa2/view?usp=drivesdk', title: 'ITIC Academy, bloque 07 Dirección pública, empleo, transparencia y unidad de mercado, edición 2026', detail: 'Correspondencia curricular directa con A1-23 (management público y modelos de gestión). La búsqueda en Drive no localizó una referencia literal al modelo concreto de las cinco R; la lista y su autoría se verifican en el artículo original de Jones y Thompson.' }],
  7447: [{ url: 'https://drive.google.com/file/d/1Y2IYzcNpOmrtdbPVR0Ygnruos4MMDxa8/edit?usp=drivesdk&ouid=107088454749630873035&rtpof=true&sd=true', title: 'ITIC Academy, bloque 12 Directivo TIC y planificación estratégica, edición 2026.1', detail: 'La revisión del bloque conserva las teorías clásicas de la organización, incluido Weber; la formulación exacta de sus ventajas técnicas se comprueba en el texto de Weber reimpreso por Gerth y Mills, no se atribuye al resumen curricular de Academy.' }],
  7448: [{ url: 'https://drive.google.com/file/d/11T-TKuGJGXeEKwwODM-FlF8pML3QMh_t/view?usp=drivesdk', title: 'ITIC Academy, bloque 08 Protección de datos, edición 2026.1', detail: 'Cobertura curricular directa del RGPD, sus derechos y la LOPDGDD (A1-27/A2-I-7). La búsqueda en Academy no localizó el plazo procesal específico del artículo 64.1; los seis meses y su cómputo se verifican en el BOE.' }],
  7449: [{ url: 'https://drive.google.com/file/d/1alTzv7f2Katg4EdxJ72SYkLm6UScCCho/view?usp=drivesdk', title: 'ITIC Academy, bloque 10 Gobernanza TIC y administración digital, edición 2026.4', detail: 'El bloque explica el modelo vigente del Real Decreto 1125/2024 y su evolución desde el RD 806/2014, por lo que ofrece contexto directo para interpretar el ítem como histórico. La composición de 2014 se comprueba en la disposición adicional quinta del BOE.' }],
  7450: [{ url: 'https://drive.google.com/file/d/1-xmHgvxArWY8GroFD1eSdyPrAQjkBpzo/view?usp=drivesdk', title: 'ITIC Academy, bloque 09 Organización y gestión de los sistemas de información, edición 2026.3', detail: 'Correspondencia curricular directa con la organización y funcionamiento de un centro de sistemas de información y la atención a usuarios (A1-34), e ITIL, incidencias y niveles de servicio (A1-106/A2-II-12). No se encontró en el material una norma que convierta la formulación del examen sobre “principios del CAU” en catálogo universal.' }]
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
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo Academy/Drive, convocatorias A1/A2 y temas oficiales registrado para 7446–7450.');
