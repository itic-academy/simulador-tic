const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-524.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const academy={
 2936:{A1:['A1-40','A1-41'],A2:['A2-II-15'],academy:'ITIC Academy, Bloque 17 «Adquisición de sistemas, alternativas y rentabilidad», versión 2026.2 (02-10-2026), apartados 1–2 sobre alternativas y Estudio de Viabilidad del Sistema (EVS). Encuadre en A1 40–41 y A2 II-15. https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view?usp=drivesdk'},
 2937:{A1:['A1-44'],A2:['A2-III-14'],academy:'ITIC Academy, Bloque 30 «Tecnologías de Sistemas de la Información», versión 2026.1 (31-08-2026), apartado 2.6 sobre diseño adaptable, UX y accesibilidad; materiales de evaluación web. https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk'},
 2938:{A1:['A1-44','A1-77'],A2:['A2-III-14','A2-III-12'],academy:'ITIC Academy, Bloque 30 «Tecnologías de Sistemas de la Información», versión 2026.1 (31-08-2026), apartados sobre estándares web, HTML y accesibilidad. https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk'},
 2939:{A1:['A1-44'],A2:['A2-III-14'],academy:'ITIC Academy, Bloque 30 «Tecnologías de Sistemas de la Información», versión 2026.1 (31-08-2026), apartado 2.6 sobre UX y accesibilidad; cotejo complementario con los criterios de accesibilidad de la Administración Presupuestaria (IGAE, versión 1.3, enero de 2019). https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk https://drive.google.com/file/d/1rFMes2O6r2MUBAq_vfJhzb_S9KMj3Zu7/view?usp=drivesdk'},
 2940:{A1:['A1-45','A1-49','A1-120'],A2:['A2-I-9'],academy:'ITIC Academy, Bloque 42 «Redes», actualización 2026.1 (29-09-2026), temas A1 119–120 y §11 «Redes de las Administraciones públicas: Red SARA y sTESTA/TESTA-ng»; Bloque 30, interoperabilidad y servicios web. https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk'}
};
const topicFile=JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8'));
const topics=new Set(topicFile.programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=academy[c.id];assert.ok(q&&q.revision&&m);
 for(const t of [...m.A1,...m.A2])assert.ok(topics.has(t),t);
 q.revision.observaciones+=` Cotejo curricular: ${m.academy} La clasificación oficial se contrastó con revision/temario-oficial.json y los anexos de las convocatorias BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2); Academy orienta el encuadre, no sustituye las fuentes primarias.`;
 q.clasificacion={...q.clasificacion,A1:m.A1,A2:m.A2,bloque_academia:m.academy,estado:'revisada',nota:`${q.revision.estado}. ${m.academy}`};
 q.comentarios=q.revision.observaciones;c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Clasificación por programa oficial y cotejo curricular validados para lote 524.');
