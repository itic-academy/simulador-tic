const fs=require('node:fs'),path=require('node:path');
const aplicar=require('./aplicar-lote.cjs');
const boeA1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const boeA2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const records=[
 [5426,[75],['III-15'],['Apache Hadoop','Hive','Impala','HBase','Storm','procesamiento de flujos'],[
  {url:'https://hive.apache.org/',referencia:'Apache Hive: sistema distribuido de almacén de datos y analítica SQL sobre almacenamiento distribuido.'},
  {url:'https://github.com/apache/impala',referencia:'Apache Impala: motor distribuido/paralelo de consultas SQL sobre datos almacenados, entre otros, en HDFS, HBase, Kudu o formatos abiertos.'},
  {url:'https://hbase.apache.org/',referencia:'Apache HBase: almacén distribuido de datos NoSQL para acceso de lectura/escritura aleatorio y en tiempo real.'},
  {url:'https://storm.apache.org/',referencia:'Apache Storm: sistema distribuido de computación en tiempo real para procesar flujos no acotados.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 75: tecnologías de explotación de datos y data lakes.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema III.15: minería de datos, entornos Hadoop y Big Data.'},
  {url:'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk',referencia:'ITIC Academy, bloque 34 Business Intelligence y Big Data 2026: Hadoop, ecosistemas de almacenamiento/consulta y procesamiento distribuido; cotejo curricular.'}
 ],null,'El enunciado original «no está relacionado con el almacenamiento» permitía confundir almacenamiento con SQL/analítica: Hive e Impala no son motores de almacenamiento, aunque trabajan sobre datos almacenados. Se reformula para distinguir funciones: HBase es almacén NoSQL, Hive es warehouse, Impala motor de consulta SQL y Storm procesa flujos en tiempo real. Se mantiene D.','corregida'],
 [5427,[71,75],['III-15'],['minería de datos','software libre','licencias','KNIME','Weka','ELKI','Teradata Vantage'],[
  {url:'https://www.knime.com/open-source-story',referencia:'KNIME: Analytics Platform se distribuye bajo licencia GPLv3 con excepción para extensiones propietarias.'},
  {url:'https://weka.sourceforge.io/',referencia:'Weka, University of Waikato: software de machine learning de código abierto bajo GNU GPL.'},
  {url:'https://elki-project.github.io/',referencia:'ELKI Data Mining Framework: software abierto AGPLv3 para minería de datos.'},
  {url:'https://www.teradata.com/getattachment/b0d193cd-6637-4a5a-b18b-20241c565127/teradata-license-terms-master-reseller.pdf?origin=fd',referencia:'Teradata License Terms: el software Teradata se concede bajo licencia limitada; se restringen, entre otras acciones, redistribución y modificación salvo permiso expreso o términos de software libre aplicables.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, temas 71 y 75: ciencia/explotación de datos y tecnologías relacionadas.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema III.15: minería de datos, Big Data y tecnologías asociadas.'},
  {url:'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk',referencia:'ITIC Academy, bloque 34 Business Intelligence y Big Data 2026: minería de datos y herramientas analíticas; los productos KNIME, Weka, ELKI y Teradata no aparecen comparados expresamente.'}
 ],null,'Se sustituye RapidMiner, cuya licencia depende de edición/versión y cuyo modelo cambió, por Weka, cuya distribución oficial actual se identifica bajo GNU GPL. KNIME y ELKI publican licencias libres; Teradata Vantage/Software se ofrece bajo términos comerciales/licenciados. Se mantiene D y se acota la comparación a la plataforma comercial, sin afirmar que toda herramienta Teradata carezca de componentes open source.','corregida'],
 [5428,[],['II-3'],['lenguaje C','arrays','bucles for','efectos secuenciados','mutación de estado'],[
  {url:'https://www.open-std.org/jtc1/sc22/wg14/www/docs/n1570.pdf',referencia:'WG14 N1570 (borrador público C11), §§6.8.5 y 6.8.5.3: la iteración for ejecuta la expresión de cuerpo en cada vuelta; las asignaciones completas se evalúan secuencialmente entre iteraciones.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema II.3: características de lenguajes y paradigmas actuales de programación.'},
  {url:'https://drive.google.com/file/d/1LuUHoQr8oDmptteHIQ72VdCvJFsnu3LF/view?usp=drivesdk',referencia:'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información 2026: paradigma imperativo/estructurado, C, bucles y condiciones; cobertura contextual del razonamiento del fragmento.'}
 ],null,'Se asume que i y j son enteros y que la instrucción es C válida. Las asignaciones se ejecutan en orden: al terminar i=0, x[0]=2; para i=1 queda x[1]=2; i=2 deja x[2]=4; i=3 deja x[3]=5. Resultado {2,2,4,5}, opción C. Se reescribe para hacer explícitos el tipo del array y los límites.','vigente'],
 [5429,[63,64],['II-5'],['bases de datos','vista materializada','caché de consultas','refresco'],[
  {url:'https://www.postgresql.org/docs/18/rules-materializedviews.html',referencia:'PostgreSQL 18, materialized views: guarda físicamente el resultado de la consulta y permite consultas directas sobre el contenido almacenado.'},
  {url:'https://www.postgresql.org/docs/18/sql-refreshmaterializedview.html',referencia:'PostgreSQL 18, REFRESH MATERIALIZED VIEW: vuelve a ejecutar la consulta subyacente y sustituye el contenido materializado; programación y frecuencia dependen de mecanismos externos/producto.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, temas 63–64: sistemas de gestión de bases de datos relacionales y SQL.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema II.5: SGBD relacionales y SQL.'},
  {url:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',referencia:'ITIC Academy, bloque 29 Bases de Datos, SQL y Modelado 2026: apartados de vistas materializadas, resultados almacenados y mecanismos de refresco.'}
 ],null,'La definición corresponde a una vista materializada: almacena físicamente el resultado de una consulta y debe refrescarse desde los datos de base. El refresco puede ser manual, programado, al commit o incremental según el gestor; no es universalmente «periódico» por sí mismo. Se mantiene A y se matiza ese detalle.','corregida'],
 [5430,[71,75],['II-4','III-15'],['OLAP','Online Analytical Processing','BI','análisis multidimensional','OLTP'],[
  {url:'https://www.ibm.com/docs/en/content-cortex/26.0.0?topic=reports-online-analytical-processing-olap-overview',referencia:'IBM Documentation, OLAP overview: Online Analytical Processing utiliza estructuras multidimensionales para acceder rápidamente a datos analíticos.'},
  {url:'https://www.ibm.com/think/topics/olap',referencia:'IBM, What is OLAP?: análisis multidimensional de grandes volúmenes en almacenes de datos, data lakes u otros repositorios.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, temas 71 y 75: ciencia y explotación de datos/BI.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema II.4 (BI, almacenes de datos, OLTP/OLAP) y III.15 (minería/OLAP/Big Data).'},
  {url:'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk',referencia:'ITIC Academy, bloque 34 Business Intelligence y Big Data 2026: OLAP, modelos multidimensionales, cubos y comparación con OLTP; cotejo directo.'}
 ],null,'OLAP significa Online Analytical Processing. Describe análisis multidimensional e interactivo; «offline» no es su expansión ni rasgo definitorio. La opción B es falsa. Se aclara que «online» nombra el paradigma de procesamiento analítico y no implica necesariamente que el usuario se conecte por Internet.','vigente']
];
const edits={
 5426:{texto:'En el ecosistema Hadoop, ¿cuál de estos componentes está específicamente orientado al procesamiento distribuido de flujos en tiempo real, y no a una base de datos, un almacén de datos o un motor de consultas SQL?',opciones:['Hive.','Impala.','HBase.','Storm.']},
 5427:{texto:'¿Cuál de los siguientes es una plataforma comercial de análisis de datos bajo licencia, en vez de un producto de minería de datos de código abierto?',opciones:['KNIME Analytics Platform.','Weka.','ELKI.','Teradata Vantage.']},
 5428:{texto:'Suponiendo que i y j son variables int y que se ejecuta en C el código siguiente, ¿cuál será el contenido final del array?\nint x[4] = {1, 0, 1, 0};\nfor (i = 0; i < 4; i++)\n  for (j = 0; j < 3; j++)\n    x[i] = x[j] + 1;',opciones:['{1, 1, 2, 3}','{2, 2, 2, 2}','{2, 2, 4, 5}','Otros valores.']},
 5429:{texto:'En una base de datos, ¿qué objeto almacena físicamente el resultado de una consulta y permite refrescarlo desde las tablas originales para acelerar lecturas?',opciones:['Una vista materializada.','El diccionario de datos.','Un trigger o disparador.','Un procedimiento almacenado.']},
 5430:{texto:'Elija la afirmación falsa respecto de OLAP:',opciones:['Puede utilizar técnicas de análisis multidimensional.','OLAP significa Offline Analytical Processing.','Puede implementarse sobre bases de datos relacionales.','Puede presentar los datos agregados en un número reducido de dimensiones.']}
};
const academy={
 5426:'ITIC Academy, bloque 34 Business Intelligence y Big Data 2026: ecosistema Hadoop, almacenamiento distribuido y análisis/procesamiento; no compara formalmente todas las funciones Hive/Impala/HBase/Storm.',
 5427:'ITIC Academy, bloque 34 Business Intelligence y Big Data 2026: minería de datos y herramientas analíticas; no compara expresamente KNIME, Weka, ELKI ni Teradata.',
 5428:'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información 2026: paradigma imperativo/estructurado, lenguaje C, bucles y condiciones; el cálculo concreto se contrasta con el estándar C.',
 5429:'ITIC Academy, bloque 29 Bases de Datos, SQL y Modelado 2026: vistas materializadas, almacenamiento del resultado y mecanismos de refresco; cobertura directa.',
 5430:'ITIC Academy, bloque 34 Business Intelligence y Big Data 2026: OLAP/cubos multidimensionales y contraste con OLTP; cobertura directa.'
};
const logFile=path.join(__dirname,'cambios-lote-1021.json');
if(!fs.existsSync(logFile)) aplicar({numero:'1021',fecha:'2026-11-12',records,edits});
const bankFile=path.join(__dirname,'..','preguntas_preparatic.json'),data=JSON.parse(fs.readFileSync(bankFile,'utf8'));
const log=JSON.parse(fs.readFileSync(logFile,'utf8'));
for(const c of log.cambios){const q=data.preguntas.find(q=>q.id===c.id),record=records.find(r=>r[0]===c.id);q.revision.estado=record[7];q.revision.observaciones=record[6];q.comentarios=record[6];q.clasificacion.bloque_academia=academy[c.id];q.clasificacion.nota='Clasificación cotejada con el programa oficial; ITIC Academy se usa como mapa curricular cuando se indica, no como autoridad técnica o normativa.';c.actualizada=structuredClone(q)}
fs.writeFileSync(bankFile,JSON.stringify(data,null,2)+'\n');fs.writeFileSync(logFile,JSON.stringify(log,null,2)+'\n');
