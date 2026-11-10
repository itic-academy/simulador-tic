const apply=require('./aplicar-lote.cjs');
const academyWeb='https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk';
const academyData='https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk';
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const sources={
4671:[
 {url:'https://www.rfc-editor.org/rfc/rfc3875.html',referencia:'IETF RFC 3875, resumen: CGI se usa en la Web desde 1993 y especifica la interfaz CGI/1.1 desarrollada/documentada por NCSA.'},
 {url:'https://www.java.com/en/download/help/whatis_java.html',referencia:'Java.com, What is Java?: Java fue publicado por primera vez por Sun en 1995; la documentación histórica de HotJava sitúa allí el uso público de applets.'},
 {url:'https://www.eclipse.org/community/eclipse_newsletter/2020/february/3.php',referencia:'Eclipse Foundation, historia de Servlets/Tomcat: primer Java Web Servlet Development Kit lanzado en junio de 1997.'},
 {url:academyWeb,referencia:'ITIC Academy 2026, bloque 30: temario de arquitecturas y tecnologías web y entorno Java; cotejo curricular general, sin usarlo como fuente de las fechas históricas.'},
 {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 65: arquitectura de desarrollo web y tecnologías de cliente/servidor.'},
 {url:a2,referencia:'Convocatoria A2 GSI 2025, tema III.12: aplicaciones web y desarrollo front-end y de servidor.'}
],
4672:[
 {url:'https://docs.oracle.com/en/java/javase/26/docs/specs/jar/jar.html',referencia:'Oracle, Java SE 26 JAR File Specification: JAR está basado en ZIP y puede incluir directorio META-INF opcional; no exige que todas sus entradas sean .class.'},
 {url:academyWeb,referencia:'ITIC Academy 2026, bloque 30, epígrafes de entorno Java y herramientas; encaje curricular general, no una fuente para definir el formato JAR.'},
 {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 67: entorno de desarrollo Java.'},
 {url:a2,referencia:'Convocatoria A2 GSI 2025, tema II.3 (lenguajes/paradigmas) y tema III.10 (Java EE/Jakarta EE y herramientas); clasificación curricular relacionada.'}
],
4673:[
 {url:'https://mail.gnome.org/archives/gnome-list/2002-June/msg00166.html',referencia:'Archivo oficial de la lista GNOME, resumen de junio de 2002: Agnubis fue iniciado para crear un programa de presentaciones integrado con GNOME/GNOME Office.'},
 {url:'https://mail.gnome.org/archives/gnome-list/2003-June/msg00020.html',referencia:'Archivo oficial de GNOME de junio de 2003: documenta el estado de proyecto no publicado/abandonado, por lo que el ítem se conserva como histórico y no se presenta como software vigente.'},
 {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 69: software de código abierto y aplicaciones; encaje temático de GNOME, sin afirmar que Agnubis forme parte del temario.'}
],
4674:[
 {url:'https://www.ogc.org/standards/kml/',referencia:'Open Geospatial Consortium, KML 2.3: lenguaje XML para visualizar información geográfica y codificar/transportar representaciones geográficas destinadas a earth browsers.'},
 {url:'https://docs.ogc.org/is/12-007r2/12-007r2.html',referencia:'Especificación OGC KML 2.3, estándar internacional 12-007r2.'},
 {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 74: sistemas de información geográfica, conceptos y funcionalidad básicos.'}
],
4675:[
 {url:'https://www.microsoft.com/en-us/research/publication/knowledge-discovery-and-data-mining-towards-a-unifying-framework/',referencia:'Fayyad, Piatetsky-Shapiro y Smyth (1996), marco de KDD y algoritmos de data mining; el mining aplica métodos de análisis/descubrimiento para extraer patrones o modelos de los datos.'},
 {url:'https://www.ai.rug.nl/ki2/literature/kdd-fayyad-shapiro-smyth.pdf',referencia:'Fayyad et al., From Data Mining to Knowledge Discovery in Databases (1996): en el núcleo de KDD, métodos de minería para descubrir y extraer patrones; el artículo distingue minería de datos del proceso KDD.'},
 {url:academyData,referencia:'ITIC Academy 2026, bloque 34 Business Intelligence y Big Data: incluye expresamente A2 tema D.15 sobre minería de datos y A1 tema 71 sobre ciencia de datos; cotejo de cobertura curricular.'},
 {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 71: ciencia de datos, ciclo de vida y modelado; correspondencia relacionada, no definición exhaustiva de data mining.'},
 {url:a2,referencia:'Convocatoria A2 GSI 2025, tema III.15: minería de datos, algoritmos, OLAP, Big Data y NoSQL.'}
]};
const records=[
 [4671,['65'],['III-12'],['CGI','Java applets','servlets','historia de la web'],sources[4671],null,'Respuesta C. Se acota como cronología introductoria: CGI ya se utilizaba en la Web desde 1993 (RFC 3875), los applets de Java aparecen con Java/HotJava en 1995 y el primer Java Web Servlet Development Kit se publicó en 1997. Son tecnologías de distintas generaciones, no una secuencia normativa de estándares; los applets son una tecnología histórica que dejó de ser compatible con los navegadores modernos. Se conserva como pregunta histórica. Academy bloque 30 cubre desarrollo web y Java; su temario no se usa para justificar las fechas.','historica'],
 [4672,['67'],['II-3','III-10'],['Java','JAR','ZIP','archivos de aplicación'],sources[4672],null,'La premisa original pedía identificar una sola afirmación falsa, pero tanto “JAR usa LZW” como “todos sus ficheros son .class” son falsas. Se reemplaza por una pregunta de respuesta única sobre el formato: JAR está basado en ZIP y puede contener clases y recursos; META-INF es opcional.','corregida'],
 [4673,['69'],[],['GNOME','Agnubis','presentaciones','software histórico'],sources[4673],null,'Respuesta B: Agnubis fue un proyecto de programa de presentaciones integrado con GNOME/GNOME Office. Se etiqueta histórica: el archivo de GNOME registra el proyecto en 2002 y su abandono/no publicación en 2003; no es una aplicación GNOME vigente ni el gestor de archivos. A1-69 es una relación temática con software de código abierto, no una inclusión de este programa concreto en el temario.','historica'],
 [4674,['74'],[],['KML','XML','SIG','datos geográficos'],sources[4674],null,'Respuesta B: KML es un estándar OGC basado en XML, orientado a codificar y transportar representaciones geográficas para su visualización en un earth browser. El enunciado se concreta porque MDT y UTM también son términos válidos del ámbito geoespacial, pero no son equivalentes a un formato de codificación; WCS es un servicio web de coberturas. La clasificación oficial directa es A1-74; no se fuerza una correspondencia A2 que no figure como epígrafe específico.','corregida'],
 [4675,['71'],['III-15'],['minería de datos','descubrimiento de patrones','KDD','ciencia de datos'],sources[4675],null,'Respuesta C. La minería de datos aplica algoritmos de análisis y descubrimiento para obtener patrones o modelos a partir de datos, como etapa del proceso más amplio de KDD. No se define por recuperar registros concretos, por usar exclusivamente IA ni por requerir un tamaño de conjunto específico.','corregida']
];
const edits={
4671:{texto:'En una cronología introductoria de estas tecnologías web, ¿qué secuencia corresponde a CGI (en uso en la Web desde 1993), los applets de Java/HotJava (1995) y el Java Servlet Development Kit (1997)?',opciones:['Servlets → CGI → applets.','Applets → servlets → CGI.','CGI → applets → servlets.','CGI → servlets → applets.'],respuesta_correcta:2,comentarios:'Respuesta C. La pregunta es histórica, no una comparación de tecnologías web actuales: CGI se usaba desde 1993, los applets de Java/HotJava aparecen en 1995 y el primer kit Java Servlet se lanzó en 1997. Los applets dejaron de ser una opción compatible con los navegadores actuales.'},
4672:{texto:'¿En qué formato de archivo está basado un JAR?',opciones:['ZIP, con un directorio META-INF opcional.','TAR sin compresión, y todas las entradas son ficheros .class.','LZW autónomo, que solo puede incluir bytecode Java.','ISO 9660, con un manifiesto obligatorio en la raíz.'],respuesta_correcta:0,comentarios:'Respuesta A. La especificación de Oracle indica que JAR se basa en ZIP y que META-INF es opcional. Puede agrupar múltiples clases y recursos; no todas las entradas tienen que ser ficheros .class.'},
4674:{texto:'¿Qué estándar OGC basado en XML codifica representaciones de información geográfica para su visualización en un earth browser?',opciones:['MDT (modelo digital del terreno).','KML (Keyhole Markup Language).','WCS (Web Coverage Service).','UTM (Universal Transverse Mercator).'],respuesta_correcta:1,comentarios:'Respuesta B. KML es un lenguaje XML del OGC para codificar y transportar representaciones geográficas destinadas a visualización. MDT describe un tipo de modelo de elevaciones, WCS es un servicio de coberturas y UTM es un sistema de coordenadas/proyección.'},
4675:{texto:'¿Qué describe mejor la minería de datos dentro del proceso de descubrimiento de conocimiento en bases de datos (KDD)?',opciones:['Recuperar registros concretos que se conocen de antemano pero son difíciles de localizar.','Aplicar exclusivamente técnicas de inteligencia artificial a conjuntos necesariamente masivos.','Aplicar algoritmos de análisis y descubrimiento para identificar patrones o modelos en los datos.','Aplicar aprendizaje automático solo a conjuntos pequeños de datos.'],respuesta_correcta:2,comentarios:'Respuesta C. En KDD, la minería de datos aplica métodos algorítmicos de análisis y descubrimiento para extraer patrones/modelos; el proceso KDD incluye otras etapas y la definición no exige una técnica exclusiva ni un tamaño particular del conjunto.'}
};
apply({numero:'870',fecha:'2026-11-11',records,edits});
