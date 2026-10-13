const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
module.exports=function({numero,fecha,records,edits={}}){
 assert.match(numero,/^\d{3}$/);assert.match(fecha,/^\d{4}-\d{2}-\d{2}$/);
 const file=path.join(__dirname,'..','preguntas_preparatic.json'),log=path.join(__dirname,`cambios-lote-${numero}.json`);
 assert.ok(!fs.existsSync(log),'El lote ya existe');
 const raw=fs.readFileSync(file,'utf8'),data=JSON.parse(raw),changes=[];
 const topics=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
 for(const [id,a1,a2,etiquetas,url,referencia,note,state] of records){
  const q=data.preguntas.find(q=>q.id===id);assert.ok(q&&!q.revision,`Pregunta ${id} ausente o ya revisada`);
  const original=structuredClone(q),{opcion,...edit}=edits[id]||{};Object.assign(q,edit);if(opcion)q.opciones[opcion[0]]=opcion[1];
  q.clasificacion={A1:a1.map(n=>`A1-${n}`),A2:a2.map(n=>`A2-${n}`),bloque_academia:null,estado:'revisada',nota:'Bloque de academia pendiente de cotejo. Una lista vacía no implica exclusión del programa.'};
  for(const t of [...q.clasificacion.A1,...q.clasificacion.A2])assert.ok(topics.has(t),t);
  q.etiquetas=etiquetas;q.revision={estado:state||(edits[id]?'corregida':'vigente'),fecha,fuentes:url?[{url,referencia}]:[],observaciones:note};if(url)q.comentarios=note;
  assert.ok(Number.isInteger(q.respuesta_correcta)&&q.respuesta_correcta>=0&&q.respuesta_correcta<q.opciones.length);
  assert.ok(url||q.revision.estado.startsWith('pendiente_'));
  changes.push({id,original,actualizada:structuredClone(q)});
 }
 const byId=new Map(changes.map(c=>[c.id,c]));assert.equal(byId.size,records.length);let count=0;
 const output=raw.replace(/^    \{[\s\S]*?^    \}/gm,block=>{const old=JSON.parse(block),change=byId.get(old.id);if(!change)return block;assert.deepEqual(old,change.original);count++;return JSON.stringify(change.actualizada,null,2).split('\n').map(l=>'    '+l).join('\n');});
 assert.equal(count,records.length);assert.deepEqual(JSON.parse(output),data);
 fs.writeFileSync(log,JSON.stringify({fecha,alcance:`IDs ${records[0][0]}–${records.at(-1)[0]}; revisión individual con fuentes y pendientes explícitos.`,cambios:changes},null,2)+'\n',{flag:'wx'});
 fs.writeFileSync(file,output);console.log(`Lote ${numero}: ${count} preguntas.`);
};
