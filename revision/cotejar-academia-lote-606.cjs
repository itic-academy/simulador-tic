const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bankPath=path.join(__dirname,'..','preguntas_preparatic.json');
const logPath=path.join(__dirname,'cambios-lote-606.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 age:{url:'https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk',title:'ITIC Academy, bloque 01 «Constitución, organización del Estado y AGE», versión 2026.2'},
 admin:{url:'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk',title:'ITIC Academy, bloque 03 «Actuación Administrativa», versión 2026'},
 adminA2:{url:'https://drive.google.com/file/d/1dW2ffNhCduFHJ1hI2nT6fqs_G8DeNpo3/view?usp=drivesdk',title:'ITIC Academy, temas A2 O7, O8 y O22 «Actuación Administrativa», versión 2026'},
 contract:{url:'https://drive.google.com/file/d/14iahY0cgkiV8RESN81b8pHdD4K3UbSOj/view?usp=drivesdk',title:'ITIC Academy, bloque 05 «Contratación, Presupuestos y Compra TIC», versión 2026.2'}
};
const details={
 3346:{doc:docs.age,detail:'el bloque dedica el epígrafe 14 a la organización territorial de la AGE, Delegados y Subdelegados, y reproduce el programa A1 tema 6; el encaje A2-I-8 deriva de la Ley 40/2015 incluida expresamente en ese programa.'},
 3347:{doc:docs.admin,detail:'el bloque trata la administración electrónica, la identificación y firma administrativa y el CSV en los documentos/sistemas administrativos; se contrastó la afirmación concreta con el anexo y el artículo 21 del RD 203/2021. El Tema 49 de servicios comunes se reserva para plataformas/interoperabilidad y no se usa como etiqueta para afirmar que el CSV sea un servicio compartido.'},
 3348:{doc:docs.admin,detail:'el bloque desarrolla la representación administrativa y el registro de apoderamientos, y señala la duración máxima prevista en el artículo 6 de la Ley 39/2015.'},
 3349:{doc:docs.contract,detail:'el bloque 5 explica el expediente y los PCAP e incluye en ellos los criterios de adjudicación; el encaje corresponde al A1 tema 11. El propio temario identifica los temas de contratación pública como sin equivalencia en A2.'},
 3350:{doc:docs.contract,detail:'el bloque 5 explica los sistemas dinámicos de adquisición de los artículos 223–226: proceso electrónico abierto durante su vigencia, duración fijada en pliegos y participación gratuita. El temario no ofrece equivalencia A2 para contratación pública.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const calls='Temas cotejados con los programas oficiales publicados en BOE: A1 BOE-A-2025-25938 (anexo I) y A2 BOE-A-2025-26262 (anexo IX), registrados en revision/temario-oficial.json.';
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),r=details[c.id];assert.ok(q&&r);assert.ok(q.revision&&q.revision.estado==='vigente');
 const A1=c.actualizada.clasificacion.A1,A2=c.actualizada.clasificacion.A2;
 for(const id of [...A1,...A2])assert.ok(official.has(id),`Tema oficial no vigente: ${id}`);
 const academic=`${r.doc.title}; ${r.detail} ${r.doc.url}`;
 q.clasificacion={...q.clasificacion,A1,A2,bloque_academia:academic,estado:'revisada',nota:`${q.revision.estado}. ${A2.length?'El encaje A2 se limita a los epígrafes expresamente relacionados del programa oficial.':'El temario oficial A2 no tiene un epígrafe de contratación pública; no se fuerza equivalencia.'} ${calls}`};
 q.revision.observaciones+=` Cotejo ITIC Academy: ${r.doc.title}; ${r.detail} ${r.doc.url} ${calls}`;
 q.revision.fuentes.push({url:r.doc.url,referencia:`${r.doc.title}; cotejo curricular: ${r.detail} Material académico auxiliar; la respuesta normativa se verifica en el BOE citado.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejados con documentos ITIC Academy 2026 y convocatorias BOE los cinco ítems del lote 606.');
