const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-560.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const topics=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const academy={
3116:{A1:['A1-108','A1-110'],A2:['A2-IV-7'],note:'ITIC Academy, Bloque 42 Redes, edición 2026.1: infraestructuras de acceso, medios guiados/no guiados, xDSL, HFC y fibra; el material incluye estos medios y tecnologías. El acceso fijo radio AFR y el estado del apagado del cobre se cotejan con el informe CNMC, no se atribuyen a la academia como fuente normativa.'},
3117:{A1:['A1-128'],A2:['A2-IV-6'],note:'ITIC Academy, Bloque 48 Seguridad, versión 2026.1, §10.4 Continuidad de negocio y recuperación ante desastres, incluye ISO 22301:2019, BCP/DRP y pruebas; Bloque 26 CPD/recuperación, versión 2026.1. La exigencia concreta de 8.4.4.3 se comprueba en la norma ISO.'},
3118:{A1:['A1-1'],A2:['A2-I-2'],note:'ITIC Academy, Bloque 01 Constitución, Organización del Estado y AGE, versión 2026.2, §7.1 Tribunal de Cuentas: función de fiscalización externa y dependencia de las Cortes. El programa A1-1 menciona expresamente el TCU; A2-I-2 se asigna solo como relación temática con las atribuciones de Cortes, pues el programa A2 no recoge un epígrafe propio del Tribunal de Cuentas.'},
3119:{A1:['A1-1'],A2:['A2-I-1'],note:'ITIC Academy, Bloque 01, versión 2026.2, §3.6 Suspensión de derechos (art. 55), con cuadro de derechos suspendibles en excepción y sitio. A1-1 y A2-I-1 incluyen garantías/suspensión de derechos fundamentales.'},
3120:{A1:['A1-3'],A2:[],note:'ITIC Academy, Bloque 01, versión 2026.2: organización territorial y administrativa, conforme al alcance de A1-3. El programa oficial A2 vigente no tiene materia directa sobre límites provinciales o Estatutos autonómicos; por eso no se fuerza una asignación A2.'}
};
const links={
3116:['https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk'],
3117:['https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk','https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk'],
3118:['https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk'],
3119:['https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk'],
3120:['https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk']
};
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=academy[c.id];assert.ok(q&&q.revision&&m,'Falta pregunta o clasificación '+c.id);
 for(const t of [...m.A1,...m.A2])assert.ok(topics.has(t),'Tema oficial inexistente '+t);
 const note=m.note+' '+links[c.id].join(' ')+' Correspondencias contrastadas con revision/temario-oficial.json y los anexos I y IX de las convocatorias oficiales A1 y A2 GSI de 2025 (BOE-A-2025-25938 y BOE-A-2025-26262). ITIC Academy se usa como cotejo curricular, no como fuente normativa.';
 q.revision.observaciones+=' Cotejo curricular: '+note;
 q.clasificacion={A1:m.A1,A2:m.A2,bloque_academia:note,estado:'revisada',nota:q.revision.estado+'. '+note};
 q.comentarios=q.revision.observaciones;c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Clasificación A1/A2 y cotejo Academy añadidos a lote 560.');
