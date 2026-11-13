const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const inv=JSON.parse(fs.readFileSync(path.join(__dirname,'inventario.json'),'utf8'));
const s0=fs.readFileSync(path.join(__dirname,'README.md'),'utf8');
const ex=inv.total-inv.estados.sin_revisar;
const valid=inv.estados.vigente+inv.estados.corregida+inv.estados.historica;
const pend=inv.estados.pendiente_fuente+inv.estados.pendiente_ambiguedad;
let s=s0.replace(/Último lote secuencial:.*?sin revisar individualmente\./,
 `Último lote secuencial: 1217 (IDs 6406–6410). Acumulado: ${ex.toLocaleString('es-ES')} preguntas examinadas individualmente; ${valid.toLocaleString('es-ES')} verificadas (${inv.estados.vigente.toLocaleString('es-ES')} vigentes, ${inv.estados.corregida.toLocaleString('es-ES')} corregidas y ${inv.estados.historica.toLocaleString('es-ES')} históricas); ${pend.toLocaleString('es-ES')} pendientes documentadas (${inv.estados.pendiente_fuente} de fuente y ${inv.estados.pendiente_ambiguedad} de ambigüedad); ${inv.estados.sin_revisar.toLocaleString('es-ES')} sin revisar individualmente.`);
if(s===s0)assert.match(s,/Último lote secuencial:/,'No se encontró el resumen acumulado del README');
const section=`## Lote 1217 — 13 de noviembre de 2026

Revisión individual de las preguntas 6406–6410. Se sustituyó una pregunta ambigua sobre emulación/simulación por una afirmación acotada y comprobable sobre QEMU; la pregunta volátil de productos Kanban se reemplazó por una práctica descrita en la guía oficial; se corrigió «interés general» por «interés social» en el artículo 124.1 de la Constitución; se corrigió la clave y la redacción de la definición de cuadrículas geográficas INSPIRE; y se precisó el término «garantía (warranty)» dentro de ITIL 4, distinguiéndolo de utilidad y anotando la transición actual a ITIL (Version 5). Las cinco preguntas conservan texto/opciones originales en el registro de cambios. Se añadieron explicaciones, fuentes primarias y clasificación oficial A1/A2. Cotejo en Drive: bloques de ITIC Academy 26 (virtualización), 15 (ágiles/Kanban), 01 (Constitución), 33 (GIS; A2 no aplica) y 41 (ITIL/COBIT). Inventario local: ${ex.toLocaleString('es-ES')} examinadas, ${valid.toLocaleString('es-ES')} verificadas, ${pend} pendientes y ${inv.estados.sin_revisar.toLocaleString('es-ES')} aún sin revisar individualmente; inventario y verificador sin errores estructurales. Pendiente verificar la publicación de este lote.
\n\nNota de consistencia: al recalcular los estados del lote 1216, el inventario da 6.286 verificadas (1.244 vigentes + 4.584 corregidas + 458 históricas), no 6.284 como se consignó en la evidencia de publicación anterior; se corrige esa cifra en la línea precedente.`;
if(s.includes('## Lote 1217 —')){
 const start=s.indexOf('## Lote 1217 —');
 const end=s.indexOf('**Publicación verificada:**',start);
 assert.ok(end>start,'No se encontró el final de la sección del lote 1217');
 s=s.slice(0,start)+section+'\n\n'+s.slice(end);
}else{
 const marker='**Publicación verificada:**';
 const i=s.indexOf(marker);assert.ok(i>=0,'No se encontró el área de evidencias de publicación');
 s=s.slice(0,i)+section+'\n\n'+s.slice(i);
}
s=s.replace('6.284 verificadas (1.244 vigentes, 4.584 corregidas y 458 históricas)','6.286 verificadas (1.244 vigentes, 4.584 corregidas y 458 históricas)');
fs.writeFileSync(path.join(__dirname,'README.md'),s);
console.log(`README al día: ${ex} examinadas, ${valid} verificadas, ${pend} pendientes, ${inv.estados.sin_revisar} sin revisar.`);
