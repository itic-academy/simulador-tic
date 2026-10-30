const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bp=path.join(__dirname,'..','preguntas_preparatic.json'),lp=path.join(__dirname,'cambios-lote-608.json');
const bank=JSON.parse(fs.readFileSync(bp,'utf8')),log=JSON.parse(fs.readFileSync(lp,'utf8'));
const docs={
 age:{url:'https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk',title:'ITIC Academy, bloque 01 «Constitución, organización del Estado y AGE», edición 2026.2'},
 data:{url:'https://drive.google.com/file/d/11T-TKuGJGXeEKwwODM-FlF8pML3QMh_t/view?usp=drivesdk',title:'ITIC Academy, bloque 08 «Protección de Datos», edición 2026'},
 systems:{url:'https://drive.google.com/file/d/1QwPcKo3PWRI0s0KyM6SXWCe6CoK4Md-s/view?usp=drivesdk',title:'ITIC Academy, bloque 09 «Organización y gestión de los Sistemas de Información», edición 2026'}
};
const details={
 3356:{doc:docs.age,detail:'el bloque enumera la Ley 53/1984 entre las normas del régimen jurídico y del empleo público y explica las incompatibilidades como marco del personal al servicio de la Administración; el alcance de sus apartados a) e i) se cotejó en el texto legal consolidado.'},
 3357:{doc:docs.age,detail:'el bloque trata el Gobierno Abierto y la transparencia y actualiza el Consejo de Transparencia y Buen Gobierno; no se localizó en el material el desglose específico del representante del artículo 36.2.h, contrastado en el BOE.'},
 3358:{doc:docs.data,detail:'el bloque distingue expresamente autoridades de control nacionales, Comité Europeo de Protección de Datos y Supervisor Europeo, y advierte que llamar al CEPD supervisor único de la UE es técnicamente impreciso. La atribución jurídica se cotejó con los arts. 51, 68 y 70 del RGPD.'},
 3359:{doc:docs.systems,detail:'el bloque clasifica TPS/operaciones en el nivel operativo, MIS en gestión táctica y DSS/EIS en apoyo a decisiones y dirección estratégica; se reescribió el ítem según ese modelo explícito.'},
 3360:{doc:docs.systems,detail:'el bloque desarrolla Service Desk/CAU, escalado de incidencias y la convención práctica de niveles 0–4: primera línea, especialistas, desarrollo/fabricante y, en algunos modelos, proveedor. Se deja claro que el número y asignación de tiers no son una regla universal.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const calls='Clasificación cotejada con los programas oficiales BOE A1 BOE-A-2025-25938 (anexo I) y A2 BOE-A-2025-26262 (anexo IX), además de revision/temario-oficial.json.';
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),r=details[c.id];assert.ok(q&&r&&q.revision);const A1=c.actualizada.clasificacion.A1,A2=c.actualizada.clasificacion.A2;for(const id of [...A1,...A2])assert.ok(official.has(id),`Tema oficial no vigente: ${id}`);
 const academic=`${r.doc.title}; ${r.detail} ${r.doc.url}`;
 q.clasificacion={...q.clasificacion,A1,A2,bloque_academia:academic,estado:'revisada',nota:`${q.revision.estado}. ${A2.length?'La correspondencia A2 se limita al epígrafe expreso del programa oficial.':'El tema oficial A2 no tiene un epígrafe específico para esta cuestión; no se fuerza una etiqueta adicional.'} ${calls}`};
 q.revision.observaciones+=` Cotejo ITIC Academy: ${r.doc.title}; ${r.detail} ${r.doc.url} ${calls}`;
 q.revision.fuentes.push({url:r.doc.url,referencia:`${r.doc.title}; cotejo curricular: ${r.detail} Material académico auxiliar; la afirmación jurídica se contrasta en la fuente oficial indicada.`});c.actualizada=structuredClone(q);
}
fs.writeFileSync(bp,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(lp,JSON.stringify(log,null,2)+'\n');console.log('Cotejados los cinco elementos del lote 608 con ITIC Academy 2026 y los programas BOE.');
