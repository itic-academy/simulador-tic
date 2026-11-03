const fs=require('node:fs'),path=require('node:path'),dir=__dirname;
const totals={vigente:0,corregida:0,historica:0,pendiente_fuente:0,pendiente_ambiguedad:0};let changed=0;
for(const f of fs.readdirSync(dir).filter(f=>/^cambios-lote-\d+\.json$/.test(f)))for(const c of JSON.parse(fs.readFileSync(path.join(dir,f),'utf8')).cambios){totals[c.actualizada.revision.estado]++;if(['texto','opciones','respuesta_correcta'].some(k=>JSON.stringify(c.original[k])!==JSON.stringify(c.actualizada[k])))changed++;}
const n=Object.values(totals).reduce((a,b)=>a+b,0),verified=totals.vigente+totals.corregida+totals.historica,pending=totals.pendiente_fuente+totals.pendiente_ambiguedad,left=12123-n;
const summary=`Último lote secuencial aplicado: 684 (IDs 3736–3740). Acumulado: ${n} preguntas examinadas individualmente, ${verified} verificadas (${totals.vigente} vigentes, ${totals.corregida} corregidas y ${totals.historica} históricas) y ${pending} pendientes documentadas (${totals.pendiente_fuente} de fuente y ${totals.pendiente_ambiguedad} de ambigüedad); quedan ${left} sin revisar individualmente. Hay ${changed} preguntas con cambios en enunciado, opciones o clave frente al original, comparando registros completos.`;
const section=`## Lote 684 — 3 de noviembre de 2026

IDs 3736–3740 revisados individualmente; originales conservados en [cambios-lote-684.json](cambios-lote-684.json). Se corrigen las cinco preguntas:
- **3736 — Consejo de Transparencia:** se actualiza su denominación jurídica a Autoridad Administrativa Independiente según RD 615/2024 y se matiza la competencia para reclamaciones autonómicas y locales. **Corregida.** A1-25/A2-I-4.
- **3737 — reclamación ante el Consejo:** se sustituye la ambigüedad entre “facultativa” y “potestativa” por las alternativas jurídicas precisas: potestativa, y previa a la impugnación judicial si se elige. **Corregida.** A1-25/A2-I-4.
- **3738 — ética pública:** se reformula como deberes, principios éticos y reglas de conducta del EBEP orientados al servicio público e interés general, no como una definición legal cerrada ni solo un conjunto de normas. **Corregida.** A1-24/A2-I-8.
- **3739 — plazo de resolución:** se confirma el plazo ordinario de un mes desde la recepción por el órgano competente, incluyendo la posibilidad de ampliarlo otro mes por volumen o complejidad con notificación previa. **Corregida.** A1-25/A2-I-4.
- **3740 — composición de la Comisión:** se distingue a la FEMP como entidad que puede proponer un representante local invitado a una reunión anual, no como miembro de la Comisión. **Corregida.** A1-25/A2-I-4.

Fuentes primarias: BOE, [RD 615/2024, Estatuto del CTBG](https://www.boe.es/buscar/doc.php?id=BOE-A-2024-15944); [Ley 19/2013 consolidada](https://www.boe.es/buscar/act.php?id=BOE-A-2013-12887), arts. 20, 24, 33–36; [EBEP consolidado](https://www.boe.es/buscar/act.php?id=BOE-A-2015-11719), arts. 52–54.

Cotejo curricular: ITIC Academy, [bloque 7 «Dirección pública, empleo, transparencia y unidad de mercado»](https://drive.google.com/file/d/11xq0o8TLESDT7J2PLC_MVbZHGoqWmGa2/view?usp=drivesdk), que cubre A1-20 a A1-25: 3736–3737 y 3739–3740 corresponden a A1-25/A2-I-4; 3738, por el EBEP, se clasifica en A1-24/A2-I-8. Correspondencia oficial: A1, anexo I, [BOE-A-2025-25938](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938), temas 24–25; A2, anexo IX, [BOE-A-2025-26262](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262), temas I-4 e I-8, cotejados con [temario-oficial.json](temario-oficial.json) el 03-11-2026. El material Academy es guía de cobertura, no evidencia jurídica.

Comprobaciones: inventario de 12.123 preguntas, cero errores (los grupos duplicados/candidatos automáticos no equivalen a revisión individual); verificador de ${n} registros sin errores y ${left} aún por revisar individualmente; git diff --check limpio.

`;
const file=path.join(dir,'README.md');let s=fs.readFileSync(file,'utf8');s=s.replace(/Último lote secuencial aplicado:[^\r\n]*/,summary);if(!s.includes('## Lote 684 —'))s=s.replace('## Lote 683 —',section+'## Lote 683 —');fs.writeFileSync(file,s);console.log(`README actualizado: ${n} revisadas; ${left} pendientes; ${changed} cambios sustantivos.`);
