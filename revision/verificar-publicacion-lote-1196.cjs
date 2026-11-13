const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),cp=require('node:child_process');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const marker='**Publicación verificada:** el commit de datos `e8d260a`';
const sha=cp.execFileSync('git',['rev-parse','4b753c0'],{encoding:'utf8'}).trim();
const entry='**Publicación verificada:** el commit de datos `4b753c0` (`'+sha+'`) completó correctamente [Deploy GitHub Pages, workflow run 43444991819](https://github.com/itic-academy/simulador-tic/actions/runs/43444991819). README, `cambios-lote-1196.json` e `inventario.json` respondieron HTTP 200; el registro publicado contiene los IDs 6301–6305 y el inventario confirma 6.300 examinadas, 6.190 verificadas (1.222 vigentes, 4.518 corregidas y 450 históricas), 110 pendientes y 5.823 sin revisar.';
if(s.includes(entry)){console.log('La evidencia ya está registrada.');process.exit(0);}
assert.ok(s.includes(marker),'No se encontró evidencia previa');
s=s.replace(marker,entry+'\n\n'+marker);fs.writeFileSync(file,s);console.log('Evidencia de publicación del lote 1196 registrada.');
