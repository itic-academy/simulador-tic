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
const summary = `Último lote secuencial aplicado: 735 (IDs 3996–4000). Acumulado: ${examined} preguntas examinadas individualmente, ${verified} verificadas (${totals.vigente} vigentes, ${totals.corregida} corregidas y ${totals.historica} históricas) y ${pending} pendientes documentadas (${totals.pendiente_fuente} de fuente y ${totals.pendiente_ambiguedad} de ambigüedad); quedan ${remaining} sin revisar individualmente. Hay ${changed} preguntas con cambios en enunciado, opciones o clave frente al original, comparando registros completos.`;
const section = [
  '## Lote 735 — 5 de noviembre de 2026', '',
  'IDs 3996–4000 revisados individualmente; originales preservados en [cambios-lote-735.json](cambios-lote-735.json).', '',
  '- **3996 — mantenimiento adaptativo:** se sustituyen distractores de taxonomías mezcladas por una definición explícita de ISO/IEC/IEEE 14764:2022. **Corregida.**',
  '- **3997 — mantenimiento perfectivo:** se identifica MÉTRICA v3 como marco de referencia y se diferencia la mejora interna del cambio de entorno; MÉTRICA v3 se conserva como referencia histórica de examen. **Histórica.**',
  '- **3998 — coste de mantenimiento:** se ancla a un estudio empírico concreto y se cambian los factores para que coincidan con la tabla publicada: experiencia en lenguaje, calidad de documentación e independencia estructural. No se afirma una ley universal. **Corregida.**',
  '- **3999 — mantenibilidad:** se reemplaza la pregunta imprecisa sobre “métricas” por una sobre subcaracterísticas de mantenibilidad según ISO/IEC 25010:2023; “aprobaciones” no pertenece al modelo. **Corregida.**',
  '- **4000 — cambios del entorno operativo:** se mantiene la respuesta adaptativo y se explica conforme a ISO/IEC/IEEE 14764:2022, edición vigente. **Vigente.**', '',
  'Fuentes técnicas: [ISO/IEC/IEEE 14764:2022, catálogo oficial](https://www.iso.org/standard/80710.html) y [vista de la norma, cláusulas 3.1.1 y 3.1.9](https://preview.sist.si/sist-preview/80710/9a26fc3a1a464fa286fb85d6c1eeed31/ISO-IEC-IEEE-14764-2022.pdf); [MÉTRICA v3, Mantenimiento de Sistemas de Información](https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Ae15c0c5b-dd9c-4e48-82e3-9e36ba18e839/METRICA_V3_Mantenimiento_de_Sistemas_de_Informacion.pdf); [Hejazi Dehaghani y Hajrahimi, factores de coste de mantenimiento, Acta Informatica Medica 21(1), 2013, tablas 1–2](https://pmc.ncbi.nlm.nih.gov/articles/PMC3610582/); [ISO/IEC 25010:2023, catálogo oficial](https://www.iso.org/standard/78176.html) y [vista de la edición 2023](https://cdn.standards.iteh.ai/samples/78176/13ff8ea97048443f99318920757df124/ISO-IEC-25010-2023.pdf).', '',
  'Cotejo académico directo en Drive: [bloque 39 «Calidad y mantenimiento», versión 2026.1](https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk), cotejado en sus epígrafes de ISO/IEC 25010:2023 y 14764:2022, mantenimiento y métricas. Correspondencia con [convocatoria A1 GSI 2025, anexo I](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938) y [A2 GSI 2025, anexo IX](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262): 3996–3997 y 4000 A1-101/A2-III-8; 3998 A1-99/101-A2-III-8; 3999 A1-98/A2-III-13.', '',
  'Comprobaciones: bloque académico 39 leído directamente en Drive; respuestas contrastadas con las definiciones/ediciones y el estudio citados; el estudio se formula como evidencia delimitada, no como norma general. Inventario y verificador ejecutados tras el lote.', ''
].join('\n');
const file = path.join(dir, 'README.md');
let text = fs.readFileSync(file, 'utf8');
text = text.replace(/^# Revisión del banco TIC — estado al .*$/m, '# Revisión del banco TIC — estado al 5 de noviembre de 2026');
text = text.replace(/Último lote secuencial aplicado:[^\r\n]*/, summary);
if (!text.includes('## Lote 735 —')) text = text.replace('## Lote 734 —', `${section}\n## Lote 734 —`);
fs.writeFileSync(file, text);
console.log(`README: ${examined} examinadas, ${verified} verificadas, ${pending} pendientes, ${remaining} sin revisar; ${changed} cambios de contenido.`);
