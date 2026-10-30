const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bp=path.join(__dirname,'..','preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bp,'utf8'));
const lp=path.join(__dirname,'cambios-lote-595.json'),log=JSON.parse(fs.readFileSync(lp,'utf8'));
const docs={planning:{url:'https://drive.google.com/file/d/1DMz3yKo5YBTwNecdydOqWB9CxkyrQZ10/view?usp=drivesdk',label:'ITIC Academy, bloque de temas 36, 94 y 98 «Gantt, PERT y estimación», actualizado 2026'},systems:{url:'https://drive.google.com/file/d/1FtCZjU2f2gjogjh9AMnKCRE8xRZToxSk/view?usp=drivesdk',label:'ITIC Academy, temas 28, 29 y 34 «Organización y gestión de sistemas de información», versión 2026'},audit:{url:'https://drive.google.com/file/d/1ZhZq0-ZuXcGkrz_YGxr8RTYvjeU4V2o_/view?usp=drivesdk',label:'ITIC Academy, tema 38 «Auditoría», versión 2025.2'},management:{url:'https://drive.google.com/file/d/1fti1UIhEIqK3pY8GBENi-4rTKwoEG8tF/view?usp=drivesdk',label:'ITIC Academy, bloque 12 «Directivo TIC y planificación estratégica», versión 2026.2, 02-10-2026'}};
const rows={
3291:{A1:['A1-36'],A2:['A2-III-2'],doc:docs.planning,detail:'el bloque incluye explícitamente el tema 36 (Gantt y PERT) y el A2-III-2 sobre técnicas de gestión y planificación de proyectos.'},
3292:{A1:['A1-28'],A2:[],doc:docs.systems,detail:'el bloque sitúa la cuestión en el tema 28 sobre definición y estructura de los sistemas de información; la distinción terminológica entre efectividad y eficiencia se apoya en ISO 9000.'},
3293:{A1:['A1-38'],A2:['A2-II-11'],doc:docs.audit,detail:'el bloque desarrolla auditoría informática, objetivos y pruebas/evidencias; la definición operacional de prueba sustantiva se coteja con GAO FAM, fuente técnica primaria citada.'},
3294:{A1:['A1-38'],A2:['A2-II-11'],doc:docs.audit,detail:'el bloque cubre organización y prácticas de auditoría informática; el enunciado actualizado limita la respuesta a independencia de la función de auditoría interna según IIA.'},
3295:{A1:['A1-35','A1-99'],A2:['A2-II-15'],doc:docs.management,detail:'el bloque cubre planificación/gestión y evaluación de proyectos TIC; el tema A2-II-15 comprende análisis de viabilidad, presupuestación y control de costes. ROI y gastos de ciclo de vida se comprueban en PMI y Green Book.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const calls='Clasificación contrastada con revision/temario-oficial.json y los programas GSI publicados en BOE: A1 BOE-A-2025-25938 (anexo I) y A2 BOE-A-2025-26262 (anexo IX).';
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),r=rows[c.id];assert.ok(q&&r);for(const t of [...r.A1,...r.A2])assert.ok(official.has(t),`Tema no oficial ${t}`);
 q.clasificacion={A1:r.A1,A2:r.A2,bloque_academia:`${r.doc.label}; ${r.detail} ${r.doc.url}`,estado:'revisada',nota:`${q.revision.estado}. ${calls}`};
 q.revision.observaciones+=` Cotejo ITIC Academy en Drive: ${r.doc.label}; ${r.detail} ${r.doc.url} ${calls}`;
 q.revision.fuentes.push({url:r.doc.url,referencia:`${r.doc.label}; cotejo curricular: ${r.detail} Academy orienta el encaje curricular, no sustituye las fuentes técnicas primarias citadas para la respuesta.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bp,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(lp,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo Academy, clasificación BOE y trazabilidad del lote 595 completados.');
