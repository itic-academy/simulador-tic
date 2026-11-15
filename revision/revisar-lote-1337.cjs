const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const a11='https://www.w3.org/TR/WCAG21/',a12='https://www.w3.org/WAI/WCAG21/Understanding/compatible.html';
const a21='https://www.rfc-editor.org/rfc/rfc4251.html';
const a31='https://www.itil.co.il/ITIL_Files/ITIL_2007_English_Glossary_V3_1_24.pdf';
const a32='https://www.peoplecert.org/-/media/peoplecert/images/landing-pages/devops-launch-indian/peoplecert-devops-leadership.pdf';
const a41='https://nvlpubs.nist.gov/nistpubs/ir/2022/NIST.IR.8387.pdf';
const a42='https://www.snia.org/sites/default/files/snia-dictionary-pdf/SNIADictionary.pdf';
const a51='https://www.itu.int/rec/T-REC-X.420';
const a52='https://www.itu.int/rec/dologin_pub.asp?id=T-REC-X.420-199906-I%21%21PDF-E&lang=e&type=items';
const academy={
 access:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',
 protocol:'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',
 itil:'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk',
 storage:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',
 email:'https://drive.google.com/file/d/1nHGBMG4P3il5v4hZ1-RKdHmGzUPiwqnA/view?usp=drivesdk'
};
const records=[
 [7006,[44],['III-14'],['WCAG 2.1','principio Robust','pauta 4.1 Compatible','accesibilidad web'],[
  {url:a11,referencia:'W3C Recommendation WCAG 2.1: el principio 4 Robust contiene la pauta 4.1 Compatible, que pide maximizar la compatibilidad con agentes de usuario actuales y futuros, incluidas tecnologías de apoyo.'},
  {url:a12,referencia:'W3C Understanding Guideline 4.1: nombre oficial Compatible y propósito de interoperabilidad con agentes de usuario/tecnologías de apoyo.'},
  {url:a1,referencia:'Convocatoria oficial A1 GSI 2025, tema 44: accesibilidad y usabilidad; W3C.'},
  {url:a2,referencia:'Convocatoria oficial A2 GSI 2025, tema III.14: accesibilidad, diseño universal y usabilidad.'},
  {url:academy.access,referencia:'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información, versión 2026.2: trata HTML, navegadores y compatibilidad con estándares, como cobertura tecnológica relacionada. La búsqueda en Drive no localizó un bloque o explicación específica de WCAG; el cotejo directo se apoya en los temarios oficiales y W3C.'}
 ],undefined,'Vigente C. WCAG 2.1 organiza el principio 4 «Robust» en una pauta: 4.1 «Compatible». No debe confundirse una pauta con sus criterios de éxito; «Accesible a través de teclado» es un criterio/pauta del principio Operable, no de Robust. El enunciado pregunta expresamente por WCAG 2.1 y se mantiene la versión solicitada.','vigente'],
 [7007,[111],['II-8'],['modelo OSI','capa de aplicación','SSH','RFC 4251','clasificación didáctica'],[
  {url:a21,referencia:'IETF RFC 4251: SSH proporciona acceso remoto seguro y otros servicios de red sobre una red insegura; la arquitectura consta de transporte SSH, autenticación y conexión sobre TCP. El RFC no asigna formalmente todo SSH a una capa OSI; la pregunta se acota a la clasificación convencional del servicio/protocolo SSH de acceso remoto en la capa de aplicación, distinguiéndola del subprotocolo SSH Transport.'},
  {url:a1,referencia:'Convocatoria oficial A1 GSI 2025, tema 111: modelo de referencia OSI, capas, interfaces y protocolos.'},
  {url:a2,referencia:'Convocatoria oficial A2 GSI 2025, tema II.8: modelos TCP/IP y OSI, capas y protocolos.'},
  {url:academy.protocol,referencia:'ITIC Academy, bloque 43 Protocolos, actualización 2026.1: expone las siete capas OSI, arquitectura de protocolos y correspondencia de protocolos; cotejo curricular, sin tratar la clasificación de SSH como asignación normativa del RFC.'}
 ],undefined,'Vigente C. Entre los protocolos/servicios listados, SSH (Secure Shell), usado para acceso remoto seguro, se clasifica convencionalmente en la capa de aplicación del modelo OSI. Precisión: RFC 4251 denomina «Transport Layer Protocol» a uno de los componentes internos de SSH, que opera sobre TCP; por eso se reescribe la pregunta para distinguir la clasificación del servicio SSH de ese subprotocolo interno y no atribuir al RFC una correspondencia OSI normativa.','vigente'],
 [7008,[106],[],['ITIL v3','OLA','Operational Level Agreement','SLA','acuerdo interno'],[
  {url:a31,referencia:'Glosario de ITIL v3, entrada Operational Level Agreement: acuerdo entre proveedor de servicios TI y otra parte de la misma organización que apoya la prestación de servicios a clientes.'},
  {url:a32,referencia:'PeopleCert, glosario de gestión de servicios: OLA escrito entre proveedor TI y otra área de TI que ayuda a prestar servicios; sus objetivos sustentan los de un SLA.'},
  {url:a1,referencia:'Convocatoria oficial A1 GSI 2025, tema 106: acuerdos de nivel de servicio, gestión de incidencias y fundamentos de ITIL.'},
  {url:academy.itil,referencia:'ITIC Academy, bloque 41 ITIL y COBIT, versión 2026.1: cubre acuerdos de nivel, gestión de servicios y marcos actuales (ITIL 4/Version 5). El detalle preguntado es la definición histórica de v3, no se atribuye al bloque una cita textual de OLA.'}
 ],undefined,'Histórica C. En el glosario de ITIL v3, un OLA es un acuerdo entre el proveedor de servicios TI y otra parte de la misma organización, que apoya la entrega de servicios a clientes. No es el SLA con el cliente ni un acuerdo entre clientes de organizaciones distintas. Se conserva ITIL v3 en el enunciado porque es la versión histórica preguntada; el material académico 2026 se centra en versiones posteriores.','historica'],
 [7009,[56],['IV-5'],['SSD','latencia rotacional','latencia de acceso','almacenamiento'],[
  {url:a41,referencia:'NIST IR 8387, sección sobre SSD: las unidades de estado sólido no tienen partes móviles; se usa solo para fundamentar la ausencia de mecanismo giratorio, sin inferir latencia total nula.'},
  {url:a42,referencia:'SNIA Dictionary (28-04-2026), entrada rotational latency: tiempo entre completar la búsqueda y que el primer bloque llegue bajo el cabezal de lectura/escritura del disco; es una magnitud de medio rotatorio.'},
  {url:a1,referencia:'Convocatoria oficial A1 GSI 2025, tema 56: sistemas de almacenamiento y dispositivos.'},
  {url:a2,referencia:'Convocatoria oficial A2 GSI 2025, tema IV.5: almacenamiento de datos, tipos, componentes y gestión.'},
  {url:academy.storage,referencia:'ITIC Academy, bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1: trata tipos y componentes de almacenamiento y latencia de dispositivos; cotejo curricular.'}
 ],undefined,'Corregida A. La pregunta original ordenaba SCSI, IDE, SATA, SSD y Fibre Channel como si fueran tecnologías homogéneas con una latencia fija. Son interfaces/protocolos o categorías de medio distintos, y la latencia depende de la unidad concreta. Se sustituye por una propiedad inequívoca: una SSD no tiene latencia rotacional porque no gira un plato, aunque sí presenta latencia de acceso y otras latencias internas; no significa que el acceso sea instantáneo.','corregida'],
 [7010,[122],[],['X.400','X.420','IPM','interpersonal message','heading','body'],[
  {url:a51,referencia:'ITU-T X.420, edición 06/1999, en vigor: define Interpersonal Messaging System; un IPM se estructura como SEQUENCE con heading y body.'},
  {url:a52,referencia:'Texto íntegro de ITU-T X.420 (06/1999): cláusula sobre la estructura IPM, `heading Heading, body Body`; el encabezamiento contiene campos y el cuerpo una secuencia de partes.'},
  {url:a1,referencia:'Convocatoria oficial A1 GSI 2025, tema 122: correo electrónico y servicios de mensajería.'},
  {url:academy.email,referencia:'ITIC Academy, bloque 45 Correo electrónico, mensajería y servicios de directorio, versión 2026.1: explica X.400, modelo IPM, sobre, contenido y partes del mensaje. Cotejo directo con la estructura de mensajería.'}
 ],undefined,'Vigente B. La estructura normativa de un mensaje interpersonal X.400/IPM tiene dos componentes de primer nivel: encabezamiento (heading) y cuerpo (body). El cuerpo, a su vez, puede contener una o varias partes; por ello no debe contarse cada parte de información como una sección de primer nivel. ITU-T X.420 (06/1999) figura en vigor. No se asigna tema A2 porque el programa A2 vigente no contiene un epígrafe específico de correo/X.400; la correspondencia de programa es A1-122.','vigente']
];
const edits={
 7006:{texto:'En WCAG 2.1, ¿cuál es la única pauta que forma parte del principio «Robust»?',opciones:['Alternativas textuales (1.1).','Accesible mediante teclado (2.1).','Compatible (4.1).','Asistencia a la entrada de datos (3.3).'],respuesta_correcta:2},
 7007:{texto:'En la clasificación convencional de protocolos/servicios sobre el modelo OSI, ¿qué combinación sitúa correctamente un servicio de acceso remoto seguro en la capa de aplicación?',opciones:['OSPF — capa de enlace de datos.','IMAP — capa de transporte.','SSH (servicio Secure Shell) — capa de aplicación.','SSL/TLS — capa de red.'],respuesta_correcta:2},
 7008:{texto:'Según el glosario de ITIL v3, ¿qué describe un OLA (Operational Level Agreement)?',opciones:['Un acuerdo entre todos los niveles del CAU, con independencia de la organización.','Un acuerdo sobre el nivel de servicio entre clientes de distintas organizaciones.','Un acuerdo entre un proveedor de servicios TI y otra parte de la misma organización que apoya la prestación del servicio.','El acuerdo que fija el nivel de servicio que el cliente espera de su proveedor externo.'],respuesta_correcta:2},
 7009:{texto:'¿Qué tipo de unidad de almacenamiento carece de latencia rotacional, aunque sí tiene latencia de acceso a los datos?',opciones:['Una unidad de estado sólido (SSD), que no emplea platos giratorios.','Un disco duro mecánico SATA de 5.400 rpm.','Un disco duro mecánico SAS de 7.200 rpm.','Un disco duro mecánico SCSI de 15.000 rpm.'],respuesta_correcta:0},
 7010:{texto:'Según ITU-T X.420, ¿cuáles son los dos componentes de primer nivel de un mensaje interpersonal (IPM)?',opciones:['Solo el cuerpo.','Encabezamiento (heading) y cuerpo (body).','Encabezamiento, cuerpo y sobre de transporte como tres componentes del IPM.','Un componente por cada tipo de información incluido en el cuerpo.'],respuesta_correcta:1}
};
aplicar({numero:'1337',fecha:'2026-11-15',records,edits});
