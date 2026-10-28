const fs=require('node:fs');
const path=require('node:path');
const logPath=path.join(__dirname,'cambios-lote-462.json');
const bankPath=path.join(__dirname,'..','preguntas_preparatic.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const academy={url:'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',label:'ITIC Academy, Bloque 39 Calidad y Mantenimiento, edición 2026.1 (23-09-2026): modelos de calidad, métricas, McCall, McCabe/Halstead y aseguramiento.'};
const map={
  2621:{topics:['A1-98','A2-III-13'],detail:'El bloque incluye el modelo de McCall y factores de calidad. Esa correspondencia curricular no prueba la clasificación de Transition; los grupos/factores se contrastaron con el informe original de McCall.'},
  2622:{topics:['A1-98','A2-III-13'],detail:'El bloque incluye calidad y mantenimiento del software. La definición distintiva de Flexibility frente a Maintainability se contrastó con el informe original de McCall.'},
  2623:{topics:['A1-98','A2-III-13'],detail:'El bloque incluye métricas de McCabe/Halstead y modelos de calidad. La distinción de tamaño funcional, complejidad y calidad se contrastó por separado con SEI y las fuentes técnicas indicadas.'},
  2624:{topics:['A1-98','A2-III-13'],detail:'El bloque incluye el modelo de McCall; la jerarquía de factores, criterios y métricas se contrastó con el informe original, no se infiere solo del índice académico.'},
  2625:{topics:['A1-96','A1-98','A2-III-13'],detail:'El bloque aporta encuadre curricular en aseguramiento de la calidad. No documenta la pareja normativa exacta de MÉTRICA v3; esta se comprobó exclusivamente en el manual primario del MAP.'}
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
  const note=`Cotejo curricular: ${academy.label} ${m.detail} Correspondencia contrastada con revision/temario-oficial.json y convocatorias ${a1.label}/${a2.label}; el bloque de Academy se usa como contexto curricular, no sustituye las fuentes primarias de revision.fuentes.`;
  q.clasificacion.nota=`${q.revision.observaciones} ${note}`.trim();
  q.revision.observaciones=`${q.revision.observaciones} ${note}`.trim();
  q.comentarios=q.revision.observaciones;
  if(!q.revision.fuentes.some(f=>f.url===academy.url))q.revision.fuentes.push({url:academy.url,referencia:`${academy.label} ${m.detail}`});
  c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,`${JSON.stringify(bank,null,2)}\n`);
fs.writeFileSync(logPath,`${JSON.stringify(log,null,2)}\n`);
console.log('Cotejo curricular Academy, temario oficial y convocatorias añadido para 2621–2625.');
