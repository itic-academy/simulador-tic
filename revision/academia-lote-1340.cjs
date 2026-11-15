const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1340.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={strategy:'https://drive.google.com/file/d/1fti1UIhEIqK3pY8GBENi-4rTKwoEG8tF/view?usp=drivesdk',networks:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',mobile:'https://drive.google.com/file/d/1nXa2jkiUqpu31smkt5D8WswcTgEN7XlB/view?usp=drivesdk',tech:'https://drive.google.com/file/d/1LuUHoQr8oDmptteHIQ72VdCvJFsnu3LF/view?usp=drivesdk'};
const notes={
 7021:[['strategy','ITIC Academy, bloque 12 Directivo TIC y Planificación Estratégica, versión 2026: incluye CMI/Balanced Scorecard en el mapa A1 33/A2 II-4; contraste curricular directo, no fuente conceptual primaria.']],
 7022:[['networks','ITIC Academy, bloque 42 Redes, actualización 2026: sitúa DOCSIS/CATV en infraestructuras de acceso y redes de cable; contraste curricular contextual.']],
 7023:[['mobile','ITIC Academy, bloque 47 Aplicaciones móviles y sistemas operativos, versión 2026.1 (30/09/2026): incluye iOS, distribución de aplicaciones y sistemas operativos móviles; cobertura curricular directa.']],
 7024:[['networks','ITIC Academy, bloque 42 Redes, actualización 2026: incluye redes IP/IPv6 dentro de A1 115 y A2 II-8; contraste curricular directo del área, no de la longitud del campo.']],
 7025:[['tech','ITIC Academy, bloque 30 Tecnologías de Sistemas de Información, versión 2026.2 (octubre de 2026): incluye A1 tema 66 y plataforma .NET en su mapa técnico; no presenta SQL Server Compact ni Web Deploy 3.5 como herramientas actuales. El cotejo es curricular y pone de relieve el carácter histórico del ítem.']]
};
const marker='Cotejo curricular ITIC Academy:';
const strip=v=>{const s=(v||'').trim(),i=s.indexOf(marker);return i<0?s:s.slice(0,i).trim()};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),entries=notes[c.id];assert.ok(q&&entries,'Falta pregunta o nota '+c.id);
 const codes=[...q.clasificacion.A1,...q.clasificacion.A2].join('/')||'sin epígrafe A2 directamente equivalente';
 const refs=[];
 for(const [key,desc] of entries){const url=docs[key];refs.push(desc);if(!q.revision.fuentes.some(x=>x.url===url))q.revision.fuentes.push({url,referencia:desc});}
 const note=marker+' '+refs.join(' ')+' Correspondencia oficial: '+codes+'. La academia se utiliza para cotejar currículo y versión, no sustituye a las fuentes técnicas primarias.';
 q.clasificacion.bloque_academia=refs.join(' ');q.clasificacion.nota=(strip(q.clasificacion.nota)+' '+note).trim();q.comentarios=(strip(q.comentarios)+' '+note).trim();q.revision.observaciones=(strip(q.revision.observaciones)+' '+note).trim();c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo ITIC Academy aplicado a las preguntas 7021–7025.');
