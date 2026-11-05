const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-768.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const boeA1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',boeA2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy={
 db:{url:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',name:'ITIC Academy, bloque «Bases de datos, SQL y modelado de datos», versión 2026.1'},
 systems:{url:'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk',name:'ITIC Academy, bloque 38 «Análisis, diseño y construcción de sistemas de información», versión 2026.1'},
 agile:{url:'https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view?usp=drivesdk',name:'ITIC Academy, bloque 15 «Metodologías ágiles y ciclo de vida», versión 2026.1'},
 estimate:{url:'https://drive.google.com/file/d/1DMz3yKo5YBTwNecdydOqWB9CxkyrQZ10/view?usp=drivesdk',name:'ITIC Academy, «Tema 036, 094, 098 - Gantt, Pert, Estimación», material anterior consultado en Drive'}
};
const map={
 4161:{a1:['89'],a2:['III-4'],sources:[['db','§§4.2–4.3 y 4.6: relaciones entidad-relación, cardinalidad, participación y lectura de multiplicidades.']]},
 4162:{a1:['95'],a2:['III-6'],sources:[['systems','apartados de MÉTRICA v3 y requisitos/documentación de usuario e implantación, construcción y formación.']]},
 4163:{a1:['95'],a2:['III-6'],sources:[['systems','CSI 7 y roles de formación/usuarios finales en construcción de sistemas de información.']]},
 4164:{a1:['99'],a2:['III-2'],sources:[['estimate','§6.4, COCOMO: documenta los tres modos clásicos orgánico, semidesacoplado y empotrado; el material es anterior y se utiliza solo para contextualizar el epígrafe, no como autoridad técnica.']]},
 4165:{a1:['96'],a2:['III-7','III-8'],sources:[['systems','apartados de pruebas y ciclo construcción-despliegue/implantación; contexto curricular de validación antes de puesta en producción.']]}
};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q?.revision&&q.clasificacion&&m,'Falta revisión/cotejo '+c.id);for(const id of [...m.a1.map(n=>'A1-'+n),...m.a2.map(n=>'A2-'+n)])assert.ok(official.has(id),'Tema oficial inexistente: '+id);q.clasificacion.A1=m.a1.map(n=>'A1-'+n);q.clasificacion.A2=m.a2.map(n=>'A2-'+n);q.clasificacion.bloque_academia=m.sources.map(([key,note])=>academy[key].name+'; '+note).join(' ')+` Correspondencia comprobada en convocatoria A1 GSI 2025, anexo I (${m.a1.map(n=>'tema '+n).join(', ')}), y convocatoria A2 GSI 2025, anexo IX (${m.a2.map(n=>'tema '+n).join(', ')}).`;q.clasificacion.nota='La academia se usa para situar el contenido en el temario, no como prueba de corrección técnica; las fuentes oficiales/técnicas citadas en revision.fuentes fundamentan la respuesta.';q.revision.observaciones+=' '+q.clasificacion.bloque_academia;const refs=[...m.sources.map(([key,referencia])=>({url:academy[key].url,referencia:academy[key].name+'; '+referencia})),{url:boeA1,referencia:'Convocatoria oficial A1 GSI 2025, anexo I: '+m.a1.map(n=>'tema '+n).join(', ')+'.'},{url:boeA2,referencia:'Convocatoria oficial A2 GSI 2025, anexo IX: '+m.a2.map(n=>'tema '+n).join(', ')+'.'}];for(const f of refs)if(!q.revision.fuentes.some(x=>x.url===f.url))q.revision.fuentes.push(f);c.actualizada=structuredClone(q)}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo directo en Drive y programas BOE aplicado a 4161–4165.');
