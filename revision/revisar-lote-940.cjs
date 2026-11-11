const aplicar = require('./aplicar-lote.cjs');
const ref = (url, referencia) => ({url, referencia});
const law39 = 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565';
const rd203 = 'https://www.boe.es/buscar/act.php?id=BOE-A-2021-5032';
const oldHap = 'https://www.boe.es/buscar/act.php?id=BOE-A-2012-9931';
const pcm = 'https://www.boe.es/buscar/act.php?id=BOE-A-2021-20479';
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy03 = 'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk';
const academy30 = 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk';
const academy43 = 'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk';
const academy48 = 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk';
const irs = 'https://www.irs.gov/irm/part2/irm_02-005-012';
const itu704 = 'https://www.itu.int/ITU-T/recommendations/rec.aspx?rec=4515';
const rfc3393 = 'https://www.rfc-editor.org/rfc/rfc3393.html';
const rfc4120 = 'https://www.rfc-editor.org/rfc/rfc4120.html';
const inapKey = 'https://sede.inap.gob.es/documents/59312/1753372/PlantillaDefinitivaEj1.pdf/8986bcb5-75ae-f3ae-ea15-eb5bf0c2c841';

const records = [
 [5021, ['8'], ['I-8'], ['Ley 39/2015','potestad reglamentaria','artículo 128'], [
   ref(law39, 'Ley 39/2015, texto consolidado BOE, art. 128.1: atribuye el ejercicio de la potestad reglamentaria al Gobierno de la Nación, a los órganos de Gobierno de las comunidades autónomas y a los órganos de gobierno locales.'),
   ref(a1, 'Convocatoria oficial A1 GSI 2025, anexo I, tema 8: régimen jurídico de las Administraciones públicas y procedimiento administrativo.'),
   ref(a2, 'Convocatoria oficial A2 GSI 2025, anexo IX, tema I.8: Leyes 39/2015 y 40/2015 y TREBEP.'),
   ref(academy03, 'ITIC Academy, bloque 03 «Actuación administrativa y administración digital», actualización 2026.2 (01/10/2026): fuentes del Derecho administrativo, reglamentos y procedimiento; cotejo curricular.')
 ], null, 'Respuesta D, delimitada al art. 128.1 de la Ley 39/2015. Se corrigen «postedad» y la expresión confusa «asambleas parlamentarias del gobierno»; se especifica que la pregunta busca quién no figura entre los órganos enumerados en ese apartado. La respuesta no niega que las cámaras parlamentarias aprueben normas ni prejuzga potestades de autoorganización.', 'corregida'],
 [5022, ['93'], ['III-5'], ['pseudocódigo','algoritmos','diseño de software'], [
   ref(irs, 'Internal Revenue Manual, 2.5.12, Design Techniques and Deliverables: describe pseudocode como un esquema de la intención del código en lenguaje no perteneciente a un lenguaje de programación, similar a inglés estructurado.'),
   ref(a1, 'Convocatoria oficial A1 GSI 2025, anexo I, tema 93: técnicas de diseño de software.'),
   ref(a2, 'Convocatoria oficial A2 GSI 2025, anexo IX, tema III.5: estrategias de diseño de algoritmos.'),
   ref(academy30, 'ITIC Academy, bloque 30 «Tecnologías de sistemas de la información», versión 2026.1 (31/08/2026): cotejo general con los epígrafes de lenguajes y paradigmas de programación; no se localizó una explicación específica de pseudocódigo en la búsqueda de Drive.')
 ], null, 'Respuesta D. El pseudocódigo expresa de forma textual y de alto nivel la lógica de un algoritmo, sin ajustarse estrictamente a la sintaxis ejecutable de un lenguaje. No es código defectuoso ni código pendiente de depuración o ejecución. Se corrige la tilde de «Descripción» y se concreta la definición.', 'corregida'],
 [5023, ['108'], ['IV-8'], ['conmutación de paquetes','multiplexación estadística','retardo variable','TDM'], [
   ref(itu704, 'UIT-T G.704: especifica estructuras de trama síncronas y la acomodación de canales en ranuras temporales; sustenta la distinción frente a asignación estadística por demanda.'),
   ref(rfc3393, 'IETF RFC 3393, IP Packet Delay Variation Metric: define la variación del retardo de paquetes como diferencia entre retardos unidireccionales; respalda que la demora observada en redes de paquetes puede variar.'),
   ref(a1, 'Convocatoria oficial A1 GSI 2025, anexo I, tema 108: conmutación de circuitos y paquetes y calidad de servicio.'),
   ref(a2, 'Convocatoria oficial A2 GSI 2025, anexo IX, tema IV.8: redes locales, técnicas de transmisión y métodos de acceso.'),
   ref(academy43, 'ITIC Academy, bloque 43 «Protocolos», versión 2026.1 (29/09/2026): redes de transporte, conmutación y QoS; cotejo curricular, no fuente técnica primaria.')
 ], null, 'Respuesta D tras precisar el alcance como multiplexación estadística (asíncrona) de tráfico en paquetes. A, B y C se descartan: no describen el reparto estadístico por demanda; la TDM síncrona reserva ranuras periódicas, mientras que la estadística sirve ranuras según tráfico activo y puede introducir espera en cola, por lo que el retardo es variable. Se rehace C para evitar la formulación original, que podía interpretarse como una propiedad cierta de la TDM síncrona y dejaba más de una respuesta defendible.', 'corregida'],
 [5024, ['22'], ['I-9'], ['REA','Registro Electrónico de Apoderamientos','Orden HAP/1637/2012','pregunta ambigua'], [
   ref(oldHap, 'Orden HAP/1637/2012, texto consolidado BOE, art. 9.1, 9.3 y 9.4: la adhesión inicial se efectuaba mediante resolución publicada en el BOE; nuevas incorporaciones se realizaban electrónicamente y debían acompañarse de una nueva resolución; la sede del organismo publicaba la relación actualizada.'),
   ref(inapKey, 'INAP, Plantilla definitiva del primer ejercicio de las XXII pruebas selectivas de Gestión de Sistemas e Informática: marca como respuesta la opción A.'),
   ref(pcm, 'Orden PCM/1384/2021, BOE, disposición derogatoria: deroga la Orden HAP/1637/2012 desde el 12/12/2021; sirve para advertir que el reactivo versa sobre un régimen histórico.'),
   ref(rd203, 'Real Decreto 203/2021, texto consolidado BOE, art. 33: marco reglamentario actual del REA-AGE, interoperabilidad con registros particulares y supuestos de inscripción.'),
   ref(law39, 'Ley 39/2015, texto consolidado BOE, art. 6: régimen legal de los registros electrónicos de apoderamientos.'),
   ref(a1, 'Convocatoria oficial A1 GSI 2025, anexo I, tema 22: calidad, TIC en servicios públicos y administración digital.'),
   ref(a2, 'Convocatoria oficial A2 GSI 2025, anexo IX, tema I.9: herramientas de administración electrónica y procedimiento.'),
   ref(academy03, 'ITIC Academy, bloque 03 «Actuación administrativa y administración digital», actualización 2026.2 (01/10/2026): cotejo curricular del marco legal y los registros electrónicos.')
 ], null, 'PENDIENTE DE AMBIGÜEDAD: la plantilla definitiva del INAP señala A, pero el art. 9.1 de la Orden HAP/1637/2012 exigía publicar en el BOE una resolución de adhesión y no describe un acuerdo electrónico firmado con alta simultánea de trámites como afirma A. La opción B tampoco reproduce con precisión el art. 9.3: este exigía incorporación electrónica acompañada de una nueva resolución, mientras el art. 9.4 mandaba publicar en la sede la relación y resaltar las incorporaciones; no decía que hubiera que «publicar una Resolución oficial» por el cauce formulado. C contradice expresamente el art. 9.5 y D contradice el máximo de cinco años del art. 9.2.c. Por tanto, se conserva la clave histórica oficial A solo como dato de la plantilla, pero no se certifica que ninguna opción sea jurídicamente correcta según la norma citada: el reactivo queda sin resolución verificable. Además, la Orden HAP/1637/2012 fue derogada con efectos de 12/12/2021; el régimen actual se recoge en la Orden PCM/1384/2021, el RD 203/2021 y el art. 6 de la Ley 39/2015.', 'pendiente_ambiguedad'],
 [5025, ['125'], ['IV-12'], ['Kerberos','autenticación','Single Sign-On','tickets'], [
   ref(rfc4120, 'IETF RFC 4120, Kerberos V5: protocolo de autenticación basado en credenciales y tickets de servicio; un ticket y clave de sesión permiten autenticar al cliente frente al servicio sin volver a enviar la contraseña.'),
   ref(a1, 'Convocatoria oficial A1 GSI 2025, anexo I, tema 125: seguridad en redes y técnicas criptográficas.'),
   ref(a2, 'Convocatoria oficial A2 GSI 2025, anexo IX, tema IV.12: seguridad en redes y protocolos seguros.'),
   ref(academy48, 'ITIC Academy, bloque 48 «Seguridad en redes y en el nivel de aplicación», versión 2026.1 (30/09/2026): Kerberos e intercambio de tickets en el apartado de autenticación; cotejo curricular.'),
   ref('https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk', 'ITIC Academy, bloque 50 «Videoconferencia, SSO y trabajo colaborativo», actualización 2026: el tema A1-131 incluye Single Sign-On y gestión de identidades; cotejo curricular.')
 ], null, 'Respuesta A: Kerberos. RFC 4120 especifica la autenticación Kerberos V5 mediante tickets para servicios y claves de sesión. SAML y OpenID son familias de protocolos/federación de identidad, y STORK fue un proyecto europeo de interoperabilidad de identidades; no son el sistema de autenticación de tickets al que alude el enunciado. La pregunta se conserva sin cambios.', 'vigente']
];
const edits = {
  5021: {
    texto: 'Según el artículo 128.1 de la Ley 39/2015, ¿cuál de los siguientes órganos no figura entre los titulares del ejercicio de la potestad reglamentaria que ese apartado enumera?',
    opciones: {3: 'Las Cortes Generales y las Asambleas Legislativas de las Comunidades Autónomas, en cuanto órganos legislativos.'}
  },
  5022: {
    opciones: {3: 'Una representación textual, informal y de alto nivel de la lógica de un algoritmo, independiente de la sintaxis estricta de un lenguaje de programación.'}
  },
  5023: {
    texto: 'En la multiplexación estadística (asíncrona) del tráfico en una red de paquetes, ¿qué característica puede observarse?',
    opciones: {2: 'Se reserva a cada dispositivo una ranura fija y periódica, incluso cuando no tiene datos que transmitir.'}
  }
};
// aplicar-lote accepts a single option pair; expand edits after constructing the payload.
for (const [id, edit] of Object.entries(edits)) {
  if (edit.opciones) { edit.opcion = Object.entries(edit.opciones).map(([i,t])=>[Number(i),t]); delete edit.opciones; }
}
// The shared applier supports one option per question, so 5021 and 5023 are handled in the post-apply verifier below via a dedicated patch only if needed.
const applierEdits = Object.fromEntries(Object.entries(edits).map(([id,e])=>[id,{texto:e.texto, ...(e.opcion?.length===1?{opcion:e.opcion[0]}:{})}]));
// Keep this lot atomic while applying multiple option edits by temporarily patching the shared helper's emitted objects.
const originalApply = aplicar;
// Extend helper behavior locally: apply the records without edits, then exact text/option edits are represented in records using the helper's supported one-option path.
const helperEdits = {...applierEdits, 5021:{texto:edits[5021].texto,opcion:[3,edits[5021].opcion[0][1]]},5022:{opcion:[3,edits[5022].opcion[0][1]]},5023:{texto:edits[5023].texto,opcion:[2,edits[5023].opcion[0][1]]}};
originalApply({numero:'940',fecha:'2026-11-11',records,edits:helperEdits});
