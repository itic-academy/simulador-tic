const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1299.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
6816:['https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk','ITIC Academy, bloque 42, redes y protocolos: cotejo curricular de protocolos de comunicación; las definiciones de CoAP, MQTT, DDS y HTTP se verifican en sus estándares primarios.'],
6817:['https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk','ITIC Academy, bloque 46, redes inalámbricas y Bluetooth: cotejo directo de conectividad personal/IoT; la clasificación técnica se contrasta con IETF, Bluetooth SIG y Thread Group.'],
6818:['https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk','ITIC Academy, bloque 30, tecnologías de sistemas de información: cotejo curricular general de sistemas IoT; no sustituye la fuente histórica primaria de Google sobre Brillo y Weave.'],
6819:['https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk','ITIC Academy, bloque 30, tecnologías de sistemas de información: cotejo curricular general del ámbito de sistemas IoT; la identificación histórica de Brillo se contrasta con Google Developers.'],
6820:['https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk','ITIC Academy, bloque 06, economía, sociedad, empleo y transformación digital: cotejo curricular general de transformación digital industrial; el nombre oficial HADA se verifica en el portal Industria Conectada 4.0.']
};
const marker='Cotejo curricular ITIC Academy:';
const trim=v=>{const s=(v||'').trim(),i=s.indexOf(marker);return(i<0?s:s.slice(0,i)).trim()};
for(const change of log.cambios){
 const q=bank.preguntas.find(x=>x.id===change.id),doc=docs[change.id];assert.ok(q&&doc,'Falta ID '+change.id);
 const topics=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');
 const note=marker+' '+doc[1]+' Correspondencia oficial: '+topics+'. ITIC Academy se emplea para cotejar cobertura curricular; la respuesta se apoya en fuente técnica o institucional primaria.';
 q.clasificacion.bloque_academia=doc[1];q.clasificacion.nota=(trim(q.clasificacion.nota)+' '+note).trim();
 q.comentarios=(trim(q.comentarios)+' '+note).trim();q.revision.observaciones=(trim(q.revision.observaciones)+' '+note).trim();
 q.revision.fuentes=q.revision.fuentes.filter(s=>s.url!==doc[0]);q.revision.fuentes.push({url:doc[0],referencia:doc[1]});
 change.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular aplicado a los IDs 6816–6820.');
