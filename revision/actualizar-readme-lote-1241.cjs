const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const dir=__dirname,dataFile=path.join(dir,'..','preguntas_preparatic.json'),logFile=path.join(dir,'cambios-lote-1241.json');
const inv=JSON.parse(fs.readFileSync(path.join(dir,'inventario.json'),'utf8'));
const data=JSON.parse(fs.readFileSync(dataFile,'utf8')),log=JSON.parse(fs.readFileSync(logFile,'utf8'));
const entries={
 6526:'Cotejo con ITIC Academy, bloque 39 «Calidad y mantenimiento», edición 2026: trata el modelo EFQM y la evaluación de la calidad. Se identifica expresamente que los rótulos «Agentes Facilitadores/Resultados» pertenecen al modelo histórico de nueve criterios, no al marco vigente.',
 6527:'Cotejo con ITIC Academy, bloque 17 (MÉTRICA v3) y bloque 38 «Análisis, diseño y construcción de sistemas de información», edición 2026: el primero ubica metodología y el segundo UML/análisis OO. La descripción exacta del modelo de clases se comprueba en el manual oficial.',
 6528:'Cotejo con ITIC Academy, bloque 39 «Calidad y mantenimiento», edición 2026: contexto de EFQM y calidad; la lista de conceptos se fecha como formulación histórica 2013 y se contrasta con EFQM actual.',
 6529:'Cotejo con ITIC Academy, bloque 41 «ITIL y COBIT», edición 2026: A1-106 cubre gestión de servicios y conceptos de ITIL; el literal de la definición se contrasta con el glosario oficial ITIL 4/PeopleCert.',
 6530:'Cotejo con ITIC Academy, bloque 17 (MÉTRICA v3) y bloque 38 (análisis de sistemas), edición 2026. El manual público confirma requisitos de seguridad durante el análisis y PAe distingue MAGERIT como metodología complementaria de gestión de riesgos.'
};
for(const [key,note] of Object.entries(entries)){
 const id=Number(key),q=data.preguntas.find(x=>x.id===id),c=log.cambios.find(x=>x.id===id);assert.ok(q&&c,`Falta ${id}`);
 q.clasificacion.bloque_academia=note;q.clasificacion.nota=note;c.actualizada.clasificacion.bloque_academia=note;c.actualizada.clasificacion.nota=note;
 c.actualizada.revision.fuentes=structuredClone(q.revision.fuentes);c.actualizada.revision.observaciones=q.revision.observaciones;
}
fs.writeFileSync(dataFile,JSON.stringify(data,null,2)+'\n');fs.writeFileSync(logFile,JSON.stringify(log,null,2)+'\n');

const file=path.join(dir,'README.md');let text=fs.readFileSync(file,'utf8');
const fmt=n=>n.toLocaleString('es-ES'),examined=inv.total-inv.estados.sin_revisar,verified=inv.estados.vigente+inv.estados.corregida+inv.estados.historica,pending=inv.estados.pendiente_fuente+inv.estados.pendiente_ambiguedad;
text=text.replace(/Último lote secuencial:.*?sin revisar individualmente\./,`Último lote secuencial: 1241 (IDs 6526–6530). Acumulado: ${fmt(examined)} preguntas examinadas individualmente; ${fmt(verified)} verificadas (${fmt(inv.estados.vigente)} vigentes, ${fmt(inv.estados.corregida)} corregidas y ${fmt(inv.estados.historica)} históricas); ${fmt(pending)} pendientes documentadas (${fmt(inv.estados.pendiente_fuente)} de fuente y ${fmt(inv.estados.pendiente_ambiguedad)} de ambigüedad); ${fmt(inv.estados.sin_revisar)} sin revisar individualmente.`);
const section=`## Lote 1241 — 13 de noviembre de 2026

Revisadas individualmente las preguntas 6526–6530. Se acotaron dos preguntas EFQM a sus formulaciones históricas de nueve criterios y conceptos fundamentales para evitar proyectarlas sobre el modelo actual. Se precisó el producto UML de clase de MÉTRICA v3, se fechó la definición de gestión de servicios como ITIL 4 y se separó la interfaz de Seguridad de los requisitos de seguridad que ya se consideran en el análisis; MAGERIT se mantuvo como metodología complementaria de riesgos. Se conservaron originales y trazabilidad y se cotejó el material de ITIC Academy en Drive con los programas oficiales A1/A2.

- **6526 — EFQM, agentes/resultados:** respuesta corregida C. En el modelo histórico de nueve criterios, «Resultados en las personas» es resultado; liderazgo y política/estrategia son agentes facilitadores. El marco actual EFQM es distinto. A1-103/A2-III.13; Academy, bloque 39. Estado histórico.
- **6527 — MÉTRICA v3/UML:** respuesta corregida A. El diagrama de clases expresa estructura estática en el análisis OO; «diagrama de estructura» es una categoría general. A1-95/A2-III.9; Academy, bloques 17 y 38.
- **6528 — conceptos EFQM:** respuesta histórica D. La formulación de conceptos EFQM 2013 no incluye planificar exclusivamente a corto plazo; se fecha para no confundirla con el modelo actual. A1-103/A2-III.13; Academy, bloque 39. Estado histórico.
- **6529 — definición ITIL 4:** respuesta corregida B: capacidades organizacionales especializadas. Se acota a ITIL 4 Foundation. A1-106; no se fuerza tema A2. Academy, bloque 41.
- **6530 — seguridad en MÉTRICA:** respuesta corregida A. La interfaz aporta mecanismos adicionales, mientras que el análisis recoge requisitos de seguridad; MAGERIT complementa la gestión de riesgos. A1-95/A1-47/A2-III.2/II.10; Academy, bloques 17 y 38.

Fuentes: [EFQM, historia](https://efqm.org/our-history/) y [modelo vigente](https://efqm.org/the-efqm-model/); [EFQM Excellence Model 2013, folleto histórico](https://www.academia.edu/40576527/EFQM_EXCELLENCE_MODEL_Excellent_Organisati_ons_achieve_and_sustain_outstanding_levels_of_performance_that_meet_or_exceed_the_expectati_ons_of_all_their_stakeholders); [MÉTRICA v3, Análisis del Sistema de Información](https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Aad870327-56b7-4dfa-af15-e62222f45b90/METRICA_V3_Analisis_del_Sistema_de_Informacion.pdf) y [catálogo PAe de metodologías](https://administracionelectronica.gob.es/documentacion/metodologias-guias); [PeopleCert, glosario ITIL 4](https://www.peoplecert.org/-/media/peoplecert/images/landing-pages/devops-launch-indian/peoplecert-devops-fundamentals.pdf); [PAe, MAGERIT v3](https://administracionelectronica.gob.es/ctt/verIniciativaPInfoAdificinal.htm?idIniciativa=magerit&idioma=es). Correspondencias oficiales: [A1 GSI 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938) y [A2 GSI 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262). Cotejo Drive: [ITIC Academy, bloque 39](https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk), [bloque 17](https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view?usp=drivesdk), [bloque 38](https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk) y [bloque 41](https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk). Los documentos de academia sirven para encaje curricular, no sustituyen a las fuentes primarias.

Inventario local: ${fmt(examined)} examinadas; ${fmt(verified)} verificadas (${fmt(inv.estados.vigente)} vigentes, ${fmt(inv.estados.corregida)} corregidas y ${fmt(inv.estados.historica)} históricas); ${fmt(pending)} pendientes (${fmt(inv.estados.pendiente_fuente)} de fuente y ${fmt(inv.estados.pendiente_ambiguedad)} de ambigüedad); ${fmt(inv.estados.sin_revisar)} sin revisar; errores estructurales ${inv.errores_estructurales.length}. Ejecutados inventario.cjs, verificar.cjs y git diff --check. Las restantes ${fmt(inv.estados.sin_revisar)} preguntas continúan idénticas al original. Pendiente verificar la publicación del lote.

`;
assert.ok(text.includes('## Lote 1240 —'));
const start=text.indexOf('## Lote 1241 —'),at=text.indexOf('## Lote 1240 —');
text=start>=0?text.slice(0,start)+section+text.slice(at):text.slice(0,at)+section+text.slice(at);
fs.writeFileSync(file,text);console.log(`README actualizado: ${examined} examinadas, ${verified} verificadas, ${pending} pendientes; ${inv.estados.sin_revisar} sin revisar.`);
