const fs = require('node:fs');
const path = require('node:path');
const dir = __dirname;
const totals = { vigente: 0, corregida: 0, historica: 0, pendiente_fuente: 0, pendiente_ambiguedad: 0 };
let changed = 0;
for (const f of fs.readdirSync(dir).filter(x => /^cambios-lote-\d+\.json$/.test(x))) for (const c of JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')).cambios) {
  totals[c.actualizada.revision.estado]++;
  if (['texto','opciones','respuesta_correcta'].some(k => JSON.stringify(c.original[k]) !== JSON.stringify(c.actualizada[k]))) changed++;
}
const total = Object.values(totals).reduce((a,b)=>a+b,0), verified = totals.vigente+totals.corregida+totals.historica, pending=totals.pendiente_fuente+totals.pendiente_ambiguedad, left=12123-total;
const summary=`Último lote secuencial aplicado: 728 (IDs 3961–3965). Acumulado: ${total} preguntas examinadas individualmente, ${verified} verificadas (${totals.vigente} vigentes, ${totals.corregida} corregidas y ${totals.historica} históricas) y ${pending} pendientes documentadas (${totals.pendiente_fuente} de fuente y ${totals.pendiente_ambiguedad} de ambigüedad); quedan ${left} sin revisar individualmente. Hay ${changed} preguntas con cambios en enunciado, opciones o clave frente al original, comparando registros completos.`;
const section=[
'## Lote 728 — 5 de noviembre de 2026','',
'IDs 3961–3965 revisados individualmente; versiones originales conservadas en [cambios-lote-728.json](cambios-lote-728.json).','',
'- **3961 — norma de mantenimiento:** se identifica ISO/IEC/IEEE 14764:2022 como edición vigente; ISO/IEC 14764:2006 está retirada. **Corregida.**',
'- **3962 — MÉTRICA v3:** el cambio o expansión de necesidades de usuarios corresponde al mantenimiento evolutivo en la taxonomía propia de MÉTRICA. **Histórica.**',
'- **3963 — proceso MSI:** se nombran productos reales del proceso y se aclara que la combinación no constituye una lista exhaustiva. **Histórica.**',
'- **3964 — control de cambios:** la revisión y autorización preceden a la implantación; no garantizan por sí solas ausencia de defectos. **Corregida.**',
'- **3965 — mantenibilidad:** alta cohesión y bajo acoplamiento favorecen comprensión/mantenimiento, sin prometer un coste mínimo universal. **Corregida.**','',
'Fuentes primarias: [ISO/IEC/IEEE 14764:2022](https://www.iso.org/standard/80710.html); [MÉTRICA v3, Mantenimiento de Sistemas de Información](https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Ae15c0c5b-dd9c-4e48-82e3-9e36ba18e839/METRICA_V3_Mantenimiento_de_Sistemas_de_Informacion.pdf); [MÉTRICA v3, Gestión de la Configuración](https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A1f321d6d-fb6a-46ed-a369-617c0080c51d/METRICA_V3_Gestion_de_Configuracion.pdf); [NIST SP 800-53 Rev. 5, CM-3](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final); [SEI CMU/SEI-2020-TR-006, Maintainability](https://sei.cmu.edu/documents/1288/2020_005_001_650490.pdf).','',
'Cotejo académico: [bloque 39, Calidad y mantenimiento](https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk) para los IDs 3961–3965; temas del programa contrastados con [convocatoria A1 GSI 2025, anexo I](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938) y [A2 GSI 2025, anexo IX](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262): 3961–3963 A1-101/A2-III-8; 3964 A1-101/125 y A2-III-8/II-13; 3965 A1-98/101 y A2-III-8/III-13.','',
'Comprobaciones: inventario y verificador ejecutados después de aplicar el lote; originales preservados en el registro.',''
].join('\n');
const file=path.join(dir,'README.md');let text=fs.readFileSync(file,'utf8');
text=text.replace(/^# Revisión del banco TIC — estado al .*$/m,'# Revisión del banco TIC — estado al 5 de noviembre de 2026').replace(/Último lote secuencial aplicado:[^\r\n]*/,summary);
if(!text.includes('## Lote 728 —'))text=text.replace('## Lote 727 —',`${section}\n## Lote 727 —`);
fs.writeFileSync(file,text);console.log(`README: ${total} examinadas; ${left} pendientes individuales; ${changed} con cambios de contenido.`);
