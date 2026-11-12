const fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1051.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const url='https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const videoconf='https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk';
const mappings={
 5576:'bloque 42 Redes, sección de tecnologías de acceso de abonado/DSL y ADSL; A1-108/A2-IV-7/IV-10.',
 5577:'bloque 42 Redes, direccionamiento IPv4, máscaras y prefijos; A1-108/A2-IV-8.',
 5578:'bloque 42 Redes, protocolos y redes IP, complementado por el bloque 50 (Videoconferencia), § 1.3 familia H.32x/H.323 y señalización; A1-108/A1-109/A1-130/A2-IV-8/IV-13/IV-14/IV-16.',
 5579:'bloque 42 Redes, ancho de banda y parámetros de transmisión digital; A1-108/A2-IV-7.',
 5580:'bloque 50 (Videoconferencia), § 1.3 H.323 y códecs de audio (G.711 obligatorio en el perfil H.323 descrito) y tabla comparativa de códecs vocales G.726/G.729; A1-130/A2-IV-16. Contexto de red/VoIP en el bloque 42; A1-108/A1-109/A2-IV-8/IV-13/IV-14.'
};
const topics={5576:[[108],['IV-7','IV-10']],5577:[[108],['IV-8']],5578:[[108,109,130],['IV-8','IV-13','IV-14','IV-16']],5579:[[108],['IV-7']],5580:[[108,109,130],['IV-8','IV-13','IV-14','IV-16']]};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),desc=mappings[c.id];
 if(!q||!desc)throw Error(`Falta pregunta o mapeo académico: ${c.id}`);
 const [a1,a2]=topics[c.id];q.clasificacion.A1=a1.map(n=>`A1-${n}`);q.clasificacion.A2=a2.map(n=>`A2-${n}`);
 const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');
 const note=`Cotejo curricular de ITIC Academy 2026: ${desc} Temas oficiales asociados: ${tags}. La academia se emplea para ubicar cobertura y vocabulario del temario; la verificación de compatibilidad, direccionamiento, señalización y codificación se apoya en UIT-T, RFC y bibliografía técnica citada en esta revisión.`;
 q.clasificacion.bloque_academia=desc;q.clasificacion.nota=note;
 const marker='Cotejo curricular de ITIC Academy 2026:';
 const trimPrior=value=>{const i=(value||'').indexOf(marker);return i<0?(value||'').trim():value.slice(0,i).trim();};
 q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();
 q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 q.revision.fuentes=q.revision.fuentes.filter(f=>![url,videoconf].includes(f.url));
 q.revision.fuentes.push({url,referencia:`ITIC Academy 2026, ${desc}`});
 if([5578,5580].includes(c.id))q.revision.fuentes.push({url:videoconf,referencia:`ITIC Academy 2026, bloque 50 Videoconferencia, § 1.3 H.32x/H.323 y códecs vocales: ${desc}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(root+'/preguntas_preparatic.json',JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular Drive agregado a las cinco preguntas del lote 1051.');
