const apply=require('./aplicar-lote.cjs');
const src=(url,referencia)=>({url,referencia});
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy={os:'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk',tech:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',security:'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',hardware:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk'};
apply({numero:'1279',fecha:'2026-11-15',records:[
 [6716,[60],['II-2'],['reentrancia','módulo reentrante','código compartido','concurrencia','datos privados por tarea'],[
  src('https://www.ibm.com/docs/en/zvm/7.3.0?topic=program-preparing-reentrant','IBM z/VM Programming: reentrancy permite a más de un usuario compartir una copia del módulo cargable o reutilizarlo; el código no debe interferir entre invocaciones y el estado modificable se separa por usuario.'),
  src('https://bs2manuals.ts.fujitsu.com/download/manual/20581','Fujitsu BS2000, sección “Shareable programs”: una única copia de código compartido puede ejecutarse simultáneamente por varias tareas y debe estar programada como reentrante.'),
  src(a1,'Convocatoria oficial GSI A1 2025, tema 60: sistemas operativos UNIX/Linux y administración.'),
  src(a2,'Convocatoria oficial GSI A2 2025, tema II.2: fundamentos y características funcionales/de administración de sistemas operativos.'),
  src(academy.os,'ITIC Academy, bloque 27 «Sistemas Operativos», versión 2026: cotejo curricular de conceptos y arquitectura de sistema operativo; la definición de código reentrante y compartible se confirma con IBM y Fujitsu.')
 ],{texto:'En la terminología clásica de sistemas operativos, ¿qué caracteriza a un módulo reentrante?',opciones:[
  'Cada usuario necesita una copia independiente del código y de los datos en memoria.',
  'Una única copia de su código puede ejecutarse simultáneamente por varias tareas, manteniendo aislado el estado modificable de cada invocación.',
  'Solo puede ejecutarse una vez durante la vida del sistema operativo.',
  'Es cualquier módulo compartido, aunque sus invocaciones concurrentes puedan sobrescribir datos comunes.'
 ],respuesta_correcta:1},'Se corrige la clave a B. «Compartido» solo expresa que una copia es accesible por varios usuarios/tareas; para ejecutarla concurrentemente sin interferencias el módulo debe ser reentrante. Las invocaciones deben mantener separados sus datos mutables o protegerlos según el diseño. IBM y Fujitsu describen explícitamente la posibilidad de compartir una sola copia de código y las condiciones de reentrancia.', 'corregida'],

 [6717,[77],['II-9'],['XML','XQuery','W3C Recommendation','consulta de datos','XPath'],[
  src('https://www.w3.org/TR/xquery-31/','W3C Recommendation, XQuery 3.1: especifica XQuery como lenguaje de consulta aplicable a diversas fuentes XML; el modelo permite consultar nodos/estructuras y extraer los datos que satisfacen la expresión.'),
  src('https://www.w3.org/TR/xquery-requirements/','W3C XML Query Requirements: establece la consulta de documentos XML/colecciones para seleccionar documentos o subárboles según contenido/estructura y extraer información.'),
  src(a1,'Convocatoria oficial GSI A1 2025, tema 77: lenguajes y herramientas para redes globales, incluidos XML y derivados.'),
  src(a2,'Convocatoria oficial GSI A2 2025, tema II.9: lenguajes de marca, XML y sus derivaciones.'),
  src(academy.tech,'ITIC Academy, bloque 30 «Tecnologías de sistemas de la información», versión 2026.1, §9.4: recoge XPath, XSLT y XQuery dentro de XML y sus derivaciones; el estándar se comprueba en la Recomendación W3C.')
 ],{texto:'¿Qué lenguaje estandarizado por el W3C está diseñado para consultar y extraer datos de documentos o fuentes XML?',opciones:[
  'XSQL, un lenguaje de administración de bases de datos relacionales.',
  'XQuery (XML Query), lenguaje de consulta para datos estructurados como XML.',
  'XML QueryDataSet, un formato de compresión de documentos.',
  'XML MyQueryLang, el lenguaje de hojas de estilo del W3C.'
 ],respuesta_correcta:1},'Se corrige B y se elimina la denominación inventada «Xquery Language». XQuery es el lenguaje de consulta del W3C para consultar fuentes XML; XPath es una tecnología relacionada para navegar/seleccionar nodos, pero no sustituye la respuesta al enunciado.', 'corregida'],

 [6718,[80],['I-6'],['X.509','X.509v3','DER','ASN.1','certificado digital','codificación binaria'],[
  src('https://www.rfc-editor.org/rfc/rfc5280.html','IETF RFC 5280, §4.1: define la estructura ASN.1 del certificado X.509 y dispone su codificación conforme a Distinguished Encoding Rules (DER).'),
  src('https://www.rfc-editor.org/rfc/rfc7468.html','IETF RFC 7468: distingue la forma textual encapsulada PEM (Base64 con delimitadores) de los objetos ASN.1 subyacentes codificados en DER.'),
  src(a1,'Convocatoria oficial GSI A1 2025, tema 80: certificados digitales, claves públicas/privadas y formatos de firma electrónica.'),
  src(a2,'Convocatoria oficial GSI A2 2025, tema I.6: identidad y firma electrónica, eIDAS y DNI electrónico.'),
  src(academy.security,'ITIC Academy, bloque 36 «Seguridad, Criptografía, Identificación y Firma», edición 2026, sección 9: certificados digitales X.509 y PKI; la codificación definida se verifica en RFC 5280.')
 ],{texto:'En el formato ASN.1 definido por RFC 5280, ¿qué reglas de codificación se utilizan para representar el certificado X.509 (incluido el perfil v3)?',opciones:[
  'DER (Distinguished Encoding Rules).',
  'CERT, una codificación binaria normalizada para certificados.',
  'PME, un método de codificación definido por X.509.',
  'Ninguna: el estándar solo define certificados en texto ASCII.'
 ],respuesta_correcta:0},'Se mantiene A, pero se precisa el contexto: DER es la codificación binaria ASN.1 del objeto certificado que exige el perfil de RFC 5280. Un archivo PEM es una representación textual Base64 con delimitadores que encapsula el objeto DER; no es una codificación binaria alternativa del certificado.', 'corregida'],

 [6719,[52],['II-1'],['MESI','coherencia de caché','Modified','Exclusive','Shared','Invalid','multiprocesador'],[
  src('https://www.intel.com/content/www/us/en/developer/articles/technical/fast-core-to-core-communications.html','Intel Developer, “Faster Core-to-Core Communications”: describe MESI como Modified, Exclusive, Shared e Invalid, y explica los estados como protocolo de coherencia de líneas de caché entre núcleos.'),
  src('https://s3-eu-west-1.amazonaws.com/downloads-mips/documents/MD00605-2B-CMPCOHERE-AFP-01.01.pdf','MIPS Coherence Protocol Specification, sección 3.1.1: define los cuatro estados MESI de una línea de caché y las reglas de transición para conservar coherencia entre cachés.'),
  src(a1,'Convocatoria oficial GSI A1 2025, tema 52: sistemas de altas prestaciones, grid computing y mainframe.'),
  src(a2,'Convocatoria oficial GSI A2 2025, tema II.1: arquitecturas escalables y de altas prestaciones, desde dispositivos hasta superordenadores.'),
  src(academy.hardware,'ITIC Academy, bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», edición 2026.1: cubre arquitectura de sistemas de altas prestaciones y jerarquía de caché en su contexto de procesadores; la definición específica de MESI se contrasta con Intel y la especificación MIPS.')
 ],{texto:'MESI es un protocolo clásico de coherencia de caché. ¿Qué nombres corresponden a sus cuatro estados?',opciones:[
  'Modified, Exclusive, Shared, Invalid.',
  'Memory Extended Shared Interface.',
  'Memory Exclusive Soft Index.',
  'Multi Environment Shared Interface.'
 ],respuesta_correcta:0},'Se mantiene A. MESI nombra cuatro estados posibles de una línea en el protocolo clásico de coherencia de caché: Modified, Exclusive, Shared e Invalid. No se afirma que toda arquitectura moderna utilice exclusivamente MESI; existen variantes como MESIF y MOESI, entre otras.', 'corregida'],

 [6720,[56],['IV-5'],['compresión','compresión con pérdidas','compresión sin pérdidas','ficheros ejecutables','texto','facsímil'],[
  src('https://www.archives.gov/preservation/technical/imaging-storage-report.html','U.S. National Archives, Digital-Imaging Report: distingue compresión con y sin pérdidas; para documentos cuyo requisito es fidelidad exacta recomienda técnicas sin pérdida. La reconstrucción sin pérdida reproduce el original idéntico.'),
  src('https://www.rfc-editor.org/rfc/rfc1951.html','IETF RFC 1951, DEFLATE: especifica un formato de compresión de datos general sin pérdida, apto para reconstrucción exacta de flujos de octetos.'),
  src(a1,'Convocatoria oficial GSI A1 2025, tema 56: dispositivos para tratamiento de información multimedia y almacenamiento.'),
  src(a2,'Convocatoria oficial GSI A2 2025, tema IV.5: almacenamiento de datos, componentes, protocolos y administración.'),
  src(academy.hardware,'ITIC Academy, bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», edición 2026.1, §§7.4 y multimedia: incluye compresión y tratamiento de información; la diferencia entre pérdidas y reconstrucción exacta se fundamenta en fuentes técnicas de preservación y RFC.')
 ],{texto:'Si es necesario recuperar exactamente los datos originales, la compresión con pérdidas no es adecuada para:',opciones:[
  'Un fichero ejecutable que debe conservar cada bit para seguir funcionando.',
  'Un fichero de texto que debe reproducirse exactamente, sin alterar caracteres ni bytes.',
  'Una imagen de facsímil cuya finalidad admita una aproximación visual con pérdida controlada.',
  'Las respuestas A y B.'
 ],respuesta_correcta:3},'Se mantiene D y se incorpora la condición que faltaba en el original: que los datos deban recuperarse exactamente. Los ficheros ejecutables y el texto requieren preservar sus bits/contenido; se usa compresión sin pérdida. Un facsímil puede comprimirse con pérdidas si el uso acepta degradación visual, por lo que no se presenta como una prohibición absoluta.', 'corregida']
]});
