const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bp=path.join(__dirname,'..','preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bp,'utf8'));
const lp=path.join(__dirname,'cambios-lote-599.json'),log=JSON.parse(fs.readFileSync(lp,'utf8'));
const docs={admin:{url:'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk',label:'ITIC Academy, bloque 03 «Actuación administrativa», versión 2026.2'},gis:{url:'https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view?usp=drivesdk',label:'ITIC Academy, bloque 33 «E-Learning y Sistemas de Información Geográfica (GIS)», 2026.1'},life:{url:'https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view?usp=drivesdk',label:'ITIC Academy, tema 15 «Metodologías ágiles y ciclo de vida», 2026'},quality:{url:'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',label:'ITIC Academy, bloque 39 «Calidad y mantenimiento», 2026'}};
const rows={
3311:{A1:['A1-80','A1-81'],A2:['A2-I-6'],doc:docs.admin,detail:'el material incluye certificados, eIDAS y Ley 6/2020; el límite máximo se valida directamente en el artículo 4.2 del BOE.'},
3312:{A1:['A1-74'],A2:[],doc:docs.gis,detail:'el índice del bloque dedica apartados a georreferenciación, SIG, formatos y estándares OGC; GeoTIFF se formula conforme a OGC. No se asigna epígrafe A2 equivalente explícito.'},
3313:{A1:['A1-86'],A2:['A2-III-1'],doc:docs.life,detail:'el temario incluye modelos de ciclo de vida, incluida cascada y espiral. El material/programa no respalda que cascada impida usar tecnología de objetos; por ello el reactivo permanece pendiente de aclaración.'},
3314:{A1:['A1-86'],A2:['A2-III-1'],doc:docs.life,detail:'el bloque compara modelos de ciclo de vida y trata el modelo en espiral; la identificación de objetivos, alternativas y restricciones se contrasta con NASA/Boehm.'},
3315:{A1:['A1-102'],A2:['A2-IV-4'],doc:docs.quality,detail:'el índice contiene gestión de configuración, versiones, cambios y entornos; incluye explícitamente propósito y elementos de configuración, control de versiones y gestión de cambios.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const calls='Clasificación comparada con revision/temario-oficial.json y los programas GSI publicados en BOE: A1 BOE-A-2025-25938 (anexo I) y A2 BOE-A-2025-26262 (anexo IX).';
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),r=rows[c.id];assert.ok(q&&r);for(const t of [...r.A1,...r.A2])assert.ok(official.has(t),`Tema oficial inexistente: ${t}`);
 q.clasificacion={A1:r.A1,A2:r.A2,bloque_academia:`${r.doc.label}; ${r.detail} ${r.doc.url}`,estado:'revisada',nota:`${q.revision.estado}. ${calls}`};
 q.revision.observaciones+=` Cotejo ITIC Academy: ${r.doc.label}; ${r.detail} ${r.doc.url} ${calls}`;
 if(r.doc&& !q.revision.estado.startsWith('pendiente_'))q.revision.fuentes.push({url:r.doc.url,referencia:`${r.doc.label}; cotejo curricular: ${r.detail} La academia orienta el encaje curricular y no sustituye a la fuente primaria de la respuesta.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bp,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(lp,JSON.stringify(log,null,2)+'\n');console.log('Cotejo Academy y programas BOE aplicado al lote 599.');
