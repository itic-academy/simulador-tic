const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const root=path.join(__dirname,'..');
const bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-443.json');
const log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
  web:{url:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',label:'ITIC Academy, bloque 30 Tecnologías de Sistemas de la Información, versión 2026.1 (31-08-2026); XML, XML Schema/DTD, UX y accesibilidad web.'},
  admin:{url:'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk',label:'ITIC Academy, bloque 03 Actuación Administrativa y Administración Digital, versión 2026.2 (01-10-2026); legislación de sociedad de la información y administración electrónica.'},
  design:{url:'https://docs.google.com/document/d/1za_7e_LlvUEpja7VJyYElIgRIPu_AbE3/edit?usp=drivesdk&ouid=107088454749630873035&rtpof=true&sd=true',label:'ITIC Academy, bloque 38 Análisis, Diseño y Construcción de Sistemas de Información, versión 2026.1 (18-09-2026); diseño estructurado, modularidad y métricas.'},
  procurement:{url:'https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk',label:'ITIC Academy, bloque 05 Contratación, Presupuestos y Compra TIC, versión 2026.2 (01-10-2026); LCSP, procedimientos y sistemas dinámicos de adquisición.'},
  viability:{url:'https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view?usp=drivesdk',label:'ITIC Academy, bloque 17 Adquisición de Sistemas y Rentabilidad de Inversiones, versión 2026.2 (02-10-2026); evaluación de alternativas y compra TIC.'},
  mobile:{url:'https://drive.google.com/file/d/1nXa2jkiUqpu31smkt5D8WswcTgEN7XlB/view?usp=drivesdk',label:'ITIC Academy, bloque 47 Aplicaciones Móviles y Sistemas Operativos, versión 2026.1 (30-09-2026); tendencias de aplicaciones móviles.'}
};
const map={
  2526:{docs:['web'],detail:'el bloque incluye XML y sus derivaciones; DTD y XML Schema se distinguen como mecanismos de validación y la fuente W3C resuelve la ambigüedad técnica',topics:['A1-77','A2-II-9']},
  2527:{docs:['admin','web'],detail:'el bloque de administración digital sitúa el marco jurídico de sociedad de la información; el de tecnologías web aborda UX/accesibilidad. La definición legal literal se comprueba directamente en el RD 1112/2018',topics:['A1-44','A2-III-14']},
  2528:{docs:['design'],detail:'el bloque trata técnicas de diseño de software, modularidad y diseño estructurado; fan-out se define en una fuente de ingeniería de software y no se atribuye al temario una métrica de calidad específica',topics:['A1-93','A2-III-9']},
  2529:{docs:['procurement','viability'],detail:'ambos bloques cubren procedimientos LCSP y compra TIC/SDA; la clasificación jurídica se verifica en el texto consolidado vigente de la LCSP y se advierte que el identificador SDA 26/2021 es histórico',topics:['A1-11','A1-39']},
  2530:{docs:['mobile'],detail:'el bloque aborda características y tendencias de aplicaciones móviles; la definición de superapp se apoya en descripción sectorial de GSMA, sin tratar el término como estándar técnico formal',topics:['A1-124']}
};
const extraRefs={
  2530:[{url:'https://pmc.ncbi.nlm.nih.gov/articles/PMC10907532/',referencia:'Hasselwander, Digital platforms’ growth strategies and the rise of super apps, Heliyon (2024), artículo de investigación de acceso abierto: analiza las superapps como plataformas que agrupan mensajería, pagos, comercio y otros servicios en una misma aplicación; documenta que el término es descriptivo y no una categoría técnica normalizada.'}]
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
for(const change of log.cambios){
  const q=bank.preguntas.find(x=>x.id===change.id),row=map[change.id];
  assert.ok(q?.revision&&row,`Falta revisión o cotejo para ${change.id}`);
  for(const id of [...q.clasificacion.A1,...q.clasificacion.A2,...row.topics])assert.ok(official.has(id),`Tema oficial inexistente: ${id}`);
  q.clasificacion.A1=row.topics.filter(x=>x.startsWith('A1-'));
  q.clasificacion.A2=row.topics.filter(x=>x.startsWith('A2-'));
  const refs=row.docs.map(k=>({url:docs[k].url,referencia:`${docs[k].label}; ${row.detail}. Correspondencia contrastada con revision/temario-oficial.json y las convocatorias BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2).`}));
  const curriculum=row.docs.map(k=>docs[k].label).join('; ');
  const note=`Cotejo curricular: ${curriculum}; ${row.detail}. Correspondencia con ${row.topics.join(', ')} contrastada con revision/temario-oficial.json y las convocatorias BOE-A-2025-25938/BOE-A-2025-26262. La academia se usa como guía curricular; la clave se apoya en las fuentes primarias registradas.`;
  q.clasificacion.bloque_academia=`${curriculum}; ${row.detail}`;
  q.clasificacion.nota=note;
  if(!q.revision.observaciones.includes(note))q.revision.observaciones+=` ${note}`;
  q.comentarios=q.revision.observaciones;
  for(const ref of [...refs,...(extraRefs[change.id]||[])])if(!q.revision.fuentes.some(f=>f.url===ref.url))q.revision.fuentes.push(ref);
  change.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular ITIC Academy y clasificación oficial añadido para 2526–2530.');
