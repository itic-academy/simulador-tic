const apply = require('./aplicar-lote.cjs');

const sources = {
  powerbi: [
    { url: 'https://learn.microsoft.com/en-us/power-bi/fundamentals/power-bi-overview', referencia: 'Microsoft Learn, What is Power BI?: plataforma de analítica empresarial con herramientas integradas para conectar, visualizar y compartir datos; incluye visuales e informes.' }
  ],
  mining: [
    { url: 'https://scikit-learn.org/stable/getting_started.html', referencia: 'Scikit-learn, Getting Started: distingue aprendizaje supervisado y no supervisado; en el primero se ajusta con una salida objetivo, mientras que en el segundo no hay una etiqueta objetivo explícita.' },
    { url: 'https://scikit-learn.org/stable/supervised_learning.html', referencia: 'Scikit-learn User Guide, Supervised learning: describe tareas y estimadores supervisados.' },
    { url: 'https://scikit-learn.org/stable/unsupervised_learning.html', referencia: 'Scikit-learn User Guide, Unsupervised learning: describe métodos para hallar estructura en datos sin etiquetas objetivo.' }
  ],
  crm: [
    { url: 'https://www.salesforce.com/crm/types-of-crm/', referencia: 'Salesforce, What Are the 4 Types of CRM?: caracteriza CRM analítico por recopilar y analizar datos de clientes para conocer conductas y apoyar decisiones; contrasta con el CRM operacional y colaborativo.' }
  ],
  mooc: [
    { url: 'https://www.coursera.org/articles/what-is-coursera', referencia: 'Coursera, What Is Coursera?: la propia plataforma se define como plataforma global de aprendizaje en línea que ofrece cursos en línea.' },
    { url: 'https://www.mooc.uzh.ch/en/enrolment.html', referencia: 'University of Zurich, How Can You Participate?: indica que la inscripción a sus MOOCs se realiza mediante la plataforma MOOC Coursera.' }
  ],
  inspire: [
    { url: 'https://knowledge-base.inspire.ec.europa.eu/overview_en', referencia: 'Comisión Europea, INSPIRE Knowledge Base, Overview: enumera los principios de INSPIRE, incluida la disponibilidad fácil y transparente de información geográfica necesaria para la gobernanza; los datos deben mantenerse donde puedan gestionarse con más eficacia, no necesariamente en el nivel territorial más próximo.' },
    { url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007L0002', referencia: 'Directiva 2007/2/CE (INSPIRE), arts. 1, 7 y 11: establece infraestructura para información espacial e interoperabilidad, así como servicios de descubrimiento, visualización, descarga y transformación; no obliga a que todos los datos sean gratuitos.' }
  ]
};

const records = [
  [1381, [28], ['II-4'], ['Power BI', 'Business Intelligence', 'visualización de datos', 'analítica'], sources.powerbi, null,
    'La clave D es correcta: Power BI ofrece herramientas para conectar, analizar, visualizar y compartir datos empresariales. Se corrige el error tipográfico «lntelligence» (ele minúscula) por «Intelligence» y se completa el nombre del producto. FileZilla es un cliente de transferencia de archivos, JMeter prueba rendimiento y Artifactory gestiona artefactos. Cotejo temático con ITIC Academy: bloque 32, «Inteligencia artificial y ciencia de datos», versión 2026, apartado de visualización/BI. Correspondencia oficial: A1-28 y A2-II-4.', 'corregida'],
  [1382, [70], ['III-15'], ['minería de datos', 'aprendizaje supervisado', 'aprendizaje no supervisado', 'etiquetas'], sources.mining, null,
    'Se acota la pregunta a una clasificación introductoria según haya o no una variable objetivo etiquetada. En ese marco, la pareja es aprendizaje supervisado y no supervisado. No se presenta como una taxonomía exhaustiva: hay otras familias y variantes, como el aprendizaje por refuerzo o el semisupervisado. Cotejo con ITIC Academy: bloque 32, «Inteligencia artificial y ciencia de datos», versión 2026, apartados de minería de datos y aprendizaje automático. Correspondencia oficial: A1-70 y A2-III-15.', 'corregida'],
  [1383, [29], ['II-12', 'II-4'], ['CRM', 'CRM analítico', 'análisis de clientes', 'toma de decisiones'], sources.crm, null,
    'La respuesta A es correcta en la clasificación habitual: el CRM analítico recopila y analiza datos de clientes para obtener conocimiento útil para decisiones; el operacional automatiza interacciones y procesos, y el colaborativo facilita el intercambio entre áreas y agentes. Se añade «en la clasificación habitual» porque estas categorías describen enfoques funcionales y pueden coexistir en una misma plataforma. Cotejo con ITIC Academy: bloque 30, «Tecnologías de sistemas de información», versión 2026.1, CRM/ERP. Correspondencia oficial: A1-29 y A2-II-12; el uso analítico se relaciona además con A2-II-4.', 'corregida'],
  [1384, [73], ['III-6'], ['MOOC', 'Coursera', 'formación en línea', 'e-learning'], sources.mooc, null,
    'La respuesta B es correcta: Coursera ofrece cursos masivos abiertos en línea. Se reformula el enunciado para distinguir un proveedor/plataforma de MOOC de Moodle y Blackboard, que son principalmente sistemas de gestión del aprendizaje, y Canva, que es una herramienta de diseño; «soporte de un MOOC» era demasiado impreciso. Cotejo con ITIC Academy: bloque 33, «E-Learning y sistemas de información geográfica», versión 2026.1 (31-07-2026), apartados de plataformas actuales. Correspondencia oficial: A1-73 y, por formación de usuarios y métodos, A2-III-6.', 'corregida'],
  [1385, [74], ['I-9'], ['INSPIRE', 'información geográfica', 'disponibilidad', 'interoperabilidad', 'Directiva 2007/2/CE'], sources.inspire, null,
    'La opción B expresa uno de los principios de INSPIRE: la información geográfica necesaria para la gobernanza debe ser fácilmente y transparentemente accesible. Se precisa que esto no significa acceso irrestricto o gratuito para todos los conjuntos: la Directiva prevé condiciones y excepciones. También se rechaza la afirmación absoluta de que los datos deban mantenerse siempre en el nivel territorial más próximo; el principio europeo dice que deben mantenerse donde puedan gestionarse con mayor eficacia. Cotejo con ITIC Academy: bloque 33, «E-Learning y sistemas de información geográfica», versión 2026.1 (31-07-2026), §2.8 y referencias a INSPIRE. Correspondencia oficial: A1-74 y A2-I-9.', 'corregida']
];

apply({ numero: '213', fecha: '2026-10-24', records, edits: {
  1381: { texto: '¿Cuál de las siguientes herramientas permite visualizar y compartir datos en un proyecto de inteligencia empresarial (Business Intelligence)?' },
  1382: {
    texto: 'En una clasificación introductoria de los métodos de aprendizaje usados en minería de datos, ¿qué pareja distingue los casos con una variable objetivo etiquetada de los que no la tienen?',
    respuesta_correcta: 1
  },
  1383: { texto: 'En la clasificación habitual de los sistemas CRM, ¿qué tipo analiza los datos de clientes para generar conocimiento que apoye la toma de decisiones?' },
  1384: { texto: '¿Cuál de estas opciones ofrece cursos masivos abiertos en línea (MOOC) mediante una plataforma de aprendizaje en línea?' },
  1385: {
    texto: '¿Cuál de las siguientes afirmaciones reproduce un principio de la Directiva INSPIRE sobre la información geográfica?',
    opciones: [
      'Los datos deben mantenerse siempre en el nivel administrativo más cercano al territorio, aunque otro nivel pueda mantenerlos con mayor eficacia.',
      'La información geográfica necesaria para la gobernanza debe poder localizarse y estar disponible de forma fácil y transparente, con sujeción a las condiciones aplicables.',
      'La información espacial de distintos orígenes no debe poder combinarse sin intervención manual repetida.',
      'Todos los conjuntos de datos espaciales deben ser gratuitos y de acceso irrestricto.'
    ],
    respuesta_correcta: 1
  }
}});
