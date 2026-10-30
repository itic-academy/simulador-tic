const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bankPath=path.join(__dirname,'..','preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-585.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 tech:{url:'https://docs.google.com/document/d/11CEe-2aKTukr0w6e752_y5y-wWuy1bPH/edit?usp=drivesdk',label:'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información, versión 2026.1'},
 db:{url:'https://docs.google.com/document/d/16itbf_Mo8uQ4MKEEX2V-VFMEwyeL7n3F/edit?usp=drivesdk',label:'ITIC Academy, bloque 29 Bases de datos, SQL y modelado de datos, versión 2026.1'},
 os:{url:'https://docs.google.com/document/d/14SdBw2Ulrivnnp4sfwDa0bUsJVgqbAkt/edit?usp=drivesdk',label:'ITIC Academy, bloque 27 Sistemas Operativos, versión 2026.1'},
 data:{url:'https://docs.google.com/document/d/10DHrDJ7834oPAD2JR8S0dh0Yext_0Gwp/edit?usp=drivesdk',label:'ITIC Academy, bloque 34 Business Intelligence y Big Data, versión 2026.1'}
};
const mappings={
 3241:{A1:['A1-66'],A2:['A2-III-11','A2-II-5'],doc:docs.tech,detail:'el bloque 30 incluye la plataforma Microsoft .NET y su acceso a datos; el bloque 29 sitúa la conexión a los SGBD/SQL. Los nombres de componentes se comprueban en Microsoft Learn.'},
 3242:{A1:['A1-63'],A2:['A2-II-5','A2-IV-2'],doc:docs.db,detail:'el bloque 29 cubre arquitectura y administración de SGBD relacionales; el término, materialización física y refresco de Oracle se comprueban en la documentación oficial de Database 26.'},
 3243:{A1:['A1-65'],A2:['A2-II-3'],doc:docs.tech,detail:'el bloque 30 cubre herramientas y componentes del desarrollo web/JavaScript; la función de npm se confirma en su documentación oficial.'},
 3244:{A1:['A1-60'],A2:['A2-II-2'],doc:docs.os,detail:'el bloque 27 desarrolla sistemas operativos UNIX/Linux y entornos gráficos; el alcance actual de GNOME se contrasta con el propio proyecto.'},
 3245:{A1:['A1-71','A1-75'],A2:['A2-II-4','A2-III-15'],doc:docs.data,detail:'el bloque 34 cubre el ciclo ETL, integración de datos, inteligencia de negocio, almacenes y tecnologías Big Data; la edición/licencia de PDI se comprueba con fuentes de Pentaho y su repositorio.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=mappings[c.id];assert.ok(q?.revision&&m,`Falta cotejo ${c.id}`);
 for(const id of [...m.A1,...m.A2])assert.ok(official.has(id),`Tema no oficial ${id}`);
 const academy=`${m.doc.label}; ${m.detail}`;
 const callout='Clasificación contrastada con revision/temario-oficial.json y los programas de las convocatorias GSI de acceso libre más recientes identificadas en BOE (publicadas en diciembre de 2025): A1, BOE-A-2025-25938; A2, BOE-A-2025-26262. La OEP 2026 no sustituye el temario de una convocatoria específica.';
 q.clasificacion={A1:m.A1,A2:m.A2,bloque_academia:`${academy} ${m.doc.url}`,estado:'revisada',nota:`${q.revision.estado}. ${callout}`};
 q.revision.observaciones+=` Cotejo académico y oficial: ${academy} ${callout}`;
 q.revision.fuentes.push({url:m.doc.url,referencia:`${m.doc.label}; encaje curricular descrito en bloque_academia.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo Academy, temas oficiales y convocatoria GSI: 5/5.');
