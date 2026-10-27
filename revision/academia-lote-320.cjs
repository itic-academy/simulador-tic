const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-320.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 gis:{url:'https://drive.google.com/file/d/15iokZokiVzk3qpTTQvMpDN0W27PL8tbv/view',label:'ITIC Academy, bloque 33 E-learning y SIG, A1-73/74, versión 2026.1'},
 sig:{url:'https://docs.google.com/document/d/13sxQ3m8eNgg-dLxtbUHY9AzXaEnJtyyN/edit',label:'ITIC Academy, Tema 074 Sistemas de Información Geográfica, versión consultada'},
 tech:{url:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',label:'ITIC Academy, bloque 30 Tecnologías de sistemas de información, A1-65/66/67/68/77 y A2-D10/D11/D12, versión 2026.1'}
};
const mapping={
 1916:{doc:['tech'],detail:'el material aborda el entorno Java y la arquitectura Java EE/Jakarta EE, sus elementos y herramientas; el cotejo es curricular y la descripción concreta del empaquetado se acredita con la especificación de Jakarta EE.',topics:['A1-67','A2-III-10'],note:'Cotejo temático con el entorno Java y la arquitectura Jakarta EE; el descriptor de despliegue opcional y el empaquetado EAR se comprueban en la especificación primaria.'},
 1917:{doc:['gis','sig'],detail:'el bloque 33 presenta los modelos vectorial y raster; el Tema 074 desarrolla los modelos de datos y los elementos topológicos SIG. El bloque declara A2 «NO APLICA».',topics:['A1-74'],note:'Cotejo académico específico con modelos vectoriales y estructura topológica SIG; la clasificación se limita a A1-74 porque el catálogo consultado declara que A2 no aplica.'},
 1918:{doc:['gis','sig'],detail:'el bloque y el Tema 074 tratan SIG, datos geográficos y modelos raster/vectorial; el concepto de ortofoto se acredita con la fuente del IGN, no se atribuye al texto académico si no aparece expresamente.',topics:['A1-74'],note:'Cotejo curricular de SIG (A1-74); la definición y ortorrectificación de ortofoto se contrastan directamente con el IGN.'},
 1919:{doc:['gis','sig'],detail:'ambos materiales desarrollan modelos de datos vectorial y raster, geometrías discretas y celdas, así como sus usos; el bloque académico recoge además una pregunta de convocatoria sobre la capacidad topológica vectorial.',topics:['A1-74'],note:'Cotejo específico con el contenido académico sobre raster/vectorial y modelos topológicos; se elimina la antigua afirmación absoluta sobre precisión o incompatibilidad de capas.'},
 1920:{doc:['tech'],detail:'el apartado 2.3 trata CSS y media queries y el 2.6 diseño responsive, adaptable y multidispositivo; los temas A2 asociados son III-12 (web multidispositivo/front-end) y el contenido técnico se verifica con W3C.',topics:['A1-65','A1-77','A2-III-12'],note:'Cotejo con CSS, media queries y diseño multidispositivo; el estándar W3C fundamenta las condiciones y características consultables.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),r=mapping[c.id];assert.ok(q?.revision&&r,`Falta cotejo ${c.id}`);
 for(const id of [...q.clasificacion.A1,...q.clasificacion.A2,...r.topics])assert.ok(official.has(id),id);
 const selections=r.doc.map(k=>docs[k]);assert.ok(selections.every(Boolean));
 q.clasificacion.bloque_academia=`${selections.map(d=>d.label).join('; ')}; ${r.detail}`;
 q.clasificacion.nota=`${r.note} Correspondencia cotejada con revision/temario-oficial.json y convocatorias BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2); la inclusión curricular es temática y no sustituye las fuentes primarias.`;
 q.revision.observaciones+=` ${q.clasificacion.nota}`;q.comentarios=q.revision.observaciones;
 for(const d of selections)q.revision.fuentes.push({url:d.url,referencia:`${d.label}; cotejo de contenido y alcance.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo de Drive, temario oficial y convocatorias actualizado para IDs 1916–1920.');
