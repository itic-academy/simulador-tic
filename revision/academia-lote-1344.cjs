const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1344.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 os:{url:'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk',label:'ITIC Academy, bloque 27 «Sistemas operativos», versión 2026.1 (14/08/2026)'},
 hardware:{url:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',label:'ITIC Academy, bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», versión 2026.1 (31/08/2026)'},
 wireless:{url:'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk',label:'ITIC Academy, bloque 46 «Redes inalámbricas y comunicaciones móviles», versión 2026.1 (30/09/2026)'}
};
const notes={
 7041:{keys:['hardware'],desc:'El bloque 26 aporta el encuadre de componentes, periféricos y conectividad de equipos (A1-54/A2-II-1). Las tasas, señalización diferencial y formato de sincronización se contrastan con la especificación USB-IF.'},
 7042:{keys:['os'],desc:'El bloque 27, §4 (E/S, controladores, interrupciones y DMA), cubre los fundamentos de operación del sistema y se corresponde con A1-59/A2-II-2 y IV-1. La delimitación de los tres modos se coteja además con el material académico universitario citado como fuente técnica.'},
 7043:{keys:['hardware'],desc:'El bloque 26 incluye dispositivos, componentes y conectividad de equipos, en correspondencia con A1-54/A2-II-1. Las tasas concretas se verifican independientemente con las especificaciones IEEE 1394, USB-IF y Thunderbolt Technology.'},
 7044:{keys:['hardware'],desc:'El bloque 26 aporta la cobertura curricular de los componentes y funcionalidades de los dispositivos (A1-54/A2-II-1). La definición precisa de firmware y su almacenamiento se verifica con NIST.'},
 7045:{keys:['wireless'],desc:'El bloque 46 §16 incluye administración y ciclo de vida de dispositivos móviles, MDM/EMM/UEM; su contenido aborda modelos de propiedad/uso como BYOD. Corresponde también a los contenidos de dispositivos personales y seguridad móvil A1-54/125 y A2-IV-15.'}
};
const codes={7041:'A1-54/A2-II-1',7042:'A1-59/A2-II-2/A2-IV-1',7043:'A1-54/A2-II-1',7044:'A1-54/A2-II-1',7045:'A1-54/A1-125/A2-IV-15'};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),r=notes[c.id];assert.ok(q?.revision&&r,`Falta cotejo ${c.id}`);const selections=r.keys.map(k=>docs[k]);assert.ok(selections.every(Boolean));for(const id of [...q.clasificacion.A1,...q.clasificacion.A2])assert.ok(official.has(id),id);const note=`Cotejo curricular ITIC Academy: ${selections.map(d=>d.label).join('; ')}; ${r.desc} Correspondencia con el programa oficial: ${codes[c.id]}. El material académico sirve de contraste curricular; la validación factual se apoya en las fuentes técnicas primarias.`;q.clasificacion.bloque_academia=note;q.clasificacion.nota=`${q.clasificacion.nota} ${note}`;q.comentarios=`${q.comentarios} ${note}`;q.revision.observaciones=`${q.revision.observaciones} ${note}`;for(const d of selections)q.revision.fuentes.push({url:d.url,referencia:`${d.label}; cotejo de cobertura curricular. ${r.desc}`});c.actualizada=structuredClone(q)}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo de academia, temario oficial y convocatorias actualizado para IDs 7041–7045.');
