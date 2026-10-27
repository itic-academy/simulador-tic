const apply = require('./aplicar-lote.cjs');
const records = [
  [1626, [68], [], ['PHP', 'lenguaje de servidor', 'frontend', 'LAMP', 'Sinatra', 'Ruby'], [
    {url: 'https://www.php.net/manual/en/introduction.php', referencia: 'PHP Manual, Introduction: PHP is open-source, general-purpose, especially suited to web development and embeddable in HTML; code is executed on the server.'},
    {url: 'https://www.php.net/manual/en/install.general.php', referencia: 'PHP Manual, General Installation Considerations: PHP web applications use server-side processing and can run on Windows, Unix variants, macOS and other platforms.'},
    {url: 'https://sinatrarb.com/', referencia: 'Proyecto Sinatra, página oficial: Sinatra se define como un DSL para crear aplicaciones web en Ruby.'},
    {url: 'https://www.alibabacloud.com/help/en/ecs/user-guide/build-a-lamp-environment/', referencia: 'Alibaba Cloud Documentation, LAMP environment: describe el stack convencional Linux–Apache–MySQL–PHP.'}
  ], {texto: '¿Cuál de estas afirmaciones sobre PHP es incorrecta?', opciones: [
    'PHP es un lenguaje de frontend que se ejecuta principalmente en el navegador del usuario.',
    'PHP puede utilizarse en distintos sistemas operativos y servidores web.',
    'PHP forma parte de la pila LAMP convencional (Linux, Apache, MySQL y PHP).',
    'Sinatra es un microframework web para Ruby, no un framework de desarrollo basado en PHP.'
  ], respuesta_correcta: 0}, 'La afirmación incorrecta es que PHP sea principalmente frontend ejecutado en el navegador: el manual oficial lo describe como lenguaje de scripting orientado especialmente a web cuyo código se ejecuta en el servidor. PHP es multiplataforma y aparece en la pila LAMP convencional; Sinatra es un framework/DSL de Ruby. Se mantiene el sentido del reactivo pero se expresa “frontend” mediante el entorno de ejecución, evitando usarlo como sinónimo impreciso de toda interfaz web.', 'corregida'],
  [1627, [56], ['IV-3'], ['copia de seguridad', 'copy backup', 'atributo de archivo', 'bit de archivo', 'Windows Server'], [
    {url: 'https://www.bitsavers.org/pdf/microsoft/windows_NT_4.0/69940-0696_Windows_NT_Server_4.0_Concepts_and_Planning_199606.pdf', referencia: 'Microsoft, Windows NT Server 4.0 Concepts and Planning, cap. 6 “Backing Up and Restoring Network Files”: define copy backup como copiar todos los archivos seleccionados sin marcarlos individualmente como respaldados; distingue daily, diferencial e incremental.'},
    {url: 'https://learn.microsoft.com/windows/win32/fileio/file-attribute-constants', referencia: 'Microsoft Learn, File Attribute Constants: FILE_ATTRIBUTE_ARCHIVE suele emplearse por aplicaciones como indicador de archivos que deben respaldarse.'}
  ], {texto: 'En el modelo clásico de tipos de copia de Windows que usa el atributo de archivo, ¿qué tipo copia todos los archivos seleccionados sin marcar que ya se han respaldado (no limpia el atributo de archivo)?', opciones: [
    'Copia incremental, que limpia el atributo de archivo de los seleccionados.',
    'Copia diaria, que selecciona solo archivos modificados durante ese día.',
    'Copia (copy backup), que copia todos los seleccionados y no altera el atributo de archivo.',
    'Copia diferencial, que selecciona los archivos modificados desde la última copia normal o incremental.'
  ], respuesta_correcta: 2}, 'La respuesta es la copia de tipo Copy: copia todos los archivos seleccionados y no limpia el atributo de archivo. La copia diaria también deja ese atributo intacto, pero solo selecciona los archivos modificados durante ese día; diferencial tampoco lo limpia, pero selecciona los cambiados desde una copia base. El original ofrecía como respuesta «intermedia», que no es uno de los cinco tipos clásicos documentados, por lo que se reemplaza por el término definido y se especifica el criterio que lo distingue.', 'corregida'],
  [1628, [68], [], ['PHP', 'software libre', 'lenguaje de scripting', 'HTML', 'servidor web'], [
    {url: 'https://www.php.net/manual/en/introduction.php', referencia: 'PHP Manual, What is PHP?: PHP se define como lenguaje de scripting de propósito general y código abierto, especialmente adecuado para desarrollo web y embebible en HTML; explica ejecución de servidor.'},
    {url: 'https://www.php.net/license/', referencia: 'PHP License: condiciones de licencia del proyecto PHP.'}
  ], {texto: '¿Cuál describe correctamente PHP según su documentación oficial?', opciones: [
    'Lenguaje de scripting de propósito general y código abierto, especialmente apto para desarrollo web y embebible en HTML; suele ejecutarse en el servidor.',
    'Lenguaje propietario de bajo nivel cuyo código se ejecuta exclusivamente en el navegador.',
    'Lenguaje de marcado que sustituye a HTML y no permite generar contenido dinámico.',
    'Framework propietario para aplicaciones móviles, sin uso en servidores.'
  ], respuesta_correcta: 0}, 'PHP es un lenguaje de scripting de propósito general distribuido como software de código abierto, especialmente adecuado para web y embebible en HTML; en la modalidad web habitual el intérprete procesa el código en el servidor. Se evita llamar a PHP simplemente “interpretado” o reducirlo a HTML embebido, ya que la documentación actual ofrece una descripción más precisa y amplia.', 'corregida'],
  [1629, [77], [], ['CSS', 'preprocesadores CSS', 'Sass', 'Less', 'Stylus'], [
    {url: 'https://developer.mozilla.org/en-US/docs/Glossary/CSS_preprocessor', referencia: 'MDN Web Docs, CSS preprocessor: define los preprocesadores como programas que generan CSS a partir de una sintaxis propia y cita Sass, Less y Stylus como ejemplos populares.'},
    {url: 'https://sass-lang.com/documentation/', referencia: 'Sass documentation: Sass es un lenguaje de hojas de estilo compilado a CSS.'},
    {url: 'https://lesscss.org/', referencia: 'Less official documentation: extensión del lenguaje CSS y compilador less.js que convierte Less en CSS.'},
    {url: 'https://stylus-lang.com/docs/executable.html', referencia: 'Stylus official documentation: incluye ejecutable para convertir archivos Stylus a CSS.'}
  ], {texto: '¿Qué conjunto está formado por preprocesadores de CSS que permiten generar hojas CSS a partir de sintaxis extendidas?', opciones: [
    'Stylesheet, flex y grid, que son una hoja de estilos y módulos/propiedades CSS.',
    'Padding, margin y display, que son propiedades CSS.',
    'CSS-Edit, inline y block, que son un editor y formas de aplicar/disponer estilos, no tres preprocesadores.',
    'Sass, Less y Stylus.'
  ], respuesta_correcta: 3}, 'Sass, Less y Stylus son preprocesadores: sus lenguajes o sintaxis se transforman a CSS. Las demás opciones mezclan términos de CSS, propiedades, modos de estilo o un editor. Se elimina la afirmación absoluta de que todo preprocesador necesariamente compile “todo el código fuente” en un único archivo; la definición adoptada es generación de CSS desde una sintaxis extendida.', 'corregida'],
  [1630, [83], [], ['compresión de imágenes', 'RLE', 'PackBits', 'sin pérdidas', 'ECW', 'DICOM'], [
    {url: 'https://dicom.nema.org/medical/dicom/current/output/chtml/part05/sect_8.2.2.html', referencia: 'DICOM PS3.5, §8.2.2: RLE de datos de píxel es un esquema de compresión sin pérdidas, byte-oriented, definido en el anexo G.'},
    {url: 'https://www.itu.int/itudoc/itu-t/com16/tiff-fx/docs/tiff6.pdf', referencia: 'TIFF Revision 6.0, §9: PackBits es un esquema simple de run-length encoding por bytes para datos de imagen.'},
    {url: 'https://bynder.hexagon.com/m/5af86a8895f6696f/original/Hexagon_GSP_ERDAS_ECW_JP2_SDK_5_5_User_Guide.pdf', referencia: 'Hexagon ERDAS ECW/JP2 SDK 5.5 User Guide: ECW emplea filtro wavelet irreversible y no ofrece compresión matemáticamente sin pérdidas.'},
    {url: 'https://www.iso.org/standard/22411.html', referencia: 'ISO/IEC 11172-2:1993, MPEG-1 Video: estándar de codificación de vídeo; su codificación incluye cuantización de coeficientes DCT, que descarta precisión y hace que el esquema de vídeo habitual sea con pérdidas.'}
  ], {texto: '¿Cuál de estas técnicas de compresión puede conservar exactamente los píxeles de la imagen original?', opciones: [
    'ECW, que utiliza un filtro wavelet irreversible.',
    'RLE (run-length encoding), un método sin pérdidas; DICOM especifica RLE como compresión lossless de datos de píxel.',
    'MPEG-1 para vídeo, que aplica codificación con cuantización DCT y no es una técnica sin pérdidas.',
    'TXA, denominación que no identifica en este contexto un algoritmo normalizado de compresión lossless de imágenes.'
  ], respuesta_correcta: 1}, 'RLE conserva exactamente los datos y DICOM lo especifica como esquema de compresión sin pérdidas de píxeles. TIFF 6.0 define PackBits como un esquema de codificación por longitud de secuencias (run length). ECW, en cambio, usa un filtro wavelet irreversible. Se reemplaza la etiqueta excesivamente general “algoritmo de compresión de imágenes” por una pregunta concreta sobre conservación exacta, y se explicita el sentido de MPEG/ECW en los distractores.', 'corregida']
];
const edits = Object.fromEntries(records.filter(row => row[5]).map(([id,,,,,edit]) => [id, edit]));
apply({numero: '262', fecha: '2026-10-27', records, edits});
