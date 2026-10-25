const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-243.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  redes: {url: 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk', label: 'ITIC Academy, bloque 42 Redes, versión 2026.1 (29-09-2026)'},
  movil: {url: 'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk', label: 'ITIC Academy, bloque 46 Redes inalámbricas y móviles, versión 2026.1 (30-09-2026)'},
  seguridad: {url: 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk', label: 'ITIC Academy, bloque 48 Seguridad en redes y aplicaciones, versión 2026'}
};
const mapping = {
  1531: {doc: 'redes', detail: '§1.3 Conmutación de paquetes y §8 Redes públicas y acceso; X.25 y las interfaces de red pública', topics: ['A1-108', 'A1-120', 'A2-IV-10']},
  1532: {doc: 'redes', detail: '§5 Gestión y administración de redes: modelos de organización y funciones de control por niveles', topics: ['A1-120', 'A2-IV-9']},
  1533: {doc: 'redes', detail: '§8.3 CATV y acceso por cable; DOCSIS sobre redes HFC y particularidades de EuroDOCSIS', topics: ['A1-108', 'A1-121', 'A2-IV-7']},
  1534: {doc: 'movil', detail: '§12.3 UMTS: UTRA FDD, bandas de 900 MHz y 2100 MHz en los despliegues de España', topics: ['A1-123', 'A2-IV-15']},
  1535: {doc: 'seguridad', detail: '§6.7 Directorios, Kerberos y federación de identidades', topics: ['A1-125', 'A2-IV-12']}
};
const topics = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
for (const change of log.cambios) {
  const question = bank.preguntas.find(item => item.id === change.id);
  const row = mapping[change.id];
  assert.ok(question?.revision && row, `Falta revisión o cotejo académico para ${change.id}`);
  for (const topic of row.topics) assert.ok(topics.has(topic), `Tema oficial inexistente: ${topic}`);
  const doc = docs[row.doc];
  const source = {url: doc.url, referencia: `${doc.label}; ${row.detail}; correspondencia cotejada con revision/temario-oficial.json y convocatorias BOE-A-2025-25938/BOE-A-2025-26262.`};
  const note = `Cotejo curricular: ${doc.label}; ${row.detail}. Se contrastaron los epígrafes del material de academia con los temas oficiales ${row.topics.join(', ')} de revision/temario-oficial.json y las convocatorias BOE-A-2025-25938/BOE-A-2025-26262. La academia se emplea para el encaje curricular; la evidencia primaria indicada en la ficha sustenta la respuesta.`;
  question.clasificacion.bloque_academia = `${doc.label}; ${row.detail}.`;
  question.clasificacion.nota = note;
  question.revision.observaciones += ` ${note}`;
  question.comentarios = question.revision.observaciones;
  question.revision.fuentes.push(source);
  change.actualizada = structuredClone(question);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo de ITIC Academy y temas oficiales A1/A2 añadido para 1531–1535.');
