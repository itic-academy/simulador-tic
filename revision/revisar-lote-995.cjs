const aplicar = require('./aplicar-lote.cjs');
const fs = require('node:fs');
const path = require('node:path');
const ref = (url, referencia) => ({ url, referencia });

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academyNetworks = 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const academyVideo = 'https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk';
const ipv6 = 'https://www.rfc-editor.org/rfc/rfc8200.html';
const ipv6Address = 'https://www.rfc-editor.org/rfc/rfc4291.html';
const h323 = 'https://www.itu.int/rec/T-REC-H.323';
const mqtt = 'https://www.oasis-open.org/standard/mqtt-v5-0/';
const coap = 'https://www.rfc-editor.org/rfc/rfc7252.html';
const http = 'https://www.rfc-editor.org/rfc/rfc9110.html';
const fddi = 'https://www.iso.org/standard/16973.html';
const mib = 'https://www.rfc-editor.org/rfc/rfc3411.html';
const snmpMib = 'https://www.rfc-editor.org/rfc/rfc3418.html';

const records = [
  [5296, ['115'], ['IV-10', 'IV-13'], ['IPv4', 'IPv6', 'cabecera IP', 'Hop Limit', 'TTL', 'Flow Label'], [
    ref(ipv6, 'IETF RFC 8200, IPv6 Specification, §3: define la cabecera IPv6, el campo Hop Limit, el campo Flow Label y el comportamiento del límite de saltos.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 115: redes IP, transición y convivencia IPv4/IPv6 y funcionalidades de IPv6.'),
    ref(a2, 'Convocatoria A2 GSI 2025, temas IV.10 (WAN/encaminamiento) e IV.13 (arquitectura y servicios de Internet).'),
    ref(academyNetworks, 'ITIC Academy, bloque 42 «Redes», edición 2026.1, secciones de IPv6 y redes IP; cotejo curricular.')
  ], null, 'La respuesta C es la única correcta. En IPv6, Hop Limit ocupa el papel funcional del TTL de IPv4 y se decrementa en cada nodo que reenvía el paquete. IPv6 conserva un campo Version (valor 6), elimina el checksum de cabecera IPv4 y añade Flow Label, que no existía en la cabecera IPv4 básica. Se sustituye la expresión imprecisa «se transforma» por equivalencia funcional.', 'corregida'],
  [5297, ['115'], ['IV-13'], ['IPv6', 'notación textual', 'compresión de ceros', 'dirección IPv4 mapeada'], [
    ref(ipv6Address, 'IETF RFC 4291, IPv6 Addressing Architecture, §2.2: permite omitir ceros iniciales, admite notación IPv4 incrustada en los 32 bits finales y limita a una aparición el marcador «::».'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 115: direcciones y funcionalidades de IPv6.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema IV.13: arquitectura y principios de funcionamiento de Internet.'),
    ref(academyNetworks, 'ITIC Academy, bloque 42 «Redes», edición 2026.1, IPv6 y redes IP; cotejo curricular.')
  ], null, 'La respuesta C es inválida porque una dirección IPv6 solo puede usar «::» una vez para comprimir una secuencia de grupos cero; dos apariciones impedirían determinar cuántos grupos comprime cada una. Las otras formas son válidas: abreviación de ceros iniciales, una dirección IPv4 incrustada en los 32 bits finales (IPv4-mapped) y ocho grupos hexadecimales completos.', 'vigente'],
  [5298, ['130'], ['IV-16'], ['H.323', 'gatekeeper', 'videoconferencia', 'admisión de llamadas', 'direcciones de transporte'], [
    ref(h323, 'ITU-T Recommendation H.323, §8.1: el gatekeeper es un componente opcional del sistema H.323; entre sus servicios figuran traducción de alias a direcciones de transporte y control de admisión/ancho de banda.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 130: sistemas y protocolos de videoconferencia.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema IV.16: sistemas de videoconferencia y protocolos.'),
    ref(academyVideo, 'ITIC Academy, bloque 50 «Videoconferencia, SSO y trabajo colaborativo», edición 2026.1, §1.3: familia H.32x/H.323 y componentes de su arquitectura.')
  ], null, 'La opción B es correcta, pero el reactivo se concreta a H.323: un gatekeeper es un componente lógico opcional de esa arquitectura de comunicaciones multimedia y presta, entre otros, servicios de traducción de direcciones, admisión y control de ancho de banda. No es un servidor de virtualización, antimalware ni copias de seguridad.', 'vigente'],
  [5299, ['107', '117'], ['IV-13'], ['IoT', 'MQTT', 'HTTP', 'CoAP', 'FDDI', 'protocolos de aplicación', 'red LAN histórica'], [
    ref(mqtt, 'OASIS MQTT Version 5.0: protocolo ligero de mensajería publish/subscribe diseñado también para escenarios M2M e IoT con nodos restringidos.'),
    ref(coap, 'IETF RFC 7252, The Constrained Application Protocol: protocolo de transferencia web especializado para nodos y redes restringidos.'),
    ref(http, 'IETF RFC 9110, HTTP Semantics: especificación del protocolo web HTTP, utilizable por aplicaciones y dispositivos conectados; no se afirma que sea exclusivo de IoT.'),
    ref(fddi, 'ISO 9314-1:1989, FDDI: especifica el protocolo físico de una tecnología de red token-ring de fibra a 100 Mbit/s, no un protocolo de aplicación IoT.'),
    ref(a1, 'Convocatoria A1 GSI 2025, temas 107 (tecnologías emergentes) y 117 (IoT).'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema IV.13: servicios de Internet e Internet de las Cosas.'),
    ref(academyNetworks, 'ITIC Academy, bloque 42 «Redes», edición 2026.1: Internet de las Cosas y servicios de Internet.')
  ], null, 'Se reformula para evitar que «relacionado con IoT» sugiera que HTTP solo se utiliza —o fue diseñado— para IoT. MQTT y CoAP son protocolos de aplicación/mensajería utilizados en ese ámbito, y HTTP también puede ser utilizado por dispositivos conectados. FDDI es una tecnología histórica de LAN por anillo de testigo/fibra (ISO 9314), de otra capa y función; por tanto, es la única opción que no es protocolo de aplicación para intercambio IoT.', 'historica'],
  [5300, ['118'], ['IV-9'], ['SNMP', 'MIB', 'objetos gestionados', 'OID', 'gestión de redes'], [
    ref(mib, 'IETF RFC 3411, SNMP Management Framework, §2.10: define la MIB como almacén virtual de información que contiene una colección de objetos gestionados; los módulos MIB describen colecciones relacionadas.'),
    ref(snmpMib, 'IETF RFC 3418, Management Information Base for SNMP: especifica objetos gestionados de SNMP y su acceso mediante el almacén virtual MIB.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 118: administración LAN, monitorización y gestión SNMP.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema IV.9: administración de redes locales y gestión SNMP.'),
    ref(academyNetworks, 'ITIC Academy, bloque 42 «Redes», edición 2026.1, gestión SNMP y monitorización de redes; cotejo curricular.')
  ], null, 'La respuesta B es la correcta una vez acotada. Una MIB es una colección virtual y estructurada de definiciones/instancias de objetos gestionados, identificados en SNMP mediante OID; no es el gestor central, el agente ni una PDU. La MIB no prescribe que cada nodo mantenga una copia física completa de todos los objetos ni define por sí sola las operaciones SNMP.', 'corregida']
];

const edits = {
  5296: {
    texto: 'Comparando las cabeceras IPv4 e IPv6, ¿qué afirmación es correcta?',
    opcion: [2, 'El campo TTL de IPv4 tiene como equivalente funcional el campo Hop Limit de IPv6, que se decrementa en cada nodo que reenvía el paquete.'],
    comentarios: 'La respuesta C es la única correcta. En IPv6, Hop Limit ocupa el papel funcional del TTL de IPv4 y se decrementa en cada nodo que reenvía el paquete. IPv6 conserva un campo Version (valor 6), elimina el checksum de cabecera IPv4 y añade Flow Label, que no existía en la cabecera IPv4 básica. Se sustituye la expresión imprecisa «se transforma» por equivalencia funcional.'
  },
  5297: {
    texto: 'Según la notación textual de IPv6 de RFC 4291, ¿cuál de estas direcciones no es válida?',
    comentarios: 'La respuesta C es inválida porque una dirección IPv6 solo puede usar «::» una vez para comprimir una secuencia de grupos cero; dos apariciones impedirían determinar cuántos grupos comprime cada una. Las otras formas son válidas: abreviación de ceros iniciales, una dirección IPv4 incrustada en los 32 bits finales (IPv4-mapped) y ocho grupos hexadecimales completos.'
  },
  5298: {
    texto: 'En la arquitectura de comunicaciones multimedia ITU-T H.323, ¿qué función cumple típicamente un gatekeeper?',
    comentarios: 'La opción B es correcta, pero el reactivo se concreta a H.323: un gatekeeper es un componente lógico opcional de esa arquitectura de comunicaciones multimedia y presta, entre otros, servicios de traducción de direcciones, admisión y control de ancho de banda. No es un servidor de virtualización, antimalware ni copias de seguridad.'
  },
  5299: {
    texto: '¿Cuál de estas opciones identifica una tecnología histórica de LAN de fibra, y no un protocolo de aplicación utilizado para intercambiar datos con dispositivos IoT?',
    opciones: [
      'MQTT, mensajería publish/subscribe ligera.',
      'HTTP, protocolo de transferencia de la Web.',
      'CoAP, protocolo web para nodos restringidos.',
      'FDDI, tecnología de LAN por anillo de testigo y fibra óptica.'
    ],
    respuesta_correcta: 3,
    comentarios: 'Se reformula para evitar que «relacionado con IoT» sugiera que HTTP solo se utiliza —o fue diseñado— para IoT. MQTT y CoAP son protocolos de aplicación/mensajería utilizados en ese ámbito, y HTTP también puede ser utilizado por dispositivos conectados. FDDI es una tecnología histórica de LAN por anillo de testigo/fibra (ISO 9314), de otra capa y función; por tanto, es la única opción que no es protocolo de aplicación para intercambio IoT.'
  },
  5300: {
    texto: 'En la arquitectura de gestión de red SNMP, ¿qué describe una Management Information Base (MIB)?',
    opciones: [
      'El gestor o estación central que inicia consultas a los dispositivos administrados.',
      'La colección virtual y estructurada de objetos gestionados y sus definiciones, accesibles mediante identificadores OID.',
      'El agente SNMP que ejecuta en cada dispositivo y responde a las consultas del gestor.',
      'Una PDU de SNMP que transporta una solicitud o respuesta entre entidades.'
    ],
    respuesta_correcta: 1,
    comentarios: 'La respuesta B es la correcta una vez acotada. Una MIB es una colección virtual y estructurada de definiciones/instancias de objetos gestionados, identificados en SNMP mediante OID; no es el gestor central, el agente ni una PDU. La MIB no prescribe que cada nodo mantenga una copia física completa de todos los objetos ni define por sí sola las operaciones SNMP.'
  }
};

if (!fs.existsSync(path.join(__dirname, 'cambios-lote-995.json'))) {
  aplicar({ numero: '995', fecha: '2026-11-12', records, edits });
}

const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-995.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  5296: ['ITIC Academy, bloque 42 «Redes», edición 2026.1, redes IP/IPv6, actualización de IPv4 y nuevas funcionalidades.', 'Cotejo con A1-115 y temas A2-IV.10/IV.13. La equivalencia exacta entre TTL y Hop Limit se fija por RFC 8200.'],
  5297: ['ITIC Academy, bloque 42 «Redes», edición 2026.1, direccionamiento IPv6.', 'Se coteja el contenido de IPv6 del bloque; la validez de compresión :: y de direcciones IPv4-mapped se contrasta con RFC 4291.'],
  5298: ['ITIC Academy, bloque 50 «Videoconferencia, SSO y trabajo colaborativo», edición 2026.1, §1.3 H.32x/H.323.', 'Cotejo con A1-130/A2-IV.16; la función del gatekeeper se verifica con ITU-T H.323.'],
  5299: ['ITIC Academy, bloque 42 «Redes», edición 2026.1, Internet/IoT; el bloque distingue redes LAN y protocolos de aplicación.', 'Cotejo con A1-107/A1-117/A2-IV.13. La pregunta diferencia las capas y funciones de IoT y FDDI mediante OASIS, IETF e ISO.'],
  5300: ['ITIC Academy, bloque 42 «Redes», edición 2026.1, gestión de redes y SNMP.', 'Cotejo con A1-118/A2-IV.9; RFC 3411 define MIB como almacén virtual de objetos y separa gestores, entidades SNMP y PDUs.']
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
console.log('Lote 995 enriquecido con cotejo curricular y trazabilidad de las cinco preguntas.');
