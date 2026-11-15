const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1298.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
6811:['https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk','ITIC Academy, bloque 06, Economía, sociedad, empleo y transformación digital: cotejo temático amplio. No se localizó una unidad que tratara específicamente del comité CTN 178; este material no se presenta como evidencia de la denominación ni del número.'],
6812:['https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk','ITIC Academy, bloque 30, tecnologías de sistemas de información: cotejo curricular general de tecnologías digitales. No sustituye la clasificación ni las descripciones del informe oficial Industria Conectada 4.0.'],
6813:['https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk','ITIC Academy, bloque 06, Economía, sociedad, empleo y transformación digital: cotejo del ámbito económico. Las definiciones y la relación RNB/PIB se verifican en las cuentas nacionales del INE.'],
6814:['https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk','ITIC Academy, bloque 46, redes inalámbricas y Bluetooth: cotejo directo del ámbito; el funcionamiento de la publicidad BLE se contrasta en documentación Bluetooth SIG.'],
6815:['https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk','ITIC Academy, bloque 50, videoconferencia, protocolos y calidad de servicio: cotejo del ámbito de comunicaciones multimedia. La definición de H.323 se verifica en la recomendación UIT-T vigente.']
};
const marker='Cotejo curricular ITIC Academy:';
const trim=v=>{const s=(v||'').trim(),i=s.indexOf(marker);return(i<0?s:s.slice(0,i)).trim()};
for(const change of log.cambios){
 const q=bank.preguntas.find(x=>x.id===change.id),doc=docs[change.id];assert.ok(q&&doc,'Falta ID '+change.id);
 const topics=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');
 const note=marker+' '+doc[1]+' Correspondencia oficial: '+topics+'. Academy se usa para cotejar alcance curricular, no como fuente que sustituya la norma, estadística o especificación técnica.';
 q.clasificacion.bloque_academia=doc[1];q.clasificacion.nota=(trim(q.clasificacion.nota)+' '+note).trim();
 q.comentarios=(trim(q.comentarios)+' '+note).trim();q.revision.observaciones=(trim(q.revision.observaciones)+' '+note).trim();
 q.revision.fuentes=q.revision.fuentes.filter(s=>s.url!==doc[0]);q.revision.fuentes.push({url:doc[0],referencia:doc[1]});
 change.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular aplicado a los IDs 6811–6815.');
