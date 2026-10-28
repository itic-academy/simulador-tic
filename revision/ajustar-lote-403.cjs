const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bankPath=path.join(__dirname,'..','preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-403.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
for(const id of [2331,2335]){
 const q=bank.preguntas.find(x=>x.id===id),entry=log.cambios.find(x=>x.id===id);
 assert.ok(q&&entry&&q.revision&&entry.actualizada.id===id);
 q.revision.estado='corregida';entry.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,`${JSON.stringify(bank,null,2)}\n`);fs.writeFileSync(logPath,`${JSON.stringify(log,null,2)}\n`);
console.log('Estados del lote 403 alineados con los ajustes de enunciado/opciones.');
