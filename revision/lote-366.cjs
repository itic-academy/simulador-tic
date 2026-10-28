const aplicar = require('./aplicar-lote.cjs');

const records = [
  [
    2146, [72], [], ['SAP ERP', 'ABAP', 'ampliabilidad', 'append structures', 'tablas Z', 'transacciones'],
    [
      { url: 'https://help.sap.com/saphelp_gbt10/helpdata/EN/cf/21eb61446011d189700000e8322d00/content.htm?no_cache=true', referencia: 'SAP Help, ABAP Dictionary—Append Structures: permite añadir campos de cliente a tablas/estructuras, incluso estándar, mediante append structures en el espacio de nombres de cliente; la ampliación debe respetar la categoría de ampliación del objeto.' },
      { url: 'https://help.sap.com/docs/ABAP_PLATFORM/ec1c9c8191b74de98feb94001a95dd76/44f4ef984a1c2952e10000000a11466f.html?version=1709.011', referencia: 'SAP Help, ABAP Dictionary—Creating Database Tables and Table Fields: documenta la creación de tablas de cliente desde SE11 y el uso de espacio de nombres de cliente para las clases de entrega aplicables.' },
      { url: 'https://help.sap.com/docs/ABAP_PLATFORM_NEW/bd833c8355f34e96a6e83096b38bf192/432c43b427bf601fe10000000a422035.html', referencia: 'SAP Help, ABAP Platform 2025 FPS01, Creating and Maintaining Transactions: documenta la creación y mantenimiento de códigos de transacción desde SE93 o ABAP Workbench.' },
      { url: 'https://learning.sap.com/courses/building-data-models-with-the-abap-dictionary-and-abap-core-data-services/extending-dictionary-objects_b0c9bfa6-d415-408c-baed-2f15fb3a977f', referencia: 'SAP Learning, Extending Dictionary Objects: describe append structures y el límite vigente de ABAP Cloud, donde solo se amplían tablas liberadas por el proveedor.' }
    ],
    'SAP Help y SAP Learning: ABAP Dictionary, estructuras de ampliación y creación de transacciones',
    'La respuesta original «es posible todo» es demasiado amplia sin especificar sistema, versión ni mecanismo; no autoriza a modificar libremente el núcleo estándar. Se acota a SAP ERP clásico basado en ABAP Dictionary: es posible crear objetos propios y códigos de transacción y añadir campos de cliente a tablas estándar mediante append structures cuando la categoría de ampliación lo permite. Se distingue ese mecanismo soportado de modificar directamente definiciones estándar; en ABAP Cloud rigen además las APIs/tablas liberadas para extensión.',
    'corregida'
  ],
  [
    2147, [77], ['II-9'], ['HTML', 'WHATWG', 'tablas HTML', 'td', 'celda de datos'],
    [
      { url: 'https://html.spec.whatwg.org/dev/tables.html#the-td-element', referencia: 'WHATWG HTML Standard, §4.9.9: el elemento td representa una celda de datos; th representa una celda de encabezado.' }
    ],
    'WHATWG HTML Living Standard, elemento td',
    'La opción `td` es la respuesta vigente: el estándar define este elemento como celda de datos de una tabla y diferencia `th`, que representa una celda de encabezado. El enunciado y las opciones ya permiten una única respuesta, por lo que se conservan sin cambios.',
    'vigente'
  ],
  [
    2148, [83], [], ['formatos de imagen', 'WebP', 'AVIF', 'formatos de vídeo'],
    [
      { url: 'https://developers.google.com/speed/webp/docs/riff_container', referencia: 'Google for Developers, WebP Container Specification: declara WebP un formato de imagen y documenta su contenedor RIFF.' },
      { url: 'https://aomedia.org/specifications/avif/', referencia: 'Alliance for Open Media, AV1 Image File Format: define AVIF como formato de archivo de imagen basado en HEIF y AV1.' }
    ],
    'Especificación WebP de Google y especificación AVIF de Alliance for Open Media',
    'La pareja WebP y AVIF está formada por formatos de imagen. WebM es un formato contenedor de vídeo/audio y AV1 es un códec de vídeo, por lo que las demás parejas mezclan categorías o incluyen vídeo. El enunciado ya distingue los formatos de fichero de imagen y tiene clave única; se confirma sin cambiar el contenido.',
    'vigente'
  ],
  [
    2149, [79, 80], ['IV-12'], ['criptografía asimétrica', 'clave pública', 'clave privada', 'NIST SP 800-57'],
    [
      { url: 'https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final', referencia: 'NIST SP 800-57 Part 1 Rev. 5, glosario: un algoritmo de clave pública usa claves pública y privada relacionadas y debe ser computacionalmente inviable determinar la privada a partir de la pública.' },
      { url: 'https://csrc.nist.gov/glossary/term/public_key_cryptography', referencia: 'NIST CSRC Glossary, Public Key Cryptography: recoge la definición de NIST SP 800-56B Rev. 2 sobre la inviabilidad computacional de derivar la clave privada desde la pública.' }
    ],
    'NIST SP 800-57 Part 1 Rev. 5 y glosario NIST de criptografía de clave pública',
    'Se mantiene la respuesta asimétrica, pero se elimina el contraste terminológicamente inconsistente del original entre «clave secreta», «clave privada» y «pública». La propiedad no es una imposibilidad matemática absoluta: NIST la formula como inviabilidad computacional bajo los parámetros y supuestos de seguridad del algoritmo.',
    'corregida'
  ],
  [
    2150, [63], ['II-5'], ['ANSI/X3/SPARC', 'arquitectura de tres esquemas', 'esquema conceptual', 'bases de datos'],
    [
      { url: 'https://www.govinfo.gov/content/pkg/GOVPUB-C13-f55f11d78745e6c51f75a39a44913f22/pdf/GOVPUB-C13-f55f11d78745e6c51f75a39a44913f22.pdf', referencia: 'NBSIR 85-3173, Reference Model for DBMS Standardization, §2.1 y figura 4.2: presenta la arquitectura de tres esquemas ANSI/X3/SPARC y muestra los esquemas externos mapeados al conceptual, que se mapea al esquema interno.' },
      { url: 'https://www.govinfo.gov/content/pkg/GOVPUB-C13-3cac9cb7d048b38f397af01be9ccd220/pdf/GOVPUB-C13-3cac9cb7d048b38f397af01be9ccd220.pdf', referencia: 'NBS Special Publication sobre arquitecturas de bases de datos: caracteriza el esquema conceptual como visión a largo plazo de la organización, independiente de sus bases de datos y aplicaciones de procesamiento.' }
    ],
    'Modelo ANSI/X3/SPARC de tres esquemas, informe técnico del National Bureau of Standards',
    'El original usa «esquema de la base de datos», expresión demasiado general porque el modelo distingue esquemas externos, conceptual e interno. Se delimita como la estructura lógica global e integrada, independiente de las vistas particulares y del almacenamiento físico; corresponde al nivel conceptual. Se cita el informe técnico conservado por NIST/GovInfo, que reproduce el modelo de referencia ANSI/X3/SPARC.',
    'corregida'
  ]
];

const edits = {
  2146: {
    texto: 'En SAP ERP clásico basado en ABAP Dictionary, ¿qué puede hacerse mediante mecanismos de ampliación y desarrollo en el espacio de nombres de cliente?',
    opciones: [
      'Crear objetos propios y transacciones y, cuando la categoría de ampliación lo permite, añadir campos de cliente a tablas estándar mediante append structures.',
      'Modificar sin restricciones cualquier campo de las tablas estándar, sin mecanismos de ampliación ni controles de compatibilidad.',
      'Crear transacciones propias, pero nunca tablas de cliente ni campos adicionales en estructuras estándar.',
      'Parametrizar el sistema, pero el entorno ABAP no permite desarrollar tablas ni transacciones de cliente.'
    ],
    respuesta_correcta: 0
  },
  2149: {
    texto: 'Según NIST SP 800-57, ¿qué propiedad caracteriza a un algoritmo de clave pública correctamente dimensionado?',
    opciones: [
      'La clave pública permite calcular la clave privada, pero solo si ambas tienen la misma longitud.',
      'La clave privada se deriva de cualquier clave pública mediante una operación directa y eficiente.',
      'La clave pública y la privada son la misma clave, compartida por emisor y receptor.',
      'Dada la clave pública, debe ser computacionalmente inviable determinar la clave privada correspondiente.'
    ],
    respuesta_correcta: 3
  },
  2150: {
    texto: 'En la arquitectura ANSI/X3/SPARC de tres esquemas, ¿qué nivel describe la estructura lógica global e integrada de la base de datos, independiente de las vistas externas y del almacenamiento físico?',
    opciones: ['Nivel conceptual.', 'Nivel físico o interno.', 'Nivel de aplicación.', 'Nivel externo o de vistas de usuario.'],
    respuesta_correcta: 0
  }
};

aplicar({ numero: '366', fecha: '2026-10-28', records, edits });
