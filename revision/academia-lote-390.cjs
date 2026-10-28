const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-390.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 web:{url:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',label:'ITIC Academy, bloque 30, Tecnologías de Sistemas de Información, versión 2026.1'},
 itil:{url:'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk',label:'ITIC Academy, bloque 41, ITIL y COBIT, versión 2026.1'},
 transparency:{url:'https://drive.google.com/file/d/17B9a1yxMFgHCHEyVVBi0PG-cdCYABVvd/view?usp=drivesdk',label:'ITIC Academy, bloque 11, Reutilización de la Información del Sector Público, Datos Abiertos y Transparencia, versión 2026.2'}
};
const map={
 2266:{topics:['A1-65','A2-II-6','A2-III-12'],docs:['web'],detail:'El bloque 30 aborda la interoperabilidad de servicios web y, expresamente, XML frente a JSON. Encaje A1-65 (interconexión con sistemas y servicios) y A2-II-6/A2-III-12 (servicios web, interoperabilidad y aplicaciones web); la definición del formato procede de RFC 8259.'},
 2267:{topics:['A1-58','A1-65','A2-II-6','A2-III-12'],docs:['web'],detail:'El bloque 30 incluye estándares de servicios web, WSDL y tecnologías de integración; encaja con arquitectura SOA/web A1-58/A1-65 y servicios web A2-II-6/A2-III-12. La versión que alcanzó recomendación se comprueba directamente en W3C.'},
 2268:{topics:['A1-72','A2-II-12'],docs:['web'],detail:'El bloque 30 cubre CRM y generación de informes; la clasificación oficial corresponde a A1-72 y A2-II-12 (atención a clientes/usuarios y CRM). La función de registrar interacciones se contrasta con Oracle.'},
 2269:{topics:['A1-106'],docs:['itil'],detail:'El bloque 41 incluye ITIL 4 y gestión del valor de las TIC en A1-106. El propio material limita su cobertura A2 a aspectos de D2/C2 (proyectos, configuración, cambios, rendimiento y capacidad); no se asigna un tema A2 específico a la creación conjunta de valor.'},
 2270:{topics:['A1-25','A2-I-4'],docs:['transparency'],detail:'El bloque 11 incluye expresamente la Ley 19/2013 y transparencia (A1-31) y contextualiza el acceso electrónico/transparencia en A2-O9. La pregunta se clasifica además en los temas oficiales específicos A1-25 (gobierno abierto y Ley 19/2013) y A2-I-4 (Ley 19/2013). La redacción legal y la ponderación se validan con el BOE.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q?.revision&&m,`Falta revisión/cotejo para ${c.id}`);assert.ok(m.topics.every(t=>official.has(t)),`Tema oficial inexistente para ${c.id}`);
 q.clasificacion.A1=m.topics.filter(t=>t.startsWith('A1-'));q.clasificacion.A2=m.topics.filter(t=>t.startsWith('A2-'));
 const curricular=`${m.docs.map(k=>docs[k].label).join('; ')}. ${m.detail}`;
 const note=`Cotejo curricular: ${curricular} Correspondencias ${m.topics.join(', ')} contrastadas con revision/temario-oficial.json y los anexos de las convocatorias BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2). La academia aporta encuadre temático; las fuentes primarias sustentan las respuestas.`;
 q.clasificacion.bloque_academia=curricular;q.clasificacion.nota=note;q.revision.observaciones+=` ${note}`;q.comentarios=q.revision.observaciones;
 for(const k of m.docs)q.revision.fuentes.push({url:docs[k].url,referencia:`${docs[k].label}; cotejo curricular, no autoridad técnica ni normativa.`});
 q.revision.fuentes.push({url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:`Convocatoria A1 consultada; anexo de programa, tema(s) ${m.topics.filter(t=>t.startsWith('A1-')).join(', ')}.`});
 q.revision.fuentes.push({url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:`Convocatoria A2 GSI consultada; anexo de programa, tema(s) ${m.topics.filter(t=>t.startsWith('A2-')).join(', ')||'sin correspondencia directa asignada'}; otras relaciones A2 se describen como contexto, no como equivalencia.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');
console.log('Cotejo académico y temas oficiales del lote 390 completados.');
