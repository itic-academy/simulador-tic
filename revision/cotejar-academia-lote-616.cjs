const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bankPath=path.join(__dirname,'..','preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-616.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 crypto:{url:'https://drive.google.com/file/d/1Sol49a2N19LsbVxip95u9OzDYfk0BiAD/view?usp=drivesdk',title:'ITIC Academy, Temas 079, 080 y 081 «Seguridad», material de estudio'},
 imagery:{url:'https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view?usp=drivesdk',title:'ITIC Academy, bloque temático de E-learning y Sistemas de Información Geográfica, versión 2026.1'},
 lifecycle:{url:'https://drive.google.com/file/d/1I1EOjKrsJ8R528HRFdU57-3tz3MXMF6P/view?usp=drivesdk',title:'ITIC Academy, temas 037, 086 y 088 «Metodologías y modelos de ciclo de vida», edición 2025'},
 planning:{url:'https://drive.google.com/file/d/0Bw-rS_kOHzMKQlZsckp0a3dwTk0/view?usp=drivesdk&resourcekey=0-IiQLfXpf8gEvEp9omHU5Ug',title:'ITIC Academy, Tema 077 «Planificación estratégica de sistemas de información y de comunicaciones», 2007'},
 planningOrg:{url:'https://drive.google.com/file/d/1ANdenllxXF4E7Sl4vJdJ_XPUPkx7Mqp_/view?usp=drivesdk',title:'ITIC Academy, temas 028, 029 y 034 «Organización y gestión de sistemas de información», material subrayado'}
};
const details={
 3396:{docs:[docs.crypto],detail:'la portada del bloque recoge A1-79/80/81 y A2-O8/O11, donde se incluye expresamente el DNIe e identidad electrónica; el dato de zona pública se confirmó aparte con la Policía Nacional.'},
 3397:{docs:[docs.imagery],detail:'el material sitúa sistemas de imagen/digitalización en el bloque curricular de A1-83; DICOM se cotejó como estándar de imagen médica con NEMA PS3.2 vigente. Sin epígrafe A2 directo identificado.'},
 3398:{docs:[docs.imagery],detail:'el material de la academia aborda tecnologías de imagen y digitalización vinculadas al A1-83; la definición de bits por píxel se contrastó en la especificación Microsoft MS-WMF.'},
 3399:{docs:[docs.lifecycle],detail:'el propio material asigna el bloque a A1-86 (modelos del ciclo de vida) y A2-D1/D2; incluye prototipado evolutivo y modelos de ciclo de vida. La relación concreta entre Code-and-Fix, 4GL y evolución se verificó en el artículo de Boehm.'},
 3400:{docs:[docs.planning,docs.planningOrg],detail:'el tema de planificación cubre el Plan de Sistemas y MÉTRICA v3; el tema de organización trata la estructura y funciones del centro/unidad de sistemas. Este contraste curricular sitúa la estructura orgánica TIC fuera del diseño de un sistema concreto; la separación PSI-2/PSI-6 se comprobó en MÉTRICA v3 oficial.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const calls='Clasificación cotejada con programa A1 BOE-A-2025-25938 (anexo I), programa A2 BOE-A-2025-26262 (anexo IX) y revision/temario-oficial.json.';
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),d=details[c.id];assert.ok(q&&d&&q.revision);const A1=c.actualizada.clasificacion.A1,A2=c.actualizada.clasificacion.A2;for(const id of [...A1,...A2])assert.ok(official.has(id),`Tema oficial inexistente: ${id}`);
 const academy=d.docs.map(x=>`${x.title}; ${d.detail} ${x.url}`).join(' | ');
 q.clasificacion={...q.clasificacion,A1,A2,bloque_academia:academy,estado:'revisada',nota:`${q.revision.estado}. ${A2.length?'El encaje A2 corresponde al ciclo de vida y a la gestión del desarrollo.':'No se fuerza un epígrafe A2 sin relación directa identificable en el programa.'} ${calls}`};
 q.revision.observaciones+=` Cotejo ITIC Academy: ${academy} ${calls}`;
 for(const x of d.docs)q.revision.fuentes.push({url:x.url,referencia:`${x.title}; cotejo curricular: ${d.detail} El material de academia orienta el encaje en temario, no sustituye las fuentes técnicas primarias.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejadas las cinco preguntas con materiales ITIC Academy y temarios oficiales A1/A2.');
