const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1120.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const academy='https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk';
const map={
 5921:{a1:[110],a2:['IV-8'],desc:'ITIC Academy, bloque 43, Ethernet, direcciones MAC y difusión en redes LAN.'},
 5922:{a1:[118],a2:['IV-9'],desc:'ITIC Academy, bloque 43, gestión SNMP y MIB de redes.'},
 5923:{a1:[118],a2:['IV-9'],desc:'ITIC Academy, bloque 43, monitorización y gestión SNMP; el RFC de Printer MIB delimita qué contadores son por dispositivo y no por usuario.'},
 5924:{a1:[114],a2:['IV-11'],desc:'ITIC Academy, bloque 43, tecnologías inalámbricas/DECT; banda comprobada en ETSI EN 301 406-1 y decisión CEPT vigente.'},
 5925:{a1:[123],a2:['IV-15'],desc:'ITIC Academy, bloque 43, redes móviles UMTS/UTRAN; arquitectura cotejada con 3GPP TS 25.401 Release 19.'}
};
const topics=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q&&m,`Falta pregunta/mapeo ${c.id}`);for(const id of [...m.a1.map(x=>`A1-${x}`),...m.a2.map(x=>`A2-${x}`)])assert.ok(topics.has(id),id);q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);const marker='Cotejo curricular ITIC Academy:';const trim=v=>{const raw=(v||'').trim(),i=raw.indexOf(marker);return (i<0?raw:raw.slice(0,i)).trim().replace(/^Bloque de academia pendiente de cotejo\. Una lista vacía no implica exclusión del programa\.?\s*/,'').trim();};const note=`Cotejo curricular ITIC Academy: ${m.desc} Temas oficiales asociados: ${[...q.clasificacion.A1,...q.clasificacion.A2].join('/')}. La academia orienta la correspondencia curricular; la respuesta se contrastó con las especificaciones técnicas citadas.`;q.clasificacion.bloque_academia=m.desc;q.clasificacion.nota=`${trim(q.clasificacion.nota)} ${note}`.trim();q.comentarios=`${trim(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${trim(q.revision.observaciones)} ${note}`.trim();if(!q.revision.fuentes.some(f=>f.url===academy))q.revision.fuentes.push({url:academy,referencia:m.desc});c.actualizada=structuredClone(q);}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo curricular A1/A2 actualizado para IDs 5921–5925.');
