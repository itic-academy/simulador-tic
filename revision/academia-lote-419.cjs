const fs = require('node:fs');
const path = require('node:path');
const bp = path.join(__dirname, '..', 'preguntas_preparatic.json');
const lp = path.join(__dirname, 'cambios-lote-419.json');
const bank = JSON.parse(fs.readFileSync(bp, 'utf8'));
const log = JSON.parse(fs.readFileSync(lp, 'utf8'));
const valid = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const calls = [
  'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',
  'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262'
];
const docs = {
  ens: {
    url: 'https://drive.google.com/file/d/18tJzWuBHyd4FbkzQIE5fIbSCRdlrt_1U/view?usp=drivesdk',
    label: 'ITIC Academy, bloque 22 «Seguridad, ENS y ciberseguridad», versión 2026.2 (26/08/2026): encuadra RD 311/2022, adecuación al ENS y ENCS; incluye principios, riesgos y controles. La clasificación de los reactivos se limita a los epígrafes oficiales citados.'
  },
  admin: {
    url: 'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk',
    label: 'ITIC Academy, bloque 03 «Actuación administrativa y Administración digital», versión 2026.2 (01/10/2026): incluye A1 tema 22, legislación de sociedad de la información y administración electrónica en España y Europa.'
  },
  hardware: {
    url: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',
    label: 'ITIC Academy, bloque «Hardware, servidores, CPD, almacenamiento y virtualización», versión 2026.1 (31/08/2026): incluye A1 tema 52, Grid Computing, y A2 T1 sobre arquitecturas escalables y de altas prestaciones.'
  }
};
const map = {
  2406: { doc: 'ens', topics: ['A1-48', 'A2-I-9', 'A2-II-13'], detail: 'Norma de SGSI relacionada con el marco ENS y los contenidos de seguridad de sistemas.' },
  2407: { doc: 'ens', topics: ['A1-48', 'A2-I-9', 'A2-II-13'], detail: 'Protección de información en tránsito y almacenada según ENS, art. 22.' },
  2408: { doc: 'ens', topics: ['A1-127', 'A2-II-13'], detail: 'Estrategia Nacional de Ciberseguridad y seguridad de sistemas.' },
  2409: { doc: 'admin', topics: ['A1-22', 'A2-I-9'], detail: 'Acceso electrónico a información y procedimientos administrativos de la UE.' },
  2410: { doc: 'hardware', topics: ['A1-52', 'A2-II-1'], detail: 'Grid computing y arquitecturas de cómputo distribuidas y de altas prestaciones.' }
};
if (log.cambios.map(c => c.id).join(',') !== '2406,2407,2408,2409,2410') throw new Error('El lote 419 no coincide con los IDs esperados.');
for (const c of log.cambios) {
  const q = bank.preguntas.find(item => item.id === c.id);
  const m = map[c.id], d = docs[m.doc];
  if (!q?.revision) throw new Error(`Falta revisión para ${c.id}`);
  if (!m.topics.every(topic => valid.has(topic))) throw new Error(`Tema no oficial para ${c.id}`);
  q.clasificacion.A1 = m.topics.filter(topic => topic.startsWith('A1-'));
  q.clasificacion.A2 = m.topics.filter(topic => topic.startsWith('A2-'));
  const note = `Cotejo curricular: ${d.label} ${m.detail} Drive: ${d.url}. Correspondencia validada contra revision/temario-oficial.json y los anexos de las convocatorias A1/A2 GSI BOE-A-2025-25938 y BOE-A-2025-26262 (${calls.join('; ')}). La academia orienta la clasificación; la respuesta se fundamenta en las fuentes primarias de cada reactivo.`;
  q.clasificacion.bloque_academia = d.url;
  q.clasificacion.nota = note;
  q.revision.observaciones += ` ${note}`;
  q.comentarios = q.revision.observaciones;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(lp, JSON.stringify(log, null, 2) + '\n');
fs.writeFileSync(bp, JSON.stringify(bank, null, 2) + '\n');
console.log('Cotejo curricular del lote 419 completado.');
