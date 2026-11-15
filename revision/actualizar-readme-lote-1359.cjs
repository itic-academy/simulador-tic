const fs=require('node:fs'),path=require('node:path');const file=path.join(__dirname,'README.md');let text=fs.readFileSync(file,'utf8');
const old='Último lote secuencial: 1358 (IDs 7111–7115). Acumulado: 7.110 preguntas examinadas individualmente; 6.988 verificadas (1.357 vigentes, 5.124 corregidas y 507 históricas); 122 pendientes documentadas (47 de fuente y 75 de ambigüedad); 5.013 sin revisar individualmente.';
const next='Último lote secuencial: 1359 (IDs 7116–7120). Acumulado: 7.115 preguntas examinadas individualmente; 6.993 verificadas (1.357 vigentes, 5.129 corregidas y 507 históricas); 122 pendientes documentadas (47 de fuente y 75 de ambigüedad); 5.008 sin revisar individualmente.';
if(!text.includes(old))throw Error('Resumen 1358 no coincide.');text=text.replace(old,next);if(text.includes('## Lote 1359 —'))throw Error('Lote duplicado.');
const section=`## Lote 1359 — 15 de noviembre de 2026

Revisadas individualmente las preguntas 7116–7120. Se explicitaron las modalidades de asignación DHCP; se verificaron opciones DHCP reales (ARP timeout y SMTP); se delimitó la subcapa MAC de IEEE 802; se corrigió una respuesta errónea sobre rutas OSPF en áreas stub y se definió convergencia como tiempo de estabilización tras un cambio.

- **7116 — DHCP:** corregida A. DHCP suministra parámetros IP y contempla asignación manual, automática y dinámica; no sólo una asignación “automática” en sentido estricto.
- **7117 — opciones DHCP:** corregida D. RFC 2132 incluye ARP Cache Timeout (opción 35) y SMTP Server (opción 69), pero no la distribución de software antivirus como opción estándar.
- **7118 — MAC:** corregida C. En IEEE 802, MAC es una subcapa de enlace que arbitra el acceso al medio; no es un protocolo de aplicación ni una función de seguridad.
- **7119 — OSPF stub:** corregida C. Un área stub mantiene rutas intraárea e interárea, pero no recibe AS-external-LSAs; el ABR anuncia una ruta summary por defecto para llegar a destinos externos. La clave original D era incorrecta.
- **7120 — convergencia:** corregida B. Es el tiempo tras un cambio de topología hasta que los routers actualizan sus tablas y estabilizan información coherente, no la latencia de un paquete.

Fuentes primarias: [RFC 2131, DHCP](https://www.rfc-editor.org/rfc/rfc2131.html) y [RFC 2132 §§3.21/8.14, opciones ARP y SMTP](https://www.rfc-editor.org/rfc/rfc2132.html); [IEEE Technology Navigator, subcapa MAC](https://technav.ieee.org/topic/medium-access-control-mac/); [RFC 2328, OSPFv2 y áreas stub](https://www.rfc-editor.org/rfc/rfc2328.html). Para la definición concisa de convergencia se cotejó la guía técnica de [Cisco, Unicast Routing Overview](https://www.cisco.com/c/en/us/td/docs/switches/datacenter/sw/7_0_x/dcnm/Unicast/Config_Guide/l3-dcnm-book/l3_overview.pdf), complementada por los procedimientos de actualización/SPF de RFC 2328. Programas oficiales [A1 GSI, BOE-A-2025-25938](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938) y [A2 GSI, BOE-A-2025-26262](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262), cotejados con revision/temario-oficial.json.

Cotejo ITIC Academy: [bloque 43 «Protocolos», versión 2026.1](https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk), consultado en Drive: incluye el capítulo DHCP, arquitectura IEEE 802/MAC, protocolos de encaminamiento, OSPF y definición de convergencia. Correspondencia oficial A1-108/A1-111/A1-115 y A2-II-8/A2-IV-8. El material se usa para cotejo curricular; las claves se justifican con RFC/IEEE.

Inventario tras el lote: 12.123 preguntas; 7.115 examinadas individualmente; 6.993 verificadas (1.357 vigentes, 5.129 corregidas y 507 históricas); 122 pendientes documentadas (47 de fuente y 75 de ambigüedad); 5.008 sin revisar individualmente; 0 errores estructurales. Ejecutados node revision/revisar-lote-1359.cjs, node revision/academia-lote-1359.cjs, node revision/inventario.cjs, node revision/verificar.cjs y git diff --check. Publicación pendiente de verificación.

`;
const i=text.indexOf('## Lote 1358 —');if(i<0)throw Error('No se encuentra lote 1358.');text=text.slice(0,i)+section+text.slice(i);fs.writeFileSync(file,text);console.log('Resumen y sección 1359 actualizados.');
