const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-755.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const boeA1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',boeA2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy={url:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',name:'ITIC Academy, bloque 29 «Bases de datos, SQL y modelado de datos», versión 2026.1 (31/08/2026)'};
const map={
 4096:{a1:['64'],a2:['II-5','III-4'],a:'§4.7 trata el paso conceptual-lógico; §§2.2–2.3 y diseño relacional sustentan la relación M:N y su tabla asociativa.'},
 4097:{a1:['64'],a2:['II-5'],a:'§9.2 ODBC/JDBC y §5.11 objetos programables cubren capas de acceso y cursores.'},
 4098:{a1:['64'],a2:['II-5'],a:'§2.3 integridad (entidad/referencial) y §5.13 constraints SQL.'},
 4099:{a1:['64'],a2:['II-5'],a:'§5 lenguaje SQL: agregaciones, GROUP BY y NULL.'},
 4100:{a1:['64'],a2:['II-5'],a:'§5 lenguaje SQL: categorías DDL/DML/DCL/TCL y creación/alteración de objetos.'}
};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q?.revision&&q.clasificacion&&m,'Falta revisión/cotejo '+c.id);for(const id of [...m.a1.map(n=>'A1-'+n),...m.a2.map(n=>'A2-'+n)])assert.ok(official.has(id),'Tema desconocido '+id);q.clasificacion.A1=m.a1.map(n=>'A1-'+n);q.clasificacion.A2=m.a2.map(n=>'A2-'+n);q.clasificacion.bloque_academia=academy.name+'; '+m.a+' Correspondencia curricular cotejada con convocatoria A1 GSI 2025, anexo I (tema(s) '+m.a1.join(', ')+'), y A2 GSI 2025, anexo IX (tema(s) '+m.a2.join(', ')+').';q.clasificacion.nota='Cotejo temático curricular; los detalles de producto y semántica se fundamentan en Oracle, ISO y Microsoft Learn.';q.revision.observaciones+=' '+q.clasificacion.bloque_academia;for(const f of [{url:academy.url,referencia:academy.name+'; consulta directa del índice y resumen del bloque y secciones SQL, integridad, diseño, agregación y acceso a datos pertinentes.'},{url:boeA1,referencia:'Convocatoria oficial A1 GSI 2025, anexo I: tema(s) '+m.a1.join(', ')+'.'},{url:boeA2,referencia:'Convocatoria oficial A2 GSI 2025, anexo IX: tema(s) '+m.a2.join(', ')+'.'}])if(!q.revision.fuentes.some(x=>x.url===f.url))q.revision.fuentes.push(f);c.actualizada=structuredClone(q)}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo directo de ITIC Academy bloque 29 y clasificación A1/A2 aplicados a 4096–4100.');
