const fs=require('node:fs'),path=require('node:path');const file=path.join(__dirname,'README.md');let text=fs.readFileSync(file,'utf8');
const old='Último lote secuencial: 1357 (IDs 7106–7110). Acumulado: 7.105 preguntas examinadas individualmente; 6.983 verificadas (1.355 vigentes, 5.122 corregidas y 506 históricas); 122 pendientes documentadas (47 de fuente y 75 de ambigüedad); 5.018 sin revisar individualmente.';
const next='Último lote secuencial: 1358 (IDs 7111–7115). Acumulado: 7.110 preguntas examinadas individualmente; 6.988 verificadas (1.357 vigentes, 5.124 corregidas y 507 históricas); 122 pendientes documentadas (47 de fuente y 75 de ambigüedad); 5.013 sin revisar individualmente.';
if(!text.includes(old))throw Error('Resumen 1357 no coincide.');text=text.replace(old,next);if(text.includes('## Lote 1358 —'))throw Error('Lote duplicado.');
const section=`## Lote 1358 — 15 de noviembre de 2026

Revisadas individualmente las preguntas 7111–7115. Se acotó OUI a su forma de 24 bits dentro de EUI-48/MAC-48; se aclararon los 40 octetos de la cabecera base IPv6; se comprobó que IPv6 usa unicast/anycast/multicast y no broadcast; se conservó clase C sólo como modelo histórico y se validó una dirección comprimida IPv6 sin confundir sintaxis con forma canónica.

- **7111 — OUI:** corregida A. El OUI IEEE de 24 bits son 6 dígitos hexadecimales (tres octetos); se precisa el contexto EUI-48/MAC-48 y se distingue del OUI-36.
- **7112 — cabecera IPv6:** corregida C. La cabecera base tiene longitud fija de 40 octetos; las cabeceras de extensión se contabilizan aparte.
- **7113 — tipos de dirección IPv6:** vigente C. Unicast, anycast y multicast; no existe broadcast IPv6.
- **7114 — clase C IPv4:** histórica A. En el modelo classful descrito en RFC 791: prefijo 110, 21 bits de red, 8 bits locales y hasta 254 hosts convencionales; CIDR sustituyó este esquema para el encaminamiento actual.
- **7115 — notación IPv6:** vigente A. 2031:0:130F::9C0:876A:130B es sintácticamente válida; “::” representa dos grupos cero para completar ocho. La mayúscula es válida, aunque la forma canónica recomendada usa minúsculas.

Fuentes primarias: [IEEE Registration Authority, guía de OUI/EUI](https://standards-support.ieee.org/hc/en-us/articles/4888705676564-Guidelines-for-Use-of-Extended-Unique-Identifier-EUI-Organizationally-Unique-Identifier-OUI-and-Company-ID-CID); [RFC 8200 §3, formato de cabecera IPv6](https://www.rfc-editor.org/rfc/rfc8200.html); [RFC 4291, arquitectura de direccionamiento IPv6](https://www.rfc-editor.org/rfc/rfc4291.html) y [RFC 5952, representación textual canónica](https://www.rfc-editor.org/rfc/rfc5952.html); [RFC 791, esquema IPv4 classful histórico](https://www.rfc-editor.org/rfc/rfc791.html) y [RFC 4632, CIDR](https://www.rfc-editor.org/rfc/rfc4632.html). Programas oficiales [A1 GSI, BOE-A-2025-25938](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938) y [A2 GSI, BOE-A-2025-26262](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262), cotejados con revision/temario-oficial.json.

Cotejo ITIC Academy: [bloque 43 «Protocolos», versión 2026.1](https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk), consultado en Drive: aborda direcciones MAC de 48 bits y OUI, arquitectura de red, IPv4/clases y CIDR, estructura y notación IPv6, y tipos de dirección. Correspondencia oficial A1-108/A1-115 y A2-II-8/A2-IV-8; la clase C se trata sólo como concepto histórico. La Academia es cotejo curricular, no sustituto de IEEE/IETF.

Inventario tras el lote: 12.123 preguntas; 7.110 examinadas individualmente; 6.988 verificadas (1.357 vigentes, 5.124 corregidas y 507 históricas); 122 pendientes documentadas (47 de fuente y 75 de ambigüedad); 5.013 sin revisar individualmente; 0 errores estructurales. Ejecutados node revision/revisar-lote-1358.cjs, node revision/academia-lote-1358.cjs, node revision/inventario.cjs, node revision/verificar.cjs y git diff --check. Publicación pendiente de verificación.

`;
const i=text.indexOf('## Lote 1357 —');if(i<0)throw Error('No se encuentra lote 1357.');text=text.slice(0,i)+section+text.slice(i);fs.writeFileSync(file,text);console.log('Resumen y sección 1358 actualizados.');
