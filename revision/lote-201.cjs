const apply = require('./aplicar-lote.cjs');

const sources = {
  mono: [
    { url: 'https://www.nsa.gov/portals/75/documents/news-features/declassified-documents/friedman-documents/publications/FOLDER_247/41748699078793.pdf', referencia: 'NSA, Military Cryptanalysis, Parts I and II: Monoalphabetic Substitution Systems. Manual primario de criptoanálisis: estudia la sustitución monoalfabética y la conservación de frecuencias del texto claro en el criptograma.' }
  ],
  facturae: [
    { url: 'https://www.facturae.gob.es/formato/ultima-version', referencia: 'Portal oficial Facturae, Últimas versiones: Facturae 3.2.2 es la última versión publicada del esquema en la fecha de revisión.' },
    { url: 'https://www.facturae.gob.es/formato/Versiones/Esquema_castellano_v3_2_x_06_06_2017_unificado.pdf', referencia: 'Portal oficial Facturae, Descripción de los campos del formato 3.2.2: documenta FileHeader y Parties, el contenedor Invoices y la estructura anidada de Invoice/InvoiceTotals.' },
    { url: 'https://www.facturae.gob.es/content/dam/facturae/formato/versiones/Facturaev3_2_2.xml', referencia: 'Esquema XSD oficial Facturae 3.2.2, enlazado desde la página de última versión; estructura XML que define los elementos directos del root Facturae y el anidamiento de InvoiceTotals.' }
  ],
  ec2: [
    { url: 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-resize.html', referencia: 'AWS EC2 User Guide, Amazon EC2 instance type changes: permite redimensionar una instancia cambiando su tipo cuando la configuración y compatibilidad lo permiten; también aclara que añadir almacenamiento EBS no requiere cambiar el tipo de instancia.' },
    { url: 'https://aws.amazon.com/ec2/', referencia: 'AWS, Amazon EC2: servicio de instancias de cómputo bajo demanda y capacidad de cómputo en la nube.' }
  ],
  materialized: [
    { url: 'https://docs.oracle.com/en/database/oracle/oracle-database/26/dwhsg/basic-materialized-views.html', referencia: 'Oracle AI Database 26c Data Warehousing Guide, Basic Materialized Views: define vistas materializadas que precalculan y almacenan resultados en la base de datos y describe su actualización y uso para reescritura de consultas.' }
  ],
  mutex: [
    { url: 'https://www.cs.utexas.edu/~EWD/transcriptions/EWD01xx/EWD123.html', referencia: 'E. W. Dijkstra, EWD 123, Cooperating sequential processes: formula el problema de exclusión mutua en secciones críticas, impone que sus ejecuciones no se solapen y analiza el progreso de los procesos que esperan.' }
  ]
};

const academy = {
  crypto: { url: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view', referencia: 'ITIC Academy, bloque 36 «Seguridad, criptografía, identificación y firma», versión 2026.1, §2 (cifrado simétrico) y tema oficial A1-79. El material cubre principios y algoritmos actuales, no desarrolla de forma específica el cifrado clásico monoalfabético; se conserva como concepto histórico del programa.' },
  facturae: { url: 'https://drive.google.com/file/d/1FPkzhljZaHbxADbo36QNm9U9gwGy7lIt/view', referencia: 'ITIC Academy, bloque «Comercio electrónico y factura electrónica», versión 2026.2, §§8.1–8.2 (formato Facturae 3.2.2, DIR3 y FACe); correspondencia A1-78 y, en el contexto de servicios comunes de factura pública, A2-I-10.' },
  cloud: { url: 'https://drive.google.com/file/d/16Er3cneQ-Vik3zSjYq6zQUOfSKK4vxVu/view', referencia: 'ITIC Academy, bloque «Cloud Computing», versión 2026.1, §8.4 (mapa de proveedores: AWS EC2 como servicio de cómputo); correspondencia A1-55/A2-II-1.' },
  databases: { url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view', referencia: 'ITIC Academy, bloque 29 «Bases de datos, SQL y modelado de datos», versión 2026.1, §5.11 (vistas y vistas materializadas); correspondencia A1-63/A1-64/A2-II-5/A2-IV-2.' },
  os: { url: 'https://drive.google.com/file/d/1G57S8eoBb-CBcQcBA-KS6o8sASPMTwfm/view', referencia: 'ITIC Academy, bloque 27 «Sistemas operativos», versión 2026.1, §2.6 (concurrencia, condiciones de carrera y exclusión mutua); correspondencia A1-59/A2-II-2.' }
};

const records = [
  [1321, [79], ['IV-12'], ['criptografía', 'cifrado simétrico', 'sustitución monoalfabética', 'análisis de frecuencias'], sources.mono, null,
    'Una sustitución monoalfabética monogramática transforma el texto carácter a carácter con una correspondencia fija: cada símbolo de texto claro se representa siempre mediante el mismo símbolo cifrado. Por eso conserva la distribución de frecuencias y no “palia” por sí sola los ataques de análisis de frecuencias; esa propiedad se relaciona con variar la sustitución a lo largo del mensaje. Se reescriben los distractores para separar sustitución monogramática, poligrámica y polialfabética.', 'corregida'],
  [1322, [78], ['I-10'], ['Facturae', 'factura electrónica', 'XML', 'XSD', 'FACe'], sources.facturae, null,
    '“Bloque de primer nivel” podía referirse a conceptos de negocio en vez de a elementos XML directos. Se concreta el supuesto en el esquema oficial vigente Facturae 3.2.2: FileHeader, Parties e Invoices son hijos directos de Facturae; InvoiceTotals está anidado dentro de Invoice y no es hijo del elemento raíz. Se mantiene la respuesta en esa opción.', 'corregida'],
  [1323, [55], ['II-1'], ['AWS', 'EC2', 'cloud computing', 'IaaS', 'instancias de cómputo'], sources.ec2, null,
    'EC2 proporciona instancias y capacidad de cómputo; es posible cambiar el tipo de instancia para adecuarla a la carga cuando la compatibilidad lo permite, normalmente siguiendo el procedimiento de parada y cambio indicado por AWS. El almacenamiento configurable se ofrece mediante servicios como EBS y no define por sí solo EC2; aprendizaje automático y autenticación federada corresponden a otros servicios/capacidades. Se aclara que “modificable” no significa redimensionamiento transparente en caliente.', 'corregida'],
  [1324, [63, 64], ['II-5', 'IV-2'], ['Oracle', 'SGBD', 'vista materializada', 'almacenamiento de resultados', 'actualización'], sources.materialized, null,
    'Una vista materializada almacena en la base de datos el resultado de la consulta definida, a diferencia de una vista ordinaria que almacena principalmente su definición y calcula el resultado al consultar. Oracle permite definir mecanismos de actualización/refresco; la materialización no consiste en exportar manualmente los datos a un archivo. Se completa la pregunta con distractores inequívocos y se conserva como correcta la definición que describe el almacenamiento del resultado.', 'corregida'],
  [1325, [59], ['II-2'], ['sistemas operativos', 'procesos', 'concurrencia', 'sección crítica', 'exclusión mutua', 'progreso', 'espera acotada'], sources.mutex, null,
    'La pregunta original afirmaba que las tres opciones eran ciertas, pero “todo proceso debe poder entrar” y “un proceso externo no puede bloquear el acceso” no especifican las condiciones de progreso o equidad y no son definiciones formales suficientes. Se formula el conjunto clásico de requisitos de una solución a la sección crítica: exclusión mutua (como máximo un proceso dentro), progreso (no aplazamiento indefinido de la elección cuando hay solicitudes y la sección está libre) y espera acotada (límite finito a entradas ajenas tras una solicitud). La respuesta correcta es que debe satisfacer los tres.', 'corregida']
];

apply({ numero: '201', fecha: '2026-10-24', records, edits: {
  1321: { texto: '¿Qué caracteriza a una sustitución monoalfabética monogramática?', opciones: [
    'Cada símbolo de texto claro se sustituye, carácter a carácter, según una correspondencia fija durante todo el mensaje.',
    'La correspondencia entre texto claro y cifrado cambia a lo largo del mensaje para ocultar las frecuencias.',
    'Un único carácter de texto claro se sustituye necesariamente por una secuencia de varios caracteres.',
    'Se sustituyen grupos de longitud variable según la posición que ocupan en el mensaje.'
  ], respuesta_correcta: 0 },
  1322: { texto: 'En el esquema XML oficial Facturae 3.2.2, ¿qué elemento aparece dentro de Invoice y no es hijo directo del elemento raíz Facturae?', opciones: [
    'FileHeader',
    'Parties',
    'Invoices',
    'InvoiceTotals'
  ], respuesta_correcta: 3 },
  1323: { texto: '¿Qué describe correctamente Amazon EC2?', opciones: [
    'Un servicio de instancias de cómputo cuya capacidad puede adecuarse cambiando el tipo de instancia, sujeto a compatibilidad y al procedimiento aplicable.',
    'El servicio de almacenamiento de objetos de AWS, con capacidad dimensionable por el cliente.',
    'Un catálogo de algoritmos de aprendizaje automático que se ejecutan sin instancias de cómputo.',
    'El servicio de AWS para crear relaciones de confianza de identidad federada.'
  ], respuesta_correcta: 0 },
  1324: { texto: 'En Oracle Database, ¿qué afirmación describe una vista materializada?', opciones: [
    'Es un archivo exportado manualmente que no se gestiona como objeto de base de datos.',
    'Es un objeto que almacena el resultado de la consulta definida y cuyo contenido puede actualizarse mediante un mecanismo de refresco.',
    'Es un alias sin almacenamiento cuyo resultado siempre se calcula íntegramente al ejecutar cada consulta.',
    'Almacena solo el texto SQL de la consulta y nunca guarda filas resultantes.'
  ], respuesta_correcta: 1 },
  1325: { texto: 'Una solución al problema clásico de la sección crítica debe satisfacer exclusión mutua, progreso y espera acotada. ¿Qué significa la exclusión mutua?', opciones: [
    'Como máximo un proceso a la vez puede ejecutar la sección crítica protegida por el mismo recurso.',
    'Cuando la sección crítica está libre y hay solicitudes, la decisión de quién entra puede aplazarse indefinidamente.',
    'Tras solicitar entrar, un proceso puede ser adelantado por otros procesos un número ilimitado de veces.',
    'Un proceso que no solicita entrar debe participar en la decisión de quién accede.'
  ], respuesta_correcta: 0 }
}});

const fs = require('node:fs');
const path = require('node:path');
const bank = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-201.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const meta = {
  1321: { source: academy.crypto, block: 'Bloque 36, Seguridad, criptografía, identificación y firma, versión 2026.1, §2; el apartado cubre cifrado simétrico actual y no desarrolla de forma específica sustituciones clásicas monoalfabéticas.', topics: 'A1-79/A2-IV-12' },
  1322: { source: academy.facturae, block: 'Bloque Comercio electrónico y factura electrónica, versión 2026.2, §§8.1–8.2 (Facturae 3.2.2, DIR3 y FACe).', topics: 'A1-78/A2-I-10' },
  1323: { source: academy.cloud, block: 'Bloque Cloud Computing, versión 2026.1, §8.4 (AWS EC2 como proveedor de cómputo).', topics: 'A1-55/A2-II-1' },
  1324: { source: academy.databases, block: 'Bloque 29, Bases de datos, SQL y modelado de datos, versión 2026.1, §5.11 (vistas y vistas materializadas).', topics: 'A1-63/A1-64/A2-II-5/A2-IV-2' },
  1325: { source: academy.os, block: 'Bloque 27, Sistemas operativos, versión 2026.1, §2.6 (concurrencia, condiciones de carrera y exclusión mutua).', topics: 'A1-59/A2-II-2' }
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const m = meta[q.id];
  q.clasificacion.bloque_academia = m.block;
  q.clasificacion.nota = `Cotejo temático con ITIC Academy: ${m.block} Correspondencia orientativa con el temario oficial: ${m.topics}.`;
  const comment = ` Cotejo temático con ITIC Academy: ${m.block} Correspondencia orientativa con el temario oficial: ${m.topics}.`;
  q.comentarios = (q.comentarios || '') + comment;
  q.revision.observaciones += comment;
  q.revision.fuentes.push({ url: m.source.url, referencia: `${m.source.referencia} Correspondencia: ${m.topics}.` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(__dirname, '..', 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo temático de academia añadido al lote 201.');
