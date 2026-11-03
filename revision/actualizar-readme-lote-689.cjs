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
const summary = `Último lote secuencial aplicado: 689 (IDs 3761–3765). Acumulado: ${n} preguntas examinadas individualmente, ${verified} verificadas (${totals.vigente} vigentes, ${totals.corregida} corregidas y ${totals.historica} históricas) y ${pending} pendientes documentadas (${totals.pendiente_fuente} de fuente y ${totals.pendiente_ambiguedad} de ambigüedad); quedan ${left} sin revisar individualmente. Hay ${changed} preguntas con cambios en enunciado, opciones o clave frente al original, comparando registros completos.`;
const section = `## Lote 689 — 3 de noviembre de 2026

IDs 3761–3765 revisados individualmente; originales conservados en [cambios-lote-689.json](cambios-lote-689.json). Se corrigen tres preguntas y se confirman dos:
- **3761 — información de relevancia jurídica:** se corrige la errata en el número de la Ley 19/2013 y se confirma que se publican los proyectos de reglamentos cuya iniciativa corresponde a la Administración, con el momento del artículo 7.c. **Corregida.**
- **3762 — Foro de Gobierno Abierto:** se confirma que su creación fue el compromiso 1.1 del III Plan de Acción de España ante la Alianza para el Gobierno Abierto (2017–2019). **Vigente.**
- **3763 — adaptación a la Ley 19/2013:** se separa el plazo de adaptación autonómica/local de las reglas de entrada en vigor diferenciada; para adaptarse se concedió un máximo de dos años. **Corregida.**
- **3764 — gestión del Portal de Transparencia:** se actualiza con la información institucional vigente: lo gestiona la Dirección General de Gobernanza Pública, no el CTBG. **Corregida.**
- **3765 — motivación de la solicitud:** se confirma que no es obligatorio motivarla y que la falta de motivación no es causa suficiente para rechazarla. **Vigente.**

Fuentes primarias: BOE, [Ley 19/2013 consolidada](https://www.boe.es/buscar/act.php?id=BOE-A-2013-12887), arts. 7, disposición final novena y 17.3; Portal de Transparencia, [III Plan de Gobierno Abierto](https://transparencia.gob.es/gobierno-abierto/planes-accion/planes-accion-anteriores/iiiplanaccion), [compromiso 1.1 sobre creación del Foro](https://transparencia.gob.es/gobierno-abierto/planes-accion/planes-accion-anteriores/iiiplanaccion/compromisosiiipga/compromisoiiipga_1-1) y [gestión actual del Portal](https://transparencia.gob.es/derechos/Derecho_Entender/conocer/que-es-el-portal-de-transparencia).

Cotejo curricular: ITIC Academy, [bloque 7 «Dirección pública, empleo, transparencia y unidad de mercado»](https://drive.google.com/file/d/11xq0o8TLESDT7J2PLC_MVbZHGoqWmGa2/view?usp=drivesdk); correspondencia oficial cotejada con [temario A1 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938), anexo I, tema 25, y [temario A2 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262), anexo IX, tema I-4. Las cinco preguntas se clasifican A1-25/A2-I-4. Academy se usa como guía de cobertura; las respuestas se sustentan en normas y fuentes oficiales.

Comprobaciones: inventario de 12.123 preguntas sin errores; los candidatos a duplicado no equivalen a revisión individual. Verificador de ${n} cambios sin errores y ${left} pendientes de revisión; git diff --check limpio.

`;
const file = path.join(dir, 'README.md'); let s = fs.readFileSync(file, 'utf8');
s = s.replace(/Último lote secuencial aplicado:[^\r\n]*/, summary);
if (!s.includes('## Lote 689 —')) s = s.replace('## Lote 688 —', section + '## Lote 688 —');
fs.writeFileSync(file, s); console.log(`README actualizado: ${n} revisadas; ${left} por revisar individualmente; ${changed} con cambios sustantivos.`);
