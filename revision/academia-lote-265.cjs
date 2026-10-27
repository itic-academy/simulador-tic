const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-265.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 data:{url:'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk',label:'ITIC Academy, bloque 32 Inteligencia Artificial y Ciencia de Datos, versión 2026.1 (31-08-2026)'},
 technology:{url:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',label:'ITIC Academy, bloque 30 Tecnologías de Sistemas de la Información, versión 2026.1 (31-08-2026)'},
 databases:{url:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',label:'ITIC Academy, bloque 29 Bases de Datos, SQL y Modelado de Datos, versión 2026.1 (31-08-2026)'}
};
const mapping={
 1641:{doc:'data',detail:'espacios de datos, interoperabilidad y tecnologías emergentes; el significado del nombre se confirma en el Rulebook institucional de IDSA (A1-107/A2-III-15)',topics:['A1-107','A2-III-15']},
 1642:{doc:'technology',detail:'protocolos de directorio LDAP y X.500, materia expresamente incluida en el temario oficial (A1-80)',topics:['A1-80']},
 1643:{doc:'databases',detail:'acceso desde aplicaciones a bases de datos y administración de gestores/conexiones (A1-65/A2-IV-2)',topics:['A1-65','A2-IV-2']},
 1644:{doc:'technology',detail:'desarrollo web, formularios HTML y especificación del elemento input; aspectos de usabilidad de formularios (A1-65/A2-III-14)',topics:['A1-65','A2-III-14']},
 1645:{doc:'technology',detail:'entorno Java, componentes empresariales y Enterprise Beans según Jakarta EE (A1-67/A2-III-10)',topics:['A1-67','A2-III-10']}
};
const base={
 1641:['Se corrige el nombre de la opción y se sustituyen distractores duplicados o mal escritos. IDSA es la sigla institucional de International Data Spaces Association, organización que desarrolla y promueve especificaciones para espacios de datos; no significa “International Data Simple Analytics”.','corregida'],
 1642:['El enunciado original decía que el RFC “hace referencia” al modelo y tenía como clave RFC 4510, que es la hoja de ruta del conjunto LDAP. El modelo de información lo especifica RFC 4512; se corrige la opción 4510 por 4512 y se formula el título exacto para evitar confundir roadmap con la especificación concreta.','corregida'],
 1643:['El original atribuía al pool una mejora genérica del rendimiento de las peticiones. Se precisa el mecanismo: el pool reduce la latencia y el coste de abrir/cerrar conexiones repetidamente mediante reutilización; no proporciona por sí solo alta disponibilidad, replicación ni optimización del plan SQL.','corregida'],
 1644:['Se conserva la respuesta `fax`, pero se reemplaza la comparación con fragmentos HTML mal formados y comillas tipográficas por la pregunta directa sobre valores del atributo `type`. El estándar incluye `radio`, `email` y `tel`, pero no define `fax`.','corregida'],
 1645:['Se acota el reactivo a stateful session beans. La opción elegida es falsa: el estado conversacional específico del cliente debe conservarse entre métodos; eso los distingue de los stateless. El original mezclaba tipos históricos de EJB 2.x con el modelo actual: entity beans dejaron de ser obligatorios y se consideran una función opcional/legada en Enterprise Beans 4.0.','corregida']
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),r=mapping[c.id],d=docs[r.doc];assert.ok(q?.revision&&r);for(const id of [...q.clasificacion.A1,...q.clasificacion.A2,...r.topics])assert.ok(official.has(id),id);const [txt,state]=base[c.id],curr=`${d.label}; ${r.detail}`,note=`Cotejo curricular: ${curr}. Correspondencia ${r.topics.join(', ')} contrastada con revision/temario-oficial.json y BOE-A-2025-25938/BOE-A-2025-26262. La academia orienta la clasificación, no sustituye las fuentes técnicas.`;q.revision.estado=state;q.revision.observaciones=`${txt} ${note}`;q.revision.fuentes=q.revision.fuentes.filter(f=>f.url!==d.url);q.revision.fuentes.push({url:d.url,referencia:`${curr}. Correspondencia oficial cotejada con revision/temario-oficial.json y BOE-A-2025-25938 (A1)/BOE-A-2025-26262 (A2).`});q.clasificacion.bloque_academia=curr;q.clasificacion.nota=note;q.comentarios=q.revision.observaciones;c.actualizada=structuredClone(q)}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo ITIC Academy y BOE añadido para 1641–1645.');
