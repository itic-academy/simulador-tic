const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),cp=require('node:child_process');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const marker='**Publicación verificada:** el commit de datos `a6394dc`';
const sha=cp.execFileSync('git',['rev-parse','ec80894'],{encoding:'utf8'}).trim();
const entry='**Publicación verificada:** el commit de datos `ec80894` (`'+sha.trim()+')` completó correctamente [Deploy GitHub Pages, workflow run 43457177384](https://github.com/itic-academy/simulador-tic/actions/runs/43457177384). README, `cambios-lote-1203.json` e `inventario.json` respondieron HTTP 200. El registro publicado contiene los IDs 6336–6340 y el inventario confirma 6.335 examinadas, 6.224 verificadas (1.232 vigentes, 4.537 corregidas y 455 históricas), 111 pendientes (45 de fuente, 66 de ambigüedad) y 5.788 sin revisar.';
if(s.includes(entry)){console.log('La evidencia ya está registrada.');process.exit(0);}
assert.ok(s.includes(marker),'No se encontró evidencia previa');
s=s.replace(marker,entry+'\n\n'+marker);fs.writeFileSync(file,s);console.log('Evidencia de publicación del lote 1203 registrada.');
