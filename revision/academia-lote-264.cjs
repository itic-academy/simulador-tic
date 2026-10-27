const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-264.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 elearning:{url:'https://drive.google.com/file/d/147Tmzz9NHqZP1bi6gk7yNGGGNsIk0Pdd/view?usp=drivesdk',label:'ITIC Academy, bloque 33 E-Learning y Sistemas de Información Geográfica, versión 2026.1 (31-07-2026)'},
 systems:{url:'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk',label:'ITIC Academy, bloque 27 Sistemas Operativos, versión 2026.1 (14-08-2026)'},
 images:{url:'https://docs.google.com/document/d/1hv1jJNaZpGO7UTq596MuGzILT8WTpWQW/edit',label:'ITIC Academy, bloque 37 Imágenes, OCR, biometría y gestión de contenidos, versión 2026.1 (18-09-2026)'},
 data:{url:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',label:'ITIC Academy, bloque 29 Bases de Datos, SQL y Modelado de Datos, versión 2026.1 (31-08-2026)'}
};
const mapping={
 1636:{doc:'elearning',detail:'el bloque trata E-Learning, LMS y SCORM; el programa oficial recoge sistemas de información y contenidos digitales (A1-28/A1-69/A1-73/A2-II-14)',topics:['A1-28','A1-69','A1-73','A2-II-14']},
 1637:{doc:'images',detail:'el bloque trata imagen ráster, profundidad de color y formatos; TIFF y sus perfiles se contrastan con TIFF 6.0 (A1-56)',topics:['A1-56']},
 1638:{doc:'data',detail:'el bloque cubre almacenes de datos, OLAP, medidas, dimensiones y datamarts (A1-63/A2-II-4/A2-III-15)',topics:['A1-63','A2-II-4','A2-III-15']},
 1639:{doc:'systems',detail:'el bloque de sistemas operativos incluye UNIX/Solaris y herramientas de administración; los comandos se verifican en documentación de Oracle Solaris (A1-60/A2-II-2)',topics:['A1-60','A2-II-2']},
 1640:{doc:'data',detail:'el bloque incluye OLAP y almacenes de datos; la diferencia ROLAP/MOLAP se coteja con documentación Oracle y Microsoft (A1-63/A2-II-4/A2-III-15)',topics:['A1-63','A2-II-4','A2-III-15']}
};
const base={
 1636:['La pregunta original generalizaba sobre cualquier LMS y presentaba como universal una taxonomía de estructuras que depende del producto. Se acota a la especificación SCORM: su organización de contenidos usa un árbol jerárquico en el manifiesto; eso no impide que el LMS implemente recorridos o secuencias distintos.','corregida'],
 1637:['Se conserva la clave TIFF pero se acota a TIFF 6.0 y a los perfiles documentados. La clasificación histórica de GIF y la descripción de PNG como RAW eran falsas; JPEG de línea ISO/IEC 10918 no es un formato de paleta fija de 256 colores.','corregida'],
 1638:['Se delimita el alcance: modelos de distintos datamarts pueden diferir según el área, mientras que las dimensiones compartidas se conforman para mantener coherencia analítica. Se evita interpretar la posibilidad como regla universal o confundir medidas cuantitativas con dimensiones de análisis.','corregida'],
 1639:['La clave nc se mantiene y el enunciado se precisa. Oracle documenta iostat, df y sar -d para estadísticas de disco/espacio; nc es netcat, una utilidad de administración TCP/UDP. Esto evita la objeción de que sar, sin opción, muestra CPU, mientras que sar -d sí ofrece actividad de discos.','corregida'],
 1640:['La distinción es el modelo de almacenamiento: ROLAP mantiene datos en el sistema relacional; MOLAP construye estructuras multidimensionales y las rellena al procesar dimensiones/particiones. Se sustituye la vaga referencia al “preprocesado” por la diferencia verificable.','corregida']
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
for(const change of log.cambios){const q=bank.preguntas.find(x=>x.id===change.id),row=mapping[change.id];assert.ok(q?.revision&&row);for(const id of [...q.clasificacion.A1,...q.clasificacion.A2,...row.topics])assert.ok(official.has(id),id);const [text,state]=base[change.id],doc=docs[row.doc],curriculum=`${doc.label}; ${row.detail}`,note=`Cotejo curricular: ${curriculum}. Correspondencia ${row.topics.join(', ')} contrastada con revision/temario-oficial.json y BOE-A-2025-25938/BOE-A-2025-26262. La academia orienta el encaje; no reemplaza las fuentes técnicas primarias.`;q.revision.estado=state;q.revision.observaciones=`${text} ${note}`;q.revision.fuentes=q.revision.fuentes.filter(f=>f.url!==doc.url);q.revision.fuentes.push({url:doc.url,referencia:`${curriculum}. Correspondencia oficial cotejada con revision/temario-oficial.json y BOE-A-2025-25938 (A1)/BOE-A-2025-26262 (A2).`});q.clasificacion.bloque_academia=curriculum;q.clasificacion.nota=note;q.comentarios=q.revision.observaciones;change.actualizada=structuredClone(q)}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo ITIC Academy y BOE añadido para 1636–1640.');
