const fs=require('node:fs'),path=require('node:path');
const aplicar=require('./aplicar-lote.cjs');
const boeA1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',boeA2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const records=[
 [5391,[64],['III-4'],['Oracle','SQL','DELETE','DML'],[
  {url:'https://docs.oracle.com/en/database/oracle/oracle-database/26/sqlrf/DELETE.html',referencia:'Oracle Database SQL Language Reference, DELETE: elimina filas de tablas; WHERE restringe la selección de filas.'},
  {url:'https://docs.oracle.com/en/database/oracle/oracle-database/26/tdddg/data-manipulation-language-dml-statements.html',referencia:'Oracle Database Documentation, DML: DELETE FROM table_name [WHERE condition]; DROP TABLE elimina la tabla, mientras que DELETE conserva la estructura.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 64: modelo relacional y lenguaje SQL.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema III.4: diseño y bases de datos relacionales.'},
  {url:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',referencia:'ITIC Academy, bloque 29 Bases de Datos, SQL y Modelado 2026: DML y sentencias de bases de datos; cotejo curricular directo.'}
 ],null,'Oracle usa DELETE FROM tabla WHERE condición para borrar solo las filas que cumplen el filtro; REMOVE, DROP FROM y ERASE no son la sentencia DML indicada. DROP TABLE elimina el objeto completo, no determinadas filas. Se conserva la clave C.','vigente'],
 [5392,[70],['III-5'],['formantes','vocales','fonética acústica','reconocimiento del habla'],[
  {url:'https://ocw.mit.edu/courses/24-901-language-and-its-structure-i-phonology-fall-2010/bc254c203b8439c1532d3c14531eeced_MIT24_901F10_lec08.pdf',referencia:'MIT OpenCourseWare, Phonetics I: Acoustics of vowels: los formantes F1, F2 y F3 caracterizan acústicamente la calidad vocálica.'},
  {url:'https://corpus.eduhk.hk/english_pronunciation/index.php/2-2-formants-of-vowels/',referencia:'The Education University of Hong Kong, Phonetics and Phonology: define formantes como concentraciones de energía en frecuencias y relaciona F1/F2 con la calidad de las vocales.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 70: IA, NLP y áreas de aplicación.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema III.5: fundamentos y áreas de aplicación de IA.'},
  {url:'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk',referencia:'ITIC Academy, bloque 32 Inteligencia Artificial y Ciencia de Datos 2026: IA/NLP; cobertura contextual, sin apartado localizado sobre formantes o fonética acústica.'}
 ],null,'Los formantes son concentraciones de energía asociadas a resonancias del tracto vocal; F1 y F2 son especialmente útiles para distinguir la calidad de las vocales. El pitch es frecuencia fundamental, el cepstrum es una representación/señal útil para análisis, y los alófonos son realizaciones fonéticas de fonemas. Se acota el reactivo al análisis acústico clásico de vocales: no se afirma que todos los reconocedores actuales calculen explícitamente formantes. Respuesta C.','corregida'],
 [5393,[83],[],['imagen digital','ráster','bitmap','vectorial','multiplexación'],[
  {url:'https://www.w3.org/TR/SVG/',referencia:'W3C SVG 2: formato/lenguaje para gráficos vectoriales escalables y gráficos mixtos vector/raster.'},
  {url:'https://www.itu.int/rec/dologin_pub.asp?id=T-REC-R.140-198811-I%21%21PDF-E&lang=e&type=items',referencia:'UIT-T R.140: multiplexación es combinar señales de canales distintos para transmitirlas por un canal portador común; no es un tipo de codificación/representación de imagen.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 83: tratamiento de imágenes y digitalización.'},
  {url:'https://drive.google.com/file/d/1xTMCpPmwNi8hpb0nZ3sMqpgvrhLXT-yf/view?usp=drivesdk',referencia:'ITIC Academy, bloque 37 Tratamiento de Imágenes, OCR, Biometría y Gestión de Contenidos 2026: formatos y tratamiento de imágenes; cotejo curricular directo.'}
 ],null,'Ráster/bitmap representan la imagen mediante píxeles; vectorial la describe mediante objetos geométricos. Multiplexación es una técnica para combinar señales/canales de comunicación, no una representación de imagen digital. Se conserva la respuesta D; la palabra «Multiplex» no se presenta como un formato gráfico concreto. El temario A2 no contiene epígrafe específico sobre formatos de imagen y no se fuerza una clasificación.','vigente'],
 [5394,[67],['III-10'],['Java','Jakarta EE','contenedor','ciclo de vida','componentes software'],[
  {url:'https://jakarta.ee/learn/docs/jakartaee-tutorial/current/intro/overview/overview.html',referencia:'Jakarta EE Tutorial, Overview: el contenedor administra ciclo de vida de componentes y servicios como pooling de conexiones, persistencia y APIs de Jakarta EE.'},
  {url:'https://jakarta.ee/specifications/servlet/6.0/jakarta-servlet-spec-6.0.html',referencia:'Jakarta Servlet Specification, §2.3: el contenedor carga, instancia, inicializa, dirige peticiones a servlets y termina su ciclo de vida.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 67: entorno de desarrollo Java.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema III.10: arquitectura Java EE/Jakarta EE y elementos constitutivos.'},
  {url:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',referencia:'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información 2026: Java/Jakarta EE, componentes y servicios de contenedor; cotejo curricular directo.'}
 ],null,'Un contenedor Jakarta EE es el entorno de ejecución que hospeda y gestiona componentes; presta servicios de plataforma y gobierna su ciclo de vida. No es en sí un proceso, biblioteca de clases, interfaz gráfica ni fichero XML de configuración. Se reformula la opción A para ser precisa y se conserva como correcta.','corregida'],
 [5395,[65,67],['III-10','III-12'],['servlet','Jakarta Servlet','request-response','contenedor web'],[
  {url:'https://jakarta.ee/specifications/servlet/6.0/jakarta-servlet-spec-6.0.html',referencia:'Jakarta Servlet Specification, §§1–2: API para servlets y ciclo de vida; un servlet procesa solicitudes/respuestas y el contenedor instancia, inicializa y enruta peticiones.'},
  {url:'https://jakarta.ee/learn/docs/jakartaee-tutorial/current/web/servlets/servlets.html',referencia:'Jakarta EE Tutorial, Servlets: los servlets extienden aplicaciones alojadas en servidores y responden a peticiones; se ejecutan dentro de un contenedor servlet.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, temas 65 y 67: desarrollo web en servidor y entorno Java.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, temas III.10 y III.12: arquitectura Java/Jakarta EE y aplicaciones web.'},
  {url:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',referencia:'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información 2026: Java/Jakarta EE y desarrollo web en servidor; cotejo curricular directo.'}
 ],null,'Un servlet es un componente Java de servidor gestionado por un contenedor que procesa solicitudes y respuestas. La analogía con applets no define su función; no sustituye universalmente CGI ni ofrece por sí mismo ejecución concurrente de conferencias. Se corrigen los distractores y se conserva como única correcta la opción A.','corregida']
];
const edits={
 5392:{texto:'En el análisis acústico clásico para distinguir la calidad de las vocales, ¿qué frecuencias de resonancia del tracto vocal se miden?',opciones:['Los alófonos.','El pitch o frecuencia fundamental.','Los formantes, en especial F1 y F2.','El cepstrum.']},
 5394:{texto:'En Java EE/Jakarta EE, ¿qué describe mejor un contenedor de componentes?',opciones:['Un entorno de ejecución que hospeda y gestiona componentes y su ciclo de vida, y les proporciona servicios de plataforma.','Una biblioteca de clases Java sin funciones de ejecución o gestión.','Una interfaz de usuario que muestra los componentes.','Un fichero XML que, por sí solo, ejecuta los componentes de una aplicación.']},
 5395:{texto:'¿Qué es un servlet en Jakarta Servlet?',opciones:['Un componente Java del lado del servidor, gestionado por un contenedor, que procesa solicitudes y genera respuestas.','Un applet Java que se ejecuta en el navegador del usuario.','Un proceso CGI nuevo que el servidor debe iniciar obligatoriamente para cada petición.','Un descriptor XML de despliegue, no un componente ejecutable.']}
};
const academy={
 5391:'ITIC Academy, bloque 29 Bases de Datos, SQL y Modelado 2026: sentencias DML y SQL; cotejo curricular directo.',
 5392:'ITIC Academy, bloque 32 Inteligencia Artificial y Ciencia de Datos 2026: NLP/IA, cobertura contextual; no se localizó apartado específico sobre formantes o fonética acústica.',
 5393:'ITIC Academy, bloque 37 Tratamiento de Imágenes, OCR, Biometría y Gestión de Contenidos 2026: representación/tratamiento de imágenes; cotejo curricular directo.',
 5394:'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información 2026: Java/Jakarta EE y servicios de contenedor; cotejo curricular directo.',
 5395:'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información 2026: Java/Jakarta EE y desarrollo web en servidor; cotejo curricular directo.'
};
const logFile=path.join(__dirname,'cambios-lote-1014.json');
if(!fs.existsSync(logFile)) aplicar({numero:'1014',fecha:'2026-11-12',records,edits});
const bankFile=path.join(__dirname,'..','preguntas_preparatic.json'),data=JSON.parse(fs.readFileSync(bankFile,'utf8'));
const log=JSON.parse(fs.readFileSync(logFile,'utf8'));
for(const c of log.cambios){const q=data.preguntas.find(q=>q.id===c.id),record=records.find(r=>r[0]===c.id);q.revision.estado=record[7];q.revision.observaciones=record[6];q.comentarios=record[6];q.clasificacion.bloque_academia=academy[c.id];q.clasificacion.nota='Clasificación cotejada con el programa oficial; material ITIC Academy usado como mapa curricular cuando se indica, no como autoridad técnica o normativa.';c.actualizada=structuredClone(q)}
fs.writeFileSync(bankFile,JSON.stringify(data,null,2)+'\n');fs.writeFileSync(logFile,JSON.stringify(log,null,2)+'\n');
