const records = [
  [761,[7],[],['Constitución Española','artículo 82','delegación legislativa','ley de bases'],[
    {url:'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229&p=20260520&tn=0',referencia:'Constitución Española, texto consolidado a 20-05-2026, artículo 82.2: se otorga mediante ley de bases la delegación para formar textos articulados y mediante ley ordinaria para refundir textos legales.'},
    {url:'https://www.boe.es/buscar/pdf/1978/BOE-A-1978-31229-consolidado.pdf',referencia:'Publicación oficial de la Constitución Española en el BOE, texto consolidado, artículo 82.'}
  ],null,'Se conserva C. El artículo 82.2 de la Constitución distingue la ley de bases para formar textos articulados de la ley ordinaria para refundir varios textos legales. La pregunta se limita a esa regla constitucional vigente.', 'vigente'],
  [762,[1],['I-2'],['Constitución Española','artículo 68','Congreso de los Diputados','composición'],[
    {url:'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229&p=20260520&tn=1',referencia:'Constitución Española, texto consolidado en BOE, artículo 68.1: el Congreso se compone de un mínimo de 300 y un máximo de 400 Diputados, elegidos por sufragio universal, libre, igual, directo y secreto.'}
  ],null,'Se conserva B. El artículo 68.1 fija el intervalo entre 300 y 400 diputados; los demás límites propuestos no aparecen en la Constitución. El texto se mantiene sin cambios sustantivos.', 'vigente'],
  [763,[2],[],['Constitución Española','artículo 123.2','Tribunal Supremo','Consejo General del Poder Judicial'],[
    {url:'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229&p=20260520&tn=0',referencia:'Constitución Española, texto consolidado en BOE, artículo 123.2: el presidente del Tribunal Supremo será nombrado por el Rey, a propuesta del Consejo General del Poder Judicial.'},
    {url:'https://www.boe.es/eli/es/lo/1985/07/01/6/con',referencia:'Ley Orgánica 6/1985, de 1 de julio, del Poder Judicial, texto consolidado; regula el nombramiento y la propuesta del presidente del Tribunal Supremo y del CGPJ.'}
  ],null,'Se conserva C, pero se completa el supuesto: formalmente lo nombra el Rey y la propuesta corresponde al Consejo General del Poder Judicial, como dispone el artículo 123.2 de la Constitución. La redacción anterior podía confundirse con quién propone el nombramiento.', 'corregida'],
  [764,[3,5],[],['Comité Europeo de las Regiones','autoridades regionales y locales','Tratado de Funcionamiento de la UE','órgano consultivo'],[
    {url:'https://eur-lex.europa.eu/eli/treaty/tfeu_2016/art_300/oj/spa',referencia:'Tratado de Funcionamiento de la Unión Europea, artículo 300.1 y 300.3: el Comité de las Regiones ejerce funciones consultivas y se compone de representantes de entes regionales y locales con mandato electivo o responsabilidad política ante asamblea elegida.'},
    {url:'https://www.cor.europa.eu/en/about',referencia:'Comité Europeo de las Regiones, descripción oficial: representa a autoridades regionales y locales de la UE y asesora sobre legislación que afecta a regiones y ciudades.'}
  ],null,'Se sustituye la expresión imprecisa «disponen de algún mecanismo para interactuar» por una pregunta sobre el órgano consultivo que representa a las autoridades regionales y locales. La opción A es correcta. El Comité no sustituye la representación de los Estados en el Consejo ni es una institución legislativa.', 'corregida'],
  [765,[5],[],['Consejo Europeo','artículo 15 TUE','jefes de Estado o de Gobierno','instituciones de la Unión Europea'],[
    {url:'https://eur-lex.europa.eu/eli/treaty/teu_2016/oj?locale=es',referencia:'Tratado de la Unión Europea, artículo 15.2: el Consejo Europeo está compuesto por los jefes de Estado o de Gobierno de los Estados miembros, su presidente y el presidente de la Comisión.'},
    {url:'https://www.consilium.europa.eu/en/european-council/how-the-european-council-works/',referencia:'Consejo Europeo, explicación oficial de su funcionamiento: el Alto Representante participa en sus trabajos, pero no es miembro.'}
  ],null,'Se mantiene D y se precisa el artículo 15.2 TUE. Los ministros pertenecen al Consejo de la Unión Europea según su formación, no al Consejo Europeo; este último reúne a los jefes de Estado o de Gobierno y a sus dos presidentes. El Alto Representante participa en sus trabajos, pero no forma parte de su composición como miembro.', 'vigente']
];
const edits = {
  763:{texto:'Según el artículo 123.2 de la Constitución Española, ¿quién nombra al presidente del Tribunal Supremo y a propuesta de quién?',opciones:[
    'El presidente de las Cortes Generales, a propuesta del Congreso.',
    'El presidente del Gobierno, a propuesta del Consejo de Ministros.',
    'El Rey, a propuesta del Consejo General del Poder Judicial.',
    'El Consejo General del Poder Judicial, a propuesta del Tribunal Constitucional.'
  ]},
  764:{texto:'¿Qué órgano consultivo de la Unión Europea representa a las autoridades regionales y locales y las asesora sobre asuntos que les afectan?',opciones:[
    'El Comité Europeo de las Regiones (CDR).',
    'El Comité de Representantes Permanentes (COREPER).',
    'El Parlamento Europeo, que designa representantes de cada municipio.',
    'No existe un órgano de la Unión que represente a autoridades regionales o locales.'
  ]},
  765:{texto:'Según el artículo 15.2 del Tratado de la Unión Europea, ¿quiénes componen el Consejo Europeo?',opciones:[
    'Los ministros de cada Estado miembro, según el asunto tratado.',
    'Un colegio de comisarios, uno por cada Estado miembro.',
    'Los diputados del Parlamento Europeo.',
    'Los jefes de Estado o de Gobierno de los Estados miembros, el presidente del Consejo Europeo y el presidente de la Comisión.'
  ]}
};
require('./aplicar-lote.cjs')({numero:'089',fecha:'2026-10-22',records,edits});
