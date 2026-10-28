const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-445.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
  design:{url:'https://drive.google.com/file/d/1za_7e_LlvUEpja7VJyYElIgRIPu_AbE3/edit?usp=drivesdk&ouid=107088454749630873035&rtpof=true&sd=true',label:'ITIC Academy, bloque 38 Análisis, Diseño y Construcción de Sistemas de Información, versión 2026.1 (18-09-2026); análisis, diagramas y proceso de construcción.'},
  admin:{url:'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk',label:'ITIC Academy, bloque 03 Actuación Administrativa y Administración Digital, versión 2026.2 (01-10-2026); administración electrónica, interoperabilidad y firma electrónica.'},
  mobile:{url:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',label:'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información, versión 2026.1 (31-08-2026); aplicaciones, tecnologías y distribución de software.'},
  hardware:{url:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',label:'ITIC Academy, bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1 (31-08-2026); infraestructura de centros de datos.'}
};
const map={
  2536:{docs:['design'],detail:'el bloque encuadra el análisis y modelado de sistemas; el listado exacto de componentes DFD se comprueba en la documentación técnica citada',topics:['A1-90','A2-III-3']},
  2537:{docs:['admin'],detail:'el bloque aborda interoperabilidad y firma electrónica; la respuesta se comprueba con la NTI publicada en BOE y la especificación OASIS PKCS #11',topics:['A1-22','A2-I-9']},
  2538:{docs:['design'],detail:'el bloque desarrolla diseño, pruebas y MÉTRICA; la composición exacta de participantes se coteja con la tarea MSI 3.3 del manual oficial SGAD',topics:['A1-95','A2-III-7','A2-III-8']},
  2539:{docs:['mobile'],detail:'el bloque trata aplicaciones móviles y distribución; el procedimiento vigente de creación y publicación se comprueba en la ayuda oficial de Google Play Console',topics:['A1-124','A2-II-1']},
  2540:{docs:['hardware'],detail:'el bloque trata servidores y centros de proceso de datos; los niveles oficiales Rated-1 a Rated-4 y el término actual se verifican en la asociación que mantiene ANSI/TIA-942',topics:['A1-57','A2-II-1']}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
for(const change of log.cambios){
 const q=bank.preguntas.find(x=>x.id===change.id),row=map[change.id];assert.ok(q?.revision&&row,`Falta cotejo curricular de ${change.id}`);
 for(const topic of [...row.topics,...q.clasificacion.A1,...q.clasificacion.A2])assert.ok(official.has(topic),`Tema oficial inexistente: ${topic}`);
 q.clasificacion.A1=row.topics.filter(x=>x.startsWith('A1-'));q.clasificacion.A2=row.topics.filter(x=>x.startsWith('A2-'));
 const curriculum=row.docs.map(k=>docs[k].label).join('; '),detail=row.detail;
 const note=`Cotejo curricular: ${curriculum}; ${detail}. Correspondencia con ${row.topics.join(', ')} contrastada con revision/temario-oficial.json y las convocatorias BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2 GSI). La academia orienta el encaje, no es fuente decisoria de la respuesta.`;
 q.clasificacion.bloque_academia=curriculum;q.clasificacion.nota=note;
 if(!q.revision.observaciones.includes(note))q.revision.observaciones+=` ${note}`;q.comentarios=q.revision.observaciones;
 for(const k of row.docs){const ref={url:docs[k].url,referencia:`${docs[k].label}; ${detail}.`};if(!q.revision.fuentes.some(f=>f.url===ref.url))q.revision.fuentes.push(ref);}
 change.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular ITIC Academy y temas oficiales añadido para 2536–2540.');
