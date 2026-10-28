const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-345.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 metric:{url:'https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view?usp=drivesdk',label:'ITIC Academy, Bloque 17 Adquisición de sistemas, alternativas y rentabilidad de inversiones, versión 2026.2 (02-10-2026)'},
 database:{url:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',label:'ITIC Academy, Bloque 29 Bases de datos, SQL y modelado de datos, versión 2026.1 (31-08-2026)'},
 reuse:{url:'https://drive.google.com/file/d/17B9a1yxMFgHCHEyVVBi0PG-cdCYABVvd/view?usp=drivesdk',label:'ITIC Academy, Bloque 11 Reutilización de la información del sector público, datos abiertos y transparencia, versión 2026.2 (02-10-2026)'},
 information:{url:'https://drive.google.com/file/d/1-xmHgvxArWY8GroFD1eSdyPrAQjkBpzo/view?usp=drivesdk',label:'ITIC Academy, Bloque 9 Organización y gestión de los sistemas de información, versión 2026.3 (01-10-2026)'},
 management:{url:'https://drive.google.com/file/d/1fti1UIhEIqK3pY8GBENi-4rTKwoEG8tF/view?usp=drivesdk',label:'ITIC Academy, Bloque 12 Estrategias y herramientas del directivo público TIC, versión 2026.2 (02-10-2026)'}
};
const map={
 2041:{doc:'metric',topics:['A1-95'],detail:'el índice y el apartado sobre MÉTRICA v3 cubren Estudio de Viabilidad y la metodología; el programa A1 incluye expresamente MÉTRICA en el tema 95. No se fuerza equivalencia A2.'},
 2042:{doc:'database',topics:['A1-63','A2-II-5'],detail:'cubre SGBD, modelos de referencia y bases de datos relacionales; el término trigger se contrasta técnicamente con Microsoft Learn, no con el material de academia.'},
 2043:{doc:'reuse',topics:['A1-31','A2-I-9'],detail:'incluye Ley 37/2007, reutilización, datos abiertos y normativa sectorial; el art. 6 se coteja con la publicación BOE.'},
 2044:{doc:'information',topics:['A1-29'],detail:'cubre explícitamente información y conocimiento en las organizaciones y la Administración; el bloque declara que no tiene tema A2 propio, por lo que no se asigna uno.'},
 2045:{doc:'management',topics:['A1-33','A2-II-4'],detail:'desarrolla el Balanced Scorecard/cuadro de mando integral; el programa A1 lo incluye en el tema 33 y A2 en Inteligencia de negocios.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q?.revision&&m,`Falta cotejo ${c.id}`);const a1=m.topics.filter(t=>t.startsWith('A1-')),a2=m.topics.filter(t=>t.startsWith('A2-'));assert.deepEqual(q.clasificacion.A1,a1);assert.deepEqual(q.clasificacion.A2,a2);assert.ok(m.topics.every(t=>official.has(t)));const d=docs[m.doc];const syllabus='Convocatorias oficiales de ingreso al Cuerpo Superior TIC A1 y al Cuerpo de Gestión de Sistemas e Informática A2, BOE-A-2025-25938 y BOE-A-2025-26262, y revision/temario-oficial.json';q.clasificacion.bloque_academia=`${d.label}; ${m.detail}`;q.clasificacion.nota=`Correspondencia comprobada en ${syllabus}. El material de academia contextualiza el temario, pero no sustituye las fuentes primarias. ${c.actualizada.revision.observaciones}`;q.revision.observaciones=q.clasificacion.nota;q.comentarios=q.clasificacion.nota;q.revision.fuentes.push({url:d.url,referencia:`${d.label}; cotejo de epígrafes y contenido curricular.`});c.actualizada=structuredClone(q);}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo de academia, temario oficial y convocatorias registrado para IDs 2041–2045.');
