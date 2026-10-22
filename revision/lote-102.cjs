const records = [
  [826,[75],['III-15'],['OLAP','procesamiento analítico','data mining','minería de datos','cubos multidimensionales'],[
    {url:'https://learn.microsoft.com/en-us/analysis-services/data-mining/data-mining-concepts?view=asallproducts-allversions',referencia:'Microsoft Learn, Data Mining Concepts: distingue análisis OLAP y minería de datos; los datos empleados en minería no necesitan residir en un cubo OLAP ni siquiera en una base de datos relacional.'},
    {url:'https://learn.microsoft.com/en-us/azure/architecture/data-guide/relational-data/online-analytical-processing',referencia:'Microsoft Learn, Online Analytical Processing: describe el uso tradicional de cubos multidimensionales para organizar y consultar datos, sin afirmar que todo OLAP requiera un hipercubo.'}
  ],null,'Se reformula para separar OLAP de minería de datos y corregir la afirmación absoluta sobre los cubos. Las consultas OLAP pueden generar informes para apoyar decisiones sin ser consultas de data mining; OLAP no se limita en todos los casos a cubos multidimensionales. Se conserva A.','corregida'],
  [827,[77],['III-12'],['HTTP/2','RFC 9113','RFC 7540','IETF','HTTP'],[
    {url:'https://www.rfc-editor.org/info/rfc9113',referencia:'RFC Editor, RFC 9113: especifica HTTP/2 y declara que sustituye (obsoletes) las RFC 7540 y 8740.'},
    {url:'https://www.rfc-editor.org/rfc/rfc7540.html',referencia:'RFC Editor, RFC 7540: especificación original de HTTP/2, actualmente reemplazada por RFC 9113.'}
  ],null,'La respuesta A (RFC 9113) es la especificación vigente de HTTP/2. RFC 7540 fue la especificación inicial y quedó obsoleta al publicarse RFC 9113 en 2022.','vigente'],
  [828,[78],[],['factura electrónica','Ley 56/2007','sector público estatal','Ley 25/2013','contratación pública'],[
    {url:'https://www.boe.es/buscar/act.php?id=BOE-A-2007-22440',referencia:'BOE, Ley 56/2007, artículo 1 bis: establece que la facturación electrónica en la contratación con el sector público estatal será obligatoria en los términos previstos por la normativa de contratación pública.'},
    {url:'https://www.boe.es/buscar/act.php?id=BOE-A-2013-13722',referencia:'BOE, Ley 25/2013, artículos 3 y 4: regula la presentación de facturas ante Administraciones Públicas y los sujetos obligados a usar factura electrónica y presentarla por el punto general de entrada.'}
  ],null,'Se concreta el enunciado en la disposición que recoge expresamente la obligatoriedad dentro de la contratación con el sector público estatal: artículo 1 bis de la Ley 56/2007. La Ley 25/2013 desarrolla el régimen general actual de facturas electrónicas y su presentación ante las Administraciones Públicas; se mantienen diferenciados ambos alcances.','vigente'],
  [829,[79],[],['función hash','Whirlpool','MD5','SHA-1','SHA-384','longitud del digest'],[
    {url:'https://www.etsi.org/deliver/etsi_ts/102100_102199/10217601/02.01.01_60/ts_10217601v020101p.pdf',referencia:'ETSI TS 102 176-1, apartado 5.2.5: documenta que Whirlpool, definido por ISO/IEC 10118-3, produce un resumen de 512 bits.'},
    {url:'https://csrc.nist.gov/pubs/fips/180-4/upd1/final',referencia:'NIST FIPS 180-4, Secure Hash Standard: define SHA-1 con resumen de 160 bits y SHA-384 con resumen de 384 bits.'},
    {url:'https://www.rfc-editor.org/rfc/rfc1321',referencia:'RFC 1321, The MD5 Message-Digest Algorithm: define un resumen MD5 de 128 bits.'}
  ],null,'La opción D, Whirlpool, produce un resumen de 512 bits; SHA-384 produce 384, SHA-1 160 y MD5 128. La longitud del resultado por sí sola no determina que un algoritmo sea actualmente recomendable ni su resistencia ante ataques.','vigente'],
  [830,[79],['III-12'],['función hash','integridad','colisiones','autenticación','confidencialidad','resumen criptográfico'],[
    {url:'https://csrc.nist.gov/glossary/term/cryptographic_hash_function',referencia:'NIST CSRC Glossary, Cryptographic Hash Function: una función hash criptográfica tiene longitud de salida fija y se espera que satisfaga resistencia a colisiones, preimagen y segunda preimagen; son propiedades de seguridad, no una prueba matemática de identidad.'},
    {url:'https://csrc.nist.gov/pubs/sp/800/107/r1/final',referencia:'NIST SP 800-107 Rev. 1: describe el uso de funciones hash aprobadas y sus propiedades de resistencia; el hash por sí solo no proporciona confidencialidad ni autentica el resumen recibido.'}
  ],null,'Se matiza «integridad garantizada»: la coincidencia de resúmenes sirve como comprobación práctica, pero no demuestra matemáticamente que dos mensajes sean idénticos porque puede haber colisiones. Además, si el resumen original no está autenticado, un atacante podría sustituir tanto el mensaje como el hash. Un hash no proporciona confidencialidad.','corregida']
];

const edits = {
  826:{texto:'¿Cuál de las siguientes afirmaciones sobre OLAP y minería de datos es correcta?',opciones:[
    'Las consultas OLAP pueden generar informes para apoyar decisiones sin ser consultas de minería de datos.',
    'Toda consulta OLAP es necesariamente una consulta de minería de datos.',
    'OLAP solo puede utilizarse si los datos están implementados en un hipercubo multidimensional.',
    'Todas las respuestas anteriores son ciertas.'
  ],respuesta_correcta:0},
  828:{texto:'¿Qué ley recoge expresamente que la facturación electrónica en la contratación con el sector público estatal será obligatoria en los términos previstos por la normativa de contratación pública?',opciones:[
    'Ley 34/2002, de servicios de la sociedad de la información y comercio electrónico.',
    'Ley 56/2007, de medidas de impulso de la sociedad de la información.',
    'Ley 9/2014, general de telecomunicaciones.',
    'Ley 59/2003, de firma electrónica.'
  ],respuesta_correcta:1},
  830:{texto:'Se comparan los resúmenes criptográficos `y = h(m)` y `y’ = h(m’)` de un mensaje enviado y del recibido. ¿Qué afirmación es correcta?',opciones:[
    'Si `y = y’`, la coincidencia aporta una comprobación práctica de integridad, pero no demuestra matemáticamente que `m = m’`; además, el resumen debe estar autenticado para evitar su sustitución.',
    'Si `y = y’`, se demuestra que la clave privada utilizada para firmar el mensaje ha sido alterada.',
    'Si `m = m’`, se garantiza la confidencialidad de los resúmenes `y` e `y’`.',
    'Si `y = y’`, se garantiza la confidencialidad del mensaje `m` durante su transmisión.'
  ],respuesta_correcta:0}
};

require('./aplicar-lote.cjs')({numero:'102',fecha:'2026-10-22',records,edits});
