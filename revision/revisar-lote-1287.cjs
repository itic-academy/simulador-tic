const apply=require('./aplicar-lote.cjs');
const src=(url,referencia)=>({url,referencia});
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
apply({numero:'1287',fecha:'2026-11-15',records:[
  [6756,[75],[],['data mesh','malla de datos','gobierno federado','data as a product','infraestructura self-service'],[
    src('https://martinfowler.com/articles/data-mesh-principles.html','Zhamak Dehghani, Data Mesh Principles and Logical Architecture: enumera los cuatro principios —propiedad y arquitectura descentralizadas orientadas al dominio, datos como producto, infraestructura de datos self-service y gobierno computacional federado—.'),
    src(a1,'BOE-A-2025-25938, anexo I, tema 75: tecnologías de almacenamiento y procesamiento de grandes volúmenes de datos; encaje de Data Mesh como arquitectura de datos.'),
    src('https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk','ITIC Academy, bloque 34, Business Intelligence y Big Data, edición 2026: cotejo del encaje de Data Mesh en el bloque de analítica y gestión de datos; no sustituye la fuente conceptual primaria.')
  ],{texto:'¿Qué principios forman parte de Data Mesh?',opciones:[
    'Propiedad de datos y arquitectura descentralizadas y orientadas al dominio.','Datos tratados como producto.','Plataforma de infraestructura de datos self-service y gobierno computacional federado.','Todas las anteriores.'
  ],respuesta_correcta:3},'Se conserva D. Los cuatro principios fundacionales incluyen tanto los descritos en A y B como la plataforma de infraestructura self-service y el gobierno computacional federado de C. A1-75 es el encaje temático más directo; no se fuerza una correspondencia A2 que no aparece expresamente en el programa oficial.','corregida'],

  [6757,[64,89],['II-5'],['modelo relacional','modelo de red','CODASYL','claves candidatas','clave primaria','clave ajena'],[
    src('https://db.dobo.sk/wp-content/uploads/2015/11/Codd_1970_A_relational_model.pdf','E. F. Codd, A Relational Model of Data for Large Shared Data Banks (1970): trabajo fundacional sobre el modelo relacional y la independencia entre programas y representación de los datos.'),
    src('https://nvlpubs.nist.gov/nistpubs/Legacy/IR/nbsir76-1094e3.pdf','NBSIR 76-1094, evaluación del informe CODASYL/DBTG de 1971: describe el modelo de red, con registros conectados por punteros o índices.'),
    src('https://www.postgresql.org/docs/18/ddl-constraints.html','PostgreSQL 18, documentación de restricciones: distingue la clave primaria, que identifica filas, y las claves ajenas, que mantienen integridad referencial entre tablas.'),
    src(a1,'BOE-A-2025-25938, anexo I, temas 64 (bases de datos relacionales y SQL) y 89 (análisis/diseño y modelos de datos).'),
    src(a2,'BOE-A-2025-26262, anexo IX, tema II.5: bases de datos relacionales y SQL.'),
    src('https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk','ITIC Academy, bloque 29, bases de datos: cotejo de los contenidos de modelo relacional, claves y modelos de datos; la precisión de las definiciones se verifica con Codd, NIST y la documentación del SGBD.')
  ],{texto:'En cuanto a los modelos de datos, seleccione la opción INCORRECTA:',opciones:[
    'Los modelos en red representan registros y relaciones mediante nodos y conexiones, como en un grafo.','El modelo CODASYL/DBTG es un ejemplo histórico de modelo en red.','El modelo relacional se diseñó, entre otros objetivos, para ofrecer independencia de datos y una representación lógica sencilla y uniforme.','En el modelo relacional, las relaciones se clasifican como claves candidatas, primarias o ajenas.'
  ],respuesta_correcta:3},'Se conserva D y se corrige su terminología. Una relación (tabla) no se clasifica en claves: candidata, primaria y ajena son conceptos de clave/restricción. La formulación previa decía «clases de relación», categoría ambigua que podía significar relaciones entre entidades del modelo ER. A, B y C se acotan con definiciones respaldadas por los trabajos fundacionales y fuentes técnicas.','corregida'],

  [6758,[57],['II-7'],['Kubernetes','K8s','contenedores','orquestación','despliegue'],[
    src('https://kubernetes.io/docs/concepts/','Kubernetes, conceptos: plataforma extensible y portable para gestionar cargas y servicios contenedorizados, con configuración declarativa y automatización.'),
    src('https://kubernetes.io/','Kubernetes, página oficial: sistema de código abierto para automatizar el despliegue, el escalado y la gestión de aplicaciones contenedorizadas.'),
    src(a1,'BOE-A-2025-25938, anexo I, tema 57: virtualización de servidores; contexto de ejecución y gestión de cargas en contenedores.'),
    src(a2,'BOE-A-2025-26262, anexo IX, tema II.7: contenedores y microservicios, despliegue, monitorización y escalado.'),
    src('https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk','ITIC Academy, bloque 26, hardware, servidores, virtualización y contenedores; cotejo curricular.')
  ],{texto:'En la arquitectura de sistemas de información, Kubernetes (K8s) es una plataforma que permite principalmente:',opciones:[
    'Almacenar y procesar masivamente series de datos en tiempo real.','Generar registros y realizar analítica predictiva de seguridad a nivel de aplicación.','Automatizar el despliegue, escalado y gestión de aplicaciones contenedorizadas.'
  ],respuesta_correcta:2},'Se conserva C y se añade el escalado y la gestión, además del despliegue. Esa es la función descrita por el proyecto Kubernetes; no debe confundirse con una plataforma de análisis de series temporales o de registros.','corregida'],

  [6759,[108],['II-8'],['WAN','conmutación','conmutación por paquetes','conmutación por circuitos','conmutación de mensajes','orientada a conexión'],[
    src('https://www.rfc-editor.org/rfc/rfc1983.html','IETF RFC 1983, Internet Users’ Glossary: define por separado connection-oriented como un modo/servicio de comunicación y circuit switching y packet switching como paradigmas de conmutación.'),
    src('https://www.rfc-editor.org/rfc/rfc1392.html','IETF RFC 1392, Internet Glossary: define packet switching como encaminamiento individual de paquetes y remite a circuit switching como paradigma distinto.'),
    src(a1,'BOE-A-2025-25938, anexo I, tema 108: redes de telecomunicaciones y técnicas de conmutación de circuitos y paquetes.'),
    src(a2,'BOE-A-2025-26262, anexo IX, tema II.8: redes TCP/IP, protocolos y modelo OSI; la clasificación de servicios se usa solo para distinguir conceptos.'),
    src('https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk','ITIC Academy, bloque 42, redes 2026: cotejo del contenido de WAN y técnicas de conmutación; RFC de IETF empleado para evitar equiparar servicio orientado a conexión con técnica de switching.')
  ],{texto:'¿Cuál de las siguientes NO es una técnica de conmutación de una WAN?',opciones:[
    'Servicio orientado a conexión.','Conmutación de mensajes.','Conmutación de circuitos.','Conmutación de paquetes.'
  ],respuesta_correcta:0},'Se cambia A. En el original se mezclaban una modalidad de servicio (orientada a conexión) con técnicas de conmutación, además de emplear el término impreciso «conmutada por líneas». RFC 1983 distingue el servicio orientado a conexión de las técnicas de circuito y paquetes; el enunciado ahora compara categorías homogéneas y se reemplaza la opción imprecisa por «conmutación de circuitos».','corregida'],

  [6760,[57],['II-7'],['Kubernetes','Helm','charts','paquetes','despliegue'],[
    src('https://helm.sh/docs/intro/introduction/','Helm, documentación oficial: Helm es el gestor de paquetes de Kubernetes; Charts empaquetan recursos, y su instalación crea un release que puede actualizarse o revertirse.'),
    src('https://helm.sh/docs/v3/topics/charts/','Helm, guía de Charts: define la estructura del paquete Chart, que describe los recursos Kubernetes de una aplicación.'),
    src(a1,'BOE-A-2025-25938, anexo I, tema 57: virtualización de servidores y plataformas de despliegue.'),
    src(a2,'BOE-A-2025-26262, anexo IX, tema II.7: contenedores y microservicios, despliegue, monitorización y escalado.'),
    src('https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk','ITIC Academy, bloque 26, servidores, virtualización y contenedores: cotejo temático, no prescripción de una única herramienta de despliegue.')
  ],{texto:'¿Qué herramienta es el gestor de paquetes específico de Kubernetes que empaqueta recursos en Charts y administra cada instalación como un release?',opciones:[
    'Helm','Ansible','Un script de shell','Ninguna de las anteriores'
  ],respuesta_correcta:0},'Se conserva A, pero se sustituye «la opción más apropiada para desplegar» por una propiedad técnica verificable. Helm es el gestor de paquetes de Kubernetes; Ansible y scripts también pueden automatizar despliegues, de modo que el enunciado antiguo no tenía una única respuesta necesariamente correcta.','corregida']
]});
