const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-531.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const block38='https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const block39='https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk';
const block40='https://drive.google.com/file/d/17UpEFvYfjQ4iUrx8UNNTJIFcj5xO4vlz/view?usp=drivesdk';
const academy={
 2971:{A1:['A1-95'],A2:[],academy:`ITIC Academy, Bloque 38 «Análisis, Diseño y Construcción de Sistemas de Información» (2026.1), MÉTRICA v3 y procesos de sistemas. ${block38}`},
 2972:{A1:['A1-96'],A2:['A2-III-13'],academy:`ITIC Academy, Bloque 39 «Calidad y Mantenimiento» (2026.1), garantía de calidad, ISO/IEC 25010:2023 y características de seguridad; A2 D13 sobre calidad y medida del software. ${block39}`},
 2973:{A1:['A1-99'],A2:['A2-II-15'],academy:`ITIC Academy, Bloque 39 (2026.1), estimación y métricas de esfuerzo; el A2-II-15 del programa oficial cubre planificación, presupuestación y control de costes de proyectos informáticos. ${block39}`},
 2974:{A1:['A1-103'],A2:[],academy:`ITIC Academy, Bloque 39 (2026.1), §3.3 «Modelo EFQM 2025»: permite contrastar la estructura actual con los cinco antiguos agentes EFQM 2013. ${block39}`},
 2975:{A1:['A1-104'],A2:['A2-II-16'],academy:`ITIC Academy, Bloque 40 «Gestión Documental» (2026.1), §6 CMS/WCMS; su programa identifica el A2 T16, correspondiente al tema oficial A2-II-16 sobre sistemas de gestión documental y de contenidos. ${block40}`}
};
const topics=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=academy[c.id];assert.ok(q&&q.revision&&m);for(const t of [...m.A1,...m.A2])assert.ok(topics.has(t),t);q.revision.observaciones+=` Cotejo curricular: ${m.academy} La clasificación se contrastó con revision/temario-oficial.json y los anexos de las convocatorias A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262; la academia orienta el encuadre, no sustituye las fuentes primarias.`;q.clasificacion={...q.clasificacion,A1:m.A1,A2:m.A2,bloque_academia:m.academy,estado:'revisada',nota:`${q.revision.estado}. ${m.academy}`};q.comentarios=q.revision.observaciones;c.actualizada=structuredClone(q);}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Clasificación A1/A2 y cotejo de Academy validados para lote 531.');
