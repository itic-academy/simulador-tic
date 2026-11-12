const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1092.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={design:'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk',os:'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk',systems:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',wireless:'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk'};
const map={
 5781:{a1:[93],a2:['III-9'],urls:[docs.design],desc:'ITIC Academy, bloque 38 «Análisis, diseño y construcción de sistemas de información»: técnicas de diseño, diseño por capas y principios de modularización/encapsulamiento. Se coteja la cobertura general, no se atribuye al material una definición literal de esta pregunta.'},
 5782:{a1:[62],a2:['II-2'],urls:[docs.os],desc:'ITIC Academy, bloque 27, epígrafe A1-62: sistemas operativos de escritorio y panorama de OS X; encaje curricular histórico. La denominación Aqua se comprueba en comunicados y documentación archivada de Apple.'},
 5783:{a1:[88,96],a2:['III-2','III-7'],urls:[docs.design],desc:'ITIC Academy, bloque 38: metodologías de desarrollo y calidad/pruebas de software como contexto. No se localizó una explicación específica de Cleanroom; la relación con métodos formales y su proceso se valida con el artículo original IEEE y el SEI/CMU.'},
 5784:{a1:[108,123],a2:['IV-11','IV-15'],urls:[docs.wireless],desc:'ITIC Academy, bloque de redes inalámbricas y comunicaciones móviles, §10.3 Radio profesional (PMR): cobertura de TETRA y trunking. La función normalizadora de ETSI se verifica en la descripción del comité TCCE de ETSI.'},
 5785:{a1:[67,119],a2:['III-10'],urls:[docs.systems],desc:'ITIC Academy, bloque 30 «Tecnologías de sistemas de información»: contenidos de Java/Jakarta EE, módulos web y servidores de aplicaciones. El orden concreto del class loader se verifica contra documentación IBM WebSphere, no se atribuye como definición propia del temario.'}
};
const marker='Cotejo curricular ITIC Academy:';
const trimPrior=v=>{const i=(v||'').indexOf(marker);return i<0?(v||'').trim():v.slice(0,i).trim();};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q&&m,`Falta pregunta o mapeo ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');q.clasificacion.bloque_academia=m.desc;
 const note=`${marker} ${m.desc} Temas oficiales asociados: ${tags}. La academia orienta la cobertura; las fuentes técnicas citadas fundamentan los datos específicos.`;
 q.clasificacion.nota=`${trimPrior(q.clasificacion.nota)} ${note}`.trim();q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 const related=new Set(Object.values(docs));q.revision.fuentes=q.revision.fuentes.filter(f=>!related.has(f.url));for(const url of m.urls)q.revision.fuentes.push({url,referencia:`ITIC Academy: ${m.desc}`});c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular y clasificación A1/A2 actualizado para IDs 5781–5785.');
