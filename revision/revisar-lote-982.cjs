const aplicar = require('./aplicar-lote.cjs');
const fs = require('node:fs');
const path = require('node:path');

const ref = (url, referencia) => ({ url, referencia });
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const b42 = 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const b46 = 'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk';
const b48 = 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk';

const records = [
  [5231, ['122'], ['IV-3'], ['X.400', 'MTA', 'Message Transfer Agent', 'correo electrónico'], [
    ref('https://www.itu.int/rec/T-REC-X.411-199906-I/en', 'ITU-T Recommendation X.411 (06/99), sección 3 y §11: el MTA presta el servicio abstracto de transferencia; sus operaciones incluyen transferir mensajes entre agentes.'),
    ref('https://www.itu.int/rec/T-REC-X.400/es', 'ITU-T F.400/X.400 (06/99), recomendación de visión general del sistema y servicio de tratamiento de mensajes (MHS); el componente de transferencia se distingue del agente de usuario y del almacén de mensajes.'),
    ref('https://www.rfc-editor.org/rfc/rfc1615.html', 'IETF RFC 1615, apéndice C: los UA permiten al usuario componer/leer mensajes, los MTA prestan transferencia store-and-forward, los MS actúan como almacén y los AU interconectan MHS con otros medios.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 122: correo electrónico, servicios de mensajería y directorio.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema IV.3: administración de servidores de correo electrónico y sus protocolos.'),
    ref(b42, 'ITIC Academy, bloque 42 «Redes», actualización 2026.1, §9.5: distingue la arquitectura de mensajería X.400 y sus componentes UA, MTA y MS; la función transfer-store-and-forward del MTA se contrasta con ITU-T X.411.')
  ], null, 'Se sustituye la analogía ambigua «se corresponde con un servidor de correo» por la función definida: el MTA (Message Transfer Agent) transfiere y encamina mensajes en el sistema MHS. No es sinónimo de toda la infraestructura ni de una única máquina: el sistema distribuido contiene varios MTAs. UA es el agente de usuario, MS el almacén de mensajes y el gateway interconecta sistemas/medios.' , 'corregida'],
  [5232, ['122'], ['IV-3'], ['ITU-T X.400', 'F.400/X.400', 'MHS', 'mensajería interpersonal'], [
    ref('https://www.itu.int/rec/T-REC-X.400/es', 'ITU-T F.400/X.400 (06/99), estado «En vigor»: visión general del sistema y servicio de tratamiento de mensajes (Message Handling System, MHS). La recomendación incluye los servicios de mensajería interpersonal.'),
    ref('https://www.itu.int/rec/T-REC-X.411-199906-I/en', 'ITU-T X.411 (06/99), estado «In force»: define el Message Transfer System y las operaciones de sus Message Transfer Agents dentro del MHS.'),
    ref('https://www.itu.int/ITU-T/recommendations/rec.aspx?lang=es&rec=4848', 'Base oficial de recomendaciones ITU-T, F.400/X.400 (06/1999): objeto y estado vigente de la recomendación.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 122: correo electrónico y servicios de mensajería.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema IV.3: servidores de correo y protocolos.'),
    ref(b42, 'ITIC Academy, bloque 42 «Redes», actualización 2026.1, §9.5 «Correo electrónico»: presenta X.400 como arquitectura histórica frente al paradigma Internet SMTP. Se contrasta esa caracterización de uso con el registro oficial ITU, que aún muestra F.400/X.400 (06/99) en vigor; uso extendido y estado formal de una recomendación son cuestiones distintas.')
  ], null, 'X.400 es la serie ITU-T de tratamiento de mensajes (MHS), históricamente utilizada para correo electrónico/mensajería. La opción se amplía para nombrar el sistema con precisión. Aunque es una arquitectura heredada y hoy predomina el correo de Internet basado en SMTP, no se afirma que la recomendación formal esté retirada: ITU-T muestra F.400/X.400 (06/99) en vigor.', 'corregida'],
  [5233, ['123'], ['IV-6'], ['GSM', 'Global System for Mobile communications', 'Groupe Spécial Mobile', 'telefonía móvil'], [
    ref('https://www.etsi.org/deliver/etsi_gts/01/0104/05.00.00_60/gsmts_0104v050000p.pdf', 'ETSI GSM 01.04 v5.0.0 (1996), lista de siglas: GSM = Global System for Mobile communications.'),
    ref('https://www.etsi.org/standards/understanding-standards/', 'ETSI, Understanding standards: presenta GSM como sistema de comunicaciones móviles desarrollado en la normalización europea y como base de una familia evolutiva.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 123: comunicaciones móviles y generaciones de tecnologías de telefonía móvil.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema IV.6: comunicaciones móviles e inalámbricas.'),
    ref(b46, 'ITIC Academy, bloque 46 «Redes inalámbricas y comunicaciones móviles», actualización 2026.1, sección de generaciones móviles: recoge GSM como tecnología 2G y la evolución de las generaciones.')
  ], null, 'La expansión normalizada de GSM es Global System for Mobile communications. En los inicios del proyecto, el grupo europeo de normalización se llamó Groupe Spécial Mobile; esa denominación histórica no es la expansión actual de las siglas del sistema. Se completa la opción para evitar la forma abreviada e imprecisa «Global System Mobile».', 'corregida'],
  [5234, ['123'], ['IV-6'], ['HSDPA', 'HS-DSCH', '3GPP TS 25.308', 'canal compartido descendente'], [
    ref('https://www.etsi.org/deliver/etsi_ts/125300_125399/125308/11.08.00_60/ts_125308v110800p.pdf', 'ETSI/3GPP TS 25.308 v11.8.0 (Release 11), especificación HSDPA: describe operación de HS-DSCH como canal compartido de datos descendente y entidades/procesos HARQ asociados.'),
    ref('https://www.etsi.org/deliver/etsi_ts/125100_125199/125101/06.17.00_60/ts_125101v061700p.pdf', 'ETSI/3GPP TS 25.101, parámetros de canal de referencia HSDPA: recoge QPSK y 16QAM como modulaciones, por lo que «4-QAM» era distractor potencialmente ambiguo por equivalencia matemática con QPSK.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 123: comunicaciones móviles y generaciones de telefonía móvil.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema IV.6: comunicaciones móviles e inalámbricas.'),
    ref(b46, 'ITIC Academy, bloque 46 «Redes inalámbricas y comunicaciones móviles», actualización 2026.1: HSDPA se estudia como evolución 3G; la arquitectura HS-DSCH/HARQ se contrasta con 3GPP/ETSI.')
  ], null, 'Se reformula el reactivo para que tenga una respuesta inequívoca. HS-DSCH es el canal compartido de datos del enlace descendente de HSDPA. El original acumulaba varias propiedades verdaderas (adaptación de enlace y nuevo canal) y podía aceptar más de una opción; además, «4-QAM» puede usarse matemáticamente para la constelación QPSK aunque no sea la forma de enumerar las modulaciones HSDPA de la especificación. La nueva pregunta identifica el canal, no cuál es una propiedad posible.', 'corregida'],
  [5235, ['125', '131'], ['IV-5'], ['SSH', 'Secure Shell', 'acceso remoto', 'confidencialidad', 'Telnet'], [
    ref('https://www.rfc-editor.org/rfc/rfc4251.html', 'IETF RFC 4251, resumen y §1: SSH es un protocolo para inicio de sesión remoto seguro; el protocolo de transporte ofrece autenticación del servidor, confidencialidad e integridad y el de conexión admite shell interactivo.'),
    ref('https://www.rfc-editor.org/rfc/rfc4252.html', 'IETF RFC 4252: especifica autenticación de usuario SSH, ejecutada sobre el transporte seguro de SSH.'),
    ref('https://www.rfc-editor.org/rfc/rfc854.html', 'IETF RFC 854, Telnet Protocol Specification: define el protocolo de terminal virtual en red; no establece la protección criptográfica del canal que ofrece SSH.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 125: seguridad en redes, ataques y medidas preventivas; tema 131, acceso remoto a sistemas corporativos.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema IV.5: seguridad de sistemas, técnicas criptográficas y protocolos seguros.'),
    ref(b48, 'ITIC Academy, bloque 48 «Seguridad en redes y aplicación», actualización 2026.1: SSH (RFC 4251–4254, TCP/22) para acceso remoto, transferencia y túneles cifrados; la seguridad efectiva depende de configurar algoritmos y validar la clave del servidor.')
  ], null, 'SSH (Secure Shell) está diseñado para inicio de sesión remoto y otros servicios seguros sobre una red no confiable. El transporte proporciona autenticación del servidor, confidencialidad e integridad; la autenticación de usuario y el canal de shell interactivo se especifican en componentes relacionados. Para evitar una promesa absoluta, la protección depende de algoritmos seguros y de verificar la clave del servidor; Telnet, consola y puerto auxiliar no son el protocolo de shell remoto cifrado descrito.', 'vigente']
];

const edits = {
  5231: {
    texto: 'En la arquitectura X.400/MHS, ¿qué componente transfiere y encamina los mensajes entre agentes del sistema?',
    opciones: ['UA (User Agent).', 'MTA (Message Transfer Agent).', 'GW (gateway/unidad de acceso).', 'MS (Message Store).'],
    respuesta_correcta: 1
  },
  5232: {
    texto: '¿Qué servicio especifica la serie de recomendaciones ITU-T F.400/X.400?',
    opciones: ['Servicios de directorio X.500.', 'Sistema y servicio de tratamiento de mensajes (MHS), incluido el correo/mensajería interpersonal.', 'Interfaz física serie RS-232.', 'Interfaz de comunicación de paquetes X.25.'],
    respuesta_correcta: 1
  },
  5233: {
    texto: 'En la denominación adoptada para el sistema GSM de telefonía móvil, ¿qué desarrolla la sigla GSM?',
    opciones: ['Group System Mobile.', 'Global System for Mobile communications.', 'Global Special Mobile.', 'Group Special Mobile.'],
    respuesta_correcta: 1
  },
  5234: {
    texto: 'En HSDPA (UMTS), ¿qué canal transporta los datos compartidos de alta velocidad en el enlace descendente?',
    opciones: ['DCH, canal dedicado de transporte.', 'HS-DSCH (High-Speed Downlink Shared Channel).', 'HS-SCCH, canal compartido de control.', 'E-DCH, canal mejorado de enlace ascendente asociado a HSUPA.'],
    respuesta_correcta: 1
  },
  5235: {
    texto: '¿Qué protocolo de acceso remoto ofrece una sesión de shell con transporte cifrado y autenticación del servidor?',
    opciones: ['Telnet.', 'Consola local.', 'Puerto auxiliar.', 'SSH (Secure Shell).'],
    respuesta_correcta: 3
  }
};

if (!fs.existsSync(path.join(__dirname, 'cambios-lote-982.json'))) {
  aplicar({ numero: '982', fecha: '2026-11-12', records, edits });
}

// Añade a la trazabilidad el cotejo individual con los ficheros de Academy de Drive.
const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-982.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  5231: ['ITIC Academy, bloque 42 «Redes», actualización 2026.1, §9.5 «Correo electrónico»: incluye el modelo X.400 y distingue UA, MTA y MS; función de transferencia cotejada con ITU-T X.411.', 'Cotejo A1-122/A2-IV.3. El material califica X.400 como arquitectura histórica; ITU aún muestra F.400/X.400 (06/99) en vigor.'],
  5232: ['ITIC Academy, bloque 42 «Redes», actualización 2026.1, §9.5 «Correo electrónico»: contrapone X.400 y la arquitectura SMTP de Internet. El alcance formal se comprueba en el catálogo ITU-T.', 'Cotejo A1-122/A2-IV.3. Se distingue vigencia formal de la recomendación y prevalencia de SMTP en el correo de Internet.'],
  5233: ['ITIC Academy, bloque 46 «Redes inalámbricas y comunicaciones móviles», actualización 2026.1, apartado de generaciones: GSM se trata como tecnología móvil 2G; expansión de las siglas contrastada con ETSI.', 'Cotejo directo A1-123/A2-IV.6.'],
  5234: ['ITIC Academy, bloque 46 «Redes inalámbricas y comunicaciones móviles», actualización 2026.1, sección de generaciones: cubre HSDPA como evolución 3G; HS-DSCH y HARQ se contrastan con 3GPP/ETSI.', 'Cotejo directo A1-123/A2-IV.6.'],
  5235: ['ITIC Academy, bloque 48 «Seguridad en redes y aplicación», actualización 2026.1: identifica SSH (RFC 4251–4254, TCP/22) para acceso remoto y túneles cifrados; el control de clave del servidor se matiza con el RFC.', 'Cotejo A1-125/A1-131/A2-IV.5 sobre seguridad en redes, acceso remoto y protocolos seguros.']
};
const reason = 'Cotejo curricular individual con los programas oficiales A1/A2 de 2025 y los materiales ITIC Academy accesibles en Drive.';
// Mantén la especificación HSDPA más reciente de las consultadas en lugar de citar sólo Release 5.
const hsdpa = bank.preguntas.find(x => x.id === 5234);
const hsdpaChange = log.cambios.find(x => x.id === 5234);
const hsdpaRef = hsdpa.revision.fuentes.find(x => x.url.includes('/125308/'));
hsdpaRef.url = 'https://www.etsi.org/deliver/etsi_ts/125300_125399/125308/11.08.00_60/ts_125308v110800p.pdf';
hsdpaRef.referencia = 'ETSI/3GPP TS 25.308 v11.8.0 (Release 11), especificación HSDPA: describe operación de HS-DSCH como canal compartido de datos descendente y entidades/procesos HARQ asociados.';
hsdpaChange.actualizada = structuredClone(hsdpa);
for (const [key, [block, note]] of Object.entries(academy)) {
  const id = Number(key);
  const q = bank.preguntas.find(x => x.id === id);
  const change = log.cambios.find(x => x.id === id);
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
  const old = JSON.parse(block);
  const change = byId.get(old.id);
  if (!change) return block;
  replaced++;
  return JSON.stringify(change.actualizada, null, 2).split('\n').map(line => `    ${line}`).join('\n');
});
if (replaced !== 5) throw new Error(`Se esperaban 5 cambios; encontrados ${replaced}`);
JSON.parse(output);
fs.writeFileSync(bankPath, output);
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Lote 982 enriquecido con cotejo curricular y trazabilidad de las cinco preguntas.');
