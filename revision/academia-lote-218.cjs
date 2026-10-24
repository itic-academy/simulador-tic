const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-218.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  1406: ['https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view', 'ITIC Academy, bloque 42 Redes y bloque 43 Protocolos, versión 2026.1 (29-09-2026): encaminamiento, redes IP, protocolos RIP/OSPF y contraste de tecnologías. Correspondencias A1-108/111/115 y A2-II-8/IV-10.'],
  1407: ['https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view', 'ITIC Academy, bloque 43 Protocolos, versión 2026.1 (29-09-2026): apartado «Organismos de normalización y gobierno de Internet». Correspondencias A1-109/111 y A2-II-8/IV-13.'],
  1408: ['https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view', 'ITIC Academy, bloque 42 Redes, versión 2026.1 (29-09-2026): switching Ethernet, dispositivos de interconexión y VLAN. Correspondencias A1-110/118 y A2-IV-8.'],
  1409: ['https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view', 'ITIC Academy, bloque 42 Redes, versión 2026.1 (29-09-2026): medios de transmisión y cableado estructurado. Correspondencias A1-108/110 y A2-IV-8.'],
  1410: ['https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view', 'ITIC Academy, bloque 43 Protocolos, versión 2026.1 (29-09-2026): formato y funcionalidades de IPv6. Correspondencias A1-111/115 y A2-II-8.']
};
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  if (!q || !q.revision || !academy[c.id]) throw new Error(`Falta la pregunta, registro o referencia de academia para ${c.id}`);
  const [url, block] = academy[c.id];
  const note = `Cotejo temático: ${block} El temario sirve para asignar contexto y correspondencia; la respuesta se sustenta en estándares/documentación técnica primaria citada por separado.`;
  q.clasificacion.bloque_academia = block;
  q.clasificacion.nota = note;
  q.revision.observaciones = `${q.revision.observaciones} ${note}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url, referencia: `ITIC Academy, ${block}` });
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo de ITIC Academy añadido a las cinco preguntas del lote 218.');
