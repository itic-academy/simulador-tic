const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const isoReq = 'https://www.iso.org/standard/72089.html';
const metricMsi = 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Ae15c0c5b-dd9c-4e48-82e3-9e36ba18e839/METRICA_V3_Mantenimiento_de_Sistemas_de_Informacion.pdf';
const oracleEr = 'https://docs.oracle.com/cd/E19078-01/mysql/mysql-workbench/wb-data-modeling.html';
const omgUml = 'https://www.omg.org/spec/UML/2.5.1/PDF';
const omgUmlInfo = 'https://www.omg.org/gettingstarted/what_is_uml.htm';
const seiPrototype = 'https://www.sei.cmu.edu/blog/prototyping-for-developing-big-data-systems/';
const academy38 = 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const academy39 = 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk';
const academy15 = 'https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view?usp=drivesdk';

const sources = {
  4791: [
    { url: isoReq, referencia: 'ISO/IEC/IEEE 29148:2018, vigente según ISO (revisada y confirmada en 2024): ingeniería de requisitos produce y define información de requisitos del sistema/software; la pregunta se delimita a requisitos funcionales frente a modelos de datos y diseño.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 88: análisis funcional de sistemas, casos de uso e historias de usuario.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.3: estrategias de determinación de requerimientos y especificación de requisitos de software.' }
  ],
  4792: [
    { url: metricMsi, referencia: 'PAe, MÉTRICA v3, Mantenimiento de Sistemas de Información, p. 1: mantenimiento perfectivo comprende acciones para mejorar la calidad interna, como reestructurar el código y optimizar rendimiento y eficiencia.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 101: mantenimiento de sistemas y planificación/gestión del mantenimiento.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.8: instalación, cambio y mantenimiento.' }
  ],
  4793: [
    { url: oracleEr, referencia: 'Oracle MySQL Workbench User Guide, modelado de datos, sección 7.7.2.1: en una relación identificadora la tabla/entidad hija no puede identificarse de manera única sin su entidad padre; su clave incorpora la clave de la entidad propietaria.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 89: análisis de dominio, modelo entidad-relación y modelos de clases.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.4: modelado de datos y diseño de bases de datos.' }
  ],
  4794: [
    { url: omgUml, referencia: 'OMG UML 2.5.1, especificación normativa vigente publicada por OMG: define el metamodelo UML y los elementos de Interaction, Lifeline y Message usados en diagramas de interacción.' },
    { url: omgUmlInfo, referencia: 'OMG, introducción a UML: enumera los diagramas de interacción, incluidos secuencia, comunicación, temporización y visión general de interacción, como diagramas de comportamiento.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 89: modelos de dominio, entidad-relación y clases; el reactivo se vincula por modelado de objetos.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.9: análisis y diseño orientado a objetos y UML.' }
  ],
  4795: [
    { url: seiPrototype, referencia: 'Software Engineering Institute (Carnegie Mellon): el prototipo desechable sirve para obtener feedback y no forma parte del software final; el evolutivo se perfecciona hasta constituir el sistema.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 94: elaboración de prototipos en el desarrollo de sistemas.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.3: determinación de requerimientos mediante entrevistas, análisis y prototipos.' }
  ]
};

const records = [
  [4791, ['88'], ['III-3'], ['requisitos', 'requisitos funcionales', 'análisis funcional', 'especificación'], sources[4791], null,
    'Respuesta A. Los requisitos funcionales describen servicios, funciones o comportamientos que el sistema debe proporcionar. El original podía admitir a la vez la descripción funcional y criterios de prueba/aceptación, y mezclaba requisitos con diseño de datos; se convierte en una pregunta inequívoca sobre requisitos funcionales.', 'corregida'],
  [4792, ['101'], ['III-8'], ['MÉTRICA v3', 'mantenimiento perfectivo', 'calidad interna', 'rendimiento', 'reestructuración'], sources[4792], null,
    'Respuesta B. MÉTRICA v3 denomina perfectivo al mantenimiento que busca mejorar la calidad interna: incluye reestructurar código y optimizar rendimiento y eficiencia. El mantenimiento preventivo, en cambio, trata de detectar o evitar fallos latentes antes de que se manifiesten.', 'vigente'],
  [4793, ['89'], ['III-4'], ['modelo entidad-relación', 'EIR', 'entidad débil', 'clave parcial', 'relación identificadora'], sources[4793], null,
    'Respuesta C. Una entidad débil no posee por sí sola atributos suficientes para identificar de forma única cada ocurrencia: se identifica mediante una clave parcial junto con la clave de su entidad propietaria, y su relación identificadora expresa esa dependencia. “Débil” no significa poco importante ni exige que la entidad propietaria sea también débil.', 'corregida'],
  [4794, ['89'], ['III-9'], ['UML', 'diagramas de interacción', 'mensajes', 'objetos', 'comportamiento dinámico'], sources[4794], null,
    'Respuesta C. Los diagramas de interacción UML modelan intercambios de mensajes entre participantes/objetos; entre ellos están secuencia y comunicación. Los diagramas de estados muestran estados y transiciones, mientras que casos de uso describen objetivos e interacciones con actores a otro nivel.', 'vigente'],
  [4795, ['94'], ['III-3'], ['prototipos', 'prototipo desechable', 'prototipo evolutivo', 'requisitos'], sources[4795], null,
    'Respuesta A. El prototipo desechable se construye para aprender y aclarar requisitos y después se descarta; el evolutivo se refina hasta convertirse en el sistema final. La pregunta original contenía más de una afirmación defendible sobre el uso de prototipos y la percepción del usuario, por lo que se sustituye por la distinción verificable entre ambos tipos.', 'corregida']
];

const edits = {
  4791: { texto: 'En el análisis de requisitos, ¿qué describe específicamente un requisito funcional?', opciones: [
    'Un servicio, función o comportamiento que el sistema debe proporcionar.',
    'La organización de tablas, claves e índices de la base de datos física.',
    'La distribución de componentes de software entre nodos de despliegue.',
    'La estructura de clases, interfaces y paquetes usada para implementar el sistema.'
  ], respuesta_correcta: 0 },
  4793: { texto: 'En un modelo entidad-relación, ¿qué caracteriza a una entidad débil respecto de la identificación de sus ocurrencias?', opciones: [
    'Dispone de una clave propia completa que no depende de ninguna otra entidad.',
    'Tiene menor importancia funcional que las entidades fuertes.',
    'No se identifica solo con sus atributos: combina una clave parcial con la clave de su entidad propietaria.',
    'Cada ocurrencia depende necesariamente de otra entidad que también debe ser débil.'
  ], respuesta_correcta: 2 },
  4794: { texto: 'En UML, ¿qué categoría de diagramas de comportamiento representa interacciones mediante mensajes intercambiados entre participantes u objetos?', opciones: [
    'Diagramas de casos de uso.', 'Diagramas de estados.', 'Diagramas de interacción.', 'Diagramas de flujo de datos.'
  ], respuesta_correcta: 2 },
  4795: { texto: '¿Qué distingue correctamente un prototipo desechable de uno evolutivo?', opciones: [
    'El desechable se descarta tras aclarar requisitos; el evolutivo se refina hasta convertirse en el sistema final.',
    'El desechable se mantiene obligatoriamente como versión de producción; el evolutivo siempre se descarta.',
    'El desechable solo se usa en ciclo en cascada y el evolutivo solo en procesos ágiles.',
    'El evolutivo no admite cambios después de la primera entrega, mientras que el desechable sí.'
  ], respuesta_correcta: 0 }
};

aplicar({ numero: '894', fecha: '2026-11-11', records, edits });

const repo = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(repo, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-894.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  4791: { bloque: 'bloque 38 — análisis, diseño y construcción de sistemas', detalle: 'apartado 2.3, requisitos funcionales, no funcionales y restricciones.', url: academy38 },
  4792: { bloque: 'bloque 39 — calidad y mantenimiento', detalle: 'apartado de tipos de mantenimiento y su tratamiento; la definición exacta se contrasta con MÉTRICA v3 del PAe.', url: academy39 },
  4793: { bloque: 'bloque 38 — análisis, diseño y construcción de sistemas', detalle: 'sección de análisis estructurado de datos y modelo Entidad/Relación Extendido; se coteja el modelado de entidades e identificadores.', url: academy38 },
  4794: { bloque: 'bloque 38 — análisis, diseño y construcción de sistemas', detalle: 'sección 6.4, diagramas de interacción: secuencia y comunicación, mensajes y participantes.', url: academy38 },
  4795: { bloque: 'bloque 38 — análisis, diseño y construcción de sistemas', detalle: 'apartado de prototipado y requisito oficial A1 94; el material explica el riesgo de que un prototipo desechable pase a producción sin rediseño.', url: academy38 }
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const a = academy[change.id];
  q.clasificacion.bloque_academia = `ITIC Academy 2026.1, ${a.bloque}: ${a.detalle}`;
  q.clasificacion.nota = `${q.revision.estado}. Cotejo curricular: ${a.detalle} Academy sitúa el contenido en el temario; las fuentes primarias/técnicas citadas fundamentan la respuesta.`;
  q.revision.observaciones += ` Cotejo curricular: ITIC Academy 2026.1, ${a.bloque}: ${a.detalle}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url: a.url, referencia: `ITIC Academy 2026.1, ${a.bloque}: cotejo de ubicación curricular; no se usa como fuente técnica primaria.` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(repo, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo Academy y registro de lote 894 preparados.');
