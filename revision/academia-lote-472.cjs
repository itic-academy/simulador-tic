const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-472.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const academy={url:'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',label:'ITIC Academy, bloque Calidad y Mantenimiento, versión 2026.1 (23-09-2026), consultado directamente en Drive'};
const a1={url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',label:'Programa oficial A1, BOE-A-2025-25938'};
const a2={url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',label:'Programa oficial A2 GSI, BOE-A-2025-26262'};
const map={
 2671:{topics:['A1-98','A2-III-13'],detail:'El índice y el apartado 2.1 sitúan McCall dentro del recorrido de modelos de calidad, pero no enumeran qué conceptos del informe histórico son factores. La distinción entre los once factores y las bases de coste/tiempo se contrasta directamente con RADC-TR-77-369.'},
 2672:{topics:['A1-98','A2-III-13'],detail:'El apartado 2.1 cubre el modelo de McCall, sin reproducir sus criterios. La relación de Correctness con traceability, completeness y consistency se comprueba en el informe original RADC-TR-77-369.'},
 2673:{topics:['A1-98','A1-103','A2-III-13'],detail:'El temario incluye el modelo de McCall y SQuaRE en modelos de calidad del software y trata expresamente EFQM en A1-103 y el apartado 3.3. FURPS se coteja con documentación de IBM Rational; EFQM con su entidad oficial. El Academy sí incluye explícitamente EFQM y McCall, pero no nombra FURPS en el texto extraído.'},
 2674:{topics:['A1-98','A2-III-13'],detail:'La sección 4 cubre métricas y la sección 4.3 desarrolla Halstead y McCabe; MOOD no aparece literalmente en el texto extraído. Se cotejan sus seis métricas con la publicación de Brito e Abreu y su trabajo original.'},
 2675:{topics:['A1-98','A2-III-13'],detail:'El índice incluye ISO/IEC 25010:2023 (apartado 2.3) y evaluación/medición; la composición del modelo de producto se contrasta con la ficha vigente de ISO, que enumera nueve características.'}
};
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q?.revision&&m,`Falta cotejo ${c.id}`);
 for(const id of [...q.clasificacion.A1,...q.clasificacion.A2,...m.topics])assert.ok(official.has(id),`Tema oficial inexistente: ${id}`);
 q.clasificacion.A1=m.topics.filter(t=>t.startsWith('A1-'));q.clasificacion.A2=m.topics.filter(t=>t.startsWith('A2-'));
 const note=`Cotejo curricular: ${academy.label}. ${m.detail} Correspondencia contrastada con revision/temario-oficial.json y las convocatorias ${a1.label} y ${a2.label}. El temario de academia aporta contexto y no sustituye las fuentes técnicas primarias.`;
 q.clasificacion.bloque_academia=`${academy.label}; ${m.detail}`;q.clasificacion.nota=`${q.revision.observaciones} ${note}`.trim();q.revision.observaciones=`${q.revision.observaciones} ${note}`.trim();q.comentarios=q.revision.observaciones;
 q.revision.fuentes.push({url:academy.url,referencia:`${academy.label}; ${m.detail}`});
 for(const id of m.topics.filter(t=>t.startsWith('A1-')))q.revision.fuentes.push({url:a1.url,referencia:`${a1.label}; correspondencia con ${id} contrastada en el programa publicado en BOE.`});
 for(const id of m.topics.filter(t=>t.startsWith('A2-')))q.revision.fuentes.push({url:a2.url,referencia:`${a2.label}; correspondencia con ${id} contrastada en el programa publicado en BOE.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo Academy, temas oficiales A1/A2 y convocatorias añadido a IDs 2671–2675.');
