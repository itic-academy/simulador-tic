const aplicar = require('./aplicar-lote.cjs');

const ref = (url, referencia) => ({ url, referencia });
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/buscar/doc.php?id=BOE-A-2025-26262';
const academy30 = 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk';
const academy38 = 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';

const records = [
  [5101, ['77'], ['II-9'], ['HTML', 'tablas', 'td', 'celda de datos'], [
    ref('https://html.spec.whatwg.org/multipage/tables.html#the-td-element', 'WHATWG HTML Living Standard, §4.9.9: el elemento `td` representa una celda de datos; `th` representa una celda de encabezado.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 77: HTML, CSS, XML, navegadores y compatibilidad con estándares.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema II.9: lenguajes de marca, incluidas las características y funcionalidades de HTML.'),
    ref(academy30, 'ITIC Academy, bloque 30, tecnologías de sistemas de información, incluye HTML y estándares web; cotejo curricular, no fuente de conformidad HTML.')
  ], null, 'La pregunta original llamaba «columna» a una celda y confundía la estructura: `tr` crea una fila, `td` una celda de datos, `th` una celda de encabezado, y `col`/`colgroup` expresan agrupaciones de columnas. Se reformula para preguntar por la celda de datos; respuesta B (`td`).', 'corregida'],
  [5102, ['69'], ['II-14'], ['software libre', 'software gratuito', 'licencia', 'precio', 'libertades'], [
    ref('https://www.gnu.org/philosophy/free-sw.html', 'GNU/FSF, What is Free Software?: el software libre se define por las libertades de uso, estudio, modificación y redistribución, no por el precio; puede distribuirse gratis o por un precio.'),
    ref('https://www.gnu.org/philosophy/categories.html', 'GNU/FSF, Categories of Free and Nonfree Software: distingue software libre de freeware; este último suele permitir redistribuir pero no modificar y no implica las libertades del software libre.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 69: software de código abierto, software libre y conceptos base.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema II.14: software libre y propietario, características y licencias.'),
    ref(academy30, 'ITIC Academy, bloque 30, tecnologías de sistemas de información: cotejo curricular del apartado de software y licencias.')
  ], null, '«Libre» describe las libertades concedidas por la licencia; «gratuito» describe el precio. El software libre puede cobrarse o distribuirse sin coste, y el software gratuito puede no permitir estudiar, modificar o redistribuir el programa. Por ello, ninguna de las tres equivalencias absolutas es correcta; se conserva la opción D.', 'corregida'],
  [5103, ['77'], ['II-16'], ['SEO', 'link baiting', 'enlaces entrantes', 'contenido útil', 'link spam'], [
    ref('https://developers.google.com/search/docs/essentials/spam-policies', 'Google Search Central, políticas contra el spam, apartado Link spam: prohíbe crear enlaces principalmente para manipular rankings y crear contenido de bajo valor con ese fin; ayuda a distinguir una atracción editorial legítima de esquemas de enlaces.'),
    ref('https://developers.google.com/search/docs/fundamentals/creating-helpful-content', 'Google Search Central, Creating helpful, reliable, people-first content: prioriza contenido útil para las personas, no contenido creado para manipular posiciones.'),
    ref('https://www.searchenginejournal.com/seo-101-guide.pdf', 'Search Engine Journal, SEO 101 Guide: describe link bait como atraer enlaces editoriales de forma natural mediante contenido de calidad; se usa solo para el término de uso profesional, no como norma de buscador.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 77: lenguajes y herramientas para redes globales, navegadores y estándares web.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema II.16: posicionamiento y buscadores (SEO).'),
    ref(academy30, 'ITIC Academy, bloque 30, tecnologías de sistemas de información y web; cotejo temático general. No se localizó en Drive una sección que defina específicamente «link baiting».')
  ], null, 'La expresión «link baiting» es terminología profesional, no una categoría normativa estandarizada. Aquí se define de forma acotada como crear contenido útil o atractivo para obtener enlaces editoriales naturales; comprar, automatizar o fabricar enlaces para manipular rankings puede constituir link spam según Google. Se conserva la opción C y se reemplazan los distractores defectuosos.', 'corregida'],
  [5104, ['77'], ['II-9'], ['HTML', 'SGML', 'HTML 4.01', 'WHATWG', 'lenguajes de marca'], [
    ref('https://www.w3.org/TR/REC-html40/', 'W3C Recommendation HTML 4.01, resumen: HTML 4 es una aplicación SGML conforme a ISO 8879.'),
    ref('https://html.spec.whatwg.org/multipage/parsing.html', 'WHATWG HTML Living Standard, parsing: las versiones modernas de HTML tienen reglas de análisis propias y no son aplicaciones SGML; algunas versiones anteriores (HTML 2–4) sí se basaban en SGML.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 77: HTML, CSS, XML y compatibilidad con estándares.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema II.9: SGML, HTML, XML y sus derivaciones.'),
    ref(academy30, 'ITIC Academy, bloque 30, tecnologías de sistemas de información, abarca HTML y lenguajes web; cotejo curricular, no fuente histórica del vínculo HTML–SGML.')
  ], null, 'La frase «HTML es un subconjunto de SGML» resulta imprecisa y, sin versión, anacrónica: HTML 4.01 se definió como una aplicación de SGML; el estándar moderno HTML tiene reglas de análisis propias y no es SGML. Se limita el enunciado a la relación histórica de HTML 4.01 y se corrige la respuesta a A.', 'corregida'],
  [5105, ['93'], ['III-9'], ['MVC', 'Modelo-Vista-Controlador', 'patrones de diseño', 'controlador', 'lógica de negocio'], [
    ref('https://learn.microsoft.com/es-es/aspnet/core/mvc/overview', 'Microsoft Learn, Información general de ASP.NET Core MVC: el modelo representa estado y lógica de negocio; la vista presenta contenido; el controlador recibe interacción, trabaja con el modelo y selecciona la vista.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 93: técnicas de diseño de software, diseño por capas y patrones de diseño.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema III.9: análisis y diseño orientado a objetos y patrones de diseño.'),
    ref(academy38, 'ITIC Academy, bloque 38, análisis, diseño y construcción de sistemas de información, versión 2026: cotejo curricular de análisis y diseño; no se le atribuye una formulación concreta del patrón MVC.')
  ], null, 'Se expresa la separación clásica de responsabilidades: el modelo representa estado y lógica de negocio, la vista presenta la interfaz y el controlador gestiona la interacción/solicitud y coordina la selección de modelo y vista. Se evitan afirmaciones dependientes de una arquitectura concreta. Respuesta A.', 'corregida'],
];

const edits = {
  5101: {
    texto: 'En una tabla HTML, ¿qué elemento representa una celda de datos?',
    opciones: ['`<table>`', '`<td>`', '`<th>`', '`<colgroup>`'],
    respuesta_correcta: 1,
    comentarios: '`<td>` representa una celda de datos; `<th>` es una celda de encabezado. Las filas se representan con `<tr>` y las agrupaciones de columnas pueden declararse con `<colgroup>`. '
  },
  5102: {
    texto: '¿Qué afirmación distingue correctamente el software libre del software gratuito?',
    opciones: [
      'El software gratuito siempre permite estudiar, modificar y redistribuir el código.',
      'El software libre siempre debe distribuirse sin coste.',
      'Software libre y software gratuito son términos equivalentes.',
      'Ninguna de las tres afirmaciones anteriores es correcta.'
    ],
    comentarios: 'Software libre se refiere a las libertades de uso, estudio, modificación y redistribución; no determina si se cobra por la copia.'
  },
  5103: {
    texto: 'En la terminología habitual de SEO, ¿cómo se denomina crear contenido útil o atractivo con el propósito de que consiga enlaces editoriales de forma natural?',
    opciones: [
      'Trunking.',
      'Jigsaw.',
      'Link baiting.',
      'Keyword stuffing.'
    ],
    comentarios: '«Link baiting» es un término de uso profesional, no una categoría normativa. Se refiere aquí a atraer enlaces editoriales con contenido de interés; comprar o automatizar enlaces para manipular posiciones puede ser link spam.'
  },
  5104: {
    texto: '¿Cuál describe correctamente la relación histórica entre HTML 4.01 y SGML?',
    opciones: [
      'HTML 4.01 se definió como una aplicación de SGML; el HTML moderno tiene reglas de análisis propias y no es SGML.',
      'SGML es un subconjunto de HTML 4.01.',
      'Todos los navegadores modernos deben analizar HTML como documentos SGML.',
      'HTML y SGML no tienen relación histórica.'
    ],
    comentarios: 'HTML 4.01 era una aplicación de SGML. WHATWG especifica que el HTML moderno no es SGML y cuenta con reglas de análisis propias.'
  },
  5105: {
    texto: 'En la separación clásica de responsabilidades del patrón Modelo-Vista-Controlador (MVC), ¿qué descripción es correcta?',
    opciones: [
      'El modelo representa el estado y la lógica de negocio; la vista presenta la interfaz; el controlador gestiona la interacción y coordina la respuesta.',
      'El modelo se limita siempre a cargar datos; la vista presenta la interfaz; el controlador coordina la respuesta.',
      'La vista contiene necesariamente la lógica de negocio y se ejecuta siempre en el servidor.',
      'El controlador representa al personal que accede al servidor y sustituye al modelo.'
    ],
    comentarios: 'En MVC, el modelo representa estado y reglas de negocio, la vista presenta información y el controlador responde a la interacción y decide qué modelo/vista intervienen. Los detalles exactos dependen del framework.'
  }
};

aplicar({ numero: '956', fecha: '2026-11-11', records, edits });
