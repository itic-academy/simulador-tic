const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),file=path.join(root,'preguntas_preparatic.json');
const bank=JSON.parse(fs.readFileSync(file,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1389.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 admin:{url:'https://docs.google.com/document/d/11f2yckNnR_tuq63G9CLQFlsitwLhj4pV/edit?usp=drivesdk&ouid=107088454749630873035&rtpof=true&sd=true',title:'ITIC Academy, bloque 3 Actuación Administrativa y Administración Digital, versión 2026.2 (01-10-2026)',detail:'Incluye calidad y TIC en servicios públicos, las leyes 39/2015 y 40/2015 y administración electrónica (A1 temas 8 y 22; A2 I-8/I-9). Se coteja la ubicación curricular, no se usa como fuente de la regla del RD 951/2005.'},
 data:{url:'https://drive.google.com/file/d/1uS8S8axBSb22s9Dbv2mTsFaHUUVlowiM/view?usp=drivesdk',title:'ITIC Academy, bloque 8 Protección de Datos, edición 2026',detail:'El bloque se corresponde con A1-27 y A2-I-7 e incluye el régimen jurídico de datos personales y autoridades de control. Se coteja cobertura, no se usa como fuente normativa de los plazos de prescripción.'},
 protocols:{url:'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',title:'ITIC Academy, 43_Bloque_43_Tema_Protocolos_2026.pdf, actualización 2026',detail:'El índice incluye A1 temas 108, 111 y 115 y A2-II-8; abarca encaminamiento y redes IPv6. La academia se coteja como temario; la dirección multicast se verifica directamente en RFC 2080/IANA.'},
 interoperability:{url:'https://docs.google.com/document/d/1YzruJt5gSwqZf24u7-vj8PLBO34mkFFJ/edit?usp=drivesdk&ouid=107088454749630873035&rtpof=true&sd=true',title:'ITIC Academy, bloque 20 Interoperabilidad de Sistemas, versión 2026.2 (14-08-2026)',detail:'Alineado con A1 temas 45, 46 y 49 y A2-I-9; el índice desarrolla interoperabilidad y servicios comunes, incluida la Plataforma de Intermediación de Datos. Se coteja la cobertura curricular de PID, no se usa como prueba de definiciones de rol.'},
 cobit:{url:'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk',title:'ITIC Academy, bloque 41 ITIL y COBIT, actualización 2026',detail:'El material actual se alinea con A1-106 y presenta COBIT 2019, no COBIT 5 como marco vigente. El ítem se conserva como histórico y se pregunta explícitamente por la versión 5 para evitar mezclar el modelo de 37 procesos con los 40 objetivos de COBIT 2019.'}
};
const assignments={7266:docs.admin,7267:docs.data,7268:docs.protocols,7269:docs.interoperability,7270:docs.cobit};
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
console.log('Cotejo curricular ITIC Academy/Drive registrado para IDs 7266–7270.');
