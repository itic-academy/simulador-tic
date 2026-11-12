const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1097.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={rd:'https://drive.google.com/file/d/11QuUqAYlruKySMYUekcJmSOjuIr4fQhv/view?usp=drivesdk',law:'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk'};
const map={
 5806:{a1:[8,22],a2:['I-9'],urls:[docs.rd],desc:'ITIC Academy, bloque 03 y material específico «RD 203 2021_aspectos TIC»: cubre sede electrónica y el contenido mínimo del artículo 11.1. Correspondencia con A1-8/A1-22 y A2-I.9.'},
 5807:{a1:[8],a2:['I-8'],urls:[docs.law],desc:'ITIC Academy, bloque 03 «Actuación administrativa y administración digital» 2026.2: Ley 39/2015 y procedimiento administrativo común; corresponde a A1-8/A2-I.8.'},
 5808:{a1:[8],a2:['I-8'],urls:[docs.law],desc:'ITIC Academy, bloque 03 «Actuación administrativa y administración digital» 2026.2: disposición transitoria de la Ley 39/2015. Se etiqueta histórica porque la fecha de 2-4-2021 ya pasó; corresponde a A1-8/A2-I.8.'},
 5809:{a1:[8],a2:['I-8'],urls:[docs.law],desc:'ITIC Academy, bloque 03 «Actuación administrativa y administración digital» 2026.2: organización y régimen jurídico de organismos públicos según Ley 40/2015; corresponde a A1-8/A2-I.8.'},
 5810:{a1:[8],a2:['I-8'],urls:[docs.law],desc:'ITIC Academy, bloque 03 «Actuación administrativa y administración digital» 2026.2: órganos administrativos y Ley 40/2015; corresponde a A1-8/A2-I.8.'}
};
const marker='Cotejo curricular ITIC Academy:';
const trimPrior=v=>{const raw=(v||'').trim(),i=raw.indexOf(marker),base=(i<0?raw:raw.slice(0,i)).trim();return base.replace(/^Bloque de academia pendiente de cotejo\. Una lista vacía no implica exclusión del programa\.?\s*/,'').trim();};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q&&m,`Falta pregunta o mapeo ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');q.clasificacion.bloque_academia=m.desc;
 const note=`${marker} ${m.desc} Temas oficiales asociados: ${tags}. La academia orienta la cobertura; las fuentes jurídicas primarias citadas fundamentan la respuesta.`;
 q.clasificacion.nota=`${trimPrior(q.clasificacion.nota)} ${note}`.trim();q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 const related=new Set(Object.values(docs));q.revision.fuentes=q.revision.fuentes.filter(f=>!related.has(f.url));for(const url of m.urls)q.revision.fuentes.push({url,referencia:`ITIC Academy: ${m.desc}`});c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo curricular y clasificación A1/A2 actualizado para IDs 5806–5810.');
