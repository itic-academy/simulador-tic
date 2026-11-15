const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1289.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  projects:'https://drive.google.com/file/d/1DMz3yKo5YBTwNecdydOqWB9CxkyrQZ10/view?usp=drivesdk',
  budget:'https://drive.google.com/file/d/1-JS2zo4isD-ee9n3qV7aL09eVo3SFvbO/view?usp=drivesdk',
  gis:'https://drive.google.com/file/d/1tVfcKtzyXWLEcINm_dwDActD-kLfpKva/view?usp=drivesdk',
  servers:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',
  itil:'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk'
};
const map = {
  6766:{a1:[35,36,95],a2:['III-2'],urls:[docs.projects],desc:'ITIC Academy, Tema 036/094/098, Gantt, PERT y estimación: cotejo de la cobertura de técnicas predictivas y gestión de proyectos; la asignación de técnicas a actividades concretas se contrasta con MÉTRICA v3.'},
  6767:{a1:[12],a2:[],urls:[docs.budget],desc:'ITIC Academy, Tema 012, Presupuestos, edición v3.2: cotejo curricular de modificaciones presupuestarias; la enumeración aplicable se comprueba en el artículo 51 de la Ley 47/2003.'},
  6768:{a1:[74],a2:[],urls:[docs.gis],desc:'ITIC Academy, Tema 074, Sistemas de Información Geográfica, edición 2026: cotejo curricular del modelo vectorial y las relaciones espaciales; la precisión del concepto y el alcance dependiente de implementación se contrasta con Esri y OGC.'},
  6769:{a1:[53],a2:['IV-6'],urls:[docs.servers],desc:'ITIC Academy, bloque 26, hardware, servidores y CPD, edición 2026: cotejo del contexto de clústeres y alta disponibilidad; requisitos y comandos se comprueban directamente en Microsoft Learn.'},
  6770:{a1:[106],a2:[],urls:[docs.itil],desc:'ITIC Academy, bloque 41, ITIL y COBIT, edición 2026: cobertura directa de gestión de servicios y SLA. Se conserva únicamente A1-106: el temario A2 no contiene un epígrafe equivalente que justifique una etiqueta forzada.'}
};
const marker = 'Cotejo curricular ITIC Academy:';
const trim = value => {
  const raw=(value||'').trim(), i=raw.indexOf(marker);
  return (i<0?raw:raw.slice(0,i)).trim().replace(/^Bloque de academia pendiente de cotejo\. Una lista vacía no implica exclusión del programa\.?\s*/,'').trim();
};
for(const change of log.cambios){
  const q=bank.preguntas.find(item=>item.id===change.id),m=map[change.id];
  assert.ok(q&&m,'Falta ID '+change.id);
  q.clasificacion.A1=m.a1.map(n=>'A1-'+n);
  q.clasificacion.A2=m.a2.map(n=>'A2-'+n);
  const topics=[...q.clasificacion.A1,...q.clasificacion.A2].join('/')||'sin epígrafe A2 directo';
  q.clasificacion.bloque_academia=m.desc;
  const note=marker+' '+m.desc+' Correspondencia oficial: '+topics+'. El material académico se usa para cotejar la cobertura curricular; las afirmaciones se contrastan con las fuentes primarias citadas.';
  q.clasificacion.nota=(trim(q.clasificacion.nota)+' '+note).trim();
  q.comentarios=(trim(q.comentarios)+' '+note).trim();
  q.revision.observaciones=(trim(q.revision.observaciones)+' '+note).trim();
  const urls=new Set(m.urls);
  q.revision.fuentes=q.revision.fuentes.filter(source=>!urls.has(source.url));
  for(const url of m.urls) q.revision.fuentes.push({url:url,referencia:'ITIC Academy/Drive: '+m.desc});
  change.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular aplicado a los IDs 6766–6770.');
