const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1098.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={law:'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk',admin:'https://drive.google.com/file/d/1alTzv7f2Katg4EdxJ72SYkLm6UScCCho/view?usp=drivesdk'};
const map={
 5811:{a1:[22],a2:['I-10'],urls:[docs.law,docs.admin],desc:'ITIC Academy, bloque 03 «Actuación administrativa y administración digital» 2026.2 (Leyes 39/40) y bloque 10 «Gobernanza TIC y Administración Digital» 2026.4 (acceso y cooperación): el art. 157 regula compartir/reutilizar aplicaciones entre Administraciones. A2-I.10 se indica como encaje temático de cooperación, no como mención literal del artículo.'},
 5812:{a1:[8],a2:['I-8'],urls:[docs.law],desc:'ITIC Academy, bloque 03 «Actuación administrativa y administración digital» 2026.2: Ley 39/2015, procedimiento y revisión de actos/recursos. Correspondencia A1-8/A2-I.8.'},
 5813:{a1:[22],a2:['I-9'],urls:[docs.law],desc:'ITIC Academy, bloque 03 «Actuación administrativa y administración digital» 2026.2: administración electrónica y Ley 39/2015; A2-I.9 se relaciona expresamente con identificación y autenticación electrónicas.'},
 5814:{a1:[8],a2:['I-8'],urls:[docs.law],desc:'ITIC Academy, bloque 03 «Actuación administrativa y administración digital» 2026.2: procedimiento administrativo común y Ley 39/2015, incluida la regulación de términos y plazos. Correspondencia A1-8/A2-I.8.'},
 5815:{a1:[10],a2:['I-8'],urls:[docs.law],desc:'ITIC Academy, bloque 03 «Actuación administrativa y administración digital» 2026.2: procedimiento administrativo y responsabilidad patrimonial en la Ley 39/2015. A1-10 es correspondencia directa; A2-I.8, marco general de procedimiento, se señala como encaje curricular sin atribuirle mención específica de responsabilidad patrimonial.'}
};
const marker='Cotejo curricular ITIC Academy:';
const trimPrior=v=>{const raw=(v||'').trim(),i=raw.indexOf(marker),base=(i<0?raw:raw.slice(0,i)).trim();return base.replace(/^Bloque de academia pendiente de cotejo\. Una lista vacía no implica exclusión del programa\.?\s*/,'').trim();};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q&&m,`Falta pregunta o mapeo ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');q.clasificacion.bloque_academia=m.desc;
 const note=`${marker} ${m.desc} Temas oficiales asociados: ${tags}. El temario de academia orienta el encaje; la respuesta se fundamenta en el texto legal del BOE.`;
 q.clasificacion.nota=`${trimPrior(q.clasificacion.nota)} ${note}`.trim();q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 const related=new Set(Object.values(docs));q.revision.fuentes=q.revision.fuentes.filter(f=>!related.has(f.url));for(const url of m.urls)q.revision.fuentes.push({url,referencia:`ITIC Academy: ${m.desc}`});c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo curricular y clasificación A1/A2 actualizado para IDs 5811–5815.');
