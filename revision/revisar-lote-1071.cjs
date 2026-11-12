const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const ley39='https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565&p=20241106&tn=1';
const ley40='https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566&p=20240802&tn=1';
const accion='https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk';
const constitucion='https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk';
const ref=(url,referencia)=>({url,referencia});
const records=[
 [5676,[8],['I-8'],['Ley 39/2015','artículo 64','procedimiento sancionador','denunciante','acuerdo de iniciación'],[
  ref(ley39,'BOE, Ley 39/2015, texto consolidado actualizado a 06-11-2024, art. 64.1: el acuerdo se notifica a interesados (en todo caso, al inculpado), pero la incoación se comunica al denunciante solo cuando lo prevean las normas reguladoras del procedimiento.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 8: régimen jurídico y procedimiento administrativo.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema I.8: Ley 39/2015 y Ley 40/2015.'),
  ref(accion,'ITIC Academy, bloque 03 Actuación Administrativa y Administración Digital 2026.2, § 3.10 (procedimiento sancionador), mapeado a A1-8 y A2 O8 (A2-I-8 oficial).')
 ],null,'Corregida, respuesta B. El art. 64.1 distingue la notificación a interesados de la comunicación al denunciante: esta última solo procede cuando así lo prevén las normas reguladoras del procedimiento. El denunciante no adquiere automáticamente la condición de interesado por denunciar. A1-8/A2-I-8.','corregida'],
 [5677,[4,8],['I-8'],['Ley 40/2015','Secretario General Técnico','producción normativa','asistencia jurídica','publicaciones'],[
  ref(ley40,'BOE, Ley 40/2015, texto consolidado actualizado a 02-08-2024, art. 65.1: los Secretarios Generales Técnicos, bajo la dependencia inmediata del Subsecretario, tienen en todo caso las competencias sobre producción normativa, asistencia jurídica y publicaciones.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 4 (órganos centrales de la AGE) y tema 8 (régimen jurídico).'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema I.8: Ley 40/2015.'),
  ref(constitucion,'ITIC Academy, bloque 01 Constitución, organización del Estado y AGE 2026.2: A1 temas 4 y 6, organización de la AGE y sus órganos.'),
  ref(accion,'ITIC Academy, bloque 03 Actuación Administrativa y Administración Digital 2026.2, § 2 (Ley 40/2015 y AGE), en correspondencia con A2 O8 / A2-I-8.')
 ],null,'Corregida, respuesta C. Son los Secretarios Generales Técnicos quienes tienen, en todo caso, competencias sobre producción normativa, asistencia jurídica y publicaciones (Ley 40/2015, art. 65.1). No confundirlos con los Secretarios Generales del art. 64. A1-4/8 y A2-I-8.','corregida'],
 [5678,[8],['I-8'],['Ley 40/2015','órganos colegiados','quórum','artículo 17.2','Presidente y Secretario'],[
  ref(ley40,'BOE, Ley 40/2015, texto consolidado actualizado a 02-08-2024, art. 17.2: regla general de constitución válida, con asistencia presencial o a distancia del Presidente y Secretario (o sus suplentes) y la de la mitad, al menos, de los miembros; se respetan las especialidades legales del propio artículo.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 8: régimen jurídico de las Administraciones públicas.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema I.8: Ley 40/2015.'),
  ref(accion,'ITIC Academy, bloque 03 Actuación Administrativa y Administración Digital 2026.2, § 2.3 (órganos administrativos y colegiados), A2 O8/A2-I-8.')
 ],null,'Corregida, respuesta A. Como regla general del art. 17.2, para sesión, deliberación y acuerdos se requiere la asistencia presencial o a distancia de Presidente y Secretario (o quienes les suplan) y de, al menos, la mitad de los miembros. No se exige «mitad más uno».','corregida'],
 [5679,[8],['I-8'],['Ley 39/2015','artículo 40.2','notificación','diez días','fecha del acto'],[
  ref(ley39,'BOE, Ley 39/2015, texto consolidado actualizado a 06-11-2024, art. 40.2: toda notificación se cursará dentro de diez días desde la fecha en que el acto haya sido dictado.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 8: procedimiento administrativo.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema I.8: Ley 39/2015.'),
  ref(accion,'ITIC Academy, bloque 03 Actuación Administrativa y Administración Digital 2026.2, § 3.7 (notificación y publicación), mapeado a A1-8/A2 O8.')
 ],null,'Corregida, respuesta D. El art. 40.2 de la Ley 39/2015 fija diez días desde la fecha en que se dicta el acto, no desde que se publica. El cómputo es de días conforme a las reglas generales de la ley, salvo norma aplicable que disponga otra cosa.','corregida'],
 [5680,[8],['I-8'],['Ley 40/2015','responsabilidad patrimonial','artículo 32','daño efectivo','deber jurídico de soportar','fuerza mayor'],[
  ref(ley40,'BOE, Ley 40/2015, texto consolidado actualizado a 02-08-2024, art. 32.1 y 32.2: lesión causada por funcionamiento normal o anormal, salvo fuerza mayor o deber jurídico de soportarla; el daño debe ser efectivo, evaluable económicamente e individualizado. El art. 32.3 aclara que la anulación de actos no genera por sí misma indemnización.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 8: régimen jurídico de las Administraciones públicas y responsabilidad patrimonial.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema I.8: régimen jurídico del sector público.'),
  ref(accion,'ITIC Academy, bloque 03 Actuación Administrativa y Administración Digital 2026.2, § 2.6 (responsabilidad patrimonial), A1-8/A2 O8; se usa para cotejo didáctico, no como fuente de la regla legal.')
 ],null,'Corregida, respuesta C. Se reformula el reactivo como un requisito general para evitar sugerir que la ausencia de deber de soportar el daño baste por sí sola. La lesión debe ser consecuencia del funcionamiento normal o anormal de un servicio público, efectiva, evaluable económicamente e individualizada; no hay indemnización por fuerza mayor ni por daños que exista deber jurídico de soportar. La anulación de un acto no presupone por sí misma indemnización (art. 32.1–3 Ley 40/2015). A1-8/A2-I-8.','corregida']
];
const edits={
 5676:{texto:'En un procedimiento sancionador, ¿cuándo debe comunicarse al denunciante el acuerdo de iniciación?',opciones:['Siempre, porque la denuncia le convierte en interesado.','Cuando las normas reguladoras del procedimiento así lo prevean.','Nunca, aunque una norma del procedimiento lo disponga.','Solo si el denunciante pidió expresamente ser notificado.'],respuesta_correcta:1},
 5677:{texto:'Según el artículo 65.1 de la Ley 40/2015, ¿qué órgano tiene en todo caso competencias sobre producción normativa, asistencia jurídica y publicaciones?',opciones:['Los Subsecretarios.','Los Secretarios Generales.','Los Secretarios Generales Técnicos.','Los Directores Generales.'],respuesta_correcta:2},
 5678:{texto:'Según la regla general del artículo 17.2 de la Ley 40/2015, ¿qué asistencia se requiere para la válida constitución de un órgano colegiado?',opciones:['Presidente y Secretario (o suplentes) y al menos la mitad de sus miembros.','Presidente y Secretario (o suplentes) y la mitad más uno de sus miembros.','Presidente y Secretario (o suplentes) y al menos un tercio de sus miembros.','El número que determine libremente el Presidente para cada sesión.'],respuesta_correcta:0},
 5679:{texto:'Según el artículo 40.2 de la Ley 39/2015, ¿dentro de qué plazo debe cursarse toda notificación, contado desde la fecha del acto?',opciones:['El plazo depende siempre de la naturaleza del acto.','Diez días desde la fecha de publicación del acto.','Quince días desde la fecha en que se dictó el acto.','Diez días desde la fecha en que se dictó el acto.'],respuesta_correcta:3},
 5680:{texto:'¿Cuál de las siguientes opciones recoge correctamente condiciones generales de la responsabilidad patrimonial de las Administraciones Públicas?',opciones:['Todo daño derivado de fuerza mayor da derecho a indemnización.','Se indemnizan los daños que el particular tiene el deber jurídico de soportar.','La lesión debe ser efectiva, evaluable económicamente e individualizada, causada por el funcionamiento de un servicio público y no existir deber jurídico de soportarla, sin perjuicio de otras excepciones legales.','La anulación de un acto administrativo genera siempre y por sí sola derecho a indemnización.'],respuesta_correcta:2}
};
aplicar({numero:'1071',fecha:'2026-11-12',records,edits});
