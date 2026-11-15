const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1395.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 rights:{url:'https://drive.google.com/file/d/1Og6yI-YaZ48UA3pBT-HQhTh7TfvdPW_C/view?usp=drivesdk',title:'ITIC Academy, tema 43 Protección Jurídica del Software, Licencias y DRM, edición 2026',detail:'Cotejo del marco curricular de derechos de autor y DRM; el mecanismo concreto de anonimato escrow se contrasta con Pfitzmann y Waidner, no se atribuye al temario de academia.'},
 js:{url:'https://drive.google.com/file/d/1LuUHoQr8oDmptteHIQ72VdCvJFsnu3LF/view?usp=drivesdk',title:'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información, revisión subrayada 2026-11-07',detail:'Cotejo curricular de tecnologías web y JavaScript (A1-65/A2-II-3/II-9); la definición normativa se valida con ECMA-262.'},
 network:{url:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',title:'ITIC Academy, bloque de Redes y Comunicaciones, edición 2026',detail:'Cotejo general de direccionamiento, redes IP e IDNA (A1-115/A2-II-8); la clase B se trata expresamente como esquema IPv4 histórico y los U-label/A-label se validan con RFC 5890/5891.'},
 db:{url:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',title:'ITIC Academy, tema 29 Sistemas de Gestión de Bases de Datos, edición 2026',detail:'Cotejo curricular general de SGBD (A1-63/A2-II-5). El material disponible no identifica las siglas LDU, LD y LD-I de la pregunta; no resuelve la ambigüedad de su arquitectura ni autoriza a confirmar la clave.'}
};
const assignments={7296:docs.rights,7297:docs.js,7298:docs.network,7299:docs.db,7300:docs.network};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id);assert.ok(q?.revision,`Falta revisión ${c.id}`);
 for(const id of [...q.clasificacion.A1,...q.clasificacion.A2])assert.ok(official.has(id),`Tema oficial inválido: ${id}`);
 const doc=assignments[c.id];assert.ok(doc);
 const note=`Cotejo curricular ITIC Academy/Drive: ${doc.title}. ${doc.detail}`;
 q.clasificacion.bloque_academia=note;q.clasificacion.nota=(q.clasificacion.nota+' '+note).trim();
 q.comentarios=(q.comentarios+' '+note).trim();q.revision.observaciones=(q.revision.observaciones+' '+note).trim();
 if(doc.url)q.revision.fuentes.push({url:doc.url,referencia:`${doc.title}; cotejo: ${doc.detail}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo Academy/Drive registrado para 7296–7300, incluyendo los límites del temario respecto a DRM escrow y siglas SGBD.');
