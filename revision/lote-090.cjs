const records = [
  [766,[5],[],['Europa 2020','crecimiento inteligente','crecimiento sostenible','crecimiento integrador'],[
    {url:'https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=celex%3A52010DC2020',referencia:'Comisión Europea, COM(2010) 2020 final, Europa 2020, versión española: las tres prioridades se denominan crecimiento inteligente, sostenible e integrador. La estrategia tenía horizonte 2020.'},
    {url:'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A52010DC2020',referencia:'Comisión Europea, Europe 2020, texto original en inglés: las prioridades son smart, sustainable and inclusive growth.'}
  ],null,'Se corrige la opción B del original: «crecimiento inclusivo» traduce de forma defendible el concepto inglés inclusive growth, por lo que no servía como respuesta incorrecta. La versión española oficial de COM(2010) 2020 usa «crecimiento integrador»; se mantiene esta denominación y se sustituye B por un distractor inequívocamente ajeno. Se etiqueta histórica por el horizonte 2020 de la estrategia.', 'historica'],
  [767,[8],['I-8'],['Ley 39/2015','entrada en vigor','disposición final séptima','procedimiento administrativo'],[
    {url:'https://www.boe.es/eli/es/l/2015/10/01/39/con',referencia:'Ley 39/2015, texto consolidado del BOE, disposición final séptima: entrada en vigor general al año de su publicación (publicada el 02-10-2015; entrada general en vigor el 02-10-2016). La propia disposición difirió determinados efectos electrónicos, hoy producidos desde el 02-04-2021.'}
  ],null,'Se conserva B y se contextualiza el dato. La regla general de la disposición final séptima fue un año desde la publicación; determinadas previsiones sobre registros, punto de acceso y archivo único tuvieron efectos diferidos hasta el 2 de abril de 2021. La fecha general ya es un hecho histórico.', 'historica'],
  [768,[8],['I-8'],['Ley 39/2015','artículo 5','representación','apoderamiento apud acta'],[
    {url:'https://www.boe.es/eli/es/l/2015/10/01/39/con',referencia:'Ley 39/2015, texto consolidado del BOE, artículo 5.4: la representación puede acreditarse por cualquier medio válido en Derecho que deje constancia fidedigna; contempla asimismo el apoderamiento apud acta y la inscripción en el registro electrónico de apoderamientos.'},
    {url:'https://www.boe.es/buscar/act.php?id=BOE-A-2021-5032&p=20250402&tn=1',referencia:'Real Decreto 203/2021, artículo 32: desarrolla medios de acreditación, entre ellos apoderamiento apud acta, inscripción registral y certificado cualificado de representante.'}
  ],null,'Se conserva D. El artículo 5.4 de la Ley 39/2015 establece la regla general, que no se limita al poder notarial. Para formular solicitudes, presentar declaraciones responsables o comunicaciones, recurrir, desistir o renunciar en nombre de otra persona debe acreditarse la representación; en gestiones de mero trámite se presume.', 'vigente'],
  [769,[8],['I-8'],['Ley 40/2015','artículo 2.2.b','entidades de derecho privado','potestades administrativas'],[
    {url:'https://www.boe.es/eli/es/l/2015/10/01/40/con',referencia:'Ley 40/2015, texto consolidado del BOE, artículo 2.2.b: las entidades de derecho privado vinculadas o dependientes quedan sujetas a las normas de la Ley que específicamente se refieran a ellas, en particular a los principios del artículo 3, y en todo caso cuando ejerzan potestades administrativas.'}
  ],null,'Se conserva B y se identifica expresamente la norma, pues «esta Ley» no permitía saber si el enunciado se refería a la Ley 39/2015 o a la Ley 40/2015. El artículo 2.2.b de la Ley 40/2015 contiene exactamente la regla indicada.', 'corregida'],
  [770,[22],['I-9'],['Ley 40/2015','artículo 38.6','sede electrónica','autenticación de sitio web','Reglamento eIDAS'],[
    {url:'https://www.boe.es/eli/es/l/2015/10/01/40/con',referencia:'Ley 40/2015, texto consolidado del BOE, artículo 38.6: las sedes electrónicas emplean certificados reconocidos o cualificados de autenticación de sitio web o medio equivalente para identificarse y garantizar una comunicación segura.'},
    {url:'https://eur-lex.europa.eu/eli/reg/2014/910/oj/spa',referencia:'Reglamento (UE) 910/2014 (eIDAS), texto consolidado vigente, artículo 3.38–39 y artículo 45: define los certificados de autenticación de sitios web y los cualificados; estos no son certificados de firma electrónica de documentos.'}
  ],null,'Se cambia la respuesta correcta de A a la opción reformulada: la Ley 40/2015, artículo 38.6, exige certificados reconocidos o cualificados de autenticación de sitio web, o medio equivalente. El original confundía estos certificados con sistemas de firma electrónica; eIDAS distingue expresamente autenticación web y firma.', 'corregida']
];
const edits = {
  766:{opcion:[1,'Crecimiento expansivo.']},
  767:{texto:'Con carácter general y sin perjuicio de las previsiones de efectos diferidos de su disposición final séptima, la Ley 39/2015 entró en vigor:',opciones:[
    'A los seis meses de su publicación en el «Boletín Oficial del Estado».',
    'Al año de su publicación en el «Boletín Oficial del Estado».',
    'A los dieciocho meses de su publicación en el «Boletín Oficial del Estado».',
    'A los dos años de su publicación en el «Boletín Oficial del Estado».'
  ]},
  769:{texto:'Según el artículo 2.2.b de la Ley 40/2015, de Régimen Jurídico del Sector Público, las entidades de derecho privado vinculadas o dependientes de las Administraciones Públicas:',opciones:[
    'Quedan sujetas a todas las disposiciones de la Ley, sin excepción.',
    'Quedan sujetas a las normas de la Ley que específicamente se refieran a ellas y, en todo caso, cuando ejerzan potestades administrativas.',
    'No quedan sujetas a la Ley, ni siquiera cuando ejerzan potestades administrativas.',
    'Solo quedan sujetas a la Ley cuando tengan forma de sociedad mercantil estatal.'
  ]},
  770:{texto:'Según el artículo 38.6 de la Ley 40/2015, ¿qué emplearán las sedes electrónicas para identificarse y garantizar una comunicación segura?',opciones:[
    'Certificados reconocidos o cualificados de autenticación de sitio web, o medio equivalente.',
    'Sistemas de firma electrónica avanzada, exclusivamente.',
    'Sistemas de claves concertadas.',
    'Cualquier certificado digital, aunque no autentique el sitio web.'
  ],respuesta_correcta:0}
};
require('./aplicar-lote.cjs')({numero:'090',fecha:'2026-10-22',records,edits});
