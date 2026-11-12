const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1109.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={hardware:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',network:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',protocols:'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',systems:'https://drive.google.com/file/d/1nXa2jkiUqpu31smkt5D8WswcTgEN7XlB/view?usp=drivesdk',development:'https://drive.google.com/file/d/1LuUHoQr8oDmptteHIQ72VdCvJFsnu3LF/view?usp=drivesdk'};
const map={
 5866:{a1:[56],a2:['IV-5'],urls:[docs.hardware],desc:'ITIC Academy, bloque Hardware, edición 2026.1: almacenamiento, RAID, capacidad y tolerancia a fallos (A1-56/A2-IV-5).'},
 5867:{a1:[56],a2:['IV-5'],urls:[docs.hardware],desc:'ITIC Academy, bloque Hardware, edición 2026.1: comparativa DAS/NAS/SAN, niveles de acceso a ficheros y bloques y almacenamiento de centros de datos (A1-56/A2-IV-5).'},
 5868:{a1:[108],a2:['IV-8'],urls:[docs.network,docs.protocols],desc:'ITIC Academy, bloque Redes, edición 2026: fundamentos de comunicaciones, redes y protocolos; bloque Protocolos, edición 2026: arquitectura TCP/IP y transporte. Correspondencia curricular con A1-108/A2-IV-8; la nomenclatura de la API se comprueba en la documentación de sockets.'},
 5869:{a1:[77],a2:['II-9','III-12'],urls:[docs.development],desc:'ITIC Academy, bloque 30 «Tecnologías de sistemas de información», edición 2026: XML, servicios web y estándares/interoperabilidad; correspondencia A1-77/A2-II-9/A2-III-12.'},
 5870:{a1:[60],a2:['II-2','IV-1'],urls:[docs.systems],desc:'ITIC Academy, bloque «Aplicaciones móviles y sistemas operativos», edición 2026.1: fundamentos de Linux/UNIX, shell, administración y A2 C2; correspondencia con A1-60/A2-II-2/A2-IV-1.'}
};
const marker='Cotejo curricular ITIC Academy:';
const trimPrior=v=>{const raw=(v||'').trim(),i=raw.indexOf(marker),base=(i<0?raw:raw.slice(0,i)).trim();return base.replace(/^Bloque de academia pendiente de cotejo\. Una lista vacía no implica exclusión del programa\.?\s*/,'').trim();};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q&&m,`Falta pregunta o mapeo ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');q.clasificacion.bloque_academia=m.desc;
 const note=`Cotejo curricular ITIC Academy: ${m.desc} Temas oficiales asociados: ${tags}. La academia orienta la cobertura; la conclusión se sostiene con las fuentes primarias citadas.`;
 q.clasificacion.nota=`${trimPrior(q.clasificacion.nota)} ${note}`.trim();q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 const related=new Set(Object.values(docs));q.revision.fuentes=q.revision.fuentes.filter(f=>!related.has(f.url));for(const url of m.urls)q.revision.fuentes.push({url,referencia:`ITIC Academy: ${m.desc}`});c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo curricular A1/A2 actualizado para IDs 5866–5870.');
