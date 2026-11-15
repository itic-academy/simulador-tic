const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1330.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={maint:'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',admin:'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk',itil:'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk'};
const notes={
 6971:['maint','ITIC Academy, bloque 39 Calidad y mantenimiento (A1 100/102; A2 IV.4), versión 2026.1, 23-09-2026: incluye migración y gestión de configuración/versiones; cotejo curricular.'],
 6972:['maint','ITIC Academy, bloque 39 Calidad y mantenimiento (A1 100; correspondencia A2 con ciclo de vida III.1 y configuración/gestión IV.4), versión 2026.1, 23-09-2026: incluye estrategias de migración; cotejo curricular.'],
 6973:['admin','ITIC Academy, bloque 03 Actuación administrativa y Administración digital (A1 22 y normativa de calidad), versión 2026.2, 01-10-2026: incluye calidad de los servicios públicos, excelencia y modernización TIC; cotejo curricular.'],
 6974:['itil','ITIC Academy, bloque 41 ITIL y COBIT (A1 106), versión 2026.1, 29-09-2026: incluye ITIL 4, gestión de servicios TIC y procesos; cotejo curricular.'],
 6975:['itil','ITIC Academy, bloque 41 ITIL y COBIT (A1 106), versión 2026.1, 29-09-2026: incluye ANS/SLA, indicadores, métricas y gestión de servicios; cotejo curricular.']
};
const marker='Cotejo curricular ITIC Academy:';
const strip=v=>{const s=(v||'').trim(),i=s.indexOf(marker);return i<0?s:s.slice(0,i).trim()};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),entry=notes[c.id];assert.ok(q&&entry,'Falta pregunta o nota '+c.id);
 const codes=[...q.clasificacion.A1,...q.clasificacion.A2].join('/')||'sin epígrafe A2 específico';
 const note=marker+' '+entry[1]+' Correspondencia oficial: '+codes+'. El material académico sirve de cotejo; las respuestas se fundamentan en fuentes técnicas/oficiales enlazadas en la ficha.';
 q.clasificacion.bloque_academia=entry[1];q.clasificacion.nota=(strip(q.clasificacion.nota)+' '+note).trim();q.comentarios=(strip(q.comentarios)+' '+note).trim();q.revision.observaciones=(strip(q.revision.observaciones)+' '+note).trim();
 if(!q.revision.fuentes.some(x=>x.url===docs[entry[0]]))q.revision.fuentes.push({url:docs[entry[0]],referencia:'Cotejo curricular ITIC Academy: '+entry[1]});c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo Academy aplicado a las preguntas 6971–6975.');
