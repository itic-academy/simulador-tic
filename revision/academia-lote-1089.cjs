const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1089.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const urls={agile:'https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view?usp=drivesdk',ai:'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk',investment:'https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view?usp=drivesdk',risp:'https://drive.google.com/file/d/1IWbbWLAMbUPNy8PPecKUIWLpvUtawNQs/view?usp=drivesdk',web:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk'};
const map={
 5766:{a1:[37,88],a2:['III-2'],urls:[urls.agile],desc:'ITIC Academy, bloque 15, temas 37/88, metodologías ágiles y Scrum: cobertura del marco de trabajo. Se revisó además el pliego de IGAE publicado en la Plataforma de Contratación del Sector Público, que menciona SOROLLA2 y desarrollo ágil basado en Scrum; no se localizó en el bloque formativo un desarrollo específico del caso SOROLLA2.'},
 5767:{a1:[70],a2:['III-5'],urls:[urls.ai],desc:'ITIC Academy, bloque 32 de inteligencia artificial y ciencia de datos: fundamentos de IA. La explicación concreta de generador/discriminador se coteja con el artículo original de GAN de Goodfellow et al. (NeurIPS 2014).'},
 5768:{a1:[42],a2:['II-15'],urls:[urls.investment],desc:'ITIC Academy, bloque 17 «Adquisición de Sistemas y Rentabilidad»: viabilidad, valoración de alternativas y rentabilidad de inversiones. La clasificación del índice de rentabilidad como criterio dinámico se verifica con material universitario de valoración de inversiones y OpenStax.'},
 5769:{a1:[25,31],a2:['I-9'],urls:[urls.risp],desc:'ITIC Academy, bloque/tema 31 «RISP, Datos Abiertos y Transparencia»: Directiva 2019/1024, reutilización y acuerdos exclusivos, incluido el régimen de digitalización de recursos culturales. La redacción vigente se coteja con el artículo 12.3 de la Directiva.'},
 5770:{a1:[65],a2:['III-12'],urls:[urls.web],desc:'ITIC Academy, bloque 30 de tecnologías/sistemas web, tema 65 y desarrollo front-end: frameworks y herramientas JavaScript. Unit.js se distingue de frameworks de aplicación mediante la documentación oficial del proyecto.'},
};
const marker='Cotejo curricular ITIC Academy:';
const trimPrior=v=>{const i=(v||'').indexOf(marker);return i<0?(v||'').trim():v.slice(0,i).trim();};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q&&m,`Falta pregunta o mapeo ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');q.clasificacion.bloque_academia=m.desc;
 const note=`${marker} ${m.desc} Temas oficiales asociados: ${tags}. La academia orienta la cobertura; las fuentes primarias/académicas citadas validan las afirmaciones concretas.`;
 q.clasificacion.nota=`${trimPrior(q.clasificacion.nota)} ${note}`.trim();q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 const related=new Set(Object.values(urls));q.revision.fuentes=q.revision.fuentes.filter(f=>!related.has(f.url));
 for(const url of m.urls)q.revision.fuentes.push({url,referencia:`ITIC Academy: ${m.desc}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular y clasificación A1/A2 actualizado para IDs 5766–5770.');
