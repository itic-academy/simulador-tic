const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-219.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  1411: ['https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view', 'ITIC Academy, bloque 42 Redes y bloque 43 Protocolos, versión 2026.1 (29-09-2026): direccionamiento, NAT y encaminamiento. Correspondencia A1-115/A2-II-8.'],
  1412: ['https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view', 'ITIC Academy, bloque 42 Redes, versión 2026.1 (29-09-2026): gestión y monitorización de dispositivos/redes. Correspondencia A1-118/A2-IV-8.'],
  1413: ['https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view', 'ITIC Academy, bloque 42 Redes, versión 2026.1 (29-09-2026): redes de organización y acceso interno/externo. Correspondencia A1-109/A2-IV-13.'],
  1414: ['https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view', 'ITIC Academy, bloque 43 Protocolos, versión 2026.1 (29-09-2026): servicios de correo y protocolos de aplicación. Correspondencia A1-109/111/A2-II-8.'],
  1415: ['https://drive.google.com/file/d/1nXa2jkiUqpu31smkt5D8WswcTgEN7XlB/view?usp=drivesdk', 'ITIC Academy, bloque 47 Aplicaciones móviles y sistemas operativos, versión 2026.1 (30-09-2026): tecnologías web/PWA, funcionamiento offline, distribución y comparación con aplicaciones nativas e híbridas. Correspondencia A1-124/A2-II-1/A2-II-2/A2-III-12.']
};
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  if (!q?.revision || !academy[c.id]) throw new Error(`Falta pregunta, registro o academia para ${c.id}`);
  const [url, block] = academy[c.id];
  const note = `Cotejo temático: ${block} El temario orienta la clasificación; la verificación de la respuesta se apoya en las fuentes primarias citadas por separado.`;
  q.clasificacion.bloque_academia = block;
  q.clasificacion.nota = note;
  q.revision.observaciones = `${q.revision.observaciones} ${note}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url, referencia: `ITIC Academy, ${block}` });
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo de ITIC Academy añadido a las cinco preguntas del lote 219.');
