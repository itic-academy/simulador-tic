const records = [
  [821,[76,77],['III-12'],['Web Semántica','RDF','OWL','XML','MADL','ontologías'],[
    {url:'https://www.w3.org/OWL/',referencia:'W3C, OWL Web Ontology Language: define OWL como lenguaje de la Web Semántica y sitúa RDF/RDFS en la pila tecnológica.'},
    {url:'https://www.w3.org/TR/REC-rdf-syntax/',referencia:'W3C Recommendation, RDF/XML Syntax Specification: RDF es un lenguaje de propósito general para representar información en la Web y RDF/XML una sintaxis XML para grafos RDF.'},
    {url:'https://www.w3.org/TR/xml/',referencia:'W3C Recommendation, XML 1.0: XML define una clase general de documentos y un formato de marcado; la especificación no lo define como lenguaje de ontologías.'}
  ],null,'Pendiente de ambigüedad. OWL y RDF son tecnologías/lenguajes de la Web Semántica; XML es un estándar general de marcado y puede serializar RDF, pero por sí solo no expresa una ontología. No se ha localizado qué significa «MADL» en el temario o fuente de origen; sin esa expansión no se puede certificar que sea la única respuesta ajena al conjunto pretendido. Se conserva enunciado y clave.','pendiente_ambiguedad'],
  [822,[70],['III-5'],['redes semánticas','inteligencia artificial','herencia','emparejamiento','inferencia'],[
    {url:'https://www.jfsowa.com/pubs/semnet.htm',referencia:'John F. Sowa, Semantic Networks (artículo revisado para Encyclopedia of Artificial Intelligence): describe las redes como grafos de conceptos y relaciones, y la herencia como un mecanismo de inferencia en jerarquías de generalización.'},
    {url:'https://plato.stanford.edu/entries/reasoning-defeasible/',referencia:'Stanford Encyclopedia of Philosophy, Defeasible Reasoning: expone que existen distintas teorías y mecanismos de inferencia sobre redes de herencia semántica, con alcance y reglas propios.'}
  ],null,'Pendiente de ambigüedad. La herencia sí es un mecanismo clásico en redes semánticas, pero «emparejamiento» y la afirmación de que esos son los mecanismos de inferencia dependen del modelo o texto didáctico empleado. El enunciado no identifica ese marco y la opción B no define con precisión qué se empareja. Se conserva clave y texto hasta hallar la fuente de academia o reformular el marco de referencia.','pendiente_ambiguedad'],
  [823,[71],['III-5'],['ciencia de datos','modelos predictivos','análisis bayesiano','regresión lineal','SVM','aprendizaje automático'],[
    {url:'https://scikit-learn.org/stable/modules/linear_model.html',referencia:'scikit-learn User Guide, Linear Models: documenta regresión lineal ordinaria y regresión bayesiana como métodos para ajustar modelos.'},
    {url:'https://scikit-learn.org/stable/modules/svm.html',referencia:'scikit-learn User Guide, Support Vector Machines: describe SVC para clasificación y SVR para regresión como métodos de aprendizaje supervisado.'}
  ],null,'Se sustituye «modelado de datos», que también puede referirse al diseño de estructuras de datos, por modelización predictiva en ciencia de datos. Regresión lineal, regresión bayesiana y máquinas de vectores de soporte son familias de métodos utilizables para construir modelos, aunque la elección depende del problema y los datos. Por ello la opción D es correcta con este alcance.','corregida'],
  [824,[73],['III-12'],['Moodle','LMS','e-learning','gestión del aprendizaje','CMS'],[
    {url:'https://docs.moodle.org/500/en/About_Moodle',referencia:'MoodleDocs, About Moodle: presenta Moodle como sistema de gestión del aprendizaje (LMS) para educadores, administradores y alumnos.'}
  ],null,'Se corrige la categoría del enunciado: Moodle se define oficialmente como un sistema de gestión del aprendizaje (LMS), no simplemente como un CMS genérico. Con esa precisión, Moodle es la única opción orientada específicamente a la enseñanza; WordPress y Magnolia son CMS de propósito general y Pixelpost se orienta a blogs fotográficos.','corregida'],
  [825,[74],[],['geocodificación','georreferenciación','proyección cartográfica','OGC','simbología','servicio de localización'],[
    {url:'https://portal.ogc.org/files/?artifact_id=3839',referencia:'OpenGIS Location Services (OpenLS), OGC 03-006r1, §9.3: define el geocodificador como servicio que obtiene una posición geográfica a partir de nombre de lugar, dirección o código postal; puede devolver una o varias coincidencias.'},
    {url:'https://ogcapi.ogc.org/maps/overview.html',referencia:'OGC API - Maps, Overview: los estilos se aplican al representar datos geográficos como mapas; la simbología pertenece a la representación/portrayal y no a la operación de geocodificación.'},
    {url:'https://gisco-services.ec.europa.eu/addressapi/docs/',referencia:'Comisión Europea, GISCO Address API: describe la geocodificación como conversión de direcciones a coordenadas geográficas y la geocodificación inversa como la conversión de coordenadas a direcciones legibles.'}
  ],null,'Se reemplaza la mezcla de «proyecciones» y «georreferenciación directa» por geocodificación. Esta busca una posición a partir de un topónimo, dirección o código; la proyección cartográfica transforma coordenadas entre una superficie y un plano, y la simbolización describe la representación visual. La afirmación sobre reglas de simbolización es, por tanto, la falsa.','corregida']
];

const edits = {
  823:{texto:'¿Cuál de los siguientes métodos puede emplearse para construir modelos predictivos en ciencia de datos?',opciones:[
    'Análisis bayesiano, por ejemplo mediante regresión bayesiana.',
    'Regresión lineal.',
    'Máquinas de vectores de soporte (SVM), para clasificación o regresión.',
    'Todos los métodos anteriores pueden emplearse, según el problema y los datos.'
  ],respuesta_correcta:3},
  824:{texto:'¿Cuál de los siguientes es un sistema de gestión del aprendizaje (LMS) orientado a la enseñanza en línea?',opciones:[
    'WordPress.',
    'Magnolia.',
    'Pixelpost.',
    'Moodle.'
  ],respuesta_correcta:3},
  825:{texto:'Sobre la geocodificación directa, ¿cuál de las siguientes afirmaciones es falsa?',opciones:[
    'Puede obtener una posición geográfica a partir de un topónimo, una dirección o un código postal.',
    'Según el servicio, una consulta puede devolver más de una coincidencia posible.',
    'Consiste en describir las reglas de simbolización visual con que se representan los fenómenos geográficos en un mapa.',
    'La geocodificación inversa parte de una posición geográfica para obtener una descripción textual del lugar.'
  ],respuesta_correcta:2}
};

require('./aplicar-lote.cjs')({numero:'101',fecha:'2026-10-22',records,edits});
