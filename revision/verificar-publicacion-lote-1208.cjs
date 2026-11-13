const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),cp=require('node:child_process');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const marker='**Publicación verificada:** el commit de datos `fca3fe0`';
const sha=cp.execFileSync('git',['rev-parse','dafc479'],{encoding:'utf8'}).trim();
const entry='**Publicación verificada:** el commit de datos `dafc479` (`'+sha+')` completó correctamente [Deploy GitHub Pages, workflow run 43466086957](https://github.com/itic-academy/simulador-tic/actions/runs/43466086957). La página del workflow muestra resultado exitoso; README, `cambios-lote-1208.json` e `inventario.json` respondieron HTTP 200 sin caché. El registro publicado contiene IDs 6361–6365 y el inventario confirma 6.360 examinadas, 6.246 verificadas (1.236 vigentes, 4.554 corregidas y 456 históricas), 114 pendientes (45 de fuente, 69 de ambigüedad) y 5.763 sin revisar.';
if(s.includes(entry)){console.log('La evidencia ya está registrada.');process.exit(0);}
assert.ok(s.includes(marker),'No se encontró evidencia previa de publicación');
s=s.replace(marker,entry+'\n\n'+marker);fs.writeFileSync(file,s);console.log('Evidencia de publicación del lote 1208 registrada.');
