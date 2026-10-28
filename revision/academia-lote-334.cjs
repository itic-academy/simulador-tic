const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-334.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 constitucion:{url:'https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk',label:'ITIC Academy, Bloque 01 Constitución, Organización del Estado y AGE, actualización 2026'},
 administracion:{url:'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk',label:'ITIC Academy, Bloque 03 Actuación Administrativa y Administración Digital, versión 2026.2 (01-10-2026)'},
 economia:{url:'https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk',label:'ITIC Academy, Bloque 06 Economía, Sociedad, Empleo y Transformación Digital, versión 2026.2 (01-10-2026)'},
 datos:{url:'https://drive.google.com/file/d/1uS8S8axBSb22s9Dbv2mTsFaHUUVlowiM/view?usp=drivesdk',label:'ITIC Academy, Bloque 08 Protección de Datos, versión 2026.3 (01-10-2026)'}
};
const mapping={
 1986:{doc:'datos',topics:['A1-27','A2-I-7'],detail:'cubre RGPD, principios de tratamiento y protección de datos desde el diseño.'},
 1987:{doc:'administracion',topics:['A1-5'],detail:'cubre el Derecho de la Unión, sus instituciones y competencias; la distinción de atribuciones se verifica aparte contra el artículo 17 TUE.'},
 1988:{doc:'economia',topics:['A1-18'],detail:'incluye el Mercado Único Digital y el Programa Europa Digital (sección 10.4), con test específico; el contraste actualiza el dato a seis objetivos tras la Chips Act.'},
 1989:{doc:'constitucion',topics:['A1-2'],detail:'incluye expresamente el Poder Judicial y la justicia en la Constitución, incluido el artículo 120.'},
 1990:{doc:'datos',topics:['A1-27','A2-I-7'],detail:'cubre los derechos de las personas interesadas y el régimen del RGPD/LOPDGDD.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),r=mapping[c.id];assert.ok(q?.revision&&r,`Falta cotejo ${c.id}`);
 assert.deepEqual(q.clasificacion.A1,r.topics.filter(t=>t.startsWith('A1-')));assert.deepEqual(q.clasificacion.A2,r.topics.filter(t=>t.startsWith('A2-')));assert.ok(r.topics.every(t=>official.has(t)));
 const d=docs[r.doc];assert.ok(d);
 q.clasificacion.bloque_academia=`${d.label}; ${r.detail}`;
 q.clasificacion.nota=`Correspondencia contrastada con revision/temario-oficial.json y las convocatorias vigentes: A1 BOE-A-2025-25938 y A2 BOE-A-2025-26262. El material académico acredita cobertura temática, no sustituye las fuentes primarias. ${c.actualizada.revision.observaciones}`;
 q.revision.observaciones=q.clasificacion.nota;q.comentarios=q.clasificacion.nota;
 q.revision.fuentes.push({url:d.url,referencia:`${d.label}; cotejo específico del contenido y cobertura curricular.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo académico, temario oficial y convocatorias actualizado para IDs 1986–1990.');
