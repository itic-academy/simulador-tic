const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),file=path.join(root,'preguntas_preparatic.json');
const bank=JSON.parse(fs.readFileSync(file,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1385.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
  directories:{url:'https://drive.google.com/file/d/1nHGBMG4P3il5v4hZ1-RKdHmGzUPiwqnA/view?usp=drivesdk',title:'ITIC Academy, 45_ITIC_Tema_122_Correo_Mensajeria_Directorios_2026.pdf, versión 2026.1 (29-09-2026)',detail:'El índice y contenido identifican correo/mensajería y servicios de directorio, con X.400, X.500 y LDAP; coteja los conceptos y el vocabulario de 7247–7248 con A1-122 y A2-II-8. La academia se usa solo como control de cobertura, no como autoridad normativa.'},
  radio:{url:'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk',title:'ITIC Academy, 46_ITIC_Tema_123_Comunicaciones_Moviles_2026.pdf, versión 2026.1 (29-09-2026)',detail:'El índice cubre comunicaciones móviles y tecnologías de telefonía; incluye tecnologías móviles profesionales y sistemas inalámbricos, para cotejar TETRA/DECT de 7249–7250 con A1-123/A2-IV-11. Se coteja cobertura, no la validez técnica de cada respuesta.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
  const q=bank.preguntas.find(x=>x.id===c.id);assert.ok(q?.revision,`Falta revisión ${c.id}`);
  for(const id of [...q.clasificacion.A1,...q.clasificacion.A2])assert.ok(official.has(id),`Tema oficial inválido: ${id}`);
  const doc=c.id<=7248?docs.directories:docs.radio;
  const note=`Cotejo curricular ITIC Academy/Drive: ${doc.title}. ${doc.detail}`;
  q.clasificacion.bloque_academia=note;q.clasificacion.nota=(q.clasificacion.nota+' '+note).trim();
  q.comentarios=(q.comentarios+' '+note).trim();q.revision.observaciones=(q.revision.observaciones+' '+note).trim();
  q.revision.fuentes.push({url:doc.url,referencia:`${doc.title}; cotejo: ${doc.detail}`});c.actualizada=structuredClone(q);
}
fs.writeFileSync(file,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular ITIC Academy/Drive registrado para IDs 7246–7250.');
