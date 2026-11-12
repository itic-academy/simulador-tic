const fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1058.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const tech='https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk';
const acquisition='https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view?usp=drivesdk';
const map={
 5611:{url:tech,a1:[66],a2:['III-11'],desc:'ITIC Academy Tecnologías de Sistemas de Información 2026: apartado de .NET y lenguajes; alineación con A1 66 y A2 III.11. La expansión y el comportamiento de LINQ se contrastan con Microsoft Learn.'},
 5612:{url:tech,a1:[67],a2:['III-10','III-12'],desc:'ITIC Academy Tecnologías de Sistemas de Información 2026: apartados de Java/Jakarta EE, tecnologías web y JSP; correspondencia A1 67/A2 III.10 y III.12. El procesamiento en servidor se comprueba con la especificación/guía Jakarta Pages.'},
 5613:{url:tech,a1:[67],a2:['II-3','III-10'],desc:'ITIC Academy Tecnologías de Sistemas de Información 2026: distinción entre Java, lenguajes de script y plataforma Jakarta EE; clasificación A1 67/A2 II.3 y III.10. La relación normativa JavaScript–ECMAScript se verifica con ECMA-262.'},
 5614:{url:tech,a1:[67],a2:['II-3'],desc:'ITIC Academy Tecnologías de Sistemas de Información 2026: bloque de lenguajes y paradigmas de programación, incluido Java; cobertura oficial A2 II.3 y comparación curricular con A1 67. Las capacidades concretas de C y Ada se apoyan en sus referencias de lenguaje.'},
 5615:{url:acquisition,a1:[69],a2:['II-14'],desc:'ITIC Academy Adquisición de Sistemas y Rentabilidad 2026, § 5.2–5.3: software libre, adquisición y modelos de licencia; la relación de distribuciones educativas se coteja con los portales autonómicos e INTEF. Alineación oficial A1 69/A2 II.14.'}
};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];if(!q||!m)throw Error(`Falta pregunta/mapeo: ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');
 const note=`Cotejo curricular de ITIC Academy: ${m.desc} Temas oficiales asociados: ${tags}. La academia orienta cobertura y clasificación; la verificación se fundamenta en las fuentes técnicas citadas.`;
 const marker='Cotejo curricular de ITIC Academy:';
 const trimPrior=value=>{const i=(value||'').indexOf(marker);return i<0?(value||'').trim():value.slice(0,i).trim();};
 q.clasificacion.bloque_academia=m.desc;q.clasificacion.nota=note;
 q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();
 q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 q.revision.fuentes=q.revision.fuentes.filter(f=>f.url!==m.url);
 q.revision.fuentes.push({url:m.url,referencia:`ITIC Academy: ${m.desc}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(root+'/preguntas_preparatic.json',JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular de Tecnologías SI y adquisición/licencias ITIC Academy 2026 añadido a las cinco preguntas del lote 1058.');
