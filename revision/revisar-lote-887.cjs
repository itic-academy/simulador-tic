const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academySystems = 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const academyQuality = 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk';
const academyIt = 'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk';
const academyMetric = 'https://docs.google.com/document/d/1ihmfO0PXn1lenLrjgS3SmP0xg01CLnS0/edit?usp=drivesdk';

const fuentes = {
  4756: [
    { url: 'https://docs.gradle.org/current/userguide/build_file_basics.html', referencia: 'Manual oficial Gradle: un build script puede escribirse como build.gradle en Groovy o build.gradle.kts en Kotlin; ambas son DSL admitidas para configurar la construcción.' },
    { url: 'https://docs.gradle.org/current/userguide/kotlin_dsl.html', referencia: 'Gradle Kotlin DSL Primer: documenta Kotlin DSL como alternativa al DSL tradicional de Groovy y distingue sintaxis/extensiones de script.' },
    { url: 'https://docs.gradle.org/current/userguide/ant.html', referencia: 'Manual oficial Gradle, integración con Ant: permite importar builds Ant y ejecutar tareas Ant, lo cual no implica que Gradle sea siempre más rápido ni que Maven sea una mera implementación de Ant.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 97: integración continua y herramientas.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.6: entornos de construcción, integración continua y despliegue.' }
  ],
  4757: [
    { url: 'https://docs.oracle.com/javase/tutorial/java/IandI/multipleinheritance.html', referencia: 'Oracle Java Tutorials: define la herencia múltiple y distingue herencia de estado/implementación/tipo; Java no permite extender varias clases, aunque sí implementar varias interfaces.' },
    { url: 'https://docs.oracle.com/javase/specs/jls/se26/html/jls-8.html#jls-8.1.4', referencia: 'Java Language Specification §8.1.4: una clase tiene como máximo una clase superdirecta.' },
    { url: 'https://eel.is/c++draft/class.derived', referencia: 'Borrador público del estándar C++ (WG21), cláusula derived classes: las clases derivadas pueden especificar múltiples clases base directas.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 93: técnicas de diseño de software.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.9: análisis y diseño orientado a objetos.' }
  ],
  4758: [
    { url: 'https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-4-foundation-2565', referencia: 'PeopleCert, propietario/certificador de ITIL: identifica en ITIL 4 el Service Value System como el marco que incluye cadena de valor, principios rectores y gobernanza.' },
    { url: 'https://www.peoplecert.org/-/media/2244094fd4364faab8b1e22b35278bd9.ashx', referencia: 'Material oficial de PeopleCert sobre ITIL 4: representa el SVS y sus componentes, incluida la gobernanza.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 106: bases conceptuales de ITIL.' }
  ],
  4759: [
    { url: 'https://junit.org/junit4/javadoc/4.12/org/junit/Test.html', referencia: 'API oficial JUnit 4: @Test marca un método público void que puede ejecutarse como caso de prueba.' },
    { url: 'https://junit.org/junit4/faq.html', referencia: 'FAQ oficial JUnit 4: documenta las pruebas anotadas con @Test y diferencia la compatibilidad de JUnit 4 con tests y runners anteriores.' },
    { url: 'https://junit.org/junit4/', referencia: 'Portal oficial JUnit: JUnit 4 está en modo de mantenimiento; la pregunta queda fijada a esa versión y no se presenta como recomendación actual.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 96: herramientas y técnicas de pruebas.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.7: pruebas de software.' }
  ],
  4760: [
    { url: 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Aad870327-56b7-4dfa-af15-e62222f45b90/METRICA_V3_Analisis_del_Sistema_de_Informacion.pdf', referencia: 'MÉTRICA v3, ASI 6.3 Normalización del Modelo Lógico de Datos: su objetivo es revisar el modelo lógico garantizando al menos tercera forma normal.' },
    { url: 'https://administracionelectronica.gob.es/documentacion/metodologias-guias/pae-metrica-v3', referencia: 'Portal oficial de la Administración electrónica para MÉTRICA v3 y sus documentos de análisis.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 95: metodología Métrica.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.4: modelado de datos, diseño relacional y normalización.' }
  ]
};

const registros = [
  [4756, ['97'], ['III-6'], ['Gradle', 'Groovy DSL', 'Kotlin DSL', 'scripts de construcción', 'integración continua'], fuentes[4756], null,
    'Respuesta C, reescrita para quitar afirmaciones comparativas no universales. Gradle define la construcción mediante scripts DSL; las versiones actuales admiten Groovy DSL y Kotlin DSL. La velocidad depende del proyecto, caché, configuración, plugins y entorno; la compatibilidad de CI no es exclusiva de Maven.', 'corregida'],
  [4757, ['93'], ['III-9'], ['orientación a objetos', 'herencia múltiple', 'clases base', 'superclases'], fuentes[4757], null,
    'Respuesta B. En la definición general, hay herencia múltiple cuando una subclase hereda directamente de más de una superclase. No debe confundirse con que una superclase tenga varias subclases; cada lenguaje puede admitir o restringir esta característica.', 'corregida'],
  [4758, ['106'], [], ['ITIL 4', 'gobernanza', 'Service Value System', 'SVS'], fuentes[4758], null,
    'Respuesta C, especificada para ITIL 4: la gobernanza es uno de los componentes del Service Value System (SVS). La cadena de valor, las cuatro dimensiones y los principios rectores son otros conceptos del marco, pero ninguno de ellos por sí solo es la gobernanza.', 'corregida'],
  [4759, ['96'], ['III-7'], ['JUnit 4', '@Test', 'pruebas unitarias', 'anotaciones', 'JUnit 3'], fuentes[4759], null,
    'Respuesta D, reformulada para fijar la versión: JUnit 4 permite marcar los métodos de prueba con @Test. JUnit 3 se apoyaba habitualmente en TestCase y nombres de método con prefijo test; JUnit 4 no exige heredar de TestCase. JUnit 4 se mantiene por razones de compatibilidad, por lo que la explicación no se extrapola a Jupiter.', 'historica'],
  [4760, ['95'], ['III-4'], ['MÉTRICA v3', 'ASI 6.3', 'modelo lógico de datos', 'normalización', 'tercera forma normal'], fuentes[4760], null,
    'Respuesta B. La tarea ASI 6.3 de MÉTRICA v3 revisa el modelo lógico de datos para garantizar, como mínimo, la tercera forma normal. Se conserva la afirmación original al coincidir con el objetivo expreso de la metodología.', 'vigente']
];

const ediciones = {
  4756: { texto: '¿Qué afirmación describe correctamente los scripts de construcción de Gradle?', opciones: ['Son siempre más lentos que los builds de Maven.', 'Gradle solo permite definir builds mediante ficheros XML.', 'Pueden escribirse mediante el DSL de Groovy o el DSL de Kotlin.', 'Las herramientas de integración continua no pueden ejecutar builds Gradle.'], respuesta_correcta: 2 },
  4757: { texto: 'En el modelo general de orientación a objetos, ¿qué se entiende por herencia múltiple?', opciones: ['Que una superclase tiene varias subclases.', 'Que una subclase hereda directamente de más de una superclase.', 'Que una clase repite varias veces la misma herencia simple.', 'Que todas las clases de orientación a objetos heredan de varias clases.'], respuesta_correcta: 1 },
  4758: { texto: 'En ITIL 4, ¿en qué marco se sitúa la función de gobernanza?', opciones: ['En la cadena de valor del servicio.', 'En las cuatro dimensiones de la gestión de servicios.', 'En el sistema de valor del servicio (SVS).', 'En los siete principios rectores.'], respuesta_correcta: 2 },
  4759: { texto: 'En JUnit 4, ¿cómo se marca normalmente un método de prueba para que el framework lo ejecute como test?', opciones: ['Con la anotación @TestGroup en la clase.', 'Haciendo que la clase herede necesariamente de TestCase.', 'Usando un método cuyo nombre comience por test, sin anotaciones.', 'Anotando el método con @Test.'], respuesta_correcta: 3 },
  4760: { texto: 'En MÉTRICA v3, ¿qué forma normal debe alcanzar como mínimo el modelo lógico de datos tras la tarea ASI 6.3?', opciones: ['Segunda forma normal.', 'Tercera forma normal.', 'Forma normal de Boyce-Codd.', 'Quinta forma normal.'], respuesta_correcta: 1 }
};

aplicar({ numero: '887', fecha: '2026-11-11', records: registros, edits: ediciones });

const repo = path.join(__dirname, '..');
const bankPath = path.join(repo, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-887.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academia = {
  4756: { bloque: 'Bloque 38 — análisis, diseño y construcción de sistemas', detalle: 'el material ubica los entornos y herramientas de construcción; el DSL y sus versiones se verifican con la documentación oficial Gradle.', url: academySystems },
  4757: { bloque: 'Bloque 38 — análisis, diseño y construcción de sistemas', detalle: 'cotejo curricular de diseño orientado a objetos; la definición general se contrasta con las especificaciones del lenguaje cuando se habla de su soporte.', url: academySystems },
  4758: { bloque: 'Bloque 41 — ITIL y COBIT', detalle: 'el temario distingue el sistema de valor y sus componentes en ITIL 4; se acota expresamente la versión.', url: academyIt },
  4759: { bloque: 'Bloque 39 — calidad y mantenimiento', detalle: 'cotejo curricular de pruebas automatizadas; la semántica de la anotación se verifica con la API JUnit 4.', url: academyQuality },
  4760: { bloque: 'Tema 093 — MÉTRICA v3', detalle: 'cotejo con el tema de Academia sobre la metodología; el nivel mínimo de normalización se comprueba directamente en ASI 6.3.', url: academyMetric }
};
for (const cambio of log.cambios) {
  const q = bank.preguntas.find(x => x.id === cambio.id);
  const a = academia[cambio.id];
  q.clasificacion.bloque_academia = `ITIC Academy 2026.1, ${a.bloque}: ${a.detalle}`;
  q.clasificacion.nota = `${q.revision.estado}. Cotejo curricular: ${a.detalle} Academy contextualiza el programa, no sustituye la fuente técnica.`;
  q.revision.observaciones += ` Cotejo curricular: ITIC Academy 2026.1, ${a.bloque}: ${a.detalle}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url: a.url, referencia: `ITIC Academy 2026.1, ${a.bloque}: cotejo del encaje A1/A2; no se usa como autoridad técnica.` });
  cambio.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo Academy y registro de lote 887 preparados.');
