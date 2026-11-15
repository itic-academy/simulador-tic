const fs=require('node:fs'),path=require('node:path');const file=path.join(__dirname,'README.md');let text=fs.readFileSync(file,'utf8');
const old='Último lote secuencial: 1360 (IDs 7121–7125). Acumulado: 7.120 preguntas examinadas individualmente; 6.998 verificadas (1.357 vigentes, 5.134 corregidas y 507 históricas); 122 pendientes documentadas (47 de fuente y 75 de ambigüedad); 5.003 sin revisar individualmente.';
const next='Último lote secuencial: 1361 (IDs 7126–7130). Acumulado: 7.125 preguntas examinadas individualmente; 7.003 verificadas (1.357 vigentes, 5.139 corregidas y 507 históricas); 122 pendientes documentadas (47 de fuente y 75 de ambigüedad); 4.998 sin revisar individualmente.';
if(!text.includes(old))throw Error('Resumen 1360 no coincide.');text=text.replace(old,next);if(text.includes('## Lote 1361 —'))throw Error('Lote duplicado.');
const section=`## Lote 1361 — 15 de noviembre de 2026

Revisadas individualmente las preguntas 7126–7130. Se precisó MTU como límite de un paquete IP en un enlace; se acotó SMTP al puerto de transferencia entre servidores; se asignó la función de encaminar nodos al Routing Header IPv6; se corrigió el rango privado mal escrito y se completó el formato Ethernet II con preámbulo/SFD, EtherType y FCS.

- **7126 — MTU:** corregida B. Es el tamaño máximo de paquete IP que un enlace puede transportar en una pieza; no el máximo de “datos” sin distinguir cabeceras ni una propiedad exclusiva de IPv6.
- **7127 — SMTP:** corregida C. SMTP entre servidores usa TCP/25; submission de usuario suele usar TCP/587, por lo que se delimitó el contexto.
- **7128 — extensión IPv6:** corregida C. La función de listar nodos intermedios pertenece a Routing Header, no a todas las cabeceras de extensión.
- **7129 — RFC 1918:** corregida C. 169.16.0.0/12 no es un bloque privado RFC 1918; se distingue de 169.254.0.0/16 link-local.
- **7130 — trama Ethernet II:** corregida C. Orden: preámbulo, SFD, destino, origen, EtherType, datos y FCS. Se incluye el delimitador que el original omitía.

Fuentes primarias: [RFC 8200, definición de link MTU y Routing Header](https://www.rfc-editor.org/rfc/rfc8200.html); [RFC 4821, tamaño de MTU de paquete IP](https://www.rfc-editor.org/rfc/rfc4821.html); [RFC 5321, SMTP/TCP 25](https://www.rfc-editor.org/rfc/rfc5321.html) y [RFC 6409, envío SMTP/TCP 587](https://www.rfc-editor.org/rfc/rfc6409.html); [RFC 1918, bloques privados](https://www.rfc-editor.org/rfc/rfc1918.html) y [RFC 3927, link-local 169.254/16](https://www.rfc-editor.org/rfc/rfc3927.html); [RFC 894, encapsulación Ethernet II/EtherType](https://www.rfc-editor.org/rfc/rfc894.html) e [IEEE 802.3 frame format, campos Preamble/SFD/DA/SA/Length-Type/Data/FCS](https://www.ieee802.org/minutes/2011-March/802%20workshop/IEEE_802d3_Law_V1p1.pdf). Programas oficiales [A1 GSI, BOE-A-2025-25938](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938) y [A2 GSI, BOE-A-2025-26262](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262), cotejados con revision/temario-oficial.json.

Cotejo ITIC Academy: [bloque 43 «Protocolos», versión 2026.1](https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk), consultado en Drive: cubre MTU, SMTP, IPv6 Routing Header, direcciones privadas RFC 1918 y Ethernet (EtherType, direcciones MAC y FCS). Correspondencia oficial A1-108/A1-111/A1-115/A1-122 y A2-II-8/A2-IV-8. La academia orienta cobertura curricular; la clave se verifica con estándares.

Inventario tras el lote: 12.123 preguntas; 7.125 examinadas individualmente; 7.003 verificadas (1.357 vigentes, 5.139 corregidas y 507 históricas); 122 pendientes documentadas (47 de fuente y 75 de ambigüedad); 4.998 sin revisar individualmente; 0 errores estructurales. Ejecutados node revision/revisar-lote-1361.cjs, node revision/academia-lote-1361.cjs, node revision/inventario.cjs, node revision/verificar.cjs y git diff --check. Publicación pendiente de verificación.

`;
const i=text.indexOf('## Lote 1360 —');if(i<0)throw Error('No se encuentra lote 1360.');text=text.slice(0,i)+section+text.slice(i);fs.writeFileSync(file,text);console.log('Resumen y sección 1361 actualizados.');
