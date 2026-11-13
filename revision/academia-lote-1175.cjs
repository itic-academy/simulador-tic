const fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1175.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={infra:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',soa:'https://drive.google.com/file/d/1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ/view?usp=drivesdk',workflow:'https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk'};
const map={
 6196:{a1:[57,61],a2:['II-2'],doc:docs.infra,desc:'ITIC Academy, bloque 26 Sistemas multiusuario y hardware, versión 2026, §14.1 VDI, RDS y virtualización de aplicaciones; encaje oficial A1-57/A1-61 y A2-II.2.'},
 6197:{a1:[58],a2:['II-6'],doc:docs.soa,desc:'ITIC Academy, bloque 28 Arquitectura SOA, versión 2026.1, §2.7 Enterprise Service Bus; encaje oficial A1-58/A2-II.6.'},
 6198:{a1:[58],a2:['II-6'],doc:docs.soa,desc:'ITIC Academy, bloque 28 Arquitectura SOA, versión 2026.1, comunicación síncrona/asíncrona y mecanismos de mensajería; encaje oficial A1-58/A2-II.6.'},
 6199:{a1:[58],a2:['II-16'],doc:docs.workflow,desc:'ITIC Academy, bloque 50 Trabajo colaborativo y workflow, versión 2026, apartado del modelo de referencia WfMC; encaje oficial A1-58/A2-II.16.'},
 6200:{a1:[58],a2:['II-6'],doc:docs.soa,desc:'ITIC Academy, bloque 28 Arquitectura SOA, versión 2026.1, arquitecturas cliente-servidor, multicapa y distinción cliente ligero/pesado; encaje oficial A1-58/A2-II.6.'}
};
const clean=s=>{s=(s||'').trim();const i=s.indexOf('Cotejo curricular de ITIC Academy:');return(i<0?s:s.slice(0,i)).trim().replace(/^Bloque de academia pendiente de cotejo\.[^\n]*/,'').trim();};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];if(!q||!m)throw Error('Falta pregunta/mapeo '+c.id);q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);q.clasificacion.bloque_academia=m.desc;const note=`Cotejo curricular de ITIC Academy: ${m.desc} La academia ubica el contenido; Microsoft, W3C/MPI Forum, IBM, Oracle y WfMC fundamentan las respuestas según cada reactivo.`;q.clasificacion.nota=(clean(q.clasificacion.nota)+' '+note).trim();q.comentarios=(clean(q.comentarios)+' '+note).trim();q.revision.observaciones=(clean(q.revision.observaciones)+' '+note).trim();if(!q.revision.fuentes.some(f=>f.url===m.doc))q.revision.fuentes.push({url:m.doc,referencia:`ITIC Academy: ${m.desc}`});c.actualizada=structuredClone(q);}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo curricular ITIC Academy actualizado para IDs 6196–6200.');
