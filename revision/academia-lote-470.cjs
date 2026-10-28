const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-470.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const academy={url:'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',label:'ITIC Academy, Bloque 39 Calidad y Mantenimiento, versión 2026.1 (23-09-2026), cotejado directamente en Drive'};
const a1={url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',label:'Programa oficial A1, BOE-A-2025-25938'};
const a2={url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',label:'Programa oficial A2 GSI, BOE-A-2025-26262'};
const map={
 2661:{topics:['A1-96','A1-98','A2-III-7','A2-III-13'],detail:'El bloque 39 incluye pruebas y técnicas de software, métricas y modelos de calidad. La correspondencia específica con pruebas estructurales se recoge en A1-96 y A2-III.7; la complejidad como métrica también se relaciona con A1-98 y A2-III.13. Academy sirve de contexto curricular, mientras la técnica se verifica con NIST/McCabe.'},
 2662:{topics:['A1-98','A2-III-13'],detail:'El bloque 39 incluye modelos de calidad y menciona McCall. La tabla concreta Product Operation/Product Revision se contrasta con el informe original RADC-TR-77-369; la reformulación separa pertenencia a un grupo de pertenencia al modelo completo.'},
 2663:{topics:['A1-98','A2-III-13'],detail:'El bloque 39 incluye modelos de calidad del software. La síntesis de fiabilidad y modularidad se limita al pasaje de OOSC escrito por Bertrand Meyer, fuente primaria de su propio marco, sin generalizarla a todos los modelos.'},
 2664:{topics:['A1-98','A2-III-13'],detail:'El bloque 39 trata calidad y costes. La categoría de fallo interno se contrasta con la definición PAF de ASQ. La referencia UNE se conserva únicamente como trasfondo histórico: el catálogo ISO confirma retirada de ISO 9004:1987, edición internacional equivalente, por lo que no se atribuye vigencia al estándar citado.'},
 2665:{topics:['A1-98','A2-III-13'],detail:'El bloque 39 aborda la familia SQuaRE y presenta ISO/IEC 25010:2023. La Academy no se usa para validar el dato de la edición retirada: ISO confirma tanto la edición de 2011 como su sustitución y describe en 2023 el modelo de nueve características.'}
};
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q?.revision&&m,`Falta cotejo ${c.id}`);
 for(const id of [...q.clasificacion.A1,...q.clasificacion.A2,...m.topics])assert.ok(official.has(id),`Tema oficial inexistente: ${id}`);
 q.clasificacion.A1=m.topics.filter(t=>t.startsWith('A1-'));q.clasificacion.A2=m.topics.filter(t=>t.startsWith('A2-'));
 const note=`Cotejo curricular: ${academy.label}. ${m.detail} Correspondencia contrastada con revision/temario-oficial.json y las convocatorias ${a1.label} y ${a2.label}. Academy aporta encaje curricular, no sustituye las fuentes técnicas.`;
 q.clasificacion.bloque_academia=`${academy.label}; ${m.detail}`;q.clasificacion.nota=`${q.revision.observaciones} ${note}`.trim();q.revision.observaciones=`${q.revision.observaciones} ${note}`.trim();q.comentarios=q.revision.observaciones;
 q.revision.fuentes.push({url:academy.url,referencia:`${academy.label}; ${m.detail}`});
 for(const id of m.topics.filter(t=>t.startsWith('A1-')))q.revision.fuentes.push({url:a1.url,referencia:`${a1.label}; correspondencia con ${id} contrastada en el programa publicado en BOE.`});
 for(const id of m.topics.filter(t=>t.startsWith('A2-')))q.revision.fuentes.push({url:a2.url,referencia:`${a2.label}; correspondencia con ${id} contrastada en el programa publicado en BOE.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo Academy, temas A1/A2 y convocatorias añadido a IDs 2661–2665.');
