const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1301.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
6826:['https://drive.google.com/file/d/1w3UwQPDtDE9GXacSYNUGUcO6KirAQ8xf/view?usp=drivesdk','ITIC Academy, bloque 44, IoT y territorios inteligentes (edición 2026): cotejo curricular directo del concepto IoT; la definición se contrasta con ITU-T Y.4000.'],
6827:['https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk','ITIC Academy, bloque 43, protocolos: cotejo curricular del ámbito de protocolos de mensajería; la condición de estándar OASIS y el transporte se verifican en la especificación MQTT.'],
6828:['https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk','ITIC Academy, bloque 46, redes inalámbricas: cotejo de Thread, redes de bajo consumo y tecnologías de radio; las diferencias de estándares se comprueban en Thread Group e IEEE.'],
6829:['https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk','ITIC Academy, bloque 06, economía y transformación digital: cotejo curricular general del marco industrial y económico; la denominación y numeración del componente se verifican en el portal oficial PRTR.'],
6830:['https://drive.google.com/file/d/1w3UwQPDtDE9GXacSYNUGUcO6KirAQ8xf/view?usp=drivesdk','ITIC Academy, bloque 44, IoT y territorios inteligentes: cotejo curricular del intercambio de mensajes en sistemas IoT; las arquitecturas se contrastan con ITU-T, OASIS e IETF.']
};
const marker='Cotejo curricular ITIC Academy:';
const trim=v=>{const s=(v||'').trim(),i=s.indexOf(marker);return(i<0?s:s.slice(0,i)).trim()};
for(const change of log.cambios){
 const q=bank.preguntas.find(x=>x.id===change.id),doc=docs[change.id];assert.ok(q&&doc,'Falta ID '+change.id);
 const topics=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');
 const note=marker+' '+doc[1]+' Correspondencia oficial: '+topics+'. La academia se usa para cotejar la cobertura curricular, no como fuente normativa o técnica de la respuesta.';
 q.clasificacion.bloque_academia=doc[1];q.clasificacion.nota=(trim(q.clasificacion.nota)+' '+note).trim();
 q.comentarios=(trim(q.comentarios)+' '+note).trim();q.revision.observaciones=(trim(q.revision.observaciones)+' '+note).trim();
 q.revision.fuentes=q.revision.fuentes.filter(s=>s.url!==doc[0]);q.revision.fuentes.push({url:doc[0],referencia:doc[1]});
 change.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular aplicado a los IDs 6826–6830.');
