const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const old='Último lote secuencial: 1191 (IDs 6276–6280). Acumulado: 6.275 preguntas examinadas individualmente; 6.165 verificadas (1.211 vigentes, 4.505 corregidas y 449 históricas); 110 pendientes documentadas (45 de fuente y 65 de ambigüedad); 5.848 sin revisar individualmente.';
const neu='Último lote secuencial: 1192 (IDs 6281–6285). Acumulado: 6.280 preguntas examinadas individualmente; 6.170 verificadas (1.215 vigentes, 4.506 corregidas y 449 históricas); 110 pendientes documentadas (45 de fuente y 65 de ambigüedad); 5.843 sin revisar individualmente.';
const section=`## Lote 1192 — 13 de noviembre de 2026

Revisadas individualmente las preguntas 6281–6285: hipervisores tipo 2, categorías del empleo público, recursos contra la alzada, forma de los actos administrativos y función de la Comisión Europea. Todas quedan verificadas; se corrige la formulación temporalmente caducada del ítem de hipervisor.

- **6281 — hipervisor de tipo 2:** **corregida**, respuesta C. Un hipervisor alojado se ejecuta sobre un sistema operativo convencional; se elimina el antiguo distractor fechado en julio de 2023. A1-57/A1-132/A2-IV.6.
- **6282 — clases de empleados públicos:** **vigente**, respuesta B. El artículo 8.2 TREBEP enumera funcionarios de carrera e interinos, personal laboral (fijo, indefinido o temporal) y personal eventual. A1-24/A2-I-8.
- **6283 — resolución de alzada:** **vigente**, respuesta C. No cabe otro recurso administrativo ordinario; sí el extraordinario de revisión en causas tasadas del artículo 125.1, sin perjuicio de la vía jurisdiccional. A1-9/A2-I-8.
- **6284 — forma del acto administrativo:** **vigente**, respuesta C. La regla del art. 36.1 de la Ley 39/2015 es por escrito y por medios electrónicos, salvo que la naturaleza del acto exija otra forma. A1-8/A2-I-8.
- **6285 — Comisión Europea:** **vigente**, respuesta C. El artículo 17.1 TUE le atribuye promover el interés general de la Unión e impulsar iniciativas adecuadas. Se clasifica solo en A1-5: el programa A2 de la convocatoria cotejada no incluye este tema de instituciones de la UE.

Fuentes oficiales: [Oracle VM VirtualBox 7 User Manual, hipervisor alojado](https://download.virtualbox.org/virtualbox/7.0.10/UserManual.pdf), [TREBEP consolidado, art. 8](https://www.boe.es/buscar/act.php?id=BOE-A-2015-11719&lang=es&p=20250730&tn=1), [Ley 39/2015 consolidada a 1-10-2026](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565&lang=es&p=20261001&tn=1), [TUE consolidado en español, art. 17](https://eur-lex.europa.eu/eli/treaty/teu_2016/oj?locale=es).

Convocatorias cotejadas: [GSI A1 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938), anexo I, temas 5, 8, 9, 24, 57 y 132; [GSI A2 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262), anexo IX, temas I.8 e IV.6. El programa A2 no contiene tema específico sobre instituciones de la Unión Europea.

Cotejo curricular ITIC Academy (el programa acredita cobertura temática, no respuestas): [bloque 26 Hardware, servidores, CPD y virtualización](https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk), hipervisores tipo 1/2 y virtualización; [bloque 03 Actuación administrativa y Administración digital, versión 2026.2](https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk), Leyes 39/40, procedimiento, recursos, EBEP y clases de personal; [bloque 02 Unión Europea, versión 2026.2](https://drive.google.com/file/d/1KTz7CNz88u_4zyVLC2oYQBnmJRHIG7J7/view?usp=drivesdk), instituciones y tratados, con nota expresa de que A2 no aplica.

Ejecutados revisar-lote-1192.cjs, academia-lote-1192.cjs, inventario.cjs, verificar.cjs y git diff --check. Inventario esperado: 12.123 preguntas; 6.280 examinadas; 6.170 verificadas; 110 pendientes documentadas; 5.843 sin revisar individualmente; cero errores estructurales.

`;
assert.ok(s.includes(old),'El resumen previo no coincide con lote 1191');
assert.ok(s.includes('## Lote 1191 — 13 de noviembre de 2026'),'No se encontró la sección 1191');
s=s.replace(old,neu).replace('## Lote 1191 — 13 de noviembre de 2026',section+'## Lote 1191 — 13 de noviembre de 2026');
fs.writeFileSync(file,s);console.log('README actualizado para lote 1192.');
