const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1156.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const redes='https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const docs={
6101:{a1:[114],a2:['IV-11'],desc:'ITIC Academy, bloque 42 Redes, actualización 2026: WLAN/Wi-Fi y redes inalámbricas. Encaje oficial A1-114/A2-IV.11.'},
6102:{a1:[114],a2:['IV-11'],desc:'Cotejo con bloque 42 Redes 2026: transmisión y métodos de acceso inalámbrico; A1-114/A2-IV.11.'},
6103:{a1:[114],a2:['IV-11'],desc:'Cotejo con bloque 42 Redes 2026: redes inalámbricas personales, tecnologías de corto alcance y métodos de acceso; A1-114/A2-IV.11.'},
6104:{a1:[115],a2:['II-8'],desc:'Cotejo con bloque 42 Redes 2026: IPv6, TCP/IP y direccionamiento; A1-115/A2-II.8.'},
6105:{a1:[108],a2:['IV-6'],desc:'Cotejo con bloque 42 Redes 2026: estándares de telecomunicación e interfaces de red; A1-108/A2-IV.6.'}
};
const valid=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=docs[c.id];assert.ok(q&&m,'Falta pregunta/mapeo '+c.id);for(const t of [...m.a1.map(n=>'A1-'+n),...m.a2.map(n=>'A2-'+n)])assert.ok(valid.has(t),t);q.clasificacion.A1=m.a1.map(n=>'A1-'+n);q.clasificacion.A2=m.a2.map(n=>'A2-'+n);q.clasificacion.bloque_academia=m.desc;const marker='Cotejo curricular ITIC Academy:';const clean=s=>{s=(s||'').trim();const i=s.indexOf(marker);return(i<0?s:s.slice(0,i)).trim().replace(/^Bloque de academia pendiente de cotejo\. Una lista vacía no implica exclusión del programa\.?\s*/,'').trim();};const extra='Cotejo curricular ITIC Academy: '+m.desc+' Temas oficiales asociados: '+[...q.clasificacion.A1,...q.clasificacion.A2].join('/')+'. El material académico sirve para encaje curricular; las conclusiones técnicas se contrastan con los estándares indicados.';q.clasificacion.nota=(clean(q.clasificacion.nota)+' '+extra).trim();q.comentarios=(clean(q.comentarios)+' '+extra).trim();q.revision.observaciones=(clean(q.revision.observaciones)+' '+extra).trim();if(!q.revision.fuentes.some(f=>f.url===redes))q.revision.fuentes.push({url:redes,referencia:m.desc});c.actualizada=structuredClone(q);}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo curricular actualizado para IDs 6101–6105.');
