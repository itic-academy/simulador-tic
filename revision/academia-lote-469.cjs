const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-469.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const academy={url:'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',label:'ITIC Academy, Bloque 39 Calidad y Mantenimiento, versión 2026.1 (23-09-2026), leído en Drive'};
const a1={url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',label:'Programa oficial A1, BOE-A-2025-25938'};
const a2={url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',label:'Programa oficial A2 GSI, BOE-A-2025-26262'};
const map={
 2656:{topics:['A1-98','A2-III-13'],detail:'El bloque 39 presenta calidad del software y modelos, pero el texto cotejado no desarrolla la afirmación de un crecimiento exponencial de coste ni la relación Lundvall–Juran con ese grado de precisión. El reactivo se reformula usando el supuesto clásico delimitado y contrastado con literatura académica; la academia no se presenta como prueba.'},
 2657:{topics:['A1-98','A2-III-13'],detail:'El bloque actual incluye CMMI e ISO/IEC 330xx, no detalla el modelo histórico SW-CMM v1.1. La secuencia y el nivel se contrastan con el Software Engineering Institute.'},
 2658:{topics:['A1-98','A2-III-13'],detail:'El bloque incorpora McCall como modelo de calidad. La asociación precisa Accuracy–Reliability se verifica con el informe original RADC-TR-77-369.'},
 2659:{topics:['A1-98','A2-III-13'],detail:'El bloque trata McCall, métricas y SQuaRE/ISO 25010:2023. La definición específica de Efficiency procede del informe original de McCall; se contextualiza sin confundirla con el nombre actual Performance efficiency de ISO.'},
 2660:{topics:['A1-98','A2-III-13'],detail:'El bloque repasa McCall como modelo clásico. Se comprueba el nombre original Integrity y la agrupación Product Operation directamente con el informe RADC-TR-77-369.'}
};
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q?.revision&&m,`Falta cotejo ${c.id}`);
 for(const id of [...q.clasificacion.A1,...q.clasificacion.A2,...m.topics])assert.ok(official.has(id),`Tema oficial inexistente: ${id}`);
 q.clasificacion.A1=m.topics.filter(t=>t.startsWith('A1-'));q.clasificacion.A2=m.topics.filter(t=>t.startsWith('A2-'));
 const note=`Cotejo curricular: ${academy.label}. ${m.detail} Correspondencia contrastada con revision/temario-oficial.json y las convocatorias ${a1.label} y ${a2.label}. Academy aporta el encaje curricular; no sustituye las fuentes técnicas primarias.`;
 q.clasificacion.bloque_academia=`${academy.label}; ${m.detail}`;q.clasificacion.nota=`${q.revision.observaciones} ${note}`.trim();q.revision.observaciones=`${q.revision.observaciones} ${note}`.trim();q.comentarios=q.revision.observaciones;
 q.revision.fuentes.push({url:academy.url,referencia:`${academy.label}; ${m.detail}`});
 q.revision.fuentes.push({url:a1.url,referencia:`${a1.label}; cotejo de ${m.topics.filter(t=>t.startsWith('A1-')).join(', ')} con el programa publicado en el BOE.`});
 q.revision.fuentes.push({url:a2.url,referencia:`${a2.label}; cotejo de ${m.topics.filter(t=>t.startsWith('A2-')).join(', ')} con el programa publicado en el BOE.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo Academy, temario oficial A1/A2 y convocatorias añadido a IDs 2656–2660.');
