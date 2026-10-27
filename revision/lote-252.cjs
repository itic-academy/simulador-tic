const apply = require('./aplicar-lote.cjs');

const records = [
  [1576, [62], ['II-2'], ['iOS', 'APFS', 'Apple File System', 'sistemas operativos móviles'], [
    {url: 'https://support.apple.com/guide/security/role-of-apple-file-system-seca6147599e/web', referencia: 'Apple Platform Security, Role of Apple File System: APFS se utiliza en las plataformas de Apple, incluidos iPhone e iPad; en iOS/iPadOS el almacenamiento se organiza en volúmenes APFS de sistema y datos.'}
  ], null, 'La opción 2 es cierta: los dispositivos iOS actuales utilizan Apple File System (APFS). Se mantiene la clave, pero se evita afirmar una arquitectura exclusivamente microkernel o totalmente monolítica, simplificaciones que no describen el sistema híbrido de XNU; “HT+” no es el sistema de archivos de iOS.', 'vigente'],
  [1577, [65], ['III-12'], ['OpenAPI', 'OpenAPI 3.0', 'documentación de API', 'versionado'], [
    {url: 'https://spec.openapis.org/oas/v3.0.4.html', referencia: 'OpenAPI Specification 3.0.4, §3.2 y §4.7.1.1: el campo obligatorio `openapi` designa la versión de la especificación OpenAPI que usa el documento y no se refiere al campo `info.version` de la API.'}
  ], null, 'La respuesta original es correcta: `openapi` identifica la versión de la especificación OpenAPI usada por el documento; la versión del servicio/API se expresa en `info.version`. La especificación 3.0.4, vigente como revisión de la rama 3.0, mantiene explícita esta distinción. Se normaliza en la explicación la capitalización OpenAPI.', 'vigente'],
  [1578, [79], [], ['criptografía', 'aleatoriedad', 'test de rachas', 'NIST SP 800-22', 'secuencia binaria'], [
    {url: 'https://csrc.nist.gov/Projects/random-bit-generation/Documentation-and-Software/Guide-to-the-Statistical-Tests', referencia: 'NIST, Guide to the Statistical Tests, Runs Test: cuenta las rachas de bits idénticos consecutivos y compara su número con el esperado; evalúa si la secuencia oscila demasiado rápida o lentamente bajo el supuesto de aleatoriedad.'},
    {url: 'https://csrc.nist.gov/pubs/sp/800/22/r1/upd1/final', referencia: 'NIST SP 800-22 Rev. 1a: los ensayos estadísticos son una comprobación preliminar y no certifican por sí solos que un generador sea apto para aplicaciones criptográficas; NIST ha anunciado la revisión de la publicación.'}
  ], {texto: 'En la prueba estadística de rachas aplicada a una secuencia binaria, ¿qué se analiza principalmente?', opciones: [
    'Se cuentan las secuencias máximas consecutivas de bits iguales y se compara el número de rachas con el esperado bajo una hipótesis de aleatoriedad.',
    'Se demuestra de forma concluyente que cada símbolo es independiente de todos los demás.',
    'Se recupera la clave privada a partir de los bits observados.',
    'Se mide únicamente la proporción total de ceros y unos, sin considerar su orden.'
  ], respuesta_correcta: 0}, 'La opción 0 describe el test: una racha es una sucesión ininterrumpida de símbolos iguales, y la prueba compara el número observado con el esperado para una secuencia aleatoria, detectando alternancia excesiva o insuficiente. La formulación original sobre “independencia de los elementos” era demasiado amplia: el test no prueba independencia general ni certifica por sí solo la seguridad de un generador criptográfico.', 'corregida'],
  [1579, [74], [], ['INSPIRE', 'LISIGE', 'Ley 14/2010', 'Directiva 2007/2/CE', 'interoperabilidad geográfica'], [
    {url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2010-10707', referencia: 'BOE, Ley 14/2010, disposición final primera: incorpora al ordenamiento español la Directiva 2007/2/CE (INSPIRE); el artículo 4 identifica al Consejo Superior Geográfico como punto de contacto con la Comisión Europea.'},
    {url: 'https://eur-lex.europa.eu/eli/dir/2007/2/oj?locale=es', referencia: 'EUR-Lex, Directiva 2007/2/CE consolidada a 26-11-2024: establece INSPIRE sobre infraestructuras de los Estados miembros que deben ser compatibles e interoperables en el contexto europeo y transfronterizo.'}
  ], {texto: 'En España, ¿qué norma incorpora al ordenamiento jurídico la Directiva INSPIRE 2007/2/CE mediante la infraestructura de información geográfica nacional?', opciones: [
    'La Ley 14/2010, de 5 de julio (LISIGE), sobre infraestructuras y servicios de información geográfica en España, posteriormente modificada por la Ley 2/2018.',
    'La Ley 14/2010, que exime a España de asegurar la interoperabilidad transfronteriza de sus datos espaciales.',
    'La Ley 14/2010, que designa a la Dirección General del Catastro como punto de contacto con la Comisión Europea.',
    'Ninguna: las directivas se aplican directamente sin transposición en los Estados miembros.'
  ], respuesta_correcta: 0}, 'La opción 0 es correcta: la disposición final primera de la Ley 14/2010 incorpora INSPIRE al ordenamiento español; la Ley 2/2018 modificó posteriormente la LISIGE. La interoperabilidad entre infraestructuras es parte del objetivo de INSPIRE y el punto de contacto con la Comisión es el Consejo Superior Geográfico, no la Dirección General del Catastro. Se actualiza el enunciado para evitar que la clave dependa de una opción compuesta por varias afirmaciones.', 'corregida'],
  [1580, [67], ['III-10', 'III-12'], ['Apache Tomcat', 'Java EE', 'cargador de clases', 'Context', 'Loader', 'fin de soporte'], [
    {url: 'https://tomcat.apache.org/tomcat-8.5-doc/config/loader.html', referencia: 'Apache Tomcat 8.5 Configuration Reference, Loader Component: el elemento `<Loader>` configura el cargador de clases de una aplicación web y puede anidarse dentro de `<Context>`.'},
    {url: 'https://tomcat.apache.org/tomcat-8.5-doc/config/context.html', referencia: 'Apache Tomcat 8.5 Configuration Reference, Context Container: identifica `<Loader>` como componente anidable del elemento `<Context>` para configurar el class loader de la aplicación.'},
    {url: 'https://tomcat.apache.org/whichversion', referencia: 'Apache Tomcat, Which Version Do I Want?: Tomcat 8.0 y 8.5 han llegado al fin de soporte y están archivados; la configuración se conserva como conocimiento histórico, no como recomendación de despliegue actual.'}
  ], {texto: 'En la configuración histórica de Apache Tomcat 8, ¿qué elemento se podía anidar dentro de `<Context>` para configurar el cargador de clases de una aplicación web?', opciones: [
    'El elemento `<Loader>`.',
    'El elemento `<Loader>` dentro de `web.xml`.',
    'El elemento `<Valve>` dentro de `<Context>`.',
    'El elemento `<Valve>` dentro de `web.xml`.'
  ], respuesta_correcta: 0}, 'La respuesta es `<Loader>` anidado en `<Context>`: así lo documenta la referencia de configuración de Tomcat 8. La pregunta queda como histórica porque Tomcat 8 (ramas 8.0 y 8.5) ya no recibe soporte; la respuesta describe la configuración de esa versión y no aconseja emplearla en despliegues actuales.', 'historica']
];

const edits = Object.fromEntries(records.filter(row => row[5]).map(([id,,,,,edit]) => [id, edit]));
apply({numero: '252', fecha: '2026-10-27', records, edits});
