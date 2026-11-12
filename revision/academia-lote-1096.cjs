const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1096.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={itil:'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk',data:'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk',net:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',law:'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk'};
const map={
 5801:{a1:[106],a2:['IV-4'],urls:[docs.itil],desc:'ITIC Academy, bloque 41 «ITIL y COBIT» 2026.1: vincula los fundamentos ITIL al A1-106 y, para A2, sólo contenidos concretos de gestión de proyectos (D2) y configuración/cambios/rendimiento/capacidad (C2). Se clasifica A2-IV-4 como correspondencia temática parcial; el programa no cita ISO/IEC 20000 ni su relación con ITIL de forma expresa.'},
 5802:{a1:[75],a2:['III-15'],urls:[docs.data],desc:'ITIC Academy, bloque 34 «Business Intelligence y Big Data» 2026.1: Data Mesh figura expresamente en el A1-75. A2-III.15 incluye Big Data, pero no menciona Data Mesh; la relación se etiqueta como temática, no como referencia textual directa.'},
 5803:{a1:[108,111],a2:['II-8'],urls:[docs.net],desc:'ITIC Academy, bloque 42 «Redes» 2026.1: capas TCP/IP y protocolos de transporte, con cobertura A1-108/111 y A2-II.8.'},
 5804:{a1:[108,115],a2:['II-8'],urls:[docs.net],desc:'ITIC Academy, bloque 42 «Redes» 2026.1: protocolos de Internet y redes IP, con cobertura A1-108/115 y A2-II.8.'},
 5805:{a1:[8],a2:['I-8'],urls:[docs.law],desc:'ITIC Academy, bloque 03 «Actuación administrativa y administración digital» 2026.2: desarrolla la Ley 40/2015 y sus principios de actuación, con correspondencia A1-8/A2-I.8.'}
};
const marker='Cotejo curricular ITIC Academy:';
const trimPrior=v=>{const raw=(v||'').trim(),i=raw.indexOf(marker),base=(i<0?raw:raw.slice(0,i)).trim();return base.replace(/^Bloque de academia pendiente de cotejo\. Una lista vacía no implica exclusión del programa\.?\s*/,'').trim();};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q&&m,`Falta pregunta o mapeo ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');q.clasificacion.bloque_academia=m.desc;
 const note=`${marker} ${m.desc} Temas oficiales asociados: ${tags}. La academia orienta la cobertura; las fuentes técnicas y jurídicas citadas fundamentan la respuesta.`;
 q.clasificacion.nota=`${trimPrior(q.clasificacion.nota)} ${note}`.trim();q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 const related=new Set(Object.values(docs));q.revision.fuentes=q.revision.fuentes.filter(f=>!related.has(f.url));for(const url of m.urls)q.revision.fuentes.push({url,referencia:`ITIC Academy: ${m.desc}`});c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo curricular y clasificación A1/A2 actualizado para IDs 5801–5805.');
