const apply = require('./aplicar-lote.cjs');

const records = [
  [7416, [65, 77, 109], ['III-12'], ['mashup', 'aplicación web', 'composición de datos', 'fuentes de información'], [
    { url: 'https://www.itu.int/rec/dologin_pub.asp?id=T-REC-X.Sup21-201401-I%21%21PDF-E&lang=e&type=items', referencia: 'ITU-T X series Supplement 21 (01/2014), §6: define mashup como aplicación web que combina datos o funcionalidades de dos o más fuentes para crear un nuevo servicio.' }
  ], {
    texto: 'En el contexto de las aplicaciones web, ¿qué describe un mashup?',
    opciones: [
      'Una aplicación que combina datos o funcionalidades de varias fuentes para ofrecer un servicio compuesto.',
      'Una técnica que actualiza partes de una página sin recargarla, como AJAX.',
      'Un conjunto de especificaciones para que distintas aplicaciones web se comuniquen, como los servicios web.'
    ],
    respuesta_correcta: 0
  }, 'Reformulada A. Se acota el término al contexto web y a la combinación de datos o funcionalidades de varias fuentes para crear un servicio compuesto. La opción B describe actualización asíncrona de interfaz y la C protocolos/servicios web, que pueden ser fuentes del mashup, pero no son el concepto en sí.', 'corregida'],
  [7417, [128], ['IV-6'], ['ISO 22301', 'continuidad de negocio', 'BCMS', 'cambio climático'], [
    { url: 'https://www.iso.org/standard/75106.html', referencia: 'ISO 22301:2019, edition 2: requisitos para sistemas de gestión de continuidad del negocio; ISO la identifica como la norma internacional para BCMS.' },
    { url: 'https://www.iso.org/standard/88412.html', referencia: 'ISO 22301:2019/Amd 1:2024, publicada y vigente como enmienda de consideración del cambio climático en normas de sistemas de gestión.' }
  ], {
    texto: '¿Qué norma internacional establece requisitos para un sistema de gestión de la continuidad del negocio (BCMS)?',
    opciones: ['ISO 22301:2019 (con la enmienda 1:2024 aplicable).', 'ISO 22301:2018.', 'ISO/IEC 27001:2013.', 'ISO 22301:2014.'],
    respuesta_correcta: 0
  }, 'Vigente A. ISO 22301:2019 es la edición de requisitos del BCMS y continúa aplicándose con la enmienda 1:2024 sobre consideración del cambio climático. Se sustituye la formulación imprecisa “está normalizada por la norma” y se evita presentar la edición 2019 como si no tuviera actualización posterior.', 'vigente'],
  [7418, [112, 114], ['IV-11'], ['5470 MHz', '5 GHz', 'WAS/RLAN', 'Wi-Fi', 'asignación de espectro'], [
    { url: 'https://digital-strategy.ec.europa.eu/en/policies/uses-radio-spectrum', referencia: 'Comisión Europea, Uses of radio spectrum: identifica la banda 5470–5725 MHz entre las bandas de 5 GHz armonizadas en la UE para WAS/RLAN.' },
    { url: 'https://eur-lex.europa.eu/eli/dec_impl/2022/2307/oj', referencia: 'Decisión de Ejecución (UE) 2022/2307, anexo: armoniza las condiciones para el uso de 5150–5250, 5250–5350 y 5470–5725 MHz por WAS/RLAN; no asigna la banda en exclusiva a una sola marca o tecnología.' }
  ], {
    texto: 'En la Unión Europea, ¿qué categoría de sistemas de acceso inalámbrico incluye la banda 5470–5725 MHz?',
    opciones: ['Bluetooth.', 'Uso exclusivamente militar.', 'WAS/RLAN, incluidas redes WLAN como Wi-Fi bajo las condiciones regulatorias aplicables.', 'Una tecnología única denominada WiMAX.'],
    respuesta_correcta: 2
  }, 'Corregida C. La cifra 5,47 GHz no identifica por sí sola una tecnología: la banda de 5470–5725 MHz está armonizada en la UE para sistemas WAS/RLAN, categoría que incluye redes de área local inalámbricas. Se retira la atribución exclusiva a WiMAX; el original tampoco distinguía claramente Wi-Fi de otros sistemas de acceso inalámbrico.', 'corregida'],
  [7419, [118], ['IV-9'], ['SNMP', 'IETF', 'RFC', 'estandarización de Internet'], [
    { url: 'https://www.rfc-editor.org/rfc/rfc3411.html', referencia: 'IETF RFC 3411 (STD 62), arquitectura del marco SNMP: documento de estándares de Internet que describe los marcos de gestión SNMP.' },
    { url: 'https://www.rfc-editor.org/rfc/rfc1157.html', referencia: 'IETF RFC 1157, Simple Network Management Protocol: especificación SNMPv1 publicada por el grupo de trabajo de gestión de red de IETF.' },
    { url: 'https://www.rfc-editor.org/rfc/rfc3418.html', referencia: 'IETF RFC 3418, Management Information Base (MIB) for SNMP: especificación de la MIB estándar para SNMP.' }
  ], {
    texto: '¿Qué organización desarrolla y publica los estándares de Internet que especifican SNMP?',
    opciones: ['UIT-T.', 'IETF.', 'ISO/IEC.', 'Ninguna de las anteriores.'],
    respuesta_correcta: 1
  }, 'Vigente B. Las versiones y componentes normalizados de SNMP se especifican en RFC del IETF (por ejemplo, RFC 3411 y RFC 3418). Se nombra el papel pertinente —estándares de Internet para SNMP— sin sugerir que IETF sea el único organismo que publica normas de gestión de red.', 'vigente'],
  [7420, [108, 115, 118], ['II-8', 'IV-10'], ['BGP', 'RFC 4271', 'OPEN', 'UPDATE', 'KEEPALIVE', 'NOTIFICATION'], [
    { url: 'https://www.rfc-editor.org/rfc/rfc4271.html', referencia: 'IETF RFC 4271, §4 e IANA Considerations: BGP-4 define los tipos OPEN, UPDATE, NOTIFICATION y KEEPALIVE; la propia RFC menciona la extensión de RFC 2918.' },
    { url: 'https://www.rfc-editor.org/rfc/rfc2918.html', referencia: 'IETF RFC 2918, Route Refresh Capability for BGP-4: define el tipo de mensaje ROUTE-REFRESH como extensión de BGP-4.' }
  ], {
    texto: 'Según los tipos de mensaje de BGP-4 definidos en RFC 4271 (sin contar mensajes añadidos por extensiones), ¿qué conjunto es correcto?',
    opciones: [
      'OPEN, KEEPALIVE, UPDATE y CLOSE.',
      'OPEN, READ, WRITE, NOTIFICATION y KEEPALIVE.',
      'OPEN, KEEPALIVE, NOTIFICATION y UPDATE.',
      'OPEN, READ, WRITE, UPDATE y CLOSE.'
    ],
    respuesta_correcta: 2
  }, 'Corregida C. La RFC 4271 define cuatro tipos base: OPEN, UPDATE, NOTIFICATION y KEEPALIVE. La pregunta original no acotaba el alcance: extensiones posteriores añaden otros tipos, como ROUTE-REFRESH en RFC 2918, por lo que se indica expresamente que se pregunta por la definición base de RFC 4271.', 'corregida']
];

apply({ numero: '1423', fecha: '2026-11-16', records });
