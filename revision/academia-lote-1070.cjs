const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1070.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const constitucion='https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk';
const actuacion='https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk';
const mapa={
 5671:{a1:[6,8],a2:['I-8'],urls:[constitucion,actuacion],desc:'ITIC Academy, bloque 01 Constitución/AGE 2026.2, cubre el marco de organización territorial A1-6; el bloque 03, secciones 2.1 y 2.7, estudia la Ley 40/2015 y órganos de la AGE, con referencias a A1-6/8 y A2 O8. La clave se funda en el art. 55 BOE vigente, no en el material docente.'},
 5672:{a1:[5],a2:[],urls:[actuacion],desc:'ITIC Academy, bloque 03, § 1.2, explica Derecho originario de la UE, TUE/TFUE e instituciones, en línea con A1-5; no desarrolla literalmente la composición del Consejo en el art. 16 TUE. No se localizó epígrafe A2 específico de instituciones de la Unión y no se fuerza esa clasificación.'},
 5673:{a1:[5],a2:[],urls:[actuacion],desc:'ITIC Academy, bloque 03, § 1.2, cubre Derecho derivado de la UE y distingue directivas y reglamentos; el programa oficial relacionado es A1-5. El material no desarrolla el supuesto concreto del art. 59 TFUE. No se fuerza clasificación A2.'},
 5674:{a1:[6,8],a2:['I-8'],urls:[constitucion,actuacion],desc:'ITIC Academy, bloque 01 Constitución/AGE 2026.2 cubre A1-6 (organización territorial de la AGE); bloque 03, § 2.7, estudia Ley 40/2015 y órganos territoriales. Ambos registran el tema A2 O8 del curso (correspondiente a A2-I-8 del programa oficial). Para la competencia concreta de los Directores Insulares se usa el art. 70 del BOE.'},
 5675:{a1:[7,8],a2:['I-8'],urls:[actuacion],desc:'ITIC Academy, bloque 03, §§ 1.7 y 3, estudia concepto/límites del reglamento y la Ley 39/2015; el curso mapea la materia a A1-7/8 y A2 O8 (A2-I-8 en el programa oficial). La literalidad y sujetos del art. 128 se verifican en el texto consolidado BOE.'}
};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=mapa[c.id];assert.ok(q&&m,`Falta pregunta o mapeo ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/'),marker='Cotejo curricular ITIC Academy:';
 const trimPrior=v=>{const i=(v||'').indexOf(marker);return i<0?(v||'').trim():v.slice(0,i).trim();};
 q.clasificacion.bloque_academia=m.desc;
 const note=`${marker} ${m.desc}${tags?` Temas oficiales asociados: ${tags}.`:''} El material docente acredita cobertura curricular; la conclusión concreta se basa en las fuentes legales de la revisión.`;
 q.clasificacion.nota=`${trimPrior(q.clasificacion.nota)} ${note}`.trim();q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 const urls=new Set([constitucion,actuacion]);q.revision.fuentes=q.revision.fuentes.filter(f=>!urls.has(f.url));
 for(const url of m.urls)q.revision.fuentes.push({url,referencia:`ITIC Academy: ${m.desc}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular A1/A2 actualizado para IDs 5671–5675.');
