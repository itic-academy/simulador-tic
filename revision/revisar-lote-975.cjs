const aplicar = require('./aplicar-lote.cjs');
const path = require('node:path');
const fs = require('node:fs');
const ref = (url, referencia) => ({url, referencia});
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy28 = 'https://drive.google.com/file/d/1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ/view?usp=drivesdk';
const academy30 = 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk';
const records = [
  [5196, ['58'], ['II-7'], ['microservicios', 'servicios autónomos', 'cohesión funcional', 'bajo acoplamiento', 'datos descentralizados'], [
    ref('https://learn.microsoft.com/en-us/azure/architecture/microservices/', 'Microsoft Azure Architecture Center, «Microservices architecture style»: describe servicios pequeños, autónomos y desplegables independientemente; cada servicio administra sus datos y las recomendaciones exigen alta cohesión funcional y bajo acoplamiento.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 58: procesamiento cooperativo, arquitectura cliente-servidor y SOA; relación arquitectónica general, sin mención explícita de microservicios.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema II.7: modelo de desarrollo basado en contenedores y microservicios, arquitectura, despliegue, monitorización y escalado.'),
    ref(academy28, 'ITIC Academy, bloque 28 «Arquitectura SOA y requisitos no funcionales», versión 2026 V2: distingue SOA y microservicios; incluye autonomía, despliegue independiente, cohesión y acoplamiento.')
  ], null, 'La formulación original sobre si los microservicios son una forma específica de SOA depende de cómo se defina SOA y puede inducir a debate terminológico. Se sustituye por una propiedad técnica más precisa: microservicios autónomos pueden escoger su propia tecnología y datos, se despliegan de manera independiente y deben mantener alta cohesión y bajo acoplamiento. Las opciones B–D niegan esos principios; la respuesta A queda inequívocamente correcta.', 'corregida'],
  [5197, ['65'], ['III-12'], ['webhook', 'webhook HTTP', 'notificación de eventos', 'endpoint', 'integración de aplicaciones'], [
    ref('https://docs.github.com/en/webhooks/using-webhooks/creating-webhooks?apiVersion=2022-11-28', 'GitHub Docs, creación de webhooks: un evento seleccionado provoca el envío de un payload al endpoint configurado mediante una petición HTTP POST.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 65: desarrollo web e interconexión con sistemas y servicios; encaje de integración, aunque el temario no menciona «webhook» por nombre.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema III.12: aplicaciones web, componentes de programación y servicios web, estándares, protocolos e interoperabilidad.'),
    ref(academy30, 'ITIC Academy, bloque 30 «Tecnologías de sistemas de la información», versión 2026.1: cotejo con arquitectura web, APIs e integración orientada a eventos. El material consultado no trata webhooks por nombre.')
  ], null, 'Un webhook permite notificar a otra aplicación cuando ocurre un evento, enviando automáticamente una petición —habitualmente HTTP POST con un payload— a una URL de destino configurada. No es un plugin de accesibilidad, un acortador de URL ni un motor de Big Data. Se explicita el mecanismo para distinguirlo de una notificación genérica.', 'corregida'],
  [5198, ['66'], ['III-11'], ['.NET', 'CLR', 'CIL', 'JIT', 'compilación a código nativo'], [
    ref('https://learn.microsoft.com/en-us/dotnet/standard/managed-execution-process', 'Microsoft Learn, proceso de ejecución administrada: el compilador JIT traduce CIL a código nativo durante la ejecución; el CLR proporciona el entorno de ejecución y sus servicios.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 66: entorno de desarrollo Microsoft .NET.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema III.11: plataforma .NET, modelo de programación, servicios y herramientas.'),
    ref(academy30, 'ITIC Academy, bloque 30 «Tecnologías de sistemas de la información», versión 2026.1: sección 7.2 CLR/CIL y sección 7.3 JIT/AOT.')
  ], null, 'El CLR es el entorno de ejecución administrada; la traducción de CIL a código nativo en tiempo de ejecución la realiza el compilador JIT que proporciona el runtime. La pregunta original atribuía la transformación al CLR y no distinguía el componente que efectivamente compila; se corrige la precisión y se añade JIT como respuesta.', 'corregida'],
  [5199, ['65', '66'], ['III-11', 'III-12'], ['Blazor WebAssembly', 'WebAssembly', '.NET', 'aplicaciones web', 'renderizado en cliente'], [
    ref('https://learn.microsoft.com/en-us/aspnet/core/blazor/hosting-models', 'Microsoft Learn, modelos de hospedaje de Blazor: el modelo Blazor WebAssembly ejecuta componentes .NET en el navegador sobre un runtime .NET basado en WebAssembly; otros modelos Blazor pueden ejecutarse en servidor o de forma híbrida.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 65 (desarrollo web) y tema 66 (entorno Microsoft .NET).'),
    ref(a2, 'Convocatoria A2 GSI 2025, temas III.11 (.NET) y III.12 (aplicaciones web y desarrollo front-end/servidor).'),
    ref(academy30, 'ITIC Academy, bloque 30 «Tecnologías de sistemas de la información», versión 2026.1: secciones de ASP.NET Core/Blazor y WebAssembly.')
  ], null, 'No todas las aplicaciones Blazor utilizan WebAssembly: Blazor Server y Blazor Hybrid usan modelos distintos. La opción correcta se precisa como «Blazor WebAssembly», que ejecuta componentes .NET en el navegador sobre un runtime .NET compilado para WebAssembly.', 'corregida'],
  [5200, ['67'], [], ['Java SE', 'JDK', 'JRE', 'JVM', 'JCP', 'JSR 402'], [
    ref('https://www.jcp.org/en/jsr/detail?id=402', 'Java Community Process, JSR 402: Java SE 27, estado activo; la especificación identifica a Java SE 27 y al JDK 27 como implementación de referencia y enumera miembros distintos de Oracle en el grupo experto.'),
    ref('https://docs.oracle.com/javase/8/docs/technotes/guides/', 'Oracle Java SE 8 Platform Overview: describe al JRE como proveedor de bibliotecas, máquina virtual Java y componentes de ejecución; explica la relación histórica JDK/JRE.'),
    ref('https://docs.oracle.com/en/java/javase/11/migrate/significant-changes-jdk-11.html', 'Oracle JDK Migration Guide: desde JDK 11 Oracle dejó de ofrecer descargas separadas de JRE y Server JRE; el JDK 11 tampoco incluye la antigua imagen JRE anidada descrita en el layout JDK 8.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 67: entorno de desarrollo JAVA.'),
    ref(academy30, 'ITIC Academy, bloque 30 «Tecnologías de sistemas de la información», versión 2026.1: Java SE 2026, lenguaje, JVM, JDK y herramientas; el material no menciona específicamente JSR 402/JCP.')
  ], null, 'La pregunta original no tenía una única afirmación falsa: un JRE sí incluye una JVM, pero la frase que atribuye la JVM en exclusiva a Oracle también es imprecisa; además, el empaquetado cambió a partir de JDK 9/11. Se reemplaza por «¿Cuál es una afirmación correcta?» y se fija una respuesta verificable: Java SE 27 se publicó como JSR 402 en el Java Community Process. Las demás opciones describen falsamente el JRE, el layout de JDK 11 o la posibilidad de implementaciones compatibles por otros participantes. El programa A1 cubre el entorno Java; no se fuerza una etiqueta A2 para una pregunta específica de Java SE/JCP.', 'corregida']
];
const edits = {
  5196: {texto: 'En una arquitectura de microservicios, ¿cuál de estas afirmaciones describe una característica habitual?', opciones: ['Los servicios son autónomos y pueden desplegarse independientemente; cada uno puede gestionar sus propios datos y tecnología.', 'Todos los servicios deben desarrollarse con el mismo lenguaje y la misma plataforma.', 'Los datos de todos los servicios deben estar en una base central compartida.', 'Se busca baja cohesión funcional y alto acoplamiento entre servicios.'], respuesta_correcta: 0, comentarios: 'La formulación original sobre si los microservicios son una forma específica de SOA depende de cómo se defina SOA y puede inducir a debate terminológico. Se sustituye por una propiedad técnica más precisa: microservicios autónomos pueden escoger su propia tecnología y datos, se despliegan de manera independiente y deben mantener alta cohesión y bajo acoplamiento. Las opciones B–D niegan esos principios; la respuesta A queda inequívocamente correcta.'},
  5197: {texto: 'En la integración de aplicaciones, ¿qué caracteriza a un webhook?', opciones: ['Un complemento que añade controles de accesibilidad a una página web.', 'Una notificación de evento que provoca el envío automático de una petición HTTP al endpoint configurado en otra aplicación.', 'Un servicio que acorta URL para hacerlas seguras.', 'Un motor que procesa lotes de datos en plataformas de Big Data.'], respuesta_correcta: 1, comentarios: 'Un webhook permite notificar a otra aplicación cuando ocurre un evento, enviando automáticamente una petición —habitualmente HTTP POST con un payload— a una URL de destino configurada. No es un plugin de accesibilidad, un acortador de URL ni un motor de Big Data. Se explicita el mecanismo para distinguirlo de una notificación genérica.'},
  5198: {texto: 'En .NET, ¿qué componente compila CIL a código máquina nativo cuando se ejecutan los métodos?', opciones: ['Un intérprete de bytecode de Java.', 'El empaquetador COM.', 'El propio código CIL, sin compilación.', 'El compilador JIT (Just-In-Time) proporcionado por el runtime .NET.'], respuesta_correcta: 3, comentarios: 'El CLR es el entorno de ejecución administrada; la traducción de CIL a código nativo en tiempo de ejecución la realiza el compilador JIT que proporciona el runtime. La pregunta original atribuía la transformación al CLR y no distinguía el componente que efectivamente compila; se corrige la precisión y se añade JIT como respuesta.'},
  5199: {texto: '¿Qué modelo de Blazor ejecuta componentes .NET en el navegador mediante WebAssembly?', opciones: ['Razor Pages.', 'Blazor WebAssembly.', 'Blazor Server.', 'Blazor Hybrid.'], respuesta_correcta: 1, comentarios: 'No todas las aplicaciones Blazor utilizan WebAssembly: Blazor Server y Blazor Hybrid usan modelos distintos. La opción correcta se precisa como «Blazor WebAssembly», que ejecuta componentes .NET en el navegador sobre un runtime .NET compilado para WebAssembly.'},
  5200: {texto: '¿Cuál de estas afirmaciones sobre Java SE es correcta?', opciones: ['Java SE 27 se publicó mediante la JSR 402 dentro del Java Community Process (JCP).', 'El JRE, por definición, no incluye ni utiliza una máquina virtual Java (JVM).', 'El JDK 11 contiene obligatoriamente un subdirectorio JRE anidado como el del layout de JDK 8.', 'La especificación de la JVM prohíbe que proveedores distintos de Oracle creen implementaciones compatibles.'], respuesta_correcta: 0, comentarios: 'La pregunta original no tenía una única afirmación falsa: un JRE sí incluye una JVM, pero la frase que atribuye la JVM en exclusiva a Oracle también es imprecisa; además, el empaquetado cambió a partir de JDK 9/11. Se reemplaza por «¿Cuál es una afirmación correcta?» y se fija una respuesta verificable: Java SE 27 se publicó como JSR 402 en el Java Community Process. Las demás opciones describen falsamente el JRE, el layout de JDK 11 o la posibilidad de implementaciones compatibles por otros participantes. El programa A1 cubre el entorno Java; no se fuerza una etiqueta A2 para una pregunta específica de Java SE/JCP.'}
};
const logPath = path.join(__dirname, 'cambios-lote-975.json');
if (!fs.existsSync(logPath)) aplicar({numero: '975', fecha: '2026-11-12', records, edits});
const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  5196: ['ITIC Academy, bloque 28 «Arquitectura SOA y requisitos no funcionales», versión 2026 V2: contenido de SOA y subsección de microservicios con autonomía, despliegue independiente, cohesión y acoplamiento.', 'Cotejo A1-58 (SOA, cobertura relacionada) y A2-II.7 (microservicios, epígrafe explícito). Se evita convertir en axioma una taxonomía discutible de SOA frente a microservicios.'],
  5197: ['ITIC Academy, bloque 30 «Tecnologías de sistemas de la información», versión 2026.1: arquitectura web, APIs e integración/eventos; no aparece el término «webhook» por nombre.', 'Cotejo A1-65 por interconexión web con sistemas y servicios, y A2-III.12 por aplicaciones/servicios web e interoperabilidad. El detalle técnico de webhook se documenta con GitHub Docs.'],
  5198: ['ITIC Academy, bloque 30 «Tecnologías de sistemas de la información», versión 2026.1: apartados CLR/CIL y JIT/AOT del tema .NET.', 'Cotejo A1-66/A2-III.11; se conserva la distinción que hace el material entre entorno CLR y compilador JIT, verificada en Microsoft Learn.'],
  5199: ['ITIC Academy, bloque 30 «Tecnologías de sistemas de la información», versión 2026.1: ASP.NET Core, Blazor y WebAssembly.', 'Cotejo A1-65/A1-66 y A2-III.11/III.12; Microsoft Learn diferencia el hospedaje Blazor WebAssembly de Server e Hybrid.'],
  5200: ['ITIC Academy, bloque 30 «Tecnologías de sistemas de la información», versión 2026.1: secciones Java SE, JVM/JDK y herramientas; advierte que JRE separado dejó de ser la regla con JDK 11. No aborda JSR 402/JCP por nombre.', 'Cotejo A1-67 (entorno Java). No se asigna tema A2: el programa examinado no tiene un epígrafe específico de Java SE/JCP y A2-III.10 se refiere a la arquitectura Jakarta EE, no a una pregunta de estandarización Java SE.']
};
const motive = 'Cotejo curricular del material ITIC Academy accesible en Drive contra temas oficiales A1/A2; se documentan también las materias relacionadas que el programa no enumera por nombre.';
for (const [key, [block, note]] of Object.entries(academy)) {
  const id = Number(key), q = bank.preguntas.find(x => x.id === id), entry = log.cambios.find(x => x.id === id);
  if (!q || !entry) throw Error(`Falta ${id}`);
  const before = {bloque_academia: q.clasificacion.bloque_academia, nota: q.clasificacion.nota};
  q.clasificacion.bloque_academia = block;
  q.clasificacion.nota = note;
  const corrections = entry.correcciones_posteriores || [];
  if (!corrections.some(x => x.motivo === motive)) corrections.push({fecha: '2026-11-12', motivo: motive, clasificacion_anterior: before, clasificacion_actualizada: {bloque_academia: block, nota: note}});
  entry.correcciones_posteriores = corrections;
  entry.actualizada = structuredClone(q);
}
const byId = new Map(log.cambios.map(c => [c.id, c]));
let replaced = 0;
const raw = fs.readFileSync(bankPath, 'utf8');
const output = raw.replace(/^    \{[\s\S]*?^    \}/gm, block => {
  const old = JSON.parse(block), change = byId.get(old.id);
  if (!change) return block;
  replaced++;
  return JSON.stringify(change.actualizada, null, 2).split('\n').map(line => `    ${line}`).join('\n');
});
if (replaced !== 5) throw Error(`Se esperaban 5 preguntas, hubo ${replaced}`);
fs.writeFileSync(bankPath, output);
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
