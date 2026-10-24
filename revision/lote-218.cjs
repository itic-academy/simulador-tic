const apply = require('./aplicar-lote.cjs');

const records = [
  [1406, [108, 111, 115], ['II-8', 'IV-10'], ['encaminamiento', 'routing dinámico', 'vector de distancia', 'estado de enlace', 'RIP', 'OSPF'],
    [{ url: 'https://www.rfc-editor.org/rfc/rfc2453.html', referencia: 'RFC 2453, §§3.4–3.5: RIP usa algoritmo de vector de distancia; los routers mantienen destinos, métrica y siguiente salto e intercambian actualizaciones con vecinos.' }, { url: 'https://www.rfc-editor.org/rfc/rfc2328.html', referencia: 'RFC 2328, resumen y §2: OSPF es de estado de enlace; cada router mantiene una base de datos de topología y calcula un árbol de caminos mínimos.' }], null,
    'Se reescribe para distinguir propiedades de protocolos concretos y evitar la generalización de que todo encaminamiento dinámico usa una métrica única. La opción correcta describe el intercambio de información de encaminamiento y el posible recálculo tras cambios de alcanzabilidad/topología; las tablas estáticas requieren configuración administrativa. RIP es vector de distancia e intercambia rutas/métricas con vecinos, mientras OSPF difunde información de estado de enlace para formar la base topológica. Cotejo: ITIC Academy, bloque 42 Redes y bloque 43 Protocolos, versión 2026.1. Correspondencia oficial: A1-108/111/115 y A2-II-8/IV-10.', 'corregida'],
  [1407, [109, 111], ['II-8', 'IV-13'], ['IANA', 'ICANN', 'RIR', 'recursos de Internet', 'números de Sistema Autónomo'],
    [{ url: 'https://www.iana.org/help/abuse-answers', referencia: 'IANA, Abuse Issues and IP Addresses: IANA mantiene el espacio global y asigna bloques a los cinco RIR; estos asignan direcciones a operadores e ISP.' }, { url: 'https://www.iana.org/assignments/as-numbers', referencia: 'IANA, Autonomous System (AS) Numbers registry, actualizado el 1-06-2026: IANA asigna ASNs a RIRs; los RIR los asignan a operadores conforme a sus políticas.' }, { url: 'https://www.iana.org/numbers/allocations/', referencia: 'IANA, Number Resource Allocation Data: proporciona a los RIR los pools de direcciones y números AS no asignados.' }], null,
    'Se reemplaza la formulación «IANA/ICANN» por el papel concreto de IANA para no confundir coordinación institucional con las asignaciones operativas. La afirmación correcta es que IANA asigna bloques de recursos numéricos (direcciones IP y ASNs) a los RIR y estos los asignan a operadores conforme a las políticas regionales; no implica asignación directa general a usuarios finales. Cotejo: ITIC Academy, bloque 43 Protocolos, apartado sobre organizaciones y gobierno de Internet, versión 2026.1. Correspondencia oficial: A1-109/111 y A2-II-8/IV-13.', 'corregida'],
  [1408, [110, 118], ['IV-8'], ['switch', 'conmutación Ethernet', 'dirección MAC', 'tabla CAM', 'VLAN'],
    [{ url: 'https://www.cisco.com/c/en/us/support/docs/lan-switching/ethernet/12006-chapter22.html', referencia: 'Cisco, Troubleshoot LAN Switching Environments, «Transparent Bridging Algorithm»: una MAC conocida se reenvía por el puerto asociado en la CAM y dentro de la VLAN; destinos desconocidos y broadcast se inundan por los demás puertos de esa VLAN.' }], null,
    'Se acota la clave a una trama unicast cuyo destino está aprendido en la tabla CAM y a su VLAN. No se afirma que todo tráfico se envíe siempre a un único puerto: los destinos MAC desconocidos y las tramas broadcast se inundan dentro de la VLAN; un switch multicapa también puede enrutar, pero eso no convierte en correcta la descripción del distractor del router IP. Cotejo: ITIC Academy, bloque 42 Redes, dispositivos Ethernet/LAN y VLAN, versión 2026.1. Correspondencia oficial: A1-110/118 y A2-IV-8.', 'corregida'],
  [1409, [108, 110], ['IV-8'], ['cableado estructurado', 'par trenzado', 'U/UTP', 'F/UTP', 'S/FTP', 'apantallamiento'],
    [{ url: 'https://static.datwyler-itinfra.com/assets/Downloads/cable_design_description_iso_iec_11801_0713_e.pdf', referencia: 'Datwyler, Copper data cable design description in accordance with ISO/IEC 11801: U/UTP no apantallado; F/UTP pantalla global de lámina y pares sin apantallar; S/FTP pantalla global de trenza y pares apantallados individualmente con lámina.' }], null,
    'Se sustituye la nomenclatura heredada y ambigua «STP/2-UTP» por designaciones precisas conforme al esquema de ISO/IEC 11801. U/UTP carece de apantallamiento global e individual; F/UTP tiene lámina global y pares no apantallados; S/FTP combina trenza global con lámina en cada par. La opción S/FTP es la única correcta. Cotejo: ITIC Academy, bloque 42 Redes, medios de transmisión y cableado estructurado, versión 2026.1. Correspondencia oficial: A1-108/110 y A2-IV-8.', 'corregida'],
  [1410, [111, 115], ['II-8'], ['IPv6', 'cabecera fija', 'direcciones de 128 bits', 'cabeceras de extensión'],
    [{ url: 'https://www.rfc-editor.org/rfc/rfc8200.html', referencia: 'RFC 8200, §3: formato de cabecera base IPv6 con campos Source Address y Destination Address de 128 bits; la cabecera base es fija y las cabeceras de extensión se codifican separadamente en el payload.' }], null,
    'Se delimita la pregunta a la cabecera base. Las direcciones de origen y destino tienen 128 bits; el formato fijo de la cabecera base tiene 40 octetos y las cabeceras de extensión son estructuras separadas. IPv6 no incluye un campo «LON» para expresar una longitud variable de la cabecera base; el campo Payload Length mide lo que sigue a dicha cabecera. Cotejo: ITIC Academy, bloque 43 Protocolos, IPv6 y transición IPv4/IPv6, versión 2026.1. Correspondencia oficial: A1-111/115 y A2-II-8.', 'corregida']
];

apply({ numero: '218', fecha: '2026-10-24', records, edits: {
  1406: { texto: 'Sobre el encaminamiento estático y dinámico, ¿qué afirmación es correcta?', opciones: [
    'Una ruta estática se adapta automáticamente a los cambios de topología porque la tabla se recalcula mediante intercambio de actualizaciones.',
    'Los protocolos de encaminamiento dinámico intercambian información de rutas —normalmente con los vecinos que define cada protocolo— y pueden actualizar las rutas cuando cambia la alcanzabilidad o la topología.',
    'OSPF es un protocolo de vector de distancia que anuncia a cada vecino únicamente la distancia al destino.',
    'RIP es un protocolo de estado de enlace que difunde a todos los routers la descripción completa de cada enlace.'
  ], respuesta_correcta: 1 },
  1407: { texto: 'Sobre la coordinación de recursos numéricos de Internet, ¿qué afirmación es correcta?', opciones: [
    'IANA asigna bloques de direcciones IP y números de Sistema Autónomo a los RIR; estos realizan asignaciones regionales a operadores conforme a sus políticas.',
    'Internet Society asigna directamente direcciones IP, nombres de dominio y parámetros de protocolo a los usuarios finales.',
    'DNS es una organización internacional que asigna nombres y normaliza los protocolos de Internet.',
    'La misión principal del W3C es asignar direcciones IP y números de Sistema Autónomo a las organizaciones.'
  ], respuesta_correcta: 0 },
  1408: { texto: 'En una LAN Ethernet conmutada, ¿qué hace un switch transparente cuando recibe una trama unicast cuyo destino MAC está aprendido en su tabla CAM?', opciones: [
    'La reenvía por todos los puertos, incluidos los de otras VLAN, porque opera como repetidor físico.',
    'La enruta necesariamente entre redes IP distintas, aunque no tenga configurada una función de capa 3.',
    'La copia exclusivamente al puerto de entrada para que el equipo de origen la procese.',
    'La reenvía por el puerto asociado a esa MAC en la CAM, dentro de la VLAN correspondiente; las tramas broadcast o con destino desconocido siguen reglas de inundación.'
  ], respuesta_correcta: 3 },
  1409: { texto: 'Según las designaciones de cableado balanceado empleadas en ISO/IEC 11801, ¿qué descripción de S/FTP es correcta?', opciones: [
    'U/UTP: cable sin pantalla global ni pantalla individual de los pares.',
    'F/UTP: cada par está cubierto por una lámina y el cable no tiene pantalla global.',
    'S/FTP: pantalla global de trenza y pares apantallados individualmente con lámina.',
    'S/FTP: cable sin pantalla global, con pares también sin apantallar.'
  ], respuesta_correcta: 2 },
  1410: { texto: 'Respecto de la cabecera base de IPv6 especificada en RFC 8200, ¿qué afirmación es correcta?', opciones: [
    'La cabecera base tiene longitud variable, indicada por un campo «LON», y puede medir entre 20 y 40 bytes.',
    'Los campos de dirección de origen y de destino tienen 128 bits cada uno.',
    'La cabecera base cambia de longitud cuando se añaden opciones, que se incorporan en un campo de longitud variable dentro de ella.',
    'La cabecera base IPv6 mide entre 20 y 40 bytes, mientras las direcciones de origen y destino son de 32 bits.'
  ], respuesta_correcta: 1 }
}});
