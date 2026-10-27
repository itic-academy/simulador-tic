const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-267.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 hardware:{url:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',label:'ITIC Academy, bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1 (31-08-2026)'}
};
const mapping={
 1651:{doc:'hardware',detail:'el apartado de copias de seguridad y almacenamiento incluye deduplicación y reducción de capacidad (A1-56/A2-IV-5)',topics:['A1-56','A2-IV-5']},
 1652:{doc:'hardware',detail:'protección física y almacenamiento seguro de medios de backup en armarios/cajas certificadas (A1-56/A2-IV-5)',topics:['A1-56','A2-IV-5']},
 1653:{doc:'hardware',detail:'estrategias de copia de seguridad, full/incremental/differential/copy y recuperación (A1-56/A2-IV-3)',topics:['A1-56','A2-IV-3']},
 1654:{doc:'hardware',detail:'soportes de almacenamiento óptico y protección de medios digitales (A1-56/A2-IV-5)',topics:['A1-56','A2-IV-5']},
 1655:{doc:'hardware',detail:'configuración RAID, redundancia, recuperación y reconstrucción de discos (A1-56/A2-IV-5)',topics:['A1-56','A2-IV-5']}
};
const base={
 1651:'Se coteja con los apartados 7–9 del bloque, que cubren almacenamiento, RAID y copias de seguridad; la deduplicación se describe como técnica de reducción de datos/capacidad, no como control de resiliencia por sí mismo.',
 1652:'El bloque incluye protección de soportes de backup y almacenamiento físico; la afirmación concreta térmica/electromagnética se atribuye además al fabricante del modelo citado, no se generaliza a todos los armarios.',
 1653:'El apartado 9 aborda ciclos de copias completas e incrementales y restauración; la definición histórica del tipo Copy se confirma aparte con Microsoft Learn.',
 1654:'El bloque trata dispositivos y medios de almacenamiento; la distinción histórica WORM/WMRA se verifica con la fuente institucional citada y no se presenta como tecnología actual dominante.',
 1655:'Los apartados 7–9 tratan almacenamiento, RAID, protección de datos y recuperación; la capacidad concreta de tolerar dos fallos se confirma en la documentación de IBM.'
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),r=mapping[c.id],d=docs[r.doc];assert.ok(q?.revision&&r,`Falta pregunta/mapeo ${c.id}`);for(const id of [...q.clasificacion.A1,...q.clasificacion.A2,...r.topics])assert.ok(official.has(id),id);const curr=`${d.label}; ${r.detail}`,note=`Cotejo curricular: ${curr}. Correspondencia ${r.topics.join(', ')} contrastada con revision/temario-oficial.json y BOE-A-2025-25938/BOE-A-2025-26262. La academia orienta el encaje, no sustituye las fuentes técnicas primarias.`;q.revision.estado='corregida';q.revision.observaciones=`${base[c.id]} ${note}`;q.revision.fuentes=q.revision.fuentes.filter(f=>f.url!==d.url);q.revision.fuentes.push({url:d.url,referencia:`${curr}. Correspondencia oficial cotejada con revision/temario-oficial.json y BOE-A-2025-25938 (A1)/BOE-A-2025-26262 (A2).`});q.clasificacion.bloque_academia=curr;q.clasificacion.nota=note;q.comentarios=q.revision.observaciones;c.actualizada=structuredClone(q)}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo ITIC Academy y BOE añadido para 1651–1655.');
