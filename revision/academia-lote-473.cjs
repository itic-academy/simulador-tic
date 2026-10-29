const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-473.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const academy={url:'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',label:'ITIC Academy, bloque Calidad y Mantenimiento, versión 2026.1 (23-09-2026), leído directamente en Drive'};
const a1={url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',label:'Programa oficial A1, BOE-A-2025-25938'};
const a2={url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',label:'Programa oficial A2 GSI, BOE-A-2025-26262'};
const map={
 2676:{topics:['A1-98','A2-III-13'],detail:'El material 2026.1 incluye explícitamente la familia SQuaRE en el apartado 2.2 y el modelo ISO/IEC 25010:2023 en 2.3; el nombre y las divisiones de SQuaRE se verifican en la página oficial ISO/IEC JTC 1/SC 7.'},
 2677:{topics:['A1-96','A1-98','A2-III-13'],detail:'En el programa oficial A1 corresponde al tema 96 (pruebas y garantía de calidad) y al 98 (métricas y evaluación). El documento de academia no desarrolla el PGGC histórico de 1991; la división por fascículos se coteja con la publicación primaria alojada por la Administración General del Estado.'},
 2678:{topics:['A1-98','A2-III-13'],detail:'Academy 2026.1 incluye modelos históricos de calidad en el apartado 2.1, aunque no nombra a Meyer ni reproduce la frase. La primacía de correctness se coteja con §1.2 de la obra de Meyer alojada en su propio sitio.'},
 2679:{topics:['A1-96','A1-98','A2-III-13'],detail:'La materia PGGC/garantía de calidad encaja en los temas 96 y 98 de A1 y III.13 de A2. El EFC y su carácter histórico se contrastan con el fascículo 2 del PGGC de 1991, fuente primaria de AGE; Academy 2026.1 no lo desarrolla.'},
 2680:{topics:['A1-98','A2-III-13'],detail:'El bloque 2026.1 cubre modelos y normas actuales (McCall, SQuaRE, ISO/IEC 25010:2023), pero no SISDEL/GCAL ni FURPS/ISO 9126-1. Se coteja con A1-98/A2-III.13 y fuentes técnicas. Se conserva pendiente de fuente porque las fuentes primarias disponibles no establecen de forma explícita qué componente de SISDEL se denominaba GCAL; no se usa el apunte secundario para certificar la clave.'}
};
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q?.revision&&m,`Falta cotejo ${c.id}`);
 for(const id of m.topics)assert.ok(official.has(id),`Tema oficial inexistente: ${id}`);
 q.clasificacion.A1=m.topics.filter(t=>t.startsWith('A1-'));q.clasificacion.A2=m.topics.filter(t=>t.startsWith('A2-'));
 const note=`Cotejo curricular: ${academy.label}. ${m.detail} Correspondencia contrastada con revision/temario-oficial.json y convocatorias: ${a1.label}; ${a2.label}. El material de academia ofrece contexto curricular y no sustituye las fuentes técnicas. La etiqueta pendiente_fuente de este reactivo permanece sin resolver hasta localizar evidencia primaria específica.`;
 q.clasificacion.bloque_academia=`${academy.label}; ${m.detail}`;q.clasificacion.nota=`${q.revision.observaciones} ${note}`.trim();q.revision.observaciones=`${q.revision.observaciones} ${note}`.trim();q.comentarios=q.revision.observaciones;
 q.revision.fuentes.push({url:academy.url,referencia:`${academy.label}; ${m.detail}`});
 for(const id of m.topics.filter(t=>t.startsWith('A1-')))q.revision.fuentes.push({url:a1.url,referencia:`${a1.label}; correspondencia con ${id} contrastada en el programa publicado en BOE.`});
 for(const id of m.topics.filter(t=>t.startsWith('A2-')))q.revision.fuentes.push({url:a2.url,referencia:`${a2.label}; correspondencia con ${id} contrastada en el programa publicado en BOE.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular, fuentes oficiales A1/A2 y convocatorias añadido al lote 473; la reserva de fuente de 2680 sigue explícita.');
