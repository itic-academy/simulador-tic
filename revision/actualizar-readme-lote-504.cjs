const fs = require('node:fs');
const p = 'revision/README.md';
let s = fs.readFileSync(p, 'utf8');
const old = 'Último lote secuencial aplicado localmente: 503 (IDs 2831–2835). Acumulado: 2835 preguntas examinadas individualmente, 2764 verificadas (608 vigentes, 1925 corregidas y 231 históricas) y 71 pendientes documentadas (34 de fuente y 37 de ambigüedad); quedan 9288 sin revisar individualmente. Hay 2219 preguntas con cambios en enunciado, opciones o clave respecto del original, calculado comparando esos campos en los registros completos.';
const neu = 'Último lote secuencial aplicado localmente: 504 (IDs 2836–2840). Acumulado: 2840 preguntas examinadas individualmente, 2769 verificadas (609 vigentes, 1929 corregidas y 231 históricas) y 71 pendientes documentadas (34 de fuente y 37 de ambigüedad); quedan 9283 sin revisar individualmente. Hay 2223 preguntas con cambios en enunciado, opciones o clave respecto del original, calculado comparando esos campos en los registros completos.';
if (!s.includes(old)) throw new Error('No se encuentra el acumulado del lote 503');
const section = [
'## Lote 504 — 29 de octubre',
'',
'IDs 2836–2840 revisados individualmente y documentados en `cambios-lote-504.json`: se afina la definición del método de entropía, se restringe la afirmación de CRT al uso concreto en RSA, se actualiza el ENS vigente, se precisa ejecución especulativa y se fijan las condiciones del cálculo de RAID.',
'',
'- **2836 — ponderación por entropía:** se reemplaza la explicación vaga de «suavizar subjetividad» por su función precisa: derivar pesos objetivos de los criterios a partir de la información/dispersión de la matriz. A1-40/A2-II-15; Academy, Bloque 17.',
'- **2837 — Teorema Chino del Resto:** se concreta su uso en RSA: acelerar operaciones con clave privada, como descifrado y firma, mediante exponentes CRT. A1-79/A2-IV-12; Academy, Bloque 36.',
'- **2838 — principios ENS:** se cita expresamente el artículo 5 del RD 311/2022. Se diferencia la formulación vigente «prevención, detección, respuesta y conservación» de la redacción histórica del ENS 2010 y se elimina un distractor que podía confundirse con esta. A1-48/A2-I-9/A2-II-13; Academy, Bloque 22.',
'- **2839 — ejecución especulativa:** se elimina la descripción imprecisa como «paralelización automática» y se explica que el procesador ejecuta instrucciones transitoriamente con predicciones durante la ejecución; si se predice mal se descarta el estado arquitectónico, aunque pueden quedar efectos microarquitectónicos en caché. A1-54/A2-II-1; Academy, Bloque 26.',
'- **2840 — capacidad RAID:** se confirma RAID 5 (99 unidades netas equivalentes frente a 98 en RAID 6 y aproximadamente 50 en RAID 1/0+1), bajo discos iguales y sin reservas ni sobrecarga, condiciones añadidas al enunciado. A1-56/A2-II-1; Academy, Bloque 26.',
'',
'Fuentes: Hwang y Yoon, [Multiple Attribute Decision Making (Springer, 1981)](https://doi.org/10.1007/978-3-642-48318-9), y Wang y Lee, [pesos de entropía objetivos en decisión multicriterio](https://www.sciencedirect.com/science/article/pii/S0377221703001462); [RFC 8017, PKCS #1 v2.2, §§3.2 y 5.1](https://www.rfc-editor.org/rfc/rfc8017.html); [RD 311/2022 consolidado, art. 5](https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191) y [RD 3/2010, ENS histórico derogado](https://www.boe.es/buscar/act.php?id=BOE-A-2010-1330); Intel, [comportamiento de ejecución especulativa](https://www.intel.com/content/www/us/en/developer/articles/technical/software-security-guidance/technical-documentation/hardware-behavior-related-to-speculative-execution.html), y [Microsoft Learn](https://learn.microsoft.com/en-us/cpp/security/developer-guidance-speculative-execution?view=msvc-170); IBM, [estimación de capacidad RAID](https://www.ibm.com/docs/en/power7/9119-FHB?topic=overview-estimating-disk-array-capacities) y [comparación de niveles](https://www.ibm.com/docs/en/power8/0000-REF?topic=POWER8_REF%2Fp8ebk%2Fraidlevelsummary.html).',
'',
'Cotejo curricular en Drive: [Bloque 17, Adquisición de sistemas y rentabilidad de inversiones](https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view) (§§3.1–3.4); [Bloque 36, Seguridad, criptografía, identificación y firma](https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view); [Bloque 22, Seguridad, ENS y Ciberseguridad](https://drive.google.com/file/d/18tJzWuBHyd4FbkzQIE5fIbSCRdlrt_1U/view); [Bloque 26, Hardware, servidores, CPD, almacenamiento y virtualización](https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view). La academia se usa como índice curricular, no como autoridad para establecer respuestas. Se cotejaron programas oficiales en `temario-oficial.json`: 2836 A1-40/A2-II-15; 2837 A1-79/A2-IV-12; 2838 A1-48/A2-I-9/A2-II-13; 2839 A1-54/A2-II-1; 2840 A1-56/A2-II-1.',
'',
'`inventario.cjs`, `verificar.cjs` y `git diff --check` ejecutados: 12.123 preguntas, cero errores; 2.840 revisadas individualmente, 2.769 verificadas, 71 pendientes y 9.283 sin revisión de contenido. El inventario estructural no acredita revisión individual.',
'',
].join('\n');
s = s.replace(old, neu).replace('## Lote 503 — 29 de octubre', section + '\n## Lote 503 — 29 de octubre');
fs.writeFileSync(p, s);
console.log('README actualizado al lote 504');
