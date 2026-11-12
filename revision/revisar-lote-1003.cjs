const aplicar = require('./aplicar-lote.cjs');
const fs = require('node:fs');
const path = require('node:path');
const ref = (url, referencia) => ({ url, referencia });

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const openstack = 'https://docs.openstack.org/2026.1/projects.html';
const openstack261 = 'https://docs.openstack.org/2026.1/install/';
const objectManager = 'https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/windows-kernel-mode-object-manager';
const rails = 'https://guides.rubyonrails.org/getting_started.html';
const railsOrm = 'https://guides.rubyonrails.org/v8.1/active_record_basics.html';
const winforms = 'https://learn.microsoft.com/en-us/dotnet/desktop/winforms/windows-forms-security';
const webforms = 'https://learn.microsoft.com/en-us/aspnet/web-forms/overview/security/';
const cas = 'https://learn.microsoft.com/en-us/dotnet/standard/security/key-security-concepts';
const servlet = 'https://github.com/jakartaee/specifications/blob/master/servlet/6.1/jakarta-servlet-spec-6.1.html';
const academyCloud = 'https://drive.google.com/file/d/16Er3cneQ-Vik3zSjYq6zQUOfSKK4vxVu/view?usp=drivesdk';
const academyOS = 'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk';
const academyIT = 'https://drive.google.com/file/d/1LuUHoQr8oDmptteHIQ72VdCvJFsnu3LF/view?usp=drivesdk';

const records = [
  [5336, ['55'], ['II-1'], ['OpenStack', 'Nova', 'Glance', 'Swift', 'Django', 'cloud computing'], [
    ref(openstack, 'OpenStack 2026.1 Services and Libraries, catálogo oficial exhaustivo de servicios: incluye Compute/Nova, Image/Glance y Object Storage/Swift; Django no figura como servicio OpenStack.'),
    ref(openstack261, 'Documentación oficial de instalación OpenStack 2026.1: la instalación mínima enumera Keystone, Glance, Placement, Nova y Neutron; distingue los servicios reales de frameworks web externos.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 55: cloud computing, IaaS, PaaS, SaaS y tipos de nube.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema II.1: computación en la nube, base tecnológica y componentes.'),
    ref(academyCloud, 'ITIC Academy, bloque 25 «Cloud Computing», edición 2026, A1.55/A2.II.1: modelos y tecnologías de nube; cotejo curricular.'),
  ], null, 'La respuesta B (Django) es correcta; se corrige «Dyango», error tipográfico del original. Nova, Glance y Swift sí son proyectos/servicios de OpenStack; Django es un framework web de Python ajeno a esa lista. La distinción se comprueba en el catálogo oficial actual de servicios OpenStack.', 'corregida'],
  [5337, ['59'], ['II-2'], ['sistemas operativos', 'modelo orientado a objetos', 'abstracción', 'recursos'], [
    ref(objectManager, 'Microsoft Learn, Windows kernel-mode Object Manager: documenta recursos del sistema (ficheros, dispositivos, procesos, memoria/secciones) representados como objetos con encabezado y datos propios. La página advierte que Windows usa un modelo basado en objetos, sin ser un sistema plenamente orientado a objetos en el sentido clásico; por ello el reactivo se formula como clasificación conceptual, no como una propiedad universal de todos los sistemas.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 59: conceptos y fundamentos de sistemas operativos, evolución y tendencias.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema II.2: conceptos, características técnicas y funcionales de sistemas operativos.'),
    ref(academyOS, 'ITIC Academy, bloque 27 «Sistemas Operativos», versión 2026.1, temas A1.59–62/A2.II.2.'),
  ], null, 'La respuesta D (orientado a objetos) es la pretendida y se conserva, pero se acota el enunciado a la abstracción conceptual: representar recursos mediante objetos con datos/propiedades y operaciones/servicios. La exposición se presta a generalizar en exceso, pues no todos los sistemas operativos son orientados a objetos en sentido estricto; incluso Microsoft distingue su modelo basado en objetos de una orientación a objetos clásica.', 'corregida'],
  [5338, ['65'], ['III-12'], ['Ruby on Rails', 'Ruby', 'framework web', 'Active Record', 'ORM'], [
    ref(rails, 'Ruby on Rails Guides, Getting Started: define Rails como framework web construido para Ruby y explica la creación de aplicaciones web.'),
    ref(railsOrm, 'Ruby on Rails Guides, Active Record Basics: explica su patrón de mapeo objeto-relacional y cómo Active Record relaciona tablas/filas con modelos/objetos Ruby.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 65: arquitectura de desarrollo web, frameworks y desarrollo en servidor.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema III.12: aplicaciones y tecnologías de desarrollo web.'),
    ref(academyIT, 'ITIC Academy, bloque 30 «Tecnologías de sistemas de información», actualización octubre de 2026; incluye arquitectura web, frameworks y lenguajes de desarrollo.'),
  ], null, 'La respuesta D (todas las anteriores) es correcta: Rails es un framework web para Ruby, está implementado en Ruby y ofrece Active Record como ORM. La guía oficial actual confirma estos tres aspectos; se añade explicación porque el original no justificaba la opción global.', 'vigente'],
  [5339, ['66', '126'], ['III-11'], ['Microsoft .NET Framework', 'Windows Forms', 'ASP.NET Web Forms', 'seguridad basada en roles', 'Code Access Security', 'CAS'], [
    ref(winforms, 'Microsoft Learn, Windows Forms Security: describe el modelo histórico de Windows Forms en .NET Framework como basado en permisos del código (Code Access Security, CAS). La página especifica que se aplica a .NET Framework.'),
    ref(webforms, 'Microsoft Learn, ASP.NET Web Forms Security: documenta autenticación y autorización por usuario/roles en aplicaciones Web Forms.'),
    ref(cas, 'Microsoft Learn, conceptos de seguridad .NET: CAS fue obsoleta; versiones recientes de .NET no aplican las anotaciones CAS. Esto obliga a fechar y contextualizar el reactivo legado.'),
    ref(a1, 'Convocatoria A1 GSI 2025, temas 66 (.NET) y 126 (seguridad en el nivel de aplicación e interfaces de usuario).'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema III.11: plataforma .NET, modelo de programación y seguridad.'),
    ref(academyIT, 'ITIC Academy, bloque 30 «Tecnologías de sistemas de información», edición octubre de 2026: apartado oficial .NET y seguridad de aplicaciones.'),
  ], null, 'Se corrige la clave a C. En el contexto histórico de .NET Framework, Windows Forms utilizaba la seguridad basada en permisos del código; ASP.NET Web Forms ofrecía autorización basada en identidad/roles y también estaba sujeto a Code Access Security del runtime. «Todas son falsas» no era correcto. Se fija expresamente la versión conceptual y se advierte que CAS está obsoleta y no debe presentarse como el modelo de seguridad de .NET moderno.', 'historica'],
  [5340, ['67'], ['III-10'], ['Java', 'sobrecarga', 'sobrescritura', 'servlets', 'concurrencia', 'interfaces'], [
    ref(servlet, 'Jakarta Servlet Specification 6.1, §2.3.3.1: un contenedor puede enviar solicitudes concurrentes al método service del servlet y la aplicación debe prever su procesamiento con varios hilos. No garantiza universalmente una sola instancia total por JVM ni un hilo recién creado por cada solicitud.'),
    ref('https://docs.oracle.com/javase/specs/jls/se25/html/jls-9.html', 'Java Language Specification, capítulo 9: interfaces; un tipo interfaz no se instancia directamente, aunque las clases pueden implementarlo y las versiones modernas admiten métodos default/static/private.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 67: entorno de desarrollo Java.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema III.10: arquitectura Java EE/Jakarta EE y características de funcionamiento.'),
    ref(academyIT, 'ITIC Academy, bloque 30 «Tecnologías de sistemas de información», actualización octubre de 2026: Java/Jakarta EE y componentes.'),
  ], null, 'La respuesta C se conserva, pero se reemplaza la generalización inexacta por el hecho normativo de Jakarta Servlet 6.1: el contenedor puede invocar concurrentemente service y la aplicación debe gestionar la concurrencia. El original afirmaba una única copia por JVM y un hilo nuevo por cada petición, condiciones que no son una garantía universal del estándar. Las otras opciones confunden sobrecarga con sobrescritura, referencias con punteros o instanciación de interfaces.', 'corregida'],
];

const edits = {
  5336: { opciones: ['Nova (servicio de cómputo de OpenStack).', 'Django (framework web de Python, no servicio de OpenStack).', 'Glance (servicio de imágenes de OpenStack).', 'Swift (servicio de almacenamiento de objetos de OpenStack).'], comentarios: 'La respuesta B es correcta. Nova, Glance y Swift son proyectos/servicios de OpenStack; Django es un framework web de Python que no forma parte de esa lista. Se corrige «Dyango», que era una errata y podía convertir la pregunta en una prueba de ortografía.' },
  5337: { texto: 'En una clasificación conceptual de arquitecturas de sistemas operativos, ¿qué modelo representa recursos como procesos, ficheros, memoria y dispositivos mediante objetos con datos o propiedades y operaciones o servicios asociados?', comentarios: 'La respuesta D (orientado a objetos) es la pretendida. El enunciado se concreta como modelo conceptual: recursos representados como objetos que encapsulan datos y servicios. No se debe inferir que todos los sistemas operativos implementen una arquitectura plenamente orientada a objetos; Microsoft, por ejemplo, describe Windows como object-based y advierte que no es OO en el sentido clásico.' },
  5338: { comentarios: 'La respuesta D (todas las anteriores) es correcta. Rails es un framework web para Ruby; la guía oficial de Rails documenta el framework y Active Record como su mapeador objeto-relacional. El término «framework» se refiere al marco de desarrollo, no a que Rails sea un lenguaje.' },
  5339: { texto: 'En el modelo histórico de seguridad de aplicaciones de .NET Framework, señale la afirmación correcta sobre Windows Forms y ASP.NET Web Forms:', opciones: [
    'Windows Forms solo dispone de autorización basada en roles y no aplica permisos al código administrado.',
    'ASP.NET Web Forms solo tiene seguridad basada en permisos del código y no admite autorización por usuarios o roles.',
    'ASP.NET Web Forms puede combinar autorización de usuarios/roles con Code Access Security (CAS) del runtime de .NET Framework.',
    'Todas las anteriores son falsas.'
  ], respuesta_correcta: 2, comentarios: 'La respuesta C es correcta para el modelo legado de .NET Framework: Web Forms admite autenticación/autorización por usuario o rol y el código administrado está sujeto al modelo CAS. La documentación actual de Microsoft advierte que CAS está obsoleta y que las versiones recientes de .NET no la aplican; por ello se contextualiza la pregunta históricamente y no se ofrece como orientación de seguridad moderna.' },
  5340: { texto: 'Según el modelo de concurrencia de Jakarta Servlet, señale la afirmación correcta sobre los servlets:', opciones: [
    'La sobrecarga y la sobrescritura de métodos permiten siempre cambiar la lista de parámetros del método original.',
    'Java expone punteros aritméticos que permiten referenciar y modificar directamente cualquier zona de memoria.',
    'El contenedor puede procesar solicitudes concurrentes mediante varias llamadas al método service; la aplicación debe proteger correctamente el estado compartido.',
    'Una interfaz Java puede instanciarse directamente aunque no exista una clase que la implemente.'
  ], comentarios: 'La respuesta C es correcta según Jakarta Servlet 6.1, §2.3.3.1: el contenedor puede atender solicitudes concurrentes invocando service desde varios hilos. No se garantiza una única instancia global ni la creación obligatoria de un hilo por petición. Las interfaces Java no se instancian directamente; Java usa referencias a objetos y no expone punteros aritméticos.' }
};

if (!fs.existsSync(path.join(__dirname, 'cambios-lote-1003.json'))) aplicar({ numero: '1003', fecha: '2026-11-12', records, edits });

const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-1003.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  5336: ['ITIC Academy, bloque 25 «Cloud Computing», A1.55/A2.II.1, tecnología y servicios cloud; OpenStack se coteja además con la documentación oficial de proyectos.', 'Clasificación A1.55/A2.II.1. Se corrige la errata de Django y se distingue el framework del catálogo OpenStack.'],
  5337: ['ITIC Academy, bloque 27 «Sistemas Operativos», versión 2026.1, A1.59–62/A2.II.2: fundamentos, servicios y arquitecturas de SO.', 'Cotejo A1.59/A2.II.2; «orientado a objetos» se presenta como modelo conceptual, no como arquitectura universal de todos los sistemas.'],
  5338: ['ITIC Academy, bloque 30 «Tecnologías de sistemas de información», actualización octubre de 2026: arquitecturas web, frameworks y lenguajes.', 'Cotejo curricular A1.65/A2.III.12; la guía oficial Rails acredita el framework Ruby y Active Record ORM.'],
  5339: ['ITIC Academy, bloque 30 «Tecnologías de sistemas de información», actualización octubre de 2026, apartados .NET/seguridad.', 'Reactivo histórico sobre .NET Framework: se corrige la clave por documentación de Windows Forms, ASP.NET Web Forms y CAS; no representa la seguridad moderna de .NET. A1.66/A1.126/A2.III.11.'],
  5340: ['ITIC Academy, bloque 30 «Tecnologías de sistemas de información», actualización octubre de 2026, apartados Java/Jakarta EE.', 'Cotejo curricular A1.67/A2.III.10; se reemplaza la generalización de servlet por el requisito de concurrencia de Jakarta Servlet 6.1.']
};
const reason = 'Cotejo curricular individual con ITIC Academy en Drive y programas oficiales A1/A2.';
for (const [key, [block, note]] of Object.entries(academy)) {
  const id = Number(key), q = bank.preguntas.find(x => x.id === id), change = log.cambios.find(x => x.id === id);
  if (!q || !change) throw new Error(`Falta registro de ${id}`);
  const before = { bloque_academia: q.clasificacion.bloque_academia, nota: q.clasificacion.nota };
  q.clasificacion.bloque_academia = block; q.clasificacion.nota = note;
  const later = change.correcciones_posteriores || [];
  if (!later.some(x => x.motivo === reason)) later.push({ fecha: '2026-11-12', motivo: reason, clasificacion_anterior: before, clasificacion_actualizada: { bloque_academia: block, nota: note } });
  change.correcciones_posteriores = later; change.actualizada = structuredClone(q);
}
const byId = new Map(log.cambios.map(c => [c.id, c]));
const raw = fs.readFileSync(bankPath, 'utf8'); let replaced = 0;
const output = raw.replace(/^    \{[\s\S]*?^    \}/gm, block => {
  const old = JSON.parse(block), change = byId.get(old.id); if (!change) return block;
  replaced++; return JSON.stringify(change.actualizada, null, 2).split('\n').map(line => `    ${line}`).join('\n');
});
if (replaced !== 5) throw new Error(`Se esperaban 5 cambios; encontrados ${replaced}`);
JSON.parse(output); fs.writeFileSync(bankPath, output); fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Lote 1003 enriquecido con cotejo curricular y trazabilidad de las cinco preguntas.');
