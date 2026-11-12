const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1074.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const urls={
  van:'https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view?usp=drivesdk',
  web:'https://drive.google.com/file/d/1LuUHoQr8oDmptteHIQ72VdCvJFsnu3LF/view?usp=drivesdk',
  eni:'https://drive.google.com/file/d/1zdx_PRBfKM9tRy61Boz_yPekU-D-b_6S/view?usp=drivesdk',
  ens:'https://drive.google.com/file/d/18tJzWuBHyd4FbkzQIE5fIbSCRdlrt_1U/view?usp=drivesdk'
};
const mapa={
 5691:{a1:[42],a2:['II-15'],urls:[urls.van],desc:'ITIC Academy, bloque 17 Adquisición de sistemas, alternativas y rentabilidad de las inversiones, versión 2026.2, §§ 7.1–7.3: cubre métodos estáticos/dinámicos, VAN, TIR y pay-back; declara correspondencia con A1-40–42 y A2-II.15. La definición económica se contrasta además con la Comisión Europea.'},
 5692:{a1:[44],a2:['III-14'],urls:[urls.web],desc:'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información, versión 2026.2: incluye estándares y UX de desarrollo web, pertinente a accesibilidad/usabilidad A1-44 y A2-III.14. El material recuperado no se usa como fuente de la enumeración POUR; los cuatro principios se verifican directamente en WCAG 2.2 del W3C.'},
 5693:{a1:[45],a2:['I-9'],urls:[urls.eni],desc:'ITIC Academy, bloque 20 Interoperabilidad de sistemas, versión 2026.2, § 1: explica las dimensiones semántica, técnica, organizativa y temporal, para A1-45/A2-I.9. La definición vigente se contrasta con el anexo del RD 4/2010.'},
 5694:{a1:[46],a2:['I-9'],urls:[urls.eni],desc:'ITIC Academy, bloque 20 Interoperabilidad de sistemas, versión 2026.2: coteja las NTI, expedientes electrónicos, metadatos e intercambio, para A1-46/A2-I.9. La distinción jurídica entre componentes del expediente y esquemas de intercambio se verifica en la NTI publicada en el BOE.'},
 5695:{a1:[48],a2:['I-9'],urls:[urls.ens],desc:'ITIC Academy, bloque 22 Seguridad, ENS y Ciberseguridad, versión 2026.2, § 2.2: actualiza el marco ENS al RD 311/2022 y cubre A1-48/A2-I.9. La regla concreta para información clasificada se cita del artículo 2.2 vigente del real decreto.'}
};
const marker='Cotejo curricular ITIC Academy:';
const trimPrior=v=>{const i=(v||'').indexOf(marker);return i<0?(v||'').trim():v.slice(0,i).trim();};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=mapa[c.id];assert.ok(q&&m,`Falta pregunta o mapeo ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');q.clasificacion.bloque_academia=m.desc;
 const note=`${marker} ${m.desc} Temas oficiales asociados: ${tags}. La academia se usa para cotejar cobertura; la respuesta se fundamenta en las fuentes primarias citadas en la revisión individual.`;
 q.clasificacion.nota=`${trimPrior(q.clasificacion.nota)} ${note}`.trim();q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 const related=new Set(Object.values(urls));q.revision.fuentes=q.revision.fuentes.filter(f=>!related.has(f.url));
 for(const url of m.urls)q.revision.fuentes.push({url,referencia:`ITIC Academy: ${m.desc}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular A1/A2 actualizado para IDs 5691–5695.');
