const fs=require('node:fs'),path=require('node:path'),dir=__dirname,root=path.join(dir,'..');
const bankPath=path.join(root,'preguntas_preparatic.json'),logPath=path.join(dir,'cambios-lote-699.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
for(const id of [3813,3814]){const q=bank.preguntas.find(x=>x.id===id),c=log.cambios.find(x=>x.id===id);if(!q||!c)throw Error('No se encuentra '+id);q.revision.estado='historica';c.actualizada.revision.estado='historica';}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('3813 y 3814 identificadas correctamente como históricas.');
