const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-215.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const mapping = {
  1391: ['https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view', 'Bloque 36, temas 79–81, seguridad, criptografía, identificación y firma electrónica, versión 2026.', 'A1-80; A2-I-6'],
  1392: ['https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view', 'Bloque 30, Tecnologías de sistemas de información, versión 2026.1, tema A1-85, blockchain y DLT.', 'A1-85'],
  1393: ['https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view', 'Bloque 38, Análisis, diseño y construcción de sistemas, versión 2026.1, análisis funcional, requisitos e historias de usuario.', 'A1-88; A2-III-3'],
  1394: ['https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view', 'Bloque 38, Análisis, diseño y construcción de sistemas, versión 2026.1, metodologías ágiles: Scrum y Kanban.', 'A1-88'],
  1395: ['https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view', 'Bloque 38, Análisis, diseño y construcción de sistemas, versión 2026.1, análisis funcional y modelado de procesos.', 'A1-88; A2-III-3']
};
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  const [url, block, topics] = mapping[c.id];
  const note = `Cotejo temático con ITIC Academy: ${block} Correspondencia oficial: ${topics}.`;
  q.clasificacion.bloque_academia = block;
  q.clasificacion.nota = note;
  q.revision.observaciones = `${q.revision.observaciones} ${note}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url, referencia: `ITIC Academy, ${block} Correspondencia: ${topics}.` });
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo de academia añadido a las cinco preguntas del lote 215.');
