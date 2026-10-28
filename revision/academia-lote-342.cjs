const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-342.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 os:{url:'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk',label:'ITIC Academy, Bloque 27 Sistemas Operativos, edición 2026'},
 web:{url:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',label:'ITIC Academy, Bloque 30 Tecnologías de Sistemas de la Información, edición 2026'},
 db:{url:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',label:'ITIC Academy, Bloque 29 Bases de Datos, SQL y Modelado de Datos, edición 2026'},
 protocols:{url:'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',label:'ITIC Academy, Bloque 43 Protocolos, edición 2026'},
 maintenance:{url:'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',label:'ITIC Academy, Bloque 39 Calidad y Mantenimiento, edición 2026'}
};
const map={
 2026:{doc:'os',topics:['A1-62','A2-II-2'],detail:'incluye sistemas móviles y Android; la arquitectura concreta se verifica en Android Open Source Project.'},
 2027:{doc:'web',topics:['A1-65','A2-III-12'],detail:'incluye frameworks web y tecnologías de servidor; RichFaces se conserva como referencia histórica de JSF.'},
 2028:{doc:'db',topics:['A1-64','A2-II-5'],detail:'cubre el modelo relacional, SGBD y SQL; la cardinalidad se contrasta con bibliografía educativa/técnica.'},
 2029:{doc:'protocols',topics:['A1-115','A2-II-8'],detail:'incluye IPv4/IPv6 y arquitectura de red; ff00::/8 se verifica en RFC 4291.'},
 2030:{doc:'maintenance',topics:['A1-101','A2-III-8'],detail:'cubre mantenimiento de sistemas y su planificación; se diferencia preventivo de predictivo y correctivo.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q?.revision&&m,`Falta cotejo ${c.id}`);assert.deepEqual(q.clasificacion.A1,m.topics.filter(t=>t.startsWith('A1-')));assert.deepEqual(q.clasificacion.A2,m.topics.filter(t=>t.startsWith('A2-')));assert.ok(m.topics.every(t=>official.has(t)));const d=docs[m.doc];q.clasificacion.bloque_academia=`${d.label}; ${m.detail}`;q.clasificacion.nota=`Correspondencia comprobada en revision/temario-oficial.json y en las convocatorias A1/A2 vigentes de 2025 (BOE-A-2025-25938 y BOE-A-2025-26262). El temario académico aporta contexto; la respuesta se coteja con la fuente técnica indicada. ${c.actualizada.revision.observaciones}`;q.revision.observaciones=q.clasificacion.nota;q.comentarios=q.clasificacion.nota;q.revision.fuentes.push({url:d.url,referencia:`${d.label}; cotejo de cobertura curricular.`});c.actualizada=structuredClone(q);}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo académico, convocatoria y epígrafes oficiales actualizado para IDs 2026–2030.');
