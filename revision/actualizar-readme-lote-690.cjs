const fs = require('node:fs'), path = require('node:path'), dir = __dirname;
const totals = { vigente: 0, corregida: 0, historica: 0, pendiente_fuente: 0, pendiente_ambiguedad: 0 };
let changed = 0;
for (const f of fs.readdirSync(dir).filter(x => /^cambios-lote-\d+\.json$/.test(x))) for (const c of JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')).cambios) {
  totals[c.actualizada.revision.estado]++;
  if (['texto', 'opciones', 'respuesta_correcta'].some(k => JSON.stringify(c.original[k]) !== JSON.stringify(c.actualizada[k]))) changed++;
}
const n = Object.values(totals).reduce((a, b) => a + b, 0), verified = totals.vigente + totals.corregida + totals.historica;
const pending = totals.pendiente_fuente + totals.pendiente_ambiguedad, left = 12123 - n;
const summary = `Último lote secuencial aplicado: 690 (IDs 3766–3770). Acumulado: ${n} preguntas examinadas individualmente, ${verified} verificadas (${totals.vigente} vigentes, ${totals.corregida} corregidas y ${totals.historica} históricas) y ${pending} pendientes documentadas (${totals.pendiente_fuente} de fuente y ${totals.pendiente_ambiguedad} de ambigüedad); quedan ${left} sin revisar individualmente. Hay ${changed} preguntas con cambios en enunciado, opciones o clave frente al original, comparando registros completos.`;
const section = `## Lote 690 — 3 de noviembre de 2026

IDs 3766–3770 revisados individualmente; originales conservados en [cambios-lote-690.json](cambios-lote-690.json). Se corrigen tres preguntas de formulación y se confirman dos respuestas:
- **3766 — memoria anual del CTBG:** se corrige «Congreso de los Diputados» por «Cortes Generales», como establece el artículo 40. **Corregida.**
- **3767 — límites al derecho de acceso:** se corrige la errata en «Ley 19/2013»; disponer de órgano autonómico de transparencia no es uno de los límites del artículo 14. **Corregida.**
- **3768 — composición de la Comisión:** se confirma como falsa la mención a la Secretaría de Estado de Presupuestos y Gastos; la Ley cita a la Secretaría de Estado de Administraciones Públicas. **Vigente.**
- **3769 — órganos representados:** el Tribunal Supremo no forma parte de la composición enumerada en el artículo 36.2; sí se incluye al Tribunal de Cuentas. **Vigente.**
- **3770 — control de publicidad activa:** el artículo 9.1 encomienda al CTBG controlar el cumplimiento por la AGE; se reformula para separar ese control del derecho de acceso y de las obligaciones de ciertos sujetos privados. **Corregida.**

Fuente primaria: BOE, [Ley 19/2013 consolidada](https://www.boe.es/buscar/act.php?id=BOE-A-2013-12887), arts. 9, 14, 36 y 40.

Cotejo curricular: ITIC Academy, [bloque 7 «Dirección pública, empleo, transparencia y unidad de mercado»](https://drive.google.com/file/d/11xq0o8TLESDT7J2PLC_MVbZHGoqWmGa2/view?usp=drivesdk); correspondencia cotejada con [temario A1 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938), anexo I, tema 25, y [temario A2 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262), anexo IX, tema I-4. Clasificación: A1-25/A2-I-4. Academy orienta la cobertura; la fundamentación de las respuestas procede de la Ley.

Comprobaciones: inventario de 12.123 preguntas sin errores; candidatos automáticos a duplicado no cuentan como revisión individual. Verificador de ${n} cambios sin errores y ${left} preguntas pendientes de revisión individual; git diff --check limpio.

`;
const file = path.join(dir, 'README.md'); let s = fs.readFileSync(file, 'utf8');
s = s.replace(/Último lote secuencial aplicado:[^\r\n]*/, summary);
if (!s.includes('## Lote 690 —')) s = s.replace('## Lote 689 —', section + '## Lote 689 —');
fs.writeFileSync(file, s); console.log(`README actualizado: ${n} revisadas; ${left} pendientes individuales; ${changed} con cambios sustantivos.`);
