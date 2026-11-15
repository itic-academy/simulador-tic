const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),file=path.join(root,'preguntas_preparatic.json');
const bank=JSON.parse(fs.readFileSync(file,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1400.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 qa:{url:'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',title:'ITIC Academy, bloque 39 Calidad y Mantenimiento, edición 2026',detail:'Cotejo del contenido general de pruebas y calidad (A1-96/A2-III-7). La distinción entre estrategia incremental y big-bang se fundamenta específicamente en el glosario ISTQB.'},
 standards:{url:'https://drive.google.com/file/d/1HKwUIuFhm-wVG0e8kZfFm1R8qI1rGS2G/view?usp=drivesdk',title:'ITIC Academy, Normalización A1-50/A2-C8-C11, edición 2026',detail:'Cotejo del marco de normalización e interoperabilidad; la expansión y el alcance histórico de X/Open CAE se verifican con fuentes técnicas de X/Open/The Open Group.'},
 odf:{url:null,title:'Búsqueda de material específico OpenDocument/ODF/ODT en ITIC Academy/Drive (15-11-2026)',detail:'No se localizó un documento 2026 directamente identificable sobre la relación entre tipo MIME OpenDocument y extensión ODT. La cobertura se clasifica en el programa oficial A1-69/A1-50; la respuesta se prueba con la especificación OASIS, sin asignar un documento de aproximación como fuente directa.'},
 ai:{url:'https://drive.google.com/file/d/1B7efg_M6ZhKbQz8h4KJj_ow0BMgV6-le/view?usp=drivesdk',title:'ITIC Academy, temas 70 y 71 Inteligencia Artificial y Ciencia de Datos, edición 2024',detail:'Cotejo curricular de IA y redes neuronales (A1-70/A2-III-5). El material identificado es edición 2024 y se registra como apoyo curricular, no como fuente normativa vigente; la respuesta se contrasta con literatura especializada.'},
 clave49:{url:'https://drive.google.com/file/d/1NWEg_hd3iDIC0kIitK-u8BpmJ20Jecmw/view?usp=drivesdk',title:'ITIC Academy, tema 49 Servicios Comunes A1/A2, edición 2026',detail:'Cotejo de Cl@ve como infraestructura/servicio común (A1-49/A2-I-10); los detalles de SAML se verifican directamente con la documentación técnica oficial del PAe/CTT.'},
 clave50:{url:'https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk',title:'ITIC Academy, bloque 50 Videoconferencia, SSO y trabajo colaborativo, versión 2026.1',detail:'El índice actualizado incluye federación de identidades, SAML, Cl@ve y OpenID Connect, con análisis de materiales de integración; se coteja curricularmente A1-131, sin sustituir la documentación oficial del PAe/CTT.'}
};
const assignments={7301:docs.qa,7302:docs.standards,7303:docs.odf,7304:docs.ai,7305:docs.clave49};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id);assert.ok(q?.revision,`Falta revisión ${c.id}`);
 for(const id of [...q.clasificacion.A1,...q.clasificacion.A2])assert.ok(official.has(id),`Tema oficial inválido: ${id}`);
 const doc=assignments[c.id];assert.ok(doc);
 const note=`Cotejo curricular ITIC Academy/Drive: ${doc.title}. ${doc.detail}`;
 q.clasificacion.bloque_academia=note;q.clasificacion.nota=(q.clasificacion.nota+' '+note).trim();
 q.comentarios=(q.comentarios+' '+note).trim();q.revision.observaciones=(q.revision.observaciones+' '+note).trim();
 if(doc.url)q.revision.fuentes.push({url:doc.url,referencia:`${doc.title}; cotejo: ${doc.detail}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(file,JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo Academy/Drive registrado para 7301–7305; se documenta la ausencia de fuente ODF directa y la edición 2024 del bloque IA.');
