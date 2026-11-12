const fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1060.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const methods='https://drive.google.com/file/d/1D62OE6Sw-ZB46S_2tvGophVTKgS3ip22/view?usp=drivesdk';
const design='https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const db='https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk';
const map={
 5621:{url:design,a1:[88],a2:['III-9'],desc:'ITIC Academy, bloque 38 Análisis, Diseño y Construcción 2026.1, apartado D9: análisis orientado a objetos y proceso unificado; clasificación A1 88/A2 III.9. El rasgo de casos de uso se contrasta con el SEI y documentación histórica de Rational/IBM.'},
 5622:{url:null,a1:[],a2:['II-3'],desc:'Se cotejó el programa A2 II.3 (lenguajes y paradigmas) y se buscaron en Drive materiales específicos sobre parámetros const de C++; no se localizó cobertura de esa regla concreta. El contenido general de lenguaje se contrasta con el borrador de trabajo C++ de WG21 y Microsoft Learn.'},
 5623:{url:methods,a1:[88],a2:['II-3'],desc:'ITIC Academy, bloque 15 Metodologías Ágiles y Ciclo de Vida 2026.2: cubre los modelos y metodologías de desarrollo de A1 88 y A2 II.3; la consulta a Drive no localizó una explicación específica del refinamiento sucesivo estructurado, que se verifica en los escritos de Dijkstra.'},
 5624:{url:db,a1:[89],a2:['III-4'],desc:'ITIC Academy Bases de Datos, SQL y Modelado de Datos 2026.1: modelo ER/dominio (A1 89) y modelado/diseño (A2 III.4). La definición EER de especialización, herencia y agregación se contrasta con Elmasri/Navathe y material universitario de Purdue.'},
 5625:{url:db,a1:[89],a2:['III-4'],desc:'ITIC Academy Bases de Datos, SQL y Modelado de Datos 2026.1: análisis de dominio y modelos ER (A1 89), junto con modelado conceptual/diseño (A2 III.4). La independencia del modelo conceptual se fundamenta en Chen y Elmasri/Navathe.'}
};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];if(!q||!m)throw Error(`Falta pregunta/mapeo: ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');
 const note=`Cotejo curricular de ITIC Academy: ${m.desc} Temas oficiales asociados: ${tags||q.clasificacion.A2.join('/')}. La academia orienta cobertura y clasificación; la verificación del contenido se fundamenta en las fuentes técnicas indicadas.`;
 const marker='Cotejo curricular de ITIC Academy:';
 const trimPrior=value=>{const i=(value||'').indexOf(marker);return i<0?(value||'').trim():value.slice(0,i).trim();};
 q.clasificacion.bloque_academia=m.desc;q.clasificacion.nota=note;
 q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();
 q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 if(m.url){q.revision.fuentes=q.revision.fuentes.filter(f=>f.url!==m.url);q.revision.fuentes.push({url:m.url,referencia:`ITIC Academy: ${m.desc}`});}
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(root+'/preguntas_preparatic.json',JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular oficial/Drive actualizado para el lote 1060; la ausencia de fuente curricular específica en 5622 y 5623 queda documentada.');
