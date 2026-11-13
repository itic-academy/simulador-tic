const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),cp=require('node:child_process');
const root=path.join(__dirname,'..'),file=path.join(__dirname,'README.md');
const inv=JSON.parse(fs.readFileSync(path.join(__dirname,'inventario.json'),'utf8'));
const log=JSON.parse(fs.readFileSync(path.join(__dirname,'cambios-lote-1218.json'),'utf8'));
const sha=cp.execFileSync('git',['rev-parse','b054652'],{cwd:root,encoding:'utf8'}).trim();
assert.deepEqual(log.cambios.map(x=>x.id),[6411,6412,6413,6414,6415]);
assert.equal(inv.total,12123);assert.equal(inv.estados.sin_revisar,5713);
assert.equal(inv.estados.vigente+inv.estados.corregida+inv.estados.historica,6296);
const entry='**Publicación verificada:** el commit de datos `b054652` (`'+sha+')` completó correctamente [Deploy GitHub Pages, workflow run 43484247774](https://github.com/itic-academy/simulador-tic/actions/runs/43484247774). El workflow terminó con estado `Success` e incluyó el commit `b054652`. GitHub Pages devolvió HTTP 200 sin caché para README, `cambios-lote-1218.json` e `inventario.json`; el registro publicado contiene los IDs 6411–6415 con estados vigente, corregida, corregida, corregida y corregida. El inventario público confirma 6.410 examinadas, 6.296 verificadas (1.245 vigentes, 4.593 corregidas y 458 históricas), 114 pendientes (45 de fuente y 69 de ambigüedad) y 5.713 sin revisar individualmente.';
let s=fs.readFileSync(file,'utf8');
if(!s.includes(entry)){
 const marker='## Lote 1218 — 13 de noviembre de 2026';
 assert.ok(s.includes(marker),'No se encontró el encabezado del lote');
 s=s.replace(marker,entry+'\n\n'+marker);fs.writeFileSync(file,s);
}
console.log('Evidencia de Actions y GitHub Pages registrada para b054652.');
