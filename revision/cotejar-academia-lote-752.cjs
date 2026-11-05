const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-752.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const boeA1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',boeA2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy={url:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',name:'ITIC Academy, bloque 29 «Bases de datos, SQL y modelado de datos», versión 2026.1 (31/08/2026)'};
const map={
 4081:{a1:['64'],a2:['II-5'],a:'§9.2 ODBC/JDBC: conectividad, arquitectura del driver y middleware.'},
 4082:{a1:['64'],a2:['II-5'],a:'§2.3 y §5.13 cubren restricciones, integridad y acciones SQL.'},
 4083:{a1:['64'],a2:['II-5'],a:'§9.2 ODBC/JDBC: drivers y protocolos de conectividad.'},
 4084:{a1:['64'],a2:['II-5'],a:'§2.3 y §5.13 cubren integridad referencial y restricciones declarativas.'},
 4085:{a1:['64'],a2:['II-5','III-4'],a:'§3.4 aborda álgebra relacional; los temas oficiales incluyen modelo lógico relacional e interoperabilidad/modelo relacional.'}
};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q?.revision&&q.clasificacion&&m,'Falta revisión/cotejo '+c.id);for(const id of [...m.a1.map(n=>'A1-'+n),...m.a2.map(n=>'A2-'+n)])assert.ok(official.has(id),'Tema desconocido '+id);q.clasificacion.A1=m.a1.map(n=>'A1-'+n);q.clasificacion.A2=m.a2.map(n=>'A2-'+n);q.clasificacion.bloque_academia=academy.name+'; '+m.a+' Correspondencia curricular contrastada con convocatoria A1 GSI 2025, anexo I (tema(s) '+m.a1.join(', ')+'), y convocatoria A2 GSI 2025, anexo IX (tema(s) '+m.a2.join(', ')+').';q.clasificacion.nota='Cotejo temático curricular. Para la norma de restricciones y SQL:99 se cita ISO/IEC; la tipología JDBC queda identificada como clasificación arquitectónica.';q.revision.observaciones+=' '+q.clasificacion.bloque_academia;for(const f of [{url:academy.url,referencia:academy.name+'; cotejo directo del índice y los apartados 2.3/3.4/5.13/9.2 pertinentes.'},{url:boeA1,referencia:'Convocatoria oficial A1 GSI 2025, anexo I: tema(s) '+m.a1.join(', ')+'.'},{url:boeA2,referencia:'Convocatoria oficial A2 GSI 2025, anexo IX: tema(s) '+m.a2.join(', ')+'.'}])if(!q.revision.fuentes.some(x=>x.url===f.url))q.revision.fuentes.push(f);c.actualizada=structuredClone(q)}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo directo de ITIC Academy bloque 29 y clasificación A1/A2 aplicados a 4081–4085.');
