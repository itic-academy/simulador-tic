const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-565.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const topics=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const academy={
3141:{A1:['A1-44','A1-124'],A2:['A2-III-14'],note:'ITIC Academy Bloque 47 Aplicaciones Móviles, versión 2026.1 (30/09/2026), §7.3 desarrolla accesibilidad de aplicaciones móviles y el RD 1112/2018; recoge ámbito web/app y las exclusiones de medios en directo y archivos. Cotejo directo para A1-44, A1-124 y A2-III-14.'},
3142:{A1:['A1-46','A1-49'],A2:['A2-I-9','A2-I-10'],note:'ITIC Academy Bloque 10 Gobernanza TIC y Administración Digital, versión 2026.4 (01/10/2026), §§10–12.2 explica SIR como intercambio de asientos y SICRES como norma de interoperabilidad para las oficinas registrales; el epígrafe oficial A1-46 cubre NTI y A2-I-9/I-10 cubre NTI e interconexión. El material consultado se contrasta con la NTI BOE vigente, que ya aprueba SICRES 4.0.'},
3143:{A1:['A1-48'],A2:['A2-I-9','A2-II-11'],note:'ITIC Academy Bloque 10, versión 2026.4, incluye el ENS en el temario de administración digital; la clasificación por categoría y procedimientos de auditoría se contrasta con RD 311/2022 y las instrucciones CCN/BOE. A2-II-11 es correspondencia directa por auditoría del ENS.'},
3144:{A1:['A1-48'],A2:['A2-I-9','A2-II-11'],note:'ITIC Academy Bloque 10, versión 2026.4, cubre ENS y administración digital; la diferencia entre declaración mediante autoevaluación en BÁSICA y certificación auditada en MEDIA/ALTA se valida en el art. 38 del RD 311/2022. A2-II-11 contempla auditoría ENS.'},
3145:{A1:['A1-49'],A2:['A2-I-9'],note:'ITIC Academy Bloque 10, versión 2026.4, §8.2 cubre Cl@ve y §12 los servicios comunes; el programa A1-49 menciona Cl@ve y A2-I-9 identificación y autenticación. El protocolo se verifica en la especificación técnica oficial del PAe, no en el material de academia.'}
};
const links={
3141:['https://drive.google.com/file/d/1nXa2jkiUqpu31smkt5D8WswcTgEN7XlB/view?usp=drivesdk'],
3142:['https://drive.google.com/file/d/1alTzv7f2Katg4EdxJ72SYkLm6UScCCho/view?usp=drivesdk'],
3143:['https://drive.google.com/file/d/1alTzv7f2Katg4EdxJ72SYkLm6UScCCho/view?usp=drivesdk'],
3144:['https://drive.google.com/file/d/1alTzv7f2Katg4EdxJ72SYkLm6UScCCho/view?usp=drivesdk'],
3145:['https://drive.google.com/file/d/1alTzv7f2Katg4EdxJ72SYkLm6UScCCho/view?usp=drivesdk']
};
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=academy[c.id];assert.ok(q&&q.revision&&m,'Falta pregunta o clasificación '+c.id);for(const t of [...m.A1,...m.A2])assert.ok(topics.has(t),'Tema oficial inexistente '+t);const note=m.note+' '+links[c.id].join(' ')+' Correspondencias contrastadas con revision/temario-oficial.json y anexos I/IX de las convocatorias oficiales GSI A1/A2 2025 (BOE-A-2025-25938 y BOE-A-2025-26262). ITIC Academy sirve como cotejo curricular, no como fuente normativa.';q.revision.observaciones+=' Cotejo curricular: '+note;q.clasificacion={A1:m.A1,A2:m.A2,bloque_academia:note,estado:'revisada',nota:q.revision.estado+'. '+note};q.comentarios=q.revision.observaciones;c.actualizada=structuredClone(q)}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Clasificación A1/A2 y cotejo Academy añadidos a lote 565.');
