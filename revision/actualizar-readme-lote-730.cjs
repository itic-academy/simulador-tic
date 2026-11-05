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
const summary = `Último lote secuencial aplicado: 730 (IDs 3971–3975). Acumulado: ${examined} preguntas examinadas individualmente, ${verified} verificadas (${totals.vigente} vigentes, ${totals.corregida} corregidas y ${totals.historica} históricas) y ${pending} pendientes documentadas (${totals.pendiente_fuente} de fuente y ${totals.pendiente_ambiguedad} de ambigüedad); quedan ${remaining} sin revisar individualmente. Hay ${changed} preguntas con cambios en enunciado, opciones o clave frente al original, comparando registros completos.`;
const section = [
  '## Lote 730 — 5 de noviembre de 2026', '',
  'IDs 3971–3975 revisados individualmente; el enunciado, las opciones y la clave originales se conservan en [cambios-lote-730.json](cambios-lote-730.json).', '',
  '- **3971 — nuevos requisitos funcionales:** se acota explícitamente a MÉTRICA v3; según esa taxonomía el cambio es evolutivo. Se advierte que otras taxonomías pueden usar “perfectivo” para mejoras funcionales. **Histórica.**',
  '- **3972 — mantenimiento evolutivo:** se explicita que la definición es la de MÉTRICA v3 y que las denominaciones dependen del marco aplicado. **Histórica.**',
  '- **3973 — disponibilidad:** se actualiza a ISO/IEC 25010:2023 y se distingue la capacidad de estar operativo/accesible de su medida por proporción del intervalo en estado operativo. **Corregida.**',
  '- **3974 — mantenimiento perfectivo:** se identifica la edición vigente ISO/IEC/IEEE 14764:2022 y se separa de correctivo, adaptativo y preventivo; no se equipara con la nomenclatura de MÉTRICA. **Corregida.**',
  '- **3975 — Visual SourceSafe:** se precisa su función histórica de control de versiones/gestión de configuración y su fin de soporte extendido en 2017. **Histórica.**', '',
  'Fuentes primarias: [MÉTRICA v3, Mantenimiento de Sistemas de Información](https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Ae15c0c5b-dd9c-4e48-82e3-9e36ba18e839/METRICA_V3_Mantenimiento_de_Sistemas_de_Informacion.pdf); [ISO/IEC 25010:2023](https://www.iso.org/standard/78176.html); [ISO/IEC/IEEE 14764:2022](https://www.iso.org/standard/80710.html); [Microsoft, anuncio de Visual SourceSafe](https://news.microsoft.com/source/1996/10/07/microsoft-announces-visual-sourcesafe-5-0an-intuitive-project-oriented-version-control-system/) y [ciclo de vida de Visual SourceSafe 2005](https://learn.microsoft.com/en-us/lifecycle/products/microsoft-visual-sourcesafe-2005).', '',
  'Cotejo académico en Drive: [bloque 39, Calidad y mantenimiento](https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk), incluido el apartado de gestión de configuración/control de versiones. Correspondencia contrastada con [convocatoria A1 GSI 2025, anexo I](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938) y [A2 GSI 2025, anexo IX](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262): 3971–3972 A1-101/A2-III-8; 3973 A1-98/A2-III-13; 3974 A1-101/A2-III-8; 3975 A1-102/A2-IV-4.', '',
  'Comprobaciones: inventario y verificador ejecutados tras la aplicación del lote; todas las cinco claves se contrastaron con las fuentes vinculadas.',''
].join('\n');
const file = path.join(dir, 'README.md');
let text = fs.readFileSync(file, 'utf8');
text = text.replace(/^# Revisión del banco TIC — estado al .*$/m, '# Revisión del banco TIC — estado al 5 de noviembre de 2026');
text = text.replace(/^Último lote secuencial aplicado:.*$/m, summary);
if (!text.includes('## Lote 730 —')) text = text.replace('## Lote 729 —', `${section}\n## Lote 729 —`);
fs.writeFileSync(file, text);
console.log(`README: ${examined} examinadas, ${verified} verificadas, ${pending} pendientes y ${remaining} aún sin revisar; ${changed} cambios de contenido.`);
