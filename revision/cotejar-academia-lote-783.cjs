const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-783.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const academy={
 crypto:{url:'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',name:'ITIC Academy, bloque 36, Seguridad, criptografía, identificación y firma, versión 2026.1.'},
 images:{url:'https://drive.google.com/file/d/1xTMCpPmwNi8hpb0nZ3sMqpgvrhLXT-yf/view?usp=drivesdk',name:'ITIC Academy, bloque de imágenes, OCR, biometría y gestión de contenidos, versión 2026.1.'},
 agile:{url:'https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view?usp=drivesdk',name:'ITIC Academy, bloque de metodologías ágiles y ciclo de vida, versión 2026.1.'}
};
const boeA1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',boeA2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const map={
 4236:{a1:['79','80'],a2:['IV-12'],academy:[['crypto','Los apartados de criptografía asimétrica separan clave pública/privada, establecimiento de secreto de sesión mediante DH/KEM y firma; cotejo curricular, hechos contrastados con NIST.']]},
 4237:{a1:['81'],a2:['I-6'],academy:[['crypto','El bloque cubre identificación/firma y servicios de confianza; el tramo sancionador se verifica directamente en el artículo 19 de la Ley 6/2020, no se toma el PDF académico como autoridad legal.']]},
 4238:{a1:['83'],a2:['II-16'],academy:[['images','El apartado 2.3 del PDF incluye TWAIN, WIA, SANE e ISIS dentro de interfaces de adquisición; las características concretas se contrastan con las especificaciones de los proyectos/fabricantes.']]},
 4239:{a1:['86','87'],a2:['III-1','III-2'],academy:[['agile','El bloque contiene ciclo de vida, planificación y MÉTRICA v3, incluyendo PSI y procesos ASI/DSI/CSI/IAS/MSI; se distingue la planificación organizativa del ciclo de un sistema concreto.']]},
 4240:{a1:['37'],a2:['III-2'],academy:[['agile','El bloque cubre Kanban y advierte que Trello es herramienta, no metodología; la estructura exacta tablero/lista/tarjeta se verifica con documentación Atlassian.']]}
};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q?.revision&&q.clasificacion&&m,'Falta revisión/cotejo '+c.id);
 const a1=m.a1.map(n=>'A1-'+n),a2=m.a2.map(n=>'A2-'+n);for(const id of [...a1,...a2])assert.ok(official.has(id),'Tema oficial inexistente: '+id);
 q.clasificacion.A1=a1;q.clasificacion.A2=a2;
 q.clasificacion.bloque_academia=m.academy.map(([key,note])=>`${academy[key].name} ${note}`).join(' ')+` Correspondencia oficial: ${a1.join(', ')}; ${a2.join(', ')}.`;
 q.clasificacion.nota='Los documentos de ITIC Academy se usan para cotejar cobertura curricular, no como autoridad técnica o normativa.';
 q.revision.observaciones+=' Cotejo curricular Academy/BOE: '+q.clasificacion.bloque_academia;
 for(const [key,note] of m.academy){const f={url:academy[key].url,referencia:`${academy[key].name} ${note}`};if(!q.revision.fuentes.some(x=>x.url===f.url))q.revision.fuentes.push(f)}
 for(const f of [{url:boeA1,referencia:`Convocatoria A1 GSI 2025, anexo I; temas ${m.a1.join(', ')}.`},{url:boeA2,referencia:`Convocatoria A2 GSI 2025, anexo IX; temas ${m.a2.join(', ')}.`}])if(!q.revision.fuentes.some(x=>x.url===f.url))q.revision.fuentes.push(f);
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo Academy/BOE lote 783 aplicado: '+log.cambios.length+' preguntas.');
