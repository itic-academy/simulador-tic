const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-326.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 redes:{url:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',label:'ITIC Academy, Bloque 42 Tema Redes, actualización 2026'},
 wifi:{url:'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk',label:'ITIC Academy, Bloque 46 Redes Inalámbricas y Comunicaciones Móviles, versión 2026.1'},
 appsec:{url:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',label:'ITIC Academy, Bloque 48 Seguridad en Redes y en el Nivel de Aplicación, actualización 2026'}
};
const mapping={
 1946:{doc:['redes','appsec'],detail:'el bloque 42 aborda servicios/arquitectura de Internet y servidores; el bloque 48 aborda seguridad de aplicaciones, sesiones y cookies. Sirven para situar el epígrafe y sus conceptos, no sostienen que cookies sean registros exhaustivos de acceso; la diferencia concreta se contrasta con Apache e IETF.',topics:['A1-119','A2-IV-13'],note:'Cotejo de alcance temático con ITIC Academy 2026; la semántica de access logs frente a cookies se fundamenta en Apache HTTP Server y RFC 6265.'},
 1947:{doc:['redes'],detail:'el bloque 42 incluye arquitectura de redes, protocolos y los epígrafes oficiales de OSI/TCP-IP. El término «segmento TCP» se precisa con RFC 9293; el enunciado queda limitado a HTTP sobre TCP.',topics:['A1-111','A2-II-8'],note:'Cotejo académico del modelo OSI y protocolos; la precisión sobre segmento TCP/datagrama UDP se fundamenta en RFC 9293 y RFC 768.'},
 1948:{doc:['redes'],detail:'el bloque 42 desarrolla MPLS como red de transporte y el epígrafe oficial A1-113. El tamaño de una entrada de etiqueta se comprueba directamente en RFC 3032.',topics:['A1-113','A2-IV-10'],note:'Cotejo temático MPLS; el valor de 32 bits por entrada se fundamenta directamente en RFC 3032 y no se atribuye como dato textual a la academia.'},
 1949:{doc:['redes'],detail:'el bloque 42 sitúa MPLS en redes de transporte; el campo de 20 bits se comprueba directamente en la figura 1 y §2 de RFC 3032.',topics:['A1-113','A2-IV-10'],note:'Cotejo temático MPLS; el reparto exacto de bits procede de RFC 3032.'},
 1950:{doc:['wifi'],detail:'el bloque 46 (v2026.1) contiene la sección de Bluetooth BR/EDR y declara en el resumen técnico la topología de piconet con siete dispositivos activos; diferencia el modelo BLE. Se contrasta el dato con la especificación Bluetooth Core vigente.',topics:['A1-114','A2-IV-11'],note:'Cotejo directo con el material ITIC Academy 2026 y la especificación Bluetooth Core 6.1; se explicita BR/EDR para no confundir la topología con BLE.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),r=mapping[c.id];assert.ok(q?.revision&&r,`Falta cotejo ${c.id}`);
 for(const id of [...q.clasificacion.A1,...q.clasificacion.A2,...r.topics])assert.ok(official.has(id),id);
 const selections=r.doc.map(k=>docs[k]);assert.ok(selections.every(Boolean));
 q.clasificacion.bloque_academia=`${selections.map(d=>d.label).join('; ')}; ${r.detail}`;
 q.clasificacion.nota=`${r.note} Correspondencia contrastada con revision/temario-oficial.json y convocatorias BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2); la afinidad curricular no sustituye las fuentes técnicas primarias.`;
 q.revision.observaciones+=` ${q.clasificacion.nota}`;q.comentarios=q.revision.observaciones;
 for(const d of selections)q.revision.fuentes.push({url:d.url,referencia:`${d.label}; cotejo de contenido, edición y alcance académico.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo de ITIC Academy, temario oficial A1/A2 y convocatorias actualizado para IDs 1946–1950.');
