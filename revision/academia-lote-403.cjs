const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bankPath=path.join(__dirname,'..','preguntas_preparatic.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-403.json');
const log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 planning:{url:'https://drive.google.com/file/d/1fti1UIhEIqK3pY8GBENi-4rTKwoEG8tF/view?usp=drivesdk',label:'ITIC Academy, bloque 12 «Estrategias y herramientas del directivo público TIC. Planificación estratégica», versión 2026.2 (02-10-2026), apartados 2.2–2.3: DAFO, cuadro de mando integral, Gantt y PERT.'},
 agile:{url:'https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view?usp=drivesdk',label:'ITIC Academy, bloque 15 «Metodologías ágiles y modelos de ciclo de vida», versión 2026.1 (26-08-2026), análisis funcional, gestión de requisitos e historias de usuario; Scrum, Kanban y MÉTRICA v3.'},
 dotnet:{url:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',label:'ITIC Academy, bloque 30 «Tecnologías de sistemas de información», versión 2026.1 (31-08-2026), §7.5 ADO.NET: DataSet/DataTable en memoria y trabajo desconectado.'},
 itil:{url:'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk',label:'ITIC Academy, bloque 41 «ITIL y COBIT», versión 2026.1 (29-09-2026), principio rector ITIL 4 «Optimizar y automatizar»; relaciona la optimización previa con automatización y mejora de servicios.'}
};
const mapping={
 2331:{topics:['A1-33','A1-35','A1-36','A2-III-2'],docs:['planning'],detail:'A1-33 cubre cuadros de mando y herramientas de control; A1-35/36 cubren gestión de proyectos y Gantt/PERT; A2-III-2 incluye prácticas de planificación de proyectos.'},
 2332:{topics:['A1-37','A1-88','A2-III-2'],docs:['agile'],detail:'A1-37/88 incluyen metodologías ágiles, análisis funcional e historias de usuario; A2-III-2 comprende metodologías y planificación del desarrollo.'},
 2333:{topics:['A1-66','A2-III-11'],docs:['dotnet'],detail:'A1-66 y A2-III-11 tratan la plataforma .NET; el bloque 30 incluye ADO.NET, DataSet/DataTable y acceso desconectado.'},
 2334:{topics:['A1-106','A2-IV-4'],docs:['itil'],detail:'A1-106 incluye fundamentos de ITIL y gestión del valor de los servicios TIC; A2-IV-4 contempla operación automática y gestión del rendimiento de sistemas y servicios.'},
 2335:{topics:['A1-95','A2-III-2'],docs:['agile'],detail:'A1-95 comprende la metodología MÉTRICA; A2-III-2 incluye metodologías de desarrollo. El bloque 15 incluye MÉTRICA v3 y sus procesos/participantes.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const calls=['https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938','https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262'];
assert.equal(log.cambios.length,5);assert.deepEqual(log.cambios.map(c=>c.id),[2331,2332,2333,2334,2335]);
for(const change of log.cambios){
 const q=bank.preguntas.find(item=>item.id===change.id),map=mapping[change.id];assert.ok(q?.revision&&map,`Falta cotejo ${change.id}`);assert.ok(map.topics.every(t=>official.has(t)),`Tema oficial inexistente ${change.id}`);
 q.clasificacion.A1=map.topics.filter(t=>t.startsWith('A1-'));q.clasificacion.A2=map.topics.filter(t=>t.startsWith('A2-'));
 const curriculum=`${map.docs.map(key=>docs[key].label).join('; ')}. ${map.detail}`;
 const note=`Cotejo curricular: ${curriculum} Correspondencia oficial contrastada con revision/temario-oficial.json, el anexo I de la convocatoria A1 y el anexo IX de la convocatoria A2 GSI 2025 (${calls.join('; ')}). Academy se usa para el encuadre curricular; las claves se basan en las fuentes primarias citadas en la revisión.`;
 q.clasificacion.bloque_academia=curriculum;q.clasificacion.nota=note;q.revision.observaciones+=` ${note}`;q.comentarios=q.revision.observaciones;change.actualizada=structuredClone(q);
}
fs.writeFileSync(logPath,`${JSON.stringify(log,null,2)}\n`);fs.writeFileSync(bankPath,`${JSON.stringify(bank,null,2)}\n`);console.log('Cotejo Academy y de temarios oficiales del lote 403 completado.');
