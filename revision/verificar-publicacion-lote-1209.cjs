const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),cp=require('node:child_process');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const marker='**Publicación verificada:** el commit de datos `dafc479`';
const sha=cp.execFileSync('git',['rev-parse','fe697d2'],{encoding:'utf8'}).trim();
const entry='**Publicación verificada:** el commit de datos `fe697d2` (`'+sha+')` completó correctamente [Deploy GitHub Pages, workflow run 43468174578](https://github.com/itic-academy/simulador-tic/actions/runs/43468174578). README, `cambios-lote-1209.json` e `inventario.json` respondieron HTTP 200 con consulta sin caché. El registro publicado contiene IDs 6366–6370; el inventario confirma 6.365 examinadas, 6.251 verificadas (1.238 vigentes, 4.556 corregidas y 457 históricas), 114 pendientes (45 de fuente, 69 de ambigüedad) y 5.758 sin revisar.';
if(s.includes(entry)){console.log('La evidencia ya está registrada.');process.exit(0);}
assert.ok(s.includes(marker),'No se encontró evidencia previa de publicación');
s=s.replace(marker,entry+'\n\n'+marker);fs.writeFileSync(file,s);console.log('Evidencia de publicación del lote 1209 registrada.');
