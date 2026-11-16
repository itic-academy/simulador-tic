const apply = require('./aplicar-lote.cjs');

const records = [
  [7446, [23], [], ['nueva gestión pública', 'cinco R', 'Jones y Thompson', 'management público'], [
    { url: 'https://revista.enap.gov.br/index.php/RSP/article/view/319', referencia: 'Jones y Thompson, “Un modelo para la nueva gerencia pública”, Revista do Serviço Público, vol. 51, n.º 1 (2000), resumen y ficha del artículo: presenta las cinco R como reestructuración, reingeniería, reinvención, realineamiento y reconceptualización.' },
    { url: 'https://revista.enap.gov.br/index.php/RSP/issue/download/62/68', referencia: 'Texto completo de Jones y Thompson, pp. 41–80: desarrolla la secuencia de cinco conceptos de reforma de la gerencia pública; no incluye recapitulación.' }
  ], {
    texto: 'En el modelo de las cinco R de Jones y Thompson para la nueva gerencia pública, ¿cuál de estas opciones NO forma parte del modelo?',
    opciones: ['Reingeniería.', 'Realineamiento.', 'Recapitulación.', 'Reestructuración.'],
    respuesta_correcta: 2
  }, 'Corregida C. Se identifica el marco teórico que el original llamaba vagamente “Management”. Las cinco R de Jones y Thompson son reestructuración, reingeniería, reinvención, realineamiento y reconceptualización (en inglés, reframing, reengineering, reinvention, realignment y rethinking); “recapitulación” no forma parte de esa lista. No se confunde con las cinco C de Osborne y Plastrik.', 'corregida'],
  [7447, [23], [], ['Max Weber', 'burocracia', 'ventajas técnicas', 'administración burocrática'], [
    { url: 'https://files.eric.ed.gov/fulltext/ED060206.pdf', referencia: 'Max Weber, “Technical Advantage of Bureaucratic Organization”, reimpreso de Gerth y Mills, From Max Weber: Essays in Sociology (1946), pp. 214–216. El pasaje enumera precisión, rapidez, falta de ambigüedad, conocimiento de expedientes, continuidad, discreción, unidad, subordinación estricta y reducción de fricciones y costes materiales y personales.' }
  ], {
    texto: 'Según Weber, ¿qué ventajas técnicas alcanza a un nivel óptimo la administración estrictamente burocrática?',
    opciones: [
      'Concentración del poder, ineficacia, seguridad, jerarquía y principio de legalidad.',
      'Actuación legal y jerárquica, división del trabajo, impersonalidad, competencia técnica y transparencia.',
      'Actuación racional tradicional, división del trabajo, impersonalidad y competencia técnica.',
      'Precisión, rapidez, falta de ambigüedad, conocimiento de los expedientes, continuidad, discreción, unidad, subordinación estricta y reducción de las fricciones y de los costes materiales y personales.'
    ],
    respuesta_correcta: 3
  }, 'Corregida D. El original mezclaba características de la organización burocrática con la lista textual de sus ventajas técnicas y contenía una errata (“reducción de lo acuerdos”). Se delimita la pregunta al pasaje de Weber y se corrige su traducción: habla de reducir fricciones, no acuerdos.', 'corregida'],
  [7448, [27], ['I-7'], ['RGPD', 'LOPDGDD', 'AEPD', 'reclamación', 'artículo 64', 'derechos de los interesados'], [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673', referencia: 'Ley Orgánica 3/2018, texto consolidado del BOE, artículo 64.1: en el procedimiento referido exclusivamente a la falta de atención de derechos RGPD de los artículos 15–22, el plazo es de seis meses desde la notificación al reclamante del acuerdo de admisión; transcurrido, podrá considerar estimada su reclamación.' },
    { url: 'https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807&lang=es', referencia: 'Reglamento (UE) 2016/679, texto oficial, artículos 15–22 (derechos de los interesados) y 77 (derecho a presentar una reclamación ante una autoridad de control).' }
  ], {
    texto: 'Si la AEPD tramita un procedimiento referido exclusivamente a la falta de atención de una solicitud de ejercicio de los derechos reconocidos en los artículos 15 a 22 del RGPD, ¿cuál es el plazo máximo para resolver y qué puede hacer el reclamante si se supera?',
    opciones: [
      'Tres meses; se produce la caducidad.',
      'Seis meses; se produce la caducidad.',
      'Nueve meses; se produce la caducidad.',
      'Seis meses desde la notificación del acuerdo de admisión a trámite; transcurrido ese plazo, el reclamante puede considerar estimada su reclamación.'
    ],
    respuesta_correcta: 3
  }, 'Corregida D. La respuesta original era sustancialmente correcta, pero omitía el dies a quo y podía confundirse con la caducidad de los procedimientos sancionadores del artículo 64.2. El supuesto específico del artículo 64.1 dura seis meses desde la notificación de la admisión y permite considerar estimada la reclamación.', 'corregida'],
  [7449, [30], ['I-10'], ['Real Decreto 806/2014', 'Comisión de Estrategia TIC', 'composición histórica', 'Real Decreto 1125/2024'], [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2014-9741', referencia: 'Real Decreto 806/2014, disposición adicional quinta, letra h), texto oficial consolidado: incluía en la composición inicial del Comité Ejecutivo a la Inspección General del entonces Ministerio de Hacienda y Administraciones Públicas.' },
    { url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2024-22935', referencia: 'Real Decreto 1125/2024, de 5 de noviembre: deroga el Real Decreto 806/2014 y establece el marco vigente de gobernanza TIC; la composición citada en la pregunta es histórica y no debe presentarse como vigente.' }
  ], {
    texto: 'Según la composición inicial del Comité Ejecutivo de la Comisión de Estrategia TIC establecida en la disposición adicional quinta del derogado Real Decreto 806/2014, ¿qué órgano figuraba entre sus miembros?',
    opciones: [
      'Los responsables de las unidades ministeriales de tecnologías de la información y las comunicaciones.',
      'La Inspección General del entonces Ministerio de Hacienda y Administraciones Públicas.',
      'El titular de la Secretaría de Estado de Telecomunicaciones y para la Sociedad de la Información.',
      'Representantes de las empresas del sector TIC nacional.'
    ],
    respuesta_correcta: 1
  }, 'Histórica B. La disposición adicional quinta, letra h), del Real Decreto 806/2014 identificaba a la Inspección General. Se explicita que se pregunta por la composición inicial del marco derogado: el Real Decreto 1125/2024 derogó el RD 806/2014 y configura el modelo actual, por lo que la composición antigua no es vigente.', 'historica'],
  [7450, [34, 106], ['II-12'], ['CAU', 'centro de atención a usuarios', 'punto único de contacto', 'niveles de servicio', 'gestión de incidencias'], [
    { url: 'https://www3.gobiernodecanarias.org/sanidad/scs/content/ecd54a45-b531-11ee-b053-3f315bae045b/3.%20Certificaci%C3%B3n%20Listado%20Definitivo%20Preguntas%20T%C3%A9cnico%20Titulado%20Superior%20Inform%C3%A1tica.pdf', referencia: 'Servicio Canario de la Salud, relación definitiva publicada de preguntas y respuestas de un proceso selectivo de informática: reproduce el ítem sobre los principios del CAU y señala C (“rastrear la organización para detectar posibles necesidades no cubiertas”) como respuesta correcta. Es una fuente primaria para la clave de ese examen, no una norma universal sobre CAU.' }
  ], {
    texto: 'En una pregunta oficial de selección sobre los principios de un centro de atención a usuarios (CAU), ¿qué opción se identifica como la que NO corresponde?',
    opciones: [
      'Proveer un punto de contacto único al usuario final.',
      'Disponer de información sobre niveles de servicio para mejorar el servicio proporcionado.',
      'Rastrear la organización para detectar posibles necesidades no cubiertas.',
      'Documentar las soluciones dadas a las incidencias.'
    ],
    respuesta_correcta: 2
  }, 'Histórica C. La clave oficial publicada por el Servicio Canario de la Salud confirma la respuesta esperada en este ítem. Se acota el enunciado a una pregunta de examen porque el original no citaba marco o estándar: las funciones de un CAU pueden variar y la clave de un proceso selectivo no establece por sí sola un catálogo universal de principios. La atención a usuarios, los niveles de servicio y la documentación de incidencias sí encajan con el temario y la gestión de servicios TIC.', 'historica']
];

apply({ numero: '1429', fecha: '2026-11-16', records });
