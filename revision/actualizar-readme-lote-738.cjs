const fs = require('node:fs');
const path = require('node:path');
const dir = __dirname;
const totals = { vigente: 0, corregida: 0, historica: 0, pendiente_fuente: 0, pendiente_ambiguedad: 0 };
let changed = 0;
for (const file of fs.readdirSync(dir).filter(x => /^cambios-lote-\d+\.json$/.test(x))) {
  for (const c of JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8')).cambios) {
    totals[c.actualizada.revision.estado]++;
    if (['texto', 'opciones', 'respuesta_correcta'].some(k => JSON.stringify(c.original[k]) !== JSON.stringify(c.actualizada[k]))) changed++;
  }
}
const examined = Object.values(totals).reduce((a, b) => a + b, 0);
const verified = totals.vigente + totals.corregida + totals.historica;
const pending = totals.pendiente_fuente + totals.pendiente_ambiguedad;
const remaining = 12123 - examined;
const summary = `Último lote secuencial aplicado: 738 (IDs 4011–4015). Acumulado: ${examined} preguntas examinadas individualmente, ${verified} verificadas (${totals.vigente} vigentes, ${totals.corregida} corregidas y ${totals.historica} históricas) y ${pending} pendientes documentadas (${totals.pendiente_fuente} de fuente y ${totals.pendiente_ambiguedad} de ambigüedad); quedan ${remaining} sin revisar individualmente. Hay ${changed} preguntas con cambios en enunciado, opciones o clave frente al original, comparando registros completos.`;
const section = [
  '## Lote 738 — 5 de noviembre de 2026', '',
  'IDs 4011–4015 revisados individualmente; originales preservados en [cambios-lote-738.json](cambios-lote-738.json).', '',
  '- **4011 — factores de mantenimiento:** se corrige una errata y se acota por qué la interdependencia modular, los requisitos funcionales y la dependencia del entorno pueden afectar al mantenimiento. **Corregida.**',
  '- **4012 — reglas de Codd:** se precisa que son doce reglas numeradas, dejando aparte la regla fundacional 0; el propio Codd confirma el recuento en la referencia histórica. **Histórica.**',
  '- **4013 — SQL y OLAP:** se elimina la afirmación de que OLAP acelera universalmente una sentencia SQL. En un almacén relacional de análisis, SELECT recupera filas; los cubos multidimensionales pueden usar MDX. **Corregida.**',
  '- **4014 — NULL y AND:** se mantiene la lógica trivaluada: TRUE AND NULL produce NULL/UNKNOWN, no TRUE ni FALSE. **Vigente.**',
  '- **4015 — instancia Oracle:** se actualiza y delimita a Oracle Database 26; la instancia es el conjunto de procesos y estructuras de memoria que administra los ficheros de la base. **Vigente.**', '',
  'Fuentes primarias: [ISO/IEC/IEEE 14764:2022](https://www.iso.org/standard/80710.html), estándar de mantenimiento, y [MÉTRICA v3, mantenimiento de sistemas](https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Ae15c0c5b-dd9c-4e48-82e3-9e36ba18e839/METRICA_V3_Mantenimiento_de_Sistemas_de_Informacion.pdf); [ISO/IEC 25010:2023, modelo de calidad de producto](https://www.iso.org/standard/78176.html); [E. F. Codd, “Relational Database: A Practical Foundation for Productivity”, postscript del autor](https://www.softwaregems.com.au/Documents/Article/Database/Relational%20Model/Codd%20E%20F/Relational%20Database%20Practical%20Foundation%20Turing%20Award.pdf); [PostgreSQL 18, SELECT](https://www.postgresql.org/docs/current/sql-select.html), [PostgreSQL 18, operadores lógicos y tabla de verdad NULL](https://www.postgresql.org/docs/current/functions-logical.html); [Microsoft Learn, consulta MDX de cubos](https://learn.microsoft.com/en-us/analysis-services/multidimensional-models/mdx/mdx-query-the-basic-query?view=sql-analysis-services-2025); [Oracle AI Database 26, definición de instancia](https://docs.oracle.com/en/database/oracle/oracle-database/26/dbiad/db_dbinstance.html).', '',
  'Cotejo académico directo en Drive: [bloque 29 «Bases de datos, SQL y modelado de datos», versión 2026.1](https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk), incluidas las reglas de Codd (§2.5), NULL y lógica trivaluada (§2.4); [bloque 34 «Business Intelligence y Big Data», versión 2026.1](https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk), para OLAP; y [bloque 39 «Calidad y mantenimiento», versión 2026.1](https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk), para mantenimiento. Correspondencia con [convocatoria A1 GSI 2025, anexo I](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938) y [A2 GSI 2025, anexo IX](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262): 4011 A1-101/A2-III-8; 4012 A1-64/A2-II-5; 4013 A1-64/75-A2-II-5/II-4; 4014 A1-64/A2-II-5; 4015 A1-63/A2-II-5/IV-2.', '',
  'Comprobaciones: se leyeron directamente en Drive los bloques 29, 34 y 39; las respuestas se contrastaron con las fuentes técnicas enlazadas. La pregunta de Codd queda histórica; las demás se adecuan a SQL actual y a Oracle Database 26. Inventario y verificador ejecutados tras el lote.', ''
].join('\n');
const file = path.join(dir, 'README.md');
let text = fs.readFileSync(file, 'utf8');
text = text.replace(/^# Revisión del banco TIC — estado al .*$/m, '# Revisión del banco TIC — estado al 5 de noviembre de 2026');
text = text.replace(/Último lote secuencial aplicado:[^\r\n]*/, summary);
if (!text.includes('## Lote 738 —')) text = text.replace('## Lote 737 —', `${section}\n## Lote 737 —`);
fs.writeFileSync(file, text);
console.log(`README: ${examined} examinadas, ${verified} verificadas, ${pending} pendientes, ${remaining} sin revisar; ${changed} cambios de contenido.`);
