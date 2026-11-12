const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1069.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const remoto='https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk';
const virtualizacion='https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk';
const web='https://drive.google.com/file/d/1LuUHoQr8oDmptteHIQ72VdCvJFsnu3LF/view?usp=drivesdk';
const constitucion='https://docs.google.com/document/d/1xBMfULSkmKGKsCPZLqmkEoU-eqJ9ymd4/edit?usp=drivesdk&ouid=107088454749630873035&rtp=1';
const mapa={
 5666:{a1:[69,131],a2:[],urls:[remoto],desc:'ITIC Academy, bloque 50, incluye acceso remoto a sistemas corporativos y herramientas colaborativas (conexión curricular general con A1-131); no compara las licencias de estas cuatro aplicaciones. El bloque A1-69 encaja con el análisis de software libre/código abierto frente a software comercial, pero la academia no desarrolla Dameware, Vinagre, TightVNC ni rdesktop. No se atribuye epígrafe A2 específico.'},
 5667:{a1:[57,132],a2:['IV-6'],urls:[virtualizacion],desc:'ITIC Academy, bloque 26, cubre virtualización y menciona Xen y VMware ESXi, además de Hyper-V, KVM y VMware Workstation; no trata Alfresco ni Virtuozzo. La identificación de Alfresco como ECM se apoya en documentación del fabricante citada en la revisión individual. Cotejo con A1-57/132 y A2-IV-6.'},
 5668:{a1:[65,77,133],a2:['III-12'],urls:[remoto,web],desc:'ITIC Academy, bloque 50, clasifica los wikis entre herramientas asíncronas de trabajo en grupo; el bloque 30 contextualiza arquitectura y tecnologías web, pero no ofrece la definición histórica exacta de wiki. Se coteja con A1-65/77/133 y el tema amplio A2-III-12. La caracterización precisa de edición de páginas enlazadas desde navegador se sustenta en WikiWikiWeb, citado como fuente principal.'},
 5669:{a1:[76,77],a2:['III-12'],urls:[web],desc:'ITIC Academy, bloque 30, menciona explícitamente RDF y OWL como lenguajes/tecnologías de Web Semántica. La academia respalda la cobertura curricular, no la distinción entre OWL y RML; esta se verifica con las especificaciones W3C y documentación de RML. Cotejo A1-76/77 y tema amplio A2-III-12.'},
 5670:{a1:[3],a2:['I-1'],urls:[constitucion],desc:'El documento de ITIC Academy sobre Constitución y Comunidades Autónomas trata la organización territorial y los artículos 148/149 en términos generales; no localiza el inciso concreto 148.1.8 sobre montes. La clave se contrasta directamente con el texto consolidado del BOE. Cotejo curricular A1-3 y A2-I-1, de contenido constitucional general.'}
};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=mapa[c.id];assert.ok(q&&m,`Falta pregunta o mapeo ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/'),marker='Cotejo curricular ITIC Academy:';
 const trimPrior=v=>{const i=(v||'').indexOf(marker);return i<0?(v||'').trim():v.slice(0,i).trim();};
 q.clasificacion.bloque_academia=m.desc;
 const note=`${marker} ${m.desc}${tags?` Temas oficiales asociados: ${tags}.`:''} La academia orienta la cobertura; las fuentes primarias citadas en la revisión acreditan los datos técnicos y normativos.`;
 q.clasificacion.nota=`${trimPrior(q.clasificacion.nota)} ${note}`.trim();
 q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();
 q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 q.revision.fuentes=q.revision.fuentes.filter(f=>![remoto,virtualizacion,web,constitucion].includes(f.url));
 for(const url of m.urls)q.revision.fuentes.push({url,referencia:`ITIC Academy: ${m.desc}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular y clasificación A1/A2 actualizado para IDs 5666–5670.');
