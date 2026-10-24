const apply = require('./aplicar-lote.cjs');

const records = [
  [1401, [65], [], ['Maven', 'POM', 'herramientas de construcción', 'configuración declarativa'],
    [{ url: 'https://maven.apache.org/pom.html', referencia: 'Apache Maven, POM Reference: Project Object Model, normalmente en pom.xml; manifiesto declarativo de información y configuración del proyecto, que no tiene por qué contener código.' }, { url: 'https://maven.apache.org/guides/introduction/introduction-to-the-pom.html', referencia: 'Apache Maven, Introduction to the POM: el POM declara el qué y quién/dónde del proyecto; el ciclo de vida de construcción determina cuándo y cómo.' }], null,
    'Se reformula para que haya una única afirmación inequívoca: el POM se expresa en un archivo XML habitualmente llamado pom.xml y declara información/configuración del proyecto. Un reactor multimódulo puede reunir POM del agregador y POM de cada módulo; Maven tampoco se limita necesariamente a proyectos Java. Cotejo con ITIC Academy, bloque 30, Tecnologías de sistemas de información, versión 2026.1, herramientas/paquetes y entornos de construcción; tema oficial A1-65.', 'corregida'],
  [1402, [101], ['III-8'], ['mantenimiento de software', 'perfectivo', 'Lientz y Swanson', 'mejora funcional'],
    [{ url: 'https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nbsspecialpublication500-106.pdf', referencia: 'NIST SP 500-106, Guidance on Software Maintenance, §2.1: mantenimiento perfectivo comprende cambios, extensiones y mejoras para atender necesidades de usuario cambiantes o crecientes.' }, { url: 'https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nbsspecialpublication500-129.pdf', referencia: 'NIST SP 500-129, Software Maintenance Management, recoge la taxonomía corrective/adaptive/perfective e incluye en perfective los cambios de requisitos y nuevas capacidades.' }], null,
    'Se conserva la clave «perfectivo» y se acota la frase: en la taxonomía clásica de mantenimiento de software, las modificaciones para atender necesidades funcionales nuevas o cambiantes se consideran perfectivas. No se confunde con correctivo (defectos) ni adaptativo (cambios del entorno). Referencias con ITIC Academy, bloque 39, Calidad y mantenimiento, versión 2026, tipología de mantenimiento de software. Correspondencia: A1-101 y A2-III-8.', 'vigente'],
  [1403, [102], ['IV-4'], ['gestión de versiones', 'release management', 'versión mayor', 'clasificación histórica'],
    [{ url: 'https://www.valladolid.gob.es/en/tablon-oficial/ayuntamiento-valladolid-tablon-oficial/convocatoria-provision-acceso-libre-6-plazas-tecnico-superi.files/897545-Cuestionario%20preguntas%20test%206%20plazas%20TSTI.pdf', referencia: 'Ayuntamiento de Valladolid, cuestionario oficial de seis plazas de Técnico Superior de Tecnologías de la Información, pregunta que reproduce esta formulación y señala «Mayor» como respuesta. Es evidencia de procedencia/clave del banco de examen, no fuente normativa o primaria que valide el esquema.' }], null,
    'Pendiente de fuente primaria: se ha localizado la pregunta en un cuestionario oficial de examen con la clave «Mayor», y el temario de ITIC Academy, bloque 39, Calidad y mantenimiento, versión 2026, incluye versionado, releases y gestión de cambios. Sin embargo, no se ha localizado una fuente primaria vigente que defina universalmente esta taxonomía por impacto; major/minor no tiene significado idéntico en todos los esquemas de versiones y la guía histórica de ITIL no debe presentarse como norma actual. Se conserva en pendiente hasta verificar la versión concreta del marco al que aludía el examen. Correspondencia temática: A1-102 y A2-IV-4.', 'pendiente_fuente'],
  [1404, [22], [], ['Cartas de Servicios', 'calidad de los servicios públicos', 'RD 951/2005'],
    [{ url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2005-14836', referencia: 'Real Decreto 951/2005, arts. 8, 9 y 10: define las Cartas de Servicios como documentos informativos sobre servicios, derechos y compromisos de calidad; contempla cartas generales o específicas y actualización al menos cada tres años.' }], null,
    'Se concreta el marco jurídico en el enunciado y se sustituyen generalizaciones por proposiciones verificables en el RD 951/2005. La opción falsa afirma que el artículo 8 niega que las Cartas sean documentos; el precepto las define expresamente como documentos. Las demás opciones reflejan su objeto, la posibilidad de cartas específicas y la actualización periódica mínima. Cotejo con ITIC Academy, bloque 3, Actuación administrativa, versión 2026, programa de Cartas de Servicios. Correspondencia oficial: A1-22.', 'corregida'],
  [1405, [104], ['II-16'], ['gestión documental', 'ISO 15489-1:2016', 'ciclo de vida', 'captura', 'disposición'],
    [{ url: 'https://committee.iso.org/standard/62542.html', referencia: 'ISO 15489-1:2016, Concepts and principles, edición confirmada como vigente en 2021: conceptos, metadatos, sistemas y procesos para crear, capturar y gestionar documentos de archivo, en cualquier formato, estructura o entorno tecnológico.' }, { url: 'https://www.gub.uy/agencia-gobierno-electronico-sociedad-informacion-conocimiento/comunicacion/publicaciones/guias-tecnico-metodologicas-gestion-documental-administracion-archivos/2', referencia: 'AGESIC Uruguay, Guías técnico-metodológicas de Gestión Documental, §2.2: lista basada en ISO 15489-1:2016; creación, captura, clasificación e indización, control de acceso, almacenamiento, uso/reutilización, migración/conversión y disposición.' }], null,
    'Se sustituye el enunciado anterior, cuyo alcance temporal («desde almacenamiento hasta puesta a disposición») era ambiguo, por una pregunta delimitada a los procesos de ISO 15489-1:2016. La opción falsa restringe la gestión a almacenamiento/acceso y excluye creación, captura, uso, migración y disposición, que sí forman parte del conjunto de procesos. Cotejo con ITIC Academy, bloque 40, Gestión documental, versión 2026, procesos y ciclo de vida documental. Correspondencia oficial: A1-104 y A2-II-16.', 'corregida']
];

apply({ numero: '217', fecha: '2026-10-24', records, edits: {
  1401: { texto: '¿Qué afirmación describe correctamente el POM de Apache Maven?', opciones: [
    'Es un archivo XML cuyo nombre obligatorio es config.xml y que contiene exclusivamente instrucciones imperativas de construcción.',
    'Es un modelo declarativo de información y configuración del proyecto, expresado habitualmente en un archivo pom.xml.',
    'Solo puede describir proyectos que contengan código Java.',
    'En proyectos multimódulo no puede haber un POM agregador junto con POM propios de los módulos.'
  ], respuesta_correcta: 1 },
  1402: { texto: 'En la taxonomía clásica del mantenimiento de software, ¿cómo se clasifica modificar requisitos o añadir/mejorar funciones para responder a necesidades nuevas o cambiantes de los usuarios?', opciones: [
    'Mantenimiento preventivo.',
    'Mantenimiento correctivo.',
    'Mantenimiento perfectivo.',
    'Mantenimiento adaptativo.'
  ], respuesta_correcta: 2 },
  1404: { texto: 'Según el Real Decreto 951/2005, ¿cuál de las siguientes afirmaciones es falsa sobre las Cartas de Servicios?', opciones: [
    'El artículo 8 niega que las Cartas de Servicios sean documentos.',
    'Informan sobre los servicios encomendados, los derechos de los usuarios y los compromisos de calidad.',
    'Pueden referirse al conjunto de servicios de un órgano o a un servicio específico.',
    'Deben actualizarse periódicamente y, en cualquier caso, al menos cada tres años.'
  ], respuesta_correcta: 0 },
  1405: { texto: 'Según ISO 15489-1:2016, ¿qué afirmación sobre los procesos de gestión documental es falsa?', opciones: [
    'Incluyen la creación y captura de documentos.',
    'Pueden incluir clasificación e indización y control de acceso.',
    'Se limitan al almacenamiento y la puesta a disposición; quedan fuera el uso, la migración y la disposición.',
    'Se aplican a documentos con independencia de su formato o entorno tecnológico.'
  ], respuesta_correcta: 2 }
}});
