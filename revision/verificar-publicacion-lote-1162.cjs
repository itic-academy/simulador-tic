const fs=require('node:fs'),path=require('node:path');
const f=path.join(__dirname,'README.md');let s=fs.readFileSync(f,'utf8');
const marker='**Publicación verificada:** pendiente de despliegue del lote 1162.';
const entry='**Publicación verificada:** PENDIENTE';
if(!s.includes(marker))throw Error('No se encontró marcador');
s=s.replace(marker,entry);fs.writeFileSync(f,s);console.log('Marcador de despliegue preparado.');
