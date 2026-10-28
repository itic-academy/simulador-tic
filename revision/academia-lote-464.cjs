const fs=require('node:fs');
const path=require('node:path');
const logPath=path.join(__dirname,'cambios-lote-464.json');
const bankPath=path.join(__dirname,'..','preguntas_preparatic.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const academy={url:'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',label:'ITIC Academy, Bloque 39 Calidad y Mantenimiento, edición 2026.1 (23-09-2026): edición 2023 de ISO/IEC 25010, transición McCall–SQuaRE, CMMI/ISO 330xx y métricas McCabe/Halstead.'};
const map={
 2631:{topics:['A1-98','A2-III-13'],detail:'El bloque contrasta expresamente ISO/IEC 25010:2011 (antecedente) con la edición 2023. El subfactor Adaptability bajo Portability se sustenta en la edición 2011; el material advierte que esa taxonomía ya no es la actual.'},
 2632:{topics:['A1-98','A2-III-13'],detail:'El índice incluye el modelo histórico de McCall; el factor Reusability se verificó con el informe original, no se deduce solo del contenido de Academy.'},
 2633:{topics:['A1-98','A2-III-13'],detail:'El bloque aborda McCall y SQuaRE. La jerarquía concreta factores/criterios/métricas se contrastó con el informe técnico original.'},
 2634:{topics:['A1-98','A2-III-13'],detail:'Academy cubre métricas de software y McCabe/Halstead, pero no presenta System Bang en el texto consultado. La respuesta sobre DeMarco se comprobó separadamente con SEI y Pressman.'},
 2635:{topics:['A1-98','A2-III-13'],detail:'El bloque contiene apartados de CMMI e ISO/IEC 330xx. La ubicación precisa de Supplier Agreement Management en CMMI-DEV v1.3, y la advertencia de que es una versión histórica, se contrastaron con SEI.'}
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
  const note=`Cotejo curricular: ${academy.label} ${m.detail} Correspondencia cotejada con revision/temario-oficial.json y convocatorias ${a1.label}/${a2.label}. El temario de Academy aporta encuadre curricular, no sustituye las fuentes primarias de revision.fuentes.`;
  q.clasificacion.nota=`${q.revision.observaciones} ${note}`.trim();
  q.revision.observaciones=`${q.revision.observaciones} ${note}`.trim();
  q.comentarios=q.revision.observaciones;
  if(!q.revision.fuentes.some(f=>f.url===academy.url))q.revision.fuentes.push({url:academy.url,referencia:`${academy.label} ${m.detail}`});
  c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,`${JSON.stringify(bank,null,2)}\n`);
fs.writeFileSync(logPath,`${JSON.stringify(log,null,2)}\n`);
console.log('Cotejo curricular Academy, temario oficial y convocatorias añadido para 2631–2635.');
