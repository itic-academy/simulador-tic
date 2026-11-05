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
const summary = `Último lote secuencial aplicado: 732 (IDs 3981–3985). Acumulado: ${examined} preguntas examinadas individualmente, ${verified} verificadas (${totals.vigente} vigentes, ${totals.corregida} corregidas y ${totals.historica} históricas) y ${pending} pendientes documentadas (${totals.pendiente_fuente} de fuente y ${totals.pendiente_ambiguedad} de ambigüedad); quedan ${remaining} sin revisar individualmente. Hay ${changed} preguntas con cambios en enunciado, opciones o clave frente al original, comparando registros completos.`;
const section = [
  '## Lote 732 — 5 de noviembre de 2026', '',
  'IDs 3981–3985 revisados individualmente; el registro [cambios-lote-732.json](cambios-lote-732.json) preserva texto, opciones y clave originales.', '',
  '- **3981 — VIA/CENTER:** se confirma como plataforma CASE histórica de Viasoft para mantenimiento y reingeniería COBOL mediante fuentes contemporáneas; se acota el enunciado a ese catálogo. **Histórica.**',
  '- **3982 — code smell:** se pregunta por la definición precisa de Fowler y se elimina la combinación ambigua con “fragilidad” y “software rot”. **Corregida.**',
  '- **3983 — proceso de mantenimiento:** se limita la secuencia de análisis, implementación y revisión/aceptación a la edición histórica ISO/IEC 14764:2006; se aclara que no es la lista completa de actividades y que la norma fue sustituida por la edición 2022. **Histórica.**',
  '- **3984 — TCA/ACT:** se define como fracción de instrucciones fuente modificadas o añadidas al año en el modelo de Boehm; se separa la medida de la fórmula histórica de esfuerzo. **Histórica.**',
  '- **3985 — mantenimiento predictivo:** se reemplaza la afirmación universal sobre “los modelos más habituales” por tareas que pueden emplearse según objetivo y datos: clasificación, regresión y clustering. **Corregida.**', '',
  'Fuentes técnicas: [VIA/CENTER, ISECON 1992](https://iscap.us/proceedings/isecon/historyPDF/1992.v9.pdf) y [anuncio contemporáneo, Mainframe Journal, abril de 1989](https://www.bitsavers.org/magazines/Mainframe_Journal/Mainframe_Journal_V04_N04_198904.pdf); [Fowler, Code Smell](https://martinfowler.com/bliki/CodeSmell.html); [ISO/IEC 14764:2006, vista de la norma](https://cdn.standards.iteh.ai/samples/39064/a132a6efa20e47d69ede63804b88a170/ISO-IEC-14764-2006.pdf) y [catálogo oficial ISO, edición 2022 y retirada de 2006](https://www.iso.org/standard/80710.html); [Ahn et al., modelo histórico ACT/TCA de Boehm](https://doi.org/10.1002/smr.269); [Esteban et al., taxonomía sistemática de minería de datos en mantenimiento predictivo](https://doi.org/10.1002/widm.1471).', '',
  'Cotejo académico directo en Drive: [bloque «Análisis, diseño y construcción», versión 2026.1](https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk), apartado CASE e ingeniería inversa; y [bloque 39 «Calidad y mantenimiento», versión 2026.1](https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk), mantenimiento de software/predictivo. Correspondencia con [convocatoria A1 GSI 2025, anexo I](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938) y [A2 GSI 2025, anexo IX](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262): 3981 A1-88/A2-III-6; 3982–3983 A1-101/A2-III-8; 3984 A1-99/101-A2-III-8; 3985 A1-101/A2-III-8.', '',
  'Comprobaciones: los dos documentos académicos se consultaron directamente en Drive; las claves se justifican con las referencias enlazadas; el inventario y el verificador se ejecutan tras el lote.', ''
].join('\n');
const file = path.join(dir, 'README.md');
let text = fs.readFileSync(file, 'utf8');
text = text.replace(/^# Revisión del banco TIC — estado al .*$/m, '# Revisión del banco TIC — estado al 5 de noviembre de 2026');
text = text.replace(/Último lote secuencial aplicado:[^\r\n]*/, summary);
if (!text.includes('## Lote 732 —')) text = text.replace('## Lote 731 —', `${section}\n## Lote 731 —`);
fs.writeFileSync(file, text);
console.log(`README: ${examined} examinadas, ${verified} verificadas, ${pending} pendientes, ${remaining} sin revisar; ${changed} cambios de contenido.`);
