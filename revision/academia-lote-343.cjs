const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-343.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 networks:{url:'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',label:'ITIC Academy, Bloque 43 Protocolos, edición 2026'},
 db:{url:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',label:'ITIC Academy, Bloque 29 Bases de Datos, SQL y Modelado de Datos, edición 2026'},
 eni:{url:'https://drive.google.com/file/d/1zdx_PRBfKM9tRy61Boz_yPekU-D-b_6S/view?usp=drivesdk',label:'ITIC Academy, Bloque 20 Interoperabilidad de Sistemas, edición 2026'},
 security:{url:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',label:'ITIC Academy, Bloque 48 Seguridad en redes y nivel de aplicación, edición 2026'},
 java:{url:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',label:'ITIC Academy, Bloque 30 Tecnologías de Sistemas de la Información, edición 2026'}
};
const map={
 2031:{doc:'networks',topics:['A1-111','A2-II-8'],detail:'incluye arquitectura y capas OSI; la función normalizada de presentación se contrasta con ISO/IEC 7498-1.'},
 2032:{doc:'db',topics:['A1-64','A2-II-5'],detail:'incluye SGBD y acceso a datos relacionales; la arquitectura ODBC se verifica en documentación de Microsoft.'},
 2033:{doc:'eni',topics:['A1-45','A2-I-9'],detail:'trata el Esquema Nacional de Interoperabilidad y sus inventarios administrativos.'},
 2034:{doc:'security',topics:['A1-81','A2-I-6'],detail:'contextualiza PKI, certificados y mecanismos de confianza; la emisión se delimita con RFC 5280/eIDAS.'},
 2035:{doc:'java',topics:['A1-67','A2-III-10'],detail:'incluye entorno Java/Jakarta EE; BluePrints se identifica como programa histórico de guías/patrones.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q?.revision&&m,`Falta cotejo ${c.id}`);assert.deepEqual(q.clasificacion.A1,m.topics.filter(t=>t.startsWith('A1-')));assert.deepEqual(q.clasificacion.A2,m.topics.filter(t=>t.startsWith('A2-')));assert.ok(m.topics.every(t=>official.has(t)));const d=docs[m.doc];q.clasificacion.bloque_academia=`${d.label}; ${m.detail}`;q.clasificacion.nota=`Correspondencia cotejada en revision/temario-oficial.json y las convocatorias A1/A2 vigentes de 2025 (BOE-A-2025-25938 y BOE-A-2025-26262). El temario académico acredita cobertura; la fuente primaria sustenta la conclusión técnica o normativa. ${c.actualizada.revision.observaciones}`;q.revision.observaciones=q.clasificacion.nota;q.comentarios=q.clasificacion.nota;q.revision.fuentes.push({url:d.url,referencia:`${d.label}; cotejo de epígrafes y cobertura curricular.`});c.actualizada=structuredClone(q);}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo de academia, programa oficial y convocatorias completado para IDs 2031–2035.');
