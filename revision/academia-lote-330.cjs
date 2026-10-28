const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-330.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 administracion:{url:'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk',label:'ITIC Academy, Bloque 03 Actuación Administrativa, actualización 2026'},
 hardware:{url:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',label:'ITIC Academy, Bloque 26 Hardware, virtualización y centros de datos, actualización 2026'},
 economia:{url:'https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk',label:'ITIC Academy, Bloque 06 Economía, Sociedad, Empleo y Transformación Digital, actualización 2026'},
 normativa:{url:'https://drive.google.com/file/d/1yNoGRQ6orxdHGYBQ-RW4lFzaexftWnIm/view?usp=drivesdk',label:'ITIC Academy, Bloque 49 Normas Reguladoras de las Telecomunicaciones, versión 2026.1'}
};
const mapping={
 1966:{doc:['administracion'],detail:'el Bloque 03 trata el teletrabajo del personal público (TREBEP art. 47 bis) y menciona la aplicación de la Ley 10/2021 al personal laboral; la obligación formal se verifica en los arts. 5–6 de dicha ley.',topics:['A1-24','A2-I-8'],note:'Cotejo curricular; la exigencia legal concreta se apoya en el BOE, no en el resumen académico.'},
 1967:{doc:['hardware'],detail:'el Bloque 26 incluye contenedores, Kubernetes y comparación contenedor/VM; describe que el contenedor comparte kernel y no incorpora necesariamente un sistema operativo invitado completo, en línea con Docker Docs.',topics:['A1-132','A2-IV-6'],note:'Cotejo temático de contenedores y virtualización; la semántica del empaquetado se contrasta con documentación oficial de Docker.'},
 1968:{doc:['administracion'],detail:'el Bloque 03 incluye el TREBEP y el régimen disciplinario del empleo público; la tabla de prescripción se comprobó directamente en el texto consolidado del art. 97.1.',topics:['A1-24','A2-I-8'],note:'Cotejo temático de EBEP; los plazos exactos se toman de la legislación consolidada.'},
 1969:{doc:['economia'],detail:'el Bloque 06 cubre mercado de trabajo, población ocupada/parada y principales magnitudes; la clasificación estadística exacta se contrasta con la metodología de la EPA del INE.',topics:['A1-17'],note:'Cotejo curricular; la definición operativa de población activa y parada se verifica en INE.'},
 1970:{doc:['administracion'],detail:'el Bloque 03 aborda empleo público y conceptos retributivos generales; en los materiales de academia consultados no se localizó el convenio específico de Castilla y León. Por ello se identifica expresamente el ámbito territorial y se da primacía al convenio oficial BOCYL de 2023.',topics:['A1-24'],note:'Cotejo de encaje general en empleo público. El convenio regional específico no se atribuye a ITIC Academy ni se fuerza equivalencia A2; la respuesta se actualiza desde la fuente oficial autonómica.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),r=mapping[c.id];assert.ok(q?.revision&&r,`Falta cotejo ${c.id}`);
 for(const id of [...q.clasificacion.A1,...q.clasificacion.A2,...r.topics])assert.ok(official.has(id),id);
 const selections=r.doc.map(k=>docs[k]);assert.ok(selections.every(Boolean));
 q.clasificacion.bloque_academia=`${selections.map(d=>d.label).join('; ')}; ${r.detail}`;
 q.clasificacion.nota=`${r.note} Correspondencia contrastada con revision/temario-oficial.json y convocatorias BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2); los documentos académicos orientan, no sustituyen las fuentes primarias.`;
 q.revision.observaciones+=` ${q.clasificacion.nota}`;q.comentarios=q.revision.observaciones;
 for(const d of selections)q.revision.fuentes.push({url:d.url,referencia:`${d.label}; cotejo de cobertura académica y alcance.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo de ITIC Academy, temario oficial A1/A2 y convocatorias actualizado para IDs 1966–1970.');
