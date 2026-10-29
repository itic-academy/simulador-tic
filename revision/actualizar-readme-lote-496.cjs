const fs=require('node:fs');
const p='revision/README.md';let s=fs.readFileSync(p,'utf8');
const old='Último lote secuencial aplicado localmente: 495 (IDs 2791–2795). Acumulado: 2795 preguntas examinadas individualmente, 2725 verificadas (597 vigentes, 1901 corregidas y 227 históricas) y 70 pendientes documentadas (33 de fuente y 37 de ambigüedad); quedan 9328 sin revisar individualmente. Hay 2185 preguntas con cambios en enunciado, opciones o clave respecto del original, calculado comparando esos campos en los registros completos.';
const neu='Último lote secuencial aplicado localmente: 496 (IDs 2796–2800). Acumulado: 2800 preguntas examinadas individualmente, 2730 verificadas (597 vigentes, 1906 corregidas y 227 históricas) y 70 pendientes documentadas (33 de fuente y 37 de ambigüedad); quedan 9323 sin revisar individualmente. Hay 2190 preguntas con cambios en enunciado, opciones o clave respecto del original, calculado comparando esos campos en los registros completos.';
if(!s.includes(old))throw new Error('No se encuentra el acumulado del lote 495');
const section=`## Lote 496 — 29 de octubre

IDs 2796–2800 revisados individualmente; los originales y los cambios quedan registrados en \`cambios-lote-496.json\`. No quedan pendientes en este lote. Tres claves se confirman y dos reactivos se corrigen; en 2798 se documenta una ambigüedad que invalidaba la unicidad de la clave original.

- **2796 — directorio OSI:** X.500 es la serie de recomendaciones de directorio; LDAP es un protocolo de acceso/implementación relacionado, mientras X.400 corresponde a mensajería. Se afina el enunciado para preguntar por la serie. A1-80/A1-111/A2-II-8.
- **2797 — router:** se delimita a la función de encaminamiento IP, que corresponde a la capa de red OSI. La especificación de router IPv4 de RFC 1812 fundamenta el alcance. A1-111/A1-115/A1-118/A2-II-8/A2-IV-8.
- **2798 — interfaz física EIA-449:** corregida. El original preguntaba qué estándar “pertenece al nivel físico” y permitía tanto RS-449 como IEEE 802.3, que contiene especificaciones PHY y MAC. Se cambia el criterio a interfaz equilibrada DTE-DCE identificada como EIA-449/RS-449, con clave única. A1-108/A1-111/A2-II-8/A2-IV-7.
- **2799 — SDU:** corregida según la definición OSI: la identidad de los datos de una N-SDU se conserva entre los extremos de la conexión del servicio N y la capa N de soporte no interpreta el contenido. Se elimina la formulación confusa sobre primitivas y tratamiento por N+1. A1-111/A2-II-8.
- **2800 — celda ATM:** I.361 establece una longitud total fija de 53 octetos, con 5 de cabecera y 48 de campo de información. Se precisa que 53 es la celda completa; I.361 (1999) consta en vigor, aunque ATM sea tecnología heredada. A1-113.

Fuentes primarias: [ITU-T X.500 (2019), en vigor con enmienda de 2024](https://www.itu.int/itu-t/recommendations/rec.aspx?lang=en&rec=4121); [RFC 1812, requisitos de routers IPv4](https://www.rfc-editor.org/rfc/rfc1812.html); [NIST FIPS PUB 100-1, EIA-449/RS-449 como interfaz DTE-DCE](https://nvlpubs.nist.gov/nistpubs/Legacy/FIPS/fipspub100-1.pdf); [IEEE 802.3, PHY y MAC](https://standards.ieee.org/ieee/802/10422/); [ITU-T X.200, definición de N-SDU, §5.6.1.7](https://www.itu.int/rec/dologin_pub.asp?id=T-REC-X.200-198811-S%21%21PDF-E&lang=s&type=items); [ITU-T I.361 (02/1999), estructura de la celda ATM](https://www.itu.int/rec/T-REC-I.361-199902-I/e) y [estado de la recomendación](https://www.itu.int/rec/T-REC-I.361/en). Cotejo curricular de contexto: [Redes 2026.1](https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view) y [Protocolos 2026.1](https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view), materiales de ITIC Academy consultados en Drive; no se usan como autoridad técnica primaria. Correspondencia oficial cotejada con [A1, BOE-A-2025-25938](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938) y [A2 GSI, BOE-A-2025-26262](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262), según \`temario-oficial.json\`.

\`inventario.cjs\`, \`verificar.cjs\` y \`git diff --check\` ejecutados: banco de 12.123 preguntas, cero errores; 2.800 revisadas individualmente, 2.730 verificadas, 70 pendientes y 9.323 aún sin revisión de contenido. El inventario estructural no equivale a revisión individual.

`;
s=s.replace(old,neu).replace('## Lote 495 — 29 de octubre',section+'## Lote 495 — 29 de octubre');
fs.writeFileSync(p,s);console.log('README actualizado al lote 496');

