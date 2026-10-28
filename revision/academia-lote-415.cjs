const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bankPath=path.join(__dirname,'..','preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-415.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 admin:{url:'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk',label:'ITIC Academy, bloque 03 «Actuación administrativa y Administración digital», versión 2026.2: TREBEP, situaciones administrativas, AGE y régimen jurídico del sector público.'},
 constitution:{url:'https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk',label:'ITIC Academy, bloque 01 «Constitución, organización del Estado y AGE», versión 2026.2: organización y altos cargos de la Administración General del Estado.'},
 governance:{url:'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk',label:'ITIC Academy, bloque 41 «ITIL y COBIT», versión 2026: modelos de gobernanza y gestión del valor de las TIC.'},
 transparency:{url:'https://drive.google.com/file/d/17B9a1yxMFgHCHEyVVBi0PG-cdCYABVvd/view?usp=drivesdk',label:'ITIC Academy, bloque 11 «Reutilización de la información del sector público, datos abiertos y transparencia», versión 2026.2: Ley 19/2013 y reclamaciones de acceso.'},
 privacy:{url:'https://drive.google.com/file/d/1uS8S8axBSb22s9Dbv2mTsFaHUUVlowiM/view?usp=drivesdk',label:'ITIC Academy, bloque 08 «Protección de datos», edición 2026: RGPD, principios, derechos de las personas y régimen jurídico.'}
};
const mapping={
 2386:{topics:['A1-24','A2-I-8'],docs:['admin'],detail:'Situaciones administrativas de funcionarios y TREBEP.'},
 2387:{topics:['A1-4','A1-24','A2-I-8'],docs:['constitution','admin'],detail:'Organización de la AGE, régimen de altos cargos y marco general del empleo público; el régimen de altos cargos es específico.'},
 2388:{topics:['A1-30','A1-106'],docs:['governance'],detail:'Gobernanza TIC, COBIT y gestión del valor. No se fuerza A2: el programa oficial A2 GSI no enumera CGEIT/COBIT como epígrafe específico.'},
 2389:{topics:['A1-25','A2-I-4'],docs:['transparency'],detail:'Gobierno abierto, transparencia, Ley 19/2013 y reclamación ante el CTBG.'},
 2390:{topics:['A1-27','A2-I-7'],docs:['privacy'],detail:'Derechos RGPD de las personas interesadas, en particular portabilidad de los datos.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const calls=['https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938','https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262'];
assert.deepEqual(log.cambios.map(c=>c.id),[2386,2387,2388,2389,2390]);
for(const change of log.cambios){
 const q=bank.preguntas.find(x=>x.id===change.id),m=mapping[change.id];assert.ok(q?.revision&&m,`Falta pregunta/cotejo ${change.id}`);assert.ok(m.topics.every(x=>official.has(x)),`Tema oficial inexistente ${change.id}`);
 q.clasificacion.A1=m.topics.filter(x=>x.startsWith('A1-'));q.clasificacion.A2=m.topics.filter(x=>x.startsWith('A2-'));
 const curriculum=`${m.docs.map(k=>docs[k].label).join(' ')} ${m.detail}`,links=m.docs.map(k=>docs[k].url).join('; ');
 const note=`Cotejo curricular: ${curriculum} Materiales Drive: ${links}. Correspondencia comprobada en revision/temario-oficial.json y anexos de las convocatorias A1/A2 GSI BOE-A-2025-25938 y BOE-A-2025-26262 (${calls.join('; ')}). La academia contextualiza el estudio; la respuesta se verifica en las fuentes primarias.`;
 q.clasificacion.bloque_academia=links;q.clasificacion.nota=note;q.revision.observaciones+=` ${note}`;q.comentarios=q.revision.observaciones;change.actualizada=structuredClone(q);
}
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');console.log('Cotejo curricular del lote 415 completado.');
