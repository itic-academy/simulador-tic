const fs=require('node:fs'),path=require('node:path');
const file=path.join(__dirname,'README.md');let text=fs.readFileSync(file,'utf8');
const old='Último lote secuencial: 1356 (IDs 7101–7105). Acumulado: 7.100 preguntas examinadas individualmente; 6.978 verificadas (1.353 vigentes, 5.119 corregidas y 506 históricas); 122 pendientes documentadas (47 de fuente y 75 de ambigüedad); 5.023 sin revisar individualmente.';
const next='Último lote secuencial: 1357 (IDs 7106–7110). Acumulado: 7.105 preguntas examinadas individualmente; 6.983 verificadas (1.355 vigentes, 5.122 corregidas y 506 históricas); 122 pendientes documentadas (47 de fuente y 75 de ambigüedad); 5.018 sin revisar individualmente.';
if(!text.includes(old))throw Error('Resumen 1356 no coincide.');
text=text.replace(old,next);
if(text.includes('## Lote 1357 —'))throw Error('Lote duplicado.');
const section=`## Lote 1357 — 15 de noviembre de 2026

Revisadas individualmente las preguntas 7106–7110. Se recalculó la red /23; se acotó la unidad de transporte a TCP; se reformuló la pregunta sobre seguridad para preguntar por los servicios IPsec; se verificó el bloque privado 10/8 y se precisó el servicio del puerto TCP/389.

- **7106 — IPv4 /23:** corregida D. 150.214.93.12 pertenece a 150.214.92.0/23 (máscara 255.255.254.0); el broadcast es 150.214.93.255.
- **7107 — PDU de transporte:** corregida B. TCP transfiere segmentos TCP. Se restringió el enunciado a TCP, pues UDP usa datagramas.
- **7108 — IPv6/IPsec:** corregida B. Se preguntó qué servicio no define la arquitectura IPsec: no repudio. La pregunta original confundía las capacidades de IPv6 con servicios criptográficos que IPsec puede implementar cuando se configura.
- **7109 — IPv4 privado:** vigente C. RFC 1918 reserva 10.0.0.0/8 para internets privados; “clase C” es incorrecto y la clasificación por clases es histórica.
- **7110 — LDAP:** corregida A. IANA registra ldap/389 en TCP y UDP. El enunciado se restringió a TCP/389 para eliminar la ambigüedad del original sobre ambos transportes.

Fuentes primarias: [RFC 4632, CIDR](https://www.rfc-editor.org/rfc/rfc4632.html) y [RFC 1878, tabla de subredes](https://www.rfc-editor.org/rfc/rfc1878.html); [RFC 9293, TCP y segmentos](https://www.rfc-editor.org/rfc/rfc9293.html); [RFC 4301, arquitectura de seguridad IPsec](https://www.rfc-editor.org/rfc/rfc4301.html); [RFC 1918, espacio privado IPv4](https://www.rfc-editor.org/rfc/rfc1918.html) y [RFC 6890, registro de direcciones de uso especial](https://www.rfc-editor.org/rfc/rfc6890.html); [registro IANA de servicios y puertos, ldap/389](https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml?search=ldap) y [RFC 4511, LDAPv3](https://www.rfc-editor.org/rfc/rfc4511.html). Programas oficiales [A1 GSI, BOE-A-2025-25938](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938) y [A2 GSI, BOE-A-2025-26262](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262), cotejados con revision/temario-oficial.json.

Cotejo con ITIC Academy, versión 2026.1: [bloque 43 «Protocolos»](https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk), consultado en Drive: incluye OSI/TCP-IP, PDU, IPv4/CIDR, transporte, puertos, LDAP/X.500 y anexo de puertos; corresponde al temario oficial A1-115/A1-122 y A2-II-8/A2-IV-8. Para IPsec se cotejó [bloque 48 «Seguridad en redes y en el nivel de aplicación»](https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk), que incluye criptografía, protocolos seguros y VPN, correspondiente a A1-125/A2-IV-12. El material académico sirve como contraste de cobertura, no sustituye los estándares ni el registro IANA.

Inventario tras el lote: 12.123 preguntas; 7.105 examinadas individualmente; 6.983 verificadas (1.355 vigentes, 5.122 corregidas y 506 históricas); 122 pendientes documentadas (47 de fuente y 75 de ambigüedad); 5.018 sin revisar individualmente; 0 errores estructurales. Ejecutados node revision/revisar-lote-1357.cjs, node revision/academia-lote-1357.cjs, node revision/inventario.cjs, node revision/verificar.cjs y git diff --check. Publicación pendiente de verificación.

`;
const i=text.indexOf('## Lote 1356 —');if(i<0)throw Error('No se encuentra lote 1356.');
text=text.slice(0,i)+section+text.slice(i);fs.writeFileSync(file,text);console.log('Resumen y sección 1357 actualizados.');
