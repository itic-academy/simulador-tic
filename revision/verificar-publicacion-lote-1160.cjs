const fs=require('node:fs'),path=require('node:path');
const f=path.join(__dirname,'README.md');
let s=fs.readFileSync(f,'utf8');
const marker='**Publicación verificada:** pendiente de despliegue del lote 1160.';
const entry='**Publicación verificada:** el commit `6a4b68dbe0710bb4832ae7c03a6a743425799fd3` completó correctamente [Deploy GitHub Pages, run `43394283806`](https://github.com/itic-academy/simulador-tic/actions/runs/43394283806). El workflow terminó con éxito; README, `cambios-lote-1160.json` e `inventario.json` respondieron HTTP 200. El registro contiene los IDs 6121–6125 y el inventario confirma 6.120 examinadas, 6.016 verificadas y 6.003 aún sin revisar individualmente.';
if(s.includes(marker)) s=s.replace(marker,entry);
else if(!s.includes(entry)) throw Error('No se encontró marcador ni evidencia ya aplicada');
fs.writeFileSync(f,s);console.log('Evidencia de publicación coherente.');
