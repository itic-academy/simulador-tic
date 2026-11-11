const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const j2ee = 'https://docs.oracle.com/javaee/1.4/tutorial/doc/J2EETutorialTOC.html';
const rtp = 'https://www.rfc-editor.org/rfc/rfc3550.html';
const sip = 'https://www.rfc-editor.org/rfc/rfc3261.html';
const imt = 'https://www.itu.int/dms_pub/itu-r/opb/rep/R-REP-M.2410-2017-PDF-E.pdf';
const nti = 'https://www.boe.es/buscar/act.php?id=BOE-A-2012-10048';
const aes = 'https://csrc.nist.gov/pubs/fips/197/final';
const academyJava = 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk';
const academyNetworks = 'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk';
const academyRadio = 'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk';
const academyDocs = 'https://drive.google.com/file/d/17UpEFvYfjQ4iUrx8UNNTJIFcj5xO4vlz/view?usp=drivesdk';
const academyCrypto = 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk';
const refs = (items) => items.map(([url, referencia]) => ({ url, referencia }));

const records = [
  [4936, ['67'], ['III-10'], ['J2EE', 'Java EE', 'applet', 'servlet', 'JSP', 'EJB', 'componentes'], refs([
    [j2ee, 'Oracle, The J2EE 1.4 Tutorial, capítulo 1: separa applets, clientes de aplicación, componentes web (Servlet/JSP) y componentes de negocio EJB; la especificación soporta estos tipos en los contenedores de la plataforma. JavaScript de navegador no es un tipo de componente de aplicación J2EE.'],
    [a1, 'Convocatoria A1 GSI 2025, tema 67: entorno de desarrollo Java.'],
    [a2, 'Convocatoria A2 GSI AGE 2025, tema III.10: arquitectura Java EE/Jakarta EE y elementos constitutivos.'],
    [academyJava, 'ITIC Academy 2026, bloque 30, tecnologías Java/Jakarta EE, Servlets, JSP, EJB y persistencia; cotejo curricular con A1-67/A2-III.10. La especificación histórica J2EE 1.4 se comprueba separadamente en la documentación de Oracle.']
  ]), null,
  'Respuesta B. J2EE 1.4 define, entre otros, applets, componentes web como Servlets/JSP y componentes de negocio EJB. La opción de JavaScript mezclaba un lenguaje de script ejecutado por el navegador con un tipo de componente de la plataforma; al preguntar qué opción contiene solo ejemplos válidos, la clave queda inequívoca.', 'corregida'],
  [4937, ['115', '116'], ['IV-14'], ['VoIP', 'telefonía IP', 'RTP', 'SIP', 'QoS', 'retardo', 'jitter'], refs([
    [rtp, 'IETF RFC 3550, RTP: transporte de datos en tiempo real como audio y vídeo; RTP lleva marcas temporales y números de secuencia para seguimiento, pero no garantiza entrega a tiempo ni QoS por sí mismo.'],
    [sip, 'IETF RFC 3261, SIP: protocolo de señalización de capa de aplicación para crear/modificar/terminar sesiones, incluidas llamadas telefónicas por Internet; distingue señalización de transporte de medios.'],
    [a1, 'Convocatoria A1 GSI 2025, temas 115 (redes IP y QoS) y 116 (NGN/IMS, VoIP, ToIP y comunicaciones unificadas).'],
    [a2, 'Convocatoria A2 GSI AGE 2025, tema IV.14: NGN/IMS, VoIP, ToIP y convergencia de telefonía.'],
    [academyNetworks, 'ITIC Academy 2026, bloque 43 «Protocolos»: VoIP, NGN/IMS y parámetros de QoS para tráfico de voz en tiempo real; cotejo con A1-115/116 y A2-IV.14.']
  ]), null,
  'Respuesta A. La telefonía IP transporta medios de voz mediante paquetes sobre redes IP; la señalización de llamada (por ejemplo, SIP) no es el propio flujo de voz. Para una comunicación interactiva, retardo, variación del retardo y pérdidas afectan a la calidad. No se envían voz, datos y vídeo necesariamente juntos en un único paquete, y la red IP no vuelve irrelevantes los requisitos temporales; RTP tampoco garantiza QoS.', 'corregida'],
  [4938, ['112'], ['IV-7', 'IV-15'], ['5G', 'IMT-2020', 'ITU-R M.2410', 'caudal máximo', 'uplink'], refs([
    [imt, 'UIT-R Report M.2410-0, §4.1: define peak data rate bajo condiciones ideales y fija como requisitos mínimos de rendimiento de IMT-2020 20 Gbit/s en downlink y 10 Gbit/s en uplink. No es una promesa de velocidad de usuario en redes desplegadas ni una cota universal de todo equipo 5G.'],
    [a1, 'Convocatoria A1 GSI 2025, tema 112: tecnologías de acceso móvil e inalámbrico.'],
    [a2, 'Convocatoria A2 GSI AGE 2025, temas IV.7 (medios inalámbricos) y IV.15 (sistemas de comunicaciones móviles y generaciones).'],
    [academyRadio, 'ITIC Academy 2026, bloque 46 «Redes inalámbricas y comunicaciones móviles»: encuadra IMT-2020 como 5G y trata los parámetros de radio; cotejo con A1-112 y A2-IV.7/IV.15. La cifra se ata al informe técnico de UIT-R.']
  ]), null,
  'Respuesta B. La pregunta original llamaba «velocidad máxima teórica de 5G» a una cifra sin especificar el perfil. UIT-R M.2410-0 define el caudal pico en condiciones ideales y establece para IMT-2020 un requisito mínimo de rendimiento de 10 Gbit/s en subida y 20 Gbit/s en bajada. La pregunta acota a la referencia IMT-2020; las tasas reales dependen del despliegue, ancho de banda, configuración radio y condiciones de servicio.', 'corregida'],
  [4939, ['104'], ['I-9', 'II-16'], ['e-EMGDE', 'metadatos', 'NTI', 'interoperabilidad', 'gestión documental'], refs([
    [nti, 'Resolución de 28 de junio de 2012, NTI de Política de gestión de documentos electrónicos, apartado VII.4: describe el e-EMGDE como esquema que incluye los metadatos mínimos obligatorios de las NTI de Documento y Expediente electrónicos y otros metadatos complementarios; indica que podrá utilizarse como referencia, no impone su uso universal.'],
    [a1, 'Convocatoria A1 GSI 2025, tema 104: gestión documental y tecnologías DMS/CMS.'],
    [a2, 'Convocatoria A2 GSI AGE 2025, temas I.9 (ENI, NTI y administración electrónica) y II.16 (sistemas de gestión documental y de contenidos).'],
    [academyDocs, 'ITIC Academy 2026, bloque 40 «Gestión documental», sección 3.3 e-EMGDE y servicios comunes, con contenidos A1-104 y de gestión electrónica/NTI; cotejo curricular.']
  ]), null,
  'Respuesta C. El apartado VII.4 de la NTI identifica el e-EMGDE como el esquema que reúne los metadatos mínimos obligatorios definidos por las NTI de Documento y Expediente electrónicos más metadatos complementarios pertinentes. La norma dice que puede usarse como referencia; no lo convierte en una obligación de adoptar un único esquema por todas las organizaciones.', 'corregida'],
  [4940, ['79'], ['IV-12'], ['AES', 'Rijndael', 'FIPS 197', 'claves simétricas', '128 bits', '192 bits', '256 bits'], refs([
    [aes, 'NIST FIPS 197, Advanced Encryption Standard, actualización editorial de 2023: AES especifica las variantes AES-128, AES-192 y AES-256; cada una procesa bloques de 128 bits y el sufijo es la longitud de clave. La pregunta se acota a AES (subconjunto estandarizado de la familia Rijndael), no a todos los tamaños configurables del algoritmo original.'],
    [a1, 'Convocatoria A1 GSI 2025, tema 79: cifrado y algoritmos simétricos y asimétricos.'],
    [a2, 'Convocatoria A2 GSI AGE 2025, tema IV.12: técnicas criptográficas y seguridad de redes.'],
    [academyCrypto, 'ITIC Academy 2026, bloque 36 «Seguridad. Criptografía. Identificación y firma», §2.1: AES (Rijndael), FIPS 197, claves de 128/192/256 bits y bloque de 128 bits; cotejo con A1-79/A2-IV.12.']
  ]), null,
  'Respuesta C. El enunciado anterior confundía Rijndael en general con AES, subconjunto que selecciona NIST. Para AES, FIPS 197 solo define longitudes de clave de 128, 192 o 256 bits y tamaño de bloque de 128 bits. Así se evita que «múltiplo de 32 bits» sea simultáneamente verdadero para configuraciones de la familia Rijndael fuera de las tres variantes AES.', 'corregida']
];

const edits = {
  4936: {
    texto: '¿Qué opción contiene solo ejemplos de tipos de componentes de aplicación admitidos por la plataforma J2EE 1.4?',
    opciones: [
      'Páginas ASP y scripts VBScript.',
      'Applets, Servlets y componentes Enterprise JavaBeans (EJB).',
      'JavaScript y páginas JSP.',
      'Ninguna de las anteriores.'
    ],
    respuesta_correcta: 1
  },
  4937: {
    texto: '¿Qué afirmación describe correctamente la telefonía sobre IP (VoIP)?',
    opciones: [
      'Transporta medios de voz como paquetes sobre redes IP; en la comunicación interactiva, el retardo, la variación del retardo y las pérdidas pueden afectar a la calidad.',
      'Obliga a mantener una infraestructura física de voz separada de la red de datos.',
      'Al funcionar sobre IP, la transmisión de voz no tiene requisitos temporales.',
      'La voz, el vídeo y los datos de una comunicación se encapsulan siempre juntos en un único paquete.'
    ],
    respuesta_correcta: 0
  },
  4938: {
    texto: 'Según el requisito de caudal pico de UIT-R M.2410-0 para la interfaz radio IMT-2020 (5G), ¿qué valor se fija para el enlace ascendente en condiciones ideales?',
    opciones: [
      '300 Mbit/s.',
      '10 Gbit/s.',
      '20 Gbit/s.',
      '1 Tbit/s.'
    ],
    respuesta_correcta: 1
  },
  4939: {
    texto: 'Según el apartado VII.4 de la NTI de Política de gestión de documentos electrónicos, ¿qué esquema se identifica como referencia que incluye los metadatos mínimos obligatorios de las NTI de Documento y Expediente electrónicos y metadatos complementarios pertinentes?',
    opciones: [
      'MARC 12.',
      'Dublin Core como esquema único obligatorio para todas las organizaciones.',
      'Esquema de Metadatos para la Gestión del Documento Electrónico (e-EMGDE).',
      'e-MARC.'
    ],
    respuesta_correcta: 2
  },
  4940: {
    texto: 'Según FIPS 197, ¿qué longitudes de clave admite el estándar AES, seleccionado a partir de la familia Rijndael?',
    opciones: [
      'Solo 128 bits.',
      '128, 192 o 256 bits de bloque y una clave fija de 128 bits.',
      '128, 192 o 256 bits.',
      'Cualquier longitud múltiplo de 32 bits, sin límite ni conjunto definido por el estándar.'
    ],
    respuesta_correcta: 2
  }
};

aplicar({ numero: '923', fecha: '2026-11-11', records, edits });

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-923.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academyById = {
  4936: [academyJava, 'ITIC Academy 2026, bloque 30 «Tecnologías de sistemas de información»: Java/Jakarta EE, Servlets, JSP y EJB; cotejo con A1-67/A2-III.10. J2EE 1.4 se contrasta específicamente con Oracle.'],
  4937: [academyNetworks, 'ITIC Academy 2026, bloque 43 «Protocolos»: NGN/IMS, VoIP y calidad de servicio de tráfico en tiempo real; A1-115/116 y A2-IV.14.'],
  4938: [academyRadio, 'ITIC Academy 2026, bloque 46 «Redes inalámbricas y comunicaciones móviles»: IMT-2020/5G y tecnologías de acceso; A1-112/A2-IV.7/IV.15.'],
  4939: [academyDocs, 'ITIC Academy 2026, bloque 40 «Gestión documental», §3.3: e-EMGDE y servicios comunes; A1-104/A2-I.9/II.16.'],
  4940: [academyCrypto, 'ITIC Academy 2026, bloque 36 «Seguridad. Criptografía. Identificación y firma», §2.1: AES/Rijndael y longitudes normalizadas por FIPS 197; A1-79/A2-IV.12.']
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const [url, detail] = academyById[change.id];
  q.clasificacion.bloque_academia = `${detail} Se cita como cotejo curricular, no como fuente primaria.`;
  q.clasificacion.nota = `${q.revision.estado}. ${detail} La explicación y referencias técnicas oficiales constan en el registro del lote.`;
  q.revision.observaciones += ` ${detail}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url, referencia: `ITIC Academy: ${detail}` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo ITIC Academy añadido al lote 923.');
