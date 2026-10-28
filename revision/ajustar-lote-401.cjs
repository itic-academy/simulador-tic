// Completa las notas de revisión que aplicar-lote.cjs dejó truncadas por una
// llamada posicional incorrecta y conserva el estado histórico de la 2325.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bankPath=path.join(__dirname,'..','preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-401.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const notes={
 2321:'Se conserva la clave clásica XMLHttpRequest y se limita el enunciado al enfoque tradicional de AJAX: AJAX es una técnica, no una obligación de usar exclusivamente ese objeto. XMLHttpRequest está normalizado por WHATWG; Fetch es una API moderna que también permite solicitudes asíncronas.',
 2322:'Se actualiza WCAG 2.1 a WCAG 2.2 y se pregunta por los componentes obligatorios de una declaración opcional de conformidad. W3C no exige nombre o cargo del responsable; sí fecha, título/versión/URI, nivel, páginas cubiertas y tecnologías de las que se depende.',
 2323:'La clave «Relevancia» se mantiene, pero el enunciado limita la pregunta a los principios enumerados en el art. 5.1 RGPD. La norma usa «adecuados, pertinentes y limitados» para describir la minimización; «relevancia» no es un principio autónomo enumerado.',
 2324:'CCN-STIC-802 separa desviaciones (no conformidades mayores y menores), recomendaciones (observaciones y oportunidades de mejora) y puntos fuertes. Los dos grados preguntados son únicamente Mayor y Menor.',
 2325:'Respuesta confirmada solo para el régimen histórico del art. 11 RD 806/2014: el Comité de Estrategia TIC podía declarar proyectos prioritarios y trasladar la declaración como recomendación presupuestaria, no obligación. El RD 806/2014 fue derogado por RD 1125/2024; la pregunta se conserva como histórica.'
};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id);assert.ok(q&&notes[c.id]);q.revision.estado=c.id===2325?'historica':'corregida';q.revision.observaciones=`${notes[c.id]} ${q.clasificacion.nota}`;q.comentarios=q.revision.observaciones;c.actualizada=structuredClone(q);}
fs.writeFileSync(bankPath,`${JSON.stringify(bank,null,2)}\n`);fs.writeFileSync(logPath,`${JSON.stringify(log,null,2)}\n`);console.log('Notas y estado del lote 401 normalizados y guardados en el registro íntegro.');
