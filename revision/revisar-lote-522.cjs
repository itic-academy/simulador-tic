const apply = require('./aplicar-lote.cjs');

const tre = 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-11719';
const ctbg = 'https://www.boe.es/buscar/act.php?id=BOE-A-2024-15944&p=20260918&tn=1';
const law14 = 'https://www.boe.es/buscar/act.php?id=BOE-A-2013-10074';
const law20 = 'https://www.boe.es/buscar/act.php?id=BOE-A-2013-12888';
const gdpr = 'https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32016R0679';

const records = [
 [2926,[24],['I-8'],['empleo público','retribuciones','retribuciones básicas','trienios'],[
  {url:tre,referencia:'Real Decreto Legislativo 5/2015, texto consolidado vigente, arts. 22.2–3, 23 y 24: los trienios son retribuciones básicas; destino, específico y productividad son complementarias conforme a la estructura retributiva aplicable.'}
 ],'','El artículo 22 distingue las retribuciones básicas de las complementarias; el artículo 23 incluye expresamente los trienios entre las básicas. En cambio, los complementos de destino, específico y productividad son complementarios en el régimen retributivo funcionarial. La opción «de trienio» es, por tanto, la que no es complementaria.','vigente'],
 [2927,[25],['I-4'],['transparencia','CTBG','Consejo de Transparencia y Buen Gobierno','estructura orgánica'],[
  {url:ctbg,referencia:'Real Decreto 615/2024, texto consolidado vigente a 18-9-2026, art. 11: enumera la Presidencia, la Comisión y los órganos dependientes; la Subdirección General de Reclamaciones de ámbito estatal sí forma parte de la estructura.'},
  {url:'https://www.boe.es/boe/dias/2026/09/18/pdfs/BOE-A-2026-19419.pdf',referencia:'Resolución del Congreso de 16-9-2026: deroga el Real Decreto-ley 21/2026. Por ello, a 29-10-2026 no está vigente la modificación temporal del artículo 11 introducida en agosto de 2026.'}
 ],'','Se ajusta la opción sobre reclamaciones al nombre exacto del artículo 11 vigente: «Subdirección General de Reclamaciones de ámbito estatal». El texto consolidado vigente a 29-10-2026 enumera también la Presidencia y la Comisión. La «Dirección General de Transparencia y Buen Gobierno» no es uno de esos órganos. Se tuvo en cuenta que la modificación del RD 615/2024 efectuada por el RDL 21/2026 fue derogada por acuerdo del Congreso publicado el 18-9-2026.','corregida'],
 [2928,[26],[],['emprendimiento','Ley 14/2013','PAE','CIRCE','acuerdo extrajudicial de pagos','unidad de mercado'],[
  {url:law14,referencia:'Ley 14/2013, arts. 4–5 y 13: educación en emprendimiento y Puntos de Atención al Emprendedor; su art. 21 modificó originalmente la Ley Concursal para introducir el acuerdo extrajudicial de pagos, pero figura derogado desde el 1-9-2020.'},
  {url:'https://www.boe.es/buscar/doc.php?id=BOE-A-2013-12888',referencia:'Ley 20/2013, texto original, art. 10: creó el Consejo para la Unidad de Mercado; no fue una medida creada por la Ley 14/2013.'},
  {url:'https://www.boe.es/buscar/act.php?id=BOE-A-2022-15818',referencia:'Ley 18/2022, disposición transitoria sexta: suprime el Consejo para la Unidad de Mercado y atribuye sus funciones a la Conferencia Sectorial para la Mejora Regulatoria y el Clima de Negocios.'}
 ],'','La pregunta se delimita a las medidas de la Ley 14/2013 cuando fue aprobada. Educación en emprendimiento y PAEs figuran en sus artículos 4–5 y 13; su artículo 21 introdujo entonces el acuerdo extrajudicial de pagos mediante una modificación de la legislación concursal. La creación del Consejo para la Unidad de Mercado corresponde, en cambio, al artículo 10 de la Ley 20/2013, no a la Ley 14/2013. Nota de vigencia: el artículo 21 de la Ley 14/2013 está derogado desde 2020 y el Consejo fue suprimido en 2022; no se presentan esas dos instituciones como vigentes.','historica'],
 [2929,[26],[],['unidad de mercado','libertad de establecimiento','libertad de circulación','Ley 20/2013','STC 110/2017'],[
  {url:law20,referencia:'Ley 20/2013 consolidada, capítulo II, arts. 3–9; en particular, el art. 9.1 vigente enumera no discriminación, cooperación y confianza mutua, necesidad y proporcionalidad, simplificación de cargas y transparencia.'},
  {url:'https://www.boe.es/buscar/doc.php?id=BOE-A-2017-12202',referencia:'STC 110/2017: declara inconstitucional y nulo el artículo 6 de la Ley 20/2013, que en su origen regulaba la eficacia nacional; no debe incluirse como principio vigente.'}
 ],'','Se precisa que se pregunta por el artículo 9.1 vigente. Este ordena observar los principios de no discriminación, cooperación y confianza mutua, necesidad y proporcionalidad, simplificación de cargas y transparencia, que corresponden a la opción B. No se añade la «eficacia de las actuaciones en todo el territorio nacional»: el artículo 6 que la regulaba fue declarado inconstitucional y nulo por la STC 110/2017. La garantía de libertades del título del artículo 9 no es un sexto principio autónomo en su lista actual.','corregida'],
 [2930,[27],['I-7'],['protección de datos','RGPD','delegado de protección de datos','DPD'],[
  {url:gdpr,referencia:'Reglamento (UE) 2016/679, arts. 37.6 y 37.7: el delegado puede ser personal del responsable o encargado, o prestar servicios mediante contrato; sus datos de contacto se publican y comunican a la autoridad de control.'},
  {url:'https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673',referencia:'Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales: completa en España el régimen del delegado de protección de datos, especialmente arts. 34–37.'}
 ],'','La afirmación falsa es que el delegado de protección de datos siempre forma parte de la plantilla. El artículo 37.6 del RGPD permite que sea personal del responsable o encargado, pero también que desempeñe sus funciones en el marco de un contrato de servicios. Las demás afirmaciones reproducen las reglas de los artículos 37.3 y 37.7 y 38.3 del RGPD.','vigente']
];

apply({
 numero:'522', fecha:'2026-10-29', records,
 edits:{
 2927:{
  texto:'Según el artículo 11 del Estatuto del Consejo de Transparencia y Buen Gobierno, en su redacción vigente a 29 de octubre de 2026, ¿cuál de estos órganos NO forma parte de su estructura?',
  opciones:['La Presidencia del Consejo de Transparencia y Buen Gobierno.','La Dirección General de Transparencia y Buen Gobierno.','La Comisión de Transparencia y Buen Gobierno.','La Subdirección General de Reclamaciones de ámbito estatal.'],
  respuesta_correcta:1
 },
 2928:{
  texto:'En la configuración original de la Ley 14/2013, de apoyo a los emprendedores y su internacionalización, ¿cuál de las siguientes medidas procedía de otra ley y no fue creada por aquella?',
  respuesta_correcta:0
 },
 2929:{
  texto:'Según el artículo 9.1 vigente de la Ley 20/2013, de garantía de la unidad de mercado, ¿qué principios deben observar las autoridades competentes al garantizar las libertades de los operadores económicos?',
  opciones:['No discriminación, cooperación y confianza mutua, necesidad y proporcionalidad, eficacia de las actuaciones en todo el territorio nacional, simplificación de cargas y transparencia.','No discriminación, cooperación y confianza mutua, necesidad y proporcionalidad, simplificación de cargas y transparencia.','No discriminación, cooperación y confianza mutua, eficacia de las actuaciones en todo el territorio nacional, simplificación de cargas y transparencia.','No discriminación, cooperación y confianza mutua, necesidad y proporcionalidad, eficacia de las actuaciones en todo el territorio nacional y simplificación de cargas.'],
  respuesta_correcta:1
 }
 }
});
