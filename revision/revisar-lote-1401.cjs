const aplicar = require('./aplicar-lote.cjs');

const omt = 'https://books.google.com/books/about/Object_oriented_Modeling_and_Design.html?id=Q4ZQAAAAMAAJ';
const loomRumbaugh = 'https://link.springer.com/book/10.1007/3-540-47891-4';
const metricaAsi = 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Aad870327-56b7-4dfa-af15-e62222f45b90/METRICA_V3_Analisis_del_Sistema_de_Informacion.pdf';
const metricaDsi = 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A7f366cd1-6759-42d9-9e0b-31edce0256d9/METRICA_V3_Diseno_del_Sistema_de_Informacion.pdf';
const directive = 'https://eur-lex.europa.eu/legal-content/ES/TXT/PDF/?uri=CELEX:32019L1024';
const highValueImpl = 'https://eur-lex.europa.eu/eli/reg_impl/2023/138/oj?locale=es';
const sara = 'https://www.boe.es/buscar/act.php?id=BOE-A-2011-13173';
const jsf = 'https://docs.oracle.com/javaee/7/tutorial/jsf-intro.htm';
const spring = 'https://docs.spring.io/spring-framework/reference/overview.html';
const rails = 'https://guides.rubyonrails.org/';
const maverick = 'https://mav.sourceforge.net/';

const records = [
  [7306, [93], ['III-9'], ['OMT', 'Rumbaugh', 'modelado orientado a objetos'], [
    { url: omt, referencia: 'Ficha bibliográfica de Object-Oriented Modeling and Design (Prentice Hall, 1991): obra de James Rumbaugh, Michael Blaha, William Premerlani, Frederick Eddy y William Lorensen; la técnica se presenta como trabajo colectivo.' },
    { url: loomRumbaugh, referencia: 'Springer, actas ECOOP 1987: registra el capítulo “An Object Modeling Technique for Conceptual Design”, firmado por M. E. S. Loomis, A. V. Shah y J. E. Rumbaugh. Confirma que atribuir la técnica exclusivamente a una persona simplifica su origen.' }
  ], { texto: '¿Cuál de los siguientes autores publicó junto con otros cuatro coautores la obra de referencia Object-Oriented Modeling and Design, que expone la técnica OMT?', opciones: ['Roger Pressman.', 'James Rumbaugh.', 'Grady Booch.', 'Kent Beck.'], respuesta_correcta: 1 }, 'Corregida B. OMT suele asociarse a James Rumbaugh, pero la fórmula original «el creador» atribuye en singular una técnica desarrollada y publicada con colaboradores. La nueva redacción pregunta por un dato bibliográfico comprobable y conserva Rumbaugh como respuesta correcta, sin borrar la contribución del equipo.', 'corregida'],
  [7307, [95], ['III-4'], ['MÉTRICA v3', 'ASI', 'modelo conceptual de datos', 'modelo físico de datos'], [
    { url: metricaAsi, referencia: 'PAe, MÉTRICA v3, Análisis del Sistema de Información: ASI 6.1 elabora el modelo conceptual; ASI 6.2 obtiene el modelo lógico y ASI 6.3 lo normaliza.' },
    { url: metricaDsi, referencia: 'PAe, MÉTRICA v3, Diseño del Sistema de Información: DSI 6.1 diseña el modelo físico a partir del modelo lógico normalizado o del modelo de clases. Por tanto, el diseño físico pertenece al proceso de diseño, no al modelo conceptual elaborado en ASI.' }
  ], { texto: 'En MÉTRICA v3, ¿qué actividad corresponde al proceso de Diseño del Sistema de Información (DSI) y no a la elaboración del modelo conceptual de datos del proceso de Análisis del Sistema de Información (ASI)?', opciones: ['Estudiar el sistema de información preexistente.', 'Diseñar físicamente el modelo de datos.', 'Obtener y normalizar el modelo lógico de datos.', 'Describir de forma generalizada los procesos del sistema.'], respuesta_correcta: 1 }, 'Corregida B. Se precisa que se contraponen tareas de ASI y DSI. MÉTRICA v3 sitúa la elaboración conceptual en ASI 6.1, el modelo lógico y su normalización en ASI 6.2–6.3, y el modelo físico en DSI 6.1. La clave original era correcta, pero «dentro de un esquema de modelo conceptual» no delimitaba bien los procesos.', 'corregida'],
  [7308, [31], ['I-9'], ['datos abiertos', 'RISP', 'datos de alto valor', 'Directiva 2019/1024'], [
    { url: directive, referencia: 'Directiva (UE) 2019/1024, artículo 2.10, versión oficial en español: define los conjuntos de datos de alto valor por sus beneficios sociales, ambientales y económicos y su potencial para crear servicios de valor añadido, aplicaciones y empleos; coincide con la cita del enunciado.' },
    { url: highValueImpl, referencia: 'Reglamento de Ejecución (UE) 2023/138: establece la lista de conjuntos de datos específicos de alto valor y sus modalidades de publicación y reutilización; complementa la definición, sin alterar el término preguntado.' }
  ], null, 'Vigente A. La definición citada reproduce sustancialmente el artículo 2.10 de la Directiva (UE) 2019/1024: son conjuntos de datos de alto valor. El Reglamento de Ejecución (UE) 2023/138 concreta categorías y conjuntos específicos. La redacción y la clave original coinciden con las fuentes oficiales.', 'vigente'],
  [7309, [120], ['I-10'], ['Red SARA', 'punto de presencia', 'NTI conexión'], [
    { url: sara, referencia: 'NTI de requisitos de conexión a la Red SARA, apartados II.1.1–II.1.2: un PdP requiere sede con conexión directa y sin organización intermedia; los tipos incluyen sTESTA y, entre otros, las Ventanillas Únicas Empresariales. La norma no acredita que la Ventanilla Única Empresarial de Melilla sea o no un PdP concreto.' }
  ], null, 'Pendiente de ambigüedad. La clave original señala «Ventanilla Única empresarial de Melilla», pero la NTI incluye expresamente las Ventanillas Únicas Empresariales entre los tipos de PdP y define cada PdP por una conexión directa efectiva. El texto normativo no identifica la sede de Melilla ni permite confirmar su conexión concreta; tampoco basta para afirmar que esa instalación específica quede excluida. Se conserva en cuarentena la clave original, sin presentarla como verificada. Para resolverlo hace falta un registro técnico de PdP o evidencia oficial de la conexión directa de esa sede.', 'pendiente_ambiguedad'],
  [7310, [65], ['III-12'], ['frameworks web', 'Java', 'Ruby on Rails', 'Maverick'], [
    { url: jsf, referencia: 'Oracle Java EE Tutorial: JavaServer Faces es la tecnología Java EE para construir interfaces de usuario web.' },
    { url: spring, referencia: 'Documentación oficial Spring Framework: describe Spring como framework de Java.' },
    { url: maverick, referencia: 'Página del proyecto Maverick: se identifica expresamente como framework MVC de publicación web que usa Java y J2EE.' },
    { url: rails, referencia: 'Guías oficiales Ruby on Rails: introducción y documentación del framework Rails construido en torno al lenguaje Ruby.' }
  ], { texto: '¿Cuál de estas opciones es un framework web asociado al lenguaje Ruby, y no un framework de Java?', opciones: ['JavaServer Faces.', 'Spring Framework.', 'Ruby on Rails.', 'Maverick.'], respuesta_correcta: 2 }, 'Corregida C. La clave original también era C, pero el enunciado «NO es un framework de desarrollo en Java» era demasiado amplio: Ruby on Rails también es un framework web, aunque implementado en Ruby. La nueva formulación pregunta por la tecnología/lenguaje y las fuentes de Oracle, Spring, Maverick y Rails identifican el ecosistema de cada opción.', 'corregida']
];

aplicar({ numero: '1401', fecha: '2026-11-15', records });
