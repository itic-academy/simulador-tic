const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-346.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 database:{url:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',label:'ITIC Academy, Bloque 29 Bases de datos, SQL y modelado de datos, versión 2026.1'},
 estimation:{url:'https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view?usp=drivesdk',label:'ITIC Academy, Bloque 17 Adquisición de sistemas, alternativas y rentabilidad de inversiones, versión 2026.2'},
 testing:{url:'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',label:'ITIC Academy, Bloque 39 Calidad y mantenimiento de sistemas, edición 2026'},
 lifecycle:{url:'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk',label:'ITIC Academy, Bloque 38 Análisis, diseño y construcción de sistemas de información, edición 2026.1'},
 os:{url:'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk',label:'ITIC Academy, Bloque 27 Sistemas operativos, edición 2026.1'}
};
const map={
 2046:{doc:'database',topics:['A1-64','A2-III-4'],detail:'incluye normalización, dependencias funcionales, 1FN, 2FN, 3FN y FNBC; la resolución se calcula a partir de la clave candidata y las dependencias dadas.'},
 2047:{doc:'estimation',topics:['A1-99','A2-II-15'],detail:'cubre modelos de esfuerzo/coste como COCOMO II y técnicas de estimación. La pregunta queda delimitada al COCOMO 81 histórico y se distingue del COCOMO II actual.'},
 2048:{doc:'testing',topics:['A1-96','A2-III-7'],detail:'desarrolla proceso, niveles, técnicas y herramientas de prueba de software; QUnit se valida además con su documentación oficial.'},
 2049:{doc:'lifecycle',topics:['A1-86','A2-III-1'],detail:'el capítulo inicial compara modelos de ciclo de vida lineales, iterativos y evolutivos, alineado con la pregunta ya acotada al modelo clásico en cascada.'},
 2050:{doc:'os',topics:['A1-62','A2-II-2'],detail:'incluye los sistemas operativos iOS y otros sistemas, y trata las características de sistemas operativos móviles; el detalle Darwin/BSD se comprueba en documentación de Apple.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q?.revision&&m,`Falta cotejo ${c.id}`);const a1=m.topics.filter(t=>t.startsWith('A1-')),a2=m.topics.filter(t=>t.startsWith('A2-'));assert.deepEqual(q.clasificacion.A1,a1);assert.deepEqual(q.clasificacion.A2,a2);assert.ok(m.topics.every(t=>official.has(t)));const d=docs[m.doc];const syllabus='Convocatorias oficiales A1 BOE-A-2025-25938 y A2 BOE-A-2025-26262, contrastadas con revision/temario-oficial.json';q.clasificacion.bloque_academia=`${d.label}; ${m.detail}`;q.clasificacion.nota=`Correspondencia comprobada en ${syllabus}. La academia se usa como cotejo curricular; las referencias técnicas primarias fundamentan la respuesta. ${c.actualizada.revision.observaciones}`;q.revision.observaciones=q.clasificacion.nota;q.comentarios=q.clasificacion.nota;q.revision.fuentes.push({url:d.url,referencia:`${d.label}; cotejo del alcance curricular y epígrafes.`});c.actualizada=structuredClone(q);}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo de academia, convocatorias y temas A1/A2 registrado para IDs 2046–2050.');
