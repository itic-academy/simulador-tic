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
const summary = 'Último lote secuencial aplicado: 743 (IDs 4036–4040). Acumulado: ' + examined + ' preguntas examinadas individualmente, ' + verified + ' verificadas (' + totals.vigente + ' vigentes, ' + totals.corregida + ' corregidas y ' + totals.historica + ' históricas) y ' + pending + ' pendientes documentadas (' + totals.pendiente_fuente + ' de fuente y ' + totals.pendiente_ambiguedad + ' de ambigüedad); quedan ' + remaining + ' sin revisar individualmente. Hay ' + changed + ' preguntas con cambios en enunciado, opciones o clave frente al original, comparando registros completos.';
const section = [
  '## Lote 743 — 5 de noviembre de 2026', '',
  'IDs 4036–4040 revisados individualmente; originales preservados en [cambios-lote-743.json](cambios-lote-743.json).', '',
  '- **4036 — ODBC:** se corrige el alcance: API de acceso a varios SGBD mediante drivers, con SQL, no acceso universal a cualquier dato. **Corregida.**',
  '- **4037 — tercera forma normal:** se extiende la condición a todas las claves candidatas, no únicamente la primaria. **Corregida.**',
  '- **4038 — grafo 3-regular:** se explicita grafo simple no dirigido y se comprueban grados; la última opción describe K4. Se clasifica A2-III-5, sin forzar etiqueta A1 porque no hay epígrafe A1 específico. **Corregida.**',
  '- **4039 — Oracle DATABASE LINK:** se mantiene la clave y se delimita que permite referenciar objetos de otra base desde SQL. **Corregida.**',
  '- **4040 — grado de una relación:** se resuelve que había dos alternativas verdaderas; el nuevo enunciado pregunta únicamente qué determina el grado. **Corregida.**', '',
  'Fuentes: [Microsoft Learn, ODBC Overview](https://learn.microsoft.com/en-us/sql/odbc/reference/) y [ODBC como interfaz C](https://learn.microsoft.com/en-us/sql/odbc/microsoft-open-database-connectivity-odbc); [Codd, Further Normalization (1971), texto original](https://apollo.inf.upol.cz/~urbanec/teaching/2021/data2/files/codd2.pdf) y [Normalized Data Base Structure, DOI](https://doi.org/10.1145/1734714.1734716); [Diestel, Graph Theory, §1.2](https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch1.pdf); [Oracle AI Database 26, CREATE DATABASE LINK](https://docs.oracle.com/en/database/oracle/oracle-database/26/sqlrf/CREATE-DATABASE-LINK.html) y [Managing a Distributed Database](https://docs.oracle.com/en/database/oracle/oracle-database/26/admin/managing-a-distributed-database.html); [Codd, modelo relacional de datos, ACM](https://doi.org/10.1145/362384.362685).',
  '',
  'Cotejo académico directo: [bloque 29 «Bases de datos, SQL y modelado de datos», versión 2026.1](https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk), §§2.1–2.2, 3.1–3.2 y 9.2; [bloque 32 «Inteligencia artificial y ciencia de datos», versión 2026.1](https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk), A2-D5 y §2.10 grafos. Clasificación según [convocatoria A1 GSI 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938) y [A2 GSI 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262): 4036 A1-64/A2-II-5; 4037 A1-64/A2-III-4; 4038 A2-III-5 (sin tema A1 específico); 4039 A1-63/64, A2-II-5/IV-2; 4040 A1-64/A2-III-4.',
  '',
  'Comprobaciones: se consultó directamente en Drive el bloque 29 y el bloque 32; para ODBC se usó documentación Microsoft, para database link Oracle Database 26, para normalización y relación los textos de Codd, y para regularidad de grafos Graph Theory de Diestel. No quedan dudas registradas. Inventario y verificador ejecutados tras el lote.', ''
].join('\n');
const file = path.join(dir, 'README.md');
let text = fs.readFileSync(file, 'utf8');
text = text.replace(/^# Revisión del banco TIC — estado al .*$/m, '# Revisión del banco TIC — estado al 5 de noviembre de 2026');
text = text.replace(/Último lote secuencial aplicado:[^\r\n]*/, summary);
if (!text.includes('## Lote 743 —')) text = text.replace('## Lote 742 —', section + '\n## Lote 742 —');
fs.writeFileSync(file, text);
console.log('README: ' + examined + ' examinadas, ' + verified + ' verificadas, ' + pending + ' pendientes, ' + remaining + ' sin revisar; ' + changed + ' cambios de contenido.');
