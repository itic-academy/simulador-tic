const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1319.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
constitution:'https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk',
eu:'https://drive.google.com/file/d/1KTz7CNz88u_4zyVLC2oYQBnmJRHIG7J7/view?usp=drivesdk',
admin:'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk'
};
const notes={
6916:['constitution','ITIC Academy, bloque 01 Constitución/Estado/AGE, material 2026: desarrolla los arts. 148, 149 y 150, incluidas las cláusulas de cierre del art. 149.3 y las vías de transferencia del art. 150.2. Correspondencia oficial A1-3/A2-I.1.'],
6917:['constitution','ITIC Academy, bloque 01, tema de principios constitucionales de la Administración; bloque 03 Actuación Administrativa, sección 2.1, desarrolla los principios del art. 103 CE y su conexión con el art. 3 LRJSP. Correspondencia oficial A1-4/A2-I.8.'],
6918:['eu','ITIC Academy, bloque 02 Unión Europea (actualización octubre de 2026): cronología y contenido del Tratado de Maastricht/TUE, firma 7-2-1992 y entrada en vigor 1-11-1993, creación de la Unión Europea y principales innovaciones. Correspondencia oficial A1-5; no existe epígrafe UE específico en el programa A2 GSI vigente consultado.'],
6919:['constitution','ITIC Academy, bloque 01 Constitución/Estado/AGE: apartado de organización territorial de la AGE y Subdelegados del Gobierno; bloque 03 Actuación Administrativa, régimen jurídico del sector público, desarrolla la Ley 40/2015. Correspondencia oficial A1-6/A2-I.8; nivel y condición se cotejan con las leyes vigentes.'],
6920:['admin','ITIC Academy, bloque 03 Actuación Administrativa (actualización 2026): temario y material cubren fuentes del Derecho administrativo, jerarquía de fuentes, ley, reglamento y otras fuentes. Correspondencia oficial A1-7/A2-I.8; la articulación entre fuentes directas y jurisprudencia se comprueba en art. 1 del Código Civil.' ]
};
const marker='Cotejo curricular ITIC Academy:';
const strip=v=>{const s=(v||'').trim(),i=s.indexOf(marker);return i<0?s:s.slice(0,i).trim()};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),[key,desc]=notes[c.id];assert.ok(q&&desc,`Falta cotejo ${c.id}`);const note=`${marker} ${desc} Correspondencia oficial: ${[...q.clasificacion.A1,...q.clasificacion.A2].join('/')||'sin epígrafe A2 equivalente'}. El cotejo académico no sustituye la fuente primaria.`;q.clasificacion.bloque_academia=desc;q.clasificacion.nota=`${strip(q.clasificacion.nota)} ${note}`.trim();q.comentarios=`${strip(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${strip(q.revision.observaciones)} ${note}`.trim();const url=docs[key];if(!q.revision.fuentes.some(x=>x.url===url))q.revision.fuentes.push({url,referencia:`Cotejo curricular ITIC Academy: ${desc}`});c.actualizada=structuredClone(q)}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo Academy aplicado a 6916–6920.');
