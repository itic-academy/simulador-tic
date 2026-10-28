const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bankPath=path.join(__dirname,'..','preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-413.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 interop:{url:'https://drive.google.com/file/d/1zdx_PRBfKM9tRy61Boz_yPekU-D-b_6S/view?usp=drivesdk',label:'ITIC Academy, Interoperabilidad de Sistemas, versión 2026.2: SIR y servicios comunes, como encuadre curricular; la respuesta jurídica se contrasta con el artículo 60 del RD 203/2021.'},
 budget:{url:'https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk',label:'ITIC Academy, bloque 05 «Contratación, presupuestos y compra TIC», versión 2026: estructura presupuestaria y clasificación del gasto. No se atribuye al temario estatal el código autonómico 609.05.'},
 equality:{url:'https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk',label:'ITIC Academy, bloque 06 «Economía, sociedad, empleo y transformación digital», versión 2026.2: epígrafe A1-16 y A2-O5 incluyen políticas de igualdad, discapacidad y dependencia.'}
};
const mapping={
 2376:{topics:['A1-46','A1-49','A2-I-9','A2-I-10'],docs:['interop'],detail:'Interoperabilidad de registros y servicios comunes de interconexión entre Administraciones.'},
 2377:{topics:['A1-12'],docs:['budget'],detail:'Clasificación económica del gasto dentro del tema oficial A1 sobre estructura y clasificación presupuestaria. El A2 no contiene un epígrafe de clasificación presupuestaria de la Junta de Andalucía; no se fuerza una equivalencia.'},
 2378:{topics:['A1-16','A2-I-5'],docs:['equality'],detail:'Políticas de igualdad entre mujeres y hombres y su desarrollo jurídico.'},
 2379:{topics:['A1-16','A2-I-5'],docs:['equality'],detail:'Planificación y evaluación de las políticas de igualdad en la AGE.'},
 2380:{topics:['A1-16','A2-I-5'],docs:['equality'],detail:'Discapacidad e iniciativas europeas de derechos e inclusión, incluidas en el epígrafe de discapacidad.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const calls=['https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938','https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262'];
assert.deepEqual(log.cambios.map(c=>c.id),[2376,2377,2378,2379,2380]);
for(const change of log.cambios){const q=bank.preguntas.find(x=>x.id===change.id),m=mapping[change.id];assert.ok(q?.revision&&m,`Falta pregunta/cotejo ${change.id}`);assert.ok(m.topics.every(x=>official.has(x)),`Tema oficial inexistente ${change.id}`);q.clasificacion.A1=m.topics.filter(x=>x.startsWith('A1-'));q.clasificacion.A2=m.topics.filter(x=>x.startsWith('A2-'));const curriculum=`${m.docs.map(k=>docs[k].label).join(' ')} ${m.detail}`,links=m.docs.map(k=>docs[k].url).join('; ');const note=`Cotejo curricular: ${curriculum} Materiales Drive: ${links}. Correspondencia contrastada con revision/temario-oficial.json y anexos de las convocatorias A1/A2 GSI BOE-A-2025-25938 y BOE-A-2025-26262 (${calls.join('; ')}). Academy aporta contexto de estudio; la clave se apoya en la fuente primaria indicada.`;q.clasificacion.bloque_academia=links;q.clasificacion.nota=note;q.revision.observaciones+=` ${note}`;q.comentarios=q.revision.observaciones;change.actualizada=structuredClone(q);}
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');console.log('Cotejo curricular del lote 413 completado.');
