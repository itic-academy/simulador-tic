const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),cp=require('node:child_process');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const marker='**Publicación verificada:** el commit de datos `c99d711`';
const sha=cp.execFileSync('git',['rev-parse','fca3fe0'],{encoding:'utf8'}).trim();
const entry='**Publicación verificada:** el commit de datos `fca3fe0` (`'+sha+')` completó correctamente [Deploy GitHub Pages, workflow run 43464460992](https://github.com/itic-academy/simulador-tic/actions/runs/43464460992). README, `cambios-lote-1207.json` e `inventario.json` respondieron HTTP 200 sin caché; el registro publicado contiene los IDs 6356–6360 y el inventario confirma 6.355 examinadas, 6.242 verificadas (1.236 vigentes, 4.550 corregidas y 456 históricas), 113 pendientes (45 de fuente, 68 de ambigüedad) y 5.768 sin revisar.';
if(s.includes(entry)){console.log('La evidencia ya está registrada.');process.exit(0);}
assert.ok(s.includes(marker),'No se encontró evidencia previa de lote publicado');
s=s.replace(marker,entry+'\n\n'+marker);fs.writeFileSync(file,s);console.log('Evidencia de publicación del lote 1207 registrada.');
