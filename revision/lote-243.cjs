const apply = require('./aplicar-lote.cjs');

const records = [
  [1531, [108, 120], ['IV-10'], ['X.25', 'DTE', 'DCE', 'modo paquete', 'red pública de datos'], 'https://www.itu.int/rec/T-REC-X.25-199610-I/', 'ITU-T X.25 (10/1996), título oficial, en vigor: interfaz DTE/DCE para terminales en modo paquete conectados a redes públicas de datos mediante circuito dedicado.', 'La opción señalada reproduce el objeto de la Recomendación X.25: interfaz entre DTE y DCE para terminales que operan en modo paquete y acceden a redes públicas de datos por circuito dedicado. X.25 no debe confundirse con X.20/X.21, que cubren otros modos de transmisión.', 'vigente'],
  [1532, [120], ['IV-9'], ['arquitectura jerárquica', 'gestión de red', 'niveles', 'control'], 'https://www.itu.int/epublications/en/publication/itu-t-g-7702-2022-amd-1-2024-08', 'ITU-T G.7702, §§6.5 y 11.5: arquitectura de control jerárquica con controladores en niveles y relaciones cliente/servidor; los controladores de nivel superior coordinan recursos ofrecidos por controladores inferiores.', 'El enunciado original confundía una arquitectura jerárquica con una centralizada: que un único sistema maestro gestione toda la red describe centralización. En una arquitectura jerárquica la gestión/control se distribuye en niveles relacionados; los de nivel superior pueden coordinar o supervisar controladores de niveles inferiores. Se sustituye la opción C por esta definición para que exista una única respuesta correcta.', 'corregida'],
  [1533, [108, 121], ['IV-7'], ['DOCSIS', 'EuroDOCSIS', 'CATV', 'HFC', 'acceso de banda ancha'], [
    {url: 'https://account.cablelabs.com/server/alfresco/608e454e-fdf7-417a-9851-eac9e501f884', referencia: 'CableLabs, CM-SP-CM-OSSIv3.1, §1.2.3: DOCSIS transporta tráfico IP bidireccional a través de redes coaxiales o HFC; las operadoras de cable desplegaron servicios de datos de alta velocidad sobre sistemas de televisión por cable.'},
    {url: 'https://www.etsi.org/deliver/etsi_ts/101900_101999/10190923/01.01.01_60/ts_10190923v010101p.pdf', referencia: 'ETSI TS 101 909-23 V1.1.1, §3.1: EuroDOCSIS es DOCSIS europeo; distingue el canal de 8 MHz europeo del canal de 6 MHz DOCSIS en el plan norteamericano.'}
  ], null, 'Las cuatro proposiciones son correctas en el contexto técnico descrito, con una precisión histórica: EuroDOCSIS denomina la adaptación/especificación europea de DOCSIS para el plan de frecuencias de cable europeo (canales descendentes típicos de 8 MHz), no una familia independiente de acceso. La especificación CableLabs confirma datos IP sobre redes HFC y servicios de datos sobre CATV. Se reformula la opción europea para explicitar ese contexto.', 'corregida'],
  [1534, [123], ['IV-15'], ['UMTS', '3G', 'UTRA FDD', '900 MHz', '2100 MHz'], 'https://www.etsi.org/deliver/etsi_ts/125100_125199/125101/18.00.00_60/ts_125101v180000p.pdf', 'ETSI TS 125 101 (3GPP TS 25.101) V18.0.0, tabla 5.0: UTRA FDD Band I corresponde a 1920–1980 MHz (subida) y 2110–2170 MHz (bajada); Band VIII, a 880–915 MHz y 925–960 MHz.', 'La respuesta prevista (900 MHz y aproximadamente 2 GHz/2100 MHz) identifica dos bandas UMTS utilizadas en despliegues europeos, pero la frase original podía interpretarse como una asignación exhaustiva o universal. Se acota a la pareja histórica de bandas UTRA FDD I y VIII; la especificación contempla también otras bandas y no implica que todos los operadores o países las usen actualmente.', 'corregida'],
  [1535, [125], ['IV-12'], ['Kerberos', 'KDC', 'AS', 'Needham-Schroeder', 'clave secreta', 'contraseña'], [
    {url: 'https://www.rfc-editor.org/rfc/rfc4120.html', referencia: 'RFC 4120, §§1.1, 1.2 y 3.1: Kerberos V5 es un protocolo de autenticación basado en parte en Needham–Schroeder; el AS devuelve credenciales cifradas con la clave secreta del cliente, no transmite la contraseña en claro.'},
    {url: 'https://www.rfc-editor.org/rfc/rfc4120.html#section-1.2', referencia: 'RFC 4120, §1.2: los servidores de autenticación mantienen una base de datos de principals (usuarios y servidores) y sus claves secretas.'}
  ], null, 'La afirmación incorrecta es la última: el AS no envía la contraseña en claro; el intercambio devuelve credenciales cuya parte relevante está cifrada con la clave secreta del cliente (RFC 4120, §3.1). Se precisa además que la base del KDC contiene principals, incluidos usuarios y servicios, no solo «usuarios».', 'corregida']
];

const edits = {
  1532: {opciones: [
    'Asigna a cada sistema de comunicaciones de la red las mismas funciones.',
    'Todas las sesiones de la red tienen lugar entre sistemas parejos.',
    'La gestión se organiza en niveles: los gestores de nivel superior coordinan o supervisan a los de niveles inferiores, que administran recursos o dominios subordinados.',
    'Todas las sesiones comparten las funciones de gestión de red.'
  ]},
  1533: {opciones: [
    'Se puede emplear para proporcionar acceso a Internet sobre una infraestructura de red HFC.',
    'Permite añadir transferencias de datos de alta velocidad a un sistema de televisión por cable (CATV).',
    'EuroDOCSIS es la adaptación europea histórica de DOCSIS, ajustada al plan de frecuencias de cable europeo (canales descendentes típicos de 8 MHz).',
    'Todas las anteriores son correctas.'
  ]},
  1534: {texto: '¿Qué pareja de bandas UTRA FDD se asocia a los despliegues europeos tradicionales de UMTS en 900 y 2100 MHz, aproximadamente?', opciones: [
    'Bandas de 800 MHz y 2100 MHz.',
    'Bandas de 900 MHz y 2100 MHz (aproximadamente 2 GHz).',
    'Bandas de 800 MHz y 11 GHz.',
    'Bandas de 900 MHz y 5 GHz.'
  ], respuesta_correcta: 1},
  1535: {texto: 'En Kerberos, señale la afirmación incorrecta:', opciones: [
    'Es un protocolo de autenticación de principals en una red.',
    'Su modelo se basa en parte en el protocolo de autenticación de Needham–Schroeder.',
    'Los servidores Kerberos mantienen una base de datos de principals, como usuarios y servicios, y sus claves secretas.',
    'En el intercambio AS, el servidor de autenticación devuelve al cliente las credenciales sin cifrarlas con la clave secreta del cliente.'
  ], respuesta_correcta: 3}
};

apply({numero: '243', fecha: '2026-10-25', records, edits});
