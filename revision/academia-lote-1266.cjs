const fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1266.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const files={analysis:'1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN',security:'1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82'};
const map={
 6651:{a1:[89],a2:['III-4'],files:[files.analysis],desc:'ITIC Academy, bloque 38 Análisis, Diseño y Construcción de Sistemas de Información (edición 2026.1): explica entidades, atributos, relaciones y el modelo E/R extendido. Cubre el concepto general del modelo, no se usa como autoridad para la clasificación multivalorada.'},
 6652:{a1:[90],a2:['III-9'],files:[files.analysis],desc:'ITIC Academy, bloque 38 Análisis, Diseño y Construcción de Sistemas de Información (edición 2026.1): cubre análisis dinámico, modelos de interacción y UML; correspondencia temática con diagramas de estado, no sustituto del manual MÉTRICA.'},
 6653:{a1:[95],a2:['III-6'],files:[files.analysis],desc:'ITIC Academy, bloque 38 Análisis, Diseño y Construcción de Sistemas de Información (edición 2026.1): incluye MÉTRICA v3 entre las técnicas clásicas que continúan apareciendo en examen. No contiene una lección específica CSI 8; la clave se comprueba en el manual oficial PAe.'},
 6654:{a1:[95,99],a2:['III-2'],files:[files.analysis],desc:'ITIC Academy, bloque 38 Análisis, Diseño y Construcción de Sistemas de Información (edición 2026.1): incluye MÉTRICA v3 como conocimiento de desarrollo clásico y recurrente. No atribuye una técnica universalmente «más adecuada»; el detalle se contrasta con GPI 1.2 del manual oficial.'},
 6655:{a1:[126],a2:['II-13'],files:[files.security],desc:'ITIC Academy, bloque 48 Seguridad en Redes y en el Nivel de Aplicación (edición 2026.1), apartado 13.2 «Ciclo de vida de desarrollo seguro (S-SDLC y DevSecOps)», dentro de A1-126 y A2-T13. La formulación concreta sobre resultados se contrasta con NIST SP 800-218 v1.1.'}
};
for(const c of log.cambios){const m=map[c.id],q=bank.preguntas.find(x=>x.id===c.id);if(!m||!q)throw Error(`Falta ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const topics=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');
 const note=`Cotejo curricular ITIC Academy: ${m.desc} Correspondencia oficial: ${topics}. La academia orienta la cobertura; la respuesta técnica se sustenta en las fuentes primarias indicadas.`;
 q.clasificacion.bloque_academia=m.desc;q.clasificacion.nota=note;
 q.comentarios=`${q.comentarios||''} ${note}`.trim();q.revision.observaciones=`${q.revision.observaciones||''} ${note}`.trim();
 q.revision.fuentes=q.revision.fuentes.filter(f=>!f.url.includes('drive.google.com'));
 for(const id of m.files)q.revision.fuentes.push({url:`https://drive.google.com/file/d/${id}/view?usp=drivesdk`,referencia:m.desc});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular ITIC Academy añadido para 6651–6655.');
