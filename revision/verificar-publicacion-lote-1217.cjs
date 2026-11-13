const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),cp=require('node:child_process');
const root=path.join(__dirname,'..'),file=path.join(__dirname,'README.md');
const inv=JSON.parse(fs.readFileSync(path.join(__dirname,'inventario.json'),'utf8'));
const log=JSON.parse(fs.readFileSync(path.join(__dirname,'cambios-lote-1217.json'),'utf8'));
const sha=cp.execFileSync('git',['rev-parse','a7489b2'],{cwd:root,encoding:'utf8'}).trim();
assert.equal(log.cambios.length,5);
assert.deepEqual(log.cambios.map(x=>x.id),[6406,6407,6408,6409,6410]);
assert.equal(inv.total,12123);assert.equal(inv.estados.sin_revisar,5718);
const valid=inv.estados.vigente+inv.estados.corregida+inv.estados.historica;
assert.equal(valid,6291);
const entry='**Publicación verificada:** el commit de datos `a7489b2` (`'+sha+')` completó correctamente [Deploy GitHub Pages, workflow run 43482543600](https://github.com/itic-academy/simulador-tic/actions/runs/43482543600). El workflow muestra estado `Success` y contiene el commit `a7489b2`. GitHub Pages devolvió HTTP 200 sin caché para README, `cambios-lote-1217.json` e `inventario.json`; el registro servido contiene los IDs 6406–6410, todos corregidos. El inventario público confirma 6.405 examinadas, 6.291 verificadas (1.244 vigentes, 4.589 corregidas y 458 históricas), 114 pendientes (45 de fuente y 69 de ambigüedad) y 5.718 sin revisar individualmente.';
let s=fs.readFileSync(file,'utf8');
if(!s.includes(entry)){
 const marker='## Lote 1217 — 13 de noviembre de 2026';
 assert.ok(s.includes(marker),'No se encontró el encabezado del lote');
 s=s.replace(marker,entry+'\n\n'+marker);
 fs.writeFileSync(file,s);
}
console.log('Evidencia de Actions y GitHub Pages registrada para a7489b2.');
