const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1142.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 mobile:'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk',
 accessibility:'https://drive.google.com/file/d/1fB8jeg7SA1k3gCCapKlWX1VLLksWb5qO/view?usp=drivesdk',
 quality:'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',
 networks:'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',
 hardware:'https://drive.google.com/file/d/12heek9CTZHiGHjtWvLjdjOE7vIQdlYFm/view?usp=drivesdk'
};
const map={
 6031:{a1:[112,123],a2:['IV-15'],doc:docs.mobile,desc:'ITIC Academy, bloque 46, Redes inalámbricas y comunicaciones móviles, versión 2026.1: incluye LTE/LTE-Advanced y generaciones móviles; correspondencia con A1-112/123 y A2-IV-15.'},
 6032:{a1:[44],a2:['III-14'],doc:docs.accessibility,desc:'ITIC Academy, tema 44, Accesibilidad y usabilidad: incluye W3C y WCAG 2.1; correspondencia con A1-44 y A2-III.14. El archivo consultado no muestra versión fechada en el extracto disponible.'},
 6033:{a1:[97],a2:['III-6'],doc:docs.quality,desc:'ITIC Academy, bloque 39, Calidad y Mantenimiento, versión 2026.1 (23/09/2026): calidad de software, métricas e integración continua; correspondencia con A1-97 y A2-III.6.'},
 6034:{a1:[118],a2:[],doc:docs.networks,desc:'ITIC Academy, bloque 43, Protocolos, versión 2026.1: incluye LAN y topologías lógicas, con Token Ring como ejemplo histórico; correspondencia curricular directa con A1-118. No se fuerza una adscripción A2.'},
 6035:{a1:[56],a2:[],doc:docs.hardware,desc:'ITIC Academy, documento Hardware v2_2026, temas 52, 53, 54, 56, 57 y 131: cubre hardware/periféricos y tratamiento multimedia, donde se contextualiza MIDI; correspondencia directa con A1-56. No se fuerza una adscripción A2.'}
};
const topics=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q&&m,'Falta pregunta/mapeo '+c.id);for(const id of [...m.a1.map(x=>'A1-'+x),...m.a2.map(x=>'A2-'+x)])assert.ok(topics.has(id),id);q.clasificacion.A1=m.a1.map(n=>'A1-'+n);q.clasificacion.A2=m.a2.map(n=>'A2-'+n);const marker='Cotejo curricular ITIC Academy:';const trim=v=>{const raw=(v||'').trim(),i=raw.indexOf(marker);return(i<0?raw:raw.slice(0,i)).trim().replace(/^Bloque de academia pendiente de cotejo\. Una lista vacía no implica exclusión del programa\.?\s*/,'').trim();};const refs=m.desc+' Temas oficiales asociados: '+[...q.clasificacion.A1,...q.clasificacion.A2].join('/')+'. La academia guía la adscripción curricular; las respuestas se fundamentan en fuentes primarias.';const note='Cotejo curricular ITIC Academy: '+refs;q.clasificacion.bloque_academia=m.desc;q.clasificacion.nota=(trim(q.clasificacion.nota)+' '+note).trim();q.comentarios=(trim(q.comentarios)+' '+note).trim();q.revision.observaciones=(trim(q.revision.observaciones)+' '+note).trim();if(!q.revision.fuentes.some(f=>f.url===m.doc))q.revision.fuentes.push({url:m.doc,referencia:m.desc});c.actualizada=structuredClone(q);}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo curricular actualizado para IDs 6031–6035.');
