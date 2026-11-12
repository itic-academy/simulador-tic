const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1108.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={digital:'https://drive.google.com/file/d/1alTzv7f2Katg4EdxJ72SYkLm6UScCCho/view?usp=drivesdk',hardware:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',hardwareLegacy:'https://drive.google.com/file/d/1_tN_bRBwm2H_TnxuaBw8a50Mex5bHwqO/view?usp=drivesdk'};
const map={
 5861:{a1:[22],a2:['I-9'],urls:[docs.digital],desc:'ITIC Academy, bloque 10 «Gobernanza TIC y Administración Digital», edición 2026.4: marco legal de servicios y obligaciones de la sociedad de la información; correspondencia A1-22/A2-I.9.'},
 5862:{a1:[46],a2:['I-9'],urls:[docs.digital],desc:'ITIC Academy, bloque 10 «Gobernanza TIC y Administración Digital», edición 2026.4: Esquema Nacional de Interoperabilidad y Normas Técnicas de Interoperabilidad; correspondencia A1-46/A2-I.9.'},
 5863:{a1:[48],a2:['I-9'],urls:[docs.digital],desc:'ITIC Academy, bloque 10 «Gobernanza TIC y Administración Digital», edición 2026.4: Esquema Nacional de Seguridad; correspondencia A1-48/A2-I.9.'},
 5864:{a1:[41],a2:['II-1'],urls:[docs.hardwareLegacy,docs.hardware],desc:'ITIC Academy, bloque Hardware, edición 2026.1 (temas A1-52/53/54/56/57/132 y A2 T1/C5/C6), y su material de buses USB y periféricos: correspondencia curricular con hardware y tecnologías de ordenadores; la tasa USB 3.1 Gen 2 se verifica específicamente contra USB-IF.'},
 5865:{a1:[56],a2:['IV-5'],urls:[docs.hardware],desc:'ITIC Academy, bloque Hardware, edición 2026.1 (A1-56 y A2 C5): sistemas de almacenamiento, magnitudes y capacidad; correspondencia oficial con almacenamiento. Los prefijos decimales se comprueban contra BIPM.'}
};
const marker='Cotejo curricular ITIC Academy:';
const trimPrior=v=>{const raw=(v||'').trim(),i=raw.indexOf(marker),base=(i<0?raw:raw.slice(0,i)).trim();return base.replace(/^Bloque de academia pendiente de cotejo\. Una lista vacía no implica exclusión del programa\.?\s*/,'').trim();};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q&&m,`Falta pregunta o mapeo ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');q.clasificacion.bloque_academia=m.desc;
 const note=`Cotejo curricular ITIC Academy: ${m.desc} Temas oficiales asociados: ${tags}. La academia orienta cobertura; la conclusión se sustenta en las fuentes primarias citadas.`;
 q.clasificacion.nota=`${trimPrior(q.clasificacion.nota)} ${note}`.trim();q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 const related=new Set(Object.values(docs));q.revision.fuentes=q.revision.fuentes.filter(f=>!related.has(f.url));for(const url of m.urls)q.revision.fuentes.push({url,referencia:`ITIC Academy: ${m.desc}`});c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo curricular y clasificación A1/A2 actualizado para IDs 5861–5865.');
