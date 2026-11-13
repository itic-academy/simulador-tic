const apply=require('./aplicar-lote.cjs');
const src=(url,referencia)=>({url,referencia});
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy='https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const docsis='https://www.cablelabs.com/tech-vision/tech-policy/informed-insights-whitepapers/cable-broadband-technology-gigabit-evolution';
const docsis31='https://www.cablelabs.com/technologies/docsis-3-1';
const ad='https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/plan/planning-operations-master-role-placement';
const ltephy='https://www.etsi.org/deliver/etsi_ts/136200_136299/136211/15.10.00_60/ts_136211v151000p.pdf';
const ltearch='https://www.etsi.org/deliver/etsi_TS/136300_136399/136300/18.03.00_60/ts_136300v180300p.pdf';
const ims='https://www.etsi.org/deliver/etsi_ts/123200_123299/123228/16.06.00_60/ts_123228v160600p.pdf';
const wimax='https://standards.ieee.org/ieee/802.16e/';
const phishing='https://www.enisa.europa.eu/sites/default/files/publications/ETL2020%20-%20Phishing%20A4.pdf';
const wsFed='https://docs.oasis-open.org/wsfed/federation/v1.2/ws-federation.html';
const saml='https://www.oasis-open.org/standards/';
const liberty='https://www.etsi.org/deliver/etsi_eg/284000_284099/284004/01.01.02_60/eg_284004v010102p.pdf';
apply({numero:'1216',fecha:'2026-11-13',records:[
 [6401,['108','121'],['IV-7'],['DOCSIS 3.1','HFC','capacidad teórica','red de acceso por cable'],[
  src(docsis,'CableLabs, Cable Broadband Technology Gigabit Evolution: capacidad potencial de DOCSIS 3.1 de 10 Gbit/s descendentes y 1–2 Gbit/s ascendentes, según arquitectura/espectro.'),
  src(docsis31,'CableLabs, DOCSIS 3.1: presenta como referencia 10 Gbit/s downstream y hasta 1 Gbit/s upstream; disponibilidad y velocidades comerciales dependen de la red y del operador.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, temas 108 (infraestructuras de acceso) y 121 (telecomunicaciones por cable/CATV).'),src(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV-7: medios guiados y parámetros significativos.'),
  src(academy,'ITIC Academy, Bloque 42 Redes, edición 2026: contraste de encaje curricular de redes de acceso y medios guiados; la cifra se fundamenta en CableLabs.')
 ],null,'La pregunta original no acotaba configuración y la cifra ascendente de 1 Gbit/s no es la única capacidad potencial citada para DOCSIS 3.1. Se reescribe para pedir la capacidad potencial de referencia publicada por CableLabs: 10 Gbit/s de bajada y 1–2 Gbit/s de subida, dependiente del espectro/arquitectura. No se confunde capacidad de red con velocidad que cada abonado obtenga ni con capacidad de DOCSIS 4.0.','corregida'],
 [6402,['80','122'],['II-6'],['Active Directory','AD DS','LDAP','replicación multimaestro','FSMO'],[
  src(ad,'Microsoft Learn, Active Directory Domain Services: los controladores de dominio pueden aceptar cambios y replicarlos (modelo multimaster); ciertas actualizaciones se reservan a roles FSMO de maestro único.'),
  src('https://learn.microsoft.com/en-us/troubleshoot/windows-server/identity/fsmo-roles','Microsoft Learn, FSMO: explica el modelo multimaster general y las operaciones concretas single-master, incluidas las cinco funciones FSMO.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 80: LDAP/X.500 y protocolos de directorio; tema 122: servicios de directorio.'),src(a2,'Convocatoria GSI A2 2025, anexo IX, tema II-6: arquitectura de sistemas cliente-servidor e interoperabilidad de componentes.'),
  src(academy,'ITIC Academy, Bloque 42 Redes, edición 2026: cotejo del encaje curricular de servicios/directorios de red; el comportamiento de réplica se contrasta con Microsoft Learn.')
 ],null,'Se conserva C, con precisión: la replicación ordinaria de datos de directorio es multimaster, aunque las operaciones FSMO designan un único controlador para clases concretas de actualizaciones. La pregunta se refiere al esquema general de replicación LDAP de AD DS, no a esas excepciones de operaciones maestras.','vigente'],
 [6403,['112','123','116'],['IV-15','IV-14'],['LTE','E-UTRA','SC-FDMA','OFDMA','IMS','eNodeB','WiMAX'],[
  src(ltephy,'ETSI/3GPP TS 36.211, §§5.3 y 5.6: define OFDM para los canales físicos de bajada y la generación de señal SC-FDMA para el enlace ascendente.'),
  src(ltearch,'ETSI/3GPP TS 36.300 Release 18: especifica E-UTRAN, eNB y procedimientos de movilidad/handover LTE.'),
  src(ims,'ETSI/3GPP TS 23.228, §§4 y 4.1: IMS habilita servicios multimedia IP (voz, vídeo, mensajería) y utiliza redes de acceso IP como EPC/E-UTRAN.'),
  src('https://portal.3gpp.org/desktopmodules/Specifications/SpecificationDetails.aspx?specificationId=2425','Portal 3GPP, TS 36.211: especificación de canales físicos y modulación de E-UTRA/LTE.'),
  src(wimax,'IEEE SA, familia IEEE 802.16: WiMAX/802.16 y E-UTRA/LTE son especificaciones distintas; la interfaz radio LTE no es compatible/interoperable con IEEE 802.16e.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, temas 112 (tecnologías de acceso, LTE), 116 (IMS) y 123 (comunicaciones móviles).'),src(a2,'Convocatoria GSI A2 2025, anexo IX, temas IV-14 (NGN/IMS) y IV-15 (sistemas móviles).'),
  src(academy,'ITIC Academy, Bloque 42 Redes, edición 2026: cotejo curricular de LTE, acceso móvil e IMS; las afirmaciones técnicas se validan con ETSI/3GPP/IEEE.')
 ],null,'Se conserva C como falsa y se corrige el error tipográfico “SD-FDMA” por SC-FDMA. El enlace LTE usa SC-FDMA en subida y OFDMA en bajada; IMS puede prestar servicios multimedia IP como VoLTE; E-UTRAN usa eNodeB y handover LTE, no el soft handover característico de WCDMA. IEEE 802.16e (Mobile WiMAX) no es una interfaz radio compatible/interoperable con E-UTRA. La red LTE puede interconectarse con otras redes, lo que no equivale a compatibilidad de sus interfaces radio.','corregida'],
 [6404,['125','127'],['II-13'],['phishing','ingeniería social','suplantación','credenciales','datos sensibles'],[
  src(phishing,'ENISA, European Threat Landscape: Phishing: intento fraudulento mediante ingeniería social para robar credenciales, datos de pago u otra información; a menudo suplanta una fuente legítima.'),
  src('https://tools.enisa.europa.eu/topics/incident-response/glossary/phishing-spear-phishing','Glosario de ENISA, Phishing/Spear phishing: persuade a las víctimas para revelar credenciales o datos sensibles mediante engaño y suplantación.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, temas 125 (ataques y seguridad en redes) y 127 (ciberseguridad).'),src(a2,'Convocatoria GSI A2 2025, anexo IX, tema II-13: seguridad física y lógica, herramientas de ciberseguridad y gestión de incidentes.'),
  src(academy,'ITIC Academy, Bloque 42 Redes, edición 2026: cotejo curricular general; la definición de phishing se contrasta con ENISA.')
 ],null,'Se conserva la opción C, corrigiendo su redacción: phishing es un intento fraudulento de obtener credenciales, datos financieros u otra información sensible mediante engaño, normalmente con suplantación. No es un virus por definición, ni una mera difusión de noticias falsas o reenvío masivo.','corregida'],
 [6405,['131'],['II-13'],['gestión de identidades','federación de identidades','Liberty ID-FF','SAML','WS-Federation','single sign-on'],[
  src(liberty,'ETSI EG 284 004, anexo C: Liberty Identity Federation Framework (ID-FF) es el marco de federación de identidades de Liberty Alliance.'),
  src(wsFed,'OASIS, WS-Federation 1.2: define mecanismos para federar distintos dominios de seguridad e intercambiar declaraciones de identidad/atributos.'),
  src(saml,'OASIS Standards, SAML 2.0: estándar para aserciones y protocolos de autenticación, atributos y autorización empleado en federación.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 131: gestión de identidades y single sign-on.'),src(a2,'Convocatoria GSI A2 2025, anexo IX, tema II-13: seguridad lógica de sistemas de información.'),
  src(academy,'ITIC Academy, Bloque 42 Redes, edición 2026: cotejo del programa y ubicación curricular; la denominación ID-FF se valida en ETSI/Liberty.')
 ],null,'La pregunta original partía de la negación de una opción inventada (“CupFederation”), difícil de fundamentar por fuentes normativas. Se reemplaza por una pregunta positiva y verificable: el nombre del marco de federación de identidades de Liberty Alliance es Liberty Identity Federation Framework (ID-FF). WS-Federation y SAML son también estándares reales, por eso no se presentan como opciones falsas.','corregida']
],edits:{
 6401:{texto:'Según las cifras de capacidad potencial de referencia publicadas por CableLabs para DOCSIS 3.1, ¿qué capacidad puede alcanzar la tecnología en una red HFC?',opciones:['1 Gbit/s de bajada y 100 Mbit/s de subida.','10 Gbit/s de bajada y 1–2 Gbit/s de subida, según configuración y espectro.','1 Gbit/s simétrico.','100 Mbit/s de bajada y 1 Gbit/s de subida.'],respuesta_correcta:1},
 6403:{texto:'Indique qué afirmación es falsa sobre LTE/E-UTRA:',opciones:['Emplea SC-FDMA en el enlace ascendente y OFDMA en el descendente.','IMS puede ofrecer servicios multimedia IP, como VoLTE, sobre una red de acceso LTE.','Su interfaz radio es compatible e interoperable con IEEE 802.16e (Mobile WiMAX).','E-UTRAN se basa en eNodeB y el handover LTE no utiliza soft handover como WCDMA.'],respuesta_correcta:2},
 6404:{texto:'En Internet, ¿qué describe mejor un ataque de phishing?',opciones:['La ejecución necesaria de un virus que se replica automáticamente.','La difusión masiva de noticias falsas, sin intento de obtener datos.','Un engaño que suplanta una fuente legítima para inducir a revelar credenciales u otros datos sensibles.','El reenvío de cualquier mensaje a muchas personas.'],respuesta_correcta:2},
 6405:{texto:'¿Cuál es el nombre del marco de federación de identidades (ID-FF) desarrollado por Liberty Alliance?',opciones:['CupFederation.','WS-Federation.','SAML 2.0.','Liberty Identity Federation Framework (Liberty ID-FF).'],respuesta_correcta:3}
}});
