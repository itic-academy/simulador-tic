const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1062.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const metodologia='https://drive.google.com/file/d/1D62OE6Sw-ZB46S_2tvGophVTKgS3ip22/view?usp=drivesdk';
const analisis='https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const mapa={
 5631:{url:metodologia,a1:[95],a2:['III-2'],desc:'ITIC Academy, bloque 15 «Metodologías Ágiles, Lean y Modelos de Ciclo de Vida» 2026.2: el índice incluye MÉTRICA v3 y A2 D2 (gestión/planificación y metodologías). Coteja la clasificación del ciclo de vida; la definición concreta desde requisitos a instalación se verifica en la documentación oficial MÉTRICA alojada en PAe.'},
 5632:{url:analisis,a1:[90,95],a2:['III-2'],desc:'ITIC Academy, bloque «Análisis, Diseño y Construcción de Sistemas de Información» 2026.1: incluye modelado de procesos A1 90 y metodologías/MÉTRICA; cubre A2 D3/D6/D9/D7. El índice no desarrolla específicamente la semántica del flujo de diálogo DFD, verificada en la guía oficial MÉTRICA v3 de Técnicas y Prácticas.'},
 5633:{url:analisis,a1:[89,95],a2:['III-9'],desc:'ITIC Academy, bloque «Análisis, Diseño y Construcción de Sistemas de Información» 2026.1: contempla UML, análisis y diseño OO (A2 D9), modelos de dominio (A1 89) y metodologías/MÉTRICA. La diferencia formal entre inclusión de casos de uso y relaciones entre clases se contrasta con UML 2.5.1 de OMG.'},
 5634:{url:analisis,a1:[95],a2:['III-7'],desc:'ITIC Academy, bloque «Análisis, Diseño y Construcción de Sistemas de Información» 2026.1: su temario oficial mapea pruebas, planificación y documentación a A2 D7 e incluye MÉTRICA. Se usa como mapa de cobertura; el tipo de prueba y su nivel se justifican con los manuales oficiales de MÉTRICA.'},
 5635:{url:metodologia,a1:[95],a2:['III-2'],desc:'ITIC Academy, bloque 15 «Metodologías Ágiles, Lean y Modelos de Ciclo de Vida» 2026.2: incluye MÉTRICA v3 y A2 D2. El cotejo confirma su ubicación curricular; los nombres y límites de los tres grupos se comprueban en la interfaz oficial GP de MÉTRICA.'}
};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=mapa[c.id];assert.ok(q&&m,`Falta pregunta o mapeo ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');
 const marker='Cotejo curricular ITIC Academy:';
 const trimPrior=v=>{const i=(v||'').indexOf(marker);return i<0?(v||'').trim():v.slice(0,i).trim();};
 q.clasificacion.bloque_academia=m.desc;
 const note=`${marker} ${m.desc} Temas oficiales asociados: ${tags}. La academia sirve para cobertura y clasificación; la respuesta se verifica con las fuentes oficiales/técnicas primarias de la revisión.`;
 q.clasificacion.nota=`${trimPrior(q.clasificacion.nota)} ${note}`.trim();
 q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();
 q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 q.revision.fuentes=q.revision.fuentes.filter(f=>f.url!==m.url);q.revision.fuentes.push({url:m.url,referencia:`ITIC Academy: ${m.desc}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo del temario ITIC Academy y clasificación A1/A2 actualizado para IDs 5631–5635; se distinguen las fuentes curriculares de la evidencia técnica que valida las respuestas.');
