const fs = require('node:fs');
const path = require('node:path');
const p = path.join(__dirname, 'README.md');
let s = fs.readFileSync(p, 'utf8');
s = s.replace('Último lote secuencial aplicado localmente: 506 (IDs 2846–2850). Acumulado: 2850 preguntas examinadas individualmente, 2779 verificadas (609 vigentes, 1939 corregidas y 231 históricas) y 71 pendientes documentadas (34 de fuente y 37 de ambigüedad); quedan 9273 sin revisar individualmente. Hay 2233 preguntas con cambios en enunciado, opciones o clave respecto del original, calculado comparando esos campos en los registros completos.', 'Último lote secuencial aplicado localmente: 507 (IDs 2851–2855). Acumulado: 2855 preguntas examinadas individualmente, 2784 verificadas (609 vigentes, 1944 corregidas y 231 históricas) y 71 pendientes documentadas (34 de fuente y 37 de ambigüedad); quedan 9268 sin revisar individualmente. Hay 2238 preguntas con cambios en enunciado, opciones o clave respecto del original, calculado comparando esos campos en los registros completos.');
const section = `## Lote 507 — 29 de octubre

IDs 2851–2855 revisados individualmente. Se conserva el original de cada reactivo en \`cambios-lote-507.json\` y se corrigen ambigüedades de alcance, versión y terminología.

- **2851 — TLS 1.3:** se distingue el handshake (negociación, autenticación y establecimiento de claves) del protocolo de registros que protege los datos de aplicación. Se evita afirmar que la autenticación TLS siempre sea asimétrica: RFC 8446 también define PSK. A1-79/A1-125, A2-IV-12; Academy, Bloque 48.
- **2852 — direccionamiento IPv6:** RFC 4291 define unicast, anycast y multicast, no broadcast. A1-115/A2-II-8; Academy, Bloque 43.
- **2853 — cambio en ITIL:** se especifica ITIL 4 porque la definición pertenece a esa edición; se completa la formulación del glosario y se diferencia de release, deployment y gestión de configuración. Se anota la transición vigente a ITIL Version 5 y la disponibilidad paralela de ITIL 4. A1-106/A2-IV-4; Academy, Bloque 41.
- **2854 — JavaScript/ECMAScript:** se reemplaza la imprecisa relación de “dialecto” por una afirmación comprobable: ECMA-262 especifica ECMAScript, estándar implementado por motores JavaScript. La fuente ya es la edición 2026. A1-65/A2-II-3/II-9; Academy, Bloque 30.
- **2855 — diagramas de estructura:** se concreta la notación de diseño estructurado como jerarquía de módulos, invocaciones y datos/control intercambiados, diferenciándola de diagramas ER, DFD y de flujo. A1-93/A2-III-2; Academy, Bloque 38.

Fuentes primarias: [RFC 8446, TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446.html); [RFC 4291, direccionamiento IPv6](https://www.rfc-editor.org/rfc/rfc4291.html); PeopleCert, [FAQ ITIL](https://www.peoplecert.org/help-and-support/faq-itil) y [actualizaciones oficiales de materiales ITIL](https://www.peoplecert.org/Partners/support/Articles/learning-resources-updates/_Local/official-training-material-updates), junto con el glosario de *ITIL Foundation, ITIL 4 Edition*; [Ecma International, ECMA-262](https://ecma-international.org/publications-and-standards/standards/ecma-262/) y [texto edición 2026](https://262.ecma-international.org/2026/); Yourdon y Constantine, [Structured Design](https://vtda.org/books/Computing/Programming/StructuredDesign_EdwardYourdonLarryConstantine.pdf).

Cotejo curricular en Drive: [Bloque 48 Seguridad en Redes y Aplicación](https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view); [Bloque 43 Protocolos](https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view); [Bloque 41 ITIL y COBIT](https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view); [Bloque 30 Tecnologías de los Sistemas de Información](https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view); [Bloque 38 Análisis, Diseño y Construcción de SI](https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view). La academia sirve como mapa curricular, no como fuente de autoridad. Temas comprobados en \`temario-oficial.json\` y cotejados con convocatorias A1 [BOE-A-2025-25938](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938) y A2 GSI [BOE-A-2025-26262](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262).

\`inventario.cjs\`, \`verificar.cjs\` y \`git diff --check\` ejecutados: 12.123 preguntas, cero errores; 2.855 revisadas individualmente, 2.784 verificadas, 71 pendientes documentadas y 9.268 sin revisión de contenido. El inventario estructural no acredita revisión individual.

`;
if (!s.includes('## Lote 507 — 29 de octubre')) {
  const anchor = '## Lote 506 — 29 de octubre';
  if (!s.includes(anchor)) throw new Error('No se encontró sección del lote 506 para inserción');
  s = s.replace(anchor, section + anchor);
}
fs.writeFileSync(p, s);
