const fs = require('node:fs');
const path = require('node:path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => /^cambios-lote-\d+\.json$/.test(f));
const totals = {vigente: 0, corregida: 0, historica: 0, pendiente_fuente: 0, pendiente_ambiguedad: 0};
let changed = 0;
for (const file of files) for (const c of JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8')).cambios) {
  totals[c.actualizada.revision.estado]++;
  if (['texto', 'opciones', 'respuesta_correcta'].some(k => JSON.stringify(c.original[k]) !== JSON.stringify(c.actualizada[k]))) changed++;
}
const n = Object.values(totals).reduce((a, b) => a + b, 0);
const verified = totals.vigente + totals.corregida + totals.historica;
const pending = totals.pendiente_fuente + totals.pendiente_ambiguedad;
const left = 12123 - n;
const summary = `Último lote secuencial aplicado: 626 (IDs 3446–3450). Acumulado: ${n} preguntas examinadas individualmente, ${verified} verificadas (${totals.vigente} vigentes, ${totals.corregida} corregidas y ${totals.historica} históricas) y ${pending} pendientes documentadas (${totals.pendiente_fuente} de fuente y ${totals.pendiente_ambiguedad} de ambigüedad); quedan ${left} sin revisar individualmente. Hay ${changed} preguntas con cambios en enunciado, opciones o clave frente al original, comparando registros completos.`;
const section = `## Lote 626 — 30 de octubre de 2026

IDs 3446–3450 revisados individualmente. Se preservan los originales completos en [cambios-lote-626.json](cambios-lote-626.json); las cinco entradas incluyen explicaciones, fuentes, temas oficiales y cotejo académico.
- **3446 — software libre:** se formula sobre las libertades esenciales: estudiar cómo funciona y modificar el programa requiere acceso al código fuente. Libertad no significa precio cero; las licencias permiten redistribución incluso cobrando. Se indica que el código fuente por sí solo no sustituye los derechos/licencia aplicables. **Corregida.** A1-69; A2-II-14.
- **3447 — JNI:** se conserva JNI como interfaz estándar de interoperabilidad de Java con métodos y bibliotecas nativos, incluidos C/C++. JAXP, JNDI y JDBC tienen otras funciones. **Corregida.** A1-67; A2-II-3.
- **3448 — dominio relacional:** se mantiene la clave: un dominio es el conjunto de valores admisibles para un atributo. Se distingue del concepto SQL 'CREATE DOMAIN', que define un tipo con restricciones en un gestor. **Corregida.** A1-64; A2-II-5/III-4.
- **3449 — memoria virtual:** se reemplaza la generalización imprecisa sobre mapas “lógicos” por el modelo explícito de direcciones virtuales de un proceso traducidas a direcciones físicas mediante MMU/tablas. No se confunde con caché, ROM ni cauce de instrucciones. **Corregida.** A1-59; A2-II-2.
- **3450 — pipelining:** se define como segmentar la ejecución de instrucciones en etapas y solapar etapas de instrucciones distintas. Esto puede mejorar el rendimiento agregado, pero no reduce necesariamente la latencia individual; se separa explícitamente de la segmentación de memoria. **Corregida.** A1-52; A2-II-1, como correspondencia curricular de proximidad a arquitecturas de computadores, sin atribuir a esos temas una mención literal del pipeline.

Fuentes técnicas: GNU [What is Free Software?](https://www.gnu.org/philosophy/free-sw.html) y [GPL FAQ: cobrar por copias](https://www.gnu.org/licenses/gpl-faq.html#DoesTheGPLAllowMoney); Oracle [JNI Specification, Java SE 26, introducción](https://docs.oracle.com/en/java/javase/26/docs/specs/jni/intro.html) y [diseño](https://docs.oracle.com/en/java/javase/26/docs/specs/jni/design.html); Silberschatz, Korth y Sudarshan, [Database System Concepts, 7.ª ed., modelo relacional](https://www.db-book.com/slides-dir/PDF-dir/ch6.pdf), y [documentación PostgreSQL sobre dominios SQL](https://www.postgresql.org/docs/current/domains.html); Microsoft Learn [memoria virtual y traducción de direcciones](https://learn.microsoft.com/en-us/troubleshoot/windows-server/performance/ram-virtual-memory-pagefile-management) y Oracle Linux [traducción mediante tablas de páginas](https://docs.oracle.com/en/operating-systems/oracle-linux/6/adminsg/ol_about_hugepages.html); Intel [pipelining](https://www.intel.com/content/www/us/en/docs/oneapi-fpga-add-on/optimization-guide/2023-2/pipelining-001.html) y [Optimization Reference Manual](https://www.intel.com/content/dam/doc/manual/64-ia-32-architectures-optimization-manual.pdf).

Cotejo ITIC Academy: [bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización](https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk), encuadre general de arquitectura, no localizado tratamiento literal del pipeline; [bloque 27 Sistemas Operativos](https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk), que sí incluye memoria virtual, segmentación y traducción; [bloque 29 Bases de datos, SQL y modelado](https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk), modelo relacional y dominios; [bloque 30 Tecnologías de Sistemas de Información](https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk), entorno Java, sin atribuirle explicación específica de JNI. La búsqueda de materiales accesibles no localizó un bloque dedicado a software libre; esa pregunta se coteja con GNU y el tema oficial.

Temario cotejado con [A1 BOE-A-2025-25938, anexo I](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938), y [A2 GSI BOE-A-2025-26262, anexo IX](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262), contrastados con [temario-oficial.json](temario-oficial.json): software libre A1-69/A2-II-14; JNI A1-67/A2-II-3; modelo relacional A1-64/A2-II-5 y A2-III-4; memoria virtual A1-59/A2-II-2; pipeline A1-52/A2-II-1 por proximidad temática, no por mención explícita.

`;
const readme = path.join(dir, 'README.md');
let text = fs.readFileSync(readme, 'utf8');
text = text.replace(/Último lote secuencial aplicado:[^\r\n]*/, summary);
if (!text.includes('## Lote 626 —')) text = text.replace('## Lote 625 —', section + '## Lote 625 —');
fs.writeFileSync(readme, text);
console.log(`README: ${n} examinadas; ${verified} verificadas; ${pending} pendientes; ${left} restantes; ${changed} preguntas con cambios.`);
