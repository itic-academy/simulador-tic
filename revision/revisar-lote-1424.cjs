const apply = require('./aplicar-lote.cjs');

const records = [
  [7421, [108, 112], ['IV-7'], ['LMDS', 'radioenlace fijo', 'punto a multipunto', 'estación hub'], [
    { url: 'https://docs.fcc.gov/public/attachments/DA-07-674A1.pdf', referencia: 'FCC DA 07-674, Part 101: caracteriza LMDS como sistemas de radio fijos punto a punto o punto a multipunto con estaciones hub y de abonado.' },
    { url: 'https://docs.fcc.gov/public/attachments/FCC-95-491A2_Rcd.pdf', referencia: 'FCC 95-491, LMDS: describe abonados con antena en línea de visión respecto del transmisor, coherente con el carácter de radio de alta frecuencia.' }
  ], {
    texto: '¿Qué describe un despliegue LMDS punto a multipunto?',
    opciones: [
      'Un enlace exclusivamente punto a punto, sin estaciones de abonado.',
      'Una tecnología que no necesita línea de visión en ningún caso.',
      'Celdas que necesariamente tienen cobertura superior a 25 km.',
      'Una estación hub fija que distribuye el servicio por radio a varias estaciones de abonado.'
    ],
    respuesta_correcta: 3
  }, 'Corregida D. El original mezclaba características generales de LMDS con afirmaciones absolutas sobre punto a punto, visibilidad y alcance. La FCC caracteriza el servicio con estaciones hub y de abonado, en configuraciones punto a punto o punto a multipunto; la modalidad preguntada conecta una estación central fija con varias estaciones de abonado. No se afirma que el punto a punto sea imposible en todo sistema LMDS.', 'corregida'],
  [7422, [113], ['IV-10'], ['MPLS', 'LSR', 'LER', 'label switching'], [
    { url: 'https://www.rfc-editor.org/rfc/rfc3031.html', referencia: 'IETF RFC 3031, MPLS Architecture, §2.1 y §2.2: denomina LSR al router que soporta MPLS y describe los LSR intermedios que conmutan etiquetas; también define ingreso y egreso del LSP.' },
    { url: 'https://www.rfc-editor.org/rfc/rfc5921.html', referencia: 'IETF RFC 5921, MPLS-TP Framework, §1.3.5: define en ese perfil el LER como un LSR en un extremo del LSP que impone o retira la etiqueta.' }
  ], {
    texto: '¿Cómo se denomina el router MPLS interior que reenvía paquetes usando etiquetas y no actúa como router de borde del dominio?',
    opciones: ['LSR (Label Switching Router).', 'LER (Label Edge Router).', 'LSP (Label Switched Path).', 'FEC (Forwarding Equivalence Class).'],
    respuesta_correcta: 0
  }, 'Corregida A. LSR designa el nodo que realiza conmutación MPLS; LER es un LSR de borde que impone o retira etiquetas al entrar o salir del LSP. Se precisa que se pregunta por un nodo interior, pues LER y routers de tránsito también pertenecen a la familia general LSR.', 'corregida'],
  [7423, [62, 124], ['II-2'], ['Android', 'Activity', 'Intent', 'Bundle', 'ciclo de vida'], [
    { url: 'https://developer.android.com/guide/components/activities/activity-lifecycle', referencia: 'Android Developers, Activity lifecycle: ordena los callbacks; al iniciar otra actividad en el mismo proceso, la anterior ejecuta onPause antes de que la nueva complete onResume.' },
    { url: 'https://developer.android.com/guide/components/intents-filters', referencia: 'Android Developers, Intents and intent filters: distingue Intent explícito (componente concreto) e implícito (acción que puede resolver otro componente); no es obligatorio usar siempre el explícito.' },
    { url: 'https://developer.android.com/training/basics/intents/sending', referencia: 'Android Developers, Sending the user to another app: los datos simples pueden adjuntarse directamente con los distintos métodos putExtra(); no hace falta crear manualmente un Bundle para cada transferencia.' }
  ], {
    texto: 'Sobre actividades e Intent en Android, ¿qué afirmación NO es correcta?',
    opciones: [
      'Un Intent explícito permite indicar la actividad concreta que se quiere iniciar.',
      'Se pueden pasar valores sencillos con putExtra() sin construir manualmente un objeto Bundle.',
      'En el ciclo documentado de Activity, onCreate() inicia la vida completa y onDestroy() la finaliza.',
      'onPause() de la actividad actual termina después de que la siguiente actividad haya alcanzado onResume().'
    ],
    respuesta_correcta: 3
  }, 'Corregida D. El original tenía más de una afirmación falsa: Intent explícito no es obligatorio porque también existe el implícito, y no es necesario construir manualmente un Bundle para extras simples. La documentación de Android indica que onPause de la actividad actual se ejecuta antes de que la siguiente actividad llegue a onResume; se reformulan distractores para que haya una única respuesta incorrecta.', 'corregida'],
  [7424, [123], ['IV-15'], ['handover', 'handoff', 'cambio de celda', 'movilidad'], [
    { url: 'https://www.etsi.org/deliver/etsi_ts/123000_123099/123009/19.00.00_60/ts_123009v190000p.pdf', referencia: 'ETSI/3GPP TS 23.009 V19.0.0, Handover procedures: especifica los procedimientos para transferir una conexión/comunicación móvil entre células y nodos de red.' }
  ], {
    texto: 'En telefonía móvil, ¿cómo se denomina el procedimiento que mantiene una comunicación activa cuando el terminal pasa de una célula a otra?',
    opciones: ['Roaming.', 'Handover (o handoff).', 'Clustering.', 'Trunking.'],
    respuesta_correcta: 1
  }, 'Corregida B. El handover/handoff transfiere la comunicación activa al cambiar de célula; puede ser intra- o inter-MSC según la arquitectura. Roaming se refiere al uso de una red visitada y no es sinónimo del traspaso celular. Se elimina la restricción del original a una misma central de conmutación.', 'corregida'],
  [7425, [109], ['II-8', 'IV-13'], ['FTP', 'TCP', 'RFC 959', 'protocolo de transporte'], [
    { url: 'https://www.rfc-editor.org/rfc/rfc959.html', referencia: 'IETF RFC 959, §4 y §5.2: especifica que FTP establece su conexión de control como conexión TCP y define una conexión de datos separada.' },
    { url: 'https://www.rfc-editor.org/rfc/rfc3977.html', referencia: 'IETF RFC 3977, NNTP: el protocolo establece una conexión fiable de flujo de octetos y el servidor escucha en un puerto TCP, por lo que el distractor original “NNTP usa UDP” también era falso.' },
    { url: 'https://www.rfc-editor.org/rfc/rfc5905.html', referencia: 'IETF RFC 5905, NTPv4: el paquete NTP se transporta como datagrama UDP; el servicio usa el puerto 123.' }
  ], {
    texto: 'Según RFC 959, ¿qué protocolo establece sobre TCP su conexión de control para transferir ficheros?',
    opciones: ['FTP.', 'TFTP.', 'SNMP.', 'RTP.'],
    respuesta_correcta: 0
  }, 'Corregida A. La pregunta original ofrecía varias afirmaciones falsas y discutibles: NNTP se especifica sobre una conexión fiable (habitualmente TCP), NTPv4 transporta sus paquetes sobre UDP, FTP sí usa TCP y la necesidad de sincronización depende del entorno. Se reescribe para preguntar directamente por el protocolo definido en RFC 959 y evitar la ambigüedad.', 'corregida']
];

apply({ numero: '1424', fecha: '2026-11-16', records });
