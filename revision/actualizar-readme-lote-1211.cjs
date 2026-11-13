const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const old='Último lote secuencial: 1210 (IDs 6371–6375). Acumulado: 6.370 preguntas examinadas individualmente; 6.256 verificadas (1.239 vigentes, 4.559 corregidas y 458 históricas); 114 pendientes documentadas (45 de fuente y 69 de ambigüedad); 5.753 sin revisar individualmente.';
const neu='Último lote secuencial: 1211 (IDs 6376–6380). Acumulado: 6.375 preguntas examinadas individualmente; 6.261 verificadas (1.240 vigentes, 4.563 corregidas y 458 históricas); 114 pendientes documentadas (45 de fuente y 69 de ambigüedad); 5.748 sin revisar individualmente.';
const section=`## Lote 1211 — 13 de noviembre de 2026

Revisión individual de los IDs 6376–6380: cuatro preguntas corregidas y una vigente. Se conservan los originales completos en el registro del lote.

- **6376 — diagramas de comportamiento UML:** **corregida**, respuesta B. La clasificación UML 2.5.1 incluye actividad, máquina de estados, casos de uso e interacción. Se corrige la afirmación de que comunicación nació en UML 2.0 y la descripción imprecisa del diagrama global de interacción; el nuevo enunciado deja una única opción correcta.
- **6377 — GeneralizationSet:** **corregida**, respuesta D. El enunciado original confundía dos dimensiones ortogonales: cobertura (*complete/incomplete*) y disjunción (*disjoint/overlapping*). La versión corregida pregunta expresamente por los valores de la segunda propiedad.
- **6378 — tipo de diagrama:** **corregida**, respuesta B. Se elimina la cifra desactualizada de «13 tipos en UML 2.0» y se pregunta con referencia a la clasificación de comportamiento de UML 2.5.1.
- **6379 — eventos y vida de objetos:** **corregida**, respuesta D. Se conserva como distractor incorrecto el renombrado automático. La creación, los mensajes y el fin de vida se modelan en UML; no se afirma que la liberación física de memoria tenga idéntica mecánica en todos los lenguajes.
- **6380 — MÉTRICA v3:** **vigente**, respuesta A. DSI 9 diseña migración/carga inicial, CSI 8 construye los procedimientos e IAS 4 carga datos en operación.

Fuentes primarias/técnicas: [OMG UML 2.5.1, especificación normativa](https://www.omg.org/spec/UML/2.5.1/PDF), §§7.3, 9.7.4 (tabla 9.1), 12 y 17; [registro de la versión UML 2.5.1](https://www.omg.org/spec/UML/2.5.1/About-UML/); [OMG, clasificación general de diagramas](https://www.omg.org/UML/what-is-uml.htm); manuales oficiales MÉTRICA v3: [DSI](https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A7f366cd1-6759-42d9-9e0b-31edce0256d9/METRICA_V3_Diseno_del_Sistema_de_Informacion.pdf), [CSI](https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A19993efa-8c88-4205-b1a5-fb7fc0bd94de/METRICA_V3_Construccion_del_Sistema_de_Informacion.pdf) e [IAS](https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A507af1ff-0457-464d-b276-be26a8826b1c/METRICA_V3_Implantacion_y_Aceptacion_del_Sistema.pdf).

Convocatorias contrastadas: [GSI A1 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938), anexo I, temas 93 (UML/técnicas de diseño) y 95 (MÉTRICA); [GSI A2 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262), anexo IX, temas III-9 (UML) y III-2 (gestión y proceso de desarrollo/metodologías).

Cotejo curricular en Drive: el [bloque 38 de ITIC Academy, Análisis, Diseño y Construcción de Sistemas de Información, edición 2026.1](https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk) contiene el mapa UML para A1-93/A2-D9; el [Tema 093 de MÉTRICA v3](https://drive.google.com/file/d/1hPYYrCoVBKhiEgMaqVBi5mpdUEm4_vV5/view?usp=drivesdk) separa los procesos DSI, CSI e IAS. Son materiales académicos de cotejo curricular; no reemplazan a OMG, los manuales oficiales de MÉTRICA ni las convocatorias BOE. El texto de la convocatoria ubica las materias; no se afirma que las etiquetas temáticas sean exhaustivas de toda normativa posterior.

Se ejecutaron revisar-lote-1211.cjs, academia-lote-1211.cjs, inventario.cjs, verificar.cjs y git diff --check. Resultado del inventario: 12.123 preguntas, 6.375 examinadas individualmente; 6.261 verificadas (1.240 vigentes, 4.563 corregidas, 458 históricas), 114 pendientes documentadas (45 de fuente, 69 de ambigüedad), 5.748 todavía sin revisar individualmente; cero errores estructurales.

`;
assert.ok(s.includes(old),'Resumen anterior no coincide');assert.ok(s.includes('## Lote 1210 — 13 de noviembre de 2026'),'Sección 1210 ausente');
s=s.replace(old,neu).replace('## Lote 1210 — 13 de noviembre de 2026',section+'## Lote 1210 — 13 de noviembre de 2026');
fs.writeFileSync(file,s);console.log('README actualizado para lote 1211.');
