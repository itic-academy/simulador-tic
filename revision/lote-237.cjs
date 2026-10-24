const apply = require('./aplicar-lote.cjs');

const records = [
  [1501, [83], ['II-1'], ['escáner', 'CCD', 'RGB', 'señal analógica', 'conversión A/D'], [
    {url: 'https://files.support.epson.com/pdf/exp16_/exp16_ts.pdf', referencia: 'Epson, Scanner Technical Brief: los CCD miden la luz reflejada y la convierten en tensión analógica.'},
    {url: 'https://www.manualslib.com/manual/2536501/Ricoh-Aficio-Color-3006.html?page=83', referencia: 'Ricoh Aficio Color 3006 Service Manual, sección Scanner: el CCD en color genera señales RGB analógicas y el convertidor A/D las convierte en muestras digitales por píxel.'}
  ], null, 'La pregunta original generalizaba entre tecnologías de escáner y mezclaba la física del sensor con el procesamiento posterior. Se acota al recorrido de señal de un escáner CCD en color documentado por el fabricante: el CCD convierte luz reflejada en señales RGB analógicas y el convertidor A/D las digitaliza para su procesamiento. Así se conservan las ideas válidas de las opciones originales sin afirmar que cualquier escáner use idéntica arquitectura.', 'corregida'],
  [1502, [70], ['III-5'], ['fonética acústica', 'señal vocal', 'frecuencia fundamental', 'formantes', 'transiciones'], [
    {url: 'https://speechprocessingbook.aalto.fi/introduction/speech-production-and-acoustic-properties/', referencia: 'Aalto University, Introduction to Speech Processing, Acoustic properties of speech signals: describe F0, formantes, intensidad y estructura temporal como propiedades acústicas de la señal de habla.'},
    {url: 'https://www.sheffield.ac.uk/linguistics/home/all-about-linguistics/about-website/branches-linguistics/phonetics/what-do-phoneticians-study/acoustic', referencia: 'University of Sheffield, Acoustic Phonetics: análisis de las propiedades físicas del habla y de ondas mediante frecuencia, amplitud y duración.'}
  ], null, 'La opción correcta es la que caracteriza el nivel acústico por propiedades físicas de la señal vocal. La frecuencia fundamental y los formantes son parámetros acústicos; las transiciones describen cambios espectrales en el tiempo. Se corrige la errata gramatical de un distractor y se hace explícita la distinción con los niveles fonémico/fonológico y sintáctico.', 'vigente'],
  [1503, [85], [], ['blockchain', 'red permisionada', 'red no permisionada', 'acceso', 'Vitalik Buterin'], [
    {url: 'https://blog.ethereum.org/2015/08/07/on-public-and-private-blockchains', referencia: 'Vitalik Buterin, Ethereum Foundation, On Public and Private Blockchains (2015): describe redes públicas, consorciadas y privadas, con distintos grados de permiso para leer o escribir.'},
    {url: 'https://ethereum.org/glossary/#permissionless', referencia: 'Ethereum.org, glosario: permissionless permite que cualquiera participe sin autorización previa; una cadena privada puede ser permissioned.'}
  ], null, 'La clasificación por permisos comprende redes permissionless (participación abierta) y permissioned (participación o determinadas operaciones restringidas). El artículo citado de Buterin desarrolla además las categorías pública, consorciada y privada; no las reduce a una dicotomía universal, pues los permisos de lectura y escritura pueden variar. Se reformula el enunciado como clasificación de alto nivel por acceso, y la respuesta correcta indica que ambas categorías existen.', 'corregida'],
  [1504, [35, 87], [], ['planificación estratégica', 'recursos organizativos', 'capacidades', 'programación estratégica'], [
    {url: 'https://www.gao.gov/assets/aimd-99-32.pdf', referencia: 'U.S. GAO, Executive Guide: Leading Practices in Capital Decision-Making, principio I: integrar objetivos organizativos en la decisión, valorar recursos necesarios y brechas de capacidad existentes.'},
    {url: 'https://www.gov.uk/government/publications/effective-practice-in-strategic-planning-in-further-education/guide-to-effective-practice-in-strategic-planning-in-further-education', referencia: 'Department for Education, Guide to effective practice in strategic planning: la planificación estratégica incorpora una evaluación interna de recursos y capacidades disponibles para identificar fortalezas y brechas.'}
  ], null, 'Se corrige la redacción defectuosa y se concreta la pregunta: el análisis de recursos y capacidades se realiza al formular la planificación estratégica, para comprobar qué objetivos puede sostener la organización y qué brechas debe atender. Las guías de GAO y del Department for Education vinculan explícitamente evaluación de capacidades/recursos con objetivos y estrategia. La respuesta no debe interpretarse como una regla exclusiva de una metodología concreta.', 'corregida'],
  [1505, [88], ['III-3'], ['Pressman', 'especificación de requisitos', 'SRS', 'necesidades del cliente', 'validación'], [
    {url: 'https://www.iso.org/obp/ui?_escaped_fragment_=iso%3Astd%3Aiso-iec-ieee%3A29148%3Aed-2%3Av1%3Aen', referencia: 'ISO/IEC/IEEE 29148:2018, Systems and software engineering — Requirements engineering: define la especificación de requisitos como colección estructurada de requisitos esenciales del software y sus interfaces; puede incluir restricciones de diseño, pero no selecciona por sí sola una implementación concreta.'},
    {url: 'https://www.krishnagudi.com/wp-content/uploads/2024/10/Rogers-Pressman.pdf', referencia: 'Pressman y Maxim, Software Engineering: A Practitioner's Approach, 9.ª ed., cap. 6, §6.1.1: enumera los tres objetivos del modelo de requisitos: describir lo que requiere el cliente, establecer base para el diseño y definir requisitos validables al construir el software.'}
  ], null, 'Pressman describe la ingeniería/especificación de requisitos como el mecanismo para entender y documentar qué necesita el cliente, analizar la necesidad, especificar y validar requisitos y establecer una base para diseño y construcción. La selección de la tecnología de implementación no es por sí misma uno de esos objetivos, aunque las restricciones tecnológicas que formen parte del problema sí pueden documentarse como requisitos. Se reescribe el enunciado y la opción para evitar sugerir que la especificación nunca recoge restricciones de diseño.', 'corregida']
];

const edits = {
  1501: {texto: 'En un escáner CCD en color, ¿qué recorrido describe correctamente la conversión de la imagen?', opciones: [
    'El CCD genera directamente un archivo RGB comprimido y el equipo no realiza conversión digital.',
    'El CCD convierte la luz reflejada en señales analógicas de color y un convertidor A/D las digitaliza para su procesamiento.',
    'El escáner transmite al ordenador la luz reflejada sin convertirla en señales eléctricas.',
    'El ordenador recibe valores digitales antes de que el sensor mida la luz de la imagen.'
  ], respuesta_correcta: 1 },
  1502: {texto: 'En el análisis de la señal de habla, ¿qué estudia principalmente el nivel acústico?', opciones: [
    'Propiedades físicas de la señal vocal, como frecuencia fundamental, formantes y variaciones espectrales temporales.',
    'La aplicación de reglas gramaticales a la secuencia de palabras reconocidas.',
    'La estructura de morfemas y la función sintáctica de cada palabra.',
    'La determinación exclusiva de qué fonemas cambian el significado en una lengua.'
  ], respuesta_correcta: 0 },
  1503: {texto: 'En una clasificación de alto nivel de las redes blockchain según los permisos de participación, ¿qué categorías se distinguen?', opciones: [
    'Solo redes privadas, porque toda blockchain restringe la participación.',
    'Solo redes públicas, porque no se pueden restringir los permisos de lectura o escritura.',
    'Redes permissioned y permissionless, aunque dentro de ellas los permisos de lectura y escritura pueden configurarse de distintas formas.',
    'Únicamente redes de prueba de trabajo y de prueba de participación, que son tipos de acceso.'
  ], respuesta_correcta: 2 },
  1504: {texto: 'En la planificación estratégica de una organización, ¿para qué se analiza su disponibilidad de recursos y capacidades?', opciones: [
    'Para determinar únicamente el coste contable de un desarrollo que ya está en ejecución.',
    'Para calcular solo los recursos consumidos una vez finalizado el proyecto.',
    'Para sustituir la definición de objetivos por una lista de compras tecnológicas.',
    'Para valorar qué objetivos y prioridades son viables con las capacidades disponibles y detectar brechas que requieren actuación.'
  ], respuesta_correcta: 3 },
  1505: {texto: 'Según el propósito de una especificación de requisitos de software descrito por Pressman, ¿cuál de estas tareas no es por sí misma uno de sus objetivos?', opciones: [
    'Describir las necesidades y requisitos que debe satisfacer el software.',
    'Servir de base para el diseño y permitir la validación de los requisitos especificados.',
    'Elegir la tecnología concreta de implementación, aunque la elección no derive de un requisito o restricción del sistema.',
    'Documentar de forma suficientemente precisa las funciones y características requeridas.'
  ], respuesta_correcta: 2 }
};

apply({numero: '237', fecha: '2026-10-25', records, edits});
