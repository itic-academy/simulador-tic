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
const summary = `Último lote secuencial aplicado: 740 (IDs 4021–4025). Acumulado: ${examined} preguntas examinadas individualmente, ${verified} verificadas (${totals.vigente} vigentes, ${totals.corregida} corregidas y ${totals.historica} históricas) y ${pending} pendientes documentadas (${totals.pendiente_fuente} de fuente y ${totals.pendiente_ambiguedad} de ambigüedad); quedan ${remaining} sin revisar individualmente. Hay ${changed} preguntas con cambios en enunciado, opciones o clave frente al original, comparando registros completos.`;
const section = [
  '## Lote 740 — 5 de noviembre de 2026', '',
  'IDs 4021–4025 revisados individualmente; originales preservados en [cambios-lote-740.json](cambios-lote-740.json).', '',
  '- **4021 — DML:** se mantiene `DELETE`, clasificada expresamente como DML; `CREATE`, `ALTER` y `DROP` se separan como DDL. **Vigente.**',
  '- **4022 — interfaces de acceso:** se corrige `DMBS` y se pregunta por el tipo de elemento: SGBD/DBMS es el gestor, mientras ODBC, RDO y OLE DB son APIs/interfaces de acceso. **Corregida.**',
  '- **4023 — SQL declarativo:** se conserva la respuesta y se limita a una sentencia SQL ordinaria, distinguiéndola de extensiones procedimentales como PL/SQL. **Corregida.**',
  '- **4024 — entidad débil:** se conservan la dependencia de existencia y la clave débil, precisando que la identificación combina clave parcial propia y clave del empleado propietario. **Corregida.**',
  '- **4025 — coste del software libre o propietario:** se conserva que no hay regla universal y se distingue el precio de licencia del coste total; libertad no equivale a gratuidad. **Corregida.**', '',
  'Fuentes: [Oracle AI Database 26, DELETE](https://docs.oracle.com/en/database/oracle/oracle-database/26/sqlrf/DELETE.html) y [SQL Language Reference, tipos de sentencias](https://docs.oracle.com/en/database/oracle/oracle-database/26/sqlrf/sql-language-reference.pdf); [Microsoft Learn, ODBC](https://learn.microsoft.com/en-us/sql/odbc/reference/what-is-odbc?view=sql-server-ver17) y [OLE DB](https://learn.microsoft.com/en-us/office/client-developer/access/desktop-database-reference/ole-db-providers); [Oracle, SQL declarativo y PL/SQL](https://www.oracle.com/a/tech/docs/why-use-plsql-whitepaper-10.pdf) y [Oracle Database 26, extensión procedural PL/SQL](https://docs.oracle.com/en/database/oracle/oracle-database/26/lnpls/overview.html); [Chen, modelo ER original, DOI](https://doi.org/10.1145/320434.320440) y [texto, definición y ejemplo de entidad débil DEPENDENT](https://openlib.org/home/krichel/courses/lis512/readings/chen76theentity-relationship.pdf); [FSF, What is Free Software?](https://www.gnu.org/philosophy/free-sw.en.html) y [Selling Free Software](https://www.gnu.org/philosophy/selling.en.html); [GOV.UK, evaluación de costes iniciales, migración, soporte y operación](https://www.gov.uk/guidance/be-open-and-use-open-source); [Comisión Europea, COM(2026) 288 final, coste total de propiedad y costes de cambio](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52026DC0288).', '',
  'Cotejo académico directo: [bloque 29 «Bases de datos, SQL y modelado de datos», versión 2026.1](https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk), consultado en Drive. §5.2 clasifica SQL DDL/DML; §9.2 cubre interfaces/capas de acceso; §5.14 trata SQL declarativo; §4.2 modelado ER y entidades débiles. Para coste y licencias se leyó [Tema 069 «software libre»](https://drive.google.com/file/d/18qm2iCLcxLReK_TkqQWIm26S38HXEDYr/view?usp=drivesdk), material antiguo de academia cuyo apartado inicial distingue libertad de gratuidad; la afirmación sobre precios se contrastó con fuentes públicas actuales. Correspondencia con [convocatoria A1 GSI 2025, anexo I](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938) y [A2 GSI 2025, anexo IX](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262): 4021–4023 A1-64/A2-II-5; 4024 A1-89/A2-III-4; 4025 A1-69/A2-II-14.', '',
  'Comprobaciones: bloque 29 consultado directamente en Drive; Tema 069 antiguo leído para verificar el encaje histórico de licencias; las claves y reformulaciones contrastadas con documentación Oracle vigente, publicaciones originales o fuentes oficiales. El lote no presenta dudas pendientes.', ''
].join('\n');
const file = path.join(dir, 'README.md');
let text = fs.readFileSync(file, 'utf8');
text = text.replace(/^# Revisión del banco TIC — estado al .*$/m, '# Revisión del banco TIC — estado al 5 de noviembre de 2026');
text = text.replace(/Último lote secuencial aplicado:[^\r\n]*/, summary);
if (!text.includes('## Lote 740 —')) text = text.replace('## Lote 739 —', `${section}\n## Lote 739 —`);
fs.writeFileSync(file, text);
console.log(`README: ${examined} examinadas, ${verified} verificadas, ${pending} pendientes, ${remaining} sin revisar; ${changed} cambios de contenido.`);
