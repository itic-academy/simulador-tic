const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),cp=require('node:child_process');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const marker='**Publicación verificada:** el commit de datos `61fe145`';
const sha=cp.execFileSync('git',['rev-parse','a6394dc'],{encoding:'utf8'}).trim();
const entry='**Publicación verificada:** el commit de datos `a6394dc` (`'+sha+'`) completó correctamente [Deploy GitHub Pages, workflow run 43455217922](https://github.com/itic-academy/simulador-tic/actions/runs/43455217922). README, `cambios-lote-1202.json` e `inventario.json` respondieron HTTP 200; el registro publicado contiene los IDs 6331–6335 y el inventario confirma 6.330 examinadas, 6.219 verificadas (1.230 vigentes, 4.535 corregidas y 454 históricas), 111 pendientes (45 de fuente, 66 de ambigüedad) y 5.793 sin revisar.';
if(s.includes(entry)){console.log('La evidencia ya está registrada.');process.exit(0);}
assert.ok(s.includes(marker),'No se encontró evidencia previa');
s=s.replace(marker,entry+'\n\n'+marker);fs.writeFileSync(file,s);console.log('Evidencia de publicación del lote 1202 registrada.');
