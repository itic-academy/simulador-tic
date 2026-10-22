const records = [
  [746,[18,22],[],['España Digital 2026','ejes transversales','PERTE','RETECH'],[
    {url:'https://espanadigital.gob.es/sites/espanadigital/files/2022-07/Espa%C3%B1aDigital_2026.pdf',referencia:'España Digital 2026, actualización de julio de 2022: eje 6, transformación digital de las empresas; eje 3, ciberseguridad; eje 9, competencias digitales; eje 10, derechos digitales; ejes transversales 11 y 12, PERTE y RETECH.'},
    {url:'https://portal.mineco.gob.es/RecursosNoticia/mineco/prensa/noticias/2023/I_Informe_de_Ejecucion_de_Espana_Digital_2026.pdf',referencia:'Primer informe de ejecución de España Digital 2026: la actualización articula diez ejes estratégicos y dos transversales, PERTE y RETECH.'}
  ],null,'La opción C es correcta: la actualización articula diez ejes estratégicos y dos transversales. El eje 6 es la transformación digital de las empresas; la ciberseguridad corresponde al eje 3 y competencias/derechos digitales a los ejes 9 y 10, en la dimensión de las personas. Se conserva la redacción y se identifica explícitamente la fuente y su esquema.', 'vigente'],
  [747,[18],[],['DESI 2022','capital humano','especialistas TIC','graduados TIC','datos de 2021'],[
    {url:'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52022SC0751',referencia:'Comisión Europea, informe de país de España / datos DESI 2022: especialistas TIC, 4,1 % del empleo frente al 4,5 % de la UE; titulados TIC, 4,0 % del total de titulados frente al 3,9 % de la UE. El DESI 2022 usa principalmente datos de 2021.'},
    {url:'https://digital-strategy.ec.europa.eu/en/policies/desi-spain',referencia:'Comisión Europea, página oficial de España en DESI: archivo de perfiles nacionales 2022 y 2021.'},
    {url:'https://digital-strategy.ec.europa.eu/es/policies/desi',referencia:'Comisión Europea, metodología y archivo DESI: la edición 2022 se basa principalmente en datos de 2021.'}
  ],null,'Se mantiene C. En el perfil DESI 2022, España tenía una proporción de especialistas TIC inferior a la media (4,1 % frente a 4,5 %), mientras que la de titulados TIC era ligeramente superior (4,0 % frente a 3,9 %). Son datos de la edición histórica 2022, basada principalmente en 2021; los denominadores de ambos indicadores son distintos.', 'historica'],
  [748,[18],[],['ONTSI','consumo de contenidos digitales','dispositivos','smartphone','dato de 2021'],[
    {url:'https://www.ontsi.es/sites/ontsi/files/2021-08/UsosActitudesConsumoContenidosDigitales2021.pdf',referencia:'ONTSI, Usos y actitudes de consumo de contenidos digitales en España 2021, tabla 8, p. 16: smartphone 76,7 %, ordenador 64,7 %, tableta 33,3 %, Smart TV 31,1 % y TV convencional 18,0 %.'},
    {url:'https://www.ontsi.es/es/publicaciones/Estudio-sobre-usos-y-actitudes-de-consumo-de-contenidos-digitales-en-Espana-2021',referencia:'Ficha oficial ONTSI del estudio de 2021 y su alcance: hábitos de consumo de contenidos digitales en España.'}
  ],null,'Se mantiene D. En la tabla 8 del estudio ONTSI, el smartphone es el dispositivo señalado con más frecuencia (76,7 %), por delante del ordenador (64,7 %), la tableta (33,3 %) y la Smart TV (31,1 %). Se limita expresamente la afirmación a la encuesta del informe de 2021.', 'historica'],
  [749,[18,22],[],['Década Digital 2030','Decisión (UE) 2022/2481','servicios públicos digitales','historiales médicos electrónicos','identidad digital'],[
    {url:'https://eur-lex.europa.eu/eli/dec/2022/2481/oj?locale=es',referencia:'Decisión (UE) 2022/2481, artículo 4.4: metas para 2030 de 100 % de disponibilidad en línea de servicios públicos clave, 100 % de acceso a historiales médicos electrónicos y 100 % de acceso a medios de identificación electrónica seguros reconocidos.'},
    {url:'https://eur-lex.europa.eu/eli/dec/2022/2481/oj/eng',referencia:'Decisión (UE) 2022/2481, artículo 4.4, texto oficial en inglés; el objetivo de identidad electrónica es acceso para todas las personas, no uso por el 80 %.'}
  ],null,'Se corrige: el original daba por válida la opción «todas» aunque el 80 % de uso de identidad electrónica no es el objetivo final aprobado. La Decisión (UE) 2022/2481 establece tres metas del 100 %: servicios públicos clave disponibles en línea, acceso a historiales médicos electrónicos y acceso a una identificación electrónica segura y reconocida. El 80 % corresponde a otros indicadores o propuestas previas, no a este objetivo final.', 'corregida'],
  [750,[18],[],['DESI 2021','dimensiones','conectividad','ranking histórico'],[
    {url:'https://avance.digital.gob.es/gl-es/notasprensa/paginas/informe-desi.aspx',referencia:'Secretaría de Estado de Digitalización e Inteligencia Artificial, resultados del DESI 2022: España ocupa el tercer puesto en conectividad por segundo año consecutivo, por lo que también ocupó esa posición en DESI 2021.'},
    {url:'https://digital-strategy.ec.europa.eu/es/library/digital-economy-and-society-index-desi-2021',referencia:'Comisión Europea, archivo oficial DESI 2021 y perfiles de país; edición basada principalmente en datos de 2020.'}
  ],null,'Se mantiene A, pero se concreta «mejor posicionada» como la dimensión con mejor puesto de España en el ranking DESI 2021. España fue tercera en conectividad; el Gobierno confirma que repitió el tercer puesto en DESI 2022 por segundo año consecutivo. Se trata de una clasificación histórica de la edición 2021.', 'historica']
];
const edits = {
  747:{texto:'Según los indicadores de capital humano del DESI 2022, basado principalmente en datos de 2021, ¿qué combinación describe a España frente a la media de la UE?',opciones:[
    'Por encima en especialistas TIC y titulados TIC.',
    'Por encima en especialistas TIC y por debajo en titulados TIC.',
    'Por debajo en especialistas TIC y por encima en titulados TIC.',
    'Por debajo en ambos indicadores.'
  ]},
  748:{texto:'En la encuesta del ONTSI publicada en 2021 sobre consumo de contenidos digitales en España, ¿qué dispositivo declaró utilizar con mayor frecuencia la población encuestada?',opciones:[
    'Smart TV o televisión conectada a Internet.',
    'Ordenador, de sobremesa o portátil.',
    'Tableta.',
    'Smartphone.'
  ]},
  749:{texto:'¿Qué conjunto de metas de servicios públicos digitales establece para 2030 el artículo 4.4 de la Decisión (UE) 2022/2481?',opciones:[
    'Que todos los servicios públicos clave estén disponibles en línea, toda la ciudadanía tenga acceso a sus historiales médicos electrónicos y todas las personas puedan acceder a una identificación electrónica segura y reconocida.',
    'Que el 80 % de la ciudadanía utilice una identidad electrónica y que la mitad de los servicios públicos estén disponibles en línea.',
    'Que todos los historiales médicos sean públicos y que las identificaciones electrónicas sean obligatorias.',
    'Que cada Estado miembro digitalice únicamente los servicios relacionados con la sanidad.'
  ]},
  750:{texto:'En el ranking de dimensiones del DESI 2021, ¿en cuál obtuvo España su mejor posición relativa entre los Estados miembros?',opciones:[
    'Conectividad.',
    'Uso de Internet.',
    'Servicios públicos digitales.',
    'Capital humano.'
  ]}
};
require('./aplicar-lote.cjs')({numero:'086',fecha:'2026-10-22',records,edits});
