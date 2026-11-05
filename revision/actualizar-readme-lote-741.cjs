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
const summary = 'Último lote secuencial aplicado: 741 (IDs 4026–4030). Acumulado: ' + examined + ' preguntas examinadas individualmente, ' + verified + ' verificadas (' + totals.vigente + ' vigentes, ' + totals.corregida + ' corregidas y ' + totals.historica + ' históricas) y ' + pending + ' pendientes documentadas (' + totals.pendiente_fuente + ' de fuente y ' + totals.pendiente_ambiguedad + ' de ambigüedad); quedan ' + remaining + ' sin revisar individualmente. Hay ' + changed + ' preguntas con cambios en enunciado, opciones o clave frente al original, comparando registros completos.';
const section = [
  '## Lote 741 — 5 de noviembre de 2026', '',
  'IDs 4026–4030 revisados individualmente; originales preservados en [cambios-lote-741.json](cambios-lote-741.json).', '',
  '- **4026 — normalización y fases de diseño:** se corrige la falsa clasificación de la normalización como diseño conceptual; se acota su función en el diseño lógico relacional. **Corregida.**',
  '- **4027 — función y procedimiento PL/SQL:** se reemplaza la afirmación incorrecta de que un procedimiento no devuelve datos; se distingue la cláusula RETURN de funciones de los parámetros OUT/IN OUT de procedimientos. **Corregida.**',
  '- **4028 — tercera forma normal:** se sustituyen formulaciones imprecisas por la definición de Codd: 2FN y atributos no primos no transitivamente dependientes de cada clave candidata. **Corregida.**',
  '- **4029 — relación vacía:** se aclara que en el modelo matemático una relación puede ser el conjunto vacío; se separan las relaciones de las tablas SQL con semántica de multiconjunto. **Corregida.**',
  '- **4030 — segunda forma normal:** se precisa que exige 1FN y dependencia funcional completa de cada atributo no primo respecto de todas las claves candidatas. **Corregida.**', '',
  'Fuentes: [Codd, Further Normalization of the Data Base Relational Model, IBM RJ909 (1971), texto original](https://apollo.inf.upol.cz/~urbanec/teaching/2021/data2/files/codd2.pdf); [Codd, Normalized Data Base Structure: A Brief Tutorial, SIGFIDET 1971, DOI](https://doi.org/10.1145/1734714.1734716); [Codd, A Relational Model of Data for Large Shared Data Banks, ACM 1970, DOI](https://doi.org/10.1145/362384.362685); [Microsoft Support, Database design basics](https://support.microsoft.com/en-us/access/database-design-basics); [Oracle AI Database 26, Creating and Managing Standalone Subprograms](https://docs.oracle.com/en/database/oracle/oracle-database/26/tdddg/creating-and-managing-standalone-subprograms.html) y [PL/SQL Subprograms](https://docs.oracle.com/en/database/oracle/oracle-database/26/lnpls/plsql-subprograms.html).',
  '',
  'Cotejo académico directo: [bloque 29 «Bases de datos, SQL y modelado de datos», versión 2026.1](https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk), consultado en Drive. El documento define el programa relacionado (A1-63, A1-64, A1-89; A2-T5, D4 y C2), diferencia fases de diseño (§4), relaciona normalización y formas 1FN–BCNF (§§3.1–3.8), distingue función/procedimiento en objetos programables y cubre relación/tupla (§2.1). Correspondencia oficial contrastada con [convocatoria A1 GSI 2025, anexo I](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938) y [A2 GSI 2025, anexo IX](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262): 4026, 4028–4030 A1-64/A2-III-4; 4027 A1-63/64 y A2-II-5/IV-2.',
  '',
  'Comprobaciones: el bloque 29 se leyó directamente en Drive; las definiciones de normalización y relación se cotejaron con los trabajos originales de Codd y el apartado Oracle PL/SQL vigente. Se reformularon los ítems para evitar clave primaria frente a candidatas, tabla SQL frente a relación matemática y procedimientos con parámetros OUT. Inventario y verificador ejecutados tras el lote.', ''
].join('\n');
const file = path.join(dir, 'README.md');
let text = fs.readFileSync(file, 'utf8');
text = text.replace(/^# Revisión del banco TIC — estado al .*$/m, '# Revisión del banco TIC — estado al 5 de noviembre de 2026');
text = text.replace(/Último lote secuencial aplicado:[^\r\n]*/, summary);
if (!text.includes('## Lote 741 —')) text = text.replace('## Lote 740 —', section + '\n## Lote 740 —');
fs.writeFileSync(file, text);
console.log('README: ' + examined + ' examinadas, ' + verified + ' verificadas, ' + pending + ' pendientes, ' + remaining + ' sin revisar; ' + changed + ' cambios de contenido.');
