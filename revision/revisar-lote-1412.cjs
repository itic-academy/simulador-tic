const apply = require('./aplicar-lote.cjs');

const refs = {
  ip: [
    {
      url: 'https://docs.freebsd.org/en/books/handbook/network/',
      referencia: 'FreeBSD Handbook, capítulo 7, §§7.3.1–7.3.2: muestra la asignación manual de una dirección a una interfaz con ifconfig y la configuración alternativa mediante DHCP. Es un ejemplo verificable en Unix-like (FreeBSD), no una afirmación de que todo usuario Unix pueda cambiar cualquier IP sin permisos.'
    },
    {
      url: 'https://www.rfc-editor.org/rfc/rfc2131.html',
      referencia: 'IETF RFC 2131, Dynamic Host Configuration Protocol: documenta la asignación dinámica de direcciones a clientes, frente a la configuración manual.'
    },
    {
      url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',
      referencia: 'Convocatoria oficial del Cuerpo Superior TIC 2025, tema A1-115 (redes IP y transición IPv4/IPv6); se usa para la clasificación del contenido.'
    },
    {
      url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',
      referencia: 'Convocatoria oficial del Cuerpo de Gestión TIC 2025, temas A2-II-8 (direccionamiento en TCP/IP y OSI) y A2-IV-13 (Internet y arquitectura de red); se usa para clasificación.'
    }
  ],
  ipv6: [
    {
      url: 'https://www.rfc-editor.org/rfc/rfc8200.html',
      referencia: 'IETF RFC 8200, §§3 y 8.3: la cabecera base IPv6 tiene tamaño fijo de 40 octetos (frente al mínimo IPv4 de 20 octetos); también describe la compatibilidad con cabeceras de extensión de seguridad. Por tanto, la afirmación de que la cabecera IPv6 es menor es falsa.'
    },
    {
      url: 'https://www.rfc-editor.org/rfc/rfc4291.html',
      referencia: 'IETF RFC 4291, §2.1: la arquitectura de direccionamiento IPv6 define direcciones de 128 bits (16 octetos).'
    },
    {
      url: 'https://www.rfc-editor.org/rfc/rfc4302.html',
      referencia: 'IETF RFC 4302, IP Authentication Header: AH proporciona autenticación del origen e integridad para la cabecera IP en la medida posible y para los datos de protocolo; puede usarse en IPv4 e IPv6.'
    },
    {
      url: 'https://www.rfc-editor.org/rfc/rfc4303.html',
      referencia: 'IETF RFC 4303, IP Encapsulating Security Payload: ESP está definido para IPv4 e IPv6 y puede proporcionar confidencialidad; los servicios se negocian/configuran y no significan que todo paquete IPv6 vaya cifrado por defecto.'
    },
    {
      url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',
      referencia: 'Convocatoria oficial A1 2025, tema A1-115 (funcionalidades IPv6) y A1-111 (arquitectura por capas).'
    },
    {
      url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',
      referencia: 'Convocatoria oficial A2 2025, tema A2-II-8 (TCP/IP y OSI) y A2-IV-12 (seguridad en redes y protocolos seguros).'
    }
  ],
  h323: [
    {
      url: 'https://www.itu.int/rec/T-REC-H.323/en',
      referencia: 'ITU-T H.323 (03/2022), §6.7: MCU es un punto terminal que proporciona soporte para conferencias multipunto y está formado por un MC y cero o más MP. El enunciado se restringe a la arquitectura H.323 centralizada: la terminología de SIP no se equipara indiscriminadamente a MCU.'
    },
    {
      url: 'https://www.rfc-editor.org/rfc/rfc4353.html',
      referencia: 'IETF RFC 4353, A Framework for Conferencing with the Session Initiation Protocol (SIP): describe el marco SIP y la función de conference focus, lo que justifica separar esta terminología del término MCU propio de H.323.'
    },
    {
      url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',
      referencia: 'Convocatoria oficial A1 2025, temas A1-130 (videoconferencia) y A1-116 (VoIP/ToIP y comunicaciones unificadas).'
    },
    {
      url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',
      referencia: 'Convocatoria oficial A2 2025, tema A2-IV-16 (videoconferencia, protocolos y dimensionamiento).'
    }
  ],
  clientServer: [
    {
      url: 'https://learn.microsoft.com/en-us/windows/win32/rpc/the-model-for-distributed-systems',
      referencia: 'Microsoft Learn, The Model for Distributed Systems: define cliente como iniciador que localiza un nodo y solicita una operación/servicio, y servidor como receptor que atiende la llamada; los papeles dependen de cada interacción. Sustenta la distinción conceptual, no la simplificación de “toda estación procesa datos del servidor como si fueran locales”.'
    },
    {
      url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',
      referencia: 'Convocatoria oficial A1 2025, tema A1-58: procesamiento cooperativo y arquitectura cliente-servidor/SOA.'
    },
    {
      url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',
      referencia: 'Convocatoria oficial A2 2025, tema A2-II-6: arquitecturas cliente-servidor, multicapas y multidispositivo.'
    }
  ],
  x400: [
    {
      url: 'https://www.itu.int/rec/T-REC-X.402/en',
      referencia: 'ITU-T X.402 (06/1999), actualmente en vigor, arquitectura de los sistemas de manejo de mensajes X.400: fuente normativa para los componentes de OR-address (incluidos CountryName, PrivateDomainName y las alternativas de nombre personal/nombre común).'
    },
    {
      url: 'https://www.rfc-editor.org/rfc/rfc2156.html',
      referencia: 'IETF RFC 2156, §18.3.2 y §18.3.12 y tabla de atributos: distingue MTS.CommonName (CN) de MTS.PersonalName (PN), cuyos componentes incluyen surname (S), given-name (G), initials (I) y generation-qualifier (GQ). CN no se subdivide en apellido y nombre; la clave falsa es C.'
    },
    {
      url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',
      referencia: 'Convocatoria oficial A1 2025, tema A1-122 (correo electrónico, mensajería y servicios de directorio). La clasificación es por afinidad curricular, no implica que X.400 sea una tecnología actual de uso general.'
    }
  ]
};

apply({
  numero: '1412',
  fecha: '2026-11-15',
  records: [
    [7361, [108, 115], ['II-8', 'IV-13'], ['dirección IP', 'Unix', 'configuración manual', 'DHCP', 'interfaz de red'], refs.ip, {}, 'Vigente C. La opción se interpreta correctamente como capacidad de configurar manualmente una dirección IP en un sistema Unix-like; el ejemplo oficial del Handbook de FreeBSD asigna la IP a una interfaz con ifconfig. Se acota el concepto: la operación requiere los permisos adecuados y no implica que la dirección sea única para una tarjeta física; una interfaz puede tener más de una dirección. DHCP es el mecanismo de asignación automática.'],
    [7362, [111, 115], ['II-8', 'IV-12'], ['IPv6', 'cabecera base', 'AH', 'ESP', 'IPsec', '128 bits'], refs.ipv6, {
      texto: 'Señale la afirmación FALSA sobre IPv6:',
      opciones: [
        'La cabecera base fija de IPv6 mide menos que la cabecera IPv4 mínima.',
        'IPv6 puede emplear Authentication Header (AH) de IPsec para autenticación e integridad.',
        'IPv6 puede emplear Encapsulating Security Payload (ESP) de IPsec para proporcionar confidencialidad.',
        'Las direcciones IPv6 tienen una longitud de 16 octetos (128 bits).'
      ],
      respuesta_correcta: 0
    }, 'Corregida A. La cabecera base IPv6 mide 40 octetos y la cabecera IPv4 mínima 20, por lo que la primera afirmación es falsa. AH puede aportar autenticación e integridad; ESP puede ofrecer confidencialidad. Son capacidades IPsec que se negocian/configuran: no debe inferirse que IPv6 cifra o autentica automáticamente cada comunicación. IPv6 usa direcciones de 128 bits.', 'corregida'],
    [7363, [116, 130], ['IV-16'], ['H.323', 'videoconferencia multipunto', 'MCU', 'MC', 'MP', 'SIP'], refs.h323, {
      texto: 'En una videoconferencia H.323 multipunto centralizada, ¿qué componente proporciona el soporte y la coordinación de la conferencia?',
      opciones: [
        'Un proxy, que reenvía las solicitudes de establecimiento.',
        'Una Multipoint Control Unit (MCU), formada por un Multipoint Controller (MC) y cero o más Multipoint Processors (MP).',
        'Una pasarela de protocolos, cuya función es interconectar redes o protocolos distintos.',
        'Ninguno de los anteriores.'
      ],
      respuesta_correcta: 1
    }, 'Corregida B. Se limita la pregunta a H.323 y a la modalidad multipunto centralizada: ITU-T H.323 define la MCU como el endpoint que presta soporte multipunto, compuesto por MC y cero o más MP. El enunciado original mezclaba H.323 con SIP, cuyo RFC de conferencias describe el papel de un focus; no es correcto generalizar que cualquier conferencia SIP se establezca necesariamente mediante una MCU H.323.', 'corregida'],
    [7364, [58], ['II-6'], ['cliente-servidor', 'servidor', 'cliente', 'arquitectura distribuida', 'recursos'], refs.clientServer, {
      texto: 'En el modelo cliente-servidor básico, ¿qué relación describe mejor la interacción entre cliente y servidor?',
      opciones: [
        'El servidor ofrece datos o servicios y el cliente los solicita; cada componente realiza el procesamiento que le corresponde.',
        'Todos los equipos tienen necesariamente el mismo papel y comparten directamente sus recursos, sin un servidor que los ofrezca.',
        'La información solo puede transferirse conectando los equipos mediante puertos serie o paralelo.',
        'Todos los equipos deben estar conectados permanentemente entre sí mediante enlaces punto a punto en un sistema cerrado.'
      ],
      respuesta_correcta: 0
    }, 'Corregida A. Se reemplaza la definición imprecisa que confundía el servidor con una unidad de archivos remota tratada “como local”. En cliente-servidor, el cliente inicia solicitudes y el servidor ofrece/atiende servicios; el procesamiento puede distribuirse entre ambos según la aplicación. Las otras opciones describen, respectivamente, una simplificación de peer-to-peer, transferencia heredada por puertos y una topología punto a punto que no define el modelo.', 'corregida'],
    [7365, [122], [], ['X.400', 'direccionamiento', 'OR-address', 'CN', 'CountryName', 'PrivateDomainName', 'nombre personal'], refs.x400, {
      texto: 'En el direccionamiento OR-address de X.400, señale la afirmación FALSA:',
      opciones: [
        'P representa el nombre del dominio privado (Private-domain-name) dentro de la dirección OR.',
        'C representa el país; en las formas mnemónicas de dirección se expresa mediante el código de país conforme al esquema X.400/ISO aplicable.',
        'CN (Common Name) es un atributo distinto de Personal Name; el nombre personal puede incluir componentes como apellido (S) y nombre de pila (G).',
        'CN es un atributo compuesto que se divide en los subcampos S (apellido) y N (nombre de pila).'
      ],
      respuesta_correcta: 3
    }, 'Corregida D. Se conservan los hechos válidos sobre P y C y se separan explícitamente Common Name y Personal Name. X.402 enumera ambos como alternativas del direccionamiento OR; RFC 2156 representa CN como MTS.CommonName y separa el nombre personal, cuyos componentes normalizados incluyen S (surname) y G (given-name), no N. Así queda inequívocamente falsa la opción D. X.400 se presenta como arquitectura clásica/legada de mensajería, aunque X.402 (06/1999) sigue figurando en vigor.', 'corregida']
  ]
});
