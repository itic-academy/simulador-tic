const fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1267.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const files={quality:'17PDaqPVVwhzfeplx9bzp8XjEXm_qlami',itil:'13ohkITliw7Nrg6LKPinh9vliiwrgPdwr',networks:'12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH',protocols:'1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw'};
const map={
 6656:{a1:[102],a2:['IV-4'],files:[files.quality],desc:'ITIC Academy, bloque 39 Calidad y Mantenimiento, edición 2026: cubre A1-102 (configuración y versiones) y la gestión de configuración A2.IV.4. El bloque ofrece cobertura curricular, mientras la sintaxis exacta de <scm> se comprueba en la documentación Maven.'},
 6657:{a1:[106],a2:['IV-4'],files:[files.itil],desc:'ITIC Academy, bloque 41 ITIL y COBIT, edición 2026.1: cubre conceptos y prácticas de ITIL, gestión de configuración, cambios y versiones; el material vigente menciona la DML/repositorios como custodia de versiones autorizadas. El reactivo se limita a ITIL v3 y su DML histórica.'},
 6658:{a1:[103],a2:['III-13'],files:[files.quality],desc:'ITIC Academy, bloque 39 Calidad y Mantenimiento, edición 2026: incluye ISO 9001:2026, ISO 9004, A1-103 y estándares de calidad en el temario A2. La certificación de un sistema de gestión se distingue expresamente de la medida de calidad del producto software.'},
 6659:{a1:[108],a2:['II-8'],files:[files.networks,files.protocols],desc:'ITIC Academy, bloque 42 Redes, edición 2026.1: explica circuitos virtuales como X.25/Frame Relay/ATM y su diferencia con datagramas; bloque 43 Protocolos cubre los modelos por capas y X.25. La definición se contrasta con ITU-T e IETF.'},
 6660:{a1:[111],a2:['II-8'],files:[files.protocols],desc:'ITIC Academy, bloque 43 Protocolos, edición 2026.1: sitúa XDR en la función de representación de la capa OSI. NFSv4 y el uso de XDR se contrastan con las RFC de IETF; el material de academia no sustituye esas especificaciones.'}
};
for(const c of log.cambios){const m=map[c.id],q=bank.preguntas.find(x=>x.id===c.id);if(!m||!q)throw Error(`Falta ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const topics=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');
 const note=`Cotejo curricular ITIC Academy: ${m.desc} Correspondencia oficial asociada: ${topics}. La academia orienta cobertura y prioridad, no sustituye a la fuente primaria.`;
 q.clasificacion.bloque_academia=m.desc;q.clasificacion.nota=note;
 q.comentarios=`${q.comentarios||''} ${note}`.trim();q.revision.observaciones=`${q.revision.observaciones||''} ${note}`.trim();
 q.revision.fuentes=q.revision.fuentes.filter(f=>!f.url.includes('drive.google.com'));
 for(const id of m.files)q.revision.fuentes.push({url:`https://drive.google.com/file/d/${id}/view?usp=drivesdk`,referencia:m.desc});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular ITIC Academy añadido para 6656–6660.');
