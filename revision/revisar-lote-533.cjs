const apply=require('./aplicar-lote.cjs');
const ituG652='https://www.itu.int/epublications/publication/itu-t-g-652-2024-08-characteristics-of-a-single-mode-optical-fibre-and-cable';
const ituFiberGuide='https://www.itu.int/epublications/es/publication/itu-t-g-suppl-42-2018-10-guide-on-the-use-of-the-itu-t-recommendations-related-to-optical-fibres-and-systems-technology';
const ciscoBands='https://www.cisco.com/c/en/us/td/docs/optical/15000r7_0/dwdm/planning/guide/70epg/d7ovw.html';
const pstn='https://www.itu.int/itudoc/itu-d/question/studygr2/q16-2-2.pdf';
const x25='https://www.itu.int/rec/T-REC-X.25/en';
const rfc1209='https://www.rfc-editor.org/rfc/rfc1209.html';
const rfc2427='https://www.rfc-editor.org/rfc/rfc2427.html';
const fccDsl='https://docs.fcc.gov/public/attachments/FCC-10-58A1.pdf';
const dotDsl='https://rosap.ntl.bts.gov/view/dot/2968/dot_2968_DS1.pdf';
const ieee80216='https://www.ieee802.org/16/docs/03/C80216-03_03.pdf';
const ieeeWiFiTimeline='https://standards.ieee.org/wp-content/uploads/interactive/web/wi-fi-timeline/index.html';
const ieee80211ax='https://standards.ieee.org/ieee/802.11ax/7180/';
const records=[
 [2981,[108,110],['IV-7'],['fibra óptica','ventanas de transmisión','longitud de onda','monomodo','G.652'],[
  {url:ituG652,referencia:'UIT-T G.652 (edición de agosto de 2024), ficha de recomendación vigente sobre fibra monomodo optimizada para transmisión en la región de 1310 nm y utilizable también en torno a 1550 nm.'},
  {url:ituFiberGuide,referencia:'UIT-T G-Suppl.42, guía oficial de recomendaciones de fibra: distingue la ventana próxima a 850 nm para fibra multimodo y las regiones de 1310 y 1550 nm para fibra monomodo.'},
  {url:ciscoBands,referencia:'Cisco, guía de planificación DWDM: describe bandas ópticas O/E/S/C/L/U y usos posteriores; respalda que la terminología clásica de tres ventanas es histórica y no pretende enumerar todas las bandas actuales.'}
 ],'','Se explicita el esquema tradicional de tres ventanas para evitar ambigüedad con las bandas y ventanas adicionales usadas en sistemas modernos. En esa nomenclatura, 850 nm es la primera, 1310 nm la segunda y 1550 nm la tercera. G.652 caracteriza fibra monomodo optimizada alrededor de 1310 nm, también apta para operar cerca de 1550 nm; la respuesta no debe entenderse como que 1550 sea la única banda actual ni que la fibra solo opere en esa longitud de onda.','corregida'],
 [2982,[108],['IV-10'],['conmutación de circuitos','conmutación de paquetes','RTC','X.25','Frame Relay','SMDS'],[
  {url:pstn,referencia:'UIT, manual de telecomunicaciones sobre la red telefónica pública conmutada (PSTN): explica el establecimiento y mantenimiento de un circuito conmutado durante la llamada.'},
  {url:x25,referencia:'UIT-T X.25, recomendación vigente para el servicio de transmisión de datos en modo paquete y su interfaz de acceso a una red pública de datos con conmutación de paquetes.'},
  {url:rfc2427,referencia:'IETF RFC 2427, estándar sobre interconexión multiprotocolo por Frame Relay: describe la red Frame Relay y sus circuitos virtuales/DLCI.'},
  {url:rfc1209,referencia:'IETF RFC 1209, protocolo SMDS para redes de área metropolitana: especifica el transporte de datagramas en el servicio SMDS.'}
 ],'','Se completa la tilde de «Cuál» y se concreta la comparación como el mecanismo de transferencia del servicio. La RTC/PSTN tradicional establece un circuito dedicado durante la llamada, mientras X.25, Frame Relay y SMDS ofrecen transporte de datos basado en paquetes o tramas y circuitos virtuales/lógicos, no un circuito físico conmutado extremo a extremo como la telefonía clásica. La distinción se refiere al servicio de red de cada opción, no a los circuitos virtuales que puedan utilizar las redes de paquetes.','corregida'],
 [2983,[108,110],['IV-7','IV-8'],['ADSL','DSLAM','central telefónica','bucle local','concentración de tráfico'],[
  {url:fccDsl,referencia:'Federal Communications Commission, documento técnico sobre banda ancha DSL: define el DSLAM como equipo que termina/agrega líneas DSL y entrega tráfico hacia la red de agregación.'},
  {url:dotDsl,referencia:'U.S. Department of Transportation, informe técnico de redes de banda ancha: sitúa el DSLAM en la central telefónica y describe su función de concentrar tráfico de múltiples bucles DSL en la red de acceso.'}
 ],'','Se mantiene DSLAM como única forma estándar entre las opciones. El equipo de acceso termina o agrega los bucles DSL y concentra su tráfico en la central o en un punto remoto de acceso; “multiplexor” es una simplificación funcional del enunciado, no el nombre expandido de las siglas DSLAM (Digital Subscriber Line Access Multiplexer). Los distractores no son denominaciones estándar equivalentes.','corregida'],
 [2984,[108],['IV-11'],['IEEE 802.16a','WiMAX','WirelessMAN-OFDM','OFDM','OFDMA','capa física'],[
  {url:ieee80216,referencia:'IEEE 802.16 Working Group, documento técnico sobre 802.16a: enumera tres interfaces PHY para 2–11 GHz —WirelessMAN-SCa, WirelessMAN-OFDM y WirelessMAN-OFDMA— y describe OFDM con transformada de 256 puntos.'}
 ],'','Se acota la pregunta a cuál de las opciones propuestas es una interfaz PHY especificada por IEEE 802.16a. OFDM (WirelessMAN-OFDM) es la única correcta entre DSSS, FHSS, OFDM y DWDM. La norma contempla también WirelessMAN-SCa y WirelessMAN-OFDMA; por tanto, no se presenta OFDM como única técnica PHY de 802.16a.','corregida'],
 [2985,[114],['IV-11'],['IEEE 802.11ax','Wi-Fi 6','Wi-Fi 5','Wi-Fi 4','WLAN'],[
  {url:ieeeWiFiTimeline,referencia:'IEEE Standards Association, cronología oficial de Wi-Fi: identifica expresamente IEEE 802.11ax como Wi-Fi 6, 802.11ac como Wi-Fi 5 y 802.11n como Wi-Fi 4.'},
  {url:ieee80211ax,referencia:'IEEE Standards Association, ficha de IEEE 802.11ax-2021, enmienda de alta eficiencia para WLAN; la ficha informa de su estado y de su incorporación posterior a IEEE 802.11-2024.'}
 ],'','Se normaliza «versión estándar 802.11» por «enmienda IEEE 802.11» y se conserva la correspondencia inequívoca: Wi-Fi 6 se basa en 802.11ax; 802.11ac es Wi-Fi 5 y 802.11n es Wi-Fi 4. La designación de marca Wi-Fi procede de Wi-Fi Alliance, mientras que la especificación técnica pertenece a IEEE.','corregida']
];
apply({numero:'533',fecha:'2026-10-29',records,edits:{
 2981:{texto:'En el esquema tradicional de las tres ventanas de transmisión de fibra óptica, ¿qué longitud de onda corresponde a la tercera ventana?',opciones:['850 nm','1310 nm','1480 nm','1550 nm'],respuesta_correcta:3},
 2982:{texto:'¿Cuál de estas redes emplea tradicionalmente conmutación de circuitos para establecer una llamada telefónica, en lugar del transporte de datos por paquetes?',opciones:['Red telefónica pública conmutada (RTC/PSTN).','X.25.','Frame Relay.','SMDS.'],respuesta_correcta:0},
 2983:{texto:'En ADSL, ¿cómo se denomina el equipo de acceso situado habitualmente en la central que termina y concentra el tráfico de múltiples líneas DSL?',opciones:['DSLAM.','DSLM.','ADSLM.','ADSLAM.'],respuesta_correcta:0},
 2984:{texto:'IEEE 802.16a especifica varias interfaces PHY. ¿Cuál de las siguientes es una de ellas?',opciones:['DSSS.','FHSS.','WirelessMAN-OFDM.','DWDM.'],respuesta_correcta:2},
 2985:{texto:'¿Qué enmienda IEEE 802.11 corresponde a la generación comercial Wi-Fi 6?',opciones:['IEEE 802.11ax.','IEEE 802.11ac.','IEEE 802.11ag.','IEEE 802.11n.'],respuesta_correcta:0}
}});
