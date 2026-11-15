const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1296.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
  6801:['https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk','ITIC Academy, bloque 36, Seguridad, criptografía, identificación y firma (2026.1), §10.1: cotejo de identidad y firma electrónica; la asignación de custodia en la firma cualificada remota se verifica específicamente en los arts. 29 y 29a eIDAS.'],
  6802:['https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk','ITIC Academy, bloque 46, Redes inalámbricas: cotejo de Bluetooth y mecanismos de acceso/coexistencia; la definición funcional de AFH se verifica en la especificación Bluetooth Core.'],
  6803:['https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk','ITIC Academy, bloque 30, Tecnologías de sistemas de información, edición 2026: cotejo de blockchain, consenso y tecnologías distribuidas; el calendario de emisión se verifica en la documentación del protocolo Bitcoin.'],
  6804:['https://drive.google.com/file/d/11xq0o8TLESDT7J2PLC_MVbZHGoqWmGa2/view?usp=drivesdk','ITIC Academy, bloque 07, Dirección pública, empleo, transparencia y unidad de mercado (2026.2), apartados sobre función gerencial y management público; la lista concreta de cinco funciones se limita al modelo de gestión citado en la fuente OpenStax.'],
  6805:['https://drive.google.com/file/d/12Yp-woy5YBTwNecdydOqWB9CxkyrQZ10/view?usp=drivesdk','ITIC Academy, bloque 42, Redes: cotejo de encapsulación y redes overlay; la carga Ethernet interior, UDP/IP y el puerto de destino se contrastan con RFC 7348 e IANA.']
};
const marker='Cotejo curricular ITIC Academy:';
const trim=v=>{const s=(v||'').trim(),i=s.indexOf(marker);return(i<0?s:s.slice(0,i)).trim().replace(/^Bloque de academia pendiente de cotejo\. Una lista vacía no implica exclusión del programa\.?\s*/,'').trim()};
for(const change of log.cambios){
  const q=bank.preguntas.find(x=>x.id===change.id),doc=docs[change.id];assert.ok(q&&doc,'Falta ID '+change.id);
  const topics=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');
  const note=marker+' '+doc[1]+' Correspondencia oficial: '+(topics||'sin epígrafe A2 directo en el programa específico').trim()+'. Se coteja cobertura; la respuesta se justifica con fuente primaria o técnica.';
  q.clasificacion.bloque_academia=doc[1];q.clasificacion.nota=(trim(q.clasificacion.nota)+' '+note).trim();
  q.comentarios=(trim(q.comentarios)+' '+note).trim();q.revision.observaciones=(trim(q.revision.observaciones)+' '+note).trim();
  q.revision.fuentes=q.revision.fuentes.filter(s=>s.url!==doc[0]);q.revision.fuentes.push({url:doc[0],referencia:doc[1]});
  change.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular aplicado a los IDs 6801–6805.');
