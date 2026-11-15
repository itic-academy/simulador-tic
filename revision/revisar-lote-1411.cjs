const apply = require('./aplicar-lote.cjs');

const sources = {
  ivr: [{
    url: 'https://www.w3.org/TR/voicexml20/',
    referencia: 'W3C, Voice Extensible Markup Language (VoiceXML) Version 2.0, Recommendation: en §1.2.3 define el ámbito de la interfaz de diálogo de voz, e incluye como caso de uso las aplicaciones de interactive voice response (IVR); el título da el nombre VoiceXML.'
  }],
  osi: [
    {
      url: 'https://www.itu.int/rec/T-REC-X.225/en',
      referencia: 'ITU-T Recommendation X.225 / ISO/IEC 8327-1, protocolo de sesión OSI (componentes en vigor: X.225 (11/95) y enmiendas indicadas por ITU-T). §5.4 identifica gestión del diálogo, sincronización y resincronización del flujo de datos como funciones de sesión.'
    },
    {
      url: 'https://www.itu.int/rec/T-REC-X.200/en',
      referencia: 'ITU-T X.200, modelo básico de referencia OSI: referencia normativa de la arquitectura y separación de funciones por capas.'
    }
  ],
  dsl: [
    {
      url: 'https://www.itu.int/rec/T-REC-G.992.1/en',
      referencia: 'ITU-T G.992.1, transceptores ADSL: describe transmisión digital de alta velocidad sobre un par metálico trenzado entre el operador y el abonado, ejemplo clásico de xDSL.'
    },
    {
      url: 'https://www.itu.int/rec/T-REC-G.995.1/en',
      referencia: 'ITU-T G.995.1, visión general de las Recomendaciones DSL: reúne la familia de técnicas de línea digital de abonado.'
    }
  ],
  wifi: [
    {
      url: 'https://standards.ieee.org/ieee/802.11ax/7180/',
      referencia: 'IEEE SA, IEEE 802.11ax-2021, enmienda High-Efficiency WLAN: define mejoras MAC/PHY de alta eficiencia en bandas de 1 GHz a 7,125 GHz.'
    },
    {
      url: 'https://www.cisco.com/c/en/us/products/collateral/wireless/white-paper-c11-740788.html',
      referencia: 'Cisco, IEEE 802.11ax: The Sixth Generation of Wi-Fi: explica la eficiencia en entornos densos, OFDMA y el uso de modulación 1024-QAM frente a 802.11ac.'
    },
    {
      url: 'https://www.asus.com/us/support/faq/1046355/',
      referencia: 'ASUS Support, diferencia entre Wi-Fi 6 y Wi-Fi 6E: Wi-Fi 6E conserva la tecnología 802.11ax y la extiende a la banda de 6 GHz. La disponibilidad de banda depende de equipos y regulación regional.'
    }
  ],
  ping: [
    {
      url: 'https://www.rfc-editor.org/rfc/rfc1122.html',
      referencia: 'IETF RFC 1122, §3.2.1.3: 127/8 se reserva como dirección de loopback interno del host y no debe aparecer fuera de este.'
    },
    {
      url: 'https://www.rfc-editor.org/rfc/rfc792.html',
      referencia: 'IETF RFC 792, Internet Control Message Protocol: define Echo/Echo Reply de ICMP, que es la prueba realizada por ping en IPv4.'
    }
  ]
};

apply({
  numero: '1411',
  fecha: '2026-11-15',
  records: [
    [7356, [106], ['II-12'], ['IVR', 'Interactive Voice Response', 'VoiceXML', 'centro de contacto'], sources.ivr, {
      texto: 'Un sistema IVR (Interactive Voice Response) proporciona:',
      opciones: [
        'Respuesta de vídeo interactiva (Interactive Video Response).',
        'Respuesta de voz interactiva (Interactive Voice Response).',
        'Actualización inmediata de imagen de vídeo (Immediate Video Refresh).',
        'Recuento inmediato y confidencial de votos (Immediate Vote Recounting).'
      ],
      respuesta_correcta: 1
    }, 'Corregida B. IVR significa Interactive Voice Response: un sistema telefónico automatizado mantiene un diálogo de voz con quien llama y puede recibir tonos o voz. VoiceXML es un estándar W3C para aplicaciones de diálogo de voz e incluye expresamente el caso de uso IVR; no significa respuesta de vídeo.', 'corregida'],
    [7357, [111], ['II-8'], ['OSI', 'capa de sesión', 'diálogo', 'sincronización', 'resincronización'], sources.osi, {
      texto: 'En el modelo OSI, ¿qué funciones corresponden a la capa de sesión?',
      opciones: [
        'Cifrado y compresión de los datos de usuario.',
        'Segmentación, control de errores y multiplexación de extremo a extremo.',
        'Gestión del diálogo y sincronización o resincronización del intercambio de datos.',
        'Direccionamiento lógico, encaminamiento y reenvío entre redes.'
      ],
      respuesta_correcta: 2
    }, 'Corregida C. La recomendación X.225 asigna a la capa de sesión la gestión del diálogo, la sincronización y resincronización del flujo de datos. La opción evita atribuirle la segmentación/transporte (capa 4), el encaminamiento (capa 3) o funciones criptográficas generales.', 'corregida'],
    [7358, [108, 112], ['IV-7'], ['xDSL', 'DSL', 'ADSL', 'par de cobre', 'acceso de abonado'], sources.dsl, {
      texto: 'En su acepción clásica, xDSL designa una familia de técnicas de acceso digital de banda ancha que transmite:',
      opciones: [
        'Por el par metálico de cobre de la línea de abonado.',
        'Exclusivamente por fibras ópticas.',
        'Mediante ondas de radio sin un tramo físico de abonado.',
        'Por enlaces de comunicaciones exclusivamente satelitales.'
      ],
      respuesta_correcta: 0
    }, 'Corregida A. xDSL es la familia de tecnologías de línea digital de abonado sobre pares metálicos; por ejemplo, ITU-T G.992.1 especifica ADSL sobre par trenzado metálico. Se conserva como definición técnica clásica y no se presenta el cobre como tecnología de acceso actual predominante: la disponibilidad y despliegue son cuestiones distintas de la definición.', 'corregida'],
    [7359, [114], ['IV-11'], ['IEEE 802.11ax', 'Wi-Fi 6', 'Wi-Fi 6E', 'OFDMA', '1024-QAM', '6 GHz'], sources.wifi, {
      texto: 'Respecto a IEEE 802.11ax frente a 802.11ac, ¿cuál es correcta al incluir los dispositivos 802.11ax con modalidad Wi-Fi 6E?',
      opciones: [
        '802.11ax mejora la eficiencia en redes con muchos dispositivos, entre otras cosas mediante OFDMA.',
        'Los dispositivos 802.11ax certificados como Wi-Fi 6E pueden operar en 6 GHz donde la normativa lo permita.',
        '802.11ax incorpora modulación 1024-QAM, ausente de 802.11ac.',
        'Todas las afirmaciones anteriores son correctas.'
      ],
      respuesta_correcta: 3
    }, 'Corregida D. Se conserva la clave “todas”, pero se acota el enunciado y la opción de 6 GHz. IEEE 802.11ax-2021 mejora la eficiencia de WLAN; la comparación técnica con 802.11ac confirma OFDMA/eficiencia en alta densidad y 1024-QAM; el uso de 6 GHz corresponde a dispositivos Wi-Fi 6E basados en 802.11ax y está sujeto a las bandas habilitadas localmente. Así se evita confundir Wi-Fi 6 ordinario con Wi-Fi 6E.', 'corregida'],
    [7360, [111, 115], ['II-8'], ['ping', '127.0.0.1', 'loopback', 'ICMP', 'TCP/IP', 'interfaz de red'], sources.ping, {
      texto: 'Si `ping 127.0.0.1` recibe correctamente una respuesta Echo Reply:',
      opciones: [
        'Se ha comprobado que la tarjeta de red física y el enlace con otro equipo funcionan.',
        'Ha respondido el procesamiento local de IP/ICMP mediante loopback; la prueba no comprueba la tarjeta física ni la conectividad externa.',
        'La respuesta informa del número de routers atravesados por el paquete.',
        'Nada de lo anterior es correcto.'
      ],
      respuesta_correcta: 1
    }, 'Corregida B. 127.0.0.1 es una dirección de loopback: los datagramas dirigidos a 127/8 permanecen dentro del host. Una respuesta de ping acredita respuesta local de IP/ICMP, pero no demuestra que funcionen el adaptador físico, el cable, el punto de acceso, la ruta o un servicio remoto.', 'corregida']
  ]
});
