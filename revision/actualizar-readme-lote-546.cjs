const fs = require('node:fs');
const file = 'revision/README.md';
let text = fs.readFileSync(file, 'utf8');
const before = 'Último lote secuencial aplicado: 545 (IDs 3041–3045). Acumulado: 3045 preguntas examinadas individualmente, 2973 verificadas (631 vigentes, 2104 corregidas y 238 históricas) y 72 pendientes documentadas (34 de fuente y 38 de ambigüedad); quedan 9078 sin revisar individualmente. Hay 2416 preguntas con cambios en enunciado, opciones o clave respecto del original, calculado comparando los registros completos.';
const after = 'Último lote secuencial aplicado: 546 (IDs 3046–3050). Acumulado: 3050 preguntas examinadas individualmente, 2978 verificadas (631 vigentes, 2109 corregidas y 238 históricas) y 72 pendientes documentadas (34 de fuente y 38 de ambigüedad); quedan 9073 sin revisar individualmente. Hay 2421 preguntas con cambios en enunciado, opciones o clave respecto del original, calculado comparando los registros completos.';
if (!text.includes(before)) throw new Error('El resumen README no coincide con el punto de partida esperado');
text = text.replace(before, after);
const section = `## Lote 546 — 29 de octubre

IDs 3046–3050 revisados individualmente con una recomendación ITU-R, documentos W3C/IETF, una resolución publicada en BOE, un RFC del IETF y una ficha técnica oficial de Cisco. Se cotejaron las preguntas con los programas A1/A2 y los materiales académicos accesibles en Drive. Se conservaron pregunta, opciones y clave originales junto con la revisión en [cambios-lote-546.json](cambios-lote-546.json).

- **3046 — escenarios de uso IMT-2020/5G:** la ITU-R recoge eMBB, mMTC y URLLC; «eMLLC» no es uno de esos tres escenarios. Se corrige también la grafía URLLC. A1-123; A2-IV-15; Academy Bloque 46.
- **3047 — WebRTC y organismos de normalización:** se elimina la afirmación indeterminada de que W3C define «el estándar» de todos los sistemas de colaboración síncrona. Se delimita a WebRTC: W3C especifica la API JavaScript y el IETF la suite de protocolos. A1-133; A2-II-16; Academy Bloque 50.
- **3048 — servicios básicos enumerados para el AC de SARA:** el apartado III.1.3 de la NTI cita DNS, SMTP, NTP, Proxy y Proxy inverso, no POP3. La pregunta queda ligada a esa lista normativa, sin afirmar que cada configuración actual excluya servicios adicionales. A1-120; A2-IV-10 como correspondencia temática indirecta; Academy Bloque 42.
- **3049 — encaminamiento de estado del enlace:** IS-IS es un protocolo dinámico que calcula rutas con SPF/Dijkstra; se diferencia de IGRP/RIP (vector distancia) y BGP (vector de camino). A1-108; A2-II-8/IV-10; Academy Bloques 42/43.
- **3050 — interfaz 10GBASE-ER:** se identifica el uso de fibra monomodo y longitud de onda en torno a 1550 nm (tercera ventana), diferenciándolo de SR multimodo. A1-110/118; A2-IV-7/IV-8; Academy Bloque 42.

Fuentes primarias: ITU-R [Report M.2412-0](https://www.itu.int/pub/R-REP-M.2412-2017), en vigor, §8 y tabla 4 (escenarios de uso IMT-2020); W3C [WebRTC 1.0 Recommendation](https://www.w3.org/TR/2021/REC-webrtc-20210126/) y [grupo de trabajo WebRTC](https://www.w3.org/groups/wg/webrtc/), más IETF [RFC 8825](https://www.rfc-editor.org/rfc/rfc8825.html), §2.2 (separación de APIs W3C y protocolos IETF); BOE [Resolución de 19/07/2011, NTI de conexión](https://www.boe.es/eli/es/res/2011/07/19/%287%29), apartado III.1.3 (lista literal de servicios del AC); IETF [RFC 1195](https://www.rfc-editor.org/rfc/rfc1195.html), §§1.1 y 1.3 (Integrated IS-IS, estado de enlace y SPF/Dijkstra); Cisco [ficha técnica de módulos SFP+ 10G](https://www.cisco.com/c/en/us/products/collateral/interfaces-modules/transceiver-modules/data_sheet_c78-455693.html) (10GBASE-ER: 1550 nm y SMF).

Cotejo en Drive: [Bloque 46, Redes inalámbricas y comunicaciones móviles 2026.1](https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk), escenarios 5G; [Bloque 50, Videoconferencia, SSO y trabajo colaborativo](https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk), colaboración síncrona; [Bloque 42, Redes](https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk), SARA, redes, Ethernet y medios; [Bloque 43, Protocolos](https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk), encaminamiento. Correspondencias contrastadas con revision/temario-oficial.json y anexos I de [A1 BOE-A-2025-25938](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938) y IX de [A2 GSI BOE-A-2025-26262](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262). La correspondencia A2-IV-10 de 3048 es indirecta: ese epígrafe trata redes WAN/encaminamiento y no nombra la Red SARA. Los materiales académicos son auxiliares y no sustituyen las fuentes primarias.

Tras el lote se ejecutaron inventario.cjs, verificar.cjs y git diff --check. El inventario estructural no se presenta como revisión individual del contenido.

`;
if (text.includes('## Lote 546 —')) throw new Error('El lote 546 ya consta en README');
const marker = '## Lote 545 —';
if (!text.includes(marker)) throw new Error('Falta sección de lote 545');
text = text.replace(marker, section + marker);
fs.writeFileSync(file, text.trimEnd() + '\n');
console.log('Progreso README actualizado para lote 546.');
