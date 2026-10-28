const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-327.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 economia:{url:'https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk',label:'ITIC Academy, Bloque 6 Economía, Sociedad, Empleo y Transformación Digital, actualización 1-10-2026'},
 redes:{url:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',label:'ITIC Academy, Bloque 42 Redes, actualización 2026'},
 protocolos:{url:'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',label:'ITIC Academy, Bloque 43 Protocolos, actualización 2026'},
 wireless:{url:'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk',label:'ITIC Academy, Bloque 46 Redes Inalámbricas, versión 2026.1'}
};
const mapping={
 1951:{doc:['protocolos'],detail:'el bloque 43 desarrolla los protocolos y el transporte TCP/IP; el carácter sin conexión y la falta de garantías se cotejan con las RFC 768 y 8085.',topics:['A1-108','A2-II-8'],note:'Cotejo temático con ITIC Academy 2026; la semántica normativa de UDP se toma de las RFC del IETF.'},
 1952:{doc:['economia'],detail:'el bloque 6 incluye Industria Conectada 4.0 (2015–2016), así como sus objetivos e iniciativas. La pregunta se fecha en 2015 porque las cuatro líneas citadas son las del dossier original; el material se usa como mapa curricular.',topics:['A1-117'],note:'Cotejo temático A1-117 con ITIC Academy; la lista literal de cuatro líneas se verifica en el dossier oficial de La Moncloa de 2015.'},
 1953:{doc:['economia'],detail:'el bloque 6 cubre transformación digital e iniciativas públicas de digitalización; en el contenido leído no se halló el nombre PNTI. Se limita el mapa a A1-117 y la identificación histórica se fundamenta en el plan oficial de 2017 y documentos de Red.es/BOE.',topics:['A1-117'],note:'Cotejo del encaje curricular con ITIC Academy. No se atribuye al material la identificación exacta del PNTI, no localizado en el documento revisado.'},
 1954:{doc:['redes','protocolos'],detail:'los bloques 42 y 43 incluyen topología, gestión/administración de LAN y protocolos OSI/Ethernet. El protocolo LLDP y el alcance de 802.1AB se confirman en IEEE.',topics:['A1-118','A2-IV-9'],note:'Cotejo temático de redes locales y protocolos; la función precisa de LLDP se fundamenta en IEEE 802.1AB.'},
 1955:{doc:['redes','protocolos'],detail:'los bloques 42 y 43 comparan métodos de acceso LAN e identifican Token Ring 802.5 como tecnología histórica; la reserva/prioridad exacta del testigo se valida en RFC 2816.',topics:['A1-118','A2-IV-8'],note:'Cotejo de LAN y métodos de acceso. El ítem se presenta como histórico y la mecánica exacta se contrasta con RFC 2816, no con una simplificación del material.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),r=mapping[c.id];assert.ok(q?.revision&&r,`Falta cotejo ${c.id}`);
 for(const id of [...q.clasificacion.A1,...q.clasificacion.A2,...r.topics])assert.ok(official.has(id),id);
 const selections=r.doc.map(k=>docs[k]);assert.ok(selections.every(Boolean));
 q.clasificacion.bloque_academia=`${selections.map(d=>d.label).join('; ')}; ${r.detail}`;
 q.clasificacion.nota=`${r.note} Correspondencia contrastada con revision/temario-oficial.json y convocatorias BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2); el temario aporta encaje, no sustituye las fuentes primarias.`;
 q.revision.observaciones+=` ${q.clasificacion.nota}`;q.comentarios=q.revision.observaciones;
 for(const d of selections)q.revision.fuentes.push({url:d.url,referencia:`${d.label}; cotejo de cobertura académica y alcance.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo de ITIC Academy, temario oficial A1/A2 y convocatorias actualizado para IDs 1951–1955.');
