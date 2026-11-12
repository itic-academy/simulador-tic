const fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1052.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const url='https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const mappings={
 5581:'bloque 42 Redes, § 1.3 y figura comparativa: distingue conmutación de circuitos y paquetes, el modo datagrama y el circuito virtual; A1-108/A2-IV-8.',
 5582:'bloque 42 Redes, § 4.3 Ethernet (IEEE 802.3), dentro del temario de LAN y medios; A1-110/A1-118/A2-IV-8.',
 5583:'bloque 42 Redes, § 5.3 SNMP, dentro de administración, monitorización y gestión de dispositivos; A1-118/A2-IV-8.',
 5584:'bloque 42 Redes, § 7.4 WDM: el texto caracteriza CWDM con 18 canales y contrasta la mayor densidad de DWDM; no afirma que la UIT-T fije 40 canales DWDM. Se contrasta con rejillas UIT-T G.694.1/G.694.2; A1-113/A2-IV-10.',
 5585:'bloque 42 Redes, § 8.1 redes públicas de transmisión de datos: encaje curricular general. El documento consultado no cita explícitamente GÉANT2; la identificación y fecha se verifican con el informe primario de DANTE y fuente pública contemporánea; A1-108/A1-120/A2-IV-10.'
};
const topics={5581:[[108],['IV-8']],5582:[[110,118],['IV-8']],5583:[[118],['IV-8']],5584:[[113],['IV-10']],5585:[[108,120],['IV-10']]};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),desc=mappings[c.id];
 if(!q||!desc)throw Error(`Falta pregunta o mapeo académico: ${c.id}`);
 const [a1,a2]=topics[c.id];q.clasificacion.A1=a1.map(n=>`A1-${n}`);q.clasificacion.A2=a2.map(n=>`A2-${n}`);
 const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');
 const note=`Cotejo curricular de ITIC Academy 2026: ${desc} Temas oficiales asociados: ${tags}. Se usa el temario para cobertura y clasificación; la verificación de los datos procede de RFC/IETF, IEEE, UIT-T y registros oficiales/históricos citados en cada pregunta.`;
 const marker='Cotejo curricular de ITIC Academy 2026:';
 const trimPrior=value=>{const i=(value||'').indexOf(marker);return i<0?(value||'').trim():value.slice(0,i).trim();};
 q.clasificacion.bloque_academia=desc;q.clasificacion.nota=note;
 q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();
 q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 q.revision.fuentes=q.revision.fuentes.filter(f=>f.url!==url);
 q.revision.fuentes.push({url,referencia:`ITIC Academy 2026, ${desc}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(root+'/preguntas_preparatic.json',JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular Drive agregado a las cinco preguntas del lote 1052.');
