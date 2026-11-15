const apply = require('./aplicar-lote.cjs');

const sources = {
  collaborative: [
    {
      url: 'https://learn.microsoft.com/en-us/sharepoint/governance/co-authoring-overview',
      referencia: 'Microsoft Learn, Co-authoring in SharePoint Server: permite que varios usuarios trabajen en el mismo documento y colaboren sobre un contenido compartido.'
    },
    {
      url: 'https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk',
      referencia: 'ITIC Academy, bloque 50, edición 2026, sección 5.1: groupware permite a varias personas comunicarse, coordinarse y cooperar sobre un objetivo común.'
    }
  ],
  make: [
    {
      url: 'https://www.gnu.org/software/make/manual/make.html',
      referencia: 'GNU Make Manual, secciones Overview y Writing Makefiles: make lee un makefile que describe dependencias/reglas y órdenes para actualizar o recompilar archivos.'
    },
    {
      url: 'https://administracionelectronica.gob.es/documentacion/metodologias-guias/pae-metrica-v3',
      referencia: 'Portal de Administración Electrónica, MÉTRICA v3: documentación oficial de la metodología de planificación, desarrollo y mantenimiento de sistemas; distingue esta metodología de un makefile.'
    }
  ],
  psi: [
    {
      url: 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A8d2cfee5-5617-4dea-8cf8-7b7a0131de84/METRICA_V3_Panificacion_de_Sistemas_de_Informacion.pdf',
      referencia: 'MÉTRICA v3, Proceso PSI: planificación estratégica de sistemas de información; PSI 3 estudia la información relevante y PSI 5 analiza los sistemas actuales de la organización.'
    },
    {
      url: 'https://drive.google.com/file/d/1-xmHgvxArWY8GroFD1eSdyPrAQjkBpzo/view?usp=drivesdk',
      referencia: 'ITIC Academy, bloque 09 Organización y gestión de SI, edición 2026, relaciona la planificación estratégica con el nivel directivo y trata los recursos de información como recursos organizativos.'
    }
  ],
  performance: [
    {
      url: 'https://learn.microsoft.com/en-us/azure/well-architected/performance-efficiency/performance-test',
      referencia: 'Microsoft Learn, Architecture strategies for performance testing: throughput es una métrica medida para evaluar el rendimiento de una carga, junto con tiempos de respuesta y uso de recursos; no es un atributo del trabajo de entrada.'
    },
    {
      url: 'https://drive.google.com/file/d/1-xmHgvxArWY8GroFD1eSdyPrAQjkBpzo/view?usp=drivesdk',
      referencia: 'ITIC Academy, bloque 09 Organización y gestión de SI, edición 2026: distingue demanda (trabajo solicitado, entrada) de productividad/throughput (trabajo útil ejecutado por unidad de tiempo).'
    }
  ],
  roi: [
    {
      url: 'https://administracionelectronica.gob.es/content/dam/pae/pae-home/documentos/documentacion/metodologias-y-guias/metricav3/METRICA_V3_Tecnicas.pdf',
      referencia: 'MÉTRICA v3, Técnicas y Prácticas, pp. 3–4: ROI = 100 × (Beneficio Neto Anual − Coste de Desarrollo Anualizado) / Inversión Promedio; el período de amortización/payback es un concepto separado.'
    },
    {
      url: 'https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view?usp=drivesdk',
      referencia: 'ITIC Academy, bloque 17 Adquisición de sistemas y rentabilidad de inversiones, versión 2026.2: reproduce la fórmula de ROI de MÉTRICA v3 y distingue el payback como método estático separado.'
    }
  ]
};

apply({
  numero: '1405',
  fecha: '2026-11-15',
  records: [
    [7326, [133], ['II-16'], ['groupware', 'colaboración', 'objetivo común'], sources.collaborative, {
      texto: '¿Qué finalidad describe mejor una herramienta de trabajo colaborativo (groupware)?',
      opciones: [
        'Centralizar exclusivamente la publicación de información para consulta individual.',
        'Sustituir la estructura formal de decisión de la organización.',
        'Permitir que varias personas se comuniquen, coordinen y cooperen sobre un objetivo común.',
        'Limitar el acceso a los documentos a una única persona responsable.'
      ],
      respuesta_correcta: 2
    }, 'Corregida C. El enunciado y las opciones se reformulan para evaluar la finalidad general del groupware. La edición original reducía la colaboración a integrar trabajo concurrente en un único proyecto; la coordinación y cooperación sobre un objetivo común es una formulación más general y respaldada. La coautoría concurrente es un ejemplo de colaboración, no su única finalidad.', 'corregida'],
    [7327, [35, 95], ['III-2'], ['GNU make', 'Makefile', 'herramientas de desarrollo'], sources.make, {
      texto: '¿Cuál de estas opciones identifica el fichero de reglas que GNU make lee para conocer dependencias y órdenes de actualización o recompilación de archivos?',
      opciones: ['MÉTRICA v3', 'Makefile', 'MAGERIT', 'Análisis DAFO'],
      respuesta_correcta: 1
    }, 'Corregida B. “Herramienta usual de un directivo TIC” era una valoración subjetiva. Se pregunta ahora por una función documentada y distintiva de GNU make: lee un makefile con reglas/dependencias y órdenes para actualizar archivos. MÉTRICA y MAGERIT son metodologías públicas; DAFO es una técnica de análisis, no un fichero de construcción.', 'corregida'],
    [7328, [35, 87], [], ['planificación estratégica', 'plan de sistemas', 'recursos organizativos'], sources.psi, {
      texto: 'Al elaborar la planificación estratégica de los sistemas de información de una organización, ¿en qué contexto se estudian su información relevante y sus sistemas actuales para orientar las decisiones?',
      opciones: [
        'Al medir únicamente el coste de ejecución de un desarrollo ya terminado.',
        'Al contabilizar solo los recursos consumidos por un proyecto cerrado.',
        'Al materializar directamente el desarrollo sin analizar la situación organizativa.',
        'Durante la elaboración del Plan de Sistemas de Información.'
      ],
      respuesta_correcta: 3
    }, 'Corregida D. La pregunta original no delimitaba “analizar los recursos de la organización” y podía referirse a estimación de proyectos, evaluación de costes o planificación estratégica. Se concreta el contexto en la planificación de SI: MÉTRICA v3 define el proceso PSI y las actividades de estudio de información relevante y sistemas actuales antes de tomar decisiones de arquitectura y acción.', 'corregida'],
    [7329, [91], ['IV-4'], ['caracterización de carga', 'throughput', 'rendimiento'], sources.performance, {
      texto: 'Al especificar la carga de entrada de una prueba de rendimiento, ¿cuál de estos elementos es una métrica observada al ejecutar la carga y no una característica de cada trabajo?',
      opciones: [
        'El tiempo de CPU requerido por cada trabajo.',
        'El tiempo de reflexión del usuario entre trabajos.',
        'La memoria requerida para ejecutar un trabajo.',
        'El throughput o número de unidades de trabajo procesadas por unidad de tiempo.'
      ],
      respuesta_correcta: 3
    }, 'Corregida D. Se distingue la carga especificada antes de la prueba (trabajo, tiempo de CPU, think time y demanda de memoria) de la métrica obtenida al ejecutarla. Throughput se escribe correctamente y se define como trabajo procesado por unidad de tiempo; es una métrica de rendimiento, no una característica individual de entrada.', 'corregida'],
    [7330, [42, 95], ['II-15'], ['MÉTRICA v3', 'ROI', 'payback', 'rentabilidad'], sources.roi, {
      texto: 'Según la fórmula de ROI de MÉTRICA v3, ¿qué magnitud no aparece entre sus términos de cálculo?',
      opciones: [
        'La inversión promedio.',
        'El beneficio neto anual.',
        'El período de amortización (payback).',
        'El coste de desarrollo anualizado.'
      ],
      respuesta_correcta: 2
    }, 'Corregida C. Se mantiene la clave, pero se sustituye “no es necesario tener en cuenta” por una pregunta literal sobre los términos de la fórmula. MÉTRICA v3 calcula ROI con beneficio neto anual, coste de desarrollo anualizado e inversión promedio. El período de amortización/payback es un concepto y método estático distinto.', 'corregida']
  ]
});
