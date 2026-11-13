const apply=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const src=(url,referencia)=>({url,referencia});
apply({numero:'1191',fecha:'2026-11-13',records:[
 [6276,['123'],['IV-15'],['GSM 1800','DCS 1800','separación dúplex','espaciado de portadoras'],[
  src('https://www.etsi.org/deliver/etsi_ts/145000_145099/145005/18.00.00_60/ts_145005v180000p.pdf','ETSI TS 145 005 V18.0.0 / 3GPP TS 45.005 Release 18: especificación GSM/EDGE de transmisión y recepción; delimita las bandas DCS 1800.'),
  src('https://www.etsi.org/deliver/etsi_gts/11/1110/03.12.00_60/gsmts_1110dv031200p.pdf','ETSI GSM 11.10-DCS: la estación DCS 1800 transmite en 1710–1785 MHz y recibe en 1805–1880 MHz; cada tramo tiene 75 MHz y la separación dúplex es 95 MHz.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 123: tecnologías y generaciones de comunicaciones móviles.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.15: sistemas de comunicaciones móviles.')
 ],null,'La respuesta GSM 1800 es correcta, pero “ancho de banda 75 MHz” era ambiguo: DCS 1800 dispone de 75 MHz en cada sentido (1710–1785 y 1805–1880 MHz), separados 95 MHz; el espaciado entre portadoras GSM es 200 kHz. Se explicita el plan de frecuencias al que se refiere.','corregida'],
 [6277,['125'],['IV-12'],['SSH','RFC 4251','negociación criptográfica','RFC 4253'],[
  src('https://www.rfc-editor.org/rfc/rfc4251.html','RFC 4251 §§1 y 4.2: arquitectura SSH; ofrece autenticación de servidor, confidencialidad e integridad, permite negociar cifrado, integridad, intercambio de claves, compresión y algoritmos de clave pública. No define no repudio como servicio.'),
  src('https://www.rfc-editor.org/rfc/rfc4253.html','RFC 4253 §7: negociación del protocolo de transporte SSH. La compresión se integra en el flujo de transporte antes del cifrado; el transporte está diseñado para un flujo fiable.'),
  src('https://www.rfc-editor.org/rfc/rfc4252.html','RFC 4252: protocolo de autenticación de usuario SSH, que se ejecuta sobre el transporte seguro.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 125: seguridad en redes y protocolos seguros.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.12: seguridad de redes, autenticación y protocolos.')
 ],null,'Se mantiene como correcta la negociación de algoritmos. El enunciado original mezclaba servicios: SSH proporciona autenticación del servidor, confidencialidad e integridad, no ofrece no repudio como garantía protocolaria; la compresión puede ser opcional y se aplica antes del cifrado; el transporte se diseña para un flujo fiable (normalmente TCP), no UDP. Se separa arquitectura RFC 4251 de los detalles de transporte de RFC 4253.','corregida'],
 [6278,['128'],['IV-3','IV-6'],['planes de contingencia','respuesta a incidentes','recuperación','procedimientos operativos'],[
  src('https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final','NIST SP 800-34 Rev. 1: guía oficial de planificación de contingencia de sistemas de información; trata políticas, planes, activación/notificación, recuperación y procedimientos operativos.'),
  src('https://csrc.nist.gov/topics/security-and-privacy/security-programs-and-operations/contingency-planning','NIST CSRC, contingency planning: estrategia coordinada de planes, procedimientos y medidas técnicas para recuperar sistemas, operaciones y datos.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 128: continuidad de negocio, contingencia y recuperación.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, temas IV.3 (operación, incidentes y recuperación) e IV.6 (continuidad y recuperación ante desastres).')
 ],null,'La respuesta “todas” solo es defendible si se entiende como conjunto coordinado de documentación: respuesta/gestión de incidentes, planes operativos de recuperación y procedimientos técnicos pueden formar parte de la planificación de contingencia. No se afirma que cada organización deba crear tres documentos independientes con esos nombres. Se acota el alcance para evitar presentar una taxonomía única como obligación universal.','corregida'],
 [6279,['130'],['IV-16'],['H.261','H.263','compresión temporal','predicción entre imágenes','videoconferencia'],[
  src('https://www.itu.int/rec/T-REC-H.261/en','ITU-T H.261: recomendación para codificación de vídeo; la estructura de transmisión se basa en canales de p × 64 kbit/s.'),
  src('https://www.itu.int/rec/T-REC-H.263/en','ITU-T H.263 (01/2005), vigente: vídeo a bajo caudal; codificador híbrido con predicción entre imágenes para explotar redundancia temporal y codificación transformada para reducir redundancia espacial.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 130: videoconferencia y servicios multimedia.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.16: comunicaciones multimedia y videoconferencia.')
 ],null,'La respuesta correcta es C: H.261/H.263 sí emplean predicción entre imágenes (compresión temporal), además de transformación para redundancia espacial. Para no generalizar el control de tasa, se describe H.261 por su estructura p × 64 kbit/s y H.263 por su objetivo de vídeo a bajo caudal.','corregida'],
 [6280,['131'],['IV-12'],['SSO','inicio de sesión único','federación de identidad','autenticación'],[
  src('https://pages.nist.gov/800-63-4/sp800-63c/introduction/','NIST SP 800-63C-4, introducción: la federación permite obtener servicios de varios relying parties sin mantener autenticadores separados para cada uno; este proceso se denomina a veces inicio de sesión único (SSO).'),
  src('https://pages.nist.gov/800-63-4/sp800-63.html','NIST SP 800-63-4, directrices vigentes de identidad digital; la parte C aborda arquitecturas de identidad federada.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 131: identidad, control de acceso y acceso remoto.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.12: seguridad, identidad y control de acceso.')
 ],null,'Se mantiene la opción A como la mejor respuesta, precisando que SSO permite acceder a varios servicios con un único proceso de autenticación; puede instrumentarse mediante federación y no equivale a usar “claves SSL”. No implica que todas las aplicaciones compartan una contraseña o credencial local.','corregida']
],edits:{
 6276:{texto:'El plan DCS/GSM 1800 utiliza portadoras separadas 200 kHz, dispone de 75 MHz en cada sentido y separa 95 MHz las bandas de transmisión y recepción. ¿A qué sistema corresponde?',respuesta_correcta:1},
 6277:{texto:'Según la arquitectura SSH descrita en RFC 4251 y el transporte de RFC 4253, ¿qué afirmación es correcta?',opciones:['Permite negociar los algoritmos de cifrado, integridad, intercambio de claves y clave pública.','Proporciona no repudio como servicio criptográfico del protocolo.','La compresión opcional se aplica después del cifrado.','El transporte SSH está definido para operar sobre UDP.'],respuesta_correcta:0},
 6278:{texto:'En un marco coordinado de planificación de contingencia TIC, ¿qué tipos de documentación pueden formar parte del conjunto de respuesta y recuperación?',opciones:['Planes de respuesta o gestión de incidentes.','Planes operativos de recuperación.','Procedimientos técnicos de ejecución y recuperación.','Todos los anteriores pueden integrarse, coordinados según el análisis de impacto y las necesidades de la organización.'],respuesta_correcta:3},
 6279:{texto:'Sobre la codificación de vídeo ITU-T H.261 y H.263, señale la afirmación falsa.',opciones:['H.261 se diseñó para videotelefonía sobre canales de capacidad p × 64 kbit/s.','H.263 especifica codificación de vídeo para comunicaciones a bajo caudal.','Ninguna de las dos recomendaciones utiliza predicción temporal entre imágenes.','H.263 utiliza predicción entre imágenes para aprovechar redundancia temporal.'],respuesta_correcta:2},
 6280:{texto:'En un entorno con varios servicios, ¿qué describe mejor el inicio de sesión único (SSO)?',opciones:['Un proceso de autenticación permite al usuario acceder a varios servicios sin autenticarse por separado en cada uno.','Un sistema basado en claves SSL para gestionar remotamente claves simétricas.','Un método de almacenamiento de claves fraccionadas.','Un protocolo de comunicaciones seguras entre objetos basado en sockets.'],respuesta_correcta:0}
}});
