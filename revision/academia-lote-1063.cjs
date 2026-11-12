const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1063.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const redes='https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const mapa={
 5636:{url:redes,a1:[108],a2:['IV-8'],desc:'ITIC Academy, bloque 42 «Redes» 2026.1: el apartado de tráfico distingue shaping/policing con leaky bucket/token bucket y separa evitación de congestión RED/WRED/ECN. Se alinea con los temas oficiales de redes y técnicas de transmisión; la función se cita y acota conforme a RFC 3290 y UIT-T I.371.'},
 5637:{url:redes,a1:[108,110,118],a2:['IV-7','IV-8'],desc:'ITIC Academy, bloque 42 Redes 2026.1: su cuadro Cat 6/Clase E recoge 250 MHz, 1000BASE-T, 10GBASE-T con alcance reducido y distingue Cat 6A; el bloque también trata PoE. La ficha del fabricante y TIA confirman que la categoría admite alimentación remota según componentes/instalación.'},
 5638:{url:redes,a1:[108],a2:['IV-7'],desc:'ITIC Academy, bloque 42 Redes 2026.1: trata medios y parámetros de transmisión, incluido ruido y diafonía. El cotejo sitúa el concepto en A1 108/A2 IV.7; la delimitación a ruido aditivo del canal se contrasta con recomendaciones UIT-T y el examen histórico del INAP.'},
 5639:{url:redes,a1:[108,112],a2:['IV-7'],desc:'ITIC Academy, bloque 42 Redes 2026.1, apartado 2.3 Fibra óptica: contrasta monomodo (sin dispersión modal, enlaces largos) y multimodo (alcances de LAN/CPD, limitados por producto ancho de banda×distancia); corresponde a acceso por fibra A1 112 y medios A2 IV.7.'},
 5640:{url:redes,a1:[108,110,112],a2:['IV-7'],desc:'ITIC Academy, bloque 42 Redes 2026.1, apartado 2.3 Fibra óptica y apartado de medios guiados: diferencia núcleo/revestimiento, propagación y cubierta/protección. Coteja la taxonomía de temario; la descripción material se verifica con el manual técnico UIT-T de fibras y cables.'}
};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=mapa[c.id];assert.ok(q&&m,`Falta pregunta o mapeo ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');
 const marker='Cotejo curricular ITIC Academy:';
 const trimPrior=v=>{const i=(v||'').indexOf(marker);return i<0?(v||'').trim():v.slice(0,i).trim();};
 q.clasificacion.bloque_academia=m.desc;
 const note=`${marker} ${m.desc} Temas oficiales asociados: ${tags}. La academia orienta cobertura/clasificación y no sustituye las fuentes técnicas documentadas.`;
 q.clasificacion.nota=`${trimPrior(q.clasificacion.nota)} ${note}`.trim();
 q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();
 q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 q.revision.fuentes=q.revision.fuentes.filter(f=>f.url!==m.url);q.revision.fuentes.push({url:m.url,referencia:`ITIC Academy, bloque 42 Redes: ${m.desc}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo del bloque 42 Redes de ITIC Academy y clasificación A1/A2 actualizado para IDs 5636–5640; la fuente docente queda diferenciada de las fuentes técnicas.');
