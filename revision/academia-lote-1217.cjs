const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1217.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const matches={
 6406:{url:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',desc:'ITIC Academy, bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», edición 2026: incluye virtualización de servidores (temas A1 57 y 132). Cotejo de correspondencia curricular.'},
 6407:{url:'https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view?usp=drivesdk',desc:'ITIC Academy, bloque 15 «Metodologías ágiles y modelos de ciclo de vida», edición 2026: desarrolla Kanban en los temas A1 37 y 88; cotejo curricular.'},
 6408:{url:'https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk',desc:'ITIC Academy, bloque 01 «Constitución, organización del Estado y AGE», edición 2026: incluye A1 2 y el Ministerio Fiscal. El contenido se valida en la Constitución; el programa A2 no incorpora este epígrafe específico del Poder Judicial.'},
 6409:{url:'https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view?usp=drivesdk',desc:'ITIC Academy, bloque 33 «E-learning y sistemas de información geográfica (GIS)», versión 2026.1: incluye A1 74 y señala expresamente que no aplica a los temas generales A2. El contenido se verifica en la Directiva INSPIRE.'},
 6410:{url:'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk',desc:'ITIC Academy, bloque 41 «ITIL y COBIT», edición 2026: cubre A1 106 e incluye ITIL 4 y la transición a ITIL (Version 5); cotejo curricular.'}
};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=matches[c.id];assert.ok(q&&m);assert.deepEqual(q,c.actualizada);
 const note='Cotejo curricular ITIC Academy/Drive: '+m.desc+' La academia sirve para establecer correspondencia con el temario; la respuesta se valida con la fuente primaria indicada.';
 q.clasificacion.bloque_academia=note;
 q.clasificacion.nota=(q.clasificacion.nota+' '+note).trim();
 q.comentarios=(q.comentarios+' '+note).trim();
 q.revision.observaciones=(q.revision.observaciones+' '+note).trim();
 q.revision.fuentes.push({url:m.url,referencia:m.desc});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo ITIC Academy/Drive añadido individualmente a 6406–6410.');
