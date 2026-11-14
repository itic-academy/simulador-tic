const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1281.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 tech:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',
 security:'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',
 bi:'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk',
 lms:'https://drive.google.com/file/d/0Bw-rS_kOHzMKR0VlVEdLYXBXb3c/view?usp=drivesdk&resourcekey=0-vy5LZYEZcMlCCwmBXxbVqg',
 test79:'https://drive.google.com/file/d/0Bw-rS_kOHzMKNm1pbklZUXRiX2c/view?usp=drivesdk&resourcekey=0-2xHJD8hCrzCs1jjJmK5b_w'
};
const map={
 6726:{a1:[65],a2:['III-12'],urls:[docs.tech],desc:'ITIC Academy, bloque 30 «Tecnologías de sistemas de la información», edición 2026.1, contenido de arquitectura y desarrollo web y servicios: cotejo curricular de WebDAV en el temario de tecnologías web.'},
 6727:{a1:[65],a2:['III-12'],urls:[docs.test79,docs.lms],desc:'Drive de formación ITIC: «Test 79» incluye una cuestión conceptual sobre LMS; «XVII_Plataformas_teleformacion.pdf» (informe histórico de la Universitat de València, 2003) compara plataformas de e-learning e incluye WebCT y sus licencias. El material acredita el encaje histórico/formativo, no la vigencia actual ni sustituye los documentos de licencia.'},
 6728:{a1:[67],a2:[],urls:[docs.tech],desc:'ITIC Academy, bloque 30 «Tecnologías de sistemas de la información», edición 2026.1, §4 «Java SE en 2026: lenguaje, JVM, JDK y herramientas»: cotejo de la interfaz JNI dentro del temario Java SE.'},
 6729:{a1:[79],a2:['IV-12'],urls:[docs.security],desc:'ITIC Academy, bloque 36 «Seguridad, Criptografía, Identificación y Firma», edición 2026, §3.2 «Diffie–Hellman, ECDH y cifrado híbrido»: distingue acuerdo de claves de cifrado; cotejo de temario contrastado con el artículo original de 1976.'},
 6730:{a1:[75],a2:['II-4','III-4'],urls:[docs.bi],desc:'ITIC Academy, bloque 34 «Business Intelligence y Big Data 2026», §2 sobre almacén de datos, hechos, dimensiones y modelado dimensional: contrapone estrella con dimensión desnormalizada y copo con dimensión normalizada en tablas relacionadas.'}
};
const marker='Cotejo curricular ITIC Academy:';
const trim=v=>{const raw=(v||'').trim(),i=raw.indexOf(marker),base=(i<0?raw:raw.slice(0,i)).trim();return base.replace(/^Bloque de academia pendiente de cotejo\. Una lista vacía no implica exclusión del programa\.?\s*/,'').trim();};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q&&m,`Falta ID ${c.id}`);q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);const topics=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');q.clasificacion.bloque_academia=m.desc;const note=`${marker} ${m.desc} Correspondencia oficial: ${topics||'A1-67; sin epígrafe A2 de Java SE directamente equivalente'}. El cotejo académico acredita cobertura curricular, no sustituye fuentes técnicas ni licencias.`;q.clasificacion.nota=`${trim(q.clasificacion.nota)} ${note}`.trim();q.comentarios=`${trim(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${trim(q.revision.observaciones)} ${note}`.trim();const urls=new Set(m.urls);q.revision.fuentes=q.revision.fuentes.filter(f=>!urls.has(f.url));for(const url of m.urls)q.revision.fuentes.push({url,referencia:`ITIC Academy/Drive: ${m.desc}`});c.actualizada=structuredClone(q);}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo curricular ITIC Academy/Drive aplicado a los IDs 6726–6730.');
