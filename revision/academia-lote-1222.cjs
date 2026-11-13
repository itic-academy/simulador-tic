const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const file=path.join(__dirname,'cambios-lote-1222.json'),log=JSON.parse(fs.readFileSync(file,'utf8'));
const block38='https://docs.google.com/document/d/1za_7e_LlvUEpja7VJyYElIgRIPu_AbE3/edit',block39='https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',block10='https://drive.google.com/file/d/1alTzv7f2Katg4EdxJ72SYkLm6UScCCho/view?usp=drivesdk';
const matches={
 6431:[{url:block38,desc:'ITIC Academy, bloque 38 «Análisis, diseño y construcción de sistemas», versión 2026.1, análisis/diseño de datos: entidades, atributos, identificadores y relaciones.'}],
 6432:[{url:block39,desc:'ITIC Academy, bloque 39 «Calidad y mantenimiento», versión 2026: calidad, sistemas y modelos.'}],
 6433:[{url:block38,desc:'ITIC Academy, bloque 38 «Análisis, diseño y construcción de sistemas», versión 2026.1: UML y modelado.'}],
 6434:[{url:block38,desc:'ITIC Academy, bloque 38 «Análisis, diseño y construcción de sistemas», versión 2026.1: metodologías ágiles, Scrum y responsabilidades.'}],
 6435:[{url:block10,desc:'ITIC Academy, bloque 10 «Gobernanza TIC, Administración digital, acceso electrónico y cooperación», versión 2026.4 (01/10/2026): Cl@ve y sistemas de identificación/autenticación.'}]
};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),list=matches[c.id];assert.ok(q&&list);assert.deepEqual(q,c.actualizada);const note='Cotejo curricular ITIC Academy/Drive: '+list.map(x=>x.desc).join(' ')+' La correspondencia de temario no sustituye la verificación en las fuentes primarias citadas.';q.clasificacion.bloque_academia=note;q.clasificacion.nota=(q.clasificacion.nota+' '+note).trim();q.comentarios=(q.comentarios+' '+note).trim();q.revision.observaciones=(q.revision.observaciones+' '+note).trim();c.actualizada=JSON.parse(JSON.stringify(q));}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(file,JSON.stringify(log,null,2)+'\n');console.log('Cotejados cinco registros con los temarios ITIC Academy de Drive.');
