const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bankPath=path.join(__dirname,'..','preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-416.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const doc={url:'https://drive.google.com/file/d/1uS8S8axBSb22s9Dbv2mTsFaHUUVlowiM/view?usp=drivesdk',label:'ITIC Academy, bloque 08 «Protección de datos», versión 2026.3 (01/10/2026): marco RGPD/LOPDGDD, derechos de las personas y autoridades de protección de datos.'};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const mapping={
 2391:{topics:['A1-27','A2-I-7'],detail:'LOPDGDD, catálogo de derechos y garantía de los derechos digitales.'},
 2392:{topics:['A1-27','A2-I-7'],detail:'Procedimientos ante autoridades de protección de datos y admisibilidad de reclamaciones.'},
 2393:{topics:['A1-27','A2-I-7'],detail:'Marco jurídico de protección de datos: relación entre RGPD y LOPDGDD.'},
 2394:{topics:['A1-27','A2-I-7'],detail:'Autoridades de protección de datos y estructura de la AEPD.'},
 2395:{topics:['A1-27','A2-I-7'],detail:'Derechos de rectificación y supresión, garantías comunes y gratuidad conforme al RGPD.'}
};
const calls=['https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938','https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262'];
assert.deepEqual(log.cambios.map(c=>c.id),[2391,2392,2393,2394,2395]);
for(const change of log.cambios){
 const q=bank.preguntas.find(x=>x.id===change.id),m=mapping[change.id];assert.ok(q?.revision&&m,`Falta pregunta/cotejo ${change.id}`);assert.ok(m.topics.every(x=>official.has(x)),`Tema oficial inexistente ${change.id}`);
 q.clasificacion.A1=m.topics.filter(x=>x.startsWith('A1-'));q.clasificacion.A2=m.topics.filter(x=>x.startsWith('A2-'));
 const note=`Cotejo curricular: ${doc.label} ${m.detail} Material de Drive: ${doc.url}. Correspondencia comprobada en revision/temario-oficial.json y anexos de las convocatorias A1/A2 GSI BOE-A-2025-25938 y BOE-A-2025-26262 (${calls.join('; ')}). El temario académico orienta el estudio; la conclusión legal se contrasta con el BOE y el RGPD.`;
 q.clasificacion.bloque_academia=doc.url;q.clasificacion.nota=note;q.revision.observaciones+=` ${note}`;q.comentarios=q.revision.observaciones;change.actualizada=structuredClone(q);
}
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');console.log('Cotejo curricular del lote 416 completado.');
