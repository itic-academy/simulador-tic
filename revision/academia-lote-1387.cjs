const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),file=path.join(root,'preguntas_preparatic.json');
const bank=JSON.parse(fs.readFileSync(file,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1387.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
  admin:{url:'https://drive.google.com/file/d/1dW2ffNhCduFHJ1hI2nT6fqs_G8DeNpo3/view?usp=drivesdk',title:'ITIC Academy, 3_ITIC_Temas_7_8_22_A2_O8_Actuacion_Administrativa_2026_FINAL.pdf, versión 2026.1 (17-08-2026)',detail:'El índice declara A1 temas 7, 8 y 22, y el bloque A2 de procedimiento y régimen jurídico; desarrolla Ley 39/2015, notificaciones electrónicas, Ley 40/2015, organización de la AGE y LSSI-CE. El epígrafe A2 previo O8 se corresponde en el programa oficial 2025 consultado con A2-I-8/A2-I-9. Se coteja cobertura curricular, no se usa el temario como prueba jurídica.'},
  data:{url:'https://drive.google.com/file/d/1uS8S8axBSb22s9Dbv2mTsFaHUUVlowiM/view?usp=drivesdk',title:'ITIC Academy, bloque 8 Protección de Datos, edición 2026',detail:'El bloque se corresponde con A1-27 y el epígrafe A2 de protección de datos y autoridades de control; incluye RGPD/LOPDGDD, derechos, DPD y autoridades. Se coteja la función curricular de la AEPD, no se usa el temario como prueba de sus potestades.'},
  procurement:{url:'https://docs.google.com/document/d/1PsTULo7b5iqnrNx7LQ2mPfkMPyecv6iF/edit?usp=drivesdk&ouid=107088454749630873035&rtpof=true&sd=true',title:'ITIC Academy, Bloque 5 Contratación, Presupuestos y Compra TIC, versión 2026.2 (01-10-2026)',detail:'El documento declara A1 temas 11, 12, 13 y 39, sin equivalente en el temario A2, y recoge el umbral SARA de obras de 5,404 M€ para 2026–2027 según la Orden HAC/1517/2025. Se coteja el ámbito curricular y la actualización; la respuesta se verifica en LCSP, BOE y Diario Oficial de la UE.'}
};
const assignments={7256:docs.admin,7257:docs.data,7258:docs.admin,7259:docs.admin,7260:docs.procurement};
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
console.log('Cotejo curricular ITIC Academy/Drive registrado para IDs 7256–7260.');

