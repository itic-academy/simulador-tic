const aplicar = require('./aplicar-lote.cjs');

const records = [
  [
    2156, [53], ['II-6'], ['IIS 8.0', 'CPU throttling', 'application pool', 'límite de CPU', 'servidores web'],
    [
      { url: 'https://learn.microsoft.com/en-us/iis/get-started/whats-new-in-iis-8/iis-80-cpu-throttling-sand-boxing-sites-and-applications', referencia: 'Microsoft Learn, IIS 8.0 CPU Throttling: el límite se configura por application pool, limita el consumo agregado de sus procesos y permite Throttle o ThrottleUnderLoad; no reserva CPU.' },
      { url: 'https://learn.microsoft.com/en-us/iis/configuration/system.applicationhost/applicationpools/add/cpu', referencia: 'Microsoft Learn, configuración <cpu> de application pools: define el porcentaje máximo de CPU y la acción de limitación para los procesos del pool.' }
    ],
    'Microsoft Learn, CPU Throttling de IIS 8.0 y configuración de CPU de application pools',
    'Se concreta el concepto: IIS no reduce la frecuencia física del procesador ni reserva núcleos. El límite se configura por application pool y restringe el consumo de sus procesos según el límite y la acción elegidos; los pools permiten aislar cargas o tenants. La opción correcta se reescribe para expresar esa limitación sin atribuir una asignación de CPU.',
    'corregida'
  ],
  [
    2157, [53], ['IV-6'], ['ANSI/TIA-942', 'CPD', 'diseño de centros de datos', 'carga de suelo', 'iluminación', 'fuente primaria pendiente'],
    [{ url: 'https://tiaonline.org/standard/tia-942/', referencia: 'Telecommunications Industry Association, ficha oficial de ANSI/TIA-942-C (mayo de 2024): confirma la edición vigente y su alcance, pero no publica el texto del apartado ni la lista concreta que plantea la pregunta. Se conserva como referencia de alcance; no permite verificar la clave.' }],
    'ANSI/TIA, ficha oficial de TIA-942-C; texto de la cláusula concreta no disponible en la fuente pública consultada',
    'No se valida la clave heredada. La ficha oficial de TIA confirma que la edición C (mayo de 2024) cubre infraestructura, arquitectura, electricidad, seguridad y otros requisitos, pero no expone la cláusula de coordinación ni enumera qué requisitos se entregan a arquitectos e ingenieros. La pregunta parece derivar de una edición antigua, y un extracto de terceros no basta para confirmar que «distribución de la iluminación» sea la opción incorrecta conforme a la edición vigente. Queda pendiente de cotejar el texto autorizado de la cláusula aplicable; la clasificación curricular no acredita la respuesta.',
    'pendiente_fuente'
  ],
  [
    2158, [54], ['IV-12'], ['BYOD', 'EMM', 'gestión de dispositivos móviles', 'dispositivos personales', 'seguridad móvil'],
    [{ url: 'https://csrc.nist.gov/pubs/sp/800/124/r2/final', referencia: 'NIST SP 800-124 Rev. 2, final: incluye escenarios de dispositivos personales (BYOD), tecnologías de gestión centralizada y enterprise mobility management (EMM) entre las estrategias para proteger dispositivos móviles en la organización.' }],
    'NIST SP 800-124 Rev. 2, Guidelines for Managing the Security of Mobile Devices in the Enterprise',
    'Se sustituye la afirmación vaga «suele acompañarse» por una propiedad comprobable: una solución EMM puede aplicar gestión y políticas organizativas a dispositivos móviles personales enrolados bajo las condiciones de la organización. BYOD no excluye el uso de contenedores. La pregunta no equipara EMM con consentimiento ilimitado ni con propiedad empresarial del dispositivo.',
    'corregida'
  ],
  [
    2159, [65, 77], ['III-12'], ['JavaScript', 'CGI', 'contenido dinámico', 'cliente web', 'tecnología histórica', 'Java applets', 'ActiveX'],
    [
      { url: 'https://www.rfc-editor.org/info/rfc3875/', referencia: 'IETF/RFC Editor, RFC 3875 §1.1 y §3.1: CGI es la interfaz entre un servidor HTTP y un script; el servidor ejecuta el script para generar la respuesta.' },
      { url: 'https://html.spec.whatwg.org/multipage/scripting.html', referencia: 'WHATWG HTML Living Standard, scripting: define los scripts integrados en documentos y su procesamiento en el entorno del navegador.' },
      { url: 'https://www.oracle.com/technetwork/java/javase/javaclientroadmapupdatev2020may-6548840.pdf', referencia: 'Oracle Java Client Roadmap: el soporte de applets en navegadores terminó en marzo de 2019; Java SE 11 retiró la tecnología.' },
      { url: 'https://learn.microsoft.com/en-gb/previous-versions/windows/internet-explorer/ie-it-pro/internet-explorer-11/ie11-deploy-guide/out-of-date-activex-control-blocking', referencia: 'Microsoft Learn, documentación heredada de Internet Explorer: ActiveX es tecnología de controles del navegador asociada al Internet Explorer retirado; Microsoft Edge no admite esos controles.' }
    ],
    'RFC 3875, WHATWG HTML Living Standard y documentación de Oracle y Microsoft sobre tecnologías heredadas del navegador',
    'Se acota el enunciado a la arquitectura clásica de páginas web: CGI se ejecuta en el servidor como interfaz para invocar scripts, mientras que JavaScript y los antiguos applets/controles ActiveX eran tecnologías de ejecución en el cliente. Se marca histórica porque applets y ActiveX ya no representan opciones de uso normal en navegadores actuales; no se presenta la lista como tecnologías vigentes equivalentes.',
    'historica'
  ],
  [
    2160, [73], [], ['SCORM', 'ADL', 'e-learning', 'Content Aggregation Model', 'empaquetado de contenidos'],
    [{ url: 'https://adlnet.gov/assets/uploads/SCORM_Users_Guide_for_Programmers.pdf', referencia: 'ADL Initiative, SCORM Users Guide for Programmers, sección 13.2.1: describe el libro Content Aggregation Model de SCORM y su función de empaquetar, describir, descubrir y secuenciar componentes de una experiencia de aprendizaje.' }],
    'ADL Initiative, SCORM Users Guide for Programmers, descripción del libro Content Aggregation Model',
    'Se reformula para evitar llamar a SCORM simplemente «un estándar de modelo de agregación»: SCORM es un modelo de referencia de ADL y su libro CAM define componentes y métodos de agregación/empaquetado, metadatos e información de secuenciación de contenidos. Entre las opciones, la respuesta inequívoca sigue siendo SCORM.',
    'corregida'
  ]
];

const edits = {
  2156: {
    texto: 'En IIS 8.0, ¿qué hace CPU Throttling cuando se configura para un application pool?',
    opciones: [
      'Reduce la frecuencia física del procesador para evitar el calentamiento del equipo.',
      'Reserva núcleos de CPU para cada proceso en un entorno multiprocesador.',
      'Detecta fallos físicos de la CPU ante una sobrecarga de trabajo.',
      'Limita el consumo de CPU de los procesos del pool al máximo configurado, aplicando la acción de throttling elegida.'
    ],
    respuesta_correcta: 3
  },
  2157: {},
  2158: {
    texto: 'En una organización que permite BYOD, ¿qué afirmación sobre la gestión de los dispositivos personales enrolados es correcta?',
    opciones: [
      'El uso de contenedores es incompatible con BYOD.',
      'Una solución EMM puede aplicar políticas y administrar los dispositivos personales enrolados conforme a las condiciones de la organización.',
      'BYOD significa que el empleado utiliza necesariamente un ordenador propiedad de la organización para fines personales.',
      'BYOD significa “Bring your Own DataFlow”.'
    ],
    respuesta_correcta: 1
  },
  2159: {
    texto: 'En la arquitectura clásica de una aplicación web, ¿cuál de estas tecnologías se ejecuta en el servidor para generar la respuesta y no en el navegador del cliente?',
    respuesta_correcta: 3
  },
  2160: {
    texto: '¿Qué modelo de referencia desarrollado por ADL incluye un Content Aggregation Model para describir y empaquetar contenidos de aprendizaje reutilizables?',
    respuesta_correcta: 2
  }
};

aplicar({ numero: '368', fecha: '2026-10-28', records, edits });
