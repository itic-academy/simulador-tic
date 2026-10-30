const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bankPath=path.join(__dirname,'..','preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-584.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 web:{url:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',label:'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información, versión 2026.1'},
 soa:{url:'https://docs.google.com/document/d/1ZwZ2asNDNfv6NhMeoJa_gCuy5i681jLR/edit?usp=drivesdk',label:'ITIC Academy, bloque 28 Arquitectura SOA y requisitos no funcionales, versión 2026.1'},
 db:{url:'https://docs.google.com/document/d/16itbf_Mo8uQ4MKEEX2V-VFMEwyeL7n3F/edit?usp=drivesdk',label:'ITIC Academy, bloque 29 Bases de datos, SQL y modelado, versión 2026.1'},
 mobile:{url:'https://drive.google.com/file/d/1nXa2jkiUqpu31smkt5D8WswcTgEN7XlB/view?usp=drivesdk',label:'ITIC Academy, bloque 47 Aplicaciones móviles y sistemas operativos, versión 2026'},
 web2025:{url:'https://drive.google.com/file/d/1zk8UbyZCGo2GZrgnrA4aiwQxa8zi6S7U/view?usp=drivesdk',label:'ITIC Academy, Temas 065–077 y 072 generación de informes, versión 2025'}
};
const mappings={
 3236:{A1:['A1-65'],A2:['A2-III-12','A2-II-9'],doc:docs.web,detail:'el bloque 30 cubre tecnologías web, XML e interoperabilidad; el alcance técnico de WSDL se comprueba en la recomendación W3C citada.'},
 3237:{A1:['A1-58'],A2:['A2-II-6','A2-III-12'],doc:docs.soa,detail:'el bloque 28 estudia expresamente la arquitectura SOA y servicios web. La pregunta se acota al principio de reutilización; la versión previa confundía principios, valores y atributos transversales.'},
 3238:{A1:['A1-72'],A2:['A2-II-5'],doc:docs.web2025,detail:'el bloque 30 relaciona ERP/CRM y generación de informes; la pregunta queda como referencia histórica a Kugar en KOffice, no como recomendación de una aplicación vigente.'},
 3239:{A1:['A1-124'],A2:['A2-II-2'],doc:docs.mobile,detail:'el bloque 47 cubre aplicaciones móviles y sistemas operativos. Los elementos de manifest y configuración de API se verifican con documentación actual de Android Developers.'},
 3240:{A1:['A1-64'],A2:['A2-II-5'],doc:docs.db,detail:'el bloque 29 desarrolla bases de datos y SQL; el funcionamiento de la agrupación y HAVING se confirma en la documentación actual de PostgreSQL.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=mappings[c.id];assert.ok(q?.revision&&m,`Falta cotejo ${c.id}`);
 for(const id of [...m.A1,...m.A2])assert.ok(official.has(id),`Tema no oficial ${id}`);
 const academy=`${m.doc.label}; ${m.detail}`;
 const callout='Correspondencia contrastada con revision/temario-oficial.json y los anexos I/IX de las convocatorias GSI más recientes, publicadas en 2025 (A1: BOE-A-2025-25938; A2: BOE-A-2025-26262). No se halló convocatoria GSI posterior a 30/10/2026 en BOE; la oferta de empleo público 2026 no sustituye por sí sola las bases/temario de un proceso selectivo.';
 q.clasificacion={A1:m.A1,A2:m.A2,bloque_academia:`${academy} ${m.doc.url}`,estado:'revisada',nota:`${q.revision.estado}. ${callout}`};
 q.revision.observaciones+=` Cotejo académico y oficial: ${academy} ${callout}`;
 q.revision.fuentes.push({url:m.doc.url,referencia:`${m.doc.label}; encaje curricular descrito en bloque_academia.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo Academy, temas oficiales y convocatorias vigentes a 30/10/2026: 5/5.');
