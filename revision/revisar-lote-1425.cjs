const apply = require('./aplicar-lote.cjs');

const records = [
  [7426, [113], ['IV-10'], ['ATM', 'celda de longitud fija', '53 octetos'], [
    { url: 'https://www.itu.int/rec/T-REC-I.361/en', referencia: 'ITU-T I.361, B-ISDN ATM layer specification, §2.1 (edición en vigor): la celda ATM consta de cabecera de cinco octetos y campo de información de 48 octetos, total fijo de 53 octetos.' }
  ], {
    texto: '¿Cuál es una característica básica del modo de transferencia asíncrono (ATM)?',
    opciones: [
      'Utiliza celdas de longitud fija: 53 octetos, con cabecera de 5 y campo de información de 48.',
      'Negocia el tamaño de cada celda durante el establecimiento del enlace.',
      'Negocia el tamaño de la celda a través de la capa de red.',
      'Negocia el tamaño de la celda a través de la capa de transporte.'
    ],
    respuesta_correcta: 0
  }, 'Reformulada A. ITU-T I.361 establece un tamaño fijo de 53 octetos (5 de cabecera y 48 de información); no es un parámetro negociado por enlace, red o transporte.', 'corregida'],
  [7427, [118], ['IV-9'], ['SNMP', 'GetBulkRequest', 'SNMPv1', 'SNMPv2c', 'SNMPv3'], [
    { url: 'https://www.rfc-editor.org/rfc/rfc3416.html', referencia: 'IETF RFC 3416, operaciones SNMPv2, §§1 y 4.2.3: define GetBulkRequest-PDU para recuperar eficazmente grandes cantidades de información/tablas como operación SNMPv2.' },
    { url: 'https://www.rfc-editor.org/rfc/rfc1157.html', referencia: 'IETF RFC 1157, SNMPv1: lista sus cinco PDU obligatorias (Get, GetNext, Response, Set y Trap); no define GetBulkRequest.' },
    { url: 'https://www.rfc-editor.org/rfc/rfc3411.html', referencia: 'IETF RFC 3411, arquitectura SNMP: SNMPv3 es un marco extensible que utiliza las operaciones y formatos de PDU SNMPv2 descritos en RFC 3416.' }
  ], {
    texto: '¿Qué afirmación es correcta sobre GetBulkRequest en SNMP?',
    opciones: [
      'Es una PDU exclusiva de SNMPv1.',
      'Está definida en las operaciones SNMPv2; se usa también con SNMPv2c y SNMPv3, pero no forma parte de las PDU de SNMPv1.',
      'Modifica valores de objetos de la MIB en el agente.',
      'Es una notificación no solicitada enviada por el agente, sin respuesta del gestor.'
    ],
    respuesta_correcta: 1
  }, 'Corregida B. El original combinaba una frase ambigua sobre el patrón petición-respuesta y una afirmación errónea de compatibilidad de GetBulk con SNMPv1. RFC 3416 define GetBulk como operación SNMPv2 y RFC 1157 enumera para SNMPv1 cinco PDU que no la incluyen. SNMPv3 puede transportar las operaciones SNMPv2.', 'corregida'],
  [7428, [34], ['IV-6'], ['MTBF', 'sistema en serie', 'tasa de fallo', 'disponibilidad'], [
    { url: 'https://www.itl.nist.gov/div898/handbook/apr/section1/apr182.htm', referencia: 'NIST/SEMATECH e-Handbook, modelo en serie: bajo independencia y fallo del sistema al fallar cualquier componente, las tasas de riesgo se suman; con tasas constantes, el MTBF total es el inverso de la suma.' },
    { url: 'https://ntrs.nasa.gov/api/citations/19780008276/downloads/19780008276.pdf', referencia: 'NASA, System Reliability and Availability, §7.2.3: en un sistema en serie independiente, MTBF del sistema = 1/(suma de tasas de fallo) = (suma de inversos de los MTBF de componentes)^−1.' }
  ], {
    texto: 'Dos equipos independientes e idénticos, cada uno con tasa de fallo constante y MTBF τ, deben funcionar simultáneamente; el fallo de cualquiera detiene el sistema. ¿Cuál es el MTBF del conjunto?',
    opciones: ['2τ.', 'τ/2, menor que el de cada equipo.', 'τ.', 'No puede calcularse con estas hipótesis.'],
    respuesta_correcta: 1
  }, 'Corregida B. Es un sistema en serie: con tasas de fallo independientes y constantes, λs=λ1+λ2=2/τ; por tanto MTBFs=1/λs=τ/2. Se explicitan las hipótesis y se evita confundir disponibilidad (que además requiere MTTR) con MTBF.', 'corregida'],
  [7429, [108, 112, 113], ['IV-7', 'IV-10'], ['Ku', 'K', 'ancho de banda', 'capacidad satelital', 'atenuación por lluvia'], [
    { url: 'https://www.nasa.gov/smallsat-institute/sst-soa/ground-data-systems-and-mission-operations/', referencia: 'NASA Small Spacecraft Systems Virtual Institute, Ground Data Systems and Mission Operations (2026): la demanda de mayores tasas de datos impulsa el uso de bandas superiores; estas pueden ofrecer anchos de banda mayores, aunque exigen apuntamiento más estricto.' },
    { url: 'https://www.esa.int/articles/satellite-frequency-bands', referencia: 'ESA, Satellite frequency bands: las bandas más altas suelen ofrecer acceso a anchos de banda mayores y son más sensibles a degradación por lluvia (rain fade).' },
    { url: 'https://www.itu.int/rec/T-REC-P.618/en', referencia: 'ITU-R P.618, propagación en trayectos Tierra-espacio: métodos de predicción de atenuación por lluvia; el efecto aumenta con la frecuencia en las bandas aplicables.' }
  ], {
    texto: '¿Cuál es una razón técnica para emplear bandas Ku/Ka en enlaces satelitales de alta capacidad?',
    opciones: [
      'Las ondas de mayor frecuencia atraviesan mejor cualquier obstáculo y aumentan siempre el alcance.',
      'Estas bandas suelen permitir canales de mayor ancho de banda y, con ello, mayores tasas de datos; a cambio, aumenta la sensibilidad a lluvia y otras pérdidas.',
      'La atenuación atmosférica es siempre menor en Ku/Ka que en bandas inferiores.',
      'La frecuencia portadora, por sí sola, garantiza más bits por segundo con independencia del ancho de banda y de la relación señal/ruido.'
    ],
    respuesta_correcta: 1
  }, 'Corregida B. La respuesta original atribuye demasiado directamente el caudal a la frecuencia. Ku/Ka se aprovechan para disponer de anchos de banda más amplios y aumentar la capacidad; el caudal también depende de modulación y relación señal/ruido. La propagación a frecuencias altas es más sensible a lluvia, no menos.', 'corregida'],
  [7430, [115], ['II-8', 'IV-13'], ['IPv6', '128 bits', 'espacio de direcciones', 'prefijos de red'], [
    { url: 'https://www.rfc-editor.org/rfc/rfc4291.html', referencia: 'IETF RFC 4291, IPv6 Addressing Architecture, §2: las direcciones IPv6 tienen 128 bits; el espacio de valores de dirección tiene cardinalidad 2^128. Los prefijos y ámbitos de uso no equivalen a direcciones unicast asignables.' },
    { url: 'https://www.rfc-editor.org/rfc/rfc8200.html', referencia: 'IETF RFC 8200, IPv6 Specification: arquitectura de cabecera y soporte de direcciones IPv6 de 128 bits.' }
  ], {
    texto: '¿Cuántos valores distintos contiene el espacio de direcciones IPv6 de 128 bits?',
    opciones: ['2^64.', '2^128.', '2^32.', '2^256.'],
    respuesta_correcta: 1
  }, 'Corregida B. Una dirección IPv6 tiene 128 bits, de modo que existen 2^128 patrones de bits. Se distingue el espacio matemático total de las direcciones unicast globales utilizables o de los prefijos de red, cuya cantidad depende de asignaciones y reservas.', 'corregida']
];

apply({ numero: '1425', fecha: '2026-11-16', records });
