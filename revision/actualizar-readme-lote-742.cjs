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
const summary = 'Último lote secuencial aplicado: 742 (IDs 4031–4035). Acumulado: ' + examined + ' preguntas examinadas individualmente, ' + verified + ' verificadas (' + totals.vigente + ' vigentes, ' + totals.corregida + ' corregidas y ' + totals.historica + ' históricas) y ' + pending + ' pendientes documentadas (' + totals.pendiente_fuente + ' de fuente y ' + totals.pendiente_ambiguedad + ' de ambigüedad); quedan ' + remaining + ' sin revisar individualmente. Hay ' + changed + ' preguntas con cambios en enunciado, opciones o clave frente al original, comparando registros completos.';
const section = [
  '## Lote 742 — 5 de noviembre de 2026', '',
  'IDs 4031–4035 revisados individualmente; originales preservados en [cambios-lote-742.json](cambios-lote-742.json).', '',
  '- **4031 — integridad referencial:** se identifica la restricción FOREIGN KEY en la tabla hija; se distingue del papel de PRIMARY/UNIQUE en la tabla referenciada. **Corregida.**',
  '- **4032 — significado de DDL:** se corrige la traducción y expansión: Data Definition Language, lenguaje de definición de datos. **Corregida.**',
  '- **4033 — álgebra relacional:** se mantiene que la intersección es derivada, se explicita compatibilidad de esquemas y la expresión mediante diferencia. **Corregida.**',
  '- **4034 — DDL y DML:** se corrige la mezcla con niveles conceptual/externo de ANSI/SPARC; DDL define esquema y DML consulta o cambia datos. **Corregida.**',
  '- **4035 — vista materializada:** se sustituye «tabla caché» por resultado de consulta materializado y almacenado, con política de refresco. **Corregida.**', '',
  'Fuentes: [Oracle AI Database 26, integridad y FOREIGN KEY](https://docs.oracle.com/en/database/oracle/oracle-database/26/adfns/data-integrity.html) y [SQL Language Reference, constraint](https://docs.oracle.com/en/database/oracle/oracle-database/26/sqlrf/constraint.html); [Oracle, About DDL Statements](https://docs.oracle.com/en/database/oracle/oracle-database/26/tdddg/data-definition-language-ddl-statements.html) y [Types of SQL Statements](https://docs.oracle.com/en/database/oracle/oracle-database/26/sqlrf/Types-of-SQL-Statements.html); [Duke University, álgebra relacional, intersección derivada](https://courses.cs.duke.edu/spring17/compsci316/lectures/02-relational.pdf); [Codd, modelo relacional, DOI](https://doi.org/10.1145/362384.362685); [Oracle AI Database 26, CREATE MATERIALIZED VIEW](https://docs.oracle.com/en/database/oracle/oracle-database/26/sqlrf/CREATE-MATERIALIZED-VIEW.html) y [refresco de vistas materializadas](https://docs.oracle.com/en/database/oracle/oracle-database/26/admin/read-only-materialized-view-concepts.html); [PostgreSQL, Materialized Views](https://www.postgresql.org/docs/current/rules-materializedviews.html).',
  '',
  'Cotejo académico directo: [bloque 29 «Bases de datos, SQL y modelado de datos», versión 2026.1](https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk), leído desde Drive. El contenido recoge el modelo relacional y restricciones (§§2.1–2.3), operadores y diferencias (§3.4), DDL/DML (§§5.1–5.2), materialización de vistas y bases analíticas (§§5.11 y 10.1). Correspondencia con [convocatoria A1 GSI 2025, anexo I](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938) y [A2 GSI 2025, anexo IX](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262): 4031–4033 A1-64/A2-II-5; 4034 A1-63/64, A2-II-5; 4035 A1-64/75, A2-II-4/II-5.',
  '',
  'Comprobaciones: se contrastaron las claves y reformulaciones con documentación Oracle AI Database 26 y los fundamentos del modelo relacional; el bloque de academia 29 se consultó directamente. El lote quedó sin dudas documentadas. Inventario y verificador ejecutados tras la revisión.', ''
].join('\n');
const file = path.join(dir, 'README.md');
let text = fs.readFileSync(file, 'utf8');
text = text.replace(/^# Revisión del banco TIC — estado al .*$/m, '# Revisión del banco TIC — estado al 5 de noviembre de 2026');
text = text.replace(/Último lote secuencial aplicado:[^\r\n]*/, summary);
if (!text.includes('## Lote 742 —')) text = text.replace('## Lote 741 —', section + '\n## Lote 741 —');
fs.writeFileSync(file, text);
console.log('README: ' + examined + ' examinadas, ' + verified + ' verificadas, ' + pending + ' pendientes, ' + remaining + ' sin revisar; ' + changed + ' cambios de contenido.');
