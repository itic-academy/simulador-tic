const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bankPath=path.join(__dirname,'..','preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-586.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 gis:{url:'https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view?usp=drivesdk',label:'ITIC Academy, bloque 33 Temas 73–74, E-Learning y GIS, versión 2026.1 (25-08-2026)'},
 data:{url:'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk',label:'ITIC Academy, bloque 34 Business Intelligence y Big Data, versión 2026.1'},
 db:{url:'https://docs.google.com/document/d/16itbf_Mo8uQ4MKEEX2V-VFMEwyeL7n3F/edit?usp=drivesdk',label:'ITIC Academy, bloque 29 Bases de datos, SQL y modelado de datos, versión 2026.1'},
 management:{url:'https://drive.google.com/file/d/1fti1UIhEIqK3pY8GBENi-4rTKwoEG8tF/view?usp=drivesdk',label:'ITIC Academy, bloque 12 Directivo TIC y planificación estratégica, versión 2026.2 (02-10-2026)'},
 tech:{url:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',label:'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información, versión 2026.1'}
};
const mappings={
 3246:{A1:['A1-74'],A2:['A2-III-12'],doc:docs.gis,detail:'el material incluye un apartado de servicios OGC WMS y su operación GetCapabilities/GetMap; la obligatoriedad exacta se verifica con OGC 06-042.'},
 3247:{A1:['A1-75'],A2:['A2-II-4','A2-III-15'],doc:docs.data,detail:'el bloque aborda OLAP y análisis multidimensional; las operaciones concretas se contrastan con documentación de Microsoft e IBM.'},
 3248:{A1:['A1-33','A1-103'],A2:[],doc:docs.management,detail:'el bloque trata planificación/control de gestión, cuadros de mando e indicadores; AENOR es la fuente primaria para el título y estado de la UNE 66175.'},
 3249:{A1:['A1-63','A1-75'],A2:['A2-II-4','A2-III-4','A2-III-15'],doc:docs.data,detail:`el bloque desarrolla almacenes de datos, modelado dimensional y OLAP; se complementa con ${docs.db.label} (${docs.db.url}). La definición de tablas de hechos y dimensiones se fundamenta en Microsoft Learn.`},
 3250:{A1:['A1-76'],A2:['A2-III-4'],doc:docs.tech,detail:'el bloque de tecnologías web/semánticas ofrece el encaje de RDF/SPARQL; la definición normativa del lenguaje se basa en la recomendación W3C.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=mappings[c.id];assert.ok(q?.revision&&m,`Falta cotejo ${c.id}`);
 for(const id of [...m.A1,...m.A2])assert.ok(official.has(id),`Tema no oficial ${id}`);
 const academy=`${m.doc.label}; ${m.detail}`;
 const callout='Clasificación cotejada con revision/temario-oficial.json y anexos I/IX de las convocatorias GSI de acceso libre más recientes identificadas en BOE: A1, BOE-A-2025-25938; A2, BOE-A-2025-26262. La academia sirve de referencia curricular, no sustituye la fuente técnica primaria.';
 q.clasificacion={A1:m.A1,A2:m.A2,bloque_academia:`${academy} ${m.doc.url}`,estado:'revisada',nota:`${q.revision.estado}. ${callout}`};
 q.revision.observaciones+=` Cotejo académico y oficial: ${academy} ${callout}`;
 q.revision.fuentes.push({url:m.doc.url,referencia:`${m.doc.label}; relación curricular descrita en bloque_academia.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo Academy, temas oficiales A1/A2 y convocatorias: 5/5.');
