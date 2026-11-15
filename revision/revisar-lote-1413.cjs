const apply = require('./aplicar-lote.cjs');

const refs = {
  umts: [
    {
      url: 'https://www.itu.int/rec/R-REC-M.1457/en',
      referencia: 'ITU-R Recommendation M.1457, edición M.1457-15 (10/2020), figura como componente en vigor para las interfaces radio terrestres IMT-2000. UMTS/UTRA es una de las implementaciones 3G/IMT-2000; el ítem pregunta por su generación como clasificación tecnológica, no por la disponibilidad comercial actual de redes 3G.'
    },
    {
      url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',
      referencia: 'Convocatoria oficial A1 GSI 2025, tema A1-123: generaciones de tecnologías de comunicaciones móviles.'
    },
    {
      url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',
      referencia: 'Convocatoria oficial A2 GSI 2025, tema A2-IV-15: sistemas de comunicaciones móviles y generaciones.'
    }
  ],
  hsdpa: [
    {
      url: 'https://www.etsi.org/deliver/etsi_ts/125300_125399/125308/19.00.00_60/ts_125308v190000p.pdf',
      referencia: 'ETSI TS 125 308 V19.0.0 (2025-10), 3GPP TS 25.308 Release 19, §§4–5: HSDPA usa modulación adaptativa y HARQ; MAC-hs/MAC-ehs incorpora HARQ y scheduling de HS-DSCH. El HS-DSCH es un canal compartido, no una reserva permanente de ranuras y caudal idéntico por usuario.'
    },
    {
      url: 'https://www.itu.int/rec/R-REC-M.1457/en',
      referencia: 'ITU-R M.1457-15, especificaciones de interfaces terrestres IMT-2000. Sitúa la base tecnológica UMTS/UTRA dentro de los sistemas 3G; HSDPA es una evolución de datos de la interfaz UMTS.'
    },
    {
      url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',
      referencia: 'Convocatoria A1 GSI 2025, temas A1-112 (acceso móvil) y A1-123 (generaciones de tecnologías móviles).'
    },
    {
      url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',
      referencia: 'Convocatoria A2 GSI 2025, tema A2-IV-15 (sistemas y generaciones móviles).'
    }
  ],
  ipsec: [
    {
      url: 'https://www.rfc-editor.org/rfc/rfc4301.html',
      referencia: 'IETF RFC 4301, Security Architecture for the Internet Protocol: define la arquitectura IPsec y los servicios de seguridad ofrecidos por AH y ESP; no se debe afirmar que todas las asociaciones ESP apliquen siempre las mismas funciones.'
    },
    {
      url: 'https://www.rfc-editor.org/rfc/rfc4302.html',
      referencia: 'IETF RFC 4302, IP Authentication Header, §1: AH proporciona autenticación del origen e integridad (y protección antirrepetición opcional), no confidencialidad/cifrado; la cobertura del encabezado IP es parcial según los campos mutables.'
    },
    {
      url: 'https://www.rfc-editor.org/rfc/rfc4303.html',
      referencia: 'IETF RFC 4303, IP Encapsulating Security Payload: ESP ofrece un conjunto de servicios seleccionables que puede incluir confidencialidad, autenticación del origen e integridad; no todos están necesariamente activados en toda SA.'
    },
    {
      url: 'https://www.rfc-editor.org/rfc/rfc3715.html',
      referencia: 'IETF RFC 3715, §§2.1 y 3: especifica que NAT cambia direcciones IP incluidas en la comprobación de integridad AH, invalidándola; concluye que NAT y AH son fundamentalmente incompatibles y que la solución de traversía no necesita soportar AH.'
    },
    {
      url: 'https://www.rfc-editor.org/rfc/rfc3948.html',
      referencia: 'IETF RFC 3948: especifica encapsular/ desencapsular paquetes ESP dentro de UDP para atravesar traductores NAT, cuando se negocia con IKE.'
    },
    {
      url: 'https://www.rfc-editor.org/rfc/rfc8221.html',
      referencia: 'IETF RFC 8221, tabla de algoritmos de cifrado ESP: AES-CBC figura como MUST-to-implement con claves de 128 o 256 bits; AES-GCM-16 también figura como MUST. RFC 9395 lo actualiza respecto de algunos algoritmos obsoletos, sin convertir AES-CBC en prohibido.'
    },
    {
      url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',
      referencia: 'Convocatoria A1 GSI 2025, temas A1-79 (cifrado) y A1-125 (seguridad en redes, ataques y técnicas criptográficas).'
    },
    {
      url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',
      referencia: 'Convocatoria A2 GSI 2025, tema A2-IV-12 (seguridad en redes, técnicas criptográficas, protocolos seguros y VPN).'
    }
  ],
  kerberos: [
    {
      url: 'https://www.rfc-editor.org/rfc/rfc4120.html',
      referencia: 'IETF RFC 4120, Kerberos V5: §1 describe el KDC (Authentication Server y Ticket-Granting Server) y §4 explica que las entidades de un realm confían en su KDC, que guarda claves secretas; el protocolo base usa claves simétricas. Las extensiones de clave pública como PKINIT (RFC 4556) no cambian la descripción de la base clásica.'
    },
    {
      url: 'https://www.rfc-editor.org/rfc/rfc4556.html',
      referencia: 'IETF RFC 4556, Public Key Cryptography for Initial Authentication in Kerberos: documenta una extensión PKINIT basada en clave pública para la autenticación inicial, razón para matizar “protocolo base” en vez de afirmar que ninguna variante puede usar criptografía asimétrica.'
    },
    {
      url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',
      referencia: 'Convocatoria A1 GSI 2025, temas A1-80 (identificación, autenticación y directorios) y A1-125 (seguridad en redes).'
    },
    {
      url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',
      referencia: 'Convocatoria A2 GSI 2025, temas A2-II-13 (seguridad lógica y ciberseguridad) y A2-IV-12 (control de acceso y protocolos seguros).'
    }
  ],
  dga: [
    {
      url: 'https://attack.mitre.org/techniques/T1568/002/',
      referencia: 'MITRE ATT&CK T1568.002, Domain Generation Algorithms: define DGA como técnica para generar dinámicamente dominios de destino de comunicaciones de mando y control, dificultando bloquear o tomar el canal; el malware puede probar dominios generados y el operador registrar solo algunos.'
    },
    {
      url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',
      referencia: 'Convocatoria A1 GSI 2025, tema A1-125 (tipos de ataques y herramientas de prevención en redes).'
    },
    {
      url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',
      referencia: 'Convocatoria A2 GSI 2025, temas A2-II-13 (herramientas de ciberseguridad y gestión de incidentes) y A2-IV-12 (seguridad en redes).'
    }
  ]
};

apply({
  numero: '1413',
  fecha: '2026-11-15',
  records: [
    [7366, [123], ['IV-15'], ['UMTS', '3G', 'IMT-2000', 'UTRA', 'comunicaciones móviles'], refs.umts, {
      texto: 'UMTS (Universal Mobile Telecommunications System) se clasifica como tecnología de:',
      opciones: ['2G', '3G', '3.5G', '4G'],
      respuesta_correcta: 1
    }, 'Corregida B. Se explicita que se pregunta por la generación a la que pertenece UMTS, no por su vigencia comercial en una red concreta. UMTS/UTRA es una tecnología móvil de tercera generación asociada a IMT-2000; HSDPA es una evolución de datos de esa familia, comercialmente llamada a menudo 3.5G.', 'corregida'],
    [7367, [112, 123], ['IV-15'], ['HSDPA', 'UMTS', 'HARQ', 'modulación adaptativa', 'planificación dinámica', 'HS-DSCH'], refs.hsdpa, {
      texto: 'Señale la afirmación incorrecta sobre HSDPA:',
      opciones: [
        'Utiliza retransmisiones híbridas HARQ (Hybrid Automatic Repeat Request).',
        'Puede adaptar la modulación y codificación a las condiciones radioeléctricas del canal.',
        'La familia HSDPA ha evolucionado entre versiones/releases con distintas capacidades y velocidades máximas.',
        'El planificador rápido asigna a cada usuario ranuras fijas y un ancho de banda de descarga permanente e idéntico entre turnos.'
      ],
      respuesta_correcta: 3
    }, 'Corregida D. Se precisa que HARQ, modulación/codificación adaptativas y planificación rápida son mecanismos de HSDPA. La afirmación falsa es que el planificador reserve a cada usuario ranuras y caudal fijos: el canal descendente HS-DSCH es compartido y los recursos se programan dinámicamente según prioridades, estado del canal y datos pendientes; no se garantiza por ello una cuota fija e idéntica.', 'corregida'],
    [7368, [79, 125], ['IV-12'], ['IPsec', 'AH', 'ESP', 'NAT-T', 'AES-CBC', 'AES-GCM'], refs.ipsec, {
      texto: 'Señale la afirmación FALSA sobre IPsec:',
      opciones: [
        'AH proporciona autenticación del origen e integridad, pero no cifra el contenido.',
        'ESP puede ofrecer confidencialidad y, según los algoritmos/servicios seleccionados, también integridad y autenticación.',
        'AH es compatible con NAT-T de traducción de direcciones porque no protege campos de la cabecera IP.',
        'RFC 8221 incluye AES-CBC con claves de 128 bits como algoritmo de implementación obligatoria para ESP.'
      ],
      respuesta_correcta: 2
    }, 'Corregida C. El enunciado anterior mezclaba una afirmación de incompatibilidad AH/NAT, la lista histórica de RFC originales y los requisitos de algoritmos: podía dar lugar a una combinación de opciones que no era inequívoca. AH protege la integridad de campos inmutables de la cabecera IP y por ello la traducción NAT ordinaria altera lo autenticado; NAT-T estandariza encapsulación UDP de ESP, no de AH. ESP ofrece servicios configurables. Además, la clave original que declaraba falsa la obligación de AES-CBC era incorrecta: RFC 8221 mantiene AES-CBC-128 como MUST-to-implement, junto con AES-GCM-16.', 'corregida'],
    [7369, [80, 125], ['II-13', 'IV-12'], ['Kerberos', 'autenticación', 'criptografía simétrica', 'KDC', 'tercero de confianza', 'PKINIT'], refs.kerberos, {
      texto: 'Kerberos V5, en su protocolo base, es un mecanismo de autenticación de red que:',
      opciones: [
        'Utiliza principalmente claves simétricas y confía en un tercero de confianza, el centro de distribución de claves (KDC), para emitir tickets.',
        'Utiliza exclusivamente criptografía asimétrica y no requiere un servidor de confianza.',
        'Utiliza principalmente claves asimétricas y funciona sin un centro de distribución de claves.',
        'Utiliza claves simétricas, pero no necesita un tercero de confianza ni la emisión de tickets.'
      ],
      respuesta_correcta: 0
    }, 'Corregida A. RFC 4120 describe Kerberos V5 con un KDC de confianza por realm que administra claves y emite tickets; el protocolo base se apoya en claves compartidas/simétricas. La expresión “protocolo base” evita la afirmación absoluta de que nunca existen extensiones de clave pública: PKINIT (RFC 4556) añade criptografía de clave pública para la autenticación inicial.', 'corregida'],
    [7370, [125], ['II-13', 'IV-12'], ['DGA', 'Domain Generation Algorithm', 'botnet', 'mando y control', 'DNS', 'AXFR', 'CSRF', 'POODLE'], refs.dga, {
      texto: '¿Qué técnica permite que un malware genere algorítmicamente nombres de dominio variables para intentar localizar sus servidores de mando y control (C2)?',
      opciones: [
        'AXFR: transferencia de zona DNS.',
        'DGA (Domain Generation Algorithm).',
        'POODLE: vulnerabilidad en SSL/TLS.',
        'CSRF (Cross-Site Request Forgery).'
      ],
      respuesta_correcta: 1
    }, 'Vigente B. DGA significa Domain Generation Algorithm. El malware genera una lista de dominios candidatos (a menudo cambiantes) y los consulta; los operadores pueden registrar uno o algunos de ellos para el C2. No significa que el propio algoritmo aloje servidores ni garantiza que todos los dominios generados estén registrados. AXFR es transferencia de zona DNS; POODLE y CSRF son técnicas/vulnerabilidades de otra clase.', 'vigente']
  ]
});
