const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1094.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={geo:'https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view?usp=drivesdk',crypto:'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',net:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',protocol:'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',cyber:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',eni:'https://drive.google.com/file/d/1zdx_PRBfKM9tRy61Boz_yPekU-D-b_6S/view?usp=drivesdk'};
const map={
 5791:{a1:[74],a2:[],urls:[docs.geo],desc:'ITIC Academy, bloque 33, edición 2026.1, tema A1-74 (SIG/IDE): cotejo curricular de servicios geoespaciales y componentes de la infraestructura; el bloque declara que no aplica correspondencia A2 directa. Se conserva la pregunta como pendiente porque mezcla servicios con estándares/funciones de gobernanza.'},
 5792:{a1:[125],a2:['IV-12'],urls:[docs.crypto],desc:'ITIC Academy, bloque 36 «Seguridad, Criptografía, Identificación y Firma»: cobertura de cifrado y criptografía simétrica; el listado exacto de modos DES se verifica con NIST FIPS 81 y SP 800-38A.'},
 5793:{a1:[109],a2:['IV-13'],urls:[docs.net,docs.protocol],desc:'ITIC Academy, bloques 42 Redes y Protocolos, Internet y protocolos de transferencia/servicios. El puerto inicial y transporte de TFTP se validan en RFC 1350 e IANA.'},
 5794:{a1:[125],a2:['IV-12'],urls:[docs.cyber],desc:'ITIC Academy, bloque 48 Seguridad en redes y nivel de aplicación: IPsec, servicios de seguridad y criptografía. El alcance de AH/ESP se verifica con los RFC IETF, no se atribuye como detalle propio del resumen curricular.'},
 5795:{a1:[46],a2:['I-9'],urls:[docs.eni],desc:'ITIC Academy, bloque 20 Interoperabilidad de sistemas, edición 2026.2: NTI, expedientes electrónicos e intercambio. El carácter obligatorio/opcional de los metadatos del índice se contrasta con V.4.b de la NTI publicada en BOE.'}
};
const marker='Cotejo curricular ITIC Academy:';
const trimPrior=v=>{const i=(v||'').indexOf(marker);return i<0?(v||'').trim():v.slice(0,i).trim();};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q&&m,`Falta pregunta o mapeo ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');q.clasificacion.bloque_academia=m.desc;
 const note=`${marker} ${m.desc} Temas oficiales asociados: ${tags||'A1-74; el temario de academia/programa A2 cotejado no identifica correspondencia directa, por lo que no se fuerza etiqueta A2'}. La academia orienta la cobertura; las fuentes técnicas y jurídicas citadas fundamentan la respuesta.`;
 q.clasificacion.nota=`${trimPrior(q.clasificacion.nota)} ${note}`.trim();q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 const related=new Set(Object.values(docs));q.revision.fuentes=q.revision.fuentes.filter(f=>!related.has(f.url));for(const url of m.urls)q.revision.fuentes.push({url,referencia:`ITIC Academy: ${m.desc}`});c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo curricular y clasificación A1/A2 actualizado para IDs 5791–5795.');
