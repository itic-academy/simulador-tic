const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const vdsl='https://www.itu.int/ITU-T/recommendations/rec.aspx?lang=en&rec=11415';
const dhcp='https://www.rfc-editor.org/rfc/rfc2131.html';
const ieee16='https://standards.ieee.org/ieee/485/6996/';
const mobile='https://www.ieee802.org/16/tge/';
const fixed='https://www.ieee802.org/16/pubs/80216-2004.html';
const wpa='https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-97.pdf';
const wifi='https://standards.ieee.org/ieee/802.11i/3127/';
const ieee11g='https://technav.ieee.org/topic/ieee-80211g-standard/';
const ref=(url,referencia)=>({url,referencia});
const records=[
 [5646,[108],['IV-7'],['VDSL','VDSL2','acceso de banda ancha','transmisión simétrica','transmisión asimétrica'],[
  ref(vdsl,'UIT-T G.993.2 (VDSL2), en vigor: especifica transmisión de datos tanto asimétrica como simétrica sobre pares de cobre.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 108: redes e infraestructuras de acceso.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.7: medios guiados y parámetros de transmisión.')
 ],null,'Corregida, respuesta D. VDSL, en concreto VDSL2 conforme a UIT-T G.993.2, admite transmisión asimétrica y simétrica según el perfil/configuración. HDSL y SHDSL se asocian a transmisión simétrica; ADSL2 es asimétrica. Se especifica VDSL2 para que la afirmación tenga un respaldo normativo directo.','corregida'],
 [5647,[108],['II-8'],['DHCP','UDP','TCP/IP','puertos 67 y 68'],[
  ref(dhcp,'RFC 2131 § 4.1: DHCPv4 utiliza UDP como protocolo de transporte; el servidor escucha el puerto UDP 67 y el cliente el 68.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 108: redes y protocolos.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema II.8: modelo TCP/IP, protocolos y direccionamiento.')
 ],null,'Corregida, respuesta B. DHCP para IPv4 se transporta sobre UDP: el servidor emplea el puerto 67 y el cliente el 68. Se explicita la versión y los puertos para distinguir la capa de transporte de IP, que es la capa de red; no se usa TCP ni HTTP. DHCPv6 también usa UDP, con los puertos 547/546, respectivamente.','corregida'],
 [5648,[112],['IV-11'],['IEEE 802.16','WirelessMAN','WiMAX','acceso inalámbrico de banda ancha'],[
  ref(ieee16,'IEEE Std 802.16-2017: especifica la interfaz aérea MAC/PHY de sistemas de acceso inalámbrico de banda ancha fijos y móviles; WirelessMAN es una familia PHY del estándar.'),
  ref('https://technav.ieee.org/topic/ieee-80216-standards/','IEEE Technology Navigator, IEEE 802.16: la familia define acceso inalámbrico de banda ancha metropolitano; la tecnología se comercializa como WiMAX.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 112: tecnologías de acceso inalámbricas.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.11: redes inalámbricas y protocolos.')
 ],null,'Corregida, respuesta C. IEEE 802.16 define una interfaz aérea de acceso inalámbrico de banda ancha (WirelessMAN); WiMAX es el conjunto de perfiles/certificaciones basado en esa familia, no el nombre formal del estándar IEEE. Se reescriben las opciones para no confundir WLAN genérica/IEEE 802.11 con WirelessMAN.','corregida'],
 [5649,[114],['IV-11','IV-12'],['Wi-Fi','WEP','WPA','WPA2','TKIP','RC4','AES-CCMP','IEEE 802.11i','IEEE 802.11g'],[
  ref(wpa,'NIST SP 800-97, guía de IEEE 802.11i: tabla comparativa identifica RC4 para WEP y TKIP, y AES para CCMP; describe RSN y su relación con WPA2.'),
  ref(wifi,'IEEE 802.11i-2004: enmienda de seguridad que define WEP para compatibilidad, TKIP y CCMP, e introduce las asociaciones de seguridad RSN.'),
  ref(ieee11g,'IEEE Technology Navigator, IEEE 802.11g: enmienda WLAN de capa física que amplió las velocidades en 2,4 GHz; no introduce 3DES ni un mecanismo criptográfico.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 114: IEEE 802.11, autenticación y seguridad inalámbrica.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, temas IV.11 (redes inalámbricas/seguridad) y IV.12 (seguridad de redes y técnicas criptográficas).')
 ],null,'Corregida, respuesta D (FALSA). WEP y WPA cuando opera con TKIP utilizan RC4; WPA2/RSN con CCMP emplea AES; IEEE 802.11i define los mecanismos de seguridad RSN que sirvieron de base a WPA2. IEEE 802.11g es una enmienda de capa física/radio y no introdujo 3DES. Se acota el ítem a los mecanismos históricos WEP/TKIP/CCMP para no presentar WPA/WPA2 como una única suite sin variantes.','corregida'],
 [5650,[112],['IV-11'],['WiMAX','IEEE 802.16e','Mobile WiMAX','movilidad'],[
  ref(mobile,'IEEE 802.16 Task Group e: IEEE 802.16e-2005 amplía el estándar base de acceso fijo para operación combinada fija y móvil.'),
  ref(fixed,'IEEE 802.16-2004: título oficial «Air Interface for Fixed Broadband Wireless Access Systems».'),
  ref('https://technav.ieee.org/topic/wimax/','IEEE Technology Navigator: Mobile WiMAX se basa en IEEE 802.16e, que extendió el estándar para admitir abonados móviles.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 112: tecnologías de acceso móviles e inalámbricas.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.11: redes inalámbricas.')
 ],null,'Corregida, respuesta C (IEEE 802.16e). Esta enmienda añadió soporte de operación móvil al estándar anterior, inicialmente orientado a acceso inalámbrico fijo. Se eliminó la opción «802.16d» porque es una denominación histórica asociada a la revisión que dio lugar a 802.16-2004, por lo que duplicaba semánticamente la opción A.','corregida']
];
const edits={
 5646:{texto:'¿Qué tecnología DSL, especificada en UIT-T G.993.2, admite modos de transmisión tanto simétricos como asimétricos?',opciones:['SHDSL, diseñada para servicios de transmisión simétrica.','HDSL, tecnología de transmisión simétrica.','ADSL2, tecnología de acceso asimétrica.','VDSL2, que permite transmisión simétrica o asimétrica según el perfil.'],respuesta_correcta:3},
 5647:{texto:'En DHCP para IPv4, ¿qué protocolo de transporte llevan los mensajes intercambiados entre cliente y servidor (puertos 68 y 67)?',opciones:['HTTP.','UDP.','TCP.','IP como protocolo de transporte.'],respuesta_correcta:1},
 5648:{texto:'¿Qué familia de estándares IEEE especifica la interfaz WirelessMAN de acceso inalámbrico de banda ancha en la que se basa WiMAX?',opciones:['IEEE 802.15/Bluetooth.','IEEE 802.11/Wi-Fi.','IEEE 802.16/WirelessMAN.','IEEE 802.11, es decir, WLAN.'],respuesta_correcta:2},
 5649:{texto:'Sobre los mecanismos históricos de seguridad Wi-Fi WEP, WPA/TKIP y WPA2/CCMP, indique la afirmación FALSA:',opciones:['WEP y WPA cuando usa TKIP emplean RC4 como algoritmo de cifrado.','WPA2 con CCMP emplea AES.','IEEE 802.11i definió el marco RSN en el que se basa la certificación WPA2 de Wi-Fi Alliance.','IEEE 802.11g introdujo 3DES para cifrar las comunicaciones y mejorar la seguridad.'],respuesta_correcta:3},
 5650:{texto:'¿Qué enmienda de IEEE 802.16 añadió soporte de operación móvil y dio lugar a los perfiles Mobile WiMAX?',opciones:['IEEE 802.16-2004, estándar para acceso inalámbrico fijo.','IEEE 802.16-2001, especificación inicial de acceso inalámbrico fijo.','IEEE 802.16e-2005, con operación fija y móvil.','WiMAX no admite movilidad.'],respuesta_correcta:2}
};
aplicar({numero:'1065',fecha:'2026-11-12',records,edits});
