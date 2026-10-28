const fs=require('node:fs');
const path=require('node:path');
const logPath=path.join(__dirname,'cambios-lote-465.json');
const bankPath=path.join(__dirname,'..','preguntas_preparatic.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const academy={url:'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',label:'ITIC Academy, Bloque 39 Calidad y Mantenimiento, edición 2026.1 (23-09-2026): ISO/IEC 25010:2023, SQuaRE, CMMI/ISO 330xx y métricas de calidad.'};
const map={
 2636:{topics:['A1-96','A1-98','A2-III-13'],detail:'El temario actual del bloque 39 aborda aseguramiento y gestión de calidad, aunque el PGGC de 1991 es una referencia histórica no desarrollada en el extracto de Academy; la asignación de intensidad se basa en el fascículo original del MAP.'},
 2637:{topics:['A1-98','A2-III-13'],detail:'El bloque 39 aborda modelos de calidad y procesos, en especial CMMI; no desarrolla COBIT 4.1 ni sus cifras. La afirmación sobre COBIT se cotejó con documentación de ISACA y ambas versiones citadas se identifican como históricas.'},
 2638:{topics:['A1-98','A2-III-13'],detail:'El bloque 39 trata métricas de software; el procedimiento concreto de Mk II FPA se verifica por separado en ISO/IEC 20968.'},
 2639:{topics:['A1-98','A2-III-13'],detail:'El bloque 39 trata calidad y mantenimiento, aunque no especifica el detalle de los siete principios de ISO 9000:2015; la lista se verifica en documentos de ISO y se marca esa edición como histórica.'},
 2640:{topics:['A1-98','A2-III-13'],detail:'El bloque 39 estudia SQuaRE y la evolución de ISO/IEC 25010; la familia ISO/IEC 25000 se contrasta con ISO/JTC 1/SC 7 y la ficha ISO de la guía de serie.'}
};
const a1={url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',label:'Programa oficial A1 BOE-A-2025-25938'};
const a2={url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',label:'Programa oficial A2 GSI BOE-A-2025-26262'};
for(const c of log.cambios){
  const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];
  if(!q?.revision||!m)throw new Error(`Falta revisión/tema para ${c.id}`);
  for(const t of m.topics)if(!official.has(t))throw new Error(`Tema oficial inexistente: ${t}`);
  q.clasificacion.A1=m.topics.filter(t=>t.startsWith('A1-'));
  q.clasificacion.A2=m.topics.filter(t=>t.startsWith('A2-'));
  q.clasificacion.bloque_academia=academy.label;
  const note=`Cotejo curricular: ${academy.label} ${m.detail} Correspondencia cotejada con revision/temario-oficial.json y convocatorias ${a1.label}/${a2.label}. Academy aporta contexto curricular; la respuesta y los datos concretos se contrastan con las fuentes incluidas en revision.fuentes.`;
  q.clasificacion.nota=`${q.revision.observaciones} ${note}`.trim();
  q.revision.observaciones=`${q.revision.observaciones} ${note}`.trim();
  q.comentarios=q.revision.observaciones;
  if(!q.revision.fuentes.some(f=>f.url===academy.url))q.revision.fuentes.push({url:academy.url,referencia:`${academy.label} ${m.detail}`});
  c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,`${JSON.stringify(bank,null,2)}\n`);
fs.writeFileSync(logPath,`${JSON.stringify(log,null,2)}\n`);
console.log('Cotejo Academy, temario A1/A2 y registros BOE añadido a 2636–2640.');
