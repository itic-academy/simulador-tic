const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1339.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 security:'https://drive.google.com/file/d/18tJzWuBHyd4FbkzQIE5fIbSCRdlrt_1U/view?usp=drivesdk',
 mobile:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',
 interop:'https://drive.google.com/file/d/1zdx_PRBfKM9tRy61Boz_yPekU-D-b_6S/view?usp=drivesdk',
 design:'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk'
};
const notes={
 7016:[['security','ITIC Academy, bloque 22 Seguridad, ENS y Ciberseguridad, versión 2026.2: coteja ENS y CCN-STIC y separa el marco actual RD 311/2022 de la matriz anterior.'],['mobile','ITIC Academy, bloque 48 Seguridad en redes y en el nivel de aplicación, versión 2026.1: trata medidas de seguridad en comunicaciones móviles; contraste contextual, no atribuye vigencia actual a la tabla antigua.']],
 7017:[['interop','ITIC Academy, bloque 20 Interoperabilidad de sistemas, versión 2026.2: cubre las NTI y la interoperabilidad de documentos y expedientes electrónicos; correspondencia curricular directa.']],
 7018:[['design','ITIC Academy, bloque 38 Análisis, diseño y construcción de sistemas, versión 2026.1: A1 tema 93 y A2 III-9 incluyen técnicas y patrones de diseño; el documento se coteja curricularmente, la taxonomía se comprueba con literatura técnica primaria.']],
 7019:[['design','ITIC Academy, bloque 38 Análisis, diseño y construcción de sistemas, versión 2026.1: incluye UML dentro de A2 III-9 y diseño arquitectónico/OO en A1 92–93; contraste curricular directo.']],
 7020:[['security','ITIC Academy, bloque 22 Seguridad, ENS y Ciberseguridad, versión 2026.2: sección sobre gestión de riesgos y MAGERIT; correspondencia curricular directa.'],['mobile','ITIC Academy, bloque 48 Seguridad en redes y en el nivel de aplicación, versión 2026.1: gestión de incidentes figura como contenido de seguridad; contraste contextual complementario.']]
};
const marker='Cotejo curricular ITIC Academy:';
const strip=v=>{const s=(v||'').trim(),i=s.indexOf(marker);return i<0?s:s.slice(0,i).trim()};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),entries=notes[c.id];assert.ok(q&&entries,'Falta pregunta o nota '+c.id);
 const codes=[...q.clasificacion.A1,...q.clasificacion.A2].join('/')||'sin epígrafe A2 directamente equivalente';
 const refs=[];
 for(const [key,desc] of entries){const url=docs[key];refs.push(desc);if(!q.revision.fuentes.some(x=>x.url===url))q.revision.fuentes.push({url,referencia:desc});}
 const note=marker+' '+refs.join(' ')+' Correspondencia oficial: '+codes+'. El material académico se usa como cotejo curricular; no sustituye las fuentes normativas y técnicas primarias.';
 q.clasificacion.bloque_academia=refs.join(' ');q.clasificacion.nota=(strip(q.clasificacion.nota)+' '+note).trim();q.comentarios=(strip(q.comentarios)+' '+note).trim();q.revision.observaciones=(strip(q.revision.observaciones)+' '+note).trim();c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo ITIC Academy aplicado a las preguntas 7016–7020.');
