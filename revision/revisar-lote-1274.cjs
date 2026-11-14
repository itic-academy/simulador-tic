const apply = require('./aplicar-lote.cjs');
const src = (url, referencia) => ({ url, referencia });
const academy = {
  hardware: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',
  governance: 'https://drive.google.com/file/d/1alTzv7f2Katg4EdxJ72SYkLm6UScCCho/view?usp=drivesdk',
  privacy: 'https://drive.google.com/file/d/1uS8S8axBSb22s9Dbv2mTsFaHUUVlowiM/view?usp=drivesdk',
  database: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',
  systems: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk'
};
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';

apply({ numero: '1274', fecha: '2026-11-14', records: [
  [6691, [54], ['II-1'], ['buses', 'arquitectura de computadores', 'buses paralelos', 'skew', 'MCA', 'PCI-X', 'PCI Express'], [
    src('https://www.ti.com/lit/an/snla159/snla159.pdf', 'Texas Instruments, Timing Analysis of Synchronous and Asynchronous Buses, §§ «Bus Propagation Delay and Settling Time» y «Clock Skew»: las diferencias de propagación y los requisitos temporales limitan el rendimiento alcanzable en buses.'),
    src('https://www.ibm.com/history/ps-2', 'IBM, historia del PS/2: en los modelos de gama alta, MCA incorporó un bus de 32 bits; esto descarta el distractor de 16 bits como máximo.'),
    src('https://pcisig.com/what-features-are-introduced-pci-x-20-specification', 'PCI-SIG, FAQ PCI-X 2.0: describe una versión PCI-X de 16 bits, confirmando que PCI-X pertenece a la familia paralela y no es un sucesor serie de PCI.'),
    src('https://pcisig.com/what-pci-express-pcie-architecture', 'PCI-SIG, arquitectura PCI Express: describe PCIe como una arquitectura de interconexión serie.'),
    src(a1, 'Convocatoria oficial GSI A1 2025, tema 54: equipos y arquitecturas de ordenadores.'),
    src(a2, 'Convocatoria oficial GSI A2 2025, tema II.1: tecnologías actuales de ordenadores, componentes y arquitecturas.'),
    src(academy.hardware, 'ITIC Academy, bloque Hardware 2026: arquitectura de ordenadores, buses y componentes; cotejo curricular general. El comportamiento temporal específico se fundamenta en la nota técnica de TI.')
  ], { texto: '¿Qué afirmación sobre buses de datos es correcta?', opciones: [
    'Un bus paralelo siempre ofrece más caudal que uno serie, con independencia de su frecuencia, codificación y diseño.',
    'El bus MCA de los IBM PS/2 tenía un ancho máximo de 16 bits.',
    'En un bus paralelo de alta velocidad, las diferencias de retardo entre líneas pueden limitar la frecuencia de transferencia porque los bits no llegan alineados temporalmente.',
    'PCI-X, al igual que PCI Express (PCIe), es un bus serie.'
  ], respuesta_correcta: 2 }, 'La respuesta C es correcta: el skew entre líneas de datos reduce el margen temporal de muestreo y limita la velocidad práctica de buses paralelos. No se afirma que toda solución paralela sea más lenta que toda solución serie. IBM documenta MCA de 32 bits en modelos PS/2 de gama alta; PCI-X conserva una interfaz paralela, mientras PCIe es serie. Se reformula «jitter» como diferencia de retardo entre líneas para no confundir el skew entre canales con la fluctuación temporal aleatoria de una señal.', 'corregida'],

  [6692, [31], ['I-9'], ['Reglamento de Gobernanza de Datos', 'Data Governance Act', 'DGA', 'EUR-Lex', 'gobernanza de datos'], [
    src('https://eur-lex.europa.eu/legal-content/ES/ALL/?uri=CELEX:32022R0868', 'EUR-Lex, Reglamento (UE) 2022/868, título y denominación corta parentética «Data Governance Act»; acto vigente sobre gobernanza europea de datos.'),
    src('https://eur-lex.europa.eu/legal-content/EN/LSU/?uri=CELEX:32022R0868', 'EUR-Lex, resumen oficial del Reglamento (UE) 2022/868: denomina el acto «Data Governance Act (DGA)» y distingue su objeto de otras normas de datos.'),
    src(a1, 'Convocatoria oficial GSI A1 2025, tema 31: reutilización de la información del sector público y políticas de datos abiertos.'),
    src(a2, 'Convocatoria oficial GSI A2 2025, tema I.9: datos abiertos y normativa vigente de reutilización de información del sector público.'),
    src(academy.governance, 'ITIC Academy, bloque «Gobernanza TIC, Administración digital, acceso electrónico y cooperación»: cotejo de gobernanza y gestión de datos en el programa; la denominación jurídica se comprueba en EUR-Lex.')
  ], { texto: '¿Cuál es la denominación corta que aparece en el título del Reglamento (UE) 2022/868?', opciones: [
    'Data Act.',
    'Open Data Act.',
    'Data Governance Act (DGA).',
    'Reglamento (UE) 2018/1724.'
  ], respuesta_correcta: 2 }, 'La respuesta C reproduce el nombre corto incluido en el propio título del Reglamento (UE) 2022/868: Data Governance Act (DGA). No debe confundirse con el Data Act, Reglamento (UE) 2023/2854, ni con el Reglamento (UE) 2018/1724, que el acto de 2022 modifica.', 'corregida'],

  [6693, [27, 38, 82], ['I-7', 'II-11'], ['RGPD', 'auditoría', 'artículo 32', 'pruebas periódicas', 'seguridad del tratamiento', 'artículo 39'], [
    src('https://eur-lex.europa.eu/legal-content/ES/ALL/?uri=CELEX:32016R0679', 'EUR-Lex, Reglamento (UE) 2016/679, arts. 32.1.d, 39.1.b y 28.3.h: establece pruebas/evaluaciones regulares de eficacia, funciones de supervisión que pueden incluir auditorías y derechos contractuales de auditoría; no fija una periodicidad universal de auditoría formal.'),
    src(a1, 'Convocatoria oficial GSI A1 2025, temas 27, 38 y 82: protección de datos, auditoría informática y adaptación de sistemas a requisitos de privacidad y seguridad.'),
    src(a2, 'Convocatoria oficial GSI A2 2025, temas I.7 y II.11: protección de datos y auditoría informática, incluida la auditoría de protección de datos.'),
    src(academy.privacy, 'ITIC Academy, bloque de protección de datos y seguridad: cotejo curricular de RGPD y auditoría/controles de privacidad; la obligación concreta y su alcance se determinan con el articulado oficial.')
  ], { texto: '¿Qué exige el RGPD en materia de comprobación de la eficacia de las medidas de seguridad?', opciones: [
    'Que todo responsable encargue una auditoría formal independiente en un intervalo fijo.',
    'Que se establezca, cuando proceda, un proceso de verificación, evaluación y valoración regulares de la eficacia de las medidas de seguridad; el RGPD no fija para todos una periodicidad universal de auditoría formal.',
    'Que se realice obligatoriamente una auditoría externa cada año.',
    'Que el delegado de protección de datos tenga prohibido realizar o supervisar auditorías relacionadas con sus funciones.'
  ], respuesta_correcta: 1 }, 'La respuesta B refleja el artículo 32.1.d del RGPD, que incluye un proceso de verificación, evaluación y valoración regulares de la eficacia de las medidas técnicas y organizativas. Esto no equivale a imponer a toda organización una auditoría formal externa en un calendario fijo. El artículo 39.1.b incluye auditorías relacionadas entre las funciones del delegado; el artículo 28.3.h regula derechos de auditoría del responsable frente al encargado.', 'corregida'],

  [6694, [64, 65], ['II-5', 'III-12'], ['Doctrine ORM', 'PHP', 'mapeo objeto-relacional', 'persistencia', 'bases de datos'], [
    src('https://www.doctrine-project.org/projects/orm.html', 'Doctrine Project, Doctrine ORM: presenta Doctrine ORM como herramienta de mapeo objeto-relacional para PHP.'),
    src('https://www.doctrine-project.org/projects/doctrine-orm/en/current/reference/architecture.html', 'Doctrine ORM, arquitectura: explica el mapeo entre filas relacionales y el modelo de objetos PHP, y la persistencia de objetos PHP ordinarios.'),
    src(a1, 'Convocatoria oficial GSI A1 2025, temas 64 y 65: modelo relacional y arquitectura/desarrollo de aplicaciones web conectadas a bases de datos.'),
    src(a2, 'Convocatoria oficial GSI A2 2025, temas II.5 y III.12: SGBD relacionales, aplicaciones web y tecnologías de programación.'),
    src(academy.database, 'ITIC Academy, bloque 29 «Bases de datos y modelado»: cotejo curricular de persistencia y bases de datos; Doctrine ORM se verifica en la documentación oficial del proyecto.')
  ], { texto: '¿Qué es Doctrine ORM?', opciones: [
    'Una biblioteca ORM para PHP que mapea objetos PHP a un modelo relacional y proporciona persistencia de entidades.',
    'Un ORM de la plataforma Java que reemplaza a Jakarta Persistence.',
    'Una base de datos NoSQL que almacena documentos JSON.',
    'Un servidor HTTP de software libre.'
  ], respuesta_correcta: 0 }, 'La respuesta A es correcta para Doctrine ORM, el componente del proyecto Doctrine que ofrece mapeo objeto-relacional y persistencia para aplicaciones PHP. «Doctrine» también designa una familia de bibliotecas PHP, por lo que se precisa el nombre del componente y se evita definirlo genéricamente como un framework o confundirlo con DBAL, ODM o un servidor.', 'corregida'],

  [6695, [77], ['II-9'], ['XSLT', 'XML', 'transformación', 'serialización', 'HTML', 'texto'], [
    src('https://www.w3.org/TR/xslt-30/', 'W3C, XSLT 3.0, §§ 2.3 y 2.7: XSLT transforma entradas basadas en árboles en resultados; la serialización puede producir documentos XML u otros formatos, como HTML.'),
    src('https://www.w3.org/TR/xslt-10/', 'W3C, XSLT 1.0, § 16: especifica métodos de salida XML, HTML y text.'),
    src(a1, 'Convocatoria oficial GSI A1 2025, tema 77: HTML, CSS, XML y lenguajes para redes globales.'),
    src(a2, 'Convocatoria oficial GSI A2 2025, tema II.9: lenguajes de marca, XML y sus derivaciones.'),
    src(academy.systems, 'ITIC Academy, bloque 30 «Tecnologías de sistemas de información», actualización 2026: cotejo curricular general de tecnologías y lenguajes; no se atribuye al material una explicación específica de XSLT. La semántica y serialización se verifican con W3C.')
  ], { texto: '¿Qué describe correctamente una transformación XSLT?', opciones: [
    'Solo puede convertir un documento XML en otro XML.',
    'Transforma datos de entrada XML representados como un árbol y puede producir un resultado serializado, por ejemplo XML, HTML o texto.',
    'Solo puede convertir XML en HTML.',
    'Convierte cualquier tipo de documento de entrada a XML sin que la entrada tenga que ser XML.'
  ], respuesta_correcta: 1 }, 'La respuesta B es correcta. XSLT trabaja sobre una representación en árbol de la entrada XML y construye resultados; según las reglas de serialización, estos pueden escribirse como XML, HTML o texto. La opción no afirma que XSLT acepte arbitrariamente cualquier formato de entrada ni que haya una única forma de salida.', 'corregida']
] });
