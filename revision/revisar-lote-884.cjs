const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academySystems = 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const academyQuality = 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk';

const fuentes = {
  4741: [
    { url: 'https://ntrs.nasa.gov/api/citations/19980227761/downloads/19980227761.pdf', referencia: 'NASA-GB-001-96, sección 5.1.1 y tabla 5-2: el modelo waterfall funciona mejor con requisitos conocidos; entre sus limitaciones enumera que no acomoda fácilmente cambios y que el producto no está disponible para uso inicial hasta fases tardías. La guía también señala los contextos donde encaja mejor, evitando generalizar a toda variante del modelo.' },
    { url: 'https://swehb.nasa.gov/spaces/7150/pages/16449735/SWE-019+Software+Life+Cycle', referencia: 'NASA Software Engineering Handbook SWE-019: el waterfall estándar ejecuta fases secuencialmente; las revisiones de fase permiten cambios controlados, pero el modelo desalienta volver a fases cerradas.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 88: metodologías de desarrollo de sistemas.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, temas III.1 (modelos de ciclo de vida) y III.2 (metodologías de desarrollo).' }
  ],
  4742: [
    { url: 'https://www.omg.org/spec/UML/2.5.1/PDF', referencia: 'OMG UML 2.5.1, cláusula 14.2, notación de clases: el compartimento de nombre aparece primero; el compartimento de atributos, si no se suprime, está debajo del nombre y encima de otros compartimentos (incluidas operaciones).' },
    { url: 'https://www.omg.org/spec/UML/About-UML/', referencia: 'Catálogo oficial OMG de las versiones formales de UML.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, temas 89 y 93: modelos de clases, diseño y notaciones de software.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.9: análisis y diseño orientado a objetos y UML.' }
  ],
  4743: [
    { url: 'https://junit.org/junit4/javadoc/4.13.1/org/junit/AfterClass.html', referencia: 'API oficial JUnit 4.13.1: @AfterClass designa un método estático que se ejecuta una vez después de todos los métodos de test de la clase.' },
    { url: 'https://junit.org/junit4/faq.html', referencia: 'FAQ oficial JUnit 4: documenta @Test y los métodos @BeforeClass/@AfterClass, junto con el ciclo de ejecución por clase.' },
    { url: 'https://junit.org/junit4/', referencia: 'Portal oficial JUnit 4: declara la rama JUnit 4 en modo de mantenimiento; el enunciado se fija a la versión 4 y se conserva como contenido histórico.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 96: pruebas de software, niveles, técnicas y herramientas.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.7: pruebas de software y herramientas.' }
  ],
  4744: [
    { url: 'https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/n-tier', referencia: 'Microsoft Azure Architecture Center, N-tier: separa capas lógicas y tiers físicos; identifica como desventaja que los tiers pueden añadir complejidad y latencia. Escalabilidad y fiabilidad dependen de su diseño/despliegue y no son garantías automáticas de la arquitectura.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 92: diseño arquitectónico de sistemas.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.9: análisis y diseño de software.' }
  ],
  4745: [
    { url: 'https://swehb.nasa.gov/download/attachments/16450360/N_PR_7150_002B_.pdf?api=v2', referencia: 'NASA Procedural Requirements NPR 7150.2B, capítulo 4: NASA no recomienda un modelo de ciclo de vida único; cada modelo tiene fortalezas y debilidades y la selección se documenta según el proyecto. Por ello no puede afirmarse que los modelos basados en transformaciones sean adecuados para cualquier proyecto.' },
    { url: 'https://swehb.nasa.gov/spaces/7150/pages/16449735/SWE-019+Software+Life+Cycle', referencia: 'NASA Software Engineering Handbook SWE-019, sección 2.2.7: describe modelos waterfall, incremental y evolutivo y cuándo son más apropiados; requisitos cambiantes favorecen el modelo evolutivo frente a waterfall estricto.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 88: metodologías de desarrollo; definición y modelos del ciclo de vida del software.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.1: concepto, fases y modelos del ciclo de vida de sistemas.' }
  ]
};

const registros = [
  [4741, ['88'], ['III-1', 'III-2'], ['ciclo de vida', 'modelo en cascada', 'waterfall', 'cambios de requisitos'], fuentes[4741], null,
    'Respuesta B, con alcance acotado al modelo en cascada estricto: su secuencialidad y la dificultad para reabrir fases concluidas hacen que acomode peor los cambios tardíos que los modelos iterativos/evolutivos. Las revisiones y controles de cambios sí pueden existir, y no se afirma que todo proyecto waterfall “congele” absolutamente los requisitos.', 'corregida'],
  [4742, ['89', '93'], ['III-9'], ['UML', 'diagrama de clases', 'compartimentos', 'atributos', 'operaciones'], fuentes[4742], null,
    'Respuesta A, reformulada según UML 2.5.1: el nombre ocupa el compartimento superior; el de atributos se muestra debajo de este y encima de los demás compartimentos (por ejemplo, operaciones), salvo que se suprima. Se evita decir que atributos siempre aparecen, pues la especificación permite omitir compartimentos.', 'corregida'],
  [4743, ['96'], ['III-7'], ['JUnit 4', '@AfterClass', 'pruebas unitarias', 'anotaciones', 'tecnología histórica'], fuentes[4743], null,
    'Respuesta C, pregunta ahora positiva y versionada: en JUnit 4, @AfterClass anota el método estático que se ejecuta una vez después de todos los tests de la clase. La pregunta original negativa dependía de demostrar que @Each no existe y no explicitaba la diferencia entre JUnit 4 y JUnit Jupiter; la versión queda marcada como histórica por estar JUnit 4 en mantenimiento.', 'historica'],
  [4744, ['92', '93'], ['III-9'], ['arquitectura multicapa', 'n-tier', 'separación de responsabilidades', 'escalabilidad', 'latencia', 'trade-offs'], fuentes[4744], null,
    'Respuesta D, reformulada para que haya una única afirmación falsa: una arquitectura multicapa puede separar responsabilidades y facilitar escalado independiente, pero no garantiza por sí misma mejor rendimiento, menor complejidad ni alta fiabilidad. Los tiers físicos pueden introducir saltos de red, latencia y complejidad operativa.', 'corregida'],
  [4745, ['88'], ['III-1', 'III-2'], ['ciclo de vida del software', 'modelos de ciclo de vida', 'selección según proyecto', 'transformacional'], fuentes[4745], null,
    'Respuesta C, con una afirmación general inequívocamente falsa: ningún modelo de ciclo de vida es adecuado para todos los proyectos. NASA exige seleccionar y documentar el modelo conforme a las necesidades y características del proyecto; no se puede declarar universalmente aptos los modelos basados en transformaciones.', 'corregida']
];

const ediciones = {
  4741: { texto: '¿Qué limitación suele tener el modelo en cascada estricto cuando cambian los requisitos después de cerrar una fase?', opciones: ['Hace imposible realizar revisiones o control formal de cambios.', 'No acomoda fácilmente los cambios tardíos, porque suele desaconsejar reabrir fases ya concluidas.', 'Produce una versión de uso después de cada iteración.', 'Presupone que los requisitos no necesitan conocerse antes de iniciar el diseño.'], respuesta_correcta: 1 },
  4742: { texto: 'En la notación de clases de UML 2.5.1, ¿dónde se sitúa el compartimento de atributos respecto al nombre de la clase?', opciones: ['Debajo del compartimento del nombre y por encima de los demás compartimentos, si no se suprime.', 'En la parte superior, antes del nombre de la clase.', 'En un compartimento obligatorio situado debajo de las operaciones.', 'Siempre en una caja independiente fuera del rectángulo de clase.'], respuesta_correcta: 0 },
  4743: { texto: 'En JUnit 4, ¿qué anotación marca el método estático que debe ejecutarse una sola vez después de todos los métodos de prueba de la clase?', opciones: ['@Each.', '@Test.', '@AfterClass.', '@Ignore.'], respuesta_correcta: 2 },
  4744: { texto: '¿Cuál de las siguientes afirmaciones NO es una ventaja garantizada por adoptar una arquitectura multicapa?', opciones: ['Separar responsabilidades entre componentes.', 'Permitir escalar por separado tiers que tengan requisitos distintos.', 'Facilitar el mantenimiento si las dependencias entre capas están bien delimitadas.', 'Garantizar siempre menor complejidad operativa, mejor rendimiento y alta fiabilidad.'], respuesta_correcta: 3 },
  4745: { texto: 'Sobre los modelos de ciclo de vida del software, ¿qué afirmación no puede sostenerse como regla general?', opciones: ['La selección debe considerar las características del proyecto.', 'El ciclo de vida comprende actividades desde la concepción/desarrollo hasta la operación, mantenimiento y retirada.', 'Los modelos basados en transformaciones son adecuados para cualquier tipo de proyecto.', 'Ningún modelo es el mejor para todos los proyectos.'], respuesta_correcta: 2 }
};

aplicar({ numero: '884', fecha: '2026-11-11', records: registros, edits: ediciones });

const repo = path.join(__dirname, '..');
const bankPath = path.join(repo, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-884.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academia = {
  4741: { bloque: 'Bloque 38 — análisis, diseño y construcción de sistemas', detalle: 'el programa cubre metodologías de desarrollo y ciclo de vida; los límites de waterfall se contrastan con NASA.', url: academySystems },
  4742: { bloque: 'Bloque 38 — análisis, diseño y construcción de sistemas', detalle: 'cotejo curricular de UML y modelado de clases; la sintaxis se verifica en la especificación OMG.', url: academySystems },
  4743: { bloque: 'Bloque 39 — calidad y mantenimiento', detalle: 'cotejo curricular del tema de pruebas; la anotación se comprueba en la API oficial de la versión 4.', url: academyQuality },
  4744: { bloque: 'Bloque 38 — análisis, diseño y construcción de sistemas', detalle: 'cotejo curricular de diseño arquitectónico; los trade-offs de n-tier se apoyan en Microsoft Architecture Center.', url: academySystems },
  4745: { bloque: 'Bloque 38 — análisis, diseño y construcción de sistemas', detalle: 'el material cubre ciclo de vida y metodologías; la adecuación a cada proyecto se contrasta con NASA.', url: academySystems }
};
for (const cambio of log.cambios) {
  const q = bank.preguntas.find(x => x.id === cambio.id);
  const a = academia[cambio.id];
  q.clasificacion.bloque_academia = `ITIC Academy 2026.1, ${a.bloque}: ${a.detalle}`;
  q.clasificacion.nota = `${q.revision.estado}. Cotejo curricular: ${a.detalle} Academy contextualiza el programa, no sustituye la fuente técnica.`;
  q.revision.observaciones += ` Cotejo curricular: ITIC Academy 2026.1, ${a.bloque}: ${a.detalle}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url: a.url, referencia: `ITIC Academy 2026.1, ${a.bloque}: cotejo del encaje A1/A2; no se usa como fundamento técnico de la respuesta.` });
  cambio.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo Academy y registro de lote 884 preparados.');
