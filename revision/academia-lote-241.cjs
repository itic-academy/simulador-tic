const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-241.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const doc = {url: 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk', label: 'ITIC Academy, bloque 42 Redes, versión 2026.1 (29-09-2026)'};
const mapping = {
  1521: {detail: '§2.3 Fibra óptica: familias multimodo y denominaciones OM; correspondencia de temario A1-108/A1-110 y A2-IV-7 (medios de transmisión guiados)', topics: ['A1-108', 'A1-110', 'A2-IV-7']},
  1522: {detail: '§1.2 Modelos de referencia OSI y TCP/IP: capa de presentación; correspondencia A1-111 y A2-II-8', topics: ['A1-111', 'A2-II-8']},
  1523: {detail: '§2.3 Fibra óptica y medios guiados: fibra oscura; correspondencia A1-108 y A2-IV-7', topics: ['A1-108', 'A2-IV-7']},
  1524: {detail: '§7.3 Jerarquías digitales: PDH, SDH (JDS) y OTN; correspondencia A1-113 y A2-IV-10', topics: ['A1-113', 'A2-IV-10']},
  1525: {detail: '§4.8 Seguridad en redes locales y apartado de redes inalámbricas: terminología Wi-Fi/WLAN y mecanismos de seguridad; correspondencia A1-114/A1-125 y A2-IV-11/A2-IV-12', topics: ['A1-114', 'A1-125', 'A2-IV-11', 'A2-IV-12']}
};
for (const change of log.cambios) {
  const question = bank.preguntas.find(item => item.id === change.id);
  const row = mapping[change.id];
  assert.ok(question?.revision && row, `Falta revisión o cotejo académico para ${change.id}`);
  const codes = row.topics.join('/');
  const source = {url: doc.url, referencia: `${doc.label}; ${row.detail}; correspondencia contrastada con revision/temario-oficial.json y convocatorias BOE-A-2025-25938/BOE-A-2025-26262.`};
  const note = `Cotejo curricular: ${doc.label}; ${row.detail}. Se comprobó el contenido del PDF en los epígrafes citados y los temas en revision/temario-oficial.json y las convocatorias BOE-A-2025-25938/BOE-A-2025-26262. La academia se utiliza como encaje curricular; las fuentes técnicas primarias de la ficha sustentan la respuesta.`;
  question.clasificacion.bloque_academia = `${doc.label}; ${row.detail}.`;
  question.clasificacion.nota = note;
  question.revision.observaciones += ` ${note}`;
  question.comentarios = question.revision.observaciones;
  question.revision.fuentes.push(source);
  change.actualizada = structuredClone(question);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo de ITIC Academy y temas oficiales añadido para 1521–1525.');
