const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1071.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const actuacion='https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk';
const constitucion='https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk';
const mapa={
 5676:{a1:[8],a2:['I-8'],urls:[actuacion],desc:'ITIC Academy, bloque 03 Actuación Administrativa y Administración Digital 2026.2, § 3.10, procedimiento sancionador; el curso mapea este bloque a A1-8 y A2 O8 (A2-I-8 oficial). El resumen no sustituye el art. 64.1, que establece la condición para comunicar la incoación al denunciante.'},
 5677:{a1:[4,8],a2:['I-8'],urls:[constitucion,actuacion],desc:'ITIC Academy, bloque 01 Constitución/AGE cubre órganos centrales de la AGE (A1-4); bloque 03, §§ 2.1 y 2.7, cubre la organización AGE y la Ley 40/2015 y se corresponde con A2 O8 (A2-I-8 oficial). La atribución concreta al Secretario General Técnico se contrasta con el art. 65.1 BOE.'},
 5678:{a1:[8],a2:['I-8'],urls:[actuacion],desc:'ITIC Academy, bloque 03, § 2.3, trata órganos administrativos y colegiados, dentro de la Ley 40/2015; mapeo A1-8 y A2 O8 (A2-I-8 oficial). El quórum exacto y sus excepciones proceden del art. 17 de la ley, no de la síntesis didáctica.'},
 5679:{a1:[8],a2:['I-8'],urls:[actuacion],desc:'ITIC Academy, bloque 03, § 3.7, notificación y publicación en el procedimiento administrativo; cobertura A1-8/A2 O8 (A2-I-8 oficial). La cifra y el momento inicial se confirman en el art. 40.2 BOE y el cómputo se completa con el art. 30 LPAC.'},
 5680:{a1:[8],a2:['I-8'],urls:[actuacion],desc:'ITIC Academy, bloque 03, § 2.6, responsabilidad patrimonial de las Administraciones públicas, dentro de A1-8 y A2 O8 (A2-I-8 oficial). El material apoya la cobertura curricular; el contenido y las excepciones se verifican en el art. 32 de la Ley 40/2015.'}
};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=mapa[c.id];assert.ok(q&&m,`Falta pregunta o mapeo ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/'),marker='Cotejo curricular ITIC Academy:';
 const trimPrior=v=>{const i=(v||'').indexOf(marker);return i<0?(v||'').trim():v.slice(0,i).trim();};
 q.clasificacion.bloque_academia=m.desc;
 const note=`${marker} ${m.desc}${tags?` Temas oficiales asociados: ${tags}.`:''} El material docente acredita cobertura; las condiciones jurídicas se apoyan en el texto BOE citado en la revisión individual.`;
 q.clasificacion.nota=`${trimPrior(q.clasificacion.nota)} ${note}`.trim();q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 const urls=new Set([constitucion,actuacion]);q.revision.fuentes=q.revision.fuentes.filter(f=>!urls.has(f.url));
 for(const url of m.urls)q.revision.fuentes.push({url,referencia:`ITIC Academy: ${m.desc}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular A1/A2 actualizado para IDs 5676–5680.');
