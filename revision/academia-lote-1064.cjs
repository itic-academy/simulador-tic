const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1064.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const redes='https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const mapa={
 5641:{a1:[113],a2:[],desc:'ITIC Academy, bloque 42 Redes 2026.1: su índice incluye redes de transporte/agregación y ATM (correspondencia con A1-113). No se localizó en el material consultado el formato de celda 5+48 octetos; ese dato se verifica con UIT-T I.361.'},
 5642:{a1:[112],a2:['IV-11'],desc:'ITIC Academy, bloque 42 Redes 2026.1: cubre tecnologías de acceso inalámbricas/WiMAX de forma general. No se localizó en el material consultado la lista de mecanismos criptográficos de IEEE 802.16; la respuesta se contrasta con NIST SP 800-127 y documentos IEEE.'},
 5643:{a1:[108],a2:['IV-7'],desc:'ITIC Academy, bloque 42 Redes 2026.1: cobertura general de acceso de banda ancha sobre par de cobre y medios guiados, vinculada a A1-108/A2-IV.7. No se localizó la identificación concreta de G.992.2; se confirma con la ficha vigente de UIT-T.'},
 5644:{a1:[108],a2:['IV-7'],desc:'ITIC Academy, bloque 42 Redes 2026.1: cubre acceso de banda ancha por cobre y medios guiados. No se localizó la distinción de topologías splitter central, filtros distribuidos y G.992.2; se contrasta con UIT-T y ETSI.'},
 5645:{a1:[114],a2:['IV-11'],desc:'ITIC Academy, bloque 42 Redes 2026.1: su índice cubre redes WLAN/IEEE 802.11 en general (A1-114/A2-IV.11). No se localizó en el material consultado la enmienda 802.11r; se confirma con IEEE.'}
};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=mapa[c.id];assert.ok(q&&m,`Falta pregunta o mapeo ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');
 const marker='Cotejo curricular ITIC Academy:';
 const trimPrior=v=>{const i=(v||'').indexOf(marker);return i<0?(v||'').trim():v.slice(0,i).trim();};
 q.clasificacion.bloque_academia=m.desc;
 const note=`${marker} ${m.desc} Temas oficiales asociados: ${tags||'sin tema A2 específico'}; se evita forzar una correspondencia fuera del programa.`;
 q.clasificacion.nota=`${trimPrior(q.clasificacion.nota)} ${note}`.trim();
 q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();
 q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 q.revision.fuentes=q.revision.fuentes.filter(f=>f.url!==redes);q.revision.fuentes.push({url:redes,referencia:`ITIC Academy, bloque 42 Redes: ${m.desc}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular ITIC Academy y temas oficiales actualizado para IDs 5641–5645; se indican expresamente los detalles técnicos no hallados en el temario.');
