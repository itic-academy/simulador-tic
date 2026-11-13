const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1143.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 access:'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',
 video:'https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk',
 crypto:'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',
 directory:'https://drive.google.com/file/d/1Sol49a2N19LsbVxip95u9OzDYfk0BiAD/view?usp=drivesdk',
 hardware:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',
 gis:'https://drive.google.com/file/d/15iokZokiVzk3qpTTQvMpDN0W27PL8tbv/view?usp=drivesdk'
};
const map={
 6036:{a1:[108,112],a2:[],documents:[
  {url:docs.access,desc:'ITIC Academy, bloque 43, Protocolos, versión 2026.1: tecnologías de acceso (GPON/LTE) y redes/QoS.'},
  {url:docs.video,desc:'ITIC Academy, bloque 50, Videoconferencia, SSO y trabajo colaborativo, versión 2026.1: videoconferencia, dimensionamiento y calidad de servicio.'}
 ],desc:'Cotejo de contenidos de acceso de red y requisitos de videoconferencia con los bloques 43 y 50; clasificación oficial A1-108/112. El temario A2 se consultó y no se asigna un epígrafe local de banda ancha que no describa el tema.'},
 6037:{a1:[80],a2:['IV-12'],documents:[{url:docs.crypto,desc:'ITIC Academy, bloque 36, Seguridad, Criptografía, Identificación y Firma, versión 2026.1 (17/09/2026): algoritmos y API criptográficas; encaje A1-80/A2-IV.12.'}],desc:'Cotejo curricular de criptografía y mecanismos/protocolos seguros.'},
 6038:{a1:[80,122],a2:[],documents:[{url:docs.directory,desc:'ITIC Academy, temas 079–081, Seguridad, Certificados y Directorios: identifica los componentes/terminología X.500; encaje oficial A1-80 y A1-122.'}],desc:'Cotejo curricular de X.500 y servicios de directorio. No se fuerza tema A2, pues no hay epígrafe directo de X.500/directorio en el programa oficial A2.'},
 6039:{a1:[56],a2:['IV-5'],documents:[{url:docs.hardware,desc:'ITIC Academy, Hardware, versión 2026, temas 52/53/54/56/57: RAID, almacenamiento y tolerancia a fallos; correspondencia A1-56/A2-IV.5.'}],desc:'Cotejo curricular de RAID y almacenamiento.'},
 6040:{a1:[74],a2:[],documents:[{url:docs.gis,desc:'ITIC Academy, bloque 33, E-Learning y GIS, versión 2026.1: sistemas de información geográfica y tratamiento de datos espaciales; correspondencia A1-74.'}],desc:'Cotejo curricular de GIS y procesamiento de imágenes. No se fuerza un epígrafe A2 sin correspondencia temática directa.'}
};
const topics=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q&&m,'Falta pregunta/mapeo '+c.id);for(const id of [...m.a1.map(x=>'A1-'+x),...m.a2.map(x=>'A2-'+x)])assert.ok(topics.has(id),id);q.clasificacion.A1=m.a1.map(n=>'A1-'+n);q.clasificacion.A2=m.a2.map(n=>'A2-'+n);const marker='Cotejo curricular ITIC Academy:';const trim=v=>{const raw=(v||'').trim(),i=raw.indexOf(marker);return(i<0?raw:raw.slice(0,i)).trim().replace(/^Bloque de academia pendiente de cotejo\. Una lista vacía no implica exclusión del programa\.?\s*/,'').trim();};const refs=m.desc+' Temas oficiales asociados: '+[...q.clasificacion.A1,...q.clasificacion.A2].join('/')+'. La academia guía la adscripción curricular; las respuestas se fundamentan en fuentes primarias.';const note='Cotejo curricular ITIC Academy: '+refs;q.clasificacion.bloque_academia=m.desc;q.clasificacion.nota=(trim(q.clasificacion.nota)+' '+note).trim();q.comentarios=(trim(q.comentarios)+' '+note).trim();q.revision.observaciones=(trim(q.revision.observaciones)+' '+note).trim();for(const d of m.documents)if(!q.revision.fuentes.some(f=>f.url===d.url))q.revision.fuentes.push({url:d.url,referencia:d.desc});c.actualizada=structuredClone(q);}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo curricular actualizado para IDs 6036–6040.');
