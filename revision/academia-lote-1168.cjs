const fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1168.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const drive='https://drive.google.com/file/d/1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ/view?usp=drivesdk';
const map={
 6161:{a1:[58],a2:['II-6'],desc:'ITIC Academy 2026, bloque 28 Arquitectura SOA y requisitos no funcionales, versión 2026.1 (25-09-2026), §1.4 sobre middleware e integración de componentes; encaja con A1-58/A2-II.6.'},
 6162:{a1:[65],a2:['III-12'],desc:'ITIC Academy 2026, bloque 28, §2.5 sobre servicios web y métodos HTTP; encaje A1-65/A2-III.12. El uso de GET para recuperar la representación se comprueba en RFC 9110.'},
 6163:{a1:[58,65],a2:['II-6','III-12'],desc:'ITIC Academy 2026, bloque 28, §§1.2 y 2.5, comunicación distribuida y servicios web; encaje A1-58/A1-65/A2-II.6/III.12. La fuente primaria de Apache confirma la respuesta en Sandesha2 histórico, sin acreditar soporte actual.'},
 6164:{a1:[65],a2:['III-12'],desc:'ITIC Academy 2026, bloque 28, §2.5, arquitectura de servicios web y protocolos; encaja con A1-65/A2-III.12. La relación actual entre Jakarta REST, Jersey y los métodos HTTP se verifica en las especificaciones/proyectos oficiales.'},
 6165:{a1:[65],a2:['III-12'],desc:'ITIC Academy 2026, bloque 28, §2.5, servicios web SOAP/WSDL; encaja con A1-65/A2-III.12. Las funciones de mensajería y descripción se distinguen mediante las recomendaciones W3C.'}
};
const marker='Cotejo curricular de ITIC Academy:';
const clean=s=>{s=(s||'').trim();const i=s.indexOf(marker);return(i<0?s:s.slice(0,i)).trim().replace(/^Bloque de academia pendiente de cotejo\. Una lista vacía no implica exclusión del programa\.?\s*/,'').trim();};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];if(!q||!m)throw Error('Falta pregunta/mapeo '+c.id);q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);q.clasificacion.bloque_academia=m.desc;const note=`${marker} ${m.desc} Temas oficiales asociados: ${[...q.clasificacion.A1,...q.clasificacion.A2].join('/')}. El temario formativo orienta el encaje; la evidencia técnica primaria sostiene la respuesta o acota su alcance temporal.`;q.clasificacion.nota=(clean(q.clasificacion.nota)+' '+note).trim();q.comentarios=(clean(q.comentarios)+' '+note).trim();q.revision.observaciones=(clean(q.revision.observaciones)+' '+note).trim();if(!q.revision.fuentes.some(f=>f.url===drive))q.revision.fuentes.push({url:drive,referencia:`ITIC Academy: ${m.desc}`});c.actualizada=structuredClone(q);}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo curricular ITIC Academy actualizado para IDs 6161–6165.');
