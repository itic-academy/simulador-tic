const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-525.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const academy={
 2941:{A1:['A1-18'],A2:['A2-I-6'],academy:'ITIC Academy, Bloque 03 «Actuación administrativa y Administración digital», edición 2026, que incluye sociedad de la información y su marco España-UE. https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk'},
 2942:{A1:['A1-50'],A2:['A2-III-13'],academy:'ITIC Academy, Bloque 24 «Normalización», versión 2026, explica que UNE es la asociación de normalización y miembro nacional actual; AENOR pertenece al ámbito de evaluación de conformidad y conocimiento. https://drive.google.com/file/d/1HKwUIuFhm-wVG0e8kZfFm1R8qI1rGS2G/view?usp=drivesdk'},
 2943:{A1:['A1-52'],A2:['A2-II-1'],academy:'ITIC Academy, Bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», versión 2026.1, §3.3 Grid Computing: agrega recursos distribuidos, heterogéneos y de dominios distintos mediante coordinación. https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk'},
 2944:{A1:['A1-56'],A2:['A2-II-1'],academy:'ITIC Academy, Bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», versión 2026.1, apartados de dispositivos de almacenamiento y tecnologías de memoria; el reactivo se conserva como antecedente histórico. https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk'},
 2945:{A1:['A1-55'],A2:['A2-II-1'],academy:'ITIC Academy, Bloque 25 «Cloud Computing», actualización 2026, apartado PaaS, modelos de servicio y perfiles consumidores. https://drive.google.com/file/d/16Er3cneQ-Vik3zSjYq6zQUOfSKK4vxVu/view?usp=drivesdk'}
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
console.log('Clasificación A1/A2 y cotejo de Academy validados para lote 525.');
