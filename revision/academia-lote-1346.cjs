const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1346.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 os:{url:'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk',label:'ITIC Academy, bloque 27 «Sistemas operativos», versión 2026.1'},
 hardware:{url:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',label:'ITIC Academy, bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», versión 2026.1'}
};
const notes={
 7051:{keys:['os'],desc:'El bloque 27 incluye gestión y administración de sistemas operativos; la arquitectura cliente/agente de actualización se contrasta de forma independiente con documentación Microsoft sobre Windows Update Agent y WSUS.'},
 7052:{keys:['hardware'],desc:'El bloque 26 encuadra componentes, periféricos e interfaces de equipos personales; los requisitos de impresión Bluetooth y Wi-Fi Direct se verifican con documentación técnica de Microsoft y HP.'},
 7053:{keys:['hardware'],desc:'El bloque 26 aporta cobertura curricular de periféricos y conectividad de equipos. La definición precisa de USB On-The-Go se comprueba con el suplemento de USB-IF.'},
 7054:{keys:['hardware'],desc:'El bloque 26 aporta el contexto curricular de memorias y componentes de equipos. La definición de una celda DRAM como almacenamiento de un bit se confirma específicamente con la diapositiva 41 del material técnico de Micron.'},
 7055:{keys:['hardware'],desc:'El bloque 26 cubre los componentes e interfaces de ordenador del temario. Se distingue la categoría común amplia de interconexión de los diferentes alcances de ISA/PCI/AGP, ATA y PCMCIA usando documentación de PCI-SIG, T13, Intel y Texas Instruments.'}
};
const codes={7051:'A1-61/A2-IV-1',7052:'A1-54/A2-II-1',7053:'A1-54/A2-II-1',7054:'A1-54/A2-II-1',7055:'A1-54/A2-II-1'};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),r=notes[c.id];assert.ok(q?.revision&&r,`Falta cotejo ${c.id}`);const selections=r.keys.map(k=>docs[k]);assert.ok(selections.every(Boolean));for(const id of [...q.clasificacion.A1,...q.clasificacion.A2])assert.ok(official.has(id),id);const note=`Cotejo curricular ITIC Academy: ${selections.map(d=>d.label).join('; ')}; ${r.desc} Correspondencia con el programa oficial: ${codes[c.id]}. El material académico se utiliza como cotejo curricular; la comprobación factual se apoya en las fuentes técnicas citadas.`;q.clasificacion.bloque_academia=note;q.clasificacion.nota=`${q.clasificacion.nota} ${note}`;q.comentarios=`${q.comentarios} ${note}`;q.revision.observaciones=`${q.revision.observaciones} ${note}`;for(const d of selections)q.revision.fuentes.push({url:d.url,referencia:`${d.label}; cotejo curricular. ${r.desc}`});c.actualizada=structuredClone(q)}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo de academia, temario oficial y convocatorias actualizado para IDs 7051–7055.');
