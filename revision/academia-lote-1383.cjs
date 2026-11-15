const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),file=path.join(root,'preguntas_preparatic.json');
const bank=JSON.parse(fs.readFileSync(file,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1383.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 metrica:{url:'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk',title:'ITIC Academy, bloque 38 Análisis, Diseño y Construcción de Sistemas de Información, versión 2026.1 (18-09-2026)',detail:'Incluye MÉTRICA v3 dentro de desarrollo de sistemas y cubre el mapa de los temas A1-35/36/47/95 y A2-II-10/III-2, entre otros. El cotejo sirve para alinear el contenido de estudio; la clasificación exacta de PSI-SEG y las técnicas/prácticas se comprobó en los documentos oficiales de MÉTRICA v3.'},
 itsm:{url:'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk',title:'ITIC Academy, bloque 41 ITIL y COBIT, versión 2026.1 (29-09-2026)',detail:'Cubre gestión de servicios TIC, ITSM, ITIL y COBIT y el ámbito A1-106/A2-IV-4. El material contextualiza la categoría examinada, pero no se toma como fuente para verificar las marcas BMC Remedy, EasyVista o ServiceNow; esos productos se contrastaron en documentación de sus proveedores.'},
 maintenance:{url:'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',title:'ITIC Academy, bloque 39 Calidad y Mantenimiento, versión 2026.1 (23-09-2026)',detail:'Cubre gestión de configuración, cambios, versiones y entornos (A1-100/102, A2-IV-4); el cotejo curricular acompaña la verificación de conceptos con NIST SP 800-128 y su glosario.'},
 content:{url:'https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk',title:'ITIC Academy, bloque 50 Videoconferencia, SSO y herramientas de trabajo colaborativo, versión 2026.1 (01-10-2026)',detail:'Incluye gestión documental y de contenidos, flujos de trabajo, búsqueda y SEO para el tema A2-II-16. El apartado de contenidos del bloque permite cotejar el campo curricular; la distinción entre CMIS, un estándar de interoperabilidad, y un CMS se verificó en la especificación OASIS CMIS 1.1.'}
};
const academy={7236:docs.metrica,7237:docs.metrica,7238:docs.itsm,7239:docs.maintenance,7240:docs.content};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),d=academy[c.id];assert.ok(q?.revision&&d,`Falta pregunta/Drive ${c.id}`);
 for(const id of [...q.clasificacion.A1,...q.clasificacion.A2])assert.ok(official.has(id),`Tema oficial inválido: ${id}`);
 const note=`Cotejo curricular ITIC Academy: ${d.title}. ${d.detail} Se usa para alinear cobertura y no como sustituto de la fuente primaria.`;
 q.clasificacion.bloque_academia=note;q.clasificacion.nota=(q.clasificacion.nota+' '+note).trim();
 q.comentarios=(q.comentarios+' '+note).trim();q.revision.observaciones=(q.revision.observaciones+' '+note).trim();
 q.revision.fuentes.push({url:d.url,referencia:`${d.title}; cotejo: ${d.detail}`});c.actualizada=structuredClone(q);
}
fs.writeFileSync(file,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular ITIC Academy/Drive registrado para IDs 7236–7240.');
