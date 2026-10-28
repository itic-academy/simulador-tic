const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-341.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 common:{url:'https://drive.google.com/file/d/1NWEg_hd3iDIC0kIitK-u8BpmJ20Jecmw/view?usp=drivesdk',label:'ITIC Academy, Bloque 23 Servicios comunes e interoperabilidad, edición 2026'},
 websec:{url:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',label:'ITIC Academy, Bloque 48 Seguridad en redes y nivel de aplicación, edición 2026'},
 networks:{url:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',label:'ITIC Academy, Bloque 42 Redes, edición 2026'},
 os:{url:'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk',label:'ITIC Academy, Bloque 27 Sistemas Operativos, edición 2026.1'}
};
const map={
 2021:{doc:'common',topics:['A1-49','A2-I-10'],detail:'trata Cl@ve, Carpeta Ciudadana e infraestructuras/servicios comunes entre Administraciones.'},
 2022:{doc:'websec',topics:['A1-126','A2-III-12'],detail:'contextualiza seguridad, servicios web y estándares/protocolos asociados; la respuesta se verifica en OASIS.'},
 2023:{doc:'networks',topics:['A1-115','A2-II-8'],detail:'cubre redes IP, IPv4/IPv6, CIDR y el modelo OSI; la reserva privada se verifica en RFC 1918.'},
 2024:{doc:'networks',topics:['A1-120','A2-I-10'],detail:'incluye Red SARA y redes públicas; se distingue la guía técnica histórica de la ficha vigente del servicio.'},
 2025:{doc:'os',topics:['A1-62','A2-II-2'],detail:'incluye Android y sistemas operativos móviles; Symbian/BlackBerry se identifican como referencias históricas.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q?.revision&&m,`Falta cotejo ${c.id}`);assert.deepEqual(q.clasificacion.A1,m.topics.filter(t=>t.startsWith('A1-')));assert.deepEqual(q.clasificacion.A2,m.topics.filter(t=>t.startsWith('A2-')));assert.ok(m.topics.every(t=>official.has(t)));const d=docs[m.doc];q.clasificacion.bloque_academia=`${d.label}; ${m.detail}`;q.clasificacion.nota=`Correspondencia cotejada con revision/temario-oficial.json y las convocatorias A1/A2 vigentes de 2025 (BOE-A-2025-25938 y BOE-A-2025-26262). El material académico acredita cobertura curricular, no sustituye la fuente primaria. ${c.actualizada.revision.observaciones}`;q.revision.observaciones=q.clasificacion.nota;q.comentarios=q.clasificacion.nota;q.revision.fuentes.push({url:d.url,referencia:`${d.label}; cotejo de cobertura curricular.`});c.actualizada=structuredClone(q);}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo académico, temario oficial y convocatorias actualizado para IDs 2021–2025.');
