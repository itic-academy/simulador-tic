const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1348.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 hardware:{url:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',label:'ITIC Academy, bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», versión 2026.1'},
 mobile:{url:'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk',label:'ITIC Academy, bloque 46 «Redes inalámbricas y comunicaciones móviles», versión 2026.1'}
};
const notes={
 7061:{keys:['hardware'],desc:'El bloque 26 cubre periféricos, buses y arquitectura funcional de equipos PC (A1-54/A2-II-1); la separación dispositivo/controlador se contrasta con Microsoft Learn.'},
 7062:{keys:['hardware'],desc:'El bloque 26 incluye conectividad y componentes de equipos. Las tasas comparadas se comprueban directamente con especificaciones y guías USB-IF.'},
 7063:{keys:['hardware'],desc:'El bloque 26 da cobertura curricular de prestaciones y arquitectura de PC (A1-54/A2-II-1). El significado y limitaciones de MIPS se contrastan con documentación de IBM.'},
 7064:{keys:['mobile'],desc:'El bloque 46 trata administración de dispositivos móviles y soluciones MDM/EMM/UEM (A2-IV-15). La finalidad y alcance se verifican con NIST y Microsoft Learn.'},
 7065:{keys:['mobile'],desc:'El bloque 46 cubre gestión centralizada de móviles. Las capacidades concretas de bloqueo/borrado y sus condiciones se validan con NIST, Microsoft Intune y Android Enterprise.'}
};
const codes={7061:'A1-54/A2-II-1',7062:'A1-54/A2-II-1',7063:'A1-54/A2-II-1',7064:'A1-54/A2-IV-15',7065:'A1-54/A2-IV-15'};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),r=notes[c.id];assert.ok(q?.revision&&r,`Falta cotejo ${c.id}`);const selections=r.keys.map(k=>docs[k]);assert.ok(selections.every(Boolean));for(const id of [...q.clasificacion.A1,...q.clasificacion.A2])assert.ok(official.has(id),id);const note=`Cotejo curricular ITIC Academy: ${selections.map(d=>d.label).join('; ')}; ${r.desc} Correspondencia con el programa oficial: ${codes[c.id]}. La academia se usa para cotejar cobertura; las afirmaciones técnicas se respaldan con fuentes primarias.`;q.clasificacion.bloque_academia=note;q.clasificacion.nota=`${q.clasificacion.nota} ${note}`;q.comentarios=`${q.comentarios} ${note}`;q.revision.observaciones=`${q.revision.observaciones} ${note}`;for(const d of selections)q.revision.fuentes.push({url:d.url,referencia:`${d.label}; cotejo curricular. ${r.desc}`});c.actualizada=structuredClone(q)}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo de academia, temario oficial y convocatorias actualizado para IDs 7061–7065.');
