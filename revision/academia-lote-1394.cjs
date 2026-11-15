const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),file=path.join(root,'preguntas_preparatic.json');
const bank=JSON.parse(fs.readFileSync(file,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1394.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 directory:{url:'https://drive.google.com/file/d/1nHGBMG4P3il5v4hZ1-RKdHmGzUPiwqnA/view?usp=drivesdk',title:'ITIC Academy, tema 122 Correo, Mensajería y Directorios, edición 2026',detail:'El bloque aborda servicios de directorio, su ubicación curricular en A1-122 y los estándares asociados; la estructura jerárquica se valida directamente con RFC 4512.'},
 ci:{url:'https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view?usp=drivesdk',title:'ITIC Academy, tema 37/86/88 Metodologías ágiles y ciclo de vida, edición 2026',detail:'Se coteja la integración de CI con prácticas ágiles/DevOps y el desarrollo continuo (A1-37/A2-III-6); los requisitos de control de versiones y build/pruebas se verifican con la documentación de CI.'},
 noneNfs:{url:null,title:'Búsqueda de material específico de NFS en ITIC Academy/Drive (15-11-2026)',detail:'Las búsquedas por NFS, sistema de archivos de red y RFC 1094 no localizaron un bloque 2026 directamente identificable. No se fuerza un documento de redes o sistemas como fuente sobre la historia del protocolo; se mantiene la clasificación oficial A1-59/A1-108/A2-IV-5 y el RFC como prueba.'},
 html:{url:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',title:'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información, edición 2026.1',detail:'Incluye A1-77 y A2-II-9, lenguajes de marcas, HTML y tecnologías web; se coteja el marco temático, mientras que la semántica de blockquote se valida con WHATWG.'},
 os:{url:'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk',title:'ITIC Academy, bloque 27 Sistemas Operativos, temas 59–62, actualización 2026',detail:'Cubre fundamentos de sistemas operativos y el tema A1-62 que incluye z/OS; la referencia técnica concreta al parámetro REGION procede de IBM. No se encontró en Drive un epígrafe autónomo dedicado a JCL REGION.'}
};
const assignments={7291:docs.directory,7292:docs.ci,7293:docs.noneNfs,7294:docs.html,7295:docs.os};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id);assert.ok(q?.revision,`Falta revisión ${c.id}`);
 for(const id of [...q.clasificacion.A1,...q.clasificacion.A2])assert.ok(official.has(id),`Tema oficial inválido: ${id}`);
 const doc=assignments[c.id];assert.ok(doc);
 const note=`Cotejo curricular ITIC Academy/Drive: ${doc.title}. ${doc.detail}`;
 q.clasificacion.bloque_academia=note;q.clasificacion.nota=(q.clasificacion.nota+' '+note).trim();
 q.comentarios=(q.comentarios+' '+note).trim();q.revision.observaciones=(q.revision.observaciones+' '+note).trim();
 if(doc.url)q.revision.fuentes.push({url:doc.url,referencia:`${doc.title}; cotejo: ${doc.detail}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(file,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo Academy/Drive registrado para 7291–7295; se documenta la falta de material directo de NFS.');
