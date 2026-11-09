require('./aplicar-lote.cjs')({
  numero: '795',
  fecha: '2026-11-09',
  records: [
    [4296, [72], ['II-12'], ['ERP', 'CRM', 'sistemas complementarios', 'integración'], [
      { url: 'https://drive.google.com/file/d/1lkbdZvGxPTwyjhiOf6VsglMWYe4RI6sL/view?usp=drivesdk', referencia: 'ITIC Academy, Tema 072 (2026), test 4.1, pregunta 5: ERP y CRM se identifican como complementarios.' },
      { url: 'https://www.sap.com/products/erp/what-is-erp.html', referencia: 'SAP: ERP y CRM son sistemas distintos que pueden integrarse; sus módulos comparten procesos/datos para ofrecer una visión unificada.' },
      { url: 'https://learn.microsoft.com/en-us/dynamics365/guidance/business-processes/prospect-to-quote-manage-customer-relationships', referencia: 'Microsoft Learn: CRM gestiona las interacciones de ventas, servicio y marketing con clientes.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria TIC AGE 2025, programa A1, tema 72: sistemas CRM y ERP.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262', referencia: 'Convocatoria GSI AGE 2025, programa A2, tema II-12: atención a clientes y usuarios y CRM.' }
    ], null, 'ERP y CRM no son lo mismo ni tienen que ser dependientes: cubren funciones diferentes y suelen complementarse; una organización puede integrarlos para conectar datos y procesos. La pregunta se cualifica como referencia a sus funciones habituales y se conserva C como clave.', 'vigente'],
    [4297, [72], [], ['ERP', 'CRM', 'definición', 'gestión de clientes'], [
      { url: 'https://www.sap.com/products/erp/what-is-erp.html', referencia: 'SAP: ERP integra aplicaciones/módulos que gestionan procesos empresariales centrales y comparten datos.' },
      { url: 'https://learn.microsoft.com/en-us/dynamics365/guidance/business-processes/glossary', referencia: 'Microsoft Learn: CRM gestiona las interacciones con clientes potenciales y clientes durante el proceso de ventas para desarrollar relaciones, satisfacción y ventas.' },
      { url: 'https://drive.google.com/file/d/1lkbdZvGxPTwyjhiOf6VsglMWYe4RI6sL/view?usp=drivesdk', referencia: 'ITIC Academy, Tema 072 (2026), ERP/CRM: procesos, definiciones y diferencias funcionales.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria TIC AGE 2025, programa A1, tema 72.' }
    ], null, 'Se conserva la clave C: la opción reformulada define la gestión de información e interacciones de clientes, por lo que corresponde a CRM, no a ERP. ERP integra procesos centrales internos como finanzas, operaciones, fabricación, cadena de suministro y recursos humanos. Se elimina la descripción vaga que mezclaba estrategia de conocimiento y personalización.', 'corregida'],
    [4298, [72], [], ['ERP', 'LoadRunner', 'pruebas de rendimiento', 'software empresarial'], [
      { url: 'https://www.opentext.com/products/professional-performance-engineering?r=qal-pts', referencia: 'OpenText: Professional Performance Engineering (LoadRunner Professional) es software de pruebas de carga/rendimiento, no una solución ERP.' },
      { url: 'https://learn.microsoft.com/en-us/azure/sentinel/business-applications/solution-overview', referencia: 'Microsoft Learn distingue Dynamics 365 Customer Engagement (CRM) de Dynamics 365 Finance and Operations (ERP), documentando las familias de aplicaciones empresariales.' },
      { url: 'https://www.oracle.com/erp/', referencia: 'Oracle: Oracle E-Business Suite/Fusion Cloud ERP se ofrecen como productos del ámbito ERP.' },
      { url: 'https://www.sap.com/products/erp.html', referencia: 'SAP: cartera vigente de software ERP.' },
      { url: 'https://drive.google.com/file/d/1lkbdZvGxPTwyjhiOf6VsglMWYe4RI6sL/view?usp=drivesdk', referencia: 'ITIC Academy, Tema 072 (2026), soluciones comerciales ERP y ejemplos de productos.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria TIC AGE 2025, programa A1, tema 72.' }
    ], null, 'Se mantiene la clave B: LoadRunner es una familia comercial de herramientas de ingeniería de rendimiento/pruebas de carga, no un ERP. Se actualiza la marca a OpenText y se hace explícita la categoría funcional de las opciones Microsoft Dynamics, Oracle E-Business Suite y SAP para que no se confunda una familia empresarial amplia con productos ERP concretos.', 'corregida'],
    [4299, [72], ['II-12'], ['CRM', 'ERP', 'front-office', 'back-office', 'recursos humanos'], [
      { url: 'https://learn.microsoft.com/en-us/dynamics365/guidance/business-processes/prospect-to-quote-manage-customer-relationships', referencia: 'Microsoft Learn: ventas, servicio y marketing gestionan relaciones, cuentas, contactos e interacciones con clientes.' },
      { url: 'https://www.sap.com/products/erp/what-is-erp.html', referencia: 'SAP: módulos ERP abarcan finanzas, RR. HH., fabricación, cadena de suministro, ventas y compras; el ERP integra operaciones empresariales.' },
      { url: 'https://drive.google.com/file/d/1lkbdZvGxPTwyjhiOf6VsglMWYe4RI6sL/view?usp=drivesdk', referencia: 'ITIC Academy, Tema 072 (2026), diferencias y complementariedad CRM/ERP.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria TIC AGE 2025, programa A1, tema 72.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262', referencia: 'Convocatoria GSI AGE 2025, programa A2, tema II-12.' }
    ], null, 'La clasificación general en front-office/back-office no es una frontera absoluta: CRM cubre ventas, marketing y servicio y puede integrarse con operaciones. Para que exista una respuesta falsa inequívoca, se reformula B atribuyendo al CRM como función principal contabilidad general, finanzas y nóminas; esos procesos son característicos de ERP, mientras CRM gestiona relaciones e interacciones de clientes. Se conserva B como clave.', 'corregida'],
    [4300, [72], ['II-4', 'II-12'], ['CRM analítico', 'data warehouse', 'almacén de datos', 'inteligencia de negocio'], [
      { url: 'https://www.ibm.com/think/topics/data-warehouse', referencia: 'IBM: un data warehouse integra datos de varias fuentes —incluidas plataformas CRM— en un repositorio central optimizado para consultas y análisis/BI.' },
      { url: 'https://docs.oracle.com/en/database/oracle/oracle-database/18/dwhsg/introduction-data-warehouse-concepts.html', referencia: 'Oracle Database Data Warehousing Guide: la solución de almacén de datos puede incorporar ETL, análisis estadístico, informes, minería y herramientas de análisis de clientes.' },
      { url: 'https://drive.google.com/file/d/1lkbdZvGxPTwyjhiOf6VsglMWYe4RI6sL/view?usp=drivesdk', referencia: 'ITIC Academy, Tema 072 (2026), CRM analítico y explotación de información de clientes.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria TIC AGE 2025, programa A1, tema 72: sistemas CRM.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262', referencia: 'Convocatoria GSI AGE 2025, programa A2, tema II-4: almacenes de datos, BI y sistemas de apoyo a la decisión; tema II-12: CRM.' }
    ], null, 'Se conserva C, precisando que el data warehouse es tecnología de integración y explotación analítica de datos, no una herramienta exclusiva de CRM. Los sistemas CRM pueden alimentar el almacén junto con otras fuentes; su análisis ayuda a segmentar clientes y apoyar decisiones. Las otras opciones describen herramientas de operación/canales de servicio o una vista de atención, no el soporte analítico que se pregunta.', 'vigente']
  ],
  edits: {
    4296: { texto: 'Considerando sus funciones habituales, los sistemas ERP y CRM son:' },
    4297: { opcion: [2, 'Estrategia y conjunto de procesos para gestionar información e interacciones con clientes —captarla, organizarla y compartirla— y apoyar las actividades de marketing, ventas y servicio para mejorar la relación con ellos.'] },
    4298: {
      opcion: [0, 'Microsoft Dynamics 365 Finance y Supply Chain Management (soluciones ERP)']
    },
    4299: {
      texto: 'Indique la respuesta falsa en relación con los sistemas CRM (Customer Relationship Management) y ERP (Enterprise Resource Planning):',
      opcion: [1, 'Un CRM tiene como función principal la contabilidad general, la gestión financiera y las nóminas; ventas, marketing y atención al cliente corresponden al ERP.']
    },
    4300: { texto: '¿Qué tecnología se asocia con frecuencia a la integración y explotación analítica de datos de clientes en un CRM analítico?' }
  }
});
