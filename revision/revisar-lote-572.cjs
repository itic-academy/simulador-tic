const apply = require('./aplicar-lote.cjs');
const records = [
  [3176,[104],['II-16'],['OAIS','ISO 14721:2025','SIP','AIP','DIP','ingesta','archivo digital'],[
    {url:'https://www.iso.org/standard/87471.html',referencia:'ISO 14721:2025, edición 3 vigente: modelo de referencia OAIS, estado publicado; sustituye ISO 14721:2012.'},
    {url:'https://ccsds.org/Pubs/650x0m3.pdf',referencia:'CCSDS 650.0-M-3, OAIS, edición 3 (diciembre 2024): define SIP como el paquete que el productor entrega al OAIS para su ingest; AIP es el paquete mantenido por el archivo y DIP el difundido al usuario.'}
  ],null,'Para transferir documentación desde el productor al archivo OAIS con destino a su ingesta se usa el SIP (Submission Information Package). El AIP es el paquete conservado por el archivo y el DIP se entrega al usuario. Se actualiza la referencia a ISO 14721:2025, edición vigente, y se delimita la fase de transferencia para distinguir SIP de AIP.','corregida'],
  [3177,[111],['II-8'],['OSI','capa de transporte','segmentación','TCP segment','TPDU'],[
    {url:'https://www.iso.org/standard/20269.html',referencia:'ISO/IEC 7498-1:1994, modelo OSI, confirmado como vigente por ISO; define el modelo y funciones de sus capas.'},
    {url:'https://www.itu.int/rec/T-REC-X.200/en',referencia:'ITU-T X.200 (07/1994), recomendación vigente equivalente al modelo OSI: describe segmentación/reensamblado entre funciones de capas y el servicio de transporte.'},
    {url:'https://www.rfc-editor.org/rfc/rfc9293.html',referencia:'RFC 9293, TCP: la capa TCP divide el flujo de bytes en segmentos TCP para enviarlos en datagramas IP.'}
  ],null,'La respuesta prevista por el test es transporte: TCP segmenta el flujo y genera segmentos. Se reformula para no afirmar que «segmento» sea el nombre universal de toda PDU de la capa OSI; el modelo OSI también usa TPDU en su terminología formal.','corregida'],
  [3178,[114],['IV-11'],['Wi-Fi 6','IEEE 802.11ax','Wi-Fi Alliance','WLAN'],[
    {url:'https://standards.ieee.org/wp-content/uploads/interactive/web/wi-fi-timeline/index.html',referencia:'IEEE Standards Association, cronología oficial: identifica IEEE 802.11ax como Wi-Fi 6.'},
    {url:'https://standards.ieee.org/beyond-standards/the-evolution-of-wi-fi-technology-and-standards/',referencia:'IEEE Standards Association: 802.11ax es Wi-Fi 6; el estándar mejora eficiencia y rendimiento de WLAN.'}
  ],null,'La denominación generacional Wi-Fi 6 corresponde a IEEE 802.11ax; 802.11n se asocia a Wi-Fi 4 y 802.11ac a Wi-Fi 5. Se explicita que se pregunta por la equivalencia de nombres, no por cuál sea la generación más reciente.','corregida'],
  [3179,[115],['II-8'],['IPv4','IPv6','IPv4-mapped IPv6','hexadecimal','c193:fe33'],[
    {url:'https://www.rfc-editor.org/rfc/rfc4291.html',referencia:'RFC 4291, §2.2 y §2.5.5.2: forma textual IPv6 en ocho grupos hexadecimales y formato IPv4-mapped con los 80 bits cero, 16 bits ffff y la IPv4 en los 32 bits bajos.'}
  ],null,'193.147.254.51 se convierte octeto a octeto en hexadecimal: 193=c1, 147=93, 254=fe y 51=33. La dirección IPv4-mapped es ::ffff:c193:fe33 (forma expandida 0000:0000:0000:0000:0000:ffff:c193:fe33); se elimina la opción con triples dos puntos, que no es sintaxis IPv6 válida.','corregida'],
  [3180,[118],['IV-9'],['SNMP','SMIv2','MIB','RFC 2578','puertos UDP 161 162','SNMPv3 USM'],[
    {url:'https://www.rfc-editor.org/rfc/rfc2578.html',referencia:'RFC 2578 (SMIv2), especialmente §1 y §7: SMI especifica cómo describir módulos de información; OBJECT-TYPE expresa sintaxis y semántica de objetos gestionados.'},
    {url:'https://www.rfc-editor.org/rfc/rfc3417.html',referencia:'RFC 3417, §3.2: recomienda UDP 161 para command responders y UDP 162 para notification receivers.'},
    {url:'https://www.rfc-editor.org/rfc/rfc3414.html',referencia:'RFC 3414: el User-based Security Model de SNMPv3 define autenticación e intimidad (privacidad/cifrado); no atribuir estas protecciones a SNMPv2c.'}
  ],null,'SMIv2, basado en un subconjunto de ASN.1, define cómo describir módulos y objetos de gestión, incluidas sintaxis y semántica. Los puertos típicos son UDP 161 para consultas/respuestas y 162 para receptores de notificaciones. Las protecciones de autenticación y privacidad criptográfica se asocian a SNMPv3 USM, no a SNMPv2c.','corregida']
];
const edits = {
  3176:{texto:'Al transferir desde un productor un expediente al archivo OAIS para su ingesta, ¿qué tipo de paquete de información se remite?',opciones:['AIP (Archival Information Package).','SIP (Submission Information Package).','DIP (Dissemination Information Package).'],respuesta_correcta:1},
  3177:{texto:'En TCP, ¿a qué capa del modelo OSI se asocia la segmentación del flujo de datos y la generación de segmentos?',opciones:['Presentación.','Enlace.','Transporte.'],respuesta_correcta:2},
  3178:{texto:'¿Qué estándar IEEE 802.11 corresponde a la generación comercial denominada Wi-Fi 6?',opciones:['802.11n.','802.11ac.','802.11ax.'],respuesta_correcta:2},
  3179:{texto:'¿Cuál es la representación hexadecimal IPv4-mapped IPv6 de la dirección IPv4 193.147.254.51?',opciones:['193:147:254:51::f96.',':::ffff:051:254:147:193.','0000:0000:0000:0000:0000:ffff:c193:fe33.'],respuesta_correcta:2},
  3180:{texto:'En SNMP, señale la afirmación correcta sobre la SMIv2:',opciones:['SNMPv2c ofrece autenticación criptográfica y cifrado de mensajes.','SMIv2 define cómo describir módulos y objetos de gestión, incluida la sintaxis y semántica de los objetos MIB.','Los puertos UDP estándar son 123 para consultas y 124 para traps e informs.'],respuesta_correcta:1}
};
apply({numero:'572',fecha:'2026-10-29',records,edits});
