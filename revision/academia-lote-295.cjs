const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-295.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 db:{url:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',label:'ITIC Academy, bloque 29, Bases de datos, SQL y modelado de datos, versión 2026.1'},
 web:{url:'https://docs.google.com/document/d/11CEe-2aKTukr0w6e752_y5y-wWuy1bPH/edit?usp=drivesdk',label:'ITIC Academy, bloque 30, Tecnologías de sistemas de información y desarrollo web, versión 2026.1'},
 ai:{url:'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk',label:'ITIC Academy, bloque 32, Inteligencia artificial y ciencia de datos, versión 2026.1'}
};
const mapping={
 1791:{doc:'db',detail:'§5.11, vistas y vistas materializadas.',topics:['A1-63','A1-64','A2-II-5','A2-IV-2'],note:'Cotejo de vistas materializadas y almacenamiento de resultados; la semántica concreta y el comportamiento de refresco se justifican con la documentación de Oracle.'},
 1792:{doc:'db',detail:'apartados de arquitectura, modelos y esquemas de bases de datos.',topics:['A1-63','A2-II-5'],note:'Cotejo del modelo de datos y sus niveles de abstracción; la descripción ANSI/SPARC se verifica de forma independiente con material universitario de arquitectura de bases de datos.'},
 1793:{doc:'web',detail:'apartados de servicios web, estándares, interoperabilidad y tecnologías XML.',topics:['A1-58','A2-II-6'],note:'Cotejo de servicios web e interoperabilidad; las categorías normativas y versiones W3C/OASIS se determinan mediante los organismos de normalización correspondientes.'},
 1794:{doc:'ai',detail:'apartados de representación e intercambio del conocimiento y de inteligencia artificial simbólica.',topics:['A1-70','A2-III-5'],note:'Cotejo curricular de representación del conocimiento; la definición de KIF y su finalidad se verifican con materiales de investigación de UMBC vinculados al Knowledge Sharing Effort.'},
 1795:{doc:'web',detail:'apartados de plataformas Java/Jakarta, middleware y servidores de aplicaciones.',topics:['A1-67','A2-III-10'],note:'Cotejo curricular de plataformas empresariales Java y servidores de aplicaciones; la función y denominación histórica de WildFly se confirman con el proyecto oficial.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),r=mapping[c.id],doc=r&&docs[r.doc];assert.ok(q?.revision&&r&&doc,`Falta cotejo ${c.id}`);for(const id of [...q.clasificacion.A1,...q.clasificacion.A2,...r.topics])assert.ok(official.has(id),id);const curr=`${doc.label}; ${r.detail.replace(/\.$/,'')}`,note=`Cotejo curricular: ${curr} Correspondencia ${r.topics.join(', ')} contrastada con revision/temario-oficial.json y convocatorias BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2). La academia sirve para comprobar cobertura, no como fuente normativa o técnica.`;q.revision.observaciones=`${r.note} ${note}`;q.revision.fuentes.push({url:doc.url,referencia:`${curr}; material formativo de Drive cotejado para cobertura curricular.`});q.clasificacion.bloque_academia=curr;q.clasificacion.nota=note;q.comentarios=q.revision.observaciones;c.actualizada=structuredClone(q)}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo curricular y BOE actualizado para 1791–1795.');
