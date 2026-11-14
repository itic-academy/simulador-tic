const fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1260.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const files={block01:'1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN',block03:'1VhLN803FteKuJ9zVjQSomuig_1x9fBSP',block26:'1jzD3kZLtu9ZAL8NPH8lh5o5icScl0cMM'};
const map={
 6621:{a1:[3],a2:['I-1'],file:files.block01,desc:'bloque 01 Constitución, organización del Estado y AGE, edición 2026: cobertura general de la Constitución y el reparto territorial competencial. El programa A2-I.1 ofrece encaje constitucional general, pero no trata específicamente la competencia de legislación laboral.'},
 6622:{a1:[22],a2:['I-6'],file:files.block03,desc:'bloque 03 Actuación Administrativa y Administración Digital, edición 2026.2: cubre la legislación de sociedad de la información/LSSI-CE. La excepción concreta a la prohibición general del art. 21 se comprueba en el BOE.'},
 6623:{a1:[22],a2:[],file:files.block03,desc:'bloque 03 Actuación Administrativa y Administración Digital, edición 2026.2: incluye calidad en los servicios públicos. El programa oficial A2 no contiene epígrafe equivalente sobre calidad de la AGE.'},
 6624:{a1:[24],a2:['I-8'],file:files.block03,desc:'bloque 03 Actuación Administrativa y Administración Digital, edición 2026.2: cubre el EBEP y el empleo público; el número de representantes se contrasta con el art. 39.5 TREBEP.'},
 6625:{a1:[26],a2:[],file:files.block26,desc:'Tema 026 Unidad de Mercado, edición 2026: desarrolla el apoyo a la actividad económica, la garantía de la unidad de mercado y la Ley 20/2013. El programa oficial A2 no incluye un epígrafe específico equivalente.'}
};
const strip=s=>{const x=s||'',needle='Cotejo curricular de ITIC Academy:';const i=x.indexOf(needle);return i<0?x.trim():x.slice(0,i).trim();};
for(const c of log.cambios){const m=map[c.id],q=bank.preguntas.find(x=>x.id===c.id);if(!m||!q)throw Error(`Falta ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const topics=[...q.clasificacion.A1,...q.clasificacion.A2].join('/')||'sin epígrafe A2 equivalente';
 const note=`Cotejo curricular ITIC Academy: ${m.desc} Temas oficiales asociados: ${topics}. La academia orienta la cobertura curricular, no sustituye la fuente primaria.`;
 q.clasificacion.bloque_academia=m.desc;q.clasificacion.nota=note;
 q.comentarios=`${strip(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${strip(q.revision.observaciones)} ${note}`.trim();
 const url=`https://drive.google.com/file/d/${m.file}/view?usp=drivesdk`;
 q.revision.fuentes=q.revision.fuentes.filter(f=>f.url!==url);q.revision.fuentes.push({url,referencia:`ITIC Academy: ${m.desc}`});c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular ITIC Academy añadido/precisado para 6621–6625.');
