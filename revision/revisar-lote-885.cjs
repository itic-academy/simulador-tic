const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academySystems = 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const academyQuality = 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk';
const academyIt = 'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk';

const fuentes = {
  4746: [
    { url: 'https://ntrs.nasa.gov/api/citations/19930022958/downloads/19930022958.pdf', referencia: 'NASA Technical Report N93-32147, PERTS: A Prototyping Environment for Real-Time Systems: confirma que PERTS es un entorno de prototipado/diseño de sistemas de tiempo real.' },
    { url: 'https://www.ibm.com/docs/en/dmrt/12.0.0?topic=overview', referencia: 'IBM DevOps Model RealTime, sucesor de Rational Rose RealTime: documenta los entornos de modelado UML y generación de código para sistemas event-driven, real-time y embebidos.' },
    { url: 'https://course.ece.cmu.edu/~ece749/docs/RTSHandbook.pdf', referencia: 'The Concise Handbook of Real-Time Systems, sección TimeWiz, con referencia al producto de TimeSys: entorno integrado para modelar, analizar y simular sistemas de tiempo real.' },
    { url: 'https://www.adacore.com/about-ada', referencia: 'AdaCore, documentación de Ada como lenguaje de programación; Ada es un lenguaje, no una herramienta de diseño/modelado de sistemas de tiempo real.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 93: técnicas de diseño de software y herramientas de modelado.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.9: análisis y diseño orientado a objetos, UML y patrones.' }
  ],
  4747: [
    { url: 'https://www.axelos.com/getmedia/5896d51f-ab6c-4843-992b-4f045eab0875/ITIL-4-Foundation-glossary_v0_22.aspx', referencia: 'Glosario oficial ITIL 4 Foundation publicado por AXELOS: define service provision y enumera la gestión de recursos del proveedor configurados para prestar el servicio, el acceso de usuarios, acciones acordadas, gestión de niveles de servicio y mejora continua.' },
    { url: 'https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-4-foundation-2565', referencia: 'PeopleCert, organismo propietario/certificador de ITIL, página oficial de ITIL 4 Foundation.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 106: gestión de servicios TIC y bases conceptuales de ITIL.' }
  ],
  4748: [
    { url: 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Aad870327-56b7-4dfa-af15-e62222f45b90/METRICA_V3_Analisis_del_Sistema_de_Informacion.pdf', referencia: 'MÉTRICA v3, documento oficial Análisis del Sistema de Información: documenta el uso del diagrama de flujo de datos en el análisis estructurado.' },
    { url: 'https://www.ibm.com/think/topics/data-flow-diagram', referencia: 'IBM, guía de DFD: describe el diagrama de contexto/nivel 0 como la representación del sistema completo mediante un solo proceso; las entidades externas no conectan directamente con almacenes.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 88: análisis funcional de sistemas.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.3: determinación de requisitos y especificación de requisitos de software.' }
  ],
  4749: [
    { url: 'https://www.researchgate.net/publication/263921677_BOOTSTRAP_A_software_process_assessment_and_improvement_methodology', referencia: 'Kuvaja et al., trabajo primario de la metodología BOOTSTRAP: describe su diseño para evaluación de procesos de software y mejora.' },
    { url: 'https://s3.amazonaws.com/publicationslist.org/data/a.april/ref-235/815.pdf', referencia: 'April y Coallier, Trillium v3.0: “A Model for the Assessment of Telecom Software System Development Capability”, autores del modelo.' },
    { url: 'https://www.scielo.org.mx/scielo.php?pid=S1405-55462005000100005&script=sci_arttext', referencia: 'Mendoza, Pérez y Grimán, publicación original de MOSCA: modelo sistémico de calidad que integra modelos de calidad de producto y del proceso de desarrollo.' },
    { url: 'https://www.iso.org/standard/84550.html', referencia: 'ISO/IEC TS 33010:2023, guía actual sobre evaluación de procesos y uso de modelos de evaluación para determinar estado y apoyar mejora.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 98: evaluación de la calidad del software y modelos.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.13: calidad, modelos, métricas, normas y estándares.' }
  ],
  4750: [
    { url: 'https://www.ibm.com/think/topics/entity-relationship-diagram', referencia: 'IBM, ERD: un diagrama entidad-relación representa entidades, atributos y relaciones de datos; no es una metodología de desarrollo ágil.' },
    { url: 'https://scrumguides.org/scrum-guide.html', referencia: 'Scrum Guide oficial: define Scrum como framework para desarrollar y mantener productos complejos.' },
    { url: 'https://www.agilebusiness.org/page/ProjectFramework_10_20_17', referencia: 'Agile Business Consortium, DSDM/Agile Project Framework: define DSDM como método ágil de gestión y entrega de proyectos.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 88: metodologías de desarrollo, Scrum y Kanban.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.2: metodologías de desarrollo.' }
  ]
};

const registros = [
  [4746, ['93'], ['III-9'], ['sistemas de tiempo real', 'Rational Rose RealTime', 'PERTS', 'TimeWiz', 'Ada', 'lenguaje'], fuentes[4746], null,
    'Respuesta D, con distinción explícita: Rational Rose RealTime, PERTS y TimeWiz son entornos/herramientas históricos de modelado, prototipado o análisis de sistemas de tiempo real. Ada es un lenguaje de programación, no una herramienta de diseño. El enunciado se limita a los productos y versiones citados, que no deben interpretarse como recomendación de herramientas actuales.', 'historica'],
  [4747, ['106'], [], ['ITIL 4', 'prestación de servicios', 'service provision', 'recursos del proveedor'], fuentes[4747], null,
    'Respuesta C. ITIL 4 define la prestación del servicio como las actividades de la organización proveedora para prestar servicios; incluye gestionar los recursos del proveedor configurados para entregar el servicio. La gestión de los recursos del consumidor pertenece al consumo; la agrupación del servicio a una oferta; y las actividades conjuntas a la gestión de la relación.', 'corregida'],
  [4748, ['88'], ['III-3'], ['DFD', 'diagrama de flujo de datos', 'diagrama de contexto', 'proceso', 'análisis estructurado'], fuentes[4748], null,
    'Respuesta D, reformulada como afirmación correcta: un DFD de contexto representa el sistema completo como un único proceso y muestra sus intercambios con entidades externas. Los DFD describen flujo de datos, no sincronía temporal; las entidades externas no se conectan directamente entre sí ni con almacenes sin pasar por un proceso.', 'corregida'],
  [4749, ['98'], ['III-13'], ['calidad de software', 'BOOTSTRAP', 'TRILLIUM', 'MOSCA', 'evaluación y mejora'], fuentes[4749], null,
    'Respuesta D, con alcance preciso: los tres nombres se usan en evaluación/mejora de calidad o capacidad de procesos de software, aunque no son modelos idénticos. BOOTSTRAP evalúa y mejora procesos; TRILLIUM evalúa la capacidad de desarrollo de software de telecomunicaciones; MOSCA integra calidad de producto y proceso. Se conserva como contenido histórico por tratarse de enfoques clásicos.', 'historica'],
  [4750, ['88'], ['III-2'], ['metodologías ágiles', 'ERD', 'diagrama entidad-relación', 'Scrum', 'DSDM', 'Crystal'], fuentes[4750], null,
    'Respuesta A, reformulada para distinguir categorías: un ERD (diagrama entidad-relación) es una notación de modelado de datos, no una metodología ágil. Scrum, DSDM y Crystal sí designan marcos o familias de métodos de desarrollo ágil.', 'corregida']
];

const ediciones = {
  4746: { texto: '¿Cuál de estas opciones es un lenguaje de programación y no una herramienta de modelado/diseño de sistemas de tiempo real?', opciones: ['Rational Rose RealTime.', 'PERTS.', 'TimeWiz.', 'Ada.'], respuesta_correcta: 3 },
  4747: { texto: 'Según ITIL 4, ¿qué actividad forma parte de la prestación del servicio (service provision)?', opciones: ['Gestionar los recursos del consumidor necesarios para que este consuma el servicio.', 'Definir la agrupación formal de servicios basada en productos y adaptada a un grupo de consumidores.', 'Gestionar los recursos del proveedor configurados para entregar el servicio.', 'Realizar actividades conjuntas entre proveedor y consumidor para la cocreación continua de valor.'], respuesta_correcta: 2 },
  4748: { texto: 'En un diagrama de flujo de datos (DFD), ¿qué afirmación describe correctamente un diagrama de contexto?', opciones: ['Las entidades externas se conectan directamente entre sí.', 'Una entidad externa puede enviar datos directamente a un almacén.', 'Todo flujo entre procesos representa una comunicación asíncrona.', 'El sistema completo se representa como un único proceso y sus interacciones externas.'], respuesta_correcta: 3 },
  4749: { texto: '¿Qué opción reúne modelos o metodologías conocidos de evaluación/mejora de la capacidad de procesos o de la calidad del software?', opciones: ['BOOTSTRAP.', 'TRILLIUM.', 'MOSCA.', 'Todas las anteriores, aunque sus objetivos y modelos no sean idénticos.'], respuesta_correcta: 3 },
  4750: { texto: '¿Cuál de estas opciones es un diagrama de modelado de datos y no una metodología o marco de desarrollo ágil?', opciones: ['ERD (diagrama entidad-relación).', 'Scrum.', 'DSDM (Dynamic Systems Development Method).', 'Crystal.'], respuesta_correcta: 0 }
};

aplicar({ numero: '885', fecha: '2026-11-11', records: registros, edits: ediciones });

const repo = path.join(__dirname, '..');
const bankPath = path.join(repo, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-885.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academia = {
  4746: { bloque: 'Bloque 38 — análisis, diseño y construcción de sistemas', detalle: 'encuadre curricular de diseño/modelado de sistemas; los nombres de herramientas se verifican con sus fuentes originales y documentación técnica.', url: academySystems },
  4747: { bloque: 'Bloque 41 — ITIL y COBIT', detalle: 'el documento Academy 2026.1 distingue ITIL 4/5 y prestación, consumo y gestión de relaciones de servicio; la definición se coteja con el glosario oficial.', url: academyIt },
  4748: { bloque: 'Bloque 38 — análisis, diseño y construcción de sistemas', detalle: 'el temario de análisis funcional y modelado se coteja con DFD y MÉTRICA v3.', url: academySystems },
  4749: { bloque: 'Bloque 39 — calidad y mantenimiento', detalle: 'el bloque de calidad aborda modelos y evaluación/mejora; cada enfoque se define según su publicación primaria.', url: academyQuality },
  4750: { bloque: 'Bloque 38 — análisis, diseño y construcción de sistemas', detalle: 'cotejo curricular de metodologías ágiles y modelado de datos; se explicita que ERD es una notación de datos.', url: academySystems }
};
for (const cambio of log.cambios) {
  const q = bank.preguntas.find(x => x.id === cambio.id);
  const a = academia[cambio.id];
  q.clasificacion.bloque_academia = `ITIC Academy 2026.1, ${a.bloque}: ${a.detalle}`;
  q.clasificacion.nota = `${q.revision.estado}. Cotejo curricular: ${a.detalle} Academy contextualiza las materias y no sustituye las fuentes técnicas.`;
  q.revision.observaciones += ` Cotejo curricular: ITIC Academy 2026.1, ${a.bloque}: ${a.detalle}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url: a.url, referencia: `ITIC Academy 2026.1, ${a.bloque}: cotejo del encaje curricular A1/A2; no se usa como autoridad técnica.` });
  cambio.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo Academy y registro de lote 885 preparados.');
