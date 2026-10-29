const fs = require('node:fs');
const path = require('node:path');
const file = path.join(__dirname, 'README.md');
let text = fs.readFileSync(file, 'utf8');
const before = 'Último lote secuencial aplicado: 565 (IDs 3141–3145). Acumulado: 3145 preguntas examinadas individualmente, 3073 verificadas (642 vigentes, 2192 corregidas y 239 históricas) y 72 pendientes documentadas (34 de fuente y 38 de ambigüedad); quedan 8978 sin revisar individualmente. Hay 2504 preguntas con cambios en enunciado, opciones o clave respecto del original, calculado comparando los registros completos.';
const after = 'Último lote secuencial aplicado: 566 (IDs 3146–3150). Acumulado: 3150 preguntas examinadas individualmente, 3078 verificadas (642 vigentes, 2197 corregidas y 239 históricas) y 72 pendientes documentadas (34 de fuente y 38 de ambigüedad); quedan 8973 sin revisar individualmente. Hay 2509 preguntas con cambios en enunciado, opciones o clave respecto del original, calculado comparando los registros completos.';
if (!text.includes(before)) throw new Error('No coincide el estado previo del lote 565.');
text = text.replace(before, after);
const section = `## Lote 566 — 29 de octubre

IDs 3146–3150 revisados individualmente con documentación primaria vigente de Microsoft, Intel, SNIA, Heroku/OpenStack y Thomas Erl; se cotejaron los bloques temáticos correspondientes de ITIC Academy y los programas oficiales A1/A2 de las convocatorias GSI 2025. Se delimitó el alcance real de EDR, se acotó Hyper-Threading a CPU compatibles, se actualizó la denominación Microsoft 365 y la clasificación de servicios, se distinguieron factor de forma/interfaz/protocolo SSD y se explicitó el catálogo de principios SOA usado. Se conservaron los cinco originales completos en [cambios-lote-566.json](cambios-lote-566.json).

- **3146 — EDR en endpoints:** incorporar los endpoints compatibles dentro del alcance para que envíen telemetría y administrar detección/respuesta centralmente; la herramienta no garantiza por sí sola toda la seguridad. A1-53/54/125; A2-II-13. Cotejo Academy Bloques 26 §§6.1/6.4 y 48 §7.2.
- **3147 — Intel Hyper-Threading:** implementa SMT, con hasta dos contextos lógicos por núcleo en CPU compatibles; comparte recursos y puede mejorar ciertas cargas, pero no duplica necesariamente el rendimiento ni existe en todas las SKU. A1-52; A2-II-1. Academy Bloque 26 §§2.1–2.2.
- **3148 — modelos cloud:** Heroku es PaaS; Microsoft 365 es SaaS; OpenStack ofrece IaaS. Se sustituyó el nombre comercial desactualizado Office 365. A1-55; A2-II-1. Academy Bloque 25 (IaaS/PaaS/SaaS).
- **3149 — SSD:** M.2 es factor de forma, PCIe interfaz/bus y NVMe protocolo; M.2 también admite otras interfaces, por lo que el enunciado se acotó al SSD NVMe M.2 sobre PCIe. A1-56; A2-IV-5. Academy Bloque 26 §§7–8.
- **3150 — SOA:** la pregunta se acotó a los principios de orientación a servicios de Thomas Erl; composability, discoverability y reusability son principios de su catálogo, junto con otros como bajo acoplamiento, abstracción y autonomía. A1-58; A2-II-6. Academy Bloque 28, principios SOA.

Fuentes técnicas primarias: Microsoft Learn sobre [capacidades EDR](https://learn.microsoft.com/defender-endpoint/microsoft-defender-endpoint-windows) e [incorporación de endpoints](https://learn.microsoft.com/en-us/intune/device-configuration/endpoint-security/deploy-edr); Intel sobre [Hyper-Threading](https://www.intel.com/content/www/us/en/gaming/resources/hyper-threading.html); [SNIA, formatos SSD](https://www.snia.org/forums/cmsi/knowledge/formfactors); Heroku, [PaaS](https://www.heroku.com/platform/); OpenStack, [IaaS](https://docs.openstack.org/install-guide/get-started-with-openstack.html); Microsoft, [servicios cloud y SaaS](https://learn.microsoft.com/en-au/microsoft-365/downloads/msft_cloud_architecture_hybrid.pdf); Thomas Erl, [principios de diseño SOA](https://www.thomaserl.com/book/soa-principles-of-service-design/chapter-descriptions/index.html). Programas oficiales A1/A2: [convocatoria A1, BOE-A-2025-25938](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938) y [convocatoria A2, BOE-A-2025-26262](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262), cotejadas con revision/temario-oficial.json.

Cotejo curricular Drive (versiones consultadas en 2026): [Bloque 26 Hardware/servidores/almacenamiento](https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view) (§§2, 6–8); [Bloque 25 Cloud Computing](https://drive.google.com/file/d/16Er3cneQ-Vik3zSjYq6zQUOfSKK4vxVu/view) (IaaS/PaaS/SaaS); [Bloque 28 Arquitectura SOA](https://drive.google.com/file/d/1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ/view); [Bloque 48 Seguridad en redes y aplicaciones](https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view) (§7.2 EDR/XDR). ITIC Academy se utiliza como cotejo de cobertura curricular, no como sustituto de las fuentes técnicas primarias.

Tras el lote se ejecutaron inventario.cjs, verificar.cjs y git diff --check. El inventario estructural no equivale a revisión individual del contenido.

`;
const marker = '## Lote 565 — 29 de octubre';
if (!text.includes(marker)) throw new Error('No se encuentra el encabezado del lote 565.');
text = text.replace(marker, section + marker);
fs.writeFileSync(file, text);
console.log('Progreso 566: 3150 examinadas, 3078 verificadas, 642 vigentes, 2197 corregidas, 8973 sin revisar.');
