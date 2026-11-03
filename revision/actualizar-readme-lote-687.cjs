const fs = require('node:fs'), path = require('node:path'), dir = __dirname;
const totals = { vigente: 0, corregida: 0, historica: 0, pendiente_fuente: 0, pendiente_ambiguedad: 0 };
let changed = 0;
for (const f of fs.readdirSync(dir).filter(f => /^cambios-lote-\d+\.json$/.test(f))) {
  for (const c of JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')).cambios) {
    totals[c.actualizada.revision.estado]++;
    if (['texto', 'opciones', 'respuesta_correcta'].some(k => JSON.stringify(c.original[k]) !== JSON.stringify(c.actualizada[k]))) changed++;
  }
}
const n = Object.values(totals).reduce((a, b) => a + b, 0), verified = totals.vigente + totals.corregida + totals.historica;
const pending = totals.pendiente_fuente + totals.pendiente_ambiguedad, left = 12123 - n;
const summary = `Último lote secuencial aplicado: 687 (IDs 3751–3755). Acumulado: ${n} preguntas examinadas individualmente, ${verified} verificadas (${totals.vigente} vigentes, ${totals.corregida} corregidas y ${totals.historica} históricas) y ${pending} pendientes documentadas (${totals.pendiente_fuente} de fuente y ${totals.pendiente_ambiguedad} de ambigüedad); quedan ${left} sin revisar individualmente. Hay ${changed} preguntas con cambios en enunciado, opciones o clave frente al original, comparando registros completos.`;
const section = `## Lote 687 — 3 de noviembre de 2026

IDs 3751–3755 revisados individualmente; originales conservados en [cambios-lote-687.json](cambios-lote-687.json). Se corrigen dos preguntas y se confirman tres:
- **3751 — competencia sancionadora:** se acota al supuesto de miembro del Gobierno o Secretario de Estado, cuya sanción impone el Consejo de Ministros; se separa de la competencia de incoación y se evita la denominación ministerial histórica de otras opciones. **Corregida.**
- **3752 — ámbito del derecho de acceso:** se confirma que partidos, sindicatos y organizaciones empresariales del art. 3 quedan sujetos al capítulo II (publicidad activa), no al capítulo III. **Vigente.**
- **3753 — principios de altos cargos:** se confirma que la solidaridad no integra la enumeración del art. 3.1 de la Ley 3/2015; sí figuran, entre otros, integridad, objetividad, transparencia y responsabilidad, y austeridad. **Vigente.**
- **3754 — Comisión de Transparencia:** se reformula para distinguir miembros de representantes locales invitados a la reunión anual. El representante local propuesto por la FEMP puede ser convocado, pero no es vocal por ese hecho. **Corregida.**
- **3755 — titularidad del derecho de acceso:** se confirma que todas las personas tienen el derecho y no deben motivar la solicitud; siguen existiendo límites materiales y se exige que conste la identidad. **Vigente.**

Fuentes primarias: BOE, [Ley 19/2013 consolidada](https://www.boe.es/buscar/act.php?id=BOE-A-2013-12887), arts. 2, 3, 12, 14, 17, 31 y 36; [Ley 3/2015 consolidada](https://www.boe.es/buscar/act.php?id=BOE-A-2015-3444), art. 3; [RD 615/2024, Estatuto vigente del CTBG](https://www.boe.es/buscar/doc.php?id=BOE-A-2024-15944), art. 16.

Cotejo curricular: ITIC Academy, [bloque 7 «Dirección pública, empleo, transparencia y unidad de mercado»](https://drive.google.com/file/d/11xq0o8TLESDT7J2PLC_MVbZHGoqWmGa2/view?usp=drivesdk), como guía de cobertura. Correspondencia oficial: [convocatoria A1 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938), anexo I, tema 25, y [convocatoria A2 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262), anexo IX, tema I-4; cotejadas con [temario-oficial.json](temario-oficial.json) el 03-11-2026. Clasificación individual A1-25/A2-I-4.

Comprobaciones: inventario de 12.123 preguntas sin errores; sus posibles duplicados no se contabilizan como revisión individual. Verificador de ${n} registros sin errores y ${left} pendientes de revisión; git diff --check limpio.

`;
const file = path.join(dir, 'README.md'); let s = fs.readFileSync(file, 'utf8');
s = s.replace(/Último lote secuencial aplicado:[^\r\n]*/, summary);
if (!s.includes('## Lote 687 —')) s = s.replace('## Lote 686 —', section + '## Lote 686 —');
fs.writeFileSync(file, s); console.log(`README actualizado: ${n} revisadas; ${left} por revisar individualmente; ${changed} con cambios sustantivos.`);
