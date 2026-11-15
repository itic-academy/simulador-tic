const apply=require('./aplicar-lote.cjs');
const src=(url,referencia)=>({url,referencia});
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
apply({numero:'1292',fecha:'2026-11-15',records:[
  [6781,[75],['I-7'],['PET','privacy-enhancing technologies','datos sintéticos','privacidad diferencial','pruebas de conocimiento cero','ofuscación'],[
    src('https://www.edpb.europa.eu/system/files/documents/2025-06/spe-training-on-ai-and-data-protection-technical_en.pdf','EDPB, Fundamentals of Secure AI Systems with Personal Data (2025), figura 5.1 y capítulo 5: representa como PET/sus técnicas la síntesis de datos, las pruebas de conocimiento cero y la privacidad diferencial. La adopción de una técnica no convierte automáticamente un conjunto en anónimo; se requiere evaluar riesgos de reidentificación.'),
    src(a1,'BOE-A-2025-25938, anexo I, tema 75: tecnologías para explotación de datos y protección de la confidencialidad (PET).'),
    src(a2,'BOE-A-2025-26262, anexo IX, tema I.7: protección de datos personales y medidas aplicables al tratamiento.'),
    src('https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk','ITIC Academy, bloque 34, Business Intelligence y Big Data (2026): cotejo curricular del ámbito de datos/privacidad; ejemplos y límites de protección se contrastan con EDPB.')
  ],{texto:'En el contexto de las tecnologías para mejorar la privacidad (PET), ¿cuáles de estas técnicas pueden contribuir a limitar la exposición de datos personales?',opciones:[
    'Generación de datos sintéticos.','Pruebas de conocimiento cero.','Privacidad diferencial.','Todas las anteriores pueden contribuir, según el diseño y el análisis de riesgos.'
  ],respuesta_correcta:3},'Se conserva D, pero se sustituye «ofuscación» por el concepto más preciso de PET y se añade que la eficacia depende del diseño y del análisis de riesgos. La guía técnica del EDPB incluye síntesis de datos, pruebas de conocimiento cero y privacidad diferencial entre las técnicas que contribuyen a la protección; ninguna implica anonimización automática por su sola aplicación.','corregida'],

  [6782,[108,79],['IV-12'],['VPN','IPsec','capa 2','capa 3','red privada virtual','túnel IP'],[
    src('https://www.rfc-editor.org/rfc/rfc4301.html','IETF RFC 4301, Security Architecture for the Internet Protocol: IPsec proporciona servicios de seguridad en la capa IP; su modo túnel encapsula paquetes IP para crear túneles entre extremos de seguridad.'),
    src('https://www.rfc-editor.org/rfc/rfc2661.html','IETF RFC 2661, Layer Two Tunneling Protocol: L2TP es un protocolo de túnel de capa 2 que transporta tramas PPP; no es la opción adecuada cuando el proveedor no admite servicio VPN de capa 2.'),
    src('https://www.rfc-editor.org/rfc/rfc3193.html','IETF RFC 3193, Securing L2TP using IPsec: documenta que L2TP puede protegerse con IPsec; ambos cumplen funciones diferentes y no son alternativas equivalentes en todas las capas.'),
    src(a1,'BOE-A-2025-25938, anexo I, tema 108: redes de telecomunicaciones, interconexión y protocolos.'),
    src(a2,'BOE-A-2025-26262, anexo IX, tema IV.12: seguridad en redes, acceso remoto y redes privadas virtuales.'),
    src('https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk','ITIC Academy, bloque 48, Seguridad de redes y aplicaciones (2026): cotejo curricular de VPN/IPsec; la distinción de capas se verifica con las RFC del IETF.')
  ],{texto:'El operador no ofrece un servicio VPN de capa 2. Si la organización necesita crear un túnel seguro de capa IP entre sus extremos sobre las líneas de datos contratadas, ¿qué tecnología de las siguientes es adecuada?',opciones:[
    'PPTP.','L2TP sin IPsec.','TDEA.','IPsec.'
  ],respuesta_correcta:3},'Se conserva D y se precisa que se pregunta por un túnel seguro de capa IP. IPsec aporta servicios de seguridad a IP y admite modo túnel; L2TP es un protocolo de túnel de capa 2 y, cuando se usa de forma segura, suele combinarse con IPsec. TDEA es un algoritmo de cifrado, no una tecnología VPN.','corregida'],

  [6783,[63,64],['II-5','III-15'],['Apache Cassandra','column family','familia de columnas','CQL 3','NoSQL','tabla'],[
    src('https://cassandra.apache.org/_/glossary.html','Apache Cassandra Glossary: column family es un contenedor de filas similar a una tabla relacional; se denomina table en CQL 3.'),
    src('https://cassandra.apache.org/doc/latest/cassandra/developing/cql/cql_singlefile.html','Apache Cassandra, CQL v3: describe el modelo de tablas, filas y columnas, y conserva COLUMNFAMILY como alias histórico en determinadas sentencias.'),
    src(a1,'BOE-A-2025-25938, anexo I, temas 63–64: sistemas gestores de bases de datos y modelo relacional.'),
    src(a2,'BOE-A-2025-26262, anexo IX, tema II.5: sistemas gestores relacionales, orientados a objetos y NoSQL; tema III.15: Big Data y bases NoSQL.'),
    src('https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk','ITIC Academy, bloque 29, Bases de Datos (2026): cotejo de SGBD, modelo relacional y bases NoSQL, incluidos ejemplos de Cassandra; los términos históricos se contrastan con la documentación Apache.')
  ],{texto:'En la terminología histórica de Cassandra, ¿qué concepto designaba el contenedor de filas comparable, de manera aproximada, a una tabla relacional?',opciones:[
    'Familia de columnas (column family).','Colección.','Keyspace.','HyperTable.'
  ],respuesta_correcta:0},'Se conserva A y se especifica «terminología histórica»: la documentación de Cassandra explica que una column family contiene filas y es similar a una tabla relacional, pero en CQL 3 el término habitual es table. La equivalencia es terminológica y no implica que el modelo NoSQL sea relacional.','corregida'],

  [6784,[108],['IV-7'],['satélites','órbita baja','LEO','Starlink','banda ancha','SpaceX'],[
    src('https://www.starlink.com/technology','Starlink, tecnología: describe Starlink como una constelación de satélites en órbita terrestre baja para prestar Internet de banda ancha; la cobertura comercial depende del país y disponibilidad local.'),
    src('https://www.boe.es/buscar/doc.php?id=BOE-A-2025-16214','Estrategia de Seguridad Aeroespacial Nacional 2025, BOE-A-2025-16214: identifica Starlink como constelación de satélites y sitúa su órbita a unos 505 km.'),
    src(a1,'BOE-A-2025-25938, anexo I, tema 108: redes de telecomunicaciones, medios de transmisión e infraestructuras de acceso.'),
    src(a2,'BOE-A-2025-26262, anexo IX, tema IV.7: medios de transmisión guiados y no guiados, incluidos enlaces inalámbricos.'),
    src('https://drive.google.com/file/d/12Yp-woy5YBTwNecdydOqWB9CxkyrQZ10/view?usp=drivesdk','ITIC Academy, bloque 42, Redes y tecnologías de transporte (2026): cotejo contextual de redes de acceso y medios de transmisión; el nombre y la órbita se verifican con Starlink y BOE.')
  ],{texto:'¿Cuál de las siguientes es la constelación de satélites en órbita terrestre baja de SpaceX utilizada para ofrecer acceso a Internet de banda ancha?',opciones:[
    'Satlink.','Starbase.','Starlink.','Hispasat.'
  ],respuesta_correcta:2},'Se conserva C, pero se acota la pregunta a la constelación de SpaceX y se evita prometer cobertura literalmente mundial o disponibilidad en todo lugar. Starlink ofrece conectividad de banda ancha mediante satélites LEO; la disponibilidad comercial varía según el mercado.','corregida'],

  [6785,[130],['IV-16'],['videoconferencia','jitter buffer','retardo de reproducción','paquetes tardíos','QoS'],[
    src('https://www.cisco.com/c/dam/global/en_us/solutions/collateral/enterprise-networks/voice-and-video/quality-of-service-design-guide.pdf','Cisco, Quality of Service Design Guide: los extremos de voz usan jitter buffers adaptativos, dimensionados en unidades de tiempo (milisegundos), para absorber variación del retardo; el almacenamiento introduce retardo de reproducción.'),
    src('https://www.cisco.com/c/en/us/support/docs/voice/voice-quality/20371-troubleshoot-qos-voice.html','Cisco, Troubleshooting QoS Choppy Voice Issues: los paquetes que llegan después de la capacidad temporal del buffer se descartan; aumentar el margen de reproducción tolera más variación, pero añade retardo.'),
    src(a1,'BOE-A-2025-25938, anexo I, tema 130: sistemas de videoconferencia y dimensionamiento/calidad de servicio.'),
    src(a2,'BOE-A-2025-26262, anexo IX, tema IV.16: sistemas de videoconferencia, protocolos y calidad de servicio.'),
    src('https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk','ITIC Academy, bloque 50, Videoconferencia, SSO y trabajo colaborativo (2026): cotejo de videoconferencia y calidad de servicio; los efectos del jitter buffer se validan con documentación técnica Cisco.')
  ],{texto:'Sobre el buffer de jitter de un sistema de videoconferencia, señale la afirmación INCORRECTA.',opciones:[
    'Si su margen temporal es insuficiente, pueden producirse cortes o degradación de la llamada.','Aumentar su retardo de reproducción puede elevar el retardo extremo a extremo.','Su retardo de reproducción se especifica normalmente en milisegundos; indicar solo un número de paquetes no basta sin conocer el intervalo de paquetización.','Un margen mayor puede reducir la probabilidad de descartar paquetes que llegan tarde, aunque no evita la pérdida de red.'
  ],respuesta_correcta:2},'Se conserva C, pero se precisa que el tamaño del buffer se expresa como retardo temporal; un número de paquetes solo se convierte a tiempo con el intervalo de paquetización. Se acota D a pérdidas por llegada tardía para no confundirlas con pérdidas en la red. Un buffer mayor tolera más jitter, a costa de latencia.','corregida']
]});
