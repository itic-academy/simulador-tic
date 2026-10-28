const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bankPath=path.join(__dirname,'..','preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-410.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
  networks:{url:'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',label:'ITIC Academy, bloque 43 «Protocolos», actualización 2026: IPv4/IPv6, direccionamiento y encaminamiento (temas A1-111/115 y A2-T8).'},
  db:{url:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',label:'ITIC Academy, bloque 29 «Bases de datos, SQL y modelado de datos», edición 2026: SGBD y bases de datos relacionales (A1-63/64 y A2-T5).'},
  cloud:{url:'https://drive.google.com/file/d/16Er3cneQ-Vik3zSjYq6zQUOfSKK4vxVu/view?usp=drivesdk',label:'ITIC Academy, bloque 25 «Cloud Computing», edición 2026: elasticidad, aprovisionamiento y modelos de nube (A1-55 y A2-T1).'},
  soa:{url:'https://drive.google.com/file/d/1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ/view?usp=drivesdk',label:'ITIC Academy, bloque 28 «Arquitectura SOA y requisitos no funcionales», edición 2026: arquitectura de servicios web, cliente-servidor y multicapas (A1-58 y A2-T6).'},
  web:{url:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',label:'ITIC Academy, bloque 30 «Tecnologías de sistemas de la información», versión 2026.1: XML, estándares web, servicios y tecnologías web (A1-65/77 y A2-T3/T9/D10-D12).'}
};
const mapping={
  2361:{topics:['A1-111','A1-115','A2-II-8','A2-IV-8'],docs:['networks'],detail:'Direccionamiento IPv4, prefijos y subredes: temas A1 de redes IP y direccionamiento y epígrafes A2 de protocolos y redes locales.'},
  2362:{topics:['A1-55','A1-63','A2-II-1'],docs:['cloud','db'],detail:'Servicio de base de datos relacional gestionado en nube: computación en nube y sistemas de gestión de bases de datos. El temario clasifica el concepto de SGBD; la marca AWS se estudia solo como ejemplo de producto.'},
  2363:{topics:['A1-58','A1-65','A1-77','A2-II-6','A2-III-12'],docs:['soa','web'],detail:'WSDL como vocabulario XML para describir servicios web: arquitectura SOA/servicios web y estándares XML. Se comprueba la correspondencia con los epígrafes oficiales, no se presenta WSDL como texto literal del programa.'},
  2364:{topics:['A1-55','A2-II-1'],docs:['cloud'],detail:'Ajuste de recursos y elasticidad rápida dentro de computación en nube; NIST sustenta la definición y autoescalado es el mecanismo de automatización aplicado.'},
  2365:{topics:['A1-77','A2-II-9'],docs:['web'],detail:'Sindicación y formatos XML: se encuadra en XML y lenguajes de marcado. Los detalles de GeoRSS, RSS 2.0 y Atom se contrastan con OGC, RSS Advisory Board e IETF, no se atribuyen como autoridad técnica a Academy.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const calls=['https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938','https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262'];
assert.deepEqual(log.cambios.map(c=>c.id),[2361,2362,2363,2364,2365]);
for(const change of log.cambios){const q=bank.preguntas.find(x=>x.id===change.id),m=mapping[change.id];assert.ok(q?.revision&&m,`Falta pregunta o cotejo ${change.id}`);assert.ok(m.topics.every(x=>official.has(x)),`Tema oficial inexistente ${change.id}`);
 q.clasificacion.A1=m.topics.filter(x=>x.startsWith('A1-'));q.clasificacion.A2=m.topics.filter(x=>x.startsWith('A2-'));
 const curriculum=`${m.docs.map(k=>docs[k].label).join(' ')} ${m.detail}`,links=m.docs.map(k=>docs[k].url).join('; ');
 const note=`Cotejo curricular: ${curriculum} Documentos Drive: ${links}. Correspondencia contrastada con revision/temario-oficial.json y los anexos de las convocatorias A1/A2 GSI BOE-A-2025-25938 y BOE-A-2025-26262 (${calls.join('; ')}). Academy aporta encuadre de temario; la respuesta se apoya en las especificaciones técnicas primarias citadas en el registro.`;
 q.clasificacion.bloque_academia=`${links} — ${curriculum}`;q.clasificacion.nota=note;q.revision.observaciones+=` ${note}`;q.comentarios=q.revision.observaciones;change.actualizada=structuredClone(q);
}
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');console.log('Cotejo curricular del lote 410 completado.');
