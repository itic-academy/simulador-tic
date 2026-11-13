const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),cp=require('node:child_process');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const marker='**Publicación verificada:** el commit de datos `fe697d2`';
const sha=cp.execFileSync('git',['rev-parse','245e7c9'],{encoding:'utf8'}).trim();
const entry='**Publicación verificada:** el commit de datos `245e7c9` (`'+sha+')` completó correctamente [Deploy GitHub Pages, workflow run 43471388059](https://github.com/itic-academy/simulador-tic/actions/runs/43471388059). README, `cambios-lote-1210.json` e `inventario.json` respondieron HTTP 200 con consulta sin caché. El registro publicado contiene los IDs 6371–6375; el inventario confirma 6.370 examinadas, 6.256 verificadas (1.239 vigentes, 4.559 corregidas y 458 históricas), 114 pendientes (45 de fuente y 69 de ambigüedad) y 5.753 sin revisar.';
if(s.includes(entry)){console.log('La evidencia ya está registrada.');process.exit(0);}
assert.ok(s.includes(marker),'No se encontró evidencia previa para insertar el nuevo registro');
s=s.replace(marker,entry+'\n\n'+marker);fs.writeFileSync(file,s);console.log('Evidencia de publicación del lote 1210 registrada.');
