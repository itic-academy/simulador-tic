const aplicar = require('./aplicar-lote.cjs');

const records = [
  [
    2181, [63], ['II-4'], ['data warehouse', 'OLAP', 'OLTP', 'ETL', 'almacén de datos'],
    [
      { url: 'https://learn.microsoft.com/en-us/azure/architecture/data-guide/relational-data/online-analytical-processing', referencia: 'Microsoft Learn, Online analytical processing: diferencia las bases transaccionales OLTP de los repositorios OLAP, describe los almacenes de datos, el modelado multidimensional y su optimización para consultas analíticas.' },
      { url: 'https://learn.microsoft.com/en-us/azure/architecture/data-guide/relational-data/etl', referencia: 'Microsoft Learn, Extract, transform, load (ETL): sitúa los procesos ETL en las arquitecturas de integración y analítica de datos.' }
    ],
    'Microsoft Learn, Azure Architecture Center: OLTP/OLAP y ETL en arquitecturas analíticas',
    'El original confundía un data warehouse con todos los componentes posibles de la solución. Se acota a una arquitectura analítica separada: el motor OLTP mantiene las transacciones del sistema operacional de origen; ETL, la explotación analítica y el almacén OLAP forman la cadena de integración/consulta. No se afirma que los productos de data warehouse carezcan de cualquier gestión transaccional interna.',
    'corregida'
  ],
  [
    2182, [72], ['II-12'], ['CRM', 'ERP', 'facturación', 'libro mayor', 'gestión de clientes'],
    [
      { url: 'https://learn.microsoft.com/en-us/dynamics365/sales/overview', referencia: 'Microsoft Learn, Dynamics 365 Sales: CRM de ventas ofrece gestión de cuentas/contactos, campañas, segmentación y seguimiento del ciclo comercial.' },
      { url: 'https://learn.microsoft.com/en-us/dynamics365/sales', referencia: 'Microsoft Learn, documentación de Dynamics 365 Sales: incluye gestión de oportunidades, presupuestos, pedidos e incluso facturas; por ello, la facturación genérica no puede afirmarse como función ausente de todo CRM.' },
      { url: 'https://learn.microsoft.com/en-us/dynamics365/guidance/business-processes/order-to-cash-invoice-sales-orders-overview', referencia: 'Microsoft Learn, Dynamics 365 Finance: contabilizar facturas de clientes en cuentas a cobrar y en el libro mayor es un proceso de gestión financiera/ERP.' }
    ],
    'Microsoft Learn, Dynamics 365 Sales y Dynamics 365 Finance',
    'El enunciado original era demasiado absoluto: algunos CRM comerciales gestionan facturas u órdenes de venta. Se cambia la distinción a funciones primarias de CRM frente a contabilidad financiera ERP: la contabilización en el libro mayor corresponde a la gestión financiera, aunque un CRM pueda crear o integrar documentos de factura.',
    'corregida'
  ],
  [
    2183, [63, 66], ['II-5', 'III-11'], ['ADO.NET', 'DataSet', 'proveedor de datos', 'DataAdapter', 'conexión'],
    [
      { url: 'https://learn.microsoft.com/en-us/dotnet/framework/data/adonet/ado-net-overview', referencia: 'Microsoft Learn, ADO.NET overview: diferencia los proveedores de datos para conectar/ejecutar comandos de los objetos DataSet que representan datos independientemente del proveedor.' },
      { url: 'https://learn.microsoft.com/en-us/dotnet/framework/data/adonet/dataadapters-and-datareaders', referencia: 'Microsoft Learn, DataAdapters and DataReaders: el DataAdapter usa Connection y Command del proveedor y rellena tablas en un DataSet.' }
    ],
    'Microsoft Learn, arquitectura y componentes ADO.NET',
    'La respuesta sigue siendo DataSet, pero se formula con precisión: forma parte de ADO.NET, aunque no de un proveedor de datos específico. Connection, Command y DataAdapter son componentes proporcionados por las implementaciones de proveedor; el DataSet mantiene una representación desconectada e independiente de la fuente.',
    'corregida'
  ],
  [
    2184, [65], ['II-9'], ['JScript', 'Windows Script Host', 'lenguajes de script', 'JavaScript'],
    [
      { url: 'https://learn.microsoft.com/en-us/windows/win32/com/using-com-objects-in-windows-script-host', referencia: 'Microsoft Learn, Using COM Objects in Windows Script Host: el host de scripting de Windows incluye los motores ActiveX de VBScript y JScript.' },
      { url: 'https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/wscript', referencia: 'Microsoft Learn, wscript: Windows Script Host es el entorno de ejecución de scripts de Windows y admite extensiones de host y distintos motores.' }
    ],
    'Microsoft Learn, Windows Script Host y motor JScript',
    'La afirmación de que JScript «no funciona en Linux» era demasiado amplia y dependía de qué host/implementación se considerase. Se reformula como una pregunta verificable sobre Windows Script Host: Microsoft documenta JScript como uno de sus motores incorporados junto con VBScript. No se equipara sin más JScript con todos los motores JavaScript multiplataforma.',
    'corregida'
  ],
  [
    2185, [65], ['II-6'], ['procesamiento cooperativo', 'cliente-servidor', 'procesamiento distribuido'],
    [
      { url: 'https://docs.oracle.com/cd/A59447_01/nt_804ee/doc/network.804/a48385/ch1.htm', referencia: 'Oracle SQL*Net, introducción al procesamiento distribuido: describe el procesamiento cooperativo como interacción entre cliente y servidores para completar una transacción distribuida; no establece la taxonomía de las cuatro opciones de esta pregunta.' },
      { url: 'https://public.dhe.ibm.com/s390/zos/racf/pdf/r99_rrsf_appc.pdf', referencia: 'IBM, Cooperative Processing, pp. 1–4: define la técnica como implementación de funciones de aplicación en dos o más plataformas; no clasifica «multiple server», cooperación de procesos paralelos, cooperación de bases de datos y cooperación de balanceadores como categorías excluyentes.' }
    ],
    'Oracle SQL*Net y material técnico IBM sobre procesamiento cooperativo',
    'No se verifica la clave heredada. Las fuentes técnicas consultadas describen cooperación como división/coordinación de trabajo entre procesos o plataformas, pero no respaldan una lista canónica con las cuatro categorías de las opciones. «Cooperación de balanceadores» podría ser arquitectura de alta disponibilidad o distribución de carga, pero el enunciado no delimita el marco taxonómico ni la definición de «propio». Se conserva texto y clave originales y queda pendiente de aclaración o referencia al manual/temario del que se extrajo.',
    'pendiente_ambiguedad'
  ]
];

const edits = {
  2181: {
    texto: 'En una arquitectura de inteligencia de negocio con un data warehouse separado de los sistemas fuente, ¿qué elemento pertenece al sistema operacional de origen y no a la cadena ETL/OLAP del almacén analítico?',
    opciones: [
      'Un motor OLTP que registra las transacciones diarias del sistema operacional.',
      'Las herramientas de Extracción, Transformación y Carga que integran datos para su análisis.',
      'Las herramientas de explotación analítica de la información.',
      'El almacén analítico multidimensional OLAP.'
    ],
    respuesta_correcta: 0
  },
  2182: {
    texto: '¿Cuál de estas funciones corresponde primariamente al ERP financiero y no al núcleo de un CRM de ventas y atención al cliente?',
    opciones: [
      'Mantener una visión integrada del cliente para mejorar la atención y la comunicación directa.',
      'Diseñar campañas dirigidas a distintos segmentos de clientes.',
      'Gestionar la comunicación con clientes mediante distintos canales.',
      'Contabilizar las facturas en cuentas a cobrar y en el libro mayor financiero.'
    ],
    respuesta_correcta: 3
  },
  2183: {
    texto: '¿Cuál de estos componentes de ADO.NET es independiente de un proveedor de datos concreto y no forma parte del proveedor?',
    respuesta_correcta: 3
  },
  2184: {
    texto: '¿Qué motor de scripting incluye Microsoft Windows Script Host junto con VBScript?',
    respuesta_correcta: 3
  }
};

aplicar({ numero: '373', fecha: '2026-10-28', records, edits });
