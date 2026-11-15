const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1302.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
6831:['https://drive.google.com/file/d/1nXa2jkiUqpu31smkt5D8WswcTgEN7XlB/view?usp=drivesdk','ITIC Academy, bloque 47, Sistemas Operativos y Aplicaciones Móviles: cotejo curricular del ámbito de sistemas operativos; la condición de Go como lenguaje y los sistemas IoT citados se verifican en sus fuentes oficiales.'],
6832:['https://drive.google.com/file/d/1w3UwQPDtDE9GXacSYNUGUcO6KirAQ8xf/view?usp=drivesdk','ITIC Academy, bloque 44, IoT y territorios inteligentes (edición 2026): cotejo curricular directo de plataformas y servicios de ciudades inteligentes; la identificación actual de Thinking City se comprueba en Telefónica.'],
6833:['https://drive.google.com/file/d/1w3UwQPDtDE9GXacSYNUGUcO6KirAQ8xf/view?usp=drivesdk','ITIC Academy, bloque 44, IoT y territorios inteligentes: cotejo general del ámbito de ciudades inteligentes. La presidencia y estructura del CTN se contrastan con la fuente UNE fechada; no se atribuye a la academia un dato organizativo no localizado.'],
6834:['https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk','ITIC Academy, bloque 43, Protocolos: cotejo curricular general de familias de protocolos y comunicaciones; la especificación de XMPP se verifica en los RFC del IETF.'],
6835:['https://drive.google.com/file/d/1w3UwQPDtDE9GXacSYNUGUcO6KirAQ8xf/view?usp=drivesdk','ITIC Academy, bloque 44, IoT y territorios inteligentes: cotejo curricular del uso de placas, electrónica e IoT; las características de la plataforma Arduino se contrastan con su documentación oficial.']
};
const marker='Cotejo curricular ITIC Academy:';
const trim=v=>{const s=(v||'').trim(),i=s.indexOf(marker);return(i<0?s:s.slice(0,i)).trim()};
for(const change of log.cambios){
 const q=bank.preguntas.find(x=>x.id===change.id),doc=docs[change.id];assert.ok(q&&doc,'Falta ID '+change.id);
 const topics=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');
 const note=marker+' '+doc[1]+' Correspondencia oficial: '+topics+'. Academy se utiliza para cotejar cobertura y vocabulario curricular; las respuestas se apoyan en las fuentes primarias señaladas.';
 q.clasificacion.bloque_academia=doc[1];q.clasificacion.nota=(trim(q.clasificacion.nota)+' '+note).trim();
 q.comentarios=(trim(q.comentarios)+' '+note).trim();q.revision.observaciones=(trim(q.revision.observaciones)+' '+note).trim();
 q.revision.fuentes=q.revision.fuentes.filter(s=>s.url!==doc[0]);q.revision.fuentes.push({url:doc[0],referencia:doc[1]});
 change.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular aplicado a los IDs 6831–6835.');
