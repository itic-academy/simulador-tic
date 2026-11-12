const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1087.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const urls={web:'https://drive.google.com/file/d/1LuUHoQr8oDmptteHIQ72VdCvJFsnu3LF/view?usp=drivesdk',licensing:'https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view?usp=drivesdk',security:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',analysis:'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk'};
const map={
 5756:{a1:[77],a2:['II-9'],urls:[urls.web],desc:'ITIC Academy, bloque 30 sobre HTML, elementos de marca y compatibilidad de navegadores: encaje curricular del ítem. No se presenta absbottom como valor HTML vigente; la extensión histórica y su semántica se sustentan con referencias archivadas de Netscape y se contrasta con W3C HTML 4.01.'},
 5757:{a1:[69],a2:['II-14'],urls:[urls.licensing],desc:'ITIC Academy, Adquisición de Sistemas y Rentabilidad 2026, §§ 5.2–5.3: software libre y modelos de licencia. El alcance de las libertades y la distinción entre libre/gratuito se comprueban con la definición de GNU/FSF.'},
 5758:{a1:[80],a2:['I-6'],urls:[urls.security],desc:'ITIC Academy, bloque 36 de identidad, firma y servicios de confianza: certificados electrónicos y marco eIDAS. La vigencia máxima concreta se verifica en el artículo 4.2 de la Ley 6/2020.'},
 5759:{a1:[],a2:[],urls:[],desc:'Se cotejaron los temarios GSI A1/A2 de 2025 y el material de ITIC Academy accesible en Drive: no se localizó un epígrafe o unidad específico sobre esta tipología general de estrategias educativas de cambio organizativo. Se deja sin clasificación oficial y académica directa; la respuesta se contrasta con literatura académica sobre cambio educativo y la tipología conceptual indicada.'},
 5760:{a1:[95],a2:['III-2'],urls:[urls.analysis],desc:'ITIC Academy, bloque 38 «Análisis, diseño y construcción de sistemas de información», incluye análisis estructurado, modelado de procesos/DFD y MÉTRICA v3. La semántica del flujo entre proceso y sistema externo se verifica con el manual oficial de MÉTRICA v3. Alineación con A1-95/A2-III.2.'},
};
const marker='Cotejo curricular ITIC Academy:';
const trimPrior=v=>{const i=(v||'').indexOf(marker);return i<0?(v||'').trim():v.slice(0,i).trim();};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q&&m,`Falta pregunta o mapeo ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');q.clasificacion.bloque_academia=m.desc;
 const note=`${marker} ${m.desc}${tags?` Temas oficiales asociados: ${tags}.`:''} La academia orienta la cobertura; las fuentes de la revisión acreditan las afirmaciones técnicas.`;
 q.clasificacion.nota=`${trimPrior(q.clasificacion.nota)} ${note}`.trim();q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 const related=new Set(Object.values(urls));q.revision.fuentes=q.revision.fuentes.filter(f=>!related.has(f.url));
 for(const url of m.urls)q.revision.fuentes.push({url,referencia:`ITIC Academy: ${m.desc}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular y clasificación A1/A2 actualizado para IDs 5756–5760.');
