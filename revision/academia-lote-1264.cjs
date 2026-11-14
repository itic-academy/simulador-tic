const fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1264.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const files={os:'1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3',tech:'1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm',gpl:'1Og6yI-YaZ48UA3pBT-HQhTh7TfvdPW_C',bio:'1xTMCpPmwNi8hpb0nZ3sMqpgvrhLXT-yf',audit:'1D93MNUzOWGwD6IyuWdxIMnHaL7aXvYhp'};
const map={
 6641:{a1:[61],a2:['II-2'],files:[files.os],desc:'ITIC Academy, bloque 27 Sistemas Operativos, edición 2026: cubre Windows y administración de sistemas. No atribuye al bloque una definición particular de PowerShell; esta se contrasta con Microsoft Learn.'},
 6642:{a1:[67],a2:['III-10'],files:[files.tech],desc:'ITIC Academy, bloque 30 Tecnologías de Sistemas de la Información, edición 2026.1: temario oficial A1-67 y A2-D10 de Java/Java EE-Jakarta EE y D12 de aplicaciones web. Incluye el contexto curricular, mientras que la acción jsp:forward se verifica en la especificación Jakarta Pages.'},
 6643:{a1:[43,69],a2:['II-14'],files:[files.gpl],desc:'ITIC Academy, tema 43 Protección Jurídica del Software, Licencias y DRM, edición 2026: cubre licencias y protección jurídica del software. El alcance concreto de la licencia de patentes se contrasta con GNU GPLv3 §11.'},
 6644:{a1:[81,84],a2:['I-9'],files:[files.bio],desc:'ITIC Academy, bloque 37 Imágenes, OCR, Biometría y Gestión de Contenidos, edición 2026: trata identificación/verificación biométrica y tasas FAR/FRR.'},
 6645:{a1:[38,82],a2:['II-11'],files:[files.audit],pending:true,desc:'ITIC Academy, bloque Auditoría Informática A1-38/A2-T11, edición 2026.2: desarrolla objetivos, metodología, técnicas y herramientas; no identifica «MNAP» ni resuelve si el reactivo quiso decir Nmap.'}
};
const strip=s=>{const x=s||'',needle='Cotejo curricular ITIC Academy:';const i=x.indexOf(needle);return i<0?x.trim():x.slice(0,i).trim();};
for(const c of log.cambios){const m=map[c.id],q=bank.preguntas.find(x=>x.id===c.id);if(!m||!q)throw Error(`Falta ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const topics=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');
 const note=`Cotejo curricular ITIC Academy: ${m.desc} Correspondencia oficial: ${topics}. La academia orienta la cobertura; las afirmaciones técnicas se contrastan con fuentes primarias.`;
 q.clasificacion.bloque_academia=m.desc;q.clasificacion.nota=note;if(m.pending)q.clasificacion.estado='pendiente_ambiguedad';
 q.comentarios=`${strip(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${strip(q.revision.observaciones)} ${note}`.trim();
 q.revision.fuentes=q.revision.fuentes.filter(f=>!f.url.includes('drive.google.com'));
 for(const id of m.files)q.revision.fuentes.push({url:`https://drive.google.com/file/d/${id}/view?usp=drivesdk`,referencia:`ITIC Academy: ${m.desc}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular ITIC Academy añadido para 6641–6645.');
