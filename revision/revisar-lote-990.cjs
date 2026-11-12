const aplicar = require('./aplicar-lote.cjs');
const fs = require('node:fs');
const path = require('node:path');
const ref = (url, referencia) => ({ url, referencia });

const fips186 = 'https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.186-5.pdf';
const hash = 'https://csrc.nist.gov/projects/hash-functions';
const hashGlossary = 'https://csrc.nist.gov/glossary/term/hash_function';
const rfc4512 = 'https://www.rfc-editor.org/rfc/rfc4512.html';
const law6 = 'https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046';
const orderVideo = 'https://boe.es/buscar/act.php?id=BOE-A-2021-7966';
const nistPki = 'https://csrc.nist.gov/glossary/term/public_key_infrastructure';
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academyCrypto = 'https://docs.google.com/document/d/1Rix8RBBUSoXJBOAt8iWyU9j5tPiqlXzk/edit?usp=drivesdk';
const academyDirectory = 'https://docs.google.com/document/d/1TquAQ4a5u1wiDtMpLGimvmFONKEQa2Gv/edit?usp=drivesdk&ouid=107088454749630873035&rtpof=true&sd=true';

const records = [
  [5271, ['80', '81'], ['I-6', 'IV-12'], ['firma digital', 'clave pública', 'clave privada', 'verificación'], [
    ref(fips186, 'NIST FIPS 186-5, Digital Signature Standard: la firma se genera con la clave privada y se verifica con la clave pública correspondiente del firmante.'),
    ref(a1, 'Convocatoria A1 GSI 2025, temas 80 y 81: identificación y firma electrónica, certificados, claves públicas/privadas e infraestructura de clave pública.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema I.6 (identidad y firma electrónica) y IV.12 (técnicas criptográficas y firma digital).'),
    ref(academyCrypto, 'ITIC Academy, temas 079–081 «Seguridad, criptografía, identificación y firma», edición 2026: claves y validación de firma.')
  ], null, 'Para verificar una firma digital se usa la clave pública correspondiente a la clave privada con la que se generó. La firma no consiste en cifrar el documento entero con la clave privada; los esquemas aprobados suelen firmar un resumen y se verifican conforme al algoritmo y formato concretos.', 'corregida'],
  [5272, ['80', '125'], ['IV-12'], ['funciones hash', 'resumen criptográfico', 'integridad', 'one-way'], [
    ref(hash, 'NIST CSRC, Hash Functions: un algoritmo hash transforma un mensaje de longitud arbitraria en un resumen de longitud fija; enumera SHA-2 y SHA-3 como familias aprobadas.'),
    ref(hashGlossary, 'NIST CSRC Glossary, hash function: define la salida de longitud fija y las propiedades de seguridad esperadas de las funciones aprobadas.'),
    ref(a1, 'Convocatoria A1 GSI 2025, temas 80 y 125: criptografía, certificados y técnicas criptográficas para seguridad en redes.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema IV.12: técnicas criptográficas y protocolos seguros.'),
    ref(academyCrypto, 'ITIC Academy, temas 079–081 «Seguridad, criptografía, identificación y firma», edición 2026: funciones hash y resumen.')
  ], null, 'La afirmación falsa es que una función hash criptográfica sea reversible: está diseñada para que no resulte factible recuperar el mensaje a partir del resumen. Para un algoritmo dado, el digest tiene longitud fija. Un hash sin clave, por sí solo, tampoco autentica al emisor; para ello se necesita un MAC, firma u otro mecanismo de confianza.', 'corregida'],
  [5273, ['80', '122'], [], ['LDAP', 'DIT', 'Directory Information Tree', 'directorios'], [
    ref(rfc4512, 'IETF RFC 4512, §2.1: las entradas del modelo de información del directorio se organizan jerárquicamente en un Directory Information Tree (DIT).'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 80: protocolos de directorio basados en LDAP y X.500; tema 122: servicios de directorio.'),
    ref(academyDirectory, 'ITIC Academy, Tema 122 «Correo, mensajería y directorios», edición 2026: modelo jerárquico y terminología de directorio LDAP.')
  ], null, 'La estructura jerárquica de entradas del directorio se denomina Directory Information Tree (DIT), como especifica RFC 4512. LDS puede ser nombre de producto/servicio en algunas plataformas, pero no es el nombre genérico de esta estructura.', 'vigente'],
  [5274, ['80', '81'], ['I-6', 'I-9'], ['Ley 6/2020', 'ETD/465/2021', 'certificado cualificado', 'videoidentificación'], [
    ref(law6, 'Ley 6/2020, art. 7.1–2: regula personación, excepción por firma legitimada notarialmente y habilitación reglamentaria de métodos remotos con seguridad equivalente.'),
    ref(orderVideo, 'Orden ETD/465/2021 consolidada, modificada por ETD/743/2022: establece requisitos y procedimientos para identificar por vídeo a solicitantes de certificados cualificados; no equivale a cualquier llamada o aplicación de videoconferencia.'),
    ref(a1, 'Convocatoria A1 GSI 2025, temas 80 y 81: identificación y firma, certificados e infraestructura de clave pública.'),
    ref(a2, 'Convocatoria A2 GSI 2025, temas I.6 e I.9: eIDAS, identidad/firma electrónica e instrumentos de identificación y autenticación en la Administración.'),
    ref(academyCrypto, 'ITIC Academy, temas 079–081 «Seguridad, criptografía, identificación y firma», edición 2026: certificados y comprobación de identidad.')
  ], null, 'La respuesta A recoge las vías preguntadas: personación, firma de la solicitud legitimada notarialmente cuando se prescinde de la presencia, e identificación remota por vídeo bajo los requisitos de la Orden ETD/465/2021. No es válida cualquier llamada, Zoom u otra videollamada informal: el procedimiento debe cumplir las condiciones técnicas y de seguridad exigidas. El marco eIDAS puede reconocer además otros medios electrónicos, por lo que esta pregunta se limita expresamente a la Ley 6/2020 y su desarrollo por Orden.', 'corregida'],
  [5275, ['81'], ['I-6', 'IV-12'], ['PKI', 'infraestructura de clave pública', 'certificados', 'gestión de claves'], [
    ref(nistPki, 'NIST CSRC Glossary, public key infrastructure: marco establecido para emitir, mantener y revocar certificados de clave pública.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 81: PKI, certificados y mecanismos de identificación y firma.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema I.6 (identidad/firma electrónica) y IV.12 (criptografía y firma digital).'),
    ref(academyCrypto, 'ITIC Academy, temas 079–081 «Seguridad, criptografía, identificación y firma», edición 2026: certificados y ciclo de vida PKI.')
  ], null, 'Una PKI es el marco organizativo y técnico para gestionar certificados de clave pública durante su ciclo de vida, incluida su emisión, mantenimiento y revocación. No es solo un conjunto de servidores de cifrado ni un programa cliente instalado en cada equipo.', 'corregida']
];

const edits = {
  5271: {
    texto: 'En un esquema de firma digital basado en criptografía de clave pública, ¿qué clave utiliza el verificador para comprobar la firma del documento?',
    opciones: [
      'La clave privada del verificador.',
      'La clave pública del verificador.',
      'La clave privada correspondiente al par de claves del firmante.',
      'La clave pública correspondiente a la clave privada del firmante.'
    ],
    respuesta_correcta: 3,
    comentarios: 'La opción D es correcta: se verifica con la clave pública correspondiente a la clave privada del firmante. La firma digital no equivale necesariamente a cifrar el documento completo con la clave privada; los algoritmos de firma y los formatos definen la operación de generación y verificación.'
  },
  5272: {
    texto: 'Indique la afirmación FALSA sobre las funciones hash criptográficas:',
    opciones: [
      'Para un algoritmo concreto, el resumen tiene longitud fija aunque varíe la longitud del mensaje de entrada.',
      'Se utilizan para detectar cambios en un mensaje comparando los resúmenes calculados.',
      'Son reversibles: a partir del resumen se puede recuperar el mensaje original.',
      'SHA-2 es una familia de funciones hash criptográficas normalizada.'
    ],
    respuesta_correcta: 2,
    comentarios: 'La afirmación falsa es que una función hash criptográfica sea reversible: está diseñada para que no resulte factible recuperar el mensaje a partir del resumen. Para un algoritmo dado, el digest tiene longitud fija. Un hash sin clave, por sí solo, tampoco autentica al emisor; para ello se necesita un MAC, firma u otro mecanismo de confianza.'
  },
  5273: {
    texto: 'En el modelo de información de LDAP, ¿cómo se denomina la estructura jerárquica que organiza las entradas del directorio?',
    comentarios: 'La estructura jerárquica de entradas del directorio se denomina Directory Information Tree (DIT), como especifica RFC 4512. LDS puede ser nombre de producto o servicio en algunas plataformas, pero no es el nombre genérico de esta estructura.'
  },
  5274: {
    texto: 'Según la Ley 6/2020 y la Orden ETD/465/2021, ¿qué afirmación describe correctamente la identificación remota por vídeo para expedir un certificado cualificado?',
    opciones: [
      'Puede emplearse si el procedimiento cumple los requisitos legales y técnicos de seguridad y fiabilidad establecidos para la videoidentificación.',
      'Basta con realizar una llamada telefónica en la que el solicitante declare su identidad.',
      'Cualquier videollamada por Zoom u otra aplicación es válida aunque no se compruebe el documento ni se sigan controles técnicos.',
      'La videoidentificación está prohibida y la personación física es siempre obligatoria, incluso en los supuestos regulados.'
    ],
    respuesta_correcta: 0,
    comentarios: 'La identificación remota por vídeo está permitida si se aplica el procedimiento regulado y cumple los requisitos técnicos y de seguridad. No equivale a cualquier llamada, Zoom u otra videollamada informal. La Ley 6/2020 contempla además la personación y la excepción de firma legitimada notarialmente; eIDAS puede admitir otros medios electrónicos, por lo que el enunciado se limita a esta modalidad específica.'
  },
  5275: {
    texto: '¿Cuál es la función principal de una infraestructura de clave pública (PKI)?',
    opciones: [
      'Proporcionar acceso remoto a las soluciones de teletrabajo de las Administraciones Públicas.',
      'Ser únicamente el conjunto de servidores que ejecutan operaciones de cifrado para una autoridad de certificación.',
      'Proporcionar el marco organizativo y técnico para emitir, mantener, validar y revocar certificados de clave pública.',
      'Instalar en cada ordenador personal una aplicación que sustituye a las autoridades de certificación y gestiona localmente toda la confianza.'
    ],
    respuesta_correcta: 2,
    comentarios: 'Una PKI proporciona el marco organizativo y técnico para gestionar certificados de clave pública y su ciclo de vida, incluidas emisión, mantenimiento, validación y revocación. Incluye políticas, procesos, roles y sistemas; no se reduce a servidores de cifrado ni a una aplicación cliente.'
  }
};

if (!fs.existsSync(path.join(__dirname, 'cambios-lote-990.json'))) {
  aplicar({ numero: '990', fecha: '2026-11-12', records, edits });
}

const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-990.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  5271: ['ITIC Academy, temas 079–081 «Seguridad, criptografía, identificación y firma», edición 2026: generación y verificación de firma con claves asimétricas.', 'Cotejo A1-80/A1-81/A2-I.6/A2-IV.12; la clave pública del firmante verifica la firma.'],
  5272: ['ITIC Academy, temas 079–081 «Seguridad, criptografía, identificación y firma», edición 2026: hashes y resumen criptográfico.', 'Cotejo A1-80/A1-125/A2-IV.12; hash no es reversible ni autentica por sí solo.'],
  5273: ['ITIC Academy, Tema 122 «Correo, mensajería y directorios», edición 2026: estructura jerárquica LDAP y árbol DIT.', 'Cotejo A1-80/A1-122; Directory Information Tree es el árbol de entradas del directorio LDAP.'],
  5274: ['ITIC Academy, temas 079–081 «Seguridad, criptografía, identificación y firma», edición 2026: certificados cualificados e identificación de solicitantes.', 'Cotejo A1-80/A1-81/A2-I.6/A2-I.9; videoidentificación solo bajo el procedimiento y requisitos de la Orden ETD/465/2021.'],
  5275: ['ITIC Academy, temas 079–081 «Seguridad, criptografía, identificación y firma», edición 2026: autoridades, certificados y ciclo de vida PKI.', 'Cotejo A1-81/A2-I.6/A2-IV.12; PKI administra certificados a lo largo de su ciclo de vida.']
};
const reason = 'Cotejo curricular individual con materiales ITIC Academy accesibles en Drive y los programas oficiales A1/A2 de 2025.';
for (const [key, [block, note]] of Object.entries(academy)) {
  const id = Number(key), q = bank.preguntas.find(x => x.id === id), change = log.cambios.find(x => x.id === id);
  if (!q || !change) throw new Error(`Falta registro de ${id}`);
  const before = { bloque_academia: q.clasificacion.bloque_academia, nota: q.clasificacion.nota };
  q.clasificacion.bloque_academia = block;
  q.clasificacion.nota = note;
  const later = change.correcciones_posteriores || [];
  if (!later.some(x => x.motivo === reason)) later.push({ fecha: '2026-11-12', motivo: reason, clasificacion_anterior: before, clasificacion_actualizada: { bloque_academia: block, nota: note } });
  change.correcciones_posteriores = later;
  change.actualizada = structuredClone(q);
}
const byId = new Map(log.cambios.map(c => [c.id, c]));
const raw = fs.readFileSync(bankPath, 'utf8');
let replaced = 0;
const output = raw.replace(/^    \{[\s\S]*?^    \}/gm, block => {
  const old = JSON.parse(block), change = byId.get(old.id);
  if (!change) return block;
  replaced++;
  return JSON.stringify(change.actualizada, null, 2).split('\n').map(line => `    ${line}`).join('\n');
});
if (replaced !== 5) throw new Error(`Se esperaban 5 cambios; encontrados ${replaced}`);
JSON.parse(output);
fs.writeFileSync(bankPath, output);
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Lote 990 enriquecido con cotejo curricular y trazabilidad de las cinco preguntas.');
