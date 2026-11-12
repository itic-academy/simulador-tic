const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1077.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const urls={
 networks:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',
 itil:'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk',
 protocols:'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',
};
const map={
 5706:{a1:[118],a2:['IV-9'],urls:[urls.networks],desc:'ITIC Academy, bloque 42 Redes, versión 2026: incluye A1-118 y administración/monitorización de redes. El material cubre gestión de red de forma general; las cinco áreas FCAPS se contrastan con ITU-T M.3400.'},
 5707:{a1:[106],a2:['IV-4'],urls:[urls.itil],desc:'ITIC Academy, bloque 41 ITIL y COBIT, versión 2026.1: aborda el tema A1-106 y, para A2, partes del tema de configuración, cambios, operación, rendimiento y capacidad. El bloque coteja ITIL y su mapa de prácticas; el programa A2-IV.4 es una correspondencia parcial, no un epígrafe dedicado a ITIL.'},
 5708:{a1:[111],a2:['II-8'],urls:[urls.protocols],desc:'ITIC Academy, bloque 43 Protocolos, versión 2026: incluye modelo OSI, protocolos y técnicas de red para A1-111/A2-II.8; el detalle ARQ se verifica con RFC 3366.'},
 5709:{a1:[108],a2:['IV-14'],urls:[urls.protocols],desc:'ITIC Academy, bloque 43 Protocolos, versión 2026: incluye telecomunicaciones/voz sobre IP y servicios convergentes, próximos a PCM de voz. Se coteja la cobertura temática; la secuencia técnica se contrasta con ITU-T G.711/G.701.'},
 5710:{a1:[108],a2:[],urls:[urls.networks],desc:'ITIC Academy, bloque 42 Redes, versión 2026: el índice incluye literalmente conmutación de circuitos y paquetes en A1-108. El material no atribuye un equivalente A2 literal a este epígrafe.'},
};
const marker='Cotejo curricular ITIC Academy:';
const trimPrior=v=>{const i=(v||'').indexOf(marker);return i<0?(v||'').trim():v.slice(0,i).trim();};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q&&m,`Falta pregunta o mapeo ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');q.clasificacion.bloque_academia=m.desc;
 const note=`${marker} ${m.desc}${tags?` Temas oficiales asociados: ${tags}.`:' No se asigna tema A2 específico equivalente.'} La academia coteja cobertura y no sustituye las fuentes técnicas primarias de la revisión.`;
 q.clasificacion.nota=`${trimPrior(q.clasificacion.nota)} ${note}`.trim();q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 const related=new Set(Object.values(urls));q.revision.fuentes=q.revision.fuentes.filter(f=>!related.has(f.url));
 for(const url of m.urls)q.revision.fuentes.push({url,referencia:`ITIC Academy: ${m.desc}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular A1/A2 actualizado para IDs 5706–5710.');
