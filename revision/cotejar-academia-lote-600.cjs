const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bp=path.join(__dirname,'..','preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bp,'utf8'));
const lp=path.join(__dirname,'cambios-lote-600.json'),log=JSON.parse(fs.readFileSync(lp,'utf8'));
const docs={analysis:{url:'https://docs.google.com/document/d/1za_7e_LlvUEpja7VJyYElIgRIPu_AbE3/edit?usp=drivesdk&ouid=107088454749630873035&rtpof=true&sd=true',label:'ITIC Academy, bloque 38 «Análisis, diseño y construcción de sistemas de información», 2026.1'},life:{url:'https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view?usp=drivesdk',label:'ITIC Academy, tema 15 «Metodologías ágiles y ciclo de vida», 2026.1'},config:{url:'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',label:'ITIC Academy, bloque 39 «Calidad y mantenimiento», 2026'}};
const rows={
3316:{A1:['A1-88'],A2:['A2-III-2'],doc:docs.analysis,detail:'el bloque contiene una sección de UML sobre diagrama de clases y sus relaciones; el término se confirma con la especificación OMG.'},
3317:{A1:['A1-88','A1-95'],A2:['A2-III-2'],doc:docs.analysis,detail:'el bloque cubre modelado de procesos/DFD y remite al marco de desarrollo; la respuesta de nivel 0 se limita a la convención Métrica v3.'},
3318:{A1:['A1-88','A1-102'],A2:['A2-III-2','A2-IV-4'],doc:docs.config,detail:'sección 6 del bloque: propósito de la gestión de configuración, control de versiones y gestión de cambios; el reactivo se restringe a esas capacidades, sin atribuirle en exclusiva trazabilidad de requisitos.'},
3319:{A1:['A1-95'],A2:['A2-III-2'],doc:docs.life,detail:'el material 2026 incluye MÉTRICA v3 como metodología de desarrollo examinable; la asignación exacta de las técnicas a ASI 7 se comprueba con el documento oficial del Ministerio.'},
3320:{A1:['A1-35','A1-95'],A2:['A2-III-2'],doc:docs.life,detail:'el material incorpora MÉTRICA v3 y gestión del ciclo de vida/proyectos; GPI se contrasta en la guía oficial de Gestión de Proyectos.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const calls='Clasificación cotejada con revision/temario-oficial.json y convocatorias BOE: A1 BOE-A-2025-25938 (anexo I) y A2 BOE-A-2025-26262 (anexo IX).';
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),r=rows[c.id];assert.ok(q&&r);for(const t of [...r.A1,...r.A2])assert.ok(official.has(t),`Tema oficial inexistente: ${t}`);
 q.clasificacion={A1:r.A1,A2:r.A2,bloque_academia:`${r.doc.label}; ${r.detail} ${r.doc.url}`,estado:'revisada',nota:`${q.revision.estado}. ${calls}`};
 q.revision.observaciones+=` Cotejo ITIC Academy: ${r.doc.label}; ${r.detail} ${r.doc.url} ${calls}`;
 q.revision.fuentes.push({url:r.doc.url,referencia:`${r.doc.label}; cotejo curricular: ${r.detail} La academia sirve para comprobar alineación y no sustituye a la fuente primaria de la respuesta.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bp,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(lp,JSON.stringify(log,null,2)+'\n');console.log('Cotejo Academy y programas BOE aplicado al lote 600.');
