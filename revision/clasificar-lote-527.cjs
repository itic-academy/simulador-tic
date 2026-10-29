const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-527.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const academy={
 2951:{A1:['A1-64'],A2:['A2-II-5'],academy:'ITIC Academy, Bloque 30 «Tecnologías de Sistemas de la Información», versión 2026.1, bases de datos, persistencia y acceso a datos. https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk'},
 2952:{A1:['A1-65'],A2:['A2-II-12'],academy:'ITIC Academy, Bloque 30, §2.5 «Frameworks y bibliotecas front-end», Angular y frameworks de interfaces. https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk'},
 2953:{A1:['A1-65'],A2:['A2-II-9','A2-II-12'],academy:'ITIC Academy, Bloque 30, §§2.2–2.5, JavaScript, DOM, scripts cliente, front-end y arquitectura web. https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk'},
 2954:{A1:['A1-67'],A2:['A2-II-3','A2-III-10'],academy:'ITIC Academy, Bloque 30, contenidos JVM, bytecode, JDK y javac, y plataforma Java/Jakarta EE. https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk'},
 2955:{A1:['A1-65','A1-67'],A2:['A2-II-12','A2-III-10'],academy:'ITIC Academy, Bloque 30, §§6.3–6.4 sobre Spring MVC, persistencia con Hibernate/JPA y Spring AOP. https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk'}
};
const topics=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=academy[c.id];assert.ok(q&&q.revision&&m);
 for(const t of [...m.A1,...m.A2])assert.ok(topics.has(t),t);
 q.revision.observaciones+=` Cotejo curricular: ${m.academy} La clasificación se contrastó con revision/temario-oficial.json y con los anexos de las convocatorias A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262; Academy orienta el encuadre, no reemplaza las fuentes técnicas.`;
 q.clasificacion={...q.clasificacion,A1:m.A1,A2:m.A2,bloque_academia:m.academy,estado:'revisada',nota:`${q.revision.estado}. ${m.academy}`};
 q.comentarios=q.revision.observaciones;c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Clasificación A1/A2 y cotejo de Academy validados para lote 527.');
