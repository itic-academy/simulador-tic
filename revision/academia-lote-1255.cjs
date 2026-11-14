const fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1255.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const academyUrl='https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const map={
 6596:{a1:[110,111,118],a2:['IV-8'],desc:'ITIC Academy, bloque 42 Redes (edición 2026.1): dispositivos Ethernet, interconexión de redes LAN y modelo de capas; encaje con A1 110/111/118 y A2 IV.8.'},
 6597:{a1:[111],a2:['II-8'],desc:'ITIC Academy, bloque 42 Redes (edición 2026.1): modelos de red y protocolos de transporte; encaje con A1 111 y A2 II.8.'},
 6598:{a1:[108,112],a2:['IV-7'],desc:'ITIC Academy, bloque 42 Redes (edición 2026.1): fibra óptica y medios guiados; encaje con A1 108/112 y A2 IV.7.'},
 6599:{a1:[19],a2:[],desc:'Cotejado el temario ITIC Academy 2026 disponible en Drive: no se localizó cobertura específica del programa histórico de Oficinas de Transformación Digital. A1 19 es solo una correspondencia general con impacto económico de las TIC; sin tema A2 forzado.'},
 6600:{a1:[118],a2:['IV-8'],desc:'ITIC Academy, bloque 42 Redes (edición 2026.1): redes locales y métodos de acceso al medio, incluido CSMA; encaje con A1 118 y A2 IV.8.'}
};
const trimPrior=value=>{const s=value||'',i=s.indexOf('Cotejo curricular de ITIC Academy:');return i<0?s.trim():s.slice(0,i).trim();};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];if(!q||!m)throw Error(`Falta pregunta/mapeo: ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');
 const note=`Cotejo curricular de ITIC Academy: ${m.desc} Temas oficiales asociados: ${tags||'sin tema A2 específico'}. La academia orienta la cobertura y clasificación; la verificación técnica se fundamenta en las fuentes primarias citadas.`;
 q.clasificacion.bloque_academia=m.desc;q.clasificacion.nota=note;
 q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();
 q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 q.revision.fuentes=q.revision.fuentes.filter(f=>f.url!==academyUrl);
 if(c.id!==6599)q.revision.fuentes.push({url:academyUrl,referencia:`ITIC Academy: ${m.desc}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular de Academia añadido/registrado para 6596–6600.');
