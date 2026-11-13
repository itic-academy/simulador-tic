const fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1174.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const doc='https://drive.google.com/file/d/1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ/view?usp=drivesdk';
const ids=[6191,6192,6193,6194,6195];
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id);if(!q||!ids.includes(c.id))throw Error('Falta pregunta/mapeo '+c.id);
 q.clasificacion.A1=[c.id<=6193?'A1-65':'A1-58'];
 q.clasificacion.A2=[c.id<=6193?'A2-III-12':'A2-II-6'];
 q.clasificacion.bloque_academia='ITIC Academy, bloque 28 «Arquitectura SOA y requisitos no funcionales», versión 2026.1 (25-09-2026): apartados sobre SOAP/WSDL/servicios web, mensajería, sistemas distribuidos y arquitectura cliente-servidor/multicapas. Encaje oficial '+[...q.clasificacion.A1,...q.clasificacion.A2].join('/')+'.';
 q.clasificacion.nota=(q.clasificacion.nota||'').replace(/ Bloque de academia pendiente de cotejo\.[^]*$/,'').trim()+' Cotejo curricular: '+q.clasificacion.bloque_academia;
 const note='Cotejo curricular de ITIC Academy: '+q.clasificacion.bloque_academia+' La academia ubica el contenido; la W3C, OASIS, Microsoft, IBM y Oracle fundamentan las respuestas.';
 q.comentarios=(q.comentarios||'').trim()+' '+note;
 q.revision.observaciones=(q.revision.observaciones||'').trim()+' '+note;
 if(!q.revision.fuentes.some(f=>f.url===doc))q.revision.fuentes.push({url:doc,referencia:'ITIC Academy, bloque 28 Arquitectura SOA y requisitos no funcionales, versión 2026.1; secciones de SOAP/WSDL, mensajería y sistemas distribuidos.'});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular ITIC Academy actualizado para IDs 6191–6195.');
