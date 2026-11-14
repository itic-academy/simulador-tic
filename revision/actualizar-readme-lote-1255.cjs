const fs = require('node:fs');
const file = 'revision/README.md';
let text = fs.readFileSync(file, 'utf8');
const previous = 'Último lote secuencial: 1254 (IDs 6591–6595). Acumulado: 6590 preguntas examinadas individualmente; 6475 verificadas (1278 vigentes, 4725 corregidas y 472 históricas); 115 pendientes documentadas (45 de fuente y 70 de ambigüedad); 5533 sin revisar individualmente.';
const current = 'Último lote secuencial: 1255 (IDs 6596–6600). Acumulado: 6595 preguntas examinadas individualmente; 6480 verificadas (1278 vigentes, 4729 corregidas y 473 históricas); 115 pendientes documentadas (45 de fuente y 70 de ambigüedad); 5528 sin revisar individualmente.';
if (!text.includes(previous)) throw new Error('No se encontró el resumen previo esperado');
if (text.includes('## Lote 1255 —')) throw new Error('El lote 1255 ya está documentado');
text = text.replace(previous, current);
const section = `## Lote 1255 — 14 de noviembre de 2026

Revisadas individualmente las preguntas 6596–6600. Se corrigieron las generalizaciones sobre reenvío de switches, fibra óptica y repetidores; se precisó UDP como protocolo de transporte sin conexión; se contextualizó como histórica la finalidad de las OTD de Red.es de 2017; y se distinguieron los modos CSMA 1-persistente, p-persistente y no persistente. Las cinco preguntas se contrastaron con fuentes técnicas primarias, programa oficial GSI y temario de ITIC Academy cuando existía correspondencia. Se preservaron en los registros los enunciados y respuestas originales.

- **6596 — Equipos de interconexión:** corregida D. El repetidor actúa sobre la señal física y no filtra por direcciones; switch y router hacen reenvío selectivo según MAC/IP, y el hub comparte el medio. A1-110/111/118; A2-IV.8; Academy, bloque 42.
- **6597 — UDP:** corregida B. UDP presta un servicio de datagramas sin conexión en la capa de transporte; TCP sí es orientado a conexión. HTTP/FTP son de aplicación; HTTP/3 usa QUIC sobre UDP, sin cambiar la capa de HTTP. A1-111/A2-II.8; Academy, bloque 42.
- **6598 — Fibra óptica:** corregida A. Se conservan como ventajas la inmunidad electromagnética y ausencia de diafonía eléctrica, pero la capacidad y atenuación se expresan condicionadas al tipo de fibra, longitud de onda y diseño, evitando generalizaciones absolutas frente a todo cobre. A1-108/112; A2-IV.7; Academy, bloque 42.
- **6599 — Oficinas de Transformación Digital:** histórica B. Las bases de 2017 destinaban los servicios de las OTD a PYMES y autónomos. Se fecha el contexto para no afirmar que el programa siga vigente. A1-19 como encaje económico general; sin tema A2 ni coincidencia específica en el temario de academia localizado.
- **6600 — CSMA:** corregida C. En 1-persistente se sigue sensando y se transmite inmediatamente cuando el medio queda libre; el enunciado anterior confundía esto con p-persistente y no persistente. A1-118/A2-IV.8; Academy, bloque 42.

Fuentes primarias: [RFC 7387, aprendizaje MAC y reenvío Ethernet](https://www.rfc-editor.org/rfc/rfc7387.html); [RFC 1812, requisitos de encaminadores IPv4](https://www.rfc-editor.org/rfc/rfc1812.html); [IEEE 802.3, Ethernet y repetidores](https://standards.ieee.org/ieee/802.3bz/6003/); [RFC 8095, servicio UDP sin conexión](https://www.rfc-editor.org/rfc/rfc8095.html); [RFC 768, UDP](https://www.rfc-editor.org/rfc/rfc768.html); [RFC 9293, TCP orientado a conexión](https://www.rfc-editor.org/rfc/rfc9293.html); [ITU-T G.652 (08/2024), fibra monomodo, vigente](https://www.itu.int/rec/T-REC-G.652-202408-I/en); [Red.es, bases OTD de 2017, BOE-A-2017-13355](https://www.boe.es/eli/es/res/2017/11/06/(3)); [Kleinrock y Tobagi, artículo original sobre modos CSMA, IEEE Transactions on Communications (1975)](https://www.lk.cs.ucla.edu/data/files/Kleinrock/Packet%20Switching%20in%20Radio%20Channels%20Part.pdf). Temarios: [convocatoria GSI A1 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938), temas 19, 108, 110, 111, 112 y 118; [convocatoria GSI A2 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262), temas II.8, IV.7 y IV.8. Cotejo de academia: [ITIC Academy, bloque 42 Redes, edición 2026.1](https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk), cubre fibra, medios, redes LAN/Ethernet y acceso CSMA; material curricular de apoyo, no fuente técnica normativa. Para la pregunta histórica de OTD no se identificó una unidad específica del temario.

Inventario local: 6595 examinadas; 6480 verificadas (1278 vigentes, 4729 corregidas y 473 históricas); 115 pendientes (45 de fuente y 70 de ambigüedad); 5528 sin revisión individual; errores estructurales: 0. Se ejecutaron inventario.cjs, verificar.cjs y git diff --check. Publicación pendiente de verificación.

`;
text = text.replace('## Lote 1254 —', section + '## Lote 1254 —');
fs.writeFileSync(file, text);
console.log('README actualizado para el lote 1255.');
