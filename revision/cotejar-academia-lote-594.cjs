const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bp=path.join(__dirname,'..','preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bp,'utf8'));
const lp=path.join(__dirname,'cambios-lote-594.json'),log=JSON.parse(fs.readFileSync(lp,'utf8'));
const docs={
 sso:{url:'https://drive.google.com/file/d/1U-Iu2ye08XugMEaUfHNmUcWd5oBlGJxw/view?usp=drivesdk',label:'ITIC Academy, bloque «Videoconferencia, single sign on y herramientas de trabajo colaborativo», temas A1 130/131/133, actualizado octubre de 2026'},
 arch:{url:'https://docs.google.com/document/d/1ZwZ2asNDNfv6NhMeoJa_gCuy5i681jLR/edit?usp=drivesdk',label:'ITIC Academy, bloque 28 «Arquitectura SOA y requisitos no funcionales», versión 2026.1, 25-09-2026'},
 sys:{url:'https://drive.google.com/file/d/1FtCZjU2f2gjogjh9AMnKCRE8xRZToxSk/view?usp=drivesdk',label:'ITIC Academy, temas 28, 29 y 34 «Organización y gestión de sistemas de información», versión 2026'},
 mgmt:{url:'https://drive.google.com/file/d/1fti1UIhEIqK3pY8GBENi-4rTKwoEG8tF/view?usp=drivesdk',label:'ITIC Academy, bloque 12 «Directivo TIC y planificación estratégica», versión 2026.2, 02-10-2026'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const calls='Clasificación contrastada con revision/temario-oficial.json y los programas GSI publicados en BOE: A1 BOE-A-2025-25938 (anexo I) y A2 BOE-A-2025-26262 (anexo IX).';
const rows={
 3286:{A1:['A1-125','A1-131'],A2:['A2-II-13','A2-IV-12'],doc:docs.sso,detail:'el documento incluye expresamente el tema A1-131 (gestión de identidades, SSO y teletrabajo) y el bloque trata redes, seguridad y control de accesos. El encaje curricular no sustituye las amenazas y mitigaciones de NIST SP 800-63C-4.'},
 3287:{A1:['A1-57','A1-132'],A2:['A2-II-7'],doc:docs.arch,detail:'el bloque describe microservicios y su despliegue habitual con contenedores, y guarda relación con la virtualización de servidores del programa A1; Bitbucket se contrasta por separado como alojamiento Git/colaboración, con CI/CD integrado.'},
 3288:{A1:['A1-132'],A2:['A2-II-7','A2-IV-6'],doc:docs.arch,detail:'el bloque aborda microservicios, contenedores y automatización de despliegue; el programa oficial A1-132 y A2-II-7/IV-6 cubre respectivamente virtualización y aplicaciones contenerizadas/infraestructura.'},
 3289:{A1:['A1-28'],A2:[],doc:docs.sys,detail:'el documento de Academy identifica el tema 28 (definición y estructura de los sistemas de información). El modelo concreto de cinco componentes de la pregunta se comprueba en el texto educativo OpenStax, no se atribuye al material de Academy.'},
 3290:{A1:['A1-28','A1-35'],A2:['A2-II-4'],doc:docs.mgmt,detail:'el bloque de dirección TIC incluye inteligencia de negocio y sistemas de soporte a las decisiones; el programa oficial A2-II-4 recoge DSS. La correspondencia específica entre DSS, directivos sénior y nivel táctico se verifica en OpenStax.'}
};
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),r=rows[c.id];assert.ok(q&&r);for(const t of [...r.A1,...r.A2])assert.ok(official.has(t),`Tema no oficial ${t}`);
 q.clasificacion={A1:r.A1,A2:r.A2,bloque_academia:`${r.doc.label}; ${r.detail} ${r.doc.url}`,estado:'revisada',nota:`${q.revision.estado}. ${calls}`};
 q.revision.observaciones+=` Cotejo ITIC Academy en Drive: ${r.doc.label}; ${r.detail} ${r.doc.url} ${calls}`;
 q.revision.fuentes.push({url:r.doc.url,referencia:`${r.doc.label}; cotejo curricular: ${r.detail} El material académico guía el encaje curricular y no sustituye la fuente primaria técnica citada para la respuesta.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bp,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(lp,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo Academy, oficial y trazabilidad de lote 594 completados.');
