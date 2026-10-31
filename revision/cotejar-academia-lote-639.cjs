const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const dir=__dirname,bankPath=path.join(dir,'..','preguntas_preparatic.json'),logPath=path.join(dir,'cambios-lote-639.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
  bi:{url:'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk',title:'ITIC Academy, bloque 34 Business Intelligence y Big Data, versión 2026'},
  db:{url:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',title:'ITIC Academy, bloque 29 Bases de datos, SQL y modelado de datos, versión 2026.1'},
  sig:{url:'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',title:'ITIC Academy, bloque 36 Seguridad, criptografía, identificación y firma, versión 2026'},
  lic:{url:'https://drive.google.com/file/d/1Og6yI-YaZ48UA3pBT-HQhTh7TfvdPW_C/view?usp=drivesdk',title:'ITIC Academy, bloque 18 Protección jurídica, licencias y control del software, versión 2026.1'},
  cpd:{url:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',title:'ITIC Academy, bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1'}
};
const mappings={
  3511:{a1:[75],a2:['II-4'],use:[docs.bi],detail:'El bloque 34 incorpora data warehouse y explotación analítica; clasificación oficial A1-75/A2-II-4.'},
  3512:{a1:[63],a2:['II-5'],use:[docs.db],detail:'El bloque 29 trata SGBD, el modelo de referencia y la arquitectura ANSI/SPARC; la distinción clásica entre estructura jerárquica y de red se incluye como fundamento del modelado de datos.'},
  3513:{a1:[77,80],a2:['II-9','IV-12'],use:[docs.sig],detail:'El bloque 36 cubre firma electrónica, formatos de firma y criptografía; XML como lenguaje de marca figura además en A1-77/A2-II-9. La sintaxis y alcance técnico se verifican en W3C/ETSI.'},
  3514:{a1:[43,69],a2:['II-14'],use:[docs.lic],detail:'El bloque 18 trata protección jurídica y licencias; el tema A1-69/A2-II-14 comprende software libre, propietario y tipos de licencia. Se evita tratar shareware como una categoría equivalente a licencia libre.'},
  3515:{a1:[53],a2:['IV-6'],use:[docs.cpd],detail:'El bloque 26 comprende diseño, implantación y gestión del CPD; incluye la resiliencia y redundancia de infraestructura que se clasifican en A1-53/A2-IV-6.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(dir,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const examA1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',examA2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=mappings[c.id];assert.ok(q?.revision&&m,`Falta revisión o cotejo de ${c.id}`);for(const id of [...m.a1.map(n=>`A1-${n}`),...m.a2.map(n=>`A2-${n}`)])assert.ok(official.has(id),`Tema oficial inexistente: ${id}`);
  q.clasificacion={...q.clasificacion,A1:m.a1.map(n=>`A1-${n}`),A2:m.a2.map(n=>`A2-${n}`),bloque_academia:m.use.map(d=>`${d.title}; ${m.detail}; ${d.url}`).join(' | '),estado:'revisada',nota:'Correspondencia cotejada con unidad ITIC Academy accesible en Drive, cuando existe, programas oficiales de convocatoria y revision/temario-oficial.json; la bibliografía determina el detalle técnico y la unidad académica aporta encaje temático.'};
  q.revision.observaciones+=` Cotejo academia: ${m.detail} Correspondencia oficial: ${[...m.a1.map(n=>`A1-${n}`),...m.a2.map(n=>`A2-${n}`)].join(', ')}.`;for(const d of m.use)q.revision.fuentes.push({url:d.url,referencia:`${d.title}. ${m.detail}`});
  q.revision.fuentes.push({url:examA1,referencia:'Convocatoria BOE-A-2025-25938, anexo I, epígrafes A1 cotejados con revision/temario-oficial.json.'},{url:examA2,referencia:'Convocatoria BOE-A-2025-26262, anexo IX (A2 GSI), epígrafes cotejados con revision/temario-oficial.json.'});c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo ITIC Academy, BOE y clasificación completado para el lote 639.');
