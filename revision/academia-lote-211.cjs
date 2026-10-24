const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-211.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const mapping = {
  1371: ['https://drive.google.com/file/d/1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ/view', 'Bloque 28, Arquitectura SOA y requisitos no funcionales, versión 2026.1 (25-09-2026), §§2.5–2.6: servicios web SOAP/REST, composición, orquestación y coreografía.', 'A1-58; A2-II-6'],
  1372: ['https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view', 'Bloque 27, Sistemas Operativos, versión 2026.1 (14-08-2026), apartados de entrada/salida y DMA.', 'A1-59; A2-II-2/A2-IV-1'],
  1373: ['https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view', 'Bloque 27, Sistemas Operativos, versión 2026.1 (14-08-2026), Windows Subsystem for Linux y virtualización.', 'A1-61; A2-II-2/A2-IV-1'],
  1374: ['https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view', 'Bloque 27, Sistemas Operativos, versión 2026.1 (14-08-2026), memoria virtual, tablas de páginas y TLB.', 'A1-59; A2-II-2/A2-IV-1'],
  1375: ['https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view', 'Bloque 29, Bases de datos, SQL y modelado de datos, versión 2026.1 (31-08-2026), arquitectura ANSI/SPARC.', 'A1-63; A2-II-5']
};
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  const [url, block, topics] = mapping[c.id];
  const note = `Cotejo temático con ITIC Academy: ${block} Correspondencia con el programa oficial: ${topics}.`;
  q.clasificacion.bloque_academia = block;
  q.clasificacion.nota = note;
  q.comentarios = `${q.comentarios || ''} ${note}`.trim();
  q.revision.observaciones = `${q.revision.observaciones} ${note}`;
  q.revision.fuentes.push({ url, referencia: `ITIC Academy, ${block} Correspondencia: ${topics}.` });
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo de academia añadido a las cinco preguntas del lote 211.');
