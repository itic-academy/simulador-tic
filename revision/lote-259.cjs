const apply = require('./aplicar-lote.cjs');

const records = [
  [1611, [108, 114], ['IV-11'], ['GPS', 'almanaque', 'efemérides', 'NAV message', 'GNSS', 'satélites'], [
    {url: 'https://www.gps.gov/sites/default/files/2025-07/2008-SPS-performance-standard.pdf', referencia: 'U.S. Space Force, GPS Standard Positioning Service Performance Standard, §2.2.2 y fig. 2.2-1: los subframes 2–3 contienen parámetros de efemérides y los subframes paginados 4–5 contienen almanaque e información de salud a largo plazo.'},
    {url: 'https://www.gps.gov/systems/gps/space/', referencia: 'GPS.gov, Space Segment: los satélites GPS transmiten señales que incluyen sus datos de posición y tiempo para que los receptores calculen posición y tiempo.'}
  ], {texto: '¿Qué datos orbitales difundidos en el mensaje de navegación GPS permiten conocer, respectivamente, la órbita detallada de un satélite y la información orbital aproximada de la constelación?', opciones: [
    'Almanaque y efemérides, en ese orden.',
    'Efemérides del satélite y almanaque de la constelación.',
    'Multipath y atenuación.',
    'Latitud y longitud calculadas por el receptor.'
  ], respuesta_correcta: 1}, 'El mensaje NAV incluye efemérides precisas del satélite transmisor y almanaque con información orbital menos precisa para los satélites de la constelación. Se especifica qué representa cada conjunto: los satélites difunden parámetros de navegación por subframes, no dos “series de señales civiles” distintas; el receptor utiliza esos datos junto con las mediciones de señal para calcular la posición.', 'corregida'],
  [1612, [52], ['II-1'], ['taxonomía de Flynn', 'MISD', 'pipeline', 'paralelismo', 'flujo de instrucciones', 'flujo de datos'], [
    {url: 'https://users.cs.utah.edu/~hari/teaching/paralg/Flynn72.pdf', referencia: 'Michael J. Flynn, “Some Computer Organizations and Their Effectiveness”, IEEE Transactions on Computers, 21(9), 1972, pp. 948–960: taxonomía de organizaciones según multiplicidad de flujos de instrucciones y de datos.'},
    {url: 'https://ntrs.nasa.gov/api/citations/19930017422/downloads/19930017422.pdf', referencia: 'NASA Technical Memorandum 4662, Parallelism in Computer Architecture, apartado Flynn’s Classification Scheme: observa que el MISD suele considerarse vacío y que algunas interpretaciones tratan ciertos procesadores pipeline como SIMD, según qué se considere flujo.'}
  ], {texto: 'En una interpretación didáctica concreta de la taxonomía de Flynn, si un único flujo de datos atraviesa etapas de procesamiento distintas y cada etapa ejecuta una instrucción diferente, ¿a qué categoría se asigna ese modelo de pipeline?', opciones: [
    'SISD: un flujo de instrucciones y uno de datos.',
    'SIMD: un flujo de instrucciones y varios de datos.',
    'MISD: varios flujos de instrucciones sobre un único flujo de datos.',
    'MIMD: varios flujos de instrucciones y varios de datos.'
  ], respuesta_correcta: 2}, 'Con la interpretación indicada, el patrón es MISD por definición: varias instrucciones operan sobre un flujo de datos. No debe generalizarse que cualquier pipeline de CPU sea MISD: la asignación de procesadores segmentados a Flynn depende del modelo de flujos y de la arquitectura; fuentes de arquitectura advierten que algunas tuberías escalares se describen como SISD y ciertas tuberías vectoriales como SIMD. Se explicita la interpretación, ausente en el enunciado original.', 'corregida'],
  [1613, [80, 81], ['I-6'], ['DNIe 3.0', 'DNI electrónico', 'NFC', 'ISO 7816', 'ISO 14443', 'interfaz dual', 'smart card'], [
    {url: 'https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?id_menu=16&pag=REF_300', referencia: 'Policía Nacional, portal oficial DNI electrónico, Qué hace falta para utilizarlo: el DNI 3.0 tiene interfaz dual; permite contacto con lector ISO 7816 y conexión inalámbrica NFC compatible con ISO 14443.'},
    {url: 'https://www.dnielectronico.es/PDFs/Guia_de_Referencia_DNIe_con_NFC.pdf', referencia: 'Policía Nacional, Guía de referencia del DNIe con NFC: describe la interfaz de contacto ISO 7816 y la interfaz inalámbrica NFC del DNI 3.0.'}
  ], {texto: 'Sobre las interfaces de la tarjeta DNIe 3.0, ¿cuál de las siguientes afirmaciones es FALSA?', opciones: [
    'Dispone de una interfaz dual que incluye comunicación inalámbrica mediante NFC.',
    'Puede utilizarse mediante contacto con un lector de tarjetas inteligentes compatible con ISO 7816.',
    'No puede usarse con un lector físico de tarjetas inteligentes; solo permite NFC.',
    'Para el modo inalámbrico, la documentación oficial indica compatibilidad con lectores/dispositivos NFC conformes a ISO 14443.'
  ], respuesta_correcta: 2}, 'La afirmación falsa es que el DNIe 3.0 solo admita NFC: su chip de interfaz dual conserva el acceso por contacto con lector ISO 7816 y añade NFC conforme a ISO 14443. Se elimina “chip más rápido”, comparación sin métrica ni modelo de referencia, y se formula cada opción según requisitos verificables publicados por Policía Nacional.', 'corregida'],
  [1614, [67], ['III-10'], ['Java', 'clases anidadas', 'clases internas', 'inner class', 'static', 'JLS'], [
    {url: 'https://docs.oracle.com/javase/specs/jls/se26/html/jls-8.html#jls-8.1.3', referencia: 'Java Language Specification, Java SE 26, §8.1.3: una inner class es una clase anidada que no está declarada explícita o implícitamente static; puede ser miembro, local o anónima.'},
    {url: 'https://docs.oracle.com/javase/specs/jls/se26/html/jls-8.html#jls-8.5', referencia: 'Java Language Specification, Java SE 26, §8.5: distingue las clases miembro static de las clases miembro no estáticas; junto con §8.1.3 permite delimitar el término inner class.'}
  ], {texto: 'Según la Java Language Specification, ¿qué se denomina inner class?', opciones: [
    'Una clase abstracta, con independencia de dónde se declare.',
    'Una clase anidada que no está declarada explícita ni implícitamente `static`.',
    'Una clase que no puede tener subclases.',
    'Cualquier clase declarada dentro de otra, incluidas las clases anidadas `static`.'
  ], respuesta_correcta: 1}, 'La opción correcta es una clase anidada no estática. La respuesta original (“una clase declarada dentro de otra”) describía cualquier clase anidada, incluyendo las clases miembro `static`, que la especificación distingue de una inner class. La JLS incluye como inner classes las clases miembro no estáticas, locales no implícitamente estáticas y anónimas.', 'corregida'],
  [1615, [80, 81], ['I-6'], ['OCSP', 'PKI', 'certificado X.509', 'revocación', 'estado de certificado', 'RFC 6960'], [
    {url: 'https://www.rfc-editor.org/rfc/rfc6960.html', referencia: 'IETF RFC 6960, Online Certificate Status Protocol (OCSP), §§1–2: protocolo en línea para que las aplicaciones consulten el estado (incluida la revocación) de certificados identificados ante un responder OCSP; las respuestas tienen estado y periodo de validez.'},
    {url: 'https://csrc.nist.gov/glossary/term/online_certificate_status_protocol', referencia: 'NIST CSRC Glossary: OCSP es un protocolo en línea empleado para determinar el estado de un certificado de clave pública.'}
  ], {texto: '¿Para qué se utiliza principalmente OCSP dentro de una infraestructura de clave pública?', opciones: [
    'Para consultar en línea a un responder el estado de un certificado, incluido si consta como revocado.',
    'Para verificar la integridad de una trama de nivel de enlace.',
    'Para sustituir la firma digital y cifrar los datos de la comunicación.',
    'Para validar la dirección IP de origen de un equipo.'
  ], respuesta_correcta: 0}, 'OCSP permite a una aplicación consultar a un responder el estado de un certificado identificado, por ejemplo “good”, “revoked” o “unknown”. No equivale a validar por sí solo toda la cadena, la firma o la identidad del titular, ni garantiza una respuesta literalmente en tiempo real: RFC 6960 define marcas temporales y un intervalo de validez de la respuesta. Se precisa esa limitación respecto del “tiempo real” del original.', 'corregida']
];

const edits = Object.fromEntries(records.filter(row => row[5]).map(([id,,,,,edit]) => [id, edit]));
apply({numero: '259', fecha: '2026-10-27', records, edits});
