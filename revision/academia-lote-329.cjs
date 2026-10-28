const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-329.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 seguridad:{url:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',label:'ITIC Academy, Bloque 48 Seguridad en Redes y en el Nivel de Aplicación, versión 2026.1'},
 protocolos:{url:'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',label:'ITIC Academy, Bloque 43 Protocolos, actualización 2026'},
 normativa:{url:'https://drive.google.com/file/d/1yNoGRQ6orxdHGYBQ-RW4lFzaexftWnIm/view?usp=drivesdk',label:'ITIC Academy, Bloque 49 Normas Reguladoras de las Telecomunicaciones, versión 2026.1'}
};
const mapping={
 1961:{doc:['seguridad'],detail:'el Bloque 48 cubre cortafuegos de aplicación, ataques web y los temas oficiales A1 125/126; la finalidad y alcance concretos de WAFEC se cotejaron en WASC/OWASP.',topics:['A1-125','A1-126','A2-IV-12','A2-III-12'],note:'Cotejo temático; la definición de WAFEC y la naturaleza software de ModSecurity se fundan en fuentes primarias WASC/OWASP.'},
 1962:{doc:['protocolos','seguridad'],detail:'los bloques 43 y 48 cubren TLS, suites criptográficas y protocolos seguros; la distinción histórica SSL 3.0 frente a TLS/AES se verifica en las RFC del IETF.',topics:['A1-125','A2-IV-12'],note:'Cotejo curricular; el alcance por versión de SSL/TLS se comprueba en RFC 6101, 3268 y 7568.'},
 1963:{doc:['seguridad'],detail:'el Bloque 48 cubre detección de intrusiones y herramientas de ciberseguridad; el modelo NIST diferencia detección en red y basada en host/aplicación.',topics:['A1-125','A2-II-13','A2-IV-12'],note:'Cotejo académico del tema IDS; NIST SP 800-94 acredita por qué el enunciado genérico original no podía asignarse a una sola capa OSI.'},
 1964:{doc:['seguridad'],detail:'el Bloque 48 incorpora gestión de incidentes y equipos de respuesta; la atribución concreta INCIBE-CERT/CCN-CERT se verificó en el art. 11 del RDL 12/2018 y el ENS.',topics:['A1-125','A2-II-13'],note:'Cotejo temático; la competencia de referencia no se infiere del material académico, sino del texto legal consolidado.'},
 1965:{doc:['normativa'],detail:'el Bloque 49, actualizado en 2026, cubre la Ley 11/2022, sus modificaciones y numeración (A1-129); se cotejó el encaje A2 con la normativa reguladora de redes, sin asignar un epígrafe que no trata específicamente quién aprueba los planes nacionales.',topics:['A1-129'],note:'Cotejo temático con el programa A1/A2 y el Bloque 49; la competencia exacta procede del artículo 30.3 de la Ley 11/2022.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),r=mapping[c.id];assert.ok(q?.revision&&r,`Falta cotejo ${c.id}`);
 for(const id of [...q.clasificacion.A1,...q.clasificacion.A2,...r.topics])assert.ok(official.has(id),id);
 const selections=r.doc.map(k=>docs[k]);assert.ok(selections.every(Boolean));
 q.clasificacion.bloque_academia=`${selections.map(d=>d.label).join('; ')}; ${r.detail}`;
 q.clasificacion.nota=`${r.note} Correspondencia cotejada con revision/temario-oficial.json y convocatorias BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2); el material académico orienta, no sustituye las fuentes primarias.`;
 q.revision.observaciones+=` ${q.clasificacion.nota}`;q.comentarios=q.revision.observaciones;
 for(const d of selections)q.revision.fuentes.push({url:d.url,referencia:`${d.label}; cotejo de cobertura académica y alcance.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo de ITIC Academy, temario oficial A1/A2 y convocatorias actualizado para IDs 1961–1965.');
