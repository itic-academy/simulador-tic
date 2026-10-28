const fs=require('node:fs');
const path=require('node:path');
const logPath=path.join(__dirname,'cambios-lote-466.json');
const bankPath=path.join(__dirname,'..','preguntas_preparatic.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const academy39={url:'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',label:'ITIC Academy, bloque 39 Calidad y Mantenimiento, edición 2026.1 (23-09-2026): métricas, modelos de calidad, aseguramiento y pruebas.'};
const academy38={url:'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk',label:'ITIC Academy, bloque 38 Análisis, Diseño y Construcción de Sistemas de Información, edición 2026.1.'};
const map={
 2641:{topics:['A1-99','A2-II-15'],academy:academy38,detail:'El bloque 38 da el encuadre de análisis, diseño y estimación de esfuerzo; no se utiliza para fijar la denominación exacta de los tres submodelos, contrastada con Boehm CSSE.'},
 2642:{topics:['A1-96','A2-III-7','A2-III-13'],academy:academy39,detail:'El bloque 39 recoge calidad, aseguramiento y pruebas. La diferencia entre cobertura estructural y detección de condiciones de carrera se establece con el manual NASA SWE-189 y MITRE CWE-362.'},
 2643:{topics:['A1-98','A2-III-13'],academy:academy39,detail:'El bloque 39 trata métricas de software; la taxonomía concreta proceso/proyecto/producto se atribuye a Pressman, no al resumen de academia.'},
 2644:{topics:['A1-98','A2-III-13'],academy:academy39,detail:'El bloque 39 trata métricas y calidad de software. Booch, CK, MOOD y Lorenz/Kidd se contrastan con los libros y artículos originales; el bloque no reemplaza esas fuentes.'},
 2645:{topics:['A1-34','A1-96','A1-98','A2-III-7','A2-III-13'],academy:academy39,detail:'El bloque 39 cubre calidad, aseguramiento y pruebas. El reparto formal de actividades SQA se verifica en NASA-STD-8739.8B; Academy sirve de marco curricular.'}
};
const a1={url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',label:'Programa oficial A1 BOE-A-2025-25938'};
const a2={url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',label:'Programa oficial A2 GSI BOE-A-2025-26262'};
for(const c of log.cambios){
  const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];
  if(!q?.revision||!m)throw new Error(`Falta revisión/tema para ${c.id}`);
  for(const t of m.topics)if(!official.has(t))throw new Error(`Tema oficial inexistente: ${t}`);
  q.clasificacion.A1=m.topics.filter(t=>t.startsWith('A1-'));
  q.clasificacion.A2=m.topics.filter(t=>t.startsWith('A2-'));
  q.clasificacion.bloque_academia=m.academy.label;
  const note=`Cotejo curricular: ${m.academy.label} ${m.detail} Correspondencia contrastada con revision/temario-oficial.json y convocatorias ${a1.label}/${a2.label}. El material de Academy aporta contexto de cobertura, no sustituye la fuente que valida la respuesta.`;
  q.clasificacion.nota=`${q.revision.observaciones} ${note}`.trim();
  q.revision.observaciones=`${q.revision.observaciones} ${note}`.trim();
  q.comentarios=q.revision.observaciones;
  if(!q.revision.fuentes.some(f=>f.url===m.academy.url))q.revision.fuentes.push({url:m.academy.url,referencia:`${m.academy.label} ${m.detail}`});
  c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,`${JSON.stringify(bank,null,2)}\n`);
fs.writeFileSync(logPath,`${JSON.stringify(log,null,2)}\n`);
console.log('Cotejo de Academy, temario A1/A2 y convocatorias BOE añadido a 2641–2645.');
