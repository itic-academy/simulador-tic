const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1326.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={hardware:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',mobile:'https://drive.google.com/file/d/1nXa2jkiUqpu31smkt5D8WswcTgEN7XlB/view?usp=drivesdk',db:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',web:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk'};
const notes={
 6951:['hardware','ITIC Academy, bloque Hardware, servidores y dispositivos (A1 52–57, A2 T1/C6), versión 2026.1, 31-08-2026: incluye protección de datos en PC y dispositivos; se coteja la cifra histórica de BitLocker con Microsoft y se anota que la versión Vista es legado sin soporte.'],
 6952:['mobile','ITIC Academy, bloque Aplicaciones móviles y sistemas operativos (2026.1, actualizado en 2026): incluye Android, arquitectura de sistema y dispositivos móviles; la descripción de HAL se comprueba directamente en la documentación AOSP vigente.'],
 6953:['db','ITIC Academy, bloque Bases de datos, SQL y modelado de datos (A1 63/64/89, A2 T5/D4/C2), versión 2026.1, 31-08-2026: cubre modelo relacional, restricciones, claves y normalización; los detalles se contrastan con documentación actual de SQL.'],
 6954:['web','ITIC Academy, bloque Tecnologías de sistemas de información (A1 65–68 y otros, A2 T3/T9/D10–D12), versión 2026.1, 31-08-2026: incluye scripts de cliente/JavaScript y estándares web; se depura el vocabulario para distinguir ECMAScript de estrategias de ejecución de motores.'],
 6955:['web','ITIC Academy, bloque Tecnologías de sistemas de información (A1 65/67/77, A2 III.10/III.12), versión 2026.1, 31-08-2026: cubre Java, APIs web y XML; se actualizaron las referencias de JAXB a Jakarta XML Binding y se separan las funciones de lectura SAX y lectura/escritura StAX.']
};
const marker='Cotejo curricular ITIC Academy:';
const strip=v=>{const s=(v||'').trim(),i=s.indexOf(marker);return i<0?s:s.slice(0,i).trim()};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),entry=notes[c.id];assert.ok(q&&entry,`Falta pregunta o nota ${c.id}`);
 const codes=[...q.clasificacion.A1,...q.clasificacion.A2].join('/')||'sin epígrafe A2 específico';
 const note=`${marker} ${entry[1]} Correspondencia oficial: ${codes}. La academia se usa para cotejar cobertura y actualización, no como sustituto de fuentes primarias.`;
 q.clasificacion.bloque_academia=entry[1];q.clasificacion.nota=`${strip(q.clasificacion.nota)} ${note}`.trim();q.comentarios=`${strip(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${strip(q.revision.observaciones)} ${note}`.trim();
 if(!q.revision.fuentes.some(x=>x.url===docs[entry[0]]))q.revision.fuentes.push({url:docs[entry[0]],referencia:`Cotejo curricular ITIC Academy: ${entry[1]}`});c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo Academy aplicado a las preguntas 6951–6955.');
