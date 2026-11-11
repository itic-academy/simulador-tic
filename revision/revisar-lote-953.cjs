const aplicar = require('./aplicar-lote.cjs');

const ref = (url, referencia) => ({ url, referencia });
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/buscar/doc.php?id=BOE-A-2025-26262';
const academy26 = 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk';
const academy36 = 'https://docs.google.com/document/d/1Rix8RBBUSoXJBOAt8iWyU9j5tPiqlXzk/edit?usp=drivesdk&ouid=107088454749630873035&rtpof=true&sd=true';

const records = [
  [5086, ['80', '122'], [], ['X.500', 'servicios de directorio', 'DIB', 'DSA', 'directorio distribuido'], [
    ref('https://www.itu.int/rec/T-REC-X.500-201910-I', 'ITU-T X.500 (10/2019), vigente: define el Directorio y la Directory Information Base (DIB), y explica que la información del directorio facilita la comunicación entre objetos como personas, terminales y listas de distribución.'),
    ref('https://www.itu.int/rec/T-REC-X.501/en', 'ITU-T X.501 (10/2019), vigente con enmiendas: define los modelos del Directorio, Directory System Agents (DSA) y su marco operacional; la distribución de la DIB entre sistemas cooperantes se complementa con X.518.'),
    ref('https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', 'Convocatoria oficial A1 GSI 2025, tema 80: protocolos de directorio basados en LDAP y X.500; tema 122: servicios de directorio.'),
    ref('https://docs.google.com/document/d/1Rix8RBBUSoXJBOAt8iWyU9j5tPiqlXzk/edit?usp=drivesdk&ouid=107088454749630873035&rtpof=true&sd=true', 'ITIC Academy, bloque 36 «Seguridad, criptografía, identificación y firma», versión 2026.1: el índice y contenido incluyen LDAP y servicios de directorio en el tema A1 80; cotejo curricular.')
  ], null, 'Respuesta B. X.500 define un servicio de directorio distribuido: las entradas de la DIB pueden repartirse entre agentes DSA, que cooperan para proporcionar una vista lógica integrada. La información del Directorio sirve, entre otros usos, para facilitar la comunicación. Se reemplazan las alternativas para evitar las afirmaciones imprecisas de «accesible desde cualquier punto» y la descripción negativa de su finalidad.', 'corregida'],
  [5087, ['80'], ['I-6'], ['Ley 6/2020', 'certificado cualificado', 'vigencia máxima', 'cinco años', 'artículo 4.2'], [
    ref('https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046', 'BOE, Ley 6/2020, artículo 4.2: el período de vigencia de los certificados cualificados no será superior a cinco años. El artículo está vigente en el texto consultado.'),
    ref('https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', 'Convocatoria oficial A1 GSI 2025, tema 80: identificación y firma electrónica, certificados digitales.'),
    ref('https://www.boe.es/buscar/doc.php?id=BOE-A-2025-26262', 'Convocatoria oficial A2 GSI AGE 2025, tema I.6: identidad y firma electrónica y régimen jurídico.')
  ], null, 'Respuesta B. El artículo 4.2 de la Ley 6/2020 establece que la vigencia de los certificados cualificados no puede superar cinco años. La clave original es correcta; se mantiene como vigente y se cita el artículo concreto para distinguirlo de otros plazos de identificación o renovación.', 'vigente'],
  [5088, ['64'], ['III-4'], ['modelo relacional', 'clave ajena', 'clave foránea', 'integridad referencial', 'SQL', 'clave de una columna'], [
    ref('https://www.postgresql.org/docs/current/ddl-constraints.html', 'PostgreSQL Documentation, Foreign Key Constraints: una foreign key exige que los valores no nulos correspondan a una clave referenciada; para claves compuestas los modos MATCH SIMPLE y MATCH FULL tratan de forma distinta los valores NULL.'),
    ref('https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', 'Convocatoria oficial A1 GSI 2025, tema 64: modelo relacional y lenguaje SQL.'),
    ref('https://www.boe.es/buscar/doc.php?id=BOE-A-2025-26262', 'Convocatoria oficial A2 GSI AGE 2025, tema III.4: modelo lógico relacional y diseño de bases de datos.')
  ], null, 'Respuesta D. La integridad referencial se implementa mediante una clave foránea que limita sus valores a los de la clave referenciada; una clave foránea nullable puede admitir NULL. Se especifica una clave de una sola columna, porque para claves compuestas el tratamiento de NULL depende de la modalidad MATCH y la frase «completamente nulos» no es universal.', 'corregida'],
  [5089, ['56'], ['IV-5'], ['RAID', 'redundancia', 'tolerancia a fallos', 'discos', 'RAID 1', 'RAID 5'], [
    ref('https://csrc.nist.gov/glossary/term/RAID', 'NIST CSRC Glossary: RAID significa Redundant Array of Independent Disks.'),
    ref('https://docs.oracle.com/en/operating-systems/oracle-linux/10/stordev/stordev-SoftwareRAIDLevels.html', 'Oracle Linux 10 Storage Administration: RAID 1 y RAID 5 proporcionan redundancia y pueden mantener el acceso/reconstruir datos tras ciertos fallos; el comportamiento depende del nivel. RAID 0 no proporciona redundancia.'),
    ref('https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', 'Convocatoria oficial A1 GSI 2025, tema 56: sistemas de almacenamiento para sistemas grandes y departamentales.'),
    ref('https://www.boe.es/buscar/doc.php?id=BOE-A-2025-26262', 'Convocatoria oficial A2 GSI AGE 2025, tema IV.5: arquitectura, tipos y componentes del almacenamiento de datos.')
  ], null, 'Respuesta B. RAID combina varios discos en un conjunto lógico; algunos niveles, como RAID 1 o RAID 5, proporcionan redundancia y toleran determinados fallos, mientras que RAID 0 no es redundante. Se elimina la generalización de que RAID por sí solo garantiza alta disponibilidad: el resultado depende del nivel y del resto de la arquitectura.', 'corregida'],
  [5090, [], ['II-3'], ['historia de la programación', 'ALGOL 58', 'COBOL', 'FORTRAN', 'década de 1950'], [
    ref('https://www.ibm.com/history/fortran', 'IBM Archives, historia de FORTRAN: su primera versión se publicó en 1957.'),
    ref('https://www.softwarepreservation.org/projects/ALGOL/', 'Computer History Museum Software Preservation Group, fuentes primarias de ALGOL: la reunión conjunta ACM-GAMM de Zúrich de mayo de 1958 produjo el informe ALGOL 58.'),
    ref('https://nvlpubs.nist.gov/nistpubs/Legacy/hb/nbshandbook106.pdf', 'NBS/NIST Handbook 106, informe del comité CODASYL: documenta la actividad de desarrollo y especificación de COBOL desde 1959; la primera especificación se publicó en 1960.'),
    ref('https://www.boe.es/buscar/doc.php?id=BOE-A-2025-26262', 'Convocatoria oficial A2 GSI AGE 2025, tema II.3: características técnicas de los lenguajes y paradigmas actuales de programación; se usa como relación temática, pues el programa no contiene un epígrafe específico de historia de lenguajes.')
  ], null, 'Respuesta B. Las fechas de referencia sitúan los tres hitos en los años cincuenta: FORTRAN se publicó en 1957, ALGOL 58 se acordó en 1958 y CODASYL comenzó el desarrollo de COBOL en 1959 (su primera especificación apareció en 1960). Se precisa el significado de «década de los» y se distingue inicio/desarrollo de COBOL de la publicación posterior de su especificación. No se asigna tema A1 ni bloque de Academy sin correspondencia histórica directa.', 'corregida']
];

const edits = {
  5086: {
    texto: 'Según las recomendaciones ITU-T X.500/X.501, ¿qué caracteriza al servicio de directorio X.500?',
    opciones: [
      'Es una base de datos centralizada en un único servidor.',
      'Es un servicio de directorio distribuido: su información puede repartirse entre agentes DSA que cooperan para ofrecer una vista lógica integrada.',
      'Solo almacena nombres y excluye información útil para facilitar la comunicación entre personas y recursos.',
      'Las opciones B y C son correctas.'
    ]
  },
  5087: { texto: 'De acuerdo con el artículo 4.2 de la Ley 6/2020, ¿cuál es el período máximo de vigencia de un certificado cualificado?' },
  5088: { texto: 'En una clave foránea de una sola columna, ¿cómo se denomina la restricción que exige que todo valor no nulo coincida con un valor de la clave referenciada?' },
  5089: { texto: '¿Qué tecnología combina varios discos en un conjunto lógico y, en los niveles que incorporan redundancia, puede tolerar ciertos fallos de disco?' },
  5090: { texto: 'FORTRAN se publicó en 1957, ALGOL 58 se acordó en 1958 y el desarrollo de COBOL comenzó en 1959. ¿En qué década ocurrieron esos hitos?' }
};

aplicar({ numero: '953', fecha: '2026-11-11', records, edits });
