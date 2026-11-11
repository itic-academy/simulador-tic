const aplicar = require('./aplicar-lote.cjs');

const ref = (url, referencia) => ({ url, referencia });
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/buscar/doc.php?id=BOE-A-2025-26262';
const academy30 = 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk';
const academy32 = 'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk';
const academy36 = 'https://docs.google.com/document/d/1Rix8RBBUSoXJBOAt8iWyU9j5tPiqlXzk/edit?usp=drivesdk&ouid=107088454749630873035&rtpof=true&sd=true';

const records = [
  [5091, ['81'], ['I-6'], ['PKI', 'X.509', 'autoridad de registro', 'RA', 'identificación', 'autenticación'], [
    ref('https://www.rfc-editor.org/rfc/rfc3647.html', 'IETF RFC 3647, §3.2 y §4.1.3: la Registration Authority (RA) realiza la identificación y autenticación de solicitantes, tramita solicitudes y actúa por delegación de la CA; la autoridad certificadora emite y firma los certificados.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 81: PKI, certificados y mecanismos de identificación y firma.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, tema I.6: identidad y firma electrónica y régimen eIDAS.'),
    ref(academy36, 'ITIC Academy, bloque 36 «Seguridad, criptografía, identificación y firma», versión 2026.1: identidad digital, certificación y gestión de certificados; cotejo curricular.')
  ], null, 'Respuesta A. La autoridad de registro (RA) verifica la identidad y autentica a los solicitantes y puede realizar otras tareas delegadas; la autoridad certificadora (CA) decide/emite y firma el certificado. Se precisa la separación de funciones para evitar confundir verificación de identidad con emisión.', 'corregida'],
  [5092, ['67'], ['II-3'], ['Jakarta EE 11', 'Java EE', 'Applet Container', 'applets', 'Java Plug-in', 'obsolescencia'], [
    ref('https://jakarta.ee/specifications/platform/11/jakarta-platform-spec-11.0.pdf', 'Jakarta EE Platform 11 Specification, historial de cambios: elimina las referencias al Applet Container de la plataforma. El contenedor de applets pertenece al modelo Java EE legado.'),
    ref('https://docs.oracle.com/en/java/javase/27/migrate/removed-tools-components.html', 'Oracle JDK 27 Migration Guide: la tecnología de despliegue de applets fue deprecada en JDK 9 y retirada en JDK 11, incluido el plug-in del navegador y Applet Viewer.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 67: entorno de desarrollo Java.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, tema II.3: características técnicas de lenguajes y paradigmas actuales; se usa como contexto general, sin epígrafe específico de contenedores de applets.'),
    ref(academy30, 'ITIC Academy, bloque 30 «Tecnologías de sistemas de información», versión 2026, apartado del entorno Java; cotejo curricular. El material no se utiliza como autoridad sobre la retirada del Applet Container.')
  ], null, 'Respuesta D. El Applet Container es una pieza heredada del modelo Java EE: Jakarta EE 11 elimina sus referencias y Oracle retiró el plug-in y las herramientas de applets del JDK 11. Se reemplaza «actualmente» por un marco temporal comprobable (Jakarta EE 11) y se evita sugerir que los contenedores web, EJB o de cliente de aplicación estén obsoletos.', 'corregida'],
  [5093, ['71', '75'], ['III-15'], ['ETL', 'extract-transform-load', 'integración de datos', 'almacén de datos', 'extracción', 'transformación', 'carga'], [
    ref('https://docs.oracle.com/en/database/oracle/oracle-database/26/dwhsg/etl-overview.html', 'Oracle Database 26, Data Movement/ETL Overview: ETL es el proceso de extraer datos de los sistemas origen, transformarlos y cargarlos en el almacén destino.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, temas 71 y 75: ciclo de vida y herramientas de ciencia de datos; tecnologías de explotación y entornos de compartición de datos.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, tema III.15: minería de datos, big data y tecnología aplicada a problemas de gestión.'),
    ref(academy32, 'ITIC Academy, bloque 32 «Inteligencia artificial y ciencia de datos», versión 2026.1: ETL, preprocesado, modelado y herramientas; cotejo curricular.')
  ], null, 'Respuesta D. ETL describe el proceso de extracción desde uno o varios orígenes, transformación y carga en un destino, habitualmente un almacén o plataforma de datos. Se sustituye la asociación exclusiva con minería de datos por un contexto de integración y almacenamiento, más preciso.', 'corregida'],
  [5094, ['67'], ['II-3'], ['Java', 'sobrecarga', 'overloading', 'firma del método', 'lista de parámetros', 'tipo de retorno'], [
    ref('https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html', 'Oracle Java Tutorials, «Defining Methods»: la sobrecarga permite métodos con el mismo nombre y listas de parámetros diferentes; el tipo de retorno no se usa para distinguirlos, por lo que no pueden duplicarse métodos con la misma firma solo cambiando el retorno.'),
    ref('https://docs.oracle.com/javase/specs/jls/se26/html/jls-8.html', 'Java Language Specification, §8.4.2: define la firma por nombre, parámetros y tipos genéricos; dos métodos sobrecargados con firmas distintas pueden devolver el mismo tipo.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 67: entorno Java.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, tema II.3: características técnicas de lenguajes y paradigmas de programación.'),
    ref(academy30, 'ITIC Academy, bloque 30 «Tecnologías de sistemas de información», versión 2026, entorno Java; cotejo curricular.')
  ], null, 'Respuesta B. En Java pueden existir métodos sobrecargados con el mismo nombre y el mismo tipo de retorno si sus listas de parámetros hacen distintas sus firmas. El retorno no distingue por sí solo dos métodos con la misma firma. Se formula explícitamente como sobrecarga para no mezclarla con sobrescritura o con métodos estáticos.', 'corregida'],
  [5095, ['79', '81'], ['I-6', 'IV-12'], ['criptografía asimétrica', 'claves pública y privada', 'intercambio de claves de sesión', 'firma digital', 'factorización', 'logaritmo discreto', 'curvas elípticas'], [
    ref('https://csrc.nist.gov/pubs/sp/800/56/a/r3/final', 'NIST SP 800-56A Rev. 3: los esquemas de establecimiento de claves se basan en problemas de logaritmo discreto en campos finitos y curvas elípticas; permiten acordar/derivar secretos de sesión.'),
    ref('https://csrc.nist.gov/pubs/sp/800/56/b/r2/final', 'NIST SP 800-56B Rev. 2: recomienda esquemas de establecimiento de claves basados en factorización entera (RSA).'),
    ref('https://csrc.nist.gov/pubs/fips/186-5/final', 'NIST FIPS 186-5, Digital Signature Standard: define algoritmos de firma digital basados en clave pública.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, temas 79 y 81: cifrado simétrico/asimétrico, algoritmos, certificados y PKI.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, tema I.6: identidad y firma electrónica; tema IV.12: técnicas criptográficas y firma digital.'),
    ref(academy36, 'ITIC Academy, bloque 36 «Seguridad, criptografía, identificación y firma», versión 2026.1: claves, criptografía asimétrica, establecimiento de claves y firma electrónica; cotejo curricular.')
  ], null, 'Respuesta A. La criptografía asimétrica utiliza un par de claves relacionadas: la clave privada se mantiene bajo control de su titular y la pública puede difundirse; por tanto, su seguridad no depende de transmitir una clave secreta compartida por un canal seguro. Los esquemas de clave pública se usan para establecer claves de sesión y para firmas digitales. Se corrige la alternativa D, que decía incorrectamente «intercambio de claves privadas», y se precisa A para que sea inequívocamente falsa.', 'corregida']
];

const edits = {
  5091: { texto: 'En una PKI X.509, ¿qué entidad realiza normalmente la identificación y autenticación de los solicitantes por delegación de la autoridad certificadora?' },
  5092: { texto: 'En el marco de Jakarta EE 11, ¿qué contenedor Java EE heredado ya no forma parte de la plataforma actual?', opcion: [3, 'Applet Container (contenedor de applets)'] },
  5093: { texto: 'En un flujo de integración o almacenamiento de datos, ¿qué describe el proceso ETL?', opcion: [3, 'Extraer datos de uno o varios orígenes, transformarlos y cargarlos en un sistema de destino.'] },
  5094: {
    texto: 'En Java, ¿pueden dos métodos sobrecargados de una clase tener el mismo nombre y el mismo tipo de retorno si sus listas de parámetros son distintas?',
    opciones: [
      'No; los métodos sobrecargados deben tener tipos de retorno diferentes.',
      'Sí; basta con que sus firmas difieran en los parámetros.',
      'No; una clase solo puede declarar un método con cada nombre.',
      'Solo si ambos métodos son static.'
    ]
  },
  5095: {
    texto: 'Señale la opción INCORRECTA sobre criptografía asimétrica:',
    opciones: [
      'Su seguridad depende de transmitir la clave privada compartida entre emisor y receptor por un canal seguro.',
      'Incluye esquemas basados, entre otros, en factorización entera y problemas de logaritmo discreto, también en curvas elípticas.',
      'Se apoya en la dificultad computacional de ciertos problemas matemáticos para proteger operaciones criptográficas.',
      'Entre sus usos están el establecimiento de claves de sesión y la firma digital.'
    ]
  }
};

aplicar({ numero: '954', fecha: '2026-11-11', records, edits });
