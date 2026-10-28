const aplicar = require('./aplicar-lote.cjs');

const records = [
  [
    2166, [61], ['II-2'], ['Windows', 'gestión de memoria', 'paginación', 'swapping', 'fallos de página', 'sobrecarga'],
    [
      { url: 'https://learn.microsoft.com/en-us/troubleshoot/azure/virtual-machines/windows/azure-windows-vm-memory-issue', referencia: 'Microsoft Learn, Troubleshoot high memory issues: bajo presión de memoria el SO mueve páginas entre RAM y almacenamiento de paginación para atender la demanda de los procesos.' },
      { url: 'https://learn.microsoft.com/en-us/previous-versions/windows/desktop/xperf/hard-faults', referencia: 'Microsoft Learn, Hard Faults: un fallo duro requiere recuperar páginas desde disco en lugar de las páginas residentes en memoria, añadiendo operaciones de E/S.' }
    ],
    'Microsoft Learn, presión de memoria, paginación y fallos duros de página',
    'El enunciado original mezclaba quantum de CPU, throughput y swapping sin definir «overhead». Se reformula para preguntar por la sobrecarga causada por paginación: con mayor presión y más recuperaciones de páginas desde almacenamiento, aumentan las operaciones de E/S y el trabajo del sistema; no se formula una ley general que relacione swapping con cualquier tipo de overhead.',
    'corregida'
  ],
  [
    2167, [67], ['II-3'], ['Java Web Start', 'JNLP', 'sandbox', 'firma de código', 'múltiples versiones JRE', 'obsoleto'],
    [
      { url: 'https://docs.oracle.com/javase/8/docs/technotes/guides/javaws/developersguide/faq.html', referencia: 'Oracle Java Web Start FAQ: comprueba automáticamente si hay una versión más reciente y la descarga; las aplicaciones sin firma se ejecutan en un entorno restringido y seguro, y solo necesitan firma para acceso irrestricto.' },
      { url: 'https://docs.oracle.com/javase/tutorial/deployment/webstart/', referencia: 'Oracle Java Tutorials, Java Web Start: documenta portabilidad entre plataformas, selección de múltiples versiones simultáneas de Java y sandbox por defecto.' },
      { url: 'https://docs.oracle.com/en/java/javase/24/migrate/significant-changes-jdk-11.html', referencia: 'Oracle JDK Migration Guide: Java Web Start y el stack de despliegue fueron retirados del JDK 11.' }
    ],
    'Oracle Java Web Start FAQ, guía de despliegue y guía de migración de JDK 11',
    'La afirmación de que toda aplicación Web Start necesita firma para ejecutarse es la que no es aplicable: las aplicaciones sin firmar podían ejecutarse en un entorno restringido (sandbox); la firma era necesaria para solicitar acceso irrestricto y mejoraba la identificación de su autor. Los controles de seguridad de Java 7/8 podían bloquear aplicaciones sin firmar por defecto o requerir excepciones, por lo que no se debe generalizar que bastaba con descargarlas sin advertencias. Se marca histórica: Web Start se eliminó del JDK 11.',
    'historica'
  ],
  [
    2168, [64], ['II-5', 'III-4'], ['transacciones', 'aislamiento', 'lectura fantasma', 'concurrencia', 'predicate query'],
    [
      { url: 'https://www.postgresql.org/docs/current/transaction-iso.html', referencia: 'PostgreSQL Documentation, Transaction Isolation: define phantom read como repetir una consulta por predicado y obtener un conjunto distinto por cambios confirmados en otra transacción; SERIALIZABLE impide el fenómeno.' }
    ],
    'PostgreSQL Documentation, Transaction Isolation (documentación vigente)',
    'Se precisa que la segunda transacción confirma la inserción y que se repite la consulta por la misma condición. Si aparecen filas nuevas que satisfacen el predicado, es una lectura fantasma (phantom read), no una lectura sucia; la aparición concreta depende del nivel de aislamiento y de las garantías del SGBD.',
    'corregida'
  ],
  [
    2169, [61], ['II-2'], ['sistema operativo', 'gestión de memoria', 'memoria virtual', 'espacio de direcciones', 'asignación dinámica'],
    [
      { url: 'https://learn.microsoft.com/en-us/windows-hardware/drivers/gettingstarted/virtual-address-spaces', referencia: 'Microsoft Learn, Virtual Address Spaces: cada proceso de 32 o 64 bits tiene un espacio virtual propio y el sistema asigna páginas físicas según necesidades y restricciones.' },
      { url: 'https://learn.microsoft.com/en-us/windows/win32/memory/memory-management', referencia: 'Microsoft Learn, Memory Management: el sistema operativo proporciona a procesos funciones para reservar, confirmar, liberar y administrar memoria virtual.' }
    ],
    'Microsoft Learn, administración de memoria y espacios de direcciones virtuales',
    'Se sustituye la generalización «un buen sistema operativo» por una función verificable de un sistema generalista con memoria virtual: ofrece a los procesos mecanismos de asignación dinámica y gestiona el mapeo de memoria sin exigir al programa administrar directamente la memoria física. No se afirma que el SO determine por sí solo las necesidades lógicas de cada aplicación.',
    'corregida'
  ],
  [
    2170, [63, 66], ['II-5', 'III-11'], ['ADO.NET', '.NET Framework', 'SQL', 'XML', 'ActiveX Data Objects', 'proveedores de datos'],
    [
      { url: 'https://learn.microsoft.com/en-us/dotnet/framework/data/adonet/ado-net-overview', referencia: 'Microsoft Learn, ADO.NET Overview: acceso uniforme a orígenes SQL y XML, proveedores de datos .NET y DataSet integrado con clases XML; es el modelo administrado de acceso a datos de .NET, no el componente COM ADO.' }
    ],
    'Microsoft Learn, ADO.NET Overview',
    'La pregunta original no tenía una opción inequívocamente correcta: negaba soporte SQL y XML, mientras «corresponde a ActiveX Data Object» confundía ADO con ADO.NET. Microsoft describe ADO.NET como el modelo de acceso a datos administrado para .NET, con proveedores para SQL y otras fuentes, DataSet e integración con XML; ofrece funcionalidad similar a ADO basado en COM, pero no es ese mismo componente. Se reescribe una opción para recoger esa distinción.',
    'corregida'
  ]
];

const edits = {
  2166: {
    texto: 'En un sistema operativo con memoria virtual, si la presión de memoria obliga a recuperar con mayor frecuencia páginas desde el almacenamiento de paginación, ¿qué efecto cabe esperar?',
    opciones: [
      'Disminuye la sobrecarga, porque el acceso al almacenamiento sustituye al acceso a RAM sin coste adicional.',
      'Aumenta la sobrecarga por las operaciones adicionales de paginación y E/S.',
      'No cambia el trabajo del sistema operativo; solo afecta a la capacidad del disco.',
      'Ninguna de las anteriores.'
    ],
    respuesta_correcta: 1
  },
  2167: {
    texto: 'Sobre Java Web Start (tecnología retirada del JDK 11), ¿cuál de estas afirmaciones NO es correcta?',
    opciones: [
      'Permitía ejecutar aplicaciones Java en distintas plataformas cliente compatibles.',
      'Podía solicitar una versión concreta del entorno de ejecución Java, y varias versiones podían coexistir.',
      'Toda aplicación, incluso la limitada al sandbox, debía estar firmada para poder ejecutarse.',
      'Comprobaba si existían actualizaciones y podía descargar componentes actualizados desde el servidor.'
    ],
    respuesta_correcta: 2
  },
  2168: {
    texto: 'Durante una transacción, se consulta un conjunto de filas mediante un predicado. Otra transacción confirma una nueva fila que cumple ese predicado y, al repetir la consulta, aparece en el resultado. ¿Qué fenómeno de aislamiento describe?',
    respuesta_correcta: 2
  },
  2169: {
    texto: 'En un sistema operativo generalista con memoria virtual, ¿qué función de gestión de memoria se ofrece normalmente a los procesos?',
    opciones: [
      'Asignar a cada proceso una cantidad física fija desde el inicio, que nunca puede cambiar.',
      'Dejar que cada aplicación gestione por sí sola la RAM física y el trasiego con el disco.',
      'Proporcionar mecanismos de asignación dinámica y administrar los espacios virtuales y su correspondencia con memoria física.',
      'Reservar memoria únicamente para el sistema y limitar todas las aplicaciones a una cuota idéntica e invariable.'
    ],
    respuesta_correcta: 2
  },
  2170: {
    texto: '¿Cuál de estas afirmaciones describe correctamente ADO.NET?',
    opciones: [
      'No admite ejecutar consultas SQL contra proveedores de datos.',
      'No permite integrar o intercambiar datos con XML.',
      'Es el modelo administrado de acceso a datos de .NET: ofrece proveedores y DataSet/XML, con funcionalidad relacionada con ADO/COM pero sin ser el mismo componente.',
      'Es únicamente otro nombre para el proveedor OLE DB.'
    ],
    respuesta_correcta: 2
  }
};

aplicar({ numero: '370', fecha: '2026-10-28', records, edits });
