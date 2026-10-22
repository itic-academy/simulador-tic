const records = [
  [751,[18,22],[],['Consejo Consultivo para la Transformación Digital','Orden ETD/920/2020','gobernanza','composición'],[
    {url:'https://www.boe.es/buscar/act.php?id=BOE-A-2020-11489',referencia:'Orden ETD/920/2020, texto consolidado, artículo 4.1–6: composición, presidencia, vicepresidencias y secretaría del Consejo Consultivo para la Transformación Digital. La Secretaría corresponde a la Subdirección General de Ordenación de las Telecomunicaciones o a un funcionario de esa Subdirección en quien delegue.'},
    {url:'https://www.boe.es/eli/es/o/2020/09/28/etd920/dof/spa/pdf',referencia:'Publicación oficial original en el BOE, de 1 de octubre de 2020, artículo 4. La estructura administrativa y las denominaciones se tratan como referencia histórica.'}
  ],null,'Se conserva D como falsa, pero se cita expresamente la Orden ETD/920/2020. El artículo 4 dispone que la Secretaría la ejerce la persona titular de la Subdirección General de Ordenación de las Telecomunicaciones o una persona funcionaria de esa Subdirección en quien delegue; no la Secretaría General de Administración Digital. Se etiqueta como referencia histórica de organización y nomenclatura ministerial.', 'historica'],
  [752,[18],[],['Plan de Recuperación, Transformación y Resiliencia','PRTR','ejes transversales','políticas públicas'],[
    {url:'https://www.lamoncloa.gob.es/presidente/actividades/Documents/2020/07102020_PreguntasRespuestasPR.pdf',referencia:'Gobierno de España, preguntas y respuestas sobre el PRTR: enumera sus cuatro ejes transversales —transición ecológica, transformación digital, cohesión territorial y social, e igualdad de género— y las diez políticas palanca.'},
    {url:'https://www.lamoncloa.gob.es/consejodeministros/Paginas/enlaces/270421-enlace-plan.aspx',referencia:'Gobierno de España, presentación del Plan de Recuperación, Transformación y Resiliencia: confirma los cuatro ejes y diez políticas palanca.'}
  ],null,'Se mantiene C. Los cuatro ejes transversales del PRTR son transición ecológica, transformación digital, cohesión social y territorial e igualdad de género. «Trabajo decente y crecimiento económico» es la formulación del Objetivo de Desarrollo Sostenible 8 de Naciones Unidas, no uno de esos cuatro ejes.', 'vigente'],
  [753,[18],[],['ONTSI','teletrabajo','EPA','brecha de género','dato de 2021'],[
    {url:'https://www.ontsi.es/sites/ontsi/files/2021-09/indicadoresteletrabajo2T2021_1.pdf',referencia:'ONTSI, Indicadores sobre teletrabajo en España en el segundo trimestre de 2021: EPA, adopción habitual del 10 % entre mujeres ocupadas y 8,9 % entre hombres; ocasional 5,3 % y 5,2 %, respectivamente.'},
    {url:'https://www.ontsi.es/gl/node/15577',referencia:'ONTSI, Flash de teletrabajo del tercer trimestre de 2021: 8,3 % de las mujeres teletrabajaba habitualmente frente al 7,7 % de los hombres.'},
    {url:'https://www.ontsi.es/es/publicaciones/flash-datos-teletrabajo-primer-trimestre-2022',referencia:'ONTSI, datos del cuarto trimestre de 2021: las mujeres continuaron liderando el teletrabajo habitual; fuente EPA del INE.'}
  ],null,'Se conserva B, pero se precisa el periodo y la modalidad para evitar que «a lo largo de 2021» sugiera que todas las tasas subieron o que no había excepciones geográficas. En los datos nacionales EPA de los trimestres publicados por ONTSI, la adopción habitual fue mayor entre mujeres ocupadas; por ejemplo, 10 % frente a 8,9 % en el segundo trimestre y 8,3 % frente a 7,7 % en el tercero. Se marca histórica por tratarse de una fotografía de 2021.', 'historica'],
  [754,[18],[],['Plan de Recuperación, Transformación y Resiliencia','PRTR','políticas palanca'],[
    {url:'https://www.lamoncloa.gob.es/presidente/actividades/Documents/2020/07102020_PreguntasRespuestasPR.pdf',referencia:'Gobierno de España, PRTR: lista de diez políticas palanca. Incluye la «Nueva economía de los cuidados y políticas de empleo» (VIII) y la modernización/digitalización del tejido industrial de la pyme (V); la lucha contra la brecha digital de género no figura como denominación de una de las diez.'},
    {url:'https://www.lamoncloa.gob.es/consejodeministros/Paginas/enlaces/270421-enlace-plan.aspx',referencia:'Gobierno de España, presentación del PRTR: denominaciones de las diez políticas palanca y sus cuatro ejes transversales.'}
  ],null,'Se mantiene D. Se precisa el enunciado para preguntar por la denominación oficial de las diez políticas palanca, evitando confundir las políticas con los ejes transversales y con medidas concretas. La política V se nombra oficialmente como modernización y digitalización del tejido industrial de la pyme, recuperación del turismo e impulso a España nación emprendedora.', 'corregida'],
  [755,[18,22],[],['España Digital 2026','administración electrónica','servicios públicos digitales','metas históricas'],[
    {url:'https://espanadigital.gob.es/sites/espanadigital/files/2022-07/Espa%C3%B1aDigital_2026.pdf',referencia:'España Digital 2026, actualización de julio de 2022, eje de transformación digital del sector público: meta 2025 de que el 50 % de los servicios públicos estén disponibles en app móvil y objetivo con horizonte 2026 de afianzar la transformación digital en entidades regionales y locales. El objetivo de IA y Big Data del documento es 25 % de empresas, no 30 %.'},
    {url:'https://espanadigital.gob.es/sites/espanadigital/files/2025-05/Folleto%20Espa%C3%B1a%20Digital%202026.pdf',referencia:'Folleto oficial de metas de España Digital 2026: confirma el objetivo del 25 % de empresas que usan inteligencia artificial y big data.'}
  ],null,'Se mantiene C y se contextualiza como histórica. La actualización de España Digital 2025 al horizonte 2026 conserva la meta del 50 % de servicios públicos disponibles mediante app móvil para 2025 y fija, entre los objetivos para 2026, afianzar la transformación digital en las entidades regionales y locales. El documento no establece 30 % de empresas usuarias de IA y Big Data: la cifra es 25 %.', 'historica']
];
const edits = {
  751:{texto:'Según el artículo 4 de la Orden ETD/920/2020, ¿qué afirmación es falsa sobre la composición del Consejo Consultivo para la Transformación Digital?',opciones:[
    'El Consejo está constituido por la Presidencia, dos Vicepresidencias, vocales y la Secretaría.',
    'La Presidencia corresponde a la persona titular del ministerio competente en materia de transformación digital.',
    'La Vicepresidencia primera corresponde a la Secretaría de Estado de Telecomunicaciones e Infraestructuras Digitales y la segunda, a la Secretaría de Estado de Digitalización e Inteligencia Artificial.',
    'La Secretaría la ejerce la persona titular de la Secretaría General de Administración Digital o un funcionario de esta Secretaría General en quien delegue.'
  ]},
  752:{texto:'¿Cuál de estos enunciados no es uno de los cuatro ejes transversales del Plan de Recuperación, Transformación y Resiliencia (PRTR)?',opciones:[
    'Transición ecológica.',
    'Transformación digital.',
    'Trabajo decente y crecimiento económico.',
    'Igualdad de género.'
  ]},
  753:{texto:'Según los indicadores ONTSI basados en la EPA del segundo trimestre de 2021, ¿qué diferencia por género se observó en la adopción del teletrabajo habitual?',opciones:[
    'Fue más frecuente entre los hombres que entre las mujeres.',
    'Fue más frecuente entre las mujeres que entre los hombres.',
    'Los porcentajes fueron idénticos.',
    'ONTSI no publicó datos desagregados por género.'
  ]},
  754:{texto:'¿Cuál de estas expresiones no corresponde a una de las diez políticas palanca del Plan de Recuperación, Transformación y Resiliencia (PRTR)?',opciones:[
    'Una Administración para el siglo XXI.',
    'Nueva economía de los cuidados y políticas de empleo.',
    'Modernización y digitalización del tejido industrial de la pyme, recuperación del turismo e impulso a España nación emprendedora.',
    'Lucha contra la brecha digital de género.'
  ]},
  755:{texto:'Según la actualización España Digital 2026, ¿qué opción combina correctamente una meta para 2025 y un objetivo con horizonte 2026?',opciones:[
    'La agenda tiene quince ejes estratégicos y ningún eje transversal.',
    'La agenda fija que el 30 % de las empresas use inteligencia artificial y big data en 2026.',
    'Para 2025, el 50 % de los servicios públicos estará disponible en aplicación móvil; con horizonte 2026 se afianzará la transformación digital en entidades regionales y locales.',
    'La actualización se presentó en 2023.'
  ]}
};
require('./aplicar-lote.cjs')({numero:'087',fecha:'2026-10-22',records,edits});
