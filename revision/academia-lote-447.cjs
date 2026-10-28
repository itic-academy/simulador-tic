const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-447.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
  analysis:{url:'https://docs.google.com/document/d/1za_7e_LlvUEpja7VJyYElIgRIPu_AbE3/edit?usp=drivesdk&ouid=107088454749630873035&rtpof=true&sd=true',label:'ITIC Academy, bloque 38 Análisis, Diseño y Construcción de Sistemas de Información, versión 2026.1 (18-09-2026); metodologías de desarrollo y análisis/especificación de requisitos.'},
  networks:{url:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',label:'ITIC Academy, bloque 42 Redes, actualización 2026; Internet, protocolos y administración/monitorización de redes LAN, incluido SNMP en el contenido curricular.'},
  os:{url:'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk',label:'ITIC Academy, bloque 27 Sistemas Operativos, actualización 2026; conceptos y fundamentos de sistemas operativos.'}
};
const map={
  2546:{docs:['analysis'],topics:['A1-88','A2-III-2'],detail:'el bloque cubre modelos/metodologías de desarrollo; los hitos exactos LCO/LCA/IOC se verifican en la publicación de Boehm alojada por SEI'},
  2547:{docs:['networks'],topics:['A1-118','A2-IV-9'],detail:'el bloque cubre monitorización y administración SNMP; la semántica de GetBulk y sus versiones se verifica en los RFC del IETF'},
  2548:{docs:['networks'],topics:['A1-109','A2-II-8'],detail:'el bloque cubre protocolos y servicios de Internet; el comportamiento de timeout/retransmisión se verifica en RFC 1350'},
  2549:{docs:['analysis'],topics:['A1-91','A2-III-3'],detail:'el bloque cubre análisis y especificación de requisitos; la clasificación formal de capacity se comprueba en ISO/IEC 25010:2023'},
  2550:{docs:['os'],topics:['A1-59','A2-II-2'],detail:'el bloque cubre los fundamentos de sistemas operativos; los niveles de privilegio e instrucciones protegidas se verifican en el manual de arquitectura Intel'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
for(const change of log.cambios){
 const q=bank.preguntas.find(x=>x.id===change.id),row=map[change.id];assert.ok(q?.revision&&row,`Falta cotejo curricular de ${change.id}`);
 for(const topic of [...row.topics,...q.clasificacion.A1,...q.clasificacion.A2])assert.ok(official.has(topic),`Tema oficial inexistente: ${topic}`);
 q.clasificacion.A1=row.topics.filter(x=>x.startsWith('A1-'));q.clasificacion.A2=row.topics.filter(x=>x.startsWith('A2-'));
 const curriculum=row.docs.map(k=>docs[k].label).join('; '),note=`Cotejo curricular: ${curriculum}; ${row.detail}. Epígrafes contrastados con revision/temario-oficial.json y las convocatorias BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2 GSI). La academia contextualiza el programa, no es la fuente decisoria de la respuesta.`;
 q.clasificacion.bloque_academia=curriculum;q.clasificacion.nota=note;
 if(!q.revision.observaciones.includes(note))q.revision.observaciones+=` ${note}`;q.comentarios=q.revision.observaciones;
 for(const k of row.docs){const ref={url:docs[k].url,referencia:`${docs[k].label}; ${row.detail}.`};if(!q.revision.fuentes.some(f=>f.url===ref.url))q.revision.fuentes.push(ref);}
 change.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular ITIC Academy y temas oficiales añadido para 2546–2550.');
