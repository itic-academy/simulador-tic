const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const old='Último lote secuencial: 1184 (IDs 6241–6245). Acumulado: 6.240 preguntas examinadas individualmente; 6.130 verificadas (1.207 vigentes, 4.476 corregidas y 447 históricas); 110 pendientes documentadas (45 de fuente y 65 de ambigüedad); 5.883 sin revisar individualmente.';
const neu='Último lote secuencial: 1185 (IDs 6246–6250). Acumulado: 6.245 preguntas examinadas individualmente; 6.135 verificadas (1.208 vigentes, 4.480 corregidas y 447 históricas); 110 pendientes documentadas (45 de fuente y 65 de ambigüedad); 5.878 sin revisar individualmente.';
const section=`## Lote 1185 — 13 de noviembre de 2026

Revisadas individualmente las preguntas 6246–6250 sobre AWT, anotaciones Java, lagos de datos, SHA-2 y certificados X.509. Se confirma 6246 y se corrigen 6247–6250; en X.509 el enunciado original no tenía una opción falsa inequívoca.

- **6246 — AWT:** **vigente**, respuesta B. AWT (*Abstract Window Toolkit*) es el conjunto Java para interfaces gráficas y gráficos; Swing se apoya en la arquitectura AWT, no es una extensión de AWT. A1-67/A2-II.3.
- **6247 — anotaciones Java:** **corregida**, respuesta C. Las anotaciones asocian metadatos, pero solo son accesibles por reflexión durante la ejecución cuando su política es RUNTIME; la retención por defecto es CLASS. A1-67/A2-II.3.
- **6248 — data lake:** **corregida**, respuesta B. Un data lake suele conservar datos en bruto de varias fuentes para exploración/procesamiento posterior; eso no exige que todos los datos permanezcan siempre crudos. Se diferencia de data warehouse y del enfoque organizativo data mesh. A1-75/A2-II.4.
- **6249 — SHA-2:** **corregida**, respuesta A. SHA-2 es una familia de funciones hash especificada en FIPS 180-4, con variantes como SHA-224/256/384/512 y SHA-512/224 o /256; no es cifrado, intercambio de claves ni PKI. A1-79/A2-II.13.
- **6250 — ITU-T X.509:** **corregida**, respuesta A. El original preguntaba qué “no” define el certificado, aunque las dos opciones eran sustancialmente ciertas. Se cambia por una afirmación verificable: la versión X.509 (2019), con componentes en vigor en el catálogo ITU-T consultado, define marcos para certificados de clave pública y de atributos. La edición de 1988, aprobada por CCITT como marco de autenticación del Directorio, está supersedida. A1-80/A2-I.6.

Fuentes técnicas/primarias: [Oracle, guía AWT](https://docs.oracle.com/javase/8/docs/technotes/guides/awt/), [Oracle Java SE, paquete java.awt](https://docs.oracle.com/javase/8/docs/api/java/awt/package-summary.html), [Oracle Java SE 26, RetentionPolicy](https://docs.oracle.com/en/java/javase/26/docs/api/java.base/java/lang/annotation/RetentionPolicy.html), [Java Language Specification 26, anotaciones](https://docs.oracle.com/en/java/javase/26/docs/specs/jls/jls-9.html), [AWS, data lake frente a warehouse y mesh](https://aws.amazon.com/what-is/data-cloud/), [NIST, familias de funciones hash](https://csrc.nist.gov/Projects/Hash-Functions) y [FIPS 180-4 Secure Hash Standard](https://csrc.nist.gov/pubs/fips/180-4/upd1/final), [ITU-T, estado vigente e histórico de X.509](https://www.itu.int/rec/t-rec-x.509/en), [ficha ITU-T de X.509 (1988)](https://www.itu.int/ITU-T/recommendations/rec.aspx?rec=2999) y [X.509 | ISO/IEC 9594-8, marcos de certificados](https://www.itu.int/rec/dologin_pub.asp?id=T-REC-X.509-201210-S%21%21PDF-E&lang=e&type=items).

Convocatorias cotejadas: [GSI A1 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938), anexo I, temas 67, 75, 79 y 80; [GSI A2 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262), anexo IX, temas II.3, II.4, II.13 e I.6.

Cotejo curricular ITIC Academy (solo cobertura, no evidencia de respuesta): [bloque 30 Tecnologías de Sistemas de Información](https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk), Java y AWT (6246–6247); [bloque 34 Business Intelligence y Big Data](https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk), data lake y data warehouse (6248), con el tema A2 normalizado a II.4 de la convocatoria actual; [bloque 36 Seguridad, Criptografía, Identificación y Firma](https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk), hash, certificados y X.500 (6249–6250).

Ejecutados revisar-lote-1185.cjs, academia-lote-1185.cjs, inventario.cjs, verificar.cjs y git diff --check. Inventario esperado: 12.123 preguntas; 6.245 examinadas; 6.135 verificadas; 110 pendientes documentadas; 5.878 aún sin revisar individualmente; cero errores estructurales.

`;
assert.ok(s.includes(old),'No coincide el resumen previo al lote 1185');assert.ok(s.includes('## Lote 1184 — 13 de noviembre de 2026'),'No se encontró el lote anterior');
s=s.replace(old,neu).replace('## Lote 1184 — 13 de noviembre de 2026',section+'## Lote 1184 — 13 de noviembre de 2026');
fs.writeFileSync(file,s);console.log('README actualizado para el lote 1185.');
