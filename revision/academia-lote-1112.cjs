const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1112.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={development:'https://drive.google.com/file/d/1LuUHoQr8oDmptteHIQ72VdCvJFsnu3LF/view?usp=drivesdk',security:'https://docs.google.com/document/d/1Rix8RBBUSoXJBOAt8iWyU9j5tPiqlXzk/edit?usp=drivesdk'};
const map={
 5881:{a1:[67],a2:['II-3'],urls:[docs.development],desc:'ITIC Academy, bloque 30 «Tecnologías de sistemas de información», edición 2026: Java y desarrollo de aplicaciones cliente. JavaFX no se presenta como tecnología vigente de applets/RIA de navegador; ese matiz se coteja con Oracle/OpenJFX.'},
 5882:{a1:[79,125],a2:['IV-12'],urls:[docs.security],desc:'ITIC Academy, temas 079–081 «Seguridad, criptografía, identificación y firma», versión 2026.1: funciones hash y resumen criptográfico. La longitud de SHA-1 se comprueba en RFC 3174 y la recomendación de uso vigente en NIST.'},
 5883:{a1:[80],a2:['I-9','IV-12'],urls:[docs.security],desc:'ITIC Academy, temas 079–081 «Seguridad, criptografía, identificación y firma», versión 2026.1: formatos de firma electrónica y XMLDSig/XAdES. La definición normativa de enveloped signature se contrasta con W3C y RFC 3275.'},
 5884:{a1:[80,81],a2:['I-6'],urls:[docs.security],desc:'ITIC Academy, temas 079–081 «Seguridad, criptografía, identificación y firma», versión 2026.1: certificados, claves e infraestructura PKI. PKCS #12/PFX se verifica en RFC 7292.'},
 5885:{a1:[81],a2:['I-6'],urls:[docs.security],desc:'ITIC Academy, temas 079–081 «Seguridad, criptografía, identificación y firma», versión 2026.1: DNIe y tarjetas inteligentes. El material y soporte físicos se cotejan con la Dirección General de la Policía.'}
};
const marker='Cotejo curricular ITIC Academy:';
const trimPrior=v=>{const raw=(v||'').trim(),i=raw.indexOf(marker),base=(i<0?raw:raw.slice(0,i)).trim();return base.replace(/^Bloque de academia pendiente de cotejo\. Una lista vacía no implica exclusión del programa\.?\s*/,'').trim();};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q&&m,`Falta pregunta o mapeo ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');q.clasificacion.bloque_academia=m.desc;
 const note=`Cotejo curricular ITIC Academy: ${m.desc} Temas oficiales asociados: ${tags}. La academia orienta cobertura; las respuestas y el detalle de cada estándar se verifican con fuentes primarias.`;
 q.clasificacion.nota=`${trimPrior(q.clasificacion.nota)} ${note}`.trim();q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 const related=new Set(Object.values(docs));q.revision.fuentes=q.revision.fuentes.filter(f=>!related.has(f.url));for(const url of m.urls)q.revision.fuentes.push({url,referencia:`ITIC Academy: ${m.desc}`});c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo curricular A1/A2 actualizado para IDs 5881–5885.');
