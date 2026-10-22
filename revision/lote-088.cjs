const records = [
  [756,[18],[],['brecha digital','acceso material','competencias digitales','Van Dijk'],[
    {url:'https://www.sciencedirect.com/science/article/pii/S0304422X06000167',referencia:'Jan A. G. M. van Dijk, “Digital divide research, achievements and shortcomings”, Poetics 34 (2006), 221–235, DOI 10.1016/j.poetic.2006.05.004. El artículo clasifica el acceso en cuatro tipos sucesivos: motivacional, físico/material, habilidades y uso.'},
    {url:'https://www.utwente.nl/en/bms/vandijk/research/digital_divide/a_framework_for_digital_divide/',referencia:'Universidad de Twente, marco de Jan van Dijk: diferencia el acceso material (posesión de equipos y conexión) del acceso a habilidades digitales (formación, apoyo y competencias de uso).'}
  ],null,'Se corrige el enunciado: la pregunta original preguntaba qué factor no guardaba relación con la brecha digital, aunque las cuatro opciones pueden contribuir a ella. Se pregunta ahora cuál se refiere específicamente al componente de habilidades; el conocimiento de software es la única opción de esa categoría. Infraestructura y capacidad económica corresponden sobre todo al acceso material; género es un factor social que atraviesa las dimensiones. La tipología es un marco académico concreto, no una clasificación universal única.','corregida'],
  [757,[18],[],['DESI 2022','España','datos abiertos','servicios públicos digitales','capital humano'],[
    {url:'https://datos.gob.es/es/noticias/espana-continua-por-delante-de-la-ue-en-materia-digital-segun-el-ultimo-informe-desi',referencia:'Portal oficial datos.gob.es, “España continúa por delante de la UE en materia digital, según el último informe DESI” (11-08-2022): España ocupa el quinto puesto en servicios públicos digitales y el tercero en datos abiertos, con un 95 % frente al 81 % de media.'},
    {url:'https://ec.europa.eu/newsroom/dae/redirection/document/88760',referencia:'Comisión Europea, Digital Economy and Society Index 2022, perfil de España, dimensión Human Capital: titulados TIC 4,0 % en España y 3,9 % en la UE (dato 2020). Es una fotografía estadística del DESI 2022, no un dato actual.'},
    {url:'https://digital-strategy.ec.europa.eu/en/library/digital-economy-and-society-index-desi-2022',referencia:'Comisión Europea, página oficial del DESI 2022 y de sus informes por país; contextualiza el índice como edición de 2022.'}
  ],null,'Se conserva D: las tres afirmaciones A–C son correctas en el DESI 2022. El informe de la Comisión registra 4,0 % de titulados TIC en España frente a 3,9 % en la UE; datos.gob.es sitúa a España tercera en datos abiertos y quinta en servicios públicos digitales. Se marca histórica porque las posiciones y porcentajes corresponden a esa edición y periodo de datos.', 'historica'],
  [758,[18],[],['Web 2.0','blogs','redes sociales','sindicación de contenidos'],[
    {url:'https://www.oreilly.com/pub/a/web2/archive/what-is-web-20.html?page=all',referencia:'Tim O’Reilly, “What Is Web 2.0” (30-09-2005): presenta blogs como evolución de las páginas personales y sindicación frente a retener visitas; explica el paso de publicar a participar. El propio autor advierte que el término no tiene una definición consensuada.'},
    {url:'https://www.pewresearch.org/internet/2006/10/05/riding-the-waves-of-web-2-0/',referencia:'Pew Internet & American Life Project, “Riding the Waves of Web 2.0” (2006): emplea Web 2.0 como paraguas conceptual para actividades participativas, incluidos blogs y redes sociales; señala que el término es una etiqueta amplia.'}
  ],null,'Se reformula el enunciado para evitar la negación ambigua y el desacuerdo gramatical del original. Blogs, redes sociales/plataformas de vídeo y sindicación se consideran ejemplos habituales asociados al concepto histórico de Web 2.0, por lo que D sigue siendo correcta. No existe una norma técnica que fije una lista cerrada de tecnologías Web 2.0; se marca histórica/conceptual.', 'historica'],
  [759,[18],[],['España Digital 2025','agenda digital','ejes estratégicos','política digital'],[
    {url:'https://www.lamoncloa.gob.es/presidente/actividades/paginas/2020/230720-sanchezdigital.aspx',referencia:'La Moncloa, presentación de España Digital 2025 (23-07-2020): la agenda articula cerca de 50 medidas en torno a diez ejes estratégicos; el Gobierno no presenta el número 48 como recuento oficial exacto.'},
    {url:'https://www.lamoncloa.gob.es/presidente/actividades/Documents/2020/230720-Espa%C3%B1aDigital_2025.pdf',referencia:'Documento oficial España Digital 2025: describe la agenda y sus diez ejes estratégicos; las medidas se presentan como un conjunto aproximado de cincuenta.'}
  ],null,'Se conserva la respuesta A, pero se corrige el supuesto de que existían exactamente 48 medidas: la presentación oficial habla de «cerca de 50». La pregunta pasa a pedir solo el número de ejes estratégicos. Se marca histórica porque se refiere a la agenda y horizonte España Digital 2025.', 'historica'],
  [760,[18],[],['Horizonte Europa','Horizon Europe','investigación e innovación','Unión Europea'],[
    {url:'https://research-and-innovation.ec.europa.eu/funding/funding-opportunities/funding-programmes-and-open-calls/horizon-europe_en',referencia:'Comisión Europea, programa Horizonte Europa: programa marco de investigación e innovación de la UE para el periodo 2021–2027.'},
    {url:'https://eur-lex.europa.eu/eli/dec/2021/764/oj',referencia:'Decisión (UE) 2021/764 del Consejo, de 10 de mayo de 2021, por la que se establece el programa específico de ejecución de Horizonte Europa y se deroga la Decisión 2013/743/UE.'}
  ],null,'Se conserva B. La Comisión Europea identifica Horizonte Europa como el programa marco de investigación e innovación de la Unión para 2021–2027; la Decisión (UE) 2021/764 establece su programa específico. El nombre Horizonte 2020 corresponde al programa anterior.', 'vigente']
];
const edits = {
  756:{texto:'En el modelo de acceso a las tecnologías digitales de Jan van Dijk, ¿cuál de estos factores corresponde específicamente al acceso a habilidades?',opciones:[
    'La calidad de las infraestructuras y de la conexión disponibles.',
    'La capacidad económica de los hogares para adquirir equipos y conectividad.',
    'La desigualdad de género en oportunidades y usos digitales.',
    'Los conocimientos necesarios para manejar programas y servicios digitales.'
  ]},
  758:{texto:'En el uso habitual del término histórico «Web 2.0», ¿qué opción reúne ejemplos de participación y consumo de información asociados a ese concepto?',opciones:[
    'Los blogs.',
    'Las redes sociales y las plataformas para compartir vídeos.',
    'La sindicación de contenidos.',
    'Todas las anteriores.'
  ]},
  759:{texto:'¿Cuántos ejes estratégicos articulaban España Digital 2025?',opciones:[
    'Diez ejes estratégicos.',
    'Doce ejes estratégicos.',
    'Ocho ejes estratégicos.',
    'Quince ejes estratégicos.'
  ]}
};
require('./aplicar-lote.cjs')({numero:'088',fecha:'2026-10-22',records,edits});
