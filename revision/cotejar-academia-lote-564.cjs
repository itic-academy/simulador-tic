const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-564.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const topics=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const academy={
3136:{A1:['A1-30'],A2:[],note:'ITIC Academy Bloque 10, Gobernanza TIC y Administración Digital, versión 2026.4 (01/10/2026), §§1–5, está alineado explícitamente con A1-30 y desarrolla gobernanza, estrategia TIC, RD 1125/2024 y transformación digital. Su explicación curricular del modelo de gobernanza sirve de cotejo; la definición APO02 se confirma en ISACA. No hay epígrafe A2 específico equivalente.'},
3137:{A1:['A1-35'],A2:['A2-III-2'],note:'ITIC Academy Bloque 12, Directivo TIC y Planificación Estratégica, versión 2026.2 (02/10/2026), §2.3 cubre herramientas de planificación de proyectos y distingue Gantt/PERT; encaje con A1-35 y A2-III-2. PMI es la fuente para el nombre y secuencia del modelo de grupos.'},
3138:{A1:['A1-36'],A2:['A2-III-2'],note:'ITIC Academy Bloque 12, versión 2026.2, §2.3 y banco test, cubre PERT, holguras y camino crítico; encaje directo con A1-36 y A2-III-2. La distinción precisa free float/total float se comprueba con las guías de FTA.'},
3139:{A1:['A1-42'],A2:['A2-II-15'],note:'ITIC Academy Bloque 12, versión 2026.2, §2.4 «Evaluación económica de alternativas» trata ROI, VAN y pay-back; corresponde a rentabilidad de inversiones TIC (A1-42) y a evaluación de alternativas, viabilidad y costes (A2-II-15). El programa A2 oficial enumera expresamente estas técnicas.'},
3140:{A1:['A1-106'],A2:[],note:'El material Academy consultado para este lote fue Bloque 10 (2026.4) y Bloque 12 (2026.2); sus índices y contenido temático no presentan ISO/IEC 19770/ITAM como apartado específico, por lo que se deja constancia de que no se encontró cobertura directa en esos materiales y no se les atribuye la respuesta. A1-106 es una correspondencia amplia con gestión de servicios e infraestructuras TIC; no se fuerza tema A2.'}
};
const links={
3136:['https://drive.google.com/file/d/1alTzv7f2Katg4EdxJ72SYkLm6UScCCho/view?usp=drivesdk'],
3137:['https://drive.google.com/file/d/1fti1UIhEIqK3pY8GBENi-4rTKwoEG8tF/view?usp=drivesdk'],
3138:['https://drive.google.com/file/d/1fti1UIhEIqK3pY8GBENi-4rTKwoEG8tF/view?usp=drivesdk'],
3139:['https://drive.google.com/file/d/1fti1UIhEIqK3pY8GBENi-4rTKwoEG8tF/view?usp=drivesdk'],
3140:['https://drive.google.com/file/d/1alTzv7f2Katg4EdxJ72SYkLm6UScCCho/view?usp=drivesdk','https://drive.google.com/file/d/1fti1UIhEIqK3pY8GBENi-4rTKwoEG8tF/view?usp=drivesdk']
};
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=academy[c.id];assert.ok(q&&q.revision&&m,'Falta pregunta o clasificación '+c.id);for(const t of [...m.A1,...m.A2])assert.ok(topics.has(t),'Tema oficial inexistente '+t);const note=m.note+' '+links[c.id].join(' ')+' Correspondencias cotejadas con revision/temario-oficial.json y con los anexos I/IX de las convocatorias oficiales GSI 2025 (BOE-A-2025-25938 y BOE-A-2025-26262). La academia se usa como referencia curricular, nunca como autoridad normativa.';q.revision.observaciones+=' Cotejo curricular: '+note;q.clasificacion={A1:m.A1,A2:m.A2,bloque_academia:note,estado:'revisada',nota:q.revision.estado+'. '+note};q.comentarios=q.revision.observaciones;c.actualizada=structuredClone(q)}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Clasificación A1/A2 y cotejo Academy añadidos a lote 564.');
