const fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1061.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const metodologia='https://drive.google.com/file/d/1D62OE6Sw-ZB46S_2tvGophVTKgS3ip22/view?usp=drivesdk';
const datos='https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk';
const mapa={
 5626:{url:datos,a1:[64,89],a2:['III-4'],desc:'ITIC Academy, bloque «Bases de Datos, SQL y Modelado de Datos» 2026.1: el índice incluye modelo relacional, dominio/ER y diseño de bases de datos (A1 64/89, A2 III.4). El cotejo curricular confirma cobertura; la transformación M:N y las claves se justifican con la fuente técnica primaria del registro.'},
 5627:{url:metodologia,a1:[88,95],a2:['III-2'],desc:'ITIC Academy, bloque 15 «Metodologías Ágiles, Lean y Modelos de Ciclo de Vida» 2026.2, que incluye MÉTRICA v3 y cubre A1 88/A2 D2; el temario oficial además sitúa MÉTRICA en A1 95. La academia se emplea para cobertura y clasificación, no para decidir qué interfaz MÉTRICA contiene cada actividad.'},
 5628:{url:metodologia,a1:[90,95],a2:['III-2'],desc:'ITIC Academy, bloque 15 2026.2 declara MÉTRICA v3 y cubre metodologías de desarrollo A2 D2; el programa oficial A1 90 comprende modelado de procesos y A1 95 MÉTRICA. No se localizó en Drive una exposición con los artefactos concretos de ASI 6/ASI 7; se han cotejado directamente en los manuales oficiales PAe.'},
 5629:{url:metodologia,a1:[90],a2:['II-3'],desc:'ITIC Academy, bloque 15 2026.2 trata ciclo de vida/metodologías y cubre A1 88/A2 D2; el contenido puntual de diagramas de programa se contrasta con ISO 5807. La clasificación se amplía al modelado de procesos A1 90 y lenguajes/programación A2 II.3.'},
 5630:{url:metodologia,a1:[95,101],a2:['III-8'],desc:'ITIC Academy, bloque 15 2026.2 incluye MÉTRICA v3 y metodologías (A1 88/A2 D2); la correspondencia directa de MSI se clasifica según el programa oficial A1 95/101 y A2 III.8. No se encontró en Drive una explicación específica del límite entre tipos conceptuales de mantenimiento y alcance del proceso MSI; se verifica en el manual oficial MÉTRICA v3.'}
};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=mapa[c.id];if(!q||!m)throw Error(`Falta pregunta/mapeo: ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');
 const note=`Cotejo curricular ITIC Academy: ${m.desc} Temas oficiales asociados: ${tags}. La academia orienta cobertura y clasificación; la comprobación sustantiva se apoya en las fuentes oficiales/técnicas documentadas en la revisión.`;
 const marker='Cotejo curricular ITIC Academy:';
 const trimPrior=v=>{const i=(v||'').indexOf(marker);return i<0?(v||'').trim():v.slice(0,i).trim();};
 q.clasificacion.bloque_academia=m.desc;q.clasificacion.nota=note;
 q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();
 q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 q.revision.fuentes=q.revision.fuentes.filter(f=>f.url!==m.url);q.revision.fuentes.push({url:m.url,referencia:`ITIC Academy: ${m.desc}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo de academia y clasificación temática actualizado para IDs 5626–5630; ausencias de cobertura específica documentadas sin atribuir verificación a la academia.');
