const apply = require('./aplicar-lote.cjs');
const src = (url, referencia) => ({ url, referencia });
const academy = (id, title, detail) => src(`https://drive.google.com/file/d/${id}/view?usp=drivesdk`, `ITIC Academy, ${title}, edición 2026: ${detail}; referencia curricular, no fuente técnica primaria.`);
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const hardware = '1xwthhXbCj-TsATaIDQSI21MsALa-a-FA';
const databases = '1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ';
apply({ numero:'1250', fecha:'2026-11-14', records:[
  [6571,['49'],['I-6','I-9'],['Cl@ve','identidad digital','autenticación electrónica','Cl@ve Firma','Cl@ve Móvil'],[
    src('https://clave.gob.es/dnin/que-es','Portal oficial Cl@ve, «¿Qué es Cl@ve Firma?»: describe el sistema común de identificación, autenticación y firma electrónica y la firma centralizada mediante certificados electrónicos custodiados por la Administración; la página conserva la denominación heredada Cl@ve PIN.'),
    src('https://clave.gob.es/clave/que-es','Portal oficial Cl@ve, descripción actual del sistema y sus opciones de identificación; la aplicación y la identificación antes denominada Cl@ve PIN han evolucionado a Cl@ve Móvil.'),
    src(a1,'Convocatoria GSI A1 2025, tema 49: servicios comunes de interoperabilidad, incluyendo Cl@ve.'),
    src(a2,'Convocatoria GSI A2 2025, temas I.6 (identidad/firma electrónica) e I.9 (identificación y autenticación en el acceso electrónico).'),
    academy('1VhLN803FteKuJ9zVjQSomuig_1x9fBSP','bloque 03, Actuación administrativa y Administración digital','incluye identidad y firma electrónica y servicios comunes; encaje curricular, no valida las denominaciones históricas.')
  ], { comentarios:'Se conserva el enunciado y la clave originales. La pregunta reproduce la descripción histórica oficial del sistema Cl@ve, en cuyo portal se documentan Cl@ve PIN, Cl@ve Permanente y Cl@ve Firma. «Cl@ve Biométrica» no aparece como método/servicio del sistema; la biometría que pueda utilizar el dispositivo para desbloquear una app no convierte esa función local en un método Cl@ve. El portal actual denomina Cl@ve Móvil a la experiencia que sucedió a Cl@ve PIN, por lo que esta formulación debe leerse como histórica.' }, 'La clave D queda confirmada en el contexto histórico explícito de la pregunta: el portal oficial define Cl@ve como sistema común y documenta PIN, Permanente y Firma centralizada. «Biométrica» no es uno de esos métodos; el uso biométrico local para desbloquear un dispositivo es distinto. La antigua denominación PIN ha evolucionado a Cl@ve Móvil, de modo que no se presenta el texto como nomenclatura actual.', 'historica'],

  [6572,['51'],['I-6'],['España Digital 2025','agenda digital','espectro radioeléctrico','5G','meta histórica'],[
    src('https://www.lamoncloa.gob.es/presidente/actividades/Documents/2020/230720-Espa%C3%B1aDigital_2025.pdf','Gobierno de España, anexo II «Metas de España Digital 2025»: meta 2, 100 % del espectro radioeléctrico preparado para 5G. Se confirma la meta fijada en el plan, no su grado de cumplimiento posterior.'),
    src(a1,'Convocatoria GSI A1 2025, tema 51: Planes y actuaciones de la Agenda Digital para España.'),
    src(a2,'Convocatoria GSI A2 2025, tema I.6: sociedad de la información y Agenda Digital para España.'),
    academy('1VhLN803FteKuJ9zVjQSomuig_1x9fBSP','bloque 03, Actuación administrativa y Administración digital','incluye agenda digital y transformación de la Administración; la meta numérica se contrasta con el plan oficial, no con el temario académico.')
  ], {}, 'La respuesta B reproduce la meta 2 del plan España Digital 2025: preparar para 5G el 100 % del espectro radioeléctrico. Se conserva como pregunta histórica sobre un objetivo fijado para 2025; no afirma que el objetivo se haya alcanzado. Las demás cifras/opciones no corresponden a esa meta del anexo II.', 'historica'],

  [6573,['53'],['II-1'],['servidores blade','chasis','arquitectura modular','alimentación y refrigeración compartidas'],[
    src('https://www.hpe.com/us/en/what-is/blade-servers.html','HPE, «What are Blade Servers?»: define el blade como servidor delgado y modular instalado en chasis, que comparte recursos de alimentación, refrigeración, red y almacenamiento con otros blades.'),
    src('https://i.dell.com/sites/content/shared-content/campaigns/en/Documents/magic-quadrants-blades-gartner.pdf','Dell, descripción técnica de blade server: plataforma modular que encaja con otros blades en un chasis específico; el chasis proporciona alimentación, refrigeración y funciones comunes de gestión.'),
    src(a1,'Convocatoria GSI A1 2025, tema 53: servidores y centros de proceso de datos.'),
    src(a2,'Convocatoria GSI A2 2025, tema II.1: arquitecturas y tecnologías actuales de ordenadores.'),
    academy(hardware,'bloque Hardware, servidores, CPD, almacenamiento y virtualización','edición 2026; cubre el tema A1-53 y la arquitectura física de servidores.')
  ], { texto:'¿Qué arquitectura modular instala servidores individuales en un chasis que comparte recursos como alimentación, refrigeración y administración, aumentando la densidad y simplificando la gestión?', opciones:['Una granja de servidores, que es un conjunto lógico de equipos y no un formato modular de chasis.','Servidores virtualizados, que son máquinas lógicas ejecutadas sobre un hipervisor.','Servidores blade, módulos individuales alojados en un chasis con recursos compartidos.','Bastionado de servidores, proceso de aplicar medidas de seguridad.'], respuesta_correcta:2 }, 'Cada blade conserva componentes de cómputo propios, mientras que el chasis integra y comparte recursos como alimentación, refrigeración, interconexión y gestión.', 'corregida'],

  [6574,['61'],['II-2'],['Windows Server 2019','ediciones Microsoft','Datacenter','Standard','Essentials','ciclo de vida'],[
    src('https://learn.microsoft.com/en-us/lifecycle/products/windows-server-2019','Microsoft Learn, ciclo de vida de Windows Server 2019: identifica como ediciones cubiertas Datacenter, Essentials y Standard.'),
    src('https://learn.microsoft.com/en-us/windows-server/get-started/editions-comparison-windows-server-2019','Microsoft Learn, comparación de ediciones de Windows Server 2019: presenta las ediciones Standard, Datacenter y Essentials; Enterprise no figura como edición de Server 2019.'),
    src(a1,'Convocatoria GSI A1 2025, tema 61: sistemas operativos Microsoft, fundamentos, administración, instalación y gestión.'),
    src(a2,'Convocatoria GSI A2 2025, tema II.2: sistemas operativos, características técnicas, funcionales y de administración.'),
    academy(hardware,'bloque Hardware, servidores, CPD, almacenamiento y virtualización','incluye el módulo VirtQ ITIC Academy Windows Server 2019, dentro del bloque formativo 2026.')
  ], {}, 'La respuesta D se confirma en la documentación de Microsoft: las ediciones de Windows Server 2019 son Standard, Datacenter y Essentials; Enterprise no es una edición de ese producto. Se conserva como ítem histórico vinculado a la versión 2019 y no se extrapola a versiones posteriores.', 'historica'],

  [6575,['63'],['II-5'],['metadatos','diccionario de datos','catálogo del SGBD','esquema y objetos de base de datos'],[
    src('https://learn.microsoft.com/en-us/sql/relational-databases/system-catalog-views/object-catalog-views-transact-sql?view=sql-server-ver16','Microsoft Learn, vistas de catálogo de objetos SQL Server: exponen metadatos sobre objetos de base de datos, definiciones, dependencias y estructuras físicas; incluyen tablas, columnas, restricciones, índices y almacenamiento.'),
    src('https://www.ibm.com/think/topics/data-catalog','IBM, explicación de catálogo de datos: define metadatos en sentido general como «datos sobre datos» y explica su gestión en catálogos.'),
    src(a1,'Convocatoria GSI A1 2025, tema 63: sistemas de gestión de bases de datos y modelo ANSI.'),
    src(a2,'Convocatoria GSI A2 2025, tema II.5: arquitectura ANSI/SPARC, SGBD relacionales y SQL.'),
    academy(databases,'bloque Bases de datos, SQL y modelado de datos','edición 2026.1; incluye A1-63 y A2-T5, SGBD, modelo ANSI/SPARC y administración de bases de datos.')
  ], { texto:'En un SGBD, ¿qué describe principalmente el diccionario o catálogo de datos?', opciones:['Los datos operativos completos de la organización, como si fuera su almacén de datos.','Los metadatos de los objetos de la base: esquemas, tablas, columnas, tipos, restricciones, índices y otras características de su estructura.','La visión conceptual completa de todos los procesos de negocio, sin describir objetos de la base de datos.','Los valores que habría que inferir para completar información ausente de la base de datos.'], respuesta_correcta:1 }, 'Metadatos son datos que describen otros datos; en un SGBD, el diccionario/catálogo expone los objetos y su estructura, como tablas, columnas, tipos, restricciones, índices y dependencias. La opción original, referida al propio diccionario, era autorreferencial y no definía bien el concepto.', 'corregida']
] });
