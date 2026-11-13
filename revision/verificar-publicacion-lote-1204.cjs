const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),cp=require('node:child_process');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const marker='**Publicación verificada:** el commit de datos `ec80894`';
const sha=cp.execFileSync('git',['rev-parse','429e264'],{encoding:'utf8'}).trim();
const entry='**Publicación verificada:** el commit de datos `429e264` (`'+sha.trim()+')` está servido por GitHub Pages. README, `cambios-lote-1204.json` e `inventario.json` respondieron HTTP 200 sin caché; el registro publicado contiene los IDs 6341–6345 y el inventario confirma 6.340 examinadas, 6.229 verificadas (1.233 vigentes, 4.541 corregidas y 455 históricas), 111 pendientes (45 de fuente, 66 de ambigüedad) y 5.783 sin revisar. En la última consulta pública, el workflow Deploy GitHub Pages `43458632278` seguía en curso; por ello se acredita la publicación por los artefactos servidos, sin afirmar conclusión del workflow.';
if(s.includes(entry)){console.log('La evidencia ya está registrada.');process.exit(0);}
assert.ok(s.includes(marker),'No se encontró evidencia previa');
s=s.replace(marker,entry+'\n\n'+marker);fs.writeFileSync(file,s);console.log('Evidencia de publicación del lote 1204 registrada.');
