const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const old='Último lote secuencial: 1190 (IDs 6271–6275). Acumulado: 6.270 preguntas examinadas individualmente; 6.160 verificadas (1.211 vigentes, 4.500 corregidas y 449 históricas); 110 pendientes documentadas (45 de fuente y 65 de ambigüedad); 5.853 sin revisar individualmente.';
const neu='Último lote secuencial: 1191 (IDs 6276–6280). Acumulado: 6.275 preguntas examinadas individualmente; 6.165 verificadas (1.211 vigentes, 4.505 corregidas y 449 históricas); 110 pendientes documentadas (45 de fuente y 65 de ambigüedad); 5.848 sin revisar individualmente.';
const section=`## Lote 1191 — 13 de noviembre de 2026

Revisadas individualmente las preguntas 6276–6280: GSM/DCS 1800, arquitectura SSH, planificación de contingencia, códecs ITU-T H.261/H.263 e inicio de sesión único. Las cinco quedan verificadas; se corrigen cuatro preguntas y se conservan sus textos originales en el registro.

- **6276 — GSM/DCS 1800:** **corregida**, respuesta GSM 1800. El espaciado GSM es 200 kHz; DCS 1800 dispone de 75 MHz en cada sentido y separación dúplex de 95 MHz. Se aclara el sentido de “ancho de banda”. A1-123/A2-IV.15.
- **6277 — SSH:** **corregida**, respuesta A. RFC 4251 describe negociación criptográfica; la autenticación del usuario y el transporte se detallan en RFC separados. SSH no promete no repudio; compresión, si se usa, antecede al cifrado; el transporte requiere un flujo fiable. A1-125/A2-IV.12.
- **6278 — contingencia TIC:** **corregida**, respuesta D bajo alcance explícito. Respuesta a incidentes, recuperación operativa y procedimientos técnicos pueden integrarse en una planificación coordinada según análisis de impacto; no existe obligación universal de tres documentos separados con esos nombres. A1-128/A2-IV.3 e IV.6.
- **6279 — H.261/H.263:** **corregida**, respuesta C (la falsa). Ambos emplean predicción entre imágenes y codificación transformada; se evita afirmar sin matiz que H.263 corresponde al caudal variable de Internet. A1-130/A2-IV.16.
- **6280 — SSO:** **corregida**, respuesta A. El inicio de sesión único permite autenticarse una vez para usar varios servicios sin repetir autenticación; puede implementarse con federación y no significa compartir necesariamente contraseña local. A1-131/A2-IV.12.

Fuentes primarias: [ETSI/3GPP TS 45.005, Release 18](https://www.etsi.org/deliver/etsi_ts/145000_145099/145005/18.00.00_60/ts_145005v180000p.pdf), [ETSI DCS 1800](https://www.etsi.org/deliver/etsi_gts/11/1110/03.12.00_60/gsmts_1110dv031200p.pdf), [RFC 4251](https://www.rfc-editor.org/rfc/rfc4251.html), [RFC 4253](https://www.rfc-editor.org/rfc/rfc4253.html), [RFC 4252](https://www.rfc-editor.org/rfc/rfc4252.html), [NIST SP 800-34 Rev. 1](https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final), [NIST, planificación de contingencia](https://csrc.nist.gov/topics/security-and-privacy/security-programs-and-operations/contingency-planning), [ITU-T H.261](https://www.itu.int/rec/T-REC-H.261/en), [ITU-T H.263](https://www.itu.int/rec/T-REC-H.263/en), [NIST SP 800-63C-4, federación y SSO](https://pages.nist.gov/800-63-4/sp800-63c/introduction/).

Convocatorias cotejadas: [GSI A1 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938), anexo I, temas 123, 125, 128, 130 y 131; [GSI A2 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262), anexo IX, temas IV.15, IV.12, IV.3, IV.6 e IV.16.

Cotejo curricular ITIC Academy (cobertura temática, no comprobación de las respuestas): [bloque 46 Redes inalámbricas y comunicaciones móviles](https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk), 6276; [bloque 48 Seguridad en redes](https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5Z2N-W5oh82/view?usp=drivesdk), 6277; [bloque 26 Hardware, servidores y CPD](https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk), 6278; [bloque 50 Videoconferencia, Single Sign-On y colaboración](https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk), 6279–6280.

Ejecutados revisar-lote-1191.cjs, academia-lote-1191.cjs, inventario.cjs, verificar.cjs y git diff --check. Inventario esperado: 12.123 preguntas; 6.275 examinadas; 6.165 verificadas; 110 pendientes documentadas; 5.848 sin revisar individualmente; cero errores estructurales.

`;
assert.ok(s.includes(old),'El resumen previo no coincide con lote 1190');
assert.ok(s.includes('## Lote 1190 — 13 de noviembre de 2026'),'No se encontró la sección 1190');
s=s.replace(old,neu).replace('## Lote 1190 — 13 de noviembre de 2026',section+'## Lote 1190 — 13 de noviembre de 2026');
fs.writeFileSync(file,s);console.log('README actualizado para lote 1191.');
