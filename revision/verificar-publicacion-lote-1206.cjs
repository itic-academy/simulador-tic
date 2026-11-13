const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),cp=require('node:child_process');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const marker='**Publicación verificada:** el commit de datos `aa7dff1`';
const sha=cp.execFileSync('git',['rev-parse','c99d711'],{encoding:'utf8'}).trim();
const entry='**Publicación verificada:** el commit de datos `c99d711` (`'+sha+')` completó correctamente [Deploy GitHub Pages, workflow run 43462840027](https://github.com/itic-academy/simulador-tic/actions/runs/43462840027). README, `cambios-lote-1206.json` e `inventario.json` respondieron HTTP 200 sin caché; el registro publicado contiene los IDs 6351–6355 y el inventario confirma 6.350 examinadas, 6.238 verificadas (1.235 vigentes, 4.547 corregidas y 456 históricas), 112 pendientes (45 de fuente, 67 de ambigüedad) y 5.773 sin revisar.';
if(s.includes(entry)){console.log('La evidencia ya está registrada.');process.exit(0);}
assert.ok(s.includes(marker),'No se encontró evidencia previa de lote publicado');
s=s.replace(marker,entry+'\n\n'+marker);fs.writeFileSync(file,s);console.log('Evidencia de publicación del lote 1206 registrada.');
