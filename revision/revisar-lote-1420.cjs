const apply = require('./aplicar-lote.cjs');

const records = [
  [7401, [109], ['II-8'], ['TFTP', 'transferencia de firmware', 'UDP', 'red de gestión'], [
    { url: 'https://www.rfc-editor.org/rfc/rfc1350.html', referencia: 'IETF RFC 1350, §§1 y Security Considerations: TFTP es un protocolo sencillo de transferencia de archivos sobre UDP; no incluye inicio de sesión ni control de acceso, por lo que el servicio debe limitarse y protegerse mediante controles externos.' },
    { url: 'https://www.rfc-editor.org/rfc/rfc7440.html', referencia: 'IETF RFC 7440: especifica una opción TFTP para transferencia de bloques extendidos y mantiene la naturaleza de transferencia simple; no lo convierte en protocolo autenticado.' }
  ], {
    texto: 'En una red de gestión aislada que ya controla el acceso al servidor, ¿qué protocolo sencillo puede utilizarse para transferir una imagen de firmware a un dispositivo que lo admita?',
    opciones: ['SAML.', 'Kerberos.', 'ICMP.', 'TFTP.'],
    respuesta_correcta: 3
  }, 'Corregida D. TFTP permite transferir archivos y por ello puede servir para distribuir firmware cuando el dispositivo lo soporte. La pregunta se acota a una red de gestión con controles de acceso externos: RFC 1350 advierte que TFTP carece de autenticación y control de acceso propios, de modo que no debe exponerse como servicio abierto ni describirse como canal seguro.', 'corregida'],
  [7402, [80], ['III-12'], ['SAML', 'OASIS', 'federación de identidad', 'SSO', 'aserciones XML'], [
    { url: 'https://docs.oasis-open.org/security/saml/v2.0/saml-core-2.0-os.pdf', referencia: 'OASIS Security Assertion Markup Language (SAML) V2.0, Core, OASIS Standard: define aserciones, protocolos, bindings y perfiles para intercambiar información de autenticación, atributos y autorización entre dominios de seguridad.' },
    { url: 'https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=security', referencia: 'OASIS Security Services Technical Committee: caracteriza SAML como marco XML para comunicar información de autenticación, permisos y atributos de usuarios.' },
    { url: 'https://docs.oasis-open.org/security/saml/Post2.0/sstc-saml-tech-overview-2.0.html', referencia: 'OASIS SAML 2.0 Technical Overview, perfil Web Browser SSO: describe cómo las aserciones SAML y los roles IdP/SP permiten inicio de sesión único; SAML no es simplemente un estándar de firmado XML ni una alternativa equivalente a WS-Security.' }
  ], {
    texto: '¿Qué describe correctamente SAML 2.0?',
    opciones: [
      'Un marco XML de OASIS para intercambiar aserciones de autenticación, atributos y autorización entre dominios; puede habilitar inicio de sesión único federado.',
      'Un protocolo de transporte que cifra por sí solo todas las comunicaciones entre servidores.',
      'Un estándar de IEEE dedicado exclusivamente a firmar cualquier estructura XML.',
      'Una alternativa equivalente a WS-Security que sustituye necesariamente la seguridad de mensajes SOAP.'
    ],
    respuesta_correcta: 0
  }, 'Corregida A. El original podía inducir a elegir D por atribuir a SAML la condición de alternativa a WS-Security. SAML es un marco OASIS de aserciones, protocolos, bindings y perfiles de federación; un perfil puede proporcionar SSO. No sustituye necesariamente WS-Security ni es en sí un protocolo de cifrado.', 'corregida'],
  [7403, [111, 125], ['II-8', 'IV-12'], ['firewall', 'cortafuegos', 'OSI', 'ISO/IEC 7498-1'], [
    { url: 'https://www.itu.int/rec/T-REC-X.200/en', referencia: 'ITU-T X.200 (07/1994), idéntica a ISO/IEC 7498-1:1994 y en vigor: define el modelo de referencia OSI de siete capas; no define productos de cortafuegos.' },
    { url: 'https://csrc.nist.gov/pubs/sp/800/41/r1/final', referencia: 'NIST SP 800-41 Rev. 1, Guidelines on Firewalls and Firewall Policy: describe distintas tecnologías de cortafuegos y sus capacidades, que pueden analizar tráfico de diferentes capas. La norma citada para nombrar el modelo OSI es ISO/IEC 7498-1.' }
  ], {
    texto: '¿Qué norma define el modelo de referencia OSI cuyas capas se utilizan para describir las capacidades de distintos tipos de cortafuegos?',
    opciones: ['ISO/IEC 9126-1.', 'ISO/IEC 15504.', 'ISO/IEC 25101.', 'ISO/IEC 7498-1.'],
    respuesta_correcta: 3
  }, 'Vigente D. ITU-T X.200 es idéntica a ISO/IEC 7498-1:1994 y define el modelo de referencia OSI. Las tecnologías de cortafuegos pueden filtrar información de distintas capas, pero la norma OSI no es una especificación de productos firewall; se precisa este alcance en el enunciado.', 'vigente'],
  [7404, [48], [], ['Estrategia Nacional de Ciberseguridad', 'Foro Nacional de Ciberseguridad', 'colaboración público-privada'], [
    { url: 'https://www.dsn.gob.es/sites/default/files/documents/Estrategia%20Nacional%20de%20Ciberseguridad%202019.pdf', referencia: 'Estrategia Nacional de Ciberseguridad 2019, apartado sobre estructura del Sistema de Seguridad Nacional: propone el Foro Nacional de Ciberseguridad para articular la colaboración de los sectores público y privado.' },
    { url: 'https://www.dsn.gob.es/es/actualidad/seguridad-nacional-ultima-hora/nacional-%E2%80%93-foro-nacional-ciberseguridad', referencia: 'Departamento de Seguridad Nacional, reunión constitutiva del Foro, 23/07/2020: documenta su constitución como grupo de trabajo de colaboración con la sociedad, derivado de la Estrategia 2019.' }
  ], {
    texto: '¿Qué foro de colaboración público-privada propuso la Estrategia Nacional de Ciberseguridad de 2019 y se constituyó en julio de 2020?',
    opciones: ['Foro Nacional de Ciberseguridad.', 'Comisión Permanente de Ciberseguridad.', 'Centro de Operaciones de Ciberseguridad.', 'Ninguno de los anteriores.'],
    respuesta_correcta: 0
  }, 'Corregida A. La Estrategia de 2019 propuso crear el Foro Nacional de Ciberseguridad como espacio de cooperación entre sector público, privado y sociedad. El DSN documenta su constitución en julio de 2020; el enunciado diferencia correctamente propuesta y constitución posterior. A1-48 es la correspondencia temática directa; el programa A2 no contiene un epígrafe específico de gobernanza nacional de ciberseguridad.', 'corregida'],
  [7405, [108, 116], ['II-8', 'IV-14'], ['VoIP', 'RTP', 'TCP', 'UDP', 'VoATM', 'VoFR'], [
    { url: 'https://www.rfc-editor.org/rfc/rfc3550.html', referencia: 'IETF RFC 3550, RTP: protocolo de transporte para aplicaciones en tiempo real como audio y vídeo; las aplicaciones suelen ejecutarlo sobre UDP, aunque el estándar no lo restringe a este único transporte.' },
    { url: 'https://www.rfc-editor.org/rfc/rfc4571.html', referencia: 'IETF RFC 4571: especifica el encuadre de paquetes RTP/RTCP sobre transporte orientado a conexión; demuestra que RTP sobre TCP es posible, aunque no sea la opción más habitual para voz interactiva.' },
    { url: 'https://www.rfc-editor.org/rfc/rfc8095.html', referencia: 'IETF RFC 8095 §3.8: registra explícitamente que RTP puede transportar audio/vídeo sobre servicios unicast o multicast como TCP, UDP, UDP-Lite, DCCP, TLS y DTLS.' },
    { url: 'https://www.itu.int/rec/T-REC-I.366.2/en', referencia: 'ITU-T I.366.2: especificación histórica de subcapa de convergencia AAL tipo 2 para servicios de banda estrecha/trunking en ATM; confirma que la voz sobre ATM tuvo mecanismos definidos.' }
  ], {
    texto: 'Sobre el transporte de voz en redes de paquetes, ¿qué afirmación es FALSA?',
    opciones: [
      'VoIP transporta voz mediante paquetes sobre redes IP.',
      'RTP suele utilizar UDP para voz interactiva, aunque también puede encapsularse sobre otros transportes adecuados.',
      'RTP solo puede transportarse sobre UDP; enviar paquetes RTP sobre TCP es imposible.',
      'Se han definido mecanismos para transportar servicios de voz sobre ATM y Frame Relay.'
    ],
    respuesta_correcta: 2
  }, 'Corregida C. No es correcto afirmar que VoTCP sea imposible: IETF RFC 4571 define RTP/RTCP sobre transporte orientado a conexión y RFC 8095 enumera TCP entre los transportes posibles de RTP. UDP es habitual para voz interactiva por su comportamiento temporal, pero la posibilidad técnica de RTP/TCP existe; ATM y Frame Relay también tuvieron mecanismos de voz definidos.', 'corregida']
];

apply({ numero: '1420', fecha: '2026-11-15', records });
