const fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1170.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 soa:'https://drive.google.com/file/d/1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ/view?usp=drivesdk',
 cloud:'https://drive.google.com/file/d/16Er3cneQ-Vik3zSjYq6zQUOfSKK4vxVu/view?usp=drivesdk',
 workflow:'https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk'
};
const map={
 6171:{a1:[65],a2:['III-12'],doc:docs.soa,desc:'ITIC Academy, bloque 28 Arquitectura SOA, versión 2026.1 (25-09-2026), §2.5 sobre SOAP/WSDL y protocolos; encaje oficial A1-65/A2-III.12.'},
 6172:{a1:[58],a2:['II-6'],doc:docs.soa,desc:'ITIC Academy, bloque 28 Arquitectura SOA, versión 2026.1, apartados de integración, servicios y bus; encaje oficial A1-58/A2-II.6.'},
 6173:{a1:[58],a2:['II-6'],doc:docs.soa,desc:'ITIC Academy, bloque 28 Arquitectura SOA, versión 2026.1, contexto de arquitectura cliente-servidor y distribuida; encaje oficial A1-58/A2-II.6.'},
 6174:{a1:[55],a2:['II-1'],doc:docs.cloud,desc:'ITIC Academy, bloque Cloud Computing, versión 2026.1 (19-08-2026), tema oficial A1-55/A2-II.1; se usa solo para el encaje curricular, pues el término histórico se confirma en el informe primario ONTSI de 2012.'},
 6175:{a1:[58],a2:['II-6','II-16'],doc:docs.workflow,desc:'ITIC Academy, bloque 50 sobre gestión documental y flujos de trabajo, versión 2026.1 (01-10-2026), A2-T16; el modelo conceptual de servicio de ejecución se contrasta con la especificación primaria WfMC.'}
};
const marker='Cotejo curricular de ITIC Academy:';
const clean=s=>{s=(s||'').trim();const i=s.indexOf(marker);return(i<0?s:s.slice(0,i)).trim().replace(/^Bloque de academia pendiente de cotejo\. Una lista vacía no implica exclusión del programa\.?\s*/,'').trim();};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];if(!q||!m)throw Error('Falta pregunta/mapeo '+c.id);q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);q.clasificacion.bloque_academia=m.desc;const note=`${marker} ${m.desc} Temas oficiales asociados: ${[...q.clasificacion.A1,...q.clasificacion.A2].join('/')}. El bloque académico orienta el encaje curricular; las fuentes técnicas primarias sostienen la respuesta.`;q.clasificacion.nota=(clean(q.clasificacion.nota)+' '+note).trim();q.comentarios=(clean(q.comentarios)+' '+note).trim();q.revision.observaciones=(clean(q.revision.observaciones)+' '+note).trim();if(!q.revision.fuentes.some(f=>f.url===m.doc))q.revision.fuentes.push({url:m.doc,referencia:`ITIC Academy: ${m.desc}`});c.actualizada=structuredClone(q);}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo curricular ITIC Academy actualizado para IDs 6171–6175.');
