const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1303.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const smart=['https://drive.google.com/file/d/1w3UwQPDtDE9GXacSYNUGUcO6KirAQ8xf/view?usp=drivesdk','ITIC Academy, bloque 44, IoT y territorios inteligentes: cotejo del contexto curricular de soluciones urbanas, plataformas y dispositivos IoT. El documento sirve para comprobar cobertura temática; las especificaciones de cada tecnología se verifican en sus fuentes primarias.'];
const records={
 6836:[smart[0],'ITIC Academy, bloque 44, IoT y territorios inteligentes: contexto curricular de plataformas abiertas para soluciones urbanas. El material no se usa para acreditar por sí solo el apoyo europeo ni la definición de FIWARE.'],
 6837:['https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk','ITIC Academy, bloque 42, Redes: cotejo de contexto general de comunicación entre dispositivos; no se localizó una explicación específica de X10, por lo que su aplicación domótica se comprueba con la fuente del fabricante.'],
 6838:smart,
 6839:smart,
 6840:smart
};
const marker='Cotejo curricular ITIC Academy:';
const trim=v=>{const s=(v||'').trim(),i=s.indexOf(marker);return(i<0?s:s.slice(0,i)).trim()};
for(const change of log.cambios){
 const q=bank.preguntas.find(x=>x.id===change.id),doc=records[change.id];assert.ok(q&&doc,'Falta ID '+change.id);
 const topics=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');
 const note=marker+' '+doc[1]+' ITIC Academy, edición 2026, ubica IoT en A2 C11 (bloques 42/44); esta ficha conserva la clasificación oficial A2-IV-13 del programa BOE 2025, consultado en temario-oficial.json. Los materiales académicos se emplean como cotejo curricular, no como autoridad técnica ni normativa.';
 q.clasificacion.bloque_academia=doc[1];q.clasificacion.nota=(trim(q.clasificacion.nota)+' '+note).trim();
 q.comentarios=(trim(q.comentarios)+' '+note).trim();q.revision.observaciones=(trim(q.revision.observaciones)+' '+note).trim();
 q.revision.fuentes=q.revision.fuentes.filter(s=>s.url!==doc[0]);q.revision.fuentes.push({url:doc[0],referencia:doc[1]});
 change.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular aplicado a los IDs 6836–6840.');
