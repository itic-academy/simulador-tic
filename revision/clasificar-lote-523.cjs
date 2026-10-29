const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-523.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const academy={
 2931:{A1:['A1-27'],A2:['A2-I-7'],academy:'ITIC Academy, Bloque 08 «Protección de Datos», versión 2026.3 (1-10-2026), apartados 6.4 sobre brechas y 7 sobre DPD; trata la obligación de notificación, el destinatario y los roles. https://drive.google.com/file/d/1uS8S8axBSb22s9Dbv2mTsFaHUUVlowiM/view?usp=drivesdk'},
 2932:{A1:['A1-27'],A2:['A2-I-7'],academy:'ITIC Academy, Bloque 08 «Protección de Datos», versión 2026.3 (1-10-2026), apartado 6.3 sobre evaluación de impacto y consulta previa. https://drive.google.com/file/d/1uS8S8axBSb22s9Dbv2mTsFaHUUVlowiM/view?usp=drivesdk'},
 2933:{A1:['A1-28','A1-29'],A2:[],academy:'ITIC Academy, Bloque 09 «Organización y gestión de los sistemas de información», apartado sobre TPS/MIS/DSS/EIS; asigna al MIS informes resumidos y periódicos para gestión y control. Es encaje A1 sobre sistemas e información en las organizaciones; no se fuerza una equivalencia directa con el epígrafe A2 de inteligencia de negocios. https://drive.google.com/file/d/1-xmHgvxArWY8GroFD1eSdyPrAQjkBpzo/view?usp=drivesdk'},
 2934:{A1:['A1-38','A1-47'],A2:['A2-II-11'],academy:'ITIC Academy, Bloque 16 «Auditoría Informática», versión 2026.2 (19-8-2026), apartados de controles, auditoría y riesgo; el epígrafe A2-II-11 cubre controles y técnicas de auditoría. https://drive.google.com/file/d/1D93MNUzOWGwD6IyuWdxIMnHaL7aXvYhp/view?usp=drivesdk'},
 2935:{A1:['A1-38'],A2:['A2-II-11'],academy:'ITIC Academy, Bloque 16 «Auditoría Informática», versión 2026.2 (19-8-2026), apartado 1.5 sobre independencia y 7.4 sobre equipo auditor; encuadre en A1-38/A2-II-11. https://drive.google.com/file/d/1D93MNUzOWGwD6IyuWdxIMnHaL7aXvYhp/view?usp=drivesdk'}
};
const topics=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
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
console.log('Clasificación por programa oficial y cotejo curricular validados para lote 523.');
