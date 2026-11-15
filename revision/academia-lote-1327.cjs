const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1327.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={lic:'https://drive.google.com/file/d/1Og6yI-YaZ48UA3pBT-HQhTh7TfvdPW_C/view?usp=drivesdk',big:'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk',elearn:'https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view?usp=drivesdk',doc:'https://drive.google.com/file/d/17UpEFvYfjQ4iUrx8UNNTJIFcj5xO4vlz/view?usp=drivesdk'};
const notes={
 6956:['lic','ITIC Academy, bloque 18 Protección jurídica, licencias y control del software (A1 43/A2 II.14), versión 2026.1, 26-08-2026: incluye software libre/propietario y tipos de licencia; se cotejan los criterios de la Open Source Definition con OSI.'],
 6957:['big','ITIC Academy, bloque 34 Business Intelligence y Big Data (A1 71/75/76; A2 III.15), versión 2026.1, 16-09-2026: incluye Hadoop Common, HDFS, YARN, MapReduce y el ecosistema de Spark; se diferencia MLlib como parte de Spark.'],
 6958:['elearn','ITIC Academy, bloque 33 E-learning y GIS (A1 73/74), versión 2026.1, 31-07-2026: incluye modalidades e-learning y móvil; la definición y alcance se contrastan con UNESCO.'],
 6959:['elearn','ITIC Academy, bloque 33 E-learning y GIS (A1 73/74), versión 2026.1, 31-07-2026: el apartado 1.5 trata otras modalidades de aprendizaje en línea; U-learning se presenta como término usado para aprendizaje ubicuo, con cautela sobre taxonomías variables.'],
 6960:['doc','ITIC Academy, bloque 40 Gestión documental (A1 104/105; A2 II.16), versión 2026.1, 23-09-2026: incluye sindicación, RSS/Atom y gestión de contenidos.']
};
const marker='Cotejo curricular ITIC Academy:';
const strip=v=>{const s=(v||'').trim(),i=s.indexOf(marker);return i<0?s:s.slice(0,i).trim()};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),entry=notes[c.id];assert.ok(q&&entry,'Falta pregunta o nota '+c.id);
 const codes=[...q.clasificacion.A1,...q.clasificacion.A2].join('/')||'sin epígrafe A2 específico';
 const note=marker+' '+entry[1]+' Correspondencia oficial: '+codes+'. El cotejo confirma cobertura académica; las respuestas se justifican con las fuentes primarias enlazadas en la ficha.';
 q.clasificacion.bloque_academia=entry[1];q.clasificacion.nota=(strip(q.clasificacion.nota)+' '+note).trim();q.comentarios=(strip(q.comentarios)+' '+note).trim();q.revision.observaciones=(strip(q.revision.observaciones)+' '+note).trim();
 if(!q.revision.fuentes.some(x=>x.url===docs[entry[0]]))q.revision.fuentes.push({url:docs[entry[0]],referencia:'Cotejo curricular ITIC Academy: '+entry[1]});c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo Academy aplicado a las preguntas 6956–6960.');
