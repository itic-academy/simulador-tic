const records = [
  [851,[106],['IV-4'],['ITIL 4','principios guía','mejora continua','gestión de servicios'],[
    {url:'https://www.peoplecert.org/browse-certifications/it-governifications/it-governance-and-service-management/ITIL-1/itil-4-foundation-2565',referencia:'PeopleCert, ITIL 4 Foundation: identifica sus siete principios guía como parte del marco de gestión de servicios.'},
    {url:'https://www.peoplecert.org/help-and-support/faq-itil',referencia:'PeopleCert, FAQ de ITIL: la versión 5 conserva conceptos y modelos probados de ITIL 4, incluidos sus principios guía; ITIL 4 se mantiene durante la transición.'}
  ],null,'Se acota a ITIL 4: sus siete principios guía incluyen pensar y trabajar holísticamente, progresar iterativamente con retroalimentación y colaborar/promover visibilidad. «Focalizarse en la planificación» no es uno de ellos. ITIL (Version 5) es posterior, pero mantiene los principios de la versión 4 como conceptos probados; la clave se conserva para el marco expresamente nombrado.','historica'],
  [852,[108,110],['IV-8'],['conmutación LAN','store-and-forward','CRC','integridad de tramas'],[
    {url:'https://www.cisco.com/c/en/us/td/docs/switches/datacenter/nexus3400s/sw/922/layer2/configuration/guide/b_Cisco_Nexus_3400-S_Series_NX-OS_Layer_2_Switching_Configuration_Guide_922/b_Cisco_Nexus_3400-S_Series_NX-OS_Layer_2_Switching_Configuration_Guide_chapter_0111.pdf',referencia:'Cisco Nexus Layer 2 Switching Configuration Guide, sección Configuring Switching Modes: store-and-forward almacena la trama completa y comprueba errores CRC antes de reenviarla; cut-through empieza antes de recibirla íntegra.'}
  ],null,'La respuesta es almacenamiento y reenvío (store-and-forward): el equipo recibe la trama completa, comprueba su CRC/FCS y solo entonces la reenvía. Cut-through y fragment-free inician el reenvío antes de recibir la trama completa. Se explicita que se trata del CRC de la trama Ethernet.','vigente'],
  [853,[110],['IV-7'],['ISO/IEC 11801','cableado genérico','clases de enlace y canal','TIA-568'],[
    {url:'https://www.iso.org/standard/66182.html',referencia:'ISO/IEC 11801-1:2017, Información y tecnología — Cableado genérico para instalaciones del cliente — Requisitos generales: norma internacional que define los requisitos comunes de los sistemas de cableado genérico.'},
    {url:'https://webstore.iec.ch/en/publication/26450',referencia:'IEC Webstore, edición consolidada ISO/IEC 11801-1:2017+AMD1:2025; el catálogo confirma la norma vigente y su alcance de cableado genérico.'},
    {url:'https://www.iso.org/obp/ui?_escaped_fragment_=iso%3Astd%3Aiso-iec%3A11801%3A-4%3Aed-1%3Av1%3Aen',referencia:'ISO/IEC 11801-4:2017, §2: remite a las clases de enlace/canal de ISO/IEC 11801-1.'}
  ],null,'La serie ISO/IEC 11801 especifica cableado genérico y clasifica el rendimiento de enlaces y canales por clases. Se corrige el error tipográfico «ISO/EIS DIS» por la denominación vigente ISO/IEC 11801 y se acota la pregunta a normas que establecen clases; EIA/TIA-568 usa categorías y especifica otros aspectos del cableado.','corregida'],
  [854,[110],['IV-8'],['10BASE-T','Ethernet sobre par trenzado','longitud de enlace','100 m'],[
    {url:'https://www.cisco.com/c/en/us/support/docs/routers/10000-series-routers/46792-ethbase.html',referencia:'Cisco, Specifications for Ethernet 100BaseTX and 10BaseT Cables: indica 100 m como longitud máxima de segmento 10BASE-T.'},
    {url:'https://www.cisco.com/c/en/us/docs/routers/access/iad2400/iad2420/hardware/installation/guide/2420plan.html',referencia:'Cisco, Planning Your Installation: atribuye a IEEE 802.3 la distancia máxima de segmento 10BASE-T de 100 m.'}
  ],null,'Se corrige el enunciado porque «distancia entre estaciones» era ambiguo: una red en estrella puede tener dos enlaces de hasta 100 m a través de un repetidor. La limitación normativa es de 100 m por segmento/enlace desde una estación hasta el repetidor o concentrador; no es una medida universal entre dos estaciones.','corregida'],
  [855,[114],['IV-11'],['Bluetooth','FHSS','salto de frecuencia','espectro ensanchado'],[
    {url:'https://www.bluetooth.com/wp-content/uploads/Files/Specification/HTML/Core_v6.3/out/en/br-edr-controller/radio-physical-layer-specification.html',referencia:'Bluetooth Core Specification v6.3, Vol. 2, Part A, §1: Bluetooth BR/EDR aplica un transceptor de salto de frecuencia para combatir interferencias y desvanecimientos.'},
    {url:'https://www.bluetooth.com/learn-about-bluetooth/tech-overview/',referencia:'Bluetooth SIG, Technology Overview: presenta FHSS como el método de uso de canal tanto para BR/EDR como para Bluetooth LE.'}
  ],null,'La respuesta correcta es FHSS, espectro ensanchado por salto de frecuencia. Bluetooth BR/EDR y LE seleccionan/hacen saltar la frecuencia entre canales; no combinan FHSS con DSSS. Se cambia la clave de «a y b» a la opción de salto de frecuencia.','corregida']
];

const edits = {
  852:{texto:'¿Qué método de conmutación LAN recibe la trama Ethernet completa y comprueba su CRC/FCS antes de reenviarla?',opciones:['Cut-through (conmutación por corte).','Fragment-free (libre de fragmentos).','Verificación de fragmentos.','Almacenamiento y reenvío (store-and-forward).'],respuesta_correcta:3},
  853:{texto:'¿Qué serie de normas ISO/IEC especifica el cableado genérico de telecomunicaciones para instalaciones y define clases de rendimiento de enlaces y canales?',opciones:['ANSI/TIA-568.','ISO/IEC 11108.','EIA/TIA-568.','ISO/IEC 11801.'],respuesta_correcta:3},
  854:{texto:'En 10BASE-T, ¿cuál es la longitud máxima normativa de un segmento de par trenzado entre una estación y un repetidor o concentrador?',opciones:['100 metros.','185 metros.','200 metros.','500 metros.'],respuesta_correcta:0},
  855:{texto:'¿Qué técnica de espectro ensanchado emplea Bluetooth para cambiar de canal de radio?',opciones:['Espectro ensanchado por secuencia directa (DSSS).','Espectro ensanchado por salto de frecuencia (FHSS).','La combinación de DSSS y FHSS.','Ninguna de las anteriores.'],respuesta_correcta:1}
};

require('./aplicar-lote.cjs')({numero:'107',fecha:'2026-10-22',records,edits});
