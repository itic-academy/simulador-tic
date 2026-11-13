const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const old='Último lote secuencial: 1192 (IDs 6281–6285). Acumulado: 6.280 preguntas examinadas individualmente; 6.170 verificadas (1.215 vigentes, 4.506 corregidas y 449 históricas); 110 pendientes documentadas (45 de fuente y 65 de ambigüedad); 5.843 sin revisar individualmente.';
const neu='Último lote secuencial: 1193 (IDs 6286–6290). Acumulado: 6.285 preguntas examinadas individualmente; 6.175 verificadas (1.218 vigentes, 4.508 corregidas y 449 históricas); 110 pendientes documentadas (45 de fuente y 65 de ambigüedad); 5.838 sin revisar individualmente.';
const section=`## Lote 1193 — 13 de noviembre de 2026

Revisadas individualmente las preguntas 6286–6290: vacaciones de funcionariado en permisos protegidos, atribuciones del Rey, plazo de alzada, especialidades procedimentales y prohibiciones LCSP. Todas quedan verificadas; se corrigen dos enunciados, y se detectó y reparó una pregunta LCSP con dos respuestas legalmente correctas en su versión original.

- **6286 — vacaciones y maternidad/embarazo/lactancia:** **corregida**, respuesta C. El disfrute puede pasar del año natural y el art. 50.2 TREBEP fija un máximo de 18 meses desde el final del año de origen. A1-24/A2-I-8.
- **6287 — facultades del Rey:** **vigente**, respuesta C. El art. 62.c CE atribuye la convocatoria de referéndum en los casos constitucionales; para el consultivo del art. 92.2 median propuesta presidencial y autorización del Congreso. A1-1/A2-I-1.
- **6288 — plazo de alzada:** **vigente**, respuesta B. Un mes si el acto es expreso; frente al presunto, el art. 122.1 permite recurrir desde el día siguiente a la producción del silencio. A1-9/A2-I-8.
- **6289 — especialidades procedimentales:** **vigente**, respuesta B. El art. 1.2 Ley 39/2015 permite por reglamento establecer las especialidades enumeradas; trámites adicionales o distintos quedan reservados a ley bajo requisitos. A1-8/A2-I-8.
- **6290 — prohibiciones de contratar:** **corregida**, respuesta A a la pregunta reformulada sobre la letra d) del art. 71.1. El original admitía al menos dos respuestas: impago tributario/Seguridad Social (letra d) y falsedad (letra e). Se distingue además el art. 65, requisitos de aptitud, solvencia o clasificación, del catálogo del art. 71. Se asigna solo A1-11, sin equivalente A2.

Fuentes oficiales: [TREBEP consolidado, art. 50](https://www.boe.es/buscar/act.php?id=BOE-A-2015-11719&lang=es&p=20261003&tn=1), [LO 3/2007, DA 19.ª](https://www.boe.es/buscar/act.php?id=BOE-A-2007-6115&lang=es&p=20240802&tn=1), [Constitución Española consolidada, arts. 62 y 92](https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229&lang=es&p=20260520&tn=1), [Ley 39/2015 consolidada a 1-10-2026, arts. 1.2 y 122.1](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565&lang=es&p=20261001&tn=1), [LCSP consolidada, arts. 65 y 71](https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902&p=20251226&tn=1).

Convocatorias cotejadas: [GSI A1 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938), anexo I, temas 1, 8, 9, 11 y 24; [GSI A2 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262), anexo IX, temas I.1 e I.8. La contratación pública (A1-11) no tiene equivalente explícito en el programa A2 cotejado.

Cotejo curricular ITIC Academy (cobertura temática, no comprobación de respuestas): [bloque 03 Actuación administrativa y Administración digital, versión 2026.2](https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk), EBEP y procedimientos, recursos y actos (6286, 6288–6289); [bloque 01 Constitución, organización del Estado y AGE, versión 2026.2](https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk), Corona y referéndum (6287); [bloque 05 Contratación, presupuestos y compra TIC, versión 2026.2](https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk), LCSP y prohibiciones (6290), sin equivalente A2.

Ejecutados revisar-lote-1193.cjs, academia-lote-1193.cjs, inventario.cjs, verificar.cjs y git diff --check. Inventario esperado: 12.123 preguntas; 6.285 examinadas; 6.175 verificadas; 110 pendientes documentadas; 5.838 sin revisar individualmente; cero errores estructurales.

`;
assert.ok(s.includes(old),'El resumen previo no coincide con lote 1192');
assert.ok(s.includes('## Lote 1192 — 13 de noviembre de 2026'),'No se encontró la sección 1192');
s=s.replace(old,neu).replace('## Lote 1192 — 13 de noviembre de 2026',section+'## Lote 1192 — 13 de noviembre de 2026');
fs.writeFileSync(file,s);console.log('README actualizado para lote 1193.');
