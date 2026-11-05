const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-754.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const boeA1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',boeA2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy={url:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',name:'ITIC Academy, bloque 29 «Bases de datos, SQL y modelado de datos», versión 2026.1 (31/08/2026)'};
const security={url:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',name:'ITIC Academy, bloque 48 «Seguridad en redes y en el nivel de aplicación», versión 2026.1 (30/09/2026)'};
const map={
 4091:{a1:['64'],a2:['II-5'],a:'§5 SQL y funciones de agregación; AVG sobre expresiones numéricas.'},
 4092:{a1:['34','38'],a2:['II-11'],a:'Bloque 48, §6 (control de accesos, autorización y trazabilidad) da contexto de seguridad; la convocatoria lo encaja específicamente en organización/auditoría informática.'},
 4093:{a1:['64'],a2:['II-5'],a:'§2.3 integridad referencial y §5.13 restricciones y acciones referenciales SQL.'},
 4094:{a1:['64'],a2:['III-4'],a:'§§3.1–3.2 cubren dependencias funcionales y formas normales.'},
 4095:{a1:['64'],a2:['III-4'],a:'§3.1 cubre dependencias funcionales y dependencia completa; §3.2 las relaciona con 2FN.'}
};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q?.revision&&q.clasificacion&&m,'Falta revisión/cotejo '+c.id);for(const id of [...m.a1.map(n=>'A1-'+n),...m.a2.map(n=>'A2-'+n)])assert.ok(official.has(id),'Tema desconocido '+id);q.clasificacion.A1=m.a1.map(n=>'A1-'+n);q.clasificacion.A2=m.a2.map(n=>'A2-'+n);const ac=c.id===4092?security:academy;q.clasificacion.bloque_academia=ac.name+'; '+m.a+' Correspondencia curricular contrastada con convocatoria A1 GSI 2025, anexo I (tema(s) '+m.a1.join(', ')+'), y A2 GSI 2025, anexo IX (tema(s) '+m.a2.join(', ')+').';q.clasificacion.nota='Cotejo temático curricular; la fuente de autoridad para las reglas y definiciones técnicas es el estándar o documentación primaria citada en la revisión.';q.revision.observaciones+=' '+q.clasificacion.bloque_academia;for(const f of [{url:ac.url,referencia:ac.name+'; cotejo directo del bloque/epígrafe curricular pertinente.'},{url:boeA1,referencia:'Convocatoria oficial A1 GSI 2025, anexo I: tema(s) '+m.a1.join(', ')+'.'},{url:boeA2,referencia:'Convocatoria oficial A2 GSI 2025, anexo IX: tema(s) '+m.a2.join(', ')+'.'}])if(!q.revision.fuentes.some(x=>x.url===f.url))q.revision.fuentes.push(f);c.actualizada=structuredClone(q)}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo Drive y clasificación A1/A2 actualizados para 4091–4095.');
