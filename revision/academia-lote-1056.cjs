const fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1056.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const hardware='https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk';
const os='https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk';
const tech='https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk';
const soa='https://drive.google.com/file/d/1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ/view?usp=drivesdk';
const sysadmin='https://drive.google.com/file/d/1ZwZ2asNDNfv6NhMeoJa_gCuy5i681jLR/view?usp=drivesdk';
const map={
 5601:{url:hardware,a1:[56],a2:['IV-5'],desc:'ITIC Academy 2026, bloque Hardware (A1 52/53/54/56/57; A2 T1/C3/C5/C6): almacenamiento, sistemas grandes y departamentales. La referencia curricular ubica Fibre Channel/WWN en almacenamiento; el tamaño y semántica de WWN se validan con IETF RFC 4044.'},
 5602:{url:hardware,a1:[56],a2:['IV-3'],desc:'ITIC Academy 2026, bloque Hardware: epígrafe A1 56 de sistemas de almacenamiento y copias de seguridad; cobertura paralela A2 IV.3 de backup y recuperación. La distinción técnica entre incremental y diferencial se apoya en NIST SP 800-34 Rev. 1.'},
 5603:{url:tech,a1:[65],a2:['III-12'],desc:'ITIC Academy 2026, bloque Tecnologías de Sistemas de Información, § 3.4 “SOAP, WSDL, WS-Security y UDDI”; alineación con arquitectura web e interconexión A1 65 y servicios web/estándares A2 III.12. El significado normativo se contrasta con W3C.'},
 5604:{url:sysadmin,a1:[34],a2:['IV-1'],desc:'ITIC Academy 2026, bloque Sistemas Operativos (A1 59–62; A2 T2/C1) y administración del sistema/software de base; encaje curricular con inventario y gestión de componentes. El contenido mínimo y los datos de identificación de componentes se verifican independientemente con NIST SP 800-53 CM-8.'},
 5605:{url:os,a1:[59],a2:['IV-1'],desc:'ITIC Academy 2026, bloque Sistemas Operativos, tabla de algoritmos de planificación: Round Robin se describe con cola circular y quantum y se analiza la sobrecarga de cambios de contexto; correspondencia con fundamentos A1 59 y administración/fundamentos A2 IV.1.'}
};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];if(!q||!m)throw Error(`Falta pregunta/mapeo: ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');
 const note=`Cotejo curricular de ITIC Academy: ${m.desc} Temas oficiales asociados: ${tags}. La academia orienta la cobertura y clasificación; la verificación se fundamenta en las fuentes técnicas primarias citadas.`;
 const marker='Cotejo curricular de ITIC Academy:';
 const trimPrior=value=>{const i=(value||'').indexOf(marker);return i<0?(value||'').trim():value.slice(0,i).trim();};
 q.clasificacion.bloque_academia=m.desc;q.clasificacion.nota=note;
 q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();
 q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 q.revision.fuentes=q.revision.fuentes.filter(f=>f.url!==m.url);
 q.revision.fuentes.push({url:m.url,referencia:`ITIC Academy: ${m.desc}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(root+'/preguntas_preparatic.json',JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular de los bloques ITIC Academy 2026 añadido a las cinco preguntas del lote 1056.');
