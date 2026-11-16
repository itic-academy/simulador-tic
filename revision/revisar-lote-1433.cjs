const apply = require('./aplicar-lote.cjs');

const records = [
  [7466, [53], ['II-1'], ['centro de proceso de datos', 'eficiencia energética', 'PUE', 'ISO/IEC 30134-2'], [
    { url: 'https://www.iso.org/standard/30134-2?browse=ics', referencia: 'ISO/IEC 30134-2:2026, ficha oficial ISO, edición vigente: define Power Usage Effectiveness (PUE) como KPI para cuantificar el uso eficiente de energía de un centro de datos; especifica medición, cálculo, categorías e información de interpretación.' },
    { url: 'https://www.iso.org/obp/ui?_escaped_fragment_=iso%3Astd%3Aiso-iec%3A30134%3A-2%3Aed-2%3Av1%3Aen', referencia: 'ISO Online Browsing Platform, ISO/IEC 30134-2:2026: formula PUE como relación entre consumo energético total del centro y consumo energético de los equipos TI, medidos en el periodo y límites pertinentes.' },
    { url: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk', referencia: 'Cotejo curricular ITIC Academy, bloque Hardware A1-52/53/54/56/57/132, edición 2026: centros de proceso de datos, infraestructura y eficiencia/gestión energética; correspondencia A1-53/A2-II-1.' }
  ], {
    texto: '¿Qué indicador normalizado se utiliza para cuantificar la eficiencia en el uso de energía de un centro de datos?',
    opciones: ['BTU (British Thermal Unit).', 'TIA-942, norma de infraestructura de centros de datos.', 'Clasificación de disponibilidad Tier I, II, III o IV.', 'PUE (Power Usage Effectiveness).'], respuesta_correcta: 3
  }, 'Corregida D. ISO/IEC 30134-2:2026 define PUE como indicador clave para cuantificar el uso eficiente de energía en centros de datos. TIA-942 y la clasificación Tier tratan diseño, infraestructura y disponibilidad, no son la métrica de eficiencia energética; se corrige además «British Thermal Link» por «British Thermal Unit». PUE es un indicador y no sustituye una suite completa de métricas de energía.', 'corregida'],

  [7467, [55], ['II-1'], ['Google App Engine', 'Google Cloud', 'runtimes', 'Standard environment'], [
    { url: 'https://docs.cloud.google.com/appengine/docs/standard/overview', referencia: 'Google Cloud, App Engine Standard Environment overview: los entornos estándar actuales ofrecen runtimes de Go, Java, Node.js, PHP, Python y Ruby. La disponibilidad de versiones concretas depende del calendario de soporte de runtimes.' },
    { url: 'https://docs.cloud.google.com/appengine/docs/flexible/overview', referencia: 'Google Cloud, App Engine Flexible Environment overview: además de runtimes mantenidos, admite proporcionar runtimes personalizados mediante imágenes o Dockerfile; las capacidades no se deben mezclar con la lista estándar.' },
    { url: 'https://drive.google.com/file/d/16Er3cneQ-Vik3zSjYq6zQUOfSKK4vxVu/view?usp=drivesdk', referencia: 'Cotejo curricular ITIC Academy, Cloud Computing A1-55/A2-II-1, edición 2026; despliegue PaaS y runtimes en nube. Los lenguajes y entornos disponibles se verifican en la documentación vigente de Google Cloud.' }
  ], {
    texto: '¿Qué lenguajes incluye actualmente el entorno estándar de Google App Engine entre sus runtimes administrados?',
    opciones: [
      'Go, Java, Node.js, PHP, Python y Ruby.',
      'Solo C# y Visual Basic.',
      'Únicamente Objective-C y Swift.',
      'C++ y Delphi, sin otros lenguajes.'
    ], respuesta_correcta: 0
  }, 'Corregida A. Se acota la pregunta al entorno estándar porque App Engine tiene entornos distintos y el flexible admite runtimes personalizados. La lista oficial actual del entorno estándar incluye Go, Java, Node.js, PHP, Python y Ruby; el soporte de cada versión concreta tiene su propio ciclo de vida.', 'corregida'],

  [7468, [124], ['II-3', 'III-11'], ['desarrollo multiplataforma', 'aplicaciones nativas', 'C#', '.NET MAUI', 'Xamarin'], [
    { url: 'https://learn.microsoft.com/dotnet/maui/what-is-maui?view=net-maui-9.0', referencia: 'Microsoft Learn, What is .NET MAUI?: framework multiplataforma para crear aplicaciones móviles y de escritorio nativas con C# y XAML; un proyecto puede dirigirse a Android, iOS, macOS y Windows.' },
    { url: 'https://learn.microsoft.com/en-us/dotnet/maui/migration/?view=net-maui-10.0', referencia: 'Microsoft Learn, guía de migración: el soporte para todos los SDK de Xamarin, incluido Xamarin.Forms, terminó el 1 de mayo de 2024; la migración recomendada es a .NET MAUI.' },
    { url: 'https://drive.google.com/file/d/1nXa2jkiUqpu31smkt5D8WswcTgEN7XlB/view?usp=drivesdk', referencia: 'Cotejo curricular ITIC Academy, bloque 47 «Aplicaciones Móviles», edición 2026: tecnologías para desarrollar aplicaciones móviles multiplataforma; A1-124.' },
    { url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', referencia: 'Cotejo curricular ITIC Academy, Tecnologías de Sistemas de Información, edición 2026: lenguajes/plataforma .NET y tecnologías de desarrollo (A2-III-11/A2-II-3). La vigencia de Xamarin y su reemplazo se verifica en Microsoft Learn.' }
  ], {
    texto: '¿Qué framework vigente permite crear aplicaciones móviles nativas para iOS y Android y aplicaciones de escritorio para Windows con C#?',
    opciones: ['Bootstrap.', 'MIDP (Mobile Information Device Profile).', '.NET MAUI.', 'SonarQube.'], respuesta_correcta: 2
  }, 'Corregida C. Xamarin fue la respuesta histórica, pero Microsoft terminó su soporte el 1 de mayo de 2024 y recomienda migrar a .NET MAUI. Se actualiza el enunciado a las plataformas nativas actuales de .NET MAUI (iOS, Android y Windows) y se conservan las alternativas no pertinentes.', 'corregida'],

  [7469, [63], ['II-5'], ['ANSI/SPARC', 'arquitectura de bases de datos', 'esquemas externo conceptual interno'], [
    { url: 'https://www.govinfo.gov/content/pkg/GOVPUB-C13-f55f11d78745e6c51f75a39a44913f22/pdf/GOVPUB-C13-f55f11d78745e6c51f75a39a44913f22.pdf', referencia: 'NBS/NIST, Reference Model for DBMS Standardization: Database Architecture Framework Task Group (ANSI/X3/SPARC): presenta la descripción de datos en tres niveles/esquemas externos, conceptual e interno y explica la finalidad de independencia y adaptabilidad entre vistas, modelo y almacenamiento.' },
    { url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', referencia: 'Cotejo curricular ITIC Academy, Bases de Datos A1-63/64/89, A2-T5/D4/C2, edición 2026: incluye el modelo ANSI/SPARC y los sistemas de gestión de bases de datos; correspondencia A1-63/A2-II-5.' }
  ], {
    texto: '¿Cuáles son los tres niveles de esquemas del modelo ANSI/SPARC de bases de datos?',
    opciones: ['Externo, conceptual e interno.', 'Lógico, conceptual y físico.', 'Vista, modelo y controlador.', 'Externo, conceptual y lógico.'], respuesta_correcta: 0
  }, 'Corregida A. Se conserva la respuesta y se limita la afirmación a identificar los tres esquemas del modelo: externo, conceptual e interno. La independencia de datos es el objetivo del mapeo entre niveles, no una garantía absoluta frente a cualquier cambio.', 'corregida'],

  [7470, [64], ['II-5'], ['SQL', 'UPDATE', 'DML', 'modificación de datos'], [
    { url: 'https://www.postgresql.org/docs/current/sql-update.html', referencia: 'PostgreSQL 18, documentación oficial de UPDATE: cambia los valores de las columnas especificadas en las filas que satisfacen la condición; no redefine la estructura de la tabla.' },
    { url: 'https://www.postgresql.org/docs/current/dml-update.html', referencia: 'PostgreSQL 18, Updating Data: UPDATE modifica datos de filas existentes; especifica tabla, columnas/valores nuevos y las filas afectadas.' },
    { url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', referencia: 'Cotejo curricular ITIC Academy, Bases de Datos A1-63/64/89, A2-T5/D4/C2, edición 2026: lenguaje SQL y operaciones sobre el modelo relacional; correspondencia A1-64/A2-II-5.' }
  ], {}, 'Vigente C. UPDATE modifica los valores de columnas en las filas elegidas por la condición. Los cambios de estructura se realizan con instrucciones DDL como ALTER TABLE; UPDATE no altera la definición de tabla ni de vista.', 'vigente']
];

apply({ numero: '1433', fecha: '2026-11-16', records });
