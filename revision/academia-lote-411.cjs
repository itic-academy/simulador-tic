const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bankPath=path.join(__dirname,'..','preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-411.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
  eni:{url:'https://drive.google.com/file/d/1zdx_PRBfKM9tRy61Boz_yPekU-D-b_6S/view?usp=drivesdk',label:'ITIC Academy, bloque temático de Interoperabilidad de Sistemas, versión 2026.2: ENI y normas técnicas de interoperabilidad.'},
  itil:{url:'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk',label:'ITIC Academy, bloque 41 «ITIL y COBIT», versión 2026.1: gestión de servicios, gobierno y control TIC; incluye el tema A1-106. No aporta el ranking por países de una encuesta ISO.'},
  constitution:{url:'https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk',label:'ITIC Academy, bloque 01 «Constitución, organización del Estado y AGE», versión 2026: temas constitucionales A1-1/3 y materia constitucional general A2.'},
  admin:{url:'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk',label:'ITIC Academy, bloque 03 «Actuación administrativa y Administración digital», actualización 2026: administración electrónica y marco normativo.'}
};
const mapping={
  2366:{topics:['A1-45','A2-I-9'],docs:['eni','admin'],detail:'Componentes documentales y normas técnicas de interoperabilidad; el detalle de contenido, firma cuando proceda y metadatos procede de la NTI publicada en BOE.'},
  2367:{topics:['A1-50','A1-106'],docs:['itil'],detail:'Se encuadra en gestión y normalización de servicios TIC. La academia cubre ITIL/gestión de servicios, pero no se atribuye a sus materiales el dato temporal del puesto de España en ISO Survey.'},
  2368:{topics:['A1-3','A2-I-1'],docs:['constitution'],detail:'Organización territorial y autonomía de nacionalidades y regiones; la literalidad se contrasta con el artículo 2 constitucional y el programa oficial.'},
  2369:{topics:['A1-1','A2-I-1'],docs:['constitution'],detail:'Estructura de la Constitución, Título Preliminar y artículo 3 sobre lenguas oficiales.'},
  2370:{topics:['A1-1','A2-I-1'],docs:['constitution'],detail:'Estados excepcionales y suspensión constitucional; competencias, mayorías y responsabilidad se cotejan en el artículo 116 vigente.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const calls=['https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938','https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262'];
assert.deepEqual(log.cambios.map(c=>c.id),[2366,2367,2368,2369,2370]);
for(const change of log.cambios){const q=bank.preguntas.find(x=>x.id===change.id),m=mapping[change.id];assert.ok(q?.revision&&m,`Falta pregunta o cotejo ${change.id}`);assert.ok(m.topics.every(x=>official.has(x)),`Tema oficial inexistente ${change.id}`);q.clasificacion.A1=m.topics.filter(x=>x.startsWith('A1-'));q.clasificacion.A2=m.topics.filter(x=>x.startsWith('A2-'));const curriculum=`${m.docs.map(k=>docs[k].label).join(' ')} ${m.detail}`,links=m.docs.map(k=>docs[k].url).join('; ');const note=`Cotejo curricular: ${curriculum} Documentos Drive: ${links}. Correspondencia contrastada con revision/temario-oficial.json y anexos de las convocatorias A1/A2 GSI BOE-A-2025-25938 y BOE-A-2025-26262 (${calls.join('; ')}). Academy se usa como encuadre curricular; la literalidad legal y los datos de certificación se verifican en BOE/ISO.`;q.clasificacion.bloque_academia=`${links} — ${curriculum}`;q.clasificacion.nota=note;q.revision.observaciones+=` ${note}`;q.comentarios=q.revision.observaciones;change.actualizada=structuredClone(q);}
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');console.log('Cotejo curricular del lote 411 completado.');
