const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1123.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 hw:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',
 web:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',
 mail:'https://drive.google.com/file/d/1nHGBMG4P3il5v4hZ1-RKdHmGzUPiwqnA/view?usp=drivesdk',
 distributed:'https://docs.google.com/document/d/1ZwZ2asNDNfv6NhMeoJa_gCuy5i681jLR/edit?usp=drivesdk'
};
const map={
 5936:{a1:[132],a2:['IV-6'],doc:docs.hw,desc:'ITIC Academy, bloque 26, Hardware, servidores, CPD, almacenamiento y virtualización (versión 2026.1, 31-08-2026); virtualización de máquinas/sistemas. A1-132/A2-IV-6.'},
 5937:{a1:[52],a2:['II-1'],doc:docs.hw,desc:'ITIC Academy, bloque 26, Hardware (versión 2026.1, 31-08-2026), arquitecturas de ordenadores de altas prestaciones y procesamiento paralelo. A1-52/A2-II-1.'},
 5938:{a1:[65],a2:['III-12'],doc:docs.web,desc:'ITIC Academy, bloque 30, Tecnologías de sistemas de información (versión 2026.1, 31-08-2026), arquitectura y servidor web. Se conserva como conocimiento histórico de Apache 1.3; no se recomienda su directiva eliminada en 2.0.'},
 5939:{a1:[122],a2:['IV-13'],doc:docs.mail,desc:'ITIC Academy, bloque 45, Correo, mensajería y servicios de directorio (versión 2026.1, 17-08-2026). A1-122/A2-IV-13; la academia aborda SMTP, componentes de correo y mensajería.'},
 5940:{a1:[58],a2:['II-6'],doc:docs.distributed,desc:'ITIC Academy, bloque 28, Arquitectura SOA y requisitos no funcionales (versión 2026.1, 25-09-2026), procesamiento distribuido/cliente-servidor. Asociación temática para sincronización lógica distribuida; la distinción se contrasta con el artículo original de Lamport.'}
};
const topics=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q&&m,'Falta pregunta/mapeo '+c.id);for(const id of [...m.a1.map(x=>'A1-'+x),...m.a2.map(x=>'A2-'+x)])assert.ok(topics.has(id),id);q.clasificacion.A1=m.a1.map(n=>'A1-'+n);q.clasificacion.A2=m.a2.map(n=>'A2-'+n);const marker='Cotejo curricular ITIC Academy:';const trim=v=>{const raw=(v||'').trim(),i=raw.indexOf(marker);return(i<0?raw:raw.slice(0,i)).trim().replace(/^Bloque de academia pendiente de cotejo\. Una lista vacía no implica exclusión del programa\.?\s*/,'').trim();};const note='Cotejo curricular ITIC Academy: '+m.desc+' Temas oficiales asociados: '+[...q.clasificacion.A1,...q.clasificacion.A2].join('/')+'. El material de academia ubica el contenido en el temario; se mantuvo la distinción entre alcance curricular y evidencia técnica primaria.';q.clasificacion.bloque_academia=m.desc;q.clasificacion.nota=(trim(q.clasificacion.nota)+' '+note).trim();q.comentarios=(trim(q.comentarios)+' '+note).trim();q.revision.observaciones=(trim(q.revision.observaciones)+' '+note).trim();if(!q.revision.fuentes.some(f=>f.url===m.doc))q.revision.fuentes.push({url:m.doc,referencia:m.desc});c.actualizada=structuredClone(q);}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo curricular A1/A2 actualizado para IDs 5936–5940.');
