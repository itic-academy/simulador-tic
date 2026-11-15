const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1350.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={hardware:{url:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',label:'ITIC Academy, bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», versión 2026.1'},security:{url:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',label:'ITIC Academy, bloque 48 «Seguridad en redes y en el nivel de aplicación», versión 2026.1'},mobile:{url:'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk',label:'ITIC Academy, bloque 46 «Redes inalámbricas y comunicaciones móviles», versión 2026.1'}};
const notes={
7071:{key:'hardware',desc:'El bloque 26 trata hardware y componentes; la función de caché como nivel rápido de la jerarquía se coteja con IBM.'},
7072:{key:'hardware',desc:'El bloque 26 trata arquitectura y memoria de ordenador; los tamaños, latencias y líneas citados se limitan a Nehalem y se verifican con el manual de optimización de Intel.'},
7073:{key:'security',desc:'El bloque 48 cubre seguridad en redes y nivel de aplicación, incluidos controles preventivos. AppLocker se coteja como control de ejecución del endpoint con documentación Microsoft.'},
7074:{key:'mobile',desc:'El bloque 46 incluye MDM/EMM/UEM en gestión móvil. Se diferencia la administración del dispositivo de ITSM/ticketing según documentación de Microsoft.'},
7075:{key:'hardware',desc:'El bloque 26 cubre memoria y componentes; la definición de SDRAM se verifica con Micron y JEDEC.'}
};
const codes={7071:'A1-54/A2-II-1',7072:'A1-54/A2-II-1',7073:'A1-54/A2-II-2/A2-IV-12',7074:'A1-54/A2-IV-15',7075:'A1-54/A2-II-1'};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),n=notes[c.id];assert.ok(q?.revision&&n,`Falta cotejo ${c.id}`);for(const id of [...q.clasificacion.A1,...q.clasificacion.A2])assert.ok(official.has(id),id);const d=docs[n.key],note=`Cotejo curricular ITIC Academy: ${d.label}; ${n.desc} Correspondencia oficial: ${codes[c.id]}. La academia se usa para cotejar cobertura; las afirmaciones técnicas se respaldan con fuentes primarias.`;q.clasificacion.bloque_academia=note;q.clasificacion.nota=`${q.clasificacion.nota} ${note}`;q.comentarios=`${q.comentarios} ${note}`;q.revision.observaciones=`${q.revision.observaciones} ${note}`;q.revision.fuentes.push({url:d.url,referencia:`${d.label}; cotejo curricular. ${n.desc}`});c.actualizada=structuredClone(q)}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo ITIC Academy, temario oficial y convocatorias actualizado para IDs 7071–7075.');
