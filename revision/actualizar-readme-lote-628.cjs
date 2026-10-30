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
const summary = `Último lote secuencial aplicado: 628 (IDs 3456–3460). Acumulado: ${n} preguntas examinadas individualmente, ${verified} verificadas (${totals.vigente} vigentes, ${totals.corregida} corregidas y ${totals.historica} históricas) y ${pending} pendientes documentadas (${totals.pendiente_fuente} de fuente y ${totals.pendiente_ambiguedad} de ambigüedad); quedan ${left} sin revisar individualmente. Hay ${changed} preguntas con cambios en enunciado, opciones o clave frente al original, comparando registros completos.`;
const section = `## Lote 628 — 30 de octubre de 2026

IDs 3456–3460 revisados individualmente; los originales completos se conservan en [cambios-lote-628.json](cambios-lote-628.json).
- **3456 — SQL*Loader:** se identifica como utilidad de Oracle Database para cargar ficheros externos en tablas Oracle. **Corregida.** A1-64; A2-II-5.
- **3457 — criptografía asimétrica:** se define el par relacionado de claves pública/privada y se distingue su uso en confidencialidad frente a firma digital. **Corregida.** A1-79/80; A2-IV-12.
- **3458 — EFS:** se precisa que EFS es una función de Windows/NTFS para cifrar archivos individuales, no un sistema de archivos distinto ni el cifrado de volumen de BitLocker. **Corregida.** A1-61; A2-II-2.
- **3459 — organización directa por dispersión:** se explicita que la dirección/depósito se calcula aplicando hash a la clave y que pueden producirse colisiones. No se fuerza un tema A1; A2-III-5 trata expresamente organizaciones de ficheros. **Corregida.**
- **3460 — enfoques de minería de datos:** “eliminación” no es un enfoque/tipo reconocido; el enunciado ahora evita confundir extracción ETL con minería y la explicación advierte que verificación/descubrimiento y predicción pertenecen a ejes taxonómicos diferentes. **Corregida.** A1-71; A2-III-15.

Fuentes técnicas: Oracle Database 26ai [Managing Tables](https://docs.oracle.com/en/database/oracle/oracle-database/26/admin/managing-tables.html) y [SQL*Loader Features](https://docs.oracle.com/en/database/oracle/oracle-database/26/sutil/oracle-sql-loader-features.html); NIST [public key cryptography](https://csrc.nist.gov/glossary/term/public_key_cryptography) y [Public and Private Key](https://csrc.nist.gov/glossary/term/Public_and_Private_Key); Microsoft Learn [File Encryption/EFS](https://learn.microsoft.com/en-us/windows/win32/fileio/file-encryption) y [MS-GPEF](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-gpef/4d4687f9-132c-4501-9996-684b40b14735); material universitario [Database Engineering, organización hash de ficheros](https://scs.dypvp.edu.in/documents/e-books/DMBS/Database-Engineering.pdf) y [MTI Faculty of Computers, File Organization & Processing 2025/2026, hashing](https://elearning.mti.edu.eg/books/cmp/cs232-fileorganization%26processing.pdf); Han, Kamber y Pei [Data Mining: Concepts and Techniques, 3.ª ed., sitio de autores](https://hanj.cs.illinois.edu/bk3/); IBM [Building a predictive model](https://www.ibm.com/docs/en/spss-modeler/18.0.0?topic=models-building-predictive-model).

Cotejo ITIC Academy: [bloque 29 Bases de datos, SQL y modelado](https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk), con SGBD/SQL; [bloque 36 Seguridad y Criptografía](https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk), claves públicas/privadas; [bloque 27 Sistemas Operativos](https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk), Windows y NTFS (la definición exacta de EFS se acredita con Microsoft); [bloque 32 Inteligencia Artificial y Ciencia de Datos](https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk), incluye organizaciones de ficheros en A2-D5 y minería de datos; [bloque 34 Business Intelligence y Big Data](https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk), A2-D15 sobre minería de datos, tecnología y algoritmos. Se distingue el encuadre académico de la evidencia técnica primaria.

Temario contrastado con [convocatoria A1 BOE-A-2025-25938, anexo I](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938) y [A2 GSI BOE-A-2025-26262, anexo IX](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262), usando [temario-oficial.json](temario-oficial.json): SQL/SGBD A1-64/A2-II-5; criptografía A1-79/80 y A2-IV-12; Windows A1-61/A2-II-2; organización de ficheros A2-III-5 (sin A1 directo); ciencia de datos/minería A1-71/A2-III-15.

`;
const readme = path.join(dir, 'README.md');
let text = fs.readFileSync(readme, 'utf8');
text = text.replace(/Último lote secuencial aplicado:[^\r\n]*/, summary);
if (!text.includes('## Lote 628 —')) text = text.replace('## Lote 627 —', section + '## Lote 627 —');
fs.writeFileSync(readme, text);
console.log(`README: ${n} examinadas; ${verified} verificadas; ${pending} pendientes; ${left} restantes; ${changed} preguntas con cambios.`);
