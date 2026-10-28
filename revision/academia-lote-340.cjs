const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-340.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 hardware:{url:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',label:'ITIC Academy, Bloque 26 Hardware, almacenamiento y virtualización, edición 2026.1 (31-08-2026)'},
 maintenance:{url:'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',label:'ITIC Academy, Bloque 39 Calidad y Mantenimiento, edición 2026 (2026)'},
 protocols:{url:'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',label:'ITIC Academy, Bloque 43 Protocolos, edición 2026'},
 elearning:{url:'https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view?usp=drivesdk',label:'ITIC Academy, Bloque 33 E-learning y GIS, edición 2026.1 (31-07-2026)'}
};
const map={
 2016:{doc:'hardware',topics:['A1-56','A2-IV-3'],detail:'trata copias de seguridad, almacenamiento y recuperación; se mantiene pendiente porque dos alternativas del enunciado alcanzan el RPO de 24 horas.'},
 2017:{doc:'maintenance',topics:['A1-101','A2-III-8'],detail:'cubre mantenimiento y evolución del software; la definición exacta de reestructuración del código se contrasta con Pressman.'},
 2018:{doc:'hardware',topics:['A1-132','A2-IV-6'],detail:'incluye virtualización de puestos y centros de datos; la persistencia se verifica en documentación del fabricante Citrix.'},
 2019:{doc:'protocols',topics:['A1-108','A2-II-8'],detail:'incluye el modelo OSI, capas e interfaces; las especificaciones V.24/V.35 se contrastan con ITU-T.'},
 2020:{doc:'elearning',topics:['A1-73','A2-III-6'],detail:'incluye conceptos y herramientas de e-learning; WebCT se trata como LMS histórico, no plataforma vigente.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q?.revision&&m,`Falta cotejo ${c.id}`);assert.deepEqual(q.clasificacion.A1,m.topics.filter(t=>t.startsWith('A1-')));assert.deepEqual(q.clasificacion.A2,m.topics.filter(t=>t.startsWith('A2-')));assert.ok(m.topics.every(t=>official.has(t)));const d=docs[m.doc];q.clasificacion.bloque_academia=`${d.label}; ${m.detail}`;q.clasificacion.nota=`Correspondencia cotejada con revision/temario-oficial.json y las convocatorias vigentes: A1 BOE-A-2025-25938 y A2 BOE-A-2025-26262. La academia aporta contexto curricular; no sustituye a las fuentes primarias. ${c.actualizada.revision.observaciones}`;q.revision.observaciones=q.clasificacion.nota;q.comentarios=q.clasificacion.nota;q.revision.fuentes.push({url:d.url,referencia:`${d.label}; cotejo de cobertura temática frente al programa oficial.`});c.actualizada=structuredClone(q);}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo académico, programa oficial y convocatorias actualizado para IDs 2016–2020.');
