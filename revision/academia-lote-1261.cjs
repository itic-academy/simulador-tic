const fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1261.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const files={block08:'1uS8S8axBSb22s9Dbv2mTsFaHUUVlowiM',block10:'1alTzv7f2Katg4EdxJ72SYkLm6UScCCho',block09:'1-xmHgvxArWY8GroFD1eSdyPrAQjkBpzo',block29:'1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ',block30:'11CEe-2aKTukr0w6e752_y5y-wWuy1bPH'};
const map={
 6626:{a1:[27],a2:['I-7'],files:[files.block08],desc:'bloque 08 Protección de Datos, actualización 2026: cubre RGPD/LOPDGDD y derechos de las personas; la indemnización por daños se contrasta con el art. 82 RGPD.'},
 6627:{a1:[27],a2:['I-7'],files:[files.block08],desc:'bloque 08 Protección de Datos, actualización 2026: incluye régimen LOPDGDD/RGPD; el umbral de edad se comprueba en el art. 7 LOPDGDD.'},
 6628:{a1:[22],a2:['I-10'],files:[files.block10],desc:'bloque 10 Gobernanza TIC, Administración Digital, Acceso Electrónico y Cooperación, actualización octubre de 2026: aborda cooperación, gobernanza y administración digital. El nombre y estatuto de la Comisión Sectorial se contrastan en la Ley 40/2015 y el acuerdo vigente.'},
 6629:{a1:[34,63],a2:['III-4','IV-2'],files:[files.block09,files.block29],desc:'bloque 09 Organización y Gestión de los Sistemas de Información, actualización 2026: cobertura del centro de sistemas y funciones del área de bases de datos; bloque 29 Bases de Datos, SQL y Modelado de Datos: ER, SGBD y diseño. No se halló una regla curricular que asigne universalmente el modelo ER fuera del cometido del DBA; la pregunta permanece ambigua.'},
 6630:{a1:[72],a2:['II-12'],files:[files.block30],desc:'bloque 30 Tecnologías de Sistemas de Información, edición 2026.1: cobertura relacionada con CRM. La búsqueda en el material accesible no localizó una explicación específica de IVR; se registra el encaje exacto en A2-II.12 y la correspondencia curricular general sin afirmar cobertura literal.'}
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
console.log('Cotejo curricular ITIC Academy añadido/precisado para 6626–6630.');
