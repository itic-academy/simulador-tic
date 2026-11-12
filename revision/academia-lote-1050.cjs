const fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1050.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const url='https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const mappings={
 5571:'bloque 42 Redes, apartado 1.2: identifica OSI con ISO/IEC 7498-1 y menciona UIT-T X.200 como equivalente; A1-111/A2-IV-8.',
 5572:'bloque 42 Redes, apartado de transporte TCP (RFC 9293): ventana deslizante y control de flujo; A1-108/A2-IV-8.',
 5573:'bloque 42 Redes, fibra óptica y fuentes emisoras: compara LED/VCSEL con láser monomodo; A1-108/A2-IV-7.',
 5574:'bloque 42 Redes, Carrier Ethernet y redes de agregación (MEF, VPLS); A1-108/A1-113/A2-IV-8.',
 5575:'bloque 42 Redes, apartados 7.5 MPLS, FEC y distribución de etiquetas, además del tema 113 de A1; A1-108/A1-113/A2-IV-8/IV-13.'
};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),desc=mappings[c.id];
 if(!q||!desc)throw Error(`Falta pregunta o mapeo académico: ${c.id}`);
 const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');
 const note=`Cotejo curricular de ITIC Academy 2026: ${desc} Temas oficiales asociados: ${tags}. El material de academia orienta el mapa curricular; las conclusiones técnicas se contrastaron con estándares ISO/UIT-T, RFC de IETF, NIST/OSHA o especificaciones de MEF citados en la revisión.`;
 q.clasificacion.bloque_academia=desc;q.clasificacion.nota=note;
 q.comentarios=`${q.comentarios||''} ${note}`.trim();
 q.revision.observaciones=`${q.revision.observaciones} ${note}`;
 q.revision.fuentes.push({url,referencia:`ITIC Academy 2026, ${desc}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular Drive agregado a las cinco preguntas del lote 1050.');
