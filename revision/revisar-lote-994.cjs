const aplicar = require('./aplicar-lote.cjs');
const fs = require('node:fs');
const path = require('node:path');
const ref = (url, referencia) => ({ url, referencia });

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academyNetworks = 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const rfc1035 = 'https://www.rfc-editor.org/rfc/rfc1035.html';
const x200 = 'https://www.itu.int/rec/T-REC-X.200-199407-I/en';
const fttx = 'https://www.itu.int/en/itu-d/technology/documents/ruralcommunications/broadband_situations_in_rural_and_remote_areas_full.pdf';
const idslCisco = 'https://www.cisco.com/c/en/us/td/docs/routers/access/800/802/software/configuration/guide/10368_01.pdf';
const atm = 'https://www.itu.int/ITU-T/recommendations/rec.aspx?id=4561';

const records = [
  [5291, ['109'], ['IV-13'], ['DNS', 'registros de recursos', 'SOA', 'NS', 'CNAME', 'MX'], [
    ref(rfc1035, 'IETF RFC 1035, Domain Implementation and Specification: define el formato de los registros de recursos DNS y los tipos SOA, NS, CNAME y MX.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 109: Internet y servicios básicos.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema IV.13: arquitectura, principios de funcionamiento y servicios de Internet.'),
    ref(academyNetworks, 'ITIC Academy, bloque 42 «Redes», edición 2026.1: arquitectura de Internet y servicios de red; cotejo curricular.')
  ], null, 'La respuesta C es correcta: SOA, NS, CNAME y MX son tipos de registros de recursos del sistema de nombres de dominio (DNS). La pregunta especifica tipos de RR para evitar que SOA se confunda con «Service-Oriented Architecture» (arquitectura orientada a servicios).', 'vigente'],
  [5292, ['108'], ['IV-8'], ['ITU-T X.200', 'modelo de referencia OSI', 'arquitectura por capas', 'ISO/IEC 7498-1'], [
    ref(x200, 'ITU-T Recommendation X.200 (07/1994), Information technology—Open Systems Interconnection—Basic Reference Model: the basic model; la ficha ITU indica que está en vigor y es idéntica a ISO/IEC 7498-1:1994.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 108: conceptos y protocolos de redes de telecomunicaciones.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema IV.8: redes, protocolos y técnicas de transmisión.'),
    ref(academyNetworks, 'ITIC Academy, bloque 42 «Redes», edición 2026.1, apartado 1.2: modelos de referencia OSI y TCP/IP.')
  ], null, 'La respuesta D es correcta cuando «arquitectura de niveles» se refiere al modelo básico de referencia OSI: ITU-T X.200 (idéntica a ISO/IEC 7498-1) define la arquitectura por capas. X.400 trata sistemas de manejo de mensajes, X.500 servicios/directorio y la serie I.200 corresponde a aspectos de ISDN.', 'vigente'],
  [5293, ['108', '110'], ['IV-7', 'IV-10'], ['FTTx', 'FTTB', 'FTTH', 'FTTC', 'FTTN', 'fibra óptica', 'red de acceso'], [
    ref('https://www.itu.int/epublications/publication/itu-t-j-1-2024-01-terms-definitions-and-acronyms-for-television-and-sound-transmission-and-integrated-broadband-cable-networks', 'ITU-T J.1 (01/2024), glosario: FTTB = Fibre To The Building, FTTH = Fibre To The Home y FTTx es una familia según el punto final de la fibra.'),
    ref(fttx, 'ITU-D, Broadband situations in rural and remote areas, §5.3.1: distingue FTTH, FTTB, FTTC y FTTN por el punto donde termina la fibra/ONU; en FTTB esta puede atender a varios abonados desde el edificio.'),
    ref(a1, 'Convocatoria A1 GSI 2025, temas 108 (infraestructuras de acceso) y 110 (cableado e interconexión).'),
    ref(a2, 'Convocatoria A2 GSI 2025, temas IV.7 (medios de transmisión/cableado) y IV.10 (redes de área extensa).'),
    ref(academyNetworks, 'ITIC Academy, bloque 42 «Redes», edición 2026.1, apartados de fibra y redes de acceso óptico.')
  ], null, 'El reactivo original tenía más de una descripción problemática: la opción atribuida a FTTB describía un punto intermedio cercano, y FTTW («Fiber To The WiFi») no es una categoría FTTx normalizada por ITU-T. Se sustituye por una pregunta inequívoca sobre FTTB: la fibra alcanza el edificio (por ejemplo, un punto común/ONU en el sótano) y la distribución a abonados puede continuar por cableado existente. No se atribuye a FTTB un único cableado interior.', 'corregida'],
  [5294, ['108'], ['IV-10'], ['IDSL', 'ISDN Digital Subscriber Line', 'DSL simétrica', '144 kbit/s', 'tecnología histórica'], [
    ref(idslCisco, 'Cisco, manual de configuración de los routers 802/804 IDSL: el equipo IDSL ofrece conexión digital por línea ISDN con tasas de hasta 144 kbit/s.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 108: infraestructuras de acceso y medios de transmisión.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema IV.10: tecnologías y redes de área extensa.'),
    ref(academyNetworks, 'ITIC Academy, bloque 42 «Redes», edición 2026.1, tecnologías xDSL y acceso de banda ancha; cotejo general, sin presentar IDSL como tecnología de despliegue actual.')
  ], null, 'El original daba por absoluta una distancia máxima de 5,5 km, que depende de condiciones de línea/equipos y no es una propiedad universal. Se acota el reactivo a la característica histórica documentada por Cisco: IDSL ofrece conexión de datos siempre activa, simétrica y de hasta 144 kbit/s; no es ADSL asimétrica ni una línea telefónica de voz convencional. Se conserva como tecnología heredada, no como recomendación de acceso actual.', 'historica'],
  [5295, ['113'], ['IV-10'], ['ATM', 'celdas', 'ITU-T I.361', 'cabecera', 'campo de información', 'red de transporte'], [
    ref(atm, 'ITU-T I.361, B-ISDN ATM layer specification, edición 02/1999: ficha de recomendaciones indica estado «In force»; §2.1 define la celda de 5 octetos de cabecera más 48 octetos de información, 53 en total.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 113: redes de transporte/agregación y ATM.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema IV.10: redes de área extensa y tecnologías de transporte; ATM no aparece nombrada expresamente en el epígrafe A2 vigente.'),
    ref(academyNetworks, 'ITIC Academy, bloque 42 «Redes», edición 2026.1: contenido A1-113 identifica ATM entre tecnologías de agregación; el tema A2-IV.10 se coteja solo como contexto general WAN.')
  ], null, 'La respuesta C es correcta: la celda ATM tiene 53 octetos en total, compuestos por cabecera de 5 octetos y campo de información de 48 octetos. Se especifica la recomendación I.361 para dejar claro que se pregunta por el formato normalizado de ATM, aunque esta tecnología sea heredada; el programa A1 todavía la cita expresamente en el tema 113.', 'vigente']
];

const edits = {
  5291: {
    texto: 'Los registros de recursos de tipo SOA, NS, CNAME y MX pertenecen al sistema de nombres de dominio. ¿A qué servicio corresponden?',
    comentarios: 'La respuesta C es correcta: SOA, NS, CNAME y MX son tipos de registros de recursos del sistema de nombres de dominio (DNS). La pregunta especifica tipos de RR para evitar que SOA se confunda con «Service-Oriented Architecture» (arquitectura orientada a servicios).'
  },
  5292: {
    texto: '¿Qué Recomendación de la ITU-T define el modelo básico de referencia OSI, organizado en capas?',
    comentarios: 'La respuesta D es correcta cuando «arquitectura de niveles» se refiere al modelo básico de referencia OSI: ITU-T X.200 (idéntica a ISO/IEC 7498-1) define la arquitectura por capas. X.400 trata sistemas de manejo de mensajes, X.500 servicios/directorio y la serie I.200 corresponde a aspectos de ISDN.'
  },
  5293: {
    texto: 'En una arquitectura de acceso de fibra FTTx, ¿qué describe FTTB (Fibre To The Building)?',
    opciones: [
      'La fibra llega hasta la vivienda del abonado; la unidad óptica termina en sus instalaciones (FTTH).',
      'La fibra llega al edificio, donde puede terminar en un punto común que da servicio a varios abonados; el tramo final puede usar el cableado del inmueble.',
      'La fibra termina en una acera o armario y el tramo restante llega al edificio (FTTC/FTTCab).',
      'La fibra termina en un nodo de barrio y desde allí continúa otra red de acceso (FTTN).'
    ],
    respuesta_correcta: 1,
    comentarios: 'El reactivo original tenía más de una descripción problemática: la opción atribuida a FTTB describía un punto intermedio cercano, y FTTW («Fiber To The WiFi») no es una categoría FTTx normalizada por ITU-T. Se sustituye por una pregunta inequívoca sobre FTTB: la fibra alcanza el edificio (por ejemplo, un punto común/ONU en el sótano) y la distribución a abonados puede continuar por cableado existente. No se atribuye a FTTB un único cableado interior.'
  },
  5294: {
    texto: 'Según la documentación de los routers Cisco 802/804 IDSL, ¿cuál es la tasa de línea máxima admitida?',
    opciones: [
      '64 kbit/s.',
      '144 kbit/s.',
      '256 kbit/s.',
      '1,5 Mbit/s.'
    ],
    respuesta_correcta: 1,
    comentarios: 'El original afirmaba una distancia máxima absoluta de 5,5 km, que depende de condiciones de línea y equipos y no queda fijada como límite universal por la documentación consultada. Se reemplaza por un dato preciso y limitado a los modelos nombrados: el manual Cisco de 802/804 IDSL indica tasas de línea de hasta 144 kbit/s. Se conserva como pregunta histórica sobre equipos IDSL, no como recomendación de acceso actual.'
  },
  5295: {
    texto: 'Según ITU-T I.361, ¿cuál es la longitud total de una celda ATM clásica, incluida su cabecera?',
    comentarios: 'La respuesta C es correcta: la celda ATM tiene 53 octetos en total, compuestos por cabecera de 5 octetos y campo de información de 48 octetos. Se especifica la recomendación I.361 para dejar claro que se pregunta por el formato normalizado de ATM, aunque esta tecnología sea heredada; el programa A1 todavía la cita expresamente en el tema 113.'
  }
};

if (!fs.existsSync(path.join(__dirname, 'cambios-lote-994.json'))) {
  aplicar({ numero: '994', fecha: '2026-11-12', records, edits });
}

const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-994.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  5291: ['ITIC Academy, bloque 42 «Redes», edición 2026.1, apartado de Internet y servicios básicos (A1-109/A2-IV.13): DNS como servicio de Internet.', 'Cotejo de encaje con Internet/servicios; los tipos de RR se verifican en IETF RFC 1035.'],
  5292: ['ITIC Academy, bloque 42 «Redes», edición 2026.1, apartado 1.2 (OSI/TCP-IP) y contenidos oficiales A1-108/A2-IV.8.', 'El temario sitúa OSI entre modelos de referencia de redes; la vigencia y el alcance de X.200 se comprueban en la ficha ITU-T.'],
  5293: ['ITIC Academy, bloque 42 «Redes», edición 2026.1, fibra y redes de acceso (A1-108/A1-110; A2-IV.7/IV.10).', 'Se elimina FTTW y se corrige FTTB mediante las categorías de acceso FTTx de ITU; el documento de academia sirve para cotejo curricular, no para fijar nomenclatura normativa.'],
  5294: ['ITIC Academy, bloque 42 «Redes», edición 2026.1, tecnologías xDSL/acceso (A1-108/A2-IV.10).', 'IDSL se registra como tecnología heredada; el cotejo curricular del bloque no se interpreta como recomendación de despliegue vigente. El límite indicado queda restringido a los modelos Cisco 802/804 documentados.'],
  5295: ['ITIC Academy, bloque 42 «Redes», edición 2026.1, apartado A1-113, que enumera ATM entre tecnologías de agregación; A2-IV.10 solo ofrece encaje general WAN.', 'El programa A1 conserva ATM explícitamente. El formato de celda y la vigencia de I.361 se verifican en ITU-T; no se atribuye a Academy la autoridad normativa.']
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
console.log('Lote 994 enriquecido con cotejo curricular y trazabilidad de las cinco preguntas.');

// Mantiene la pregunta IDSL ceñida a una magnitud que confirma directamente el
// manual primario del fabricante, sin inferir una distancia máxima universal.
{
  const q = bank.preguntas.find(x => x.id === 5294), change = log.cambios.find(x => x.id === 5294);
  q.texto = edits[5294].texto;
  q.opciones = edits[5294].opciones;
  q.respuesta_correcta = edits[5294].respuesta_correcta;
  q.comentarios = edits[5294].comentarios;
  q.revision.fuentes = q.revision.fuentes.filter(x => !x.url.includes('elhacker.info'));
  change.actualizada = structuredClone(q);
  let replaced = 0;
  const current = fs.readFileSync(bankPath, 'utf8').replace(/^    \{[\s\S]*?^    \}/gm, block => {
    const old = JSON.parse(block);
    if (old.id !== 5294) return block;
    replaced++;
    return JSON.stringify(q, null, 2).split('\n').map(line => `    ${line}`).join('\n');
  });
  if (replaced !== 1) throw new Error(`Se esperaba actualizar una pregunta IDSL; encontradas ${replaced}`);
  JSON.parse(current);
  fs.writeFileSync(bankPath, current);
  fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
}
