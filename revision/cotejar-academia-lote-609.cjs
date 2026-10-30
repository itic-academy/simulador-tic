const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bp=path.join(__dirname,'..','preguntas_preparatic.json'),lp=path.join(__dirname,'cambios-lote-609.json');
const bank=JSON.parse(fs.readFileSync(bp,'utf8')),log=JSON.parse(fs.readFileSync(lp,'utf8'));
const docs={
  projects:{url:'https://drive.google.com/file/d/1fti1UIhEIqK3pY8GBENi-4rTKwoEG8tF/view?usp=drivesdk',title:'ITIC Academy, bloque 12 «Estrategias y herramientas del directivo público TIC», versión 2026.2'},
  viability:{url:'https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view?usp=drivesdk',title:'ITIC Academy, bloque 17 «Adquisición de sistemas, alternativas y rentabilidad de las inversiones», versión 2026.2'},
  agile:{url:'https://drive.google.com/file/d/1D62OE6Sw-ZB46S_2tvGophVTKgS3ip22/view?usp=drivesdk',title:'ITIC Academy, bloque 15 «Metodologías ágiles, lean y modelos de ciclo de vida», versión 2026.1'},
  audit:{url:'https://drive.google.com/file/d/1D93MNUzOWGwD6IyuWdxIMnHaL7aXvYhp/view?usp=drivesdk',title:'ITIC Academy, bloque 16 «Auditoría informática», edición 2026'},
  cyber:{url:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',title:'ITIC Academy, bloque 48 «Seguridad en redes y en el nivel de aplicación», versión 2026.1'},
  data:{url:'https://drive.google.com/file/d/11T-TKuGJGXeEKwwODM-FlF8pML3QMh_t/view?usp=drivesdk',title:'ITIC Academy, bloque 08 «Protección de datos», edición 2026'}
};
const details={
 3361:{docs:[docs.projects,docs.viability],detail:'el bloque 12 incluye herramientas de planificación de proyectos (PERT) y el bloque 17 aborda viabilidad, alternativas y rentabilidad de inversiones. La formulación exacta de la definición de proyecto se contrasta con PMI, no se atribuye a la academia.'},
 3362:{docs:[docs.projects],detail:'el bloque 12 incluye PERT como herramienta de planificación; la guía de GAO citada en la pregunta acota cuáles dos clases son las más monitorizadas, sin presentar una taxonomía exclusiva.'},
 3363:{docs:[docs.agile],detail:'el bloque actualizado 2026.1 cubre Scrum y remite al Scrum Guide 2020; se cotejó la distinción entre equipo cross-functional/self-managing y las prácticas que la guía no impone, como perfiles T.'},
 3364:{docs:[docs.audit],detail:'el bloque 16 sitúa el código de ética y la auditoría informática en el programa A1-38/A2-II-11; la lista de obligaciones concretas se verificó directamente en el código vigente de ISACA.'},
 3365:{docs:[docs.audit,docs.cyber,docs.data],detail:'los bloques 16 (auditoría), 48 (pruebas y herramientas de seguridad) y 08 (protección de datos) sirven de cotejo curricular. El alcance histórico del art. 96 y el marco actual RGPD/LO 3/2018 se fijan exclusivamente con las fuentes legales primarias.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const calls='Clasificación contrastada con los programas oficiales: A1 BOE-A-2025-25938 (anexo I) y A2 BOE-A-2025-26262 (anexo IX), además de revision/temario-oficial.json.';
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),r=details[c.id];assert.ok(q&&r&&q.revision);const A1=c.actualizada.clasificacion.A1,A2=c.actualizada.clasificacion.A2;for(const id of [...A1,...A2])assert.ok(official.has(id),`Tema oficial inexistente: ${id}`);
 const academy=r.docs.map(d=>`${d.title}; ${r.detail} ${d.url}`).join(' | ');
 q.clasificacion={...q.clasificacion,A1,A2,bloque_academia:academy,estado:'revisada',nota:`${q.revision.estado}. ${A2.length?'Correspondencia A2 ajustada al epígrafe expreso del programa.':'No se fuerza un epígrafe A2 ajeno a la cuestión.'} ${calls}`};
 q.revision.observaciones+=` Cotejo ITIC Academy: ${academy} ${calls}`;
 for(const d of r.docs)q.revision.fuentes.push({url:d.url,referencia:`${d.title}; cotejo curricular: ${r.detail} Material de academia complementario, no fuente normativa.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bp,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(lp,JSON.stringify(log,null,2)+'\n');console.log('Cotejados los cinco elementos del lote 609 con material ITIC Academy y los programas BOE vigentes.');
