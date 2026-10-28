const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-339.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 web:{url:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',label:'ITIC Academy, Bloque 30 Tecnologías de Sistemas de la Información, edición 2026.1 (31-08-2026)'},
 os:{url:'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk',label:'ITIC Academy, Bloque 27 Sistemas Operativos, edición 2026.1 (14-08-2026)'},
 uml:{url:'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk',label:'ITIC Academy, Bloque 38 Análisis, Diseño y Construcción de Sistemas de Información, edición 2026.1 (18-09-2026)'},
 protocols:{url:'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',label:'ITIC Academy, Bloque 43 Protocolos, edición 2026.1 (29-09-2026)'},
 dms:{url:'https://drive.google.com/file/d/17UpEFvYfjQ4iUrx8UNNTJIFcj5xO4vlz/view?usp=drivesdk',label:'ITIC Academy, Bloque 40 Gestión Documental, edición 2026.1 (23-09-2026)'}
};
const map={
 2011:{doc:'web',topics:['A1-65','A2-II-9'],detail:'incluye scripts de cliente y servidor, ASP y lenguajes de scripting; PerlScript se trata únicamente como antecedente histórico.'},
 2012:{doc:'os',topics:['A1-59','A2-II-2'],detail:'cubre fundamentos y administración de UNIX/Linux; la semántica exacta de redirección se verifica en la documentación de la shell.'},
 2013:{doc:'uml',topics:['A1-88','A2-III-9'],detail:'incluye análisis y diseño orientado a objetos, proceso unificado y UML; la taxonomía de diagramas se comprueba en OMG.'},
 2014:{doc:'protocols',topics:['A1-108','A2-II-8'],detail:'cubre arquitecturas y protocolos de red, incluido OSI; se deja sin validar la denominación «ONS» por falta de fuente primaria inequívoca.'},
 2015:{doc:'dms',topics:['A1-104','A2-II-16'],detail:'cubre sistemas de gestión documental y de contenidos; no establece una arquitectura universal de almacenamiento.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q?.revision&&m,`Falta cotejo ${c.id}`);assert.deepEqual(q.clasificacion.A1,m.topics.filter(t=>t.startsWith('A1-')));assert.deepEqual(q.clasificacion.A2,m.topics.filter(t=>t.startsWith('A2-')));assert.ok(m.topics.every(t=>official.has(t)));const d=docs[m.doc];q.clasificacion.bloque_academia=`${d.label}; ${m.detail}`;q.clasificacion.nota=`Correspondencia contrastada con revision/temario-oficial.json y las convocatorias vigentes: A1 BOE-A-2025-25938 y A2 BOE-A-2025-26262. El temario académico contextualiza los epígrafes, no sustituye la fuente primaria. ${c.actualizada.revision.observaciones}`;q.revision.observaciones=q.clasificacion.nota;q.comentarios=q.clasificacion.nota;q.revision.fuentes.push({url:d.url,referencia:`${d.label}; cotejo del contenido del tema y su relación curricular.`});c.actualizada=structuredClone(q);}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo académico, temario oficial y convocatorias actualizado para IDs 2011–2015.');
