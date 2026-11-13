const fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1173.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={soa:'https://drive.google.com/file/d/1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ/view?usp=drivesdk',workflow:'https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk'};
const map={
 6186:{a1:[65],a2:['III-12'],doc:docs.soa,desc:'ITIC Academy, bloque 28 Arquitectura SOA, versión 2026.1 (25-09-2026), §2.5 SOAP/protocolos; encaje oficial A1-65/A2-III.12.'},
 6187:{a1:[58],a2:['II-6'],doc:docs.soa,desc:'ITIC Academy, bloque 28 Arquitectura SOA, versión 2026.1, arquitectura cliente-servidor/multicapa; encaje oficial A1-58/A2-II.6.'},
 6188:{a1:[58],a2:['II-16'],doc:docs.workflow,desc:'ITIC Academy, bloque 50, versión 2026.1 (01-10-2026), gestión documental y flujos de trabajo; encaje oficial A1-58/A2-II.16.'},
 6189:{a1:[58],a2:['II-16'],doc:docs.workflow,desc:'ITIC Academy, bloque 50, versión 2026.1, flujos de trabajo y estándares relacionados; el encaje oficial es A1-58/A2-II.16.'},
 6190:{a1:[65],a2:['III-12'],doc:docs.soa,desc:'ITIC Academy, bloque 28, versión 2026.1, §2.5 servicios web SOAP/XML; encaje oficial A1-65/A2-III.12.'}
};
const marker='Cotejo curricular de ITIC Academy:';
const clean=s=>{s=(s||'').trim();const i=s.indexOf(marker);return(i<0?s:s.slice(0,i)).trim().replace(/^Bloque de academia pendiente de cotejo\. Una lista vacía no implica exclusión del programa\.?\s*/,'').trim();};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];if(!q||!m)throw Error('Falta pregunta/mapeo '+c.id);q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);q.clasificacion.bloque_academia=m.desc;const note=`Cotejo curricular de ITIC Academy: ${m.desc} Temas oficiales asociados: ${[...q.clasificacion.A1,...q.clasificacion.A2].join('/')}. La academia ubica el contenido; las especificaciones y organismos primarios justifican las respuestas.`;q.clasificacion.nota=(clean(q.clasificacion.nota)+' '+note).trim();q.comentarios=(clean(q.comentarios)+' '+note).trim();q.revision.observaciones=(clean(q.revision.observaciones)+' '+note).trim();if(!q.revision.fuentes.some(f=>f.url===m.doc))q.revision.fuentes.push({url:m.doc,referencia:`ITIC Academy: ${m.desc}`});c.actualizada=structuredClone(q);}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo curricular ITIC Academy actualizado para IDs 6186–6190.');
