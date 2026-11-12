const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1078.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const urls={networks:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',protocols:'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk'};
const map={
 5711:{a1:[110],a2:['IV-7'],urls:[urls.networks],desc:'ITIC Academy, bloque 42 Redes, versión 2026: incluye sistemas de cableado y equipos de interconexión (A1-110), además de medios guiados (A2-IV.7); el conector BNC se coteja directamente con IEC 61169-8.'},
 5712:{a1:[110],a2:['IV-7'],urls:[urls.networks],desc:'ITIC Academy, bloque 42 Redes, versión 2026: cobertura de cableado, interconexión y medios guiados (A1-110/A2-IV.7). El alcance/tipo de fibra exacto de 10GBASE-LR/SR se contrasta con IEEE 802.3ae.'},
 5713:{a1:[110,118],a2:['IV-8'],urls:[urls.networks],desc:'ITIC Academy, bloque 42 Redes, versión 2026: incluye dispositivos de interconexión, LAN y administración de redes (A1-110/A1-118). Se coteja la correspondencia A2-IV.8 sobre protocolos y dispositivos de LAN; la función del bridge se comprueba con IEEE 802.1Q.'},
 5714:{a1:[111],a2:['II-8'],urls:[urls.protocols],desc:'ITIC Academy, bloque 43 Protocolos, versión 2026: cubre explícitamente modelo OSI, arquitectura, capas e interfaces (A1-111/A2-II.8). La función precisa de presentación se verifica con ISO/IEC 7498-1.'},
 5715:{a1:[113],a2:['IV-10'],urls:[urls.networks],desc:'ITIC Academy, bloque 42 Redes, versión 2026: incluye redes de transporte JDSxWDM (A1-113) y WDM en A2-IV.10, como contexto de sistemas ópticos. La búsqueda en el material no localizó tratamiento literal de EDFA; la definición se apoya en las recomendaciones ITU-T.'},
};
const marker='Cotejo curricular ITIC Academy:';
const trimPrior=v=>{const i=(v||'').indexOf(marker);return i<0?(v||'').trim():v.slice(0,i).trim();};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q&&m,`Falta pregunta o mapeo ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');q.clasificacion.bloque_academia=m.desc;
 const note=`${marker} ${m.desc} Temas oficiales asociados: ${tags}. La academia coteja cobertura y no sustituye las fuentes técnicas primarias de la revisión.`;
 q.clasificacion.nota=`${trimPrior(q.clasificacion.nota)} ${note}`.trim();q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 const related=new Set(Object.values(urls));q.revision.fuentes=q.revision.fuentes.filter(f=>!related.has(f.url));
 for(const url of m.urls)q.revision.fuentes.push({url,referencia:`ITIC Academy: ${m.desc}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular A1/A2 actualizado para IDs 5711–5715.');
