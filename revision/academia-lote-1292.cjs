const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..');
const bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1292.json');
const log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
  6781:['https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk','ITIC Academy, bloque 34, Business Intelligence y Big Data (2026): cotejo curricular del ámbito de datos y tecnologías de privacidad; las técnicas y sus límites se contrastan con EDPB.'],
  6782:['https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk','ITIC Academy, bloque 48, Seguridad de redes y aplicaciones (2026): cotejo de VPN/IPsec; la distinción de capas se verifica con las RFC del IETF.'],
  6783:['https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk','ITIC Academy, bloque 29, Bases de Datos (2026): cotejo de SGBD, modelo relacional y NoSQL, incluidos ejemplos de Cassandra; los términos históricos se contrastan con Apache.'],
  6784:['https://drive.google.com/file/d/12Yp-woy5YBTwNecdydOqWB9CxkyrQZ10/view?usp=drivesdk','ITIC Academy, bloque 42, Redes y tecnologías de transporte (2026): cotejo contextual de redes de acceso y medios de transmisión; nombre y órbita se verifican con SpaceX/BOE.'],
  6785:['https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk','ITIC Academy, bloque 50, Videoconferencia, SSO y trabajo colaborativo (2026): cotejo de videoconferencia y calidad de servicio; los efectos del buffer se validan con Cisco.']
};
const marker='Cotejo curricular ITIC Academy:';
const trim=v=>{const s=(v||'').trim(),i=s.indexOf(marker);return(i<0?s:s.slice(0,i)).trim().replace(/^Bloque de academia pendiente de cotejo\. Una lista vacía no implica exclusión del programa\.?\s*/,'').trim()};
for(const change of log.cambios){
 const q=bank.preguntas.find(x=>x.id===change.id),d=docs[change.id];assert.ok(q&&d,'Falta ID '+change.id);
 const topics=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');
 const note=marker+' '+d[1]+' Correspondencia oficial: '+topics+'. El cotejo académico acredita encaje curricular; las afirmaciones técnicas se sustentan en estándares o documentación primaria.';
 q.clasificacion.bloque_academia=d[1];q.clasificacion.nota=(trim(q.clasificacion.nota)+' '+note).trim();
 q.comentarios=(trim(q.comentarios)+' '+note).trim();q.revision.observaciones=(trim(q.revision.observaciones)+' '+note).trim();
 q.revision.fuentes=q.revision.fuentes.filter(s=>s.url!==d[0]);q.revision.fuentes.push({url:d[0],referencia:'ITIC Academy/Drive: '+d[1]});
 change.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular aplicado a los IDs 6781–6785.');
