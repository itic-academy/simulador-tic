const fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1262.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const files={topic4042:'1jwNi4SS-0kukXjc4MFPirhuXTgAMn2PU',block05:'1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ',block06:'1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE',block20:'1yCTWUEye96mUcx_SwiEJshldD-sV2hXS',block48:'1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82'};
const map={
 6631:{a1:[11,40],a2:[],files:[files.topic4042,files.block05],desc:'ITIC Academy, temas 40–42 Adquisición de Sistemas, Alternativas y Rentabilidad de las Inversiones: el tema 40 incluye decisión multicriterio discreta y diferencia las relaciones de superación (PROMETHEE/ELECTRE) de ponderación lineal y utilidades multiatributo. El bloque 05 aporta el contexto general de compra TIC; la selección metodológica se coteja con el tema 40.'},
 6632:{a1:[11,14],a2:[],files:[files.block05,files.block06],desc:'ITIC Academy, bloque 05 Contratación, Presupuestos y Compra TIC: cobertura general de adquisición/compra pública; bloque 06 Economía, Sociedad, Empleo y Transformación Digital: cobertura general de políticas ambientales y sostenibilidad. La búsqueda no encontró una lección específica del Proyecto MABER, iniciativa histórica de 1994.'},
 6633:{a1:[45],a2:['I-9'],files:[files.block20],desc:'ITIC Academy, bloque 20 Interoperabilidad de Sistemas, edición 2026: cubre el ENI, sus dimensiones y las normas técnicas de interoperabilidad.'},
 6634:{a1:[46,80],a2:['I-6','I-9'],files:[files.block20],desc:'ITIC Academy, bloque 20 Interoperabilidad de Sistemas, edición 2026: cubre las normas técnicas y firma/validación en el intercambio interoperable; el detalle de quién puede añadir el sello de tiempo se contrasta con la NTI oficial.'},
 6635:{a1:[47],a2:['II-10'],files:[files.block48],desc:'ITIC Academy, bloque 48 Seguridad en Redes y en el Nivel de Aplicación, actualización 2026: cobertura general de seguridad y riesgos. La búsqueda del material no localizó una lección específica de MAGERIT; se registra el encaje curricular oficial sin atribuir cobertura literal.'}
};
const strip=s=>{const x=s||'',needle='Cotejo curricular de ITIC Academy:';const i=x.indexOf(needle);return i<0?x.trim():x.slice(0,i).trim();};
for(const c of log.cambios){const m=map[c.id],q=bank.preguntas.find(x=>x.id===c.id);if(!m||!q)throw Error(`Falta ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const topics=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');
 const note=`Cotejo curricular ITIC Academy: ${m.desc} Temas oficiales asociados: ${topics}. La academia orienta la cobertura, no sustituye las fuentes primarias.`;
 q.clasificacion.bloque_academia=m.desc;q.clasificacion.nota=note;
 q.comentarios=`${strip(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${strip(q.revision.observaciones)} ${note}`.trim();
 const urls=m.files.map(id=>`https://drive.google.com/file/d/${id}/view?usp=drivesdk`);
 q.revision.fuentes=q.revision.fuentes.filter(f=>!f.url.includes('drive.google.com'));for(const url of urls)q.revision.fuentes.push({url,referencia:`ITIC Academy: ${m.desc}`});c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular ITIC Academy añadido para 6631–6635.');
