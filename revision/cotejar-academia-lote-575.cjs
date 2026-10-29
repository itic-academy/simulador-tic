const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-575.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const analysis={url:'https://docs.google.com/document/d/1za_7e_LlvUEpja7VJyYElIgRIPu_AbE3/edit?usp=drivesdk&ouid=107088454749630873035&rtpof=true&sd=true',label:'ITIC Academy, bloque 38 Análisis, diseño y construcción de sistemas, versión 2026.1'};
const database={url:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',label:'ITIC Academy, bloque 29 Bases de datos, SQL y modelado de datos, versión 2026.1'};
const mapping={
 3191:{A1:['A1-90'],A2:['A2-II-16'],docs:[analysis],detail:'el bloque 38 cubre modelado de procesos y workflow; A2-II-16 menciona expresamente sistemas de gestión de flujos de trabajo. La terminología exacta y la responsabilidad de ejecución se validan en el modelo primario WfMC.'},
 3192:{A1:['A1-90','A1-95'],A2:['A2-III-2'],docs:[analysis],detail:'el §5.1 presenta los DFD como modelo de procesos en análisis estructurado; el encaje se coteja con A1-90/A1-95 y A2-III-2. El material académico conserva la etiqueta heredada A2 D8, que no se confunde con un código oficial vigente.'},
 3193:{A1:['A1-63','A1-64'],A2:['A2-II-5','A2-III-4'],docs:[database],detail:'el bloque 29, §7.1, trata las cuatro propiedades ACID en el tema de transacciones y concurrencia; su expansión se comprueba además en el glosario oficial de PostgreSQL.'},
 3194:{A1:['A1-90','A1-95'],A2:['A2-III-2'],docs:[analysis],detail:'el §5.1 describe elementos y uso de DFD en análisis estructurado y el encaje con MÉTRICA v3; se cruza con A1-90/A1-95 y A2-III-2. El PDF ministerial de ASI confirma que la técnica se emplea en análisis, no en DSI.'},
 3195:{A1:['A1-93'],A2:['A2-III-2'],docs:[analysis],detail:'el bloque 38 aborda análisis y diseño estructurado, que proporciona contexto para los métodos de diseño de software. El acrónimo y su expansión se verifican con material docente de Hassan Gomaa y el SEI; no se afirma que el bloque académico cite DARTS de forma literal.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),r=mapping[c.id];assert.ok(q?.revision&&r,`Falta cotejo ${c.id}`);
 for(const id of [...r.A1,...r.A2])assert.ok(official.has(id),`Tema no oficial ${id}`);
 const curriculum=`${r.docs.map(d=>d.label).join('; ')}; ${r.detail}`;
 const callout='Correspondencia contrastada con revision/temario-oficial.json y anexos I/IX de las convocatorias GSI A1/A2 de 2025 (BOE-A-2025-25938 y BOE-A-2025-26262). El material de ITIC Academy orienta el cotejo curricular y no sustituye las fuentes técnicas primarias.';
 q.clasificacion={A1:r.A1,A2:r.A2,bloque_academia:`${curriculum} ${r.docs.map(d=>d.url).join(' ')}`,estado:'revisada',nota:`${q.revision.estado}. ${callout}`};
 q.revision.observaciones+=` Cotejo académico y oficial: ${curriculum} ${callout}`;
 for(const d of r.docs)q.revision.fuentes.push({url:d.url,referencia:`${d.label}; apartados y alcance indicados en bloque_academia.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular Drive y temas oficiales guardados para IDs 3191–3195.');
