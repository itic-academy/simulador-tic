const aplicar = require('./aplicar-lote.cjs');
const fs = require('node:fs');
const path = require('node:path');
const ref = (url, referencia) => ({ url, referencia });

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academySecurity = 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk';
const academyNetworks = 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const rfc3416 = 'https://www.rfc-editor.org/rfc/rfc3416.html';
const rfc3412 = 'https://www.rfc-editor.org/rfc/rfc3412.html';
const nist63 = 'https://pages.nist.gov/800-63-4/sp800-63.html';
const nistAal = 'https://pages.nist.gov/800-63-4/sp800-63b/aal/';
const nistAuth = 'https://csrc.nist.gov/glossary/term/authentication';
const nistAuthz = 'https://csrc.nist.gov/glossary/term/authorization';
const samm = 'https://owaspsamm.org/about/';
const sammModel = 'https://owaspsamm.org/model/';
const ens = 'https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191';
const nistContingency = 'https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-34r1.pdf';

const records = [
  [5301, ['118'], ['IV-9'], ['SNMPv3', 'PDU', 'SetRequest', 'InformRequest', 'Report', 'RFC 3416'], [
    ref(rfc3416, 'IETF RFC 3416, Protocol Operations for SNMP, §3: ASN.1 CHOICE enumera GetRequest, GetNext, GetBulk, Response, SetRequest, InformRequest, SNMPv2-Trap y Report; «GetBackRequest» no está definido.'),
    ref(rfc3412, 'IETF RFC 3412, Message Processing and Dispatching for SNMP: explica la generación y uso de Report-PDU en el modelo SNMPv3.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 118: redes LAN, monitorización y gestión SNMP.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema IV.9: administración de redes locales y gestión SNMP.'),
    ref(academyNetworks, 'ITIC Academy, bloque 42 «Redes», edición 2026.1, administración y gestión SNMP.')
  ], null, 'La respuesta D es correcta: GetBackRequest-PDU no es un tipo de PDU SNMP. SetRequest e InformRequest están definidos en RFC 3416; Report-PDU también aparece en el conjunto de operaciones y se utiliza en el procesamiento SNMPv3 según RFC 3412. Se conserva la clave y se corrige la grafía del enunciado a «una PDU».', 'corregida'],
  [5302, ['125'], ['IV-12'], ['autenticación multifactor', 'factores de autenticación', 'contraseña', 'token hardware', 'conocimiento', 'posesión'], [
    ref(nist63, 'NIST SP 800-63-4: distingue factores «algo que se sabe», «algo que se tiene» y «algo que se es»; para MFA deben combinarse factores de categorías distintas.'),
    ref(nistAal, 'NIST SP 800-63B-4, Authentication Assurance Levels: AAL2 exige dos factores distintos y describe combinaciones de un autenticador físico con contraseña o biometría.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 125: seguridad, control de accesos y técnicas de autenticación.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema IV.12: control de accesos y seguridad en redes.'),
    ref(academySecurity, 'ITIC Academy, bloque 48 «Seguridad en redes y en el nivel de aplicación», edición 2026.1, §6.3: factores y autenticación fuerte/MFA.')
  ], null, 'La respuesta B es correcta solo si el token es un autenticador físico independiente: la contraseña es un factor de conocimiento y el token, de posesión. «Usuario» identifica la cuenta, pero no constituye por sí solo un factor. La biometría aislada no basta como autenticación de un único factor bajo NIST SP 800-63-4; se combina con un autenticador físico.', 'corregida'],
  [5303, ['126'], ['III-13'], ['OWASP', 'SAMM', 'Software Assurance Maturity Model', 'seguridad del software', 'madurez'], [
    ref(samm, 'OWASP SAMM, What is OWASP SAMM?: define el nombre Software Assurance Maturity Model y su finalidad de analizar y mejorar la postura de seguridad del software de organizaciones.'),
    ref(sammModel, 'OWASP SAMM Model, versión 2: organiza 15 prácticas en cinco funciones de negocio y tres niveles de madurez.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 126: seguridad en el nivel de aplicación.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema III.13: calidad del software, modelos, métricas, normas y estándares; encaje de modelo de aseguramiento, no una referencia literal a SAMM.'),
    ref(academySecurity, 'ITIC Academy, bloque 48 «Seguridad en redes y en el nivel de aplicación», edición 2026.1, mención de OWASP SAMM junto a Top 10, ASVS y seguridad de aplicaciones.')
  ], null, 'La opción D es correcta. OWASP SAMM significa Software Assurance Maturity Model y es un modelo de madurez para evaluar y mejorar las prácticas de seguridad del software a lo largo de su ciclo de vida. Se reemplaza «metodología» por «modelo» para utilizar la denominación oficial y diferenciarlo de una metodología ágil como Scrum o RUP.', 'corregida'],
  [5304, ['125'], ['IV-12'], ['autenticación', 'autorización', 'contraseñas', 'gestión de identidades', 'control de acceso'], [
    ref(nistAuth, 'NIST CSRC Glossary: autenticación verifica la identidad de un usuario/proceso/dispositivo, a menudo como requisito previo al acceso.'),
    ref(nistAuthz, 'NIST CSRC Glossary: autorización concede o deniega derechos de acceso a un usuario, programa o proceso; es una decisión distinta de autenticar.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 125: seguridad y control de accesos.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema IV.12: control de accesos y seguridad en redes.'),
    ref(academySecurity, 'ITIC Academy, bloque 48 «Seguridad en redes y en el nivel de aplicación», edición 2026.1, §6.1: diferencia identificación, autenticación, autorización y trazabilidad.')
  ], null, 'El reactivo original confundía autenticación con autorización y afirmaba una comparación absoluta de costes. Se reformula como una pregunta acotada sobre el mecanismo de menor complejidad de implantación en un sistema básico: una contraseña memorizada. La contraseña permite autenticar; la autorización para acceder a recursos requiere una política o decisión de control de acceso y no se obtiene por usar una contraseña.', 'corregida'],
  [5305, ['128'], ['IV-3', 'IV-6'], ['continuidad del negocio', 'plan de contingencia', 'medidas organizativas', 'ENS', 'recuperación ante desastres'], [
    ref(ens, 'Real Decreto 311/2022, ENS, art. 26 y anexo II, medida op.cont: exige copias de seguridad, mecanismos de continuidad y planes de continuidad con procedimientos y ejercicios; las comunicaciones a partes implicadas forman parte de una respuesta coordinada.'),
    ref(nistContingency, 'NIST SP 800-34 Rev. 1, Contingency Planning Guide, §§3–4 y apéndice D: planificación incluye estrategia, responsables, procedimientos, personal y coordinación/comunicaciones; el plan no excluye comunicación.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 128: gestión de continuidad del negocio y planes de continuidad/contingencia.'),
    ref(a2, 'Convocatoria A2 GSI 2025, temas IV.3 (backup y recuperación) y IV.6 (recuperación ante desastres).'),
    ref(academySecurity, 'ITIC Academy, bloque 48 «Seguridad en redes y en el nivel de aplicación», edición 2026.1, §10.4: continuidad de negocio y recuperación ante desastres.')
  ], null, 'El original no tenía una opción «no contemplada» defendible: la comunicación del plan a responsables y usuarios es una parte normal de la preparación/respuesta, como muestran ENS y NIST. Se cambia el reactivo para preguntar por la categoría de una acción, con opciones técnicas, humanas, organizativas y comunicativas. La contratación/ubicación alternativa y los procedimientos son medidas organizativas; la respuesta anterior D no era válida como exclusión general.', 'corregida']
];

const edits = {
  5301: {
    texto: '¿Cuál de las siguientes NO es una PDU definida para las operaciones SNMPv3?',
    comentarios: 'La respuesta D es correcta: GetBackRequest-PDU no es un tipo de PDU SNMP. SetRequest e InformRequest están definidos en RFC 3416; Report-PDU también aparece en el conjunto de operaciones y se utiliza en el procesamiento SNMPv3 según RFC 3412. Se conserva la clave y se corrige la grafía del enunciado a «una PDU». '
  },
  5302: {
    texto: '¿Cuál de estas opciones combina dos factores de categorías distintas para autenticación multifactor?',
    opciones: [
      'Un nombre de usuario y una contraseña.',
      'Una contraseña y un token físico independiente que genera códigos de un solo uso.',
      'Una contraseña y un PIN memorizado por la misma persona.',
      'Una huella dactilar como único autenticador.'
    ],
    respuesta_correcta: 1,
    comentarios: 'La respuesta B es correcta solo si el token es un autenticador físico independiente: la contraseña es un factor de conocimiento y el token, de posesión. «Usuario» identifica la cuenta, pero no constituye por sí solo un factor. La biometría aislada no basta como autenticación de un único factor bajo NIST SP 800-63-4; se combina con un autenticador físico.'
  },
  5303: {
    texto: '¿Cuál de los siguientes modelos de OWASP se utiliza para evaluar y mejorar la madurez de las prácticas de seguridad del software de una organización?',
    comentarios: 'La opción D es correcta. OWASP SAMM significa Software Assurance Maturity Model y es un modelo de madurez para evaluar y mejorar las prácticas de seguridad del software a lo largo de su ciclo de vida. Se reemplaza «metodología» por «modelo» para utilizar la denominación oficial y diferenciarlo de una metodología ágil como Scrum o RUP.'
  },
  5304: {
    texto: 'En un sistema básico que necesita verificar la identidad de una persona con baja complejidad de implantación, ¿qué mecanismo suele ser el más sencillo?',
    comentarios: 'El reactivo original confundía autenticación con autorización y afirmaba una comparación absoluta de costes. Se reformula como una pregunta acotada sobre el mecanismo de menor complejidad de implantación en un sistema básico: una contraseña memorizada. La contraseña permite autenticar; la autorización para acceder a recursos requiere una política o decisión de control de acceso y no se obtiene por usar una contraseña.'
  },
  5305: {
    texto: 'En la clasificación de medidas de un plan de contingencia TIC, ¿cuál es un ejemplo de medida organizativa?',
    opciones: [
      'Instalar extintores, detectores de humo y equipos redundantes.',
      'Formar al personal y asignar responsables y roles de actuación.',
      'Contratar una ubicación alternativa y establecer procedimientos de recuperación y actuación.',
      'Comunicar los canales y avisos del plan a las personas implicadas.'
    ],
    respuesta_correcta: 2,
    comentarios: 'El original no tenía una opción «no contemplada» defendible: la comunicación del plan a responsables y usuarios es una parte normal de la preparación/respuesta, como muestran ENS y NIST. Se cambia el reactivo para preguntar por la categoría de una acción, con opciones técnicas, humanas, organizativas y comunicativas. La contratación/ubicación alternativa y los procedimientos son medidas organizativas; la respuesta anterior D no era válida como exclusión general.'
  }
};

if (!fs.existsSync(path.join(__dirname, 'cambios-lote-996.json'))) {
  aplicar({ numero: '996', fecha: '2026-11-12', records, edits });
}

const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-996.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  5301: ['ITIC Academy, bloque 42 «Redes», edición 2026.1: gestión SNMP y operaciones de administración de redes.', 'Cotejo curricular con A1-118/A2-IV.9; las operaciones PDU se verifican en RFC 3416/3412.'],
  5302: ['ITIC Academy, bloque 48 «Seguridad en redes y en el nivel de aplicación», edición 2026.1, §6.3: factores de autenticación y MFA.', 'El documento distingue conocimiento, posesión y biometría; la definición se contrasta con NIST SP 800-63-4.'],
  5303: ['ITIC Academy, bloque 48 «Seguridad en redes y en el nivel de aplicación», edición 2026.1: el resumen incluye OWASP SAMM, Top 10 y ASVS.', 'Cotejo con A1-126 y A2-III.13: SAMM es un modelo de madurez de aseguramiento/seguridad, no un marco de calidad software citado expresamente por la convocatoria A2.'],
  5304: ['ITIC Academy, bloque 48 «Seguridad en redes y en el nivel de aplicación», edición 2026.1, §6.1: separación de identificación, autenticación y autorización.', 'El material cubre factores y control de accesos; se limita la pregunta a autenticación básica y se registra la separación conceptual de NIST.'],
  5305: ['ITIC Academy, bloque 48 «Seguridad en redes y en el nivel de aplicación», edición 2026.1, §10.4: continuidad de negocio y recuperación ante desastres.', 'Cotejo con A1-128/A2-IV.3/IV.6; el ENS vigente también incorpora continuidad, copias, procedimientos y planes.']
};
const reason = 'Cotejo curricular individual con ITIC Academy en Drive y los programas oficiales A1/A2 de 2025.';
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
console.log('Lote 996 enriquecido con cotejo curricular y trazabilidad de las cinco preguntas.');
