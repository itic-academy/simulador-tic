const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1113.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={security:'https://docs.google.com/document/d/1Rix8RBBUSoXJBOAt8iWyU9j5tPiqlXzk/edit?usp=drivesdk',lifecycle:'https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view?usp=drivesdk'};
const map={
 5886:{a1:[81],a2:['I-6'],urls:[docs.security],desc:'ITIC Academy, temas 079–081 «Seguridad, criptografía, identificación y firma», versión 2026.1: DNIe, certificados y tarjetas inteligentes.'},
 5887:{a1:[86],a2:['III-1','III-2'],urls:[docs.lifecycle],desc:'ITIC Academy, bloque 15 «Metodologías ágiles y ciclo de vida», versión 2026: sección específica sobre ISO/IEC/IEEE 12207:2026 y modelos del ciclo de vida.'},
 5888:{a1:[88],a2:['III-2'],urls:[docs.lifecycle],desc:'ITIC Academy, bloque 15 «Metodologías ágiles y ciclo de vida», versión 2026: sección 34.3 RAD atribuye a James Martin la formulación clásica y expone sus fases.'},
 5889:{a1:[96],a2:['III-1','III-13'],urls:[docs.lifecycle],desc:'ITIC Academy, bloque 15 «Metodologías ágiles y ciclo de vida», versión 2026: cobertura general de ciclo de vida y estándares de desarrollo; en el texto consultado no se localizó mención explícita a ISO/IEC/IEEE 26514, cuyo alcance se comprobó directamente en la ficha ISO.'},
 5890:{a1:[88],a2:['III-2'],urls:[docs.lifecycle],desc:'ITIC Academy, bloque 15 «Metodologías ágiles y ciclo de vida», versión 2026: sección 36 Proceso Unificado/RUP; las características se comprueban en documentación de IBM Rational.'}
};
const marker='Cotejo curricular ITIC Academy:';
const trimPrior=v=>{const raw=(v||'').trim(),i=raw.indexOf(marker),base=(i<0?raw:raw.slice(0,i)).trim();return base.replace(/^Bloque de academia pendiente de cotejo\. Una lista vacía no implica exclusión del programa\.?\s*/,'').trim();};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q&&m,`Falta pregunta o mapeo ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');q.clasificacion.bloque_academia=m.desc;
 const note=`Cotejo curricular ITIC Academy: ${m.desc} Temas oficiales asociados: ${tags}. La cobertura académica orienta el estudio; estándares, fechas y respuestas se verifican en las fuentes primarias citadas.`;
 q.clasificacion.nota=`${trimPrior(q.clasificacion.nota)} ${note}`.trim();q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 const related=new Set(Object.values(docs));q.revision.fuentes=q.revision.fuentes.filter(f=>!related.has(f.url));for(const url of m.urls)q.revision.fuentes.push({url,referencia:`ITIC Academy: ${m.desc}`});c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo curricular A1/A2 actualizado para IDs 5886–5890.');
