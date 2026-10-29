const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-576.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const systems={url:'https://docs.google.com/document/d/1za_7e_LlvUEpja7VJyYElIgRIPu_AbE3/edit',label:'ITIC Academy, bloque 38 Análisis, diseño y construcción de sistemas, versión 2026.1'};
const administration={url:'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk',label:'ITIC Academy, bloque 03 Actuación administrativa y Administración digital, versión 2026.2 (01/10/2026)'};
const mappings={
 3196:{A1:['A1-90'],A2:['A2-III-2'],docs:[systems],detail:'el §7.2 expone los elementos de proceso, colaboración, datos, sequence flow y message flow; §7.5 distingue la notación de modelado de su ejecución.'},
 3197:{A1:['A1-90'],A2:['A2-III-2'],docs:[systems],detail:'el §7.2 trata BPMN 2.0.2 y el encaje de BPMN en análisis y desarrollo; los cuatro nombres formales de conformidad se confirman en §2.1 de la especificación OMG.'},
 3198:{A1:['A1-90'],A2:['A2-III-9'],docs:[systems],detail:'el §6.5 describe máquina de estados, estados y transiciones activadas por eventos; la cardinalidad UML de source y target se toma de UML 2.5.1, no se atribuye literalmente a Academy.'},
 3199:{A1:['A1-90','A1-95'],A2:['A2-III-2'],docs:[systems],detail:'el §5.1 cubre elementos DFD y procesos; la regla de consistencia de entradas/salidas se verifica en la técnica DFD de MÉTRICA v3.'},
 3200:{A1:['A1-4'],A2:['A2-I-3','A2-I-8'],docs:[administration],detail:'la figura 13, Organización central de la AGE (arts. 55–67 de Ley 40/2015), identifica a Ministros y Secretarios de Estado como órganos superiores y diferencia sus nombramientos; los apartados 2.3–2.4 tratan órganos administrativos.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=mappings[c.id];assert.ok(q?.revision&&m,`Falta cotejo ${c.id}`);
 for(const id of [...m.A1,...m.A2])assert.ok(official.has(id),`Tema no oficial ${id}`);
 const academy=`${m.docs.map(d=>d.label).join('; ')}; ${m.detail}`;
 const callout='Correspondencia contrastada con revision/temario-oficial.json y anexos I/IX de las convocatorias GSI A1/A2 de 2025 (BOE-A-2025-25938 y BOE-A-2025-26262). El material de ITIC Academy orienta el cotejo curricular y no sustituye las fuentes técnicas primarias.';
 q.clasificacion={A1:m.A1,A2:m.A2,bloque_academia:`${academy} ${m.docs.map(d=>d.url).join(' ')}`,estado:'revisada',nota:`${q.revision.estado}. ${callout}`};
 q.revision.observaciones+=` Cotejo académico y oficial: ${academy} ${callout}`;
 for(const d of m.docs)q.revision.fuentes.push({url:d.url,referencia:`${d.label}; apartados y alcance indicados en bloque_academia.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo de Drive y temas oficiales guardados para IDs 3196–3200.');
