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
const summary = `Último lote secuencial aplicado: 736 (IDs 4001–4005). Acumulado: ${examined} preguntas examinadas individualmente, ${verified} verificadas (${totals.vigente} vigentes, ${totals.corregida} corregidas y ${totals.historica} históricas) y ${pending} pendientes documentadas (${totals.pendiente_fuente} de fuente y ${totals.pendiente_ambiguedad} de ambigüedad); quedan ${remaining} sin revisar individualmente. Hay ${changed} preguntas con cambios en enunciado, opciones o clave frente al original, comparando registros completos.`;
const section = [
  '## Lote 736 — 5 de noviembre de 2026', '',
  'IDs 4001–4005 revisados individualmente; originales preservados en [cambios-lote-736.json](cambios-lote-736.json).', '',
  '- **4001 — participantes del proceso MÉTRICA v3 MSI:** se delimita a los roles que aparecen colectivamente en la tabla de actividades MSI 1–4; se excluye “analistas”, que no figura como participante en la tabla. **Corregida.**',
  '- **4002 — factores de mantenibilidad:** se conserva sin validar la clave; varias alternativas parecen reunir factores, y la fuente localizada es una diapositiva secundaria que atribuye la lista a Kopetz sin identificar la obra primaria. Queda pendiente de resolver. **Pendiente por ambigüedad.**',
  '- **4003 — elicitación de requisitos según Pressman:** se explicita el carácter evolutivo y la repetición iterativa, eliminando “cíclico” como distractor casi sinónimo. **Corregida.**',
  '- **4004 — cambio de entorno:** la respuesta adaptativo se mantiene, encuadrada en MÉTRICA v3 y contrastada con el estándar actual de mantenimiento. **Vigente.**',
  '- **4005 — sistemas legacy:** se reemplaza el juicio universal “difícil, desconocido y caro” por riesgos observados en sistemas legacy federales críticos del informe GAO: tecnologías antiguas o sin soporte y vulnerabilidades pueden dificultar el mantenimiento y elevar costes y riesgos. **Corregida.**', '',
  'Fuentes técnicas: [MÉTRICA v3, Mantenimiento de Sistemas de Información](https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Ae15c0c5b-dd9c-4e48-82e3-9e36ba18e839/METRICA_V3_Mantenimiento_de_Sistemas_de_Informacion.pdf) y [Participantes](https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Ad601853c-e255-4ade-a9f8-af1357e3a151/METRICA_V3_Participantes.pdf); [UCLM-ESI, diapositivas «Mantenimiento del Software», lista atribuida a Kopetz — fuente secundaria, insuficiente para cerrar 4002](https://alarcos.esi.uclm.es/Per/fruiz/curs/mso/trans/S3.pdf); [Pressman y Maxim, Software Engineering: A Practitioner’s Approach, 9.ª ed., cap. 7, página bibliográfica oficial de McGraw Hill](https://www.mheducation.com/highered/product/software-engineering-a-practitioners-approach-pressman.html?exactIsbn=true); [ISO/IEC/IEEE 29148:2018, catálogo oficial, vigente y confirmada en 2024](https://www.iso.org/standard/72089.html); [ISO/IEC/IEEE 14764:2022, catálogo oficial](https://www.iso.org/standard/80710.html); [U.S. GAO, GAO-25-107795, sistemas legacy críticos](https://files.gao.gov/reports/GAO-25-107795/index.html).', '',
  'Cotejo académico directo en Drive: [bloque 39 «Calidad y mantenimiento», versión 2026.1](https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk), para mantenimiento, MÉTRICA v3, ISO/IEC/IEEE 14764:2022, mantenibilidad y sistemas legacy; y [bloque «Análisis, diseño y construcción», versión 2026.1](https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk), §2 de ingeniería de requisitos/elicitación iterativa. Correspondencia con [convocatoria A1 GSI 2025, anexo I](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938) y [A2 GSI 2025, anexo IX](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262): 4001, 4002 y 4004 A1-101/A2-III-8; 4003 A1-88/A2-III-3; 4005 A1-100/101-A2-III-8.', '',
  'Comprobaciones: ambos bloques académicos se leyeron directamente en Drive; las claves validadas se cotejaron con MÉTRICA, estándares vigentes, la obra de Pressman o el informe GAO. 4002 permanece pendiente expresamente y no cuenta como verificada. Inventario y verificador se ejecutan tras el lote.', ''
].join('\n');
const file = path.join(dir, 'README.md');
let text = fs.readFileSync(file, 'utf8');
text = text.replace(/^# Revisión del banco TIC — estado al .*$/m, '# Revisión del banco TIC — estado al 5 de noviembre de 2026');
text = text.replace(/Último lote secuencial aplicado:[^\r\n]*/, summary);
if (!text.includes('## Lote 736 —')) text = text.replace('## Lote 735 —', `${section}\n## Lote 735 —`);
fs.writeFileSync(file, text);
console.log(`README: ${examined} examinadas, ${verified} verificadas, ${pending} pendientes, ${remaining} sin revisar; ${changed} cambios de contenido.`);
