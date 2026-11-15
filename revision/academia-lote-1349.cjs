const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1349.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const doc={url:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',label:'ITIC Academy, bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», versión 2026.1'};
const desc={
7066:'El bloque 26 cubre hardware, interfaces y administración de componentes; la política MDM se verifica con la documentación oficial de Intune, que limita controles por plataforma/enrolamiento.',
7067:'El bloque 26 cubre arquitectura y memoria de ordenador; el criterio de refresco de SRAM/DRAM se contrasta con los materiales técnicos de Micron e IBM.',
7068:'El bloque 26 cubre tipos de memoria y almacenamiento; la propiedad eléctrica de EEPROM se contrasta con el glosario y la ficha de Microchip.',
7069:'El bloque 26 cubre buses e interconexión interna; la naturaleza packetizada y punto a punto de HyperTransport se contrasta con documentación técnica de AMD.',
7070:'El bloque 26 cubre interfaces de equipo y conectividad; el conector/tasa de Thunderbolt 3 y la historia del nombre Light Peak se contrastan por separado con documentación Intel.'
};
const codes={7066:'A1-54/A2-IV-15',7067:'A1-54/A2-II-1',7068:'A1-54/A2-II-1',7069:'A1-54/A2-II-1',7070:'A1-54/A2-II-1'};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id);assert.ok(q?.revision&&desc[c.id],`Falta cotejo ${c.id}`);for(const id of [...q.clasificacion.A1,...q.clasificacion.A2])assert.ok(official.has(id),id);const note=`Cotejo curricular ITIC Academy: ${doc.label}; ${desc[c.id]} Correspondencia con el programa oficial: ${codes[c.id]}. La academia se usa para cotejar cobertura; las afirmaciones técnicas se respaldan con fuentes primarias.`;q.clasificacion.bloque_academia=note;q.clasificacion.nota=`${q.clasificacion.nota} ${note}`;q.comentarios=`${q.comentarios} ${note}`;q.revision.observaciones=`${q.revision.observaciones} ${note}`;q.revision.fuentes.push({url:doc.url,referencia:`${doc.label}; cotejo curricular. ${desc[c.id]}`});c.actualizada=structuredClone(q)}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo de academia, temario oficial y convocatorias actualizado para IDs 7066–7070.');
