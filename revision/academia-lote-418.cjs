const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bp=path.join(__dirname,'..','preguntas_preparatic.json'),lp=path.join(__dirname,'cambios-lote-418.json');
const bank=JSON.parse(fs.readFileSync(bp,'utf8')),log=JSON.parse(fs.readFileSync(lp,'utf8'));
const valid=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const docs={
 choice:{url:'https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view?usp=drivesdk',label:'ITIC Academy, bloque 17 Adquisición de sistemas, alternativas y rentabilidad de inversiones, actualización octubre de 2026: incluye decisión multicriterio y normalización de puntuaciones.'},
 software:{url:'https://drive.google.com/file/d/1Og6yI-YaZ48UA3pBT-HQhTh7TfvdPW_C/view?usp=drivesdk',label:'ITIC Academy, tema 43 Protección jurídica, licencias y control del software, versión 2026: protección jurídica, medios de comprobación y tecnologías de protección de derechos.'},
 signature:{url:'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',label:'ITIC Academy, temas 79–81 Seguridad, criptografía, identificación y firma, actualización 2026: NTI, certificados, firma longeva, validación y sellos de tiempo.'},
 risk:{url:'https://drive.google.com/file/d/18tJzWuBHyd4FbkzQIE5fIbSCRdlrt_1U/view?usp=drivesdk',label:'ITIC Academy, bloque 22 ENS y ciberseguridad, nuevo temario 2026: incluye gestión de riesgos/MAGERIT y herramientas CCN como contexto curricular; clasificación exacta por temario oficial A1-47/A2-II-10.'}
};
const map={
 2401:{doc:'choice',topics:['A1-40','A1-41'],detail:'Estudio de alternativas, evaluación de viabilidad y decisiones multicriterio (A1-40/41).'},
 2402:{doc:'software',topics:['A1-43','A2-II-14'],detail:'Protección jurídica y medios de control del software; mecanismos de protección de derechos (A1-43/A2-II-14).'},
 2403:{doc:'signature',topics:['A1-80','A2-I-6','A2-I-9'],detail:'Certificados, identificación/firma electrónica y normas técnicas de interoperabilidad (A1-80/A2-I-6/I-9).'},
 2404:{doc:'risk',topics:['A1-47','A2-II-10'],detail:'Herramientas PILAR/MAGERIT para analizar y gestionar riesgos de sistemas (A1-47/A2-II-10).'},
 2405:{doc:'risk',topics:['A1-47','A2-II-10'],detail:'Conceptos de amenaza, activos, riesgo y análisis según MAGERIT (A1-47/A2-II-10).'}
};
const calls=['https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938','https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262'];
assert.deepEqual(log.cambios.map(x=>x.id),[2401,2402,2403,2404,2405]);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id],d=docs[m.doc];assert.ok(q?.revision,`falta revisión ${c.id}`);assert.ok(m.topics.every(t=>valid.has(t)),`tema oficial inexistente ${c.id}`);q.clasificacion=q.clasificacion||{};q.clasificacion.A1=m.topics.filter(t=>t.startsWith('A1-'));q.clasificacion.A2=m.topics.filter(t=>t.startsWith('A2-'));const note=`Cotejo curricular: ${d.label} ${m.detail} Drive: ${d.url}. Correspondencia cotejada con revision/temario-oficial.json y los anexos de las convocatorias A1/A2 GSI BOE-A-2025-25938 y BOE-A-2025-26262 (${calls.join('; ')}). La academia se usa como encuadre; la NTI, las definiciones técnicas y la función de PILAR se contrastan con BOE, Comisión Europea y CCN.`;q.clasificacion.bloque_academia=d.url;q.clasificacion.nota=note;q.revision.observaciones+=` ${note}`;q.comentarios=q.revision.observaciones;c.actualizada=structuredClone(q)}
fs.writeFileSync(lp,JSON.stringify(log,null,2)+'\n');fs.writeFileSync(bp,JSON.stringify(bank,null,2)+'\n');console.log('Cotejo curricular del lote 418 completado.');
