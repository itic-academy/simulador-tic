const apply = require('./aplicar-lote.cjs');

const sources = {
  iso: [
    { url: 'https://www.iso.org/standard/80710.html', referencia: 'ISO/IEC/IEEE 14764:2022, edición publicada vigente: guía de mantenimiento de software basada en ISO/IEC/IEEE 12207:2017; define los tipos de mantenimiento y el propósito de sostener la capacidad del sistema de prestar servicios. La página identifica 14764:2006 como retirada.' },
    { url: 'https://preview.sist.si/sist-preview/80710/9a26fc3a1a464fa286fb85d6c1eeed31/ISO-IEC-IEEE-14764-2022.pdf', referencia: 'Vista autorizada por el organismo nacional de normalización SIST de ISO/IEC/IEEE 14764:2022, cláusulas 3.1.9–3.1.10: perfectivo mejora prestaciones/atributos; preventivo corrige defectos latentes antes de que ocurran en producción.' }
  ],
  metric: [
    { url: 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Ae15c0c5b-dd9c-4e48-82e3-9e36ba18e839/METRICA_V3_Mantenimiento_de_Sistemas_de_Informacion.pdf', referencia: 'Ministerio de Administraciones Públicas, MÉTRICA v3, Mantenimiento de Sistemas de Información, pp. 2–3: correctivo/evolutivo son los tipos que trata el proceso; adaptativo/perfectivo quedan fuera. Define evolutivo como cambios necesarios por expansión/cambio de necesidades y perfectivo como mejora de calidad interna, incluido rendimiento y eficiencia.' }
  ],
  fips: [
    { url: 'https://www.govinfo.gov/content/pkg/GOVPUB-C13-514d03a3a0818fbe3568455ffc53ab0a/pdf/GOVPUB-C13-514d03a3a0818fbe3568455ffc53ab0a.pdf', referencia: 'National Bureau of Standards, FIPS PUB 99, A Framework for the Evaluation and Comparison of Software Development Tools: la taxonomía histórica clasifica características por entrada, función y salida; agrupa las funciones en transformación, análisis estático, análisis dinámico y gestión. Se explicita el marco y fecha para no presentarlo como taxonomía universal actual.' }
  ]
};

const records = [
  [3986, ['101'], ['III-8'], ['ISO/IEC/IEEE 14764:2022', 'mantenimiento de software', 'prestación de servicios'], sources.iso, '', 'La norma se refiere al mantenimiento de software y lo sitúa como proceso que sostiene la capacidad del sistema para prestar el servicio. No afirma que cualquier sistema, sin atender a su contexto o necesidad, requiera siempre cambios; se elimina esa generalización absoluta.', 'corregida'],
  [3987, ['101'], ['III-8'], ['MÉTRICA v3', 'tipos de mantenimiento', 'alcance histórico'], sources.metric, '', 'MÉTRICA v3 distingue correctivo, evolutivo, adaptativo y perfectivo; declara que los dos últimos quedan fuera del ámbito de su proceso MSI. El enunciado acota la edición de la metodología y la opción correcta. Es una clasificación metodológica histórica, no una enumeración universal ni la taxonomía completa de ISO 14764:2022.', 'historica'],
  [3988, ['101'], ['III-8'], ['MÉTRICA v3', 'mantenimiento perfectivo', 'rendimiento', 'alcance histórico'], sources.metric, '', 'En MÉTRICA v3, el mantenimiento perfectivo mejora la calidad interna del sistema, por ejemplo mediante optimización del rendimiento y la eficiencia. Se matiza que ampliaciones de necesidades funcionales pueden ser evolutivas; el caso descrito se limita a mejorar capacidad/rendimiento y nivel de servicio. MÉTRICA v3 deja el perfectivo fuera de su proceso MSI.', 'historica'],
  [3989, ['101'], ['III-8'], ['ISO/IEC/IEEE 14764:2022', 'mantenimiento preventivo', 'fallo latente'], sources.iso, '', 'La pregunta se acota a mantenimiento de software y a la definición actual de ISO/IEC/IEEE 14764:2022: corregir defectos latentes después de la entrega antes de que se manifiesten en el sistema en producción. Inspecciones/calendarios pueden ser prácticas preventivas, pero no constituyen por sí solas la definición normativa del tipo.', 'corregida'],
  [3990, ['88'], ['III-6'], ['CASE', 'clasificación funcional de herramientas', 'NBS FIPS PUB 99', 'taxonomía histórica'], sources.fips, '', 'Se sustituye la pregunta sin criterio —varias opciones originales son categorías funcionales posibles— por una clasificación identificada: la taxonomía histórica de NBS FIPS PUB 99 organiza las funciones de herramientas en transformación, análisis estático, análisis dinámico y gestión. No se presenta ese esquema fechado como única clasificación CASE vigente.', 'historica']
];

const edits = {
  3986: { texto: 'Según ISO/IEC/IEEE 14764:2022, ¿cuál es el propósito general del proceso de mantenimiento de software?', opciones: ['Sostener la capacidad del sistema de software para prestar el servicio requerido.', 'Añadir funcionalidades en cada versión, aunque no exista una necesidad.', 'Garantizar que todo sistema se modifique periódicamente, con independencia de su contexto.', 'Sustituir las actividades de operación y administración de sistemas.'], respuesta_correcta: 0 },
  3987: { texto: 'Según el alcance del proceso MSI de MÉTRICA v3, ¿qué dos tipos de mantenimiento quedan fuera de ese proceso?', opciones: ['Correctivo y evolutivo.', 'Adaptativo y perfectivo.', 'Adaptativo y correctivo.', 'Perfectivo y evolutivo.'], respuesta_correcta: 1 },
  3988: { texto: 'En MÉTRICA v3, ¿qué tipo de mantenimiento describe una mejora interna dirigida a optimizar el rendimiento o la eficiencia del sistema, sin responder a un cambio del entorno?', opciones: ['Perfectivo.', 'Adaptativo.', 'Preventivo.', 'Correctivo.'], respuesta_correcta: 0 },
  3989: { texto: 'Según ISO/IEC/IEEE 14764:2022, ¿qué tipo de mantenimiento modifica un producto software después de su entrega para corregir defectos latentes antes de que ocurran en producción?', opciones: ['Mantenimiento preventivo.', 'Mantenimiento adaptativo.', 'Mantenimiento correctivo.', 'Mantenimiento de emergencia.'], respuesta_correcta: 0 },
  3990: { texto: 'En la taxonomía histórica de herramientas software NBS FIPS PUB 99, ¿qué clases forman la categoría funcional «función»?', opciones: ['Transformación, análisis estático, análisis dinámico y gestión.', 'Entrada, función, salida y repositorio.', 'Análisis, diseño, construcción e implantación.', 'Planificación, recursos, riesgos y calendario.'], respuesta_correcta: 0 }
};

apply({ numero: '733', fecha: '2026-11-05', records, edits });
