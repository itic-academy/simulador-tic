const aplicar = require('./aplicar-lote.cjs');

const ref = (url, referencia) => ({ url, referencia });
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/buscar/doc.php?id=BOE-A-2025-26262';
const academy22 = 'https://drive.google.com/file/d/18tJzWuBHyd4FbkzQIE5fIbSCRdlrt_1U/view?usp=drivesdk';
const academy36 = 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk';
const academy38 = 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const academy42 = 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const snmp = 'https://www.rfc-editor.org/rfc/rfc3411.html';
const freeSoftware = 'https://www.gnu.org/philosophy/free-sw.html';
const x509 = 'https://www.itu.int/rec/t-rec-x.509/en';
const dfd = 'https://www.irs.gov/irm/part2/irm_02-005-011';
const boeEns = 'https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191';

const records = [
  [5076, ['118'], ['IV-9'], ['SNMP', 'agente SNMP', 'nodo gestionado', 'gestión de redes'], [
    ref(snmp, 'IETF RFC 3411, §§2 y 3: el modelo de gestión distingue gestores y agentes; los nodos gestionados incluyen entidades SNMP con aplicaciones de agente que instrumentan sus recursos.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 118: administración, monitorización y gestión SNMP de redes locales.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, tema IV.9: gestión de dispositivos, monitorización de tráfico y SNMP.'),
    ref(academy42, 'ITIC Academy, bloque 42 «Redes», versión 2026.1, apartados de administración de LAN y SNMP; cotejo curricular.')
  ], null, 'Respuesta A. En el modelo clásico SNMP, el agente que expone los objetos de gestión se ejecuta en el nodo gestionado; el gestor consulta o controla esos agentes. Se precisa “agente SNMP” para distinguirlo de la aplicación gestora y evitar que “agente de gestión” se interprete como un papel genérico de una entidad SNMP moderna.', 'corregida'],
  [5077, ['69'], [], ['software libre', 'FSF', 'cuatro libertades', 'libertad 0'], [
    ref(freeSoftware, 'GNU/Free Software Foundation, definición de software libre: libertad 0 permite ejecutar el programa como se desee y para cualquier propósito; no admite que se deba declarar o someter a aprobación el propósito.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 69: conceptos base del software de código abierto y software libre.'),
    ref('https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', 'ITIC Academy, bloque 30 «Tecnologías de sistemas de información», versión 2026.1, apartado sobre software libre/código abierto; cotejo curricular. El programa A2 no contiene un epígrafe específico equivalente.')
  ], null, 'Respuesta A. La libertad 0 del software libre permite ejecutar el programa para cualquier propósito. Exigir que se declare o apruebe previamente ese propósito impone una restricción incompatible con esa libertad. El programa A1 incluye expresamente software libre en el tema 69; no se asigna un epígrafe A2 sin correspondencia directa.', 'corregida'],
  [5078, ['81'], ['I-6'], ['PKI', 'ITU-T X.509', 'certificado de clave pública', 'X.500', 'OCSP', 'CRL'], [
    ref(x509, 'UIT-T, Recomendación X.509 / ISO/IEC 9594-8: define el marco para certificados de clave pública y certificados de atributos, base de la infraestructura de clave pública. X.500 es la serie de directorio; CRL y OCSP tratan revocación/estado.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 81: infraestructura de clave pública, certificados y mecanismos de identificación/firma.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, tema I.6: identidad y firma electrónica, eIDAS y DNI electrónico.'),
    ref(academy36, 'ITIC Academy, bloque 36 «Seguridad, criptografía, identificación y firma», versión 2026, secciones sobre certificados digitales y PKI; cotejo curricular.')
  ], null, 'Respuesta B. La recomendación UIT-T X.509 (idéntica a ISO/IEC 9594-8) define el marco de certificados de clave pública que sirve de base a PKI. X.500 corresponde a servicios de directorio; CRL y OCSP son mecanismos relacionados con revocación o consulta del estado de certificados, no el estándar principal de PKI.', 'vigente'],
  [5079, ['90'], ['III-3'], ['análisis estructurado', 'DFD', 'almacén de datos', 'entidad externa', 'proceso'], [
    ref(dfd, 'Internal Revenue Service, IRM 2.5.11, técnica de análisis: identifica entidad externa, proceso, almacén y flujo como elementos de DFD; los flujos de entidades externas son entradas/salidas del sistema y se conectan mediante procesos, no directamente al almacén.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 90: análisis dinámico y modelado de procesos.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, tema III.3: análisis, estrategias de determinación de requisitos y derivación de sistemas existentes.'),
    ref(academy38, 'ITIC Academy, bloque 38 «Análisis, diseño y construcción de sistemas de información», versión 2026.1, apartados de análisis estructurado y DFD; cotejo curricular.')
  ], null, 'Respuesta C. En la notación clásica de diagramas de flujo de datos, los almacenes intercambian datos con procesos, mientras que las entidades externas interactúan con el sistema a través de procesos; no hay flujo directo entidad-almacén. Se reformula la opción para que “accesibles” no se confunda con el acceso técnico a una base de datos.', 'corregida'],
  [5080, ['48'], ['I-9'], ['ENS', 'op.exp.8', 'registro de actividad', 'trazabilidad', 'niveles BAJO MEDIO ALTO'], [
    ref(boeEns, 'Real Decreto 311/2022, anexo II, medida op.exp.8: la tabla asigna el registro de actividad a la dimensión T (trazabilidad), obligatorio en nivel BAJO y con refuerzos R1–R4 en MEDIO y R1–R5 en ALTO.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 48: Esquema Nacional de Seguridad y adecuación.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, tema I.9: ENS y medidas de seguridad.'),
    ref(academy22, 'ITIC Academy, bloque 22 «Seguridad, ENS y ciberseguridad», versión 2026.2, medidas operacionales del ENS; cotejo curricular.')
  ], null, 'Respuesta C. El anexo II del RD 311/2022 sitúa op.exp.8 en la dimensión T (trazabilidad): el control base aplica al nivel BAJO y se añaden refuerzos en MEDIO y ALTO. Se corrige “categoría” por “nivel”, que es la terminología de la tabla para esta aplicación por dimensión.', 'corregida']
];

const edits = {
  5076: { texto: 'En el modelo clásico de gestión SNMP, ¿dónde se ejecuta el agente que expone los objetos de gestión de un recurso?' },
  5077: { texto: 'Según las cuatro libertades de la Free Software Foundation, ¿qué afirmación NO es correcta?', opcion: [0, 'La libertad para ejecutar el programa permite usarlo para cualquier propósito, pero exige declarar y obtener aprobación previa para ese propósito.'] },
  5078: { texto: '¿Qué recomendación UIT-T define el marco de certificados de clave pública que sirve de base a una PKI?' , opcion: [1, 'X.509 (los certificados de clave pública habituales emplean la versión 3)'] },
  5079: { texto: 'En los diagramas de flujo de datos del análisis estructurado, ¿cuál es falsa respecto de los almacenes de datos?', opcion: [2, 'Pueden intercambiar flujos de datos directamente con entidades externas.'] },
  5080: { texto: 'Según el anexo II del Esquema Nacional de Seguridad, ¿cómo se aplica op.exp.8, Registro de la actividad, en la dimensión T (trazabilidad)?', opcion: [2, 'En los niveles BAJO, MEDIO y ALTO de la dimensión de trazabilidad.'] }
};
aplicar({ numero: '951', fecha: '2026-11-11', records, edits });
