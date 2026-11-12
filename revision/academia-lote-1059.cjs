const fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1059.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const bi='https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk';
const security='https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk';
const map={
 5616:{url:bi,a1:[71],a2:['III-15'],desc:'ITIC Academy, bloque 34 Business Intelligence y Big Data, 2026.1: incluye ciencia de datos (A1 71), minería de datos, algoritmos y OLAP (A2 III.15). El material permite cotejar terminología y cobertura; el estado de SQL Server Analysis Services se verifica en Microsoft Learn.'},
 5617:{url:bi,a1:[75],a2:['II-4'],desc:'ITIC Academy, bloque 34 Business Intelligence y Big Data, 2026.1: sitúa OLAP en almacenes y explotación de datos (A1 75) e inteligencia de negocio y OLAP (A2 II.4). La diferencia entre MDX y un servidor se contrasta con Microsoft Learn.'},
 5618:{url:bi,a1:[75],a2:['II-4'],desc:'ITIC Academy, bloque 34 Business Intelligence y Big Data, 2026.1: cubre OLAP en los temas oficiales A1 75/A2 II.4. La sigla WOLAP queda expresamente contextualizada como terminología histórica y se apoya en bibliografía universitaria, no se presenta como arquitectura vigente estandarizada.'},
 5619:{url:security,a1:[80,81],a2:['I-6'],desc:'ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma 2026.1: certificados, identidad/firma, PKI y DNI electrónico (A1 80–81/A2 I.6). La composición efectiva del chip se comprueba con la información oficial del DNIe.'},
 5620:{url:security,a1:[79,80],a2:['IV-12'],desc:'ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma 2026.1: algoritmos criptográficos, RSA, formatos de firma y mecanismos de firma digital (A1 79–80/A2 IV.12). Los modos concretos se contrastan con la guía técnica oficial del DNIe.'}
};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];if(!q||!m)throw Error(`Falta pregunta/mapeo: ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');
 const note=`Cotejo curricular de ITIC Academy: ${m.desc} Temas oficiales asociados: ${tags}. La academia sitúa el contenido en el programa; las afirmaciones técnicas se verifican con las fuentes primarias indicadas en la revisión.`;
 const marker='Cotejo curricular de ITIC Academy:';
 const trimPrior=value=>{const i=(value||'').indexOf(marker);return i<0?(value||'').trim():value.slice(0,i).trim();};
 q.clasificacion.bloque_academia=m.desc;q.clasificacion.nota=note;
 q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();
 q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 q.revision.fuentes=q.revision.fuentes.filter(f=>f.url!==m.url);
 q.revision.fuentes.push({url:m.url,referencia:`ITIC Academy: ${m.desc}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(root+'/preguntas_preparatic.json',JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular ITIC Academy 2026 añadido a las cinco preguntas del lote 1059.');
