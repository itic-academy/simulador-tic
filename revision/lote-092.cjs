const records = [
  [776,[13],[],['Ley 38/2003','artículo 10','concesión de subvenciones','Consejo de Ministros','autorización previa'],[
    {url:'https://www.boe.es/eli/es/l/2003/11/17/38/con',referencia:'Ley 38/2003, General de Subvenciones, texto consolidado del BOE, artículo 10.1 y 10.2: en la AGE son competentes para conceder subvenciones los ministros y secretarios de Estado en sus ámbitos; las de cuantía superior a 12 millones requieren autorización previa del Consejo de Ministros, salvo que la norma reguladora atribuya esa autorización a la Comisión Delegada del Gobierno para Asuntos Económicos.'}
  ],null,'Se conserva C. La autorización previa no desplaza la competencia de concesión: el artículo 10.1 la atribuye a ministros y secretarios de Estado y el 10.2 exige autorización del Consejo de Ministros para cuantías superiores a 12 millones, con la salvedad expresa de la Comisión Delegada cuando así lo disponga la normativa reguladora.','vigente'],
  [777,[15],[],['INE','FRONTUR','turismo internacional','Cataluña','2022'],[
    {url:'https://www.ine.es/daco/daco42/frontur/frontur1222.pdf',referencia:'INE, FRONTUR, diciembre y año 2022, tabla de llegadas por comunidad autónoma de destino principal: Cataluña recibió 14.803.187 turistas internacionales, por delante de Illes Balears (13.203.537), Canarias (12.329.171) y Andalucía (10.011.512).'}
  ],null,'Se conserva B y se marca histórica porque la respuesta depende del año de referencia. El dato anual definitivo/provisional publicado por el INE para 2022 sitúa a Cataluña en primer lugar con 14,8 millones; no debe leerse como una clasificación vigente para otros años.','historica'],
  [778,[5],[],['política pesquera común','Reglamento (UE) 1380/2013','reforma de 2013','marco vigente'],[
    {url:'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=LEGISSUM%3A02020101_1',referencia:'EUR-Lex, síntesis oficial sobre la política pesquera común, actualizada el 07-05-2025: señala que su reforma más reciente fue la de 2013 y que el Reglamento (UE) 1380/2013 se aplica desde el 1 de enero de 2014. Describe este Reglamento como marco básico actual.'},
    {url:'https://eur-lex.europa.eu/eli/reg/2013/1380/oj',referencia:'Reglamento (UE) 1380/2013 del Parlamento Europeo y del Consejo, de 11-12-2013, sobre la política pesquera común; texto oficial en EUR-Lex, aplicable desde 01-01-2014.'}
  ],null,'Se precisa la afirmación B: no se afirma que el Reglamento (UE) 1380/2013 haya dejado de recibir modificaciones, sino que el marco básico de la política pesquera común deriva de la reforma de 2013, que comenzó a aplicarse el 1 de enero de 2014. La síntesis oficial de EUR-Lex, actualizada en 2025, identifica esa reforma como la más reciente del marco de la PPC.','vigente'],
  [779,[16],['I-5'],['Ley Orgánica 3/2007','artículo 11','acciones positivas','igualdad efectiva'],[
    {url:'https://www.boe.es/eli/es/lo/2007/03/22/3/con',referencia:'Ley Orgánica 3/2007, texto consolidado del BOE, artículo 11: regula las acciones positivas que los poderes públicos adoptarán para corregir situaciones patentes de desigualdad de hecho, mientras subsistan, con medidas razonables y proporcionadas.'}
  ],null,'Se conserva C. El título del artículo 11 es «Acciones positivas» y delimita su objetivo y los requisitos de duración, razonabilidad y proporcionalidad.','vigente'],
  [780,[16],['I-5'],['Tratado CEE','Tratado de Roma','artículo 119','igualdad de retribución','historia de la Unión Europea'],[
    {url:'https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX%3A11957E119',referencia:'Tratado constitutivo de la Comunidad Económica Europea, artículo 119 (texto histórico en EUR-Lex): estableció el principio de igualdad de retribución entre trabajadores y trabajadoras por un mismo trabajo.'},
    {url:'https://eur-lex.europa.eu/legal-content/ES/ALL/?uri=CELEX%3A11957E%2FTXT',referencia:'EUR-Lex, ficha del Tratado CEE: firmado en Roma el 25-03-1957 y en vigor desde el 01-01-1958; contiene las fechas documentales del Tratado.'}
  ],null,'Se reformula y marca histórica. El Tratado CEE firmado en Roma ya recogía en el artículo 119 la igualdad de retribución por un mismo trabajo; sin embargo, se firmó en 1957 y entró en vigor en 1958. El enunciado original confundía ambas fechas y extendía de modo impreciso a toda la igualdad de género una regla histórica sobre igualdad salarial.','historica']
];
const edits = {
  778:{texto:'¿Qué afirmación describe correctamente el marco básico vigente de la política pesquera común (PPC) de la Unión Europea?',opciones:[
    'La PPC se creó como consecuencia de la estrategia Europa 2020.',
    'La reforma más reciente del marco básico se recoge en el Reglamento (UE) 1380/2013, aplicable desde el 1 de enero de 2014.',
    'La PPC establece que todos los Estados miembros aprueben cada año un plan ecosistémico único de pesca.',
    'Los reglamentos de la PPC no son obligatorios para los Estados miembros.'
  ]},
  780:{texto:'¿Qué Tratado incorporó al Derecho comunitario originario el principio de igualdad de retribución entre mujeres y hombres por un mismo trabajo, en su artículo 119?',opciones:[
    'El Tratado constitutivo de la Comunidad Económica Europea, firmado en Roma en 1957 y en vigor desde 1958.',
    'El Acta Única Europea, firmada en 1986.',
    'El Tratado de Ámsterdam, firmado en 1997.',
    'El Tratado de Lisboa, firmado en 2007.'
  ]}
};
require('./aplicar-lote.cjs')({numero:'092',fecha:'2026-10-22',records,edits});
