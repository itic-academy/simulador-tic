const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1206.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const b3='https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk';
const b9='https://drive.google.com/file/d/1-xmHgvxArWY8GroFD1eSdyPrAQjkBpzo/view?usp=drivesdk';
const map={
 6351:{url:b3,desc:'ITIC Academy, bloque 03 Administración Digital, actualización 2026: contiene el apartado LSSI-CE y contratación electrónica como contexto; no sustituye la comprobación literal del artículo 23 en BOE.'},
 6352:{url:b3,desc:'ITIC Academy, bloque 03 Administración Digital, actualización 2026: incluye accesibilidad de sitios públicos y LSSI-CE; cotejo curricular del tema, mientras el plazo de 2008 se verifica en la norma histórica del BOE.'},
 6353:{url:b3,desc:'ITIC Academy, bloque 03 Administración Digital, actualización 2026: aporta contexto de sociedad de la información y digitalización administrativa. En el documento cotejado no se localizó un tratamiento específico del Programa Kit Digital ni de su circuito de pagos.'},
 6354:{url:b9,desc:'ITIC Academy, bloque 09 Organización y Gestión de los SI, actualización 2026: define el SI con personas, datos, procesos/procedimientos y tecnología, y admite su existencia sin ordenadores; cobertura temática directa A1-28. No implica que el material enumere todos los modelos de componentes.'},
 6355:{url:b9,desc:'ITIC Academy, bloque 09 Organización y Gestión de los SI, actualización 2026: cubre la distinción horizontal/vertical por alcance funcional, pero no la taxonomía concreta “aplicaciones y/o procedimientos” del enunciado; esa falta de respaldo queda documentada como ambigüedad.'}
};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q&&m,'Falta pregunta/mapeo '+c.id);q.clasificacion.bloque_academia=m.desc;const note='Cotejo curricular de ITIC Academy: '+m.desc+' El material académico acredita la cobertura/mismatch señalado, no sustituye la verificación normativa oficial.';q.clasificacion.nota=(q.clasificacion.nota+' '+note).trim();q.comentarios=(q.comentarios+' '+note).trim();q.revision.observaciones=(q.revision.observaciones+' '+note).trim();q.revision.fuentes.push({url:m.url,referencia:'ITIC Academy/Drive: '+m.desc});c.actualizada=structuredClone(q);}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo curricular Academy/Drive actualizado para IDs 6351–6355.');
