const aplicar = require('./aplicar-lote.cjs');
const fs = require('node:fs');
const path = require('node:path');
const ref = (url, referencia) => ({ url, referencia });

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academyNetworks = 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const academyWeb = 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk';
const academyItil = 'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk';
const usb = 'https://www.usb.org/document-library/usb-20-specification';
const bridge = 'https://standards.ieee.org/ieee/8802-1q_2024_amd.35_2024/802.1Q/10323/';
const ieeeAuto = 'https://www.ieee802.org/3/interp/interp-2-0705.pdf';
const ciscoSwitch = 'https://www.cisco.com/c/en/us/support/docs/lan-switching/ethernet/12006-chapter22.html';
const rfc9111 = 'https://www.rfc-editor.org/rfc/rfc9111.html';
const itilLicensed = 'https://nh.lochoice.com/WCR/WCRContentDirectory/16678/ITIL-213_7.00_ENG_QWR_IFO_SW.pdf';

const records = [
  [5286, ['106'], [], ['ITIL v3', 'CMS', 'SKMS', 'gestión del conocimiento', 'pregunta histórica'], [
    ref(itilLicensed, 'Material formativo ITIL Foundation con material de AXELOS reproducido bajo licencia (2015), sección Service Transition: el diagrama de relación CMS/SKMS identifica literalmente al CMS como parte del SKMS.'),
    ref('https://kite.kerala.gov.in/KITE/itsadmin/uploads/docs/10.pdf', 'ITIL v3 Foundation Sample Paper A, respuestas razonadas del Chief Examiner/Official Accreditor: indica que el CMS forma parte del SKMS; se cita como comprobación histórica de la clave.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 106: gestión de servicios TIC y bases conceptuales de ITIL.'),
    ref(academyItil, 'ITIC Academy, bloque ITIL y COBIT, edición 2026: el material revisa versiones actuales y trata preguntas v2/v3 como contenido histórico; no sustituye las guías de edición.')
  ], null, 'La respuesta B es correcta únicamente en el marco de ITIL v3: el CMS (Configuration Management System) es un componente del SKMS (Service Knowledge Management System), que integra más información y conocimiento de servicio. Se conserva como contenido histórico porque el enunciado pregunta expresamente por ITIL v3; no se presenta como descripción de la terminología de ITIL 4 ni se fuerza una correspondencia A2, cuyo programa no contiene un epígrafe específico de ITIL/gestión de servicios.', 'historica'],
  [5287, ['118'], ['IV-8'], ['Ethernet', 'puente', 'bridge', 'capa de enlace', 'MAC', 'IEEE 802.1Q'], [
    ref(bridge, 'IEEE 802.1Q-2022, estándar activo de Bridges and Bridged Networks: especifica la operación de MAC Bridges y redes puenteadas que interconectan LAN.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 118: redes LAN y dispositivos de interconexión.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema IV.8: redes locales y dispositivos de interconexión.'),
    ref(academyNetworks, 'ITIC Academy, bloque 42 «Redes», edición 2026.1, apartados de redes LAN, arquitectura IEEE 802 y dispositivos de interconexión; cotejo de cobertura, no fuente normativa.')
  ], null, 'La respuesta B (puente o bridge) es correcta: opera en la capa de enlace y conecta segmentos/redes LAN mediante reenvío de tramas; en Ethernet aprende y utiliza direcciones MAC. Un repetidor opera en la capa física, mientras que un router encamina paquetes entre redes a nivel de red. La especificación IEEE 802.1Q vigente describe MAC Bridges y redes puenteadas.', 'vigente'],
  [5288, ['108'], ['IV-7'], ['USB 2.0', 'NRZI', 'codificación de línea', 'transmisión digital', 'bit stuffing'], [
    ref(usb, 'USB-IF, especificación USB 2.0, sección 7.1.8 (NRZI encoding): para la codificación USB, el bit 1 se representa sin cambio de nivel y el bit 0 mediante un cambio; la página enlaza la especificación base y su revisión publicada en 2025.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 108: redes de telecomunicaciones y medios/procedimientos de transmisión.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema IV.7: medios de transmisión y parámetros significativos.'),
    ref(academyNetworks, 'ITIC Academy, bloque 42 «Redes», edición 2026.1, apartado de medios y técnicas de transmisión: cotejo del encaje general; el documento no se usa como fuente de la convención NRZI específica de USB.')
  ], null, 'Se sustituye el reactivo original porque no tenía una respuesta universalmente válida: distintas convenciones NRZI asignan la transición al 1 o al 0. En USB 2.0, la sección 7.1.8 fija expresamente 1 = sin transición y 0 = transición; por ello, la nueva clave es B. El bit stuffing de USB inserta un cero tras seis unos consecutivos para asegurar una transición. No se generaliza esta convención a todos los protocolos NRZI.', 'corregida'],
  [5289, ['118'], ['IV-8'], ['Ethernet', 'switch', 'conmutador', 'autonegociación', 'velocidad', 'dúplex'], [
    ref(ieeeAuto, 'IEEE 802.3 Interpretation 02/07/05, cláusulas 37 y 40.5.1: la autonegociación permite a PHYs en ambos extremos anunciar capacidades (velocidad, tipo de PHY y dúplex) y seleccionar el modo de funcionamiento común.'),
    ref(ciscoSwitch, 'Cisco, Troubleshoot LAN Switching Environments: explica que, cuando está disponible y habilitada, la autonegociación Ethernet intercambia automáticamente capacidades de velocidad y dúplex del enlace.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 118: redes de área local y dispositivos de interconexión.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema IV.8: redes locales, transmisión y dispositivos de interconexión.'),
    ref(academyNetworks, 'ITIC Academy, bloque 42 «Redes», edición 2026.1, apartados 4 (LAN/Ethernet), 5 (interconexión) y administración: cotejo curricular.')
  ], null, 'La clave prevista es B, pero el enunciado original generalizaba que cualquier switch adapta siempre la velocidad. Se acota a un puerto con autonegociación habilitada: los PHYs de ambos extremos anuncian sus capacidades y acuerdan un modo común. La negociación se realiza por enlace/puerto; si está deshabilitada o mal configurada en un extremo, no debe suponerse ese comportamiento.', 'corregida'],
  [5290, ['109'], ['III-12', 'IV-13'], ['navegador', 'caché HTTP', 'recursos web', 'imágenes', 'cookies'], [
    ref(rfc9111, 'IETF RFC 9111, HTTP Caching, sección 6: describe el almacenamiento en caché de imágenes y otros recursos de páginas por algunos navegadores, y distingue caché de mecanismos de historial; no prescribe si el almacenamiento físico es RAM o disco.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 109: red Internet y servicios básicos.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema IV.13: arquitectura de Internet y servicios; el tema III.12 cubre aplicaciones web.'),
    ref(academyNetworks, 'ITIC Academy, bloque 42 «Redes», edición 2026.1, apartado de Internet y servicios (A2 IV.13): encaje curricular general.'),
    ref(academyWeb, 'ITIC Academy, bloque 30 «Tecnologías de sistemas de información», edición 2026.1, desarrollo web y aplicaciones (A2 III.12): encaje del navegador y recursos web; el detalle de caché se contrasta con RFC 9111.')
  ], null, 'Se pregunta por el mecanismo lógico del navegador, no por el soporte físico en que se guardan los datos: la caché puede residir en memoria o en almacenamiento persistente. RFC 9111 distingue cachés HTTP de mecanismos de historial y señala que algunos navegadores almacenan imágenes y otros recursos de página. Una cookie contiene datos de estado asociados al usuario y no es el repositorio ordinario de los archivos de imagen.', 'corregida']
];

const edits = {
  5287: {
    texto: '¿Qué dispositivo de interconexión opera en la capa de enlace de datos (capa 2 OSI) para conectar segmentos de una LAN mediante el reenvío de tramas?',
    comentarios: 'La respuesta B (puente o bridge) es correcta: opera en la capa de enlace y conecta segmentos/redes LAN mediante reenvío de tramas; en Ethernet aprende y utiliza direcciones MAC. Un repetidor opera en la capa física, mientras que un router encamina paquetes entre redes a nivel de red. La especificación IEEE 802.1Q vigente describe MAC Bridges y redes puenteadas.'
  },
  5288: {
    texto: 'En la codificación NRZI definida para USB 2.0, ¿qué valor de bit provoca una transición de nivel?',
    opciones: [
      'El bit 1 provoca una transición y el bit 0 mantiene el nivel.',
      'El bit 0 provoca una transición y el bit 1 mantiene el nivel.',
      'Ambos valores provocan una transición en cada intervalo de bit.',
      'Ninguno provoca transiciones; estas solo se producen entre bytes.'
    ],
    respuesta_correcta: 1,
    comentarios: 'Se sustituye el reactivo original porque no tenía una respuesta universalmente válida: distintas convenciones NRZI asignan la transición al 1 o al 0. En USB 2.0, la sección 7.1.8 fija expresamente 1 = sin transición y 0 = transición; por ello, la nueva clave es B. El bit stuffing de USB inserta un cero tras seis unos consecutivos para asegurar una transición. No se generaliza esta convención a todos los protocolos NRZI.'
  },
  5289: {
    texto: 'En un conmutador Ethernet con autonegociación habilitada en cada puerto, ¿qué comportamiento es correcto?',
    opcion: [1, 'Cada puerto negocia con el extremo conectado el modo común compatible de velocidad y dúplex.'],
    comentarios: 'La clave prevista es B, pero el enunciado original generalizaba que cualquier switch adapta siempre la velocidad. Se acota a un puerto con autonegociación habilitada: los PHYs de ambos extremos anuncian sus capacidades y acuerdan un modo común. La negociación se realiza por enlace/puerto; si está deshabilitada o mal configurada en un extremo, no debe suponerse ese comportamiento.'
  },
  5290: {
    texto: '¿Qué mecanismo lógico del navegador permite reutilizar temporalmente recursos web descargados, como las imágenes de una página?',
    opciones: [
      'El historial de navegación.',
      'La caché del navegador (caché HTTP para recursos cacheables).',
      'Una cookie de sesión.',
      'El servidor DNS local.'
    ],
    respuesta_correcta: 1,
    comentarios: 'Se pregunta por el mecanismo lógico del navegador, no por el soporte físico en que se guardan los datos: la caché puede residir en memoria o en almacenamiento persistente. RFC 9111 distingue cachés HTTP de mecanismos de historial y señala que algunos navegadores almacenan imágenes y otros recursos de página. Una cookie contiene datos de estado asociados al usuario y no es el repositorio ordinario de los archivos de imagen.'
  }
};

if (!fs.existsSync(path.join(__dirname, 'cambios-lote-993.json'))) {
  aplicar({ numero: '993', fecha: '2026-11-12', records, edits });
}

// Añade el cotejo de temario Academy después de la revisión técnica, conservando el
// original, el registro inicial y una instantánea posterior trazable por pregunta.
const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-993.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  5286: ['ITIC Academy, bloque ITIL y COBIT, edición 2026: la actualización sitúa las versiones actuales como referencia formativa y conserva ITIL v2/v3 como historia; cotejo con A1-106. No se fuerza tema A2.', 'El reactivo dice explícitamente ITIL v3, por lo que se conserva como conocimiento histórico de versión y no se generaliza a ITIL 4.'],
  5287: ['ITIC Academy, bloque 42 «Redes», edición 2026.1, temas A1-118/A2-IV.8: LAN, IEEE 802 y dispositivos de interconexión.', 'Cotejo curricular del bridge con LAN e interconexión; la definición técnica de IEEE 802.1Q prevalece para la respuesta.'],
  5288: ['ITIC Academy, bloque 42 «Redes», edición 2026.1, A1-108/A2-IV.7: medios y técnicas de transmisión digital.', 'La academia da encaje general de transmisión; no se atribuye al temario una convención NRZI concreta. USB-IF fija la codificación específica de USB 2.0.'],
  5289: ['ITIC Academy, bloque 42 «Redes», edición 2026.1, temas A1-118/A2-IV.8: Ethernet/LAN, transmisión y dispositivos de interconexión.', 'El alcance se limita a puertos con autonegociación habilitada; el material curricular orienta el encaje, mientras IEEE define la negociación del enlace.'],
  5290: ['ITIC Academy, bloque 42 «Redes», edición 2026.1 (A1-109/A2-IV.13), y bloque 30 «Tecnologías de sistemas de información» (A2-III.12): Internet/servicios y aplicaciones web.', 'El cotejo curricular cubre Internet y aplicaciones web; el comportamiento de cachés y su distinción del historial se comprueba en RFC 9111, no se presume del temario.']
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
console.log('Lote 993 enriquecido con cotejo curricular y trazabilidad de las cinco preguntas.');
