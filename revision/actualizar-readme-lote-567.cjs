const fs = require('node:fs');
const path = require('node:path');
const file = path.join(__dirname, 'README.md');
let text = fs.readFileSync(file, 'utf8');
const before = 'Último lote secuencial aplicado: 566 (IDs 3146–3150). Acumulado: 3150 preguntas examinadas individualmente, 3078 verificadas (642 vigentes, 2197 corregidas y 239 históricas) y 72 pendientes documentadas (34 de fuente y 38 de ambigüedad); quedan 8973 sin revisar individualmente. Hay 2509 preguntas con cambios en enunciado, opciones o clave respecto del original, calculado comparando los registros completos.';
const after = 'Último lote secuencial aplicado: 567 (IDs 3151–3155). Acumulado: 3155 preguntas examinadas individualmente, 3083 verificadas (642 vigentes, 2202 corregidas y 239 históricas) y 72 pendientes documentadas (34 de fuente y 38 de ambigüedad); quedan 8968 sin revisar individualmente. Hay 2514 preguntas con cambios en enunciado, opciones o clave respecto del original, calculado comparando los registros completos.';
if (!text.includes(before)) throw new Error('No coincide el estado previo del lote 566.');
text = text.replace(before, after);
const section = `## Lote 567 — 29 de octubre

IDs 3151–3155 revisados con documentación oficial vigente de Microsoft, Apache Cassandra, Apple, Rocky Linux y PHP, más una fuente de teoría relacional y el centro de arquitectura de Azure. Se eliminó una generalización sobre tráfico en n-tier; se corrigió la definición/alcance de WSL; se actualizó la terminología histórica de Cassandra; se hizo explícita la minimalidad de las claves candidatas y se precisó la sintaxis y función HTTP de PHP. Los originales completos y las revisiones se conservan en [cambios-lote-567.json](cambios-lote-567.json).

- **3151 — arquitectura de dos y n capas:** n-tier puede permitir escalado independiente, pero no garantiza menos tráfico; las llamadas adicionales pueden elevar tráfico y latencia. A1-58; A2-II-6. Academy Bloque 28 (SOA/arquitecturas cliente-servidor).
- **3152 — WSL y sistemas operativos:** WSL ejecuta distribuciones Linux en Windows; aplicaciones GUI requieren WSL 2/WSLg compatible. Se precisa que macOS se introdujo como denominación en 2016 y Rocky Linux busca compatibilidad con RHEL, no Ubuntu. A1-59/60/61/62; A2-II-2. Academy Bloque 27.
- **3153 — Cassandra:** “column family” es la denominación histórica similar a tabla relacional; en CQL 3 se llama “table”. A1-63/64; A2-II-5/III-15. Academy Bloque 29.
- **3154 — clave candidata:** es una superclave mínima; eliminar cualquiera de sus atributos hace que deje de ser superclave. A1-64; A2-II-5/III-4. Academy Bloque 29.
- **3155 — PHP:** prefijo de variable $ y no almohadilla; los identificadores empiezan por letra o guion bajo. La función header() envía cabeceras HTTP y requiere no haber emitido salida (salvo buffering). A1-65/68; A2-II-3/II-9/III-12. Academy Bloque 30.

Fuentes primarias: [Azure Architecture Center, n-tier](https://learn.microsoft.com/azure/architecture/guide/architecture-styles/n-tier); Microsoft Learn sobre [WSL](https://learn.microsoft.com/en-us/windows/wsl/about) y [apps gráficas WSL](https://learn.microsoft.com/en-us/windows/wsl/tutorials/gui-apps); [Apple Newsroom, macOS Sierra (20/09/2016)](https://www.apple.com/ca/newsroom/2016/09/macos-sierra-now-available-as-a-free-update/); [Rocky Linux, compatibilidad RHEL](https://rockylinux.org/); [Apache Cassandra Glossary](https://cassandra.apache.org/_/glossary.html) y [CQL 3](https://cassandra.apache.org/doc/stable/cassandra/developing/cql/cql_singlefile.html); [Database Management Systems, extracto sobre claves](https://catalogimages.wiley.com/images/db/pdf/9781119580645.excerpt.pdf); PHP Manual para [variables](https://www.php.net/manual/en/language.variables.basics.php) y [la función header](https://www.php.net/manual/en/function.header.php). Programas oficiales: [A1, BOE-A-2025-25938](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938) y [A2, BOE-A-2025-26262](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262), contrastados con revision/temario-oficial.json.

Cotejo curricular Drive: [Bloque 28 Arquitectura SOA](https://drive.google.com/file/d/1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ/view) (arquitecturas cliente-servidor y por capas); [Bloque 27 Sistemas Operativos](https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view) (A1-59/62 y A2-T2); [Bloque 29 Bases de Datos](https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view) (A1-63/64, Cassandra, claves y modelos); [Bloque 30 Tecnologías de Sistemas de Información](https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view) (A1-65/68, PHP y desarrollo web en servidor). Se consultaron versiones actualizadas en septiembre de 2026; ITIC Academy se emplea como cotejo curricular, no como fuente de especificaciones técnicas.

Tras el lote se ejecutaron inventario.cjs, verificar.cjs y git diff --check. El inventario estructural no equivale a revisión individual del contenido.

`;
const marker = '## Lote 566 — 29 de octubre';
if (!text.includes(marker)) throw new Error('No se encuentra el encabezado del lote 566.');
text = text.replace(marker, section + marker);
fs.writeFileSync(file, text);
console.log('Progreso 567: 3155 examinadas, 3083 verificadas, 8968 sin revisar.');
