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
const summary = `Último lote secuencial aplicado: 739 (IDs 4016–4020). Acumulado: ${examined} preguntas examinadas individualmente, ${verified} verificadas (${totals.vigente} vigentes, ${totals.corregida} corregidas y ${totals.historica} históricas) y ${pending} pendientes documentadas (${totals.pendiente_fuente} de fuente y ${totals.pendiente_ambiguedad} de ambigüedad); quedan ${remaining} sin revisar individualmente. Hay ${changed} preguntas con cambios en enunciado, opciones o clave frente al original, comparando registros completos.`;
const section = [
  '## Lote 739 — 5 de noviembre de 2026', '',
  'IDs 4016–4020 revisados individualmente; originales preservados en [cambios-lote-739.json](cambios-lote-739.json).', '',
  '- **4016 — atributos y dominios relacionales:** se conserva «todas» y se precisa que los atributos se identifican por nombre/rol y toman valores de dominios; un dominio puede reutilizarse. **Corregida.**',
  '- **4017 — asociación reflexiva:** se aclara que es el mismo tipo de entidad el que participa en papeles distintos; no necesariamente una misma instancia se relaciona consigo misma. **Corregida.**',
  '- **4018 — privilegios Oracle:** se rectifica la clave errónea `GRANT ANY ROLE`; para el supuesto acotado de un tercero que concede privilegios de objeto en un esquema ajeno, la opción es `GRANT ANY OBJECT PRIVILEGE`. **Corregida.**',
  '- **4019 — álgebra relacional:** se explicita la base de cinco operadores primitivos y se expresa la intersección como derivada: `R ∩ S = R − (R − S)` para relaciones unión-compatibles. **Corregida.**',
  '- **4020 — tercera forma normal:** se reemplaza la definición centrada solo en clave primaria por la formulación de Codd: relación en 2FN y atributos no primos no transitivamente dependientes de cada clave candidata. **Corregida.**', '',
  'Fuentes técnicas: [Codd, modelo relacional (1970), ACM](https://dl.acm.org/doi/10.1145/362384.362685) y [texto del artículo, §§1.3–1.4 y 2.1](https://db.dobo.sk/wp-content/uploads/2015/11/Codd_1970_A_relational_model.pdf); [Chen, modelo entidad-relación (1976), ACM](https://doi.org/10.1145/320434.320440) y [texto, figuras 18–19 sobre roles/asociaciones del mismo tipo](https://openlib.org/home/krichel/courses/lis512/readings/chen76theentity-relationship.pdf); [Oracle AI Database 26 SQL Reference, `GRANT`](https://docs.oracle.com/en/database/oracle/oracle-database/26/sqlrf/GRANT.html) y [Security Guide, privilegios de objeto](https://docs.oracle.com/en/database/oracle/oracle-database/26/dbseg/configuring-privilege-and-role-authorization.html); [University of California, Berkeley, operaciones primitivas y derivadas del álgebra relacional](https://dsf.berkeley.edu/topics/lecs/dbprimer/tsld017.htm); [Codd, Further Normalization (1971), §3.3](https://apollo.inf.upol.cz/~urbanec/teaching/2021/data2/files/codd2.pdf) y [registro bibliográfico del informe IBM RJ909](https://sigmod.org/publications/dblp/db/labs/ibm/RJ909.html).', '',
  'Cotejo académico directo: [bloque 29 «Bases de datos, SQL y modelado de datos», versión 2026.1](https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk), consultado en Drive. Sus §§2.1–2.2 cubren relaciones, atributos y dominios; §4.2 incluye relaciones recursivas; §3.4 lista operadores primitivos y deriva la intersección; §§3.1–3.2 cubren dependencias y formas normales; el bloque también actualiza privilegios/SQL. Clasificación contrastada con [convocatoria A1 GSI 2025, anexo I](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938) y [A2 GSI 2025, anexo IX](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262): 4016 A1-64/A2-II-5; 4017 A1-89/A2-III-4; 4018 A1-63/64 y A2-II-5/IV-2; 4019 A1-64/A2-II-5; 4020 A1-64/A2-III-4.', '',
  'Comprobaciones: se consultó directamente en Drive el bloque 29, además de las publicaciones originales de Codd y Chen y la documentación Oracle vigente; las definiciones quedaron delimitadas para evitar equivalencias ambiguas. Inventario y verificador ejecutados tras el lote.', ''
].join('\n');
const file = path.join(dir, 'README.md');
let text = fs.readFileSync(file, 'utf8');
text = text.replace(/^# Revisión del banco TIC — estado al .*$/m, '# Revisión del banco TIC — estado al 5 de noviembre de 2026');
text = text.replace(/Último lote secuencial aplicado:[^\r\n]*/, summary);
if (!text.includes('## Lote 739 —')) text = text.replace('## Lote 738 —', `${section}\n## Lote 738 —`);
fs.writeFileSync(file, text);
console.log(`README: ${examined} examinadas, ${verified} verificadas, ${pending} pendientes, ${remaining} sin revisar; ${changed} cambios de contenido.`);
