const fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1177.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={soa:'https://drive.google.com/file/d/1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ/view?usp=drivesdk',workflow:'https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk'};
const map={
 6206:{a1:[65],a2:['III-12'],doc:docs.soa,desc:'ITIC Academy, bloque 28 SOA, versión 2026.1, secciones sobre servicios web, tecnologías SOAP/WSDL y arquitectura de protocolos; encaje oficial A1-65/A2-III.12.'},
 6207:{a1:[65],a2:['III-12'],doc:docs.soa,desc:'ITIC Academy, bloque 28 SOA, versión 2026.1, apartado SOAP/WSDL y contratos de servicios web; encaje oficial A1-65/A2-III.12.'},
 6208:{a1:[65],a2:['III-12'],doc:docs.soa,desc:'ITIC Academy, bloque 28 SOA, versión 2026.1, servicios web, estándares y protocolos; encaje oficial A1-65/A2-III.12.'},
 6209:{a1:[58],a2:['II-16'],doc:docs.workflow,desc:'ITIC Academy, bloque 50 Workflow, versión 2026, gestión de procedimientos y modelo de referencia WfMC; encaje oficial A1-58/A2-II.16.'},
 6210:{a1:[58],a2:['II-6'],doc:docs.soa,desc:'ITIC Academy, bloque 28 SOA, versión 2026.1, §2.7 Enterprise Service Bus y middleware de integración; encaje oficial A1-58/A2-II.6.'}
};
const clean=s=>{s=(s||'').trim();const i=s.indexOf('Cotejo curricular de ITIC Academy:');return(i<0?s:s.slice(0,i)).trim().replace(/^Bloque de academia pendiente de cotejo\.[^\n]*/,'').trim();};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];if(!q||!m)throw Error('Falta pregunta/mapeo '+c.id);q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);q.clasificacion.bloque_academia=m.desc;const note=`Cotejo curricular de ITIC Academy: ${m.desc} La academia ubica el contenido; W3C, OASIS, IETF, WfMC e IBM sustentan la revisión técnica.`;q.clasificacion.nota=(clean(q.clasificacion.nota)+' '+note).trim();q.comentarios=(clean(q.comentarios)+' '+note).trim();q.revision.observaciones=(clean(q.revision.observaciones)+' '+note).trim();if(!q.revision.fuentes.some(f=>f.url===m.doc))q.revision.fuentes.push({url:m.doc,referencia:`ITIC Academy: ${m.desc}`});c.actualizada=structuredClone(q);}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo curricular ITIC Academy actualizado para IDs 6206–6210.');
