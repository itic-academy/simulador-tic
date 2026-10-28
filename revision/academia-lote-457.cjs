const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-457.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const refs = {
  quality: {url: 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk', label: 'ITIC Academy, Bloque 39 Calidad y Mantenimiento, edición 2026.1 (23-09-2026): modelos de calidad, McCall, criterios y factores, pruebas y métricas.'},
  cloud: {url: 'https://drive.google.com/file/d/16Er3cneQ-Vik3zSjYq6zQUOfSKK4vxVu/view?usp=drivesdk', label: 'ITIC Academy, Bloque 25 Cloud Computing, edición 2026.1 (19-08-2026): A1-55/A2-II-1; incluye cloud-native, Kubernetes e Infrastructure as Code (IaC), §7.5.'}
};
const mapping = {
  2596: {topics: ['A1-98', 'A2-III-13'], ref: 'quality', detail: 'El bloque incluye el modelo de McCall; la lista exacta de criterios vinculados a reusabilidad se contrasta con el informe primario de McCall, Richards y Walters.'},
  2597: {topics: ['A1-98', 'A2-III-13'], ref: 'quality', detail: 'El bloque cubre modelos de calidad; la distinción entre factores de alto nivel y criterios internos se verifica con el informe original de McCall.'},
  2598: {topics: ['A1-98', 'A2-III-13'], ref: 'quality', detail: 'El bloque estudia el modelo histórico de McCall; la agrupación product transition se verifica con el informe original y se marca como conocimiento histórico.'},
  2599: {topics: ['A1-55', 'A1-102', 'A2-II-1', 'A2-IV-4'], ref: 'cloud', detail: 'El bloque cloud-native incluye IaC expresamente en §7.5; la correspondencia cloud se asigna a A1-55/A2-II-1 y automatización/configuración a A1-102/A2-IV-4.'},
  2600: {topics: ['A1-47', 'A1-98', 'A2-II-10', 'A2-III-13'], ref: 'quality', detail: 'El bloque proporciona contexto de garantía de calidad y modelos; el listado R1–R7 y el carácter genérico de los riesgos se comprueban directamente en el PGGC oficial de 1991, no se infieren del material académico.'}
};

assert.equal(log.cambios.length, 5);
for (const change of log.cambios) {
  const row = mapping[change.id];
  const q = bank.preguntas.find(item => item.id === change.id);
  assert.ok(row && q?.revision, `Falta el cotejo curricular de ${change.id}`);
  for (const topic of [...row.topics, ...q.clasificacion.A1, ...q.clasificacion.A2]) assert.ok(official.has(topic), `Tema oficial inexistente: ${topic}`);
  q.clasificacion.A1 = row.topics.filter(topic => topic.startsWith('A1-'));
  q.clasificacion.A2 = row.topics.filter(topic => topic.startsWith('A2-'));
  const doc = refs[row.ref];
  const note = `Cotejo curricular: ${doc.label} ${row.detail} Correspondencias contrastadas con revision/temario-oficial.json y convocatorias A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262. ITIC Academy orienta el encuadre, no sustituye las fuentes técnicas primarias.`;
  q.clasificacion.bloque_academia = doc.label;
  q.clasificacion.nota = `${q.revision.observaciones} ${note}`.trim();
  q.revision.observaciones = `${q.revision.observaciones} ${note}`.trim();
  q.comentarios = q.revision.observaciones;
  if (!q.revision.fuentes.some(item => item.url === doc.url)) q.revision.fuentes.push({url: doc.url, referencia: `${doc.label} ${row.detail}`});
  change.actualizada = structuredClone(q);
}

fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), `${JSON.stringify(bank, null, 2)}\n`);
fs.writeFileSync(logPath, `${JSON.stringify(log, null, 2)}\n`);
console.log('Cotejo curricular ITIC Academy, temario oficial y convocatorias añadido para 2596–2600.');
