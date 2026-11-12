const fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1049.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const url41='https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk';
const url42='https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const mappings={
 5566:[url41,'bloque 41 ITIL y COBIT, apartados 8.1–8.3: COBIT 2019 y sus cinco dominios. Correspondencia A1-106; el PDF identifica únicamente su conexión curricular A2 con los temas C2/D2, sin epígrafe directo para esta pregunta.'],
 5567:[url41,'bloque 41 ITIL y COBIT, prácticas de ITIL y análisis de riesgos. Correspondencia A1-106/A2-II-10; cotejo curricular, no evidencia para identificar la sigla ADA del enunciado original.'],
 5568:[url42,'bloque 42 Redes, apartado 6.3 BGP y estructura de Internet: diferencia encaminamiento interior/inter-AS y explica BGP. Correspondencia A1-108/A2-IV-13.'],
 5569:[url42,'bloque 42 Redes, apartado 6.3: sistemas autónomos, tránsito, peering e IXP. Correspondencia A1-108/A2-IV-8/IV-13.'],
 5570:[url42,'bloque 42 Redes, apartado 7.4 WDM: distingue CWDM (canales amplios) y DWDM. Correspondencia A1-108/A2-IV-7.']
};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),[url,desc]=mappings[c.id];
 if(!q||!url)throw Error(`Falta pregunta o mapeo académico: ${c.id}`);
 const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');
 const note=`Cotejo curricular de ITIC Academy 2026: ${desc} Temas oficiales asociados: ${tags||'sin tema oficial A2 directo'}. El temario de academia orienta la clasificación; la verificación de la respuesta se apoya en las fuentes técnicas primarias registradas.`;
 q.clasificacion.bloque_academia=desc;
 q.clasificacion.nota=note;
 q.comentarios=`${q.comentarios||''} ${note}`.trim();
 q.revision.observaciones=`${q.revision.observaciones} ${note}`;
 q.revision.fuentes.push({url,referencia:`ITIC Academy 2026, ${desc}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular Drive agregado a las cinco preguntas del lote 1049.');
