const fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1057.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const db='https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk';
const dotnet='https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk';
const map={
 5606:{url:db,a1:[34],a2:['II-5'],desc:'ITIC Academy Bases de Datos 2026, núcleo de SGBD, administración, almacenamiento y seguridad de bases; clasificación oficial A1 34 (funciones de bases de datos en un centro de sistemas) y A2 II.5 (SGBD/ANSI-SPARC). La separación entre balanceo de aplicaciones y DBA se justifica con la fuente técnica Oracle.'},
 5607:{url:db,a1:[63],a2:['II-5'],desc:'ITIC Academy Bases de Datos 2026, SGBD relacionales, transacciones, concurrencia y garantías; correspondencia oficial A1 63/A2 II.5. La definición ACID se verifica con la documentación del SGBD PostgreSQL.'},
 5608:{url:db,a1:[63],a2:['II-5'],desc:'ITIC Academy Bases de Datos 2026, apartado de arquitectura ANSI/SPARC e independencia física/lógica; cobertura directa del tema oficial A2 II.5 y fundamentos SGBD A1 63.'},
 5609:{url:db,a1:[64],a2:['III-4'],desc:'ITIC Academy Bases de Datos 2026, diseño relacional, dependencias funcionales y normalización (1FN–3FN); correspondencia oficial A1 64/A2 III.4.'},
 5610:{url:dotnet,a1:[66],a2:['III-11'],desc:'ITIC Academy Tecnologías de Sistemas de Información 2026, entorno Microsoft .NET; clasificación oficial A1 66 y A2 III.11. Para la función concreta de DataSet se contrasta Microsoft Learn.'}
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
console.log('Cotejo curricular del bloque Bases de Datos y .NET 2026 añadido a las cinco preguntas del lote 1057.');
