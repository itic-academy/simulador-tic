const apply = require('./aplicar-lote.cjs');

const records = [
  [2426, [37], ['III-2'], ['SAFe', 'Scaled Agile Framework', 'Agile Release Train', 'PI Planning', 'alineación de equipos'], [
    { url: 'https://framework.scaledagile.com/team-and-technical-agility-discipline', referencia: 'Scaled Agile Framework, Team and Technical Agility: un Agile Release Train (ART) alinea varios equipos con una misión común; PI Planning reúne a los equipos para acordar una misión compartida y objetivos del intervalo.' }
  ], '', 'Se acota la respuesta al mecanismo concreto de SAFe: los Agile Release Trains (ART) proporcionan alineación y una forma de trabajo común entre equipos, y la planificación del Program Increment (PI Planning) los alinea alrededor de una misión compartida. SAFe no es una herramienta de soporte de incidencias, de formulación de estrategia corporativa ni la técnica OKR.', 'corregida'],
  [2427, [89], ['III-9'], ['análisis orientado a objetos', 'identificación de clases', 'análisis léxico', 'modelado de información', 'tarjetas CRC'], [
    { url: 'https://john.cs.olemiss.edu/~hcc/docs/OOSoftDev/UsingCRCslides.html', referencia: 'H. Conrad Cunningham, University of Mississippi, Using CRC Cards: análisis de requisitos y de informes para extraer sustantivos/frases nominales como clases candidatas; las tarjetas CRC representan clases, responsabilidades y colaboradores.' },
    { url: 'https://www.inf.ed.ac.uk/teaching/courses/inf1/op/Tutorials/2008/crc.html', referencia: 'University of Edinburgh, OOP Tutorial: una técnica habitual para proponer tarjetas/clases consiste en analizar sustantivos y verbos de la especificación; las tarjetas CRC documentan clase, responsabilidades y colaboradores.' }
  ], '', 'Se reconstruye el enunciado para que no dependa de interpretar «método» como una lista cerrada. En análisis orientado a objetos, el análisis léxico de requisitos ayuda a proponer clases candidatas; el modelado de información/dominio identifica conceptos y relaciones; y CRC (Class-Responsibility-Collaborator) ayuda a descubrir y evaluar clases, responsabilidades y colaboraciones. Se corrige la expansión errónea «Collaboration Rehusabilities Cards». Son técnicas complementarias: ninguna convierte automáticamente cada sustantivo o concepto en una clase.', 'corregida'],
  [2428, [58], ['II-6'], ['WS-BPEL', 'BPEL', 'OASIS', 'orquestación', 'WSDL', 'servicios web'], [
    { url: 'https://docs.oasis-open.org/wsbpel/2.0/OS/wsbpel-v2.0-OS.html', referencia: 'OASIS Standard, Web Services Business Process Execution Language (WS-BPEL) Version 2.0: lenguaje XML para definir comportamiento de procesos de negocio basado en servicios web.' },
    { url: 'https://www.oasis-open.org/committees/wsbpel/faq.php', referencia: 'OASIS WS-BPEL TC FAQ: WS-BPEL 2.0 es un lenguaje de orquestación, basado en servicios con contrato WSDL 1.1, y distingue orquestación de coreografía.' }
  ], '', 'Se precisa el nombre normalizado WS-BPEL (Web Services Business Process Execution Language), cuya versión 2.0 fue aprobada como estándar OASIS y define orquestación de procesos de negocio mediante servicios web. El reactivo no afirma que sea hoy la opción predominante ni que sea el estándar de coreografía; XPDL se centra en intercambio de definiciones de procesos, SPEM en procesos de ingeniería de software e IDEF es una familia de técnicas de modelado.', 'corregida'],
  [2429, [94], ['III-3'], ['prototipos', 'requisitos', 'validación', 'ingeniería del software'], [
    { url: 'https://swehb.nasa.gov/spaces/7150/pages/16449673/SWE-055%2B-%2BRequirements%2BValidation', referencia: 'NASA Software Engineering Handbook, SWE-055 Requirements Validation: las demostraciones con prototipos permiten que las partes interesadas evalúen soluciones propuestas; son una técnica de validación cuando el presupuesto, el calendario y la participación lo permiten.' }
  ], '', 'Se sustituye el reactivo porque varias opciones originales eran falsas o absolutas: la escasez de información suele justificar explorar requisitos con prototipos; los estándares de datos no dejan de aplicarse; y no todo sistema necesita prototipado. La nueva pregunta prueba un uso documentado del prototipo —explorar o validar requisitos con usuarios— sin presentarlo como obligatorio ni como sustituto de pruebas del producto.', 'corregida'],
  [2430, [95], ['III-4'], ['MÉTRICA v3', 'ASI 6', 'modelo lógico de datos', 'análisis estructurado', 'modelado de datos'], [
    { url: 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Aad870327-56b7-4dfa-af15-e62222f45b90/METRICA_V3_Analisis_del_Sistema_de_Informacion.pdf', referencia: 'Ministerio de Administraciones Públicas, MÉTRICA v3, Análisis del Sistema de Información: ASI 6.2 obtiene el modelo lógico a partir del modelo conceptual; en análisis estructurado se completa y normaliza el modelo lógico (ASI 6.3).' }
  ], '', 'Se acota la pregunta a MÉTRICA v3: no pregunta por una fase universal del ciclo de vida. En esta metodología, el modelo de datos se elabora en la actividad ASI 6 dentro del proceso de Análisis del Sistema de Información; en la aproximación estructurada se obtiene el modelo lógico y se normaliza. El modelo físico se define después, en DSI. Se corrige el uso impreciso de «análisis estructurado» como si fuera una fase equivalente a EVS o Diseño.', 'corregida']
];

const edits = {
  2426: {
    texto: 'En SAFe, ¿qué función cumple principalmente un Agile Release Train (ART) cuando el producto requiere varios equipos ágiles?',
    opciones: [
      'Escalar incidencias desde el nivel 1 a niveles superiores de soporte.',
      'Definir por sí solo los objetivos estratégicos de toda la organización.',
      'Sustituir la planificación de producto por el seguimiento de OKR corporativos.',
      'Alinear a varios equipos con una misión y una cadencia de entrega compartidas.'
    ], respuesta_correcta: 3
  },
  2427: {
    texto: 'En análisis orientado a objetos, ¿qué conjunto contiene técnicas que pueden ayudar a identificar o evaluar clases candidatas del dominio?',
    opciones: [
      'Análisis léxico de requisitos, para proponer conceptos expresados en sustantivos.',
      'Modelado de información o del dominio, para identificar conceptos y relaciones.',
      'Tarjetas CRC (Class-Responsibility-Collaborator), para explorar clases, responsabilidades y colaboraciones.',
      'Las tres técnicas anteriores, usadas como ayudas complementarias y no como reglas automáticas.'
    ], respuesta_correcta: 3
  },
  2428: {
    texto: '¿Cómo se denomina el lenguaje XML de orquestación de procesos de negocio basados en servicios web que OASIS aprobó como estándar en su versión 2.0?',
    opciones: [
      'WS-BPEL (Web Services Business Process Execution Language).',
      'XPDL (XML Process Definition Language), especificación de intercambio de definiciones de procesos.',
      'SPEM (Software & Systems Process Engineering Meta-Model), metamodelo de procesos de ingeniería.',
      'IDEF, familia de técnicas de modelado y análisis.'
    ], respuesta_correcta: 0
  },
  2429: {
    texto: '¿Cuál es un uso apropiado de un prototipo durante la ingeniería de requisitos?',
    opciones: [
      'Permitir que usuarios y otras partes interesadas exploren una solución propuesta y ayuden a validar o aclarar requisitos.',
      'Demostrar que todos los requisitos están completos sin consultar a las partes interesadas.',
      'Evitar la validación posterior del producto y las pruebas de aceptación.',
      'Obligar a convertir cualquier prototipo en el producto final sin revisar su arquitectura.'
    ], respuesta_correcta: 0
  },
  2430: {
    texto: 'En MÉTRICA v3, ¿en qué actividad se elabora el modelo lógico de datos a partir del modelo conceptual en el proceso de análisis?',
    opciones: [
      'ASI 6, Elaboración del Modelo de Datos.',
      'EVS, Estudio de Viabilidad del Sistema.',
      'DSI 6, Diseño Físico de Datos.',
      'ASI 5, Análisis de Clases, en la aproximación orientada a objetos.'
    ], respuesta_correcta: 0
  }
};

apply({ numero: '423', fecha: '2026-10-28', records, edits });
