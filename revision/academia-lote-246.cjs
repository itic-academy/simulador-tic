const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-246.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  datos: {url: 'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk', label: 'ITIC Academy, bloque 32 Inteligencia Artificial y Ciencia de Datos, versión 2026.1 (31-08-2026)'},
  cliente: {url: 'https://drive.google.com/file/d/1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ/view?usp=drivesdk', label: 'ITIC Academy, bloque 28 Arquitectura SOA y requisitos no funcionales, versión 2026.1 (25-09-2026)'},
  firma: {url: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk', label: 'ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma, versión 2026.1 (17-09-2026)'},
  nube: {url: 'https://drive.google.com/file/d/16Er3cneQ-Vik3zSjYq6zQUOfSKK4vxVu/view?usp=drivesdk', label: 'ITIC Academy, bloque 25 Cloud Computing, versión 2026.1 (19-08-2026)'},
  hardware: {url: 'https://docs.google.com/document/d/1i7gM8fFljlK2jLDlCxr_h0titV5bPo5U/edit?usp=drivesdk&ouid=107088454749630873035&rtpof=true&sd=true', label: 'ITIC Academy, bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1 (31-08-2026)'}
};
const mapping = {
  1546: {docs: ['datos'], detail: 'ciclo de vida de ciencia de datos: extracción, transformación, limpieza y carga ETL; el temario oficial A2-II-4 incluye almacenes de datos y OLTP/OLAP', topics: ['A1-71', 'A2-II-4']},
  1547: {docs: ['cliente'], detail: 'procesamiento cooperativo y arquitectura cliente-servidor; el bloque relaciona el contenido con arquitectura A1-58/A2-II-6', topics: ['A1-58', 'A2-II-6']},
  1548: {docs: ['firma'], detail: 'certificados, identificación/firma y servicios de confianza eIDAS; correspondencia con A1-80/A1-81 y A2-I-6', topics: ['A1-80', 'A1-81', 'A2-I-6']},
  1549: {docs: ['datos'], detail: 'el apartado A2 D5 incluye expresamente tipos abstractos de datos y estructuras de datos; la convocatoria A2-II-5 corresponde a modelado y estructuras relacionales, sin forzar una equivalencia A1', topics: ['A2-III-5']},
  1550: {docs: ['nube', 'hardware'], detail: 'modelos de despliegue cloud públicos, privados e híbridos; encaje en A1-55/A1-91 y A2-II-1/A2-IV-6, con protección de datos en A2-I-7', topics: ['A1-55', 'A1-91', 'A2-II-1', 'A2-I-7', 'A2-IV-6']}
};
const topics = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
for (const change of log.cambios) {
  const question = bank.preguntas.find(item => item.id === change.id);
  const row = mapping[change.id];
  assert.ok(question?.revision && row, `Falta revisión o cotejo académico para ${change.id}`);
  for (const topic of row.topics) assert.ok(topics.has(topic), `Tema oficial inexistente: ${topic}`);
  const refs = row.docs.map(key => {
    const doc = docs[key];
    return {url: doc.url, referencia: `${doc.label}; ${row.detail}; correspondencia cotejada con revision/temario-oficial.json y convocatorias BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2).`};
  });
  const curricula = row.docs.map(key => docs[key].label).join(' y ');
  const note = `Cotejo curricular: ${curricula}; ${row.detail}. La correspondencia con los temas oficiales ${row.topics.join(', ')} se contrastó con revision/temario-oficial.json y las convocatorias BOE-A-2025-25938/BOE-A-2025-26262. La academia sirve de encaje curricular; la conclusión se sustenta en las fuentes técnicas o normativas primarias de la ficha.`;
  question.clasificacion.bloque_academia = `${curricula}; ${row.detail}.`;
  question.clasificacion.nota = note;
  question.revision.observaciones += ` ${note}`;
  question.comentarios = question.revision.observaciones;
  question.revision.fuentes.push(...refs);
  change.actualizada = structuredClone(question);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo ITIC Academy y temas oficiales A1/A2 añadido para 1546–1550.');
