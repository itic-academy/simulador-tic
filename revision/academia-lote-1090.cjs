const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1090.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const design='https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const networks='https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const map={
 5771:{a1:[89,93],a2:['III-9'],urls:[design],desc:'ITIC Academy, bloque 38 «Análisis, diseño y construcción de sistemas de información», versión 2026.1: análisis/diseño OO y modelos de clases. El material trata herencia en el modelado; la posibilidad concreta de herencia múltiple se acota a lenguajes que la admiten y se comprueba con las especificaciones/documentación de C++ y Java.'},
 5772:{a1:[88,95],a2:['III-2'],urls:[design],desc:'ITIC Academy, bloque 38, apartado 4.5: mapa comparativo de metodologías clásicas e iterativas; describe el modelo en espiral como iteraciones guiadas por riesgos. La variante Win-Win se valida separadamente con el informe SEI/CMU sobre Theory W.'},
 5773:{a1:[108],a2:['IV-10'],urls:[networks],desc:'ITIC Academy, bloque 42 «Redes», modelo OSI y conceptos de red/encaminamiento. El reparto funcional exacto entre capas se contrasta con la recomendación ITU-T X.200.'},
 5774:{a1:[114],a2:['IV-8'],urls:[networks],desc:'ITIC Academy, bloque 42 «Redes», WLAN/IEEE 802.11 y nomenclatura de generaciones; el mapeo normativo Wi-Fi 5 = IEEE 802.11ac se coteja con el comunicado de Wi-Fi Alliance y la cronología de IEEE.'},
 5775:{a1:[89,95],a2:['III-4'],urls:[design],desc:'ITIC Academy, bloque 38, apartados de MÉTRICA v3 y modelo E/R extendido: entidades, relaciones, cardinalidades y agregación; cobertura temática contrastada con la guía MÉTRICA y el cuestionario oficial INAP.'}
};
const marker='Cotejo curricular ITIC Academy:';
const trimPrior=v=>{const i=(v||'').indexOf(marker);return i<0?(v||'').trim():v.slice(0,i).trim();};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q&&m,`Falta pregunta o mapeo ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');q.clasificacion.bloque_academia=m.desc;
 const note=`${marker} ${m.desc} Temas oficiales asociados: ${tags}. La academia orienta la cobertura; las fuentes primarias citadas sostienen la respuesta.`;
 q.clasificacion.nota=`${trimPrior(q.clasificacion.nota)} ${note}`.trim();q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 const related=new Set(Object.values(map).flatMap(v=>v.urls));q.revision.fuentes=q.revision.fuentes.filter(f=>!related.has(f.url));
 for(const url of m.urls)q.revision.fuentes.push({url,referencia:`ITIC Academy: ${m.desc}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular y clasificación A1/A2 actualizado para IDs 5771–5775.');
