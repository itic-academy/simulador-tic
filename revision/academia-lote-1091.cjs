const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1091.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const urls={net:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',protocol:'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',director:'https://drive.google.com/file/d/1fti1UIhEIqK3pY8GBENi-4rTKwoEG8tF/view?usp=drivesdk',design:'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk',ai:'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk',tech:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk'};
const map={
 5776:{a1:[109],a2:['IV-13'],urls:[urls.net,urls.protocol],desc:'ITIC Academy, bloques 42 Redes (§ DNS) y 43 Protocolos de comunicaciones (DNS y servicios de Internet): encuadre de los nombres de dominio. No se encontró en esos bloques la regla jurídica concreta de sintaxis .es; esta se comprueba con Red.es y la Orden ITC/1542/2005.'},
 5777:{a1:[35,36],a2:['III-2'],urls:[urls.director],desc:'ITIC Academy, bloque 12 «Directivo TIC y planificación estratégica», apartado de PERT/CPM: planificación de proyectos y camino crítico. La definición de holgura cero se contrasta con el PMI.'},
 5778:{a1:[102],a2:['III-6'],urls:[urls.design],desc:'ITIC Academy, bloque 38 «Análisis, diseño y construcción de sistemas de información», apartado 12.4 y fuentes/control de versiones: herramientas de gestión de versiones. El comportamiento preciso de stash se verifica con el manual oficial de Git.'},
 5779:{a1:[70],a2:['III-5'],urls:[urls.ai],desc:'ITIC Academy, bloque 32 «Inteligencia Artificial y Ciencia de Datos»: sistemas expertos y representación simbólica del conocimiento. La definición de frame/slots se verifica con el artículo original de Minsky.'},
 5780:{a1:[85],a2:[],urls:[urls.tech],desc:'ITIC Academy, bloque 30 «Tecnologías de Sistemas de la Información», tema A1-85: blockchain, redes y consenso. El programa A2 2025 no incluye un epígrafe específico de blockchain; no se fuerza una correspondencia A2. La explicación técnica se contrasta con NIST y el documento de Bitcoin.'}
};
const marker='Cotejo curricular ITIC Academy:';
const trimPrior=v=>{const i=(v||'').indexOf(marker);return i<0?(v||'').trim():v.slice(0,i).trim();};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q&&m,`Falta pregunta o mapeo ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');q.clasificacion.bloque_academia=m.desc;
 const note=`${marker} ${m.desc} Temas oficiales asociados: ${tags||'sin correspondencia A2 directa'}; la academia orienta la cobertura y las fuentes técnicas/normativas citadas sustentan la respuesta.`;
 q.clasificacion.nota=`${trimPrior(q.clasificacion.nota)} ${note}`.trim();q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 const related=new Set(Object.values(urls));q.revision.fuentes=q.revision.fuentes.filter(f=>!related.has(f.url));for(const url of m.urls)q.revision.fuentes.push({url,referencia:`ITIC Academy: ${m.desc}`});c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular y clasificación A1/A2 actualizado para IDs 5776–5780.');
