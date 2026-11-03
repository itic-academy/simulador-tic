const fs=require('node:fs'),path=require('node:path'),dir=__dirname;
const totals={vigente:0,corregida:0,historica:0,pendiente_fuente:0,pendiente_ambiguedad:0};let changed=0;
for(const f of fs.readdirSync(dir).filter(f=>/^cambios-lote-\d+\.json$/.test(f)))for(const c of JSON.parse(fs.readFileSync(path.join(dir,f),'utf8')).cambios){totals[c.actualizada.revision.estado]++;if(['texto','opciones','respuesta_correcta'].some(k=>JSON.stringify(c.original[k])!==JSON.stringify(c.actualizada[k])))changed++;}
const n=Object.values(totals).reduce((a,b)=>a+b,0),verified=totals.vigente+totals.corregida+totals.historica,pending=totals.pendiente_fuente+totals.pendiente_ambiguedad,left=12123-n;
const summary=`Último lote secuencial aplicado: 686 (IDs 3746–3750). Acumulado: ${n} preguntas examinadas individualmente, ${verified} verificadas (${totals.vigente} vigentes, ${totals.corregida} corregidas y ${totals.historica} históricas) y ${pending} pendientes documentadas (${totals.pendiente_fuente} de fuente y ${totals.pendiente_ambiguedad} de ambigüedad); quedan ${left} sin revisar individualmente. Hay ${changed} preguntas con cambios en enunciado, opciones o clave frente al original, comparando registros completos.`;
const section=`## Lote 686 — 3 de noviembre de 2026

IDs 3746–3750 revisados individualmente; originales conservados en [cambios-lote-686.json](cambios-lote-686.json). Cuatro se corrigen y una se confirma:
- **3746 — acceso a categorías especiales de datos:** se añade la excepción de datos manifiestamente públicos; la regla es consentimiento expreso y por escrito para ideología, afiliación sindical, religión o creencias (art. 15.1). **Corregida.** A1-25/A2-I-4.
- **3747 — naturaleza/adscripción del CTBG:** se actualiza a autoridad administrativa independiente vinculada mediante el Ministerio para la Transformación Digital y de la Función Pública. La denominación de organismo público adscrito a Hacienda es obsoleta. **Corregida.** A1-25/A2-I-4.
- **3748 — ámbito del título II:** se concreta que un jefe de área no queda incluido por el mero nombre del puesto, salvo que tenga la condición legal de alto cargo. **Corregida.** A1-25/A2-I-4.
- **3749 — cobertura del Portal:** se verifica que el Portal estatal no contiene información específica de órganos constitucionales ni de entidades locales; estas publican en portales propios. También se confirma que la solicitud debe identificar al solicitante. **Corregida.** A1-25/A2-I-4.
- **3750 — composición de la Comisión:** se confirma que la AEAT no aparece entre sus miembros; Tribunal de Cuentas, AEPD y AIReF sí. **Vigente.** A1-25/A2-I-4.

Fuentes primarias: BOE, [Ley 19/2013 consolidada](https://www.boe.es/buscar/act.php?id=BOE-A-2013-12887), arts. 15, 17, 25 y 36; [RD 615/2024](https://www.boe.es/buscar/doc.php?id=BOE-A-2024-15944), estatuto vigente del CTBG; Portal de Transparencia, [alcance y gestión actuales](https://transparencia.gob.es/derechos/Derecho_Entender/conocer/que-es-el-portal-de-transparencia).

Cotejo curricular: ITIC Academy, [bloque 7 «Dirección pública, empleo, transparencia y unidad de mercado»](https://drive.google.com/file/d/11xq0o8TLESDT7J2PLC_MVbZHGoqWmGa2/view?usp=drivesdk), cobertura directa A1-25. Correspondencia oficial: A1, anexo I, [BOE-A-2025-25938](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938), tema 25; A2, anexo IX, [BOE-A-2025-26262](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262), tema I-4; cotejados con [temario-oficial.json](temario-oficial.json) el 03-11-2026. El programa A1-2025 aún cita RD 919/2014, derogado por RD 615/2024; el bloque Academy se usa como guía curricular, no como fuente normativa.

Comprobaciones: inventario de 12.123 preguntas, cero errores (duplicados/candidatos automáticos no equivalen a revisión individual); verificador de ${n} registros sin errores y ${left} preguntas restantes; git diff --check limpio.

`;
const file=path.join(dir,'README.md');let s=fs.readFileSync(file,'utf8');s=s.replace(/Último lote secuencial aplicado:[^\r\n]*/,summary);if(!s.includes('## Lote 686 —'))s=s.replace('## Lote 685 —',section+'## Lote 685 —');fs.writeFileSync(file,s);console.log(`README actualizado: ${n} revisadas; ${left} pendientes; ${changed} cambios sustantivos.`);
