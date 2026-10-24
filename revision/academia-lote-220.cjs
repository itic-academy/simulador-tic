const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-220.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  1416: ['https://drive.google.com/file/d/1nXa2jkiUqpu31smkt5D8WswcTgEN7XlB/view?usp=drivesdk', 'ITIC Academy, bloque 47 Aplicaciones móviles y sistemas operativos, versión 2026.1 (30-09-2026): tecnologías web, PWA, nativas, híbridas y multiplataforma. Correspondencia A1-124/A2-II-1.'],
  1417: ['https://drive.google.com/file/d/18tJzWuBHyd4FbkzQIE5fIbSCRdlrt_1U/view?usp=drivesdk', 'ITIC Academy, bloque 22 Seguridad, ENS y Ciberseguridad, versión 2026.2 (26-08-2026), y bloque 48 Seguridad en redes y aplicaciones, actualización 2026: señuelos, detección y amenazas. Correspondencia A1-125/127/A2-II-13.'],
  1418: ['https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk', 'ITIC Academy, bloque 48 Seguridad en redes y en el nivel de aplicación, actualización 2026: suplantación, ataques de red y de aplicación. Correspondencia A1-125/127/A2-II-13/IV-12.'],
  1419: ['https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk', 'ITIC Academy, bloque 48 Seguridad en redes y en el nivel de aplicación, actualización 2026: seguridad del software y de aplicaciones. Correspondencia A1-126/A2-II-13.'],
  1420: ['https://drive.google.com/file/d/18tJzWuBHyd4FbkzQIE5fIbSCRdlrt_1U/view?usp=drivesdk', 'ITIC Academy, bloque 22 Seguridad, ENS y Ciberseguridad, versión 2026.2 (26-08-2026): Estrategia Nacional de Ciberseguridad y principios rectores. Correspondencia A1-127/A2-II-13.']
};
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  if (!q?.revision || !academy[c.id]) throw new Error(`Falta pregunta, registro o academia para ${c.id}`);
  const [url, block] = academy[c.id];
  const note = `Cotejo temático: ${block} El temario se emplea para asignar contexto; las fuentes primarias citadas por separado sustentan la respuesta.`;
  q.clasificacion.bloque_academia = block;
  q.clasificacion.nota = note;
  q.revision.observaciones = `${q.revision.observaciones} ${note}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url, referencia: `ITIC Academy, ${block}` });
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo de ITIC Academy añadido a las cinco preguntas del lote 220.');
