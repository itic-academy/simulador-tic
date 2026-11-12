const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1086.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const urls={territory:'https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk',admin:'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk',digital:'https://drive.google.com/file/d/1FPkzhljZaHbxADbo36QNm9U9gwGy7lIt/view?usp=drivesdk',contracts:'https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk'};
const map={
 5751:{a1:[6],a2:[],urls:[urls.territory],desc:'ITIC Academy 2026, bloque 01 Constitución, Estado y AGE: organización territorial y Administración periférica; el material sirve como mapa de estudio. El tema A1-6 menciona organización periférica y servicios estatales; el temario GSI A2 consultado no contiene un epígrafe específico equivalente.'},
 5752:{a1:[7],a2:[],urls:[],desc:'Se cotejaron el temario oficial GSI A1/A2 y los materiales de ITIC Academy accesibles en Drive; no se localizó un desarrollo específico de la Memoria del Análisis de Impacto Normativo. A1-7 comprende fuentes y potestad reglamentaria, un encaje temático general; no se fuerza correspondencia A2.'},
 5753:{a1:[22,109],a2:['I-6','IV-13'],urls:[urls.digital],desc:'ITIC Academy, bloque 35 Comercio electrónico y factura electrónica, aborda el marco de servicios digitales/e-commerce; no se halló un tratamiento literal de la periodicidad DSA. El mapa curricular oficial incluye legislación de sociedad de la información (A1-22), Internet y servicios (A1-109/A2-IV.13) y sociedad de la información A2-I.6.'},
 5754:{a1:[8],a2:['I-8'],urls:[urls.admin],desc:'ITIC Academy 2026, bloque 03 Actuación administrativa y Administración digital: abstención/recusación, imparcialidad y Ley 40/2015. A1-8/A2-I.8 son los epígrafes curriculares de procedimiento y régimen jurídico del sector público.'},
 5755:{a1:[11],a2:[],urls:[urls.contracts],desc:'ITIC Academy 2026, bloque 05 Contratación, Presupuestos y Compra TIC: LCSP y documentación contractual/pliegos. A1-11 cubre tipos, preparación y contratación pública; el GSI A2 no contiene un tema específico de contratación pública.'},
};
const marker='Cotejo curricular ITIC Academy:';
const trimPrior=v=>{const i=(v||'').indexOf(marker);return i<0?(v||'').trim():v.slice(0,i).trim();};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q&&m,`Falta pregunta o mapeo ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');q.clasificacion.bloque_academia=m.desc;
 const note=`${marker} ${m.desc}${tags?` Temas oficiales asociados: ${tags}.`:''} La cobertura académica orienta el estudio y no sustituye las normas primarias.`;
 q.clasificacion.nota=`${trimPrior(q.clasificacion.nota)} ${note}`.trim();q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 const related=new Set(Object.values(urls));q.revision.fuentes=q.revision.fuentes.filter(f=>!related.has(f.url));
 for(const url of m.urls)q.revision.fuentes.push({url,referencia:`ITIC Academy: ${m.desc}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
