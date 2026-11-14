const fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1265.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const files={tech:'1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm',analysis:'1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN',requirements:'11qGK4GbJ0QV81HEyboRAy5AZorijJmhs'};
const map={
 6646:{a1:[85],a2:[],files:[files.tech],desc:'ITIC Academy, bloque 30 Tecnologías de Sistemas de la Información, edición 2026.1: su mapa oficial incluye A1-85, blockchain, redes y algoritmos de consenso. En el temario oficial A2 consultado no hay tema específico de PoW/blockchain, por lo que no se fuerza equivalencia.'},
 6647:{a1:[88,94],a2:['III-3'],files:[files.analysis,files.requirements],desc:'ITIC Academy, bloque 38 Análisis, Diseño y Construcción de Sistemas de Información (2026.1), A1-88/A1-94/A2-D3; y bloque 28 Arquitectura SOA y requisitos no funcionales (2026.1), A2-D3: determinación de requisitos, prototipos y especificación.'},
 6648:{a1:[88],a2:['III-3'],files:[files.analysis,files.requirements],desc:'ITIC Academy, bloques 38 Análisis, Diseño y Construcción de Sistemas de Información y 28 Arquitectura SOA y requisitos no funcionales (ediciones 2026.1): ingeniería y especificación de requisitos. Las cualidades concretas se contrastan con NASA e ISO/IEC/IEEE.'},
 6649:{a1:[95],a2:['III-2'],files:[files.analysis],pending:true,desc:'ITIC Academy, bloque 38 Análisis, Diseño y Construcción de Sistemas de Información (2026.1), cobertura general del análisis y ciclo de vida. No se localizó una lección específica sobre HVE; el bloque no acredita la taxonomía del reactivo.'},
 6650:{a1:[89],a2:['III-9'],files:[files.analysis],desc:'ITIC Academy, bloque 38 Análisis, Diseño y Construcción de Sistemas de Información, edición 2026.1: incluye A2-D9, análisis/diseño orientado a objetos y UML. La separación documental se limita a la versión histórica 2.4.1 y se comprueba en el catálogo OMG.'}
};
const strip=s=>{const x=s||'',needle='Cotejo curricular ITIC Academy:';const i=x.indexOf(needle);return i<0?x.trim():x.slice(0,i).trim();};
for(const c of log.cambios){const m=map[c.id],q=bank.preguntas.find(x=>x.id===c.id);if(!m||!q)throw Error(`Falta ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const topics=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');
 const note=`Cotejo curricular ITIC Academy: ${m.desc} Correspondencia oficial asociada: ${topics||'sin correspondencia A2 específica'}. La academia orienta la cobertura, no sustituye las fuentes primarias.`;
 q.clasificacion.bloque_academia=m.desc;q.clasificacion.nota=note;if(m.pending)q.clasificacion.estado='pendiente_fuente';
 q.comentarios=`${strip(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${strip(q.revision.observaciones)} ${note}`.trim();
 q.revision.fuentes=q.revision.fuentes.filter(f=>!f.url.includes('drive.google.com'));
 for(const id of m.files)q.revision.fuentes.push({url:`https://drive.google.com/file/d/${id}/view?usp=drivesdk`,referencia:`ITIC Academy: ${m.desc}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular ITIC Academy añadido para 6646–6650.');
