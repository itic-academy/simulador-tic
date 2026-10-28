const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bankPath=path.join(__dirname,'..','preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-417.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const docs={
 dss:{url:'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk',label:'ITIC Academy, bloque 34 Business Intelligence y Big Data, versión 2026.1 (16/09/2026), sección 1.2: diferencia MIS, DSS y EIS/ESS; DSS combina datos y modelos para decisiones semiestructuradas y permite análisis ad hoc y escenarios.'},
 admin:{url:'https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk',label:'ITIC Academy, bloque 01 Constitución, organización del Estado y AGE, actualización 2026; y bloque 03 Actuación administrativa, versión 2026.2, para órganos centrales ministeriales.'},
 integration:{url:'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk',label:'ITIC Academy, bloque 38 Análisis, diseño y construcción de sistemas de información, versión 2026: incluye construcción, despliegue e integración continua (A2 D6), como encuadre curricular relacionado.'},
 director:{url:'https://drive.google.com/file/d/1fti1UIhEIqK3pY8GBENi-4rTKwoEG8tF/view?usp=drivesdk',label:'ITIC Academy, bloque 12 Directivo TIC y planificación estratégica, actualización octubre de 2026; incluye estrategia, funciones, planificación, control de gestión y análisis de inversiones TIC.'},
 audit:{url:'https://drive.google.com/file/d/1D93MNUzOWGwD6IyuWdxIMnHaL7aXvYhp/view?usp=drivesdk',label:'ITIC Academy, bloque 16 Auditoría informática, versión 2026.2 (19/08/2026), A1 tema 38 y A2 tema II-11: planificación, alcance, objetivos, riesgos, pruebas y evidencia.'}
};
const mapping={
 2396:{doc:'dss',topics:['A2-II-4'],detail:'DSS frente a MIS/EIS; análisis con datos y modelos para decisiones semiestructuradas (A2-II-4).'},
 2397:{doc:'admin',topics:['A1-4','A2-I-8'],detail:'AGE, órganos ministeriales y jerarquía administrativa (A1-4/A2-I-8).'},
 2398:{doc:'integration',topics:['A1-86','A2-III-6'],detail:'Ciclo de vida y construcción/despliegue/integración de sistemas (A1-86/A2-III-6).'},
 2399:{doc:'director',topics:['A1-32','A1-33'],detail:'Funciones, planificación estratégica y control de gestión del directivo TIC (A1-32/33).'},
 2400:{doc:'audit',topics:['A1-38','A2-II-11'],detail:'Auditoría informática: objetivos, alcance, metodología y planificación inicial (A1-38/A2-II-11).'}
};
const calls=['https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938','https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262'];
assert.deepEqual(log.cambios.map(c=>c.id),[2396,2397,2398,2399,2400]);
for(const change of log.cambios){
 const q=bank.preguntas.find(x=>x.id===change.id),m=mapping[change.id],d=docs[m?.doc];
 assert.ok(q?.revision&&m&&d,`Falta pregunta/cotejo ${change.id}`);assert.ok(m.topics.every(x=>official.has(x)),`Tema oficial inexistente ${change.id}`);
 q.clasificacion=q.clasificacion||{};q.clasificacion.A1=m.topics.filter(x=>x.startsWith('A1-'));q.clasificacion.A2=m.topics.filter(x=>x.startsWith('A2-'));
 const note=`Cotejo curricular: ${d.label} ${m.detail} Material de Drive: ${d.url}. Correspondencia verificada con revision/temario-oficial.json y los anexos de las convocatorias A1/A2 GSI BOE-A-2025-25938 y BOE-A-2025-26262 (${calls.join('; ')}). La academia aporta encuadre curricular; los hechos jurídicos se contrastan con BOE y los criterios técnicos con INCOSE, NASA, FHWA e ISACA, según proceda.`;
 q.clasificacion.bloque_academia=d.url;q.clasificacion.nota=note;q.revision.observaciones+=` ${note}`;q.comentarios=q.revision.observaciones;change.actualizada=structuredClone(q);
}
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');console.log('Cotejo curricular del lote 417 completado.');
