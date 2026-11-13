const fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1172.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const doc='https://drive.google.com/file/d/1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ/view?usp=drivesdk';
const map={
 6181:{a1:[65],a2:['III-12'],desc:'ITIC Academy, bloque 28 Arquitectura SOA, versión 2026.1 (25-09-2026), servicios web e interoperabilidad; encaje oficial A1-65/A2-III.12.'},
 6182:{a1:[65],a2:['III-12'],desc:'ITIC Academy, bloque 28, servicios web SOAP/WSDL y publicación/descubrimiento; encaje oficial A1-65/A2-III.12.'},
 6183:{a1:[65],a2:['III-12'],desc:'ITIC Academy, bloque 28, §2.5 SOAP y protocolos de servicios web; encaje oficial A1-65/A2-III.12.'},
 6184:{a1:[58],a2:['II-6'],desc:'ITIC Academy, bloque 28, arquitectura cliente-servidor y distribuida; encaje oficial A1-58/A2-II.6.'},
 6185:{a1:[65],a2:['III-12'],desc:'ITIC Academy, bloque 28, estándares SOAP/WSDL y registro/descubrimiento de servicios; encaje oficial A1-65/A2-III.12.'}
};
const marker='Cotejo curricular de ITIC Academy:';
const clean=s=>{s=(s||'').trim();const i=s.indexOf(marker);return(i<0?s:s.slice(0,i)).trim().replace(/^Bloque de academia pendiente de cotejo\. Una lista vacía no implica exclusión del programa\.?\s*/,'').trim();};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];if(!q||!m)throw Error('Falta pregunta/mapeo '+c.id);q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);q.clasificacion.bloque_academia=m.desc;const note=`Cotejo curricular de ITIC Academy: ${m.desc} Temas oficiales asociados: ${[...q.clasificacion.A1,...q.clasificacion.A2].join('/')}. El material académico orienta el encaje curricular; las especificaciones oficiales sustentan la respuesta.`;q.clasificacion.nota=(clean(q.clasificacion.nota)+' '+note).trim();q.comentarios=(clean(q.comentarios)+' '+note).trim();q.revision.observaciones=(clean(q.revision.observaciones)+' '+note).trim();if(!q.revision.fuentes.some(f=>f.url===doc))q.revision.fuentes.push({url:doc,referencia:`ITIC Academy: ${m.desc}`});c.actualizada=structuredClone(q);}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo curricular ITIC Academy actualizado para IDs 6181–6185.');
