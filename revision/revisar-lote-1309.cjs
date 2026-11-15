const aplicar = require('./aplicar-lote.cjs');

const edits = {
  6866: {
    texto: '¿En qué año tomó posesión la primera promoción de ingreso por oposición del Cuerpo Superior de Sistemas y Tecnologías de la Información de la Administración del Estado?',
    opciones: ['1990', '1991', '1992', '1993']
  },
  6867: {
    texto: 'Según el Lexicon de PMI, ¿qué entidad organizativa centraliza principalmente actividades de gestión de carteras, programas o proyectos?',
    opciones: ['La función que define las políticas corporativas de seguridad de la información.', 'La función que define la arquitectura empresarial de tecnologías de la información.', 'La función que fija la estrategia corporativa de tecnologías de la información.', 'Una oficina de gestión de proyectos (PMO).']
  },
  6868: {
    texto: 'En una arquitectura SNMP, ¿qué función desempeña una estación o sistema de gestión de red (NMS)?',
    opciones: ['Planifica el desarrollo de aplicaciones y asigna requisitos a los equipos de programación.', 'Ejecuta aplicaciones de gestión que monitorizan y controlan los elementos de red mediante agentes.', 'Administra exclusivamente la seguridad física del centro de proceso de datos.', 'Sustituye a los encaminadores y conmuta el tráfico de usuario entre redes.']
  },
  6869: {
    texto: 'Según el control PE-11 de NIST SP 800-53 Rev. 5, ¿qué medida permite responder a la pérdida de la alimentación primaria de un sistema ubicado en un centro de datos?',
    opciones: ['Disponer de un sistema de alimentación ininterrumpida (SAI/UPS) que permita apagar ordenadamente el sistema o pasar a una fuente de energía alternativa de larga duración.', 'Contratar necesariamente a dos comercializadoras eléctricas, aunque no haya doble acometida ni fuentes de respaldo.', 'Limitar el edificio a cuatro plantas como condición de continuidad eléctrica.', 'Instalar paneles solares en la cubierta como sustituto obligatorio del SAI y de la alimentación de respaldo.']
  },
  6870: {
    texto: 'Según la Guía PMBOK, sexta edición, ¿cuál de estas actividades no es un proceso de Gestión del Alcance del Proyecto?',
    opciones: ['Validar el alcance.', 'Identificar el alcance.', 'Recopilar requisitos.', 'Controlar el alcance.']
  }
};

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const boePassed = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-1993-735';
const pmiLexicon = 'https://www.pmi.org/-/media/pmi/documents/registered/pdf/pmbok-standards/pmi-lexicon-pm-terms.pdf?rev=447328d841c249af985d14177ddd5f95';
const snmp = 'https://datatracker.ietf.org/doc/rfc3411/';
const nist = 'https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf';
const pmbok6 = 'https://www.pmi.org/-/media/pmi/documents/public/pdf/pmbok-standards/pmbok-guide-6th-edition-errata-4th-printing.pdf?sc_lang_temp=en';

const records = [
  [6866, [24], ['I-8'], ['Cuerpo Superior de Sistemas y Tecnologías de la Información', 'primera promoción', 'oposición', 'toma de posesión', '1993'], [
    { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-1993-13898', referencia: 'Resolución de 26 de mayo de 1993 publicada en el BOE de 29 de mayo: nombramiento de funcionarios de carrera del Cuerpo Superior de Sistemas y Tecnologías de la Información tras la primera convocatoria de 20 de diciembre de 1991.' },
    { url: boePassed, referencia: 'Resolución del tribunal de 11 de diciembre de 1992, publicada el 12 de enero de 1993: publica las personas aprobadas del proceso selectivo convocado en 1991; diferencia aprobación del nombramiento y toma de posesión.' },
    { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-1993-18427', referencia: 'Resolución de 28 de julio de 1993, publicada el 31 de julio: tras el curso selectivo del proceso convocado en 1991, nombra funcionarios de carrera a los funcionarios en prácticas; fija toma de posesión dentro del plazo de un mes desde el día siguiente a la publicación.' },
    { url: a1, referencia: 'Convocatoria estatal A1 GSI 2025, anexo I, tema 24: empleo público y planificación de recursos humanos en las Administraciones públicas.' },
    { url: a2, referencia: 'Convocatoria estatal A2 GSI 2025, anexo, tema I.8: régimen jurídico del empleo público y TREBEP.' }
  ], edits[6866], 'Se mantiene 1993, pero se identifica que se pregunta por la primera promoción de ingreso por oposición, no por la integración transitoria de personal ya existente, que también se suele denominar «promoción 0». El BOE documenta la convocatoria de 1991, aprobados en 1992 y nombramiento/toma de posesión de la primera cohorte tras el curso selectivo en 1993.', 'corregida'],
  [6867, [32, 35], ['III-2'], ['PMI', 'PMO', 'oficina de gestión de proyectos', 'carteras', 'programas', 'proyectos', 'estrategia TIC'], [
    { url: pmiLexicon, referencia: 'PMI Lexicon of Project Management Terms, versión 5.0, voz «project management office» (p. 22): entidad organizativa, normalmente departamento o equipo, principalmente encargada de centralizar actividades de gestión de carteras, programas y/o proyectos; el alcance varía según las necesidades de la organización.' },
    { url: a1, referencia: 'Convocatoria estatal A1 GSI 2025, anexo I, temas 32 y 35: funciones del directivo TIC y dirección/gestión de proyectos TIC.' },
    { url: a2, referencia: 'Convocatoria estatal A2 GSI 2025, anexo, tema III.2: gestión y planificación del proceso de desarrollo y metodologías de gestión de proyectos.' }
  ], edits[6867], 'Se cambia el enunciado porque la etiqueta «esencialmente estratégica» no clasifica de modo universal las funciones de una PMO: su influencia varía según su mandato organizativo. La nueva pregunta evalúa la definición verificable de PMI; la respuesta es D, PMO, sin afirmar que ninguna oficina de proyectos pueda participar en la estrategia.', 'corregida'],
  [6868, [34], ['II-8'], ['NMS', 'SNMP', 'estación de gestión', 'agentes', 'elementos de red', 'monitorización', 'control'], [
    { url: snmp, referencia: 'IETF RFC 3411, arquitectura del marco de gestión SNMP: las aplicaciones de gestión monitorizan y controlan elementos gestionados; las estaciones/sistemas de gestión interactúan con agentes en los elementos de red.' },
    { url: 'https://www.rfc-editor.org/rfc/rfc3411', referencia: 'IETF/RFC Editor, RFC 3411, texto estándar de arquitectura SNMP y aplicaciones que gestionan elementos de red.' },
    { url: a1, referencia: 'Convocatoria estatal A1 GSI 2025, anexo I, tema 34: organización y funcionamiento de centros de sistemas de información, incluidas las funciones de comunicaciones y sistemas.' },
    { url: a2, referencia: 'Convocatoria estatal A2 GSI 2025, anexo, tema II.8: arquitectura de redes y protocolos, base técnica de la gestión SNMP.' }
  ], edits[6868], 'Se sustituye la pregunta de organigrama —que no puede fijar universalmente a qué departamento pertenece un NMS— por la función interoperable y estandarizada: la estación de gestión ejecuta aplicaciones que monitorizan/controlan elementos mediante agentes. Se mantiene el contenido NMS/SNMP y se evita hacer pasar una decisión organizativa local por una regla general.', 'corregida'],
  [6869, [53], ['II-1'], ['centro de proceso de datos', 'CPD', 'alimentación eléctrica', 'SAI', 'UPS', 'grupo electrógeno', 'NIST PE-11', 'continuidad'], [
    { url: nist, referencia: 'NIST SP 800-53 Rev. 5, control PE-11, Emergency Power: proporcionar UPS para apagado ordenado o transición a alimentación alternativa de larga duración; sus mejoras cubren fuentes de respaldo alternativas y autónomas. Aplica a recursos de sistemas, incluidos centros de datos.' },
    { url: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final', referencia: 'Ficha oficial NIST de SP 800-53 Rev. 5 Update 1: controles de seguridad y privacidad, familia PE (Physical and Environmental Protection).' },
    { url: a1, referencia: 'Convocatoria estatal A1 GSI 2025, anexo I, tema 53: servidores, medidas de seguridad y diseño/implantación/gestión de centros de proceso de datos.' },
    { url: a2, referencia: 'Convocatoria estatal A2 GSI 2025, anexo, tema II.1: tecnologías de ordenadores, infraestructura y capacidades de sistemas; correspondencia general con los equipos que soporta el CPD, sin epígrafe específico de potencia.' }
  ], edits[6869], 'Se conserva la respuesta A en lo sustantivo, pero se elimina el consejo de contratar necesariamente a varios suministradores, que no garantiza redundancia física. Se pregunta por el control identificable PE-11 de NIST: UPS para continuidad inmediata, apagado ordenado o paso a fuente de respaldo. La suficiencia concreta depende del análisis de disponibilidad y del diseño del centro.', 'corregida'],
  [6870, [35], ['III-2'], ['PMBOK', 'sexta edición', 'gestión del alcance', 'recopilar requisitos', 'validar alcance', 'controlar alcance', 'PMI'], [
    { url: pmbok6, referencia: 'PMI, PMBOK Guide sexta edición, fe de erratas oficial: el área Project Scope Management enumera Collect Requirements, Define Scope, Create WBS, Validate Scope y Control Scope, además de Plan Scope Management. «Identify the scope» no es uno de esos procesos.' },
    { url: a1, referencia: 'Convocatoria estatal A1 GSI 2025, anexo I, tema 35: dirección y gestión de proyectos TIC.' },
    { url: a2, referencia: 'Convocatoria estatal A2 GSI 2025, anexo, tema III.2: gestión y planificación de proyectos y metodologías de desarrollo.' }
  ], edits[6870], 'Se mantiene B y se fija explícitamente la sexta edición: las guías posteriores no necesariamente conservan la misma estructura de procesos. «Identificar el alcance» no figura entre los procesos de Gestión del Alcance de PMBOK 6; Recopilar requisitos, Validar alcance y Controlar alcance sí figuran.', 'corregida']
];

aplicar({ numero: '1309', fecha: '2026-11-15', records });
