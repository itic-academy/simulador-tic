const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-391.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 web:{url:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',label:'ITIC Academy, bloque 30, Tecnologías de Sistemas de Información, versión 2026.1'},
 mobile:{url:'https://drive.google.com/file/d/1nXa2jkiUqpu31smkt5D8WswcTgEN7XlB/view?usp=drivesdk',label:'ITIC Academy, bloque 47, Aplicaciones móviles y sistemas operativos, actualización 2026'},
 law:{url:'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk',label:'ITIC Academy, bloque 03, Procedimiento Administrativo Común, versión 2026'},
 security:{url:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',label:'ITIC Academy, bloque 48, Seguridad en redes y en el nivel de aplicación, versión 2026.1'}
};
const map={
 2271:{topics:['A2-III-5'],docs:[],detail:'Se buscó en Drive y no se encontró un bloque académico específico de algoritmos/Dijkstra. Se conserva únicamente la clasificación oficial directa A2-III-5 (estrategias y tipos de algoritmos); no se inventa una equivalencia A1.'},
 2272:{topics:['A1-67','A2-III-10'],docs:['web'],detail:'El bloque 30 incluye Java empresarial y Jakarta EE; corresponde a A1-67 (entorno de desarrollo Java) y al tema específico A2-III-10. La relación institucional del grupo se comprueba con la carta vigente de Eclipse Foundation.'},
 2273:{topics:['A1-54','A1-124','A2-II-1','A2-II-2','A2-IV-15'],docs:['mobile'],detail:'El bloque 47 desarrolla aplicaciones móviles y sistemas operativos, incluidas tecnologías nativas, web, híbridas y multiplataforma. Correspondencia con A1-54/A1-124 y los temas A2-II-1/II-2; A2-IV-15 sirve de contexto de ecosistema móvil, no de respuesta técnica.'},
 2274:{topics:['A1-8','A2-I-8'],docs:['law'],detail:'El bloque 03 cubre las leyes de procedimiento administrativo. Correspondencia directa con A1-8 y A2-I-8; la obligación concreta se verifica en el artículo 19.1 del texto consolidado de la Ley 39/2015.'},
 2275:{topics:['A1-56','A1-128','A2-IV-3','A2-IV-6'],docs:['security'],detail:'El bloque 48 incluye expresamente copias de seguridad y continuidad/recuperación ante desastres; encuadre A1-56/A1-128 y A2-IV-3/IV-6. Se evita presentar RPO como una periodicidad de copias: la métrica fija el punto de recuperación y condiciona los requisitos de respaldo.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q?.revision&&m,`Falta cotejo ${c.id}`);assert.ok(m.topics.every(t=>official.has(t)),`Tema oficial inexistente para ${c.id}`);
 q.clasificacion.A1=m.topics.filter(t=>t.startsWith('A1-'));q.clasificacion.A2=m.topics.filter(t=>t.startsWith('A2-'));
 const curricular=`${m.docs.map(k=>docs[k].label).join('; ')||'No se localizó material académico específico para el concepto; no se fuerza una correspondencia'} . ${m.detail}`;
 const note=`Cotejo curricular: ${curricular} Correspondencias ${m.topics.join(', ')} contrastadas con revision/temario-oficial.json y los anexos de las convocatorias BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2). La academia aporta encuadre temático, no autoridad técnica ni normativa.`;
 q.clasificacion.bloque_academia=curricular;q.clasificacion.nota=note;q.revision.observaciones+=` ${note}`;q.comentarios=q.revision.observaciones;
 for(const k of m.docs)q.revision.fuentes.push({url:docs[k].url,referencia:`${docs[k].label}; cotejo curricular, no autoridad técnica ni normativa.`});
 q.revision.fuentes.push({url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:`Convocatoria A1 consultada; anexo de programa, tema(s) ${m.topics.filter(t=>t.startsWith('A1-')).join(', ')||'sin correspondencia directa asignada'}.`});
 q.revision.fuentes.push({url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:`Convocatoria A2 GSI consultada; anexo de programa, tema(s) ${m.topics.filter(t=>t.startsWith('A2-')).join(', ')}.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');
console.log('Cotejo académico y temas oficiales del lote 391 completados.');
