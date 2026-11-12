const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1084.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const urls={digital:'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',admin:'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk',constitution:'https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk',contracts:'https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk',invoice:'https://drive.google.com/file/d/1FPkzhljZaHbxADbo36QNm9U9gwGy7lIt/view?usp=drivesdk'};
const map={
 5741:{a1:[80],a2:['I-6','I-9'],urls:[urls.digital,urls.admin],desc:'ITIC Academy 2026, bloque 36 Identificación, Firma y PKI, y bloque 03 Actuación administrativa y Administración digital: certificados/sellos e identificación en la actuación administrativa electrónica. A1-80 y A2-I.6/I.9 encajan con firma/identidad y procedimientos electrónicos.'},
 5742:{a1:[11],a2:[],urls:[urls.contracts],desc:'ITIC Academy 2026, bloque 05 Contratación, Presupuestos y Compra TIC: Ley 9/2017, contratos del sector público, tipos contractuales y procedimientos. El programa GSI A2 consultado no contiene un epígrafe específico de tipos de contratos públicos; no se fuerza equivalencia A2.'},
 5743:{a1:[3],a2:['I-1'],urls:[urls.constitution],desc:'ITIC Academy 2026, bloque 01 Constitución, Estado y AGE: organización territorial y distribución constitucional de competencias; mapa temático. La Constitución distingue competencias que las CCAA pueden asumir y la competencia estatal sobre puertos de interés general.'},
 5744:{a1:[11,78],a2:['I-9'],urls:[urls.invoice],desc:'ITIC Academy 2026, bloque 35 Comercio electrónico y factura electrónica, §§3–4 y 7–8: Facturae, formato y firma electrónica; bloque 03 contextualiza la recepción electrónica en la Administración. Temas A1-11/A1-78 y A2-I.9. El material apoya el mapa didáctico, no la determinación jurídica del formato vigente.'},
 5745:{a1:[11],a2:[],urls:[urls.contracts],desc:'ITIC Academy 2026, bloque 05 Contratación, Presupuestos y Compra TIC: LCSP y contratos menores. El programa GSI A2 cotejado no contiene un tema específico de contratación pública; no se asigna A2 por analogía.'},
};
const marker='Cotejo curricular ITIC Academy:';
const trimPrior=v=>{const i=(v||'').indexOf(marker);return i<0?(v||'').trim():v.slice(0,i).trim();};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q&&m,`Falta pregunta o mapeo ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');q.clasificacion.bloque_academia=m.desc;
 const note=`${marker} ${m.desc}${tags?` Temas oficiales asociados: ${tags}.`:''} El cotejo académico no sustituye la fuente normativa primaria.`;
 q.clasificacion.nota=`${trimPrior(q.clasificacion.nota)} ${note}`.trim();q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 const related=new Set(Object.values(urls));q.revision.fuentes=q.revision.fuentes.filter(f=>!related.has(f.url));
 for(const url of m.urls)q.revision.fuentes.push({url,referencia:`ITIC Academy: ${m.desc}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
