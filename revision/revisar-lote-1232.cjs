const apply = require('./aplicar-lote.cjs');
const src = (url, referencia) => ({ url, referencia });
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy = (id, title, detail) => src(`https://drive.google.com/file/d/${id}/view?usp=drivesdk`, `ITIC Academy, ${title}, edición 2026: ${detail}`);

const B = {
  numero: '1232',
  fecha: '2026-11-13',
  records: [
    [6481, ['106'], ['II-12'], ['ITIL 4', 'gestión de solicitudes de servicio', 'acuerdos de nivel de servicio', 'atención a usuarios'], [
      src('https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil4-practices-service-request-management-3690', 'PeopleCert, ITIL 4 Practitioner: Service Request Management: finalidad de la práctica y manejo de solicitudes predefinidas iniciadas por usuarios.'),
      src(a1, 'Convocatoria GSI A1 2025, tema 106: gestión de servicios TIC, acuerdos de nivel de servicio y bases conceptuales de ITIL.'),
      src(a2, 'Convocatoria GSI A2 2025, tema II.12: gestión de la atención a clientes y usuarios; encaje relacionado, sin epígrafe específico de ITSM.'),
      academy('13ohkITliw7Nrg6LKPinh9vliiwrgPdwr', 'bloque 41 «ITIL y COBIT»', 'cubre el tema A1 106 y los conceptos de gestión de servicios; su rótulo A2 D.2 no coincide con la convocatoria vigente y no se usa como numeración oficial.'),
      academy('1-xmHgvxArWY8GroFD1eSdyPrAQjkBpzo', 'bloque 9 «Organización y gestión de los sistemas de información»', 'incluye la atención a usuarios y centros de sistemas; cotejo contextual. No atribuye una correspondencia exacta con la práctica ITIL.')
    ], { texto: 'En ITIL 4, ¿qué práctica gestiona las solicitudes de servicio predefinidas iniciadas por los usuarios y contribuye a prestar el nivel de servicio acordado?', opciones: ['Mesa de servicio.', 'Gestión de solicitudes de servicio.', 'Gestión de nivel de servicio.', 'Gestión de problemas.'], respuesta_correcta: 1 }, 'La clave B se confirma: Service Request Management tramita las solicitudes predefinidas iniciadas por usuarios; Service Desk es el punto de contacto, Service Level Management acuerda objetivos de servicio y Problem Management aborda causas de incidentes. El tema A2-II.12 es una conexión curricular general de atención a usuarios, no una equivalencia terminológica con ITIL.', 'vigente'],
    [6482, ['93'], ['III-9'], ['UML 2.0', 'perfiles UML', 'estereotipos', 'valores etiquetados', 'restricciones'], [
      src('https://www.omg.org/spec/UML/2.0/Infrastructure/PDF', 'Object Management Group, UML 2.0 Infrastructure, sección Profiles: los perfiles extienden metamodelos mediante estereotipos; las propiedades de estos producen tagged values y se aplican restricciones.'),
      src('https://www.omg.org/spec/UML/2.5.1/PDF', 'Object Management Group, UML 2.5.1, especificación normativa vigente publicada por OMG: perfiles y estereotipos.'),
      src(a1, 'Convocatoria GSI A1 2025, tema 93: técnicas de diseño de software.'),
      src(a2, 'Convocatoria GSI A2 2025, tema III.9: análisis y diseño orientado a objetos y UML.'),
      academy('1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN', 'bloque 38 «Análisis, diseño y construcción de sistemas de información»', 'mapea diseño de software a A1 93 y análisis/diseño orientado a objetos a A2; cotejo curricular, no fuente normativa de UML.')
    ], { texto: '¿Cuál de los siguientes elementos NO es un mecanismo de extensión utilizado para definir perfiles en UML 2.0?', opciones: ['Estereotipos.', 'Valores etiquetados asociados a propiedades de estereotipos.', 'Artefactos.', 'Restricciones.'], respuesta_correcta: 2 }, 'Se mantiene C. En UML 2.0, los perfiles usan estereotipos, sus propiedades (cuyos valores aplicados se denominan tagged values) y restricciones. Artifact/Artefacto es un metatipo de UML, no un mecanismo de extensión de perfiles. Se explicita la terminología de valores etiquetados para evitar confundir el valor aplicado con el mecanismo que lo declara.', 'vigente'],
    [6483, ['96'], ['III-7'], ['pruebas de regresión', 'pruebas de cambio', 'software sin modificar', 'ISTQB'], [
      src('https://www.istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf', 'ISTQB, Certified Tester Foundation Level Syllabus v4.0.1, §2.2.3: regresión confirma que un cambio no causa consecuencias adversas en la misma u otras partes del sistema.'),
      src('https://api.glossary.istqb.org/storage/help/R0uz58NqLzUz48LVUuyGSF76NFj4LHQazSs0GlNS.pdf', 'ISTQB Glossary of Testing Terms: pruebas de regresión detectan defectos introducidos o descubiertos en áreas no modificadas.'),
      src(a1, 'Convocatoria GSI A1 2025, tema 96: procesos, niveles y técnicas de prueba de software.'),
      src(a2, 'Convocatoria GSI A2 2025, tema III.7: pruebas, planificación y documentación.'),
      academy('17PDaqPVVwhzfeplx9bzp8XjEXm_qlami', 'bloque 39 «Calidad y mantenimiento»', 'cubre A1 96 y pruebas de software; el encaje concreto se contrasta con ISTQB.')
    ], { texto: 'Tras modificar un componente, ¿cómo se denominan las pruebas destinadas a detectar efectos adversos del cambio en funcionalidades que no se pretendía modificar?', opciones: ['Pruebas unitarias.', 'Pruebas de sistema.', 'Pruebas de regresión.', 'Pruebas de aceptación.'], respuesta_correcta: 2 }, 'Se conserva C y se corrige la descripción para distinguir la regresión de volver a ejecutar pruebas que fallaron para confirmar su arreglo (confirmation testing). La regresión puede afectar a la misma unidad, a otros componentes o al sistema; no se limita estrictamente a componentes separados que quedaron intactos.', 'corregida'],
    [6484, ['99'], ['III-2'], ['COCOMO', 'Boehm', 'modo orgánico', 'modo semidesacoplado', 'modo empotrado'], [
      src('https://books.google.com/books/about/Software_Engineering_Economics.html?id=VphQAAAAMAAJ', 'Barry W. Boehm, Software Engineering Economics, Prentice-Hall, 1981, capítulos del modelo COCOMO básico y sus modos de desarrollo; registro bibliográfico de la obra original.'),
      src('https://vtda.org/pubs/ICLTechnicalJournal/ICL-Technical-Journal-v04i01.pdf', 'ICL Technical Journal, vol. 4, n.º 1 (1984), apartado COCOMO: describe los modos organic, semidetached y embedded y reproduce sus parámetros.'),
      src(a1, 'Convocatoria GSI A1 2025, tema 99: estimación de recursos y esfuerzo en desarrollo de sistemas.'),
      src(a2, 'Convocatoria GSI A2 2025, tema III.2: planificación y gestión del proceso de desarrollo.'),
      academy('17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3', 'bloque 17 «Adquisición de sistemas y rentabilidad de inversiones»', 'cubre viabilidad, costes y MÉTRICA, pero no se le atribuye cobertura específica de modos COCOMO.')
    ], { texto: '¿Cuáles son los tres modos de desarrollo del modelo COCOMO clásico de Boehm?', opciones: ['Orgánico, semiorgánico y empotrado.', 'Orgánico, acoplado y empotrado.', 'Orgánico, empotrado y semiacoplado.', 'Orgánico, semidesacoplado (semidetached) y empotrado (embedded).'], respuesta_correcta: 3 }, 'La clave histórica D era incorrecta: COCOMO clásico distingue Organic, Semidetached y Embedded. Se sustituyen traducciones inexistentes («acoplado», «semiempotrado») por el término técnico «semidesacoplado», manteniendo el original en inglés entre paréntesis.', 'corregida'],
    [6485, ['98'], ['III-13'], ['EED', 'DRE', 'eficacia de eliminación de defectos', 'métricas de calidad'], [
      src('https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication500-209.pdf', 'NIST Special Publication 500-209, Software Error Analysis, definición y fórmula de defect removal efficiency (DRE): defectos retirados sobre defectos al inicio del proceso.'),
      src('https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication500-234.pdf', 'NIST Special Publication 500-234, Reference Information for the Software Verification and Validation Process: DRE como porcentaje de defectos eliminados en un proceso.'),
      src(a1, 'Convocatoria GSI A1 2025, tema 98: métricas y evaluación de la calidad del software.'),
      src(a2, 'Convocatoria GSI A2 2025, tema III.13: calidad del software y su medida.'),
      academy('17PDaqPVVwhzfeplx9bzp8XjEXm_qlami', 'bloque 39 «Calidad y mantenimiento»', 'encaja con las métricas de calidad del software; fórmula cotejada con publicaciones técnicas NIST.')
    ], { texto: 'La eficacia de eliminación de defectos (EED; DRE), expresada como fracción entre 0 y 1, alcanza su valor máximo cuando:', opciones: ['Se acerca a uno.', 'Se acerca a cero.', 'Es mayor que uno.', 'Es negativa.'], respuesta_correcta: 0 }, 'Se mantiene A con una formulación acotada: DRE mide la proporción de defectos retirados respecto de los existentes al inicio del proceso considerado. Un valor próximo a 1 indica alta eficacia de eliminación en ese proceso, pero por sí solo no garantiza toda la calidad del producto.', 'corregida']
  ]
};

const edits = Object.fromEntries(B.records.map(([id, , , , , edit]) => [id, edit]));
apply({ ...B, records: B.records.map(([id, a, b, tags, sources, edit, note, state]) => [id, a, b, tags, sources, null, note, state]), edits });
