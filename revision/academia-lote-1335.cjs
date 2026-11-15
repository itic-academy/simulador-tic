const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1335.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 admin:'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk',
 redes:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',
 software:'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk',
 ens:'https://drive.google.com/file/d/18tJzWuBHyd4FbkzQIE5fIbSCRdlrt_1U/view?usp=drivesdk'
};
const notes={
 6996:['admin','ITIC Academy, bloque 03 Actuación administrativa y Administración digital, actualización 2026: incluye procedimiento y notificación electrónica bajo las Leyes 39/2015 y 40/2015; cotejo curricular.'],
 6997:['redes','ITIC Academy, bloque 48 Seguridad en redes y nivel de aplicación, actualización 2026: cotejo contextual de protocolos de seguridad. La búsqueda del temario no localizó una lección expresa sobre SSLv3, que es obsoleto y no debe utilizarse.'],
 6998:['software','ITIC Academy, bloque 38 Análisis, Diseño y Construcción de Sistemas de Información, actualización 2026: análisis e ingeniería/especificación de requisitos; cotejo curricular. No se localizó referencia específica a IEEE 830-1998, edición histórica sustituida.'],
 6999:['software','ITIC Academy, bloque 38 Análisis, Diseño y Construcción de Sistemas de Información, actualización 2026: cotejo contextual del dominio de desarrollo de software. Las búsquedas no localizaron tratamiento específico de Cleanroom.'],
 7000:['ens','ITIC Academy, bloque 22 Ciberseguridad y Esquema Nacional de Seguridad: cotejo curricular del ámbito ENS. La búsqueda del temario accesible no localizó una sección dedicada específicamente al POC del artículo 13.5.']
};
const marker='Cotejo curricular ITIC Academy:';
const strip=v=>{const s=(v||'').trim(),i=s.indexOf(marker);return i<0?s:s.slice(0,i).trim()};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),entry=notes[c.id];assert.ok(q&&entry,'Falta pregunta o nota '+c.id);
 const codes=[...q.clasificacion.A1,...q.clasificacion.A2].join('/')||'sin equivalencia directa en A2';
 const note=marker+' '+entry[1]+' Correspondencia oficial: '+codes+'. El cotejo académico contextualiza la cobertura y no sustituye las fuentes primarias de la revisión.';
 q.clasificacion.bloque_academia=entry[1];q.clasificacion.nota=(strip(q.clasificacion.nota)+' '+note).trim();q.comentarios=(strip(q.comentarios)+' '+note).trim();q.revision.observaciones=(strip(q.revision.observaciones)+' '+note).trim();
 if(!q.revision.fuentes.some(x=>x.url===docs[entry[0]]))q.revision.fuentes.push({url:docs[entry[0]],referencia:entry[1]});c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo ITIC Academy aplicado a las preguntas 6996–7000.');
