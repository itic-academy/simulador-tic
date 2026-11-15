const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),file=path.join(root,'preguntas_preparatic.json');
const bank=JSON.parse(fs.readFileSync(file,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1391.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 projects:{url:'https://drive.google.com/file/d/1fti1UIhEIqK3pY8GBENi-4rTKwoEG8tF/view?usp=drivesdk',title:'ITIC Academy, bloque 12 Directivo TIC y Planificación Estratégica, edición 2026',detail:'Se coteja el encaje curricular con la planificación y dirección de proyectos; la búsqueda también localizó el antiguo Tema 035 Gestión de Proyectos v1.3 (2021), que se registra como material histórico y no como normativa técnica vigente.'},
 ai:{url:'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk',title:'ITIC Academy, bloque 32 Inteligencia Artificial y Ciencia de Datos, nuevo temario 2026',detail:'El material actualizado en octubre de 2026 cubre A1-70 y el epígrafe A2-III-5; se usa como cotejo de ubicación curricular para los enfoques clásicos de resolución distribuida, no como prueba de la descripción histórica de Contract Net o blackboard.'},
 gov:{url:'https://drive.google.com/file/d/1alTzv7f2Katg4EdxJ72SYkLm6UScCCho/view?usp=drivesdk',title:'ITIC Academy, bloque 10 Gobernanza TIC y Administración Digital, edición 2026',detail:'El material actualizado en octubre de 2026 trata la organización de la gobernanza TIC y el RD 1125/2024, coherente con A1-30. El RD 806/2014 se conserva aquí solo como norma histórica ya derogada.'},
 gis:{url:'https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view?usp=drivesdk',title:'ITIC Academy, bloque 33, temas 73–74: e-learning y sistemas de información geográfica, edición 2026',detail:'El material actualizado en agosto de 2026 incluye el tema 74 sobre SIG, correspondiente al A1-74. Para la semántica concreta de Intersect se cita documentación oficial del producto ArcGIS, no el apunte académico.'},
 php:{url:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',title:'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información, edición 2026.1',detail:'El índice cubre A1-68 (PHP) y A2-II-3 (lenguajes de programación); el material sirve de cotejo curricular. La versión histórica del operador se contrasta directamente con el manual oficial de PHP.'}
};
const assignments={7276:docs.projects,7277:docs.ai,7278:docs.gov,7279:docs.gis,7280:docs.php};
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
console.log('Cotejo curricular ITIC Academy/Drive registrado para IDs 7276–7280.');
