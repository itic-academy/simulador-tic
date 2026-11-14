const apply = require('./aplicar-lote.cjs');
const src = (url, referencia) => ({url, referencia});
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy = {
  tech: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',
  security: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk'
};

apply({numero:'1280',fecha:'2026-11-15',records:[
 [6721,[80],['I-6'],['eIDAS','firma electrónica cualificada','dispositivo cualificado','datos de creación de firma'],[
  src('https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A02014R0910-20241018','Reglamento (UE) 910/2014, texto consolidado a 18-10-2024, anexo II.1: exige confidencialidad razonable; unicidad práctica; que los datos no puedan derivarse con seguridad razonable y que la firma esté protegida contra falsificación; y que el firmante legítimo pueda protegerlos frente al uso ajeno. El apartado 2 prohíbe alterar los datos que van a firmarse o impedir mostrarlos al firmante.'),
  src(a1,'BOE-A-2025-25938, convocatoria oficial del Cuerpo Superior TIC, anexo I, tema 80: identificación y firma electrónica, marco europeo, certificados y claves.'),
  src(a2,'BOE-A-2025-26262, convocatoria oficial GSI A2, anexo IX, tema I.6: identidad y firma electrónica, marco europeo y nacional.'),
  src(academy.security,'ITIC Academy, bloque 36 «Seguridad, Criptografía, Identificación y Firma», edición 2026: cotejo curricular de identificación/firma electrónica y dispositivos de creación de firma; el requisito legal concreto se contrasta con el anexo II consolidado del Reglamento eIDAS.')
 ],{texto:'Según el anexo II.1(c) del Reglamento (UE) 910/2014, en su texto consolidado, ¿cuál de estas afirmaciones NO es una garantía exigida a un dispositivo cualificado de creación de firma electrónica?',opciones:[
  'Que la confidencialidad de los datos de creación de firma quede razonablemente asegurada.',
  'Que los datos de creación puedan derivarse con seguridad razonable y que la firma no esté protegida frente a falsificación con la tecnología disponible.',
  'Que los datos de creación solo puedan generarse una vez en la práctica.',
  'Que el firmante legítimo pueda proteger de forma fiable esos datos frente al uso por otras personas.'
 ],respuesta_correcta:1},'Se conserva B como respuesta y se corrige la redacción para que la negación del enunciado no vuelva ambigua la opción: el anexo II.1(c) requiere que los datos no puedan derivarse con seguridad razonable y que la firma esté protegida contra falsificación; B afirma lo contrario. Las opciones A, C y D reflejan los requisitos de los apartados 1(a), 1(b) y 1(d). Se cita el texto consolidado de eIDAS para no dejar el ítem anclado a la redacción original anterior a sus modificaciones.', 'corregida'],

 [6722,[67,69],['III-10'],['Java','Apache Lucene','software de código abierto','biblioteca de búsqueda','índice de texto completo'],[
  src('https://lucene.apache.org/core/index.html','Apache Lucene Core, documentación oficial: proyecto de código abierto escrito en Java; Lucene Core es una biblioteca de indexación y búsqueda de texto completo (no un servidor de búsqueda autónomo).'),
  src('https://tomcat.apache.org/tomcat-11.0-doc/index.html','Apache Tomcat, documentación oficial: Tomcat es un contenedor Servlet/JSP; no es un servidor de aplicaciones Java EE/Jakarta EE completo.'),
  src('https://struts.apache.org/','Apache Struts, documentación oficial: framework MVC de código abierto para aplicaciones web Java; no es un framework de programación orientada a aspectos.'),
  src('https://www.wildfly.org/','WildFly, proyecto sucesor de JBoss AS: servidor de aplicaciones modular para aplicaciones empresariales Java/Jakarta EE.'),
  src(a1,'BOE-A-2025-25938, convocatoria oficial del Cuerpo Superior TIC, anexo I, tema 67 (entorno Java) y tema 69 (software de código abierto).'),
  src(a2,'BOE-A-2025-26262, convocatoria oficial GSI A2, anexo IX, tema III.10 (arquitectura Java EE/Jakarta EE). La etiqueta A2 es un cotejo del contexto Java empresarial; Lucene Core en sí es una biblioteca general Java, no un componente específico de Jakarta EE.'),
  src(academy.tech,'ITIC Academy, bloque 30 «Tecnologías de sistemas de la información», versión 2026.1: el índice y §§4–5 cubren Java SE, herramientas y Java EE/Jakarta EE. Se usa como cotejo de contexto formativo, no como fuente de la función de Lucene; esta se comprueba en la documentación oficial de Apache.')
 ],{texto:'¿Qué afirmación describe correctamente Apache Lucene Core, proyecto Java de código abierto?',opciones:[
  'WildFly, proyecto sucesor de JBoss AS, es un contenedor Servlet/JSP, mientras que Tomcat es un servidor de aplicaciones Java EE/Jakarta EE completo.',
  'Apache Struts es un framework de programación orientada a aspectos.',
  'Lucene Core es una biblioteca Java para indexar y realizar búsquedas, incluida la búsqueda de texto completo; no es por sí mismo un servidor autónomo.',
  'Ninguna de las anteriores es cierta.'
 ],respuesta_correcta:2},'Se conserva C, pero se acota «motor de búsqueda»: Apache denomina a Lucene Core biblioteca de motor de búsqueda, escrita en Java, que se integra en aplicaciones; no es en sí un servicio servidor autónomo como Apache Solr. La otra afirmación invierte el alcance: WildFly, proyecto sucesor de JBoss AS, es un servidor de aplicaciones; Tomcat es un contenedor Servlet/JSP, no un servidor Java EE/Jakarta EE completo. Struts es MVC, no un framework de programación orientada a aspectos.', 'corregida'],

 [6723,[79],['IV-12'],['HTTPS','TLS','HTTP/1.1','HTTP/2','HTTP/3','QUIC','confidencialidad','integridad'],[
  src('https://datatracker.ietf.org/doc/html/rfc9846','IETF RFC 9846 (julio de 2026), especificación vigente de TLS 1.3, que obsoleta RFC 8446: define TLS como canal seguro con confidencialidad e integridad. Se usa la edición vigente, no el RFC 8446 ya sustituido.'),
  src('https://www.rfc-editor.org/rfc/rfc9114.html','IETF RFC 9114, §3.2: HTTP/3 funciona sobre QUIC; QUIC v1 emplea TLS 1.3 o superior como protocolo de handshake. Por ello el enunciado se limita a HTTP sobre TCP, evitando presentar HTTPS/TLS como una descripción completa de HTTP/3.'),
  src('https://www.rfc-editor.org/rfc/rfc9110.html','IETF RFC 9110, §4.2.2: define el esquema https y sus propiedades de seguridad en coordinación con la capa TLS para HTTP tradicional sobre conexión TCP.'),
  src(a1,'BOE-A-2025-25938, convocatoria oficial del Cuerpo Superior TIC, anexo I, tema 79: cifrado, algoritmos y protección de comunicaciones.'),
  src(a2,'BOE-A-2025-26262, convocatoria oficial GSI A2, anexo IX, tema IV.12: seguridad de redes, técnicas criptográficas y protocolos seguros.'),
  src(academy.security,'ITIC Academy, bloque 36 «Seguridad, Criptografía, Identificación y Firma», edición 2026, apartado de protocolos seguros/TLS: cotejo curricular; el papel concreto de TLS y la excepción de HTTP/3 se verifican en RFC 9846 y RFC 9114.')
 ],{texto:'En HTTPS basado en HTTP/1.1 o HTTP/2 sobre TCP, ¿qué protocolo proporciona el canal criptográfico que protege la comunicación?',opciones:[
  'S-HTTP, un protocolo alternativo que cifra por sí solo todo HTTPS moderno.',
  'IPsec, que es el protocolo de seguridad obligatorio de la capa de aplicación HTTPS.',
  'IKE, que negocia asociaciones IPsec y sustituye a TLS en HTTPS.',
  'TLS (Transport Layer Security), que protege el canal con confidencialidad e integridad.'
 ],respuesta_correcta:3},'Se mantiene D y se acota el escenario a HTTP/1.1 o HTTP/2 sobre TCP: TLS proporciona el canal criptográfico seguro. HTTP/3 es una excepción arquitectónica importante: se transporta sobre QUIC, cuyo handshake usa TLS 1.3 o superior, por lo que no se describe como TLS sobre TCP. IPsec e IKE son tecnologías de seguridad de red/IP, no el mecanismo de seguridad del esquema HTTPS.', 'corregida'],

 [6724,[80],['I-6'],['LDAP','X.500','DAP','ASN.1','BER','Modify operation','directorios'],[
  src('https://www.rfc-editor.org/rfc/rfc4511.html','IETF RFC 4511, §§1 y 4–5: LDAP proporciona acceso a servicios de directorio que siguen modelos de datos y servicios X.500; sus elementos se basan en DAP; especifica mensajes ASN.1, codificación BER, operación Modify y transporte LDAP sobre TCP.'),
  src('https://www.rfc-editor.org/rfc/rfc4512.html','IETF RFC 4512: documenta los modelos de información LDAP derivados/adaptados de los modelos X.500, incluido el árbol de información del directorio; desmiente que LDAP elimine o reemplace por completo dicho modelo.'),
  src(a1,'BOE-A-2025-25938, convocatoria oficial del Cuerpo Superior TIC, anexo I, tema 80: identificación electrónica y protocolos de directorio LDAP y X.500.'),
  src(a2,'BOE-A-2025-26262, convocatoria oficial GSI A2, anexo IX, tema I.6: identidad y firma electrónica y servicios de directorio.'),
  src(academy.security,'ITIC Academy, bloque 36 «Seguridad, Criptografía, Identificación y Firma», edición 2026, apartado de directorios/identidad: cotejo curricular de LDAP y X.500; las propiedades protocolarias se comprueban en RFC 4511 y RFC 4512.')
 ],{texto:'¿Cuál de las siguientes afirmaciones es falsa sobre LDAPv3?',opciones:[
  'El transporte LDAP sobre TCP está especificado y debe implementarse por las implementaciones que lo soporten.',
  'LDAP sustituye y elimina por completo el modelo de información y los servicios de directorio X.500; no se basa en ellos ni proporciona acceso a directorios compatibles con ese modelo.',
  'Los mensajes del protocolo se representan con tipos ASN.1 y se codifican mediante BER.',
  'LDAPv3 define una operación Modify para solicitar cambios en una entrada del directorio.'
 ],respuesta_correcta:1},'Se mantiene B como falsa, pero se precisa la afirmación para eliminar la ambigüedad histórica de decir que LDAP «reemplaza X.500». RFC 4511 dice que LDAP proporciona acceso a directorios que actúan conforme a modelos X.500 y que sus elementos se basan en DAP; RFC 4512 desarrolla los modelos de información adaptados. La opción A se refiere expresamente al mapeo sobre TCP definido por RFC 4511, no afirma que sea el único transporte teóricamente posible.', 'corregida'],

 [6725,[67],['III-10'],['Java','interfaces','herencia múltiple de tipos','herencia de implementación','Java SE'],[
  src('https://docs.oracle.com/javase/specs/jls/se27/html/jls-1.html','Java Language Specification, Java SE 27, §1: clases admiten herencia simple; clases e interfaces admiten herencia múltiple de interfaces. Publicada en septiembre de 2026.'),
  src('https://docs.oracle.com/javase/specs/jls/se27/html/jls-9.html','Java Language Specification, Java SE 27, capítulo 9: reglas normativas de herencia entre interfaces y resolución de métodos heredados, incluidos métodos default.'),
  src(a1,'BOE-A-2025-25938, convocatoria oficial del Cuerpo Superior TIC, anexo I, tema 67: entorno de desarrollo Java.'),
  src(a2,'BOE-A-2025-26262, convocatoria oficial GSI A2, anexo IX, tema III.10: arquitectura Java EE/Jakarta EE y sus tecnologías Java.'),
  src(academy.tech,'ITIC Academy, bloque 30 «Tecnologías de sistemas de la información», edición 2026.1, §4.3: Java SE y características del lenguaje; §5 cubre Java EE/Jakarta EE. Es cotejo curricular, y la regla de herencia se toma de la especificación Java.' )
 ],{texto:'¿Cómo permite Java que una clase tenga varios tipos superpuestos sin admitir que extienda varias clases?',opciones:[
  'Implementando varias interfaces; esto permite herencia múltiple de tipos, no herencia múltiple de clases.',
  'Extendiendo varias clases abstractas a la vez.',
  'Sobrescribiendo métodos: la sobrescritura hace que la clase herede de varios supertipos de clase.',
  'Mediante conversiones implícitas entre clases no relacionadas.'
 ],respuesta_correcta:0},'Se mantiene A y se reemplaza la formulación imprecisa «simular herencia múltiple». La JLS reconoce que una clase puede implementar una o más interfaces y que clases e interfaces admiten herencia múltiple desde interfaces; las clases Java siguen teniendo una única superclase directa. Las interfaces pueden aportar métodos default, pero eso no equivale a heredar varias clases o sus estados.', 'corregida']
]});
