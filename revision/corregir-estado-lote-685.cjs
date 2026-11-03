const fs=require('node:fs'),path=require('node:path'),root=path.join(__dirname,'..'),file=path.join(root,'preguntas_preparatic.json'),logFile=path.join(__dirname,'cambios-lote-685.json');
const bank=JSON.parse(fs.readFileSync(file,'utf8')),log=JSON.parse(fs.readFileSync(logFile,'utf8')),q=bank.preguntas.find(x=>x.id===3741),change=log.cambios.find(x=>x.id===3741);
if(!q||!change)throw new Error('No se encuentra la pregunta 3741 en el lote 685');
q.revision.estado='corregida';change.actualizada=structuredClone(q);
fs.writeFileSync(file,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logFile,JSON.stringify(log,null,2)+'\n');console.log('Pregunta 3741 marcada como corregida: también se reformuló su redacción/opciones.');
