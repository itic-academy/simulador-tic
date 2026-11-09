const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-777.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const boeA1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',boeA2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy={
  treatments:{url:'https://drive.google.com/file/d/0Bw-rS_kOHzMKNjJTWDRLSnlFdFk/view?usp=drivesdk&resourcekey=0-Ix690gesGmtBQd-EZwH1cw',name:'ITIC Academy, test del bloque B1'},
  risp:{url:'https://drive.google.com/file/d/1IWbbWLAMbUPNy8PPecKUIWLpvUtawNQs/view?usp=drivesdk',name:'ITIC Academy, tema A1-31 RISP, edición 2026'},
  plan:{url:'https://drive.google.com/file/d/1fti1UIhEIqK3pY8GBENi-4rTKwoEG8tF/view?usp=drivesdk',name:'ITIC Academy, bloque 12 Planificación Estratégica TIC, edición 2026'},
  pert:{url:'https://drive.google.com/file/d/1DMz3yKo5YBTwNecdydOqWB9CxkyrQZ10/view?usp=drivesdk',name:'ITIC Academy, temas 36/94/98: Gantt, PERT y estimación'},
  maut:{url:'https://drive.google.com/file/d/1eUycEwRk8zA8IIrGWS-tJqNXpajQQR8S/view?usp=drivesdk',name:'ITIC Academy, temas 40–42: evaluación de alternativas e inversiones'}
};
const map={
 4206:{a1:['86'],a2:['III-2'],sources:[['treatments','El test recoge el enunciado sobre el modelo orientado a tratamientos; la explicación académica contrasta el enfoque de procesos/tratamientos, que se centra en funciones de transformación de datos, con el modelado centrado en entidades.']]},
 4207:{a1:['31'],a2:['I-9'],sources:[['risp','Tema actualizado 2026: estrategia RISP, datos reutilizables y catálogo; la respuesta se contrastó con el apartado 4.1 de la guía oficial, no se tomó el test como autoridad normativa.']]},
 4208:{a1:['36'],a2:['III-2'],sources:[['plan','Planificación temporal de proyectos y representación de tareas en escala de calendario; se contrasta con la documentación de Gantt y asignación de recursos del software de gestión.']]},
 4209:{a1:['36'],a2:['III-2'],sources:[['pert','Comparación didáctica vigente de Gantt, PERT y estimación; PERT usa estimaciones de duración incierta y se distingue de CPM.']]},
 4210:{a1:['35'],a2:['II-15'],sources:[['maut','Sección de utilidad multiatributo/UMA: se explica la valoración del riesgo e incertidumbre mediante funciones de utilidad; el cotejo se refina con la guía pública de MCDA/Expected Utility.']]}
};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q?.revision&&q.clasificacion&&m,'Falta revisión/cotejo '+c.id);for(const id of [...m.a1.map(n=>'A1-'+n),...m.a2.map(n=>'A2-'+n)])assert.ok(official.has(id),'Tema oficial inexistente: '+id);q.clasificacion.A1=m.a1.map(n=>'A1-'+n);q.clasificacion.A2=m.a2.map(n=>'A2-'+n);q.clasificacion.bloque_academia=m.sources.map(([key,note])=>academy[key].name+'; '+note).join(' ')+` Correspondencia oficial: ${m.a1.map(n=>'A1 tema '+n).join(', ')}; ${m.a2.map(n=>'A2 tema '+n).join(', ')}.`;q.clasificacion.nota='El material académico se usa para cotejar cobertura y terminología, no como autoridad normativa. La respuesta se contrasta además con las fuentes institucionales citadas en cada ficha.';q.revision.observaciones+=' Cotejo académico: '+q.clasificacion.bloque_academia;const refs=[...m.sources.map(([key,referencia])=>({url:academy[key].url,referencia:academy[key].name+'; '+referencia})),{url:boeA1,referencia:'Convocatoria A1 GSI 2025, anexo I: '+m.a1.map(n=>'tema '+n).join(', ')},{url:boeA2,referencia:'Convocatoria A2 GSI 2025, anexo IX: '+m.a2.map(n=>'tema '+n).join(', ')}];for(const f of refs)if(!q.revision.fuentes.some(x=>x.url===f.url))q.revision.fuentes.push(f);c.actualizada=structuredClone(q)}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo académico y de programas A1/A2 aplicado a 4206–4210.');
