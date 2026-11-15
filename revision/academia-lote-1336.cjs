const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1336.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 itil:'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk',
 tecnologias:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',
 datos:'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk',
 directorios:'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',
 documental:'https://drive.google.com/file/d/17UpEFvYfjQ4iUrx8UNNTJIFcj5xO4vlz/view?usp=drivesdk'
};
const notes={
 7001:['itil','ITIC Academy, bloque 41 ITIL y COBIT, actualización 2026: gestión de servicios e incidencias; cotejo curricular.'],
 7002:['tecnologias','ITIC Academy, bloque 30 Tecnologías de Sistemas de Información, actualización 2026: cubre el entorno Java del tema A1-67. No se localizó material específico sobre SWT; el cotejo es de dominio curricular.'],
 7003:['datos','ITIC Academy, bloque 32 Inteligencia Artificial y Ciencia de Datos, nuevo temario 2026: contenidos de ciencia de datos y analítica; cotejo curricular.'],
 7004:['directorios','ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma, actualización 2026: cubre protocolos de directorio LDAP/X.500. La búsqueda del material no localizó Ganymede en concreto.'],
 7005:['documental','ITIC Academy, bloque 40 Gestión Documental, actualización 2026: cubre gestión documental, CMS y DMS. La búsqueda no localizó Adobe LiveCycle Forms como producto concreto.']
};
const marker='Cotejo curricular ITIC Academy:';
const strip=v=>{const s=(v||'').trim(),i=s.indexOf(marker);return i<0?s:s.slice(0,i).trim()};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),entry=notes[c.id];assert.ok(q&&entry,'Falta pregunta o nota '+c.id);
 const codes=[...q.clasificacion.A1,...q.clasificacion.A2].join('/')||'sin equivalencia directa';
 const note=marker+' '+entry[1]+' Correspondencia oficial: '+codes+'. La mención del bloque coteja cobertura temática, no implica que la academia trate el producto o estándar concreto.';
 q.clasificacion.bloque_academia=entry[1];q.clasificacion.nota=(strip(q.clasificacion.nota)+' '+note).trim();q.comentarios=(strip(q.comentarios)+' '+note).trim();q.revision.observaciones=(strip(q.revision.observaciones)+' '+note).trim();
 if(!q.revision.fuentes.some(x=>x.url===docs[entry[0]]))q.revision.fuentes.push({url:docs[entry[0]],referencia:entry[1]});c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo ITIC Academy aplicado a las preguntas 7001–7005.');
