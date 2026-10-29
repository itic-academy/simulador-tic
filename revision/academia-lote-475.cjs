const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-475.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const academy={url:'https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk',label:'ITIC Academy, Constitución, Organización del Estado y AGE, versión 2026.2 (01-10-2026), leído directamente en Drive'};
const a1={url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',label:'Programa oficial A1, BOE-A-2025-25938'};
const a2={url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',label:'Programa oficial A2 GSI, BOE-A-2025-26262'};
const map={
 2686:{topics:['A1-1','A2-I-3'],detail:'El apartado sobre el Gobierno y las relaciones con las Cortes se coteja con A1-1/A2-I.3; el bloque 2026.2 explica la moción constructiva y la exigencia de una décima parte de los Diputados.'},
 2687:{topics:['A1-1','A2-I-1'],detail:'El bloque 2026.2 desarrolla las atribuciones constitucionales de la Corona, incluido el artículo 62; encaje oficial A1-1/A2-I.1.'},
 2688:{topics:['A1-2','A2-I-2'],detail:'El bloque 2026.2 trata la naturaleza, composición y atribuciones del Tribunal Constitucional; encaje oficial A1-2/A2-I.2.'},
 2689:{topics:['A1-1','A2-I-1'],detail:'El apartado de la Corona del bloque 2026.2 reproduce la prohibición de indultos generales del artículo 62.i; encaje A1-1/A2-I.1.'},
 2690:{topics:['A1-1','A1-4','A2-I-3'],detail:'El bloque 2026.2 contiene el artículo 104 y vincula las funciones/estatutos de los Cuerpos de Seguridad a la LO 2/1986. A1-1/A1-4 y A2-I.3 son encajes constitucionales generales; el programa A2 no tiene epígrafe específico de policía.'}
};
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q?.revision&&m,`Falta cotejo ${c.id}`);
 for(const id of m.topics)assert.ok(official.has(id),`Tema oficial inexistente: ${id}`);
 q.clasificacion.A1=m.topics.filter(t=>t.startsWith('A1-'));q.clasificacion.A2=m.topics.filter(t=>t.startsWith('A2-'));
 const note=`Cotejo curricular: ${academy.label}. ${m.detail} Correspondencia contrastada con revision/temario-oficial.json y las convocatorias ${a1.label} y ${a2.label}. El material de academia es una guía didáctica; la respuesta se verifica con la Constitución/ley orgánica publicadas en BOE.`;
 q.clasificacion.bloque_academia=`${academy.label}; ${m.detail}`;q.clasificacion.nota=`${q.revision.observaciones} ${note}`.trim();q.revision.observaciones=`${q.revision.observaciones} ${note}`.trim();q.comentarios=q.revision.observaciones;
 q.revision.fuentes.push({url:academy.url,referencia:`${academy.label}; ${m.detail}`});
 for(const id of m.topics.filter(t=>t.startsWith('A1-')))q.revision.fuentes.push({url:a1.url,referencia:`${a1.label}; correspondencia con ${id} contrastada en el programa publicado en BOE.`});
 for(const id of m.topics.filter(t=>t.startsWith('A2-')))q.revision.fuentes.push({url:a2.url,referencia:`${a2.label}; correspondencia con ${id} contrastada en el programa publicado en BOE.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo Academy, temas oficiales A1/A2 y convocatorias añadido a los cinco reactivos del lote 475.');
