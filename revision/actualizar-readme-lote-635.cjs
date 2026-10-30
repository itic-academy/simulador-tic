const fs = require('node:fs');
const path = require('node:path');
const dir = __dirname;
const totals = {vigente: 0, corregida: 0, historica: 0, pendiente_fuente: 0, pendiente_ambiguedad: 0};
let changed = 0;
for (const file of fs.readdirSync(dir).filter(f => /^cambios-lote-\d+\.json$/.test(f))) {
  for (const c of JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8')).cambios) {
    totals[c.actualizada.revision.estado]++;
    if (['texto', 'opciones', 'respuesta_correcta'].some(k => JSON.stringify(c.original[k]) !== JSON.stringify(c.actualizada[k]))) changed++;
  }
}
const n = Object.values(totals).reduce((a, b) => a + b, 0);
const verified = totals.vigente + totals.corregida + totals.historica;
const pending = totals.pendiente_fuente + totals.pendiente_ambiguedad;
const left = 12123 - n;
const summary = `Último lote secuencial aplicado: 635 (IDs 3491–3495). Acumulado: ${n} preguntas examinadas individualmente, ${verified} verificadas (${totals.vigente} vigentes, ${totals.corregida} corregidas y ${totals.historica} históricas) y ${pending} pendientes documentadas (${totals.pendiente_fuente} de fuente y ${totals.pendiente_ambiguedad} de ambigüedad); quedan ${left} sin revisar individualmente. Hay ${changed} preguntas con cambios en enunciado, opciones o clave frente al original, comparando registros completos.`;
const section = `## Lote 635 — 31 de octubre de 2026

IDs 3491–3495 revisados individualmente y conservados en [cambios-lote-635.json](cambios-lote-635.json).
- **3491 — representación de entidades SIG:** se precisa que el modelo introductorio combina geometría/componente espacial e información descriptiva alfanumérica; OGC permite que propiedades geométricas sean atributos, por lo que se evita formular una taxonomía universal. **Corregida.** A1-74; ITIC Academy indica A2: NO APLICA.
- **3492 — controlador integrado de E/S:** se acota la combinación de UART, puerto paralelo y RTC al southbridge histórico VIA VT82C686A, cuya documentación lista las tres funciones; se elimina la generalización a todos los controladores. **Histórica.** A1-52; A2-II-1.
- **3493 — cabeceras Servlet:** Jakarta Servlet 6.1 define HttpServletRequest.getHeader para el primer valor y getHeaders para todos; se corrigen nombres de método inexistentes y la interfaz. **Corregida.** A1-65; A2-III-10.
- **3494 — XML bien formado y válido:** se aclara que la sintaxis determina buena formación, mientras XML 1.0 define validez frente a DTD; la ausencia de un XSD no basta para inferirlo. **Corregida.** A1-77; A2-II-9.
- **3495 — compresión de imágenes:** se define reducción de bits aprovechando redundancias y, según técnica, información perceptual; JPEG se presenta como ejemplo estandarizado, no método universal. **Corregida.** A1-56/A1-83; sin asignación A2 directa.

Fuentes técnicas primarias: OGC, [Reference Model, OGC 03-040, §3.1.1](https://docs.ogc.org/orm/03-040/03-040.pdf); VIA Technologies, [VT82C686A South Bridge datasheet](https://linux.mathematik.tu-darmstadt.de/pub/linux/mirrors/misc/alsa/manuals/via/VT82C686A%20SB%20datasheet%20rev%201.8.pdf) y [Apollo Pro133A Design Guide, §1.2.2](https://www.manualslib.com/manual/3189746/Via-Technologies-Apollo-Pro133a.html?page=13); Eclipse Foundation, [Jakarta Servlet 6.1 Specification, §3.4](https://jakarta.ee/specifications/servlet/6.1/jakarta-servlet-spec-6.1.html); W3C, [XML 1.0 Fifth Edition, §§2, 2.8](https://www.w3.org/TR/xml/); UIT-T, [Recommendation T.81, JPEG-1](https://www.itu.int/ITU-T/recommendations/rec.aspx?lang=en&rec=2633).

Cotejo ITIC Academy en Drive: [bloque 33 E-learning y SIG](https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view?usp=drivesdk), A1-74 y A2: NO APLICA; [bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización](https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk), A1-52 y A2-T1, más dispositivos multimedia en A1-56; [bloque 30 Tecnologías de Sistemas de Información](https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk), desarrollo web, Jakarta EE y XML; [bloque 37 Tratamiento de imágenes, OCR, biometría y gestión de contenidos](https://drive.google.com/file/d/1xTMCpPmwNi8hpb0nZ3sMqpgvrhLXT-yf/view?usp=drivesdk), A1-83. Aunque dicho bloque 37 enumera A2-T16, no se atribuye a ese epígrafe el contenido específico de compresión de imágenes.

Programas cotejados contra [convocatoria A1 BOE-A-2025-25938, anexo I](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938), [convocatoria A2 GSI BOE-A-2025-26262, anexo IX](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262) y [temario-oficial.json](temario-oficial.json): A1-74 (SIG), A1-52/A2-II-1 (arquitectura de computadores), A1-65/A2-III-10 (desarrollo web/Jakarta EE), A1-77/A2-II-9 (XML), A1-56/A1-83 (almacenamiento multimedia y tratamiento de imágenes). No se fuerza correspondencia A2 para la compresión de imágenes.

Se ejecutaron inventario.cjs, verificar.cjs y git diff --check; son controles automáticos de estructura/trazabilidad y no sustituyen la revisión de contenido.

`;
const readme = path.join(dir, 'README.md');
let text = fs.readFileSync(readme, 'utf8');
text = text.replace(/Último lote secuencial aplicado:[^\r\n]*/, summary);
if (!text.includes('## Lote 635 —')) text = text.replace('## Lote 634 —', section + '## Lote 634 —');
fs.writeFileSync(readme, text);
console.log(`README: ${n} examinadas; ${verified} verificadas; ${pending} pendientes; ${left} restantes; ${changed} preguntas con cambios.`);
