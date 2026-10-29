const fs=require('node:fs');
const file='revision/README.md',s=fs.readFileSync(file,'utf8');
const summary='Estado parcial, no revisión completa del banco. Publicación desde la rama `main`. Último lote secuencial aplicado: 518 (IDs 2906–2910). Acumulado: 2910 preguntas examinadas individualmente, 2838 verificadas (612 vigentes, 1990 corregidas y 236 históricas) y 72 pendientes documentadas (34 de fuente y 38 de ambigüedad); quedan 9213 sin revisar individualmente. Hay 2292 preguntas con cambios en enunciado, opciones o clave respecto del original, calculado comparando esos campos en los registros completos. Inventario estructural no equivale a revisión de contenido.';
const section=[
'## Lote 518 — 29 de octubre',
'',
'IDs 2906–2910 revisados individualmente con la Constitución Española consolidada y la Ley 7/1985 vigentes; cotejo de material de ITIC Academy en Drive. Se conservan los cinco originales en [cambios-lote-518.json](cambios-lote-518.json).',
'',
'- **2906 — partidos políticos:** el artículo 6 CE los define como instrumento fundamental para la participación política. Se reescribe la pregunta con concordancia y cita expresa del artículo. A1-1/A2-I-1; Academy, Bloque 01.',
'- **2907 — Título V CE:** comprende los artículos 108–116; comienza tras el artículo 107, del Título IV. Se añade el rótulo oficial para ubicar el intervalo. A1-1/A2-I-2/I-3; Academy, Bloque 01.',
'- **2908 — límites provinciales:** su alteración requiere ley orgánica de las Cortes Generales, conforme al artículo 141.1 CE. A1-3; el programa A2 GSI consultado no incluye el contenido territorial específico.',
'- **2909 — competencias autonómicas:** asistencia social es materia asumible por las comunidades autónomas (art. 148.1.20.ª); las otras opciones son competencias exclusivas estatales (art. 149.1.13.ª y 26.ª). A1-3; no se fuerza etiqueta A2 al no aparecer ese contenido en su programa vigente.',
'- **2910 — organización municipal:** la opción incorrecta es que alcalde, tenientes de alcalde y pleno solo existen sobre 5.000 habitantes; la Ley 7/1985, art. 20.1.a, los establece en todos los ayuntamientos. Se aclara además el umbral y los supuestos de Junta de Gobierno Local (art. 20.1.b) y la Comisión Especial de Cuentas para todos los municipios (art. 116). A1-3; Academy, Bloque 01; sin etiqueta A2 específica de régimen local en el programa consultado.',
'',
'Fuentes primarias: [Constitución Española consolidada en BOE](https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229&p=20260520), arts. 6, 108–116, 141.1, 148 y 149; [Ley 7/1985 consolidada en BOE](https://www.boe.es/eli/es/l/1985/04/02/7/con), arts. 20 y 116; [convocatoria A2 GSI 2025, BOE-A-2025-26262, anexo IX](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262), programa I. La convocatoria A2 se ha contrastado para no asignar a su temario un contenido local que no incluye.',
'',
'Cotejo curricular en Drive: [Bloque 01 Constitución, organización del Estado y AGE, versión 2026.2 (01-10-2026)](https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk). La academia orienta la clasificación curricular; las respuestas se fundamentan en textos oficiales.',
'',
'`inventario.cjs` y `verificar.cjs` se ejecutaron tras el lote: 12.123 preguntas, cero errores; 2.910 revisadas individualmente, 2.838 verificadas, 72 pendientes documentadas y 9.213 sin revisión de contenido. El inventario estructural no acredita revisión individual.',
'',
'## Lote 517 — 29 de octubre'
].join('\n');
if(!s.includes('## Lote 517 — 29 de octubre'))throw Error('No se halló el lote 517.');
fs.writeFileSync(file,s.replace(/^Estado parcial,.*$/m,summary).replace('## Lote 517 — 29 de octubre',section).trimEnd()+'\n');console.log('README actualizado para el lote 518.');
