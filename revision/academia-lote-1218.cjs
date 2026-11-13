const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1218.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const matches={
 6411:[{url:'https://drive.google.com/file/d/11T-TKuGJGXeEKwwODM-FlF8pML3QMh_t/view?usp=drivesdk',desc:'ITIC Academy, bloque 08 «Protección de datos», edición 2026: incluye RGPD, responsabilidad proactiva y evaluaciones de impacto.'}],
 6412:[{url:'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk',desc:'ITIC Academy, bloque 41 «ITIL y COBIT», edición 2026: desarrolla ITIL y gestión de servicios; cotejo del contenido de service desk con el programa.'}],
 6413:[{url:'https://drive.google.com/file/d/11T-TKuGJGXeEKwwODM-FlF8pML3QMh_t/view?usp=drivesdk',desc:'ITIC Academy, bloque 08 «Protección de datos», edición 2026: identifica el Reglamento (UE) 2016/679 como núcleo del marco europeo de protección de datos.'}],
 6414:[{url:'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk',desc:'ITIC Academy, bloque 41 «ITIL y COBIT», edición 2026: incluye ITIL 4, sus conceptos de gestión de servicios y la evolución a la versión 5.'}],
 6415:[
  {url:'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk',desc:'ITIC Academy, bloque 34 «Business Intelligence y Big Data», edición 2026: incluye gobierno/calidad del dato y correspondencia con A1 76, tecnologías y estándares para semánticas y ontologías.'},
  {url:'https://drive.google.com/file/d/17B9a1yxMFgHCHEyVVBi0PG-cdCYABVvd/view?usp=drivesdk',desc:'ITIC Academy, bloque 11 «Reutilización de la información del sector público, datos abiertos y transparencia», edición 2026: incluye el A2 I.9 y normas técnicas de interoperabilidad.'}
 ]
};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),list=matches[c.id];assert.ok(q&&list);assert.deepEqual(q,c.actualizada);
 const desc=list.map(x=>x.desc).join(' ');
 const note='Cotejo curricular ITIC Academy/Drive: '+desc+' El material académico sirve para establecer la correspondencia con el programa; la respuesta sustantiva se valida con las fuentes oficiales citadas.';
 q.clasificacion.bloque_academia=note;
 q.clasificacion.nota=(q.clasificacion.nota+' '+note).trim();
 q.comentarios=(q.comentarios+' '+note).trim();
 q.revision.observaciones=(q.revision.observaciones+' '+note).trim();
 for(const m of list)q.revision.fuentes.push({url:m.url,referencia:m.desc});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo ITIC Academy/Drive añadido individualmente a 6411–6415.');
