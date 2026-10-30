const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bankPath=path.join(__dirname,'..','preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-617.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 analysis:{url:'https://drive.google.com/file/d/1JMRiwMGDdhhX-lbYIQaZrRYr4dzogyX0/view?usp=drivesdk',title:'ITIC Academy, Temas 087/089/091/092/093/096 «Análisis y Diseño», edición 2024'},
 lifecycle:{url:'https://drive.google.com/file/d/1I1EOjKrsJ8R528HRFdU57-3tz3MXMF6P/view?usp=drivesdk',title:'ITIC Academy, Temas 037/086/088 «Metodologías y Modelos de Ciclo de Vida», edición 2025'},
 planning:{url:'https://drive.google.com/file/d/0Bw-rS_kOHzMKQlZsckp0a3dwTk0/view?usp=drivesdk&resourcekey=0-IiQLfXpf8gEvEp9omHU5Ug',title:'ITIC Academy, Tema 077 «Planificación estratégica de sistemas de información y de comunicaciones», 2007'},
 planningModern:{url:'https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view?usp=drivesdk',title:'ITIC Academy, Bloque temático 17 «Adquisición de sistemas, alternativas y rentabilidad de las inversiones», versión 2026.2'},
 metrics:{url:'https://drive.google.com/file/d/0Bw-rS_kOHzMKbl9YTDRkYXhpUVU/view?usp=drivesdk&resourcekey=0-G68W8glaMjTzq8AK65xzZQ',title:'ITIC Academy, Tema 088 «Métricas y evaluación de la calidad del software», 2007'}
};
const details={
 3401:{docs:[docs.analysis],detail:'la portada del material identifica A1-94 (prototipos en desarrollo) y A2-D4 (prototipos para determinar requisitos); la ventaja comunicativa se corroboró en literatura revisada por pares y fuentes universitarias.'},
 3402:{docs:[docs.planningModern],detail:'el bloque 17 de 2026.2 trata estudio de viabilidad y MÉTRICA v3; la clasificación concreta de técnicas EVS 1.1 se verificó en la guía de MÉTRICA del MAP, no se infirió solo del rótulo curricular.'},
 3403:{docs:[docs.planningModern,docs.planning],detail:'los materiales Academy cubren planificación/estudio de viabilidad y MÉTRICA v3; se cotejó el encaje con A1-95 del temario vigente. La identificación de la edición referenciada se contrastó en catálogos ISO.'},
 3404:{docs:[docs.analysis],detail:'la portada del material incluye A1-97, modelos de integración continua, y A2-D9, integración continua/DevOps; la definición de Jenkins se confirmó en la documentación oficial del proyecto.'},
 3405:{docs:[docs.metrics],detail:'el material Academy clasifica las métricas de estimación de proyectos y distingue orientación al tamaño y a la funcionalidad; el encaje se actualizó al A1-99 vigente. El modelo Putnam y las medidas alternativas se verificaron en QSM, IFPUG e ISO.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const calls='Clasificación cotejada con programa A1 BOE-A-2025-25938 (anexo I), programa A2 BOE-A-2025-26262 (anexo IX) y revision/temario-oficial.json.';
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),d=details[c.id];assert.ok(q&&d&&q.revision);const A1=c.actualizada.clasificacion.A1,A2=c.actualizada.clasificacion.A2;for(const id of [...A1,...A2])assert.ok(official.has(id),`Tema oficial inexistente: ${id}`);
 const academy=d.docs.map(x=>`${x.title}; ${d.detail} ${x.url}`).join(' | ');
 q.clasificacion={...q.clasificacion,A1,A2,bloque_academia:academy,estado:'revisada',nota:`${q.revision.estado}. ${calls}`};
 q.revision.observaciones+=` Cotejo ITIC Academy: ${academy} ${calls}`;
 for(const x of d.docs)q.revision.fuentes.push({url:x.url,referencia:`${x.title}; cotejo curricular: ${d.detail} El material de academia sirve para encuadre curricular, no sustituye las fuentes técnicas primarias.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejadas las cinco preguntas con materiales de ITIC Academy, temarios oficiales y su contexto curricular.');
