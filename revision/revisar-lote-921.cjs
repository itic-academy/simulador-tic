const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const boeA1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const boeA2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academyNetworks = 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const academyGovernance = 'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk';
const academyProtocols = 'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk';
const academyWeb = 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk';
const academyWireless = 'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk';
const academyDb = 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk';
const ituV34 = 'https://www.itu.int/rec/T-REC-V.34/en';
const cobit5 = 'https://asa.gov.eg/Attach/306_COBIT5Enabling.pdf';
const cobit5Introduction = 'https://www.itgi.jp/application/files/3715/4987/5514/2_lainhart.pdf';
const rfc9113 = 'https://www.rfc-editor.org/rfc/rfc9113.html';
const rfc9218 = 'https://www.rfc-editor.org/rfc/rfc9218.html';
const zwaveAlliance = 'https://z-wavealliance.org/technology-overview/';
const zwaveSpecs = 'https://z-wavealliance.org/development-resources-overview/specification-for-developers/';
const ibmIntegrity = 'https://www.ibm.com/docs/en/db2-for-zos/12.0.0?topic=constraints-referential';

const records = [
  [4926, ['112'], ['IV-7'], ['módem', 'modulación', 'demodulación', 'banda vocal', 'señal portadora'], [
    { url: ituV34, referencia: 'UIT-T Recomendación V.34, vigente para módems que operan sobre la red telefónica conmutada general y circuitos telefónicos de dos hilos: especifica la modulación de la señal portadora y la transmisión de datos por el canal telefónico. El enunciado se restringe a esta clase de módem analógico, evitando generalizar sus funciones a todo equipo llamado módem.' },
    { url: boeA1, referencia: 'Convocatoria A1 GSI 2025, tema 112: tecnologías de acceso guiadas e inalámbricas.' },
    { url: boeA2, referencia: 'Convocatoria A2 GSI AGE 2025, tema IV.7: medios de transmisión guiados y no guiados y parámetros significativos.' }
  ], null,
  'Respuesta C. Para un módem de banda vocal conforme a la familia UIT-T V.34, los datos digitales se codifican sobre una señal portadora modulada que puede atravesar el canal telefónico; el extremo receptor demodula la señal y recupera los datos. No todos los equipos denominados módem se limitan a esa función, ni es correcto afirmar que toda portadora o señal moduladora sea siempre analógica en cualquier tecnología y medio.', 'corregida'],
  [4927, ['106'], [], ['COBIT 5', 'gobierno de TI', 'EDM', 'Evaluar', 'Dirigir', 'Supervisar'], [
    { url: cobit5, referencia: 'ISACA, COBIT 5: Enabling Processes, modelo de referencia de procesos: el dominio de gobierno incluye cinco procesos; en cada uno se definen prácticas EDM (Evaluate, Direct and Monitor). La pregunta se limita de forma expresa a COBIT 5, y no mezcla sus dominios con los cuatro dominios de gestión.' },
    { url: cobit5Introduction, referencia: 'ISACA/ITGI, COBIT 5 Introduction: divide gobierno y gestión; el gobierno contiene cinco procesos EDM y la gestión se agrupa en APO, BAI, DSS y MEA.' },
    { url: boeA1, referencia: 'Convocatoria A1 GSI 2025, tema 106: planificación y control TIC, gestión del valor y bases conceptuales de COBIT.' }
  ], null,
  'Respuesta A. COBIT 5 distingue el dominio de gobierno, con cinco procesos EDM (Evaluar, Dirigir y Supervisar/Monitorizar), de los cuatro dominios de gestión APO, BAI, DSS y MEA. Se concreta el nombre de la versión porque la estructura del marco evolucionó en COBIT 2019; no se presenta esta lista versionada como el modelo actual sin especificar.', 'corregida'],
  [4928, ['65'], ['III-12'], ['HTTP', 'HTTP/2', 'RFC 9113', 'multiplexación', 'streams', 'frames'], [
    { url: rfc9113, referencia: 'IETF RFC 9113, HTTP/2, secciones 4 y 5: el protocolo usa framing binario y permite mantener múltiples streams concurrentes en una conexión; los extremos pueden intercalar frames de diferentes streams.' },
    { url: rfc9218, referencia: 'IETF RFC 9218: define señalización extensible de prioridad para HTTP/2 y HTTP/3; se evita usar la antigua opción absoluta de que HTTP/2 no permite priorizar peticiones, pues el esquema original de RFC 7540 fue deprecado y existe señalización posterior.' },
    { url: boeA1, referencia: 'Convocatoria A1 GSI 2025, tema 65: arquitectura de desarrollo web, cliente/servidor e interconexión de sistemas.' },
    { url: boeA2, referencia: 'Convocatoria A2 GSI AGE 2025, tema III.12: aplicaciones web y protocolos de servicios web.' }
  ], null,
  'Respuesta C. HTTP/2 multiplexa streams independientes sobre una conexión: las tramas de varios streams pueden intercalarse. Su framing es binario, no una optimización de mensajes de texto. La afirmación antigua sobre prioridades se evita: la señalización de prioridades de RFC 7540 fue deprecada por RFC 9113 y existe el mecanismo extensible de RFC 9218.', 'corregida'],
  [4929, ['112', '117'], ['IV-7', 'IV-11', 'IV-13'], ['Z-Wave', 'domótica', 'IoT', 'sub-GHz', '100 kb/s', 'Z-Wave Alliance'], [
    { url: zwaveAlliance, referencia: 'Z-Wave Alliance, Technology Overview: define Z-Wave como tecnología de radio de baja potencia para control/estado residencial; indica banda sub-1 GHz, malla y tasas de datos de hasta 100 kb/s. El reactivo se ancla a esa especificación del Alliance.' },
    { url: zwaveSpecs, referencia: 'Z-Wave Alliance, paquete de especificaciones en vigor y calendario de versiones: especificaciones técnicas mantenidas y versionadas por la alianza.' },
    { url: boeA1, referencia: 'Convocatoria A1 GSI 2025, temas 112 (acceso inalámbrico) y 117 (IoT y ciudades inteligentes).' },
    { url: boeA2, referencia: 'Convocatoria A2 GSI AGE 2025, temas IV.7 (medios inalámbricos), IV.11 (redes inalámbricas) y IV.13 (Internet de las Cosas).' }
  ], null,
  'Respuesta B. Según la ficha técnica de Z-Wave Alliance, la tecnología admite tasas de datos de hasta 100 kb/s y opera en bandas sub-1 GHz; la ficha también caracteriza su red como mallada. Se sustituye «todas son falsas», porque la afirmación de alcance interior de 90 m no puede evaluarse de forma universal sin versión, dispositivo, obstáculos y condiciones de radio. El máximo de 424 kb/s de la pregunta original no corresponde al máximo indicado por la Alliance.', 'corregida'],
  [4930, ['64'], ['II-5', 'III-4'], ['bases de datos', 'modelo relacional', 'integridad de entidad', 'integridad referencial', 'clave primaria', 'clave foránea'], [
    { url: ibmIntegrity, referencia: 'IBM Db2 for z/OS, integridad referencial y de entidad: la entidad exige una clave que identifique de forma única cada fila; la integridad referencial exige que los valores no nulos de una clave foránea coincidan con una clave de la tabla referenciada.' },
    { url: boeA1, referencia: 'Convocatoria A1 GSI 2025, tema 64: modelo relacional y SQL.' },
    { url: boeA2, referencia: 'Convocatoria A2 GSI AGE 2025, temas II.5 (SGBD relacionales) y III.4 (modelo lógico relacional y diseño de bases de datos).' }
  ], null,
  'Respuesta B. En la formulación clásica de las reglas básicas de integridad relacional se distinguen integridad de entidad (la clave primaria identifica de manera única cada fila y no admite nulos) e integridad referencial (las referencias mediante claves foráneas deben ser válidas). Los SGBD ofrecen además otras restricciones, como dominios, NOT NULL y CHECK, por lo que el enunciado queda limitado explícitamente a las dos reglas clásicas.', 'corregida']
];

const edits = {
  4926: {
    texto: 'En un módem de banda vocal que transmite datos por una línea telefónica analógica, ¿cómo se transportan los datos digitales por el canal?',
    opciones: [
      'Se envían como una señal digital sin modulación, aunque el canal solo admita una señal analógica.',
      'El módem se limita a corregir errores y no realiza modulación ni demodulación.',
      'Los datos digitales se representan mediante una portadora modulada para transmitirlos por el canal; el receptor demodula la señal para recuperar los datos.',
      'La señal portadora siempre es digital, con independencia del medio de transmisión.'
    ],
    respuesta_correcta: 2
  },
  4927: {
    texto: 'En el modelo de procesos de COBIT 5, ¿qué caracteriza al dominio de gobierno de las TI?',
    opciones: [
      'Incluye cinco procesos de gobierno con prácticas de Evaluar, Dirigir y Supervisar (EDM).',
      'Incluye cuatro dominios de gestión: APO, BAI, DSS y MEA.',
      'Incluye cinco dominios de gestión y cuatro procesos EDM.',
      'Incluye cuatro procesos de gobierno y cinco dominios de gestión.'
    ],
    respuesta_correcta: 0
  },
  4928: {
    texto: '¿Qué propiedad de HTTP/2 permite atender varias peticiones concurrentes mediante una misma conexión?',
    opciones: [
      'Transporta todos los mensajes como texto optimizado, sin estructura de tramas.',
      'Es incompatible con la semántica de HTTP/1.1.',
      'Multiplexa varios streams y puede intercalar sus tramas en la conexión.',
      'Solo permite una petición activa por conexión.'
    ],
    respuesta_correcta: 2
  },
  4929: {
    texto: 'Según la descripción técnica de Z-Wave Alliance, ¿cuál es la tasa de datos máxima que admite Z-Wave?',
    opciones: [
      'Hasta 424 kb/s.',
      'Hasta 100 kb/s.',
      'Hasta 1 Mb/s.',
      'Hasta 10 Mb/s.'
    ],
    respuesta_correcta: 1
  },
  4930: {
    texto: 'En la formulación clásica, ¿qué dos reglas básicas de integridad se distinguen en una base de datos relacional?',
    opciones: [
      'La integridad de las claves ajenas, como única regla.',
      'La integridad de entidad y la integridad referencial.',
      'La integridad referente a las claves, sin distinguir reglas.',
      'Las restricciones de usuario y la prohibición de claves primarias nulas.'
    ],
    respuesta_correcta: 1
  }
};

aplicar({ numero: '921', fecha: '2026-11-11', records, edits });

const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-921.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  4926: [academyNetworks, 'ITIC Academy 2026, bloque 42 «Redes»: coteja el alcance curricular de medios de transmisión y señalización; la pregunta se acota al módem de banda vocal y se contrasta con UIT-T V.34.'],
  4927: [academyGovernance, 'ITIC Academy 2026, bloque 41 «ITIL y COBIT»: cubre A1-106 y explica COBIT 5/2019, diferenciando el gobierno EDM de los dominios de gestión. La cifra de procesos COBIT 5 se verifica en la guía original de ISACA.'],
  4928: [academyProtocols, 'ITIC Academy 2026, bloque 43 «Protocolos»: describe HTTP/2 sobre TCP y la multiplexación de streams. La semántica exacta de frames se verifica con RFC 9113.'],
  4929: [academyWireless, 'ITIC Academy 2026, bloque 46 «Redes inalámbricas»: compara Z-Wave, bandas, tasas de datos y usos de domótica; se usa para cotejo curricular, y las especificaciones se comprueban con Z-Wave Alliance.'],
  4930: [academyDb, 'ITIC Academy 2026, bloque 29 «Bases de Datos», A1-63/64 y A2-T5/D4/C2: distingue explícitamente integridad de entidad y referencial, claves primarias y foráneas.']
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const [url, detail] = academy[change.id];
  q.clasificacion.bloque_academia = `${detail} El material se cita como cotejo curricular, no como fuente primaria de la respuesta.`;
  q.clasificacion.nota = `${q.revision.estado}. Cotejo ITIC Academy: ${detail} Fuentes técnicas primarias y alcance están documentados en el registro del lote.`;
  q.revision.observaciones += ` ${detail}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url, referencia: `ITIC Academy: ${detail}` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo ITIC Academy añadido al lote 921.');
