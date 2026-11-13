const apply = require('./aplicar-lote.cjs');
const src = (url, referencia) => ({ url, referencia });
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy = (id, title, detail) => src(`https://drive.google.com/file/d/${id}/view?usp=drivesdk`, `ITIC Academy, ${title}, edición 2026: ${detail}`);

const B = {
  numero: '1233',
  fecha: '2026-11-13',
  records: [
    [6486, ['96'], ['III-7'], ['pruebas de caja negra', 'transición entre estados', 'técnicas de prueba'], [
      src('https://www.istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf', 'ISTQB, Certified Tester Foundation Level Syllabus v4.0.1, técnicas de caja negra, incluidas las pruebas de transición entre estados.'),
      src('https://www.istqb.org/wp-content/uploads/2024/11/ISTQB-CTFL_Syllabus_2018_v3.1.1.pdf', 'ISTQB CTFL v3.1.1, técnicas estructurales/caja blanca: cobertura de sentencias, decisiones, condiciones y caminos.'),
      src(a1, 'Convocatoria GSI A1 2025, tema 96: técnicas y niveles de pruebas de software.'),
      src(a2, 'Convocatoria GSI A2 2025, tema III.7: pruebas de software.'),
      academy('17PDaqPVVwhzfeplx9bzp8XjEXm_qlami', 'bloque 39 «Calidad y mantenimiento»', 'incluye A1 96 y A2 D7 en pruebas de software; la numeración oficial A2 vigente es III.7.')
    ], { texto: '¿Cuál de las siguientes es una técnica de prueba de caja negra?', opciones: ['Prueba de camino básico.', 'Pruebas de ciclos o bucles.', 'Prueba de transición entre estados.', 'Prueba de condición y condición múltiple.'], respuesta_correcta: 2 }, 'Se confirma C. La técnica de transición entre estados diseña pruebas a partir de estados y transiciones observables. Camino básico, ciclos y cobertura de condiciones son técnicas estructurales/caja blanca. Se normaliza el singular y la terminología de los distractores.', 'vigente'],
    [6487, ['89', '90'], ['III-4'], ['diccionario de datos', 'DFD', 'MÉTRICA v3', 'entidad-relación', 'almacenes de datos'], [
      src('https://administracionelectronica.gob.es/documentacion/metodologias-guias', 'PAe, catálogo oficial de metodologías y documentación MÉTRICA v3.'),
      src('https://ereding.etsi.us.es/bibing/proyectos/use/abreproy/2782/fichero/Proyecto.pdf', 'Universidad de Sevilla, memoria técnica que reproduce las técnicas matriciales de MÉTRICA v3: la matriz almacenes/entidades relaciona cada almacén del modelo de procesos con una o varias entidades normalizadas.'),
      src('https://www.govinfo.gov/content/pkg/GOVPUB-C13-7e2e5139be6a030552d25cdc5e2bb0bc/pdf/GOVPUB-C13-7e2e5139be6a030552d25cdc5e2bb0bc.pdf', 'U.S. Department of Commerce, Manual for Data Administration, §8.2–8.4: DFD, ERD y diccionario describen aspectos complementarios; el diccionario documenta elementos y relaciones de datos.'),
      src(a1, 'Convocatoria GSI A1 2025, temas 89 y 90: modelado entidad-relación y modelado de procesos.'),
      src(a2, 'Convocatoria GSI A2 2025, tema III.4: modelado de datos y diseño de bases de datos.'),
      academy('1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN', 'bloque 38 «Análisis, diseño y construcción de sistemas de información»', 'cotejo del contenido curricular de análisis estructurado y modelado; la respuesta se contrasta con documentación de MÉTRICA y fuentes técnicas.')
    ], { texto: 'En el análisis estructurado con MÉTRICA v3, ¿qué afirmación sobre el diccionario de datos y la relación entre DFD y modelo entidad-relación es correcta?', opciones: ['El diccionario de datos complementa los DFD y modelos entidad-relación al documentar de forma común los datos y estructuras representados.', 'La matriz de consistencia relaciona los almacenes del modelo de procesos con una o varias entidades del modelo lógico normalizado.', 'Las dos afirmaciones anteriores son correctas.'], respuesta_correcta: 2 }, 'Se confirma C, con precisión añadida para que «correspondencia» no se interprete como una relación necesariamente uno a uno. MÉTRICA v3 establece una matriz que relaciona cada almacén definido en el modelo de procesos con una o varias entidades del modelo lógico normalizado; el diccionario documenta los elementos comunes y complementa los diagramas. El material académico ubica estos contenidos, pero la correspondencia se contrasta con MÉTRICA.', 'corregida'],
    [6488, ['32', '87', '95'], ['II-15', 'III-2'], ['planificación estratégica', 'plan de sistemas de información', 'MÉTRICA v3', 'recursos y presupuesto'], [
      src('https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A8d2cfee5-5617-4dea-8cf8-7b7a0131de84/METRICA_V3_Panificacion_de_Sistemas_de_Informacion.pdf', 'Ministerio de Administraciones Públicas, MÉTRICA v3, Planificación de Sistemas de Información: situación actual, arquitectura, proyectos priorizados, calendario y evaluación de recursos para presupuestar.'),
      src(a1, 'Convocatoria GSI A1 2025, tema 87: planificación estratégica de sistemas de información; tema 95: metodología MÉTRICA.'),
      src(a2, 'Convocatoria GSI A2 2025, temas II.15 (viabilidad, presupuestación y costes) y III.2 (planificación del desarrollo).'),
      academy('1fti1UIhEIqK3pY8GBENi-4rTKwoEG8tF', 'bloque 12 «Estrategias y herramientas del directivo público»', 'incluye el plan de sistemas y planificación estratégica (A1 87) y su contexto de presupuestación.'),
      academy('17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3', 'bloque 17 «Adquisición de sistemas y rentabilidad de inversiones»', 'cubre MÉTRICA, evaluación económica, presupuestación y control de costes; no se adopta una regla general de que la planificación estratégica excluya los costes.')
    ], { texto: 'Según MÉTRICA v3, ¿qué actividad forma parte del Plan de Sistemas de Información y sirve para preparar el presupuesto?', opciones: ['Evaluar los recursos necesarios para los proyectos que se desarrollarán en el próximo año.', 'Estimar exclusivamente el coste de todos los proyectos durante todo el horizonte del plan, sin priorizarlos.', 'Fijar el coste de cada servicio TIC para usuarios finales como único producto del plan.', 'Sustituir el análisis de la situación actual por una previsión de gastos.'], respuesta_correcta: 0 }, 'La pregunta original presentaba como excepción el coste de las actuaciones, aunque MÉTRICA v3 sí incluye evaluar los recursos necesarios para los proyectos del próximo año para considerarlos en presupuestos. Se reemplaza por una formulación directa, inequívoca y comprobable; respuesta A.', 'corregida'],
    [6489, ['58'], ['II-6'], ['CORBA', 'ORB', 'DII', 'DSI', 'arquitectura distribuida'], [
      src('https://www.omg.org/spec/CORBA/3.4', 'Object Management Group, Common Object Request Broker Architecture, versión formal 3.4 (2021), especificación normativa de ORB e interfaces CORBA.'),
      src('https://www.omg.org/gettingstarted/orb_basics.htm', 'OMG, Object Request Broker Basics: describe el ORB, la invocación dinámica DII del cliente y otros elementos de la arquitectura.'),
      src('https://www.inf.fu-berlin.de/lehre/SS02/corba/doc/98-12-01.pdf', 'OMG CORBA 2.3 specification, §2.1: estructura ORB; interfaces de invocación dinámica en cliente y skeleton dinámico en servidor.'),
      src(a1, 'Convocatoria GSI A1 2025, tema 58: procesamiento cooperativo y arquitecturas distribuidas/cliente-servidor.'),
      src(a2, 'Convocatoria GSI A2 2025, tema II.6: arquitectura cliente-servidor e interoperabilidad de componentes.'),
      academy('1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ', 'bloque 28 «Arquitectura SOA y requisitos no funcionales»', 'cotejo con middleware, interoperabilidad y procesamiento distribuido; CORBA se contrasta con OMG.')
    ], { texto: '¿Cuál de los siguientes no forma parte de las interfaces o elementos habituales de la arquitectura CORBA?', opciones: ['Dynamic Invocation Interface (DII).', 'Object Request Broker (ORB).', 'Dynamic Skeleton Interface (DSI).', 'Ninguno: los tres forman parte de CORBA.'], respuesta_correcta: 3 }, 'Se confirma D: la DII permite invocación dinámica en el lado cliente, la DSI admite despacho dinámico en el servidor y el ORB coordina las solicitudes entre objetos. Se sustituye «Todos lo son» por «Ninguno: los tres forman parte» para que la respuesta a la pregunta negativa sea más clara.', 'vigente'],
    [6490, ['89'], ['III-4'], ['modelo entidad-relación', 'restricciones sintácticas', 'formato de atributo', 'dominio'], [
      src('https://www.govinfo.gov/content/pkg/GOVPUB-C13-7e2e5139be6a030552d25cdc5e2bb0bc/pdf/GOVPUB-C13-7e2e5139be6a030552d25cdc5e2bb0bc.pdf', 'U.S. Department of Commerce, Manual for Data Administration: diccionario de datos, reglas de definición y documentación de datos y atributos.'),
      src('https://csis.pace.edu/lixin/doc/dps-dissertation/DPS-Dissertation-ChristianMartinez-2016.pdf', 'Christian Martinez, Pace University, Modular Integrated Syntactic/Semantic XML Data Validation (2016): distingue restricciones de formato/tipo sintácticas de reglas semánticas dependientes del significado o contexto.'),
      src(a1, 'Convocatoria GSI A1 2025, tema 89: entidades, atributos y dominios en análisis del dominio.'),
      src(a2, 'Convocatoria GSI A2 2025, tema III.4: modelo relacional, normalización y diseño de datos.'),
      academy('1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN', 'bloque 38 «Análisis, diseño y construcción de sistemas de información»', 'cotejo del encaje de modelado de datos y atributos; la distinción de formato sintáctico frente a validez semántica se apoya en fuentes técnicas.')
    ], { texto: 'En una especificación de atributos de datos, ¿cómo se denominan las restricciones que fijan el formato o la representación admisible de un valor, como tipo, longitud o patrón?', opciones: ['Restricciones semánticas.', 'Restricciones sintácticas.', 'Restricciones estructurales.', 'Restricciones de usuario.'], respuesta_correcta: 1 }, 'Se confirma B y se explicita qué significa «formato»: tipo, longitud o patrón de representación. Las restricciones semánticas comprueban la validez según el significado o reglas de negocio; las estructurales se refieren a relaciones del modelo/esquema.', 'corregida']
  ]
};

const edits = Object.fromEntries(B.records.map(([id, , , , , edit]) => [id, edit]));
apply({ ...B, records: B.records.map(([id, a, b, tags, sources, edit, note, state]) => [id, a, b, tags, sources, null, note, state]), edits });
