const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),batchPath=path.join(__dirname,'cambios-lote-1316.json'),outPath=path.join(__dirname,'correccion-clasificacion-lote-1316.json');
assert.ok(!fs.existsSync(outPath),'La corrección ya fue aplicada');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),batch=JSON.parse(fs.readFileSync(batchPath,'utf8'));
const fixes={6902:{from:['A2-IV-7','A2-IV-8'],to:['A2-II-8','A2-IV-8'],old:'A2-IV-7/A2-IV-8',next:'A2-II-8/A2-IV-8'},6903:{from:['A2-IV-7'],to:['A2-II-8'],old:'A2-IV-7',next:'A2-II-8'},6905:{from:['A2-IV-7','A2-IV-8'],to:['A2-II-8','A2-IV-8'],old:'A2-IV-7/A2-IV-8',next:'A2-II-8/A2-IV-8'}};
const changes=[];
for(const [idText,f] of Object.entries(fixes)){const id=Number(idText),q=bank.preguntas.find(x=>x.id===id),record=batch.cambios.find(x=>x.id===id);assert.ok(q&&record,`Falta ID ${id}`);const current=structuredClone(q),prior=structuredClone(q);const intended=f.to;
 if(JSON.stringify(q.clasificacion.A2)===JSON.stringify(f.from)){q.clasificacion.A2=intended;q.clasificacion.nota=q.clasificacion.nota.replace(f.old,f.next);q.comentarios=q.comentarios.replace(f.old,f.next);q.revision.observaciones=q.revision.observaciones.replace(f.old,f.next);}
 else assert.deepEqual(q.clasificacion.A2,intended,`Clasificación inesperada en ${id}`);
 prior.clasificacion.A2=f.from;prior.clasificacion.nota=prior.clasificacion.nota.replace(f.next,f.old);prior.comentarios=prior.comentarios.replace(f.next,f.old);prior.revision.observaciones=prior.revision.observaciones.replace(f.next,f.old);record.actualizada=structuredClone(q);changes.push({id,anterior:prior,actualizada:structuredClone(q)});
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(batchPath,JSON.stringify(batch,null,2)+'\n');
fs.writeFileSync(outPath,JSON.stringify({fecha:'2026-11-15',alcance:'Rectificación de trazabilidad curricular A2 en lote 1316, sin modificar estados ni respuestas.',motivo:'Los temas oficiales A2-II.8 incluyen TCP/IP, OSI, direccionamiento y encaminamiento; A2-IV.7 corresponde a medios de transmisión/cableado. Se reemplaza la clasificación equivocada A2-IV.7 por A2-II.8 en las preguntas 6902, 6903 y 6905; se conserva IV.8 únicamente en las cuestiones con ámbito LAN.',cambios:changes},null,2)+'\n');console.log('Clasificación A2 del lote 1316 rectificada (6902, 6903 y 6905).');
