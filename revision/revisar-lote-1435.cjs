const apply = require('./aplicar-lote.cjs');

const records = [
  [7476, [80], ['I-6', 'IV-12'], ['AdES', 'XAdES', 'XAdES-A', 'firma electrónica', 'sello de tiempo', 'archivo'], [
    { url: 'https://www.etsi.org/deliver/etsi_ts/101700_101799/101903/01.02.02_60/ts_101903v010202p.pdf', referencia: 'ETSI TS 101 903 v1.2.2, XAdES, §B.3: la forma de archivo XAdES-A incorpora datos de validación y uno o más ArchiveTimeStamp; los sellos sucesivos protegen el material archivado y pueden añadirse al debilitarse algoritmos/medios criptográficos.' },
    { url: 'https://www.etsi.org/deliver/etsi_ts/103100_103199/103171/02.01.01_60/ts_103171v020101p.pdf', referencia: 'ETSI TS 103 171, XAdES Baseline Profile: el nivel LTA incorpora uno o varios ArchiveTimeStamp al nivel LT para conservar la validabilidad a largo plazo; nomenclatura actual del perfil base.' }
  ], {
    texto: 'En la nomenclatura histórica de perfiles XAdES, ¿qué forma incorpora datos de validación archivística y sellos de tiempo de archivo que pueden renovarse periódicamente?',
    opciones: ['XAdES-T (con sello de tiempo de firma).', 'XAdES-XL (con datos de validación a largo plazo).', 'XAdES-A (forma archivística con ArchiveTimeStamp).', 'XAdES-C (con referencias completas a datos de validación).'], respuesta_correcta: 2
  }, 'Corregida C. La nomenclatura heredada XAdES-A identifica la forma archivística con uno o más ArchiveTimeStamp, que pueden repetirse a medida que se debilita la protección anterior. Los perfiles base actuales expresan la conservación archivística mediante el nivel LTA; se explicita que la pregunta se refiere a la nomenclatura histórica para no presentarla como el único perfil contemporáneo.', 'corregida'],

  [7477, [80], ['I-6', 'IV-12'], ['PKCS#7', 'CMS', 'EnvelopedData', 'sobre digital', 'criptografía'], [
    { url: 'https://www.rfc-editor.org/rfc/rfc2315', referencia: 'IETF RFC 2315, PKCS #7: define sintaxis de mensajes criptográficos y tipos de contenido, entre ellos EnvelopedData para contenido cifrado dirigido a destinatarios. PKCS#7 no se limita a un único tipo de sobre.' },
    { url: 'https://www.rfc-editor.org/rfc/rfc5652', referencia: 'IETF RFC 5652, Cryptographic Message Syntax (CMS), sucesor de PKCS#7: especifica EnvelopedData y el procesamiento de contenido cifrado para uno o más destinatarios.' },
    { url: 'https://www.rfc-editor.org/rfc/rfc5958', referencia: 'IETF RFC 5958, Asymmetric Key Packages: describe la estructura de paquete de clave privada asimétrica, diferenciándola de CMS EnvelopedData.' }
  ], {
    texto: '¿Qué tipo de contenido de PKCS #7/CMS representa un sobre digital con contenido cifrado destinado a uno o más destinatarios?',
    opciones: ['EnvelopedData.', 'Una interfaz de acceso a dispositivos de almacenamiento criptográfico (PKCS #11).', 'Un paquete portable de clave privada asimétrica (PKCS #8/Asymmetric Key Package).', 'X.509 SubjectPublicKeyInfo sin contenido encapsulado.'], respuesta_correcta: 0
  }, 'Corregida A. PKCS #7 (sustituido en gran medida por CMS, RFC 5652) define varios tipos de contenido, uno de ellos EnvelopedData, utilizado para encapsular contenido cifrado y la información de claves para destinatarios. El enunciado se acota a ese tipo; PKCS #7 en conjunto no se reduce solo al sobre. PKCS #11 trata interfaces a dispositivos y los formatos de clave privada pertenecen a otras especificaciones.', 'corregida'],

  [7478, [85], ['II-3', 'III-5'], ['Ethereum', 'Go', 'EVM', 'Solidity', 'Serpent', 'blockchain'], [
    { url: 'https://go.dev/doc/faq', referencia: 'Go FAQ oficial: Go se desarrolló en Google; su sintaxis básica pertenece principalmente a la familia C, con influencias de Pascal/Modula/Oberon y CSP, y no está inspirada en la sintaxis de Java.' },
    { url: 'https://ethereum.org/developers/docs/evm/', referencia: 'ethereum.org, Ethereum Virtual Machine: los clientes de ejecución implementan la EVM, que aplica el estado de la cadena; no se afirma que toda clase de nodo ejecute indistintamente una EVM.' },
    { url: 'https://ethereum.org/developers/docs/nodes-and-clients/', referencia: 'ethereum.org, Nodes and clients: distingue clientes de ejecución y consenso y sus responsabilidades; las implementaciones de cliente pueden estar escritas en varios lenguajes.' },
    { url: 'https://docs.soliditylang.org/en/latest/introduction-to-smart-contracts.html', referencia: 'Solidity documentation, Introduction to Smart Contracts: los lenguajes de contratos inteligentes de Ethereum son Turing-completos y Solidity es el lenguaje moderno de alto nivel documentado; Serpent es histórico/obsoleto, no se recomienda para desarrollo nuevo.' }
  ], {
    texto: '¿Qué afirmación es falsa sobre Go y Ethereum?',
    opciones: [
      'Solidity se emplea para escribir contratos inteligentes; Go y C++ también se usan en implementaciones de clientes, y existen clientes escritos en Java.',
      'Go fue creado en Google y su sintaxis básica está inspirada principalmente en Java.',
      'Los clientes de ejecución de Ethereum implementan la EVM para ejecutar transiciones de estado de la cadena.',
      'Solidity y el lenguaje histórico Serpent se diseñaron para expresar contratos inteligentes con capacidad computacional general.'
    ], respuesta_correcta: 1
  }, 'Corregida B. Go nació en Google, pero su FAQ oficial describe su sintaxis como perteneciente principalmente a la familia C, junto con influencias de Pascal/Modula/Oberon y lenguajes CSP; no está inspirada principalmente en Java. Se acota la afirmación EVM a clientes de ejecución (no a cualquier tipo de nodo) y se presenta Serpent como lenguaje histórico, no como recomendación vigente.', 'corregida'],

  [7479, [86], ['III-1', 'III-2'], ['cascada', 'ciclo de vida', 'integración', 'CASE', 'riesgos'], [
    { url: 'https://swehb.nasa.gov/spaces/SWEHBVB/pages/32604451/SWE-019+Software+Life+Cycle', referencia: 'NASA Software Engineering Handbook SWE-019: describe modelos de ciclo de vida, fases de cascada, prototipado y análisis de riesgos propio del modelo espiral; ayuda a diferenciar modelos/procesos de técnicas de implementación y pruebas.' },
    { url: 'https://voyager.gsfc.nasa.gov/Library/Software_Guide_HSTX.pdf', referencia: 'NASA Goddard Software Engineering Guidebook, §3-2: presenta el ciclo de vida y fases del modelo en cascada, incluida codificación y pruebas unitarias, como actividades de fase; el orden de integración de módulos es una estrategia de implementación/prueba, no una modificación del modelo de proceso.' }
  ], {
    texto: 'Si se pregunta por modificaciones del proceso secuencial en cascada —no por técnicas de implementación o prueba dentro de sus fases—, ¿cuál de estas opciones pertenece a otro nivel de decisión?',
    opciones: [
      'Aplicar herramientas CASE para apoyar actividades de análisis, diseño o construcción.',
      'Codificar e integrar primero módulos de bajo nivel mediante una estrategia ascendente de implementación y pruebas.',
      'Solapar determinadas fases, como en variantes de cascada con fases concurrentes.',
      'Incorporar análisis explícito de riesgos y de coste-beneficio para decidir sobre el ciclo de vida.'
    ], respuesta_correcta: 1
  }, 'Corregida B. El original llamaba «innovación del modelo» a varias medidas heterogéneas y dejaba la respuesta dependiente de cómo se clasificara el desarrollo bottom-up. Se explicita ahora el criterio: las herramientas CASE, el solapamiento de fases y la gestión de riesgos son cambios/apoyos al proceso; codificar e integrar módulos de abajo arriba es una estrategia de implementación y pruebas dentro de las fases, no un cambio del modelo de ciclo de vida.', 'corregida'],

  [7480, [35], ['III-2'], ['planificación estratégica', 'objetivos', 'análisis interno', 'alternativas', 'reestructuración'], [
    { url: 'https://assets.publishing.service.gov.uk/media/57a08975ed915d622c00021b/EoD_Topic_Guide_Infrastructure_Maintenance_June2015.pdf', referencia: 'UK Department for International Development, Topic Guide: Infrastructure Maintenance, sección Strategic planning: el ciclo comprende diagnóstico de situación, objetivos/resultados, opciones estratégicas, selección e implementación; una reestructuración organizativa puede ser una intervención o resultado, no una fase analítica/formulativa de ese ciclo.' },
    { url: 'https://www.gov.uk/government/publications/effective-practice-in-strategic-planning-in-further-education/guide-to-effective-practice-in-strategic-planning-in-further-education', referencia: 'UK Department for Education, Guide to effective practice in strategic planning: presenta análisis de contexto (incluida metodología SWOT), objetivos estratégicos y planes/estrategias de apoyo; la reestructuración se trata como cuestión organizativa a abordar, no como fase estándar de formulación.' }
  ], {
    texto: 'En un ciclo de planificación estratégica que incluye análisis de situación, formulación de objetivos y evaluación/selección de alternativas, ¿cuál de estas opciones es una posible decisión organizativa y no una fase del proceso de planificación?',
    opciones: [
      'Formular los objetivos organizacionales.',
      'Analizar fortalezas y limitaciones internas de la organización.',
      'Reestructurar la organización.',
      'Formular y comparar alternativas estratégicas.'
    ], respuesta_correcta: 2
  }, 'Corregida C. El original mezclaba una lista genérica de etapas y acciones posibles. Se acota a fases del análisis y formulación estratégica: definir objetivos, analizar capacidades internas y formular opciones son actividades de planificación; reestructurar puede resultar de una decisión estratégica, pero es una intervención organizativa, no una fase universal del proceso.', 'corregida']
];

apply({ numero: '1435', fecha: '2026-11-16', records });
