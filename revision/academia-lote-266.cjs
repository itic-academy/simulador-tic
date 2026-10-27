const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-266.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 data:{url:'https://drive.google.com/file/d/11T-TKuGJGXeEKwwODM-FlF8pML3QMh_t/view?usp=drivesdk',label:'ITIC Academy, bloque 8 Protección de Datos, versión 2026.1 (19-08-2026)'},
 databases:{url:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',label:'ITIC Academy, bloque 29 Bases de Datos, SQL y Modelado de Datos, versión 2026.1 (31-08-2026)'},
 hardware:{url:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',label:'ITIC Academy, bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1 (31-08-2026)'}
};
const mapping={
 1646:{doc:'data',detail:'el bloque desarrolla el régimen LOPDGDD/RGPD, seguridad del tratamiento y brechas; la materia se relaciona también con gestión de incidentes (A1-27/A1-47/A1-48/A2-I-7/A2-II-13)',topics:['A1-27','A1-47','A1-48','A2-I-7','A2-II-13']},
 1647:{doc:'databases',detail:'administración de SGBD y ficheros de configuración; el entorno UNIX se encaja además en sistemas operativos (A1-60/A2-II-2)',topics:['A1-60','A2-II-2']},
 1648:{doc:'hardware',detail:'almacenamiento, RAID, rendimiento y tolerancia a fallos (A1-56/A2-IV-5)',topics:['A1-56','A2-IV-5']},
 1649:{doc:'hardware',detail:'geometría, organización y capacidad de almacenamiento en disco (A1-56/A2-IV-5)',topics:['A1-56','A2-IV-5']},
 1650:{doc:'hardware',detail:'decisión de equipamiento de almacenamiento y comparación hardware/software RAID (A1-41/A1-56/A2-II-1/A2-IV-5)',topics:['A1-41','A1-56','A2-II-1','A2-IV-5']}
};
const base={
 1646:['Se identifica la disposición adicional novena y se contrasta literalmente con el texto consolidado del BOE. La respuesta completa incluye las cinco categorías de entidades, la limitación temporal y de alcance y la obligación de medidas adecuadas y proporcionadas al riesgo; el enunciado y las opciones parciales del original permitían omitir requisitos legales expresos.','corregida'],
 1647:['Se repara el literal corrupto `$lNFORMłXDIR/etc` y se especifica qué significa “por defecto”: con ONCONFIG configurada, IBM documenta `$INFORMIXDIR/etc/$ONCONFIG`; sin ella, el servidor recurre al fichero `$INFORMIXDIR/etc/onconfig`.','corregida'],
 1648:['El enunciado original comparaba “rendimiento” sin especificar carga ni requisito de tolerancia a fallos, comparación que no tiene respuesta universal: RAID 0 sobresale en rendimiento secuencial, mientras RAID 10 puede ser preferible en cargas aleatorias con IOPS y aporta redundancia. Se acota el escenario y se expresa la ausencia de redundancia como requisito.','corregida'],
 1649:['El cálculo idealizado da 7 × 2.000 = 14.000 caracteres por cilindro y 300 × 100 = 30.000 caracteres; ceil(30.000/14.000) = 3 cilindros. Se aclara que no se computan metadatos, bloqueos ni espacio perdido, porque el original no especificaba esos factores de formato.','corregida'],
 1650:['Se elimina la afirmación absoluta y desactualizable de que los controladores hardware son “mucho más rápidos” y se pregunta por un trade-off concreto. IBM Redbooks compara el mayor coste de hardware RAID, que requiere controlador, con el bajo coste de software RAID que no lo requiere; el rendimiento depende del sistema, controladora y carga.','corregida']
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),r=mapping[c.id],d=docs[r.doc];assert.ok(q?.revision&&r,`Falta pregunta/mapeo ${c.id}`);for(const id of [...q.clasificacion.A1,...q.clasificacion.A2,...r.topics])assert.ok(official.has(id),id);const [txt,state]=base[c.id],curr=`${d.label}; ${r.detail}`,note=`Cotejo curricular: ${curr}. Correspondencia ${r.topics.join(', ')} contrastada con revision/temario-oficial.json y BOE-A-2025-25938/BOE-A-2025-26262. La academia orienta el encaje y no sustituye las fuentes primarias.`;q.revision.estado=state;q.revision.observaciones=`${txt} ${note}`;q.revision.fuentes=q.revision.fuentes.filter(f=>f.url!==d.url);q.revision.fuentes.push({url:d.url,referencia:`${curr}. Correspondencia oficial cotejada con revision/temario-oficial.json y BOE-A-2025-25938 (A1)/BOE-A-2025-26262 (A2).`});q.clasificacion.bloque_academia=curr;q.clasificacion.nota=note;q.comentarios=q.revision.observaciones;c.actualizada=structuredClone(q)}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo ITIC Academy y BOE añadido para 1646–1650.');
