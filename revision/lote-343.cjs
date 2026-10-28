const apply=require('./aplicar-lote.cjs');
const records=[
 [2031,[111],["II-8"],['modelo OSI','capa de presentación','compresión','cifrado','sincronización de tramas'],[
  {url:'https://www.iso.org/standard/20269.html',referencia:'ISO/IEC 7498-1:1994, modelo básico OSI: define las siete capas y las funciones de presentación; la capa 6 realiza transformaciones de representación como la compresión.'},
  {url:'https://www.ecma-international.org/wp-content/uploads/s020269e.pdf',referencia:'Texto de ISO/IEC 7498-1 distribuido por ECMA: §7.2.4 especifica que la presentación negocia sintaxis y representa datos, incluyendo transformaciones como compresión.'},
  {url:'https://www.iso.org/ics/35.100/x/',referencia:'ISO ICS 35.100: catálogo oficial de las capas OSI, incluida la capa de presentación.'}
 ],null,'La afirmación incorrecta es que compresión y cifrado sean responsabilidad de la capa de aplicación. En el modelo OSI clásico, la capa de presentación realiza transformaciones de representación, incluida la compresión; los mecanismos criptográficos pueden implementarse en distintas capas, así que no son exclusivos de aplicación. Se precisa el enunciado para no atribuir el cifrado a una única capa. Respuesta 3. A1-111/A2-II-8.','corregida'],
 [2032,[64],["II-5"],['ODBC','application','Driver Manager','driver','data source'],[
  {url:'https://learn.microsoft.com/en-us/sql/odbc/reference/odbc-architecture?view=sql-server-ver17',referencia:'Microsoft Learn, ODBC Architecture (actualizado 27-05-2026): enumera Application, Driver Manager, Driver y Data Source como cuatro componentes.'}
 ],null,'ODBC tiene cuatro componentes en su arquitectura: aplicación, administrador de controladores, controlador y origen de datos. La opción 0 es correcta. Se corrige además el error tipográfico de la opción sobre ficheros para conservar un distractor legible. A1-64/A2-II-5.','corregida'],
 [2033,[45],["I-9"],['Esquema Nacional de Interoperabilidad','Real Decreto 4/2010','inventario de información administrativa','procedimientos','servicios'],[
  {url:'https://www.boe.es/buscar/act.php?id=BOE-A-2010-1331',referencia:'BOE, texto consolidado del Real Decreto 4/2010: artículo 9.1.a exige el inventario de procedimientos administrativos y servicios prestados de forma clasificada y estructurada.'}
 ],null,'El artículo 9.1.a del RD 4/2010 incluye la relación de procedimientos administrativos y servicios prestados, clasificados y estructurados. La opción 0 reproduce ese mínimo legal. Respuesta vigente. A1-45/A2-I-9.','vigente'],
 [2034,[81],["I-6"],['X.509','PKI','autoridad de certificación','certificado de clave pública','autofirmado'],[
  {url:'https://www.rfc-editor.org/rfc/rfc5280.html',referencia:'RFC 5280, PKIX: el campo issuer identifica a la entidad que firmó y emitió el certificado; define verificación de cadenas y admite trust anchors representados por certificados autofirmados.'},
  {url:'https://eur-lex.europa.eu/eli/reg/2014/910/oj?locale=es',referencia:'Reglamento (UE) 910/2014 (eIDAS), texto consolidado: establece requisitos para certificados cualificados y prestadores cualificados de servicios de confianza.'}
 ],null,'Se limita la afirmación a una PKI convencional basada en CA: la autoridad de certificación emite y firma el certificado que vincula identidad y clave pública. La frase absoluta original era imprecisa porque existen certificados autofirmados, por ejemplo los usados como anclas de confianza; el RFC 5280 los contempla. También se corrige que la afirmación de que X.509 no puede acreditar sitios web es falsa. Respuesta 1. A1-81/A2-I-6.','corregida'],
 [2035,[67],["III-10"],['Java BluePrints','Sun Microsystems','J2EE','guías históricas','patrones de diseño'],[
  {url:'https://www.oracle.com/java/technologies/java-blueprints.html',referencia:'Oracle Java BluePrints: presenta guías, patrones y código para aplicaciones Java end-to-end y explica su catálogo histórico de patrones J2EE.'},
  {url:'https://www.oracle.com/java/technologies/patterns.html',referencia:'Oracle Java BluePrints Patterns: describe patrones, soluciones y ejemplos para diseñar aplicaciones J2EE.'},
  {url:'https://www.oracle.com/java/technologies/java-blueprints-guidelines.html',referencia:'Oracle, BluePrints Guidelines and Code: reúne directrices históricas y aplicaciones de referencia para Java EE/J2EE.'}
 ],null,'Se conserva como referencia histórica de la plataforma J2EE: Sun denominó Java BluePrints a sus guías, patrones y aplicaciones de referencia para diseñar soluciones Java empresariales. Hibernate, Spring y Struts son tecnologías distintas, no el nombre de ese programa de guías. Respuesta 2. A1-67/A2-III-10.','historica']
];
const edits={
 2031:{texto:'En el modelo OSI clásico, señale la afirmación NO correcta:',opciones:['La capa de enlace delimita y sincroniza la transmisión de tramas.','La capa de sesión se encuentra por encima de la capa de red.','La capa de red determina rutas entre redes.','La compresión de datos es una función propia de la capa de aplicación, no de la capa de presentación.'],respuesta_correcta:3},
 2032:{opcion:[1,'Tres: aplicación, ficheros y controlador basado en archivos']},
 2034:{texto:'En una PKI convencional basada en certificados X.509, ¿qué entidad emite y firma normalmente un certificado que vincula una identidad con una clave pública?',opciones:['Otros usuarios mediante conexiones de confianza, sin autoridad emisora.','Una Autoridad de Certificación (CA).','No se pueden acreditar identidades de sitios web con certificados X.509.'],respuesta_correcta:1},
 2035:{texto:'En el contexto histórico de las guías de diseño de aplicaciones Java/J2EE publicadas por Sun, estas se denominaban:',opciones:['Hibernate','Spring','Java BluePrints','Struts'],respuesta_correcta:2}
};
apply({numero:'343',fecha:'2026-10-28',records,edits});
