const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1111.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={mobile:'https://drive.google.com/file/d/1nXa2jkiUqpu31smkt5D8WswcTgEN7XlB/view?usp=drivesdk',systems:'https://drive.google.com/file/d/1nXa2jkiUqpu31smkt5D8WswcTgEN7XlB/view?usp=drivesdk',development:'https://drive.google.com/file/d/1LuUHoQr8oDmptteHIQ72VdCvJFsnu3LF/view?usp=drivesdk'};
const map={
 5876:{a1:[124],a2:['II-6'],urls:[docs.mobile,docs.development],desc:'ITIC Academy, bloque 47 «Aplicaciones móviles y sistemas operativos», edición 2026.1, para runtimes multiplataforma móviles; y bloque 30 «Tecnologías de sistemas de información», edición 2026, para aplicaciones web/cliente y frameworks. Se coteja cobertura general RIA/móvil, no vigencia autoral de AIR.'},
 5877:{a1:[66],a2:['III-11'],urls:[docs.development],desc:'ITIC Academy, bloque 30 «Tecnologías de sistemas de información», edición 2026: entorno de desarrollo Microsoft .NET, tecnologías de acceso a datos y frameworks.'},
 5878:{a1:[67],a2:['II-3'],urls:[docs.development],desc:'ITIC Academy, bloque 30 «Tecnologías de sistemas de información», edición 2026: entorno Java y lenguajes/paradigmas; el listado literal de keywords se verifica en la Java Language Specification.'},
 5879:{a1:[67],a2:['III-10'],urls:[docs.development],desc:'ITIC Academy, bloque 30 «Tecnologías de sistemas de información», edición 2026: Java y Jakarta EE, herramientas y componentes de la plataforma; la función de jBPM se verifica en la documentación actual de Apache KIE.'},
 5880:{a1:[67],a2:['III-10'],urls:[docs.development],desc:'ITIC Academy, bloque 30 «Tecnologías de sistemas de información», edición 2026: Java/Jakarta EE, arquitectura y componentes de la plataforma; los tipos y la cardinalidad de session beans se contrastan con el tutorial Java EE 7.'}
};
const marker='Cotejo curricular ITIC Academy:';
const trimPrior=v=>{const raw=(v||'').trim(),i=raw.indexOf(marker),base=(i<0?raw:raw.slice(0,i)).trim();return base.replace(/^Bloque de academia pendiente de cotejo\. Una lista vacía no implica exclusión del programa\.?\s*/,'').trim();};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q&&m,`Falta pregunta o mapeo ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');q.clasificacion.bloque_academia=m.desc;
 const note=`Cotejo curricular ITIC Academy: ${m.desc} Temas oficiales asociados: ${tags}. La academia orienta cobertura; las respuestas se verifican mediante documentación primaria.`;
 q.clasificacion.nota=`${trimPrior(q.clasificacion.nota)} ${note}`.trim();q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 const related=new Set(Object.values(docs));q.revision.fuentes=q.revision.fuentes.filter(f=>!related.has(f.url));for(const url of m.urls)q.revision.fuentes.push({url,referencia:`ITIC Academy: ${m.desc}`});c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo curricular A1/A2 actualizado para IDs 5876–5880.');
