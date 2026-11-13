const apply=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const src=(url,referencia)=>({url,referencia});
apply({numero:'1200',fecha:'2026-11-13',records:[
 [6321,['108'],['IV-8'],['OSI','protocolo','entidades pares','capas de red'],[
  src('https://www.itu.int/rec/dologin_pub.asp?id=T-REC-X.200-199407-I%21%21PDF-E&lang=s&type=items','ITU-T X.200 (1994), §§5.2.1 y glosario: protocolo N es el conjunto de reglas y formatos (semánticos y sintácticos) que gobierna la comunicación entre entidades pares de la capa N.'),
  src('https://www.itu.int/rec/dologin_pub.asp?id=T-REC-X.200-198811-S%21%21PDF-E&lang=s&type=items','ITU-T X.200, modelo de referencia OSI: las entidades de una misma capa se denominan entidades pares.'),
  src('https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk','ITIC Academy, bloque 42 Redes, actualización 2026: protocolos y redes; cotejo curricular general.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 108: redes, medios, conmutación y protocolos.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.8: redes locales, tipologías y protocolos.')
 ],{opcion:[0,'Conjunto de reglas y formatos sintácticos y semánticos que gobierna la comunicación entre entidades pares del mismo nivel.']},'La opción A es correcta: en OSI, un protocolo establece reglas y formatos para la comunicación entre entidades pares (mismo nivel). Se sustituye “gramáticas” por la formulación estándar de X.200; las entidades de niveles distintos interactúan mediante servicios e interfaces, no como pares del mismo protocolo.', 'corregida'],
 [6322,['67'],['III-10'],['Java SE 8','expresiones lambda','interfaces funcionales','programación funcional'],[
  src('https://docs.oracle.com/javase/8/docs/technotes/guides/language/enhancements.html','Oracle, Java SE 8 Language Enhancements: las expresiones lambda encapsulan una unidad de comportamiento que se puede pasar a otro código.'),
  src('https://docs.oracle.com/javase/specs/jls/se8/html/jls-15.html#jls-15.27','Java Language Specification, Java SE 8, §15.27: una lambda tiene un tipo de destino de interfaz funcional; no convierte los métodos Java en elementos autónomos sin clase.'),
  src('https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk','ITIC Academy, bloque 30 Tecnologías de sistemas de información, actualización 2026: cotejo con el tema oficial A1-67 (entorno Java); no se afirma que el documento trate específicamente lambdas.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 67: entorno de desarrollo Java.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema III.10: arquitectura Java EE/Jakarta EE; relación curricular contextual con Java, sin epígrafe específico de expresiones lambda.')
 ],{texto:'¿Qué característica incorporada en Java SE 8 permite expresar una unidad de comportamiento y pasarla al código como una instancia de una interfaz funcional, facilitando un estilo de programación funcional?'},'La respuesta es B, expresiones lambda. Oracle documenta que Java SE 8 permite encapsular comportamiento y pasarlo a otros métodos; el tipo de destino es una interfaz funcional. Se corrige la afirmación de que los métodos pasan a ser elementos de primer nivel que no necesitan clase: Java no adopta funciones autónomas en ese sentido.', 'corregida'],
 [6323,['47','48'],['II-13'],['continuidad de negocio','plan de continuidad','funciones críticas','impacto de incidentes','recuperación'],[
  src('https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-34r1.pdf','NIST SP 800-34 Rev. 1, Contingency Planning Guide: vincula la planificación de contingencia con el análisis de impacto, priorización y recuperación de las funciones de misión/sistema tras una interrupción.'),
  src('https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final','NIST CSRC, publicación SP 800-34 Rev. 1: guía de planificación de contingencia y continuidad para sistemas federales.'),
  src('https://drive.google.com/file/d/18tJzWuBHyd4FbkzQIE5fIbSCRdlrt_1U/view?usp=drivesdk','ITIC Academy, bloque 22 Seguridad, ENS y ciberseguridad, actualización 2026: cotejo general con análisis de riesgos/seguridad; no se ha localizado en la búsqueda un desarrollo específico del plan de continuidad de negocio.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, temas 47–48: gestión de riesgos y Esquema Nacional de Seguridad; relación contextual con continuidad, que no se nombra literalmente en esos epígrafes.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema II.13: seguridad física y lógica, herramientas e incidentes; relación contextual, sin mención literal de continuidad de negocio.')
 ],null,'La opción D es correcta como objetivo general: una planificación de continuidad bien diseñada reduce efectos de interrupciones, prepara la operación o recuperación de funciones críticas y mejora la respuesta. No garantiza por sí sola continuidad ni evita todo impacto; la eficacia depende del análisis de impacto, estrategias, responsables, recursos y pruebas del plan.', 'vigente'],
 [6324,['63','64'],['II-5'],['PL/SQL','cursores','cursores implícitos','cursores explícitos'],[
  src('https://docs.oracle.com/en/database/oracle/oracle-database/19/lnpls/cursors-overview.html','Oracle Database PL/SQL Language Reference 19c, Cursors Overview: distingue cursores implícitos, creados y gestionados por PL/SQL, y explícitos, declarados y gestionados por el programador.'),
  src('https://docs.oracle.com/en/database/oracle/oracle-database/19/lnpls/database-pl-sql-language-reference.pdf','Oracle Database PL/SQL Language Reference, capítulo 6: cursores implícitos y explícitos.'),
  src('https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk','ITIC Academy, bloque 29 Bases de datos, SQL y modelado de datos, actualización 2026: cotejo temático con SQL y sistemas gestores; Oracle sustenta la distinción PL/SQL.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, temas 63–64: SGBD, modelo relacional y lenguaje SQL.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema II.5: SGBD relacionales, SQL e interoperabilidad.')
 ],null,'La opción B es correcta. Oracle clasifica los cursores PL/SQL en implícitos, que el motor crea y gestiona para ciertas sentencias, y explícitos, que declara y controla el programador.', 'vigente'],
 [6325,['125'],['IV-12'],['GPG','GnuPG','OpenPGP','cifrado híbrido','clave de sesión','clave pública'],[
  src('https://gnupg.org/gph/en/manual.html','GNU Privacy Handbook, capítulo 2: GnuPG usa cifrado híbrido; el mensaje se cifra con un algoritmo simétrico y la clave de sesión se cifra con la clave pública del destinatario.'),
  src('https://www.gnupg.org/documentation/manuals/gnupg/Operational-GPG-Commands.html','Manual oficial GnuPG, Operational GPG Commands: --encrypt cifra a uno o más destinatarios seleccionados por sus claves públicas.'),
  src('https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk','ITIC Academy, bloque 48 Seguridad en redes y en el nivel de aplicación, actualización 2026: criptografía y seguridad de red; cotejo curricular general, sin afirmar estudio específico de GPG.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 125: criptografía y medidas de seguridad en redes.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.12: técnicas criptográficas, protocolos seguros y seguridad de redes.')
 ],{opcion:[2,'Aplica cifrado híbrido: cifra el contenido con una clave simétrica de sesión y protege esa clave para cada destinatario mediante su clave pública.']},'La opción C, reformulada, es la correcta. GnuPG no cifra normalmente todo el mensaje directamente con el par asimétrico: cifra el contenido con una clave simétrica de sesión y cifra dicha clave para cada destinatario con su clave pública; la clave privada correspondiente permite recuperarla. Se eliminan como falsas la expansión de siglas y la caracterización de GPG como versión propietaria de PGP; tampoco se limita a tres algoritmos.', 'corregida']
]});
