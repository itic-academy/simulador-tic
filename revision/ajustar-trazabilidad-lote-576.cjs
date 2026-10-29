const fs=require('node:fs'),assert=require('node:assert/strict');
const bankPath='preguntas_preparatic.json',logPath='revision/cambios-lote-576.json';
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const urls=new Map([[3200,{
 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566&p=20260929&tn=1':'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566',
 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-3444&p=20260826&tn=0':'https://www.boe.es/buscar/act.php?id=BOE-A-2015-3444'
}]]);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id);assert.ok(q?.revision&&c.actualizada);
 for(const [oldUrl,newUrl] of Object.entries(urls.get(c.id)||{})){
  for(const item of q.revision.fuentes)if(item.url===oldUrl)item.url=newUrl;
  for(const item of c.actualizada.revision.fuentes)if(item.url===oldUrl)item.url=newUrl;
 }
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
let readme=fs.readFileSync('revision/README.md','utf8').replace('https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566&p=20260929&tn=1','https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566').replace('https://www.boe.es/buscar/act.php?id=BOE-A-2015-3444&p=20260826&tn=0','https://www.boe.es/buscar/act.php?id=BOE-A-2015-3444');
fs.writeFileSync('revision/README.md',readme);
console.log('URLs de legislación consolidada fijadas a las fichas BOE vigentes para 3200.');
