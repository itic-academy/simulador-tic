const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1102.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={law:'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk',digital:'https://drive.google.com/file/d/1alTzv7f2Katg4EdxJ72SYkLm6UScCCho/view?usp=drivesdk'};
const map={
 5831:{a1:[8],a2:['I-8'],urls:[docs.law],desc:'ITIC Academy, bloque 03 «Actuación administrativa y administración digital», edición 2026.2: ámbito subjetivo y organización del sector público bajo la Ley 40/2015. Correspondencia oficial A1-8/A2-I.8.'},
 5832:{a1:[22],a2:['I-9'],urls:[docs.law,docs.digital],desc:'ITIC Academy, bloque 03, edición 2026.2, sobre expediente/procedimiento y bloque 10, edición 2026.4, sobre administración digital: encaje curricular de archivo electrónico, acceso y conservación. Correspondencia temática A1-22/A2-I.9; la regla exacta procede del art. 46 de la Ley 40/2015.'},
 5833:{a1:[22],a2:['I-9'],urls:[docs.law,docs.digital],desc:'ITIC Academy, bloque 03, edición 2026.2, sobre derechos y procedimientos y bloque 10, edición 2026.4, sobre acceso electrónico, canales y Punto de Acceso General. Correspondencia oficial temática A1-22/A2-I.9.'},
 5834:{a1:[8],a2:['I-8'],urls:[docs.law],desc:'ITIC Academy, bloque 03 «Actuación administrativa y administración digital», edición 2026.2: fases y trámites de procedimiento administrativo. Correspondencia oficial A1-8/A2-I.8.'},
 5835:{a1:[8],a2:['I-8'],urls:[docs.law],desc:'ITIC Academy, bloque 03 «Actuación administrativa y administración digital», edición 2026.2: principios, facultades y límites del régimen jurídico administrativo. Correspondencia oficial A1-8/A2-I.8.'}
};
const marker='Cotejo curricular ITIC Academy:';
const trimPrior=v=>{const raw=(v||'').trim(),i=raw.indexOf(marker),base=(i<0?raw:raw.slice(0,i)).trim();return base.replace(/^Bloque de academia pendiente de cotejo\. Una lista vacía no implica exclusión del programa\.?\s*/,'').trim();};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q&&m,`Falta pregunta o mapeo ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');q.clasificacion.bloque_academia=m.desc;
 const note=`Cotejo curricular ITIC Academy: ${m.desc} Temas oficiales asociados: ${tags}. La academia orienta la cobertura; las conclusiones jurídicas se sustentan en las normas primarias citadas.`;
 q.clasificacion.nota=`${trimPrior(q.clasificacion.nota)} ${note}`.trim();q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 const related=new Set(Object.values(docs));q.revision.fuentes=q.revision.fuentes.filter(f=>!related.has(f.url));for(const url of m.urls)q.revision.fuentes.push({url,referencia:`ITIC Academy: ${m.desc}`});c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo curricular y clasificación A1/A2 actualizado para IDs 5831–5835.');
