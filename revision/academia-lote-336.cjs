const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-336.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 hardware:{url:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',label:'ITIC Academy, bloque Hardware, temas A1-52/53/54/56/57/132 y A2-T1/C3/C5/C6, edición 2026'},
 seguridad:{url:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',label:'ITIC Academy, bloque Seguridad en redes y nivel de aplicación, actualización 2026'},
 gobernanza:{url:'https://drive.google.com/file/d/1alTzv7f2Katg4EdxJ72SYkLm6UScCCho/view?usp=drivesdk',label:'ITIC Academy, Bloque 10 Gobernanza TIC y Administración Digital, versión 2026.3 (26-08-2026)'},
 servicios:{url:'https://drive.google.com/file/d/1wf9xQtg-rFSu_6YPmeUc_Y9J3bq1Lb-q/view?usp=drivesdk',label:'ITIC Academy, Tema 049 Servicios Comunes, A1-49/A2-O9/O10'},
 sistemas:{url:'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk',label:'ITIC Academy, Sistemas Operativos, temas A1-59/62 y A2-II-2, versión 2026.1'}
};
const mapping={
 1996:{doc:'hardware',topics:['A1-54','A2-IV-15'],detail:'incluye expresamente BYOD/CYOD/COPE/COBO, MDM/MAM/EMM/UEM y gestión segura de dispositivos móviles.'},
 1997:{doc:'seguridad',topics:['A1-48','A2-II-11'],detail:'cubre el ENS y la gestión/auditoría de seguridad; la familia ISO y su certificabilidad se comprueban por separado en las fichas oficiales de ISO.'},
 1998:{doc:'seguridad',topics:['A1-48','A2-I-9'],detail:'incluye expresamente las dimensiones del ENS de 2022, trazabilidad y las guías CCN-STIC.'},
 1999:{doc:'gobernanza',topics:['A1-30','A2-I-10'],detail:'incluye Red SARA, servicios comunes y compartidos; el Bloque 10 incluye una pregunta específica que identifica REÚNETE. El catálogo oficial sirve para discriminar REÚNETE de Reproduce.'},
 2000:{doc:'sistemas',topics:['A1-59','A2-II-2'],detail:'cubre sistemas operativos, discos y particiones como conceptos; el material consultado no fija una única distribución de volúmenes para servidor.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),r=mapping[c.id];assert.ok(q?.revision&&r,`Falta cotejo ${c.id}`);
 assert.deepEqual(q.clasificacion.A1,r.topics.filter(t=>t.startsWith('A1-')));assert.deepEqual(q.clasificacion.A2,r.topics.filter(t=>t.startsWith('A2-')));assert.ok(r.topics.every(t=>official.has(t)));
 const d=docs[r.doc];assert.ok(d);
 q.clasificacion.bloque_academia=`${d.label}; ${r.detail}`;
 q.clasificacion.nota=`Correspondencia contrastada con revision/temario-oficial.json y las convocatorias vigentes: A1 BOE-A-2025-25938 y A2 BOE-A-2025-26262. El material académico acredita cobertura temática, no sustituye las fuentes primarias. ${c.actualizada.revision.observaciones}`;
 q.revision.observaciones=q.clasificacion.nota;q.comentarios=q.clasificacion.nota;
 q.revision.fuentes.push({url:d.url,referencia:`${d.label}; cotejo específico del contenido y cobertura curricular.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo académico, temario oficial y convocatorias actualizado para IDs 1996–2000.');
