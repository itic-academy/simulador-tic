const fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1263.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const files={mobile:'18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu',cloud:'16Er3cneQ-Vik3zSjYq6zQUOfSKK4vxVu',arch:'1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ',os:'1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3'};
const map={
 6636:{a1:[54,123],a2:['IV-15'],files:[files.mobile],desc:'ITIC Academy, bloque 46 Redes Inalámbricas y Comunicaciones Móviles, edición 2026.1: incluye MDM/EMM/UEM y gestión de dispositivos móviles; el tema A1-54 trata medidas de seguridad y gestión y A2-IV-15 menciona expresamente soluciones MDM, EMM y UEM.'},
 6637:{a1:[54,125],a2:['IV-15'],files:[files.mobile],desc:'ITIC Academy, bloque 46 Redes Inalámbricas y Comunicaciones Móviles, edición 2026.1: incluye seguridad y gestión del ciclo de vida de dispositivos móviles y MDM/EMM/UEM. La recomendación concreta sobre parches se fundamenta en la guía NIST SP 800-124 Rev. 2.'},
 6638:{a1:[55],a2:['II-1'],files:[files.cloud],desc:'ITIC Academy, bloque 25 Cloud Computing, edición 2026: incluye OpenStack/OpenNebula, componentes de nube y almacenamiento por objetos/bloques. Los nombres y capacidades concretos de los servicios se contrastan con la documentación oficial de OpenStack.'},
 6639:{a1:[58],a2:['II-6'],files:[files.arch],desc:'ITIC Academy, bloque 28 Arquitectura SOA y requisitos no funcionales, versión 2026: cubre procesamiento distribuido y arquitectura cliente-servidor; su temario incluye la tipología de arquitecturas y el papel de los componentes.'},
 6640:{a1:[60],a2:['II-2'],files:[files.os],desc:'ITIC Academy, bloque 27 Sistemas Operativos, edición actualizada 2026: incluye UNIX/Linux y administración de sistemas; la interpretación de los bits octales se contrasta con el manual de chmod.'}
};
const strip=s=>{const x=s||'',needle='Cotejo curricular de ITIC Academy:';const i=x.indexOf(needle);return i<0?x.trim():x.slice(0,i).trim();};
for(const c of log.cambios){const m=map[c.id],q=bank.preguntas.find(x=>x.id===c.id);if(!m||!q)throw Error(`Falta ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const topics=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');
 const note=`Cotejo curricular ITIC Academy: ${m.desc} Temas oficiales asociados: ${topics}. La academia orienta la cobertura, no sustituye las fuentes primarias.`;
 q.clasificacion.bloque_academia=m.desc;q.clasificacion.nota=note;
 q.comentarios=`${strip(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${strip(q.revision.observaciones)} ${note}`.trim();
 const urls=m.files.map(id=>`https://drive.google.com/file/d/${id}/view?usp=drivesdk`);
 q.revision.fuentes=q.revision.fuentes.filter(f=>!f.url.includes('drive.google.com'));for(const url of urls)q.revision.fuentes.push({url,referencia:`ITIC Academy: ${m.desc}`});c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular ITIC Academy añadido para 6636–6640.');
