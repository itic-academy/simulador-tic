const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-321.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 commerce:{url:'https://drive.google.com/file/d/1FPkzhljZaHbxADbo36QNm9U9gwGy7lIt/view?usp=drivesdk',label:'ITIC Academy, bloque 35 Comercio electrónico y factura electrónica, A1-78/A2-O10, versión 2026.2'},
 crypto:{url:'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',label:'ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma, A1-79/80/81 y A2-O6/O9/T13, versión 2026.1'}
};
const mapping={
 1921:{doc:['commerce'],detail:'el bloque desarrolla comercio electrónico y factura electrónica (A1-78), pero no define EDI en el texto consultado; por eso se registra solo el encaje temático y UNECE sustenta la definición de EDI.',topics:['A1-78'],note:'Cotejo temático con comercio electrónico y facturación. El bloque académico consultado no trata expresamente EDI; no se atribuye esa definición a la academia ni se fuerza una correspondencia A2 genérica.'},
 1922:{doc:['crypto'],detail:'el apartado 2.2 trata algoritmos simétricos legados: DES y 3DES/TDEA ya no se recomiendan para cifrado nuevo; el estado NIST se verifica en sus recomendaciones de transición.',topics:['A1-79','A2-II-13'],note:'Cotejo con cifrado simétrico y algoritmos legados. La vigencia concreta de TDEA se resuelve con la guía NIST, no solo con el material de preparación.'},
 1923:{doc:['crypto'],detail:'el bloque cubre algoritmos de firma y su diferencia respecto al cifrado, y advierte que DSA aparece en versiones previas de FIPS; el estado exacto se contrasta con FIPS 186-5 vigente.',topics:['A1-79','A1-80','A2-I-6','A2-II-13'],note:'Cotejo con criptografía, firma digital e identidad electrónica. Se destaca el cambio temporal de FIPS 186-4 a FIPS 186-5 para no memorizar como actual la generación de firma DSA.'},
 1924:{doc:['crypto'],detail:'el apartado 9 desarrolla certificados digitales X.509, PKI, ciclo de vida y gestión diferenciada de claves públicas y privadas.',topics:['A1-80','A2-I-6'],note:'Cotejo curricular específico con certificados X.509, PKI y claves públicas/privadas.'},
 1925:{doc:['crypto'],detail:'el bloque incluye Smart Cards y DNI electrónico; A2 O6 trata expresamente el DNIe y O9 identificación/autenticación para acceso electrónico a AAPP. La precisión sobre CAN/PACE se comprueba en la documentación técnica oficial policial/FNMT.',topics:['A1-81','A2-I-6','A2-I-9'],note:'Cotejo específico con DNI electrónico, smart cards, identificación y autenticación; la cantidad de dígitos y su uso NFC se acreditan con fuente técnica oficial del DNIe 3.0.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),r=mapping[c.id];assert.ok(q?.revision&&r,`Falta cotejo ${c.id}`);
 for(const id of [...q.clasificacion.A1,...q.clasificacion.A2,...r.topics])assert.ok(official.has(id),id);
 const selections=r.doc.map(k=>docs[k]);assert.ok(selections.every(Boolean));
 q.clasificacion.bloque_academia=`${selections.map(d=>d.label).join('; ')}; ${r.detail}`;
 q.clasificacion.nota=`${r.note} Correspondencia contrastada con revision/temario-oficial.json y convocatorias BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2); el cotejo temático no sustituye la fuente primaria.`;
 q.revision.observaciones+=` ${q.clasificacion.nota}`;q.comentarios=q.revision.observaciones;
 for(const d of selections)q.revision.fuentes.push({url:d.url,referencia:`${d.label}; cotejo de contenido y alcance.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo de Drive, temario oficial y convocatorias actualizado para IDs 1921–1925.');
