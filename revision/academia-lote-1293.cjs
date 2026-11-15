const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..');
const bankPath=path.join(root,'preguntas_preparatic.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1293.json');
const log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
  6786:[['https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk','ITIC Academy, bloque 39, Calidad y Mantenimiento (2026): incluye calidad de los servicios y mejora continua; la secuencia PDCA se contrasta con ASQ.']],
  6787:[['https://drive.google.com/file/d/1U-Iu2ye08XugMEaUfHNmUcWd5oBlGJxw/view?usp=drivesdk','ITIC Academy, bloques 130, 131 y 133 (2026): cotejo curricular del tráfico y dimensionamiento de comunicaciones; la intensidad en Erlangs se contrasta con ITU-T.']],
  6788:[['https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk','ITIC Academy, bloque 27, Sistemas Operativos (2026): cotejo de administración Windows; el alcance y estado de WSUS se validan con Microsoft Learn.']],
  6789:[['https://drive.google.com/file/d/1alTzv7f2Katg4EdxJ72SYkLm6UScCCho/view?usp=drivesdk','ITIC Academy, bloque 10, Gobernanza TIC y Administración Digital (2026.4): cotejo de SIR como servicio común y SICRES como norma técnica de intercambio; versión y transición se contrastan con BOE/PAe.']],
  6790:[['https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk','ITIC Academy, bloque 6, Economía, Sociedad y Empleo (2026): cotejo curricular del contexto de políticas económicas europeas; la cuantía actual se toma de la Comisión Europea.']]
};
const marker='Cotejo curricular ITIC Academy:';
const trim=v=>{const s=(v||'').trim(),i=s.indexOf(marker);return(i<0?s:s.slice(0,i)).trim().replace(/^Bloque de academia pendiente de cotejo\. Una lista vacía no implica exclusión del programa\.?\s*/,'').trim()};
for(const change of log.cambios){
  const q=bank.preguntas.find(x=>x.id===change.id),links=docs[change.id];
  assert.ok(q&&links,'Falta ID '+change.id);
  const topics=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');
  const notes=links.map(x=>x[1]);
  const note=marker+' '+notes.join(' ')+' Correspondencia oficial: '+topics+'. El material de academia se usa como cotejo de cobertura curricular; la respuesta se sustenta en fuentes primarias.';
  q.clasificacion.bloque_academia=notes.join(' ');
  q.clasificacion.nota=(trim(q.clasificacion.nota)+' '+note).trim();
  q.comentarios=(trim(q.comentarios)+' '+note).trim();
  q.revision.observaciones=(trim(q.revision.observaciones)+' '+note).trim();
  for(const [url,reference] of links){
    q.revision.fuentes=q.revision.fuentes.filter(s=>s.url!==url);
    q.revision.fuentes.push({url,referencia:reference});
  }
  change.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular aplicado a los IDs 6786–6790.');
