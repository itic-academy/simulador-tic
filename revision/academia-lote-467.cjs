const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-467.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const academy={url:'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',label:'ITIC Academy, Bloque 39 Calidad y Mantenimiento, versión 2026.1 (23-09-2026), cotejado directamente en Drive'};
const a1={url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',label:'Programa oficial A1, BOE-A-2025-25938'};
const a2={url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',label:'Programa oficial A2 GSI, BOE-A-2025-26262'};
const map={
 2646:{topics:['A1-103','A2-III-13'],detail:'El bloque actual presenta EFQM 2025 y encuadra la evaluación de calidad; no se atribuyen al modelo de 2025 las técnicas de guías clásicas. Cuestionario, formulario/pro forma y simulación al premio se cotejaron en la guía MAP de 2006 y se conservan como referencia histórica.'},
 2647:{topics:['A1-98','A2-III-13'],detail:'El bloque incluye SQuaRE, ISO/IEC 25010:2023 y el modelo separado de calidad en uso ISO/IEC 25019:2023; la descripción exacta de la división 2501n procede de ISO/IEC JTC 1/SC 7.'},
 2648:{topics:['A1-98','A2-III-13'],detail:'El bloque repasa McCall como modelo clásico de calidad. La partición exacta Product Operation y sus cinco factores se contrasta con el informe RADC-TR-77-369 de 1977.'},
 2649:{topics:['A1-98','A2-III-13'],detail:'El bloque trata expresamente las métricas de complejidad Halstead y McCabe (apartado 4.3). La definición grafo-teórica y el alcance de la métrica se contrastan con el artículo original de McCabe.'},
 2650:{topics:['A1-96','A1-98','A2-III-7','A2-III-13'],detail:'El bloque actual cubre garantía de calidad, pruebas y criterios de aceptación en términos generales; no desarrolla los procedimientos-tipo del PGGC de 1991. La distinción entre revisión y prueba PAA se verifica directamente en el fascículo oficial histórico.'}
};
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q?.revision&&m,`Falta cotejo ${c.id}`);
 for(const id of [...q.clasificacion.A1,...q.clasificacion.A2,...m.topics])assert.ok(official.has(id),`Tema oficial inexistente: ${id}`);
 q.clasificacion.A1=m.topics.filter(t=>t.startsWith('A1-'));q.clasificacion.A2=m.topics.filter(t=>t.startsWith('A2-'));
 const note=`Cotejo curricular: ${academy.label}. ${m.detail} Correspondencia contrastada con revision/temario-oficial.json y las convocatorias ${a1.label} y ${a2.label}. Academy aporta el encaje curricular; no sustituye las fuentes primarias que validan la respuesta.`;
 q.clasificacion.bloque_academia=`${academy.label}; ${m.detail}`;q.clasificacion.nota=`${q.revision.observaciones} ${note}`.trim();q.revision.observaciones=`${q.revision.observaciones} ${note}`.trim();q.comentarios=q.revision.observaciones;
 q.revision.fuentes.push({url:academy.url,referencia:`${academy.label}; ${m.detail}`});
 q.revision.fuentes.push({url:a1.url,referencia:`${a1.label}; cotejo de epígrafes ${m.topics.filter(t=>t.startsWith('A1-')).join(', ')} con el programa publicado en el BOE.`});
 q.revision.fuentes.push({url:a2.url,referencia:`${a2.label}; cotejo de epígrafes ${m.topics.filter(t=>t.startsWith('A2-')).join(', ')} con el programa publicado en el BOE.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo Academy, temario oficial A1/A2 y convocatorias añadido a IDs 2646–2650.');
