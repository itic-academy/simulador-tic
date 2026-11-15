const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1300.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
6821:['https://drive.google.com/file/d/1yNoGRQ6orxdHGYBQ-RW4lFzaexftWnIm/view?usp=drivesdk','ITIC Academy, bloque 49, normas reguladoras de telecomunicaciones: cotejo del marco de telecomunicaciones y espectro; la banda concreta se comprueba en el Real Decreto 250/2025.'],
6822:['https://drive.google.com/file/d/1w3UwQPDtDE9GXacSYNUGUcO6KirAQ8xf/view?usp=drivesdk','ITIC Academy, bloque 44, IoT y territorios inteligentes (edición 2026): cotejo curricular del contexto smart territories; la clasificación de acciones se contrasta con el PNTI oficial.'],
6823:['https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk','ITIC Academy, bloque 06, economía y transformación digital: cotejo general de industria 4.0; la figura y categorías de habilitadores se verifican en el informe oficial de Industria Conectada 4.0.'],
6824:['https://drive.google.com/file/d/1w3UwQPDtDE9GXacSYNUGUcO6KirAQ8xf/view?usp=drivesdk','ITIC Academy, bloque 44, IoT y territorios inteligentes (edición 2026): cotejo del ámbito de ciudades inteligentes y datos; el objeto de UNE 178301 se verifica en fuentes UNE/AENOR.'],
6825:['https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk','ITIC Academy, bloque 46, redes inalámbricas y Bluetooth: cotejo del ámbito de tecnologías inalámbricas; la modulación, topología y parámetros se contrastan en la especificación de LoRa Alliance.']
};
const marker='Cotejo curricular ITIC Academy:';
const trim=v=>{const s=(v||'').trim(),i=s.indexOf(marker);return(i<0?s:s.slice(0,i)).trim()};
for(const change of log.cambios){
 const q=bank.preguntas.find(x=>x.id===change.id),doc=docs[change.id];assert.ok(q&&doc,'Falta ID '+change.id);
 const topics=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');
 const note=marker+' '+doc[1]+' Correspondencia oficial: '+topics+'. Academy se emplea para cotejar cobertura curricular; la respuesta se apoya en las disposiciones, plan, estándar o especificación primaria.';
 q.clasificacion.bloque_academia=doc[1];q.clasificacion.nota=(trim(q.clasificacion.nota)+' '+note).trim();
 q.comentarios=(trim(q.comentarios)+' '+note).trim();q.revision.observaciones=(trim(q.revision.observaciones)+' '+note).trim();
 q.revision.fuentes=q.revision.fuentes.filter(s=>s.url!==doc[0]);q.revision.fuentes.push({url:doc[0],referencia:doc[1]});
 change.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular aplicado a los IDs 6821–6825.');
