const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-216.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const url = 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view';
const block = 'ITIC Academy, bloque 38, Análisis, diseño y construcción de sistemas, versión 2026.1: diseño modular/acoplamiento (1396); prototipos y requisitos (1397); diseño, procesos MÉTRICA v3 y calidad (1398–1400).';
const mapping = {
  1396: 'A1-93; A2-III-9',
  1397: 'A1-94; A2-III-3',
  1398: 'A1-95; A2-III-2',
  1399: 'A1-95; A2-III-13',
  1400: 'A1-95; A2-III-2'
};
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  const topics = mapping[c.id];
  const note = `Cotejo temático con ${block} Correspondencia con el programa oficial A1/A2: ${topics}. La academia orienta la clasificación temática; las fuentes técnicas primarias citadas sustentan las respuestas.`;
  q.clasificacion.bloque_academia = block;
  q.clasificacion.nota = note;
  q.revision.observaciones = `${q.revision.observaciones} ${note}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url, referencia: `ITIC Academy, ${block} Correspondencia: ${topics}.` });
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo de academia añadido a las cinco preguntas del lote 216.');
