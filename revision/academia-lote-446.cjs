const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-446.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
  hardware:{url:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',label:'ITIC Academy, bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1 (31-08-2026); incluye A1-56 y A2-T1/C5, y un apartado específico sobre contenedores y Kubernetes.'},
  wireless:{url:'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk',label:'ITIC Academy, bloque 46 Redes inalámbricas y comunicaciones móviles, actualización 2026; encuadre de radiocomunicación y sistemas móviles.'},
  security:{url:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',label:'ITIC Academy, bloque 48 Seguridad en redes y nivel de aplicación, actualización 2026; criptografía, seguridad lógica y técnicas criptográficas.'},
  analysis:{url:'https://docs.google.com/document/d/1za_7e_LlvUEpja7VJyYElIgRIPu_AbE3/edit?usp=drivesdk&ouid=107088454749630873035&rtpof=true&sd=true',label:'ITIC Academy, bloque 38 Análisis, Diseño y Construcción de Sistemas de Información, versión 2026.1 (18-09-2026); incluye análisis estructurado y MÉTRICA.'}
};
const map={
  2541:{docs:['hardware'],topics:['A1-56','A2-II-1','A2-IV-5'],detail:'la academia sitúa memoria flash dentro del bloque oficial de almacenamiento; el detalle NOR/NAND se verificó con documentación de Microchip y Micron'},
  2542:{docs:['wireless'],topics:['A1-123','A2-IV-15'],detail:'el bloque encuadra radiocomunicación y comunicaciones móviles; la asignación dinámica de canales se verifica con reguladores de telecomunicaciones'},
  2543:{docs:['security'],topics:['A1-125','A2-II-13','A2-IV-12'],detail:'el bloque encuadra criptografía y seguridad de redes; la definición de clave simétrica se verifica con el glosario NIST'},
  2544:{docs:['hardware'],topics:['A1-55','A2-II-7'],detail:'el bloque contiene una sección específica de contenedores y Kubernetes; despliegue y escalado se comprueban con la documentación oficial Kubernetes'},
  2545:{docs:['analysis'],topics:['A1-90','A1-95','A2-III-3'],detail:'el bloque cubre análisis estructurado y MÉTRICA; las tres clases de flujo se cotejan con la técnica DFD oficial de MÉTRICA v3'}
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
console.log('Cotejo curricular ITIC Academy y temas oficiales añadido para 2541–2545.');
