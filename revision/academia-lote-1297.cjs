const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1297.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
6806:['https://drive.google.com/file/d/1fti1UIhEIqK3pY8GBENi-4rTKwoEG8tF/view?usp=drivesdk','ITIC Academy, bloque 12, planificación y gestión de proyectos, cotejo del ámbito de metodologías y planificación de desarrollo; la calificación de FDD como método ágil se verifica en Agile Alliance/Agile Practice Guide.'],
6807:['https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk','ITIC Academy, bloque 03, Actuación Administrativa y Administración Digital, cotejo de legislación de sociedad de la información; el tenor y alcance competencial se verifican en LSSI consolidada y normas organizativas BOE.'],
6808:['https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk','ITIC Academy, bloque 30, Tecnologías de sistemas de información, cotejo general del ámbito de tecnologías web; la definición de CSS se contrasta en W3C.'],
6809:['https://drive.google.com/file/d/1uS8S8axBSb22s9Dbv2mTsFaHUUVlowiM/view?usp=drivesdk','ITIC Academy, bloque 08, Protección de Datos, cotejo curricular del RGPD y transferencias internacionales; el listado de adecuación vigente se comprueba en la Comisión Europea.'],
6810:['https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk','ITIC Academy, bloque 01, Constitución, organización del Estado y AGE, cotejo del marco constitucional y territorial; la competencia concreta se verifica en el artículo 149.1.15.ª CE.']
};
const marker='Cotejo curricular ITIC Academy:';
const trim=v=>{const s=(v||'').trim(),i=s.indexOf(marker);return(i<0?s:s.slice(0,i)).trim()};
for(const change of log.cambios){
 const q=bank.preguntas.find(x=>x.id===change.id),doc=docs[change.id];assert.ok(q&&doc,'Falta ID '+change.id);
 const topics=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');
 const note=marker+' '+doc[1]+' Correspondencia oficial: '+topics+'. Se coteja cobertura; la respuesta se justifica con fuente primaria o técnica.';
 q.clasificacion.bloque_academia=doc[1];q.clasificacion.nota=(trim(q.clasificacion.nota)+' '+note).trim();
 q.comentarios=(trim(q.comentarios)+' '+note).trim();q.revision.observaciones=(trim(q.revision.observaciones)+' '+note).trim();
 q.revision.fuentes=q.revision.fuentes.filter(s=>s.url!==doc[0]);q.revision.fuentes.push({url:doc[0],referencia:doc[1]});
 change.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular aplicado a los IDs 6806–6810.');
