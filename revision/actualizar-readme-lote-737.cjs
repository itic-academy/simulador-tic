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
const summary = `Último lote secuencial aplicado: 737 (IDs 4006–4010). Acumulado: ${examined} preguntas examinadas individualmente, ${verified} verificadas (${totals.vigente} vigentes, ${totals.corregida} corregidas y ${totals.historica} históricas) y ${pending} pendientes documentadas (${totals.pendiente_fuente} de fuente y ${totals.pendiente_ambiguedad} de ambigüedad); quedan ${remaining} sin revisar individualmente. Hay ${changed} preguntas con cambios en enunciado, opciones o clave frente al original, comparando registros completos.`;
const section = [
  '## Lote 737 — 5 de noviembre de 2026', '',
  'IDs 4006–4010 revisados individualmente; originales preservados en [cambios-lote-737.json](cambios-lote-737.json).', '',
  '- **4006 — cambio normativo:** se delimita a un convenio de aplicativo AGE publicado en BOE; ese marco clasifica expresamente como adaptativas las modificaciones debidas a cambios normativos. **Corregida.**',
  '- **4007 — mantenimiento preventivo:** se sustituye la atribución imprecisa a Bennet por la definición de ISO/IEC/IEEE 14764:2022: corregir fallos latentes tras la entrega antes de que aparezcan en producción. **Corregida.**',
  '- **4008 — efecto onda:** se contextualiza en MÉTRICA v3; describe efectos no deseados o errores en componentes no modificados, motivo de las pruebas de regresión. **Histórica.**',
  '- **4009 — mantenibilidad:** se identifica la lista completa del modelo ISO/IEC 9126-1:2001 y se marca como histórica porque el estándar está retirado; se referencia el modelo de producto actual ISO/IEC 25010:2023. **Histórica.**',
  '- **4010 — estándares:** se actualiza la respuesta a ISO/IEC/IEEE 14764:2022, publicado y dedicado al mantenimiento del software; se distinguen 12207, IEEE 1219-1998 e ISO/IEC 9126-1:2001. **Corregida.**', '',
  'Fuentes primarias: [BOE-A-2025-5470, convenio GEISER, apartado de mantenimiento adaptativo](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-5470); [ISO/IEC/IEEE 14764:2022, catálogo oficial](https://www.iso.org/standard/80710.html) y [vista previa del estándar, definiciones 3.1.1, 3.1.9 y 3.1.10](https://preview.sist.si/sist-preview/80710/9a26fc3a1a464fa286fb85d6c1eeed31/ISO-IEC-IEEE-14764-2022.pdf); [MÉTRICA v3, Mantenimiento de Sistemas de Información, MSI 3.3](https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Ae15c0c5b-dd9c-4e48-82e3-9e36ba18e839/METRICA_V3_Mantenimiento_de_Sistemas_de_Informacion.pdf); [ISO/IEC 9126-1:2001, catálogo oficial y estado retirado](https://www.iso.org/standard/22749.html), [texto de sus subcaracterísticas 6.5.1–6.5.5](https://www.iteh.us/catalog/standards/iso/d4ab62c2-7a1f-4586-b33d-25bcf8cf19c1/iso-iec-9126-1-2001) y [ISO/IEC 25010:2023, modelo de calidad de producto publicado](https://www.iso.org/standard/78176.html); [IEEE SA, estado supersedido de IEEE 1219-1998](https://standards.ieee.org/ieee/1219/1842/).', '',
  'Cotejo académico directo en Drive: [bloque 39 «Calidad y mantenimiento», versión 2026.1](https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk), que incluye el mantenimiento ISO/IEC/IEEE 14764:2022 y los modelos de calidad ISO/IEC 25010:2023; referencias curriculares A1/A2 verificadas contra [convocatoria A1 GSI 2025, anexo I](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938) y [A2 GSI 2025, anexo IX](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262): 4006–4008 y 4010 A1-101/A2-III-8; 4009 A1-98/A2-III-13.', '',
  'Comprobaciones: bloque 39 leído directamente en Drive; definiciones contrastadas con BOE, catálogo ISO/IEEE y publicaciones enlazadas; inventario y verificador ejecutados tras el lote. ISO/IEC 9126-1:2001 se registra como modelo histórico retirado, no como norma vigente.', ''
].join('\n');
const file = path.join(dir, 'README.md');
let text = fs.readFileSync(file, 'utf8');
text = text.replace(/^# Revisión del banco TIC — estado al .*$/m, '# Revisión del banco TIC — estado al 5 de noviembre de 2026');
text = text.replace(/Último lote secuencial aplicado:[^\r\n]*/, summary);
if (!text.includes('## Lote 737 —')) text = text.replace('## Lote 736 —', `${section}\n## Lote 736 —`);
fs.writeFileSync(file, text);
console.log(`README: ${examined} examinadas, ${verified} verificadas, ${pending} pendientes, ${remaining} sin revisar; ${changed} cambios de contenido.`);
