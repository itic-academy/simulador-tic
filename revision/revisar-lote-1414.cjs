const apply = require('./aplicar-lote.cjs');

const refs = {
  h245: [
    {
      url: 'https://www.itu.int/rec/T-REC-H.245-202203-I/en',
      referencia: 'ITU-T H.245 (03/2022), edición en vigor. Define señalización de capacidades de terminales, negociación durante la comunicación, señalización de canales lógicos y mensajes Control & Indication; no define ni transporta los códecs o el flujo multimedia como función propia.'
    }
  ],
  vdi: [
    {
      url: 'https://learn.microsoft.com/en-us/ecdn/technical-documentation/vdi',
      referencia: 'Microsoft Learn, VDI support: define VDI como uso de máquinas virtuales para proporcionar y administrar escritorios virtuales alojados centralizadamente y accesibles de forma remota.'
    }
  ],
  adhoc: [
    {
      url: 'https://learn.microsoft.com/en-us/windows/win32/api/wlanapi/ns-wlanapi-wlan_bss_entry',
      referencia: 'Microsoft Learn, WLAN_BSS_ENTRY: identifica IBSS como red ad hoc e indica que es una red autocontenida sin acceso a un sistema de distribución; distingue esa modalidad de la BSS de infraestructura.'
    },
    {
      url: 'https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-48r1.pdf',
      referencia: 'NIST SP 800-48 Rev. 1, arquitectura IEEE 802.11: describe el modo ad hoc/IBSS frente al modo infraestructura con punto de acceso; se cita como definición técnica del modo, no como recomendación de seguridad vigente.'
    }
  ],
  ftam: [
    {
      url: 'https://www.iso.org/standard/15846.html',
      referencia: 'ISO 8571-3:1988, File Service Definition, confirmada por ISO en 2000 y aún vigente. La norma define el servicio FTAM para transferencia, acceso y gestión de archivos; incluye grupos/atributos de seguridad y control de acceso, por lo que seguridad/permisos no son una respuesta falsa.'
    },
    {
      url: 'https://www.itu.int/rec/dologin_pub.asp?id=T-REC-T.190-199508-I%21%21PDF-E&lang=e&type=items',
      referencia: 'ITU-T T.190 (08/1995), §I.3: FTAM permite acceder y gestionar almacenes virtuales remotos y transferir sus archivos; enumera perfiles de transferencia, acceso y gestión. No es un protocolo de encaminamiento IP.'
    }
  ],
  video: [
    {
      url: 'https://www.itu.int/rec/T-REC-H.264-202606-I/es',
      referencia: 'ITU-T H.264 (06/2026), edición en vigor. La codificación inter-predictiva toma como referencia imágenes previamente decodificadas; los vectores de movimiento y la información residual permiten reducir redundancia temporal. La intra-codificación no usa otras imágenes como referencia.'
    },
    {
      url: 'https://www.itu.int/ITU-T/recommendations/rec.aspx?rec=H.264',
      referencia: 'Base de datos oficial ITU-T de H.264: identifica la edición 16 (06/2026) como vigente y explica su aplicación a vídeo en videoconferencia, almacenamiento, radiodifusión y streaming.'
    }
  ]
};

const records = [
  [7371, [130], ['IV-16'], ['H.245', 'videoconferencia', 'señalización', 'canales lógicos', 'negociación de capacidades'], refs.h245, {
    texto: '¿Cuál describe correctamente la función de ITU-T H.245 en una comunicación audiovisual?',
    opciones: [
      'Transporta los paquetes de audio y vídeo codificados entre los participantes.',
      'Señaliza capacidades y modos, negocia canales lógicos y proporciona mensajes de control e indicación.',
      'Asigna direcciones IP y encamina los paquetes entre redes.',
      'Define por sí solo los algoritmos de compresión de audio y vídeo.'
    ],
    respuesta_correcta: 1
  }, 'Corregida. El original afirmaba que H.245 solo se usa con H.323 y mezclaba H.234 como ejemplo, de modo que no identificaba correctamente ni su alcance ni su función. Se sustituye por una pregunta sobre las funciones que la recomendación H.245 sí especifica: negociación de capacidades, señalización de canales lógicos y control/indicación. El transporte y los códecs son funciones distintas.', 'corregida'],
  [7372, [57], ['IV-6'], ['VDI', 'escritorios virtuales', 'máquinas virtuales', 'virtualización del puesto cliente'], refs.vdi, {
    texto: '¿Cómo se denomina la arquitectura que aloja escritorios de usuario en máquinas virtuales centralizadas y permite acceder a ellos de forma remota?',
    opciones: ['VDI (Virtual Desktop Infrastructure).', 'VPN (Virtual Private Network).', 'HCI (Hyper-Converged Infrastructure).', 'VLAN (Virtual Local Area Network).'],
    respuesta_correcta: 0
  }, 'Corregida. Se precisa la definición que distingue VDI de las tecnologías con las que puede coexistir: VDI proporciona escritorios virtuales alojados centralmente en máquinas virtuales; HCI puede ser la plataforma que los soporte, VPN aporta conectividad y VLAN segmenta la red. La recomendación no prescribe un fabricante ni que VDI deba ejecutarse en HCI.', 'corregida'],
  [7373, [118], ['IV-11'], ['IEEE 802.11', 'IBSS', 'ad hoc', 'WLAN', 'punto de acceso'], refs.adhoc, {
    texto: '¿Qué caracteriza al modo ad hoc (IBSS) de una red WLAN IEEE 802.11?',
    opciones: [
      'Las estaciones forman una red independiente sin depender de un punto de acceso ni de un sistema de distribución.',
      'Todas las estaciones deben asociarse a un punto de acceso que reenvía su tráfico.',
      'Un conmutador Ethernet central coordina las comunicaciones inalámbricas.',
      'Cada estación necesita una conexión cableada a un router para comunicarse con otra.'
    ],
    respuesta_correcta: 0
  }, 'Corregida. El término ad hoc por sí solo admite más de una topología y la expresión original «todos con todos» podía confundirse con una malla completa. Se acota a la modalidad IEEE 802.11 IBSS: estaciones que forman una red independiente, sin AP ni sistema de distribución. No se afirma que cada estación alcance directamente a todas las demás en cualquier topología ad hoc.', 'corregida'],
  [7374, [111], ['II-8'], ['FTAM', 'ISO 8571', 'OSI', 'transferencia de ficheros', 'acceso', 'gestión de archivos'], refs.ftam, {
    texto: '¿Cuál de estas funciones NO corresponde al protocolo FTAM de OSI?',
    opciones: [
      'Encaminar paquetes IP entre redes distintas.',
      'Transferir archivos de un almacén virtual remoto.',
      'Acceder a archivos o a unidades de datos de archivo.',
      'Gestionar archivos y almacenes de archivos remotos.'
    ],
    respuesta_correcta: 0
  }, 'Corregida. La opción que el banco daba como falsa (seguridad y permisos) no es una exclusión válida: ISO 8571 contempla atributos de seguridad y control de acceso. Se corrige el reactivo para preguntar por una función inequívocamente ajena a FTAM —el encaminamiento IP—, manteniendo como funciones propias transferencia, acceso y gestión de ficheros.', 'corregida'],
  [7375, [130], ['IV-16'], ['vídeo', 'compresión temporal', 'intertrama', 'inter-predicción', 'redundancia temporal', 'H.264'], refs.video, {
    texto: 'En la codificación de vídeo, ¿qué describe la compresión temporal o intertrama?',
    opciones: [
      'Codificar cada imagen sin tomar otras imágenes como referencia.',
      'Predecir bloques a partir de imágenes de referencia y codificar la información necesaria para representar sus diferencias y movimiento.',
      'Reducir la cantidad de muestras espaciales de una única imagen sin utilizar otras tramas.',
      'Codificar únicamente los metadatos de color, sin la imagen ni sus predicciones.'
    ],
    respuesta_correcta: 1
  }, 'Corregida. La descripción original simplificaba el proceso como «codificar solo las partes con movimiento», lo cual puede sugerir que toda compresión temporal opera únicamente sobre píxeles detectados como móviles. La formulación nueva define la reducción de redundancia entre imágenes mediante predicción intertrama, referencias y representación del movimiento/residuo; se distingue de la codificación intratrama.', 'corregida']
];

apply({ numero: '1414', fecha: '2026-11-15', records });
