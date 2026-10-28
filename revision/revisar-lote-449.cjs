const apply = require('./aplicar-lote.cjs');

const s = {
  bluetooth: {
    url: 'https://www.bluetooth.com/wp-content/uploads/Files/Specification/HTML/Core_v6.3/out/en/br-edr-controller/radio-physical-layer-specification.html',
    referencia: 'Bluetooth SIG, Bluetooth Core Specification v6.3, BR/EDR Radio Physical Layer Specification, §§1 y 3.1: Bluetooth funciona en la banda ISM no licenciada de 2,4 GHz; Basic Rate emplea GFSK. Enhanced Data Rate usa π/4-DQPSK u 8DPSK para parte de los paquetes, por lo que se acota la pregunta expresamente a Basic Rate.'
  },
  uml: {
    url: 'https://www.omg.org/spec/UML/2.5.1/PDF',
    referencia: 'Object Management Group, Unified Modeling Language (UML), versión formal 2.5.1, metamodelo de Associations: las propiedades shared y composite aggregation se especifican en los extremos de una asociación. Agregación y composición son formas de asociación, no generalización ni herencia.'
  },
  hvd: {
    url: 'https://eur-lex.europa.eu/eli/reg_impl/2023/138/oj?locale=es',
    referencia: 'Reglamento de Ejecución (UE) 2023/138 de la Comisión, vigente, que aplica la Directiva (UE) 2019/1024 y especifica los conjuntos de datos de alto valor. El anexo I de la Directiva enumera seis categorías temáticas: geoespacial; observación de la Tierra y medio ambiente; meteorología; estadística; empresas y propiedad de empresas; y movilidad. Matemáticas no figura entre ellas.'
  },
  cxf: {
    url: 'https://cxf.apache.org/',
    referencia: 'Apache CXF, sitio oficial: framework de servicios para desarrollar servicios con APIs frontend como JAX-WS y JAX-RS y protocolos SOAP, XML/HTTP y REST. El nombre reconocido es CXF, no CXE.'
  },
  axis: {
    url: 'https://axis.apache.org/axis/java/user-guide',
    referencia: 'Apache Axis User Guide: Axis es un motor/framework SOAP con soporte de servicios web y WSDL.'
  },
  jakarta: {
    url: 'https://jakarta.ee/specifications/xml-web-services/4.0/',
    referencia: 'Eclipse Foundation, Jakarta XML Web Services (JAX-WS), especificación de servicios web XML para Jakarta EE.'
  },
  strategy: {
    url: 'https://www.dsn.gob.es/sites/default/files/documents/Estrategia%20Nacional%20de%20Ciberseguridad%202019.pdf',
    referencia: 'Departamento de Seguridad Nacional, Estrategia Nacional de Ciberseguridad 2019, capítulo 5, líneas de acción I–VII: recoge reforzar capacidades ante amenazas del ciberespacio; garantizar seguridad y resiliencia de activos estratégicos; impulsar la ciberseguridad de ciudadanos y empresas; desarrollar cultura; y otras líneas. No establece como línea la creación de un mando único.'
  }
};

const records = [
  [2556, [114], ['IV-11'], ['Bluetooth', 'BR/EDR', 'Basic Rate', 'GFSK', 'banda ISM 2,4 GHz'], [s.bluetooth], '', 'Se acota el reactivo a Bluetooth clásico BR/EDR y a su Basic Rate: la especificación Bluetooth SIG define GFSK para este modo. Bluetooth usa espectro ISM de 2,4 GHz; EDR añade π/4-DQPSK u 8DPSK en parte del paquete, de modo que una afirmación general sin distinguir modos sería imprecisa. A1-114/A2-IV-11.'],
  [2557, [89], ['III-9'], ['UML', 'diagrama de clases', 'asociación', 'agregación', 'composición'], [s.uml], '', 'En UML 2.5.1, agregación compartida y composición (agregación compuesta) son variantes de asociación expresadas mediante la propiedad de agregación del extremo asociado. Se reemplaza la opción genérica «relación» por «asociación», que es el término preciso, y se distinguen de generalización/herencia. A1-89/A2-III-9.'],
  [2558, [31], ['I-9'], ['Directiva UE 2019/1024', 'Reglamento UE 2023/138', 'datos de alto valor', 'datos abiertos', 'conjuntos de datos'], [s.hvd], '', 'La lista jurídica de categorías HVD contiene seis temas: geoespacial; observación de la Tierra y medio ambiente; meteorología; estadística; empresas y propiedad de empresas; y movilidad. «Matemáticas» no es una categoría. Se actualiza el enunciado para citar también el Reglamento de Ejecución (UE) 2023/138, vigente, que concreta los conjuntos de alto valor. A1-31/A2-I-9.'],
  [2559, [65], ['III-12'], ['servicios web', 'Apache Axis', 'Axis2', 'JAX-WS', 'Apache CXF', 'siglas'], [s.axis, s.jakarta, s.cxf], '', 'El reactivo original empleaba «CXE», que puede ser una errata por Apache CXF y hacía ambigua la respuesta. Se formula ahora sobre nombres reconocidos tal como están escritos: Apache Axis, JAX-WS y Axis2 son tecnologías de servicios web; Apache CXF es el nombre del framework Apache, no «CXE». La clave identifica el nombre incorrecto, sin afirmar que CXF no se use. A1-65/A2-III-12.'],
  [2560, [127], ['II-13'], ['Estrategia Nacional de Ciberseguridad', 'Estrategia 2019', 'líneas de acción', 'mando único', 'DSN'], [s.strategy], '', 'Se especifica la Estrategia Nacional de Ciberseguridad 2019, fuente del listado clásico de siete líneas de acción. Esta incluye reforzar capacidades frente a amenazas, proteger activos estratégicos, impulsar la ciberseguridad ciudadana y empresarial y desarrollar una cultura de ciberseguridad; establecer un mando único no figura como línea. A1-127/A2-II-13.']
];

const edits = {
  2556: {
    texto: 'En Bluetooth clásico BR/EDR, ¿qué modulación se utiliza para transmitir el modo Basic Rate?',
    opciones: ['OFDM.', 'APSK.', 'GFSK.', 'QAM-256.'],
    respuesta_correcta: 2
  },
  2557: {
    texto: 'En UML 2.5.1, ¿qué tipo de relación representan la agregación compartida y la composición entre clases?',
    opciones: ['Generalización.', 'Herencia.', 'Asociación.', 'Dependencia de realización.'],
    respuesta_correcta: 2
  },
  2558: {
    texto: '¿Cuál NO es una de las seis categorías temáticas de conjuntos de datos de alto valor enumeradas en la Directiva (UE) 2019/1024 y concretadas por el Reglamento de Ejecución (UE) 2023/138?',
    opciones: ['Geoespacial.', 'Matemáticas.', 'Meteorología.', 'Empresas y propiedad de empresas.'],
    respuesta_correcta: 1
  },
  2559: {
    texto: '¿Cuál de estos nombres, tal como está escrito, NO identifica una tecnología o framework de servicios web?',
    opciones: ['Apache Axis.', 'JAX-WS.', 'CXE.', 'Apache Axis2.'],
    respuesta_correcta: 2
  },
  2560: {
    texto: 'Según la Estrategia Nacional de Ciberseguridad 2019, ¿cuál de estas opciones NO figura entre sus líneas de acción?',
    opciones: ['Establecer un mando único en materia de ciberseguridad.', 'Reforzar las capacidades ante las amenazas provenientes del ciberespacio.', 'Garantizar la seguridad y resiliencia de los activos estratégicos para España.', 'Impulsar la ciberseguridad de ciudadanos y empresas.'],
    respuesta_correcta: 0
  }
};

apply({ numero: '449', fecha: '2026-10-28', records, edits });
