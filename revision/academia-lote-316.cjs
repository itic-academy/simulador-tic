const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-316.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 normalization:{url:'https://drive.google.com/file/d/1HKwUIuFhm-wVG0e8kZfFm1R8qI1rGS2G/view?usp=drivesdk',label:'ITIC Academy, bloque Organismos de normalización, A1-50, versión 2026.1'},
 os:{url:'https://drive.google.com/file/d/1nXa2jkiUqpu31smkt5D8WswcTgEN7XlB/view?usp=drivesdk',label:'ITIC Academy, bloque Aplicaciones móviles y sistemas operativos, fundamentos de sistemas operativos, versión 2026.1'},
 hardware:{url:'https://drive.google.com/file/d/12heek9CTZHiGHjtWvLjdjOE7vIQdlYFm/view?usp=drivesdk',label:'ITIC Academy, bloque Hardware, arquitectura de ordenadores, Grid Computing y microprocesadores, versión 2026.2'}
};
const mapping={
 1896:{doc:['normalization'],detail:'documento centrado en A1-50, normalización nacional/internacional, conformidad y certificación; actualiza la diferencia entre UNE y AENOR Internacional.',topics:['A1-50'],note:'Cotejo curricular directo con A1-50. El programa A2 no tiene epígrafe específico de organismos nacionales de normalización, así que no se fuerza una adscripción A2.'},
 1897:{doc:['os'],detail:'fundamentos de sistemas operativos, compatibles con el contexto de interfaces normalizadas; la adscripción específica es A1-59 y A2-II-2.',topics:['A1-59','A2-II-2'],note:'Cotejo temático con sistemas operativos. La identificación actual de POSIX y Austin Joint Working Group se comprueba en IEEE SA.'},
 1898:{doc:['hardware'],detail:'el bloque cubre el epígrafe A1-52, Grid Computing, y las secciones de computación distribuida y grid computing.',topics:['A1-52','A2-II-1'],note:'Cotejo curricular de Grid Computing y sistemas de altas prestaciones. La vigencia retirada del Globus Toolkit se verifica separadamente en su sitio oficial.'},
 1899:{doc:['hardware'],detail:'el bloque cubre computación distribuida, altas prestaciones, ley de Amdahl y escalabilidad.',topics:['A1-52','A2-II-1'],note:'Cotejo de altas prestaciones y escalabilidad; la formulación y atribución se contrastan con el artículo original de Gustafson.'},
 1900:{doc:['hardware'],detail:'el bloque contiene arquitectura de ordenadores, microprocesadores y arquitecturas RISC, además del epígrafe A1-54 sobre dispositivos personales y móviles.',topics:['A1-54','A2-II-1'],note:'Cotejo curricular de dispositivos de consumo y arquitectura actual de ordenadores; la distinción Arm-ISA frente a fabricante se valida en fuentes primarias de Arm.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),r=mapping[c.id];assert.ok(q?.revision&&r,`Falta cotejo ${c.id}`);
 for(const id of [...q.clasificacion.A1,...q.clasificacion.A2,...r.topics])assert.ok(official.has(id),id);
 const selections=r.doc.map(k=>docs[k]);assert.ok(selections.every(Boolean));
 q.clasificacion.bloque_academia=`${selections.map(d=>d.label).join('; ')}; ${r.detail}`;
 q.clasificacion.nota=`${r.note} Correspondencia cotejada con revision/temario-oficial.json y convocatorias BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2); el cotejo curricular acredita cobertura temática, no sustituye las fuentes primarias.`;
 q.revision.observaciones+=` ${q.clasificacion.nota}`;q.comentarios=q.revision.observaciones;
 for(const d of selections)q.revision.fuentes.push({url:d.url,referencia:`${d.label}; cotejo de cobertura y límites.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo de academia, temario oficial y convocatorias actualizado para IDs 1896–1900.');
