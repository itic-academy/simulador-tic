const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-530.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const academyUrl='https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const academy={
 2966:{A1:['A1-95'],A2:[],academy:`ITIC Academy, Bloque 38 «Análisis, Diseño y Construcción de Sistemas de Información» (2026.1), apartado de MÉTRICA v3 y proceso ASI. ${academyUrl}`},
 2967:{A1:['A1-95'],A2:[],academy:`ITIC Academy, Bloque 38 (2026.1), MÉTRICA v3 y procesos de desarrollo; el temario recoge planificación, análisis y diseño de sistemas. ${academyUrl}`},
 2968:{A1:['A1-95'],A2:['A2-III-7'],academy:`ITIC Academy, Bloque 38 (2026.1), mantenimiento/ciclo de vida y pruebas; el programa A2 incluye D7 «Pruebas. Planificación y documentación…». ${academyUrl}`},
 2969:{A1:['A1-93'],A2:[],academy:`ITIC Academy, Bloque 38 (2026.1), §5.4 «Cohesión y acoplamiento» y §5.3 «Diseño estructurado: diagramas de estructura». ${academyUrl}`},
 2970:{A1:['A1-95'],A2:[],academy:`ITIC Academy, Bloque 38 (2026.1), contenido de planificación de sistemas y metodología MÉTRICA v3. ${academyUrl}`}
};
const topics=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=academy[c.id];assert.ok(q&&q.revision&&m);for(const t of [...m.A1,...m.A2])assert.ok(topics.has(t),t);q.revision.observaciones+=` Cotejo curricular: ${m.academy} La clasificación se contrastó con revision/temario-oficial.json y los anexos de las convocatorias A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262; la academia orienta el encuadre, no sustituye las fuentes primarias.`;q.clasificacion={...q.clasificacion,A1:m.A1,A2:m.A2,bloque_academia:m.academy,estado:'revisada',nota:`${q.revision.estado}. ${m.academy}`};q.comentarios=q.revision.observaciones;c.actualizada=structuredClone(q);}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Clasificación A1/A2 y cotejo de Academy validados para lote 530.');
