const fs=require('node:fs');
const path=require('node:path');
const logPath=path.join(__dirname,'cambios-lote-461.json');
const bankPath=path.join(__dirname,'..','preguntas_preparatic.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const academy={url:'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',label:'ITIC Academy, Bloque 39 Calidad y Mantenimiento, edición 2026.1 (23-09-2026): A1-96/98/103 y A2-D13; seguridad como característica de calidad de producto, CMMI, evaluación y métricas (McCabe/Halstead), pruebas y aseguramiento.'};
const map={
  2616:{topics:['A1-96','A1-98','A2-II-10','A2-III-3'],detail:'El bloque presenta safety como característica de calidad del producto y encuadra fiabilidad/seguridad; los requisitos concretos se contrastan con ISO/IEC/IEEE y NASA.'},
  2617:{topics:['A1-98','A1-103','A2-III-13'],detail:'El material cubre métricas, mejora y modelos de calidad; la secuencia calidad-costes-productividad se contrasta con el artículo original de Deming.'},
  2618:{topics:['A1-96','A1-98','A2-III-13'],detail:'El índice y contenido del bloque incluyen CMMI, ISO/IEC 330xx y modelos de evaluación/mejora; los nombres actuales de niveles se verifican con CMMI Institute.'},
  2619:{topics:['A1-98','A2-III-13'],detail:'El bloque separa métricas de complejidad (McCabe/Halstead) de modelos de calidad; la categoría de Bang se comprobó en el informe técnico del SEI, no se da por supuesta a partir del temario.'},
  2620:{topics:['A1-98','A1-103','A2-III-13'],detail:'El bloque ofrece encuadre de calidad y evaluación; la delimitación de COPQ a fallos internos/externos se contrasta con la definición de ASQ.'}
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
  const note=`Cotejo curricular: ${academy.label} ${m.detail} Correspondencia comprobada con revision/temario-oficial.json y las convocatorias ${a1.label}/${a2.label}; A2-D13 es el código interno de Academy y el epígrafe oficial es A2-III-13. Academy aporta encuadre, no sustituye la evidencia primaria de revision.fuentes.`;
  q.clasificacion.nota=`${q.revision.observaciones} ${note}`.trim();
  q.revision.observaciones=`${q.revision.observaciones} ${note}`.trim();
  q.comentarios=q.revision.observaciones;
  if(!q.revision.fuentes.some(f=>f.url===academy.url))q.revision.fuentes.push({url:academy.url,referencia:`${academy.label} ${m.detail}`});
  c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,`${JSON.stringify(bank,null,2)}\n`);
fs.writeFileSync(logPath,`${JSON.stringify(log,null,2)}\n`);
console.log('Cotejo curricular Academy, temario oficial y convocatorias añadido para 2616–2620.');
