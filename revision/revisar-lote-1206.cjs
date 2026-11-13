const apply=require('./aplicar-lote.cjs');
const src=(url,referencia)=>({url,referencia});
const boeLssi='https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758&p=20250123&tn=1';
const boeHistorica='https://boe.es/buscar/act.php?id=BOE-A-2007-22440&p=20241221&tn=0';
const boeKit='https://www.boe.es/buscar/doc.php?id=BOE-A-2021-21873';
const boeAcc='https://www.boe.es/eli/es/rd/2018/09/07/1112';
const red='https://www.red.es/es/sobre-nosotros/quienes-somos';
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const block3='https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk';
const block9='https://drive.google.com/file/d/1-xmHgvxArWY8GroFD1eSdyPrAQjkBpzo/view?usp=drivesdk';
apply({numero:'1206',fecha:'2026-11-13',records:[
 [6351,['22','78'],['I-6'],['contratos electrónicos','LSSI-CE','consentimiento','forma escrita electrónica'],[
  src(boeLssi,'Ley 34/2002, artículo 23.1 y 23.3: validez cuando concurren consentimiento y los demás requisitos; el soporte electrónico satisface la forma escrita.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, temas 22 (legislación de sociedad de la información) y 78 (comercio electrónico).'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema I.6: sociedad de la información y régimen jurídico de identidad/firma electrónica; correspondencia temática, no pregunta literal.')
 ],'La opción D expresa el artículo 23.3. Se corrige A: el consentimiento por sí solo no basta; deben concurrir también los demás requisitos de validez del contrato (art. 23.1). El previo acuerdo para usar medios electrónicos no es necesario (art. 23.2).','corregida'],
 [6352,['22','44'],['III-14'],['accesibilidad web','LSSI-CE','Ley 56/2007','referencia histórica'],[
  src(boeHistorica,'Ley 56/2007, disposición adicional quinta, redacción histórica de la regla para páginas de Administraciones Públicas: desde el 31-12-2008, nivel medio de accesibilidad y excepción por inexistencia de solución tecnológica.'),
  src(boeAcc,'Real Decreto 1112/2018, régimen vigente de accesibilidad de sitios web y aplicaciones móviles del sector público; el plazo de 2008 no es la regla temporal actual.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 44: accesibilidad, usabilidad, W3C y diseño universal.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema III.14: accesibilidad, diseño universal y usabilidad.')
 ],{texto:'Como referencia histórica, ¿qué plazo y nivel mínimo incorporó la disposición adicional quinta de la LSSI tras la reforma de la Ley 56/2007 para las páginas de Internet de las Administraciones Públicas?'},'Se conserva la opción A como respuesta correcta, pero se identifica el enunciado como histórico: la fecha 31-12-2008 era un plazo de cumplimiento de aquella redacción. No se presenta como plazo vigente; la accesibilidad actual del sector público se rige por el Real Decreto 1112/2018.','historica'],
 [6353,['22'],[],['Kit Digital','bono digital','Red.es','ayudas a la digitalización'],[
  src(boeKit,'Orden ETD/1498/2021, bases del Programa Kit Digital: el beneficiario cede el derecho de cobro del bono al agente digitalizador, que recibe el pago tras justificar las fases (arts. 20–23).'),
  src(red,'Red.es, quiénes somos: entidad pública empresarial adscrita al Ministerio para la Transformación Digital y de la Función Pública a través de la Secretaría de Estado de Digitalización e Inteligencia Artificial.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 22: legislación en materia de sociedad de la información. La relación es contextual; el temario no menciona específicamente el Kit Digital.'),
  src(block3,'ITIC Academy, bloque 03 Administración Digital, actualización 2026: contextualiza LSSI, sociedad de la información y digitalización administrativa; no localiza desarrollo específico del Kit Digital.')
 ],{opcion:[3,'La ayuda se abona directamente en metálico al beneficiario final, sin cesión del bono digital al Agente Digitalizador Adherido.']},'Se conserva D como incorrecta, pero se precisa el mecanismo: la ayuda se concede al beneficiario mediante bono digital y el derecho de cobro asociado al acuerdo se cede al agente digitalizador, que cobra después de justificar la prestación. Así se evita sugerir que el beneficiario no es titular de la ayuda. La Orden ETD/1498/2021 establece el flujo en sus artículos 20–23.','corregida'],
 [6354,['28'],[],['sistemas de información','componentes','sistema no automatizado'],[
  src(block9,'ITIC Academy, bloque 09 Organización y Gestión de los SI, actualización 2026: define el SI como personas, datos, procesos/procedimientos y tecnología, y señala que puede existir sin ordenadores; una red no es requisito universal.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 28: definición, estructura y dimensionamiento eficiente de los sistemas de información.')
 ],{texto:'¿Qué elemento no es imprescindible para que exista un sistema de información en sentido general, incluido uno no automatizado?'},'Se corrige la clave a A (la red). El enunciado se delimita a sistemas de información en general: estos pueden operar sin ordenadores y, por tanto, no requieren necesariamente una red informática. Personas, datos y procedimientos sí aparecen en la definición organizativa utilizada como referencia.','corregida'],
 [6355,['28'],[],['sistemas de información','dimensión horizontal','clasificación funcional'],[
  src(block9,'ITIC Academy, bloque 09 Organización y Gestión de los SI, actualización 2026: describe un SI horizontal como el que atiende funciones comunes de varias áreas y uno vertical como el especializado en un dominio. No se localiza la taxonomía del enunciado sobre dividir funciones de cada nivel en aplicaciones/procedimientos.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 28: definición, estructura y dimensionamiento de los sistemas de información; el programa oficial no fija la distinción “y/o” de las opciones.')
 ],'La fuente curricular localizada distingue sistemas horizontales y verticales por el alcance funcional, pero no respalda la división interna citada por las opciones. Sin identificar la taxonomía concreta y la fuente de la pregunta, no se valida la clave histórica ni se altera su texto/opciones.','pendiente_ambiguedad']
 ]});
