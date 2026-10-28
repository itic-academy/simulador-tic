const aplicar = require('./aplicar-lote.cjs');

const records = [
  [
    2176, [65, 67], ['III-10', 'III-12'], ['JSP', 'Jakarta Server Pages', 'scriptlets', 'scripting elements', 'Java en servidor'],
    [
      { url: 'https://jakarta.ee/specifications/pages/4.0/jakarta-server-pages-spec-4.0.pdf', referencia: 'Jakarta Server Pages 4.0 Specification, sección 1.12.2: los scriptlets contienen fragmentos de código válidos en el lenguaje de scripting y se ejecutan al procesar la petición; la especificación recomienda separar lógica de presentación, sin eliminar la categoría.' },
      { url: 'https://jakarta.ee/learn/specification-guides/servlet-faces-and-server-pages-explained/', referencia: 'Eclipse Foundation/Jakarta EE, guía de Servlet, Faces y Server Pages: identifica `<% code %>` como scriptlet que incorpora código Java en una JSP y recomienda mantener la lógica de negocio en clases.' }
    ],
    'Jakarta Server Pages 4.0 Specification y guía oficial Jakarta EE',
    'Se conserva el concepto histórico y aún definido en la especificación: el elemento scriptlet `<% ... %>` permite incluir fragmentos de código Java en una página JSP. La especificación actual advierte que no es una buena práctica mezclar la lógica de negocio y la vista; la pregunta evalúa terminología, no una recomendación de diseño.',
    'corregida'
  ],
  [
    2177, [69], ['II-14'], ['software libre', 'software propietario', 'backup', 'NetBackup', 'licenciamiento'],
    [
      { url: 'https://www.bacula.org/', referencia: 'Bacula.org, edición Community: se presenta como software de copia abierto; distingue la edición comercial Bacula Enterprise.' },
      { url: 'https://backuppc.github.io/backuppc/', referencia: 'BackupPC, sitio del proyecto: software de backup de código abierto distribuido bajo licencia GPL.' },
      { url: 'https://www.amanda.org/download.php', referencia: 'Amanda, sitio del proyecto: se define como software libre y de código abierto, con licencias BSD/GPL.' },
      { url: 'https://www.cohesity.com/content/dam/cohesity/resource-assets/agreements-archive/netbackup-april-2026.pdf', referencia: 'Cohesity, Product Specific Terms for NetBackup: licencia NetBackup mediante licencias perpetuas o por suscripción, capacidades o métricas de uso; software propietario y sujeto a contrato.' },
      { url: 'https://www.cohesity.com/agreements/product-specific-terms/', referencia: 'Cohesity, Product-Specific Terms: mantiene NetBackup como software sujeto a condiciones de uso/licencia, no como proyecto de código abierto.' }
    ],
    'Sitios/licencias de Bacula Community, BackupPC y Amanda; condiciones de producto NetBackup de Cohesity',
    'La opción que no es de código abierto es NetBackup: su editor actual, Cohesity, lo distribuye bajo licencias comerciales perpetuas o de suscripción y términos de uso. Bacula Community, BackupPC y Amanda publican software fuente y licencias libres/abiertas. Se precisa Bacula Community para no confundirla con Bacula Enterprise, que es una edición comercial distinta.',
    'corregida'
  ],
  [
    2178, [70], ['III-5'], ['algoritmos genéticos', 'codificación real', 'cromosomas', 'parámetros', 'representación de conocimiento'],
    [
      { url: 'https://digital.library.adelaide.edu.au/items/a5021119-9b7e-4959-8799-d9413fccc44b', referencia: 'University of Adelaide repository, Real coded genetic algorithms for solving flexible job-shop scheduling problem: propone cromosomas representados por arrays de números reales como codificación específica de un algoritmo genético.' },
      { url: 'https://doi.org/10.21914/anziamj.v51i0.2776', referencia: 'Gaffney, Pearce y Green, Binary versus real coding for genetic algorithms: muestra que la codificación binaria o real es una decisión de diseño dependiente del problema, no una propiedad universal de todo algoritmo genético.' }
    ],
    'Estudio revisado sobre algoritmos genéticos con codificación real y artículo sobre elección de codificación',
    'El enunciado heredado generalizaba una codificación como si todo algoritmo genético la usara y trataba de forma imprecisa las redes neuronales como representación «simbólica». Se reformula la opción correcta para especificar un algoritmo genético real-coded aplicado a parámetros continuos: el cromosoma puede codificar un vector de valores reales. No se afirma que esa codificación sea universal; puede elegirse entre esquemas binarios, reales, permutaciones u otros según el problema.',
    'corregida'
  ],
  [
    2179, [81], ['I-6'], ['DNIe 3.0', 'NFC', 'identificación electrónica', 'smart cards'],
    [
      { url: 'https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_033', referencia: 'Portal oficial DNI electrónico, Qué son las Apps para móviles: el DNI 3.0 incorpora antena radiofrecuencia y NFC, que permite leer el chip aproximando un dispositivo compatible.' },
      { url: 'https://www.dnie.es/PortalDNIe/PRF1_Cons02.action?pag=REF_300', referencia: 'Portal oficial DNI electrónico, requisitos de uso: compara el DNIe de contacto con el chip de interfaz dual del DNI 3.0, que añade comunicación inalámbrica NFC; los lectores de contacto siguen estándares ISO 7816.' },
      { url: 'https://www.dnie.es/PortalDNIe/PRF1_Cons02.action?pag=REF_1001', referencia: 'Portal oficial DNI electrónico, conceptos básicos: confirma la coexistencia de DNIe y DNI 3.0 y los certificados de autenticación, firma y componente presentes en el chip.' }
    ],
    'Portal oficial del DNI electrónico de la Policía Nacional y FNMT',
    'La característica introducida en la generación DNI 3.0 fue la interfaz inalámbrica NFC mediante una antena de radiofrecuencia. ISO 7816, los certificados del chip y los perfiles X.509 no son la distinción que identifica esa generación frente al DNIe anterior. El enunciado queda anclado a la comparación de versiones descrita en el portal oficial.',
    'corregida'
  ],
  [
    2180, [63], ['II-4'], ['OLTP', 'procesamiento transaccional', 'operaciones diarias', 'bases de datos'],
    [
      { url: 'https://learn.microsoft.com/en-us/azure/well-architected/performance-efficiency/optimize-data-performance', referencia: 'Microsoft Learn, optimize data performance: OLTP gestiona transacciones individuales y tareas operativas del día a día, como pedidos, inventario y datos de clientes; OLAP se orienta a consultas analíticas, agregaciones e informes.' }
    ],
    'Microsoft Learn, arquitectura de datos: separación de cargas OLTP y OLAP',
    'OLTP (Online Transaction Processing) se utiliza para registrar y procesar transacciones operativas cotidianas. Las consultas complejas agregadas e informes ejecutivos corresponden normalmente a cargas analíticas/OLAP; esa diferencia hace inequívoca la opción sobre captura de operaciones diarias.',
    'vigente'
  ]
];

const edits = {
  2176: {
    texto: 'En Jakarta Server Pages (JSP), ¿cómo se denomina el elemento `<% ... %>` que inserta código Java ejecutado al procesar la petición?',
    respuesta_correcta: 2
  },
  2177: {
    texto: '¿Cuál de estas soluciones de backup no es de código abierto? Considere Bacula Community Edition, no la edición comercial Bacula Enterprise.',
    respuesta_correcta: 3
  },
  2178: {
    texto: 'En un algoritmo genético real-coded aplicado a un problema con parámetros continuos, ¿qué puede codificar cada cromosoma?',
    opciones: [
      'Un vector de valores reales que representa una solución candidata o sus parámetros.',
      'Necesariamente una fórmula lógica simbólica independiente del problema.',
      'Exclusivamente pesos de una red neuronal, aunque el problema no tenga relación con ella.',
      'La misma representación única obligatoria para todos los algoritmos genéticos.'
    ],
    respuesta_correcta: 0
  },
  2179: {
    texto: 'Frente al DNIe anterior, ¿qué nueva característica de comunicación incorporó el DNI 3.0?',
    respuesta_correcta: 1
  }
};

aplicar({ numero: '372', fecha: '2026-10-28', records, edits });
