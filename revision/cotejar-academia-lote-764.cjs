const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-764.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const convA1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',convA2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy={
 os:{url:'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk',name:'ITIC Academy, bloque «Sistemas operativos», versión 2026.1'},
 si:{url:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',name:'ITIC Academy, bloque 30 «Tecnologías de sistemas de la información», versión 2026.1'}
};
const map={
 4141:{a1:['60'],a2:['IV-1'],sources:[['os','§§6.9 y 7.8 cubren shell UNIX/Linux y herramientas de administración; encaje con el tema A1 de UNIX/Linux y administración A2.']]},
 4142:{a1:['60'],a2:['IV-1'],sources:[['os','Apartados de administración Linux/UNIX y herramientas de sistema; se contrasta el comando concreto con la página man de ldd, incluida la advertencia de seguridad.']]},
 4143:{a1:['65','77'],a2:['III-12'],sources:[['si','§§2.1 y 2.4 tratan HTML, JavaScript y ECMAScript; la Academy distingue marcado, núcleo del lenguaje y APIs del navegador.']]},
 4144:{a1:['66'],a2:['III-11'],sources:[['si','§7.2 explica CLR, CIL, CTS y CLS, diferenciando el código intermedio de las especificaciones y del entorno de ejecución.']]},
 4145:{a1:['93'],a2:['III-9'],sources:[['si','§§1 y 6.4 cubren arquitectura por capas, Spring MVC y persistencia; cotejo de la separación entre modelo/controlador y acceso a datos.']]}
};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q?.revision&&q.clasificacion&&m,'Falta revisión/cotejo '+c.id);for(const id of [...m.a1.map(n=>'A1-'+n),...m.a2.map(n=>'A2-'+n)])assert.ok(official.has(id),'Tema desconocido '+id);q.clasificacion.A1=m.a1.map(n=>'A1-'+n);q.clasificacion.A2=m.a2.map(n=>'A2-'+n);q.clasificacion.bloque_academia=m.sources.map(([key,note])=>academy[key].name+'; '+note).join(' ')+` Correspondencia contrastada con la convocatoria oficial A1 GSI 2025, anexo I (${m.a1.map(n=>'tema '+n).join(', ')}), y A2 GSI 2025, anexo IX (${m.a2.map(n=>'tema '+n).join(', ')}).`;q.clasificacion.nota='Cotejo curricular directo del temario académico disponible y clasificación según los anexos oficiales A1/A2; los materiales de Academy aportan contexto, no sustituyen las fuentes técnicas primarias.';q.revision.observaciones+=' '+q.clasificacion.bloque_academia;const refs=[...m.sources.map(([key,referencia])=>({url:academy[key].url,referencia:academy[key].name+'; '+referencia})),{url:convA1,referencia:'Convocatoria oficial A1 GSI 2025, anexo I: '+m.a1.map(n=>'tema '+n).join(', ')+'.'},{url:convA2,referencia:'Convocatoria oficial A2 GSI 2025, anexo IX: '+m.a2.map(n=>'tema '+n).join(', ')+'.'}];for(const f of refs)if(!q.revision.fuentes.some(x=>x.url===f.url))q.revision.fuentes.push(f);c.actualizada=structuredClone(q)}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo Academy y convocatorias aplicado a 4141–4145.');
