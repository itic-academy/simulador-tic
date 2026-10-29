const fs=require('node:fs');
const file='revision/README.md',s=fs.readFileSync(file,'utf8');
const summary='Estado parcial, no revisión completa del banco. Publicación desde la rama `main`. Último lote secuencial aplicado: 519 (IDs 2911–2915). Acumulado: 2915 preguntas examinadas individualmente, 2843 verificadas (613 vigentes, 1994 corregidas y 236 históricas) y 72 pendientes documentadas (34 de fuente y 38 de ambigüedad); quedan 9208 sin revisar individualmente. Hay 2296 preguntas con cambios en enunciado, opciones o clave respecto del original, calculado comparando esos campos en los registros completos. Inventario estructural no equivale a revisión de contenido.';
const section=[
'## Lote 519 — 29 de octubre',
'',
'IDs 2911–2915 revisados individualmente con textos consolidados del BOE; cotejo de los bloques de ITIC Academy en Drive. Los enunciados originales y cambios se conservan en [cambios-lote-519.json](cambios-lote-519.json).',
'',
'- **2911 — competencias estatales:** el artículo 149.1.18.ª CE atribuye al Estado las bases del régimen jurídico de las Administraciones y el estatutario funcionarial, además del procedimiento común y otras materias. Se ajusta el enunciado y se explica por qué la opción D coincide con la primera regla. A1-4/A2-I-8; Academy, Bloque 01.',
'- **2912 — jefatura superior de personal:** corresponde al Subsecretario del departamento, conforme al artículo 63.1.f de la Ley 40/2015. A1-4/A2-I-8; Academy, Bloque 01.',
'- **2913 — órganos directivos exteriores:** embajadores y representantes permanentes ante organizaciones internacionales, conforme al artículo 55.5 de la Ley 40/2015. A1-4/A1-6/A2-I-8; Academy, Bloque 01.',
'- **2914 — anulabilidad:** la infracción del ordenamiento, incluida la desviación de poder, hace anulable un acto (art. 48.1 Ley 39/2015); las opciones sobre omitir totalmente procedimiento o reglas esenciales de órganos colegiados y adquirir derechos sin requisitos esenciales son nulidad (art. 47). Se corrige la errata «prescindiendo». A1-8/A2-I-8; Academy, Bloque 03.',
'- **2915 — corporaciones de derecho público:** al ejercer funciones públicas atribuidas por ley o delegadas se rigen por normativa específica y, supletoriamente, por la Ley 39/2015 (art. 2.4). Se explica la diferencia entre delegación y cesión. A1-8/A2-I-8; Academy, Bloque 03.',
'',
'Fuentes primarias: [Constitución Española consolidada, art. 149.1.18.ª](https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229&p=20260520); [Ley 40/2015 consolidada](https://www.boe.es/eli/es/l/2015/10/01/40/con), arts. 55.5 y 63.1.f; [Ley 39/2015 consolidada](https://www.boe.es/eli/es/l/2015/10/01/39/con), arts. 2.4, 47 y 48. La clasificación A1/A2 se cotejó con los programas de las convocatorias [A1 BOE-A-2025-25938](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938) y [A2 GSI BOE-A-2025-26262](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262).',
'',
'Cotejo curricular en Drive: [Bloque 01 Constitución, organización del Estado y AGE, versión 2026.2](https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk); [Bloque 03 Procedimiento Administrativo Común, versión 2026](https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk). Los documentos de la academia sirven para relacionar cada pregunta con el temario; el contenido legal se comprueba con el BOE.',
'',
'`inventario.cjs` y `verificar.cjs` se ejecutaron tras el lote: 12.123 preguntas, cero errores; 2.915 revisadas individualmente, 2.843 verificadas, 72 pendientes documentadas y 9.208 sin revisión de contenido. El inventario estructural no acredita revisión individual.',
'',
'## Lote 518 — 29 de octubre'
].join('\n');
if(!s.includes('## Lote 518 — 29 de octubre'))throw Error('No se halló el lote 518.');
fs.writeFileSync(file,s.replace(/^Estado parcial,.*$/m,summary).replace('## Lote 518 — 29 de octubre',section).trimEnd()+'\n');console.log('README actualizado para el lote 519.');
