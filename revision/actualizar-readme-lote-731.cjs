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
const summary = `Último lote secuencial aplicado: 731 (IDs 3976–3980). Acumulado: ${examined} preguntas examinadas individualmente, ${verified} verificadas (${totals.vigente} vigentes, ${totals.corregida} corregidas y ${totals.historica} históricas) y ${pending} pendientes documentadas (${totals.pendiente_fuente} de fuente y ${totals.pendiente_ambiguedad} de ambigüedad); quedan ${remaining} sin revisar individualmente. Hay ${changed} preguntas con cambios en enunciado, opciones o clave frente al original, comparando registros completos.`;
const section = [
  '## Lote 731 — 5 de noviembre de 2026', '',
  'IDs 3976–3980 revisados individualmente; se conservan en [cambios-lote-731.json](cambios-lote-731.json) los textos, opciones y claves de partida.', '',
  '- **3976 — mantenimiento preventivo:** se acota a ISO/IEC/IEEE 14764:2022: actuar sobre errores potenciales antes de fallos operativos, diferenciándolo del correctivo. **Corregida.**',
  '- **3977 — modelo de datos:** se identifica el Modelo Entidad/Relación Extendido de MÉTRICA v3 y el proceso de análisis ASI. **Histórica.**',
  '- **3978 — refactorización:** se especifica la preservación del comportamiento y la mejora de estructura/complexidad; no es una garantía automática de mantenibilidad. **Corregida.**',
  '- **3979 — fórmula ACT/TCA:** se explicita el modelo histórico de Boehm: esfuerzo anual estimado = TCA × esfuerzo de desarrollo; no es una regla universal. **Histórica.**',
  '- **3980 — ley de Lehman:** se reformula como cambio continuo en sistemas E y se excluye la afirmación ambigua de que el mantenimiento permanente causa descontento. **Histórica.**', '',
  'Fuentes primarias: [ISO/IEC/IEEE 14764:2022](https://www.iso.org/standard/80710.html); [MÉTRICA v3, Análisis del Sistema de Información](https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Aad870327-56b7-4dfa-af15-e62222f45b90/METRICA_V3_Analisis_del_Sistema_de_Informacion.pdf) y [Mantenimiento de Sistemas de Información](https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Ae15c0c5b-dd9c-4e48-82e3-9e36ba18e839/METRICA_V3_Mantenimiento_de_Sistemas_de_Informacion.pdf); [Fowler, refactoring](https://refactoring.com/); [Lehman et al., Laws of Software Evolution Revisited, Imperial College](https://www.doc.ic.ac.uk/research/technicalreports/2000/DTR00-14.pdf); [Boehm, Software Engineering Economics](https://www.informit.com/store/software-engineering-economics-9780138221225) y [Ahn et al., modelo ACT/TCA, DOI 10.1002/smr.269](https://doi.org/10.1002/smr.269).', '',
  'Cotejo académico directo en Drive: [bloque 39, Calidad y mantenimiento, versión 2026.1](https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk) para mantenimiento preventivo, complejidad, mantenimiento/coste y adaptación; y [bloque de Análisis, diseño y construcción, versión 2026.1](https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk) para análisis estructurado y MER extendido. Correspondencia contrastada con [convocatoria A1 GSI 2025, anexo I](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938) y [A2 GSI 2025, anexo IX](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262): 3976 A1-101/A2-III-8; 3977 A1-89/A2-III-4; 3978 A1-86/101-A2-III-1/8; 3979 A1-99/101-A2-III-8; 3980 A1-86/101-A2-III-1/8.', '',
  'Comprobaciones: los dos documentos académicos se leyeron directamente en Drive; los temas se validaron contra los anexos oficiales; inventario y verificador se ejecutarán tras el lote.',''
].join('\n');
const file = path.join(dir, 'README.md');
let text = fs.readFileSync(file, 'utf8');
text = text.replace(/^# Revisión del banco TIC — estado al .*$/m, '# Revisión del banco TIC — estado al 5 de noviembre de 2026');
text = text.replace(/^Último lote secuencial aplicado:.*$/m, summary);
if (!text.includes('## Lote 731 —')) text = text.replace('## Lote 730 —', `${section}\n## Lote 730 —`);
fs.writeFileSync(file, text);
console.log(`README: ${examined} examinadas, ${verified} verificadas, ${pending} pendientes y ${remaining} aún sin revisar; ${changed} cambios de contenido.`);
