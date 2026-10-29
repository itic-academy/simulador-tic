const apply=require('./aplicar-lote.cjs');
const tcp='https://www.rfc-editor.org/rfc/rfc9293.html';
const ieee8025='https://pure.tue.nl/ws/portalfiles/portal/46711707/283998-1.pdf';
const g729='https://www.itu.int/rec/T-REC-G.729-201206-I/en';
const cat6='https://www.ieee802.org/3/an/public/channel_models/';
const tia='https://www.tiafotc.org/tia-standards-update/';
const pem='https://www.rfc-editor.org/rfc/rfc1421.html';
const records=[
 [3031,[108,109,115],['II-8'],['TCP','IP','capa de transporte','servicio fiable','flujo de octetos'],[
  {url:tcp,referencia:'IETF RFC 9293 (STD 7), §§2.2 y 2.6: TCP es un protocolo de transporte de Internet, orientado a conexión, que ofrece a las aplicaciones un flujo de octetos fiable y ordenado; IP transporta los segmentos en datagramas.'}
 ],'','Se reemplaza la formulación que atribuía a TCP garantizar la fiabilidad de las comunicaciones entre subredes. TCP presta comunicación fiable extremo a extremo entre procesos/hosts; el encaminamiento entre redes corresponde a IP. TCP no es un protocolo de la suite OSI, aunque puede ubicarse en la capa de transporte al compararlo con ese modelo.','corregida'],
 [3032,[110,118],['IV-7'],['codificación de línea','Manchester diferencial','Token Ring','IEEE 802.5','capa física'],[
  {url:ieee8025,referencia:'ANSI/IEEE 802.5-1985, §6.1, especificación de la capa física: codifica símbolos de Token Ring con señalización de tipo differential Manchester, dos elementos de señal por símbolo.'}
 ],'','Se corrige la categoría: Manchester diferencial es una codificación de línea/baseband para representar bits y recuperar temporización, utilizada en Token Ring IEEE 802.5; no es una técnica criptográfica ni una modulación de radio. La opción genérica «modulación de señales» era demasiado amplia y podía confundirse con modulación de portadora.','corregida'],
 [3033,[116],['IV-14'],['G.729','CS-ACELP','8 kbit/s','voz','anexo A'],[
  {url:g729,referencia:'ITU-T G.729 (06/2012), actualmente In force: la propia recomendación se titula codificación de voz a 8 kbit/s mediante CS-ACELP; el anexo A define la versión de complejidad reducida, también a 8 kbit/s.'}
 ],'','Se conserva 8 kbit/s como tasa de G.729 Annex A (CS-ACELP de complejidad reducida). Se diferencia de G.711 (64 kbit/s) y G.726 (tasa variable de 16–40 kbit/s). La cifra es tasa del códec, no el ancho de banda total de la llamada IP/RTP.','corregida'],
 [3034,[110,118],['IV-7'],['Cat 6','10GBASE-T','cableado estructurado','10 Gbit/s','diafonía exógena'],[
  {url:'https://standards.ieee.org/ieee/802.3an/3560/',referencia:'IEEE 802.3an-2006, 10GBASE-T: define Ethernet a 10 Gb/s sobre cableado balanceado de par trenzado; la norma 10GBASE-T admite hasta 100 m en sistemas de cableado adecuados.'},
  {url:cat6,referencia:'IEEE 802.3an Task Force, modelos de canal: publica modelos y datos de canales Cat 6 de 55 m para evaluar 10GBASE-T.'},
  {url:tia,referencia:'TIA TSB-155-A, citado por TIA: guía para evaluar y mitigar cableado Cat 6 instalado para 10GBASE-T; la prestación depende de longitud y diafonía exógena. Para 100 m en nuevas instalaciones se usa Cat 6A.'}
 ],'','Se corrige la unidad errónea de 1,2 Gbit/s: 10GBASE-T puede alcanzar 10 Gbit/s sobre Cat 6 instalado en longitudes reducidas, en general hasta 55 m según longitud y diafonía exógena; no debe prometerse 10 Gb/s sobre 100 m de Cat 6. Para 100 m, la especificación de cableado nueva apropiada es Cat 6A.','corregida'],
 [3035,[122,125],['IV-12','II-13'],['PEM','RFC 1421','MIC-CLEAR','MIC-ONLY','ENCRYPTED','confidencialidad','correo electrónico'],[
  {url:pem,referencia:'IETF RFC 1421, §4.6.1.1.1–4.6.1.1.3: define ENCRYPTED, MIC-ONLY y MIC-CLEAR como los tres valores de Proc-Type para mensajes PEM normales; MIC-ONLY y MIC-CLEAR aportan servicios de integridad/autenticación pero no confidencialidad.'},
  {url:pem+'#section-4.6.1.1.2',referencia:'RFC 1421, §4.6.1.1.2 y sintaxis de §4.6: un mensaje MIC-ONLY incluye texto encapsulado codificado; lo que falta es cifrado/confidencialidad, no el cuerpo del mensaje.'}
 ],'','Se conserva «tres tipos» únicamente delimitándolo a los tres valores Proc-Type de mensajes PEM normales: MIC-CLEAR, MIC-ONLY y ENCRYPTED. Un mensaje MIC-CLEAR no cifra ni aporta confidencialidad; MIC-ONLY tampoco cifra, pero sí transporta el texto encapsulado codificado junto a los campos de control. Las CRL/certificados tienen estructuras propias y no deben confundirse con esos tres modos de procesamiento de contenido.','corregida']
];
apply({numero:'543',fecha:'2026-10-29',records,edits:{
 3031:{texto:'¿Cuál describe correctamente TCP frente a IP?',opciones:['TCP es el protocolo de encaminamiento entre subredes y determina la ruta de cada datagrama.','TCP es un protocolo de transporte de Internet, orientado a conexión, que proporciona a las aplicaciones un flujo fiable y ordenado de octetos; IP ofrece el servicio de datagramas entre redes.','TCP es un protocolo de enlace que entrega tramas solo dentro de una LAN.','TCP cifra y autentica por sí mismo todos los datos que transporta.'],respuesta_correcta:1},
 3032:{texto:'¿En qué consiste principalmente la codificación de línea Manchester diferencial, empleada históricamente en Token Ring IEEE 802.5?',opciones:['En firmar digitalmente cada trama.','En codificar los bits mediante transiciones relativas de la señal dentro de cada intervalo de bit.','En cifrar la trama con una clave compartida.','En modular una portadora de radio por desplazamiento de frecuencia.'],respuesta_correcta:1},
 3033:{texto:'¿Cuál es la tasa de bits del códec CS-ACELP de complejidad reducida definido en ITU-T G.729 Annex A?',opciones:['8 kbit/s.','16 kbit/s.','32 kbit/s.','64 kbit/s.'],respuesta_correcta:0},
 3034:{texto:'¿Qué tasa puede alcanzar 10GBASE-T sobre cableado Cat 6 instalado en un canal corto y correctamente cualificado?',opciones:['56 Mbit/s.','100 Mbit/s.','1,2 Gbit/s.','10 Gbit/s, con alcance limitado frente a Cat 6A y condicionado por diafonía y longitud.'],respuesta_correcta:3},
 3035:{texto:'Según IETF RFC 1421, ¿qué tres valores de Proc-Type representan los modos de procesamiento de contenido de un mensaje PEM normal?',opciones:['MIC-CLEAR, MIC-ONLY y ENCRYPTED.','MIC-CLEAR, MIC-ONLY y CERTIFICATE-ONLY.','MIC-ONLY, CERTIFICATE y CRL.','ENCRYPTED, CRL y CERTIFICATE.'],respuesta_correcta:0}
}});
