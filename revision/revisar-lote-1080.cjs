const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const g9912='https://www.itu.int/rec/t-rec-g.991.2',g9912detail='https://www.itu.int/ITU-T/recommendations/rec.aspx?rec=7073';
const law='https://www.boe.es/buscar/act.php?id=BOE-A-2022-11311&p=20261003&tn=0';
const cablestd='https://account.cablelabs.com/server/alfresco/05eccb3f-8880-4c7f-a691-8b36b870c80d';
const ituJ='https://www.itu.int/rec/T-REC-J.Sup10/en';
const sat='https://cordis.europa.eu/docs/projects/cnect/2/601102/080/deliverables/001-TUCAN3GD51URJCa.pdf';
const satellitepatent='https://patents.google.com/patent/US7408892';
const smtp='https://www.rfc-editor.org/rfc/rfc5321.html';
const etsi='https://www.etsi.org/deliver/etsi_EN/300300_300399/30039601/01.02.00_40/en_30039601v010200o.pdf';
const ref=(url,referencia)=>({url,referencia});
const records=[
 [5721,[108],['IV-7'],['xDSL','SHDSL','SDSL','G.991.2','par de cobre','transmisión simétrica'],[
  ref(g9912,'UIT-T G.991.2, estado y título vigentes: SHDSL (Single-pair High-speed DSL); está diseñado para duplex sobre pares metálicos de dos hilos y admite tasas simétricas seleccionadas.'),
  ref(g9912detail,'Resumen oficial UIT-T G.991.2: operación dúplex principalmente sobre pares de dos hilos; velocidades simétricas de usuario de 192 kbit/s a 2.312 Mbit/s (hasta 5.696 Mbit/s con extensión opcional). 2 Mbit/s cabe en el rango normalizado.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 108: medios de transmisión e infraestructuras de acceso.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.7: medios guiados y parámetros significativos.'),
 ],null,'Corregida, respuesta D. El enunciado original señalaba SDSL, una denominación genérica/histórica, e incluía HDSL sin distinguir variantes; así no separaba con rigor las tecnologías de un par. Se actualiza la opción a SHDSL (UIT-T G.991.2), tecnología dúplex simétrica sobre un par de dos hilos que soporta 2 Mbit/s dentro del rango base de 192–2312 kbit/s. El HDSL clásico G.991.1 suele emplear varios pares; no se confunde con HDSL2 ni con SHDSL. A1-108/A2-IV-7.','corregida'],
 [5722,[129],[],['Ley 13/2022','licencia audiovisual','ondas hertzianas terrestres','espectro radioeléctrico','servicio televisivo','radiodifusión'],[
  ref(law,'Ley 13/2022, texto consolidado consultado en BOE a 03-10-2026: art. 21.1 exige licencia por concurso para prestar el servicio audiovisual televisivo mediante ondas hertzianas terrestres; art. 76.4 establece licencia previa por concurso para el servicio radiofónico mediante el mismo medio. No se generaliza el requisito a servicios audiovisuales por Internet/cable.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 129: normas reguladoras de las telecomunicaciones. Encaje jurídico contextual; el tema no enumera esta ley audiovisual en particular.'),
 ],null,'Corregida, respuesta B. Se acota el enunciado a la prestación de servicios audiovisuales televisivos o radiofónicos lineales mediante ondas hertzianas terrestres: la Ley 13/2022 exige licencia previa otorgada mediante concurso (arts. 21.1 y 76.4). La licencia no es requisito general para toda modalidad audiovisual; los servicios a petición/Internet tienen otro régimen. A1-129 es encaje jurídico próximo, no una atribución literal de esta ley al temario; no se fuerza tema A2.','corregida'],
 [5723,[108,121],['IV-7'],['DOCSIS','EuroDOCSIS','CableLabs','UIT-T J.112','canales de 6 MHz','canales de 8 MHz','S-DOCSIS'],[
  ref(cablestd,'Especificación física DOCSIS 3.0 de CableLabs, perfil europeo «8-DOCSIS»: operación con canales de 8 MHz; documenta la opción europea, frente al perfil norteamericano clásico de 6 MHz. Los anchos son perfiles históricos de canal RF, no una regla universal para todas las generaciones.'),
  ref(ituJ,'Suplemento 10 UIT-T J (09/2024): correspondencia entre especificaciones CableLabs DOCSIS y recomendaciones UIT-T J-series; DOCSIS es especificación CableLabs, no especificación ratificada por ITU-R.'),
  ref(sat,'Proyecto TUCAN de la Comisión Europea, entregable técnico, §2.3.4: describe S-DOCSIS como adaptación de DOCSIS para transmisión por satélite y aclara que DOCSIS base es un estándar de cable, no un estándar satelital.'),
  ref(satellitepatent,'Patente US 7,408,892, sistema de banda ancha por satélite: describe un ejemplo de módem satelital con protocolos DOCSIS y protocolos propietarios extendidos. Se cita como evidencia de implementación, no de normalización satelital.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, temas 108 (redes e infraestructuras de acceso) y 121 (telecomunicaciones por cable/CATV).'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.7: medios guiados/no guiados y parámetros.'),
 ],null,'Corregida, respuesta B. En los perfiles clásicos, DOCSIS norteamericano usa canales RF de 6 MHz y EuroDOCSIS el perfil europeo de 8 MHz; por ello B invierte las anchuras. La pregunta original admitía además dos respuestas falsas: afirmaba sin matiz una adaptación satelital y atribuía a ITU-R la ratificación. Se precisa C como una adaptación histórica S-DOCSIS, no como parte del estándar base; D se reescribe con la correspondencia correcta CableLabs/UIT-T J. Se acota el ancho de canal a los perfiles clásicos y se conservan en el registro las opciones originales. A1-108/A1-121/A2-IV-7.','corregida'],
 [5724,[109,122],['IV-13'],['SMTP','correo electrónico','MTA','relay','transferencia de correo','RFC 5321'],[
  ref(smtp,'RFC 5321 vigente (STD 10), §§1.1, 2.3.8 y 3.6: SMTP transporta correo electrónico, permite el relay y la transferencia entre procesos/servidores SMTP. POP e IMAP son protocolos de acceso a buzones; SPF es un mecanismo de autenticación/política de remitente.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, temas 109 (Internet y servicios básicos) y 122 (correo electrónico y mensajería).'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.13: servicios de Internet.'),
 ],null,'Corregida, respuesta B. Se precisa que se pregunta por transferencia/relay entre agentes de transferencia de correo (MTA): ese es el cometido de SMTP, especificado actualmente en RFC 5321. POP3 e IMAP permiten acceso/recuperación de mensajes y SPF publica una política de autenticación en DNS, no transfiere el mensaje. A1-109/A1-122/A2-IV-13.','corregida'],
 [5725,[114,123],['IV-11','IV-15'],['TETRA','DMO','Direct Mode Operation','TMO','radio profesional','comunicación directa'],[
  ref(etsi,'ETSI EN 300 396-1, especificación técnica de Direct Mode Operation (DMO): llamadas directas punto a punto o punto a multipunto entre estaciones móviles sobre la misma portadora DM, sin depender del modo troncal TMO.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, temas 114 (redes inalámbricas y modos de operación) y 123 (comunicaciones móviles). El temario encuadra el área, aunque no enumera literalmente TETRA/DMO.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, temas IV.11 (redes inalámbricas/modos de operación) y IV.15 (comunicaciones móviles). Encaje temático, no mención literal de TETRA.'),
 ],null,'Vigente, respuesta D. DMO significa Direct Mode Operation: los terminales TETRA se comunican directamente entre sí sin infraestructura de red troncal TMO, usando la misma portadora de modo directo. ETSI define llamadas individuales y de grupo en este modo. La academia cubre TETRA como radio profesional/PMR, pero no se localizó allí DMO explicado literalmente; la afirmación se apoya en ETSI. A1-114/A1-123/A2-IV-11/A2-IV-15.','vigente'],
];
const edits={
 5721:{texto:'Para establecer una conexión DSL dúplex y simétrica de 2 Mbit/s sobre un solo par metálico de dos hilos, ¿qué tecnología normalizada en UIT-T G.991.2 es la adecuada?',opciones:['ADSL2+','SDSL (denominación genérica, no la recomendación citada)','HDSL clásico de varios pares','SHDSL (Single-pair High-speed DSL)'],respuesta_correcta:3},
 5722:{texto:'¿En cuál de estos supuestos exige licencia previa otorgada mediante concurso la Ley 13/2022?',opciones:['Cuando el servicio audiovisual sea accesible por Internet, cualquiera que sea su modalidad','Cuando se preste el servicio audiovisual televisivo o radiofónico mediante ondas hertzianas terrestres','Cuando la cobertura del servicio sobrepase una provincia','Cuando lo solicite el titular del servicio, con independencia del medio de difusión'],respuesta_correcta:1},
 5723:{texto:'Respecto de los perfiles clásicos de DOCSIS y EuroDOCSIS, señale la afirmación FALSA.',opciones:['El perfil norteamericano clásico emplea canales RF de 6 MHz y el perfil EuroDOCSIS clásico, de 8 MHz','En esos perfiles clásicos, DOCSIS emplea 8 MHz y EuroDOCSIS 6 MHz','Se desarrollaron adaptaciones históricas como S-DOCSIS para llevar tecnología DOCSIS a enlaces por satélite; DOCSIS base sigue siendo una especificación de cable','DOCSIS es una especificación de CableLabs cuya correspondencia con recomendaciones UIT-T J se documenta; no es una especificación ratificada por ITU-R'],respuesta_correcta:1},
 5724:{texto:'¿Qué protocolo normalizado se utiliza para transferir o retransmitir mensajes entre agentes de transferencia de correo (MTA)?',opciones:['SPF','SMTP','POP3','IMAP'],respuesta_correcta:1},
 5725:{texto:'¿Qué sigla designa el modo TETRA en el que terminales de radio se comunican directamente, sin depender del modo troncal de red (TMO)?',opciones:['Modo de respaldo','Modo repetidor','TMO','DMO'],respuesta_correcta:3},
};
aplicar({numero:'1080',fecha:'2026-11-12',records,edits});
