const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-526.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const academy={
 2946:{A1:['A1-56','A1-60'],A2:['A2-II-1','A2-II-2'],academy:'ITIC Academy, Bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», versión 2026.1, almacenamiento paralelo y distribuido; y Bloque 27 Sistemas Operativos, UNIX/Linux. https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk'},
 2947:{A1:['A1-59'],A2:['A2-II-2'],academy:'ITIC Academy, Bloque 27, fundamentos y clasificación de sistemas operativos; se distingue multiusuario de multitarea. https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk'},
 2948:{A1:['A1-59'],A2:['A2-II-2'],academy:'ITIC Academy, Bloque 27, §§3.3–3.6 sobre paginación, segmentación y traducción de direcciones. https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk'},
 2949:{A1:['A1-60'],A2:['A2-II-2'],academy:'ITIC Academy, Bloque 27, §6.9 POSIX y shell; familias clásicas Bourne, C y Korn. https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk'},
 2950:{A1:['A1-62'],A2:['A2-II-2'],academy:'ITIC Academy, Bloque 27, epígrafe A1-62 OS X y panorama de sistemas operativos móviles. https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk'}
};
const topics=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=academy[c.id];assert.ok(q&&q.revision&&m);
 for(const t of [...m.A1,...m.A2])assert.ok(topics.has(t),t);
 q.revision.observaciones+=` Cotejo curricular: ${m.academy} La clasificación se contrastó con revision/temario-oficial.json y los anexos de las convocatorias A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262; el programa de Academy orienta el encuadre, no reemplaza las fuentes técnicas.`;
 q.clasificacion={...q.clasificacion,A1:m.A1,A2:m.A2,bloque_academia:m.academy,estado:'revisada',nota:`${q.revision.estado}. ${m.academy}`};
 q.comentarios=q.revision.observaciones;c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Clasificación A1/A2 y cotejo de Academy validados para lote 526.');
