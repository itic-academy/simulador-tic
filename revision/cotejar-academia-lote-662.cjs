const fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..'), bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-662.json'), log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const url='https://drive.google.com/file/d/1ANdenllxXF4E7Sl4vJdJ_XPUPkx7Mqp_/view?usp=drivesdk';
const note='ITIC Academy, bloque «Organización y gestión de los sistemas de información»: cotejo curricular con el tema oficial A1-29; para estructura y dimensionamiento se relaciona además con A1-28. El temario se usa para ubicar contenidos, no como evidencia de las afirmaciones conceptuales.';
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id);if(!q?.revision)throw new Error(`Falta ${c.id}`);q.clasificacion.bloque_academia=note;q.clasificacion.nota=`Cotejo temático: ${note}`;q.revision.observaciones=`${q.revision.observaciones} ${q.clasificacion.nota}`;q.comentarios=q.revision.observaciones;q.revision.fuentes.push({url,referencia:note});c.actualizada=structuredClone(q);}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo temático ITIC Academy registrado en las cinco revisiones del lote 662.');
