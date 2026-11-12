const aplicar = require('./aplicar-lote.cjs');
const ref = (url, referencia) => ({ url, referencia });

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const fipsDes = 'https://csrc.nist.gov/files/pubs/fips/46-3/final/docs/fips46-3.pdf';
const desWithdrawal = 'https://csrc.nist.gov/News/2005/Withdrawal-of-FIPS-46-3-FIPS-74-and-FIPS-81';
const nist57 = 'https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-57pt1r5.pdf';
const nistKeygen = 'https://csrc.nist.gov/pubs/sp/800/133/r2/final';
const rfc5750 = 'https://www.rfc-editor.org/rfc/rfc5750.html';
const x500 = 'https://www.itu.int/rec/dologin_pub.asp?id=T-REC-X.500-201910-I%21%21PDF-E&lang=e&type=items';
const x519 = 'https://www.itu.int/ITU-T/recommendations/rec.aspx?lang=en&rec=14036';
const speechTts = 'https://jontalle.web.engr.illinois.edu/Public/HandbookSpeechProcessing.08.pdf';
const phonology = 'https://www.cambridge.org/highereducation/books/english-phonetics-and-phonology/70DA321F274B7A14D475C9856D23F490/phonemes-and-allophones/F5302284381310C2FA039D2B288CFC04';
const academyCrypto = 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk';
const academyAI = 'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk';
const academyOldTest = 'https://drive.google.com/file/d/0Bw-rS_kOHzMKdHROVi1kRjRfaTg/view?usp=drivesdk&resourcekey=0-eWTrIx7CGXq5nRW0DU_0QA';

const records = [
  [5341, ['79'], ['II-13', 'IV-12'], ['DES', '56 bits', 'FIPS 46-3', 'algoritmo histórico'], [
    ref(fipsDes, 'NIST FIPS 46-3 §3: la representación de clave DES ocupa 64 bits, de los que 56 se usan por el algoritmo y 8 son bits de paridad.'),
    ref(desWithdrawal, 'NIST retiró DES el 19/05/2005 porque ya no proporcionaba seguridad suficiente; se conserva como referencia histórica, no como algoritmo admisible para protección actual.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 79: algoritmos de cifrado simétricos y asimétricos.'),
    ref(a2, 'Convocatoria A2 GSI 2025, II.13 seguridad física y lógica; IV.12 técnicas criptográficas y protocolos seguros.'),
    ref(academyCrypto, 'ITIC Academy, bloque 36 «Seguridad. Criptografía. Identificación y firma», versión 2026.1: sección 2.2 presenta DES de 56 bits como algoritmo obsoleto/histórico y lo contrasta con AES.'),
  ], null, 'La respuesta A (56 bits) expresa la longitud efectiva que utiliza DES. La clave se representa como 64 bits, incluidos 8 bits de paridad que no participan en el algoritmo. El reactivo se fecha: NIST retiró DES en 2005, por lo que su dato sirve para historia y no para recomendarlo en sistemas actuales.', 'historica'],
  [5342, ['79', '80', '81'], ['II-13', 'IV-12'], ['RSA', 'ECC', 'tamaño de clave', 'fortaleza de seguridad', 'PKI'], [
    ref(nist57, 'NIST SP 800-57 Part 1 Rev. 5, tabla 2 de §5.6.1.1: RSA de 1024 bits se sitúa en ≤80 bits de fortaleza; RSA 2048 equivale aproximadamente a 112 y RSA 3072 a 128. Para ECC, 224–255 bits corresponden a 112 de fortaleza y 256–383 a 128.'),
    ref(nistKeygen, 'NIST SP 800-133 Rev. 2, §4: todas las claves criptográficas deben basarse directa o indirectamente en la salida de un generador de bits aleatorios aprobado; la guía aborda la generación de claves asimétricas.'),
    ref(rfc5750, 'IETF RFC 5750 §4.4.2, de 2010: documenta que se usaban claves RSA de 4096 bits en certificados raíz y que normalmente no se empleaban en CA subordinadas para extender la validez de la raíz. Se cita como práctica descrita por ese RFC, no como requisito vigente universal.'),
    ref(a1, 'Convocatoria A1 GSI 2025, temas 79–81: cifrado, certificados, claves y PKI.'),
    ref(a2, 'Convocatoria A2 GSI 2025, II.13 y IV.12: ciberseguridad y técnicas criptográficas.'),
    ref(academyCrypto, 'ITIC Academy, bloque 36, versión 2026.1, §§2–3 y 9: algoritmos simétricos/asimétricos, RSA, ECC, certificados y PKI.'),
  ], null, 'La opción D se conserva solo en forma matizada: el RFC 5750 describe el uso de RSA-4096 en algunas raíces PKI, pero esto no es una regla universal actual. Se corrigen los distractores: ECC permite tamaños menores para una fortaleza comparable, pero no 64/128 bits con fortaleza útil; RSA-1024 representa como máximo ≤80 bits según la tabla NIST, no 112; una generación RSA débil o predecible puede comprometer la clave, y se requieren métodos de generación criptográfica adecuados. Las recomendaciones de tamaño deben seguir el perfil y periodo de protección del sistema.', 'corregida'],
  [5343, ['80'], [], ['X.500', 'DAP', 'LDAP', 'directorio'], [
    ref(x500, 'ITU-T X.500 (2019), capítulo 13: enumera los protocolos de directorio y define DAP como el intercambio de peticiones/resultados entre DUA y DSA.'),
    ref(x519, 'ITU-T X.519 (2019, vigente): especifica los protocolos DAP, DSP, DISP y DOP. Distingue estos protocolos X.500 de LDAP, que tiene su propio protocolo ligero y puede interfuncionar con directorios X.500.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 80: protocolos de directorio basados en LDAP y X.500.'),
    ref(academyCrypto, 'ITIC Academy, bloque 36, versión 2026.1, capítulo 12: X.500, directorio distribuido, DIT y LDAPv3; el material distingue los protocolos de acceso.'),
  ], null, 'La respuesta D (DAP, Directory Access Protocol) es correcta cuando se pregunta por el protocolo de acceso definido por X.500 entre DUA y DSA. LDAP es un protocolo ligero distinto que puede interoperar con directorios X.500; no debe confundirse con el DAP nativo.', 'vigente'],
  [5344, ['70'], ['II-12', 'III-5'], ['síntesis de voz', 'TTS', 'diphone', 'demisílaba', 'unidad de síntesis'], [
    ref(speechTts, 'Handbook of Speech Processing, capítulo «Basic Principles of Speech Synthesis», §19.1: en TTS concatenativa de vocabulario general, inventarios de palabras completas son impracticables por la enorme variación léxica y prosódica; se describen inventarios de difonos y demisílabas.'),
    ref('https://speechprocessingbook.aalto.fi/introduction/linguistic-structure-of-speech/', 'Aalto University, Introduction to Speech Processing: diferencia unidades fonéticas/fonológicas y explica coarticulación, base relevante para seleccionar segmentos de síntesis.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 70: NLP y áreas de aplicación de inteligencia artificial.'),
    ref(a2, 'Convocatoria A2 GSI 2025, II.12 (IVR/VoiceXML) y III.5 (fundamentos y tecnologías de IA); relación curricular contextual, no especificación de un método TTS.'),
    ref(academyAI, 'ITIC Academy, bloque 32 «Inteligencia Artificial y Ciencia de Datos», versión 2026: NLP, reconocimiento y síntesis de voz como aplicación; cotejo curricular.'),
    ref(academyOldTest, 'ITIC Academy/archivo de test, Test temas 29: conserva el reactivo legado «qué no se usa en síntesis de voz»; su clave se actualiza para evitar una afirmación absoluta.'),
  ], null, 'Se mantiene C (palabras), pero se reformula para un sintetizador concatenativo de propósito general con vocabulario abierto: almacenar cada palabra como unidad exigiría un inventario enorme y no cubriría sus variantes prosódicas; difonos y demisílabas son unidades históricamente usadas. No es cierto que las palabras jamás se usen en síntesis de voz: sistemas de dominio cerrado o selección de unidades pueden usarlas. La clasificación curricular se vincula a NLP/IA y tecnologías de voz, sin reducir todo TTS a concatenación.', 'corregida'],
  [5345, ['70'], ['II-12', 'III-5'], ['fonología', 'fonemas', 'fonética', 'sonidos distintivos'], [
    ref(phonology, 'Cambridge University Press, capítulo «Phonemes and Allophones»: phonology identifica las unidades sonoras distintivas que producen diferencias de significado (fonemas); fonética describe las propiedades físicas de los sonidos.'),
    ref('https://speechprocessingbook.aalto.fi/introduction/linguistic-structure-of-speech/', 'Aalto University, Introduction to Speech Processing: los fonemas son categorías abstractas y los teléfonos sus realizaciones físicas; los rasgos acústicos pertenecen al análisis de la señal/realización.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 70: NLP y áreas de aplicación de IA.'),
    ref(a2, 'Convocatoria A2 GSI 2025, II.12 (sistemas de voz) y III.5 (fundamentos de IA); relación curricular contextual.'),
    ref(academyAI, 'ITIC Academy, bloque 32 «Inteligencia Artificial y Ciencia de Datos», versión 2026: procesamiento del lenguaje y aplicaciones de voz.'),
    ref(academyOldTest, 'ITIC Academy/archivo de test, Test temas 29: contrasta el vocabulario del reactivo legado de reconocimiento y análisis de voz.'),
  ], null, 'La respuesta C es la pretendida: el nivel fonológico determina el inventario de fonemas que distinguen significado en una lengua. Se reescribe el enunciado para separar fonología (categorías distintivas abstractas) de fonética/acústica (realización y propiedades físicas de la señal).', 'corregida'],
];

const edits = {
  5341: { texto: 'En el DES clásico definido por FIPS 46-3, ¿cuántos bits de la clave se utilizan efectivamente en el algoritmo, sin contar los bits de paridad?', opciones: ['56 bits', '168 bits', '256 bits', 'Puede ser cualquiera, pero la habitual es 1.024 bits'], comentarios: 'La respuesta A (56 bits) es correcta: la clave se representa con 64 bits, pero 8 son de paridad y 56 se usan efectivamente. FIPS 46-3 fue retirado por NIST en 2005; se conserva como cuestión histórica, no como recomendación de cifrado actual.' },
  5342: { texto: 'Sobre la fortaleza y el uso de claves asimétricas RSA y ECC, señale la afirmación correcta:', opciones: [
    'Una clave ECC de 64 o 128 bits proporciona una fortaleza comparable a RSA con claves mucho mayores.',
    'La seguridad de RSA no depende de que la generación de sus parámetros y claves use aleatoriedad criptográfica adecuada.',
    'Según las equivalencias orientativas de NIST, RSA de 1.024 bits ofrece aproximadamente 112 bits de fortaleza simétrica.',
    'El RFC 5750 documentó el uso de claves RSA de 4.096 bits en certificados raíz de algunas PKI; es una práctica de perfil, no un requisito universal actual.'
  ], respuesta_correcta: 3, comentarios: 'La respuesta D es correcta, con alcance explícitamente documental e histórico: RFC 5750 describe claves RSA-4096 en certificados raíz. NIST sitúa RSA-1024 en ≤80 bits de fortaleza; RSA-2048 en 112 y RSA-3072 en 128. ECC logra fortaleza comparable con claves más cortas, pero no con 64/128 bits. La generación de claves RSA necesita métodos criptográficos adecuados; aleatoriedad predecible puede comprometer p y q. Los tamaños se eligen conforme al perfil y vida útil, no por una regla única de PKI.' },
  5343: { texto: '¿Qué protocolo define X.500 para el intercambio de peticiones y resultados entre un agente de usuario de directorio (DUA) y un agente de sistema de directorio (DSA)?', opciones: ['TCP/IP', 'LDAP', 'IMAP', 'DAP'], comentarios: 'La respuesta D (DAP, Directory Access Protocol) es correcta para el protocolo X.500 entre DUA y DSA. LDAP es un protocolo ligero distinto que puede interoperar con directorios X.500; no se deben tratar los dos nombres como sinónimos.' },
  5344: { texto: 'En un sistema concatenativo de síntesis de voz TTS de propósito general y vocabulario abierto, ¿qué unidad sería impracticable como inventario de segmentos por la cantidad de formas y contextos prosódicos que habría que grabar?', opciones: ['Fonemas', 'Difonos', 'Palabras completas', 'Semisílabas (demisílabas)'], respuesta_correcta: 2, comentarios: 'La respuesta C (palabras completas) es correcta en el supuesto acotado de TTS concatenativa de vocabulario abierto. La literatura describe inventarios de difonos y demisílabas; almacenar todas las palabras y variantes prosódicas no escala. No se afirma que nunca existan sistemas de dominio cerrado que usen palabras completas.' },
  5345: { texto: 'En el análisis del habla, ¿qué caracteriza al nivel fonológico de una lengua?', opciones: ['Analiza las características físicas de la señal vocal.', 'Describe los objetos sonoros físicos elementales (teléfonos).', 'Determina los fonemas que distinguen significados en esa lengua.', 'Determina la pronunciación concreta de letras, sílabas y palabras.'], respuesta_correcta: 2, comentarios: 'La respuesta C es correcta: la fonología estudia el sistema de categorías sonoras distintivas (fonemas); fonética y acústica analizan realizaciones y propiedades físicas. Se aclara el enunciado para no confundir grafemas, pronunciación y unidades lingüísticas abstractas.' },
};

aplicar({ numero: '1004', fecha: '2026-11-12', records, edits });
