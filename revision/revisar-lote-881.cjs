const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academyIt = 'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk';
const academyQuality = 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk';
const academySystems = 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';

const fuentes = {
  4726: [
    { url: 'https://www.abim.go.ug/sites/files/%28ITIL%29%20Axelos%20-%20ITIL%20Foundation%204%20edition-Axelos%20%282019%29%5B1%5D.pdf', referencia: 'Axelos, ITIL Foundation: ITIL 4 Edition, apartado 2.2.2 (copia del manual): Sponsor es quien autoriza el presupuesto para el consumo del servicio; Customer define requisitos y responde de los resultados del consumo; User usa el servicio. El reactivo se limita a ITIL 4.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 106: bases conceptuales de ITIL y gestión de servicios TIC.' }
  ],
  4727: [
    { url: 'https://ifpug.org/ifpug-standards/fpa', referencia: 'IFPUG, Function Point Analysis: los puntos función derivan del tamaño lógico y cuentan entradas, salidas, consultas, datos internos y datos de interfaz externa; corresponden a EI, EO, EQ, ILF y EIF.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 99: estimación de recursos y esfuerzo en el desarrollo.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.2: técnicas de gestión y planificación de proyectos y desarrollo.' }
  ],
  4728: [
    { url: 'https://www.iso.org/committee/53888/x/catalogue/', referencia: 'Catálogo oficial ISO/TC 176/SC 1: registra ISO 9000:2000 como “Quality management systems — Fundamentals and vocabulary”, y como retirada; el catálogo muestra que la edición 2026 es la actual.' },
    { url: 'https://www.iso.org/cms/live/live/en/sites/isoorg/contents/data/standard/08/84/88465.html?browse=tc', referencia: 'ISO 9000:2026, edición vigente desde mayo de 2026: mantiene el título “Quality management — Fundamentals and vocabulary”. Se cita para señalar que el reactivo trata explícitamente una edición histórica, no la vigente.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 98: calidad del software, métricas, normas y estándares.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.13: calidad del software, modelos, métricas, normas y estándares.' }
  ],
  4729: [
    { url: 'https://citeseerx.ist.psu.edu/document?doi=3240e447c01981800f0ecdbd216a6d3acf844cff&repid=rep1&type=pdf', referencia: 'Trabajo primario en IEEE Transactions on Software Engineering, 1982, p. 310: define stamp coupling cuando dos módulos referencian la misma estructura heterogénea no global; esto implica que la estructura se pasa como parámetro. Se diferencia de common coupling por datos globales compartidos.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 93: técnicas de diseño de software.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.9: análisis y diseño orientado a objetos y UML.' }
  ],
  4730: [
    { url: 'https://www.omg.org/spec/UML/2.5.1/PDF', referencia: 'OMG UML 2.5.1, especificación normativa oficial, sección 17 sobre interacciones: la interacción se define mediante mensajes parcialmente ordenados; el diagrama de secuencia representa lifelines y mensajes en orden temporal.' },
    { url: 'https://www.omg.org/spec/', referencia: 'Catálogo formal de especificaciones OMG, consultado el 11-11-2026: UML 2.5.1 figura como especificación formal vigente; se emplea junto con el texto del estándar UML para identificar el tipo de diagrama.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 93: técnicas de diseño y modelado de software.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.9: UML y análisis/diseño orientado a objetos.' }
  ]
};

const registros = [
  [4726, ['106'], [], ['ITIL 4', 'sponsor', 'cliente', 'usuario', 'gestión de servicios'], fuentes[4726], null,
    'Respuesta A. En ITIL 4, el sponsor es la persona que autoriza el presupuesto para el consumo del servicio. La persona que define requisitos y responde de los resultados es el customer; quien utiliza el servicio es el user. Se fija expresamente ITIL 4 para no atribuir la definición a otras versiones.', 'corregida'],
  [4727, ['99'], ['III-2'], ['puntos función', 'IFPUG', 'EI', 'EO', 'EQ', 'ILF', 'EIF'], fuentes[4727], null,
    'Respuesta D: A y B enumeran conjuntamente los cinco tipos funcionales de IFPUG: entradas externas (EI), salidas externas (EO), consultas externas (EQ), ficheros lógicos internos (ILF) y ficheros de interfaz externa (EIF). No se cuentan líneas de código ni el lenguaje de implementación.', 'vigente'],
  [4728, ['98'], ['III-13'], ['ISO 9000', 'ISO 9000:2000', 'normalización', 'calidad', 'edición histórica'], fuentes[4728], null,
    'La pregunta original es ambigua: además de ISO 9002:2000 mal titulada, ISO 19011 no forma parte de la serie numerada ISO 9000. Se reformula para preguntar un dato único: el título de ISO 9000:2000. Es “Sistemas de gestión de la calidad. Fundamentos y vocabulario”; la edición está retirada y en 2026 la edición vigente es ISO 9000:2026.', 'historica'],
  [4729, ['93'], ['III-9'], ['acoplamiento', 'stamp coupling', 'acoplamiento por estampado', 'estructura de datos', 'diseño modular'], fuentes[4729], null,
    'Respuesta C, precisada: hay acoplamiento por estampado cuando un módulo pasa a otro como parámetro una estructura de datos heterogénea no global. Esto no es simplemente compartir una variable global (common coupling); la forma exacta de los campos utilizados puede variar entre definiciones, por lo que el reactivo se ciñe a la definición de IEEE citada.', 'corregida'],
  [4730, ['93'], ['III-9'], ['UML', 'diagrama de secuencia', 'interacciones', 'mensajes', 'orden temporal'], fuentes[4730], null,
    'Respuesta A. El diagrama de secuencia es un diagrama de interacción que representa lifelines y mensajes en orden temporal; los diagramas de comunicación resaltan la organización estructural de los participantes y rotulan el orden de los mensajes.', 'vigente']
];

const ediciones = {
  4726: { texto: 'Según ITIL 4, ¿quién es el sponsor en una relación de servicio?', opciones: ['La persona que autoriza el presupuesto para el consumo del servicio.', 'La persona que define los requisitos del servicio y responde de los resultados de su consumo.', 'La persona que utiliza el servicio.', 'La organización que proporciona el servicio.'], respuesta_correcta: 0 },
  4728: { texto: 'En la edición histórica ISO 9000:2000, ¿cuál era el título de ISO 9000:2000?', opciones: ['Sistemas de gestión de la calidad. Requisitos.', 'Sistemas de gestión de la calidad. Fundamentos y vocabulario.', 'Sistemas de gestión de la calidad. Directrices para la mejora del desempeño.', 'Directrices para la auditoría de los sistemas de gestión.'], respuesta_correcta: 1 },
  4729: { texto: 'En el diseño modular, ¿qué caracteriza al acoplamiento por estampado (stamp coupling) según la definición de IEEE citada?', opciones: ['Un módulo invoca operaciones internas de otro accediendo a su código.', 'Varios módulos acceden a datos globales compartidos.', 'Un módulo pasa a otro como parámetro una estructura de datos heterogénea no global.', 'Dos módulos se comunican exclusivamente mediante elementos de datos simples.'], respuesta_correcta: 2 }
};

aplicar({ numero: '881', fecha: '2026-11-11', records: registros, edits: ediciones });

const repo = path.join(__dirname, '..');
const bankPath = path.join(repo, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-881.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academia = {
  4726: { bloque: 'Bloque 41 — ITIL y COBIT', detalle: 'encuadre curricular de ITIL; la definición precisa de roles se limita a ITIL 4.', url: academyIt },
  4727: { bloque: 'Bloque 38 — análisis, diseño y construcción de sistemas', detalle: 'cotejo de estimación funcional y recursos; las cinco clases se comprueban con IFPUG.', url: academySystems },
  4728: { bloque: 'Bloque 39 — calidad y mantenimiento', detalle: 'cotejo de sistemas de gestión de calidad y normas; la vigencia se contrasta con el catálogo ISO.', url: academyQuality },
  4729: { bloque: 'Bloque 38 — análisis, diseño y construcción de sistemas', detalle: 'cotejo curricular de diseño modular y acoplamiento.', url: academySystems },
  4730: { bloque: 'Bloque 38 — análisis, diseño y construcción de sistemas', detalle: 'cotejo curricular de UML y diagramas de interacción.', url: academySystems }
};
for (const cambio of log.cambios) {
  const q = bank.preguntas.find(x => x.id === cambio.id);
  const a = academia[cambio.id];
  q.clasificacion.bloque_academia = `ITIC Academy 2026, ${a.bloque}: ${a.detalle}`;
  q.clasificacion.nota = `${q.revision.estado}. Cotejo Academy: ${a.detalle} El temario académico ubica el contenido, no sustituye la fuente técnica o normativa.`;
  q.revision.observaciones += ` Cotejo curricular: ITIC Academy 2026, ${a.bloque}: ${a.detalle}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url: a.url, referencia: `ITIC Academy 2026, ${a.bloque}: cotejo del encaje curricular; no se usa para fundamentar el dato técnico.` });
  cambio.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo curricular y registro de lote 881 preparados.');
