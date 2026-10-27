const apply = require('./aplicar-lote.cjs');

const records = [
  [1581, [80], ['I-9'], ['Ley 6/2020', 'servicios electrónicos de confianza', 'prestadores cualificados', 'régimen sancionador', 'firma electrónica'], [
    {url: 'https://www.boe.es/buscar/pdf/2020/BOE-A-2020-14046-consolidado.pdf', referencia: 'BOE, Ley 6/2020, texto consolidado, art. 19.1: multas de 150.001–300.000 euros para infracciones muy graves, 50.001–150.000 para graves y hasta 50.000 para leves.'}
  ], null, 'La opción 3 es correcta conforme al artículo 19.1 de la Ley 6/2020 en su texto consolidado: 150.001–300.000 euros (muy graves), 50.001–150.000 (graves) y hasta 50.000 (leves). Se conserva la pregunta porque la clave coincide con la norma vigente consultada.', 'vigente'],
  [1582, [56], [], ['IEEE 1394', 'FireWire', 'bus serie', 'periféricos', 'estándar histórico'], [
    {url: 'https://standards.ieee.org/ieee/1394/4377/', referencia: 'IEEE Standards Association, IEEE 1394-2008, IEEE Standard for a High-Performance Serial Bus: especifica un bus serie de alta velocidad, asíncrono e isócrono, destinado a interconectar tarjetas y periféricos externos; consta como estándar inactivo desde 2021.'}
  ], {texto: 'En el contexto histórico de las interfaces de periféricos, IEEE 1394 (FireWire) era:', opciones: [
    'Un formato de disco compacto (CD).',
    'Un proyecto de formato DVD-Audio.',
    'Un estándar de bus serie de alta velocidad para interconectar periféricos externos.',
    'Una norma dedicada exclusivamente al ajuste y calibrado del color.'
  ], respuesta_correcta: 2}, 'La opción 3 describe IEEE 1394/FireWire: un bus serie de alta velocidad con transferencias asíncronas e isócronas, pensado también para periféricos externos. Se quita el ejemplo dudoso de impresoras profesionales y se clasifica como histórico: IEEE registra 1394-2008 como inactivo desde marzo de 2021.', 'historica'],
  [1583, [67], ['III-10', 'III-12'], ['Jakarta Servlet', 'Servlet API', 'HttpServlet', 'web.xml', 'WEB-INF/classes', 'despliegue web'], [
    {url: 'https://jakarta.ee/specifications/servlet/6.1/jakarta-servlet-spec-6.1.html', referencia: 'Jakarta Servlet Specification 6.1, §§2 y 10.5: la interfaz común es `jakarta.servlet.Servlet`; el descriptor admite declaraciones y mapeos; el directorio `WEB-INF/classes` aloja clases disponibles al cargador de la aplicación.'},
    {url: 'https://jakarta.ee/specifications/servlet/6.1/apidocs/jakarta.servlet/jakarta/servlet/Servlet.html', referencia: 'Jakarta Servlet 6.1 API, interfaz Servlet: identifica la interfaz que implementan los servlets y las clases de extensión genérica o HTTP.'},
    {url: 'https://jakarta.ee/specifications/servlet/6.1/apidocs/jakarta.servlet/jakarta/servlet/http/HttpServlet.html', referencia: 'Jakarta Servlet 6.1 API, clase `HttpServlet`: clase abstracta que extiende `GenericServlet` y está destinada a ser extendida para crear servlets HTTP.'}
  ], {texto: 'En un despliegue de Jakarta Servlet 6.1, ¿qué afirmación sobre la implementación y configuración de un servlet es INCORRECTA?', opciones: [
    'El descriptor `WEB-INF/web.xml` puede declarar la clase del servlet y asociar su nombre con uno o más patrones URL.',
    'La API define una interfaz `jakarta.servlet.IHttpServlet` que toda clase de servlet HTTP debe implementar.',
    'Un servlet HTTP puede extender la clase abstracta `jakarta.servlet.http.HttpServlet`.',
    'Las clases compiladas de la aplicación pueden ubicarse bajo `WEB-INF/classes`, respetando la ruta de paquetes para que las cargue el contenedor.'
  ], respuesta_correcta: 1}, 'La opción 2 es la incorrecta: no existe una interfaz estándar `jakarta.servlet.IHttpServlet`. La interfaz común es `jakarta.servlet.Servlet`; para HTTP se suele extender la clase abstracta `jakarta.servlet.http.HttpServlet`. El descriptor puede declarar y mapear servlets, aunque desde Servlet 3 también existe configuración mediante anotaciones; las clases web se ubican en `WEB-INF/classes` respetando los paquetes.', 'corregida'],
  [1584, [125], ['IV-12'], ['IKEv2', 'IPsec', 'Diffie-Hellman', 'intercambio de claves', 'RFC 7296'], [
    {url: 'https://www.rfc-editor.org/rfc/rfc7296.html', referencia: 'IETF RFC 7296 (Internet Standard), §§1 y 3.4: el intercambio IKE_SA_INIT de IKEv2 negocia algoritmos, nonces y Diffie–Hellman; el payload KE transporta el valor público DH.'}
  ], {texto: 'En el intercambio inicial IKE_SA_INIT de IKEv2, ¿qué mecanismo de acuerdo de claves realizan las partes mediante los payloads KE?', opciones: [
    'GRE.',
    'HMAC.',
    'Diffie–Hellman (DH).',
    'RSA como mecanismo de intercambio de claves.'
  ], respuesta_correcta: 2}, 'La opción 3 es correcta: IKEv2 realiza un intercambio Diffie–Hellman en IKE_SA_INIT y transporta los valores públicos en los payloads KE. La autenticación ocurre en IKE_AUTH; se precisa la versión y fase para separar el acuerdo de claves de los métodos de autenticación.', 'corregida'],
  [1585, [56], [], ['GIF', 'GIF87a', 'CompuServe', 'LZW', 'paleta indexada', 'formatos de imagen'], [
    {url: 'https://techheap.packetizer.com/compression/graphics/gif87a.html', referencia: 'CompuServe, Graphics Interchange Format Specification GIF87a (15-06-1987): identifica el formato como estándar de CompuServe y documenta la codificación de imagen y su compresión.'},
    {url: 'https://www.loc.gov/preservation/digital/formats/fdd/fdd000135.shtml', referencia: 'Library of Congress, LZW Compression Encoding: describe el uso de LZW en GIF y documenta que las patentes estadounidenses y europeas/japonesas expiraron en 2003 y 2004, respectivamente.'}
  ], {texto: 'Respecto al formato de imágenes GIF, indique la afirmación FALSA:', opciones: [
    'Utiliza el algoritmo de compresión LZW.',
    'Fue creado en 1987 por Apple.',
    'CompuServe publicó la especificación GIF87a en 1987.',
    'Una tabla de color GIF puede contener como máximo 256 entradas.'
  ], respuesta_correcta: 1}, 'La afirmación falsa sigue siendo la opción 2: GIF87a fue publicado por CompuServe en 1987, no por Apple. GIF utiliza LZW y sus tablas de color admiten hasta 256 entradas. Se elimina la expresión atemporal “algoritmo patentado”: las patentes que afectaron al uso de LZW expiraron (la estadounidense en 2003 y las europeas/japonesas en 2004).', 'corregida']
];

const edits = Object.fromEntries(records.filter(row => row[5]).map(([id,,,,,edit]) => [id, edit]));
apply({numero: '253', fecha: '2026-10-27', records, edits});
