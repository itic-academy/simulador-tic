const aplicar = require('./aplicar-lote.cjs');

const ref = (url, referencia) => ({ url, referencia });
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy06 = 'https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk';
const academy15 = 'https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view?usp=drivesdk';
const academy30 = 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk';
const academy37 = 'https://drive.google.com/file/d/1xTMCpPmwNi8hpb0nZ3sMqpgvrhLXT-yf/view?usp=drivesdk';
const academy38 = 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const ecma = 'https://ecma-international.org/publications-and-standards/standards/ecma-262/';
const nistLzw = 'https://xlinux.nist.gov/dads/HTML/lempelZivWelch.html';
const welch = 'https://doi.org/10.1109/MC.1984.1659158';
const agenda = 'https://espanadigital.gob.es/sites/espanadigital/files/2022-07/Espa%C3%B1aDigital_2026.pdf';
const agendaPortal = 'https://digital.gob.es/ministerio/programas/programas-avance-digital/espana-digital-2026';
const metric = 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A7f366cd1-6759-42d9-9e0b-31edce0256d9/METRICA_V3_Diseno_del_Sistema_de_Informacion.pdf';
const metricIndex = 'https://administracionelectronica.gob.es/documentacion/metodologias-guias';
const xp = 'https://www.informit.com/articles/article.aspx?p=390816&seqNum=3';

const records = [
  [5036, ['65'], ['III-12'], ['JavaScript', 'JavaScript de cliente', 'capa de presentación', 'lenguajes web'], [
    ref(ecma, 'Ecma International, estándar ECMA-262 (edición vigente): especifica ECMAScript, el lenguaje de programación estandarizado que implementa JavaScript. En el contexto web, permite implementar la lógica de cliente de la interfaz.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 65: desarrollo web front-end, scripts de cliente y frameworks.'),
    ref(a2, 'Convocatoria oficial A2 GSI 2025, tema III.12: aplicaciones web, front-end y tecnologías de programación.'),
    ref(academy30, 'ITIC Academy, bloque 30 «Tecnologías de sistemas de la información», versión 2026.1 (31/08/2026): tecnologías y lenguajes de desarrollo web; cotejo curricular.')
  ], null, 'Se precisa el enunciado para preguntar por la lógica ejecutada en cliente, no por toda la capa visual (que también comprende HTML y CSS). Respuesta C: JavaScript, implementado conforme al estándar ECMAScript. PL/SQL se orienta a programación de bases de datos; PyScripter es un IDE para Python, no un lenguaje; «Queryscript» no identifica aquí un lenguaje web normalizado.', 'corregida'],
  [5037, ['56'], ['IV-5'], ['LZW', 'compresión sin pérdida', 'diccionario'], [
    ref(nistLzw, 'NIST Dictionary of Algorithms and Data Structures, entrada Lempel-Ziv-Welch: describe la codificación de cadenas mediante códigos de longitud fija y la incorporación de nuevas cadenas a una tabla/diccionario.'),
    ref(welch, 'T. A. Welch, «A Technique for High-Performance Data Compression», IEEE Computer 17(6), junio de 1984, pp. 8–19, DOI 10.1109/MC.1984.1659158: artículo original sobre LZW.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 56: almacenamiento e información multimedia.'),
    ref(a2, 'Convocatoria oficial A2 GSI 2025, tema IV.5: almacenamiento de datos y sus componentes.'),
    ref(academy37, 'ITIC Academy, bloque 37 «Imágenes, OCR, biometría y gestión de contenidos», versión 2026.1 (18/09/2026): formatos de imagen y compresión; cotejo curricular.')
  ], null, 'Respuesta A. LZW (Lempel-Ziv-Welch) es un algoritmo de compresión sin pérdida basado en un diccionario/tabla de cadenas: emite códigos para cadenas ya conocidas e incorpora nuevas secuencias. Se corrige «comprensión», errata que cambiaba el sentido técnico, por «compresión». RLE, Huffman y JPEG son técnicas/formatos distintos; JPEG se asocia habitualmente a compresión con pérdida.', 'corregida'],
  [5038, ['51'], ['I-6'], ['España Digital 2026', 'Agenda Digital', 'brecha digital', 'tecnologías del lenguaje'], [
    ref(agenda, 'Documento oficial España Digital 2026, ejes 1–12: la Agenda incluye infraestructura y conectividad, reducción de brechas digitales, y en el eje 4 (medida 16) el Plan Nacional de Tecnologías del Lenguaje Natural.'),
    ref(agendaPortal, 'Portal oficial del Ministerio para la Transformación Digital, España Digital 2026: hoja de ruta, ejes y objetivos actualizados.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 51: Agenda Digital para España, estructura, objetivos y planes.'),
    ref(a2, 'Convocatoria oficial A2 GSI 2025, tema I.6: sociedad de la información y Agenda Digital para España.'),
    ref(academy06, 'ITIC Academy, bloque 06 «Economía, sociedad, empleo y transformación digital», actualización 2026.2: contexto de estrategia y transformación digital; cotejo curricular.')
  ], null, 'Se conserva D únicamente como clave original del banco, pero el reactivo queda pendiente de ambigüedad. La pregunta presenta tres opciones como objetivos amplios y una como desarrollo de tecnologías del lenguaje. El documento oficial de España Digital 2026 incluye tanto la reducción de brechas digitales como conectividad/infraestructuras y, en su medida 16 del eje de IA, el Plan Nacional de Tecnologías del Lenguaje Natural. No se identifica un criterio de granularidad que permita considerar D la única opción ajena a la Agenda; tampoco es equivalente preguntar por un objetivo general o por una medida concreta. Hace falta recuperar la fuente/plantilla que justificó D o reformular el reactivo.', 'pendiente_ambiguedad'],
  [5039, ['95'], ['III-2'], ['MÉTRICA v3', 'DSI', 'productos de diseño', 'glosario'], [
    ref(metric, 'Ministerio de Administraciones Públicas, MÉTRICA v3, Diseño del Sistema de Información: DSI 1.3 produce el Catálogo de Excepciones; DSI 1.4 el Catálogo de Normas; DSI 1.7 produce los Procedimientos de Seguridad y Control de Acceso. El documento no enumera «Glosario» como producto DSI.'),
    ref(metricIndex, 'Portal oficial PAe, Metodologías y Guías: mantiene disponible MÉTRICA v3 y describe su alcance en el ciclo de vida del software.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 95: metodología MÉTRICA.'),
    ref(a2, 'Convocatoria oficial A2 GSI 2025, tema III.2: gestión y planificación del proceso de desarrollo y metodologías.')
  ], null, 'Respuesta A: Glosario. En el proceso DSI de MÉTRICA v3 sí aparecen el Catálogo de Excepciones, el Catálogo de Normas y los Procedimientos de Seguridad y Control de Acceso como productos. «Glosario» no figura en el documento DSI consultado como uno de esos productos. Se conserva la pregunta y la clave.', 'vigente'],
  [5040, ['37'], ['III-2'], ['Extreme Programming', 'XP', 'programación en parejas', 'Pair Programming'], [
    ref(xp, 'Kent Beck y Cynthia Andres, «Getting Started with eXtreme Programming», apéndice Primary Practices (InformIT/Pearson): identifica explícitamente Pair Programming entre las prácticas primarias de XP.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 37: metodologías ágiles para gestión de proyectos.'),
    ref(a2, 'Convocatoria oficial A2 GSI 2025, tema III.2: metodologías de desarrollo y planificación.'),
    ref(academy15, 'ITIC Academy, bloque 15 «Metodologías ágiles y modelos de ciclo de vida», versión 2026.1 (26/08/2026): XP y prácticas/metodologías ágiles; cotejo curricular.')
  ], null, 'Respuesta D: Pair Programming (programación en parejas). Beck y Andres la enumeran expresamente entre las prácticas primarias de XP. «Daily meeting» es una reunión de coordinación que puede aparecer en varios marcos, pero no sustituye la práctica de programación en parejas que identifica el material fundacional de XP.', 'vigente']
];

const edits = {
  5036: { texto: 'Para implementar la lógica de cliente en la capa de presentación de una aplicación web, ¿cuál de estos lenguajes es adecuado?' },
  5037: { texto: 'Los algoritmos de compresión LZW son del tipo:' }
};

aplicar({ numero: '943', fecha: '2026-11-11', records, edits });
