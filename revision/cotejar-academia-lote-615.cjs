const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bankPath=path.join(__dirname,'..','preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-615.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 bi:{url:'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk',title:'ITIC Academy, bloque 34 «Business Intelligence y Big Data», versión 2026.1'},
 networks:{url:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',title:'ITIC Academy, bloque 42 «Redes», versión 2026'},
 crypto:{url:'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',title:'ITIC Academy, bloque 36 «Seguridad, Criptografía, Identificación y Firma», versión 2026'},
 networkSecurity:{url:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',title:'ITIC Academy, bloque 48 «Seguridad en redes y en el nivel de aplicación», versión 2026'},
 directory:{url:'https://drive.google.com/file/d/1nHGBMG4P3il5v4hZ1-RKdHmGzUPiwqnA/view?usp=drivesdk',title:'ITIC Academy, bloque 45 «Correo electrónico, mensajería y servicios de directorio», versión 2026.1'}
};
const details={
 3391:{docs:[docs.bi],detail:'el bloque oficial 34 aborda ETL y explotación de datos en A1-71/A1-75 y almacenes de datos/OLAP en A2 T4; la definición y diferencia con ELT se contrastó en Microsoft Learn.'},
 3392:{docs:[docs.bi],detail:'el bloque 34 cubre minería de datos en A1-75 y A2 D15; la distinción histórica verificación/descubrimiento se confirmó en el artículo original de KDD-96.'},
 3393:{docs:[docs.networks],detail:'el bloque 42 incluye Internet y servicios básicos en A1-109; el dato histórico concreto de NCSA Mosaic se contrastó con la historia institucional de NCSA.'},
 3394:{docs:[docs.crypto,docs.networkSecurity],detail:'los bloques 36 y 48 cubren criptografía simétrica, DES, gestión de claves y seguridad en redes (A1-79/A1-125; A2 T13/C10); se separó el cálculo por nodo del número total de claves y se comprobó la retirada histórica de DES.'},
 3395:{docs:[docs.crypto,docs.directory],detail:'los bloques 36 y 45 incluyen LDAP/X.500 y servicios de directorio (A1-80/A1-122); el estado, la relación con ISO/IEC 9594 y el organismo de mantenimiento se verificaron en el catálogo oficial ITU-T.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const calls='Clasificación cotejada con programa A1 BOE-A-2025-25938 (anexo I), programa A2 BOE-A-2025-26262 (anexo IX) y revision/temario-oficial.json.';
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),d=details[c.id];assert.ok(q&&d&&q.revision);const A1=c.actualizada.clasificacion.A1,A2=c.actualizada.clasificacion.A2;for(const id of [...A1,...A2])assert.ok(official.has(id),`Tema oficial inexistente: ${id}`);
 const academy=d.docs.map(x=>`${x.title}; ${d.detail} ${x.url}`).join(' | ');
 q.clasificacion={...q.clasificacion,A1,A2,bloque_academia:academy,estado:'revisada',nota:`${q.revision.estado}. ${A2.length?'La relación A2 se apoya en sus epígrafes oficiales de BI/minería o seguridad/redes.':'No se fuerza un tema A2 sin encaje directo en el examen de este hecho.'} ${calls}`};
 q.revision.observaciones+=` Cotejo ITIC Academy: ${academy} ${calls}`;
 for(const x of d.docs)q.revision.fuentes.push({url:x.url,referencia:`${x.title}; cotejo curricular: ${d.detail} El material de academia establece el encaje temático; las conclusiones técnicas se verifican con las fuentes primarias citadas.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejadas individualmente las cinco preguntas del lote 615 con los materiales pertinentes de ITIC Academy y los programas oficiales A1/A2.');
