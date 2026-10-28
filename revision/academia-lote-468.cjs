const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-468.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const academy={url:'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',label:'ITIC Academy, Bloque 39 Calidad y Mantenimiento, versión 2026.1 (23-09-2026), cotejado directamente en Drive'};
const a1={url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',label:'Programa oficial A1, BOE-A-2025-25938'};
const a2={url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',label:'Programa oficial A2 GSI, BOE-A-2025-26262'};
const map={
 2651:{topics:['A1-98','A2-III-13'],detail:'El bloque 39 incluye calidad y SQuaRE, pero la división precisa entre requisitos y evaluación se confirma con las fichas ISO/IEC 25000, 25030 y 25040.'},
 2652:{topics:['A1-98','A2-III-13'],detail:'El bloque repasa el modelo de McCall. La clasificación concreta Product Operation se contrasta con el informe original RADC-TR-77-369 de 1977.'},
 2653:{topics:['A1-98','A2-III-13'],detail:'El bloque incluye McCall como modelo clásico. “Integrity” es el nombre del factor original; se conserva como concepto histórico y no se equipara a la característica Security de ISO actual.'},
 2654:{topics:['A1-98','A2-III-13'],detail:'El bloque aborda costes y calidad de software. La forma clásica Lundvall–Juran se valida por separado con literatura académica sobre el modelo y sus límites; no se atribuye a ITIC Academy.'},
 2655:{topics:['A1-98','A2-III-13'],detail:'El bloque presenta ISO/IEC 25010:2023. La clasificación actual como subcaracterística de Interaction capability se verifica en la vista previa oficial ISO; se distingue de usability en la edición 2011 retirada.'}
};
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q?.revision&&m,`Falta cotejo ${c.id}`);
 for(const id of [...q.clasificacion.A1,...q.clasificacion.A2,...m.topics])assert.ok(official.has(id),`Tema oficial inexistente: ${id}`);
 q.clasificacion.A1=m.topics.filter(t=>t.startsWith('A1-'));q.clasificacion.A2=m.topics.filter(t=>t.startsWith('A2-'));
 const note=`Cotejo curricular: ${academy.label}. ${m.detail} Correspondencia contrastada con revision/temario-oficial.json y las convocatorias ${a1.label} y ${a2.label}. Academy aporta el encaje curricular; no sustituye las fuentes primarias que validan la respuesta.`;
 q.clasificacion.bloque_academia=`${academy.label}; ${m.detail}`;q.clasificacion.nota=`${q.revision.observaciones} ${note}`.trim();q.revision.observaciones=`${q.revision.observaciones} ${note}`.trim();q.comentarios=q.revision.observaciones;
 q.revision.fuentes.push({url:academy.url,referencia:`${academy.label}; ${m.detail}`});
 q.revision.fuentes.push({url:a1.url,referencia:`${a1.label}; cotejo de ${m.topics.filter(t=>t.startsWith('A1-')).join(', ')} con el programa del BOE.`});
 q.revision.fuentes.push({url:a2.url,referencia:`${a2.label}; cotejo de ${m.topics.filter(t=>t.startsWith('A2-')).join(', ')} con el programa del BOE.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo Academy, temario oficial A1/A2 y convocatorias añadido a IDs 2651–2655.');
