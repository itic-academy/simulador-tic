const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bankPath=path.join(__dirname,'..','preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-412.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 constitution:{url:'https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk',label:'ITIC Academy, bloque 01 «Constitución, organización del Estado y AGE», versión 2026: temas constitucionales A1-1/2/3 y materia general A2.'},
 admin:{url:'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk',label:'ITIC Academy, bloque 03 «Actuación administrativa y Administración digital», actualización 2026: Leyes 39/2015 y 40/2015, procedimiento y administración electrónica.'},
 admin2:{url:'https://drive.google.com/file/d/1dW2ffNhCduFHJ1hI2nT6fqs_G8DeNpo3/view?usp=drivesdk',label:'ITIC Academy, bloque de Actuación Administrativa y Administración Digital, actualización 2026: temas A1-7/8/22 y A2-O8.'}
};
const mapping={
 2371:{topics:['A1-2','A2-I-2'],docs:['constitution'],detail:'Composición constitucional del Tribunal Constitucional, epígrafe A1 sobre su naturaleza, organización y atribuciones y epígrafe A2 sobre composición y atribuciones.'},
 2372:{topics:['A1-6','A2-I-8'],docs:['constitution'],detail:'Organización territorial de la AGE y órganos periféricos; la respuesta literal se verifica en el art. 70 de la Ley 40/2015, también incluida en el marco A2 de régimen jurídico del sector público.'},
 2373:{topics:['A1-8','A2-I-8','A2-I-9'],docs:['admin','admin2'],detail:'Procedimiento administrativo común y notificación electrónica, con correspondencia en el régimen general de la Ley 39/2015 y en los instrumentos de administración electrónica.'},
 2374:{topics:['A1-8','A1-22','A2-I-8','A2-I-9'],docs:['admin','admin2'],detail:'Entrada en vigor de elementos de tramitación y registro electrónico en la Ley 39/2015; encuadre en procedimiento, administración digital y gestión electrónica.'},
 2375:{topics:['A1-8','A2-I-8'],docs:['admin','admin2'],detail:'Motivación de actos administrativos dentro del procedimiento común regulado por Ley 39/2015.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const calls=['https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938','https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262'];
assert.deepEqual(log.cambios.map(c=>c.id),[2371,2372,2373,2374,2375]);
for(const change of log.cambios){const q=bank.preguntas.find(x=>x.id===change.id),m=mapping[change.id];assert.ok(q?.revision&&m,`Falta pregunta/cotejo ${change.id}`);assert.ok(m.topics.every(x=>official.has(x)),`Tema oficial inexistente ${change.id}`);q.clasificacion.A1=m.topics.filter(x=>x.startsWith('A1-'));q.clasificacion.A2=m.topics.filter(x=>x.startsWith('A2-'));const curriculum=`${m.docs.map(k=>docs[k].label).join(' ')} ${m.detail}`,links=m.docs.map(k=>docs[k].url).join('; ');const note=`Cotejo curricular: ${curriculum} Documentos Drive: ${links}. Correspondencia contrastada con revision/temario-oficial.json y anexos de las convocatorias A1/A2 GSI BOE-A-2025-25938 y BOE-A-2025-26262 (${calls.join('; ')}). Academy contextualiza el temario; la clave se comprueba en los textos oficiales consolidados del BOE.`;q.clasificacion.bloque_academia=`${links} — ${curriculum}`;q.clasificacion.nota=note;q.revision.observaciones+=` ${note}`;q.comentarios=q.revision.observaciones;change.actualizada=structuredClone(q);}
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');console.log('Cotejo curricular del lote 412 completado.');
