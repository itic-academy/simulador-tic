const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bankPath=path.join(__dirname,'..','preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-414.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 social:{url:'https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk',label:'ITIC Academy, bloque 06 «Economía, sociedad, empleo y transformación digital», versión 2026.2: estructura social, empleo, políticas y transformación socioeconómica.'},
 admin:{url:'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk',label:'ITIC Academy, bloque 03 «Actuación administrativa y Administración digital», versión 2026: sociedad de la información España-UE y régimen de administración digital.'},
 constitution:{url:'https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk',label:'ITIC Academy, bloque 01 «Constitución, organización del Estado y AGE», versión 2026.2: organización y marco general de la Administración General del Estado.'},
 budget:{url:'https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk',label:'ITIC Academy, bloque 05 «Contratación, presupuestos y compra TIC», versión 2026: políticas presupuestarias e instrumentos económicos.'}
};
const mapping={
 2381:{topics:['A1-14','A1-16'],docs:['social'],detail:'Política económica europea, cohesión, empleo y políticas sociales. No se fuerza correspondencia A2 porque su programa no enumera este fondo.'},
 2382:{topics:['A1-18','A1-19'],docs:['social'],detail:'Impacto de las TIC en la sociedad, la economía y el mercado de trabajo.'},
 2383:{topics:['A1-22'],docs:['admin'],detail:'Legislación española y europea de sociedad de la información y administración electrónica; el encuadre académico no sustituye a la Ley 56/2007.'},
 2384:{topics:['A1-8','A1-22','A2-I-8','A2-I-9'],docs:['admin'],detail:'Relación de las personas con la Administración, procedimiento y gestión electrónica de documentos que obran en poder de las Administraciones.'},
 2385:{topics:['A1-4','A1-24','A2-I-8'],docs:['constitution','admin'],detail:'Organización y régimen jurídico de la AGE y marco del empleo público. La ley de altos cargos tiene un régimen específico y no se equipara sin matices al estatuto ordinario de funcionarios.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const calls=['https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938','https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262'];
assert.deepEqual(log.cambios.map(c=>c.id),[2381,2382,2383,2384,2385]);
for(const change of log.cambios){const q=bank.preguntas.find(x=>x.id===change.id),m=mapping[change.id];assert.ok(q?.revision&&m,`Falta pregunta/cotejo ${change.id}`);assert.ok(m.topics.every(x=>official.has(x)),`Tema oficial inexistente ${change.id}`);q.clasificacion.A1=m.topics.filter(x=>x.startsWith('A1-'));q.clasificacion.A2=m.topics.filter(x=>x.startsWith('A2-'));const curriculum=`${m.docs.map(k=>docs[k].label).join(' ')} ${m.detail}`,links=m.docs.map(k=>docs[k].url).join('; ');const note=`Cotejo curricular: ${curriculum} Materiales Drive: ${links}. Correspondencia comprobada en revision/temario-oficial.json y anexos de las convocatorias A1/A2 GSI BOE-A-2025-25938 y BOE-A-2025-26262 (${calls.join('; ')}). La academia contextualiza el estudio; la respuesta se verifica en las fuentes primarias.`;q.clasificacion.bloque_academia=links;q.clasificacion.nota=note;q.revision.observaciones+=` ${note}`;q.comentarios=q.revision.observaciones;change.actualizada=structuredClone(q);}
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');console.log('Cotejo curricular del lote 414 completado.');
