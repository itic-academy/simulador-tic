const fs=require('node:fs'),path=require('node:path'),dir=__dirname;const totals={vigente:0,corregida:0,historica:0,pendiente_fuente:0,pendiente_ambiguedad:0};let changed=0;
for(const f of fs.readdirSync(dir).filter(x=>/^cambios-lote-\d+\.json$/.test(x)))for(const c of JSON.parse(fs.readFileSync(path.join(dir,f),'utf8')).cambios){totals[c.actualizada.revision.estado]++;if(['texto','opciones','respuesta_correcta'].some(k=>JSON.stringify(c.original[k])!==JSON.stringify(c.actualizada[k])))changed++}
const n=Object.values(totals).reduce((a,b)=>a+b,0),verified=totals.vigente+totals.corregida+totals.historica,pending=totals.pendiente_fuente+totals.pendiente_ambiguedad,left=12123-n;
const summary=`Último lote secuencial aplicado: 691 (IDs 3771–3775). Acumulado: ${n} preguntas examinadas individualmente, ${verified} verificadas (${totals.vigente} vigentes, ${totals.corregida} corregidas y ${totals.historica} históricas) y ${pending} pendientes documentadas (${totals.pendiente_fuente} de fuente y ${totals.pendiente_ambiguedad} de ambigüedad); quedan ${left} sin revisar individualmente. Hay ${changed} preguntas con cambios en enunciado, opciones o clave frente al original, comparando registros completos.`;
const section=`## Lote 691 — 3 de noviembre de 2026

IDs 3771–3775 revisados individualmente; originales conservados en [cambios-lote-691.json](cambios-lote-691.json). Se confirma la clave de cuatro preguntas y se actualiza una pregunta desfasada:
- **3771 — límites al acceso:** se confirma que la política económica y monetaria figura en el artículo 14.1.i. **Vigente.**
- **3772 — inadmisión:** se confirma la reelaboración previa como causa de inadmisión del artículo 18.1.c y se distingue de los límites materiales del artículo 14. **Vigente.**
- **3773 — Estatuto del CTBG:** se evita presentar como vigente el RD 919/2014, derogado en 2024; se formula la cuestión como dato histórico: su Estatuto tenía cuatro capítulos. **Corregida.**
- **3774 — límites al acceso:** la política presupuestaria y fiscal no aparece como categoría autónoma del artículo 14. **Vigente.**
- **3775 — protección ambiental:** se confirma que aparece expresamente en el artículo 14.1.i. **Vigente.**

Fuentes primarias: BOE, [Ley 19/2013 consolidada](https://www.boe.es/buscar/act.php?id=BOE-A-2013-12887), arts. 14 y 18; [RD 919/2014](https://www.boe.es/buscar/act.php?id=BOE-A-2014-11410) (Estatuto histórico) y [RD 615/2024](https://www.boe.es/eli/es/rd/2024/07/02/615) (Estatuto vigente y derogación del anterior).

Cotejo curricular: ITIC Academy, [bloque 7 «Dirección pública, empleo, transparencia y unidad de mercado»](https://drive.google.com/file/d/11xq0o8TLESDT7J2PLC_MVbZHGoqWmGa2/view?usp=drivesdk); correspondencia cotejada con [temario A1 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938), anexo I, tema 25, y [temario A2 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262), anexo IX, tema I-4. Clasificación: A1-25/A2-I-4. Academy guía cobertura; fuentes oficiales sustentan las respuestas.

Comprobaciones: inventario de 12.123 preguntas sin errores; candidatos a duplicado automáticos no cuentan como revisión individual. Verificador de ${n} cambios sin errores y ${left} preguntas pendientes de revisión individual; git diff --check limpio.

`;
const file=path.join(dir,'README.md');let s=fs.readFileSync(file,'utf8');s=s.replace(/Último lote secuencial aplicado:[^\r\n]*/,summary);if(!s.includes('## Lote 691 —'))s=s.replace('## Lote 690 —',section+'## Lote 690 —');fs.writeFileSync(file,s);console.log(`README actualizado: ${n} revisadas; ${left} pendientes; ${changed} con cambios sustantivos.`);
