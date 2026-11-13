const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1110.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={systems:'https://drive.google.com/file/d/1nXa2jkiUqpu31smkt5D8WswcTgEN7XlB/view?usp=drivesdk',iot:'https://drive.google.com/file/d/1w3UwQPDtDE9GXacSYNUGUcO6KirAQ8xf/view?usp=drivesdk',database:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk'};
const map={
 5871:{a1:[60],a2:['II-2','IV-1'],urls:[docs.systems],desc:'ITIC Academy, bloque 47 «Aplicaciones móviles y sistemas operativos», edición 2026.1: Linux/UNIX, administración de sistemas operativos y fundamentos de SO; correspondencia A1-60/A2-II-2/A2-IV-1.'},
 5872:{a1:[124],a2:['II-2'],urls:[docs.systems],desc:'ITIC Academy, bloque 47 «Aplicaciones móviles y sistemas operativos», edición 2026.1: tecnologías y desarrollo de aplicaciones móviles y sistemas Android; el mismo bloque cubre fundamentos de SO móvil. Correspondencia A1-124/A2-II-2.'},
 5873:{a1:[117],a2:['IV-13'],urls:[docs.iot],desc:'ITIC Academy, bloque 44 «Transformación digital, industria 4.0, ciudades inteligentes e IoT», edición 2026: cobertura curricular general IoT (A1-117/A2-IV-13). En la búsqueda del material no se localizó una mención explícita a TinyOS/nesC; el dato concreto se contrasta con el repositorio del proyecto.'},
 5874:{a1:[64],a2:['II-5'],urls:[docs.database],desc:'ITIC Academy, bloque 29 «Bases de datos, SQL y modelado de datos», edición 2026: lenguaje SQL y bases de datos relacionales; correspondencia A1-64/A2-II-5.'},
 5875:{a1:[64],a2:['II-5'],urls:[docs.database],desc:'ITIC Academy, bloque 29 «Bases de datos, SQL y modelado de datos», edición 2026: lenguaje SQL e interoperabilidad entre gestores; correspondencia A1-64/A2-II-5.'}
};
const marker='Cotejo curricular ITIC Academy:';
const trimPrior=v=>{const raw=(v||'').trim(),i=raw.indexOf(marker),base=(i<0?raw:raw.slice(0,i)).trim();return base.replace(/^Bloque de academia pendiente de cotejo\. Una lista vacía no implica exclusión del programa\.?\s*/,'').trim();};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q&&m,`Falta pregunta o mapeo ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');q.clasificacion.bloque_academia=m.desc;
 const note=`Cotejo curricular ITIC Academy: ${m.desc} Temas oficiales asociados: ${tags}. La academia orienta la cobertura; el contenido se comprueba con documentación primaria.`;
 q.clasificacion.nota=`${trimPrior(q.clasificacion.nota)} ${note}`.trim();q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 const related=new Set(Object.values(docs));q.revision.fuentes=q.revision.fuentes.filter(f=>!related.has(f.url));for(const url of m.urls)q.revision.fuentes.push({url,referencia:`ITIC Academy: ${m.desc}`});c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo curricular A1/A2 actualizado para IDs 5871–5875.');
