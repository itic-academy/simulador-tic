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
const summary = `Último lote secuencial aplicado: 631 (IDs 3471–3475). Acumulado: ${n} preguntas examinadas individualmente, ${verified} verificadas (${totals.vigente} vigentes, ${totals.corregida} corregidas y ${totals.historica} históricas) y ${pending} pendientes documentadas (${totals.pendiente_fuente} de fuente y ${totals.pendiente_ambiguedad} de ambigüedad); quedan ${left} sin revisar individualmente. Hay ${changed} preguntas con cambios en enunciado, opciones o clave frente al original, comparando registros completos.`;
const section = `## Lote 631 — 30 de octubre de 2026

IDs 3471–3475 revisados individualmente; sus originales completos están en [cambios-lote-631.json](cambios-lote-631.json).
- **3471 — data mart:** se define como almacén analítico de alcance limitado, habitualmente departamental; se distingue entre dependiente e independiente, por lo que no siempre procede de un almacén corporativo central. **Corregida.** A1-75; A2-II-4.
- **3472 — exportación de certificado con clave privada:** el asistente de Windows ofrece PKCS #12 (.PFX). Se precisa el contexto y se retira .p12 como distractor, pues también puede ser una extensión PKCS #12. **Corregida.** A1-80; A2-I-6.
- **3473 — JOIN:** se distingue INNER JOIN con condición, CROSS JOIN, NATURAL/USING y outer joins; un join no compara necesariamente todas las columnas con el mismo nombre. **Corregida.** A1-64; A2-III-4.
- **3474 — SSL 3.0:** se corrige la descripción histórica de RSA/Diffie-Hellman según suite y se advierte que RFC 7568 prohíbe usar SSLv3. **Corregida.** A1-125; A2-IV-12.
- **3475 — MongoDB:** se mantiene el modelo documental y se concreta que los registros son documentos BSON agrupados en colecciones; no se confunde con almacenes clave-valor, grafos o tablas relacionales. **Corregida.** A1-63; A2-III-15.

Corrección de cotejo del lote 630, pregunta 3468: se rectifica su código A1 de A1-103 a A1-104. El temario oficial identifica A1-103 como calidad en los servicios de información y A1-104 como gestión documental/contenidos; el tema A2-II-16 menciona expresamente los sistemas de gestión de flujos de trabajo. Se actualizan el banco, su registro y el cotejo reproducible del lote 630.

Fuentes técnicas primarias: Oracle [Data mart concepts](https://docs.oracle.com/en/database/oracle/oracle-database/18/dwhsg/introduction-data-warehouse-concepts.html); Microsoft Learn, [exportar un certificado con clave privada](https://learn.microsoft.com/en-us/windows-server/identity/ad-cs/export-certificate-private-key) y [tipos de contenido X509 PFX/PKCS12](https://learn.microsoft.com/en-us/dotnet/api/system.security.cryptography.x509certificates.x509contenttype?view=net-10.0); PostgreSQL 18, [SELECT y JOIN](https://www.postgresql.org/docs/current/sql-select.html) y [expresiones de tabla](https://www.postgresql.org/docs/current/queries-table-expressions.html); IETF [RFC 6101, SSL 3.0](https://www.rfc-editor.org/rfc/rfc6101.html) y [RFC 7568, prohibición de SSLv3](https://www.rfc-editor.org/rfc/rfc7568.html); [MongoDB Manual, Documents](https://www.mongodb.com/docs/manual/core/document/) y [FAQ Fundamentals](https://www.mongodb.com/docs/manual/faq/fundamentals/).

Cotejo ITIC Academy en Drive: [bloque 34 Business Intelligence y Big Data](https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk), data marts, almacenes y minería; [bloque 36 Seguridad y Criptografía](https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk), certificados y criptografía; [bloque 29 Bases de datos, SQL y modelado](https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk), SQL relacional y NoSQL (incluye la clasificación documental de MongoDB); [bloque 48 Seguridad en redes y nivel de aplicación](https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5Z2N-W5oh82/view?usp=drivesdk), protocolos y criptografía. Se distingue la cobertura didáctica de la prueba técnica aportada por especificaciones y documentación de producto.

Programas cotejados contra [convocatoria A1 BOE-A-2025-25938, anexo I](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938), [convocatoria A2 GSI BOE-A-2025-26262, anexo IX](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262) y [temario-oficial.json](temario-oficial.json): A1-75/A2-II-4 para data marts; A1-80/A2-I-6 para certificados; A1-64/A2-III-4 para SQL/JOIN; A1-125/A2-IV-12 para seguridad de protocolos; A1-63/A2-III-15 para bases de datos y NoSQL.

`;
const readme = path.join(dir, 'README.md');
let text = fs.readFileSync(readme, 'utf8');
text = text.replace(/Último lote secuencial aplicado:[^\r\n]*/, summary);
if (!text.includes('## Lote 631 —')) text = text.replace('## Lote 630 —', section + '## Lote 630 —');
fs.writeFileSync(readme, text);
console.log(`README: ${n} examinadas; ${verified} verificadas; ${pending} pendientes; ${left} restantes; ${changed} preguntas con cambios.`);
