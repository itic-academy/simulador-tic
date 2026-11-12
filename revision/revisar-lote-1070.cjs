const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const ley40='https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566&p=20260929&tn=1';
const ley39='https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565';
const tue='https://eur-lex.europa.eu/eli/treaty/teu_2016/art_16/oj?locale=es';
const tfue='https://eur-lex.europa.eu/eli/treaty/tfeu_2016/art_59/oj?locale=es';
const constitucion='https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk';
const actuacion='https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk';
const ref=(url,referencia)=>({url,referencia});
const records=[
 [5671,[6,8],['I-8'],['Administración General del Estado','órganos superiores','órganos directivos','Ley 40/2015','artículo 55'],[
  ref(ley40,'BOE, Ley 40/2015, texto consolidado consultado el 12-11-2026, art. 55: enumera los órganos superiores y directivos de la organización central de la AGE y diferencia la organización territorial y exterior. La pregunta se delimita a esta estructura legal, no a la composición general del Gobierno.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 6: organización territorial de la AGE y delegados/subdelegados; tema 8: régimen jurídico administrativo.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema I.8: Leyes 39/2015 y 40/2015.'),
  ref(actuacion,'ITIC Academy, bloque 03 Actuación Administrativa 2026.2, secciones 2.1–2.7: Ley 40/2015 y organización/órganos de la AGE; el programa incluye A1 temas 6 y 8 y A2 O8.'),
  ref(constitucion,'ITIC Academy, bloque 01 Constitución, organización del Estado y AGE 2026.2: temario oficial A1 incluye tema 6; A2 O8 se estudia en el bloque 03.')
 ],null,'Corregida, respuesta B. Se concreta la pregunta: la estructura legal de órganos superiores/directivos de la AGE se regula en la Ley 40/2015, especialmente art. 55; la Ley 50/1997 regula el Gobierno. A1-6/8 y A2-I-8.','corregida'],
 [5672,[5],[],['Unión Europea','Consejo de la UE','artículo 16 TUE','representante ministerial'],[
  ref(tue,'EUR-Lex, Tratado de la Unión Europea consolidado, art. 16.2, texto en vigor: el Consejo se compone de un representante por Estado miembro, de rango ministerial, facultado para comprometer a su Gobierno y votar.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 5: instituciones y Derecho de la Unión Europea, incluido el Consejo.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX: no contiene un tema específico de instituciones o Derecho de la Unión Europea; no se fuerza una etiqueta A2.'),
  ref(actuacion,'ITIC Academy, bloque 03 Actuación Administrativa 2026.2, § 1.2: Derecho de la Unión, TUE/TFUE e instituciones; correspondencia curricular general, no fuente de la literalidad del art. 16.')
 ],null,'Corregida, respuesta A. El art. 16.2 TUE exige un representante de cada Estado miembro, de rango ministerial, que pueda comprometer al Gobierno y emitir el voto. No confundir el Consejo de la UE con el Consejo Europeo ni con el Parlamento Europeo. A1-5; sin correspondencia directa A2.','corregida'],
 [5673,[5],[],['TFUE','artículo 59','liberalización de servicios','directivas','procedimiento legislativo ordinario'],[
  ref(tfue,'EUR-Lex, Tratado de Funcionamiento de la Unión Europea consolidado, art. 59.1, en vigor: para alcanzar la liberalización de un servicio determinado, Parlamento Europeo y Consejo deciden mediante directivas, por procedimiento legislativo ordinario y previa consulta al Comité Económico y Social.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 5: Derecho de la Unión Europea y sus instituciones.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX: no incluye un epígrafe específico sobre tratados/instituciones de la UE; no se fuerza clasificación A2.'),
  ref(actuacion,'ITIC Academy, bloque 03 Actuación Administrativa 2026.2, § 1.2: Derecho originario y derivado de la UE, procedimiento y naturaleza de las directivas; cotejo general, con la respuesta literal determinada por el art. 59 TFUE.')
 ],null,'Corregida, respuesta B. El artículo citado es el TFUE, art. 59.1: la liberalización de un servicio determinado se decide mediante directivas, con procedimiento legislativo ordinario y consulta previa al Comité Económico y Social. No confundir el art. 59 TFUE con el art. 59 TUE. A1-5; sin correspondencia directa A2.','corregida'],
 [5674,[6],['I-8'],['Directores Insulares','Ley 40/2015','artículo 70','Subdelegados del Gobierno'],[
  ref(ley40,'BOE, Ley 40/2015, texto consolidado a 29-09-2026, art. 70: los Directores Insulares ejercen en su ámbito las competencias que la ley atribuye a los Subdelegados del Gobierno en las provincias. El propio artículo establece su dependencia jerárquica.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 6: organización territorial de la AGE; tema 8: régimen jurídico.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema I.8: Ley 40/2015.'),
  ref(constitucion,'ITIC Academy, bloque 01 Constitución, organización del Estado y AGE 2026.2, tema oficial A1-6 y materia A2 O8.'),
  ref(actuacion,'ITIC Academy, bloque 03 Actuación Administrativa 2026.2, § 2.7, organización territorial AGE y Ley 40/2015.')
 ],null,'Corregida, respuesta D. El artículo 70 de la Ley 40/2015 atribuye a los Directores Insulares, en su territorio, las competencias legales de los Subdelegados del Gobierno en las provincias. Su dependencia jerárquica puede ser del Delegado autonómico o del Subdelegado provincial cuando exista; esto no altera la respuesta. A1-6/8 y A2-I-8.','corregida'],
 [5675,[7,8],['I-8'],['Ley 39/2015','artículo 128','potestad reglamentaria','órganos de gobierno locales'],[
  ref(ley39,'BOE, Ley 39/2015, texto consolidado vigente consultado el 12-11-2026, art. 128.1: potestad reglamentaria del Gobierno de la Nación, órganos de Gobierno de las CCAA y órganos de gobierno locales en el marco constitucional y legal; el artículo no incluye a todas las entidades del sector público institucional como titulares generales.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 7: fuentes del Derecho administrativo, concepto, clases y límites del reglamento; tema 8: régimen jurídico y procedimiento.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema I.8: leyes 39/2015 y 40/2015.'),
  ref(actuacion,'ITIC Academy, bloque 03 Actuación Administrativa 2026.2, §§ 1.7 (reglamento) y 3 (Ley 39/2015), mapeado al A1-7/8 y A2 O8; fuente de contraste didáctico, no de autoridad legal.')
 ],null,'Corregida, respuesta B. Conforme al art. 128.1 de la Ley 39/2015, la potestad reglamentaria corresponde al Gobierno de la Nación, a los órganos de Gobierno de las CCAA y a los órganos de gobierno locales, con los límites constitucionales y legales aplicables. No se generaliza como titular a toda entidad del sector público institucional. A1-7/8 y A2-I-8.','corregida']
];
const edits={
 5671:{texto:'¿Qué ley regula la estructura de los órganos superiores y directivos de la Administración General del Estado, incluidos los territoriales?',opciones:['Ley 15/2014, de racionalización del Sector Público.','Ley 40/2015, de Régimen Jurídico del Sector Público.','Ley 39/2015, del Procedimiento Administrativo Común.','Ley 50/1997, del Gobierno.'],respuesta_correcta:1},
 5672:{texto:'De acuerdo con el artículo 16.2 del Tratado de la Unión Europea, el Consejo de la Unión Europea está compuesto por:',opciones:['Un representante de cada Estado miembro, de rango ministerial, facultado para comprometer a su Gobierno y votar.','Un número de miembros equivalente a dos tercios del número de Estados miembros.','Los jefes de Estado o de Gobierno de los Estados miembros.','Representantes de los ciudadanos de la Unión, con un máximo de 350.'],respuesta_correcta:0},
 5673:{texto:'Según el artículo 59.1 del Tratado de Funcionamiento de la Unión Europea, para alcanzar la liberalización de un servicio determinado, Parlamento Europeo y Consejo decidirán mediante:',opciones:['Reglamentos.','Directivas.','Decisiones.','Recomendaciones.'],respuesta_correcta:1},
 5674:{texto:'Según el artículo 70 de la Ley 40/2015, los Directores Insulares ejercen en su ámbito territorial las competencias atribuidas por esta Ley a:',opciones:['Los Subsecretarios.','Los Delegados del Gobierno en las Comunidades Autónomas.','Los Subdirectores Generales.','Los Subdelegados del Gobierno en las provincias.'],respuesta_correcta:3},
 5675:{texto:'¿A quién atribuye el artículo 128.1 de la Ley 39/2015 el ejercicio de la potestad reglamentaria?',opciones:['Al Gobierno de la Nación y a los órganos de Gobierno de las Comunidades Autónomas.','Al Gobierno de la Nación, a los órganos de Gobierno de las Comunidades Autónomas y a los órganos de gobierno locales.','Al Gobierno de la Nación exclusivamente.','A esos órganos y, con carácter general, a todas las entidades del sector público institucional.'],respuesta_correcta:1}
};
aplicar({numero:'1070',fecha:'2026-11-12',records,edits});
