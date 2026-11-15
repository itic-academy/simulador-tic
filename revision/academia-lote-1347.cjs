const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1347.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 hardware:{url:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',label:'ITIC Academy, bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», versión 2026.1'},
 mobile:{url:'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk',label:'ITIC Academy, bloque 46 «Redes inalámbricas y comunicaciones móviles», versión 2026.1'},
 telecom:{url:'https://drive.google.com/file/d/1yNoGRQ6orxdHGYBQ-RW4lFzaexftWnIm/view?usp=drivesdk',label:'ITIC Academy, bloque 49 «Normativa de telecomunicaciones», versión 2026.1'}
};
const notes={
 7056:{keys:['hardware'],desc:'El bloque 26 aporta el contexto curricular de CPU, arquitectura y componentes PC; la codificación binaria vinculada a la ISA se valida además con documentación técnica de Arm.'},
 7057:{keys:['hardware'],desc:'El bloque 26 cubre componentes y prestaciones de equipos; la definición operativa del benchmark se verifica con las suites de medida de CPU y gráficos de SPEC.'},
 7058:{keys:['hardware'],desc:'El bloque 26, en el apartado de memoria y componentes PC, cubre SDRAM/DDR. La tasa de transferencia por ambos flancos se confirma directamente con documentación Micron.'},
 7059:{keys:['mobile'],desc:'El bloque 46 trata redes inalámbricas, comunicaciones móviles y gestión de dispositivos. La distinción formal BYOD/CYOD/COPE se comprueba con NIST SP 800-124 Rev. 2, no se atribuye a la academia como definición normativa.'},
 7060:{keys:['hardware','telecom'],desc:'El bloque 26 incluye conectividad y dispositivos PC; el bloque 49 proporciona el marco curricular general de telecomunicaciones. La tasa máxima de V.34 se verifica directamente en la ficha vigente de ITU-T.'}
};
const codes={7056:'A1-54/A2-II-1',7057:'A1-54/A2-II-1',7058:'A1-54/A2-II-1',7059:'A1-54/A2-II-1/A2-IV-15',7060:'A1-50/A1-110/A2-IV-7'};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),r=notes[c.id];assert.ok(q?.revision&&r,`Falta cotejo ${c.id}`);const selections=r.keys.map(k=>docs[k]);assert.ok(selections.every(Boolean));for(const id of [...q.clasificacion.A1,...q.clasificacion.A2])assert.ok(official.has(id),id);const note=`Cotejo curricular ITIC Academy: ${selections.map(d=>d.label).join('; ')}; ${r.desc} Correspondencia con el programa oficial: ${codes[c.id]}. La academia se usa como cotejo curricular; las afirmaciones técnicas se validan con documentación primaria.`;q.clasificacion.bloque_academia=note;q.clasificacion.nota=`${q.clasificacion.nota} ${note}`;q.comentarios=`${q.comentarios} ${note}`;q.revision.observaciones=`${q.revision.observaciones} ${note}`;for(const d of selections)q.revision.fuentes.push({url:d.url,referencia:`${d.label}; cotejo de cobertura curricular. ${r.desc}`});c.actualizada=structuredClone(q)}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo de academia, temario oficial y convocatorias actualizado para IDs 7056–7060.');
