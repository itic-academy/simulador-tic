const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bp=path.join(__dirname,'..','preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bp,'utf8'));
const lp=path.join(__dirname,'cambios-lote-589.json'),log=JSON.parse(fs.readFileSync(lp,'utf8'));
const general={url:'https://docs.google.com/document/d/1za_7e_LlvUEpja7VJyYElIgRIPu_AbE3/edit?usp=drivesdk',label:'ITIC Academy, bloque 38 «Análisis, diseño y construcción de sistemas», versión 2026.1'};
const metrics={url:'https://drive.google.com/file/d/1DMz3yKo5YBTwNecdydOqWB9CxkyrQZ10/view?usp=drivesdk',label:'ITIC Academy, material de MÉTRICA v3/Tema 91 incluido en «Tema 036, 094, 098 - Gantt, Pert, Estimación»'};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const calls='Correspondencia contrastada con revision/temario-oficial.json y los programas de las convocatorias GSI A1 BOE-A-2025-25938 (anexo I) y A2 BOE-A-2025-26262 (anexo IX). Estos programas son la referencia para la clasificación; Academy solo apoya el encaje didáctico.';
const rows={
 3261:{A1:['A1-44','A1-94'],A2:['A2-III-14'],academy:general,detail:'temas de diseño de interfaces y experiencia/usabilidad; la definición de diseño centrado en las personas se valida exclusivamente con ISO 9241-210.'},
 3262:{A1:['A1-35','A1-95'],A2:['A2-III-2','A2-III-3'],academy:metrics,detail:'material de apoyo de MÉTRICA v3 y perfiles JAD; no se toma como sustituto de la fuente oficial de la metodología. La verificación de la lista se mantiene pendiente por falta de acceso legible al manual primario.'},
 3263:{A1:['A1-95','A1-96'],A2:['A2-III-13'],academy:general,detail:'encaje curricular en MÉTRICA, calidad y planificación; el contenido se contrasta con el manual oficial de Aseguramiento de la Calidad.'},
 3264:{A1:['A1-95'],A2:['A2-III-9'],academy:general,detail:'apartados de análisis orientado a objetos, UML y procesos de desarrollo; la distinción entre ASI y DSI se comprueba en los manuales oficiales de ambos procesos.'},
 3265:{A1:['A1-90','A1-95'],A2:['A2-III-3'],academy:metrics,detail:'material de apoyo de MÉTRICA v3/Tema 91 sobre SADT; no sustituye al manual oficial, cuyo contenido no pudo recuperarse en esta sesión.'}
};
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),r=rows[c.id];assert.ok(q&&r);for(const t of [...r.A1,...r.A2])assert.ok(official.has(t),`Tema inexistente ${t}`);
  // Normaliza dos referencias fuente codificadas como objeto por el primer paso del lote.
  for(const f of q.revision.fuentes)if(f.url&&typeof f.url==='object'&&!Array.isArray(f.url)){f.referencia=f.url.referencia;f.url=f.url.url;}
  q.clasificacion={A1:r.A1,A2:r.A2,bloque_academia:`${r.academy.label}; ${r.detail} ${r.academy.url}`,estado:'revisada',nota:`${q.revision.estado}. ${calls}`};
  q.revision.observaciones+=` Cotejo ITIC Academy: ${r.academy.label}; ${r.detail} ${r.academy.url} ${calls}`;
  q.revision.fuentes.push({url:r.academy.url,referencia:`${r.academy.label}; cotejo de ámbito curricular y material didáctico, no se atribuye a Academy la validación técnica. ${r.detail}`});
  c.actualizada=structuredClone(q);
}
fs.writeFileSync(bp,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(lp,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo temático Academy y clasificación oficial A1/A2 completados para 3261–3265; estados pendientes de fuente preservados en 3262 y 3265.');
