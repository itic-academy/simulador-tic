const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const d=__dirname,bankPath=path.join(d,'..','preguntas_preparatic.json'),logPath=path.join(d,'cambios-lote-1234.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
  analysis:{url:'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk',title:'ITIC Academy, bloque 38 «Análisis, diseño y construcción de sistemas de información», versión 2026.1'},
  testing:{url:'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',title:'ITIC Academy, bloque 39 «Calidad y mantenimiento», edición 2026'},
  iot:{url:'https://drive.google.com/file/d/1w3UwQPDtDE9GXacSYNUGUcO6KirAQ8xf/view?usp=drivesdk',title:'ITIC Academy, bloque 44 «Transformación digital, Industria 4.0, ciudades inteligentes e IoT», versión 2026.1'},
  database:{url:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',title:'ITIC Academy, bloque 29 «Bases de datos, SQL y modelado de datos», versión 2026.1'}
};
const map={
  6491:{a1:[89],a2:['III-9'],doc:docs.analysis,detail:'El documento dedica contenidos a análisis y diseño orientado a objetos, UML y diagramas de despliegue; la distinción técnica entre Component y Node se verificó directamente en OMG UML 2.5.1.'},
  6492:{a1:[96],a2:['III-7'],doc:docs.testing,detail:'El documento incluye técnicas y niveles de pruebas en A1-96 y el tema de pruebas A2-D7; la convocatoria oficial vigente numera ese tema como A2-III.7.'},
  6493:{a1:[90],a2:['III-3'],doc:docs.analysis,detail:'El bloque cubre análisis estructurado, requisitos y modelado de procesos/DFD. El programa oficial vigente ubica el modelado de procesos en A1-90; el enlace A2-III.3 se registra como cobertura de requisitos y especificación, sin atribuir a Academy la renumeración oficial.'},
  6494:{a1:[117],a2:['IV-13'],doc:docs.iot,detail:'El documento incluye expresamente IoT y lo vincula a A1-117/A2-C11; la convocatoria oficial vigente numera el tema A2 de Internet e IoT como IV.13.'},
  6495:{a1:[64],a2:['III-4'],doc:docs.database,detail:'El bloque desarrolla modelo relacional, SQL y modelado de datos; incluye para A2-D4 el diseño relacional y los problemas de concurrencia, correspondencia vigente A2-III.4. La definición de aislamiento ACID se verificó con IBM.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(d,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.deepEqual(log.cambios.map(x=>x.id),[6491,6492,6493,6494,6495]);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q?.revision&&m,`Falta revisión/cotejo ${c.id}`);const temas=[...m.a1.map(n=>`A1-${n}`),...m.a2.map(n=>`A2-${n}`)];for(const t of temas)assert.ok(official.has(t),`Tema ausente: ${t}`);const note=`Cotejo ITIC Academy/Drive: ${m.doc.title}; ${m.detail} El programa BOE vigente prevalece cuando su numeración A2 difiere de la etiqueta académica.`;q.clasificacion={...q.clasificacion,A1:m.a1.map(n=>`A1-${n}`),A2:m.a2.map(n=>`A2-${n}`),bloque_academia:`${note} ${m.doc.url}`,estado:'revisada',nota:note};q.revision.observaciones+=` ${note}`;q.revision.fuentes.push({url:m.doc.url,referencia:note},{url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria oficial GSI A1 2025, tema cotejado con revision/temario-oficial.json.'},{url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria oficial GSI A2 2025; corresponde a la numeración A2 recogida en revision/temario-oficial.json.'});c.actualizada=structuredClone(q);}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo Drive/Academy y programas BOE completado para 6491–6495.');
