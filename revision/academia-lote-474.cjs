const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-474.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const academyQuality={url:'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',label:'ITIC Academy, Calidad y Mantenimiento, versión 2026.1 (23-09-2026), leído directamente en Drive'};
const academyConstitution={url:'https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk',label:'ITIC Academy, Constitución, Organización del Estado y AGE, versión 2026.2 (01-10-2026), leído directamente en Drive'};
const a1={url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',label:'Programa oficial A1, BOE-A-2025-25938'};
const a2={url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',label:'Programa oficial A2 GSI, BOE-A-2025-26262'};
const map={
 2681:{topics:['A1-96','A2-III-7'],drive:academyQuality,detail:'El bloque 2026.1 incluye estrategia y niveles de pruebas; el syllabus ISTQB v4.0.1 distingue unit testing e integración de componentes y enumera top-down/bottom-up como estrategias de esta última.'},
 2682:{topics:['A1-98','A2-III-13'],drive:academyQuality,detail:'El apartado 4.2 de 2026.1 cubre métricas de producto/proceso/entrega/servicio y la sección de calidad abarca evaluación. La clasificación económica COQ se contrasta con ASQ; el principio de no probar ausencia absoluta de defectos con ISTQB.'},
 2683:{topics:['A1-1','A1-2','A2-I-2'],drive:academyConstitution,detail:'El bloque 2026.2 trata la Constitución, derechos y garantías, Cortes y Tribunal Constitucional. La legitimación y el umbral de cincuenta diputados se verifican directamente en el artículo 162.1.a del texto constitucional consolidado por BOE.'},
 2684:{topics:['A1-3','A2-I-1'],drive:academyConstitution,detail:'El bloque 2026.2 incluye organización territorial y Administración local; A1-3 cubre expresamente la regulación constitucional local. A2-I.1 se registra solo como el tema general de la Constitución, sin inventar un subtema local; el artículo 141.1 se comprueba en BOE.'},
 2685:{topics:['A1-1','A2-I-1','A2-I-3'],drive:academyConstitution,detail:'El bloque 2026.2 incluye garantías y suspensión de derechos y funciones del Gobierno. El encaje oficial es Constitución A1-1, A2-I.1 y competencias del Gobierno A2-I.3; la atribución y el trámite de autorización previa se comprueban en el artículo 116.3 CE.'}
};
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q?.revision&&m,`Falta cotejo ${c.id}`);
 for(const id of m.topics)assert.ok(official.has(id),`Tema oficial inexistente: ${id}`);
 q.clasificacion.A1=m.topics.filter(t=>t.startsWith('A1-'));q.clasificacion.A2=m.topics.filter(t=>t.startsWith('A2-'));
 const note=`Cotejo curricular: ${m.drive.label}. ${m.detail} Correspondencia validada frente a revision/temario-oficial.json y las convocatorias ${a1.label} y ${a2.label}; el contenido de academia orienta el encaje, pero no sustituye las fuentes primarias técnicas o legales.`;
 q.clasificacion.bloque_academia=`${m.drive.label}; ${m.detail}`;q.clasificacion.nota=`${q.revision.observaciones} ${note}`.trim();q.revision.observaciones=`${q.revision.observaciones} ${note}`.trim();q.comentarios=q.revision.observaciones;
 q.revision.fuentes.push({url:m.drive.url,referencia:`${m.drive.label}; ${m.detail}`});
 for(const id of m.topics.filter(t=>t.startsWith('A1-')))q.revision.fuentes.push({url:a1.url,referencia:`${a1.label}; correspondencia con ${id} contrastada en el programa publicado en BOE.`});
 for(const id of m.topics.filter(t=>t.startsWith('A2-')))q.revision.fuentes.push({url:a2.url,referencia:`${a2.label}; correspondencia con ${id} contrastada en el programa publicado en BOE.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo Academy, temas oficiales A1/A2 y convocatorias añadido a los cinco reactivos del lote 474.');
