const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-392.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 security:{url:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',label:'ITIC Academy, bloque 48, Seguridad en redes y en el nivel de aplicación, versión 2026.1'},
 law:{url:'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk',label:'ITIC Academy, bloque 03, Actuación administrativa y administración digital, versión 2026'},
 bi:{url:'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk',label:'ITIC Academy, bloque 34, Business Intelligence y Big Data, versión 2026.1'},
 network:{url:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',label:'ITIC Academy, bloque 42, Redes, actualización 2026'},
 signature:{url:'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',label:'ITIC Academy, bloque 36, Seguridad, criptografía, identificación y firma, versión 2026.1'}
};
const map={
 2276:{topics:['A1-47','A1-50','A2-II-13'],docs:['security'],detail:'El bloque 48 encuadra el contenido de seguridad organizativa/técnica, aunque no se encontró un apartado monográfico dedicado a los requisitos de ISO/IEC 27001. A1-47/A1-50 y A2-II-13 aportan el encaje oficial de seguridad, gestión y certificación; la certificabilidad de ISO/IEC 27001 se verifica en ISO.'},
 2277:{topics:['A1-8','A2-I-8'],docs:['law'],detail:'El bloque 03 incluye las Leyes 39 y 40/2015 y actuación administrativa. A1-8/A2-I-8 son los epígrafes oficiales de régimen jurídico y procedimiento; se verifica el plazo concreto en el art. 30.2 de la Ley 40/2015.'},
 2278:{topics:['A1-75','A2-II-4','A2-III-15'],docs:['bi'],detail:'El bloque 34 de Business Intelligence trata almacenes de datos y OLAP. Encaje oficial directo A1-75/A2-II-4 y complementario A2-III-15 por OLAP; el significado de hechos, dimensiones y medidas se contrasta con documentación de modelado dimensional.'},
 2279:{topics:['A1-108','A1-110','A2-IV-7'],docs:['network'],detail:'El bloque 42 incluye medios de transmisión, redes y cableado. Se corresponde con A1-108/A1-110 y A2-IV-7 (medios guiados y parámetros); para evitar generalizar todos los coaxiales, se fijan explícitamente dos impedancias nominales de cables identificados.'},
 2280:{topics:['A1-80','A2-I-6'],docs:['signature'],detail:'El bloque 36 cubre identidad digital, firma y certificados cualificados; encaje A1-80/A2-I-6. El matiz firma frente a sello electrónico y las remisiones a los anexos I/III se contrastan con el BOE y el Reglamento eIDAS.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q?.revision&&m,`Falta cotejo ${c.id}`);assert.ok(m.topics.every(t=>official.has(t)),`Tema oficial inexistente para ${c.id}`);
 q.clasificacion.A1=m.topics.filter(t=>t.startsWith('A1-'));q.clasificacion.A2=m.topics.filter(t=>t.startsWith('A2-'));
 const curricular=`${m.docs.map(k=>docs[k].label).join('; ')}. ${m.detail}`;
 const note=`Cotejo curricular: ${curricular} Correspondencias ${m.topics.join(', ')} contrastadas con revision/temario-oficial.json y los anexos de las convocatorias BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2). La academia aporta encuadre temático, no autoridad técnica ni normativa.`;
 q.clasificacion.bloque_academia=curricular;q.clasificacion.nota=note;q.revision.observaciones+=` ${note}`;q.comentarios=q.revision.observaciones;
 for(const k of m.docs)q.revision.fuentes.push({url:docs[k].url,referencia:`${docs[k].label}; cotejo curricular, no autoridad técnica ni normativa.`});
 q.revision.fuentes.push({url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:`Convocatoria A1 consultada; anexo de programa, tema(s) ${m.topics.filter(t=>t.startsWith('A1-')).join(', ')}.`});
 q.revision.fuentes.push({url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:`Convocatoria A2 GSI consultada; anexo de programa, tema(s) ${m.topics.filter(t=>t.startsWith('A2-')).join(', ')}.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');
console.log('Cotejo académico y temas oficiales del lote 392 completados.');
