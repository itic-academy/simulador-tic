const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1095.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={invoice:'https://drive.google.com/file/d/1c-2yjIsVIRlt1CP_yCQXKDbSGqJktdBH/view?usp=drivesdk',protocol:'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',search:'https://drive.google.com/file/d/1k7xJ0zVj4fNRbX5M03raV2Vhh0RZMyHX/view?usp=drivesdk',collab:'https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk',net:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',contracts:'https://drive.google.com/file/d/15iDnkvIJUZS9SV3-acSMi10Ta0lwsLbV/view?usp=drivesdk'};
const map={
 5796:{a1:[78,80],a2:['I-6','I-9'],urls:[docs.invoice],desc:'ITIC Academy, bloque 78 «Factura electrónica» v2025: el índice curricular lo vincula a A1-78 y a su mapa interno A2-O10. En el programa oficial GSI A2 2025 el encaje se hace en I.6 (firma electrónica) e I.9 (gestión electrónica/NTI); se guarda esa numeración oficial y no se copia el código interno del material.'},
 5797:{a1:[115],a2:['II-8'],urls:[docs.protocol],desc:'ITIC Academy, bloque 43 «Protocolos» versión 2026.1: IPv4/IPv6, cabeceras, TCP/IP y RFC; mapeo curricular directo a A1-115 y al tema oficial GSI A2-II.8.'},
 5798:{a1:[104],a2:['II-16'],urls:[docs.search,docs.collab],desc:'ITIC Academy, bloque 103/104 de Gestión Documental y bloque 50 versión 2026.1: recuperación/búsqueda de información, gestión documental y buscadores; mapeo a A1-104 y al tema oficial GSI A2-II.16.'},
 5799:{a1:[109],a2:['IV-13'],urls:[docs.net],desc:'ITIC Academy, bloque 42 «Redes» versión 2026.1: Internet, DNS y servicios básicos; encaje en A1-109 y tema oficial GSI A2-IV.13.'},
 5800:{a1:[11],a2:[],urls:[docs.contracts],desc:'ITIC Academy, bloque de Contratación Pública v3.1: LCSP y contratación administrativa, encaje A1-11. En el programa oficial GSI A2 2025 cotejado no hay tema específico de contratación pública; se deja A2 vacío y no se extrapola el programa general de otros cuerpos.'}
};
const marker='Cotejo curricular ITIC Academy:';
const trimPrior=v=>{const raw=(v||'').trim(),i=raw.indexOf(marker),base=(i<0?raw:raw.slice(0,i)).trim();return base.replace(/^Bloque de academia pendiente de cotejo\. Una lista vacía no implica exclusión del programa\.?\s*/,'').trim();};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q&&m,`Falta pregunta o mapeo ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');q.clasificacion.bloque_academia=m.desc;
 const note=`${marker} ${m.desc} Temas oficiales asociados: ${tags||'A1-11; sin correspondencia específica A2 en el programa oficial GSI cotejado'}. La academia orienta la cobertura; las fuentes técnicas y jurídicas citadas fundamentan la respuesta.`;
 q.clasificacion.nota=`${trimPrior(q.clasificacion.nota)} ${note}`.trim();q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 const related=new Set(Object.values(docs));q.revision.fuentes=q.revision.fuentes.filter(f=>!related.has(f.url));for(const url of m.urls)q.revision.fuentes.push({url,referencia:`ITIC Academy: ${m.desc}`});c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo curricular y clasificación A1/A2 actualizado para IDs 5796–5800.');
