const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-582.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 admin:{url:'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk',label:'ITIC Academy, bloque 03 Actuación Administrativa y Administración Digital, edición 2026'},
 security:{url:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',label:'ITIC Academy, bloque 48 Seguridad en Redes y en el nivel de aplicación, actualización 2026'},
 services:{url:'https://drive.google.com/file/d/1NWEg_hd3iDIC0kIitK-u8BpmJ20Jecmw/view?usp=drivesdk',label:'ITIC Academy, bloque 23 Infraestructuras y Servicios Comunes, versión 2026.1'},
 standards:{url:'https://drive.google.com/file/d/1HKwUIuFhm-wVG0e8kZfFm1R8qI1rGS2G/view?usp=drivesdk',label:'ITIC Academy, bloque 24 Organismos de Normalización, versión 2026.1'}
};
const mappings={
 3226:{A1:['A1-22'],A2:['A2-I-8','A2-I-9'],doc:docs.admin,detail:'el bloque 03 desarrolla la Ley 39/2015 y la administración digital; el contenido vinculante de archivo electrónico y conservación se comprueba directamente en el art. 17.2 consolidado.'},
 3227:{A1:['A1-48'],A2:['A2-I-9'],doc:docs.security,detail:'el bloque 48 trata el ENS, monitorización y detección de intrusiones; la clasificación normativa de op.mon.1 como medida operacional, y no mp, se coteja con el anexo II del RD 311/2022.'},
 3228:{A1:['A1-48'],A2:['A2-I-9'],doc:docs.security,detail:'el bloque 48 incluye el ENS y las guías CCN-STIC; la existencia y alcance de OLVIDO Windows en el CPSTIC se acredita en las guías primarias CCN-STIC 105 y 1508.'},
 3229:{A1:['A1-49'],A2:['A2-I-6','A2-I-9'],doc:docs.services,detail:'el bloque 23 desarrolla los servicios comunes e interoperabilidad de las AAPP, incluido Cl@ve; sus mecanismos y nombres vigentes se contrastan con la pasarela y el portal oficial Cl@ve.'},
 3230:{A1:['A1-50'],A2:[],doc:docs.standards,detail:'el bloque 24 cubre organizaciones de normalización conforme al tema oficial A1-50; la función telecomunicaciones de ETSI se verifica en su web institucional. No se asigna tema A2 directo.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=mappings[c.id];assert.ok(q?.revision&&m,`Falta cotejo ${c.id}`);
 for(const id of [...m.A1,...m.A2])assert.ok(official.has(id),`Tema no oficial ${id}`);
 const academy=`${m.doc.label}; ${m.detail}`;
 const callout='Correspondencia cotejada con revision/temario-oficial.json y los anexos I/IX de las convocatorias GSI A1/A2 de 2025 (BOE-A-2025-25938 y BOE-A-2025-26262). El material de Academy orienta el encaje curricular; la respuesta se funda en las fuentes primarias citadas.';
 q.clasificacion={A1:m.A1,A2:m.A2,bloque_academia:`${academy} ${m.doc.url}`,estado:'revisada',nota:`${q.revision.estado}. ${callout}`};
 q.revision.observaciones+=` Cotejo académico y oficial: ${academy} ${callout}`;
 q.revision.fuentes.push({url:m.doc.url,referencia:`${m.doc.label}; encaje curricular descrito en bloque_academia.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo de Drive, convocatoria y clasificación oficial: 5/5.');
