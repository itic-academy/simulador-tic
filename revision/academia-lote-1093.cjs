const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1093.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={design:'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk',networks:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',legacy:'https://drive.google.com/file/d/0Bw-rS_kOHzMKLUd6T0dDNk5Zczg/view?usp=drivesdk&resourcekey=0-fyr_70nXG4linYjQzoThog',speech:'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk',cyber:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',web:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk'};
const map={
 5786:{a1:[95],a2:['III-2'],urls:[docs.design],desc:'ITIC Academy, bloque 38 «Análisis, diseño y construcción de sistemas de información», apartados de MÉTRICA v3/DSI y diseño. La ubicación exacta de la actividad DSI 1 se verifica en la metodología oficial.'},
 5787:{a1:[114],a2:['IV-11'],urls:[docs.networks],desc:'ITIC Academy, bloque 42 «Redes», WLAN/IEEE 802.11; cotejo curricular de redes inalámbricas. La banda concreta de la enmienda 802.11ac se verifica en IEEE.'},
 5788:{a1:[77],a2:['II-12'],urls:[docs.legacy,docs.speech],desc:'Cotejo en Drive: archivo de test histórico B4 (2013) pregunta por VoiceXML; el bloque 32 de ITIC Academy 2026 trata tecnologías de voz/NLP como contexto, pero no se presenta como especificación normativa. El temario oficial A2-II.12 sí nombra IVR y VoiceXML.'},
 5789:{a1:[48,127],a2:['I-9','II-13'],urls:[docs.cyber],desc:'ITIC Academy, bloque 48 Ciberseguridad, cubre estrategia y organización/gobernanza de ciberseguridad. La distribución concreta de funciones entre Consejo Nacional de Ciberseguridad y Consejo de Seguridad Nacional se comprueba en la Estrategia 2019 publicada en BOE y en la Ley 36/2015.'},
 5790:{a1:[76,77],a2:['II-9'],urls:[docs.web],desc:'ITIC Academy, bloque 30 «Tecnologías de sistemas de información»: incluye RDF y OWL como tecnologías/lenguajes de Web Semántica. La semántica del modelo RDF de grafos y triples se verifica con W3C.'}
};
const marker='Cotejo curricular ITIC Academy:';
const trimPrior=v=>{const i=(v||'').indexOf(marker);return i<0?(v||'').trim():v.slice(0,i).trim();};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q&&m,`Falta pregunta o mapeo ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');q.clasificacion.bloque_academia=m.desc;
 const note=`${marker} ${m.desc} Temas oficiales asociados: ${tags}. La academia orienta la cobertura; las fuentes técnicas y jurídicas citadas fundamentan las afirmaciones concretas.`;
 q.clasificacion.nota=`${trimPrior(q.clasificacion.nota)} ${note}`.trim();q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 const related=new Set(Object.values(docs));q.revision.fuentes=q.revision.fuentes.filter(f=>!related.has(f.url));for(const url of m.urls)q.revision.fuentes.push({url,referencia:`ITIC Academy/Drive: ${m.desc}`});c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular y clasificación A1/A2 actualizado para IDs 5786–5790.');
