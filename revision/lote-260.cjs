const apply = require('./aplicar-lote.cjs');

const records = [
  [1616, [77], [], ['OpenDocument', 'ODF', 'ISO/IEC 26300', 'formatos abiertos', 'interoperabilidad documental'], [
    {url: 'https://www.iso.org/standard/66363.html', referencia: 'ISO, ISO/IEC 26300-1:2015: Open Document Format for Office Applications (OpenDocument) v1.2, parte 1, esquema; registro ISO indica que esta edición fue confirmada en 2020 y sustituye ISO/IEC 26300:2006.'},
    {url: 'https://docs.oasis-open.org/office/OpenDocument/v1.3/os/part1-opendocument-schema.html', referencia: 'OASIS OpenDocument v1.3, Part 1: OpenDocument Schema: especificación XML del formato OpenDocument para documentos de ofimática.'}
  ], {texto: '¿Qué norma ISO/IEC especifica el esquema del formato OpenDocument para aplicaciones de ofimática (ODF v1.2)?', opciones: [
    'ISO/IEC 26300-1:2015.',
    'RFC 2373, sobre arquitectura de direccionamiento IPv6.',
    'ISO/IEC 9899, relativa al lenguaje de programación C.',
    'La familia ISO 9000, sobre sistemas de gestión de la calidad.'
  ], respuesta_correcta: 0}, 'OpenDocument v1.2 está especificado en la serie ISO/IEC 26300; la referencia actual de su esquema es ISO/IEC 26300-1:2015, que reemplazó a la edición ISO/IEC 26300:2006 citada en la pregunta original. ISO informa que la parte 1 sigue publicada y fue confirmada en 2020, aunque está en revisión. OASIS publica además la versión 1.3 de la especificación OpenDocument. Se actualiza la edición del estándar y se delimita el número de parte.', 'corregida'],
  [1617, [80, 81], ['I-6'], ['documento electrónico administrativo', 'copia auténtica', 'CSV', 'CVE', 'Ley 39/2015', 'impresión', 'sede electrónica'], [
    {url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565', referencia: 'Ley 39/2015, texto consolidado, art. 27.3.c: la copia en papel de un documento electrónico debe identificar su condición de copia y contener código u otro sistema que permita contrastar su autenticidad accediendo a los archivos de la Administración emisora; art. 27.3 final: los códigos o sistemas se publican en la sede electrónica.'},
    {url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2010-1331', referencia: 'Real Decreto 4/2010, Esquema Nacional de Interoperabilidad, y normativa técnica de desarrollo sobre copias auténticas y verificación de documentos administrativos.'}
  ], {texto: 'Una persona necesita presentar en papel una copia de un documento electrónico administrativo expedido por una Administración. ¿Qué condición permite contrastar la autenticidad de esa copia en papel?', opciones: [
    'Que se imprima el documento firmado y que la imagen de la firma electrónica aparezca en la hoja.',
    'Que sea una copia en papel expedida con la condición de copia e incluya un CSV u otro sistema de verificación que permita contrastarla con los archivos de la Administración emisora.',
    'Que el interesado imprima el archivo original por su cuenta; la firma electrónica por sí sola hace auténtica cualquier impresión.',
    'Que se añada el logotipo del organismo, aunque no haya código ni sistema de consulta.'
  ], respuesta_correcta: 1}, 'La opción correcta describe el art. 27.3.c de la Ley 39/2015: las copias en papel de documentos electrónicos de las Administraciones deben indicar que son copia e incluir un código generado electrónicamente u otro medio que permita contrastar su autenticidad con los archivos del órgano emisor. No basta imprimir un documento firmado por el usuario ni pegar un logotipo; tampoco todo CSV es necesariamente el único mecanismo admisible. Se delimita el caso administrativo regulado por la ley, no cualquier documento privado.', 'corregida'],
  [1618, [67], ['III-5'], ['C++', 'tipado estático', 'tipos', 'lenguajes de programación', 'compilación'], [
    {url: 'https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2023/n4950.pdf', referencia: 'ISO/IEC JTC 1/SC 22/WG21, N4950, final working draft for C++23: la semántica del lenguaje define tipos para expresiones y entidades y reglas de verificación estática en compilación; documento base del Draft International Standard de C++23.'},
    {url: 'https://www.php.net/manual/en/language.types.intro.php', referencia: 'PHP Manual, Introduction to types: PHP es dinámicamente tipado de manera predeterminada; se usa aquí para diferenciar el criterio verificable de tipado estático de la ambigua etiqueta “fuertemente tipado”.'}
  ], {texto: '¿Cuál de estos lenguajes tiene un sistema de tipos estático, en el que los tipos de las expresiones se determinan y comprueban principalmente durante la compilación?', opciones: [
    'Lisp, considerado como familia de lenguajes sin especificar dialecto.',
    'Perl, en su uso habitual como lenguaje dinámico.',
    'PHP, que es dinámico de forma predeterminada aunque admite declaraciones de tipos.',
    'C++, cuyos tipos de expresiones y entidades se determinan según las reglas estáticas del lenguaje.'
  ], respuesta_correcta: 3}, 'C++ es la opción de tipado estático. El enunciado original preguntaba por “fuerte tipado”, expresión que carece de una definición única aceptada y cuya clasificación de lenguajes depende del criterio usado; además, varios lenguajes citados poseen mecanismos de tipos o controles adicionales. Se reemplaza por el criterio más preciso de tipado estático y se indica que PHP, aunque dinámico por defecto, puede declarar tipos.', 'corregida'],
  [1619, [56], ['IV-5'], ['RAID 0', 'striping', 'distribución en bandas', 'rendimiento', 'redundancia', 'fallo de disco'], [
    {url: 'https://docs.oracle.com/database/121/VLDBG/GUID-226C8C0F-89ED-4470-9017-1427564F4A89.htm', referencia: 'Oracle Database, Hardware-Based Striping / RAID 0 Striping: RAID 0 necesita al menos dos dispositivos, distribuye bloques entre ellos para usar varios discos/canales y no proporciona redundancia.'},
    {url: 'https://docs.oracle.com/en/operating-systems/oracle-linux/10/stordev/stordev-SoftwareRAIDLevels.html', referencia: 'Oracle Linux 10, Software RAID Levels: RAID 0 incrementa el rendimiento mediante striping, carece de redundancia y el fallo de una unidad inutiliza el conjunto.'}
  ], {texto: '¿Qué caracteriza a RAID 0 (striping) en su implementación básica?', opciones: [
    'Tolera el fallo de un disco gracias a una copia espejo.',
    'Mantiene una copia de paridad distribuida entre los discos.',
    'Requiere al menos cinco discos por definición.',
    'Usa al menos dos discos y distribuye bloques entre ellos para mejorar el rendimiento agregado, sin aportar redundancia.'
  ], respuesta_correcta: 3}, 'RAID 0 distribuye datos en bandas entre dos o más dispositivos, lo que permite aumentar el rendimiento agregado para cargas adecuadas, pero no guarda paridad ni espejo. El fallo de cualquiera de los discos puede inutilizar el conjunto y causar pérdida de datos. Se precisa que la mejora depende de la carga y el hardware, y no se confunde con tolerancia a fallos.', 'corregida'],
  [1620, [85], [], ['blockchain', 'consenso', 'Proof of Authority', 'Proof of Stake', 'Proof of Elapsed Time', 'Proof of History', 'PoH', 'PoET'], [
    {url: 'https://ethereum.org/developers/docs/consensus-mechanisms/poa/', referencia: 'ethereum.org, Proof-of-authority (PoA): describe PoA como mecanismo de consenso en el que un conjunto de firmantes autorizados produce bloques.'},
    {url: 'https://ethereum.org/developers/docs/consensus-mechanisms/pos/pos-vs-pow/', referencia: 'ethereum.org, Proof-of-stake vs proof-of-work: describe la prueba de participación usada por Ethereum para el consenso.'},
    {url: 'https://github.com/hyperledger-archives/sawtooth-docs/blob/master/source/sawtooth_developers_guide/architecture_overview.rst', referencia: 'Hyperledger Sawtooth documentation (archivo del proyecto): identifica Proof of Elapsed Time (PoET) como implementación de consenso.'},
    {url: 'https://solana.com/uk/news/tower-bft--solana-s-high-performance-implementation-of-pbft', referencia: 'Solana, Tower BFT: Proof of History (PoH) es un reloj/ordenador criptográfico previo al consenso BFT de Solana, no el nombre “Proof of Hash” ni por sí solo el protocolo de consenso de Tower BFT.'}
  ], {texto: '¿Qué opción contiene un nombre/acrónimo mal formado, en lugar de la denominación habitual del mecanismo indicado?', opciones: [
    'Proof of Authority (PoA).',
    'Proof of Stake (PoS).',
    'Poof of Hash (PoH).',
    'Proof of Elapsed Time (PoET).'
  ], respuesta_correcta: 2}, 'La opción incorrecta es “Poof of Hash (PoH)”: es una errata que mezcla la denominación Proof of History (PoH) con la palabra “Proof”. PoA, PoS y PoET son nombres documentados de mecanismos de consenso. Se evita afirmar sin matices que Proof of History sea por sí solo consenso: Solana lo usa como reloj criptográfico junto con Tower BFT.', 'corregida']
];

const edits = Object.fromEntries(records.filter(row => row[5]).map(([id,,,,,edit]) => [id, edit]));
apply({numero: '260', fecha: '2026-10-27', records, edits});
