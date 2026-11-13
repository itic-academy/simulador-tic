const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const inv=JSON.parse(fs.readFileSync(path.join(__dirname,'inventario.json'),'utf8'));
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const ex=inv.total-inv.estados.sin_revisar;
const valid=inv.estados.vigente+inv.estados.corregida+inv.estados.historica;
const pend=inv.estados.pendiente_fuente+inv.estados.pendiente_ambiguedad;
s=s.replace(/Último lote secuencial:.*?sin revisar individualmente\./,
 `Último lote secuencial: 1218 (IDs 6411–6415). Acumulado: ${ex.toLocaleString('es-ES')} preguntas examinadas individualmente; ${valid.toLocaleString('es-ES')} verificadas (${inv.estados.vigente.toLocaleString('es-ES')} vigentes, ${inv.estados.corregida.toLocaleString('es-ES')} corregidas y ${inv.estados.historica.toLocaleString('es-ES')} históricas); ${pend.toLocaleString('es-ES')} pendientes documentadas (${inv.estados.pendiente_fuente} de fuente y ${inv.estados.pendiente_ambiguedad} de ambigüedad); ${inv.estados.sin_revisar.toLocaleString('es-ES')} sin revisar individualmente.`);
const section=`## Lote 1218 — 13 de noviembre de 2026

Revisadas individualmente las preguntas 6411–6415. Se confirmó la evaluación de impacto previa al tratamiento de alto riesgo del art. 35 RGPD; se sustituyó la cuestión confusa sobre CAU por la función de punto central de contacto del service desk; se precisó la naturaleza jurídica del RGPD según art. 288 TFUE; se afinó la definición de garantía (warranty) en ITIL 4 sin equipararla a todos los requisitos no funcionales; y se formuló con precisión la capa semántica del EIF, anotando la revisión en curso del marco. Se preservaron las cinco versiones originales y se añadieron explicaciones, fuentes primarias, temas oficiales A1/A2 y cotejo de bloques de ITIC Academy en Drive: 08 (protección de datos), 41 (ITIL/COBIT), 34 (gobierno y semántica de datos) y 11 (datos abiertos/ENI). Inventario local: ${ex.toLocaleString('es-ES')} examinadas, ${valid.toLocaleString('es-ES')} verificadas, ${pend} pendientes y ${inv.estados.sin_revisar.toLocaleString('es-ES')} sin revisar individualmente; inventario y verificador sin errores estructurales. Pendiente verificar la publicación de este lote.`;
const start=s.indexOf('## Lote 1218 —');
if(start>=0){const end=s.indexOf('**Publicación verificada:**',start);assert.ok(end>start);s=s.slice(0,start)+section+'\n\n'+s.slice(end);}
else {const marker='## Lote 1217 — 13 de noviembre de 2026';const i=s.indexOf(marker);assert.ok(i>=0,'No se encontró el encabezado 1217');s=s.slice(0,i)+section+'\n\n'+s.slice(i);}
fs.writeFileSync(file,s);
console.log(`README al día: ${ex} examinadas, ${valid} verificadas, ${pend} pendientes, ${inv.estados.sin_revisar} sin revisar.`);
