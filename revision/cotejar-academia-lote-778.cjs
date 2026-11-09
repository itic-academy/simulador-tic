const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-778.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const boeA1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',boeA2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy={
 perf:{url:'https://drive.google.com/file/d/1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ/view?usp=drivesdk',name:'ITIC Academy, arquitectura SOA y requisitos no funcionales, bloque 28, versión 2026.1'},
 software:{url:'https://drive.google.com/file/d/1Og6yI-YaZ48UA3pBT-HQhTh7TfvdPW_C/view?usp=drivesdk',name:'ITIC Academy, protección jurídica, licencias y control del software, tema 43, versión 2026.1'},
 interoperability:{url:'https://drive.google.com/file/d/1yCTWUEye96mUcx_SwiEJshldD-sV2hXS/view?usp=drivesdk',name:'ITIC Academy, bloque Interoperabilidad de sistemas, versión 2026.2'},
 security:{url:'https://drive.google.com/file/d/18tJzWuBHyd4FbkzQIE5fIbSCRdlrt_1U/view?usp=drivesdk',name:'ITIC Academy, seguridad, ENS y ciberseguridad, versión 2026.2'}
};
const map={
 4211:{a1:['91'],a2:['IV-4'],sources:[['perf','Tema A1-91: requisitos no funcionales y rendimiento; bloque A2-IV-4: evaluación/monitorización del rendimiento y gestión de capacidad.'] ]},
 4212:{a1:['43'],a2:['II-14'],sources:[['software','Tema A1-43 y A2-II-14; capítulo de derechos de explotación y referencia expresa al artículo 99 TRLPI.']]},
 4213:{a1:['45'],a2:['I-9'],sources:[['interoperability','Temas A1-45/46 y A2-I-9: ENI, dimensiones semántica/organizativa/técnica/temporal; se contrasta la definición literal con el RD 4/2010.']]},
 4214:{a1:['45'],a2:['I-9'],sources:[['interoperability','Tema A1-45 y A2-I-9: principios básicos y artículos 4–7 del ENI.']]},
 4215:{a1:['48'],a2:['I-9'],sources:[['security','Tema A1-48 y A2-I-9, ENS y medida vigente op.cont.2 del RD 311/2022; se coteja la categoría aplicable con la tabla del anexo II.']]}
};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q?.revision&&q.clasificacion&&m,'Falta revisión/cotejo '+c.id);for(const id of [...m.a1.map(n=>'A1-'+n),...m.a2.map(n=>'A2-'+n)])assert.ok(official.has(id),'Tema oficial inexistente: '+id);q.clasificacion.A1=m.a1.map(n=>'A1-'+n);q.clasificacion.A2=m.a2.map(n=>'A2-'+n);q.clasificacion.bloque_academia=m.sources.map(([key,note])=>academy[key].name+'; '+note).join(' ')+` Correspondencia oficial: ${m.a1.map(n=>'A1 tema '+n).join(', ')}; ${m.a2.map(n=>'A2 tema '+n).join(', ')}.`;q.clasificacion.nota='El material académico se usa para cotejar cobertura y terminología; la respuesta se contrasta además con las fuentes institucionales vigentes citadas en la ficha.';q.revision.observaciones+=' Cotejo académico: '+q.clasificacion.bloque_academia;const refs=[...m.sources.map(([key,referencia])=>({url:academy[key].url,referencia:academy[key].name+'; '+referencia})),{url:boeA1,referencia:'Convocatoria A1 GSI 2025, anexo I: '+m.a1.map(n=>'tema '+n).join(', ')},{url:boeA2,referencia:'Convocatoria A2 GSI 2025, anexo IX: '+m.a2.map(n=>'tema '+n).join(', ')}];for(const f of refs)if(!q.revision.fuentes.some(x=>x.url===f.url))q.revision.fuentes.push(f);c.actualizada=structuredClone(q)}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo académico y de programas A1/A2 aplicado a 4211–4215.');
