const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1401.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  7306: { url: null, title: 'Búsqueda ITIC Academy/Drive: OMT y autores', detail: 'Se buscaron expresamente OMT, Object Modeling Technique y Rumbaugh; no se localizó un material Academy 2026 directamente identificable para esta técnica. La respuesta se apoya en la bibliografía primaria de la obra y las actas de ECOOP.' },
  7307: { url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', title: 'ITIC Academy, bloque Bases de Datos, SQL y Modelado de Datos, edición 2026', detail: 'El bloque cotejado cubre A1-63/A1-64/A1-89 y A2-T5/D4 (modelado de datos, diseño lógico/físico y metodologías). La delimitación exacta de ASI 6.1 frente a DSI 6.1 se fundamenta en los manuales oficiales de MÉTRICA v3.' },
  7308: { url: 'https://drive.google.com/file/d/1IWbbWLAMbUPNy8PPecKUIWLpvUtawNQs/view?usp=drivesdk', title: 'ITIC Academy, tema 31 RISP, Datos Abiertos y Transparencia, edición 2026', detail: 'El documento identifica el tema A1-31 y A2-I-9 e incluye reutilización de información pública y datos abiertos. La definición jurídica concreta se verifica directamente en EUR-Lex.' },
  7309: { url: 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk', title: 'ITIC Academy, bloque 42 Redes, edición 2026', detail: 'Cotejo curricular general del área de redes; la búsqueda de un documento 2026 dedicado específicamente a Red SARA/PdP no localizó material identificable. La clasificación y el tipo de PdP se contrastan con la NTI publicada en el BOE. La Academy no resuelve qué conectividad tiene la sede concreta de Melilla.' },
  7310: { url: 'https://drive.google.com/file/d/1LuUHoQr8oDmptteHIQ72VdCvJFsnu3LF/view?usp=drivesdk', title: 'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información, actualización octubre de 2026', detail: 'El temario cotejado incluye A1-65 (arquitectura web y frameworks) y tecnologías Java, Jakarta EE, Spring, PHP y otras. Las fuentes oficiales de cada framework sustentan la identificación del ecosistema Java o Ruby.' }
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
assert.equal(log.cambios.length, 5);
for (const change of log.cambios) {
  const q = bank.preguntas.find(x => x.id === change.id);
  assert.ok(q?.revision, `Falta revisión ${change.id}`);
  for (const id of [...q.clasificacion.A1, ...q.clasificacion.A2]) assert.ok(official.has(id), `Tema oficial inválido: ${id}`);
  const doc = docs[change.id];
  const note = `Cotejo curricular ITIC Academy/Drive: ${doc.title}. ${doc.detail}`;
  q.clasificacion.bloque_academia = note;
  q.clasificacion.nota = `${q.clasificacion.nota} ${note}`.trim();
  q.comentarios = `${q.comentarios} ${note}`.trim();
  q.revision.observaciones = `${q.revision.observaciones} ${note}`.trim();
  if (doc.url) q.revision.fuentes.push({ url: doc.url, referencia: `${doc.title}; cotejo: ${doc.detail}` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo Academy/Drive registrado para 7306–7310; se documentan las ausencias de materiales específicos y el límite probatorio sobre la sede de Melilla.');
