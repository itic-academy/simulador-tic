const apply = require('./aplicar-lote.cjs');

const records = [
  [7411, [77, 109], ['II-13'], ['RSS', 'sindicación web', 'XML', 'agregador de fuentes'], [
    { url: 'https://www.rssboard.org/rss-specification', referencia: 'RSS 2.0 Specification (current), sección Introduction: RSS es un formato de sindicación de contenidos web; los ficheros RSS deben ajustarse a XML 1.0.' },
    { url: 'https://www.rssboard.org/rss-draft-1', referencia: 'RSS 2.0 Specification (proposed draft), sección Introduction: denomina agregador/lector al software que recupera y presenta los feeds; distingue el formato RSS del programa consumidor.' }
  ], {
    texto: '¿Cuál de las siguientes afirmaciones sobre RSS es errónea?',
    opciones: [
      'RSS es un formato XML para la sindicación de contenidos web.',
      'RSS es el nombre del programa que agrega contenidos de diversas páginas de noticias.',
      'Un lector o agregador puede recopilar y presentar contenidos publicados en fuentes RSS.'
    ],
    respuesta_correcta: 1
  }, 'Corregida B. El formato RSS es un formato de sindicación basado en XML; el agregador es el programa que recupera y presenta las fuentes. Se ajusta la opción B, originalmente ambigua al llamar a RSS «agregador», y se incorpora la función correcta del lector en la opción C.', 'corregida'],
  [7412, [130], [], ['groupware', 'correo electrónico', 'colaboración', 'comunicación asíncrona'], [
    { url: 'https://www.microsoft.com/en-us/research/publication/groupware-social-dynamics/', referencia: 'Jonathan Grudin, “Groupware and Social Dynamics”, Communications of the ACM 37(1), 1994: identifica correo electrónico y tablones como ejemplos conocidos de groupware y como aplicaciones colaborativas de uso extendido; también incluye coautoría, calendarios, videoconferencia y workflow, por lo que no hay una única aplicación alrededor de la que universalmente se construya todo groupware.' }
  ], {
    texto: '¿Cuál de estas aplicaciones de comunicación asíncrona se convirtió en un componente muy extendido de las primeras soluciones de groupware?',
    opciones: ['El correo electrónico.', 'Los procesadores de texto de uso individual.', 'Las redes locales de ámbito de oficina.', 'Las hojas de cálculo de uso individual.'],
    respuesta_correcta: 0
  }, 'Corregida A. La afirmación original de que el concepto de groupware «se construyó alrededor de» una única tecnología es demasiado absoluta: groupware incluye correo, coautoría, calendarios, reuniones, workflow y otras funciones. Se pregunta por el componente de comunicación asíncrona más extendido; Grudin documenta correo y tablones como ejemplos conocidos y exitosos.', 'corregida'],
  [7413, [108, 113], ['IV-10'], ['ATM', 'VPI', 'VCI', 'HEC', 'SDH'], [{
    url: 'https://www.itu.int/rec/T-REC-I.361/en',
    referencia: 'ITU-T I.361, B-ISDN ATM layer specification, §2.2/figura 2: el encabezado de celda ATM incluye VPI, VCI, PT, CLP y HEC (además de GFC en UNI). SDH no es un campo del encabezado; puede usarse como interfaz/capa física de transporte ATM.'
  }], {
    texto: '¿Cuál de los siguientes no es un campo ni identificador del encabezado de una celda ATM?',
    opciones: ['VPI.', 'VCI.', 'VHI.', 'HEC.'],
    respuesta_correcta: 2
  }, 'Vigente C. VPI, VCI y HEC aparecen en la estructura del encabezado ATM definida por ITU-T I.361. «VHI» no es un campo definido allí. Se elimina SDH como distractor porque, aunque no es campo del encabezado, sí puede estar relacionado con el transporte físico de ATM y hacía equívoco el enunciado general.', 'vigente'],
  [7414, [125], ['IV-12'], ['firewall', 'filtrado de paquetes', 'OSI', 'nivel de red'], [{
    url: 'https://csrc.nist.gov/pubs/sp/800/41/r1/final',
    referencia: 'NIST SP 800-41 Rev. 1, §2.1.1: los cortafuegos básicos de filtrado de paquetes operan en la capa de red y pueden aplicar controles sobre direcciones IP de origen/destino. El nivel depende del tipo de firewall; no todos operan en una única capa.'
  }], {
    texto: '¿Qué mecanismo aplica reglas a direcciones IP de origen y destino y, en su forma básica, opera en la capa 3 (red) del modelo OSI?',
    opciones: ['Un proxy de aplicación.', 'Un cortafuegos de filtrado de paquetes.', 'Un antivirus de puesto de usuario.', 'Un filtro antispam de correo.'],
    respuesta_correcta: 1
  }, 'Corregida B. La clasificación por capa no puede atribuirse a toda una familia de firewalls: los proxies y otros cortafuegos pueden operar en capas superiores. NIST indica que el filtrado básico de paquetes actúa en la capa de red y usa direcciones IP; el nuevo enunciado describe esa clase específica.', 'corregida'],
  [7415, [62], [], ['Swift', 'Apple', 'iOS', 'código abierto', 'desarrollo móvil'], [
    { url: 'https://developer.apple.com/swift/get-started/', referencia: 'Apple Developer, Get Started with Swift: Swift fue desarrollado por Apple, anunciado en 2014 y publicado bajo licencia de código abierto en 2015; Apple lo presenta como lenguaje para crear aplicaciones modernas en sus plataformas.' },
    { url: 'https://developer.apple.com/documentation/TechnologyOverviews/tools-and-distribution', referencia: 'Apple Developer, Tools and distribution: indica que Xcode y Swift se utilizan para crear, probar y distribuir software y aplicaciones para plataformas Apple.' },
    { url: 'https://www.swift.org/about/', referencia: 'Swift.org, plataforma Apple: el Swift de código abierto puede utilizarse para desarrollar para iOS, macOS, watchOS, tvOS y visionOS.' }
  ], {
    texto: '¿Qué lenguaje de programación de código abierto, desarrollado por Apple, se utiliza para crear aplicaciones nativas para iOS?',
    opciones: ['Go (Golang).', 'Kotlin.', 'Swift.', 'Ninguno de los anteriores.'],
    respuesta_correcta: 2
  }, 'Vigente C. Apple desarrolló Swift, lo liberó como código abierto en 2015 y lo recomienda para aplicaciones de sus plataformas, incluida iOS. Kotlin y Go son lenguajes de código abierto, pero no fueron diseñados por Apple; la procedencia empresarial y la plataforma objetivo permiten distinguirlos.', 'vigente']
];

apply({ numero: '1422', fecha: '2026-11-16', records });
