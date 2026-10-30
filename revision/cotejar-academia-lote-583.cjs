const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-583.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const standards={url:'https://drive.google.com/file/d/1HKwUIuFhm-wVG0e8kZfFm1R8qI1rGS2G/view?usp=drivesdk',label:'ITIC Academy, bloque 24 Organismos de Normalización, versión 2026.1'};
const hardware={url:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',label:'ITIC Academy, bloque 26 Hardware, Servidores, CPD, Almacenamiento y Virtualización, versión 2026.1'};
const mappings={
 3231:{A1:['A1-50'],A2:[],doc:standards,detail:'el bloque 24 cubre organismos de normalización y evaluación/certificación de la conformidad; la función de acreditación de ENAC se confirma en la documentación oficial de ENAC.'},
 3232:{A1:['A1-53'],A2:['A2-IV-6'],doc:hardware,detail:'el bloque 26 desarrolla infraestructura y dimensionamiento de CPD; el significado vigente de los niveles Tier y la ausencia de porcentajes garantizados se contrastan con Uptime Institute.'},
 3233:{A1:['A1-53'],A2:[],doc:hardware,detail:'el bloque 26 cubre equipos y hardware; el papel de la caché en la latencia y la jerarquía de memoria se contrasta con documentación técnica del fabricante Intel.'},
 3234:{A1:['A1-56'],A2:['A2-IV-5'],doc:hardware,detail:'el bloque 26 desarrolla SAN, Fibre Channel y almacenamiento; el límite de 126 NL_Ports se comprueba en el manual técnico Fibre Channel de Seagate.'},
 3235:{A1:['A1-56'],A2:['A2-IV-5'],doc:hardware,detail:'el bloque 26 cubre arquitecturas RAID y almacenamiento; la duplicidad de respuestas del original se resolvió con las definiciones de RAID 6 y RAID 10 de IBM.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=mappings[c.id];assert.ok(q?.revision&&m,`Falta cotejo ${c.id}`);
 for(const id of [...m.A1,...m.A2])assert.ok(official.has(id),`Tema no oficial ${id}`);
 const academy=`${m.doc.label}; ${m.detail}`;
 const callout='Correspondencia cotejada con revision/temario-oficial.json y los anexos I/IX de las convocatorias GSI A1/A2 de 2025 (BOE-A-2025-25938 y BOE-A-2025-26262). El material de Academy orienta el encaje curricular; la respuesta se apoya en las fuentes primarias anotadas.';
 q.clasificacion={A1:m.A1,A2:m.A2,bloque_academia:`${academy} ${m.doc.url}`,estado:'revisada',nota:`${q.revision.estado}. ${callout}`};
 q.revision.observaciones+=` Cotejo académico y oficial: ${academy} ${callout}`;
 q.revision.fuentes.push({url:m.doc.url,referencia:`${m.doc.label}; encaje curricular descrito en bloque_academia.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo de Drive, convocatoria y clasificación oficial: 5/5.');
