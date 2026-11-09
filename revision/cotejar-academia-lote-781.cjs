const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-781.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const boeA1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',boeA2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy={
 tech:{url:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',name:'ITIC Academy, bloque 30 Tecnologías de sistemas de información, versión 2026; entornos web, .NET y Java.'},
 mobile:{url:'https://drive.google.com/file/d/1nXa2jkiUqpu31smkt5D8WswcTgEN7XlB/view?usp=drivesdk',name:'ITIC Academy, bloque 47 Aplicaciones móviles, versión 2026.'},
 license:{url:'https://drive.google.com/file/d/1Og6yI-YaZ48UA3pBT-HQhTh7TfvdPW_C/view?usp=drivesdk',name:'ITIC Academy, bloque 18 Protección jurídica del software, licencias y DRM, versión 2026.'}
};
const map={
 4226:{a1:['65'],a2:['II-9'],sources:[['tech','El bloque de tecnologías de sistemas encuadra scripts y desarrollo web; el carácter histórico de VBScript y su motor se verifica con documentación de Microsoft.']]},
 4227:{a1:['66'],a2:['III-11'],sources:[['tech','El bloque identifica el entorno de desarrollo .NET y tecnologías asociadas; la API y comportamiento de LINQ to DataSet se contrastan con Microsoft Learn.']]},
 4228:{a1:['67','124'],a2:['II-3'],sources:[['tech','El bloque incluye entorno Java; Java ME se coteja con la fuente Oracle.'],['mobile','El bloque de aplicaciones móviles contextualiza las plataformas y clases de dispositivos portátiles; el mapeo PDA/J2ME se comprueba con fuentes oficiales de Oracle.']]},
 4229:{a1:['43','69'],a2:['II-14'],sources:[['license','El bloque 18 trata protección jurídica, software libre y licencias; la licencia del navegador se verifica en los avisos de Mozilla.']]},
 4230:{a1:['43','69'],a2:['II-14'],sources:[['license','El bloque 18 cubre licencias de software libre/propietario y protección jurídica; la obligación precisa depende del texto oficial LGPL y del modo de enlace.']]}
};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q?.revision&&q.clasificacion&&m,'Falta revisión/cotejo '+c.id);
 for(const id of [...m.a1.map(n=>'A1-'+n),...m.a2.map(n=>'A2-'+n)])assert.ok(official.has(id),'Tema oficial inexistente: '+id);
 q.clasificacion.A1=m.a1.map(n=>'A1-'+n);q.clasificacion.A2=m.a2.map(n=>'A2-'+n);
 q.clasificacion.bloque_academia=m.sources.map(([key,note])=>academy[key].name+' '+note).join(' ')+` Correspondencia oficial: ${m.a1.map(n=>'A1 tema '+n).join(', ')}; ${m.a2.map(n=>'A2 tema '+n).join(', ')}.`;
 q.clasificacion.nota='Los materiales de ITIC Academy se usan para cotejar cobertura curricular; los hechos se contrastan con documentación de Microsoft, Oracle, Mozilla o la Free Software Foundation.';
 q.revision.observaciones+=' Cotejo académico: '+q.clasificacion.bloque_academia;
 for(const [key,reference] of m.sources){const f={url:academy[key].url,referencia:academy[key].name+' '+reference};if(!q.revision.fuentes.some(x=>x.url===f.url))q.revision.fuentes.push(f)}
 for(const f of [{url:boeA1,referencia:'Convocatoria A1 GSI 2025, anexo I: '+m.a1.map(n=>'tema '+n).join(', ')},{url:boeA2,referencia:'Convocatoria A2 GSI 2025, anexo IX: '+m.a2.map(n=>'tema '+n).join(', ')}])if(!q.revision.fuentes.some(x=>x.url===f.url))q.revision.fuentes.push(f);
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo Academy/BOE lote 781 aplicado: '+log.cambios.length+' preguntas.');
