const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-268.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 hardware:{url:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',label:'ITIC Academy, bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1 (31-08-2026)'},
 systems:{url:'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk',label:'ITIC Academy, bloque 27 Sistemas Operativos, versión 2026.1 (14-08-2026)'}
};
const mapping={
 1656:{doc:'hardware',detail:'almacenamiento RAID, capacidad útil y tolerancia a fallos (A1-56/A2-IV-5)',topics:['A1-56','A2-IV-5']},
 1657:{doc:'hardware',detail:'copias completas, incrementales/diferenciales, uso de medios y recuperación (A1-56/A2-IV-3)',topics:['A1-56','A2-IV-3']},
 1658:{doc:'systems',detail:'sistemas de archivos Linux/UNIX; el apartado de consistencia cubre journaling y recuperación ante cortes (A1-60/A2-II-2)',topics:['A1-60','A2-II-2']},
 1659:{doc:'hardware',detail:'almacenamiento RAID, striping, paridad y redundancia (A1-56/A2-IV-5)',topics:['A1-56','A2-IV-5']},
 1660:{doc:'hardware',detail:'almacenamiento RAID, striping por bloques, paridad distribuida y tolerancia a fallos (A1-56/A2-IV-5)',topics:['A1-56','A2-IV-5']}
};
const base={
 1656:'El bloque 26 cubre RAID y optimización de capacidad/protección; el requisito de un fallo y cuatro discos se resuelve con la relación capacidad/paridad de RAID 5.',
 1657:'El apartado 9 del bloque 26 trata full, incremental y diferencial, medios y recuperación; se incorpora el matiz de consumo por ejecución y la contrapartida de la cadena de restauración.',
 1658:'El bloque 27 desarrolla sistemas de ficheros Linux y el apartado 4.5 «Consistencia, journaling y copy-on-write»; allí se describe el diario como medio para recuperar consistencia después de un corte.',
 1659:'El bloque 26 incluye las técnicas de striping/paridad de RAID y la protección que cada nivel proporciona; RAID 0 se distingue por no tener redundancia.',
 1660:'El bloque 26 incluye niveles RAID, paridad distribuida y reconstrucción; la semántica concreta de RAID 5 se coteja además con IBM Documentation.'
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),r=mapping[c.id],d=docs[r.doc];assert.ok(q?.revision&&r,`Falta pregunta/mapeo ${c.id}`);for(const id of [...q.clasificacion.A1,...q.clasificacion.A2,...r.topics])assert.ok(official.has(id),id);const curr=`${d.label}; ${r.detail}`,note=`Cotejo curricular: ${curr}. Correspondencia ${r.topics.join(', ')} contrastada con revision/temario-oficial.json y BOE-A-2025-25938/BOE-A-2025-26262. La academia orienta el encaje y no sustituye las fuentes primarias.`;q.revision.estado='corregida';q.revision.observaciones=`${base[c.id]} ${note}`;q.revision.fuentes=q.revision.fuentes.filter(f=>f.url!==d.url);q.revision.fuentes.push({url:d.url,referencia:`${curr}. Correspondencia oficial cotejada con revision/temario-oficial.json y BOE-A-2025-25938 (A1)/BOE-A-2025-26262 (A2).`});q.clasificacion.bloque_academia=curr;q.clasificacion.nota=note;q.comentarios=q.revision.observaciones;c.actualizada=structuredClone(q)}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo ITIC Academy y BOE añadido para 1656–1660.');
