const path = require('node:path');
const fs = require('node:fs');
const aplicar = require('./aplicar-lote.cjs');

const fireStandard = 'https://tienda.aenor.com/p/norma-une-en-2-1994-a1-2005-n0034982';
const fireAuthority = 'https://www.london-fire.gov.uk/media/cnyexexn/hand-held-portable-firefighting-equipment-gn08.pdf';
const ums = 'https://learn.microsoft.com/en-us/windows/win32/procthread/user-mode-scheduling';
const netVersions = 'https://learn.microsoft.com/en-us/dotnet/framework/install/versions-and-dependencies';
const netSxs = 'https://learn.microsoft.com/en-us/dotnet/framework/deployment/side-by-side-execution';
const netCls = 'https://learn.microsoft.com/en-us/dotnet/standard/language-independence';
const netLifecycle = 'https://learn.microsoft.com/en-us/lifecycle/products/microsoft-net-framework';
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const drive = {
  hardware: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',
  os: 'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk',
  database: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',
  dotnet: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk'
};

const records = [
  [5546, [53], ['IV-6'], ['clase de fuego', 'UNE-EN 2', 'clase D', 'metales'], [
    { url: fireStandard, referencia: 'AENOR, ficha vigente UNE-EN 2:1994/A1:2005, Clases de fuego: identifica la norma española en vigor y su objeto, la clasificación europea de fuegos.' },
    { url: fireAuthority, referencia: 'London Fire Brigade, guía técnica de equipos portátiles contra incendios, tabla de clases de fuego: clase D corresponde a fuegos que implican metales.' },
    { url: a1, referencia: 'Convocatoria oficial A1 GSI 2025, tema 53: seguridad de servidores y diseño/gestión de centros de proceso de datos.' },
    { url: a2, referencia: 'Convocatoria oficial A2 GSI 2025, tema IV.6: planificación física de CPD, protección y riesgo.' },
    { url: drive.hardware, referencia: 'ITIC Academy 2026, bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización: seguridad física de instalaciones y centros de datos; A1-53 y A2-IV.6.' }
  ], null, 'La UNE-EN 2 clasifica fuegos por el tipo de combustible. La clase D comprende fuegos que afectan a metales combustibles, por ejemplo magnesio o sodio; no es la categoría general de sólidos orgánicos (A), líquidos (B) ni gases (C). La guía del servicio de bomberos confirma la descripción de la clase. Respuesta B.', 'corregida'],
  [5547, [53, 56, 57], ['IV-5', 'IV-6'], ['hot-swap', 'sustitución en caliente', 'componentes reemplazables', 'alta disponibilidad'], [
    { url: 'https://www.ti.com/document-viewer/lit/html/SLLA548A/GUID-C144ABD8-2146-42EC-B91A-6DF2B1736B76', referencia: 'Texas Instruments, What is Hot Swap?: define la sustitución/adición en un sistema energizado sin pausarlo, apagarlo ni reiniciarlo y manteniendo la operación normal; la capacidad exige componentes diseñados para ello.' },
    { url: 'https://support.hpe.com/hpesc/public/docDisplay?docId=sd00005071en_us&docLocale=en_US&page=GUID-33A76A07-216C-4DA5-AC41-560533B6EB54.html', referencia: 'HPE ProLiant Compute DL380a Gen12 User Guide, Component touchpoints: componentes hot-plug se pueden retirar e instalar mientras el sistema funciona; se enumeran discos, fuentes redundantes y ventiladores.' },
    { url: a1, referencia: 'Convocatoria oficial A1 GSI 2025, temas 53, 56 y 57: servidores, almacenamiento y sistemas multiusuario.' },
    { url: a2, referencia: 'Convocatoria oficial A2 GSI 2025, temas IV.5 e IV.6: almacenamiento, alta disponibilidad, protección y recuperación.' },
    { url: drive.hardware, referencia: 'ITIC Academy 2026, bloque 26 Hardware, servidores, CPD, almacenamiento, virtualización y continuidad: servidores, almacenamiento y disponibilidad; A1-53/56/57 y A2-IV.5/6.' }
  ], null, 'La sustitución en caliente solo es posible para un componente y una plataforma diseñados y configurados para esa operación; se reemplaza sin apagar el sistema y se busca mantener el servicio. No basta que haya alimentación en el bus ni existe una ventana universal de dos minutos. Se evita afirmar que cualquier sustitución nunca altera el comportamiento.', 'corregida'],
  [5548, [59], ['II-2'], ['UMS', 'User-Mode Scheduling', 'planificación de hilos', 'API heredada de Windows'], [
    { url: ums, referencia: 'Microsoft Learn, User-Mode Scheduling: UMS es un mecanismo ligero para que la aplicación planifique sus propios hilos y pueda alternar entre ellos en modo usuario sin involucrar al planificador del sistema en cada cambio. La página advierte que no está soportado desde Windows 11 y que las llamadas fallan con ERROR_NOT_SUPPORTED.' },
    { url: a1, referencia: 'Convocatoria oficial A1 GSI 2025, tema 59: fundamentos y evolución de sistemas operativos.' },
    { url: a2, referencia: 'Convocatoria oficial A2 GSI 2025, tema II.2: fundamentos, características y administración de sistemas operativos.' },
    { url: drive.os, referencia: 'ITIC Academy 2026, bloque 27 Sistemas Operativos: hilos, planificación y Windows; A1-59/61 y A2-II.2/IV.1.' }
  ], null, 'UMS significa User-Mode Scheduling: una API/mecanismo de Windows para que una aplicación gestione la planificación de sus propios hilos ligeros, reduciendo cambios al planificador del kernel. Microsoft indica que ya no se admite en Windows 11; por ello el ítem se identifica expresamente como tecnología heredada y se registra como histórica, no como función vigente en toda versión actual de Windows.', 'historica'],
  [5549, [64], ['II-5', 'III-4'], ['modelo relacional', 'grado de relación', 'atributos', 'cardinalidad'], [
    { url: 'https://www.cs.uct.ac.za/mit_notes/database/htmls/chp01.html', referencia: 'University of Cape Town, Database Design: distingue número de atributos de una relación (degree/grade) del número de filas o tuplas (cardinality).' },
    { url: 'https://faculty.kutztown.edu/shim/356CHAPTER%204.pdf', referencia: 'Kutztown University, capítulo Relational Model: el grado de una relación es el número de atributos n de su esquema relacional.' },
    { url: a1, referencia: 'Convocatoria oficial A1 GSI 2025, tema 64: modelo relacional, SQL y estándares de interoperabilidad.' },
    { url: a2, referencia: 'Convocatoria oficial A2 GSI 2025, tema II.5 y III.4: bases de datos relacionales y modelado de datos.' },
    { url: drive.database, referencia: 'ITIC Academy 2026, bloque 29 Bases de Datos, SQL y Modelado: modelo relacional y diseño de esquemas; A1-64 y A2-T.5/III.4.' }
  ], null, 'En el modelo relacional, el grado (o aridad) de una relación es el número de atributos de su esquema; la cardinalidad es el número de tuplas. La opción C es correcta y se aclara el contraste que suele generar confusión.', 'vigente'],
  [5550, [66], ['III-11'], ['.NET Framework', 'CLR', 'Common Language Specification', 'side-by-side', 'versiones históricas'], [
    { url: netVersions, referencia: 'Microsoft Learn, .NET Framework versions and dependencies: correlaciona versiones Framework con CLR; Framework 1.1 usa CLR 1.1, 2.0 usa CLR 2.0, y las versiones 2.0/3.0/3.5 comparten CLR 2.0.' },
    { url: netSxs, referencia: 'Microsoft Learn, Side-by-Side Execution in .NET Framework: describe la coexistencia de versiones de CLR y los requisitos de compatibilidad de aplicaciones.' },
    { url: netCls, referencia: 'Microsoft Learn, Language independence and language-independent components: CLS es el conjunto de reglas comunes que permiten interoperabilidad entre lenguajes que implementan la especificación.' },
    { url: netLifecycle, referencia: 'Microsoft Lifecycle, .NET Framework: las versiones 4.5.2, 4.6 y 4.6.1 finalizaron soporte el 26 de abril de 2022; la referencia a .NET 4.6 como disponibilidad vigente en la web quedó obsoleta.' },
    { url: a1, referencia: 'Convocatoria oficial A1 GSI 2025, tema 66: entorno de desarrollo Microsoft .NET.' },
    { url: a2, referencia: 'Convocatoria oficial A2 GSI 2025, tema III.11: plataforma .NET, modelo, servicios, herramientas, persistencia y seguridad.' },
    { url: drive.dotnet, referencia: 'ITIC Academy 2026, bloque 30 Tecnologías de Sistemas de Información: entorno .NET, CLR y CLS; A1-66 y A2-III.11.' }
  ], null, 'Se reformula como pregunta sobre las versiones heredadas 1.0, 1.1 y 2.0, evitando la antigua mención de descarga de .NET Framework 4.6, cuyo soporte terminó en 2022. Estas versiones no comparten un único CLR: .NET 1.1 usa CLR 1.1 y .NET 2.0 usa CLR 2.0; por ello B es la afirmación falsa. La CLS sí define reglas comunes para interoperar entre lenguajes .NET.', 'corregida']
];

const edits = {
  5546: {
    texto: 'Según la clasificación de fuegos de UNE-EN 2, un fuego de clase D afecta a:',
    respuesta_correcta: 1
  },
  5547: {
    texto: 'En un servidor o sistema diseñado para ello, ¿qué significa sustituir un componente en caliente (hot-swap)?',
    opciones: [
      'Que basta con mantener energizado el bus; el componente puede ser de cualquier tipo.',
      'Que el componente compatible se puede retirar o reemplazar con el sistema en funcionamiento, sin apagarlo ni reiniciarlo y manteniendo la operación del sistema.',
      'Que debe sustituirse siempre en menos de dos minutos, cualquiera que sea el componente.',
      'Que es obligatorio interrumpir el servicio y apagar el equipo antes de retirar el componente.'
    ],
    respuesta_correcta: 1
  },
  5548: {
    texto: 'En la API heredada de Windows, User-Mode Scheduling (UMS), no compatible desde Windows 11, es:',
    opciones: [
      'Una tecnología de telefonía móvil.',
      'Un mecanismo que permite a una aplicación planificar sus propios hilos y alternar entre ellos en modo usuario sin recurrir al planificador del sistema en cada cambio.',
      'Una técnica que divide cada hilo de usuario en dos hilos, uno de proceso y otro de kernel.',
      'Una característica del CLR que convierte los hilos administrados en procesos independientes.'
    ],
    respuesta_correcta: 1
  },
  5549: {
    texto: 'En el modelo relacional, ¿qué se denomina grado (o aridad) de una relación?',
    respuesta_correcta: 2
  },
  5550: {
    texto: 'Sobre las versiones heredadas de .NET Framework 1.0, 1.1 y 2.0 y sus CLR, seleccione la afirmación FALSA:',
    opciones: [
      'Las aplicaciones .NET Framework 1.0 y 1.1 tienen compatibilidad entre sí, aunque las funciones añadidas en 1.1 no existen en 1.0.',
      'Las tres versiones comparten un único CLR y una aplicación compilada para .NET Framework 2.0 puede ejecutarse sobre CLR 1.1.',
      '.NET Framework 1.1 usa CLR 1.1 y .NET Framework 2.0 usa CLR 2.0.',
      'La Common Language Specification establece reglas comunes para facilitar la interoperabilidad entre lenguajes que implementan .NET.'
    ],
    respuesta_correcta: 1
  }
};

const log = path.join(__dirname, 'cambios-lote-1045.json');
if (!fs.existsSync(log)) aplicar({ numero: '1045', fecha: '2026-11-12', records, edits });

const bankFile = path.join(__dirname, '..', 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankFile, 'utf8'));
const changeLog = JSON.parse(fs.readFileSync(log, 'utf8'));
const academy = {
  5546: 'ITIC Academy 2026, bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización: protección física de centros de datos; A1-53 y A2-IV.6.',
  5547: 'ITIC Academy 2026, bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización: servidores, almacenamiento y alta disponibilidad; A1-53/56/57 y A2-IV.5/IV.6.',
  5548: 'ITIC Academy 2026, bloque 27 Sistemas Operativos: hilos, planificación y Windows; A1-59/61 y A2-II.2/IV.1.',
  5549: 'ITIC Academy 2026, bloque 29 Bases de Datos, SQL y Modelado: esquema relacional, atributos y tuplas; A1-64 y A2-II.5/III.4.',
  5550: 'ITIC Academy 2026, bloque 30 Tecnologías de Sistemas de Información: plataforma .NET, CLR y CLS; A1-66 y A2-III.11.'
};
for (const c of changeLog.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  q.clasificacion.bloque_academia = academy[c.id];
  q.clasificacion.nota = 'Clasificación cotejada con los programas oficiales A1/A2 de 2025 y el temario ITIC Academy 2026; la academia se usa como mapa curricular, no como fuente técnica o normativa.';
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankFile, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(log, JSON.stringify(changeLog, null, 2) + '\n');
