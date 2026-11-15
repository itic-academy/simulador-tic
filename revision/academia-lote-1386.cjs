const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),file=path.join(root,'preguntas_preparatic.json');
const bank=JSON.parse(fs.readFileSync(file,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1386.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
  wireless:{url:'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk',title:'ITIC Academy, 46_Bloque_46_Tema_Redes_Inalambricas_2026.pdf, versión 2026.1',detail:'El bloque identifica A1-114/A1-123 y A2-IV-11/C9 y trata radiocomunicación, tecnologías móviles, generaciones celulares y sistemas inalámbricos. Se coteja 7251–7252 con el alcance de comunicaciones móviles, sin usar el temario como prueba de la cifra técnica.'},
  security:{url:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',title:'ITIC Academy, 48_Bloque_48_Tema_Seguridad_Redes_Aplicacion_2026.pdf, actualización 2026',detail:'El índice enlaza A1-125/A1-126 y A2-IV-12/T13; cubre seguridad perimetral, cortafuegos, protocolos criptográficos, herramientas y seguridad de servicios. Se coteja el ámbito curricular de DMZ y TLS.'},
  ccn:{url:'https://drive.google.com/file/d/18tJzWuBHyd4FbkzQIE5fIbSCRdlrt_1U/view?usp=drivesdk',title:'ITIC Academy, 22_Bloque_22_ENS_Ciberseguridad_nuevo_temario_2026.pdf, versión 2026.2 (26-08-2026)',detail:'El índice declara A1-48/A1-127 y A2-I-9/II-11/II-13; incluye herramientas CCN-CERT, guías CCN-STIC, seguridad lógica y análisis de malware. Coteja la ubicación curricular de ADA/MARTA/MARÍA.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
  const q=bank.preguntas.find(x=>x.id===c.id);assert.ok(q?.revision,`Falta revisión ${c.id}`);
  for(const id of [...q.clasificacion.A1,...q.clasificacion.A2])assert.ok(official.has(id),`Tema oficial inválido: ${id}`);
  const doc=c.id<=7252?docs.wireless:(c.id===7254?docs.ccn:docs.security);
  const note=`Cotejo curricular ITIC Academy/Drive: ${doc.title}. ${doc.detail}`;
  q.clasificacion.bloque_academia=note;q.clasificacion.nota=(q.clasificacion.nota+' '+note).trim();
  q.comentarios=(q.comentarios+' '+note).trim();q.revision.observaciones=(q.revision.observaciones+' '+note).trim();
  q.revision.fuentes.push({url:doc.url,referencia:`${doc.title}; cotejo: ${doc.detail}`});c.actualizada=structuredClone(q);
}
fs.writeFileSync(file,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular ITIC Academy/Drive registrado para IDs 7251–7255.');
