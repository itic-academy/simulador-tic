const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-234.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  systems: {url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', label: 'ITIC Academy, bloque 30 Tecnologías de Sistemas de la Información, versión 2026'},
  software: {url: 'https://drive.google.com/file/d/1Og6yI-YaZ48UA3pBT-HQhTh7TfvdPW_C/view?usp=drivesdk', label: 'ITIC Academy, bloque 18/Tema 43 Protección jurídica, licencias y control del software, versión 2026.1 (26-08-2026)'},
  science: {url: 'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk', label: 'ITIC Academy, bloque 32 Inteligencia Artificial y Ciencia de Datos, versión 2026.1 (31-08-2026; actualización del archivo 19-10-2026)'},
  bi: {url: 'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk', label: 'ITIC Academy, bloque 34 Business Intelligence y Big Data, versión 2026.1 (16-09-2026)'},
  elearning: {url: 'https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view?usp=drivesdk', label: 'ITIC Academy, bloque 33 E-learning y Sistemas de Información Geográfica, versión 2026.1 (31-07-2026)'}
};
const mapping = {
  1486: {doc: 'systems', detail: 'PHP como lenguaje de desarrollo web y su CLI SAPI; complemento del bloque e-learning sobre tecnologías de formación digital', topics: ['A1-65', 'A2-II-9', 'A2-III-12']},
  1487: {doc: 'software', detail: 'licencias y protección jurídica del software; contraste con conceptos de software libre', topics: ['A1-69', 'A1-43', 'A2-II-14']},
  1488: {doc: 'science', detail: 'ciencia de datos, preprocesamiento y técnicas de reducción/resumen estadístico; bloque 34 para analítica y Big Data', topics: ['A1-71', 'A2-III-15']},
  1489: {doc: 'bi', detail: 'Business Intelligence, visualización analítica y cuadros de mando; bloque 32, ciclo de ciencia de datos y visualización', topics: ['A1-71', 'A2-II-4']},
  1490: {doc: 'elearning', detail: '§1.8 estándares e interoperabilidad de contenidos e-learning; bloque 30 como contexto de servicios web', topics: ['A1-73', 'A2-III-6']}
};
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  const row = mapping[c.id];
  const doc = docs[row?.doc];
  if (!q?.revision || !doc || !row) throw new Error(`Falta revisión o mapeo académico ${c.id}`);
  const topicLabels = row.topics.join('/');
  const note = `${doc.label}, ${row.detail}; temas oficiales contrastados con revision/temario-oficial.json y convocatorias BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2): ${topicLabels}. La academia se utiliza para encaje curricular y no reemplaza la fuente técnica primaria.`;
  q.clasificacion.bloque_academia = `${doc.label}, ${row.detail}; correspondencia ${topicLabels}.`;
  q.clasificacion.nota = note;
  if (!q.revision.observaciones.includes(note)) q.revision.observaciones += ` Cotejo curricular: ${note}`;
  q.comentarios = q.revision.observaciones;
  if (!q.revision.fuentes.some(f => f.url === doc.url)) q.revision.fuentes.push({url: doc.url, referencia: `${doc.label}, ${row.detail}; correspondencia ${topicLabels}`});
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo de ITIC Academy y temario oficial añadido a los IDs 1486–1490.');
