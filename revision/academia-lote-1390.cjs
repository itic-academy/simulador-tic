const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),file=path.join(root,'preguntas_preparatic.json');
const bank=JSON.parse(fs.readFileSync(file,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1390.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 ciclo:{url:'https://drive.google.com/file/d/1D62OE6Sw-ZB46S_2tvGophVTKgS3ip22/view?usp=drivesdk',title:'ITIC Academy, bloque 15 Metodologías ágiles, lean y modelos de ciclo de vida, actualización a octubre de 2026',detail:'El bloque 15 cubre A1-86 (modelos del ciclo de vida) y A2-III-1 (modelos de ciclo de vida), incluye cascada, V, espiral y RUP, y está actualizado a octubre de 2026.'},
 metrica:{url:'https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view?usp=drivesdk',title:'ITIC Academy, bloque 17 Adquisición de Sistemas, alternativas y rentabilidad de las inversiones, actualización a octubre de 2026',detail:'El temario integra estudio de viabilidad y MÉTRICA v3 y enlaza con los contenidos de desarrollo y gestión de proyectos. Se coteja ubicación curricular, no se usa como fuente de la clasificación interna de perfiles.'},
 gantt:{url:'https://drive.google.com/file/d/1DMz3yKo5YBTwNecdydOqWB9CxkyrQZ10/view?usp=drivesdk',title:'ITIC Academy, temas 036, 094 y 098: Gantt, PERT y estimación',detail:'Cubre A1-36 (Gantt y PERT) y planificación/estimación de recursos, además de MÉTRICA v3. El histograma se coteja como contenido de planificación, y su definición se verifica en PMI.'},
 firma:{url:'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',title:'ITIC Academy, bloque 36 Seguridad, criptografía, identificación y firma, versión 2026.1 (17-09-2026)',detail:'El índice incluye el marco europeo/nacional de firma electrónica y cita eIDAS 2 y el régimen jurídico actualizado; corresponde a A1-80 y A2-I-6.'},
 tech:{url:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',title:'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información, versión 2026.1 (31-08-2026)',detail:'Cubre A1-65 (scripts de cliente y desarrollo web), A1-77 (estándares y tecnologías web) y A2-II-9 (lenguajes de marca y lenguajes de script). El material distingue lenguaje JavaScript de entornos de ejecución; la naturaleza de Node.js se acredita con documentación oficial de Node.js.'}
};
const assignments={7271:docs.ciclo,7272:docs.metrica,7273:docs.gantt,7274:docs.firma,7275:docs.tech};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id);assert.ok(q?.revision,`Falta revisión ${c.id}`);
 for(const id of [...q.clasificacion.A1,...q.clasificacion.A2])assert.ok(official.has(id),`Tema oficial inválido: ${id}`);
 const doc=assignments[c.id];assert.ok(doc);
 const note=`Cotejo curricular ITIC Academy/Drive: ${doc.title}. ${doc.detail}`;
 q.clasificacion.bloque_academia=note;q.clasificacion.nota=(q.clasificacion.nota+' '+note).trim();
 q.comentarios=(q.comentarios+' '+note).trim();q.revision.observaciones=(q.revision.observaciones+' '+note).trim();
 q.revision.fuentes.push({url:doc.url,referencia:`${doc.title}; cotejo: ${doc.detail}`});c.actualizada=structuredClone(q);
}
fs.writeFileSync(file,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular ITIC Academy/Drive registrado para IDs 7271–7275.');
