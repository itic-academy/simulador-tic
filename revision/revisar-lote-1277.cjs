const apply=require('./aplicar-lote.cjs');
const src=(url,referencia)=>({url,referencia});
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy={storage:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',mobile:'https://drive.google.com/file/d/1nXa2jkiUqpu31smkt5D8WswcTgEN7XlB/view?usp=drivesdk',security:'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',tech:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',db:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk'};
apply({numero:'1277',fecha:'2026-11-14',records:[
 [6706,[56],['IV-5'],['Fibre Channel','SAN','switch zoning','LUN masking','WWN','almacenamiento'],[
  src('https://www.redbooks.ibm.com/redbooks/pdfs/sg245444.pdf','IBM Z Connectivity Handbook: zoning segmenta el fabric FC y limita la comunicación a miembros de la zona; el LUN masking restringe acceso a unidades lógicas mediante WWPN.'),
  src('https://docs.netapp.com/us-en/ontap/san-config/fibre-channel-fcoe-zoning-concept.html','NetApp ONTAP documentación técnica: zoning limita conectividad/visibilidad a los endpoints de una zona y puede definirse por WWN.'),
  src('https://learn.microsoft.com/en-us/system-center/vmm/storage-fibre-channel?view=sc-vmm-2025','Microsoft Learn: distingue configuración de zonas Fibre Channel y registro/unmask de LUN para que un host pueda acceder al almacenamiento.'),
  src(a1,'Convocatoria oficial GSI A1 2025, tema 56: almacenamiento para sistemas grandes/departamentales y virtualización del almacenamiento.'),
  src(a2,'Convocatoria oficial GSI A2 2025, tema IV.5: arquitectura, componentes, protocolos, gestión y administración del almacenamiento.'),
  src(academy.storage,'ITIC Academy, bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», edición 2026.1: §§ sobre SAN/Fibre Channel y LUN; cotejo curricular, con funciones de zoning y masking fundamentadas en documentación técnica de fabricantes.')
 ],{texto:'En una SAN Fibre Channel, ¿qué funciones cumplen switch zoning y LUN masking?',opciones:[
  'El zoning y el masking son ambos equivalentes a una máscara IP asignada dinámicamente a cada iniciador.',
  'Se emplean para administrar robots LTO y copias de seguridad de discos virtuales.',
  'El zoning limita qué puertos/WWN pueden comunicarse dentro del fabric; el LUN masking restringe qué unidades lógicas puede ver o utilizar un host iniciador.',
  'Son mecanismos incompatibles y no pueden configurarse simultáneamente en una SAN.'
 ],respuesta_correcta:2},'La respuesta C es correcta. El zoning segmenta la conectividad del fabric Fibre Channel entre miembros autorizados; el LUN masking configura en el almacenamiento qué LUN se presenta a qué iniciadores/hosts. Son controles distintos y complementarios, no una máscara de red IP ni funciones de robótica de cintas.', 'corregida'],

 [6707,[62],['II-2'],['iOS','Core OS','Core Services','Media','Cocoa Touch','arquitectura histórica'],[
  src('https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CocoaFundamentals/WhatIsCocoa/WhatIsCocoa.html','Apple Developer Documentation archivada: describe las cuatro capas del stack iOS de esa arquitectura —Core OS, Core Services, Media y Cocoa Touch— e identifica sus funciones.'),
  src(a1,'Convocatoria oficial GSI A1 2025, tema 62: iOS y sistemas operativos para dispositivos móviles.'),
  src(a2,'Convocatoria oficial GSI A2 2025, tema II.2: fundamentos y tipos de sistemas operativos, incluidos los móviles.'),
  src(academy.mobile,'ITIC Academy, bloque 47 «Aplicaciones Móviles y Sistemas Operativos», versión 2026.1: cotejo curricular de iOS; la taxonomía de capas citada se contrasta con la documentación archivada de Apple.')
 ],{texto:'En el modelo histórico de cuatro capas de abstracción de iOS descrito por Apple, ¿cuál de estas opciones no es una capa?',opciones:['Core OS.','Core Services.','Cocoa Touch.','Servicios de red.'],respuesta_correcta:3},'La respuesta D es correcta para el modelo de arquitectura de iOS documentado por Apple: Core OS, Core Services, Media y Cocoa Touch. «Servicios de red» es una función/servicio que aparece en capas inferiores, no el nombre de una de esas cuatro capas. Se fecha como modelo histórico porque la referencia de Apple está archivada y no debe interpretarse como una taxonomía exhaustiva de las versiones actuales.', 'historica'],

 [6708,[79],['IV-12'],['hash criptográfico','resumen de mensaje','longitud fija','resistencia a preimagen','colisiones','MD5','SHA-2'],[
  src('https://csrc.nist.gov/Projects/Hash-Functions','NIST CSRC: las funciones hash aprobadas transforman mensajes de longitud arbitraria en resúmenes de longitud fija; explica resistencia a colisiones y a preimagen, y enumera familias SHA-2/SHA-3.'),
  src('https://csrc.nist.gov/pubs/sp/800/131/a/r2/final','NIST SP 800-131A Rev. 2: establece transiciones de algoritmos criptográficos y desaconseja MD5 para aplicaciones criptográficas.'),
  src(a1,'Convocatoria oficial GSI A1 2025, tema 79: cifrado simétrico/asimétrico y función hash.'),
  src(a2,'Convocatoria oficial GSI A2 2025, tema IV.12: técnicas criptográficas, protocolos y mecanismos de firma digital.'),
  src(academy.security,'ITIC Academy, bloque 36 «Seguridad, criptografía, identificación y firma», edición 2026.1: funciones hash, criptografía y firma; las propiedades de seguridad y recomendaciones se verifican con NIST.')
 ],{texto:'Señale la afirmación correcta sobre una función hash criptográfica convencional.',opciones:[
  'La longitud del resumen cambia necesariamente con la longitud del mensaje de entrada.',
  'MD5 se considera más seguro que SHA-2 para nuevas aplicaciones criptográficas.',
  'Produce un resumen de longitud fija para mensajes de longitud arbitraria y se diseña para que recuperar el mensaje original a partir del resumen sea computacionalmente inviable.',
  'Es matemáticamente imposible que dos mensajes distintos produzcan el mismo resumen.'
 ],respuesta_correcta:2},'La respuesta C es correcta para las funciones hash criptográficas convencionales. Las salidas tienen longitud fija y se busca resistencia a preimagen; no son cifrados reversibles. Las colisiones no pueden excluirse matemáticamente cuando el espacio de entrada es ilimitado y la salida finita, aunque una función segura debe hacerlas computacionalmente inviables de encontrar. MD5 no es adecuado para nuevas aplicaciones criptográficas.', 'corregida'],

 [6709,[67],['III-10','III-12'],['Java Web Start','JNLP','JSR 56','XML','tecnología histórica','despliegue Java'],[
  src('https://jcp.org/aboutJava/communityprocess/final/jsr056/index.html','Java Community Process, JSR-000056: especificación final del Java Network Launching Protocol and API (JNLP), con Java Web Start como implementación de referencia histórica.'),
  src('https://www.oracle.com/java/technologies/javase/java-web-start-overview.html','Oracle, Java Web Start Overview: define su relación con JSR-56/JNLP y describe el lanzamiento de aplicaciones Java desde infraestructura web.'),
  src('https://docs.oracle.com/en/java/javase/11/migrate/','Oracle JDK 11 Migration Guide: indica que Java Web Start y la pila de despliegue fueron eliminados de Oracle JDK 11.'),
  src(a1,'Convocatoria oficial GSI A1 2025, tema 67: entorno de desarrollo Java.'),
  src(a2,'Convocatoria oficial GSI A2 2025, temas III.10 (Java EE/Jakarta EE) y III.12 (aplicaciones web y tecnologías de programación).'),
  src(academy.tech,'ITIC Academy, bloque 30 «Tecnologías de sistemas de información», versión 2026.1: cotejo curricular de plataforma/despliegue Java; JNLP y el ciclo histórico de Java Web Start se verifican en JCP y Oracle.')
 ],{texto:'En la tecnología histórica Java Web Start, ¿qué afirmación describe correctamente JNLP?',opciones:[
  'Permite instalar la aplicación, pero el protocolo no admite actualizaciones.',
  'Permite ejecutar cualquier aplicación Java directamente en cualquier navegador, sin entorno Java en el equipo.',
  'JNLP (Java Network Launching Protocol) se especificó en JSR 56 y sus archivos de lanzamiento usan sintaxis XML.',
  'Java Web Start forma parte del Oracle JDK 11 y sustituye al complemento Java para navegadores.'
 ],respuesta_correcta:2},'La respuesta C es correcta: JNLP corresponde al Java Network Launching Protocol and API, estandarizado en JSR 56, y describe el lanzamiento mediante archivos XML. Las opciones A y B generalizan incorrectamente instalación, actualización y requisitos del entorno de ejecución. D es falsa: Oracle retiró Java Web Start de JDK 11. Se marca histórica porque la tecnología ya no se distribuye con los JDK actuales, aunque existan implementaciones compatibles externas.', 'historica'],

 [6710,[89],['III-4'],['modelo E/R','entidad débil','dependencia de existencia','entidad propietaria','clave parcial','identificación'],[
  src('https://eecs.csuohio.edu/~sschung/cis430/Fundamentals-of-Database-Systems-Pearson-2015-Ramez-Elmasri-Shamkant-B.-Navathe.pdf','Elmasri y Navathe, Fundamentals of Database Systems, §3.5: una entidad débil no tiene clave propia suficiente; se identifica mediante una entidad propietaria y una clave parcial, con participación total en la relación identificadora.'),
  src('https://www.ibm.com/think/topics/entity-relationship-diagram','IBM, introducción a diagramas entidad-relación: distingue entidad fuerte/débil y describe dependencia de existencia respecto de la entidad propietaria.'),
  src(a1,'Convocatoria oficial GSI A1 2025, tema 89: análisis del dominio, modelo entidad-relación y modelos de clases.'),
  src(a2,'Convocatoria oficial GSI A2 2025, tema III.4: modelado de datos, diseño de bases de datos y modelo lógico relacional.'),
  src(academy.db,'ITIC Academy, bloque 29 «Bases de datos y modelado», versión 2026: cotejo curricular de modelo E/R, claves y entidades débiles; la definición se fundamenta en bibliografía universitaria de bases de datos.')
 ],{texto:'En el modelo Entidad/Relación, ¿qué caracteriza propiamente a una entidad débil?',opciones:[
  'No mantiene ninguna relación con otras entidades.',
  'Hereda automáticamente todos sus atributos de otra entidad mediante generalización.',
  'No tiene una clave propia suficiente: se identifica respecto de una entidad propietaria mediante una relación identificadora y una clave parcial; su existencia depende de ella.',
  'Es cualquier entidad que participe en una relación de cardinalidad muchos a muchos.'
 ],respuesta_correcta:2},'La respuesta C es correcta. Una entidad débil carece de atributos que por sí solos formen una clave completa; su identificación combina la clave de una entidad propietaria con una clave parcial, a través de una relación identificadora. La dependencia de existencia es necesaria, pero por sí sola no basta para clasificar como débil a toda entidad dependiente si esta posee una clave propia completa.', 'corregida']
]});
