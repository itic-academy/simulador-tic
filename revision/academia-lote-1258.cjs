const fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1258.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const ids={constitution:'1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN',digital:'1VhLN803FteKuJ9zVjQSomuig_1x9fBSP'};
const map={
 6611:{a1:[3],a2:['I-1'],file:ids.constitution,desc:'bloque 01 Constitución, organización del Estado y AGE, edición 2026: correspondencia curricular con organización territorial y comunidades autónomas; el artículo 149.3 CE es la fuente jurídica de la regla.'},
 6612:{a1:[5],a2:[],file:ids.digital,desc:'bloque 03 Actuación administrativa y Administración digital, edición 2026: encaje contextual con la UE/Administración digital; no se identificó una sección específica sobre los tríos de Presidencias. No hay epígrafe A2 2025 directamente equivalente.'},
 6613:{a1:[5],a2:[],file:ids.digital,desc:'bloque 03 Actuación administrativa y Administración digital, edición 2026: correspondencia curricular general; no se confirmó cobertura literal del artículo 288 TFUE. No hay epígrafe A2 2025 directamente equivalente.'},
 6614:{a1:[8],a2:['I-8'],file:ids.digital,desc:'bloque 03 Actuación administrativa y Administración digital, edición 2026: correspondencia curricular con procedimiento y régimen jurídico administrativo; la distinción entre nulidad y anulabilidad procede de la Ley 39/2015.'},
 6615:{a1:[8],a2:['I-8'],file:ids.digital,desc:'bloque 03 Actuación administrativa y Administración digital, edición 2026: encaje curricular con la actividad administrativa y el procedimiento; la regla se acredita directamente con el artículo 109.1 de la Ley 39/2015.'}
};
const strip=s=>{const x=s||'',needle='Cotejo curricular de ITIC Academy:';const i=x.indexOf(needle);return i<0?x.trim():x.slice(0,i).trim();};
for(const c of log.cambios){const m=map[c.id],q=bank.preguntas.find(x=>x.id===c.id);if(!m||!q)throw Error(`Falta ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const topics=[...q.clasificacion.A1,...q.clasificacion.A2].join('/')||'sin epígrafe A2 equivalente';
 const note=`Cotejo curricular de ITIC Academy: ${m.desc} Temas oficiales asociados: ${topics}. El material de academia orienta la cobertura, no sustituye la fuente jurídica primaria.`;
 q.clasificacion.bloque_academia=m.desc;q.clasificacion.nota=note;
 q.comentarios=`${strip(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${strip(q.revision.observaciones)} ${note}`.trim();
 const url=`https://drive.google.com/file/d/${m.file}/view?usp=drivesdk`;
 q.revision.fuentes=q.revision.fuentes.filter(f=>f.url!==url);q.revision.fuentes.push({url,referencia:`ITIC Academy: ${m.desc}`});c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular de ITIC Academy actualizado para 6611–6615.');
