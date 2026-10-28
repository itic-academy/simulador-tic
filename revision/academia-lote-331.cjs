const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-331.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 constitucion:{url:'https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk',label:'ITIC Academy, Bloque 01 Constitución, Estado y AGE, versión 2026'},
 administracion:{url:'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk',label:'ITIC Academy, Bloque 03 Actuación Administrativa, actualización 2026'},
 contratacion:{url:'https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk',label:'ITIC Academy, Bloque 05 Contratación, Presupuestos y Compra TIC, actualización 2026'},
 servicios:{url:'https://drive.google.com/file/d/1wf9xQtg-rFSu_6YPmeUc_Y9J3bq1Lb-q/view?usp=drivesdk',label:'ITIC Academy, Tema 049 Servicios Comunes'}
};
const mapping={
 1971:{doc:['constitucion'],detail:'el Bloque 01 trata la Constitución y el art. 135 (estabilidad presupuestaria); se usa como encaje curricular y se contrasta el tenor con la Constitución publicada en BOE.',topics:['A1-1','A2-I-1'],note:'La formulación jurídica se verifica en el texto constitucional consolidado, no se deduce del material de preparación.'},
 1972:{doc:['administracion'],detail:'el Bloque 03 cubre el marco de administración electrónica y eIDAS/firma; la definición literal de firma electrónica se confirma en el anexo del RD 203/2021.',topics:['A1-80','A2-I-6'],note:'Cotejo de currículo de firma electrónica; se conserva el término legal exacto y se sustituye “reconocida” por la categoría eIDAS “cualificada”.'},
 1973:{doc:['contratacion'],detail:'el Bloque 05 cubre la Ley 9/2017 y sus órganos. Se distingue el capítulo de asistencia (mesas) del capítulo de consulta; la división legal se coteja en BOE.',topics:['A1-11'],note:'Cotejo temático de contratación pública; la diferencia entre órgano de asistencia y consultivo procede de la estructura de la LCSP.'},
 1974:{doc:['administracion'],detail:'el Bloque 03 cubre Ley 39/2015, registros electrónicos y REA/Apodera; la interoperabilidad con registros públicos se valida en la ley y en la DA 7.ª del RD 203/2021.',topics:['A1-8','A2-I-9'],note:'El material sitúa el tema en procedimiento y administración electrónica; la lista de registros interoperables se comprueba en BOE.'},
 1975:{doc:['servicios'],detail:'el Tema 049 incluye OBSAE y describe el informe REINA como recurso sobre indicadores de TIC en la AGE. Se confirma con el panel oficial del OBSAE y las publicaciones del sistema REINA.',topics:['A1-30','A2-I-10'],note:'Cotejo de cobertura; no se atribuye al material la vigencia de cada indicador, que se verifica directamente en OBSAE.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),r=mapping[c.id];assert.ok(q?.revision&&r,`Falta cotejo ${c.id}`);
 for(const id of [...q.clasificacion.A1,...q.clasificacion.A2,...r.topics])assert.ok(official.has(id),id);
 const selections=r.doc.map(k=>docs[k]);assert.ok(selections.every(Boolean));
 q.clasificacion.bloque_academia=`${selections.map(d=>d.label).join('; ')}; ${r.detail}`;
 q.clasificacion.nota=`${r.note} Correspondencia contrastada con revision/temario-oficial.json y convocatorias BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2); los materiales académicos aportan cobertura, no sustituyen las fuentes primarias.`;
 q.revision.observaciones+=` ${q.clasificacion.nota}`;q.comentarios=q.revision.observaciones;
 for(const d of selections)q.revision.fuentes.push({url:d.url,referencia:`${d.label}; cotejo de cobertura académica y alcance.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo de ITIC Academy, temario oficial A1/A2 y convocatorias actualizado para IDs 1971–1975.');
