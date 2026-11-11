const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academySystems = 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const academyQuality = 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk';

const fuentes = {
  4731: [
    { url: 'https://www.omg.org/spec/UML/2.5.1/PDF', referencia: 'OMG UML 2.5.1, secciones 14 y 17: clasifica secuencia, comunicación, temporización y visión general de interacción como diagramas de interacción. “Comunicación” es el nombre vigente; “colaboración” corresponde a terminología de versiones anteriores.' },
    { url: 'https://www.omg.org/spec/UML/About-UML/', referencia: 'Catálogo oficial OMG de UML, versiones formales: la especificación formal consultada es UML 2.5.1.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, temas 88 y 93: análisis funcional, diseño y modelado de software.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.9: análisis y diseño orientado a objetos y UML.' }
  ],
  4732: [
    { url: 'https://www.iso.org/standard/80710.html', referencia: 'ISO/IEC/IEEE 14764:2022, edición 3 publicada y vigente según catálogo ISO; define los tipos de mantenimiento de software y distingue corrección, mejoras y clases adaptativa, aditiva, perfectiva, preventiva y correctiva.' },
    { url: 'https://preview.sist.si/sist-preview/80710/9a26fc3a1a464fa286fb85d6c1eeed31/ISO-IEC-IEEE-14764-2022.pdf', referencia: 'Vista previa del texto ISO/IEC/IEEE 14764:2022, cláusula 3.1.8: enumera corrective, preventive, adaptive, additive y perfective maintenance; “continuous” no figura como tipo.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 101: mantenimiento de sistemas y tipos adaptativo/correctivo, además de planificación y gestión.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.13: calidad del software, normas y estándares; la fuente normativa específica es ISO/IEC/IEEE 14764.' }
  ],
  4733: [
    { url: 'https://www.omg.org/spec/UML/2.5.1/PDF', referencia: 'OMG UML 2.5.1: incluye diagramas de casos de uso, secuencia y comunicación. La especificación no define una clase de diagrama UML llamada “diagrama de estructura dinámica”; distingue diagramas estructurales y de comportamiento.' },
    { url: 'https://www.omg.org/spec/UML/About-UML/', referencia: 'Catálogo oficial OMG de especificaciones UML y versiones formales.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, temas 88 y 93: análisis funcional, diseño y modelado.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.9: lenguaje de modelado unificado (UML).' }
  ],
  4734: [
    { url: 'https://swehb.nasa.gov/spaces/SWEHBVD/pages/102695533/SWE-200+-+Software+Requirements+Volatility+Metrics', referencia: 'NASA Software Engineering Handbook, SWE-200: mide volatilidad como requisitos añadidos, eliminados o modificados a lo largo del tiempo. Se usa para precisar el concepto como cambio temporal, no como mera multiplicidad de fuentes.' },
    { url: 'https://www.iso.org/standard/72089.html', referencia: 'ISO/IEC/IEEE 29148:2018, norma de ingeniería de requisitos confirmada por ISO en 2024 y en proceso de revisión; cubre los procesos de ingeniería y gestión de requisitos durante el ciclo de vida.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 88: análisis funcional y metodologías de desarrollo; correspondencia curricular del ciclo de vida de requisitos.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.2: gestión y planificación del proceso de desarrollo y metodologías.' }
  ],
  4735: [
    { url: 'https://standards.ieee.org/ieee/828/5367/', referencia: 'Catálogo oficial IEEE SA: IEEE 828-2012 establecía requisitos mínimos para los procesos de gestión de configuración en sistemas e ingeniería del software; figura inactivo-reservado desde 2023 y se está preparando su reemplazo mediante P828.' },
    { url: 'https://standards.ieee.org/ieee/1042/1523/', referencia: 'Catálogo oficial IEEE SA: IEEE 1042-1987 era una guía de configuración, no un estándar de requisitos; figura retirada desde 2000. Por ello, el par “IEEE 828 e IEEE 1042” no debe presentarse como pareja de estándares vigentes.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, temas 100 y 102: gestión de configuración, versiones, cambios y entornos.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema IV.4: gestión de configuración, control de cambios y versiones.' }
  ]
};

const registros = [
  [4731, ['88', '93'], ['III-9'], ['UML', 'diagramas de interacción', 'secuencia', 'comunicación', 'OMG UML 2.5.1'], fuentes[4731], null,
    'Respuesta A, con terminología actualizada: UML 2.5.1 clasifica Sequence Diagram y Communication Diagram entre los diagramas de interacción. “Colaboración” es la denominación histórica asociada al diagrama de comunicación en versiones anteriores; se acota la versión para evitar esa variación terminológica.', 'corregida'],
  [4732, ['101'], ['III-13'], ['mantenimiento de software', 'ISO/IEC/IEEE 14764:2022', 'correctivo', 'adaptativo', 'perfectivo', 'aditivo', 'preventivo'], fuentes[4732], null,
    'Respuesta A. La ISO/IEC/IEEE 14764:2022 contempla mantenimiento correctivo y preventivo, y mejoras adaptativas, aditivas y perfectivas. “Continuo” no es una de las categorías de mantenimiento definidas en esa taxonomía; se identifica la edición de la norma para evitar mezclar clasificaciones tradicionales.', 'corregida'],
  [4733, ['88', '93'], ['III-9'], ['UML', 'diagramas', 'diagramas de comportamiento', 'OMG UML 2.5.1'], fuentes[4733], null,
    'Respuesta D. En UML 2.5.1 son tipos normalizados el diagrama de casos de uso, el de secuencia y el de comunicación. “Diagrama de estructura dinámica” no es el nombre de un tipo de diagrama UML; el enunciado se acota a la especificación para evitar las antiguas taxonomías imprecisas de “modelos”.', 'corregida'],
  [4734, ['88'], ['III-2'], ['ingeniería de requisitos', 'volatilidad de requisitos', 'gestión de cambios', 'ciclo de vida'], fuentes[4734], null,
    'Respuesta A, reformulada. La volatilidad de requisitos es el grado o ritmo con que estos se añaden, eliminan o modifican durante un intervalo del proyecto. La pluralidad de fuentes, los intereses contrapuestos y los cambios del contexto pueden causar o acompañar cambios, pero no definen por sí solos la volatilidad; así se elimina la opción “todas las anteriores” del original.', 'corregida'],
  [4735, ['100', '102'], ['IV-4'], ['gestión de configuración', 'IEEE 828-2012', 'IEEE 1042-1987', 'estándares históricos'], fuentes[4735], null,
    'Respuesta A, con alcance histórico explícito. IEEE 828-2012 establecía requisitos mínimos para procesos de gestión de configuración en sistemas y software; el catálogo IEEE lo registra como inactivo-reservado desde 2023 y muestra el proyecto P828 para reemplazarlo. IEEE 1042-1987 era una guía y fue retirada en 2000, no un estándar vigente. El enunciado original no distinguía esos estados ni tipos de documento.', 'historica']
];

const ediciones = {
  4731: { texto: 'Según UML 2.5.1, ¿qué pareja está formada por diagramas de interacción?', opciones: ['Diagramas de secuencia y de comunicación.', 'Diagramas de actividad y de secuencia.', 'Diagramas de casos de uso y de comunicación.', 'Diagramas de clases y de máquinas de estados.'], respuesta_correcta: 0 },
  4732: { texto: 'Según ISO/IEC/IEEE 14764:2022, ¿cuál de estas opciones NO es un tipo de mantenimiento de software contemplado por la norma?', opciones: ['Mantenimiento continuo.', 'Mantenimiento correctivo.', 'Mantenimiento adaptativo.', 'Mantenimiento perfectivo.'], respuesta_correcta: 0 },
  4733: { texto: 'Según UML 2.5.1, ¿cuál de los siguientes no es un tipo de diagrama UML?', opciones: ['Diagrama de casos de uso.', 'Diagrama de secuencia.', 'Diagrama de comunicación.', 'Diagrama de estructura dinámica.'], respuesta_correcta: 3 },
  4734: { texto: 'En ingeniería de requisitos, ¿qué describe la volatilidad de los requisitos durante un proyecto?', opciones: ['El grado en que se añaden, eliminan o modifican requisitos a lo largo del tiempo.', 'El número de partes interesadas que aportan requisitos.', 'La cantidad de requisitos que aún carecen de prioridad asignada.', 'El número de técnicas de elicitación utilizadas.'], respuesta_correcta: 0 },
  4735: { texto: 'En la edición IEEE 828-2012, ¿qué ámbito cubría el estándar?', opciones: ['Establecer requisitos mínimos para los procesos de gestión de configuración en sistemas e ingeniería del software.', 'Definir una guía retirada para la gestión de configuración, sin requisitos de proceso.', 'Especificar el análisis funcional de requisitos de software.', 'Normalizar exclusivamente la documentación de planes de proyecto.'], respuesta_correcta: 0 }
};

aplicar({ numero: '882', fecha: '2026-11-11', records: registros, edits: ediciones });

const repo = path.join(__dirname, '..');
const bankPath = path.join(repo, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-882.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academia = {
  4731: { bloque: 'Bloque 38 — análisis, diseño y construcción de sistemas', detalle: 'el programa Academy 2026.1 incluye UML en el contenido A2 D9; el bloque se usa solo para ubicar la materia.', url: academySystems },
  4732: { bloque: 'Bloque 39 — calidad y mantenimiento', detalle: 'incluye mantenimiento adaptativo y correctivo; las categorías exactas se verifican en ISO/IEC/IEEE 14764:2022.', url: academyQuality },
  4733: { bloque: 'Bloque 38 — análisis, diseño y construcción de sistemas', detalle: 'encuadre curricular de UML y sus diagramas; la lista de tipos se comprueba en OMG UML 2.5.1.', url: academySystems },
  4734: { bloque: 'Bloque 38 — análisis, diseño y construcción de sistemas', detalle: 'Academy 2026.1 recoge determinación de requerimientos y especificación en A2 D3; la definición de volatilidad se verifica por separado.', url: academySystems },
  4735: { bloque: 'Bloque 39 — calidad y mantenimiento', detalle: 'cotejo curricular de gestión de configuración y cambios; la edición/estado de IEEE 828 y 1042 se contrasta en el catálogo de IEEE SA.', url: academyQuality }
};
for (const cambio of log.cambios) {
  const q = bank.preguntas.find(x => x.id === cambio.id);
  const a = academia[cambio.id];
  q.clasificacion.bloque_academia = `ITIC Academy 2026.1, ${a.bloque}: ${a.detalle}`;
  q.clasificacion.nota = `${q.revision.estado}. Cotejo curricular: ${a.detalle} Academy sitúa la materia, no sustituye la especificación técnica ni acredita por sí sola la clave.`;
  q.revision.observaciones += ` Cotejo curricular: ITIC Academy 2026.1, ${a.bloque}: ${a.detalle}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url: a.url, referencia: `ITIC Academy 2026.1, ${a.bloque}: cotejo curricular del contenido y su correspondencia A1/A2; no se usa como fuente técnica de la respuesta.` });
  cambio.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo curricular y registro de lote 882 preparados.');
