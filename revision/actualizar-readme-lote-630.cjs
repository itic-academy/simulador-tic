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
const summary = `Último lote secuencial aplicado: 630 (IDs 3466–3470). Acumulado: ${n} preguntas examinadas individualmente, ${verified} verificadas (${totals.vigente} vigentes, ${totals.corregida} corregidas y ${totals.historica} históricas) y ${pending} pendientes documentadas (${totals.pendiente_fuente} de fuente y ${totals.pendiente_ambiguedad} de ambigüedad); quedan ${left} sin revisar individualmente. Hay ${changed} preguntas con cambios en enunciado, opciones o clave frente al original, comparando registros completos.`;
const section = `## Lote 630 — 30 de octubre de 2026

IDs 3466–3470 revisados individualmente; se conservan completos los originales en [cambios-lote-630.json](cambios-lote-630.json).
- **3466 — almacén de datos:** se sustituyen una definición vaga y distractores falsos por las cuatro características clásicas: orientado a temas, integrado, variante en el tiempo y no volátil. La frecuencia de carga y la minería de datos no son rasgos definitorios exclusivos. **Corregida.** A1-75; A2-II-4.
- **3467 — preprocesamiento para minería:** se mantiene la preparación de datos como actividad necesaria cuando la tarea o su calidad lo requieren; se retira la formulación absoluta que sugería una canalización idéntica en todos los casos. **Corregida.** A1-71; A2-III-15.
- **3468 — WAPI:** se delimita la sigla al contexto de la Workflow Management Coalition; son las interfaces de programación de aplicaciones de workflow. Se reconoce que la sigla tiene otras expansiones en otros ámbitos. **Corregida.** A1-104; A2-II-16. Se rectifica el código A1 cotejado: A1-103 corresponde a calidad de servicios y A1-104 a gestión documental/contenidos.
- **3469 — modo POSIX 0500:** para un archivo regular, el propietario tiene lectura y ejecución; grupo y otros no tienen permisos. Se explica 5 = 4 + 1 y se distingue el sentido de ejecución en directorios. **Corregida.** A1-60; A2-II-2.
- **3470 — SHA-1:** se rectifica la premisa falsa: SHA-1 es una función hash, no cifrado simétrico. Produce un resumen de 160 bits y NIST recomienda su transición para protección criptográfica nueva por las colisiones conocidas. **Corregida.** A1-79; A2-IV-12.

Fuentes técnicas: Oracle [Data Warehousing Concepts](https://docs.oracle.com/cd/E18283_01/server.112/e16579/concept.htm); Han, Pei y Tong, [material oficial de Data Mining: Concepts and Techniques, 4.ª ed., capítulo 2](https://hanj.cs.illinois.edu/bk4/bk4_slidesindex.htm), y [capítulo sobre KDD y preprocesamiento](https://hanj.cs.illinois.edu/cs412/bk3/01.pdf); Workflow Management Coalition, [WAPI Interfaces 2&3](https://wfmc.org/wp-content/uploads/2022/09/if2v20.pdf); [Linux chmod(1)](https://man7.org/linux/man-pages/man1/chmod.1.html) y [GNU Coreutils numeric modes](https://www.gnu.org/s/coreutils/manual/html_node/Operator-Numeric-Modes.html); NIST [FIPS 180-4](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf), [transición de SHA-1](https://csrc.nist.gov/News/2022/nist-transitioning-away-from-sha-1-for-all-apps) y [política sobre funciones hash](https://csrc.nist.gov/Projects/Hash-Functions/NIST-Policy-on-Hash-Functions).

Cotejo ITIC Academy en Drive: [bloque 34 Business Intelligence y Big Data](https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk), almacenes de datos y minería; [bloque 32 Inteligencia Artificial y Ciencia de Datos](https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk), ciclo y preparación de datos; [Temas 103 y 104 Gestión Documental](https://docs.google.com/document/d/1GdG6vnpLbrJqXyh7oO0HMHO0JzX5nlU9/edit?usp=drivesdk), gestión de flujos de trabajo (no se localizó en él la expansión literal WAPI); [bloque 27 Sistemas Operativos](https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk), UNIX/Linux; [bloque 36 Seguridad y Criptografía](https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk), funciones hash. El cotejo es temático; las definiciones se atribuyen a las fuentes técnicas primarias enlazadas.

Programas oficiales cotejados contra [convocatoria A1 BOE-A-2025-25938, anexo I](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938), [convocatoria A2 GSI BOE-A-2025-26262, anexo IX](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262) y [temario-oficial.json](temario-oficial.json): A1-75/A2-II-4 para almacenes de datos; A1-71/A2-III-15 para ciencia de datos y minería; A1-104/A2-II-16 para gestión documental y workflows; A1-60/A2-II-2 para UNIX/Linux; A1-79/A2-IV-12 para hash y criptografía.

`;
const readme = path.join(dir, 'README.md');
let text = fs.readFileSync(readme, 'utf8');
text = text.replace(/Último lote secuencial aplicado:[^\r\n]*/, summary);
if (!text.includes('## Lote 630 —')) text = text.replace('## Lote 629 —', section + '## Lote 629 —');
fs.writeFileSync(readme, text);
console.log(`README: ${n} examinadas; ${verified} verificadas; ${pending} pendientes; ${left} restantes; ${changed} preguntas con cambios.`);
