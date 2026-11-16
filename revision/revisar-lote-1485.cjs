const apply = require('./aplicar-lote.cjs');

const metricav3 = 'https://administracionelectronica.gob.es/content/dam/pae/pae-home/documentos/documentacion/metodologias-y-guias/metricav3/METRICA_V3_Tecnicas.pdf';
const htmlLinks = 'https://html.spec.whatwg.org/multipage/links.html#links-created-by-a-and-area-elements';
const rapidminer53 = 'https://marketplace.rapidminer.com/UpdateServer/faces/product_details.xhtml?productId=rapidminer';
const knimeOss = 'https://www.knime.com/open-source-story';
const pentahoCE = 'https://pentaho.com/insights/blogs/managing-multi-cloud-deployments-with-pentaho-data-integration-enterprise-edition/';
const alteryxEula = 'https://www.alteryx.com/wp-content/uploads/media/legal/end-user-license-agreement.pdf';
const msActiveX = 'https://learn.microsoft.com/en-us/cpp/mfc/mfc-activex-controls?view=msvc-170';
const msActiveXVB = 'https://learn.microsoft.com/en-us/archive/msdn-magazine/2000/august/visual-programmer-writing-activex-controls-in-visual-basic-versus-visual-c';
const ituStatMux = 'https://www.itu.int/dms_pub/itu-r/opb/hdb/R-HDB-63-2016-R1-PDF-E.pdf';

const records = [
  [7726, [89, 95], ['III-4'], ['MÉTRICA v3', 'entidad débil', 'modelo entidad-relación', 'rectángulos concéntricos'], [
    { url: metricav3, referencia: 'MÉTRICA v3, Técnicas y Prácticas, técnica de diagramas entidad/relación: representa la entidad débil con dos rectángulos concéntricos.' }
  ], {}, 'Vigente C. En la notación entidad/relación de MÉTRICA v3, la entidad débil se distingue mediante un doble rectángulo; no se debe confundir con el rectángulo simple de una entidad regular ni con el subrayado reservado a otros elementos de notación.', 'vigente'],
  [7727, [105], ['II-16'], ['SGBDD', 'hipertexto', 'enlaces', 'recuperación de información'], [
    { url: htmlLinks, referencia: 'WHATWG HTML Living Standard, links: los elementos a y area crean enlaces entre recursos/documentos; es una referencia normativa actual para la noción de navegación hipertextual.' },
    { url: 'https://developer.mozilla.org/es/docs/Glossary/Hypertext', referencia: 'MDN Web Docs, glosario Hipertexto: texto que contiene enlaces a otros textos; fuente técnica de apoyo para la definición.' }
  ], {}, 'Vigente B. La funcionalidad descrita es el hipertexto: palabras u objetos enlazados permiten navegar a documentos o información relacionada. Tesauros organizan relaciones terminológicas y las referencias cruzadas son una forma concreta de enlace, pero el concepto general solicitado es hipertexto.', 'vigente'],
  [7728, [71, 75], ['II-15'], ['analítica de datos', 'software open source', 'licencias', 'RapidMiner', 'KNIME', 'Pentaho', 'Alteryx'], [
    { url: alteryxEula, referencia: 'Alteryx End User License Agreement, sección 1.4: define el producto licenciado como software propietario de Alteryx distribuido en forma de código objeto.' },
    { url: rapidminer53, referencia: 'RapidMiner Marketplace, producto RapidMiner 5.3.15: identifica RapidMiner 5 como generación open source y especifica licencia AGPL.' },
    { url: knimeOss, referencia: 'KNIME, Open Source Story: KNIME Analytics Platform se distribuye bajo GPLv3 (con excepción de API de nodos).' },
    { url: pentahoCE, referencia: 'Pentaho, artículo del proveedor sobre PDI Community Edition 8.3: identifica expresamente esa edición histórica como open source; no generaliza el estado de licencias a todas las ediciones/versiones actuales.' }
  ], {
    texto: 'Considerando expresamente las ediciones indicadas, ¿cuál es software propietario y no una edición open source de analítica de datos?',
    opciones: [
      'Alteryx Designer, bajo la licencia propietaria de Alteryx.',
      'RapidMiner 5.3.15, edición histórica distribuida bajo AGPL.',
      'KNIME Analytics Platform, distribuida bajo GPLv3.',
      'Pentaho Data Integration Community Edition 8.3, edición histórica open source.'
    ],
    respuesta_correcta: 0
  }, 'Corregida A. La redacción original mezclaba marcas y ediciones/versiones y era sensible al tiempo. Se especifican las ediciones: el EULA de Alteryx califica su software como propietario; RapidMiner 5.3.15 figura bajo AGPL, KNIME Analytics Platform bajo GPLv3 y el proveedor describe PDI Community Edition 8.3 como edición open source. Esto no implica que todas las ofertas actuales de esos fabricantes tengan la misma licencia.', 'corregida'],
  [7729, [65], ['II-9'], ['ActiveX', 'COM', 'MFC', 'ATL', 'Visual Basic', 'tecnología heredada'], [
    { url: msActiveX, referencia: 'Microsoft Learn, MFC ActiveX Controls: ActiveX es tecnología heredada basada en COM; Microsoft documenta la creación de controles con MFC y ATL.' },
    { url: msActiveXVB, referencia: 'Microsoft Learn Archive/MSDN Magazine: compara la creación de controles ActiveX con Visual Basic y Visual C++, y señala las interfaces COM necesarias.' }
  ], {
    texto: 'Respecto a la implementación de controles ActiveX, indique la afirmación correcta.',
    opciones: [
      'Solo pueden escribirse en Visual Basic porque ActiveX es una tecnología propietaria.',
      'Solo pueden escribirse en Java y se ejecutan de forma nativa en cualquier navegador.',
      'Solo pueden escribirse en C++ para mantener neutralidad frente a Java y .NET.',
      'Son componentes COM: pueden implementarse con entornos compatibles, por ejemplo Visual Basic o C++ con MFC/ATL; la interoperabilidad desde Java requiere mecanismos puente y no es universal.'
    ],
    respuesta_correcta: 3
  }, 'Histórica D. ActiveX es una tecnología heredada de componentes COM, no un lenguaje ni una tecnología de navegador neutral. Microsoft documenta implementaciones en Visual Basic y C++ (MFC/ATL). La frase original “casi todos los lenguajes, incluido Java” era excesiva: Java requiere interoperabilidad COM mediante herramientas o puentes específicos. Se conserva el contenido histórico para estudio, no como recomendación de desarrollo actual.', 'historica'],
  [7730, [108], ['IV-8'], ['multiplexación estadística', 'multiplexación por división de tiempo', 'tráfico a ráfagas', 'ancho de banda'], [
    { url: ituStatMux, referencia: 'ITU-R Handbook on Digital Terrestrial Television Broadcasting Networks and Systems Implementation, apartado Statistical multiplexing: asigna dinámicamente recursos comunes según la tasa requerida y puede mejorar el uso frente a asignaciones fijas; reconoce posibles situaciones de insuficiencia de recursos.' }
  ], {
    texto: 'Cuando las fuentes generan tráfico a ráfagas, ¿qué rasgo de la multiplexación estadística permite dimensionar el enlace de forma más eficiente que una asignación fija de intervalos TDM?',
    opciones: [
      'Garantiza atender cualquier número de circuitos, aunque la demanda simultánea supere la capacidad del enlace.',
      'Mide automáticamente la eficacia de transmisión y elimina la necesidad de planificar capacidad.',
      'Asigna dinámicamente la capacidad común según la demanda; si las fuentes no alcanzan simultáneamente su pico, puede bastar un enlace de menor velocidad agregada que reservar capacidad máxima fija para cada circuito.',
      'Evita los filtros que requiere siempre la multiplexación TDM.'
    ],
    respuesta_correcta: 2
  }, 'Corregida C. La multiplexación estadística comparte dinámicamente capacidad y explota la naturaleza no simultánea o a ráfagas de la demanda; por eso puede reducir la capacidad agregada necesaria respecto de reservar a cada circuito su pico. Es una ventaja estadística, no garantía: si la carga concurrente supera el enlace puede haber colas, pérdida o congestión.', 'corregida']
];

apply({ numero: '1485', fecha: '2026-11-16', records });
