const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-780.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const boeA1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',boeA2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy={
 hardware:{url:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',name:'ITIC Academy, bloque Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026: sección CPU/ISA y arquitecturas.'},
 os:{url:'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk',name:'ITIC Academy, bloque Sistemas Operativos, versión 2026.1: fundamentos y administración de sistemas Microsoft.'},
 network:{url:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',name:'ITIC Academy, bloque Redes, versión 2026: servicios e interoperabilidad de red.'},
 db:{url:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',name:'ITIC Academy, bloque Bases de datos, SQL y modelado de datos, versión 2026.1: ANSI/SPARC, SQL y vistas.'}
};
const map={
 4221:{a1:['41'],a2:['II-1'],sources:[['hardware','La sección CPU/ISA cubre arquitectura y componentes de ordenadores; el ajuste conceptual del IR se verifica aparte con documentación del fabricante.']]},
 4222:{a1:['61'],a2:['II-2'],sources:[['os','Los temas A1-61 y A2-II-2 cubren sistemas operativos Microsoft; el reactivo se mantiene únicamente como contenido histórico de Windows Server 2012.']]},
 4223:{a1:['61'],a2:['II-2','IV-1'],sources:[['os','Administración y servicios de Windows Server, incluyendo el antiguo Server for NIS, RRAS y componentes de sistema.'],['network','El bloque de redes contextualiza los servicios NFS y el papel de protocolos de interoperabilidad; no convierte al material de academia en fuente técnica primaria.']]},
 4224:{a1:['63','64'],a2:['II-5'],sources:[['db','El bloque cubre el modelo ANSI/SPARC, el lenguaje SQL y su sección de vistas; la definición concreta se contrasta con documentación del SGBD.']]},
 4225:{a1:['64'],a2:['II-5'],sources:[['db','El encaje curricular es SQL y bases de datos relacionales; FSQL se conserva como extensión académica específica, no como SQL normalizado ni contenido literal del temario.']]}
};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q?.revision&&q.clasificacion&&m,'Falta revisión/cotejo '+c.id);
 for(const id of [...m.a1.map(n=>'A1-'+n),...m.a2.map(n=>'A2-'+n)])assert.ok(official.has(id),'Tema oficial inexistente: '+id);
 q.clasificacion.A1=m.a1.map(n=>'A1-'+n);q.clasificacion.A2=m.a2.map(n=>'A2-'+n);
 q.clasificacion.bloque_academia=m.sources.map(([key,note])=>academy[key].name+' '+note).join(' ')+` Correspondencia oficial: ${m.a1.map(n=>'A1 tema '+n).join(', ')}; ${m.a2.map(n=>'A2 tema '+n).join(', ')}.`;
 q.clasificacion.nota='El material de ITIC Academy se utiliza únicamente para cotejar cobertura y terminología; las afirmaciones se contrastan con manuales de fabricante, documentación del sistema o literatura académica primaria.';
 q.revision.observaciones+=' Cotejo académico: '+q.clasificacion.bloque_academia;
 const refs=[...m.sources.map(([key,reference])=>({url:academy[key].url,referencia:academy[key].name+' '+reference})),{url:boeA1,referencia:'Convocatoria A1 GSI 2025, anexo I: '+m.a1.map(n=>'tema '+n).join(', ')},{url:boeA2,referencia:'Convocatoria A2 GSI 2025, anexo IX: '+m.a2.map(n=>'tema '+n).join(', ')}];
 for(const f of refs)if(!q.revision.fuentes.some(x=>x.url===f.url))q.revision.fuentes.push(f);
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo académico y de programas A1/A2 aplicado a 4221–4225.');
