const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),file=path.join(root,'preguntas_preparatic.json');
const bank=JSON.parse(fs.readFileSync(file,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1384.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const doc={url:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',title:'ITIC Academy, 42_Bloque_42_Tema_Redes_2026.pdf, versión 2026.1 (29-09-2026)',detail:'El bloque declara cubrir los temas oficiales A1 108, 110, 113, 118–121 y A2 C5–C8/C11; desarrolla cableado estructurado y normativa, medios guiados, infraestructuras de acceso, ADSL/xDSL y redes IP/IPv6. Sirve para cotejar la cobertura curricular de 7241–7245. Los valores y definiciones puntuales de TIA, ITU-T e IETF se verificaron por separado en las fuentes técnicas primarias registradas en cada pregunta; el temario no sustituye dichas normas.'};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id);assert.ok(q?.revision,`Falta revisión ${c.id}`);
 for(const id of [...q.clasificacion.A1,...q.clasificacion.A2])assert.ok(official.has(id),`Tema oficial inválido: ${id}`);
 const note=`Cotejo curricular ITIC Academy/Drive: ${doc.title}. ${doc.detail}`;
 q.clasificacion.bloque_academia=note;q.clasificacion.nota=(q.clasificacion.nota+' '+note).trim();
 q.comentarios=(q.comentarios+' '+note).trim();q.revision.observaciones=(q.revision.observaciones+' '+note).trim();
 q.revision.fuentes.push({url:doc.url,referencia:`${doc.title}; cotejo: ${doc.detail}`});c.actualizada=structuredClone(q);
}
fs.writeFileSync(file,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo de ITIC Academy/Drive registrado para IDs 7241–7245.');
