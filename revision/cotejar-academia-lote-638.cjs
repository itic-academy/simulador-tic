const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const dir=__dirname,bankPath=path.join(dir,'..','preguntas_preparatic.json'),logPath=path.join(dir,'cambios-lote-638.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
  soa:{url:'https://drive.google.com/file/d/1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ/view?usp=drivesdk',title:'ITIC Academy, bloque 28 Arquitectura SOA y requisitos no funcionales, versión 2026.1'},
  hardware:{url:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',title:'ITIC Academy, bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1'},
  net:{url:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',title:'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información, versión 2026.1'}
};
const mappings={
  3506:{a1:[58],a2:['II-6','III-12'],use:[docs.soa],detail:'El bloque 28 cubre procesamiento cooperativo, arquitectura cliente-servidor, SOA y servicios web; la pregunta se ubica en los temas oficiales A1-58 y A2-II-6/III-12.'},
  3507:{a1:[69],a2:['II-14'],use:[],detail:'La búsqueda en Drive no localizó un bloque académico 2026 dedicado específicamente a las cuatro libertades GNU. Se deja constancia de la cobertura académica no localizada; la clasificación sí corresponde al tema oficial A1-69/A2-II-14 sobre software libre y licencias.'},
  3508:{a1:[52],a2:['II-1'],use:[docs.hardware],detail:'El bloque 26 incluye arquitectura de hardware, servidores y sistemas de altas prestaciones; la definición de anchura del bus se verifica con documentación técnica del fabricante y queda encuadrada en A1-52/A2-II-1.'},
  3509:{a1:[52],a2:['II-1'],use:[docs.hardware],detail:'El bloque 26 incluye sistemas escalables y de altas prestaciones, con SMP/NUMA/MPP como contenido de examen; clasificación A1-52/A2-II-1.'},
  3510:{a1:[66],a2:['III-11'],use:[docs.net],detail:'El bloque 30 incluye expresamente el entorno Microsoft .NET (A1-66) y su relación con el tema A2-III-11 sobre la plataforma .NET. La distinción entre .NET y .NET Framework se contrasta con Microsoft Learn.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(dir,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const examA1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',examA2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
  const q=bank.preguntas.find(x=>x.id===c.id),m=mappings[c.id];assert.ok(q?.revision&&m,`Falta revisión o cotejo de ${c.id}`);
  for(const id of [...m.a1.map(n=>`A1-${n}`),...m.a2.map(n=>`A2-${n}`)])assert.ok(official.has(id),`Tema oficial inexistente: ${id}`);
  const academy=m.use.length?`${m.use.map(d=>`${d.title}; ${m.detail}; ${d.url}`).join(' | ')}`:`No se localizó unidad académica específica tras búsqueda en Drive. ${m.detail}`;
  q.clasificacion={...q.clasificacion,A1:m.a1.map(n=>`A1-${n}`),A2:m.a2.map(n=>`A2-${n}`),bloque_academia:academy,estado:'revisada',nota:'Correspondencia cotejada con temario ITIC Academy accesible en Drive cuando se localizó cobertura directa, programas oficiales de convocatoria y revision/temario-oficial.json; una ausencia documental se declara sin inferir que el contenido no forme parte del estudio.'};
  q.revision.observaciones+=` Cotejo academia: ${m.detail} Correspondencia oficial: ${[...m.a1.map(n=>`A1-${n}`),...m.a2.map(n=>`A2-${n}`)].join(', ')}.`;
  for(const d of m.use)q.revision.fuentes.push({url:d.url,referencia:`${d.title}. ${m.detail}`});
  q.revision.fuentes.push({url:examA1,referencia:'Convocatoria BOE-A-2025-25938, anexo I, epígrafes A1 cotejados con revision/temario-oficial.json.'},{url:examA2,referencia:'Convocatoria BOE-A-2025-26262, anexo IX (A2 GSI), epígrafes cotejados con revision/temario-oficial.json.'});
  c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo Academy, BOE y clasificación completado para el lote 638.');
