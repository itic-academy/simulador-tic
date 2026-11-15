const fs=require('node:fs'),path=require('node:path');const file=path.join(__dirname,'README.md');let text=fs.readFileSync(file,'utf8');
const old='Último lote secuencial: 1359 (IDs 7116–7120). Acumulado: 7.115 preguntas examinadas individualmente; 6.993 verificadas (1.357 vigentes, 5.129 corregidas y 507 históricas); 122 pendientes documentadas (47 de fuente y 75 de ambigüedad); 5.008 sin revisar individualmente.';
const next='Último lote secuencial: 1360 (IDs 7121–7125). Acumulado: 7.120 preguntas examinadas individualmente; 6.998 verificadas (1.357 vigentes, 5.134 corregidas y 507 históricas); 122 pendientes documentadas (47 de fuente y 75 de ambigüedad); 5.003 sin revisar individualmente.';
if(!text.includes(old))throw Error('Resumen 1359 no coincide.');text=text.replace(old,next);if(text.includes('## Lote 1360 —'))throw Error('Lote duplicado.');
const section=`## Lote 1360 — 15 de noviembre de 2026

Revisadas individualmente las preguntas 7121–7125. Se distinguieron los valores Version de IPv4 e IPv6; se definió la conexión TCP por el par de sockets; se completó el prefijo link-local IPv6; se separó UDP de protocolos de aplicación y se reformuló la pregunta de ICMP para evitar incluir MIME como distractor no protocolario.

- **7121 — campo Version IP:** corregida B. IPv4 codifica 4 (0100) e IPv6 6 (0110) en el campo de 4 bits; el enunciado se amplió para que la clave responda a ambas versiones.
- **7122 — conexión TCP:** corregida D. Se identifica por el par de sockets, cada uno formado por una dirección IP y un puerto.
- **7123 — IPv6 link-local:** corregida A. El prefijo normativo es FE80::/10; se añadió longitud en vez del texto incompleto «FE80».
- **7124 — capas TCP/IP:** corregida A. UDP pertenece a transporte; FTP y SMTP son de aplicación.
- **7125 — ICMP:** corregida A. ICMP se transporta directamente dentro de IP, no sobre TCP/UDP. Se sustituyó MIME (formato de contenido, no protocolo de transporte) por HTTP para dejar una sola respuesta.

Fuentes primarias: [RFC 791, cabecera IPv4](https://www.rfc-editor.org/rfc/rfc791.html) y [RFC 8200, cabecera IPv6](https://www.rfc-editor.org/rfc/rfc8200.html); [RFC 9293, sockets y conexión TCP](https://www.rfc-editor.org/rfc/rfc9293.html); [RFC 4291, FE80::/10](https://www.rfc-editor.org/rfc/rfc4291.html); [RFC 1122, capas de Internet/transporte y clasificación ICMP](https://www.rfc-editor.org/rfc/rfc1122.html), [RFC 768, UDP](https://www.rfc-editor.org/rfc/rfc768.html), [RFC 792, ICMP](https://www.rfc-editor.org/rfc/rfc792.html), [RFC 959, FTP](https://www.rfc-editor.org/rfc/rfc959.html), [RFC 5321, SMTP](https://www.rfc-editor.org/rfc/rfc5321.html) y [RFC 9110, HTTP](https://www.rfc-editor.org/rfc/rfc9110.html). Programas oficiales [A1 GSI, BOE-A-2025-25938](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938) y [A2 GSI, BOE-A-2025-26262](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262), cotejados con revision/temario-oficial.json.

Cotejo ITIC Academy: [bloque 43 «Protocolos», versión 2026.1](https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk), consultado en Drive. El material cubre campos de cabecera IPv4/IPv6, prefijos link-local, sockets/puertos, DHCP, capas TCP/IP, FTP/SMTP y el rol de ICMP; también desarrolla rutas y convergencia en encaminamiento. Correspondencia oficial A1-108/A1-115 y A2-II-8. El cotejo académico informa cobertura, no sustituye los estándares.

Inventario tras el lote: 12.123 preguntas; 7.120 examinadas individualmente; 6.998 verificadas (1.357 vigentes, 5.134 corregidas y 507 históricas); 122 pendientes documentadas (47 de fuente y 75 de ambigüedad); 5.003 sin revisar individualmente; 0 errores estructurales. Ejecutados node revision/revisar-lote-1360.cjs, node revision/academia-lote-1360.cjs, node revision/inventario.cjs, node revision/verificar.cjs y git diff --check. Publicación pendiente de verificación.

`;
const i=text.indexOf('## Lote 1359 —');if(i<0)throw Error('No se encuentra lote 1359.');text=text.slice(0,i)+section+text.slice(i);fs.writeFileSync(file,text);console.log('Resumen y sección 1360 actualizados.');
