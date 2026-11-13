const fs=require('node:fs'),path=require('node:path');const f=path.join(__dirname,'README.md');let s=fs.readFileSync(f,'utf8');
const before='**Publicación verificada:** pendiente de despliegue del lote 1161.';
const entry='**Publicación verificada:** PENDIENTE';
if(!s.includes(before))throw Error('No se encontró marcador de despliegue');s=s.replace(before,entry);fs.writeFileSync(f,s);console.log('Marcador de publicación preparado.');
