const fs = require('node:fs');
const p = 'revision/README.md';
let s = fs.readFileSync(p, 'utf8');
s = s.replace(/\r\n/g, '\n');
const re = /^Estado parcial, no revisión completa del banco\. Publicación desde la rama `main`\. Último lote secuencial aplicado localmente: 504 \(IDs 2836–2840\)\. Acumulado: 2840 preguntas examinadas individualmente, 2769 verificadas \(609 vigentes, 1929 corregidas y 231 históricas\) y 71 pendientes documentadas \(34 de fuente y 37 de ambigüedad\); quedan 9283 sin revisar individualmente\. Hay 2223 preguntas con cambios en enunciado, opciones o clave respecto del original, calculado comparando esos campos en los registros completos\. Inventario estructural no equivale a revisión de contenido\.$/m;
const neu = 'Estado parcial, no revisión completa del banco. Publicación desde la rama `main`. Último lote secuencial aplicado localmente: 505 (IDs 2841–2845). Acumulado: 2845 preguntas examinadas individualmente, 2774 verificadas (609 vigentes, 1934 corregidas y 231 históricas) y 71 pendientes documentadas (34 de fuente y 37 de ambigüedad); quedan 9278 sin revisar individualmente. Hay 2228 preguntas con cambios en enunciado, opciones o clave respecto del original, calculado comparando esos campos en los registros completos. Inventario estructural no equivale a revisión de contenido.';
if (!re.test(s)) throw new Error('No se encuentra el acumulado del lote 504');
const section = [
'## Lote 505 — 29 de octubre',
'',
'IDs 2841–2845 revisados individualmente, con originales íntegros y cambios en `cambios-lote-505.json`. Se corrigen las dimensiones del modelo en espiral, la formulación didáctica de OSI, la descripción de la cabecera IPv6, el alcance histórico de 802.11b y la delimitación de GPRS sobre acceso GSM clásico.',
'',
'- **2841 — modelo en espiral:** se confirma a partir de Boehm: radio representa coste acumulado y ángulo el progreso al completar cada ciclo. Se eliminan distractores que confundían estas magnitudes. A1-86/A2-III-1; Academy, Bloque 15.',
'- **2842 — capas OSI y conmutación:** se preserva la respuesta clásica capas 1–3, precisando que X.200 no prescribe una implementación interna concreta. Sus capas bajas sustentan transferencia por el medio y la capa de red realiza routing/relaying; la pregunta ahora declara esa interpretación. A1-111/A2-II-8; Academy, Bloque 43.',
'- **2843 — cabecera IPv6:** siguen siendo correctas las tres afirmaciones, pero se sustituye «campo CRC» por la propiedad precisa de que la cabecera base no lleva checksum. Se advierte que TCP/UDP sí mantienen checksums de capa superior. A1-115/A2-II-8; Academy, Bloque 43.',
'- **2844 — IEEE 802.11b:** se identifica como enmienda histórica WLAN de 2,4 GHz, hoy supersedida; se distingue de la especificación activa IEEE 802.11-2024. A1-114/A2-IV-11; Academy, Bloque 46.',
'- **2845 — GPRS:** se limita la pregunta al GPRS clásico sobre acceso GSM: IP/SNDCP/LLC sobre la radio GSM y BSS, con SGSN y GGSN para el núcleo de paquetes. Se aclara que la especificación GPRS también contempla UMTS y que HSDPA no define el acceso GSM clásico. A1-123/A2-IV-15; Academy, Bloque 46.',
'',
'Fuentes primarias: Boehm, [A Spiral Model of Software Development and Enhancement, IEEE Computer (1988)](https://doi.org/10.1109/2.59); [ITU-T X.200](https://www.itu.int/rec/dologin_pub.asp?id=T-REC-X.200-199407-I%21%21PDF-E&lang=e&type=items), §§4.3.5 y 7.5.4.2 (el modelo abstracto no prescribe implementación; funciones de red y retransmisión); [RFC 8200](https://www.rfc-editor.org/rfc/rfc8200.html), §§3, 8.1–8.2; [IEEE 802.11b-1999](https://standards.ieee.org/ieee/802.11b/1166/) (supersedida) y [IEEE 802.11-2024](https://standards.ieee.org/ieee/802.11/10548/) (activa); [ETSI TS 123 060 V18.0.0](https://www.etsi.org/deliver/etsi_ts/123000_123099/123060/18.00.00_60/ts_123060v180000p.pdf), §5.6.1/figura 4 y PDP types: acceso GSM A/Gb, BSS, SGSN/GGSN y pila IP, además de acceso UMTS.',
'',
'Cotejo curricular en Drive: [Bloque 15 Metodologías ágiles y modelos de ciclo de vida](https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view?usp=drivesdk); [Bloque 43 Protocolos](https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk); [Bloque 46 Redes inalámbricas y comunicaciones móviles](https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk). La academia es mapa curricular, no fuente de autoridad para la respuesta. Los temas A1/A2 se validaron contra `temario-oficial.json`: 2841 A1-86/A2-III-1; 2842 A1-111/A2-II-8; 2843 A1-115/A2-II-8; 2844 A1-114/A2-IV-11; 2845 A1-123/A2-IV-15. Se contrastaron con las convocatorias A1 [BOE-A-2025-25938](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938) y A2 GSI [BOE-A-2025-26262](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262).',
'',
'`inventario.cjs`, `verificar.cjs` y `git diff --check` ejecutados: 12.123 preguntas, cero errores; 2.845 revisadas individualmente, 2.774 verificadas, 71 pendientes y 9.278 sin revisión de contenido. El inventario estructural no acredita revisión individual.',
'',
].join('\n');
s = s.replace(re, neu).replace('## Lote 504 — 29 de octubre', section + '\n## Lote 504 — 29 de octubre');
fs.writeFileSync(p, s);
console.log('README actualizado al lote 505.');
