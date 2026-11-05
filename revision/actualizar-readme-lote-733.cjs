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
const summary = `Último lote secuencial aplicado: 733 (IDs 3986–3990). Acumulado: ${examined} preguntas examinadas individualmente, ${verified} verificadas (${totals.vigente} vigentes, ${totals.corregida} corregidas y ${totals.historica} históricas) y ${pending} pendientes documentadas (${totals.pendiente_fuente} de fuente y ${totals.pendiente_ambiguedad} de ambigüedad); quedan ${remaining} sin revisar individualmente. Hay ${changed} preguntas con cambios en enunciado, opciones o clave frente al original, comparando registros completos.`;
const section = [
  '## Lote 733 — 5 de noviembre de 2026', '',
  'IDs 3986–3990 revisados individualmente; el registro [cambios-lote-733.json](cambios-lote-733.json) preserva los originales.', '',
  '- **3986 — propósito del mantenimiento:** se reemplaza la generalización «todo sistema siempre necesita mantenimiento» por el propósito de sostener la capacidad del software para prestar el servicio según ISO/IEC/IEEE 14764:2022. **Corregida.**',
  '- **3987 — alcance de MÉTRICA v3:** se confirma que adaptativo y perfectivo quedan fuera del proceso MSI; se acota a esa metodología. **Histórica.**',
  '- **3988 — mantenimiento perfectivo:** se define como mejora interna, incluida optimización del rendimiento/eficiencia, y se diferencia de cambio ambiental o nuevas necesidades funcionales. **Histórica.**',
  '- **3989 — mantenimiento preventivo:** se actualiza a ISO/IEC/IEEE 14764:2022: corregir defectos latentes antes de que aparezcan en producción. **Corregida.**',
  '- **3990 — funciones CASE:** se sustituye la clasificación abierta por la taxonomía explícita de NBS FIPS PUB 99: transformación, análisis estático, análisis dinámico y gestión. **Histórica.**', '',
  'Fuentes técnicas: [ISO/IEC/IEEE 14764:2022, catálogo oficial](https://www.iso.org/standard/80710.html) y [vista de la norma de SIST, cláusulas 3.1.9–3.1.10](https://preview.sist.si/sist-preview/80710/9a26fc3a1a464fa286fb85d6c1eeed31/ISO-IEC-IEEE-14764-2022.pdf); [MÉTRICA v3, Mantenimiento de Sistemas de Información](https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Ae15c0c5b-dd9c-4e48-82e3-9e36ba18e839/METRICA_V3_Mantenimiento_de_Sistemas_de_Informacion.pdf); [NBS FIPS PUB 99, taxonomía funcional de herramientas](https://www.govinfo.gov/content/pkg/GOVPUB-C13-514d03a3a0818fbe3568455ffc53ab0a/pdf/GOVPUB-C13-514d03a3a0818fbe3568455ffc53ab0a.pdf).', '',
  'Cotejo académico directo en Drive: [bloque 39 «Calidad y mantenimiento», versión 2026.1](https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk), que recoge el proceso MSI de MÉTRICA v3 y actualiza la referencia a 14764:2022; el [bloque de Análisis, diseño y construcción, versión 2026.1](https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk), §11.2, cubre herramientas CASE e ingeniería inversa. Correspondencia con [convocatoria A1 GSI 2025, anexo I](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938) y [A2 GSI 2025, anexo IX](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262): 3986–3989 A1-101/A2-III-8; 3990 A1-88/A2-III-6.', '',
  'Comprobaciones: ambos documentos académicos se cotejaron directamente en Drive; las categorías metodológicas se acotan a MÉTRICA v3 y las definiciones de mantenimiento se contrastan con la edición ISO publicada. Inventario y verificador ejecutados tras el lote.', ''
].join('\n');
const file = path.join(dir, 'README.md');
let text = fs.readFileSync(file, 'utf8');
text = text.replace(/^# Revisión del banco TIC — estado al .*$/m, '# Revisión del banco TIC — estado al 5 de noviembre de 2026');
text = text.replace(/Último lote secuencial aplicado:[^\r\n]*/, summary);
if (!text.includes('## Lote 733 —')) text = text.replace('## Lote 732 —', `${section}\n## Lote 732 —`);
fs.writeFileSync(file, text);
console.log(`README: ${examined} examinadas, ${verified} verificadas, ${pending} pendientes, ${remaining} sin revisar; ${changed} cambios de contenido.`);
