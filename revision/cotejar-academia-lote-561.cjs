const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-561.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const topics=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const academy={
3121:{A1:['A1-3'],A2:[],note:'ITIC Academy Bloque 01, Constitución, Organización del Estado y AGE, versión 2026.2: organización territorial y competencias de las comunidades autónomas; el programa oficial A1-3 es el encaje directo. El programa A2 no contiene tema autónomico específico.'},
3122:{A1:['A1-3'],A2:[],note:'ITIC Academy Bloque 01, versión 2026.2: organización territorial del Estado y competencias autonómicas. El programa oficial A1-3 incluye las comunidades autónomas; A2 GSI no incluye un tema directo sobre el sistema constitucional de distribución de competencias.'},
3123:{A1:['A1-5'],A2:[],note:'ITIC Academy Bloque 02, Unión Europea, versión 2026.2: instituciones y procedimiento legislativo ordinario, con propuesta de la Comisión y colegislación del Parlamento Europeo y del Consejo. El programa oficial A2 GSI no incluye un tema específico de la Unión Europea.'},
3124:{A1:['A1-5'],A2:[],note:'ITIC Academy Bloque 02, Unión Europea, versión 2026.2: actos jurídicos del Derecho de la Unión y distinción entre reglamentos, directivas, decisiones y recomendaciones. La formulación exacta se contrasta con el art. 288 TFUE. A2 GSI no contiene tema específico equivalente.'},
3125:{A1:['A1-1'],A2:['A2-I-3'],note:'ITIC Academy Bloque 01, versión 2026.2: Constitución, Gobierno y fuentes con rango de ley. La denominación y distinción entre Decreto Legislativo y Decreto-ley se verifica en los arts. 82–86 CE; A2-I-3 cubre las funciones del Gobierno como relación temática.'}
};
const links={
3121:['https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk'],
3122:['https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk'],
3123:['https://drive.google.com/file/d/1KTz7CNz88u_4zyVLC2oYQBnmJRHIG7J7/view?usp=drivesdk'],
3124:['https://drive.google.com/file/d/1KTz7CNz88u_4zyVLC2oYQBnmJRHIG7J7/view?usp=drivesdk'],
3125:['https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk']
};
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=academy[c.id];assert.ok(q&&q.revision&&m,'Falta pregunta o clasificación '+c.id);for(const t of [...m.A1,...m.A2])assert.ok(topics.has(t),'Tema oficial inexistente '+t);const note=m.note+' '+links[c.id].join(' ')+' Correspondencias contrastadas con revision/temario-oficial.json y los anexos I y IX de las convocatorias oficiales A1 y A2 GSI de 2025 (BOE-A-2025-25938 y BOE-A-2025-26262). ITIC Academy se usa como cotejo curricular, no como fuente normativa.';q.revision.observaciones+=' Cotejo curricular: '+note;q.clasificacion={A1:m.A1,A2:m.A2,bloque_academia:note,estado:'revisada',nota:q.revision.estado+'. '+note};q.comentarios=q.revision.observaciones;c.actualizada=structuredClone(q)}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Clasificación A1/A2 y cotejo Academy añadidos a lote 561.');
