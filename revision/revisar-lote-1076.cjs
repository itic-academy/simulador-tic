const aplicar = require('./aplicar-lote.cjs');
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const prs = 'https://eur-lex.europa.eu/eli/reg/2021/696/oj';
const prsRules = 'https://eur-lex.europa.eu/eli/dec/2011/1104/oj';
const fips202 = 'https://csrc.nist.gov/pubs/fips/202/final';
const nist131a = 'https://csrc.nist.gov/pubs/sp/800/131/a/r2/final';
const law39 = 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565';
const jpeg = 'https://www.itu.int/rec/T-REC-T.81/en';
const jpegOrg = 'https://jpeg.org/jpeg/';
const reder = 'https://www.efqm.es/preguntas/logica-reder.html';
const efqm = 'https://efqm.org/the-efqm-model/';
const ref = (url, referencia) => ({url, referencia});
const records = [
  [5701, [108], ['IV-7'], ['Galileo', 'PRS', 'Public Regulated Service', 'servicio público regulado', 'GNSS', 'continuidad del servicio'], [
    ref(prs, 'Reglamento (UE) 2021/696, art. 44: el PRS se reserva a usuarios autorizados por los gobiernos para aplicaciones sensibles que exigen alta continuidad y usa señales cifradas.'),
    ref(prsRules, 'Decisión 1104/2011/UE: establece las reglas de acceso al servicio público regulado (PRS) de Galileo y limita el acceso a usuarios autorizados.'),
    ref(a1, 'Convocatoria GSI A1 2025, anexo I, tema 108: redes de telecomunicaciones, medios de transmisión e infraestructuras de acceso.'),
    ref(a2, 'Convocatoria GSI A2 2025, anexo IX, tema IV.7: medios de transmisión guiados y no guiados.'),
  ], null, 'Corregida, respuesta B. El enunciado se acota a la característica normativa del PRS: servicio restringido a usuarios autorizados por los gobiernos para aplicaciones sensibles que requieren un alto nivel de continuidad y emplea señales cifradas. No se afirma una garantía absoluta de disponibilidad ni se confunde con SAR (búsqueda y rescate), OS (servicio abierto) o HAS (alta precisión). A1-108/A2-IV-7; el programa cubre redes y medios de transmisión, no enumera Galileo por nombre.', 'corregida'],
  [5702, [79, 125], ['IV-12'], ['hash', 'SHA-3', 'FIPS 202', 'MD5', 'RSA', '3DES', 'criptografía'], [
    ref(fips202, 'NIST FIPS 202 especifica la familia de funciones hash SHA-3 (SHA3-224/256/384/512) y las funciones de salida extensible SHAKE128/256.'),
    ref(nist131a, 'NIST SP 800-131A Rev. 2: orientación de transición criptográfica; MD5 no es aceptable para generar firmas digitales. La pregunta evita afirmar que una función sea segura para cualquier uso o configuración.'),
    ref(a1, 'Convocatoria GSI A1 2025, anexo I, temas 79 y 125: funciones hash/criptografía y seguridad en redes.'),
    ref(a2, 'Convocatoria GSI A2 2025, anexo IX, tema IV.12: técnicas criptográficas y protocolos seguros.'),
  ], null, 'Corregida, respuesta C. Se pregunta por la familia de funciones hash definida por NIST en FIPS 202, no por una afirmación absoluta de seguridad frente a cualquier amenaza o parámetro. SHA-3 es la única familia hash de las opciones; MD5 es una función hash obsoleta para usos criptográficos sensibles, RSA es criptografía de clave pública y 3DES es cifrado por bloques. A1-79/A1-125/A2-IV-12.', 'corregida'],
  [5703, [8, 80], ['I-9'], ['Ley 39/2015', 'artículo 26.3', 'documento electrónico', 'firma electrónica', 'origen del documento', 'administración electrónica'], [
    ref(law39, 'Ley 39/2015, texto consolidado, art. 26.3: exceptúa de firma electrónica los documentos administrativos electrónicos publicados con carácter meramente informativo y los que no formen parte de expediente; en todo caso debe identificarse su origen.'),
    ref(a1, 'Convocatoria GSI A1 2025, anexo I, temas 8 y 80: procedimiento administrativo, relación electrónica, identificación y firma.'),
    ref(a2, 'Convocatoria GSI A2 2025, anexo IX, tema I.9: gestión electrónica de procedimientos administrativos, ENS, ENI y NTI.'),
  ], null, 'Corregida, respuesta A. La regla aplicable es el artículo 26.3 de la Ley 39/2015 (no el artículo 46 de la Ley 40/2015): estos documentos no requieren firma electrónica, pero siempre debe identificarse su origen. La respuesta A expresa las dos partes del precepto. A1-8/A1-80/A2-I-9.', 'corregida'],
  [5704, [56], [], ['JPEG', 'compresión con pérdidas', 'baseline', 'DCT', 'PNG', 'GIF', 'RAW', 'multimedia'], [
    ref(jpeg, 'ITU-T T.81 | ISO/IEC 10918-1, estándar JPEG: distingue procesos DCT con pérdida y procesos de codificación sin pérdida; el proceso baseline DCT es con pérdida.'),
    ref(jpegOrg, 'JPEG Committee, JPEG 1: describe tanto el conocido proceso DCT con pérdida como opciones de codificación sin pérdida; por ello se precisa que el reactivo se refiere al JPEG convencional baseline.'),
    ref(a1, 'Convocatoria GSI A1 2025, anexo I, tema 56: dispositivos y tratamiento de información multimedia.'),
  ], null, 'Corregida, respuesta D. Se precisa el modo JPEG convencional DCT baseline, que es con pérdida. JPEG-1 también contempla procesos sin pérdida, de modo que la formulación sin especificar el proceso podía ser ambigua. PNG y GIF emplean codificación sin pérdida; RAW conserva los datos capturados sin esa compresión JPEG. A1-56; no se asigna un tema A2 específico de formatos multimedia.', 'corregida'],
  [5705, [103], [], ['EFQM', 'REDER', 'RADAR', 'Resultados', 'Enfoques', 'Despliegue', 'Evaluación', 'Revisión', 'calidad'], [
    ref(reder, 'EFQM España, explicación de la lógica REDER: REDER es la denominación española de RADAR, herramienta fundamental de evaluación del Modelo EFQM.'),
    ref(efqm, 'EFQM, modelo y lógica RADAR: marco de evaluación asociado al Modelo EFQM.'),
    ref(a1, 'Convocatoria GSI A1 2025, anexo I, tema 103: calidad en los servicios de información, Modelo EFQM e ISO 9004.'),
  ], null, 'Corregida, respuesta C. Se pregunta expresamente por la denominación española de la lógica de evaluación: REDER (Resultados, Enfoques, Despliegue, Evaluación y Revisión), equivalente a RADAR en inglés. No se marca A2-III-13: ese tema oficial se refiere específicamente a calidad del software, no al modelo EFQM para servicios de información. A1-103; sin tema A2 específico equivalente.', 'corregida'],
];
const edits = {
  5701: {texto: 'Según el Reglamento (UE) 2021/696, ¿qué servicio de Galileo está restringido a usuarios autorizados por los gobiernos para aplicaciones sensibles que requieren alta continuidad y emplea señales cifradas?', opciones: ['Search and Rescue Service (SAR)', 'Public Regulated Service (PRS)', 'Open Service (OS)', 'High Accuracy Service (HAS)'], respuesta_correcta: 1},
  5702: {texto: '¿Qué opción identifica a la familia de funciones hash criptográficas especificada por NIST en FIPS 202?', opciones: ['MD5', 'RSA', 'SHA-3', '3DES'], respuesta_correcta: 2},
  5703: {texto: 'Según el artículo 26.3 de la Ley 39/2015, ¿qué regla se aplica a los documentos electrónicos emitidos por las Administraciones Públicas publicados con carácter meramente informativo o que no formen parte de un expediente administrativo?', opciones: ['No requieren firma electrónica, pero debe identificarse su origen', 'Requieren firma electrónica en todos los casos', 'Solo requieren firma si deben publicarse en un diario oficial', 'Solo requieren firma del titular de un órgano administrativo'], respuesta_correcta: 0},
  5704: {texto: 'En una imagen JPEG convencional codificada con el proceso DCT baseline, ¿qué formato utiliza compresión con pérdidas?', opciones: ['PNG', 'GIF', 'RAW', 'JPEG'], respuesta_correcta: 3},
  5705: {texto: '¿Cuál es la denominación española de la lógica de evaluación RADAR utilizada por el Modelo EFQM?', opciones: ['RADAR', 'RADON', 'REDER', 'HEDIA'], respuesta_correcta: 2},
};
aplicar({numero: '1076', fecha: '2026-11-12', records, edits});
