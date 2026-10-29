const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-563.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const topics=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const academy={
3131:{A1:['A1-24'],A2:['A2-I-8'],note:'ITIC Academy Bloque 03, Actuación Administrativa, versión 2026.2, incluye TREBEP y empleo público; el Bloque 07 Dirección Pública y Empleo (2026.1) coteja situaciones y rehabilitación. La regla vinculante se confirma en el art. 68.2 del TREBEP.'},
3132:{A1:['A1-30'],A2:['A2-I-9'],note:'ITIC Academy Bloque 10, Gobernanza TIC y Administración Digital, versión 2026.4 (01/10/2026), §1 Gobierno frente a gestión y modelos de gobernanza. A2-I-9 se registra como contexto de instrumentos de administración digital, no como tema A2 de gobernanza TIC propiamente dicho.'},
3133:{A1:['A1-31'],A2:['A2-I-9'],note:'ITIC Academy Bloque 10, versión 2026.4, §9 Datos abiertos y reutilización: cotejo curricular de portales y políticas de datos. El documento no identifica CKAN como producto; la naturaleza y nombre de la plataforma se contrastan en la documentación oficial de CKAN.'},
3134:{A1:['A1-28'],A2:['A2-II-4'],note:'ITIC Academy Bloque 12, Directivo TIC y Planificación Estratégica, versión 2026.2, secciones de inteligencia de negocio y clasificación TPS/MIS/DSS/EIS; A2-II-4 recoge expresamente sistemas de información ejecutiva y DSS.'},
3135:{A1:['A1-33'],A2:['A2-II-4'],note:'ITIC Academy Bloque 12, versión 2026.2, §3.1 Balanced Scorecard/CMI, identifica las cuatro perspectivas de Kaplan y Norton; A1-33 cubre herramientas de control de gestión/cuadro de mando y A2-II-4 el CMI.'}
};
const links={
3131:['https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk','https://drive.google.com/file/d/1TCiFKKRdum7eVCEog-AOw6KgwzGp1ZP4/view?usp=drivesdk'],
3132:['https://drive.google.com/file/d/1alTzv7f2Katg4EdxJ72SYkLm6UScCCho/view?usp=drivesdk'],
3133:['https://drive.google.com/file/d/1alTzv7f2Katg4EdxJ72SYkLm6UScCCho/view?usp=drivesdk'],
3134:['https://drive.google.com/file/d/1fti1UIhEIqK3pY8GBENi-4rTKwoEG8tF/view?usp=drivesdk'],
3135:['https://drive.google.com/file/d/1fti1UIhEIqK3pY8GBENi-4rTKwoEG8tF/view?usp=drivesdk']
};
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=academy[c.id];assert.ok(q&&q.revision&&m,'Falta pregunta o clasificación '+c.id);for(const t of [...m.A1,...m.A2])assert.ok(topics.has(t),'Tema oficial inexistente '+t);const note=m.note+' '+links[c.id].join(' ')+' Correspondencias contrastadas con revision/temario-oficial.json y los anexos I y IX de las convocatorias oficiales A1 y A2 GSI de 2025 (BOE-A-2025-25938 y BOE-A-2025-26262). ITIC Academy se usa como cotejo curricular, no como fuente normativa.';q.revision.observaciones+=' Cotejo curricular: '+note;q.clasificacion={A1:m.A1,A2:m.A2,bloque_academia:note,estado:'revisada',nota:q.revision.estado+'. '+note};q.comentarios=q.revision.observaciones;c.actualizada=structuredClone(q)}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Clasificación A1/A2 y cotejo Academy añadidos a lote 563.');
