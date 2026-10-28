const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bp=path.join(__dirname,'..','preguntas_preparatic.json'),lp=path.join(__dirname,'cambios-lote-404.json');
const bank=JSON.parse(fs.readFileSync(bp,'utf8')),log=JSON.parse(fs.readFileSync(lp,'utf8'));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id);assert.ok(q?.revision&&c.actualizada);assert.deepEqual(q,c.actualizada);assert.ok(q.clasificacion.nota.includes('BOE-A-2025-25938'));assert.ok(q.clasificacion.bloque_academia.includes('ITIC Academy'));}
const q=bank.preguntas.find(x=>x.id===2340);assert.equal(q.respuesta_correcta,0);assert.match(q.revision.observaciones,/impuestos netos sobre productos ≈9,4%/);
console.log('Trazabilidad curricular del lote 404 verificada.');
