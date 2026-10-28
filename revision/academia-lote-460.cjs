const fs=require('node:fs');
const path=require('node:path');
const logPath=path.join(__dirname,'cambios-lote-460.json');
const bankPath=path.join(__dirname,'..','preguntas_preparatic.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const academy={
  2611:{url:'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',label:'ITIC Academy, Bloque 39 Calidad y Mantenimiento, edición 2026.1 (23-09-2026): A1-98 y A2-D13; calidad del software y métricas.',detail:'El bloque cubre métricas y calidad del software; la estructura exacta Goal–Question–Metric se verifica con el capítulo de Basili, Caldiera y Rombach.'},
  2612:{url:'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk',label:'ITIC Academy, Inteligencia Artificial y Ciencia de Datos, edición 2026.1 (31-08-2026): A1-71 y A2-D5; fundamentos estadísticos, estructuras y algoritmos.',detail:'El documento ubica la pregunta en fundamentos de ciencia de datos y grafos/algoritmos; la definición de coeficiente local procede de Newman (2003), no del material de academia.'},
  2613:{url:'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',label:'ITIC Academy, Bloque 39 Calidad y Mantenimiento, edición 2026.1 (23-09-2026): A1-103/A1-98 y A2-D13; gestión y aseguramiento de la calidad.',detail:'El bloque aporta encuadre de calidad y normas. La lista de siete principios y la sustitución de ISO 9000:2015 por ISO 9000:2026 se verifican en fuentes oficiales ISO.'},
  2614:{url:'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',label:'ITIC Academy, Bloque 39 Calidad y Mantenimiento, edición 2026.1 (23-09-2026): A1-98 y A2-D13; modelos históricos de calidad del software.',detail:'El bloque cubre modelos de calidad/McCall; la definición histórica concreta de Integrity procede del informe original RADC de 1977.'},
  2615:{url:'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',label:'ITIC Academy, Bloque 39 Calidad y Mantenimiento, edición 2026.1 (23-09-2026): A1-98/A1-103 y A2-D13; gestión y calidad.',detail:'El bloque cubre de forma general gestión/modelos de calidad, pero no atribuye ni explica el modelo de coste compuesto de Lawler; esta correspondencia curricular no verifica la respuesta pendiente.'}
};
const mappings={
  2611:['A1-98','A2-III-13'],
  2612:['A1-71','A2-III-5'],
  2613:['A1-103','A2-III-13'],
  2614:['A1-98','A2-III-13'],
  2615:['A1-98','A1-103','A2-III-13']
};
for(const c of log.cambios){
  const q=bank.preguntas.find(x=>x.id===c.id),a=academy[c.id],topics=mappings[c.id];
  if(!q?.revision||!a||!topics)throw new Error(`Falta revisión/encuadre para ${c.id}`);
  for(const t of topics)if(!official.has(t))throw new Error(`Tema oficial inexistente: ${t}`);
  q.clasificacion.A1=topics.filter(t=>t.startsWith('A1-'));
  q.clasificacion.A2=topics.filter(t=>t.startsWith('A2-'));
  q.clasificacion.bloque_academia=a.label;
  const note=`Cotejo curricular: ${a.label} ${a.detail} Correspondencia cotejada con revision/temario-oficial.json y convocatorias A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262. El material de academia solo orienta el encaje; las afirmaciones técnicas se apoyan en las fuentes primarias citadas en revision.fuentes. A2-D13 es etiqueta interna de Academy; el epígrafe oficial es A2-III-13. Para la 2612, A2-D5 corresponde oficialmente a A2-III-5.`;
  q.clasificacion.nota=`${q.revision.observaciones} ${note}`.trim();
  q.revision.observaciones=`${q.revision.observaciones} ${note}`.trim();
  q.comentarios=q.revision.observaciones;
  if(!q.revision.fuentes.some(f=>f.url===a.url))q.revision.fuentes.push({url:a.url,referencia:`${a.label} ${a.detail}`});
  c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,`${JSON.stringify(bank,null,2)}\n`);
fs.writeFileSync(logPath,`${JSON.stringify(log,null,2)}\n`);
console.log('Cotejo Academy/temario/convocatorias añadido para 2611–2615.');
