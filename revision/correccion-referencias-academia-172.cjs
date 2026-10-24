// Corrige la referencia de academia asociada a Codd en dos lotes previos.
// Los snapshots originales de las preguntas no se modifican.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const dir=__dirname,bankPath=path.join(dir,'..','preguntas_preparatic.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const academyUrl='https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk';
const cases={
 1164:{log:'cambios-lote-169.json',block:'29 · Bases de Datos, edición 2026, § 2.5 Reglas de Codd, A1-63/A1-64/A2-II-5',note:'Cotejo directo con ITIC Academy, bloque 29 «Bases de Datos», edición 2026, § 2.5 Reglas de Codd (A1-63/A1-64/A2-II-5); regla y clave contrastadas con la publicación histórica de Codd.',observation:'Codd sí incluyó la actualización de alto nivel (insertar, actualizar y borrar conjuntos de filas); la clave original que lo negaba era errónea. Se reformula con tres reglas reconocibles y un distractor ajeno para dar una única clave. La referencia de academia se coteja con el bloque 29 correcto, edición 2026, § 2.5; el PDF del bloque 30 que figuraba antes no contiene las reglas de Codd. La formulación se contrasta con la publicación histórica de Codd.'},
 1174:{log:'cambios-lote-171.json',block:'29 · Bases de Datos, edición 2026, § 2.5 Reglas de Codd, A1-64/A2-II-5',note:'Cotejo directo con ITIC Academy, bloque 29 «Bases de Datos», edición 2026, § 2.5 Reglas de Codd (A1-64/A2-II-5); contexto histórico y texto de la regla 12 cotejados con la publicación de Codd.',observation:'Se explicita que se pregunta por la lista histórica de doce reglas de Codd (1985): la regla 12, «nonsubversion», impide que un acceso de bajo nivel eluda las restricciones del lenguaje relacional de nivel superior. No es un estándar actual de certificación de SGBD. La referencia de academia se coteja con el bloque 29 correcto, edición 2026, § 2.5; el PDF del bloque 30 citado antes no contiene las reglas de Codd. La literalidad se verifica en la transcripción de las publicaciones de 1985.'}
};
for(const [id,v] of Object.entries(cases)){
 const q=bank.preguntas.find(x=>x.id===Number(id));assert.ok(q&&q.revision,`Pregunta ${id} no revisada`);
 q.clasificacion.bloque_academia=v.block;q.clasificacion.nota=v.note;
 q.revision.fuentes=q.revision.fuentes.filter(x=>!x.url.includes('1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm'));
 q.revision.fuentes.push({url:academyUrl,referencia:v.note});
 q.revision.observaciones=v.observation;q.comentarios=v.observation;
 const logPath=path.join(dir,v.log),log=JSON.parse(fs.readFileSync(logPath,'utf8')),entry=log.cambios.find(x=>x.id===Number(id));
 assert.ok(entry,`El registro del ID ${id} no existe`);entry.actualizada=structuredClone(q);
 fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
}
const scripts=[
 ['lote-169.cjs',"academyDb:{url:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',referencia:'ITIC Academy, bloque 29, edición 2026.1, A1-63/A1-64/A2-II-5, bases de datos y modelo relacional: cotejo temático; nombres y contenido de reglas contrastados con el texto de Codd.'},","academyDb:{url:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',referencia:'ITIC Academy, bloque 29 «Bases de Datos», edición 2026, § 2.5 Reglas de Codd, A1-63/A1-64/A2-II-5; cotejo directo del tema y de sus reglas.'},"],
 ['lote-171.cjs',"academyDb:{url:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',referencia:'ITIC Academy, bloque 30 «Tecnologías de sistemas de información», edición 2026, apartados de bases de datos/modelo relacional: cotejo temático; la denominación y literalidad de la regla 12 se contrastan con el texto histórico de Codd.'},","academyDb:{url:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',referencia:'ITIC Academy, bloque 29 «Bases de Datos», edición 2026, § 2.5 Reglas de Codd; cotejo directo del tema y de su terminología histórica.'},"]
];
for(const [name,from,to] of scripts){const p=path.join(dir,name);let text=fs.readFileSync(p,'utf8');assert.ok(text.includes(from),`No se encuentra la referencia esperada en ${name}`);fs.writeFileSync(p,text.replace(from,to));}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');
console.log('Referencias de academia de los IDs 1164 y 1174 corregidas; snapshots originales preservados.');
