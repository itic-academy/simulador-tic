const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1338.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 alternatives:'https://drive.google.com/file/d/1DH-igjyag_aw_p36LaNS1djSWTKTakxb/view?usp=drivesdk',
 radio:'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk',
 java:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',
 blockchain:'https://drive.google.com/file/d/1XPK5LQ9c2kW6a2jqY4Yf9Q366BBcSlGd/view?usp=drivesdk'
};
const notes={
 7011:['alternatives','ITIC Academy, temas 40–42 Alternativas y Rentabilidad de las Inversiones, versión 3.2: apartado «Método TOPSIS» describe distancia mínima al ideal positivo y máxima al ideal negativo; correspondencia curricular directa.'],
 7012:['radio','ITIC Academy, bloque 46 Redes inalámbricas y comunicaciones móviles, versión 2026.1: incluye expresamente 5G SA y NSA, 5G-Advanced y arquitectura móvil.'],
 7013:['java','ITIC Academy, bloque 30 Tecnologías de Sistemas de Información, versión 2026.2: identifica JVM, bytecode, JDK y javac como conceptos distintos del entorno Java.'],
 7014:['blockchain','ITIC Academy, bloque 85 Blockchain, documento actualizado 2026: explica Proof of Work, minería Bitcoin y lo contrasta con Proof of Stake.'],
 7015:['java','ITIC Academy, bloque 30 Tecnologías de Sistemas de Información, versión 2026.2: cubre plataforma Java y JVM. No se encontró tratamiento específico de applets web; se anota como contexto histórico y se verifica su ejecución con documentación Oracle legada y el estado actual JDK 26.']
};
const marker='Cotejo curricular ITIC Academy:';
const strip=v=>{const s=(v||'').trim(),i=s.indexOf(marker);return i<0?s:s.slice(0,i).trim()};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),entry=notes[c.id];assert.ok(q&&entry,'Falta pregunta o nota '+c.id);
 const codes=[...q.clasificacion.A1,...q.clasificacion.A2].join('/')||'sin epígrafe A2 directamente equivalente';
 const note=marker+' '+entry[1]+' Correspondencia oficial: '+codes+'. El material académico se usa para cotejo de cobertura, no sustituye a la fuente técnica.';
 q.clasificacion.bloque_academia=entry[1];q.clasificacion.nota=(strip(q.clasificacion.nota)+' '+note).trim();q.comentarios=(strip(q.comentarios)+' '+note).trim();q.revision.observaciones=(strip(q.revision.observaciones)+' '+note).trim();
 if(!q.revision.fuentes.some(x=>x.url===docs[entry[0]]))q.revision.fuentes.push({url:docs[entry[0]],referencia:entry[1]});c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo ITIC Academy aplicado a las preguntas 7011–7015.');
