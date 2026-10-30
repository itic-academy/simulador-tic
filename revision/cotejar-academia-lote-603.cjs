const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bp=path.join(__dirname,'..','preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bp,'utf8'));
const lp=path.join(__dirname,'cambios-lote-603.json'),log=JSON.parse(fs.readFileSync(lp,'utf8'));
const docs={web:{url:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',label:'ITIC Academy, bloque 30 «Tecnologías de sistemas de información», versión 2026'},protocols:{url:'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',label:'ITIC Academy, bloque 43 «Protocolos», versión 2026'},security:{url:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',label:'ITIC Academy, bloque 48 «Seguridad en redes y aplicaciones», versión 2026.1'}};
const rows={
3331:{A1:['A1-110','A1-118'],A2:['A2-IV-8'],doc:docs.protocols,detail:'la tabla de protocolos/arquitectura de redes incluye Ethernet, su subcapa MAC y acceso a LAN; el estándar IEEE se verifica con la ficha de 802.3.'},
3332:{A1:['A1-65'],A2:['A2-II-6','A2-III-12'],doc:docs.web,detail:'el bloque aborda arquitectura web e interoperabilidad de servicios y estándares SOAP/WSDL; la definición delimitada se contrasta con W3C WSA.'},
3333:{A1:['A1-108','A1-112'],A2:['A2-IV-7'],doc:docs.protocols,detail:'el bloque aporta contexto de telecomunicaciones y transmisión inalámbrica, pero la búsqueda en el material revisado no encontró una sección específica de TDT/SFN/MFN; la respuesta se basa en ETSI.'},
3334:{A1:['A1-115','A1-125'],A2:['A2-IV-8'],doc:docs.security,detail:'el apartado 8.1 trata IPsec y asociaciones de seguridad; la regla de identificación unicast/multicast se comprueba directamente en RFC 4301.'},
3335:{A1:['A1-115','A1-125'],A2:['A2-IV-8'],doc:docs.protocols,detail:'el apartado 9.2 del bloque desarrolla túneles y encapsulación; el bloque 48 incluye VPN/IPsec. La semántica de IP-in-IP y de modo túnel se verifica en RFC 2003/4301.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const calls='Clasificación cotejada con revision/temario-oficial.json y convocatorias BOE: A1 BOE-A-2025-25938 (anexo I) y A2 BOE-A-2025-26262 (anexo IX).';
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),r=rows[c.id];assert.ok(q&&r);for(const t of [...r.A1,...r.A2])assert.ok(official.has(t),`Tema oficial inexistente: ${t}`);
 q.clasificacion={A1:r.A1,A2:r.A2,bloque_academia:`${r.doc.label}; ${r.detail} ${r.doc.url}`,estado:'revisada',nota:`${q.revision.estado}. ${calls}`};
 q.revision.observaciones+=` Cotejo ITIC Academy: ${r.doc.label}; ${r.detail} ${r.doc.url} ${calls}`;
 q.revision.fuentes.push({url:r.doc.url,referencia:`${r.doc.label}; cotejo curricular: ${r.detail} La academia encuadra contenidos del temario, pero no sustituye a la norma o especificación primaria que sustenta la respuesta.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bp,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(lp,JSON.stringify(log,null,2)+'\n');console.log('Cotejo de Academy y programas BOE aplicado al lote 603.');
