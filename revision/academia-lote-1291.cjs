const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..');
const bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1291.json');
const log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
  6776:['https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view?usp=drivesdk','ITIC Academy, bloque 33, e-learning y GIS (2026): cotejo del ámbito curricular; la identificación y versión de xAPI se contrastan con ADL/IEEE.'],
  6777:['https://drive.google.com/file/d/1fti1UIhEIqK3pY8GBENi-4rTKwoEG8tF/view?usp=drivesdk','ITIC Academy, bloque 12, planificación estratégica y gestión directiva TIC: cotejo contextual de planificación/seguimiento; PMBOK se contrasta con PMI.'],
  6778:['https://drive.google.com/file/d/1uS8S8axBSb22s9Dbv2mTsFaHUUVlowiM/view?usp=drivesdk','ITIC Academy, bloque 08, protección de datos (2026): cotejo de obligaciones de responsables públicos y DPD; obligación y apercibimiento se contrastan con RGPD, LOPDGDD y AEPD.'],
  6779:['https://drive.google.com/file/d/1hPYYrCoVBKhiEgMaqVBi5mpdUEm4_vV5/view?usp=drivesdk','ITIC Academy, Tema 093, MÉTRICA v3: cotejo de perfiles/participantes en la metodología.'],
  6780:['https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk','ITIC Academy, bloque 34, Business Intelligence y Big Data (2026): cotejo curricular de arquitecturas/plataformas de datos; la delimitación terminológica se apoya en la comparación técnica citada.']
};
const marker='Cotejo curricular ITIC Academy:';
const trim=v=>{const s=(v||'').trim(),i=s.indexOf(marker);return(i<0?s:s.slice(0,i)).trim().replace(/^Bloque de academia pendiente de cotejo\. Una lista vacía no implica exclusión del programa\.?\s*/,'').trim()};
for(const change of log.cambios){
 const q=bank.preguntas.find(x=>x.id===change.id),d=docs[change.id];assert.ok(q&&d,'Falta ID '+change.id);
 const topics=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');
 const note=marker+' '+d[1]+' Correspondencia oficial: '+topics+'. El cotejo académico acredita cobertura curricular; las afirmaciones específicas se contrastan con las fuentes técnicas o jurídicas primarias.';
 q.clasificacion.bloque_academia=d[1];
 q.clasificacion.nota=(trim(q.clasificacion.nota)+' '+note).trim();
 q.comentarios=(trim(q.comentarios)+' '+note).trim();
 q.revision.observaciones=(trim(q.revision.observaciones)+' '+note).trim();
 q.revision.fuentes=q.revision.fuentes.filter(s=>s.url!==d[0]);
 q.revision.fuentes.push({url:d[0],referencia:'ITIC Academy/Drive: '+d[1]});
 change.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular aplicado a los IDs 6776–6780.');
