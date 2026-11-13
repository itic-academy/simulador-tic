const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1157.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const drive='https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const docs={
6106:{a1:[119],a2:['IV-2'],desc:'ITIC Academy, bloque 42 Redes (actualización 2026): arquitectura de servicios y capas de datos; encaje A1-119/A2-IV.2.'},
6107:{a1:[119],a2:['IV-8'],desc:'ITIC Academy, bloque 42 Redes (actualización 2026): redes corporativas y servicios internos; encaje A1-119 y relación general con A2-IV.8.'},
6108:{a1:[122],a2:['IV-3'],desc:'ITIC Academy, bloque 42 Redes (actualización 2026): correo electrónico y servicios de mensajería; encaje A1-122/A2-IV.3.'},
6109:{a1:[122],a2:['IV-3'],desc:'ITIC Academy, bloque 42 Redes (actualización 2026): protocolos y servicios de correo electrónico; encaje A1-122/A2-IV.3.'},
6110:{a1:[80],a2:['IV-5'],desc:'ITIC Academy, bloque 42 Redes (actualización 2026): servicios de directorio e identidad; A1-80 y relación general con A2-IV.5.'}
};
const valid=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=docs[c.id];assert.ok(q&&m,'Falta pregunta/mapeo '+c.id);for(const t of [...m.a1.map(n=>'A1-'+n),...m.a2.map(n=>'A2-'+n)])assert.ok(valid.has(t),t);q.clasificacion.A1=m.a1.map(n=>'A1-'+n);q.clasificacion.A2=m.a2.map(n=>'A2-'+n);q.clasificacion.bloque_academia=m.desc;const marker='Cotejo curricular ITIC Academy:';const clean=s=>{s=(s||'').trim();const i=s.indexOf(marker);return(i<0?s:s.slice(0,i)).trim().replace(/^Bloque de academia pendiente de cotejo\. Una lista vacía no implica exclusión del programa\.?\s*/,'').trim();};const extra='Cotejo curricular ITIC Academy: '+m.desc+' Temas oficiales asociados: '+[...q.clasificacion.A1,...q.clasificacion.A2].join('/')+'. La convocatoria fija el marco curricular; no se usa como fuente técnica del protocolo.';q.clasificacion.nota=(clean(q.clasificacion.nota)+' '+extra).trim();q.comentarios=(clean(q.comentarios)+' '+extra).trim();q.revision.observaciones=(clean(q.revision.observaciones)+' '+extra).trim();if(!q.revision.fuentes.some(f=>f.url===drive))q.revision.fuentes.push({url:drive,referencia:m.desc});c.actualizada=structuredClone(q);}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo curricular actualizado para IDs 6106–6110.');
