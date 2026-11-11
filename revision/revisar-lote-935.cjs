const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const ituDef = 'https://www.itu.int/rec/T-REC-Y.Sup37-201604-I';
const ituKpi = 'https://www.itu.int/rec/T-REC-L.1600-201606-I';
const ituGuide = 'https://www.itu.int/epublications/publication/guiding-principles-and-frameworks-for-people-centred-smart-cities-in-the-ai-era';
const sara = 'https://administracionelectronica.gob.es/ctt/verPestanaGeneral.htm?idIniciativa=redsara';
const tetraDesign = 'https://www.etsi.org/deliver/etsi_en/300300_300399/30039201/01.06.00_20/en_30039201v010600a.pdf';
const tetraAir = 'https://www.etsi.org/deliver/etsi_en/300300_300399/30039202/02.03.02_60/en_30039202v020302p.pdf';
const tetraTrunk = 'https://tcca.info/tetra/for-tetra-specialist/etsi-standards/';
const tetraTeds = 'https://tcca.info/tetra/data-and-scada/';
const nist = 'https://csrc.nist.gov/glossary/term/stateful_inspection';
const nist80041 = 'https://csrc.nist.gov/pubs/sp/800/41/r1/final';
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academyCities = 'https://drive.google.com/file/d/1w3UwQPDtDE9GXacSYNUGUcO6KirAQ8xf/view?usp=drivesdk';
const academyNetworks = 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const academyWireless = 'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk';
const academySecurity = 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk';
const ref = (url, referencia) => ({ url, referencia });

const records = [
  [4996, ['117'], [], ['ciudades inteligentes', 'smart city', 'UIT', 'ITU', 'gobernanza'], [
    ref(ituDef, 'ITU-T Supplement 37 (04/2016), estado «In force»: define smart sustainable city como ciudad innovadora que usa TIC y otros medios para mejorar calidad de vida, operaciones/servicios urbanos y competitividad, con sostenibilidad intergeneracional; no enumera el conjunto de cuatro componentes de las opciones.'),
    ref(ituKpi, 'ITU-T Y.4900/L.1600 (06/2016), definición y marco de indicadores de ciudades inteligentes sostenibles; no respalda la taxonomía de cuatro componentes citada por el reactivo.'),
    ref(ituGuide, 'Guía ITU 2026 sobre ciudades inteligentes centradas en las personas: aclara que no prescribe un único modelo de ciudad inteligente.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, anexo I, tema 117: transformación digital, Industria 4.0, ciudades inteligentes e IoT.'),
    ref(academyCities, 'ITIC Academy, bloque «Transformación digital, Industria 4.0, ciudades inteligentes e IoT», versión 2026.1 (29/09/2026), § 3.1 «Definición y dimensiones». Cotejo curricular: el bloque trata el tema, pero no se ha localizado en él ni en las fuentes ITU consultadas la lista exacta de cuatro elementos del reactivo.')
  ], null, 'Pendiente de fuente, no de respuesta automática: la clave original señala D, pero las publicaciones oficiales ITU consultadas definen la ciudad inteligente sostenible y sus indicadores sin prescribir esos cuatro componentes como una lista única. Además, el original expandía ITU erróneamente como «International Telecommunications Association»; el nombre correcto es International Telecommunication Union (UIT en español). Se corrige solo esa expansión y se conserva la clave original sin certificarla hasta localizar la fuente concreta del modelo.', 'pendiente_fuente'],
  [4997, ['120'], ['I-10'], ['Red SARA', 'interconexión administrativa', 'servicios comunes'], [
    ref(sara, 'PAe-CTT, ficha oficial Red SARA en producción: define expresamente la red como conjunto de infraestructuras de comunicaciones y servicios básicos que conecta las redes de las Administraciones Públicas españolas e instituciones europeas para intercambio de información y acceso a servicios.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, anexo I, tema 120: redes públicas de transmisión de datos, Red SARA y red sTESTA.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, anexo IX, I.10: cooperación interadministrativa electrónica, infraestructuras/servicios comunes y plataformas de interconexión de redes.'),
    ref(academyNetworks, 'ITIC Academy, bloque 42 «Redes», versión 2026.1 (29/09/2026), epígrafe A1-120: Red SARA y sTESTA; cotejo curricular.')
  ], null, 'Respuesta D: Red SARA. La descripción del enunciado coincide casi literalmente con la ficha vigente del PAe-CTT. Red IRIS es la red académica y de investigación; SIR es el Sistema de Interconexión de Registros e INSIDE un sistema de información documental, por lo que no identifican esta infraestructura de comunicaciones.', 'vigente'],
  [4998, ['114', '123'], ['IV-11', 'IV-15'], ['TETRA', 'PMR', 'radio digital', 'banda estrecha', 'SDS', 'datos en paquete'], [
    ref(tetraDesign, 'ETSI EN 300 392-1, TETRA Voice plus Data (V+D), diseño general: especifica voz en modo circuito, transferencia de datos, servicio de mensajes cortos y soporte de datos en paquetes.'),
    ref(tetraAir, 'ETSI EN 300 392-2, interfaz radio TETRA: define la interfaz de aire, canales de control y asignación de canales de tráfico.'),
    ref(tetraTeds, 'TCCA, datos y SCADA: diferencia las capacidades de datos de TETRA base y la evolución TEDS, que ofrece velocidades superiores (datos de velocidad media/alta en la familia ampliada).'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, anexo I, tema 114: redes inalámbricas, características, modos y protocolos.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, anexo IX, IV.11: redes inalámbricas, protocolos y características funcionales y técnicas.'),
    ref(academyWireless, 'ITIC Academy, bloque «Redes inalámbricas y comunicaciones móviles», versión 2026.1 (30/09/2026), § 10.3: TETRA como radio digital PMR y trunking.')
  ], null, 'Respuesta D, precisada para el TETRA V+D básico: es radio profesional digital de banda estrecha que soporta voz, Short Data Service (SDS) y datos en paquetes de capacidad limitada. No se debe generalizar esta limitación a toda la familia TETRA: TEDS amplía las velocidades de datos y explica por qué el enunciado original, sin acotar la variante, podía confundir banda estrecha y banda ancha.', 'corregida'],
  [4999, ['114', '123'], ['IV-11', 'IV-15'], ['TETRA', 'trunking', 'asignación dinámica', 'canal de control'], [
    ref(tetraAir, 'ETSI EN 300 392-2, interfaz radio TETRA: describe los mensajes de señalización y asignación de canales de tráfico a terminales.'),
    ref(tetraDesign, 'ETSI EN 300 392-1, diseño de red TETRA V+D, describe funcionamiento troncal y asignación de canales de tráfico.'),
    ref(tetraTrunk, 'TCCA, descripción técnica de trunking: asignación automática y dinámica de un número reducido de canales de comunicación compartidos por muchos usuarios mediante señalización/control.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, anexo I, tema 114: redes inalámbricas, técnicas y modos de operación.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, anexo IX, IV.11: redes inalámbricas, protocolos, acceso y modos de operación.'),
    ref(academyWireless, 'ITIC Academy, bloque «Redes inalámbricas y comunicaciones móviles», versión 2026.1 (30/09/2026), § 10.3: trunking TETRA como compartición dinámica de canales entre usuarios.')
  ], null, 'Respuesta A, formulada con precisión: en modo troncal, la infraestructura asigna automáticamente un canal de tráfico disponible a la llamada mediante señalización; el conjunto de canales se comparte dinámicamente entre usuarios. No es el terminal quien escanea el espectro para elegir la frecuencia con mejor recepción ni se requiere selección manual.', 'corregida'],
  [5000, ['125'], ['IV-12'], ['cortafuegos', 'firewall', 'inspección de estado', 'stateful inspection', 'seguridad perimetral'], [
    ref(nist, 'NIST CSRC Glossary, Stateful Inspection: filtrado de paquetes que también sigue el estado de las conexiones y bloquea paquetes que se apartan del estado esperado.'),
    ref(nist80041, 'NIST SP 800-41 Rev. 1, Guidelines on Firewalls and Firewall Policy: distingue inspección con estado del filtrado sin estado y describe el seguimiento de conexiones.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, anexo I, tema 125: seguridad en redes, cortafuegos y prevención de ataques.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, anexo IX, IV.12: seguridad en redes y seguridad perimetral.'),
    ref(academySecurity, 'ITIC Academy, bloque «Seguridad en redes y en el nivel de aplicación», versión 2026.1 (30/09/2026), § 5.1: un firewall stateful mantiene tabla de conexiones y acepta paquetes acordes con sesiones legítimas; cotejo curricular.')
  ], null, 'Respuesta B. Se reescriben el enunciado y la opción para reflejar la propiedad específica de la inspección de estado: mantener el estado de las conexiones y bloquear paquetes que no encajan con el estado esperado. La formulación original decía inspeccionar los paquetes y su posición en una serie, pero omitía el seguimiento de conexiones; además, no es una propiedad de todo cortafuegos, sino de los que implementan stateful inspection.', 'corregida']
];

const edits = {
  4996: { texto: 'De acuerdo con la UIT (Unión Internacional de Telecomunicaciones; ITU en inglés), ¿qué aspectos deben comprender las ciudades inteligentes?' },
  4998: { texto: 'En relación con el sistema TETRA V+D básico (sin las ampliaciones de datos de banda ancha como TEDS), seleccione la afirmación verdadera:', opcion: [3, 'Es un sistema digital de comunicaciones móviles profesionales (PMR) de banda estrecha que permite transmitir voz, mensajes cortos y datos en modo paquete a velocidad limitada.'] },
  4999: { opcion: [0, 'La infraestructura asigna automáticamente a cada llamada un canal de tráfico disponible mediante señalización; el conjunto de canales se comparte dinámicamente entre usuarios.'] },
  5000: { texto: '¿Qué característica define la inspección de estado (stateful inspection) en un cortafuegos?', opcion: [1, 'El firewall mantiene el estado de las conexiones y bloquea los paquetes que se desvían del estado esperado.'] }
};

aplicar({ numero: '935', fecha: '2026-11-11', records, edits });

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-935.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  4996: 'ITIC Academy, bloque «Transformación digital, Industria 4.0, ciudades inteligentes e IoT», versión 2026.1 (29/09/2026), § 3.1 «Definición y dimensiones»; cotejo temático A1-117. No se localizó allí la lista de cuatro elementos atribuida a ITU.',
  4997: 'ITIC Academy, bloque 42 «Redes», versión 2026.1 (29/09/2026), epígrafe A1-120 sobre Red SARA y sTESTA; cotejo curricular.',
  4998: 'ITIC Academy, bloque «Redes inalámbricas y comunicaciones móviles», versión 2026.1 (30/09/2026), § 10.3 sobre radio PMR y TETRA; cotejo curricular.',
  4999: 'ITIC Academy, bloque «Redes inalámbricas y comunicaciones móviles», versión 2026.1 (30/09/2026), § 10.3 sobre trunking y compartición dinámica de canales; cotejo curricular.',
  5000: 'ITIC Academy, bloque «Seguridad en redes y en el nivel de aplicación», versión 2026.1 (30/09/2026), § 5.1 «Cortafuegos» y subsección de inspección de estado; cotejo curricular.'
};
const academyUrl = id => id === 4996 ? academyCities : id === 4997 ? academyNetworks : [4998, 4999].includes(id) ? academyWireless : academySecurity;
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const detail = academy[change.id];
  q.clasificacion.bloque_academia = detail;
  q.clasificacion.nota = `${q.revision.estado}. ${detail} La academia se usa como cotejo curricular, no como fuente técnica primaria.`;
  q.revision.observaciones += ` ${detail} Cotejo curricular, no sustituto de las fuentes técnicas primarias.`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url: academyUrl(change.id), referencia: detail });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo Academy añadido al lote 935.');
