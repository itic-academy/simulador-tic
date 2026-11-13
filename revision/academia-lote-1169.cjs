const fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1169.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const drive='https://drive.google.com/file/d/1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ/view?usp=drivesdk';
const map={
 6166:{a1:[65],a2:['III-12'],desc:'ITIC Academy 2026, bloque 28 Arquitectura SOA, versión 2026.1 (25-09-2026), §2.5 sobre servicios web SOAP/WSDL y protocolos; encaja con A1-65/A2-III.12.'},
 6167:{a1:[58],a2:['II-6'],desc:'ITIC Academy 2026, bloque 28, §2.1 sobre principios de orientación a servicios; cubre composición, descubrimiento, reutilización y bajo acoplamiento en el temario A1-58/A2-II.6.'},
 6168:{a1:[65],a2:['III-12'],desc:'ITIC Academy 2026, bloque 28, §2.5 y puntos clave sobre SOAP/XML, transporte y servicios web; encaja con A1-65/A2-III.12.'},
 6169:{a1:[58,65],a2:['II-6','III-12'],desc:'ITIC Academy 2026, bloque 28, §§2.2, 2.4 y 2.5 sobre roles, publicación/descubrimiento, gobernanza SOA y servicios web; encaja con A1-58/A1-65/A2-II.6/III.12.'},
 6170:{a1:[58,65],a2:['II-6','III-12'],desc:'ITIC Academy 2026, bloque 28, §2.6 «Procesos de negocio», que aborda procesos, orquestación y coreografía junto con servicios web; encaja con A1-58/A1-65/A2-II.6/III.12.'}
};
const marker='Cotejo curricular de ITIC Academy:';
const clean=s=>{s=(s||'').trim();const i=s.indexOf(marker);return(i<0?s:s.slice(0,i)).trim().replace(/^Bloque de academia pendiente de cotejo\. Una lista vacía no implica exclusión del programa\.?\s*/,'').trim();};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];if(!q||!m)throw Error('Falta pregunta/mapeo '+c.id);q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);q.clasificacion.bloque_academia=m.desc;const note=`${marker} ${m.desc} Temas oficiales asociados: ${[...q.clasificacion.A1,...q.clasificacion.A2].join('/')}. El temario formativo orienta el encaje; las fuentes técnicas primarias sostienen las respuestas.`;q.clasificacion.nota=(clean(q.clasificacion.nota)+' '+note).trim();q.comentarios=(clean(q.comentarios)+' '+note).trim();q.revision.observaciones=(clean(q.revision.observaciones)+' '+note).trim();if(!q.revision.fuentes.some(f=>f.url===drive))q.revision.fuentes.push({url:drive,referencia:`ITIC Academy: ${m.desc}`});c.actualizada=structuredClone(q);}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo curricular ITIC Academy actualizado para IDs 6166–6170.');
