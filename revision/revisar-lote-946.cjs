const aplicar = require('./aplicar-lote.cjs');

const ref = (url, referencia) => ({ url, referencia });
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy41 = 'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk';
const academy42 = 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const academy43 = 'https://drive.google.com/file/d/1Og6yI-YaZ48UA3pBT-HQhTh7TfvdPW_C/view?usp=drivesdk';
const academy48 = 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk';
const academy50 = 'https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk';
const ipi = 'https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930';
const snmp = 'https://www.rfc-editor.org/rfc/rfc3411';
const snmpMicrosoft = 'https://learn.microsoft.com/en-us/windows/win32/snmp/snmp-start-page';
const oauth = 'https://www.rfc-editor.org/rfc/rfc6749';
const oidc = 'https://openid.net/specs/openid-connect-core-1_0.html';
const openid2 = 'https://openid.net/specs/openid-authentication-2_0.html';
const itil = 'https://community.peoplecert.org/public/clubs/itil/blogs/orchestrating-value-co-creation-2026-08-21';
const xss = 'https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet';

const records = [
  [5051, ['43'], ['II-14'], ['programas de ordenador', 'propiedad intelectual', 'derechos de explotación', 'TRLPI artículo 98'], [
    ref(ipi, 'BOE, texto refundido de la Ley de Propiedad Intelectual, art. 98.2: si el titular/autor del programa es persona jurídica, los derechos duran 70 años desde el 1 de enero siguiente a la divulgación lícita o, si no se divulgó, a su creación.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 43: protección jurídica de programas de ordenador.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, tema II.14: protección jurídica de programas de ordenador y licencias.'),
    ref(academy43, 'ITIC Academy, bloque 43 «Protección jurídica, licencias y control del software», versión 2026: contenido sobre propiedad intelectual del software; cotejo curricular, no fuente jurídica.')
  ], null, 'Respuesta A: 70 años. El artículo 98.2 fija el plazo para programas de ordenador cuando el titular/autor es persona jurídica; el cómputo comienza el 1 de enero siguiente al de la divulgación lícita o al de la creación si no se divulgó. No confundir con la regla general de vida del autor más 70 años.', 'vigente'],
  [5052, ['118'], ['IV-9'], ['SNMP', 'gestión de red', 'monitorización de dispositivos', 'MIB'], [
    ref(snmp, 'IETF RFC 3411, arquitectura del marco de gestión SNMP: define las entidades y operaciones de gestión para consultar y modificar información de gestión de los sistemas.'),
    ref(snmpMicrosoft, 'Microsoft Learn, servicio SNMP: describe su uso para configurar dispositivos remotos, monitorizar rendimiento de red y auditar el uso.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 118: gestión de dispositivos, monitorización y SNMP.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, tema IV.9: administración de redes locales y gestión SNMP.'),
    ref(academy42, 'ITIC Academy, bloque 42 «Redes», actualización 2026: monitorización y gestión de redes; encuadre curricular.')
  ], null, 'Respuesta C: SNMP proporciona mecanismos de gestión y consulta de información de dispositivos/agentes para monitorizar el estado y rendimiento de la red. No evita por sí mismo la congestión, no es un sistema específico para registrar DoS ni calcula rutas alternativas de encaminamiento.', 'vigente'],
  [5053, ['126'], ['I-9', 'III-12'], ['OAuth 2.0', 'OpenID Connect', 'autorización', 'autenticación', 'identidad digital'], [
    ref(oauth, 'IETF RFC 6749, OAuth 2.0 Authorization Framework: marco de autorización para conceder acceso limitado a recursos HTTP; no define por sí solo una forma estándar de comunicar la identidad autenticada del usuario.'),
    ref(oidc, 'OpenID Foundation, OpenID Connect Core 1.0, §1: capa de identidad sobre OAuth 2.0 que permite verificar la identidad del usuario y obtener claims; §3.1.2.2 deja fuera del alcance los métodos concretos de autenticación usados por el proveedor.'),
    ref(openid2, 'OpenID Foundation, OpenID Authentication 2.0: especificación histórica que admitía identificadores URL/XRI; se distingue de OpenID Connect actual.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 126: seguridad en aplicaciones y servicios web.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, temas I.9 (identificación/autenticación) y III.12 (aplicaciones web y seguridad).'),
    ref(academy50, 'ITIC Academy, bloque 50 «Videoconferencia, Single Sign-On y herramientas de trabajo colaborativo», temario 2026: identidad federada y SSO; correspondencia curricular.'),
    ref(academy48, 'ITIC Academy, bloque 48 «Seguridad en redes y en el nivel de aplicación», actualización 2026: seguridad de aplicaciones y protocolos; correspondencia curricular.')
  ], null, 'Se corrige el enunciado para fijar el contexto actual (OAuth 2.0 y OpenID Connect 1.0) y evitar mezclar OpenID Authentication 2.0 con OIDC. Respuesta B: son especificaciones distintas y complementarias; OAuth 2.0 es autorización y OIDC añade una capa de identidad/autenticación. OIDC deja fuera de su alcance el método concreto con el que el proveedor autentica al usuario.', 'corregida'],
  [5054, ['106'], [], ['ITIL 4', 'principios guía', 'pensar y trabajar holísticamente', 'cuatro dimensiones'], [
    ref(itil, 'PeopleCert ITIL Community, artículo de 21/08/2026 sobre co-creación de valor: Think and Work Holistically requiere una perspectiva end-to-end que contemple las cuatro dimensiones de la gestión de servicios.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 106: bases conceptuales de ITIL y gestión de servicios TIC.'),
    ref(academy41, 'ITIC Academy, bloque 41 «ITIL y COBIT», actualización 2026: ITIL 4 y gestión de servicios; correspondencia curricular.')
  ], null, 'Respuesta D: «Pensar y trabajar holísticamente». Este principio guía evita optimizar una parte de forma aislada y exige considerar de extremo a extremo las cuatro dimensiones del sistema de valor del servicio. Se corrige la errata «feedbak» en la opción C.', 'corregida'],
  [5055, ['126'], ['III-12'], ['XSS', 'cross-site scripting', 'codificación contextual de salida', 'validación de entradas', 'sanitización HTML'], [
    ref(xss, 'OWASP Cheat Sheet Series, Cross Site Scripting Prevention: prioriza la codificación de salida específica del contexto al presentar datos no confiables; la validación de entradas y la sanitización de HTML tienen usos complementarios y el filtrado genérico no sustituye la codificación contextual.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 126: seguridad en aplicaciones y protección de servicios web e interfaces.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, tema III.12: aplicaciones web, seguridad e interoperabilidad.'),
    ref(academy48, 'ITIC Academy, bloque 48 «Seguridad en redes y en el nivel de aplicación», actualización 2026: ataques web y contramedidas; correspondencia curricular.')
  ], null, 'Se concreta la respuesta B: validar entradas es una defensa complementaria, pero la medida central al renderizar datos no confiables es codificarlos/escaparlos para el contexto exacto de salida; si se permite HTML aportado por el usuario se requiere sanitización con biblioteca adecuada. No existe un filtro genérico de entrada que sustituya estas medidas. Certificados y ACL no previenen XSS.', 'corregida']
];

const edits = {
  5052: { opciones: ['Evita la congestión de la red.', 'Sirve para registrar específicamente ataques de denegación de servicio.', 'Permite consultar información de gestión de los agentes y monitorizar el estado y rendimiento de dispositivos de red.', 'Proporciona caminos o rutas múltiples mediante el encaminamiento de los dispositivos de red.'] },
  5053: {
    texto: 'Respecto a OAuth 2.0 y OpenID Connect 1.0, indique la afirmación falsa:',
    opciones: [
      'OAuth 2.0 permite a una aplicación obtener acceso limitado a recursos HTTP conforme a una autorización.',
      'OAuth 2.0 y OpenID Connect son especificaciones idénticas.',
      'OpenID Connect añade una capa de identidad sobre OAuth 2.0 y permite al cliente verificar la identidad del usuario.',
      'OpenID Connect no prescribe qué método concreto debe usar el proveedor para autenticar al usuario.'
    ]
  },
  5054: { texto: 'Según ITIL 4, ¿qué principio guía exige considerar conjuntamente las cuatro dimensiones de la gestión de servicios?', opciones: ['Optimizar y automatizar', 'Colaborar y promover la visibilidad', 'Progresar de forma iterativa con retroalimentación', 'Pensar y trabajar holísticamente'] },
  5055: { opciones: ['Mediante el uso de certificados electrónicos.', 'Validando las entradas y, especialmente, codificando los datos no confiables según el contexto al mostrarlos; sanitizando HTML si se permite contenido HTML.', 'Mediante reglas de un cortafuegos tradicional.', 'Mediante listas de control de acceso (ACL).'] }
};

aplicar({ numero: '946', fecha: '2026-11-11', records, edits });
