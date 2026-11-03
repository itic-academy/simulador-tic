const fs=require('node:fs'),path=require('node:path'),dir=__dirname;
const totals={vigente:0,corregida:0,historica:0,pendiente_fuente:0,pendiente_ambiguedad:0};let changed=0;
for(const f of fs.readdirSync(dir).filter(f=>/^cambios-lote-\d+\.json$/.test(f)))for(const c of JSON.parse(fs.readFileSync(path.join(dir,f),'utf8')).cambios){totals[c.actualizada.revision.estado]++;if(['texto','opciones','respuesta_correcta'].some(k=>JSON.stringify(c.original[k])!==JSON.stringify(c.actualizada[k])))changed++;}
const n=Object.values(totals).reduce((a,b)=>a+b,0),verified=totals.vigente+totals.corregida+totals.historica,pending=totals.pendiente_fuente+totals.pendiente_ambiguedad,left=12123-n;
const summary=`Último lote secuencial aplicado: 685 (IDs 3741–3745). Acumulado: ${n} preguntas examinadas individualmente, ${verified} verificadas (${totals.vigente} vigentes, ${totals.corregida} corregidas y ${totals.historica} históricas) y ${pending} pendientes documentadas (${totals.pendiente_fuente} de fuente y ${totals.pendiente_ambiguedad} de ambigüedad); quedan ${left} sin revisar individualmente. Hay ${changed} preguntas con cambios en enunciado, opciones o clave frente al original, comparando registros completos.`;
const section=`## Lote 685 — 3 de noviembre de 2026

IDs 3741–3745 revisados individualmente; originales conservados en [cambios-lote-685.json](cambios-lote-685.json). Cuatro se corrigen y una se confirma:
- **3741 — infracciones de buen gobierno:** se citan las categorías exactas: acoso laboral (art. 29.1.k, muy grave); no rendir cuentas (art. 28.p, muy grave económico-presupuestaria); intervención pese a causa de abstención (art. 29.2.b, grave). **Corregida.** A1-25/A2-I-4.
- **3742 — ámbito subjetivo:** se aclara que la Casa de Su Majestad el Rey está comprendida solo respecto de actividades sujetas a Derecho Administrativo. **Corregida.** A1-25/A2-I-4.
- **3743 — Estatuto del Consejo:** actualmente lo aprueba el RD 615/2024, que derogó el RD 919/2014. Se deja constancia de que el programa A1 de la convocatoria de 2025 todavía cita el decreto anterior. **Corregida.** A1-25/A2-I-4.
- **3744 — gratuidad y plazo:** se precisa que el acceso es gratuito, aunque copias o cambio de formato pueden generar exacciones; la resolución es en un mes, prorrogable otro mes por volumen/complejidad con aviso. **Corregida.** A1-25/A2-I-4.
- **3745 — Consejo de Transparencia:** se confirma que está regulado en el título III (arts. 33–40) de la Ley 19/2013. **Vigente.** A1-25/A2-I-4.

Fuentes primarias: BOE, [Ley 19/2013 consolidada](https://www.boe.es/buscar/act.php?id=BOE-A-2013-12887), arts. 2, 20, 22, 28, 29 y 33–40; [RD 615/2024](https://www.boe.es/buscar/doc.php?id=BOE-A-2024-15944), estatuto vigente y derogación expresa del RD 919/2014.

Cotejo curricular: ITIC Academy, [bloque 7 «Dirección pública, empleo, transparencia y unidad de mercado»](https://drive.google.com/file/d/11xq0o8TLESDT7J2PLC_MVbZHGoqWmGa2/view?usp=drivesdk), cobertura directa A1-25. Correspondencia oficial: A1, anexo I, [BOE-A-2025-25938](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938), tema 25; A2, anexo IX, [BOE-A-2025-26262](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262), tema I-4, cotejados con [temario-oficial.json](temario-oficial.json) el 03-11-2026. El programa A1-2025 conserva una mención obsoleta al RD 919/2014; para la norma vigente se aplica el RD 615/2024. Academy sirve como guía de cobertura, no como prueba legal.

Comprobaciones: inventario de 12.123 preguntas, cero errores (grupos repetidos/candidatos automáticos no equivalen a revisión individual); verificador de ${n} registros sin errores y ${left} pendientes; git diff --check limpio.

`;
const file=path.join(dir,'README.md');let s=fs.readFileSync(file,'utf8');s=s.replace(/Último lote secuencial aplicado:[^\r\n]*/,summary);if(!s.includes('## Lote 685 —'))s=s.replace('## Lote 684 —',section+'## Lote 684 —');fs.writeFileSync(file,s);console.log(`README actualizado: ${n} revisadas; ${left} pendientes; ${changed} cambios sustantivos.`);
