const aplicar = require('./aplicar-lote.cjs');

const ref = (url, referencia) => ({ url, referencia });
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/buscar/doc.php?id=BOE-A-2025-26262';
const academy30 = 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk';
const academy33 = 'https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view?usp=drivesdk';
const academy36 = 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk';

const records = [
  [5106, ['64'], ['II-5'], ['Oracle Database', 'SQL', 'DML', 'transacciones', 'MERGE', 'SELECT'], [
    ref('https://docs.oracle.com/en/database/oracle/oracle-database/26/sqlrf/Types-of-SQL-Statements.html', 'Oracle Database 26 SQL Language Reference, Types of SQL Statements: incluye SELECT y MERGE entre DML y declara que las sentencias DML no confirman implícitamente la transacción actual.'),
    ref('https://docs.oracle.com/html/E25789_01/transact.htm', 'Oracle Database Concepts, Transactions: una transacción comienza al ejecutarse la primera sentencia SQL; DDL, a diferencia de DML, provoca COMMIT implícito antes y después.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 64: modelo relacional, lenguaje SQL e interoperabilidad entre gestores.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema II.5: SGBD relacionales, SQL y estándares de interoperabilidad.'),
    ref('https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk', 'Se buscaron en Drive materiales Academy centrados en SQL/modelo relacional; la coincidencia devuelta fue un tema de hardware, por lo que no se atribuye un bloque de academia a este reactivo.')
  ], null, 'Las afirmaciones sobre inicio/confirmación de transacciones dependen del SGBD y también del modo autocommit del cliente. Se acota expresamente a Oracle Database 26: Oracle clasifica SELECT y MERGE como DML; las DML no confirman implícitamente la transacción, mientras que una DDL sí provoca confirmación implícita. Por tanto, D es la incorrecta.', 'corregida'],
  [5107, ['74'], [], ['SIG', 'OGC', 'WFS', 'WMS', 'WMTS', 'WCS', 'servicios geográficos'], [
    ref('https://www.ogc.org/standards/wfs/', 'Open Geospatial Consortium, WFS Standard: proporciona acceso geográfico directo y detallado a entidades (*features*) y sus propiedades; incluye consulta y operaciones de gestión.'),
    ref('https://www.ogc.org/standards/wms/', 'Open Geospatial Consortium, WMS: interfaz HTTP para solicitar imágenes de mapas georreferenciadas.'),
    ref('https://www.ogc.org/standards/wmts/', 'Open Geospatial Consortium, WMTS: sirve mapas digitales como mosaicos de imágenes predefinidos.'),
    ref('https://www.ogc.org/standards/wcs/', 'Open Geospatial Consortium, WCS: acceso a datos de coberturas geoespaciales, no al servicio vectorial de entidades del enunciado.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 74: sistemas de información geográfica, conceptos y funcionalidad.'),
    ref(academy33, 'ITIC Academy, documento 33, temas 73–74 E-learning y GIS, versión 2026: cotejo directo del tema SIG/servicios geográficos; las definiciones se toman de OGC.')
  ], null, 'El enunciado original preguntaba cuál no era un servicio de visualización y ofrecía tanto WFS como TJS, ambos distintos de los servicios que devuelven mapas/imágenes; había más de una respuesta. Se cambia a una propiedad positiva y se sustituye TJS por WCS: WFS permite consultar entidades y atributos, WMS entrega imágenes de mapa y WMTS mosaicos predefinidos. Respuesta A.', 'corregida'],
  [5108, ['65'], ['III-12'], ['Java', 'MVC', 'Model 2', 'JavaBeans', 'JSP', 'Servlet'], [
    ref('https://docs.oracle.com/javaee/5/tutorial/doc/bnahb.html', 'Oracle Java EE 5 Tutorial, Duke’s Bookstore Model 2: el servlet Dispatcher hace de controlador; los JavaBeans contienen estado/modelo y las páginas JSP presentan las vistas.'),
    ref('https://www.oracle.com/technical-resources/articles/java/servlets-jsp.html', 'Oracle, Servlets and JSP Pages Best Practices: en el patrón Model 2, el servlet actúa como controlador y prepara los beans que utiliza la JSP.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 65: arquitectura de desarrollo web y tecnologías de servidor.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema III.12: aplicaciones web y componentes de tecnologías de programación.'),
    ref(academy30, 'ITIC Academy, bloque 30, tecnologías de sistemas de información; cotejo curricular de aplicaciones Java/web, sin tratarse como especificación del patrón Model 2.')
  ], null, 'Se corrigen errores de transcripción (`JSP`, no «iSP»; `JavaBean`, no «lava Bean») y se precisa que es la implementación web clásica Model 2: JavaBean/modelo, JSP/vista y Servlet/controlador. Es una forma representativa de MVC, no la única arquitectura Java posible. Respuesta B.', 'corregida'],
  [5109, ['64'], ['II-5'], ['Codd', 'modelo relacional', 'independencia física', 'independencia de distribución', 'independencia de integridad'], [
    ref('https://reldb.org/c/index.php/twelve-rules/', 'Rel, reproducción de los artículos de E. F. Codd de Computerworld (1985), «Is Your DBMS Really Relational?» y «Does Your DBMS Run By the Rules?»: nombra las reglas 8, 10 y 11 como independencia física, de integridad y de distribución; no presenta una regla denominada «independencia de actualización».'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 64: modelo relacional y lenguaje SQL.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema II.5: bases de datos relacionales y modelo ANSI/SPARC.'),
    ref('https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', 'Se buscó en Drive material Academy sobre reglas de Codd/modelo relacional; no se encontró una coincidencia directa, así que no se asigna bloque curricular específico.')
  ], null, 'Las denominaciones históricas se precisan para evitar la paráfrasis ambigua de la opción. Codd incluye independencia física (regla 8), de integridad (regla 10) y de distribución (regla 11); el tratamiento de inserción, actualización y borrado aparece en la regla 7 como operación de alto nivel, no como «independencia de actualización». La opción C no es un nombre de regla.', 'corregida'],
  [5110, ['79'], ['IV-12'], ['TDEA', 'TDES', '2TDEA', '2-key Triple DES', 'EDE', 'obsoleto', 'NIST'], [
    ref('https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-57pt1r5.pdf', 'NIST SP 800-57 Part 1 Rev. 5, §5.6.1 y tabla 2: 2TDEA usa dos claves distintas; el tamaño nominal de clave no equivale a la fuerza estimada y su máximo se indica como ≤80 bits.'),
    ref('https://csrc.nist.gov/News/2023/nist-to-withdraw-sp-800-67-rev-2', 'NIST, retirada de SP 800-67 Rev. 2: TDEA dejó de ser un cifrador aprobado el 1-1-2024; la protección nueva mediante TDEA quedó disallowed después de 2023, con excepciones de uso legado para descifrado/verificación.'),
    ref('https://csrc.nist.gov/pubs/sp/800/131/a/r2/final', 'NIST SP 800-131A Rev. 2: transición y estado de aprobación de algoritmos y longitudes de clave; la página identifica SP 800-67 como retirado.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 79: cifrado y algoritmos simétricos y asimétricos.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema IV.12: técnicas criptográficas y protocolos seguros.'),
    ref(academy36, 'ITIC Academy, bloque 36, seguridad, criptografía, identificación y firma, versión 2026: cotejo curricular general; las advertencias de vigencia se sustentan en NIST.')
  ], null, 'La variante histórica 2TDEA aplica DES tres veces en esquema EDE (K1, K2, K1) usando dos claves independientes. Tiene 112 bits de clave nominales, pero NIST le atribuye como máximo 80 bits de fuerza bajo condiciones determinadas; esas cifras no deben confundirse. NIST retiró TDEA como cifrador aprobado y ya no permite usarlo para protección nueva desde 2024; solo quedan usos legados concretos. Se corrige B con esas salvedades.', 'corregida'],
];

const edits = {
  5106: {
    texto: 'En Oracle Database 26, ¿cuál de estas afirmaciones sobre las sentencias DML y las transacciones es incorrecta?',
    opciones: [
      '`SELECT` y `MERGE` se incluyen entre las sentencias DML de Oracle.',
      'Las sentencias DML no confirman implícitamente la transacción actual.',
      'Si no hay una transacción activa, la ejecución de una sentencia SQL puede iniciar una nueva transacción.',
      'Toda sentencia DML confirma implícitamente la transacción actual.'
    ],
    respuesta_correcta: 3,
    comentarios: 'En Oracle, DML no implica COMMIT; DDL sí provoca COMMIT implícito. El autocommit configurado en una herramienta cliente es un comportamiento separado.'
  },
  5107: {
    texto: '¿Qué estándar OGC proporciona acceso directo a entidades geográficas vectoriales y a sus propiedades, en lugar de devolver imágenes de mapas o mosaicos?',
    opciones: [
      'WFS (Web Feature Service).',
      'WMS (Web Map Service).',
      'WMTS (Web Map Tile Service).',
      'WCS (Web Coverage Service).'
    ],
    respuesta_correcta: 0,
    comentarios: 'WFS consulta entidades y propiedades; WMS devuelve imágenes de mapa, WMTS mosaicos de imágenes y WCS datos de coberturas.'
  },
  5108: {
    texto: 'En una implementación web Java clásica del patrón Model 2, ¿qué asignación de componentes es representativa?',
    opciones: [
      'Modelo: JSP; Vista: JavaBean; Controlador: Servlet.',
      'Modelo: JavaBean; Vista: JSP; Controlador: Servlet.',
      'Modelo: Servlet; Vista: JavaBean; Controlador: JSP.',
      'Modelo: Servlet; Vista: JSP; Controlador: SVG.'
    ],
    respuesta_correcta: 1,
    comentarios: 'En el ejemplo clásico Model 2 de Oracle, los beans representan el modelo/estado, JSP presenta la vista y el servlet Dispatcher actúa como controlador. Es un patrón representativo, no la única arquitectura Java.'
  },
  5109: {
    texto: 'En las reglas de Codd para evaluar un sistema de gestión de bases de datos relacionales, ¿cuál de estas denominaciones no corresponde a una regla?',
    opciones: [
      'Independencia física de los datos.',
      'Independencia de distribución.',
      'Independencia de actualización.',
      'Independencia de integridad.'
    ],
    respuesta_correcta: 2,
    comentarios: 'Codd denomina expresamente las reglas 8, 10 y 11 independencia física, de integridad y de distribución. La regla 7 trata las operaciones de inserción, actualización y borrado de alto nivel; no existe una regla llamada «independencia de actualización».'
  },
  5110: {
    texto: '¿Cuál describe correctamente la variante histórica de dos claves de Triple DES (2TDEA/2TDEA EDE)?',
    opciones: [
      'Aplica DES solo dos veces con una única clave de 56 bits.',
      'Aplica DES tres veces en esquema EDE con dos claves independientes (K1, K2, K1): 112 bits nominales de clave, pero como máximo 80 bits de fuerza según la evaluación histórica de NIST; ya no se aprueba para cifrado nuevo.',
      'Aplica DES tres veces con tres claves de 56 bits y por ello se denomina variante de dos claves.',
      'No existió una variante de TDEA con dos claves.'
    ],
    respuesta_correcta: 1,
    comentarios: '2TDEA es una variante histórica ya retirada para protección nueva. Los 112 bits son el tamaño nominal combinado de K1 y K2, no la fuerza efectiva: NIST evaluaba esta variante en no más de 80 bits bajo las hipótesis indicadas.'
  }
};

aplicar({ numero: '957', fecha: '2026-11-12', records, edits });
