const aplicar = require('./aplicar-lote.cjs');

const records = [
  [
    2161, [65, 67], ['III-10'], ['Apache Tomcat 8.0', 'cluster', 'replicación de sesión', 'web.xml', 'distributable', 'histórico'],
    [
      { url: 'https://tomcat.apache.org/tomcat-8.0-doc/cluster-howto.html', referencia: 'Apache Tomcat 8.0 Clustering/Session Replication HOW-TO: indica que debe declararse <distributable/> en web.xml para que el contexto participe en replicación de sesiones.' },
      { url: 'https://tomcat.apache.org/tomcat-80-eol.html', referencia: 'Apache Tomcat, End of life for 8.0.x: la rama 8.0 dejó de recibir soporte el 30 de junio de 2018; la pregunta solo describe esa versión archivada.' }
    ],
    'Apache Tomcat 8.0 Clustering HOW-TO y aviso oficial de fin de soporte de la rama 8.0',
    'Se conserva como contenido histórico y se acota la versión. Para que una aplicación Tomcat 8.0 sea distribuible en el clúster, la marca <distributable/> va en WEB-INF/web.xml; no es un elemento de context.xml. La documentación del proyecto confirma que Tomcat 8.0 quedó fuera de soporte en 2018, por lo que no se presenta como recomendación actual.',
    'historica'
  ],
  [
    2162, [11, 27], ['I-7'], ['LCSP', 'Real Decreto-ley 14/2019', 'protección de datos', 'pliegos de contratación', 'artículo 122.2'],
    [
      { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902', referencia: 'BOE, Ley 9/2017 de Contratos del Sector Público, texto consolidado, artículo 122.2: los pliegos deben mencionar expresamente la obligación del futuro contratista de respetar la normativa de protección de datos.' },
      { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2019-15790', referencia: 'BOE, Real Decreto-ley 14/2019: introdujo esa obligación en el artículo 122.2 LCSP y añadió menciones adicionales en contratos con tratamiento o cesión de datos.' }
    ],
    'Ley 9/2017, artículo 122.2, texto consolidado; Real Decreto-ley 14/2019, de modificación de la LCSP',
    'Se delimita la regla general y su referencia normativa: el artículo 122.2 de la LCSP, en la redacción dada por el Real Decreto-ley 14/2019, obliga a incluir en los pliegos de cláusulas administrativas particulares la obligación del futuro contratista de respetar la normativa vigente de protección de datos. Para contratos con tratamiento por cuenta del responsable o cesión de datos, el mismo apartado exige además menciones específicas; la pregunta no debe interpretarse como si solo rigiera en esos supuestos.',
    'corregida'
  ],
  [
    2163, [54], ['II-1'], ['USB 3.0', 'bus USB', 'direcciones de dispositivo', 'hubs', 'topología'],
    [
      { url: 'https://e2e.ti.com/cfs-file/__key/communityserver-discussions-components-files/138/USB-3.2-Revision-1.1.pdf', referencia: 'USB 3.2 Revision 1.1 Specification, §9.4.6 SET_ADDRESS: el valor de dirección de dispositivo no puede superar 127; la especificación primaria mantiene el límite de direccionamiento del bus.' },
      { url: 'https://www.usb.org/documents', referencia: 'USB Implementers Forum, biblioteca oficial de especificaciones: catálogo de las especificaciones USB, incluidas las revisiones USB 3.x.' }
    ],
    'USB 3.2 Revision 1.1 Specification, §9.4.6 SET_ADDRESS; USB-IF Document Library',
    'Se corrige el alcance: el máximo de 127 direcciones corresponde a un bus USB bajo un host y puede requerir hubs; no es el número de dispositivos que se conectan directamente a un único conector físico. El campo de dirección admite valores hasta 127; los hubs también son dispositivos direccionados y ocupan direcciones del bus.',
    'corregida'
  ],
  [
    2164, [74], [], ['Google Earth', 'SIG', 'datos raster', 'datos vectoriales', 'KML', 'GeoJSON'],
    [
      { url: 'https://developers.google.com/maps/documentation/earth/import-data', referencia: 'Google for Developers, Import data into Google Earth: admite entidades KML, GeoJSON y shapefile, con placemarks, líneas, rutas y polígonos, es decir, datos vectoriales.' },
      { url: 'https://support.google.com/earth/answer/148099?hl=en', referencia: 'Google Earth Help, Use images as Google Earth overlays: permite superponer imágenes cartográficas georreferenciadas, datos raster, sobre el terreno.' }
    ],
    'Google for Developers, importación de datos geoespaciales; Google Earth Help, superposiciones de imágenes',
    'Se concreta la afirmación para no atribuir a Google Earth un único modelo interno de base de datos: para visualizar información geográfica combina imágenes/cartografía raster con entidades vectoriales (por ejemplo, marcadores, líneas y polígonos en KML o GeoJSON). La clave «ráster y vectorial» es correcta dentro de este alcance.',
    'corregida'
  ],
  [
    2165, [80], ['I-6', 'IV-12'], ['X.509', 'ASN.1', 'DER', 'X.500', 'Subject Alternative Name', 'dNSName', 'certificados digitales'],
    [{ url: 'https://www.rfc-editor.org/rfc/rfc5280.html', referencia: 'IETF RFC 5280: §4 define el perfil de certificados con sintaxis ASN.1 y codificación DER; §4.1.2.6 usa nombres distinguidos X.500/X.501 en subject; §4.2.1.6 permite dNSName en subjectAltName y especifica extensiones X.509 v3.' }],
    'IETF RFC 5280, Internet X.509 Public Key Infrastructure Certificate and CRL Profile',
    'Se precisa la diferencia entre sintaxis y codificación: X.509 define la estructura mediante ASN.1 y el perfil PKIX la codifica en DER. Los nombres distinguidos X.500/X.501 se usan en issuer y subject; nombres DNS pueden figurar como dNSName en subjectAltName; X.509 v3 incorpora extensiones tipificadas. Con estas precisiones, las tres afirmaciones son ciertas.',
    'corregida'
  ]
];

const edits = {
  2161: {
    texto: 'En Apache Tomcat 8.0, versión fuera de soporte, ¿qué elemento debe declarar una aplicación en WEB-INF/web.xml para que sus sesiones puedan replicarse en el clúster?',
    respuesta_correcta: 2
  },
  2162: {
    texto: 'Según el artículo 122.2 de la Ley 9/2017, en la redacción dada por el Real Decreto-ley 14/2019, ¿qué deben indicar los pliegos de cláusulas administrativas particulares?',
    opciones: [
      'La obligación del futuro contratista de respetar la normativa vigente en materia de protección de datos.',
      'Que no se puede mencionar la obligación del futuro contratista de respetar la normativa de protección de datos.',
      'La obligación de respetar la normativa de protección de datos, introducida por el Real Decreto-ley 17/2019.',
      'Que no se puede mencionar esa obligación, conforme al Real Decreto-ley 17/2019.'
    ],
    respuesta_correcta: 0
  },
  2163: {
    texto: 'En una topología USB 3.0 bajo un mismo host, conectada mediante los hubs necesarios, ¿cuál es el máximo número de direcciones de dispositivo admitidas por el bus?',
    respuesta_correcta: 1
  },
  2164: {
    texto: '¿Qué tipos de datos geoespaciales puede visualizar Google Earth en el alcance de sus funciones de cartografía y superposición?',
    respuesta_correcta: 1
  },
  2165: {
    texto: 'En relación con los certificados X.509 del perfil PKIX, ¿cuál de estas afirmaciones es correcta?',
    opciones: [
      'La estructura se define mediante ASN.1 y el perfil PKIX suele codificarla en DER.',
      'Pueden usar nombres distinguidos X.500/X.501 y nombres DNS en la extensión subjectAltName.',
      'Los certificados X.509 versión 3 admiten extensiones tipificadas con información adicional.',
      'Todas las anteriores son ciertas.'
    ],
    respuesta_correcta: 3
  }
};

aplicar({ numero: '369', fecha: '2026-10-28', records, edits });
