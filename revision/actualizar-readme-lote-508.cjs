const fs = require('node:fs');
const path = require('node:path');
const p = path.join(__dirname, 'README.md');
let s = fs.readFileSync(p, 'utf8');
s = s.replace('Último lote secuencial aplicado localmente: 507 (IDs 2851–2855). Acumulado: 2855 preguntas examinadas individualmente, 2784 verificadas (609 vigentes, 1944 corregidas y 231 históricas) y 71 pendientes documentadas (34 de fuente y 37 de ambigüedad); quedan 9268 sin revisar individualmente. Hay 2238 preguntas con cambios en enunciado, opciones o clave respecto del original, calculado comparando esos campos en los registros completos.', 'Último lote secuencial aplicado localmente: 508 (IDs 2856–2860). Acumulado: 2860 preguntas examinadas individualmente, 2789 verificadas (609 vigentes, 1949 corregidas y 231 históricas) y 71 pendientes documentadas (34 de fuente y 37 de ambigüedad); quedan 9263 sin revisar individualmente. Hay 2243 preguntas con cambios en enunciado, opciones o clave respecto del original, calculado comparando esos campos en los registros completos.');
const section = `## Lote 508 — 29 de octubre

IDs 2856–2860 revisados individualmente; el banco previo queda preservado en \`cambios-lote-508.json\`.

- **2856 — ISO/IEC 11801 y vídeo:** se elimina la asociación no demostrada entre “vídeo en tiempo real” y una clase única de cableado. La norma especifica un sistema de cableado genérico que admite una gama amplia de servicios, incluidos voz, datos y vídeo; no decide una clase para cualquier flujo sin requisitos de aplicación. A1-110/A2-IV-7; Academy, Bloque 42.
- **2857 — pruebas antes de producción:** se delimita a las comprobaciones finales de una versión en entorno staging/preproducción equivalente a producción; las pruebas unitarias e integración pueden producirse antes y en otros entornos. A1-96/A2-III-7/III-6; Academy, Bloque 38.
- **2858 — ITS de incidentes:** se sustituye la referencia genérica a “una ITS” por la ITS de Notificación de Incidentes, que regula notificación/gestión de incidentes significativos. Se distingue su texto de 2018, con referencias al ENS anterior, del marco vigente de los arts. 25 y 33 del RD 311/2022. A1-48/A2-I-9/II-13; Academy, Bloque 22.
- **2859 — ontología:** se conserva la respuesta clásica de Gruber, pero se atribuye explícitamente a su definición de 1993; no se presenta como definición universal única. A1-76/A2-I-9; Academy, Bloques 34 y 11.
- **2860 — servicios web:** se corrigen las cuatro opciones: WSDL 1.1 tiene cuatro primitivas; WS-BPEL orquesta procesos; el proveedor publica en UDDI y el consumidor descubre; SOAP 1.1 es intercambio XML e incluye convención para RPC. A1-58/A2-II-6/III-12; Academy, Bloque 28.

Fuentes primarias: [ISO/IEC 11801-1:2017, enmienda 1:2025](https://www.iso.org/standard/66182.html); GOV.UK Service Manual, [preproducción](https://www.gov.uk/service-manual/technology/working-in-pre-production-environments) y [despliegues](https://www.gov.uk/service-manual/technology/deploying-software-regularly); BOE, [ITS de Notificación de Incidentes](https://www.boe.es/eli/es/res/2018/04/13/%281%29/con) y [RD 311/2022, ENS vigente](https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191); Gruber, [A Translation Approach to Portable Ontology Specifications (1993)](https://tomgruber.org/writing/ontolingua-kaj-1993.pdf); W3C, [WSDL 1.1](https://www.w3.org/TR/2001/NOTE-wsdl-20010315) y [SOAP 1.1](https://www.w3.org/TR/soap11/); OASIS, [UDDI FAQ](https://www.oasis-open.org/committees/uddi-spec/faq.php) y [WS-BPEL 2.0](https://docs.oasis-open.org/wsbpel/2.0/CS01/wsbpel-v2.0-CS01.html).

Cotejo curricular en Drive: [Bloque 42 Redes 2026.1](https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view) (cableado estructurado); [Bloque 38 Análisis, Diseño y Construcción de SI 2026.1](https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view) (pruebas/despliegue); [Bloque 22 Seguridad, ENS y Ciberseguridad 2026.2](https://drive.google.com/file/d/18tJzWuBHyd4FbkzQIE5fIbSCRdlrt_1U/view); [Bloque 34 Business Intelligence y Big Data 2026.1](https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view) (§12 ontologías) y [Bloque 11 RISP, Datos Abiertos y Transparencia 2026.2](https://drive.google.com/file/d/17B9a1yxMFgHCHEyVVBi0PG-cdCYABVvd/view) (§5.3); [Bloque 28 Arquitectura SOA 2026.1](https://drive.google.com/file/d/1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ/view). La academia se usa como mapa curricular, no como fuente autoritativa de respuestas. Los temas se comprobaron en \`temario-oficial.json\` y frente a las convocatorias A1 [BOE-A-2025-25938](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938) y A2 GSI [BOE-A-2025-26262](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262).

\`inventario.cjs\`, \`verificar.cjs\` y \`git diff --check\` ejecutados: 12.123 preguntas, cero errores; 2.860 revisadas individualmente, 2.789 verificadas, 71 pendientes documentadas y 9.263 sin revisión de contenido. El inventario estructural no acredita revisión individual.

`;
if (!s.includes('## Lote 508 — 29 de octubre')) {
  const anchor = '## Lote 507 — 29 de octubre';
  if (!s.includes(anchor)) throw new Error('No se encontró sección del lote 507 para inserción');
  s = s.replace(anchor, section + anchor);
}
fs.writeFileSync(p, s);
