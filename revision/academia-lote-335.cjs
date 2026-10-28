const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-335.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 constitucion:{url:'https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk',label:'ITIC Academy, Bloque 01 Constitución, Organización del Estado y AGE, actualización 2026'},
 contratacion:{url:'https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk',label:'ITIC Academy, Bloque 05 Contratación, Presupuestos y Compra TIC, versión 2026.2 (01-10-2026)'},
 administracion:{url:'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk',label:'ITIC Academy, Bloque 03 Actuación Administrativa y Administración Digital, versión 2026.2 (01-10-2026)'},
 normalizacion:{url:'https://docs.google.com/document/d/1wH5ntUcBo_Ct70FpDf2vVo26oQZpMf4y/edit',label:'ITIC Academy, Bloque 24 Normalización, A1-50/A2-C8/C11, edición 2026'}
};
const mapping={
 1991:{doc:'constitucion',topics:['A1-1','A2-I-1'],detail:'trata los derechos fundamentales y su garantía en la Constitución.'},
 1992:{doc:'contratacion',topics:['A1-11'],detail:'cubre la LCSP, acuerdos marco y adjudicación de contratos basados; se coteja la respuesta con el texto consolidado del art. 221.'},
 1993:{doc:'constitucion',topics:['A1-4'],detail:'incluye la organización de la Administración General del Estado y sus órganos centrales.'},
 1994:{doc:'administracion',topics:['A1-8','A2-I-8'],detail:'cubre el régimen jurídico y el ámbito de aplicación de las Leyes 39/2015 y 40/2015.'},
 1995:{doc:'normalizacion',topics:['A1-50'],detail:'el programa A1-50 cubre organizaciones internacionales y nacionales de normalización; el bloque actualizado distingue ANSI, UNE y AENOR.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),r=mapping[c.id];assert.ok(q?.revision&&r,`Falta cotejo ${c.id}`);
 assert.deepEqual(q.clasificacion.A1,r.topics.filter(t=>t.startsWith('A1-')));assert.deepEqual(q.clasificacion.A2,r.topics.filter(t=>t.startsWith('A2-')));assert.ok(r.topics.every(t=>official.has(t)));
 const d=docs[r.doc];assert.ok(d);
 q.clasificacion.bloque_academia=`${d.label}; ${r.detail}`;
 q.clasificacion.nota=`Correspondencia contrastada con revision/temario-oficial.json y las convocatorias vigentes: A1 BOE-A-2025-25938 y A2 BOE-A-2025-26262. El material académico acredita cobertura temática, no sustituye las fuentes primarias. ${c.actualizada.revision.observaciones}`;
 q.revision.observaciones=q.clasificacion.nota;q.comentarios=q.clasificacion.nota;
 q.revision.fuentes.push({url:d.url,referencia:`${d.label}; cotejo específico del contenido y cobertura curricular.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo académico, temario oficial y convocatorias actualizado para IDs 1991–1995.');
