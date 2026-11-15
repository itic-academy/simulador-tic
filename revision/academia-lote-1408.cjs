const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1408.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  7341: {
    url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 30 Tecnologías de sistemas de información, edición 2026',
    detail: 'El material relaciona el contenido con A2-II-3 (características técnicas de lenguajes y paradigmas); se usa como orientación curricular y no se afirma que desarrolle específicamente #pragma de C.'
  },
  7342: {
    url: 'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk',
    title: 'ITIC Academy, bloque Inteligencia Artificial y Ciencia de Datos, versión 2026.1',
    detail: 'La sección de K-means/k-medoids explica asignación al centroide y actualización; el cuadro de algoritmos distingue clustering de clasificación supervisada. Mapea a A1-70/A1-71 y A2-III-5/A2-III-15.'
  },
  7343: {
    url: 'https://drive.google.com/file/d/15iokZokiVzk3qpTTQvMpDN0W27PL8tbv/view?usp=drivesdk',
    title: 'ITIC Academy, bloque E-learning y Sistemas de Información Geográfica, versión 2026.1',
    detail: 'El bloque corresponde al tema oficial A1-74 y señala expresamente que el programa A2 no contiene un tema autónomo de GIS; no se fuerza una etiqueta A2 para esta pregunta.'
  },
  7344: {
    url: 'https://drive.google.com/file/d/1nXa2jkiUqpu31smkt5D8WswcTgEN7XlB/view?usp=drivesdk',
    title: 'ITIC Academy, bloque Aplicaciones Móviles, versión 2026',
    detail: 'El material describe las capacidades móviles de GPS y conectividad, que contextualizan el uso de la posición; la definición normativa/técnica de LBS se comprueba aparte en OGC OpenLS. Se relaciona con GIS A1-74, aplicaciones móviles A1-124 y A2-IV-15.'
  },
  7345: {
    url: 'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk',
    title: 'ITIC Academy, bloque Business Intelligence y Big Data, versión 2026.1',
    detail: 'El apartado 3.3 distingue roll-up, drill-down, slice/dice, pivot/rotate y drill-through; clasifica el concepto en A1-75 y A2-II-4/A2-III-15.'
  }
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
assert.equal(log.cambios.length, 5);
for (const change of log.cambios) {
  const q = bank.preguntas.find(x => x.id === change.id);
  assert.ok(q?.revision, 'Falta revisión ' + change.id);
  for (const id of [...q.clasificacion.A1, ...q.clasificacion.A2]) assert.ok(official.has(id), 'Tema oficial inválido: ' + id);
  const doc = docs[change.id];
  const note = 'Cotejo curricular ITIC Academy/Drive: ' + doc.title + '. ' + doc.detail;
  q.clasificacion.bloque_academia = note;
  q.clasificacion.nota = (q.clasificacion.nota + ' ' + note).trim();
  q.comentarios = (q.comentarios + ' ' + note).trim();
  q.revision.observaciones = (q.revision.observaciones + ' ' + note).trim();
  q.revision.fuentes.push({ url: doc.url, referencia: doc.title + '; cotejo: ' + doc.detail });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo Academy/Drive registrado para 7341–7345 con clasificación A1/A2 oficial.');
