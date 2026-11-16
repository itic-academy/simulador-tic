const apply = require('./aplicar-lote.cjs');

const gsmTdma = 'https://www.etsi.org/deliver/etsi_ts/145000_145099/145002/19.00.00_60/ts_145002v190000p.pdf';
const gsmDtx = 'https://www.etsi.org/deliver/etsi_ts/145000_145099/145008/19.00.00_60/ts_145008v190000p.pdf';
const pkcs10 = 'https://www.rfc-editor.org/rfc/rfc2986';
const voice20 = 'https://www.w3.org/TR/voicexml20/';
const voice21 = 'https://www.w3.org/TR/voicexml21/';
const voice21History = 'https://www.w3.org/standards/history/voicexml21/';
const voice30 = 'https://www.w3.org/TR/voicexml30/';
const metrica = 'https://administracionelectronica.gob.es/documentacion/metodologias-guias/pae-metrica-v3';
const metricaDfd = 'https://administracionelectronica.gob.es/content/dam/pae/pae-home/documentos/documentacion/metodologias-y-guias/metricav3/METRICA_V3_Tecnicas.pdf';
const eevdf = 'https://docs.kernel.org/scheduler/sched-eevdf.html';
const nice = 'https://docs.kernel.org/scheduler/sched-nice-design.html';

const records = [
  [7721, [123], ['IV-15'], ['GSM', 'TDMA', 'transmisión por ráfagas', 'DTX', 'salto de frecuencia', 'paging'], [
    { url: gsmTdma, referencia: 'ETSI/3GPP TS 45.002, GSM/EDGE multiplexing and multiple access on the radio path: la interfaz GSM organiza los recursos en tramas TDMA, intervalos de tiempo y ráfagas; también contempla salto lento de frecuencia.' },
    { url: gsmDtx, referencia: 'ETSI/3GPP TS 45.008, GSM/EDGE radio subsystem link control, apartado 8.3: especifica la transmisión discontinua (DTX) y los subconjuntos de tramas transmitidas durante ella. La opción «transmisión continua» no describe el funcionamiento radio por ráfagas de la estación móvil.' }
  ], {
    texto: 'En la interfaz radio GSM, ¿qué opción contradice la transmisión por ráfagas en tramas TDMA y la transmisión discontinua (DTX)?',
    opciones: ['Salto de frecuencia de radio.', 'Transmisión discontinua.', 'Transmisión continua del terminal móvil como modo de acceso radio.', 'Paging (localización/paginación).'],
    respuesta_correcta: 2
  }, 'Corregida C. GSM emplea acceso TDMA con transmisiones en ráfagas y contempla DTX; el salto de frecuencia y los canales/procedimientos de paging también pertenecen al sistema. La opción C se acota al modo de acceso radio del terminal para no confundirlo con señales de difusión/control que puedan transmitirse continuamente en otros contextos.', 'corregida'],
  [7722, [80, 81], ['I-6'], ['PKCS#10', 'CSR', 'solicitud de certificación', 'clave pública', 'PKI'], [
    { url: pkcs10, referencia: 'RFC 2986, PKCS #10: especifica la sintaxis CertificationRequest usada para solicitar a una autoridad de certificación que emita un certificado de clave pública.' }
  ], {
    texto: '¿Qué sintaxis/formato normalizado se utiliza para codificar una solicitud de certificación de clave pública (CSR) enviada a una autoridad de certificación?',
    opciones: ['PKCS #10.', 'PKCS #12.', 'X.500.', 'X.509.'],
    respuesta_correcta: 0
  }, 'Vigente A. PKCS #10 define la estructura de una solicitud de certificación (CSR). PKCS #12 sirve para intercambiar contenedores de información personal, X.500 trata de servicios/directorios y X.509 define certificados de clave pública y otros elementos de PKI.', 'vigente'],
  [7723, [77], ['II-9', 'II-12'], ['VoiceXML', 'W3C', 'XML', 'VoiceXML 2.1', 'IVR'], [
    { url: voice20, referencia: 'W3C VoiceXML 2.0, introducción: documenta el origen de VoiceXML en Phone Markup Language (PML), creado en un proyecto de AT&T en 1995.' },
    { url: voice21, referencia: 'W3C VoiceXML 2.1: Recommendation de W3C que amplía y mantiene compatibilidad con 2.0; por ello, 2.0 no es la última Recommendation publicada.' },
    { url: voice21History, referencia: 'Historial oficial W3C de VoiceXML 2.1: registra su publicación como Recommendation el 19 de junio de 2007.' },
    { url: voice30, referencia: 'W3C VoiceXML 3.0 figura como Working Draft, no como Recommendation; no desplaza a VoiceXML 2.1 como última Recommendation publicada.' }
  ], {
    texto: 'Indique la afirmación FALSA respecto a VoiceXML.',
    opciones: [
      'Es un lenguaje de marcado basado en XML.',
      'Tiene su origen en el Phone Markup Language (PML) de AT&T.',
      'VoiceXML 2.1 es una Recommendation del W3C.',
      'La última Recommendation del W3C para VoiceXML es la versión 2.0.'
    ],
    respuesta_correcta: 3
  }, 'Corregida D. VoiceXML 2.1, y no 2.0, es la Recommendation publicada más reciente que registra W3C para esta especificación; 3.0 fue objeto de trabajo, pero no sustituyó a 2.1 como Recommendation. Se mantienen como correctas su base XML, el origen PML de AT&T y el estatus de 2.1.', 'corregida'],
  [7724, [90, 95], ['III-2'], ['MÉTRICA v3', 'análisis estructurado', 'DFD', 'balanceo', 'descomposición'], [
    { url: metrica, referencia: 'Portal de Administración electrónica (PAe), ficha oficial de MÉTRICA v.3: metodología promovida por el Consejo Superior de Informática para sistematizar las actividades del ciclo de vida del software.' },
    { url: metricaDfd, referencia: 'MÉTRICA v.3, Técnicas y Prácticas, apartado Diagrama de Flujo de Datos: la validación de descomposiciones conserva el equilibrio de entradas y salidas entre un DFD y los DFD de nivel inferior que lo detallan.' }
  ], {
    texto: 'Según la técnica de Diagramas de Flujo de Datos de MÉTRICA v3, ¿cómo se comprueba la consistencia de una descomposición?',
    opciones: [
      'Aplicando la Métrica v3 como si fuera una métrica de software.',
      'Calculando una métrica denominada DFQM (Data Flow Quality Model).',
      'Comprobando el balance de los flujos entre DFD de niveles consecutivos.',
      'Comprobando el balance entre DFD distintos del mismo nivel, sin atender a su relación de descomposición.'
    ],
    respuesta_correcta: 2
  }, 'Corregida C. En MÉTRICA v3 la consistencia se valida al descomponer: las entradas y salidas externas del proceso padre deben quedar representadas de forma compatible en el DFD hijo. No es una métrica llamada «Métrica v3» ni un balance arbitrario entre diagramas del mismo nivel.', 'corregida'],
  [7725, [59], ['II-2'], ['planificación de CPU', 'tiempo de respuesta', 'productividad', 'prioridades', 'inanición', 'equidad'], [
    { url: eevdf, referencia: 'Documentación actual del kernel Linux, EEVDF Scheduler: el planificador fair asigna tiempo de CPU a tareas ejecutables en función de su prioridad y contabiliza el retraso respecto a su cuota justa.' },
    { url: nice, referencia: 'Documentación del kernel Linux sobre prioridades nice: advierte que una planificación estricta SCHED_FIFO no es inmune a inanición; esta puede ser un efecto de una política, no un objetivo deseable.' }
  ], {
    texto: '¿Cuál NO es un objetivo deseable al equilibrar las políticas de planificación de CPU?',
    opciones: [
      'Mantener bajo el tiempo de respuesta de las tareas interactivas.',
      'Ofrecer alta productividad a las tareas que se ejecutan en segundo plano.',
      'Provocar deliberadamente la inanición de procesos que esperan CPU.',
      'Respetar las prioridades definidas para los procesos.'
    ],
    respuesta_correcta: 2
  }, 'Corregida C. La inanición es un efecto indeseado en el que un proceso espera indefinidamente, no una meta del planificador. No obstante, respetar prioridades estrictas puede causar inanición en algunas políticas; los planificadores justos o mecanismos como el envejecimiento pueden mitigarla, sin que todas las políticas garanticen lo mismo.', 'corregida']
];

apply({ numero: '1484', fecha: '2026-11-16', records });
