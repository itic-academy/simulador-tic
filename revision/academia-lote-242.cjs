const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-242.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const doc = {url: 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk', label: 'ITIC Academy, bloque Redes, versión 2026.1 (29-09-2026)'};
const mapping = {
  1526: {detail: '§2.4 Medios no guiados: transmisión inalámbrica; BLE y banda ISM de 2,4 GHz', topics: ['A1-114', 'A2-IV-11']},
  1527: {detail: '§2.4 Medios no guiados: transmisión inalámbrica; frecuencias de IEEE 802.11b/g', topics: ['A1-114', 'A2-IV-11']},
  1528: {detail: '§1.2 Modelos OSI y TCP/IP y §9.2 Nivel de red: IPv4/IPv6; servicio y encaminamiento IP', topics: ['A1-108', 'A1-115', 'A2-II-8']},
  1529: {detail: '§4.4 Dispositivos de interconexión y §4.5 VLAN; aprendizaje y reenvío de tramas en redes LAN', topics: ['A1-110', 'A1-118', 'A2-IV-8']},
  1530: {detail: '§4.4 Dispositivos de interconexión: puente transparente y switch de capa 2', topics: ['A1-110', 'A1-118', 'A2-IV-8']}
};
for (const change of log.cambios) {
  const question = bank.preguntas.find(item => item.id === change.id);
  const row = mapping[change.id];
  assert.ok(question?.revision && row, `Falta revisión o cotejo académico para ${change.id}`);
  const codes = row.topics.join('/');
  const source = {url: doc.url, referencia: `${doc.label}; ${row.detail}; correspondencia contrastada con revision/temario-oficial.json y convocatorias BOE-A-2025-25938/BOE-A-2025-26262.`};
  const note = `Cotejo curricular: ${doc.label}; ${row.detail}. Se comprobó el contenido del PDF y la correspondencia de temas en revision/temario-oficial.json y las convocatorias BOE-A-2025-25938/BOE-A-2025-26262. La academia sirve de encaje curricular; las fuentes técnicas primarias de la ficha sustentan la respuesta.`;
  question.clasificacion.bloque_academia = `${doc.label}; ${row.detail}.`;
  question.clasificacion.nota = note;
  question.revision.observaciones += ` ${note}`;
  question.comentarios = question.revision.observaciones;
  question.revision.fuentes.push(source);
  change.actualizada = structuredClone(question);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo de ITIC Academy y temas oficiales A1/A2 añadido para 1526–1530.');
