const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1294.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
  6791:[['https://drive.google.com/file/d/18tJzWuBHyd4FbkzQIE5fIbSCRdlrt_1U/view?usp=drivesdk','ITIC Academy, bloque 22, Seguridad, ENS y ciberseguridad (2026.2): cotejo del marco ENS; la cuestión sistema/servicio se contrasta con la ITS, el RD 311/2022 y CCN.']],
  6792:[['https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk','ITIC Academy, bloque 01, Constitución, Estado y AGE (2026): cotejo de la organización territorial y distribución constitucional de competencias; se comprueba en los artículos 148 y 149 CE.']],
  6793:[['https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view?usp=drivesdk','ITIC Academy, bloque 33, E-learning y Sistemas de Información Geográfica (2026.1): cotejo general de aprendizaje híbrido y metodologías; no acredita el diseño pedagógico del curso selectivo de la promoción 28, que queda pendiente de su programa oficial.']],
  6794:[['https://drive.google.com/file/d/11xq0o8TLESDT7J2PLC_MVbZHGoqWmGa2/view?usp=drivesdk','ITIC Academy, bloque 07, Dirección Pública, Empleo y Transparencia (2026): cubre liderazgo y gestión de personas; la correspondencia concreta M3/S3 se verifica con la bibliografía de liderazgo y el examen oficial INAP.']],
  6795:[['https://drive.google.com/file/d/1LuUHoQr8oDmptteHIQ72VdCvJFsnu3LF/view?usp=drivesdk','ITIC Academy, bloque 30, Tecnologías de sistemas de información (actualización octubre de 2026): cotejo de arquitecturas web, frameworks y lenguajes; se distingue con las fuentes de proyecto entre runtime y motor de plantillas.']]
};
const marker='Cotejo curricular ITIC Academy:';
const trim=v=>{const s=(v||'').trim(),i=s.indexOf(marker);return(i<0?s:s.slice(0,i)).trim().replace(/^Bloque de academia pendiente de cotejo\. Una lista vacía no implica exclusión del programa\.?\s*/,'').trim()};
for(const change of log.cambios){
  const q=bank.preguntas.find(x=>x.id===change.id),links=docs[change.id];assert.ok(q&&links,'Falta ID '+change.id);
  const topics=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');
  const notes=links.map(x=>x[1]);
  const note=marker+' '+notes.join(' ')+' Correspondencia oficial: '+(topics||'sin epígrafe específico para las características particulares del curso o herramienta').trim()+'. El cotejo académico sirve como mapa de cobertura; la verificación se apoya en fuentes primarias.';
  q.clasificacion.bloque_academia=notes.join(' ');
  q.clasificacion.nota=(trim(q.clasificacion.nota)+' '+note).trim();
  q.comentarios=(trim(q.comentarios)+' '+note).trim();
  q.revision.observaciones=(trim(q.revision.observaciones)+' '+note).trim();
  for(const [url,reference] of links){q.revision.fuentes=q.revision.fuentes.filter(s=>s.url!==url);q.revision.fuentes.push({url,referencia:reference});}
  change.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular aplicado a los IDs 6791–6795.');
