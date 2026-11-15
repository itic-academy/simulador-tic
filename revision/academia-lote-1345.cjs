const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1345.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 os:{url:'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk',label:'ITIC Academy, bloque 27 «Sistemas operativos», versión 2026.1 (14/08/2026)'},
 hardware:{url:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',label:'ITIC Academy, bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», versión 2026.1 (31/08/2026)'}
};
const notes={
 7046:{keys:['hardware'],desc:'El bloque 26 ofrece el marco curricular de componentes y arquitectura de equipos personales (A1-54/A2-II-1). La comparación técnica de control cableado y microprogramado se apoya en material universitario de arquitectura, no se atribuye como cita textual del temario de academia.'},
 7047:{keys:['hardware'],desc:'El bloque 26 sitúa los componentes funcionales de CPU y ordenador dentro de arquitectura de equipos (A1-54/A2-II-1). El alcance de la ALU con desplazador integrado se contrasta con el texto de arquitectura MIT citado como fuente técnica.'},
 7048:{keys:['hardware'],desc:'La conectividad e interfaces de equipos se incluyen en el encuadre de componentes del bloque 26 (A1-54/A2-II-1). Se contrastó la equivalencia FireWire/IEEE 1394 con material de IEEE.'},
 7049:{keys:['os'],desc:'El bloque 27, §4.2, cubre interrupciones y DMA en fundamentos de E/S del sistema operativo, alineado con A1-59/A2-II-2 y IV-1. La posibilidad de configurar interrupciones de terminación se comprueba en documentación técnica de fabricantes.'},
 7050:{keys:['hardware'],desc:'El bloque 26 aporta encuadre curricular de arquitecturas y sistemas informáticos, incluido el contexto de mainframe (A1-52/A2-II-1); la cifra de patrones EBCDIC se valida directamente con documentación IBM.'}
};
const codes={7046:'A1-54/A2-II-1',7047:'A1-54/A2-II-1',7048:'A1-54/A2-II-1',7049:'A1-59/A2-II-2/A2-IV-1',7050:'A1-52/A2-II-1'};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),r=notes[c.id];assert.ok(q?.revision&&r,`Falta cotejo ${c.id}`);const selections=r.keys.map(k=>docs[k]);assert.ok(selections.every(Boolean));for(const id of [...q.clasificacion.A1,...q.clasificacion.A2])assert.ok(official.has(id),id);const note=`Cotejo curricular ITIC Academy: ${selections.map(d=>d.label).join('; ')}; ${r.desc} Correspondencia con el programa oficial: ${codes[c.id]}. El material académico sirve de contraste curricular; la validación factual se apoya en las fuentes técnicas citadas.`;q.clasificacion.bloque_academia=note;q.clasificacion.nota=`${q.clasificacion.nota} ${note}`;q.comentarios=`${q.comentarios} ${note}`;q.revision.observaciones=`${q.revision.observaciones} ${note}`;for(const d of selections)q.revision.fuentes.push({url:d.url,referencia:`${d.label}; cotejo de cobertura curricular. ${r.desc}`});c.actualizada=structuredClone(q)}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo de academia, temario oficial y convocatorias actualizado para IDs 7046–7050.');
