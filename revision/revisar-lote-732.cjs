const apply = require('./aplicar-lote.cjs');

const sources = {
  via: [
    { url: 'https://iscap.us/proceedings/isecon/historyPDF/1992.v9.pdf', referencia: 'ISECON 1992, «Using CASE Tools for Existing Systems»: describe el catálogo de Viasoft para sistemas existentes; VIA/Insight analiza programas y guarda información de estructura/relaciones en un repositorio y VIA/Renaissance apoya análisis, extracción y reingeniería de COBOL. Fuente contemporánea al producto.' },
    { url: 'https://www.bitsavers.org/magazines/Mainframe_Journal/Mainframe_Journal_V04_N04_198904.pdf', referencia: 'Mainframe Journal, abril de 1989, p. 90: anuncio contemporáneo de VIA/CENTER como plataforma de reingeniería COBOL que extraía y almacenaba información para el ciclo de reingeniería.' }
  ],
  iso2006: [
    { url: 'https://cdn.standards.iteh.ai/samples/39064/a132a6efa20e47d69ede63804b88a170/ISO-IEC-14764-2006.pdf', referencia: 'ISO/IEC 14764:2006, cláusula 5, actividades del proceso de mantenimiento: Problem and Modification Analysis, Modification Implementation y Maintenance Review/Acceptance son actividades distintas, junto con Process Implementation, Migration y Retirement. Se cita únicamente para la formulación histórica.' },
    { url: 'https://www.iso.org/standard/80710.html', referencia: 'Catálogo oficial ISO: ISO/IEC 14764:2006 figura como retirada y su sucesora publicada es ISO/IEC/IEEE 14764:2022, basada en ISO/IEC/IEEE 12207:2017; evita presentar la secuencia de 2006 como texto vigente.' }
  ],
  act: [
    { url: 'https://files.ifi.uzh.ch/rerg/amadeus/teaching/courses/kvse_ss05/ahn03.pdf', referencia: 'Ahn, Suh y Kim, «The Software Maintenance Project Effort Estimation Model», Journal of Software Maintenance and Evolution 15 (2003), pp. 71–85, DOI 10.1002/smr.269, §§2.1.1: ACT/TCA es la fracción de instrucciones fuente modificadas o añadidas en un año típico; resume la ecuación histórica AME = ACT × SDT de Boehm.' },
    { url: 'https://www.informit.com/store/software-engineering-economics-9780138221225', referencia: 'Barry W. Boehm, Software Engineering Economics (Prentice-Hall, 1981), ficha editorial de la obra que presenta el modelo empírico ACT; marco histórico, no método universal vigente.' }
  ],
  fowler: [
    { url: 'https://martinfowler.com/bliki/CodeSmell.html', referencia: 'Martin Fowler, «Code Smell»: define un code smell como una señal superficial que suele corresponder a un problema más profundo del sistema; se pregunta por este concepto preciso, no por expresiones no normalizadas como «fragilidad» o «software rot».' }
  ],
  predictive: [
    { url: 'https://wires.onlinelibrary.wiley.com/doi/10.1002/widm.1471', referencia: 'Esteban et al., «Data mining in predictive maintenance systems: A taxonomy and systematic review», WIREs Data Mining and Knowledge Discovery (2022), DOI 10.1002/widm.1471, §§4.1–4.4: relaciona los problemas de mantenimiento predictivo con tareas de minería de datos como clasificación, regresión y clustering, escogidas según etiquetas, variable objetivo y datos.' }
  ]
};

const records = [
  [3981, ['88'], ['III-6'], ['VIA/CENTER', 'CASE', 'reingeniería de software', 'herramienta histórica'], sources.via, '', 'VIA/CENTER fue una plataforma CASE histórica de Viasoft para mantenimiento y reingeniería de aplicaciones COBOL; sus componentes analizaban estructura y relaciones de programas y daban soporte a las fases de reingeniería. Se limita el enunciado al catálogo contemporáneo de herramientas: no implica que el producto siga vigente ni que sea el único paquete CASE de reingeniería.', 'historica'],
  [3982, ['101'], ['III-8'], ['code smell', 'mantenimiento de software', 'Martin Fowler'], sources.fowler, '', 'Se conserva el concepto verificable de Fowler: un code smell es un indicio visible en el código de un problema más profundo. Se retiran las otras afirmaciones originales sobre «fragilidad» y «pudrición del software», cuya terminología y definiciones no estaban acotadas a una fuente o taxonomía; por tanto, no se afirma que todas sean correctas.', 'corregida'],
  [3983, ['101'], ['III-8'], ['ISO/IEC 14764:2006', 'análisis de modificación', 'aceptación de mantenimiento', 'histórica'], sources.iso2006, '', 'La secuencia se identifica expresamente como histórica y circunscrita a ISO/IEC 14764:2006: para tramitar una solicitud de cambio, análisis de problema/modificación, implementación de la modificación y revisión/aceptación son actividades del proceso. La edición 2006 también enumera implementación del proceso, migración y retirada; la pregunta no se presenta como lista completa. ISO informa de que 2006 fue retirada y sustituida por ISO/IEC/IEEE 14764:2022.', 'historica'],
  [3984, ['99', '101'], ['III-8'], ['Boehm', 'ACT', 'TCA', 'tráfico de cambio anual', 'estimación histórica'], sources.act, '', 'En el modelo histórico ACT de Boehm, llamado TCA en este banco, se mide la fracción de instrucciones fuente modificadas o añadidas durante un año típico. El enunciado original confundía la magnitud medida con el método de estimación de esfuerzo; el modelo relaciona esa fracción con el esfuerzo de desarrollo para estimar esfuerzo anual de mantenimiento.', 'historica'],
  [3985, ['101'], ['III-8'], ['mantenimiento predictivo', 'minería de datos', 'clasificación', 'regresión', 'clustering'], sources.predictive, '', 'No existe una lista universal de «los modelos más habituales»: el tipo de tarea depende del objetivo, las etiquetas y los datos. En minería de datos para mantenimiento predictivo se encuentran, entre otras, clasificación, regresión y clustering; la revisión citada las relaciona con predicción de estados/fallos, magnitudes continuas o agrupación no supervisada. Se reemplaza «segmentación» por el término técnico clustering y se pregunta por familias de tareas que pueden utilizarse.', 'corregida']
];

const edits = {
  3981: { texto: 'En los catálogos históricos de herramientas CASE para reingeniería de sistemas COBOL, ¿qué plataforma de Viasoft integraba componentes para analizar, documentar, probar y reingenierizar aplicaciones existentes?', opciones: ['VIA/CENTER.', 'CA-Metrics.', 'Cadre.', 'ADW.'], respuesta_correcta: 0 },
  3982: { texto: 'Según Martin Fowler, ¿qué describe un «code smell» (indicio de mal diseño) en un programa?', opciones: ['Un error de sintaxis que impide compilar.', 'Una vulnerabilidad que siempre permite ejecutar código remoto.', 'Una señal superficial que suele corresponder a un problema más profundo del sistema.', 'Una prueba automatizada que detecta cualquier defecto.'], respuesta_correcta: 2 },
  3983: { texto: 'En la secuencia histórica de gestión de una solicitud de modificación de ISO/IEC 14764:2006, ¿qué actividades siguen al análisis del problema y del cambio y preceden o completan su aceptación?', opciones: ['Planificación de capacidad y dimensionamiento de hardware.', 'Implementación de la modificación.', 'Revisión/aceptación de mantenimiento.', 'Las actividades de las opciones 2 y 3.'], respuesta_correcta: 3 },
  3984: { texto: 'En el modelo histórico de tráfico de cambio anual (ACT, denominado TCA en algunos materiales), ¿qué magnitud mide ACT/TCA?', opciones: ['El número total de incidencias correctivas registradas.', 'La fracción de instrucciones fuente modificadas o añadidas durante un año típico.', 'El coste de licencias de herramientas de control de cambios.', 'La tasa de defectos detectados en las pruebas de aceptación.'], respuesta_correcta: 1 },
  3985: { texto: 'En minería de datos aplicada al mantenimiento predictivo, ¿qué conjunto reúne tres familias de tareas que pueden utilizarse según el objetivo y los datos disponibles?', opciones: ['Clasificación, regresión y clustering (agrupamiento).', 'Análisis, compilación y comprobación.', 'Edición, despliegue y aceptación.', 'Segmentación, integración y documentación.'], respuesta_correcta: 0 }
};

apply({ numero: '732', fecha: '2026-11-05', records, edits });
