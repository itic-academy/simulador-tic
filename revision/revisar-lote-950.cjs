const aplicar = require('./aplicar-lote.cjs');

const ref = (url, referencia) => ({ url, referencia });
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/buscar/doc.php?id=BOE-A-2025-26262';
const academy30 = 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk';
const academy34 = 'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk';
const academy39 = 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk';
const academy43 = 'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk';
const academy46 = 'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk';
const iso8402 = 'https://www.iso.org/standard/20115.html';
const iso8402Text = 'https://cdn.standards.iteh.ai/samples/20115/d87cc9045fac4bb483e60258c6844361/ISO-8402-1994.pdf';
const une0080 = 'https://www.en.une.org/normalizacion_documentos/Presentaciones_dato.pdf';
const govData = 'https://generaciond.gob.es/especificaciones-une-0077-gobierno-del-dato-une-0078-gestion-del-dato-y-une-0079-gestion-de-la-484';
const quic = 'https://www.rfc-editor.org/rfc/rfc9000.html';
const googleQuic = 'https://www.chromium.org/quic/';
const microsoft = 'https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/functional-programming/functional-programming-vs-imperative-programming';
const wifiAlliance = 'https://www.globenewswire.com/news-release/2018/10/03/1600662/0/en/wi-fi-alliance-introduces-wi-fi-6.html';
const ieeeAc = 'https://www.ieee802.org/11/overview.html';
const ieeeStd = 'https://standards.ieee.org/ieee/802.11ac/4473/';
const ieeeText = 'https://schupen.net/lib/wifi/802.11ac-2013.pdf';

const records = [
  [5071, ['103'], ['III-13'], ['calidad', 'ISO 8402:1994', 'definición histórica', 'necesidades explícitas e implícitas'], [
    ref(iso8402, 'ISO, ficha de ISO 8402:1994: vocabulario de gestión y aseguramiento de la calidad; la norma está retirada y fue sustituida por ISO 9000:2000.'),
    ref(iso8402Text, 'ISO 8402:1994, apartado 2.1: define calidad como la totalidad de características de una entidad que afectan a su capacidad para satisfacer necesidades establecidas e implícitas. Copia del texto del estándar; se usa únicamente para comprobar la definición histórica.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 103: calidad en los servicios de información y modelo EFQM/ISO 9004.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, tema III.13: calidad del software, modelos, métricas, normas y estándares.'),
    ref(academy39, 'ITIC Academy, bloque 39 «Calidad y mantenimiento», versión 2026: calidad de software y estándares; correspondencia curricular.')
  ], null, 'Respuesta B para la definición general de calidad de una entidad en ISO 8402:1994. Se cambia el enunciado porque la norma era vocabulario de calidad y no una definición exclusiva de calidad de software. La norma está retirada; se conserva como contenido histórico, no como referencia vigente.', 'historica'],
  [5072, ['76'], ['III-15'], ['gobierno del dato', 'gestión del dato', 'calidad del dato', 'UNE 0077:2023', 'UNE 0078:2023', 'UNE 0079:2023', 'UNE 0080:2023'], [
    ref(une0080, 'UNE, material de presentación sobre las especificaciones de datos: UNE 0080:2023 establece el marco para evaluar gobierno, gestión y calidad del dato; se apoya en las tres especificaciones que definen esos procesos.'),
    ref(govData, 'Gobierno de España, iniciativa Generación D: identifica UNE 0077:2023 como gobierno, UNE 0078:2023 como gestión, UNE 0079:2023 como calidad del dato y UNE 0080:2023 como evaluación sistemática de los procesos.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 76: estrategia, gobierno, gestión y calidad del dato.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, tema III.15: minería de datos, big data y bases NoSQL; correspondencia temática complementaria.'),
    ref(academy34, 'ITIC Academy, bloque 34 «Business Intelligence y Big Data», versión 2026: gobierno y calidad de datos; encuadre curricular.')
  ], null, 'Respuesta B. UNE 0080:2023 aborda la evaluación de los procesos y se apoya en las definiciones y prácticas de UNE 0077 (gobierno), 0078 (gestión) y 0079 (gestión de la calidad). Se precisa que 0080 es la especificación de evaluación para que no se confunda con las tres especificaciones base.', 'corregida'],
  [5073, ['115'], ['IV-7'], ['QUIC', 'RFC 9000', 'transporte', 'conexión', 'UDP', 'Google QUIC'], [
    ref(quic, 'IETF RFC 9000, resumen y §1: QUIC es un protocolo de transporte normalizado, con establecimiento de conexión de baja latencia; lo caracteriza expresamente como connection-oriented.'),
    ref(googleQuic, 'Chromium Project, documentación de QUIC: el protocolo se originó en Google y la versión de Google fue desplegada experimentalmente en Chrome antes de la estandarización IETF.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 115: redes IP, arquitectura y protocolos.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, tema IV.7: modelos TCP/IP y OSI y protocolos TCP/IP.'),
    ref(academy43, 'ITIC Academy, bloque 43 «Protocolos», versión 2026: protocolos de Internet y transporte; mapa curricular.')
  ], null, 'Respuesta D: QUIC sí está orientado a conexión aunque se transporte sobre UDP; el estándar RFC 9000 define una interacción con estado entre cliente y servidor. Se modifica la opción C para reflejar el origen real del protocolo Google QUIC, eliminando la segunda opción falsa que hacía ambiguo el test.', 'corregida'],
  [5074, ['67'], ['III-2'], ['programación procedimental', 'paradigmas', 'imperativo', 'declarativo'], [
    ref(microsoft, 'Microsoft Learn, programación imperativa frente a funcional: el enfoque imperativo indica los pasos que debe seguir el ordenador para realizar una tarea, en contraste con expresar principalmente el resultado deseado.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 67: entorno de desarrollo Java, lenguaje que admite programación imperativa/procedimental.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, tema III.2: lenguajes de programación, instrucciones, procedimientos, funciones y estructura de programa.'),
    ref(academy30, 'ITIC Academy, bloque 30 «Tecnologías de sistemas de información», versión 2026.1: Java y paradigmas de programación; mapa curricular.')
  ], null, 'Respuesta A. En el paradigma procedimental se describe cómo efectuar la tarea mediante instrucciones y procedimientos; el enfoque de indicar principalmente qué resultado se desea es declarativo. La clasificación como lenguaje de cuarta generación no es característica general de los procedimentales.', 'vigente'],
  [5075, ['114'], ['IV-11'], ['Wi-Fi', 'IEEE 802.11ac', 'Wi-Fi 5', 'MU-MIMO', 'Wave 2'], [
    ref(ieeeAc, 'IEEE 802.11 Working Group: documenta IEEE 802.11ac-2013 como enmienda publicada para WLAN de muy alto rendimiento; la enmienda incorpora MU-MIMO de bajada.'),
    ref(ieeeStd, 'IEEE Standards Association, ficha IEEE 802.11ac-2013: identifica la enmienda para Very High Throughput en bandas inferiores a 6 GHz.'),
    ref(ieeeText, 'IEEE Std 802.11ac-2013, definición de VHT MU PPDU: describe el transporte de hasta cuatro PSDU para usuarios distintos mediante la técnica DL-MU-MIMO. Copia del texto de la norma para comprobar el detalle técnico.'),
    ref(wifiAlliance, 'Wi-Fi Alliance, comunicado de nomenclatura generacional: asocia Wi-Fi 5 con tecnología IEEE 802.11ac.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 114: redes inalámbricas IEEE 802.11 y características funcionales/técnicas.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, tema IV.11: redes inalámbricas, protocolos y características funcionales/técnicas.'),
    ref(academy46, 'ITIC Academy, bloque 46 «Redes inalámbricas y comunicaciones móviles», versión 2026: estándares 802.11 y MU-MIMO; encuadre curricular.')
  ], null, 'Respuesta B. MU-MIMO descendente forma parte de IEEE 802.11ac (Wi-Fi 5); la certificación Wi-Fi 5 Wave 2 incorporó su disponibilidad comercial. Se concreta Wave 2 y se corrige el error de la opción D: Wi-Fi 7 corresponde a IEEE 802.11be, no 802.11bz.', 'corregida']
];

const edits = {
  5071: { texto: 'Según ISO 8402:1994, ¿cómo se definía históricamente la calidad de una entidad?', opcion: [1, 'Totalidad de las características de una entidad que afectan a su capacidad para satisfacer necesidades establecidas o implícitas.'] },
  5072: { texto: 'La especificación UNE 0080:2023 evalúa el gobierno, la gestión y la calidad del dato a partir de los procesos definidos en qué especificaciones?' },
  5073: { texto: '¿Cuál NO es una característica de QUIC conforme al estándar IETF RFC 9000?', opcion: [2, 'Se originó como Google QUIC y fue desplegado experimentalmente en Chrome antes de su estandarización por la IETF.'] },
  5075: { opciones: ['Wi-Fi 4 (IEEE 802.11n)', 'Wi-Fi 5 (IEEE 802.11ac; MU-MIMO descendente en Wave 2)', 'Wi-Fi 6 (IEEE 802.11ax)', 'Wi-Fi 7 (IEEE 802.11be)'] }
};

aplicar({ numero: '950', fecha: '2026-11-11', records, edits });
