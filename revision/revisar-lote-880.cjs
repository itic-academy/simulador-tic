const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academyCms = 'https://drive.google.com/file/d/17UpEFvYfjQ4iUrx8UNNTJIFcj5xO4vlz/view?usp=drivesdk';
const academyIt = 'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk';
const academySystems = 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const academyMetrica = 'https://docs.google.com/document/d/1ihmfO0PXn1lenLrjgS3SmP0xg01CLnS0/edit?usp=drivesdk';

const fuentes = {
  4721: [
    { url: 'https://redis.io/docs/latest/develop/get-started/data-store/', referencia: 'Documentación oficial de Redis: define Redis como almacén de estructuras de datos en memoria, persistente y utilizable como base de datos, caché o message broker; no es un CMS editorial.' },
    { url: 'https://www.drupal.org/docs/user_guide/en/understanding-drupal.html', referencia: 'Drupal User Guide, documentación oficial: el núcleo de Drupal está implementado mediante PHP.' },
    { url: 'https://www.liferay.com/documents/10182/3292406/Liferay%2BPortal%2B6_1%2BDatasheet.pdf/869a1c52-1926-4c2a-bc79-c0bcc5a96a27?download=true&t=1596856383957', referencia: 'Ficha de Liferay Portal publicada por el fabricante: plataforma Java EE/JEE; se compara el núcleo/plataforma del producto, no el lenguaje que se pueda usar en extensiones.' },
    { url: 'https://docs.hyland.com/r/Alfresco/Alfresco-Content-Services/23.4/Alfresco-Content-Services/Develop/Getting-Started', referencia: 'Documentación oficial de Hyland para Alfresco Content Services: arquitectura y API de servicios desarrolladas en Java.' },
    { url: 'https://www.opencms.org/en/overview/what-is-opencms/', referencia: 'OpenCms, sitio oficial del proyecto: el CMS está implementado en Java y XML.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 104: gestión documental y tecnologías CMS/DMS.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema II.16: sistemas de gestión documental y de contenidos.' }
  ],
  4722: [
    { url: 'https://zjnu2017.github.io/OOAD/reading/Object.Oriented.Analysis.and.Design.with.Applications.3rd.Edition.by.Booch.pdf', referencia: 'Booch, Rumbaugh y Jacobson, Object-Oriented Analysis and Design with Applications, 3.ª ed., sección sobre tamaño de aplicaciones OO: cita a Lorenz y Kidd (1994) para la estimación del 20–40% de clases clave. Es una fuente secundaria que remite al trabajo original, no se ha podido cotejar la fuente primaria de Lorenz y Kidd; se mantiene expresamente pendiente y no se certifica la clave.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 88: análisis funcional y metodologías de desarrollo.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.2: gestión y planificación del proceso de desarrollo y metodologías.' }
  ],
  4723: [
    { url: 'https://docs.bmc.com/xwiki/bin/view/Standalone/Common-technical-information/common/Common-verbiage-for-21-02-enhancements-and-previews/', referencia: 'Documentación oficial de BMC: desde la versión 21.02, Remedy ITSM Suite pasó a denominarse BMC Helix ITSM; Remedy Change Management pasó a Helix ITSM: Change Management y BMC CMDB a Helix CMDB.' },
    { url: 'https://www.bmc.com/content/dam/bmc/education/Abstract_SPPT-EXP-SUBS.pdf', referencia: 'Material oficial de formación de BMC: Remedy ITSM incluye aplicaciones de gestión de activos, incidentes, problemas y cambios, además de uso de BMC Atrium CMDB.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 106: gestión de servicios e infraestructuras TIC, ITIL y control.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema IV.4: gestión de configuración, cambios y herramientas de operación.' }
  ],
  4724: [
    { url: 'https://www.cs.uct.ac.za/mit_notes/software/htmls/ch06s05.html', referencia: 'University of Cape Town, material docente de informática sobre elementos y reglas de DFD: los almacenes no se conectan directamente entre sí ni con entidades externas; algunas convenciones admiten una excepción entre entidades externas, por lo que la pregunta solo usa como contraejemplo inequívoco dos almacenes sin proceso intermedio.' },
    { url: 'https://www.ibm.com/think/topics/data-flow-diagram', referencia: 'IBM, guía técnica sobre DFD: identifica procesos, almacenes, entidades externas y flujos, y describe el papel de procesos como transformaciones de datos.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 90: modelado de procesos y análisis dinámico.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.2: análisis y metodologías de desarrollo.' }
  ],
  4725: [
    { url: 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Aad870327-56b7-4dfa-af15-e62222f45b90/METRICA_V3_Analisis_del_Sistema_de_Informacion.pdf', referencia: 'Manual oficial MÉTRICA v3, Análisis del Sistema de Información, tarea ASI 8.4: el prototipado genera un prototipo de interfaz interactiva y utiliza esa representación para validar el comportamiento dinámico de la interfaz.' },
    { url: 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A7f366cd1-6759-42d9-9e0b-31edce0256d9/METRICA_V3_Diseno_del_Sistema_de_Informacion.pdf', referencia: 'Manual oficial MÉTRICA v3, Diseño del Sistema: incluye la técnica de prototipado en las actividades de diseño de interfaz.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, temas 94 (prototipos e interfaces) y 95 (MÉTRICA).' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, temas III.2 (planificación y metodologías) y III.3 (prototipos y requisitos).' }
  ]
};

const registros = [
  [4721, ['104'], ['II-16'], ['CMS', 'Redis', 'Drupal', 'Liferay', 'Alfresco', 'OpenCms', 'PHP', 'Java'], fuentes[4721], null,
    'Respuesta A, aclarando el alcance: Redis es un almacén de datos en memoria y puede actuar como base de datos, caché o broker, pero no es un CMS editorial. Drupal core es PHP; Liferay, Alfresco y OpenCms se basan en Java. No se generaliza a plugins, conectores o código de personalización.', 'corregida'],
  [4722, ['88'], ['III-2'], ['métricas OO', 'Staffing Size', 'clases clave', 'Lorenz y Kidd'], fuentes[4722], null,
    'Pendiente de fuente primaria. Una obra de referencia de análisis y diseño OO reproduce la estimación de Lorenz y Kidd (1994) de que las clases clave representan aproximadamente el 20–40% de las clases de un sistema OO típico. No se ha localizado ni comprobado el texto original de Lorenz y Kidd que fundamenta el dato, así que la opción histórica se conserva sin certificarla. El porcentaje tampoco debe interpretarse como regla de calidad o umbral obligatorio.', 'pendiente_fuente'],
  [4723, ['106'], ['IV-4'], ['BMC Remedy', 'ITSM', 'gestión de configuración', 'CMDB', 'control de cambios'], fuentes[4723], null,
    'Respuesta B, con el ámbito delimitado: BMC Remedy ITSM fue una suite de gestión de servicios que incluía aplicaciones de incidentes, problemas, activos y cambios y se integraba con CMDB. No es una herramienta especializada únicamente en control de versiones ni en limpieza o capacidad de entornos. El nombre de producto cambió posteriormente a BMC Helix ITSM; se pregunta por el producto histórico citado.', 'corregida'],
  [4724, ['90'], ['III-2'], ['diagramas de flujo de datos', 'DFD', 'procesos', 'almacenes de datos', 'entidades externas'], fuentes[4724], null,
    'Respuesta A. La afirmación es falsa porque no se permiten flujos directos entre cualquier par de elementos: por ejemplo, dos almacenes de datos no se conectan entre sí sin un proceso. La fuente docente citada señala que algunas convenciones admiten excepciones entre entidades externas; por eso no se universaliza esa prohibición. Los procesos representan transformaciones, los almacenes datos retenidos y las entidades externas fuentes o destinos fuera del sistema modelado.', 'corregida'],
  [4725, ['94', '95'], ['III-2', 'III-3'], ['MÉTRICA v3', 'prototipado', 'maqueta', 'interfaz de usuario'], fuentes[4725], null,
    'Respuesta B, con la pregunta reformulada: MÉTRICA v3 usa prototipos de interfaz para hacer tangible la interacción y validar requisitos; no establece en este contexto la oposición terminológica simplista «prototipo funcional» frente a «maqueta solo visual». El original presentaba como diferencia formal unas categorías que el manual de la metodología no define de ese modo.', 'corregida']
];

const ediciones = {
  4721: { texto: '¿Cuál de estos productos no es un gestor de contenidos (CMS), sino un almacén de datos en memoria usado como base de datos, caché o broker?', opciones: ['Redis.', 'Joomla.', 'Liferay Portal.', 'Drupal.'], respuesta_correcta: 0 },
  4723: { texto: 'Históricamente, BMC Remedy ITSM se encuadraba principalmente como una suite para:', opciones: ['Control de versiones del código fuente de proyectos de desarrollo.', 'Gestión de servicios TI, con módulos como incidentes, cambios, activos e integración con una CMDB.', 'Limpieza de entornos informáticos.', 'Dimensionamiento exclusivo de la capacidad física de servidores.'], respuesta_correcta: 1 },
  4724: { texto: 'En un DFD que sigue la convención de análisis estructurado, señale la afirmación FALSA:', opciones: ['Un flujo de datos puede conectar directamente cualquier par de elementos, incluidos dos almacenes de datos sin un proceso intermedio.', 'Los procesos transforman datos de entrada en datos de salida.', 'Los almacenes representan datos retenidos para uso posterior.', 'Las entidades externas son fuentes o destinos de información situados fuera del sistema modelado.'], respuesta_correcta: 0 },
  4725: { texto: 'Según MÉTRICA v3, ¿para qué se utiliza el prototipado de interfaces durante el análisis del sistema?', opciones: ['Para sustituir la especificación de requisitos y evitar la validación por usuarios.', 'Para crear una representación de la interfaz que ayude a comprender y validar la interacción prevista.', 'Para producir necesariamente una versión funcional completa del sistema.', 'Para fijar el modelo físico de datos antes de identificar requisitos.'], respuesta_correcta: 1 }
};

aplicar({ numero: '880', fecha: '2026-11-11', records: registros, edits: ediciones });

const repo = path.join(__dirname, '..');
const bankPath = path.join(repo, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-880.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academia = {
  4721: { bloque: 'Bloque 40 — gestión documental y CMS', detalle: 'CMS/DMS y gestión de contenidos; Redis se contrasta con documentación del producto, no se etiqueta como CMS por ser persistente.', url: academyCms },
  4722: { bloque: 'Bloque 38 — análisis, diseño y construcción de sistemas', detalle: 'métricas y análisis orientado a objetos; la clasificación solo acredita encaje curricular y no resuelve la falta de fuente primaria para el porcentaje histórico.', url: academySystems },
  4723: { bloque: 'Bloque 41 — ITIL y COBIT', detalle: 'gestión de servicios, configuración y cambios; el producto y su evolución nominal se contrastan con BMC.', url: academyIt },
  4724: { bloque: 'Bloque 38 — análisis, diseño y construcción de sistemas', detalle: 'análisis estructurado y modelado de procesos/flujo de información.', url: academySystems },
  4725: { bloque: 'Tema 093 — MÉTRICA v3', detalle: 'prototipado y metodología MÉTRICA; el manual oficial PAe delimita el uso de prototipos de interfaz.', url: academyMetrica }
};
for (const cambio of log.cambios) {
  const q = bank.preguntas.find(x => x.id === cambio.id);
  const a = academia[cambio.id];
  q.clasificacion.bloque_academia = `ITIC Academy 2026, ${a.bloque}: ${a.detalle}`;
  q.clasificacion.nota = `${q.revision.estado}. Cotejo Academy: ${a.detalle} El material académico sirve para ubicar la cobertura, no para sustituir la fuente técnica o primaria.`;
  q.revision.observaciones += ` Cotejo curricular: ITIC Academy 2026, ${a.bloque}: ${a.detalle}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url: a.url, referencia: `ITIC Academy 2026, ${a.bloque}: cotejo del encaje curricular; no se usa para fundamentar el dato técnico.` });
  cambio.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo curricular y registro de lote 880 preparados.');
