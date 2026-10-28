const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-471.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const academy={url:'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',label:'ITIC Academy, Bloque Calidad y Mantenimiento, versión 2026.1 (23-09-2026), leído directamente en Drive'};
const a1={url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',label:'Programa oficial A1, BOE-A-2025-25938'};
const a2={url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',label:'Programa oficial A2 GSI, BOE-A-2025-26262'};
const map={
 2666:{topics:['A1-98','A2-III-13'],detail:'El bloque 2026.1 cubre métricas y evaluación, pero no especifica en el contenido cotejado la definición formal de Quality Measure de ISO/IEC 25020. Se contrasta directamente con la ficha y el estándar de medición de ISO; el material de academia es contexto curricular, no fuente de definición.'},
 2667:{topics:['A1-98','A2-III-13'],detail:'El bloque trata métricas de producto, proceso, entrega y servicio y evaluación orientada a objetivos. La selección concreta, validez y fiabilidad se verifica con ISO/IEC 25020:2019 e ISO/IEC/IEEE 15939:2017, sin atribuir al bloque una regla normativa que no formula textualmente.'},
 2668:{topics:['A1-96','A1-98','A2-III-13'],detail:'El bloque vigente cubre garantía y calidad, pero no incluye el esquema histórico EFC/PGGC de 1991. La opción se comprueba en el fascículo 2 del PGGC publicado por la Administración General del Estado; la correspondencia curricular es temática y no implica vigencia de aquella metodología.'},
 2669:{topics:['A1-103','A2-III-13'],detail:'El bloque vigente trata calidad, función de calidad y mejora, pero no desarrolla PDCA/PDSA en el texto cotejado. La diferencia de secuencias se contrasta con el W. Edwards Deming Institute; se corrige la atribución simplificada.'},
 2670:{topics:['A1-98','A2-III-13'],detail:'La sección 4.3 del bloque incluye expresamente las métricas de Halstead y McCabe. Los cuatro recuentos y su notación se verifican aparte con NISTIR 8289, que cita a Halstead; el bloque sirve para corroborar inclusión curricular, no como autoridad de la definición.'}
};
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q?.revision&&m,`Falta cotejo ${c.id}`);
 for(const id of [...q.clasificacion.A1,...q.clasificacion.A2,...m.topics])assert.ok(official.has(id),`Tema oficial inexistente: ${id}`);
 q.clasificacion.A1=m.topics.filter(t=>t.startsWith('A1-'));q.clasificacion.A2=m.topics.filter(t=>t.startsWith('A2-'));
 const note=`Cotejo curricular: ${academy.label}. ${m.detail} Correspondencia contrastada con revision/temario-oficial.json y las convocatorias ${a1.label} y ${a2.label}. El material de Academy aporta contexto curricular y no sustituye las fuentes primarias.`;
 q.clasificacion.bloque_academia=`${academy.label}; ${m.detail}`;q.clasificacion.nota=`${q.revision.observaciones} ${note}`.trim();q.revision.observaciones=`${q.revision.observaciones} ${note}`.trim();q.comentarios=q.revision.observaciones;
 q.revision.fuentes.push({url:academy.url,referencia:`${academy.label}; ${m.detail}`});
 for(const id of m.topics.filter(t=>t.startsWith('A1-')))q.revision.fuentes.push({url:a1.url,referencia:`${a1.label}; correspondencia con ${id} contrastada en el programa publicado en BOE.`});
 for(const id of m.topics.filter(t=>t.startsWith('A2-')))q.revision.fuentes.push({url:a2.url,referencia:`${a2.label}; correspondencia con ${id} contrastada en el programa publicado en BOE.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo Academy, temas oficiales A1/A2 y convocatorias añadido a IDs 2666–2670.');
