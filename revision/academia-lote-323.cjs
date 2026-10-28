const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-323.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 analysis:{url:'https://docs.google.com/document/d/1za_7e_LlvUEpja7VJyYElIgRIPu_AbE3/edit?usp=drivesdk&ouid=107088454749630873035&rtpof=true&sd=true',label:'ITIC Academy, Bloque 38 Análisis, Diseño y Construcción de SI, versión 2026.1'},
 metric:{url:'https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view?usp=drivesdk',label:'ITIC Academy, Bloque 17 Adquisición de Sistemas y Rentabilidad de Inversiones, versión 2026.2'},
 methods:{url:'https://docs.google.com/document/d/1G11WsRpkh7MPpvxiCEVQmbLc8JzuWvJN/edit?usp=drivesdk&ouid=107088454749630873035&rtpof=true&sd=true',label:'ITIC Academy, Tema 37, 86 y 88 Metodologías Ágiles y Ciclo de Vida, versión 2026.1'}
};
const mapping={
 1931:{doc:['analysis','methods'],detail:'el bloque 38 cubre expresamente elaboración de prototipos (A1-94), y el tema 37/86/88 cubre metodologías y modelos de ciclo de vida; el equilibrio entre iteración, documentación y pruebas se verifica con Pressman y literatura técnica.',topics:['A1-94','A2-III-1'],note:'Cotejo académico con prototipado y modelos del ciclo de vida. Se conserva la distinción entre el material preparatorio y la fuente técnica que matiza las afirmaciones absolutas.'},
 1932:{doc:['metric','analysis'],detail:'los materiales académicos consultados incluyen MÉTRICA v3 dentro de estudio de viabilidad/proceso de desarrollo y el bloque de análisis/diseño; las interfaces concretas se verifican con las guías oficiales del Ministerio.',topics:['A1-95','A2-III-2'],note:'Cotejo temático con MÉTRICA y metodologías de desarrollo; las cuatro interfaces se enumeran a partir de documentos oficiales de MÉTRICA v3.'},
 1933:{doc:['metric','methods'],detail:'el bloque 17 identifica expresamente MÉTRICA v3 y el tema 37/86/88 trata metodologías y ciclo de vida; la cobertura de PSI, desarrollo y MSI se comprueba en documentos oficiales del MAP.',topics:['A1-95','A2-III-2'],note:'Cotejo con MÉTRICA v3 y metodología de desarrollo. No se acepta que la asociación histórica con la AGE implique uso exclusivo.'},
 1934:{doc:['metric','analysis'],detail:'el material sobre MÉTRICA/proceso de sistemas ofrece el encaje curricular; la finalidad precisa de la desnormalización se confirma en DSI 6.3 del documento oficial del Ministerio.',topics:['A1-95','A2-III-2'],note:'Cotejo curricular con MÉTRICA v3. El motivo técnico concreto se acredita con la guía ministerial de Diseño del Sistema de Información.'},
 1935:{doc:['analysis','metric'],detail:'el bloque 38 de análisis incluye modelado de procesos y análisis estructurado/DFD bajo una etiqueta académica D8; esa etiqueta se señala como mapa formativo y no como identificador oficial vigente. La definición de flujo de diálogo se coteja con Técnicas y Prácticas de MÉTRICA v3.',topics:['A1-90','A1-95','A2-III-2'],note:'Cotejo con diagramas de flujo de datos y MÉTRICA v3. La correspondencia temática se expresa con los epígrafes oficiales vigentes; etiquetas internas o heredadas de la academia no se hacen pasar por códigos del temario.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),r=mapping[c.id];assert.ok(q?.revision&&r,`Falta cotejo ${c.id}`);
 for(const id of [...q.clasificacion.A1,...q.clasificacion.A2,...r.topics])assert.ok(official.has(id),id);
 const selections=r.doc.map(k=>docs[k]);assert.ok(selections.every(Boolean));
 q.clasificacion.bloque_academia=`${selections.map(d=>d.label).join('; ')}; ${r.detail}`;
 q.clasificacion.nota=`${r.note} Correspondencia contrastada con revision/temario-oficial.json y convocatorias BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2); el cotejo temático no sustituye la fuente primaria.`;
 q.revision.observaciones+=` ${q.clasificacion.nota}`;q.comentarios=q.revision.observaciones;
 for(const d of selections)q.revision.fuentes.push({url:d.url,referencia:`${d.label}; cotejo de contenido y alcance.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo de academia, temario oficial y convocatorias actualizado para IDs 1931–1935.');
