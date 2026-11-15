const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),file=path.join(root,'preguntas_preparatic.json');
const bank=JSON.parse(fs.readFileSync(file,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1381.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 mobile:{url:'https://drive.google.com/file/d/1nXa2jkiUqpu31smkt5D8WswcTgEN7XlB/view?usp=drivesdk',title:'ITIC Academy, bloque 47 Aplicaciones móviles y sistemas operativos, versión 2026.1 (30-09-2026)',detail:'El índice trata AndroidManifest.xml (apartado 3.4), componentes, permisos y características; cubre A1-124 y sistemas móviles A2-C2. El manual se coteja como guía curricular, mientras el comportamiento concreto se confirma con Android Developers.'},
 java:{url:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',title:'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información, edición 2026.1 (31-08-2026)',detail:'Cubre expresamente A1-67, Entorno de desarrollo JAVA. El bloque actual desarrolla herramientas y plataforma Java; no presenta applets de navegador como tecnología vigente. El carácter histórico y su retirada se comprueban en la guía de migración de Oracle JDK.'},
 security:{url:'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',title:'ITIC Academy, bloque Seguridad, Criptografía, Identificación y Firma, versión 2026.1 (17-09-2026)',detail:'Cubre expresamente A1-79/A2-T13, cifrado simétrico, función hash, algoritmos legados y modos de operación. El detalle histórico de FIPS 81 y la definición formal de segunda preimagen se contrastan directamente con NIST.'},
 agile:{url:'https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view?usp=drivesdk',title:'ITIC Academy, bloque 15 Metodologías Ágiles y Modelos de Ciclo de Vida, versión 2026.1 (26-08-2026)',detail:'Cubre A1-37 metodologías ágiles y Lean, A1-86 modelos de ciclo de vida y A2-D1 ciclo de vida/fases/modelos; incluye Kanban, Lean y ciclo clásico o en cascada. El término preciso y la salvedad sobre taxonomías se cotejaron con Agile Practice Guide/Agile Alliance.'}
};
const academy={7226:docs.mobile,7227:docs.java,7228:docs.security,7229:docs.security,7230:docs.agile};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),d=academy[c.id];assert.ok(q?.revision&&d,`Falta pregunta/Drive ${c.id}`);
 for(const id of [...q.clasificacion.A1,...q.clasificacion.A2])assert.ok(official.has(id),`Tema oficial inválido: ${id}`);
 const note=`Cotejo curricular ITIC Academy: ${d.title}. ${d.detail} Los apuntes comprueban alineación/cobertura y no sustituyen las fuentes técnicas primarias.`;
 q.clasificacion.bloque_academia=note;q.clasificacion.nota=(q.clasificacion.nota+' '+note).trim();
 q.comentarios=(q.comentarios+' '+note).trim();q.revision.observaciones=(q.revision.observaciones+' '+note).trim();
 q.revision.fuentes.push({url:d.url,referencia:`${d.title}; cotejo: ${d.detail}`});c.actualizada=structuredClone(q);
}
fs.writeFileSync(file,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular ITIC Academy/Drive registrado para IDs 7226–7230.');
