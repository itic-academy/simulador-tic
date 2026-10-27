const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-279.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 26:{url:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',label:'ITIC Academy, bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1 (31-08-2026)'},
 29:{url:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',label:'ITIC Academy, bloque 29 Bases de Datos, SQL y Modelado de Datos, versión 2026.1 (31-08-2026)'}
};
const mapping={
 1711:{doc:26,detail:'apartados 8.2–8.3: Fibre Channel over Ethernet e iSCSI (A1-56/A2-IV-5)',topics:['A1-56','A2-IV-5'],note:'Cotejado con los epígrafes de Fibre Channel, FCoE y almacenamiento IP del bloque 26.'},
 1712:{doc:29,detail:'apartado 8.5: índices y estructuras de acceso a datos (A1-63/A1-64/A2-III-4)',topics:['A1-63','A1-64','A2-III-4'],note:'Cotejado con el apartado de índices. La reformulación evita que la terminología variable de índices densos/dispersos convierta varias opciones del original en falsas.'},
 1713:{doc:26,detail:'apartado 7.3: medios ópticos y dispositivos para tratamiento multimedia (A1-56/A2-II-1/A2-IV-5)',topics:['A1-56','A2-II-1','A2-IV-5'],note:'Cotejado con soportes ópticos. El alcance del enunciado se limita al CD-ROM CLV y se respalda en ECMA-130 y la investigación académica citada.'},
 1714:{doc:26,detail:'apartado 8.3: iSCSI y protocolos de almacenamiento sobre IP (A1-56/A2-IV-5)',topics:['A1-56','A2-IV-5'],note:'Cotejado con iSCSI. RFC 7143 es la referencia técnica vigente y actualiza RFC 3720.'},
 1715:{doc:26,detail:'apartados 7.2 y 8.4: SAN/NAS y virtualización del almacenamiento (A1-56/A1-110/A2-IV-5/A2-IV-8)',topics:['A1-56','A1-110','A2-IV-5','A2-IV-8'],note:'Cotejado con el acceso a nivel de fichero y de bloque. La correspondencia temática no se usa como fuente para determinar la clave.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),r=mapping[c.id],doc=docs[r?.doc];assert.ok(q?.revision&&r&&doc,`Falta cotejo ${c.id}`);for(const id of [...q.clasificacion.A1,...q.clasificacion.A2,...r.topics])assert.ok(official.has(id),id);const curr=`${doc.label}; ${r.detail}`,note=`Cotejo curricular: ${curr}. Correspondencia ${r.topics.join(', ')} contrastada con revision/temario-oficial.json y BOE-A-2025-25938/BOE-A-2025-26262. La academia orienta el encaje, no sustituye la comprobación técnica primaria.`;q.revision.observaciones=`${r.note} ${note}`;q.revision.fuentes.push({url:doc.url,referencia:`${curr}; epígrafes cotejados en el documento de Drive. Correspondencia oficial contrastada con revision/temario-oficial.json y BOE-A-2025-25938 (A1)/BOE-A-2025-26262 (A2).`});q.clasificacion.bloque_academia=curr;q.clasificacion.nota=note;q.comentarios=q.revision.observaciones;c.actualizada=structuredClone(q)}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo ITIC Academy y temario oficial añadido a 1711–1715.');
