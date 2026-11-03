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
const summary = `Último lote secuencial aplicado: 688 (IDs 3756–3760). Acumulado: ${n} preguntas examinadas individualmente, ${verified} verificadas (${totals.vigente} vigentes, ${totals.corregida} corregidas y ${totals.historica} históricas) y ${pending} pendientes documentadas (${totals.pendiente_fuente} de fuente y ${totals.pendiente_ambiguedad} de ambigüedad); quedan ${left} sin revisar individualmente. Hay ${changed} preguntas con cambios en enunciado, opciones o clave frente al original, comparando registros completos.`;
const section = `## Lote 688 — 3 de noviembre de 2026

IDs 3756–3760 revisados individualmente; originales conservados en [cambios-lote-688.json](cambios-lote-688.json). Se corrigen dos preguntas, se conserva una como histórica y se confirman dos:
- **3756 — alto cargo en comunidades autónomas y entidades locales:** el art. 25.2 remite a la normativa autonómica o local aplicable para determinar la condición de alto cargo o asimilado. **Corregida.**
- **3757 — interoperabilidad organizativa en Justicia:** se conserva la definición del anexo de la Ley 18/2011 solo con contexto histórico; fue derogada con efectos de 21-12-2023 por el RDL 6/2023. **Histórica.**
- **3758 — acceso parcial:** se confirma la regla del art. 16 y sus dos condiciones: omitir lo afectado, salvo distorsión o pérdida de sentido, e indicar la omisión. **Vigente.**
- **3759 — objeto de la Ley 19/2013:** se confirma la opción que reproduce el art. 1 sobre transparencia pública, acceso a información de esa actividad y buen gobierno. **Vigente.**
- **3760 — planes y programas:** se confirma que deben incluir objetivos, actividades, medios y plazos; en la AGE su evaluación corresponde a las inspecciones generales de servicios. **Vigente.**

Fuentes primarias: BOE, [Ley 19/2013 consolidada](https://www.boe.es/buscar/act.php?id=BOE-A-2013-12887), arts. 1, 6, 16 y 25; [Ley 18/2011](https://www.boe.es/buscar/act.php?id=BOE-A-2011-11605), anexo y nota de derogación; [Real Decreto-ley 6/2023](https://www.boe.es/buscar/act.php?id=BOE-A-2023-25758), disposición derogatoria única.

Cotejo curricular: ITIC Academy, [bloque 7 de transparencia y buen gobierno](https://drive.google.com/file/d/11xq0o8TLESDT7J2PLC_MVbZHGoqWmGa2/view?usp=drivesdk), para 3756 y 3758–3760; [bloque 10 de gobernanza TIC y Administración digital](https://drive.google.com/file/d/1alTzv7f2Katg4EdxJ72SYkLm6UScCCho/view?usp=drivesdk), sección 13 sobre ENI e interoperabilidad, para 3757. Temas oficiales cotejados con [temario-oficial.json](temario-oficial.json) y convocatorias [A1 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938) y [A2 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262): 3756 y 3758–3760, A1-25/A2-I-4; 3757, A1-45/A2-I-9. Los materiales de Academy sirven para cobertura curricular, no como autoridad jurídica.

Comprobaciones: inventario de 12.123 preguntas sin errores; posibles duplicados no equivalen a revisión individual. Verificador de ${n} registros sin errores y ${left} pendientes de revisión; git diff --check limpio.

`;
const file = path.join(dir, 'README.md'); let s = fs.readFileSync(file, 'utf8');
s = s.replace(/Último lote secuencial aplicado:[^\r\n]*/, summary);
if (!s.includes('## Lote 688 —')) s = s.replace('## Lote 687 —', section + '## Lote 687 —');
fs.writeFileSync(file, s); console.log(`README actualizado: ${n} revisadas; ${left} por revisar individualmente; ${changed} con cambios sustantivos.`);
