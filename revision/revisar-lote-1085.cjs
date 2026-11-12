const aplicar=require('./aplicar-lote.cjs');
const ref=(url,referencia)=>({url,referencia});
const lscp='https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902';
const grants='https://www.boe.es/buscar/act.php?id=BOE-A-2003-20977';
const lpac='https://www.boe.es/eli/es/l/2015/10/01/39/con';
const lopd='https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673';
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const records=[
 [5746,[11],[],['LCSP','órgano de contratación','AGE','artículo 323'],[
  ref(lscp,'Ley 9/2017, art. 323.1–2: en la AGE son órganos de contratación los Ministros y Secretarios de Estado; en los organismos autónomos, entidades públicas empresariales y otras entidades estatales, sus Presidentes o Directores si la norma específica no dispone otra cosa.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 11: contratación de las Administraciones Públicas, LCSP, órganos y procedimientos.'),
 ],null,'Corregida, respuesta B. El art. 323 establece como regla que Ministros y Secretarios de Estado son órganos de contratación de la AGE; también lo son, a falta de regla específica, los Presidentes/Directores de organismos y entidades estatales indicados en el apartado 2. Hay juntas de contratación y contratación centralizada en los supuestos legales, por eso se acota “con carácter general”. A1-11; sin tema específico equivalente en GSI A2.','corregida'],
 [5747,[13],[],['subvenciones','concurrencia competitiva','Ley 38/2003','procedimiento ordinario'],[
  ref(grants,'Ley 38/2003, art. 22.1: el procedimiento ordinario de concesión de subvenciones se tramita en régimen de concurrencia competitiva; la concesión directa se reserva a los supuestos del apartado 2.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 13: régimen jurídico de las subvenciones públicas y procedimiento.'),
 ],null,'Vigente, respuesta B (concurrencia competitiva). Es el procedimiento ordinario conforme al art. 22.1 de la Ley 38/2003; la concesión directa solo cabe en los casos previstos legalmente. No se fuerza clasificación A2: el programa GSI A2 2025 no incluye un epígrafe específico de subvenciones públicas.','vigente'],
 [5748,[8],['I-8','I-9'],['Ley 39/2015','derechos de las personas','archivo electrónico','elección del canal'],[
  ref(lpac,'Ley 39/2015, arts. 13, 14, 17 y 53: comunicación por Punto de Acceso General, elección de canal de las personas físicas no obligadas, archivo/conservación electrónica y derechos de los interesados. No existe derecho a conservar por duplicado cada documento.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 8: procedimiento administrativo y relación de la ciudadanía con las Administraciones.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, I.8 (Leyes 39/2015 y 40/2015) e I.9 (instrumentos y procedimientos electrónicos).'),
 ],null,'Corregida, respuesta C (no es un derecho). La Ley 39/2015 contempla conservación en archivo electrónico, pero no impone conservar por duplicado los documentos de un expediente. Las personas pueden comunicarse a través del Punto de Acceso General; las personas físicas no obligadas pueden elegir canal y cambiarlo. Se corrige además la concordancia “Administraciones Públicas”. A1-8/A2-I.8 e I.9.','corregida'],
 [5749,[27],['I-7'],['AEPD','autoridad administrativa independiente','LOPDGDD','mandato presidencial'],[
  ref(lopd,'LO 3/2018, arts. 44 y 48: la AEPD es autoridad administrativa independiente y actúa con plena independencia de los poderes públicos; actualmente su estructura denomina Presidencia y Adjunto, con mandato de cinco años.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 27: régimen jurídico de protección de datos, autoridades y AEPD.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, I.7: protección de datos personales, autoridades de protección de datos y régimen jurídico.'),
 ],null,'Corregida, respuesta D. La opción verdadera sigue siendo la independencia institucional, pero las otras alternativas arrastraban nomenclatura y datos obsoletos: actualmente la LO 3/2018 regula Presidencia y Adjunto de la AEPD, nombrados por el Consejo de Ministros tras comparecencia parlamentaria; su mandato es de cinco años y el cese anticipado se limita a causas legales. Se actualizan las opciones para preguntar con la estructura vigente. A1-27/A2-I.7.','corregida'],
 [5750,[11],['I-9'],['contratación electrónica','notificaciones','integridad','Ley 9/2017','comunicaciones electrónicas'],[
  ref(lscp,'Ley 9/2017, disposición adicional 16.ª.1.e): las aplicaciones de comunicaciones/notificaciones deben acreditar fecha y hora de envío o puesta a disposición y de recepción o acceso, integridad del contenido e identidad del remitente.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 11: contratación pública y LCSP; comunicaciones en procedimientos contractuales.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, I.9: instrumentos, canales, identificación/autenticación y gestión electrónica de procedimientos.'),
 ],null,'Vigente, respuesta B. La disposición adicional 16.ª.1.e de la LCSP exige acreditar tanto el envío/puesta a disposición como la recepción/acceso, además de la integridad del contenido y la identidad del remitente. La opción A omite la acreditación de recepción o acceso y la C omite el envío/puesta a disposición. A1-11/A2-I.9.','vigente'],
];
const edits={
 5746:{texto:'Con carácter general, conforme al artículo 323 de la Ley 9/2017, ¿quiénes son órganos de contratación estatales?',opciones:['Siempre el Ministro de Hacienda y Función Pública','Los Ministros y Secretarios de Estado en la AGE y, a falta de previsión específica, los Presidentes o Directores de las entidades estatales indicadas en el artículo 323.2','Los Ministros únicamente por delegación del Gobierno','Solo los Subsecretarios de cada Ministerio'],respuesta_correcta:1},
 5747:{texto:'Según el artículo 22.1 de la Ley 38/2003, ¿cuál es el procedimiento ordinario de concesión de subvenciones?',respuesta_correcta:1},
 5748:{texto:'De acuerdo con la Ley 39/2015, ¿cuál de las siguientes afirmaciones NO describe un derecho reconocido a las personas en sus relaciones con las Administraciones Públicas?',opciones:['A comunicarse con las Administraciones Públicas a través de un Punto de Acceso General electrónico','A no aportar documentos que ya estén en poder de las Administraciones Públicas o hayan sido elaborados por ellas, en los términos legales','A que cada documento electrónico de un expediente se conserve obligatoriamente por duplicado','Si es persona física y no está obligada a relacionarse electrónicamente, a elegir en cada momento el canal de comunicación y modificar su elección'],respuesta_correcta:2},
 5749:{texto:'¿Cuál de las siguientes afirmaciones sobre la Agencia Española de Protección de Datos es correcta conforme a la Ley Orgánica 3/2018?',opciones:['El Gobierno puede cesar libremente a la Presidencia en cualquier momento','La Presidencia es nombrada por el Consejo Consultivo de la AEPD','El mandato de la Presidencia y del Adjunto dura seis años','Es una autoridad administrativa independiente que actúa con plena independencia de los poderes públicos en el ejercicio de sus funciones'],respuesta_correcta:3},
 5750:{texto:'Según la disposición adicional 16.ª.1.e de la Ley 9/2017, las aplicaciones de comunicación y notificación entre órgano de contratación y licitador o contratista deben poder acreditar:',opciones:['La fecha y hora del envío o puesta a disposición, la integridad y confidencialidad del contenido y la identidad del remitente','La fecha y hora del envío o puesta a disposición y de la recepción o acceso por el interesado, la integridad del contenido y la identidad del remitente','Solo la fecha y hora de recepción o acceso, la integridad del contenido y la identidad del remitente','Ninguna de las anteriores'],respuesta_correcta:1},
};
aplicar({numero:'1085',fecha:'2026-11-12',records,edits});
