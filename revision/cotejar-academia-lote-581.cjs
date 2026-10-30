const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-581.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const privacy={url:'https://drive.google.com/file/d/1uS8S8axBSb22s9Dbv2mTsFaHUUVlowiM/view?usp=drivesdk',label:'ITIC Academy, bloque 08 Protección de Datos, actualización 2026'};
const organization={url:'https://drive.google.com/file/d/1-xmHgvxArWY8GroFD1eSdyPrAQjkBpzo/view?usp=drivesdk',label:'ITIC Academy, bloque 09 Organización y Gestión de los Sistemas de Información, versión 2026.3 (01/10/2026)'};
const interoperability={url:'https://drive.google.com/file/d/1zdx_PRBfKM9tRy61Boz_yPekU-D-b_6S/view?usp=drivesdk',label:'ITIC Academy, bloque 20 Interoperabilidad de Sistemas, versión 2026.2 (14/08/2026)'};
const ux={url:'https://drive.google.com/file/d/10jhzJC3svXY3hhwSulHADXLHzhYGOn-R/view?usp=drivesdk',label:'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información, versión 2026.1 (31/08/2026)'};
const mappings={
 3221:{A1:['A1-27'],A2:['A2-I-7'],docs:[privacy],detail:'el bloque desarrolla el derecho de acceso de la LOPDGDD y señala expresamente el acceso remoto y la reiteración en seis meses; los apartados se verifican en el art. 13.2–3 consolidado.'},
 3222:{A1:['A1-34'],A2:[],docs:[organization],detail:'el bloque 09 cubre la organización del centro de sistemas de información y el modelo vigente de gobernanza TIC de la AGE conforme al RD 1125/2024; la composición del CDTIC se comprueba en su art. 6, y el RD 806/2014 derogado se conserva solo como antecedente.'},
 3223:{A1:['A1-34'],A2:['A2-III-2'],docs:[organization],detail:'el bloque 09 describe la estructura funcional como agrupación de especialistas por área técnica, eficiente para compartir capacidades escasas; el contraste con estructura de proyectos/matriz se apoya además en PMI.'},
 3224:{A1:['A1-44'],A2:['A2-III-14'],docs:[ux],detail:'el bloque 30 incluye UX, usabilidad e interacción en tecnologías de sistemas; la correspondencia con A1-44 y A2-III-14 se coteja con el programa oficial. Nielsen Norman Group y W3C, no el material de academia, son las fuentes para distinguir la heurística y los criterios WCAG.'},
 3225:{A1:['A1-45'],A2:['A2-I-9'],docs:[interoperability],detail:'el bloque 20 cubre los temas oficiales A1-45/46 y desarrolla el ENI, incluida la hora oficial y sincronización; el organismo y la obligación concreta se comprueban en el art. 15 del RD 4/2010.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=mappings[c.id];assert.ok(q?.revision&&m,`Falta cotejo ${c.id}`);
 for(const id of [...m.A1,...m.A2])assert.ok(official.has(id),`Tema no oficial ${id}`);
 const academy=`${m.docs.map(d=>d.label).join('; ')}; ${m.detail}`;
 const callout='Correspondencia cotejada con revision/temario-oficial.json y anexos I/IX de las convocatorias GSI A1/A2 de 2025 (BOE-A-2025-25938 y BOE-A-2025-26262). Academy orienta el encaje curricular; la respuesta se verifica con las fuentes primarias anotadas en el registro.';
 q.clasificacion={A1:m.A1,A2:m.A2,bloque_academia:`${academy} ${m.docs.map(d=>d.url).join(' ')}`,estado:'revisada',nota:`${q.revision.estado}. ${callout}`};
 q.revision.observaciones+=` Cotejo académico y oficial: ${academy} ${callout}`;
 for(const d of m.docs)q.revision.fuentes.push({url:d.url,referencia:`${d.label}; apartado y encaje curricular indicados en bloque_academia.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo de Drive, convocatorias y temario oficial añadido al lote 581.');
