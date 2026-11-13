const apply=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const src=(url,referencia)=>({url,referencia});
apply({numero:'1196',fecha:'2026-11-13',records:[
 [6301,['69'],['II-14'],['software libre','GNU','FSF','cuatro libertades','licencia de software'],[
  src('https://www.gnu.org/philosophy/free-sw.html','Free Software Foundation, definición de software libre y cuatro libertades: uso para cualquier propósito, estudio/modificación, redistribución de copias y distribución de versiones modificadas; la propia definición confirma que puede usarse y distribuirse comercialmente.'),
  src('https://drive.google.com/file/d/1T7AITM0b1yVa4GnG7gPOZL-Hitt82_rL/view?usp=drivesdk','Material académico de Drive, Tema 066 «Software de código abierto. Software libre. Conceptos base», Asociación Profesional del Cuerpo Superior TIC; referencia histórica de estudio para el epígrafe actual A1-69.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 69: software libre, software de código abierto y conceptos base.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema II.14: software libre/propietario, licencias y protección jurídica de programas.')
 ],null,'Se corrige el enunciado para que la opción D no constituya una segunda falsedad: la redistribución se reconoce con sujeción a las condiciones válidas de la licencia. La afirmación falsa única es B: la FSF exige que el software libre permita uso, desarrollo y distribución comercial; «libre» no significa «no comercial».','corregida'],
 [6302,['40','41'],['III-15'],['decisión multicriterio','utilidad multiatributo','MAUT','riesgo','incertidumbre','alternativas'],[
  src('https://www.cambridge.org/core/books/abs/decisions-with-multiple-objectives/multiattribute-preferences-under-uncertainty-the-twoattribute-case/2CB83AE9B134F959E8968D6BCE185078','Keeney y Raiffa, Decisions with Multiple Objectives, cap. 5 «Multiattribute Preferences under Uncertainty» (Cambridge University Press): la utilidad multiatributo permite representar preferencias entre consecuencias inciertas y objetivos múltiples.'),
  src('https://www.cambridge.org/core/books/abs/decisions-with-multiple-objectives/tradeoffs-under-certainty/63531BB0093A8674D12FE2A6F9FF88B4','Keeney y Raiffa, cap. 3: distingue decisiones con certeza de las que tienen consecuencias inciertas y trata las compensaciones multiatributo en ambos contextos.'),
  src('https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view?usp=drivesdk','ITIC Academy, bloque 17 Adquisición de sistemas, alternativas y rentabilidad de inversiones (2026): decisión multicriterio, estudio de alternativas y viabilidad.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, temas 40–41: evaluación de alternativas y decisiones sobre equipamiento.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema III.15: técnicas de evaluación de alternativas y análisis de viabilidad.')
 ],null,'Se acota el concepto para evitar atribuir exclusivamente a MAUT toda valoración del riesgo: PROMETHEE y otros métodos también cuentan con extensiones para incertidumbre. El enunciado ahora identifica la función de utilidad multiatributo como modelo de preferencias ante consecuencias inciertas; esa es la característica distintiva de la opción B.','corregida'],
 [6303,['109','115'],['IV-13'],['DNS','IPv6','AAAA','registros de recursos','RFC 3596'],[
  src('https://www.rfc-editor.org/rfc/rfc3596.html#section-2.1','RFC 3596, §2.1: el registro de recurso AAAA almacena una dirección IPv6; cada registro AAAA contiene una dirección de 128 bits.'),
  src('https://www.iana.org/assignments/dns-parameters/dns-parameters.xhtml','IANA, DNS Parameters, asignaciones de tipos de registro: A corresponde a dirección IPv4 y AAAA a dirección IPv6.'),
  src('https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk','ITIC Academy, bloque 43 Protocolos (actualización 2026): protocolos IP, IPv4/IPv6 y servicios de red.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, temas 109 y 115: servicios básicos de Internet y redes IP/IPv6.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.13: arquitectura y principios de funcionamiento de Internet.')
 ],null,'Se formula la pregunta en términos del contenido del registro y no de «traducir»: para asociar un nombre de host con una dirección IPv6 se consulta un registro AAAA, definido en RFC 3596 §2.1. El tipo A almacena una dirección IPv4.','corregida'],
 [6304,['111'],['II-8'],['HDLC','bit stuffing','bandera','01111110','transparencia'],[
  src('https://www.rfc-editor.org/rfc/rfc1662.html#section-5.1','RFC 1662 §5.1, HDLC-like Framing: la bandera de apertura/cierre es 01111110 (0x7E).'),
  src('https://www.rfc-editor.org/rfc/rfc1662.html#section-5.2','RFC 1662 §5.2: entre banderas, el emisor inserta un cero tras cada secuencia de cinco unos contiguos y el receptor elimina ese cero para impedir que los datos simulen la bandera.'),
  src('https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk','ITIC Academy, bloque 43 Protocolos (actualización 2026): protocolos de enlace y arquitectura de comunicaciones; cotejo temático.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 111: modelo OSI, capas y protocolos.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema II.8: modelos OSI/TCP-IP, capas y protocolos.')
 ],null,'Se precisa la excepción que hacía absoluta e incorrecta la opción original: el flujo sí contiene secuencias de seis unos en las banderas 01111110. El bit stuffing se aplica al contenido entre banderas: después de cinco unos se inserta un cero y el receptor lo quita. La única opción falsa es la que prohíbe seis unos incluso en las banderas.','corregida'],
 [6305,['125'],['IV-12'],['ciberseguridad','denegación de servicio','DoS','DDoS','ataque distribuido'],[
  src('https://csrc.nist.gov/glossary/term/distributed_denial_of_service','NIST CSRC Glossary, distributed denial of service (DDoS): técnica de denegación de servicio que utiliza numerosos hosts para realizar el ataque.'),
  src('https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-30r1.pdf','NIST SP 800-30 Rev. 1, apéndice E: DDoS usa múltiples sistemas comprometidos contra un objetivo y provoca denegación de servicio para sus usuarios.'),
  src('https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk','ITIC Academy, bloque 48 Seguridad en redes y en el nivel de aplicación (2026): ataques, herramientas de prevención y seguridad en redes.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 125: tipos de ataques y herramientas de prevención en redes.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.12: seguridad en redes y gestión de amenazas.')
 ],null,'Se sustituye la expresión coloquial «provocando su caída» por el efecto técnico de dejar indisponible un servicio. Cuando el ataque DoS se realiza desde numerosos hosts contra un mismo objetivo es distribuido (DDoS), opción C; una única fuente caracteriza el DoS simple.','corregida']
],edits:{
 6301:{texto:'¿Qué afirmación es falsa según la definición de software libre de la Free Software Foundation?',opciones:['El usuario puede ejecutar el programa para cualquier propósito.','Un programa libre no puede usarse, desarrollarse ni distribuirse comercialmente.','El usuario puede estudiar el código fuente y modificar el programa.','Se pueden redistribuir copias del programa original si se respetan las condiciones válidas de la licencia.'],respuesta_correcta:1},
 6302:{texto:'¿Qué método representa las preferencias del decisor mediante una función de utilidad multiatributo para comparar alternativas con consecuencias inciertas?',respuesta_correcta:1},
 6303:{texto:'¿Qué tipo de registro de recurso DNS almacena una dirección IPv6 asociada a un nombre de host?',opciones:['A','AAAA','AV6','TXT'],respuesta_correcta:1},
 6304:{texto:'En HDLC síncrono con bit stuffing, ¿qué afirmación es incorrecta?',opciones:['No puede aparecer nunca una secuencia de seis o más unos en el flujo, ni siquiera en las banderas de delimitación.','Entre banderas, el emisor inserta un cero tras cinco unos contiguos y el receptor lo elimina.','La bandera de trama se representa mediante la secuencia 01111110.','El bit stuffing evita que los datos entre banderas simulen la secuencia de delimitación.'],respuesta_correcta:0},
 6305:{texto:'Cuando numerosos hosts realizan un ataque de denegación de servicio contra un mismo objetivo para dejar el servicio indisponible, ¿cómo se denomina?',respuesta_correcta:2}
}});
