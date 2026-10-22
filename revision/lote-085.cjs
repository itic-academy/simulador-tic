const records = [
  [741,[18,22],['I-6','I-9'],['DESI 2022','banda ancha','1 Gbps','adopción'],[
    {url:'https://ec.europa.eu/newsroom/dae/redirection/document/88760',referencia:'Comisión Europea, DESI 2022, perfil de España (edición en español), dimensión Conectividad: en los datos de 2021, la adopción de conexiones de al menos 1 Gbps era del 0,02 % en España frente al 7,58 % de la UE; la adopción de al menos 100 Mbps era 72 % frente a 41 %.'},
    {url:'https://digital-strategy.ec.europa.eu/es/library/digital-economy-and-society-index-desi-2022',referencia:'Comisión Europea, DESI 2022: indica fecha de publicación, informes por país y que los datos corresponden principalmente a 2021.'}
  ],null,'Se mantiene B. En el DESI 2022, España estaba muy por debajo de la media de la UE en adopción de banda ancha fija de al menos 1 Gbps: 0,02 % de los hogares frente a 7,58 %. La adopción de al menos 100 Mbps estaba por encima de la media (72 % frente a 41 %), por lo que el nivel de referencia y la diferencia entre cobertura y adopción importan. Se identifica como dato histórico de la edición 2022, basada principalmente en datos de 2021.', 'historica'],
  [742,[22],['I-6'],['España Digital 2026','actualización de Agenda España Digital 2025','PERTE','RETECH'],[
    {url:'https://espanadigital.gob.es/sites/espanadigital/files/2022-07/Espa%C3%B1aDigital_2026.pdf',referencia:'España Digital 2026, actualización de julio de 2022, ejes transversales: Eje 11 PERTE y Eje 12 RETECH.'},
    {url:'https://portal.mineco.gob.es/RecursosNoticia/mineco/prensa/noticias/2023/I_Informe_de_Ejecucion_de_Espana_Digital_2026.pdf',referencia:'Informe de ejecución de España Digital 2026, esquema de ejes: los ejes 11 y 12 son PERTE y RETECH, respectivamente; la actualización amplía España Digital 2025 al horizonte 2026 y la alinea con el Plan de Recuperación.'}
  ],null,'Se reformula: el original tenía varias respuestas defendibles, porque la actualización de España Digital añadió tanto PERTE (eje transversal 11) como RETECH (eje transversal 12), además de ampliar el horizonte a 2026 y alinearse con el Plan de Recuperación. Se pregunta por el par de ejes para que exista una sola respuesta correcta. Fuente: actualización oficial de julio de 2022.', 'corregida'],
  [743,[22],['I-6'],['España Digital 2025','5G','espectro radioeléctrico','meta histórica'],[
    {url:'https://portal.mineco.gob.es/es-es/comunicacion/Paginas/200723_np_digital.aspx',referencia:'Agenda España Digital 2025, eje 2: meta de que en 2025 el 100 % del espectro radioeléctrico estuviera preparado para 5G; el eje 3 fijó el 80 % de personas con competencias digitales básicas y el eje 5 el 50 % de servicios públicos disponibles mediante app.'},
    {url:'https://portal.mineco.gob.es/RecursosArticulo/mineco/prensa/ficheros/noticias/2018/Agenda_Digital_2025.pdf',referencia:'España Digital 2025, texto de la agenda y metas para 2025: conectividad para el 100 % de la población a más de 100 Mbps, espectro preparado para 5G al 100 %, competencias básicas para el 80 % y servicios públicos por app al 50 %.'}
  ],null,'Se mantiene B y se marca histórica: es el objetivo fijado por España Digital 2025 para preparar para 5G todo el espectro radioeléctrico. Las otras opciones alteran las metas oficiales: cobertura superior a 100 Mbps para el 100 % de la población, competencias digitales básicas para el 80 % y servicios públicos disponibles en app móvil para el 50 %.', 'historica'],
  [744,[18],['I-6'],['brecha digital de género','ONTSI','educación STEM','formación'],[
    {url:'https://www.ontsi.es/sites/ontsi/files/2023-03/brecha-digital-de-genero-2023.pdf',referencia:'ONTSI, Brecha digital de género 2023, sección Educación STEM: el informe describe la infrarrepresentación de mujeres y señala que solo el 17,8 % de la población ocupada con formación STEM son mujeres (datos de 2021).'},
    {url:'https://www.ontsi.es/en/node/15659',referencia:'ONTSI, ficha del informe Brecha digital de género 2023: contrasta las pequeñas diferencias de uso y teletrabajo con brechas mayores en formación STEM, empleo de especialistas y conductas inapropiadas online.'}
  ],null,'Se mantiene D, pero se cambia «principal dimensión» por una pregunta concreta sobre el ámbito formativo. ONTSI destaca la infrarrepresentación en educación STEM: en los datos de 2021, las mujeres eran el 17,8 % de la población ocupada con formación STEM. No se presenta una única clasificación ordinal universal de dimensiones de brecha.', 'historica'],
  [745,[18],['I-6'],['DESI 2022','conectividad','puesto tercero','dato histórico'],[
    {url:'https://avance.digital.gob.es/gl-es/notasprensa/paginas/informe-desi.aspx',referencia:'Secretaría de Estado de Digitalización e Inteligencia Artificial, resultados DESI 2022: España ocupa por segundo año consecutivo el tercer puesto en conectividad y el séptimo puesto global.'},
    {url:'https://digital-strategy.ec.europa.eu/es/library/digital-economy-and-society-index-desi-2022',referencia:'Comisión Europea, DESI 2022, informes nacionales de España; el índice separa capital humano, conectividad, integración de tecnología digital y servicios públicos digitales.'}
  ],null,'Se mantiene B y se marca histórica. España quedó tercera en la dimensión Conectividad del DESI 2022, por segundo año consecutivo; no era líder global en esa edición. La edición completa es un indicador histórico basado sobre todo en datos de 2021.', 'historica']
];
const edits = {
  741: {texto:'Según el DESI 2022, basado principalmente en datos de 2021, ¿en qué indicador de conectividad España estaba muy por debajo de la media de la UE?', opciones:[
    'Adopción de banda ancha fija de al menos 100 Mbps.',
    'Adopción de banda ancha fija de al menos 1 Gbps.',
    'Cobertura 4G.',
    'Cobertura 5G.'
  ]},
  742: {texto:'¿Qué dos ejes transversales incorporó la actualización de España Digital al horizonte 2026?', opciones:[
    'Los ejes PERTE y RETECH.',
    'Los ejes Kit Digital y España Hub Audiovisual.',
    'Los ejes Mi Carpeta Ciudadana y App Factory.',
    'Los ejes 5G y Conectividad Digital.'
  ]},
  743: {texto:'¿Cuál de las siguientes metas fijó España Digital 2025 para el despliegue de 5G?', opciones:[
    'Dar cobertura de 100 Mbps al 90 % de la población.',
    'Preparar para 5G el 100 % del espectro radioeléctrico.',
    'Lograr competencias digitales básicas para el 90 % de las personas.',
    'Ofrecer el 75 % de los servicios públicos a través de app móvil.'
  ]},
  744: {texto:'¿En qué ámbito formativo destaca el ONTSI la infrarrepresentación de las mujeres en su informe Brecha digital de género 2023?', opciones:[
    'En el uso general de Internet.',
    'En el teletrabajo.',
    'En las compras por comercio electrónico.',
    'En la formación en ciencia, tecnología, ingeniería y matemáticas (STEM).'
  ]},
  745: {texto:'En el DESI 2022, ¿en qué dimensión España ocupó el tercer puesto de la UE por segundo año consecutivo?', opciones:[
    'Capital humano.',
    'Conectividad.',
    'Integración de la tecnología digital.',
    'Servicios públicos digitales.'
  ]}
};
require('./aplicar-lote.cjs')({numero:'085',fecha:'2026-10-22',records,edits});
