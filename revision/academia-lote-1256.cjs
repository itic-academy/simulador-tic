const fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1256.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const files={
 redes:'12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH',
 mobile:'18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu',
 security:'1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82'
};
const map={
 6601:{a1:[121],a2:['IV-7'],file:files.redes,desc:'bloque 42 Redes, edición 2026.1: el índice y las secciones de acceso desarrollan CATV y redes de cable; A2 IV.7 es una correspondencia aproximada por los medios guiados, no un epígrafe específico de CATV.'},
 6602:{a1:[123],a2:['IV-15'],file:files.mobile,desc:'bloque 46 Redes inalámbricas y comunicaciones móviles, edición 2026.1, §12.3: sitúa UMTS y sus perfiles de servicio en la evolución de las generaciones móviles.'},
 6603:{a1:[123],a2:['IV-15'],file:files.mobile,desc:'bloque 46 Redes inalámbricas y comunicaciones móviles, edición 2026.1: cubre acceso múltiple, ensanchamiento del espectro y UMTS/WCDMA.'},
 6604:{a1:[125],a2:['II-13','IV-12'],file:files.security,desc:'bloque 48 Seguridad en redes y en el nivel de aplicación, edición 2026: ataques, herramientas de prevención y seguridad de red. No se encontró en el material una entrada literal específica «C&C».'},
 6605:{a1:[125],a2:['IV-12'],file:files.security,desc:'bloque 48 Seguridad en redes y en el nivel de aplicación, edición 2026: cortafuegos, seguridad perimetral y control de acceso.'}
};
const trimPrior=value=>{const s=value||'',i=s.indexOf('Cotejo curricular de ITIC Academy:');return i<0?s.trim():s.slice(0,i).trim();};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];if(!q||!m)throw Error(`Falta pregunta/mapeo: ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');
 const note=`Cotejo curricular de ITIC Academy: ${m.desc} Temas oficiales asociados: ${tags}. La academia orienta la cobertura; la fuente de la respuesta es la referencia primaria citada.`;
 q.clasificacion.bloque_academia=m.desc;q.clasificacion.nota=note;
 q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();
 q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 const url=`https://drive.google.com/file/d/${m.file}/view?usp=drivesdk`;
 q.revision.fuentes=q.revision.fuentes.filter(f=>f.url!==url);
 q.revision.fuentes.push({url,referencia:`ITIC Academy: ${m.desc}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular ITIC Academy añadido a las preguntas 6601–6605.');
