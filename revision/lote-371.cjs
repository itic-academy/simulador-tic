const aplicar = require('./aplicar-lote.cjs');

const records = [
  [
    2171, [56], ['IV-5'], ['RAID 0', 'striping', 'distribución de bloques', 'almacenamiento'],
    [
      { url: 'https://www.ibm.com/docs/en/ds8000/10.0.0?topic=implementation-raid-10-overview', referencia: 'IBM Documentation, RAID 10 overview: explica que RAID 0 distribuye (stripe) los datos de volumen entre varios discos; la redundancia procede del mirroring añadido por RAID 10, no del striping por sí solo.' },
      { url: 'https://www.ibm.com/docs/en/flashsystem-5x00?topic=STHGUJ%2Fcom.ibm.flashsystem.5200.8401.doc%2Fmlt_glossary.htm', referencia: 'IBM Storage glossary: define data striping como técnica de distribución de datos entre discos y distingue RAID 0 de la paridad y de la protección de datos.' }
    ],
    'IBM Storage Documentation, conceptos RAID y striping',
    'Se acota la definición al nivel RAID 0 para distinguir distribución de datos de cálculo de paridad: RAID 0 reparte las unidades de datos por varios discos y permite atender E/S en paralelo, pero no incorpora redundancia ni tolerancia a fallos. Los niveles con paridad también pueden usar striping, por lo que la palabra aislada no significa «sin paridad» en todos los RAID.',
    'corregida'
  ],
  [
    2172, [72], ['II-12'], ['CRM', 'centro de contacto', 'servicio de campo', 'experiencia de cliente', 'canales de venta'],
    [
      { url: 'https://learn.microsoft.com/en-us/dynamics365/guidance/business-processes/service-to-cash-introduction', referencia: 'Microsoft Learn, service-to-deliver: automatización y mejor gestión de recursos pueden mejorar la atención, satisfacción y los ingresos, y reducir costes asociados a prestar servicio y cobrar.' },
      { url: 'https://learn.microsoft.com/en-us/dynamics365/field-service/overview', referencia: 'Microsoft Learn, Dynamics 365 Field Service: programación y optimización del servicio in situ reducen desplazamientos, kilometraje y tiempos improductivos; incluye gestión coordinada de solicitudes, clientes y técnicos.' },
      { url: 'https://www.oracle.com/cx/what-is-crm/implementation/', referencia: 'Oracle, CRM implementation: una implantación bien diseñada puede mejorar los procesos de ventas, la información disponible, la satisfacción y los indicadores comerciales; advierte que los resultados dependen de objetivos y ejecución.' }
    ],
    'Microsoft Learn, servicio al cliente y Field Service; Oracle, implantación de CRM',
    'Se evita presentar beneficios potenciales como resultados garantizados. Con CRM correctamente diseñada e integrada, pueden reducirse costes de atención y servicio y mejorar satisfacción, conversión y coordinación multicanal; la reducción de costes del trabajo in situ es coherente con las capacidades de programación y optimización de Field Service. Por eso, el aumento de esos costes no es una ventaja. Se ha sustituido la afirmación absoluta sobre «todos los canales» por una mejora potencial de coordinación y resultados.',
    'corregida'
  ],
  [
    2173, [63], ['II-5', 'III-4'], ['transacciones', 'ACID', 'atomicidad', 'consistencia', 'aislamiento', 'durabilidad'],
    [
      { url: 'https://learn.microsoft.com/en-us/windows/win32/cossdk/acid-properties', referencia: 'Microsoft Learn, ACID Properties: desarrolla atomicity, consistency, isolation y durability y define el comportamiento esperado de las transacciones.' },
      { url: 'https://learn.microsoft.com/en-us/sql/relational-databases/sql-server-transaction-locking-and-row-versioning-guide', referencia: 'Microsoft Learn, SQL Server transaction locking and row versioning: presenta las cuatro propiedades de una transacción como atomicidad, consistencia, aislamiento y durabilidad.' }
    ],
    'Microsoft Learn, propiedades ACID de transacciones',
    'Se corrige la traducción no estándar «persistencia» por «durabilidad», término español habitual para durability. ACID significa atomicidad, consistencia, aislamiento y durabilidad: una transacción completa o no produce efectos parciales, conserva las reglas de consistencia, controla la interacción concurrente y mantiene lo confirmado ante fallos según las garantías del gestor.',
    'corregida'
  ],
  [
    2174, [61], ['II-2'], ['Windows Server', 'NFS', 'File and Storage Services', 'File and iSCSI Services'],
    [
      { url: 'https://learn.microsoft.com/en-us/windows-server/storage/nfs/deploy-nfs', referencia: 'Microsoft Learn, Deploy Network File System, aplicable a Windows Server 2016–2025: el asistente instala Server for NFS bajo File and Storage Services > File and iSCSI Services.' }
    ],
    'Microsoft Learn, despliegue del servicio NFS en Windows Server',
    'Se delimita la jerarquía solicitada: Server for NFS es un servicio de rol dentro de File and iSCSI Services, que a su vez pertenece al rol File and Storage Services. Entre las opciones dadas, «Servicios de archivos y almacenamiento» es el rol que lo contiene; no se confunde el nombre del rol con el servicio NFS concreto.',
    'corregida'
  ],
  [
    2175, [66], ['III-11'], ['.NET Framework', 'ECMA-335', 'CLI', 'CLR', 'BCL', 'CIL'],
    [
      { url: 'https://ecma-international.org/publications-and-standards/standards/ecma-335/', referencia: 'Ecma International, ECMA-335 Common Language Infrastructure: estándar que especifica infraestructura, sistema de tipos, VES y CIL para ejecutar aplicaciones producidas desde distintos lenguajes.' },
      { url: 'https://dev.ecma-international.org/wp-content/uploads/ECMA-335_6th_edition_june_2012.pdf', referencia: 'ECMA-335, sexta edición, apartado I.2 Conformance: un compilador que genera CIL y declara conformidad produce archivos y CIL conforme a los requisitos del estándar.' }
    ],
    'Ecma International, ECMA-335 Common Language Infrastructure (CLI)',
    'Se corrige una imprecisión conceptual: el estándar de conformidad pertinente es CLI (ECMA-335), no el CLR, que es una implementación/entorno de ejecución, ni BCL, que designa bibliotecas. Técnicamente quien declara conformidad es el compilador o la implementación del lenguaje que genera CIL conforme a ECMA-335; no se afirma que el lenguaje como tal sea una implementación.',
    'corregida'
  ]
];

const edits = {
  2171: {
    texto: 'En RAID 0, ¿qué describe el striping de datos?',
    opciones: [
      'Un procedimiento de comprobación que detecta errores mediante datos de redundancia.',
      'La distribución de bloques de datos en bandas entre varios discos para atender operaciones de E/S en paralelo.',
      'El cálculo y almacenamiento de valores de paridad para reconstruir datos.',
      'La duplicación de todos los datos en otro disco.'
    ],
    respuesta_correcta: 1
  },
  2172: {
    texto: 'Una solución CRM correctamente diseñada e integrada puede contribuir a varias mejoras. ¿Cuál NO es una ventaja operativa potencial?',
    opciones: [
      'Reducir costes de atención en el centro de contacto mediante mejor información, automatización o autoservicio.',
      'Mejorar potencialmente la satisfacción de los clientes y las tasas de conversión de ventas.',
      'Mejorar potencialmente la coordinación y los resultados comerciales entre canales directos, indirectos y socios.',
      'Aumentar los costes de las operaciones del servicio in situ.'
    ],
    respuesta_correcta: 3
  },
  2173: {
    texto: 'En una transacción, ¿qué significan las siglas ACID?',
    opciones: [
      'Aislamiento, capacidad, autenticidad y persistencia.',
      'Atomicidad, consistencia, aislamiento y durabilidad.',
      'Atomicidad, confidencialidad, aislamiento y privacidad.',
      'Ninguna de las anteriores.'
    ],
    respuesta_correcta: 1
  },
  2174: {
    texto: 'En Windows Server, ¿dentro de qué rol de servidor se agrega el servicio de rol Server for NFS?',
    respuesta_correcta: 1
  },
  2175: {
    texto: 'Si un compilador genera CIL conforme al estándar ECMA-335 para producir aplicaciones .NET interoperables, ¿a qué especificación de la CLI se ajusta?',
    respuesta_correcta: 3
  }
};

aplicar({ numero: '371', fecha: '2026-10-28', records, edits });
