const apply=require('./aplicar-lote.cjs');
const src=(url,referencia)=>({url,referencia});
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const ce='https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229';
const lssi='https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758';
const rd='https://www.boe.es/buscar/act.php?id=BOE-A-2005-14836';
const ebep='https://www.boe.es/buscar/act.php?id=BOE-A-2015-11719';
const market='https://www.boe.es/buscar/act.php?id=BOE-A-2013-12888';
const tc110='https://www.boe.es/buscar/doc.php?id=BOE-A-2017-12202';
const academy01='https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk';
const academy03='https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk';
const academy26='https://drive.google.com/file/d/1jzD3kZLtu9ZAL8NPH8lh5o5icScl0cMM/view?usp=drivesdk';
apply({numero:'1260',fecha:'2026-11-14',records:[
 [6621,[3],['I-1'],['Constitución Española','competencias Estado-CCAA','legislación laboral','artículo 149.1.7'],[
   src(ce,'Constitución Española, art. 149.1.7: atribuye al Estado competencia exclusiva sobre la legislación laboral, sin perjuicio de su ejecución por los órganos de las Comunidades Autónomas.'),
   src(a1,'Convocatoria GSI A1 2025, tema 3: Constitución, Comunidades Autónomas y organización político-administrativa.'),
   src(a2,'Convocatoria GSI A2 2025, tema I.1: Constitución Española; encaje constitucional general, aunque no desarrolla específicamente la distribución de competencias laborales.'),
   src(academy01,'ITIC Academy, bloque 01 Constitución, organización del Estado y AGE, edición 2026: cobertura curricular de la Constitución y el reparto competencial territorial; la regla concreta se contrasta con el art. 149.1.7 CE.')
 ],{texto:'Según el artículo 149.1.7.ª de la Constitución Española, ¿quién tiene competencia exclusiva sobre la legislación laboral, sin perjuicio de su ejecución por los órganos de las Comunidades Autónomas?',opciones:['Las Comunidades Autónomas.','El Estado.','El Estado y las Comunidades Autónomas conjuntamente.','Ninguna de las anteriores.'],respuesta_correcta:1},'Se precisa que la competencia exclusiva estatal se refiere a la legislación laboral. La propia Constitución reserva a los órganos autonómicos su ejecución; por ello, el enunciado anterior, referido genéricamente a «competencias en materia laboral», podía inducir a confundir legislación y ejecución. La respuesta es B.', 'corregida'],
 [6622,[22],['I-6'],['sociedad de la información','comercio electrónico','comunicaciones comerciales','LSSI-CE','correo electrónico'],[
   src(lssi,'Ley 34/2002, de servicios de la sociedad de la información y comercio electrónico, arts. 20.1 y 21.1–2 (texto consolidado consultado): identificación de las comunicaciones y prohibición general de envíos no solicitados o autorizados; excepción tasada para clientes previos y productos/servicios propios similares, con mecanismo sencillo y gratuito de oposición.'),
   src(a1,'Convocatoria GSI A1 2025, tema 22: legislación de sociedad de la información y administración electrónica en España y Europa.'),
   src(a2,'Convocatoria GSI A2 2025, tema I.6: sociedad de la información.'),
   src(academy03,'ITIC Academy, bloque 03 Actuación Administrativa y Administración Digital, edición 2026.2, apartado de LSSI-CE/sociedad de la información: cobertura curricular general; la excepción aplicable se determina por el texto consolidado de la Ley 34/2002.')
 ],{texto:'Como regla general, las comunicaciones comerciales no solicitadas ni autorizadas, enviadas por correo electrónico u otro medio de comunicación electrónica equivalente:',opciones:['Deben incluir al comienzo del mensaje la palabra «publicidad».','Deben indicar la persona física o jurídica en nombre de la cual se realizan.','Deben incluir claramente las condiciones comerciales o promocionales.','Están prohibidas, salvo la excepción legal para determinados clientes previos y productos o servicios propios similares.'],respuesta_correcta:3},'Se mantiene D, pero se incorpora la regla general y la excepción del artículo 21.2 LSSI-CE. No son comunicaciones absolutamente prohibidas: pueden enviarse sin una autorización específica cuando existe relación contractual previa, los datos se obtuvieron lícitamente, se promocionan productos o servicios propios similares y se ofrece oposición sencilla y gratuita. El artículo 20 regula por separado la identificación del mensaje y del anunciante.', 'corregida'],
 [6623,[22],[],['calidad de los servicios públicos','AGE','RD 951/2005','programas de calidad'],[
   src(rd,'Real Decreto 951/2005, art. 3.1.f (texto consolidado): enumera literalmente el «Programa del Observatorio de la Calidad de los Servicios Públicos»; también recoge evaluación de satisfacción de usuarios, quejas y sugerencias y evaluación de calidad de organizaciones.'),
   src(a1,'Convocatoria GSI A1 2025, tema 22: calidad en los servicios públicos y modernización mediante TIC.'),
   src(academy03,'ITIC Academy, bloque 03 Actuación Administrativa y Administración Digital, edición 2026.2: cobertura de calidad de servicios públicos; el nombre exacto de los seis programas se comprueba en el art. 3 del RD 951/2005.')
 ],null,'La clave B es correcta: el art. 3.1.f denomina el programa «del Observatorio de la Calidad de los Servicios Públicos». Se mantiene el reactivo porque solo B coincide literalmente: el programa a) se refiere a usuarios, no proveedores; el c) es «quejas y sugerencias», no reclamaciones; y el d) es «evaluación», no evolución. La clasificación es temática: la convocatoria A1 incluye expresamente calidad de servicios públicos; no se asigna epígrafe A2 específico.', 'vigente'],
 [6624,[24],['I-8'],['empleo público','EBEP','Junta de Personal','representación funcionarial'],[
   src(ebep,'Real Decreto Legislativo 5/2015, TREBEP, art. 39.5: para censos de 251 a 500 funcionarios, la Junta de Personal se compone de 13 representantes.'),
   src(a1,'Convocatoria GSI A1 2025, tema 24: Estatuto Básico del Empleado Público y empleo público.'),
   src(a2,'Convocatoria GSI A2 2025, tema I.8: texto refundido del Estatuto Básico del Empleado Público.'),
   src(academy03,'ITIC Academy, bloque 03 Actuación Administrativa y Administración Digital, edición 2026.2: cobertura de EBEP y empleo público; el cálculo concreto se verifica en el art. 39.5 TREBEP.')
 ],null,'La pregunta y la clave A son correctas. Un censo de 451 funcionarios cae en el tramo de 251 a 500 del artículo 39.5 TREBEP, al que corresponden 13 representantes.', 'vigente'],
 [6625,[26],[],['unidad de mercado','libertad de establecimiento','libertad de circulación','simplificación de cargas'],[
   src(market,'Ley 20/2013, capítulo II, arts. 3–9 (texto consolidado): enumera no discriminación, cooperación y confianza mutua, necesidad y proporcionalidad, eficacia nacional, simplificación de cargas, transparencia y garantía de las libertades. La centralización de la actuación administrativa no figura entre esos principios.'),
   src(tc110,'Tribunal Constitucional, STC 110/2017, de 5 de octubre, BOE-A-2017-12202: declaró inconstitucional y nulo el artículo 6 de la Ley 20/2013 sobre eficacia nacional. Esta precisión evita presentar como vigente todo el diseño original del capítulo II.'),
   src(a1,'Convocatoria GSI A1 2025, tema 26: dinamización y apoyo a la actividad económica y garantía de la unidad de mercado.'),
   src(academy26,'ITIC Academy, Tema 026 Unidad de Mercado, edición 2026 (material curricular del tema A1-26): desarrolla la garantía de la unidad de mercado y la Ley 20/2013. No hay tema A2 específico equivalente en el programa GSI A2 de 2025.')
 ],null,'La clave C se mantiene: la centralización administrativa no es uno de los principios de los artículos 3–9. El texto consolidado y la STC 110/2017 obligan a una precisión: el artículo 6, que recogía la eficacia de las actuaciones en todo el territorio nacional, fue anulado; los principios de los demás artículos citados no convierten la centralización en principio. La correspondencia es A1-26 y no se atribuye equivalencia A2.', 'vigente']
]});
