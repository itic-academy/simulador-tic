const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),file=path.join(root,'preguntas_preparatic.json');
const bank=JSON.parse(fs.readFileSync(file,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1388.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
  constitution:{url:'https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk',title:'ITIC Academy, 1_Bloque_01_Constitucion_Estado_AGE_ITIC_2026.pdf, actualización 2026',detail:'El bloque cubre la Constitución de 1978, organización territorial, competencias de las Comunidades Autónomas y Administración General del Estado; su índice enlaza con los temas A1 1–6 y A2 de Constitución. Se coteja cobertura curricular, no se usa como fuente de interpretación constitucional.'},
  admin:{url:'https://docs.google.com/document/d/11f2yckNnR_tuq63G9CLQFlsitwLhj4pV/edit?usp=drivesdk&ouid=107088454749630873035&rtpof=true&sd=true',title:'ITIC Academy, bloque 3 Actuación Administrativa y Administración Digital, versión 2026.2 (01-10-2026)',detail:'El bloque cubre los temas A1 7, 8 y 22 y el epígrafe A2 de procedimiento/régimen jurídico; incluye LSSI-CE y administración digital. El cotejo verifica la ubicación curricular de la pregunta, no su respuesta normativa.'},
  budgets:{url:'https://docs.google.com/document/d/1PsTULo7b5iqnrNx7LQ2mPfkMPyecv6iF/edit?usp=drivesdk&ouid=107088454749630873035&rtpof=true&sd=true',title:'ITIC Academy, Bloque 5 Contratación, Presupuestos y Compra TIC, versión 2026.2 (01-10-2026)',detail:'El documento identifica A1 temas 11, 12, 13 y 39 y desarrolla los PGE y su clasificación económica; indica que no existe equivalente directo en el temario A2. Se coteja la cobertura presupuestaria, sin usar los apuntes como fuente de la regla legal.'}
};
const assignments={7261:docs.constitution,7262:docs.constitution,7263:docs.constitution,7264:docs.admin,7265:docs.budgets};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id);assert.ok(q?.revision,`Falta revisión ${c.id}`);
 for(const id of [...q.clasificacion.A1,...q.clasificacion.A2])assert.ok(official.has(id),`Tema oficial inválido: ${id}`);
 const doc=assignments[c.id];assert.ok(doc);
 const note=`Cotejo curricular ITIC Academy/Drive: ${doc.title}. ${doc.detail}`;
 q.clasificacion.bloque_academia=note;q.clasificacion.nota=(q.clasificacion.nota+' '+note).trim();
 q.comentarios=(q.comentarios+' '+note).trim();q.revision.observaciones=(q.revision.observaciones+' '+note).trim();
 q.revision.fuentes.push({url:doc.url,referencia:`${doc.title}; cotejo: ${doc.detail}`});c.actualizada=structuredClone(q);
}
fs.writeFileSync(file,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular ITIC Academy/Drive registrado para IDs 7261–7265.');
