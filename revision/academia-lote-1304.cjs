const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1304.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const block44='https://drive.google.com/file/d/1w3UwQPDtDE9GXacSYNUGUcO6KirAQ8xf/view?usp=drivesdk';
const block42='https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const docs={
6841:[block44,'ITIC Academy, bloque 44, IoT (actualización 2026): compara MQTT y CoAP como protocolos de aplicación; bloque 42 menciona Thread como red de bajo consumo basada en IPv6. La respuesta distingue capas conforme a IETF/Thread Group.'],
6842:[block44,'ITIC Academy, bloque 44, IoT y ciudades inteligentes: cotejo del contexto curricular de smart cities. No se encontró en el documento consultado una explicación del modelo de seis dimensiones de Giffinger; se cita el informe original para esa clasificación.'],
6843:[block44,'ITIC Academy, bloque 44, IoT: incluye LonWorks/KNX en automatización de edificios y redes de sensores; bloque 42 cubre las tecnologías IEEE/Wi-Fi. Este cotejo confirma que LonWorks es una tecnología de comunicación/control, y la redacción se limita a la categoría inalámbrica.'],
6844:[block44,'ITIC Academy, bloque 44, IoT y ciudades inteligentes: reproduce la referencia UIT-T Y.4200 sobre interoperabilidad de plataformas urbanas; se cotejó el título y estado con el registro oficial UIT-T.'],
6845:[block44,'ITIC Academy, bloque 44, IoT/edificios conectados: contexto curricular próximo. No se halló una definición directa de domótica en el fragmento revisado; se usa la definición institucional del IDAE.']
};
const marker='Cotejo curricular ITIC Academy:';
const trim=v=>{const s=(v||'').trim(),i=s.indexOf(marker);return(i<0?s:s.slice(0,i)).trim()};
for(const change of log.cambios){
 const q=bank.preguntas.find(x=>x.id===change.id),doc=docs[change.id];assert.ok(q&&doc,'Falta ID '+change.id);
 const topics=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');
 const note=marker+' '+doc[1]+' La edición 2026 de Academy agrupa IoT como A2 C11; aquí se conserva A2-IV.13 según el programa oficial de la convocatoria estatal de 2025, indicado en temario-oficial.json. Academy se usa para cobertura curricular, no como autoridad normativa o técnica.';
 q.clasificacion.bloque_academia=doc[1];q.clasificacion.nota=(trim(q.clasificacion.nota)+' '+note).trim();
 q.comentarios=(trim(q.comentarios)+' '+note).trim();q.revision.observaciones=(trim(q.revision.observaciones)+' '+note).trim();
 q.revision.fuentes=q.revision.fuentes.filter(s=>s.url!==doc[0]);q.revision.fuentes.push({url:doc[0],referencia:doc[1]});
 change.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular aplicado a los IDs 6841–6845.');
