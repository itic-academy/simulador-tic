const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bp=path.join(__dirname,'..','preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bp,'utf8'));
const lp=path.join(__dirname,'cambios-lote-601.json'),log=JSON.parse(fs.readFileSync(lp,'utf8'));
const docs={life:{url:'https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view?usp=drivesdk',label:'ITIC Academy, tema 15 «Metodologías ágiles y ciclo de vida», versión 2026.1'},quality:{url:'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',label:'ITIC Academy, bloque 39 «Calidad y mantenimiento», versión 2026.1'}};
const rows={
3321:{A1:['A1-35','A1-95'],A2:['A2-III-2'],doc:docs.life,detail:'el bloque cubre gestión y planificación del proceso de desarrollo y MÉTRICA v3; la finalidad concreta de la interfaz GP se decide con la guía oficial.'},
3322:{A1:['A1-95'],A2:['A2-III-2'],doc:docs.life,detail:'el apartado MÉTRICA v3 sitúa PSI y el proceso de desarrollo en sus grupos/procesos principales; la separación exacta se coteja con la metodología oficial.'},
3323:{A1:['A1-34','A1-95'],A2:['A2-III-2','A2-III-13'],doc:docs.life,detail:'el bloque incorpora MÉTRICA v3 y trata desarrollo y calidad del software; la adscripción del Grupo de Aseguramiento de la Calidad al perfil Analista se confirma en la guía oficial de participantes.'},
3324:{A1:['A1-96','A1-98'],A2:['A2-III-13'],doc:docs.quality,detail:'la sección 3 trata ISO 9001:2026 como edición actual y explica que 2015 es histórica; la formulación sobre enfoque basado en procesos se limita a la edición 2015 y se verifica contra el documento de ISO.'},
3325:{A1:['A1-86','A1-101'],A2:['A2-III-1'],doc:docs.quality,detail:'la sección 7.2 trata reingeniería/ingeniería inversa y la sección 8 mantenimiento de software. El documento no resuelve qué modelo de secuencia pretendía el reactivo; se mantiene pendiente.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const calls='Clasificación cotejada con revision/temario-oficial.json y convocatorias BOE: A1 BOE-A-2025-25938 (anexo I) y A2 BOE-A-2025-26262 (anexo IX).';
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),r=rows[c.id];assert.ok(q&&r);for(const t of [...r.A1,...r.A2])assert.ok(official.has(t),`Tema oficial inexistente: ${t}`);
 q.clasificacion={A1:r.A1,A2:r.A2,bloque_academia:`${r.doc.label}; ${r.detail} ${r.doc.url}`,estado:'revisada',nota:`${q.revision.estado}. ${calls}`};
 q.revision.observaciones+=` Cotejo ITIC Academy: ${r.doc.label}; ${r.detail} ${r.doc.url} ${calls}`;
 if(r.doc)q.revision.fuentes.push({url:r.doc.url,referencia:`${r.doc.label}; cotejo curricular: ${r.detail} La academia orienta cobertura y contexto de convocatoria, no sustituye a la fuente primaria de la respuesta.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bp,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(lp,JSON.stringify(log,null,2)+'\n');console.log('Cotejo de Academy y programas BOE aplicado al lote 601.');
