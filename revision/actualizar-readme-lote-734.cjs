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
const summary = `Último lote secuencial aplicado: 734 (IDs 3991–3995). Acumulado: ${examined} preguntas examinadas individualmente, ${verified} verificadas (${totals.vigente} vigentes, ${totals.corregida} corregidas y ${totals.historica} históricas) y ${pending} pendientes documentadas (${totals.pendiente_fuente} de fuente y ${totals.pendiente_ambiguedad} de ambigüedad); quedan ${remaining} sin revisar individualmente. Hay ${changed} preguntas con cambios en enunciado, opciones o clave frente al original, comparando registros completos.`;
const section = [
  '## Lote 734 — 5 de noviembre de 2026', '',
  'IDs 3991–3995 revisados individualmente; originales preservados en [cambios-lote-734.json](cambios-lote-734.json).', '',
  '- **3991 — actualización de antivirus:** se acota la subida de versión al caso de compatibilidad con un nuevo entorno; MÉTRICA v3 la clasifica como adaptativa. **Corregida.**',
  '- **3992 — costes de mantenimiento:** se evita afirmar un porcentaje o ranking universal; la evidencia muestra que puede alcanzar una proporción grande del coste de vida y que la estimación se estudia con datos de proyectos. **Corregida.**',
  '- **3993 — componentes CASE:** se fija la lista de cinco componentes de una fuente bibliográfica concreta; se pregunta cuál no aparece en ella, en lugar de presentar como universal una taxonomía variable. **Corregida.**',
  '- **3994 — aceptación de peticiones:** se acota a MÉTRICA v3 MSI, cuyo flujo permite aceptar/rechazar peticiones y prevé pruebas de regresión antes de la aceptación. **Histórica.**',
  '- **3995 — mejora de interfaz:** ISO/IEC/IEEE 14764:2022 clasifica como perfectiva una mejora de interfaz dirigida a prevenir error humano. **Corregida.**', '',
  'Fuentes técnicas: [MÉTRICA v3, Mantenimiento de Sistemas de Información](https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Ae15c0c5b-dd9c-4e48-82e3-9e36ba18e839/METRICA_V3_Mantenimiento_de_Sistemas_de_Informacion.pdf); [Conte et al., costes del ciclo de vida y esfuerzo de mantenimiento](https://doi.org/10.1016/S0950-5849(01)00156-2); [Jørgensen, estudio empírico de precisión de estimaciones](https://doi.org/10.1016/S0164-1212(02)00021-3); [Coronel y Morris, Database Systems, cap. 15 §15.7.2](https://gulf.edu.sa/assets/lib/cs/database-systems-design-implementation-and-management.pdf); [ISO/IEC/IEEE 14764:2022, catálogo oficial](https://www.iso.org/standard/80710.html) y [vista de la norma alojada por SIST](https://preview.sist.si/sist-preview/80710/9a26fc3a1a464fa286fb85d6c1eeed31/ISO-IEC-IEEE-14764-2022.pdf).', '',
  'Cotejo académico directo en Drive: [bloque 39 «Calidad y mantenimiento», versión 2026.1](https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk) para tipologías y proceso de mantenimiento; y [bloque «Análisis, diseño y construcción», versión 2026.1](https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk), §11.2, para CASE. Correspondencia con [convocatoria A1 GSI 2025, anexo I](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938) y [A2 GSI 2025, anexo IX](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262): 3991 A1-101/A2-III-8; 3992 A1-99/101-A2-III-8; 3993 A1-88/A2-III-6; 3994–3995 A1-101/A2-III-8.', '',
  'Comprobaciones: ambos documentos de academia se leyeron directamente en Drive; las claves se contrastaron con la fuente normativa/metodológica o empírica identificada; inventario y verificador se ejecutan tras el lote.', ''
].join('\n');
const file = path.join(dir, 'README.md');
let text = fs.readFileSync(file, 'utf8');
text = text.replace(/^# Revisión del banco TIC — estado al .*$/m, '# Revisión del banco TIC — estado al 5 de noviembre de 2026');
text = text.replace(/Último lote secuencial aplicado:[^\r\n]*/, summary);
if (!text.includes('## Lote 734 —')) text = text.replace('## Lote 733 —', `${section}\n## Lote 733 —`);
fs.writeFileSync(file, text);
console.log(`README: ${examined} examinadas, ${verified} verificadas, ${pending} pendientes, ${remaining} sin revisar; ${changed} cambios de contenido.`);
