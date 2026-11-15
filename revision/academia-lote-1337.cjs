const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1337.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 access:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',
 protocol:'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',
 itil:'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk',
 storage:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',
 email:'https://drive.google.com/file/d/1nHGBMG4P3il5v4hZ1-RKdHmGzUPiwqnA/view?usp=drivesdk'
};
const notes={
 7006:['access','ITIC Academy, bloque 30 Tecnologías de Sistemas de Información, versión 2026.2: cubre HTML, navegadores y compatibilidad con estándares como ámbito relacionado. La búsqueda en Drive no localizó una explicación específica de WCAG; la clasificación y contenido de accesibilidad se contrastan directamente con los temas oficiales A1-44/A2-III-14 y W3C.'],
 7007:['protocol','ITIC Academy, bloque 43 Protocolos, versión 2026.1: desarrolla arquitectura OSI, las siete capas y protocolos; cotejo curricular. La precisión sobre SSH y su subprotocolo de transporte se funda en RFC 4251.'],
 7008:['itil','ITIC Academy, bloque 41 ITIL y COBIT, versión 2026.1: actualiza el contenido a ITIL 4/Version 5 y cubre gestión de servicios y acuerdos; cotejo de ámbito. La pregunta conserva explícitamente la definición histórica ITIL v3, respaldada por su glosario.'],
 7009:['storage','ITIC Academy, bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1: cotejo del tema de almacenamiento, dispositivos y latencia. El bloque trata tipos/componentes de almacenamiento; la definición física se verifica con SNIA y NIST.'],
 7010:['email','ITIC Academy, bloque 45 Correo electrónico, mensajería y servicios de directorio, versión 2026.1: incluye un epígrafe X.400 y la estructura IPM, sobre, contenido y partes del mensaje; cotejo directo.']
};
const marker='Cotejo curricular ITIC Academy:';
const strip=v=>{const s=(v||'').trim(),i=s.indexOf(marker);return i<0?s:s.slice(0,i).trim()};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),entry=notes[c.id];assert.ok(q&&entry,'Falta pregunta o nota '+c.id);
 const codes=[...q.clasificacion.A1,...q.clasificacion.A2].join('/')||'sin epígrafe A2 directamente equivalente';
 const note=marker+' '+entry[1]+' Correspondencia oficial: '+codes+'. El cotejo académico establece cobertura temática, no sustituye la fuente técnica o normativa.';
 q.clasificacion.bloque_academia=entry[1];q.clasificacion.nota=(strip(q.clasificacion.nota)+' '+note).trim();q.comentarios=(strip(q.comentarios)+' '+note).trim();q.revision.observaciones=(strip(q.revision.observaciones)+' '+note).trim();
 if(!q.revision.fuentes.some(x=>x.url===docs[entry[0]]))q.revision.fuentes.push({url:docs[entry[0]],referencia:entry[1]});c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo ITIC Academy aplicado a las preguntas 7006–7010.');
