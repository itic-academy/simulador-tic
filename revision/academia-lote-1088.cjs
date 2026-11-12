const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1088.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const urls={network:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',protocol:'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',security:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',eidas:'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',hardware:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',database:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk'};
const map={
 5761:{a1:[108],a2:['II-8'],urls:[urls.network,urls.protocol],desc:'ITIC Academy, bloques 42 (redes/protocolos) y 43 (protocolos de comunicaciones): PPP, control del enlace y protocolos de red. Se coteja el alcance curricular con RFC 1661, que distingue LCP, NCP y entramado HDLC-like.'},
 5762:{a1:[80],a2:['I-6'],urls:[urls.eidas],desc:'ITIC Academy, bloque 36 «Temas 79, 80 y 81: Seguridad, Criptografía, Identificación y Firma»: marco eIDAS. La pregunta se actualiza a la versión consolidada vigente tras el Reglamento (UE) 2024/1183, que suprimió el antiguo artículo 25.3.'},
 5763:{a1:[56],a2:['IV-5'],urls:[urls.hardware],desc:'ITIC Academy, bloque 26 de hardware y almacenamiento, §§ 7.2 (DAS/NAS/SAN) y 8 (Fibre Channel/iSCSI). Se amplía la definición de SAN para no identificarla exclusivamente con fibra óptica.'},
 5764:{a1:[63],a2:['III-4','IV-2'],urls:[urls.database],desc:'ITIC Academy, bloque 29 de bases de datos: transacciones, administración y recuperación en SGBD. Se enlaza el contenido con temas A1/A2 de SGBD y transacciones; las equivalencias REDO/UNDO se acreditan con documentación oficial de IBM/Oracle.'},
 5765:{a1:[125,127],a2:['II-13'],urls:[urls.security],desc:'ITIC Academy, bloque 48 «Seguridad en redes y en el nivel de aplicación», §§ 2.2 (código dañino/malware) y 12 (seguridad en el puesto): encaje de spyware. La definición se contrasta con el glosario NIST/CNSSI.'},
};
const marker='Cotejo curricular ITIC Academy:';
const trimPrior=v=>{const i=(v||'').indexOf(marker);return i<0?(v||'').trim():v.slice(0,i).trim();};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q&&m,`Falta pregunta o mapeo ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');q.clasificacion.bloque_academia=m.desc;
 const note=`${marker} ${m.desc} Temas oficiales asociados: ${tags}. La academia orienta la cobertura; las fuentes normativas/técnicas citadas acreditan el contenido.`;
 q.clasificacion.nota=`${trimPrior(q.clasificacion.nota)} ${note}`.trim();q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 const related=new Set(Object.values(urls));q.revision.fuentes=q.revision.fuentes.filter(f=>!related.has(f.url));
 for(const url of m.urls)q.revision.fuentes.push({url,referencia:`ITIC Academy: ${m.desc}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular y clasificación A1/A2 actualizado para IDs 5761–5765.');
