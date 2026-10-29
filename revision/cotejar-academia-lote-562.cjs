const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-562.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const topics=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const academy={
3126:{A1:['A1-8'],A2:['A2-I-8'],note:'ITIC Academy Bloque 03, Actuación Administrativa y Administración Digital, versión 2026.2: Ley 39/2015 y eficacia de los actos administrativos.'},
3127:{A1:['A1-8'],A2:['A2-I-8'],note:'ITIC Academy Bloque 03, versión 2026.2, §2 Régimen Jurídico del Sector Público (Ley 40/2015): técnicas que afectan al ejercicio de competencias, incluida la delegación.'},
3128:{A1:['A1-8'],A2:['A2-I-8'],note:'ITIC Academy Bloque 03, versión 2026.2, §3 Procedimiento Administrativo Común (Ley 39/2015): emisión y efectos de informes administrativos.'},
3129:{A1:['A1-11'],A2:[],note:'ITIC Academy Bloque 05 Contratación, Presupuestos y Compra TIC, versión 2026.2: duración y prórrogas LCSP; la guía señala expresamente que el bloque A1 no tiene equivalente en el temario A2 GSI.'},
3130:{A1:['A1-24'],A2:['A2-I-8'],note:'ITIC Academy Bloque 03, versión 2026.2, apartado del TREBEP y Bloque 07 Dirección Pública y Empleo, versión 2026.1: movilidad y situaciones del personal funcionario, empleo público y art. 88 TREBEP.'}
};
const links={
3126:['https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk'],
3127:['https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk'],
3128:['https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk'],
3129:['https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk'],
3130:['https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk','https://drive.google.com/file/d/1TCiFKKRdum7eVCEog-AOw6KgwzGp1ZP4/view?usp=drivesdk']
};
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=academy[c.id];assert.ok(q&&q.revision&&m,'Falta pregunta o clasificación '+c.id);for(const t of [...m.A1,...m.A2])assert.ok(topics.has(t),'Tema oficial inexistente '+t);const note=m.note+' '+links[c.id].join(' ')+' Correspondencias contrastadas con revision/temario-oficial.json y los anexos I y IX de las convocatorias oficiales A1 y A2 GSI de 2025 (BOE-A-2025-25938 y BOE-A-2025-26262). ITIC Academy se usa como cotejo curricular, no como fuente normativa.';q.revision.observaciones+=' Cotejo curricular: '+note;q.clasificacion={A1:m.A1,A2:m.A2,bloque_academia:note,estado:'revisada',nota:q.revision.estado+'. '+note};q.comentarios=q.revision.observaciones;c.actualizada=structuredClone(q)}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Clasificación A1/A2 y cotejo Academy añadidos a lote 562.');
