const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1122.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 bi:'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk',
 web:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',
 net:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',
 hw:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk'
};
const map={
 5931:{a1:[75],a2:['II-4'],doc:docs.bi,desc:'ITIC Academy, bloque 34, Business Intelligence y Big Data (versión 2026.1, 16-09-2026); incluye data warehouse, data marts y OLAP. Alineado con A1-75 y A2-II-4.'},
 5932:{a1:[65],a2:['III-6'],doc:docs.web,desc:'ITIC Academy, bloque 30, Tecnologías de sistemas de información (versión 2026.1, 31-08-2026); arquitectura y ciclo de aplicaciones web. Se asocia a A1-65 y A2-III-6 por despliegue.'},
 5933:{a1:[108],a2:['II-8'],doc:docs.net,desc:'ITIC Academy, bloque 42, Redes (versión 2026.1, 29-09-2026); direccionamiento, encaminamiento y protocolos. Alineado con A1-108 y A2-II-8.'},
 5934:{a1:[54],a2:['II-1'],doc:docs.hw,desc:'ITIC Academy, bloque 26, Hardware, servidores, CPD, almacenamiento y virtualización (versión 2026.1, 31-08-2026); asociación temática general con tecnologías de ordenadores. A1-54/A2-II-1; la clasificación generacional concreta se comprobó en referencias históricas externas, pues el epígrafe no fija una taxonomía.'},
 5935:{a1:[132],a2:['IV-6'],doc:docs.hw,desc:'ITIC Academy, bloque 26, Hardware, servidores, CPD, almacenamiento y virtualización (versión 2026.1, 31-08-2026); virtualización de servidores y sistemas. Alineado con A1-132 y A2-IV-6.'}
};
const topics=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q&&m,'Falta pregunta/mapeo '+c.id);for(const id of [...m.a1.map(x=>'A1-'+x),...m.a2.map(x=>'A2-'+x)])assert.ok(topics.has(id),id);q.clasificacion.A1=m.a1.map(n=>'A1-'+n);q.clasificacion.A2=m.a2.map(n=>'A2-'+n);const marker='Cotejo curricular ITIC Academy:';const trim=v=>{const raw=(v||'').trim(),i=raw.indexOf(marker);return(i<0?raw:raw.slice(0,i)).trim().replace(/^Bloque de academia pendiente de cotejo\. Una lista vacía no implica exclusión del programa\.?\s*/,'').trim();};const note='Cotejo curricular ITIC Academy: '+m.desc+' Temas oficiales asociados: '+[...q.clasificacion.A1,...q.clasificacion.A2].join('/')+'. El material de academia se usa para ubicar el contenido; las respuestas se comprobaron contra documentación primaria técnica.';q.clasificacion.bloque_academia=m.desc;q.clasificacion.nota=(trim(q.clasificacion.nota)+' '+note).trim();q.comentarios=(trim(q.comentarios)+' '+note).trim();q.revision.observaciones=(trim(q.revision.observaciones)+' '+note).trim();if(!q.revision.fuentes.some(f=>f.url===m.doc))q.revision.fuentes.push({url:m.doc,referencia:m.desc});c.actualizada=structuredClone(q);}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo curricular A1/A2 actualizado para IDs 5931–5935.');
