const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-217.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  1401: ['https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view', 'ITIC Academy, bloque 30, Tecnologías de sistemas de información, versión 2026.1: ecosistema de construcción y paquetes; correspondencia A1-65.'],
  1402: ['https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view', 'ITIC Academy, bloque 39, Calidad y mantenimiento, versión 2026: tipologías de mantenimiento de software; correspondencia A1-101 y A2-III-8.'],
  1403: ['https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view', 'ITIC Academy, bloque 39, Calidad y mantenimiento, versión 2026: versionado, releases y gestión de cambios; correspondencia A1-102 y A2-IV-4. El temario orienta la clasificación, no resuelve la falta de fuente primaria sobre la taxonomía concreta.'],
  1404: ['https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view', 'ITIC Academy, bloque 3, Actuación administrativa, versión 2026: programa de Cartas de Servicios; correspondencia A1-22.'],
  1405: ['https://drive.google.com/file/d/17UpEFvYfjQ4iUrx8UNNTJIFcj5xO4vlz/view', 'ITIC Academy, bloque 40, Gestión documental, versión 2026: procesos ISO 15489-1, metadatos y ciclo de vida; correspondencia A1-104 y A2-II-16.']
};
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  if (!q || !q.revision || !academy[c.id]) throw new Error(`Falta la pregunta, registro o referencia de academia para ${c.id}`);
  const [url, block] = academy[c.id];
  const note = `Cotejo temático: ${block} La academia se usa para ubicar el contenido en el temario; las fuentes normativas/técnicas primarias citadas por separado sustentan la respuesta.`;
  q.clasificacion.bloque_academia = block;
  q.clasificacion.nota = note;
  q.revision.observaciones = `${q.revision.observaciones} ${note}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url, referencia: `ITIC Academy, ${block}` });
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo de ITIC Academy añadido a las cinco preguntas del lote 217.');
