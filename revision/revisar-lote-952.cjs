const aplicar = require('./aplicar-lote.cjs');

const ref = (url, referencia) => ({ url, referencia });
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/buscar/doc.php?id=BOE-A-2025-26262';
const academy26 = 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk';
const academy30 = 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk';
const academy38 = 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const academy47 = 'https://drive.google.com/file/d/1nXa2jkiUqpu31smkt5D8WswcTgEN7XlB/view?usp=drivesdk';

const records = [
  [5081, ['89'], ['III-9'], ['UML', 'diagramas UML', 'diagrama de clases', 'secuencia', 'actividad', 'modelo entidad-relación'], [
    ref('https://www.omg.org/spec/UML/2.5.1/PDF', 'OMG, UML 2.5.1, especificación normativa: define los diagramas estructurales y de comportamiento, incluidos los diagramas de clases, secuencia y actividad. El modelo entidad-relación no es un tipo de diagrama UML.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 89: modelado de dominio y modelos entidad-relación y de clases.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, tema III.9: análisis y diseño orientado a objetos y UML.'),
    ref(academy38, 'ITIC Academy, bloque 38 «Análisis, diseño y construcción de sistemas de información», versión 2026.1; cotejo curricular de modelado y diseño.')
  ], null, 'Respuesta A. UML 2.5.1 reconoce diagramas de clases (estructura) y de secuencia y actividad (comportamiento). Un diagrama entidad-relación pertenece al modelado de datos y no es una categoría de diagrama UML, aunque ambos modelos puedan relacionarse en el diseño de un sistema. Se sustituye la expresión vaga «tipos de diagramas que se usan en UML» por una referencia a la especificación UML 2.5.1.', 'corregida'],
  [5082, ['87'], [], ['MÉTRICA v3', 'Plan de Sistemas de Información', 'PSI', 'marco estratégico'], [
    ref('https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A8d2cfee5-5617-4dea-8cf8-7b7a0131de84/METRICA_V3_Panificacion_de_Sistemas_de_Informacion.pdf', 'Ministerio de Administraciones Públicas, MÉTRICA v3, Planificación de Sistemas de Información, «Descripción y objetivos»: el PSI obtiene un marco de referencia para desarrollar sistemas de información que respondan a los objetivos estratégicos de la organización; incluye cartera priorizada de proyectos y horizonte de varios años.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 87: planificación estratégica de sistemas de información y plan de sistemas de información.'),
    ref('https://docs.google.com/document/d/1BRLBHuHySkuHV-P7dta8o0I_Rn6BznrB/edit?usp=drivesdk&ouid=107088454749630873035&rtpof=true&sd=true', 'ITIC Academy, documento de organización y gestión de sistemas de información, temas A1 28, 29 y 34; cotejo de contexto organizativo. No se localizó un bloque de Academy que trate directamente el proceso PSI de MÉTRICA v3; el programa A2 tampoco presenta un epígrafe equivalente directo.')
  ], null, 'Respuesta A. El proceso PSI de MÉTRICA v3 establece un marco de referencia para desarrollar los sistemas de información en respuesta a los objetivos estratégicos, con proyectos priorizados y planificación plurianual. La opción B describe el análisis de una necesidad concreta y una solución a corto plazo, no el objetivo estratégico del PSI. Se acota el enunciado expresamente a MÉTRICA v3.', 'corregida'],
  [5083, ['132'], ['IV-6'], ['VirtualBox', 'SMP', 'vCPU', 'CPU virtual', 'virtualización', 'límite de procesadores'], [
    ref('https://docs.oracle.com/en/virtualization/virtualbox/7.2/user/Introduction.html', 'Oracle VirtualBox 7.2 User Guide, «Virtual Hardware»: SMP permite presentar hasta 32 CPU virtuales a cada VM; la misma sección describe la conexión de dispositivos USB sin controladores específicos de dispositivo instalados en el host.'),
    ref('https://docs.oracle.com/en/virtualization/virtualbox/7.2/user/working-with-vms.html', 'Oracle VirtualBox 7.2 User Guide, «Processor Tab»: el ajuste Number of CPUs configura el número de núcleos virtuales que ve el invitado; recomienda no configurar más núcleos que los disponibles físicamente en el host.'),
    ref('https://docs.oracle.com/en/virtualization/virtualbox/7.2/user/AdvancedTopics.html', 'Oracle VirtualBox 7.2 User Guide, «CPU Hot-Plugging»: `VBoxManage modifyvm --cpus` especifica el máximo de CPU que puede tener la máquina virtual.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 132: virtualización de sistemas y centros de datos.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, tema IV.6: virtualización y consolidación de servidores y recursos.'),
    ref(academy26, 'ITIC Academy, bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», versión 2026; el contenido y el mapa incluyen los temas A1 132 y A2 C6.')
  ], null, 'Respuesta D. La guía vigente de Oracle VirtualBox 7.2 fija el máximo en 32 CPU virtuales por máquina. El número de núcleos se configura para el invitado y la documentación aconseja no asignar más núcleos de los disponibles físicamente en el host. La formulación original decía 128 CPUs y presentaba la capacidad como si fuera atemporal; se reemplaza por un reactivo explícito sobre la versión 7.2 y sus límites documentados.', 'corregida'],
  [5084, ['61'], ['II-2'], ['Windows', 'Group Policy', 'gpupdate', 'gpupdate /force', 'directiva de grupo'], [
    ref('https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/gpupdate', 'Microsoft Learn, comando `gpupdate`: actualiza la configuración de directiva de grupo; `/force` vuelve a aplicar todas las directivas, aunque no hayan cambiado. El ejemplo oficial muestra `gpupdate /force`.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 61: sistemas operativos Microsoft, administración e instalación.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, tema II.2: administración de sistemas operativos Windows, Linux, Unix y otros.'),
    ref(academy47, 'ITIC Academy, bloque 47 «Aplicaciones móviles y sistemas operativos», versión 2026.1, fundamentos y administración de Windows; cotejo curricular.')
  ], null, 'Respuesta D. En Windows, `gpupdate` actualiza las directivas de grupo y `/force` vuelve a aplicar todas, tanto las modificadas como las que no han cambiado. El manual de Microsoft documenta exactamente el comando `gpupdate /force`. Se conserva la clave y se especifica la documentación actual del comando.', 'vigente'],
  [5085, ['65'], ['III-12'], ['JavaScript', 'frontend', 'backend', 'navegador', 'Node.js', 'aplicaciones web'], [
    ref('https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript', 'MDN Web Docs, «What is JavaScript?»: JavaScript se ejecuta en el cliente web para interactividad, pero también puede ejecutarse en otros entornos; no está restringido al navegador.'),
    ref('https://nodejs.org/en/learn/getting-started/introduction-to-nodejs', 'Node.js, documentación oficial: Node.js es un entorno de ejecución JavaScript multiplataforma, empleado también en el servidor.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 65: arquitectura de desarrollo web, scripts de cliente y desarrollo web en servidor.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, tema III.12: aplicaciones web y desarrollo front-end y en servidor.'),
    ref(academy30, 'ITIC Academy, bloque 30 «Tecnologías de sistemas de información», versión 2026; el mapa curricular incluye el tema A1 65 y tecnologías de desarrollo web.')
  ], null, 'Respuesta C. JavaScript puede ejecutarse en el navegador para lógica de frontend y en entornos de servidor como Node.js. Por ello son falsas las alternativas que lo restringen exclusivamente al cliente o al servidor. Se corrigen las alternativas y el enunciado para precisar los dos entornos sin sugerir que exista un único runtime de backend.', 'corregida']
];

const edits = {
  5081: { texto: 'Según la especificación UML 2.5.1, ¿cuál de estos elementos no es un tipo de diagrama UML?' },
  5082: { texto: 'Según MÉTRICA v3, ¿cuál es el objetivo del proceso Planificación de Sistemas de Información (PSI)?' },
  5083: {
    texto: 'De acuerdo con la guía de Oracle VirtualBox 7.2, ¿qué afirmación sobre el número de CPU virtuales por máquina virtual es incorrecta?',
    opciones: [
      'VirtualBox puede presentar hasta 32 CPU virtuales a cada máquina virtual.',
      'El ajuste «Number of CPUs» determina cuántos núcleos virtuales ve el sistema operativo invitado.',
      'Oracle recomienda no configurar más núcleos que los disponibles físicamente en el host.',
      'El máximo documentado por máquina virtual es de 128 CPU virtuales.'
    ]
  },
  5084: { texto: 'En Windows, ¿qué comando vuelve a aplicar todas las directivas de grupo, hayan cambiado o no?' },
  5085: {
    texto: 'En una aplicación web, ¿en qué entorno puede ejecutarse JavaScript?',
    opciones: [
      'Solo en el frontend, dentro del navegador.',
      'Solo en el backend, dentro del servidor.',
      'Tanto en el frontend (por ejemplo, en el navegador) como en el backend (por ejemplo, en Node.js).',
      'JavaScript no se utiliza en aplicaciones web.'
    ]
  }
};

aplicar({ numero: '952', fecha: '2026-11-11', records, edits });
