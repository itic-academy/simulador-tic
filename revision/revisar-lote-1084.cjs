const aplicar=require('./aplicar-lote.cjs');
const ref=(url,referencia)=>({url,referencia});
const rd='https://www.boe.es/buscar/act.php?id=BOE-A-2021-5032';
const law='https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902';
const ce='https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229';
const invoice='https://www.boe.es/buscar/act.php?id=BOE-A-2013-13722';
const fact='https://www.facturae.gob.es/formato/ultima-version';
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const records=[
 [5741,[80],['I-6','I-9'],['administración electrónica','sello electrónico','resolución','RD 203/2021'],[
  ref(rd,'Real Decreto 203/2021, art. 19.3: en el ámbito estatal, la creación de sellos electrónicos se hace por resolución de la persona titular de la Subsecretaría del Ministerio o de la Presidencia/Dirección del organismo o entidad dependiente, y se publica en sede.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 80: identificación y firma electrónica, certificados y servicios asociados; clasificación temática.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, I.6 (identidad y firma electrónica) e I.9 (instrumentos de identificación/autenticación y procedimientos electrónicos).'),
 ],null,'Vigente, respuesta D. Se confirma la fórmula del art. 19.3 del RD 203/2021: resolución de la persona titular de la Subsecretaría ministerial o de la Presidencia/Dirección del organismo o entidad de derecho público vinculado o dependiente. No es una orden ministerial ni una resolución genérica de “ministro competente”. A1-80/A2-I.6 e I.9.','vigente'],
 [5742,[11],[],['contratación pública','tipos contractuales','LCSP','contrato mixto'],[
  ref(law,'Ley 9/2017, arts. 12–18: tipifica contratos de obras, concesión de obras, concesión de servicios, suministro y servicios; el art. 18 regula los contratos mixtos.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 11: contratos de las Administraciones Públicas, LCSP, tipos y características.'),
 ],null,'Corregida, respuesta B. La LCSP vigente enumera obras, concesión de obras, concesión de servicios, suministro y servicios; regula además el contrato mixto. Se sustituye la terminología anterior de “gestión de servicios públicos” y “consultoría y asistencia”, ya no correspondiente a la tipología de la Ley 9/2017. El programa GSI A2 cotejado no incluye un epígrafe específico de tipos de contratos públicos, por lo que no se inventa correspondencia A2. A1-11.','corregida'],
 [5743,[3],['I-1'],['Constitución Española','puertos','competencias Estado','competencias autonómicas'],[
  ref(ce,'Constitución Española, arts. 148.1.6.ª y 149.1.20.ª: las CCAA pueden asumir puertos de refugio/deportivos y, en general, los que no desarrollen actividad comercial; el Estado tiene competencia exclusiva sobre puertos de interés general.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 3: organización territorial del Estado, Comunidades Autónomas y Administración local; clasificación por la materia constitucional.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, I.1: Constitución, derechos y deberes; adscripción constitucional general, sin epígrafe portuario específico.'),
 ],null,'Corregida, respuesta C. Se precisa que la Constitución permite a las comunidades autónomas asumir la competencia estatutariamente sobre puertos de refugio/deportivos y, en general, sin actividad comercial; no implica que la competencia se atribuya automáticamente a todas las CCAA ni excluye los puertos de interés general, que son competencia estatal. A1-3/A2-I.1.','corregida'],
 [5744,[11,78],['I-9'],['factura electrónica','Facturae','XAdES','Ley 25/2013','FACe'],[
  ref(invoice,'Ley 25/2013, disposición adicional segunda, establece Facturae 3.2 y firma XAdES para las facturas remitidas a AAPP mientras se desarrolla el formato previsto en el art. 5.'),
  ref(fact,'Portal oficial Facturae, últimas versiones: 3.2.2 puede utilizarse y siguen admitidas 3.2.1 y 3.2; la especificación de firma Facturae usa XAdES. FACe es el punto de entrada, no el formato del fichero.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, temas 11 (facturación en sector público) y 78 (factura electrónica).'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, I.9: instrumentos y procedimientos electrónicos, datos abiertos, ENS/ENI y servicios de Administración digital; relación temática con la recepción electrónica de facturas.'),
 ],null,'Corregida, respuesta B. El formato estructurado es Facturae —la Ley 25/2013, DA 2.ª, cita 3.2 y XAdES; el portal oficial permite hoy la familia 3.2, 3.2.1 y 3.2.2—. FACe es el punto general de entrada de facturas, no un formato; PAdES no es la firma XML indicada para Facturae. El enunciado se acota al formato estructurado de factura electrónica B2G. A1-11/A1-78/A2-I.9.','corregida'],
 [5745,[11],[],['contratación pública','contrato menor','LCSP','umbrales','duración'],[
  ref(law,'Ley 9/2017, art. 118.1: valor estimado inferior a 40.000 euros para obras y a 15.000 euros para servicios y suministros; arts. 131.3 y 29.8: adjudicación directa en los términos legales y duración máxima de un año sin prórroga.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 11: LCSP, procedimientos de contratación y tipos contractuales.'),
 ],null,'Corregida, respuesta D (falsa). Los umbrales del enunciado —80.000/35.000 euros— son obsoletos: el art. 118.1 vigente fija menos de 40.000 euros para obras y menos de 15.000 para suministros/servicios. La adjudicación directa y el límite anual sin prórroga se mantienen con los requisitos de la LCSP. Se reemplazan los umbrales antiguos en la opción D y se conserva su clave falsa. Sin clasificación A2: los temas GSI A2 revisados no incluyen contratación pública como epígrafe específico. A1-11.','corregida'],
];
const edits={
 5741:{texto:'Según el artículo 19.3 del Real Decreto 203/2021, en el ámbito estatal, la creación de sellos electrónicos se realizará mediante:',opciones:['Orden de la persona titular del Ministerio o resolución de la Dirección del organismo público','Resolución de la persona titular del Ministerio o de la Secretaría de Estado competente','Orden de la persona titular de la Subsecretaría o resolución de la Presidencia del organismo','Resolución de la persona titular de la Subsecretaría del Ministerio o de la persona titular de la Presidencia o de la Dirección del organismo público o entidad de derecho público vinculado o dependiente'],respuesta_correcta:3},
 5742:{texto:'Según la Ley 9/2017, de Contratos del Sector Público, ¿qué tipos contractuales tipifica la ley e incluye entre ellos los contratos mixtos?',opciones:['Obras, gestión de servicios públicos, consultoría y asistencia, servicios y concesión de obras públicas','Obras, concesión de obras, concesión de servicios, suministro, servicios y contratos mixtos','Obras, suministros, consultoría y asistencia y gestión pública de servicios privados','Ninguna de las anteriores'],respuesta_correcta:1},
 5743:{texto:'De acuerdo con la Constitución Española, ¿qué afirmación describe correctamente la distribución de competencias sobre puertos?',opciones:['Todos los puertos son competencia exclusiva del Estado','Todos los puertos son competencia exclusiva de las comunidades autónomas','Las comunidades autónomas pueden asumir estatutariamente competencias sobre los puertos de refugio y deportivos y, en general, sobre los que no desarrollen actividad comercial; los puertos de interés general son competencia exclusiva del Estado','Las comunidades autónomas solo pueden asumir competencias sobre puertos comerciales'],respuesta_correcta:2},
 5744:{texto:'Para presentar a una Administración Pública una factura electrónica estructurada en formato Facturae, ¿qué formato y especificación de firma corresponden a la familia Facturae 3.2.x?',opciones:['FACe, firmado con XAdES','Facturae, firmado con XAdES','FACe, firmado con PAdES','Facturae 3.0, firmado con PAdES'],respuesta_correcta:1},
 5745:{texto:'Indique cuál de las siguientes afirmaciones es FALSA respecto de los contratos menores, según la Ley 9/2017, de Contratos del Sector Público:',opciones:['Pueden adjudicarse directamente a un empresario que tenga capacidad de obrar y la habilitación profesional necesaria, cumpliendo los requisitos legales','No pueden tener una duración superior a un año','No pueden ser objeto de prórroga','Su valor estimado debe ser inferior a 80.000 euros en obras o a 35.000 euros en suministros o servicios'],respuesta_correcta:3},
};
aplicar({numero:'1084',fecha:'2026-11-12',records,edits});
