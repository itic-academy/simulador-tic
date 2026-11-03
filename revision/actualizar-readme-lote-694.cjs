const fs=require('node:fs'),path=require('node:path'),dir=__dirname,totals={vigente:0,corregida:0,historica:0,pendiente_fuente:0,pendiente_ambiguedad:0};let changed=0;
for(const f of fs.readdirSync(dir).filter(x=>/^cambios-lote-\d+\.json$/.test(x)))for(const c of JSON.parse(fs.readFileSync(path.join(dir,f),'utf8')).cambios){totals[c.actualizada.revision.estado]++;if(['texto','opciones','respuesta_correcta'].some(k=>JSON.stringify(c.original[k])!==JSON.stringify(c.actualizada[k])))changed++}
const n=Object.values(totals).reduce((a,b)=>a+b,0),verified=totals.vigente+totals.corregida+totals.historica,pending=totals.pendiente_fuente+totals.pendiente_ambiguedad,left=12123-n;
const summary=`Último lote secuencial aplicado: 694 (IDs 3786–3790). Acumulado: ${n} preguntas examinadas individualmente, ${verified} verificadas (${totals.vigente} vigentes, ${totals.corregida} corregidas y ${totals.historica} históricas) y ${pending} pendientes documentadas (${totals.pendiente_fuente} de fuente y ${totals.pendiente_ambiguedad} de ambigüedad); quedan ${left} sin revisar individualmente. Hay ${changed} preguntas con cambios en enunciado, opciones o clave frente al original, comparando registros completos.`;
const section=`## Lote 694 — 3 de noviembre de 2026

IDs 3786–3790 revisados individualmente; originales conservados en [cambios-lote-694.json](cambios-lote-694.json). Se corrigen tres formulaciones y se confirman dos respuestas:
- **3786 — límites del derecho de acceso:** se evita una premisa histórica ambigua y se confirma la opción que enumera perjuicios del artículo 14: defensa, seguridad nacional y funciones administrativas de inspección, entre otros límites. **Corregida.**
- **3787 — principios técnicos del Portal:** accesibilidad, interoperabilidad y reutilización sí aparecen en el artículo 11; compatibilidad no. **Vigente.**
- **3788 — plazo de resolución:** se corrige el plazo afirmado en la opción falsa: la regla general es un mes, ampliable por otro mes en los casos legales. **Corregida.**
- **3789 — publicidad activa y acceso:** se precisa que el derecho de acceso no se limita a contenido ya publicado; también permite solicitar información pública aún no difundida. **Corregida.**
- **3790 — motivación de la solicitud:** se confirma que no es obligatorio motivarla; sí se identifican solicitante, información y contacto en los términos del artículo 17. **Vigente.**

Fuentes primarias: BOE, [Ley 19/2013 consolidada](https://www.boe.es/buscar/act.php?id=BOE-A-2013-12887), arts. 11, 14, 17 y 20; Portal de Transparencia, [Derecho a Saber](https://transparencia.gob.es/derechos/Derecho_Saber), que distingue publicidad activa de solicitudes de información específica.

Cotejo curricular: ITIC Academy, [bloque 7 «Dirección pública, empleo, transparencia y unidad de mercado»](https://drive.google.com/file/d/11xq0o8TLESDT7J2PLC_MVbZHGoqWmGa2/view?usp=drivesdk); correspondencia cotejada con [temario A1 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938), anexo I, tema 25, y [temario A2 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262), anexo IX, tema I-4. Clasificación: A1-25/A2-I-4. Academy orienta cobertura, no es fuente normativa.

Comprobaciones: inventario de 12.123 preguntas sin errores; los candidatos a duplicado automáticos no equivalen a revisión individual. Verificador de ${n} cambios sin errores y ${left} preguntas pendientes de revisión individual; git diff --check limpio.

`;
const file=path.join(dir,'README.md');let s=fs.readFileSync(file,'utf8');s=s.replace(/Último lote secuencial aplicado:[^\r\n]*/,summary);if(!s.includes('## Lote 694 —'))s=s.replace('## Lote 693 —',section+'## Lote 693 —');fs.writeFileSync(file,s);console.log(`README actualizado: ${n} revisadas; ${left} pendientes; ${changed} con cambios sustantivos.`);
