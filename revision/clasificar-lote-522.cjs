const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-522.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const academy={
 2926:{A1:['A1-24'],A2:['A2-I-8'],academy:'ITIC Academy, Tema 024 «Empleo Público en España. EBEP» (PDF consultado, actualización de temario 2026) y Bloque 07 «Dirección Pública, Empleo, Transparencia y Unidad de Mercado» (revisión 2026): categorías y retribuciones funcionariales. https://drive.google.com/file/d/1cd-5Vzuw0tpQEbMq48sp7uE93cTpGtQz/view?usp=drivesdk'},
 2927:{A1:['A1-25'],A2:['A2-I-4'],academy:'ITIC Academy, Bloque 07 «Dirección Pública, Empleo, Transparencia y Unidad de Mercado», que cubre gobierno abierto, transparencia y el Consejo. La versión consultada antecede a la consolidación del Estatuto publicada el 18-9-2026; para la respuesta vigente prevalece el BOE actualizado. https://drive.google.com/file/d/11xq0o8TLESDT7J2PLC_MVbZHGoqWmGa2/view?usp=drivesdk'},
 2928:{A1:['A1-26'],A2:[],academy:'ITIC Academy, Tema 026 «La dinamización y el apoyo a la actividad económica y al emprendimiento. La garantía de la unidad de mercado» y Bloque 07 de Dirección Pública/Unidad de Mercado, revisión 2026. Sin tema A2 GSI que trate de forma directa estas medidas. https://drive.google.com/file/d/1jzD3kZLtu9ZAL8NPH8lh5o5icScl0cMM/view?usp=drivesdk'},
 2929:{A1:['A1-26'],A2:[],academy:'ITIC Academy, Tema 026 «La dinamización y el apoyo a la actividad económica y al emprendimiento. La garantía de la unidad de mercado» y Bloque 07, revisión 2026. La convocatoria GSI A2 no contiene un epígrafe equivalente específico. https://drive.google.com/file/d/1TCiFKKRdum7eVCEog-AOw6KgwzGp1ZP4/view?usp=drivesdk'},
 2930:{A1:['A1-27'],A2:['A2-I-7'],academy:'ITIC Academy, Bloque 08 «Protección de Datos», versión 2026.3, de 1-10-2026, incluye RGPD/LOPDGDD y delegado de protección de datos. https://drive.google.com/file/d/1uS8S8axBSb22s9Dbv2mTsFaHUUVlowiM/view?usp=drivesdk'}
};
const topics=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=academy[c.id];assert.ok(q&&q.revision&&m);
 for(const t of [...m.A1,...m.A2])assert.ok(topics.has(t),t);
 q.revision.observaciones+=` Cotejo curricular: ${m.academy} Academy orienta la clasificación temática; la respuesta se funda en las fuentes primarias citadas.`;
 q.clasificacion={...q.clasificacion,A1:m.A1,A2:m.A2,bloque_academia:m.academy,estado:'revisada',nota:`${q.revision.estado}. ${m.academy}`};
 q.comentarios=q.revision.observaciones;c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Clasificación por programa oficial y cotejo curricular validados para lote 522.');
