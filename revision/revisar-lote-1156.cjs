require('./aplicar-lote.cjs')({
 numero:'1156',fecha:'2026-11-13',
 records:[
  [6101,[114],['IV-11'],['WLAN','IEEE 802.11','Wi-Fi'],[
   {url:'https://standards.ieee.org/ieee/1531/10548/',referencia:'IEEE SA, IEEE 802.11-2024 (Active Standard): identifica expresamente el estándar como Wireless LAN MAC/PHY; IEEE explica que la serie 802.11 es la base de Wi-Fi.'},
   {url:'https://standards.ieee.org/wp-content/uploads/interactive/web/wi-fi-timeline/',referencia:'IEEE SA Wi-Fi Timeline: Wi-Fi se basa en la serie de estándares IEEE 802.11.'},
   {url:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',referencia:'ITIC Academy, bloque 42 Redes, actualización 2026: WLAN/Wi-Fi y redes inalámbricas; cotejo A1-114/A2-IV.11.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 114: IEEE 802.11 y redes inalámbricas.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema IV.11: redes inalámbricas, protocolos y acceso.'}
  ],null,'Se confirma la opción A: la serie IEEE 802.11 define WLAN MAC/PHY y sustenta Wi-Fi. Se actualiza la referencia a la edición activa 802.11-2024; 802.3 es Ethernet, 802.5 Token Ring y 802.8 trató fibra para LAN.','vigente'],
  [6102,[114],['IV-11'],['DECT','TDMA','TDD','FDMA','ETSI EN 300 175'],[
   {url:'https://www.etsi.org/technical-groups/dect/?id=1605',referencia:'ETSI Technical Committee DECT: mantiene el DECT clásico y desarrolla DECT-2020 NR; describe ambas familias de estándares.'},
   {url:'https://www.etsi.org/deliver/etsi_en/300100_300199/30017501/02.06.06_20/en_30017501v020606a.pdf',referencia:'ETSI EN 300 175-1 V2.6.6, Overview: especifica para DECT carrier multiplex TDMA y duplexación básica TDD; el sistema clásico también usa acceso por portadoras (FDMA).'},
   {url:'https://www.etsi.org/deliver/etsi_tr/101100_101199/101178/01.04.01_60/tr_101178v010401p.pdf',referencia:'ETSI TR 101 178, guía del estándar DECT: resume la técnica de acceso como MC/TDMA/TDD.'},
   {url:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',referencia:'ITIC Academy, bloque 42 Redes, actualización 2026: acceso radio/telecomunicaciones y redes inalámbricas; cotejo A1-114/A2-IV.11.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 114: redes inalámbricas y sistemas de acceso.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema IV.11: redes inalámbricas y sistemas de acceso.'}
  ],null,'La combinación A (TDMA/TDD) es correcta para la estructura temporal y duplexación de DECT clásico. Se modifica el enunciado para preguntar exactamente por esa pareja; no se oculta que DECT además multiplexa portadoras (FDMA). DECT-2020 NR es una generación distinta y añade OFDM/FDMA al esquema TDMA/TDD.','corregida'],
  [6103,[114],['IV-11'],['WPAN','NFC','IrDA','Wibree','CSMA','IEEE 802.15.4'],[
   {url:'https://www.nfc-forum.org/learn/nfc-technology/',referencia:'NFC Forum: NFC es tecnología de comunicación inalámbrica de corto alcance entre dispositivos.'},
   {url:'https://www.irda.org/standards/pubs/IrPHY_1p4.pdf',referencia:'Infrared Data Association, IrPHY 1.4: especifica enlaces de datos infrarrojos punto a punto, de corto alcance, entre dispositivos.'},
   {url:'https://www.sec.gov/Archives/edgar/data/924613/000110465907051516/a07-17878_16k.htm',referencia:'Comunicado conjunto de Nokia y Bluetooth SIG (12-06-2007): Wibree es tecnología inalámbrica de baja energía para PAN, incorporada al ecosistema Bluetooth.'},
   {url:'https://standards.ieee.org/ieee/802.15.4/11041/',referencia:'IEEE SA, IEEE 802.15.4-2024: estándar activo para conectividad inalámbrica de bajo caudal entre dispositivos personales; separa la tecnología de red de las técnicas MAC.'},
   {url:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',referencia:'ITIC Academy, bloque 42 Redes, actualización 2026: redes inalámbricas personales y métodos de acceso; cotejo A1-114/A2-IV.11.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 114: redes inalámbricas y sistemas de acceso.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema IV.11: protocolos y sistemas de acceso inalámbrico.'}
  ],null,'Se conserva la respuesta D con un enunciado que distingue una red/tecnología PAN de un mecanismo MAC. NFC e IrDA son enlaces inalámbricos de corto alcance; Wibree fue una tecnología PAN de Nokia integrada posteriormente en Bluetooth LE. CSMA es un método de acceso al medio, que puede usarse dentro de una WPAN, pero no es en sí una tecnología ni una WPAN.','corregida'],
  [6104,[115],['II-8'],['IPv6','Unique Local Address','ULA','fc00::/7','RFC 4193','RFC 3879'],[
   {url:'https://www.rfc-editor.org/rfc/rfc4193.html',referencia:'RFC 4193, §3.1: reserva FC00::/7 para direcciones IPv6 unicast locales únicas (ULA), con asignación local y Global ID pseudoaleatorio.'},
   {url:'https://www.rfc-editor.org/rfc/rfc4291.html#section-2.5',referencia:'RFC 4291, §2.5: describe direcciones unicast, incluidas global, link-local y direcciones de propósito especial; los tipos compatibles con IPv4 no forman una taxonomía vigente general.'},
   {url:'https://www.rfc-editor.org/rfc/rfc3879.html',referencia:'RFC 3879: deprecó el prefijo site-local FEC0::/10, que aparecía en clasificaciones antiguas.'},
   {url:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',referencia:'ITIC Academy, bloque 42 Redes, actualización 2026: IPv6 y arquitectura TCP/IP; cotejo A1-115/A2-II.8.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 115: IPv4/IPv6, arquitectura y funcionalidades específicas de IPv6.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema II.8: arquitectura TCP/IP, protocolos y direccionamiento.'}
  ],null,'Se sustituye el inventario ambiguo y parcialmente obsoleto de “tipos especiales unicast” por una pregunta normativa concreta: FC00::/7 identifica Unique Local Addresses conforme a RFC 4193. RFC 3879 deprecó FEC0::/10; las direcciones compatibles con IPv4 de la lista antigua tampoco deben presentarse como una clasificación general actual. La respuesta correcta pasa a A.','corregida'],
  [6105,[108],['IV-6'],['B-ISDN','interfaz usuario-red','ITU-T I.413','I.432','RDSI de banda ancha'],[
   {url:'https://www.itu.int/rec/T-REC-I.413/en',referencia:'ITU-T Recommendation I.413 (03/93), título “B-ISDN user-network interface”; la base oficial UIT indica estado In force. I.432 es una especificación asociada de la capa física, no la recomendación general solicitada.'},
   {url:'https://www.itu.int/rec/T-REC-I/en',referencia:'Catálogo oficial UIT-T de la serie I (RDSI): lista I.413 como interfaz usuario-red de B-ISDN.'},
   {url:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',referencia:'ITIC Academy, bloque 42 Redes, actualización 2026: redes y estándares de telecomunicación; cotejo A1-108/A2-IV.6.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 108: redes de telecomunicaciones, medios e interconexión.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema IV.6: comunicaciones, equipos, conmutación y redes.'}
  ],null,'Se confirma la opción A, I.413. La UIT registra la edición 03/1993 en vigor como la recomendación de interfaz usuario-red de B-ISDN; I.432 se refiere a especificaciones de la capa física. El enunciado se normaliza como RDSI de banda ancha/B-ISDN para mantener la denominación de la UIT.','vigente']
 ],
 edits:{
  6101:{texto:'¿Qué familia de estándares IEEE define la interfaz MAC/PHY de las redes inalámbricas de área local (WLAN) conocidas como Wi-Fi?',opciones:['IEEE 802.11.','IEEE 802.5.','IEEE 802.8.','IEEE 802.3.'],respuesta_correcta:0},
  6102:{texto:'En DECT clásico, ¿qué combinación describe el acceso en el tiempo y el método de duplexación radio?',opciones:['TDMA/TDD.','GFSK.','FSK.','CDMA.'],respuesta_correcta:0},
  6103:{texto:'¿Cuál de estas opciones no es una tecnología o estándar de comunicación inalámbrica personal (WPAN), sino un método de acceso al medio que puede emplearse en redes?',opciones:['NFC.','IrDA.','Wibree (tecnología de baja energía integrada en Bluetooth LE).','CSMA.'],respuesta_correcta:3},
  6104:{texto:'¿Qué prefijo identifica las direcciones unicast locales únicas de IPv6 (Unique Local Addresses, ULA)?',opciones:['FC00::/7.','FE80::/10.','FEC0::/10.','FF00::/8.'],respuesta_correcta:0},
  6105:{texto:'¿Qué Recomendación UIT-T define la interfaz usuario-red de la RDSI de banda ancha (B-ISDN)?',opciones:['I.413.','I.411.','I.431.','I.314.'],respuesta_correcta:0}
 }
});
