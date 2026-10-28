const aplicar = require('./aplicar-lote.cjs');

const records = [
  [
    2186, [65, 67], ['II-9', 'III-10'], ['Java', 'JSTL', 'JNDI', 'Java Card', 'JavaScript'],
    [
      { url: 'https://jakarta.ee/specifications/tags/2.0/jakarta-tags-spec-2.0.pdf', referencia: 'Jakarta Standard Tag Library 2.0 Specification: JSTL es una biblioteca estándar de etiquetas para páginas Jakarta Server Pages.' },
      { url: 'https://docs.oracle.com/javase/jndi/tutorial/getStarted/overview/', referencia: 'Oracle Java Naming and Directory Interface Overview: JNDI es una API Java de nombres y directorios.' },
      { url: 'https://docs.oracle.com/en/java/javacard/index.html', referencia: 'Oracle Java Card Platform Documentation: publica las especificaciones actuales de Java Card VM, runtime y API.' },
      { url: 'https://ecma-international.org/publications-and-standards/standards/ecma-262/', referencia: 'ECMA-262, ECMAScript Language Specification: JavaScript se estandariza como ECMAScript; no es una tecnología Java/Jakarta.' }
    ],
    'Especificaciones Jakarta/Oracle de JSTL, JNDI y Java Card; estándar ECMA-262',
    'Se precisa «tecnología Java» como plataforma y especificaciones Java/Jakarta. JSTL, JNDI y Java Card pertenecen a ese ecosistema; JavaScript es un lenguaje estandarizado como ECMAScript, distinto de Java aunque el nombre histórico pueda inducir a confusión. La clave permanece JavaScript.',
    'corregida'
  ],
  [
    2187, [61], ['II-2'], ['BSD', 'SecureBSD', 'NetBSD', 'DesktopBSD', 'DragonFlyBSD'],
    [
      { url: 'https://www.netbsd.org/about/', referencia: 'NetBSD, About: describe NetBSD como sistema operativo de la familia BSD.' },
      { url: 'https://www.dragonflybsd.org/docs/handbook/introduction/', referencia: 'DragonFly BSD Handbook: identifica DragonFly como sistema operativo Unix basado en 4.4BSD-Lite.' },
      { url: 'https://docs.freebsd.org/en/articles/explaining-bsd/index.html', referencia: 'FreeBSD Documentation, Explaining BSD: documenta las ramas BSD principales y su historia, pero no clasifica SecureBSD.' },
      { url: 'https://www.krsaborio.net/bsd/research/2000/0425.htm', referencia: 'Copia archivada de un anuncio corporativo de 2Cactus de 2000 que describe SecureBSD como una solución de seguridad sobre BSD; al no localizarse documentación primaria vigente o archivada en el sitio del editor, no se usa como prueba suficiente para validar la clave.' }
    ],
    'Documentación oficial de NetBSD, DragonFly BSD y FreeBSD; referencia histórica incompleta de SecureBSD',
    'La clave original no se valida: los proyectos oficiales confirman NetBSD y DragonFly BSD como sistemas BSD, pero no se encontró una fuente primaria del fabricante o del proyecto que permita determinar con suficiente confianza qué significaba SecureBSD en este contexto y si se distribuía como sistema operativo independiente o como solución superpuesta. El material histórico secundario no basta para cerrarlo. Se conserva intacta la pregunta y su clave en estado pendiente de fuente.',
    'pendiente_fuente'
  ],
  [
    2188, [80], ['I-6', 'IV-12'], ['X.509', 'certificados digitales', 'extensiones', 'certificados de atributos', 'PKI'],
    [
      { url: 'https://www.rfc-editor.org/rfc/rfc5280.html', referencia: 'IETF RFC 5280, §§4.1.2.1 y 4.2.1.8: las extensiones de certificado están permitidas en versión 3; subjectDirectoryAttributes puede transportar atributos de identificación del sujeto y la extensión tiene regla de criticidad.' },
      { url: 'https://www.rfc-editor.org/rfc/rfc5755.html', referencia: 'IETF RFC 5755, Attribute Certificate Profile: un certificado de atributos liga atributos a un titular y no contiene una clave pública como un certificado de clave pública.' }
    ],
    'IETF PKIX RFC 5280 y perfil de certificados de atributos RFC 5755',
    'El original mezclaba conceptos y permitía más de una respuesta falsa: los certificados v2 no incluyen el campo Extensions de RFC 5280 y un certificado de atributos no es simplemente un certificado de clave pública. Se reescriben las opciones para preguntar por reglas concretas: extensiones críticas en X.509 v3, diferencia entre PGP y X.509, función de un certificado de atributos y subjectDirectoryAttributes. La única afirmación falsa es que los certificados PGP son compatibles con X.509 v3.',
    'corregida'
  ],
  [
    2189, [61, 81], ['II-2', 'IV-12'], ['tarjetas inteligentes', 'MULTOS', 'Java Card', 'Windows for Smart Cards', 'Jini'],
    [
      { url: 'https://river.apache.org/release-doc/current/specs/html/jini-spec.html', referencia: 'Apache River, Jini Architecture Specification: describe una arquitectura distribuida de servicios y dispositivos con protocolos discovery/join/lookup, no un sistema operativo para tarjeta inteligente.' },
      { url: 'https://docs.oracle.com/en/java/javacard/index.html', referencia: 'Oracle, documentación Java Card: especificaciones del entorno de ejecución y máquina virtual para aplicaciones en smart cards y secure elements.' },
      { url: 'https://multos.com/resources/faq/', referencia: 'MULTOS, FAQ oficial: identifica MULTOS como sistema operativo de tarjeta inteligente.' },
      { url: 'https://news.microsoft.com/source/1999/11/15/microsoft-delivers-windows-for-smart-cards/', referencia: 'Microsoft Source, anuncio de Windows for Smart Cards: Microsoft lo identifica como sistema operativo para smart cards.' }
    ],
    'Especificación Apache River/Jini; documentación Oracle Java Card, MULTOS y Microsoft Windows for Smart Cards',
    'La respuesta Jini se confirma y se formula por función: Jini es una arquitectura distribuida de descubrimiento y acceso a servicios, mientras Java Card, MULTOS y Windows for Smart Cards son plataformas/sistemas para tarjetas inteligentes. Se mantiene la terminología histórica de Windows for Smart Cards y se apoya en el anuncio del fabricante.',
    'corregida'
  ],
  [
    2190, [81], ['I-6'], ['biometría', 'variabilidad inter-usuario', 'variabilidad intra-usuario', 'control de acceso'],
    [
      { url: 'https://www.ncbi.nlm.nih.gov/books/NBK219892/', referencia: 'National Academies, Biometric Recognition: Challenges and Opportunities, cap. 1: para buen reconocimiento, la variación dentro de una persona debe ser pequeña respecto de la variación entre personas; lo deseable es alta distintividad entre sujetos y repetibilidad intra-sujeto.' },
      { url: 'https://www.iso.org/obp/ui?_escaped_fragment_=iso%3Astd%3Aiso-iec%3A19792%3Aed-2%3Av1%3Aen', referencia: 'ISO/IEC 19792 e ISO/IEC 2382-37: una característica biométrica debe producir rasgos distintivos y repetibles para reconocimiento automatizado.' }
    ],
    'National Academies, Biometric Recognition: Challenges and Opportunities; vocabulario ISO/IEC de biometría',
    'La clave se confirma: alta variación inter-usuario favorece distinguir personas. Para evitar la lectura de «alta variabilidad» como propiedad deseable en general, el enunciado especifica que pregunta por la variación que interesa maximizar entre individuos; el sistema también busca baja variabilidad intra-usuario para que las muestras repetidas sean consistentes.',
    'corregida'
  ]
];

const edits = {
  2186: { texto: '¿Cuál de estas tecnologías no pertenece a la plataforma Java/Jakarta, aunque su nombre pueda confundirse con Java?', respuesta_correcta: 1 },
  2188: {
    texto: 'Sobre los certificados X.509 y de atributos, indique la única afirmación falsa:',
    opciones: [
      'Las extensiones de un certificado X.509 versión 3 pueden marcarse como críticas o no críticas.',
      'Los certificados de clave pública OpenPGP son compatibles directamente con el formato X.509 versión 3.',
      'Un certificado de atributos vincula un titular con atributos y no necesita contener una clave pública.',
      'Un certificado X.509 versión 3 puede incluir la extensión subjectDirectoryAttributes para atributos de identificación del sujeto.'
    ],
    respuesta_correcta: 1
  },
  2189: { texto: '¿Cuál de estas tecnologías proporciona descubrimiento y acceso a servicios distribuidos, pero no es un sistema operativo o plataforma de ejecución de una tarjeta inteligente?', respuesta_correcta: 1 },
  2190: { texto: 'Para que un rasgo biométrico permita distinguir a usuarios distintos y reconocerlos en mediciones repetidas, ¿qué variabilidad interesa maximizar entre individuos?', respuesta_correcta: 1 }
};

aplicar({ numero: '374', fecha: '2026-10-28', records, edits });
