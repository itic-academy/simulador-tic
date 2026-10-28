const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bankPath=path.join(__dirname,'..','preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-397.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 data:{url:'https://drive.google.com/file/d/1uS8S8axBSb22s9Dbv2mTsFaHUUVlowiM/view?usp=drivesdk',label:'ITIC Academy, bloque 08, Protección de datos, actualización 2026'},
 admin:{url:'https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk',label:'ITIC Academy, bloque 05, Contratación, presupuestos, convenios, subvenciones y compra TIC, actualización 2026'},
 bluetooth:{url:'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk',label:'ITIC Academy, bloque 46, Redes inalámbricas y comunicaciones móviles; incluye Bluetooth, actualización 2026'},
 cobit:{url:'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk',label:'ITIC Academy, bloque 41, ITIL y COBIT 2019, actualización 2026'},
 digital:{url:'https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk',label:'ITIC Academy, bloque 06, Economía, sociedad, empleo y transformación digital, actualización 2026.2'}
};
const map={
 2301:{topics:['A1-27','A2-I-7'],docs:['data'],detail:'El bloque 08 desarrolla los conceptos del RGPD, responsable y encargado; correspondencia directa con A1-27 y A2-I-7.'},
 2302:{topics:['A1-13','A2-I-8'],docs:['admin'],detail:'El bloque 05 incluye expresamente convenios y colaboración público-privada; corresponde a A1-13. La Ley 40/2015 se incluye en el régimen jurídico A2-I-8.'},
 2303:{topics:['A1-114','A2-IV-11'],docs:['bluetooth'],detail:'El bloque 46 incluye Bluetooth en redes inalámbricas; correspondencia directa A1-114/A2-IV-11.'},
 2304:{topics:['A1-106','A2-II-11'],docs:['cobit'],detail:'El bloque 41 desarrolla ITIL y COBIT 2019; A1-106 menciona COBIT y A2-II-11 incluye marcos, normas y estándares de auditoría.'},
 2305:{topics:['A1-51','A2-I-6'],docs:['digital'],detail:'El bloque 06 estudia la evolución de las agendas digitales españolas hasta España Digital 2026. El enunciado conserva el plan de 2025 como objeto histórico; la correspondencia con A1-51 y A2-I-6 es temática y no equipara los planes 2013, 2025 y 2026.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);assert.deepEqual(log.cambios.map(c=>c.id),[2301,2302,2303,2304,2305]);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q?.revision&&m,`Falta cotejo ${c.id}`);assert.ok(m.topics.every(t=>official.has(t)),`Tema oficial inexistente ${c.id}`);q.clasificacion.A1=m.topics.filter(t=>t.startsWith('A1-'));q.clasificacion.A2=m.topics.filter(t=>t.startsWith('A2-'));const curriculum=`${m.docs.map(k=>docs[k].label).join('; ')}. ${m.detail}`;const note=`Cotejo curricular: ${curriculum} Correspondencias ${m.topics.join(', ')} verificadas frente a revision/temario-oficial.json y los anexos de las convocatorias BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2). El material de academia sirve de encuadre curricular; la respuesta se apoya en la fuente normativa o técnica primaria.`;q.clasificacion.bloque_academia=curriculum;q.clasificacion.nota=note;q.revision.observaciones+=` ${note}`;q.comentarios=q.revision.observaciones;c.actualizada=structuredClone(q)}
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');console.log('Cotejo Academy/temas oficiales lote 397 completado.');
