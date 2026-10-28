const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-328.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 correo:{url:'https://drive.google.com/file/d/1nHGBMG4P3il5v4hZ1-RKdHmGzUPiwqnA/view?usp=drivesdk',label:'ITIC Academy, Tema 122 Correo, Mensajería y Servicios de Directorio, actualización agosto de 2026'},
 wireless:{url:'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk',label:'ITIC Academy, Bloque 46 Redes Inalámbricas y Comunicaciones Móviles, versión 2026.1'},
 mobile:{url:'https://drive.google.com/file/d/1nXa2jkiUqpu31smkt5D8WswcTgEN7XlB/view?usp=drivesdk',label:'ITIC Academy, Bloque 47 Aplicaciones Móviles y Sistemas Operativos, versión 2026.1'},
 security:{url:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',label:'ITIC Academy, Bloque 48 Seguridad en Redes y Nivel de Aplicación, actualización 2026'}
};
const mapping={
 1956:{doc:['correo'],detail:'el documento trata expresamente X.400 como modelo clásico de mensajería dentro del tema 122. Su status normativo actual y la relación OSI se comprueban en ITU-T.',topics:['A1-122','A2-II-8'],note:'Cotejo directo del epígrafe de correo/mensajería; la clave técnica se funda en la recomendación ITU-T.'},
 1957:{doc:['wireless'],detail:'el bloque 46 cubre GSM dentro de comunicaciones móviles. Para precisar la historia institucional se contrasta con la cronología oficial de ETSI: el comité GSM pasó de CEPT a ETSI en 1989.',topics:['A1-123','A2-IV-15'],note:'Cotejo de tema GSM y clasificación oficial; la secuencia CEPT→ETSI procede de la fuente institucional primaria.'},
 1958:{doc:['wireless'],detail:'el bloque 46 cubre DECT y las tecnologías móviles. No se atribuye a la academia la longitud de la clave del cipher: la distinción DSC de 64 bits frente a DSC2 de 128 se verifica en ETSI.',topics:['A1-123','A1-125','A2-IV-15','A2-IV-12'],note:'Cotejo temático DECT/seguridad; la respuesta precisa depende de distinguir DSC original de DSC2 en ETSI TS/EN.'},
 1959:{doc:['mobile'],detail:'el bloque 47 compara aplicaciones web, híbridas, multiplataforma y nativas; explica que el desarrollo nativo puede ofrecer mejor rendimiento/acceso al hardware a mayor coste. La pregunta se acota a WebView clásica y se añade que el rendimiento concreto depende de tecnología y carga.',topics:['A1-124','A2-III-12'],note:'Cotejo directo de las tecnologías móviles actuales. La ventaja/desventaja se formula como tendencia de arquitectura, no como ley universal.'},
 1960:{doc:['security'],detail:'el bloque 48 trata vulnerabilidades, explotación y seguridad del software/aplicación. La definición se comprueba con OWASP y NIST.',topics:['A1-126','A2-III-12'],note:'Cotejo temático de seguridad de aplicación; la definición de exploit se contrasta con OWASP/NIST, no se deriva del resumen académico.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),r=mapping[c.id];assert.ok(q?.revision&&r,`Falta cotejo ${c.id}`);
 for(const id of [...q.clasificacion.A1,...q.clasificacion.A2,...r.topics])assert.ok(official.has(id),id);
 const selections=r.doc.map(k=>docs[k]);assert.ok(selections.every(Boolean));
 q.clasificacion.bloque_academia=`${selections.map(d=>d.label).join('; ')}; ${r.detail}`;
 q.clasificacion.nota=`${r.note} Correspondencia contrastada con revision/temario-oficial.json y convocatorias BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2); el encaje curricular no sustituye la fuente primaria.`;
 q.revision.observaciones+=` ${q.clasificacion.nota}`;q.comentarios=q.revision.observaciones;
 for(const d of selections)q.revision.fuentes.push({url:d.url,referencia:`${d.label}; cotejo de cobertura y alcance académico.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo de ITIC Academy, temario oficial A1/A2 y convocatorias actualizado para IDs 1956–1960.');
