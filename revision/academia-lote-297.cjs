const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-297.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 db:{url:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',label:'ITIC Academy, bloque 29, Bases de datos, SQL y modelado de datos, versión 2026.1'},
 ai:{url:'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk',label:'ITIC Academy, bloque 32, Inteligencia artificial y ciencia de datos, versión 2026.1 (actualizado 19-10-2026)'},
 elearning:{url:'https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view?usp=drivesdk',label:'ITIC Academy, bloque 33, E-learning y Sistemas de Información Geográfica, versión 2026.1'},
 os:{url:'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk',label:'ITIC Academy, bloque 27, Sistemas operativos, versión 2026.1 (14-08-2026)'},
 hardware:{url:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',label:'ITIC Academy, bloque 26, Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1'}
};
const mapping={
 1801:{doc:'db',detail:'apartados de arquitectura de almacenamiento, bloques/páginas y organización física de datos en SGBD.',topics:['A1-63','A2-II-5'],note:'Cotejo curricular de almacenamiento y arquitectura de bases de datos; el término página se concreta para SQL Server con Microsoft Learn, sin generalizar la nomenclatura a todos los SGBD.'},
 1802:{doc:'ai',detail:'tema A2-D5, sección de estructuras de datos, árboles binarios, búsqueda e inserción.',topics:['A2-III-5'],note:'Cotejo con la sección de árboles del bloque de IA/estructuras de datos; el análisis del peor caso se contrasta de forma independiente con material de Cornell y Princeton.'},
 1803:{doc:'elearning',detail:'apartados de e-learning, metodologías didácticas y diseño de actividades antes/durante la sesión.',topics:['A1-73','A2-III-6'],note:'Cotejo curricular de e-learning y métodos/materiales de formación; la definición de aula invertida se verifica con centros universitarios de docencia.'},
 1804:{doc:'os',detail:'administración de Windows Server, servicios de infraestructura de red, DHCP/DNS y gestión de direcciones IP.',topics:['A1-61','A2-II-2'],note:'Cotejo de administración de Windows Server y servicios de red; la expansión y alcance del IPAM se confirman en Microsoft Learn.'},
 1805:{doc:'hardware',detail:'apartado 7, interfaces y buses de almacenamiento SATA/SAS y conectores de unidades.',topics:['A1-56','A2-IV-5'],note:'Cotejo curricular de interfaces y almacenamiento; las diferencias técnicas entre SAS/SATA y WWN se comprueban en T10, Seagate y Oracle.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),r=mapping[c.id],doc=r&&docs[r.doc];assert.ok(q?.revision&&r&&doc,`Falta cotejo ${c.id}`);for(const id of [...q.clasificacion.A1,...q.clasificacion.A2,...r.topics])assert.ok(official.has(id),id);const curr=`${doc.label}; ${r.detail.replace(/\.$/,'')}`,note=`Cotejo curricular: ${curr} Correspondencia ${r.topics.join(', ')} contrastada con revision/temario-oficial.json y convocatorias BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2). La academia comprueba cobertura, no sustituye la fuente técnica primaria.`;q.revision.observaciones=`${r.note} ${note}`;q.revision.fuentes.push({url:doc.url,referencia:`${curr}; material formativo de Drive cotejado para cobertura curricular.`});q.clasificacion.bloque_academia=curr;q.clasificacion.nota=note;q.comentarios=q.revision.observaciones;c.actualizada=structuredClone(q)}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo curricular y BOE actualizado para 1801–1805.');
