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
const summary = `Último lote secuencial aplicado: 629 (IDs 3461–3465). Acumulado: ${n} preguntas examinadas individualmente, ${verified} verificadas (${totals.vigente} vigentes, ${totals.corregida} corregidas y ${totals.historica} históricas) y ${pending} pendientes documentadas (${totals.pendiente_fuente} de fuente y ${totals.pendiente_ambiguedad} de ambigüedad); quedan ${left} sin revisar individualmente. Hay ${changed} preguntas con cambios en enunciado, opciones o clave frente al original, comparando registros completos.`;
const section = `## Lote 629 — 30 de octubre de 2026

IDs 3461–3465 revisados individualmente; los originales completos se conservan en [cambios-lote-629.json](cambios-lote-629.json).
- **3461 — bases de datos relacionales:** se reformulan los distractores sobre acceso directo y almacenamiento físico; se mantiene que el modelo expresa relaciones lógicas sin exigir que el usuario conozca la disposición física. **Corregida.** A1-64; A2-II-5/III-4.
- **3462 — firma electrónica avanzada:** el artículo 26 eIDAS define cuatro condiciones; el uso de dispositivo cualificado corresponde a la firma cualificada y no es requisito general de toda firma avanzada. **Corregida.** A1-80; A2-I-6.
- **3463 — clasificación de periféricos:** se limita a una clasificación funcional básica en entrada, salida y almacenamiento; se advierte que no es exhaustiva y que hay dispositivos con funciones múltiples. **Corregida.** A1-54 y A2-II-1 como encuadre de dispositivos, sin epígrafe directo de esta taxonomía.
- **3464 — superglobal PHP $_COOKIE:** se define como array asociativo de variables recibidas mediante cookies HTTP en la petición actual y se distingue de setcookie(), que envía cookies. **Corregida.** A1-68; A2-III-12.
- **3465 — dominio relacional:** se define como conjunto de valores permitidos para un atributo, atómicos en el modelo clásico; se distingue del tipo DOMAIN implementado por un SGBD. **Corregida.** A1-64; A2-II-5/III-4.

Fuentes técnicas y normativas: Codd, [A Relational Model of Data for Large Shared Data Banks (1970)](https://web.eecs.umich.edu/~michjc/eecs584/Papers/codd_1970.pdf), y [PostgreSQL 18: Table Expressions/JOIN](https://www.postgresql.org/docs/current/queries-table-expressions.html); [Reglamento (UE) 910/2014, versión consolidada vigente consultada](https://eur-lex.europa.eu/eli/reg/2014/910/2024-10-18), art. 26 y arts. 3.12/29; Ministerio de Educación de Sri Lanka, [Information and Communication, dispositivos periféricos](https://www.e-thaksalawa.moe.gov.lk/moodle/pluginfile.php/179403/mod_resource/content/1/Text%20Book.pdf); PHP Manual: $_COOKIE ([variables de cookies](https://www.php.net/manual/en/reserved.variables.cookies.php) y [variables predefinidas](https://www.php.net/manual/en/reserved.variables.php)); PostgreSQL 18 [Table Basics](https://www.postgresql.org/docs/current/ddl-basics.html), como analogía de restricciones de valores por tipo, no como equivalencia completa con los dominios del modelo teórico.

Cotejo ITIC Academy: [bloque 29 Bases de datos, SQL y modelado](https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk), que define explícitamente el dominio de atributo como valores admisibles y cubre relaciones/consultas; [bloque 36 Seguridad, Criptografía, Identificación y Firma](https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk), que cubre firmas avanzadas y cualificadas; [bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización](https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk), con periféricos en el contexto de dispositivos/conectividad, sin localizar una exposición literal de la clasificación básica; [bloque 30 Tecnologías de Sistemas de Información](https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk), que desarrolla PHP y web en servidor, sin localizar $_COOKIE de forma específica. Las definiciones exactas se acreditan con las fuentes técnicas/normativas primarias enlazadas.

Temario cotejado con [convocatoria A1 BOE-A-2025-25938, anexo I](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938) y [A2 GSI BOE-A-2025-26262, anexo IX](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262), usando [temario-oficial.json](temario-oficial.json): relacional A1-64/A2-II-5 y III-4; firma electrónica A1-80/A2-I-6; periféricos/dispositivos A1-54 y A2-II-1 solo como encuadre; PHP A1-68/A2-III-12.

`;
const readme = path.join(dir, 'README.md');
let text = fs.readFileSync(readme, 'utf8');
text = text.replace(/Último lote secuencial aplicado:[^\r\n]*/, summary);
if (!text.includes('## Lote 629 —')) text = text.replace('## Lote 628 —', section + '## Lote 628 —');
fs.writeFileSync(readme, text);
console.log(`README: ${n} examinadas; ${verified} verificadas; ${pending} pendientes; ${left} restantes; ${changed} preguntas con cambios.`);
