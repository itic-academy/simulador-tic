const records = [
  [736,[22],['I-9'],['Sociedad Digital en España 2022','comercio electrónico','smartphone','dato histórico'],[
    {url:'https://publicaciones.fundaciontelefonica.com/media/publicaciones/760/Sociedad_Digital_en_Espa%C3%B1a_2022.pdf',referencia:'Fundación Telefónica, Sociedad Digital en España 2022, pp. 78 y 99: el 75,4 % de quienes compraron online utilizó smartphone; la encuesta citada informa de un 50,5 % de internautas compradores en 2021, no del 80 %.'},
    {url:'https://www.ine.es/dyngs/Prensa/TICH2021.htm',referencia:'INE, Encuesta sobre Equipamiento y Uso de Tecnologías de Información y Comunicación en los Hogares 2021: datos de compras por Internet en los tres meses previos; apoya que el 80 %/32 millones no es la cifra del informe citado.'}
  ],null,'Se mantiene C y se acota la comparación a los datos que realmente atribuye el informe. El 75,4 % corresponde al uso del smartphone entre compradores online. Se sustituye el distractor sobre pymes, cuyo porcentaje depende del indicador, año y universo de empresa, por una afirmación inequívocamente falsa: el propio informe cifra en 50,5 % a los internautas que compraron en 2021, no en 29 %. También es falsa la afirmación del 80 % (32 millones). Se etiqueta como histórica por referirse a una encuesta y periodo cerrados.', 'historica'],
  [737,[22],['I-9'],['teletrabajo','ONTSI','EPA 2022','Países Bajos','dato histórico'],[
    {url:'https://www.ontsi.es/es/publicaciones/flash-datos-de-teletrabajo-2022',referencia:'ONTSI, Flash Datos de Teletrabajo 2022: en el cuarto trimestre, la proporción descendió del 13,6 % en 2021 al 12,5 % en 2022; en 2022 fue 12,6 % para mujeres y 12,5 % para hombres. La comparación europea de 2021 sitúa a Países Bajos primero con 53,8 %.'},
    {url:'https://www.ontsi.es/sites/ontsi/files/2023-04/flash-datos-de-teletrabajo-2022.pdf',referencia:'ONTSI, Flash Datos de Teletrabajo 2022, tablas 1 y 2: resultados y periodo de referencia; las cifras son históricas, no actuales.'}
  ],null,'Se mantiene D. Las tres afirmaciones coinciden con el Flash del ONTSI: descenso interanual en España en el cuarto trimestre (13,6 % a 12,5 %), diferencia prácticamente cerrada por sexo en 2022 (12,6 % mujeres y 12,5 % hombres) y máximo europeo de Países Bajos en 2021 (53,8 %). Se explicitan los periodos para no mezclar el dato anual europeo con el trimestral español. Pregunta histórica.', 'historica'],
  [738,[18],['I-6'],['brecha digital de género','ONTSI','STEM','especialistas TIC','dato histórico'],[
    {url:'https://www.ontsi.es/sites/ontsi/files/2023-03/brecha-digital-de-genero-2023.pdf',referencia:'ONTSI, Brecha digital de género 2023: el 17,8 % de la población ocupada con formación STEM son mujeres; en 2021, los especialistas TIC representan el 6,2 % del empleo masculino y el 1,7 % del femenino; el 70,3 % de las víctimas de delitos sexuales online son mujeres.'},
    {url:'https://www.ontsi.es/es/publicaciones/Brecha-digital-de-genero',referencia:'ONTSI, página de la publicación Brecha digital de género 2023: los hombres usan más Internet para juegos y escuchar música; las mujeres predominan en actividades de salud y comunicación educativa.'}
  ],null,'Se mantiene B. El informe de ONTSI respalda el 17,8 % de mujeres entre la población ocupada con formación STEM. Las otras opciones invierten o alteran sus resultados: los hombres declaran más uso para juegos y música; las mujeres son el 70,3 % de las víctimas de delitos sexuales online; y la proporción de especialistas TIC en 2021 fue 6,2 % entre hombres frente a 1,7 % entre mujeres. Se identifica el periodo y se conserva como dato histórico.', 'historica'],
  [739,[18],['I-6'],['brecha digital','factores socioeconómicos','formación','género'],[
    {url:'https://e-archivo.uc3m.es/bitstreams/f4adc621-3d7a-4cca-b9d5-9a2206c592d3/download',referencia:'Sánchez-Cuadrado, Morato Lara, Moreiro González y Palacios Madrid, Factores económicos y políticos en la brecha digital, II Conferencia Internacional sobre Brecha Digital e Inclusión Social, UC3M, 2009: examina expresamente factores económicos y políticos.'},
    {url:'https://dialnet.unirioja.es/servlet/articulo?codigo=5654166',referencia:'Cañón Rodríguez, Grande de Prado y Cantón Mayo, Brecha digital: impacto en el desarrollo social y personal. Factores asociados, Tendencias Pedagógicas 28 (2016), pp. 115–132: identifica factores socioeconómicos y destaca género, edad y formación.'}
  ],null,'Se mantiene D, precisando que es una pregunta de alcance general: los factores económicos y políticos, la formación y el sexo/género pueden asociarse a desigualdades de acceso, competencias y uso de las TIC. No son una lista exhaustiva ni un modelo causal único; la brecha digital es multifactorial y depende de la dimensión y población analizadas.', 'corregida'],
  [740,[22],['I-9'],['Brújula Digital 2030','Década Digital','cuatro puntos cardinales','infraestructuras'],[
    {url:'https://eur-lex.europa.eu/eli/dec/2022/2481/oj?locale=es',referencia:'Decisión (UE) 2022/2481, considerando 10 y art. 2: los cuatro puntos cardinales son capacidades digitales, infraestructuras digitales, digitalización de las empresas y digitalización de los servicios públicos.'},
    {url:'https://eur-lex.europa.eu/eli/dec/2022/2481/oj/eng',referencia:'EUR-Lex, Decision (EU) 2022/2481, recital 10: recoge literalmente los cuatro ámbitos del Digital Compass.'}
  ],null,'Se mantiene B. La Decisión (UE) 2022/2481 establece los cuatro ámbitos de la Década Digital: capacidades digitales, infraestructuras digitales, digitalización de las empresas y digitalización de los servicios públicos. Se ajusta el enunciado a la denominación normativa «puntos cardinales» y se evita sustituir infraestructuras por tecnologías o derechos digitales.', 'corregida']
];
const edits = {
  736: {texto:'Según los datos de comercio electrónico recogidos en Sociedad Digital en España 2022 de Fundación Telefónica, señale la afirmación correcta:', opciones:[
    'El 29 % de las personas internautas realizó compras por Internet en 2021.',
    'En España, el 80 % de las personas internautas (32 millones) realizó compras online.',
    'Entre las personas que compraron online, el 75,4 % utilizó el smartphone.',
    'Ninguna de las anteriores es correcta.'
  ]},
  737: {texto:'Según el Flash Datos de Teletrabajo 2022 del ONTSI, señale la respuesta correcta:', opciones:[
    'En España, el teletrabajo descendió del 13,6 % en el cuarto trimestre de 2021 al 12,5 % en el mismo trimestre de 2022.',
    'En 2022, el 12,6 % de las mujeres teletrabajó frente al 12,5 % de los hombres; en 2021 también fue mayor la proporción de mujeres.',
    'Países Bajos fue el Estado miembro de la UE con mayor implantación del teletrabajo en 2021.',
    'Todas las respuestas anteriores son verdaderas.'
  ]},
  738: {texto:'Según el informe Brecha digital de género 2023 del ONTSI, ¿qué afirmación es correcta?', opciones:[
    'En España, las mujeres realizan más actividades online relacionadas con el juego y la música que los hombres.',
    'En España, las mujeres representan el 17,8 % de la población ocupada con formación STEM.',
    'En España, las mujeres representan el 30 % de las víctimas de delitos sexuales online.',
    'En 2021, los especialistas TIC representaban el 6,2 % del empleo masculino y el 5,9 % del femenino.'
  ]},
  739: {texto:'¿Cuál de los siguientes factores puede influir en las desigualdades de acceso, competencias o uso de las tecnologías digitales?', opciones:[
    'La situación económica y las políticas públicas.',
    'La formación y las competencias digitales.',
    'El sexo o género, entre otros factores sociodemográficos.',
    'Todos los anteriores pueden influir, según la dimensión de brecha analizada.'
  ]},
  740: {texto:'¿Cuáles son los cuatro puntos cardinales del programa de política de la Década Digital 2030 de la Unión Europea?', opciones:[
    'Capacidades digitales, economía del dato e inteligencia artificial, transformación empresarial y servicios públicos digitales.',
    'Capacidades digitales, infraestructuras digitales, digitalización de las empresas y digitalización de los servicios públicos.',
    'Capacidades digitales, infraestructuras digitales, despliegue de 5G y digitalización de los servicios públicos.',
    'Derechos digitales, infraestructuras digitales, digitalización empresarial y servicios públicos digitales.'
  ]}
};
require('./aplicar-lote.cjs')({numero:'084',fecha:'2026-10-22',records,edits});
