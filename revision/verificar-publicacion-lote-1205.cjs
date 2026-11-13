const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),cp=require('node:child_process');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const marker='**Publicación verificada:** el commit de datos `429e264`';
const sha=cp.execFileSync('git',['rev-parse','aa7dff1'],{encoding:'utf8'}).trim();
const entry='**Publicación verificada:** el commit de datos `aa7dff1` (`'+sha.trim()+')` completó correctamente [Deploy GitHub Pages, workflow run 43460362861](https://github.com/itic-academy/simulador-tic/actions/runs/43460362861). README, `cambios-lote-1205.json` e `inventario.json` respondieron HTTP 200 sin caché; el registro publicado contiene los IDs 6346–6350 y el inventario confirma 6.345 examinadas, 6.234 verificadas (1.235 vigentes, 4.544 corregidas y 455 históricas), 111 pendientes (45 de fuente, 66 de ambigüedad) y 5.778 sin revisar.';
if(s.includes(entry)){console.log('La evidencia ya está registrada.');process.exit(0);}
assert.ok(s.includes(marker),'No se encontró evidencia previa');
s=s.replace(marker,entry+'\n\n'+marker);fs.writeFileSync(file,s);console.log('Evidencia de publicación del lote 1205 registrada.');
