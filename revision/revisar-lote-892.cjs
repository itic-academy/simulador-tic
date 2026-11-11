const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const nasa = 'https://swehb.nasa.gov/spaces/7150/pages/16449735/SWE-019%2B-%2BSoftware%2BLife%2BCycle';
const itilWorkbook = 'https://www.beformazione.com/wp-content/uploads/2024/08/ITIL-4-Foundation_Learner-Workbook_Digital.pdf';
const itilPeopleCert = 'https://www.peoplecert.org/ITIL-4';
const peopleCertAcquire = 'https://www.peoplecert.org/news-and-announcements/2021/peoplecert-completes-axelos-acquisition';
const itilVersion5 = 'https://www.peoplecert.org/itil-version-5-explained';
const omgIdl = 'https://www.omg.org/spec/IDL/4.2/PDF';
const isoIdl = 'https://www.iso.org/standard/65379.html';
const dcom = 'https://learn.microsoft.com/openspecs/windows_protocols/ms-dcom/86b9cf84-df2e-4f0b-ac22-1b957627e1ca';
const oracleRmi = 'https://docs.oracle.com/en/java/javase/16/docs/specs/rmi/objmodel.html';
const metricMsi = 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Ae15c0c5b-dd9c-4e48-82e3-9e36ba18e839/METRICA_V3_Mantenimiento_de_Sistemas_de_Informacion.pdf';
const academyLifecycle = 'https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view?usp=drivesdk';
const academySystems = 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const academyQuality = 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk';
const academyItil = 'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk';

const fuentes = {
  4781: [
    { url: nasa, referencia: 'NASA Software Engineering Handbook, SWE-019, Standard Incremental Life Cycle: el trabajo avanza en una serie de builds; cada build agrega capacidades a la versión anterior hasta completar el producto. Lo distingue del ciclo evolutivo/iterativo, usado cuando aún no se conocen todos los requisitos.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 86: ciclo de vida y modelos.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.1: concepto, fases y modelos del ciclo de vida.' }
  ],
  4782: [
    { url: itilWorkbook, referencia: 'ITIL 4 Foundation, Learner Workbook oficial (copyright PeopleCert International Ltd.), módulo 2, «Key concepts of service management»: presenta la definición de service como mecanismo para co-crear valor facilitando outcomes sin que el cliente gestione costes y riesgos específicos.' },
    { url: itilPeopleCert, referencia: 'PeopleCert, esquema oficial ITIL: ITIL 4 Foundation permanece disponible y se ofrece la ruta Bridge hacia Version 5; el reactivo queda expresamente acotado a ITIL 4.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 106: bases conceptuales de ITIL y gestión del valor de las TIC.' }
  ],
  4783: [
    { url: omgIdl, referencia: 'OMG Interface Definition Language (IDL) 4.2: lenguaje descriptivo para especificar de forma independiente de plataforma las interfaces y tipos de datos de objetos; no es middleware de ejecución.' },
    { url: isoIdl, referencia: 'ISO/IEC 19516:2020, confirmada en 2025: norma vigente que especifica OMG IDL 4.2 y su uso independiente de lenguaje y plataforma.' },
    { url: dcom, referencia: 'Microsoft Open Specifications, MS-DCOM: el protocolo DCOM expone objetos de aplicación mediante RPC y extiende COM a través de la red.' },
    { url: oracleRmi, referencia: 'Oracle Java SE RMI specification: define la invocación de métodos de interfaces remotas sobre objetos remotos como mecanismo del modelo de objetos distribuidos de Java.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 92: diseño arquitectónico de sistemas.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema II.6: arquitectura cliente-servidor, interoperabilidad de componentes y arquitectura de servicios.' }
  ],
  4784: [
    { url: metricMsi, referencia: 'PAe, MÉTRICA v3, Mantenimiento de Sistemas de Información, pp. 4–5: la tarea MSI 1.1 «Registro de la Petición» crea el Catálogo de Peticiones, medio de comunicación entre usuario/cliente y responsable de mantenimiento.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 101: mantenimiento de sistemas y planificación del mantenimiento.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.8: instalación, cambio y mantenimiento.' }
  ],
  4785: [
    { url: peopleCertAcquire, referencia: 'PeopleCert, comunicado corporativo de 2021: PeopleCert completó la adquisición de AXELOS Limited, empresa que gestionaba la cartera que incluía ITIL.' },
    { url: itilVersion5, referencia: 'PeopleCert, explicación oficial de ITIL (Version 5): confirma que ITIL 4 sigue disponible y que la versión 5 se introduce de forma gradual. Se evita presentar el marco actual como ITIL 4 exclusivamente.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 106: bases conceptuales de ITIL en la gestión de servicios TIC.' }
  ]
};

const records = [
  [4781, ['86'], ['III-1'], ['ciclo de vida', 'desarrollo incremental', 'builds', 'entregas incrementales'], fuentes[4781], null,
    'Respuesta A. En el modelo incremental estándar se construye en una serie de versiones o builds, y cada una añade capacidades a la anterior hasta completar el producto. No debe confundirse con el ciclo iterativo/evolutivo, que puede partir de requisitos aún incompletos o cambiantes; se precisa la distinción y se sustituyen distractores solapados.', 'corregida'],
  [4782, ['106'], [], ['ITIL 4', 'gestión de servicios', 'servicio', 'cocreación de valor', 'outcomes', 'costes y riesgos'], fuentes[4782], null,
    'Respuesta A. En ITIL 4, «servicio» es el medio para facilitar los resultados que el cliente quiere alcanzar y la cocreación de valor, sin que tenga que gestionar determinados costes y riesgos. ITIL 4 sigue disponible aunque PeopleCert haya iniciado la transición a Version 5; el enunciado se identifica explícitamente con ITIL 4 y no se fuerza una correspondencia curricular A2 que el programa no contiene.', 'vigente'],
  [4783, ['92'], ['II-6'], ['CORBA', 'DCOM', 'RMI', 'IDL', 'objetos distribuidos', 'interoperabilidad'], fuentes[4783], null,
    'Respuesta B. DCOM, CORBA y RMI son tecnologías/protocolos o middleware para invocar objetos distribuidos. IDL, en cambio, es un lenguaje descriptivo para declarar interfaces y tipos, independiente de la plataforma; por tanto, no es una tecnología de ejecución equivalente a las otras. Se corrige el error tipográfico y se pregunta por la categoría exacta.', 'corregida'],
  [4784, ['101'], ['III-8'], ['MÉTRICA v3', 'mantenimiento', 'MSI 1.1', 'registro de peticiones', 'catálogo de peticiones'], fuentes[4784], null,
    'Respuesta C. En MÉTRICA v3 la tarea MSI 1.1 se denomina «Registro de la Petición»: registra las solicitudes y crea el Catálogo de Peticiones, que sirve de medio de comunicación entre usuario/cliente y responsable de mantenimiento. Se ajusta el enunciado para identificar tarea y producto sin confundir el registro con la asignación posterior MSI 1.2.', 'corregida'],
  [4785, ['106'], [], ['ITIL', 'AXELOS', 'PeopleCert', 'propiedad intelectual', 'historia de ITIL'], fuentes[4785], null,
    'Respuesta B. La respuesta PeopleCert describe un hecho fechado: en 2021 completó la adquisición de AXELOS, empresa que gestionaba marcos como ITIL. Para no presentar ITIL 4 como la única versión actual —PeopleCert ya ofrece ITIL (Version 5) y mantiene disponible ITIL 4— se reescribe como pregunta histórica. No se fuerza correspondencia A2.', 'historica']
];

const edits = {
  4781: { texto: 'Según el modelo incremental estándar, ¿cómo progresa la construcción después de definir las necesidades y requisitos del sistema?', opciones: ['Mediante una serie de versiones o builds, cada una de las cuales añade capacidades a la anterior hasta completar el producto.', 'Entregando una única versión completa tras ejecutar todas las fases de forma secuencial.', 'Repitiendo ciclos evolutivos cuando los requisitos todavía no se conocen por completo.', 'Integrando todos los componentes una sola vez al final, mediante un efecto big bang.'], respuesta_correcta: 0 },
  4782: { texto: 'Según ITIL 4, ¿qué concepto es un medio para facilitar la cocreación de valor al facilitar los resultados que los clientes quieren lograr, sin que tengan que gestionar costes y riesgos específicos?', comentarios: 'Respuesta A. ITIL 4 define el servicio como medio para facilitar resultados deseados y la cocreación de valor sin que el cliente gestione costes y riesgos específicos. El enunciado queda acotado a ITIL 4: PeopleCert mantiene esta versión disponible durante la transición gradual a ITIL (Version 5).' },
  4783: { texto: '¿Cuál de las siguientes opciones no es una tecnología o middleware de ejecución para sistemas distribuidos basados en objetos, sino un lenguaje para describir interfaces y tipos?', opciones: ['DCOM.', 'IDL.', 'CORBA.', 'RMI.'], respuesta_correcta: 1 },
  4784: { texto: 'En el proceso MSI de mantenimiento de MÉTRICA v3, ¿qué tarea registra las peticiones y crea el catálogo que comunica al usuario con el responsable de mantenimiento?', opciones: ['MSI 1.1: Registro de la Petición.', 'MSI 1.2: Asignación de la Petición.', 'MSI 2.1: Verificación y Estudio de la Petición.', 'MSI 4.3: Aprobación y Cierre de la Petición.'], respuesta_correcta: 0 },
  4785: { texto: 'En julio de 2021, ¿qué entidad completó la adquisición de AXELOS, empresa que gestionaba marcos de buenas prácticas como ITIL?', opciones: ['La joint venture AXELOS participada por el Gobierno británico.', 'PeopleCert.', 'EXIN.', 'ISO.'], respuesta_correcta: 1 }
};

aplicar({ numero: '892', fecha: '2026-11-11', records, edits });

const repo = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(repo, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-892.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  4781: { bloque: 'Tema 15 — metodologías ágiles y ciclo de vida', detalle: 'secciones 32–33 comparan cascada, incremental e iterativo; NASA fundamenta el comportamiento de los builds.' , url: academyLifecycle },
  4782: { bloque: 'Bloque 41 — ITIL y COBIT', detalle: 'sección 1.1, conceptos de valor y servicio; el enunciado conserva el alcance ITIL 4, que Academy diferencia de Version 5.', url: academyItil },
  4783: { bloque: 'Bloque 38 — análisis, diseño y construcción de sistemas', detalle: 'contextualización en arquitectura/interoperabilidad y modelado orientado a objetos; el estándar OMG/ISO y las especificaciones Microsoft/Oracle distinguen lenguaje IDL de middleware.', url: academySystems },
  4784: { bloque: 'Bloque 39 — calidad y mantenimiento', detalle: 'sección 8, mantenimiento de software, gestión de peticiones y cambios; el manual PAe identifica MSI 1.1 y el catálogo.', url: academyQuality },
  4785: { bloque: 'Bloque 41 — ITIL y COBIT', detalle: 'sección de evolución ITIL 4 → Version 5 y propiedad de AXELOS: el documento indica que PeopleCert adquirió AXELOS en 2021 y que ambas versiones coexisten en 2026.', url: academyItil }
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const a = academy[change.id];
  q.clasificacion.bloque_academia = `ITIC Academy 2026.1, ${a.bloque}: ${a.detalle}`;
  q.clasificacion.nota = `${q.revision.estado}. Cotejo curricular: ${a.detalle} Academy sitúa el contenido en el temario; las fuentes oficiales/técnicas citadas fundamentan la respuesta.`;
  q.revision.observaciones += ` Cotejo curricular: ITIC Academy 2026.1, ${a.bloque}: ${a.detalle}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url: a.url, referencia: `ITIC Academy 2026.1, ${a.bloque}: cotejo de ubicación curricular; no se usa como fuente técnica primaria.` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(repo, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo Academy y registro de lote 892 preparados.');
