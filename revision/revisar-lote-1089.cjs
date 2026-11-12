const aplicar=require('./aplicar-lote.cjs');
const ref=(url,referencia)=>({url,referencia});
const ig='https://contrataciondelestado.es/wps/wcm/connect/PLACE_es/Site/area/docAccCmpnt?DocumentIdParam=1422c044-f216-4045-8a18-3b448126a33c&cmpntname=GetDocumentsById&source=library&srv=cmpnt';
const sorolla='https://administracionelectronica.gob.es/ctt/sorolla2';
const scrum='https://scrumguides.org/scrum-guide.html';
const gan='https://papers.nips.cc/paper/2014/hash/f033ed80deb0234979a61f95710dbe25-Abstract.html';
const uja='https://crea.ujaen.es/items/bb00f8d3-b956-44e0-83c2-27a09a72e7a4';
const openstax='https://openstax.org/books/principles-finance-2e/pages/16-4-alternative-methods';
const risp='https://eur-lex.europa.eu/eli/dir/2019/1024/oj?locale=es';
const boeRisp='https://www.boe.es/buscar/doc.php?id=DOUE-L-2019-81091';
const backbone='https://backbonejs.org/';
const ember='https://emberjs.com/';
const angular='https://angular.dev/docs';
const unit='https://unitjs.com/';
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const records=[
 [5766,[37,88],['III-2'],['SOROLLA2','IGAE','Scrum','sprints','gestión ágil'],[
  ref(ig,'Documento contractual publicado en la Plataforma de Contratación del Sector Público para los sistemas IGAE: describe SOROLLA2 y una metodología ágil de desarrollo basada en Scrum, gestionada con Redmine.'),
  ref(sorolla,'Portal CTT de la Administración General del Estado: ficha oficial de SOROLLA2 como solución de la IGAE para gestión económico-presupuestaria.'),
  ref(scrum,'Scrum Guide 2020, guía oficial: Scrum se define como framework (marco de trabajo) ligero para generar valor mediante soluciones adaptativas a problemas complejos; usa Sprints.'),
  ref(a1,'Convocatoria GSI A1 2025, temas 37 (metodologías ágiles) y 88 (Scrum/Kanban en desarrollo de sistemas).'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, III.2: gestión/planificación de proyectos y metodologías de desarrollo.'),
 ],null,'Corregida, respuesta A (Scrum). Se reformula «metodología» como marco ágil y se acota la afirmación a la documentación contractual consultada: el pliego de la IGAE para sus sistemas incluye SOROLLA2 y describe una metodología ágil basada en Scrum, con Redmine. La ficha CTT confirma el contexto de SOROLLA2, pero no es la fuente de la práctica Scrum. No se infiere que todos los componentes ni toda la operación SaaS usen una única metodología. A1-37/A1-88/A2-III.2.','corregida'],
 [5767,[70],['III-5'],['GAN','red generativa adversaria','generador','discriminador','inteligencia artificial'],[
  ref(gan,'Goodfellow et al., NeurIPS 2014, artículo original «Generative Adversarial Nets»: propone entrenar dos modelos, G generador y D discriminador; G aprende la distribución de datos y D distingue muestras reales de las generadas.'),
  ref(a1,'Convocatoria GSI A1 2025, tema 70: inteligencia artificial, machine learning, deep learning y redes neuronales.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, III.5: fundamentos de IA, tecnologías asociadas y áreas de aplicación.'),
 ],null,'Vigente, respuesta A. GAN significa generative adversarial network (red generativa adversaria): el generador produce muestras y el discriminador estima si proceden de los datos reales o del generador. Se corrigen erratas gramaticales del enunciado y de la opción sin cambiar la clave. A1-70/A2-III.5.','vigente'],
 [5768,[42],['II-15'],['índice de rentabilidad','métodos dinámicos','flujos descontados','VAN','pay-back'],[
  ref(uja,'Universidad de Jaén, Tema 8 de valoración de inversiones: distingue métodos estáticos de criterios dinámicos; analiza VAN/TIR e índice de rentabilidad, basado en flujos actualizados.'),
  ref(openstax,'OpenStax, Principles of Finance 2e, §16.4: el índice de rentabilidad usa los mismos flujos descontados que el VAN; el payback ordinario ignora el valor temporal del dinero, mientras que el descontado es una variante diferenciada.'),
  ref(a1,'Convocatoria GSI A1 2025, tema 42: rentabilidad de las inversiones en proyectos TIC.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, II.15: evaluación de alternativas y análisis de viabilidad.'),
 ],null,'Corregida, respuesta B (índice de rentabilidad). Se acota el enunciado a criterios que descuentan flujos para reflejar el valor temporal del dinero. El índice de rentabilidad es dinámico; la tasa contable y la rentabilidad media son estáticas. «Pay-back» sin el calificativo descontado suele designar el plazo de recuperación simple, estático; para evitar la ambigüedad con el payback descontado se explicita esa distinción. A1-42/A2-II.15.','corregida'],
 [5769,[25,31],['I-9'],['reutilización','datos abiertos','digitalización','recursos culturales','exclusividad'],[
  ref(risp,'Directiva (UE) 2019/1024, artículo 12.3: regla general de máximo diez años de exclusividad; si supera ese plazo, revisión en el undécimo año y, en su caso, cada siete; los acuerdos deben ser transparentes y públicos y se entrega gratuitamente copia digital al organismo público, reutilizable al acabar la exclusividad.'),
  ref(boeRisp,'Publicación en el DOUE reproducida en BOE, Directiva (UE) 2019/1024, art. 12.3, texto oficial en español.'),
  ref(a1,'Convocatoria GSI A1 2025, temas 25 (gobierno abierto/datos abiertos) y 31 (reutilización de la información del sector público).'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, I.9: datos abiertos y normativa vigente de reutilización de información del sector público.'),
 ],null,'Vigente, respuesta D (todas son ciertas). Se identifica expresamente el artículo 12.3 de la Directiva (UE) 2019/1024, norma vigente aplicable a estos acuerdos. La regla es «por regla general» hasta diez años; si se supera, revisión durante el undécimo y, si procede, cada siete años. El acuerdo debe ser transparente y público, y el organismo público recibe gratuitamente una copia reutilizable al finalizar la exclusividad. Se corrige la errata del original sin alterar la clave. A1-25/A1-31/A2-I.9.','vigente'],
 [5770,[65],['III-12'],['JavaScript','frameworks front-end','Unit.js','pruebas unitarias','Angular','Backbone','Ember'],[
  ref(unit,'Unit.js, sitio oficial: librería de aserciones JavaScript para pruebas unitarias en Node.js y navegador; funciona con runners/frameworks de test como Mocha, Jasmine, Karma o QUnit.'),
  ref(backbone,'Sitio oficial de Backbone.js: proporciona estructura a aplicaciones web JavaScript mediante modelos, colecciones y vistas.'),
  ref(ember,'Sitio oficial de Ember.js: framework JavaScript para crear aplicaciones web modernas.'),
  ref(angular,'Documentación oficial Angular: framework de desarrollo para construir aplicaciones web.'),
  ref(a1,'Convocatoria GSI A1 2025, tema 65: desarrollo web front-end, scripts de cliente y frameworks.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, III.12: desarrollo web front-end y componentes tecnológicos.'),
 ],null,'Corregida, respuesta C (Unit.js). El original mezclaba herramientas de aplicación front-end con una herramienta de pruebas. Se pregunta qué opción es una librería de aserciones para pruebas unitarias y no un framework para construir la aplicación: Unit.js. Backbone, Ember y Angular se usan para estructurar/construir aplicaciones web (aunque difieren en alcance y clasificación técnica). A1-65/A2-III.12.','corregida'],
];
const edits={
 5766:{texto:'Según la documentación contractual de la IGAE consultada para el desarrollo de SOROLLA2, ¿qué marco de trabajo ágil se emplea?',opciones:['Scrum, organizado en sprints.','MÉTRICA v3 como marco ágil de desarrollo iterativo.','Lean como método expresamente indicado para este proyecto.','DSDM como marco expresamente indicado para este proyecto.'],respuesta_correcta:0},
 5767:{texto:'En inteligencia artificial, ¿qué caracteriza a una red generativa adversaria (GAN)?',opciones:['Entrena dos modelos en competencia: un generador que produce muestras y un discriminador que intenta distinguir las muestras reales de las generadas.','Es el grupo de alto nivel encargado de propugnar principios éticos para los algoritmos de IA.','Es una arquitectura de red neuronal exclusiva para el tratamiento de audio.','Ninguna de las anteriores.'],respuesta_correcta:0},
 5768:{texto:'¿Cuál de los siguientes criterios de valoración de inversiones es dinámico porque utiliza flujos de caja actualizados?',opciones:['Tasa de rendimiento contable.','Índice de rentabilidad.','Rentabilidad media contable.','Pay-back simple (no descontado).'],respuesta_correcta:1},
 5769:{texto:'Según el artículo 12.3 de la Directiva (UE) 2019/1024, sobre derechos exclusivos relacionados con la digitalización de recursos culturales:',opciones:['La exclusividad no superará, por regla general, diez años; si excede ese plazo, se revisará durante el undécimo año y, si procede, cada siete años a partir de entonces.','Los acuerdos de exclusividad serán transparentes y se pondrán en conocimiento del público.','Se facilitará gratuitamente una copia de los recursos culturales digitalizados al organismo del sector público, que podrá reutilizarla una vez terminado el período de exclusividad.','Todas las anteriores son correctas.'],respuesta_correcta:3},
 5770:{texto:'¿Cuál de estas herramientas JavaScript se orienta a las pruebas unitarias, no a construir la aplicación web front-end?',opciones:['Backbone.js, que aporta estructura a aplicaciones web mediante modelos, colecciones y vistas.','Ember.js, framework para crear aplicaciones web.','Unit.js, librería de aserciones para pruebas unitarias en JavaScript.','Angular, framework de desarrollo de aplicaciones web.'],respuesta_correcta:2}
};
aplicar({numero:'1089',fecha:'2026-11-12',records,edits});
