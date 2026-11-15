const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),file=path.join(root,'preguntas_preparatic.json');
const bank=JSON.parse(fs.readFileSync(file,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1382.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 systems:{url:'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk',title:'ITIC Academy, bloque 38 Análisis, Diseño y Construcción de Sistemas de Información, edición 2026.1 (18-09-2026)',detail:'Incluye análisis estructurado y DFD, análisis/diseño orientado a objetos, UML 2.5.1, diagramas de clases, patrones GoF y una sección de MÉTRICA v3; coincide con A1-89/A1-90/A1-93/A1-95 y A2-III-3/III-6/III-8/III-9. El manual sirve para alinear cobertura curricular; las definiciones específicas se verificaron con OMG y las publicaciones oficiales de MÉTRICA.'},
 maintenance:{url:'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',title:'ITIC Academy, bloque 39 Calidad y Mantenimiento, versión 2026.1 (23-09-2026)',detail:'Su contenido oficial incluye gestión de configuración, versiones y cambios para A1-100/A1-102 y A2-IV-4; se coteja con la definición formal publicada para MÉTRICA v3.'},
 lifecycle:{url:'https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view?usp=drivesdk',title:'ITIC Academy, bloque 15 Metodologías Ágiles y Modelos de Ciclo de Vida, versión 2026.1 (26-08-2026)',detail:'Cubre A1-86/A1-88 y A2-D1/D2; incluye proceso predictivo/clásico y modelos de ciclo de vida. Se usa para cotejar la fase de implantación y ciclo de vida, no para sustituir el desglose de tareas IAS/CSI de MÉTRICA v3.'}
};
const academy={7231:docs.systems,7232:docs.systems,7233:docs.systems,7234:docs.maintenance,7235:docs.systems};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),d=academy[c.id];assert.ok(q?.revision&&d,`Falta pregunta/Drive ${c.id}`);
 for(const id of [...q.clasificacion.A1,...q.clasificacion.A2])assert.ok(official.has(id),`Tema oficial inválido: ${id}`);
 const note=`Cotejo curricular ITIC Academy: ${d.title}. ${d.detail} Se usa para alinear cobertura y no como sustituto de la fuente primaria.`;
 q.clasificacion.bloque_academia=note;q.clasificacion.nota=(q.clasificacion.nota+' '+note).trim();
 q.comentarios=(q.comentarios+' '+note).trim();q.revision.observaciones=(q.revision.observaciones+' '+note).trim();
 q.revision.fuentes.push({url:d.url,referencia:`${d.title}; cotejo: ${d.detail}`});c.actualizada=structuredClone(q);
}
fs.writeFileSync(file,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular ITIC Academy/Drive registrado para IDs 7231–7235.');
