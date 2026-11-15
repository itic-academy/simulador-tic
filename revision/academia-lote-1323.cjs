const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1323.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
  acquisition:'https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view?usp=drivesdk',
  ip:'https://docs.google.com/document/d/1idLNt7OqjLIr_pxoBcGeW2vi9Kldm8Z1/edit',
  accessibility:'https://drive.google.com/file/d/1LuUHoQr8oDmptteHIQ72VdCvJFsnu3LF/view?usp=drivesdk',
  interoperability:'https://drive.google.com/file/d/1zdx_PRBfKM9tRy61Boz_yPekU-D-b_6S/view?usp=drivesdk'
};
const notes={
  6936:['acquisition','ITIC Academy, bloque temático 17: Adquisición de sistemas, alternativas y rentabilidad (versión 2026.2, 02-10-2026). Sus apartados de decisión multicriterio separan asignación de pesos, normalización y ordenación; se ha cotejado la combinación declarada para SSD-AAPP v4 con el manual oficial.'],
  6937:['acquisition','ITIC Academy, bloque temático 17: Adquisición de sistemas, alternativas y rentabilidad (versión 2026.2, 02-10-2026), incluye métodos estáticos/dinámicos e índice de rentabilidad. La fórmula se precisa en la pregunta para evitar que distintas acepciones del índice cambien la clasificación.'],
  6938:['ip','ITIC Academy, tema 43, Ley de Propiedad Intelectual (documento revisado el 13-09-2026): cubre protección jurídica y titularidad de programas de ordenador; el artículo 97.4 consolidado del TRLPI es la fuente normativa de la respuesta.'],
  6939:['accessibility','ITIC Academy, bloque 30 Tecnologías de sistemas de información (versión 2026.2, 05-10-2026), apartado de desarrollo front-end, UX y accesibilidad web: cotejo de cobertura curricular. La denominación exacta de los principios se verifica con la recomendación WCAG del W3C.'],
  6940:['interoperability','ITIC Academy, bloque temático Interoperabilidad de sistemas (versión 2026.2, 14-08-2026), temas A1 45–46 y equivalencia A2 O9/O10: cubre ENI e interoperabilidad organizativa; la revisión usa el código oficial A2 I.9 del programa vigente.']
};
const marker='Cotejo curricular ITIC Academy:';
const strip=v=>{const s=(v||'').trim(),i=s.indexOf(marker);return i<0?s:s.slice(0,i).trim()};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),entry=notes[c.id];assert.ok(q&&entry,`Falta pregunta o nota ${c.id}`);
  const codes=[...q.clasificacion.A1,...q.clasificacion.A2].join('/')||'sin epígrafe A2 específico';
  const note=`${marker} ${entry[1]} Correspondencia oficial: ${codes}. La academia se emplea para cotejar cobertura, no como sustituto de la norma o fuente primaria.`;
  q.clasificacion.bloque_academia=entry[1];q.clasificacion.nota=`${strip(q.clasificacion.nota)} ${note}`.trim();
  q.comentarios=`${strip(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${strip(q.revision.observaciones)} ${note}`.trim();
  if(!q.revision.fuentes.some(x=>x.url===docs[entry[0]]))q.revision.fuentes.push({url:docs[entry[0]],referencia:`Cotejo curricular ITIC Academy: ${entry[1]}`});
  c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo de ITIC Academy aplicado a las preguntas 6936–6940.');
