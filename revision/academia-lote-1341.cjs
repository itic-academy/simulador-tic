const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1341.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={sign:'https://drive.google.com/file/d/1Sol49a2N19LsbVxip95u9OzDYfk0BiAD/view?usp=drivesdk',iso:'https://drive.google.com/file/d/10bE0F9kG3MYWW8IxeOCsPX8W1U5Rd0qK/view?usp=drivesdk',gis:'https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view?usp=drivesdk',lgpl:'https://drive.google.com/file/d/18qm2iCLcxLReK_TkqQWIm26S38HXEDYr/view?usp=drivesdk',metrics:'https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view?usp=drivesdk'};
const notes={
7026:['sign','ITIC Academy, documento «Tema 079, 080 y 081. Seguridad», versión localizada en Drive: el temario incluye servicios comunes de identificación/firma y cubre los epígrafes A1 80/81 y A2 I-6; correspondencia curricular contextual, no prueba técnica de que FIRe sea la respuesta.'],
7027:['iso','ITIC Academy, «Tema 050 - Organismos de normalización v2.2»: identifica ISO en el epígrafe A1-50 de normalización; contraste curricular directo.'],
7028:['gis','ITIC Academy, bloque «E-learning y Sistemas de Información Geográfica (GIS)», versión 2026.1, actualizado el 31/07/2026: cubre A1-74 y marca ausencia de epígrafe A2 equivalente; contexto curricular.'],
7029:['lgpl','ITIC Academy, «Tema 069 - software libre»: incluye sección propia sobre LGPL y software libre/propietario; corresponde a A1-69 y A2-II-14. Cotejo curricular, no asesoramiento jurídico.'],
7030:['metrics','ITIC Academy, bloque 17 «Adquisición de sistemas, alternativas y rentabilidad de las inversiones», actualización octubre de 2026: incluye MÉTRICA v3 como metodología de estudio de viabilidad; se coteja con A1-95/A2-III-2. La respuesta técnica se apoya en el manual oficial de MÉTRICA, no en el temario de academia.']};
const labels={sign:'Seguridad, firma electrónica y servicios comunes',iso:'Organismos de normalización',gis:'Sistemas de información geográfica',lgpl:'Software libre y licencias',metrics:'MÉTRICA v3 y desarrollo de sistemas'};
const marker='Cotejo curricular ITIC Academy:';
const strip=v=>{const s=(v||'').trim(),i=s.indexOf(marker);return i<0?s:s.slice(0,i).trim()};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),[key,desc]=notes[c.id];assert.ok(q&&desc,'Falta pregunta o nota '+c.id);const url=docs[key];const codes=[...q.clasificacion.A1,...q.clasificacion.A2].join('/')||'sin epígrafe A2 directamente equivalente';
 if(!q.revision.fuentes.some(x=>x.url===url))q.revision.fuentes.push({url,referencia:desc});const note=marker+' '+desc+' Tema academy: '+labels[key]+'. Correspondencia de temario oficial: '+codes+'.';q.clasificacion.bloque_academia=desc;q.clasificacion.nota=(strip(q.clasificacion.nota)+' '+note).trim();q.comentarios=(strip(q.comentarios)+' '+note).trim();q.revision.observaciones=(strip(q.revision.observaciones)+' '+note).trim();c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo de currículo ITIC Academy guardado para 7026–7030.');
