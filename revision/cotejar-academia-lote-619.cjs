const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bankPath=path.join(__dirname,'..','preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-619.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 networks:{url:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',title:'ITIC Academy, Bloque 42 «Redes», 2026'},
 protocols:{url:'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',title:'ITIC Academy, Bloque 43 «Protocolos», 2026'},
 networksLegacy:{url:'https://drive.google.com/file/d/1AJFovfbL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',title:'ITIC Academy, Temas 108/109/113/118/119/120/121 Redes, versión 2025'}
};
const details={
 3411:{docs:[docs.protocols],detail:'el bloque actual trata el modelo OSI (A1-111); la precisión de MAC como subcapa de enlace se verificó con la definición IEEE 802.3 de MAC y PHY.'},
 3412:{docs:[docs.protocols],detail:'el material trata redes IP y los servicios/protocolos (A1-115); la naturaleza datagrama/sin conexión y la posible variación de rutas se comprobaron con RFC 1122 y RFC 1392.'},
 3413:{docs:[docs.networks,docs.networksLegacy],detail:'los bloques de redes sitúan acceso, medio de cobre y tecnologías WAN en A1-108/A2-IV-7/IV-10; las diferencias concretas entre ADSL y SHDSL se contrastaron en las recomendaciones UIT-T.'},
 3414:{docs:[docs.protocols],detail:'la administración IP y el diagnóstico de rutas encajan en A1-115/A2-IV-9; se especifica que la opción de netstat depende de la implementación y se advierte del uso moderno de ip route.'},
 3415:{docs:[docs.protocols,docs.networks],detail:'el material cubre IPv4/IPv6 y redes locales en A1-115/118 y A2-IV-8; se diferencia la resolución IPv4 con ARP de Neighbor Discovery para IPv6 mediante RFC 826 y RFC 4861.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const calls='Clasificación cotejada con programa A1 BOE-A-2025-25938 (anexo I), programa A2 BOE-A-2025-26262 (anexo IX) y revision/temario-oficial.json.';
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),d=details[c.id];assert.ok(q&&d&&q.revision);const A1=c.actualizada.clasificacion.A1,A2=c.actualizada.clasificacion.A2;for(const id of [...A1,...A2])assert.ok(official.has(id),`Tema oficial inexistente: ${id}`);
 const academy=d.docs.map(x=>`${x.title}; ${d.detail} ${x.url}`).join(' | ');
 q.clasificacion={...q.clasificacion,A1,A2,bloque_academia:academy,estado:'revisada',nota:`${q.revision.estado}. ${calls}`};
 q.revision.observaciones+=` Cotejo ITIC Academy: ${academy} ${calls}`;
 for(const x of d.docs)q.revision.fuentes.push({url:x.url,referencia:`${x.title}; cotejo curricular: ${d.detail} El material de academia encuadra el programa, no sustituye las fuentes técnicas primarias.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejadas las cinco preguntas con ITIC Academy y programas oficiales A1/A2.');
