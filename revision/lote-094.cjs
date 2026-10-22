const records = [
  [786,[27],['I-7'],['Real Decreto 1720/2007','Reglamento de desarrollo','Ley Orgánica 15/1999','RGPD','LOPDGDD'],[
    {url:'https://www.boe.es/eli/es/rd/2007/12/21/1720/con',referencia:'Real Decreto 1720/2007, título y texto consolidado del BOE: aprobó el Reglamento de desarrollo de la Ley Orgánica 15/1999, hoy derogada.'},
    {url:'https://www.boe.es/eli/es/lo/2018/12/05/3/con',referencia:'Ley Orgánica 3/2018, disposición derogatoria única.3: quedan derogadas las disposiciones de igual o inferior rango que contradigan, se opongan o sean incompatibles con el RGPD y la LOPDGDD. El RD 1720/2007 solo puede invocarse en lo compatible con el marco vigente.'}
  ],null,'El título histórico es el reglamento de desarrollo de la antigua LO 15/1999. No debe confundirse ese objeto original con el marco hoy vigente: la LO 15/1999 fue derogada y las previsiones reglamentarias incompatibles con el RGPD o la LO 3/2018 no son aplicables. Se mantiene la clave D y se añade esta cautela para evitar presentar el reglamento antiguo como desarrollo general vigente.','historica'],
  [787,[5,27],['I-7'],['RGPD','LOPDGDD','primacía del Derecho de la Unión','Reglamento UE 2016/679','incompatibilidad normativa'],[
    {url:'https://eur-lex.europa.eu/EN/legal-content/glossary/primacy-of-eu-law-precedence-supremacy.htm',referencia:'EUR-Lex, glosario oficial «Primacy of EU law»: si existe conflicto entre Derecho de la Unión aplicable y una norma nacional, el Derecho de la Unión prevalece; el principio procede de la jurisprudencia del TJUE.'},
    {url:'https://eur-lex.europa.eu/eli/treaty/tfeu_2012/art_288/oj',referencia:'Tratado de Funcionamiento de la Unión Europea, artículo 288: el reglamento tiene alcance general, es obligatorio en todos sus elementos y directamente aplicable en cada Estado miembro.'},
    {url:'https://eur-lex.europa.eu/eli/reg/2016/679/oj',referencia:'Reglamento (UE) 2016/679, considerandos y articulado: norma directamente aplicable en los Estados miembros.'}
  ],null,'Se conserva la opción B, pero se delimita el supuesto. Si hay una incompatibilidad real e irreconciliable entre una norma nacional y una disposición aplicable del RGPD, rige la primacía del Derecho de la Unión y debe dejarse inaplicada la norma nacional incompatible. La LOPDGDD complementa y concreta materias que el propio RGPD deja al Derecho nacional; no todo solapamiento constituye conflicto.','corregida'],
  [788,[28],[],['ciclo de procesamiento de información','entrada','procesamiento','almacenamiento','copia de seguridad'],[
    {url:'https://openstax.org/books/workplace-software-skills/pages/1-2-computer-hardware-and-networks',referencia:'OpenStax, “Workplace Software and Skills”, apartado 1.2: presenta el ciclo de procesamiento de información como entrada, procesamiento, almacenamiento y salida; una copia de seguridad es una operación concreta de protección de datos, no una fase adicional del modelo.'}
  ],null,'Se precisa el modelo al que se refiere la pregunta: el ciclo elemental de procesamiento comprende entrada, procesamiento, almacenamiento y salida; una copia de seguridad es una medida/operación de protección y recuperación, no una fase diferenciada del ciclo. La fuente docente citada expone ese modelo y sus etapas.','corregida'],
  [789,[22,30],['I-10'],['PRTR','Plan de Digitalización de las Administraciones Públicas','3.165 millones de euros','2021-2023','Componente 11','dato histórico'],[
    {url:'https://www.lamoncloa.gob.es/consejodeministros/referencias/Paginas/2022/refc20220705_cc.aspx',referencia:'Referencia oficial del Consejo de Ministros de 5 de julio de 2022: cifra en 3.165 millones de euros la dotación del Plan de Digitalización de las Administraciones Públicas para los próximos tres años.'},
    {url:'https://planderecuperacion.gob.es/politicas-y-componentes/componente-11-modernizacion-de-las-administraciones-publicas',referencia:'Portal oficial del PRTR, Componente 11: identifica las inversiones C11.I1, C11.I2 y C11.I3 y describe su alcance. Se consulta para distinguir la estructura del componente del importe anunciado para el plan.'}
  ],null,'Se conserva el importe de la opción A como dato de la comunicación gubernamental de 5 de julio de 2022, pero se reformula para no atribuir sin matices los 3.165 millones al total del Componente 11 ni confundir el plan con la suma de sus inversiones. El componente 11 tiene una ficha e importe total propios y contempla las inversiones I1–I3; la cifra preguntada corresponde a la dotación comunicada para el Plan de Digitalización de las Administraciones Públicas, con horizonte trienal. Es una referencia histórica, no un dato presupuestario actual.','historica'],
  [790,[22,30],['I-10'],['Ley 40/2015','Comisión Sectorial de Administración Electrónica','cooperación interadministrativa','disposición adicional novena'],[
    {url:'https://www.boe.es/eli/es/l/2015/10/01/40/con',referencia:'Ley 40/2015, texto consolidado del BOE, disposición adicional novena.1: define a la Comisión Sectorial de Administración Electrónica como órgano técnico de cooperación de la AGE, las comunidades autónomas y las entidades locales en esta materia; la DA 9.2 enumera funciones.'}
  ],null,'Se conserva A. La disposición adicional novena.1 de la Ley 40/2015 contiene expresamente esa denominación y definición. La pregunta se mantiene vigente; no es una agencia ni una conferencia sectorial separada.','vigente']
];
const edits = {
  786:{texto:'¿Qué norma aprobó el reglamento que desarrollaba la antigua Ley Orgánica 15/1999, de protección de datos de carácter personal?',opciones:[
    'El Real Decreto 1720/2007.',
    'El Real Decreto 428/1993.',
    'El Real Decreto 994/1999.',
    'La Ley Orgánica 3/2018.'
  ],respuesta_correcta:0},
  787:{texto:'Si una disposición nacional aplicable resulta incompatible con una disposición del RGPD y no es posible interpretarla de forma conforme con el Derecho de la Unión, ¿qué exige el principio de primacía?',opciones:[
    'Aplicar siempre la LOPDGDD por ser la ley española específica.',
    'Dar efecto a la disposición aplicable del RGPD y dejar inaplicada la norma nacional incompatible en ese supuesto.',
    'Suspender ambos textos hasta que el legislador español los modifique.',
    'Esperar en todos los casos a que un tribunal nacional derogue formalmente la norma española.'
  ],respuesta_correcta:1},
  788:{texto:'En el modelo elemental del ciclo de procesamiento de información —entrada, procesamiento, almacenamiento y salida—, ¿cuál de estas opciones no es una fase del ciclo?',opciones:[
    'Entrada de datos.',
    'Almacenamiento de datos.',
    'Copias de seguridad de datos.',
    'Cálculos y transformaciones de datos.'
  ],respuesta_correcta:2},
  789:{texto:'Según la referencia del Consejo de Ministros de 5 de julio de 2022, ¿qué dotación se anunció para el Plan de Digitalización de las Administraciones Públicas, con horizonte de tres años?',opciones:[
    '3.165 millones de euros.',
    '1.365 millones de euros.',
    '3.165 millones de euros, exclusivamente para el Componente 21 del PRTR.',
    '1.365 millones de euros, exclusivamente para el Componente 21 del PRTR.'
  ],respuesta_correcta:0},
  790:{texto:'Conforme a la disposición adicional novena de la Ley 40/2015, ¿qué órgano es el órgano técnico de cooperación de la AGE, las comunidades autónomas y las entidades locales en materia de Administración electrónica?',opciones:[
    'La Comisión Sectorial de Administración Electrónica.',
    'La Conferencia Sectorial de Informática.',
    'La Agencia Sectorial Nacional TIC.',
    'Ese órgano de cooperación no existe.'
  ],respuesta_correcta:0}
};
require('./aplicar-lote.cjs')({numero:'094',fecha:'2026-10-22',records,edits});
