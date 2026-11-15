const apply = require('./aplicar-lote.cjs');

const refs = {
  ip: [{
    url: 'https://www.rfc-editor.org/rfc/rfc791.html',
    referencia: 'IETF RFC 791, Internet Protocol, §1.3: IP no proporciona mecanismos de control de flujo; presta un servicio de datagramas y deja servicios extremo a extremo como fiabilidad y flujo a protocolos superiores. Se conserva la clave «IP no realiza control de flujo».'
  }, {
    url: 'https://www.rfc-editor.org/rfc/rfc9293.html',
    referencia: 'IETF RFC 9293 (08/2022), TCP, §3.8.6: el receptor TCP anuncia una ventana de recepción y el emisor limita datos a ella; distingue el control de flujo de transporte del servicio IP.'
  }],
  nfs: [{
    url: 'https://www.rfc-editor.org/rfc/rfc1094.html',
    referencia: 'IETF RFC 1094, Network File System Protocol Specification: especificación original NFSv2.'
  }, {
    url: 'https://www.rfc-editor.org/rfc/rfc1813.html',
    referencia: 'IETF RFC 1813, NFS Version 3 Protocol Specification.'
  }, {
    url: 'https://www.rfc-editor.org/rfc/rfc7530.html',
    referencia: 'IETF RFC 7530, NFSv4.0: indica expresamente que NFSv4 se desarrolla sobre el legado de NFSv2 (RFC 1094) y NFSv3 (RFC 1813). La pregunta se reescribe sobre generaciones principales documentadas; las implementaciones y minor versions v4.0/v4.1/v4.2 dependen del producto, por lo que no hay un número universal de versiones «actualmente en uso».'
  }, {
    url: 'https://www.rfc-editor.org/rfc/rfc8881.html',
    referencia: 'IETF RFC 8881, NFSv4.1 Protocol: una versión menor de la familia principal NFSv4, no una versión principal NFSv5.'
  }, {
    url: 'https://www.rfc-editor.org/rfc/rfc7862.html',
    referencia: 'IETF RFC 7862, NFSv4.2 Protocol: especificación de otra versión menor de NFSv4.'
  }],
  handover: [{
    url: 'https://www.etsi.org/deliver/etsi_ts/123000_123099/123009/19.00.00_60/ts_123009v190000p.pdf',
    referencia: 'ETSI/3GPP TS 23.009 V19.0.0 (10/2025), §1: define procedimientos de handover para mantener la conexión de la estación móvil/equipo de usuario al desplazarse entre celdas o redes radio.'
  }],
  coldsite: [{
    url: 'https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-34r1.pdf',
    referencia: 'NIST SP 800-34 Rev. 1, §4.1.1: un cold site dispone de infraestructura básica pero no del equipo ni telecomunicaciones; normalmente es la opción de sitio alternativo menos costosa, aunque tiene el mayor tiempo de recuperación porque hay que adquirir, instalar y cargar sistemas y datos.'
  }],
  dns: [{
    url: 'https://www.rfc-editor.org/rfc/rfc3596.html',
    referencia: 'IETF RFC 3596, DNS Extensions to Support IPv6, §2.1: el registro AAAA almacena una dirección IPv6 de 128 bits asociada a un nombre DNS.'
  }]
};

const records = [
  [7386, [108, 111, 115], ['II-8'], ['IP', 'control de flujo', 'TCP', 'ventana de recepción'], refs.ip, {
    texto: '¿Cuál de estas afirmaciones describe correctamente el control de flujo de IP?',
    opciones: ['IP emplea una ventana de crédito de tamaño variable.', 'IP no realiza control de flujo.'],
    respuesta_correcta: 1
  }, 'Vigente. Se mantiene B. IP no controla el ritmo de envío mediante una ventana; ofrece datagramas sin control de flujo. TCP sí realiza control de flujo extremo a extremo mediante la ventana anunciada por el receptor. La opción de ventana variable no describe el protocolo IP.', 'vigente'],
  [7387, [53, 58, 109], ['II-8', 'IV-13'], ['NFS', 'NFSv2', 'NFSv3', 'NFSv4', 'RFC 1094', 'RFC 1813', 'RFC 7530'], refs.nfs, {
    texto: '¿Qué secuencia enumera las generaciones principales de NFS documentadas en sus especificaciones?',
    opciones: ['NFSv2, NFSv3 y NFSv4.', 'Solo NFSv3 y NFSv4.', 'NFSv3, NFSv4 y NFSv5.', 'NFSv1, NFSv2 y NFSv3.'],
    respuesta_correcta: 0
  }, 'Corregida. Se mantiene A, pero se elimina «actualmente en uso», que no admite un recuento universal: las versiones instaladas dependen de cada entorno. Las generaciones principales documentadas son NFSv2, NFSv3 y NFSv4; esta última tiene revisiones menores como 4.0, 4.1 y 4.2. No existe una generación principal NFSv5 definida en las referencias citadas.', 'corregida'],
  [7388, [123], ['IV-15'], ['handover', 'handoff', 'traspaso de celda', 'roaming', 'movilidad'], refs.handover, {
    texto: '¿Cómo se denomina el procedimiento que mantiene una conexión móvil al pasar el equipo de una celda radio a otra?',
    opciones: ['Roaming.', 'Cobertura.', 'Talk-out.', 'Handoff o handover.'],
    respuesta_correcta: 3
  }, 'Corregida. Se conserva D y se elimina la formulación redundante. Handover/handoff es el procedimiento de transferencia de la conexión al cambiar de celda o red radio. Roaming se refiere al uso del servicio mediante otra red/operador cuando el usuario está fuera de la red de origen; no es el nombre del traspaso entre celdas.', 'corregida'],
  [7389, [105, 128], ['IV-6'], ['sitio frío', 'cold site', 'recuperación ante desastres', 'continuidad del negocio', 'RTO'], refs.coldsite, {
    texto: 'En un plan de recuperación ante desastres, ¿qué característica suele asociarse a un sitio frío (cold site)?',
    opciones: [
      'Menor coste de preparación del emplazamiento alternativo, pero mayor tiempo de recuperación porque hay que instalar y cargar los equipos y datos.',
      'Altos costes de implementación y mantenimiento porque mantiene todos los sistemas listos para producción.',
      'Tiempo reducido de recuperación, equivalente al de un sitio caliente.',
      'Ninguna de las anteriores.'
    ],
    respuesta_correcta: 0
  }, 'Corregida. Se mantiene A, precisando el intercambio entre coste y tiempo: el cold site suele ser el emplazamiento alternativo menos costoso, pero parte sin equipos/telecomunicaciones listos y por ello tarda más en recuperar el servicio. El tiempo real depende del sistema y del plan; no se confunde con un hot site.', 'corregida'],
  [7390, [109, 115], ['II-8', 'IV-13'], ['DNS', 'AAAA', 'IPv6', 'registro de recursos', '128 bits'], refs.dns, {
    texto: 'En DNS (Domain Name System), ¿qué información contiene un registro AAAA?',
    opciones: [
      'Una clave pública asociada a un nombre DNS.',
      'El intercambiador de correo principal para el dominio.',
      'Información sobre el servidor DNS primario de la zona.',
      'Una dirección IPv6 asociada a un nombre DNS.'
    ],
    respuesta_correcta: 3
  }, 'Corregida. Se mantiene D y se corrige «Domain Name Server»: DNS significa Domain Name System. Según RFC 3596, AAAA almacena una dirección IPv6 (128 bits) asociada al nombre consultado; claves públicas, servidores MX y servidores autoritativos corresponden a otros datos/registros.', 'corregida']
];

apply({ numero: '1417', fecha: '2026-11-15', records });
