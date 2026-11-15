const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),file=path.join(root,'preguntas_preparatic.json');
const bank=JSON.parse(fs.readFileSync(file,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1380.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 hardware:{url:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',title:'ITIC Academy, bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026',detail:'Cubre almacenamiento/SAN/Fibre Channel y backup en A1-56/A2-IV-5. Para cinta/disco y UART se coteja la cobertura general de hardware; el material recuperado no se usa como autoridad de la diferencia de acceso ni de la definición UART, contrastadas con IBM y Texas Instruments.'},
 oop:{url:'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk',title:'ITIC Academy, bloque 38 Análisis, Diseño y Construcción de Sistemas de Información, edición 2026.1',detail:'Incluye análisis/diseño orientado a objetos y UML para A2-III-9, y clases/modelado de dominio en A1-89; trata explícitamente la regla de que una clase abstracta puede contener métodos implementados y no se instancia directamente.'},
 web:{url:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',title:'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información, edición 2026.1',detail:'Cubre A1-65/A2-III-12, desarrollo web front-end, frameworks y JavaScript; incluye MEAN como MongoDB + Express + Angular + Node.js, y advierte que es un acrónimo de stack, no una norma.'}
};
const academy={7221:docs.hardware,7222:docs.hardware,7223:docs.hardware,7224:docs.oop,7225:docs.web};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),d=academy[c.id];assert.ok(q?.revision&&d,`Falta pregunta/Drive ${c.id}`);
 for(const id of [...q.clasificacion.A1,...q.clasificacion.A2])assert.ok(official.has(id),`Tema oficial inválido: ${id}`);
 const note=`Cotejo curricular ITIC Academy: ${d.title}. ${d.detail} El material comprueba la cobertura del programa; los datos técnicos se verifican en las fuentes primarias señaladas en la revisión.`;
 q.clasificacion.bloque_academia=note;q.clasificacion.nota=(q.clasificacion.nota+' '+note).trim();
 q.comentarios=(q.comentarios+' '+note).trim();q.revision.observaciones=(q.revision.observaciones+' '+note).trim();
 q.revision.fuentes.push({url:d.url,referencia:`${d.title}; cotejo: ${d.detail}`});c.actualizada=structuredClone(q);
}
fs.writeFileSync(file,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular ITIC Academy/Drive registrado para IDs 7221–7225.');
