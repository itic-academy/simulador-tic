const records = [
  [796,[128],['IV-6'],['ISO 22301','continuidad del negocio','RPO','pérdida de datos'],[
    {url:'https://csrc.nist.gov/glossary/term/recovery_point_objective',referencia:'NIST CSRC Glossary, Recovery Point Objective: punto temporal hasta el que deben recuperarse los datos después de una interrupción; definición basada, entre otras, en NIST SP 800-34 Rev. 1.'}
  ],null,'La opción D es correcta: el RPO fija el punto temporal al que deben recuperarse los datos tras la interrupción y, por tanto, limita la pérdida de datos admisible. No es una duración de interrupción (RTO) ni el tiempo máximo tolerable de interrupción (MTPD).','vigente'],
  [797,[47],['II-10'],['MAGERIT v3','análisis de riesgos','árboles de ataque','objetivo'],[
    {url:'https://pilar.ccn-cert.cni.es/docman/documentos/3-magerit-v3-libro-iii-guia-de-tecnicas/file',referencia:'MAGERIT v3, Libro III, Guía de técnicas, apartado sobre árboles de ataque: técnica para representar y explorar las vías por las que un atacante puede alcanzar un objetivo; sirve para profundizar líneas de ataque y sus consecuencias.'}
  ],null,'Se mantiene la opción B. En MAGERIT v3, los árboles de ataque representan el objetivo del atacante y las distintas vías o subobjetivos para alcanzarlo.','vigente'],
  [798,[48],['I-9'],['CCN-STIC','serie 800','ENS','Real Decreto 311/2022'],[
    {url:'https://www.ccn-cert.cni.es/es/series-ccn-stic/series/800-guia-esquema-nacional-de-seguridad.html',referencia:'CCN-CERT, carpeta oficial «800 Guías Esquema Nacional de Seguridad»: identifica la serie CCN-STIC-800 como guías para la implementación de las medidas del ENS.'},
    {url:'https://www.boe.es/eli/es/rd/2022/05/03/311/con',referencia:'Real Decreto 311/2022, de 3 de mayo, por el que se regula el Esquema Nacional de Seguridad vigente.'}
  ],null,'Se conserva D (serie 800), pero se actualiza el enunciado para referirlo al ENS vigente, regulado por el Real Decreto 311/2022. La página informativa de la serie conserva una mención histórica al derogado RD 3/2010; esa referencia ya no debe presentarse como norma vigente.','corregida'],
  [799,[46,49],['I-9'],['SIA','Sistema de Información Administrativa','procedimientos','servicios','AGE','CCAA','entidades locales'],[
    {url:'https://administracionelectronica.gob.es/ctt/sia',referencia:'Portal de Administración Electrónica, ficha oficial del SIA: el inventario contiene la relación de procedimientos y servicios de la AGE y de las administraciones participantes, incluidas CCAA y entidades locales, conforme al artículo 9 del ENI; su actualización es corresponsable.'}
  ],null,'Se mantiene la opción B como incorrecta y se precisa para evitar la ambigüedad del original: el SIA no se limita a los procedimientos y servicios de la AGE; incluye también los de las administraciones participantes, entre ellas CCAA y entidades locales.','corregida'],
  [800,[50],[],['normalización europea','CEN','CENELEC','ETSI','normas europeas','carácter voluntario'],[
    {url:'https://www.cencenelec.eu/bottom-navigation-pages/faqs/',referencia:'CEN-CENELEC, FAQ 2 y 18: las EN adoptadas por CEN/CENELEC se transponen como normas nacionales idénticas y se retiran las nacionales en conflicto; el uso de normas europeas es voluntario como regla general.'},
    {url:'https://www.cencenelec.eu/bottom-navigation-pages/faqs/',referencia:'CEN-CENELEC, FAQ 16 y 18: la legislación puede citar normas y hacer obligatorio su cumplimiento en el ámbito que determine; las normas armonizadas ofrecen presunción de conformidad, sin excluir soluciones técnicas alternativas.'}
  ],null,'Se conserva el índice C, pero se reescribe la pregunta y las opciones para que exista una sola afirmación falsa y vigente. Una EN no es obligatoria por el mero hecho de ser norma europea: su uso es generalmente voluntario, aunque la legislación puede incorporar requisitos vinculantes. Se evita la referencia ambigua y desactualizada a las antiguas ENV y se limita la obligación de transposición a las normas de CEN/CENELEC.','corregida']
];
const edits = {
  798:{texto:'¿Qué serie de guías CCN-STIC trata la implementación de las medidas del Esquema Nacional de Seguridad vigente?',opciones:['500','600','700','800'],respuesta_correcta:3},
  799:{texto:'¿Cuál de estas afirmaciones es incorrecta sobre el ámbito del Sistema de Información Administrativa (SIA)?',opciones:[
    'Es el inventario de información administrativa de la Administración General del Estado.',
    'Incluye procedimientos y servicios de la AGE, pero excluye los de las comunidades autónomas y entidades locales participantes.',
    'Contiene procedimientos y servicios de la AGE y de las Administraciones participantes, incluidas comunidades autónomas y entidades locales.',
    'Su actualización se realiza de forma corresponsable por las Administraciones participantes.'
  ],respuesta_correcta:1},
  800:{texto:'¿Cuál de las siguientes afirmaciones generales sobre las normas europeas es incorrecta?',opciones:[
    'La aplicación de las normas europeas es, como regla general, voluntaria.',
    'Las normas EN de CEN/CENELEC se adoptan como normas nacionales idénticas y se retiran las normas nacionales que entren en conflicto.',
    'Toda norma EN es obligatoria en los Estados miembros por el mero hecho de haber sido aprobada como norma europea.',
    'La legislación puede remitir a una norma y hacer vinculante su cumplimiento dentro del ámbito que establezca.'
  ],respuesta_correcta:2}
};
require('./aplicar-lote.cjs')({numero:'096',fecha:'2026-10-22',records,edits});
