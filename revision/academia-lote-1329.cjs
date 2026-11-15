const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1329.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={db:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',dev:'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk',maint:'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk'};
const notes={
 6966:['db','ITIC Academy, bloque 29 Bases de datos, SQL y modelado (A1 63/64/89; A2 T5/D4/C2), versión 2026.1, 31-08-2026: cubre modelo Entidad-Relación, modelado de datos y dependencias; cotejo curricular.'],
 6967:['dev','ITIC Academy, bloque 38 Análisis, diseño y construcción de sistemas (A1 86/88–94; A2 III.1 y III.9), versión 2026.1, 18-09-2026: incluye UML, modelos dinámicos y procesos; cotejo curricular.'],
 6968:['maint','ITIC Academy, bloque 39 Calidad y mantenimiento (A1 96/98/100–103; A2 IV.3), versión 2026.1, 23-09-2026: cubre mantenimiento, métricas y gestión de incidencias; cotejo curricular.'],
 6969:['dev','ITIC Academy, bloque 38 Análisis, diseño y construcción de sistemas (A1 86/88–94; A2 III.1 y III.9), versión 2026.1, 18-09-2026: cubre cohesión/acoplamiento y técnicas de diseño modular; cotejo curricular.'],
 6970:['dev','ITIC Academy, bloque 38 Análisis, diseño y construcción de sistemas (A1 86/88–94; A2 III.1 y III.3), versión 2026.1, 18-09-2026: incluye prototipos y técnicas de diseño; cotejo curricular.']
};
const marker='Cotejo curricular ITIC Academy:';
const strip=v=>{const s=(v||'').trim(),i=s.indexOf(marker);return i<0?s:s.slice(0,i).trim()};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),entry=notes[c.id];assert.ok(q&&entry,'Falta pregunta o nota '+c.id);
 const codes=[...q.clasificacion.A1,...q.clasificacion.A2].join('/')||'sin epígrafe A2 específico';
 const note=marker+' '+entry[1]+' Correspondencia oficial: '+codes+'. La academia se usa como cotejo; la respuesta se fundamenta en las fuentes primarias enlazadas en la ficha.';
 q.clasificacion.bloque_academia=entry[1];q.clasificacion.nota=(strip(q.clasificacion.nota)+' '+note).trim();q.comentarios=(strip(q.comentarios)+' '+note).trim();q.revision.observaciones=(strip(q.revision.observaciones)+' '+note).trim();
 if(!q.revision.fuentes.some(x=>x.url===docs[entry[0]]))q.revision.fuentes.push({url:docs[entry[0]],referencia:'Cotejo curricular ITIC Academy: '+entry[1]});c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo Academy aplicado a las preguntas 6966–6970.');
