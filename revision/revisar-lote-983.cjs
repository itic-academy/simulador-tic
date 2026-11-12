const aplicar = require('./aplicar-lote.cjs');
const fs = require('node:fs');
const path = require('node:path');

const ref = (url, referencia) => ({ url, referencia });
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const ce = 'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229';
const b01 = 'https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk';
const b48 = 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk';
const b50 = 'https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk';
const guide = 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A8e88a7d3-296b-4ebe-b1ea-9b45f3dbaee4/Guia-de-Comuincacion-Digital_2014-06-26_.pdf';

const records = [
  [5236, ['125'], ['IV-5'], ['phishing', 'suplantación', 'ingeniería social', 'credenciales'], [
    ref('https://www.cisa.gov/sites/default/files/2025-03/Phishing%20Guidance%20-%20Stopping%20the%20Attack%20Cycle%20at%20Phase%20One%20508.pdf', 'CISA, Phishing Guidance: define campañas que buscan credenciales como aquellas en que actores maliciosos se hacen pasar por fuentes fiables para inducir a revelar credenciales; contempla supervisores, compañeros y personal TI, no sólo organizaciones.'),
    ref('https://www.cisa.gov/sites/default/files/2023-02/phishing-infographic-508c.pdf', 'CISA, Phishing infographic: describe el phishing como ingeniería social por correo, SMS o llamada que induce a entregar información sensible/credenciales o ejecutar acciones maliciosas.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 125: seguridad de redes, amenazas/ataques y medidas preventivas.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema IV.5: seguridad de los sistemas de información y redes.'),
    ref(b48, 'ITIC Academy, bloque 48 «Seguridad en redes y aplicación», actualización 2026.1, §2.3: ingeniería social y phishing mediante suplantación de entidades/personas de confianza para robar credenciales o instalar malware.')
  ], null, 'El phishing es una modalidad de ingeniería social en la que el atacante suplanta o aparenta ser una fuente de confianza para inducir a la víctima a revelar información, entregar credenciales o realizar una acción. No se limita a organizaciones ni exclusivamente a contraseñas: también puede usar personas, SMS, llamadas, enlaces o adjuntos maliciosos. Se conserva la opción que identifica la suplantación, pero se amplía para que la definición no sea innecesariamente estrecha.', 'corregida'],
  [5237, ['133'], [], ['Guía de Comunicación Digital AGE', 'Facebook', 'imagen de perfil', 'miniatura', 'dimensiones históricas'], [
    ref(guide, 'Administración General del Estado, Guía de Comunicación Digital, fascículo «Imagen institucional», apartado 2.10.3, pp. 24–25: para Facebook indica perfil de 200 × 200 píxeles y miniatura/avatar de 50 × 50. La pregunta queda expresamente limitada a esa edición de la guía; no describe dimensiones actuales de Facebook.'),
    ref('https://travesia.mcu.es/server/api/core/bitstreams/75ce3092-a7c9-45a8-9ec8-028981e7c687/content', 'Copia de consulta del documento de la Guía de Comunicación Digital AGE: sección «Imagen del perfil» diferencia las medidas de Twitter (128 × 128, miniatura 48 × 48) de Facebook (200 × 200, miniatura 50 × 50). Se usa para corroborar el texto de la edición histórica.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 133: redes sociales y Guía de comunicación digital de la Administración del Estado.'),
    ref(b50, 'ITIC Academy, bloque 50 «Videoconferencia, SSO y trabajo colaborativo», actualización 2026.1: cotejo curricular de A1-133, redes sociales y Guía de Comunicación Digital; no se presenta la medida histórica como requisito actual de la plataforma.')
  ], null, 'Según la edición citada de la Guía de Comunicación Digital AGE, Facebook recomendaba un perfil de 200 × 200 px y una miniatura/avatar de 50 × 50 px. La cifra es una especificación histórica del documento, no una recomendación vigente de Meta ni una obligación legal general. El enunciado se acota a esa fuente y edición para evitar convertir una medida de plataforma cambiante en un dato atemporal. El programa A2 no contiene un epígrafe específico de redes sociales o de esta guía, por lo que no se fuerza una clasificación A2.', 'historica'],
  [5238, ['1'], ['I-1'], ['Constitución Española', 'artículo 1', 'valores superiores', 'pluralismo político'], [
    ref(ce, 'Constitución Española, artículo 1.1, texto consolidado del BOE: enumera como valores superiores la libertad, la justicia, la igualdad y el pluralismo político.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 1: Constitución Española, principios constitucionales y derechos fundamentales.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema I.1: Constitución Española de 1978.'),
    ref(b01, 'ITIC Academy, bloque 01 «Constitución Española», versión accesible en Drive: artículo 1 y valores superiores del ordenamiento; se contrasta la enumeración literal con el BOE.')
  ], null, 'El artículo 1.1 de la Constitución enumera cuatro valores superiores del ordenamiento jurídico: libertad, justicia, igualdad y pluralismo político. «Estado social y democrático de Derecho» describe el tipo de Estado en que se constituye España, no sustituye la lista de valores; «pluralismo jurídico» tampoco es el término constitucional.', 'vigente'],
  [5239, ['3'], ['I-1'], ['Constitución Española', 'artículo 149.1.6', 'legislación procesal', 'competencias Estado-CCAA'], [
    ref(ce, 'Constitución Española, artículo 149.1.6.ª, texto consolidado BOE: atribuye al Estado la legislación procesal, salvo las necesarias especialidades derivadas de las particularidades del Derecho sustantivo de las comunidades autónomas.'),
    ref('https://www.boe.es/buscar/doc.php?id=BOE-A-2023-24509', 'Tribunal Constitucional, STC 146/2023, FJ 3: interpreta la salvedad procesal autonómica como limitada a especialidades necesarias conectadas directamente con particularidades del Derecho sustantivo autonómico.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 3: Constitución, organización territorial, comunidades autónomas y Administración local.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema I.1: Constitución Española de 1978.'),
    ref(b01, 'ITIC Academy, bloque 01 «Constitución Española», versión accesible en Drive: distribución constitucional de competencias (arts. 148–149); la excepción de legislación procesal se comprueba en el texto constitucional y jurisprudencia constitucional.')
  ], null, 'El Estado tiene atribuida la legislación procesal por el art. 149.1.6.ª CE, pero la respuesta no debe entenderse como competencia absolutamente exenta de matices: el propio precepto permite a las comunidades autónomas las necesarias especialidades procesales que se deriven de particularidades de su Derecho sustantivo. Ordenación territorial, urbanismo, caza y asistencia social no son, como materias generales, títulos estatales exclusivos enumerados aquí.', 'corregida'],
  [5240, ['3'], ['I-1'], ['Constitución Española', 'artículo 149.3', 'supletoriedad', 'competencias Estado-CCAA'], [
    ref(ce, 'Constitución Española, artículo 149.3, texto consolidado BOE: su inciso final dice literalmente que el Derecho estatal será «en todo caso» supletorio del Derecho de las comunidades autónomas.'),
    ref('https://hj.tribunalconstitucional.es/es-ES/Resolucion/Show/3170', 'Tribunal Constitucional, STC 118/1996, FFJJ 6–8: la supletoriedad del art. 149.3 no es título competencial ni cláusula universal para legislar; corresponde al aplicador determinar si procede integrar una laguna con normas estatales válidamente dictadas.'),
    ref('https://www.boe.es/diario_boe/txt.php?id=BOE-A-2021-6614', 'Tribunal Constitucional, STC 68/2021, FJ 6: reitera que la cláusula no permite al Estado colmar sin más cualquier falta de regulación autonómica y que no habilita legislación estatal sin título competencial específico.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 3: Constitución y comunidades autónomas.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema I.1: Constitución Española de 1978.'),
    ref(b01, 'ITIC Academy, bloque 01 «Constitución Española», versión accesible en Drive: arts. 148–149 y reglas de distribución competencial; el alcance interpretativo se completa con la doctrina del Tribunal Constitucional.')
  ], null, '«En todo caso» reproduce literalmente el inciso final del art. 149.3 CE y es la respuesta al ejercicio textual. No significa que el Estado tenga competencia para legislar en cualquier materia ni que toda laguna autonómica se cubra automáticamente por una norma estatal: la STC 118/1996 explica que la supletoriedad no es un título competencial y que el aplicador determina su eventual uso respecto de normas estatales válidamente dictadas.', 'vigente']
];

const edits = {
  5236: {
    texto: '¿Qué describe mejor un ataque de phishing?',
    opciones: [
      'La falsificación técnica de la dirección IP de origen, sin interacción con la víctima.',
      'La suplantación o apariencia de una fuente de confianza —por ejemplo, una organización o persona— para inducir a revelar información o credenciales, o a realizar una acción maliciosa.',
      'La captura pasiva de tráfico de red para obtener credenciales, sin engañar ni contactar a la víctima.',
      'Ninguna de las anteriores.'
    ],
    respuesta_correcta: 1,
    comentarios: 'El phishing es ingeniería social que suplanta una fuente de confianza para engañar a la víctima y obtener información/credenciales o provocar una acción. Puede llegar por correo, SMS o llamada; no es sinónimo de suplantación de IP ni de escucha pasiva de red.'
  },
  5237: {
    texto: 'Según la edición de la Guía de Comunicación Digital de la AGE citada en la pregunta, ¿qué dimensiones indicaba para la imagen de perfil de Facebook y su miniatura/avatar?',
    comentarios: 'La guía AGE citada indicaba históricamente 200 × 200 píxeles para la imagen de perfil de Facebook y 50 × 50 para la miniatura/avatar. Son cifras de esa edición, no especificaciones actuales de Facebook/Meta.'
  },
  5238: {
    comentarios: 'El art. 1.1 CE enumera libertad, justicia, igualdad y pluralismo político como valores superiores del ordenamiento jurídico. «Estado social y democrático de Derecho» es la forma en que España se constituye, no la lista de valores.'
  },
  5239: {
    texto: 'Conforme al artículo 149.1.6.ª de la Constitución, ¿qué materia se atribuye al Estado, con la salvedad que el propio precepto establece?',
    opciones: [
      'La legislación procesal, sin perjuicio de las necesarias especialidades que se deriven de las particularidades del Derecho sustantivo de las comunidades autónomas.',
      'La ordenación del territorio, el urbanismo y la vivienda en todo el territorio nacional.',
      'La caza como competencia exclusiva estatal en todas las comunidades autónomas.',
      'La asistencia social como competencia exclusiva estatal.'
    ],
    comentarios: 'El art. 149.1.6.ª CE atribuye al Estado la legislación procesal, salvo las necesarias especialidades derivadas de particularidades del Derecho sustantivo autonómico. La salvedad no es una habilitación autonómica general para dictar cualquier regla procesal: el TC exige conexión y necesidad.'
  },
  5240: {
    comentarios: 'El inciso final del art. 149.3 CE dice literalmente «en todo caso». La supletoriedad no crea por sí sola competencia estatal ni hace que toda laguna autonómica se cubra automáticamente: véase STC 118/1996, FFJJ 6–8.'
  }
};

if (!fs.existsSync(path.join(__dirname, 'cambios-lote-983.json'))) {
  aplicar({ numero: '983', fecha: '2026-11-12', records, edits });
}

// El lote requiere que cada pregunta tenga un cotejo curricular individual y trazable.
const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-983.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  5236: ['ITIC Academy, bloque 48 «Seguridad en redes y aplicación», actualización 2026.1, §2.3: phishing como ingeniería social y suplantación de fuentes de confianza para robar credenciales o inducir a instalar malware.', 'Cotejo directo A1-125/A2-IV.5; el programa y el material aportan ámbito curricular, y la definición se contrasta con CISA.'],
  5237: ['ITIC Academy, bloque 50 «Videoconferencia, SSO y trabajo colaborativo», actualización 2026.1: recoge A1-133 (redes sociales y Guía de Comunicación Digital AGE); la pregunta se limita a dimensiones que consignaba la edición histórica de la Guía.', 'A1-133 directo. El programa A2 no tiene epígrafe específico de redes sociales/Guía AGE; A2 se deja vacío en lugar de forzar una correspondencia. Las dimensiones no describen la plataforma vigente.'],
  5238: ['ITIC Academy, bloque 01 «Constitución Española», versión accesible en Drive: principios constitucionales/artículo 1; la enumeración literal de los valores superiores se comprueba en el BOE.', 'Cotejo A1-1/A2-I.1, Constitución Española.'],
  5239: ['ITIC Academy, bloque 01 «Constitución Española», versión accesible en Drive: distribución de competencias entre Estado y comunidades autónomas (arts. 148–149); el supuesto procesal y su salvedad se contrastan con CE/TC.', 'Cotejo A1-3/A2-I.1, organización territorial y Constitución; el tema general A2 no separa el inciso del art. 149.1.6.'],
  5240: ['ITIC Academy, bloque 01 «Constitución Española», versión accesible en Drive: distribución competencial y art. 149; se añade la doctrina de la STC 118/1996 para no equiparar la frase constitucional a un título competencial.', 'Cotejo A1-3/A2-I.1, Constitución y comunidades autónomas.']
};
const reason = 'Cotejo curricular individual con los programas oficiales A1/A2 de 2025 y los materiales ITIC Academy accesibles en Drive.';
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
console.log('Lote 983 enriquecido con cotejo curricular y trazabilidad de las cinco preguntas.');
