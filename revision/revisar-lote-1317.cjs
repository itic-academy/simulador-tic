const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const rfc791='https://www.rfc-editor.org/rfc/rfc791.html';
const rfc8200='https://www.rfc-editor.org/rfc/rfc8200.html';
const rfc8504='https://www.rfc-editor.org/rfc/rfc8504.html';
const rfc4291='https://www.rfc-editor.org/rfc/rfc4291.html';
const rfc1878='https://www.rfc-editor.org/rfc/rfc1878.html';
const hamming='https://onlinelibrary.wiley.com/doi/10.1002/j.1538-7305.1950.tb00463.x';
const reed='https://ntrs.nasa.gov/api/citations/19780022919/downloads/19780022919.pdf?attachment=true';
const ieee='https://standards.ieee.org/ieee/802/10422/';
const testa='https://interoperable-europe.ec.europa.eu/collection/egovernment/solution/testa';
const ixp='https://commission.europa.eu/document/download/2cdaa9c5-68ba-4fa9-bec1-1b4553f9e91a_en?filename=EU-IXP-strategy-summary.pdf';
const edits={
6906:{texto:'¿Cuál de las siguientes afirmaciones NO describe una diferencia entre IPv4 e IPv6?',opciones:['IPv6 incorpora multicast como tipo fundamental de direccionamiento; IPv4 también puede usar multicast, pero su difusión general se apoya en broadcast.','IPv6 exige un MTU de enlace mínimo de 1280 octetos; IPv4 exige que todo destino pueda recibir datagramas de al menos 576 octetos.','La cabecera base IPv6, sin extensiones, es menor que la cabecera IPv4 mínima.','En IPv6, la fragmentación IP la realiza el origen mediante una cabecera de extensión; en IPv4 también puede fragmentar un router si el bit DF no lo impide.'],respuesta_correcta:2},
6907:{texto:'La dirección 95.25.46.159 es una dirección de broadcast. ¿A qué subred IPv4 pertenece?',opciones:['95.25.30.128/27.','95.25.30.128/25.','95.25.46.128/27.','95.25.46.128/25.'],respuesta_correcta:2},
6908:{texto:'¿Cuál es la función del campo Protocol de 8 bits de la cabecera IPv4?',opciones:['Identificar el protocolo de nivel superior encapsulado en los datos del datagrama.','Indicar la MTU máxima del siguiente enlace mediante un valor de 16 bits.','Actuar como contador de saltos que decrementa cada router.','Indicar si quedan fragmentos posteriores del datagrama.'],respuesta_correcta:0},
6909:{texto:'Para un código binario con distancia mínima de Hamming 3, ¿qué capacidad se garantiza al elegir por separado modo de detección o de corrección?',opciones:['Detectar hasta tres errores por bloque.','Corregir hasta un error por bloque; en modo solo detección puede detectar hasta dos.','Corregir hasta dos errores por bloque.','Todas las anteriores son incorrectas.'],respuesta_correcta:1},
6910:{texto:'En el marco de las redes telemáticas transeuropeas, ¿qué describe correctamente la infraestructura TESTA-ng vigente?',opciones:['La expansión española «Transversal Española de Servicios Telemáticos entre Administraciones», exclusivamente autonómica.','Un servicio de red privada gestionada, basado en IP y operado separadamente de la Internet pública, que interconecta administraciones públicas participantes con instituciones y agencias de la UE.','Una red inalámbrica pública que ofrece acceso gratuito a Internet a toda la ciudadanía europea.','Una red de difusión de televisión por cable.'],respuesta_correcta:1}
};
const records=[
[6906,[115],['II-8'],['IPv4','IPv6','IPsec','MTU','cabecera base','fragmentación','multicast'],[
{url:rfc8200,referencia:'IETF RFC 8200, §§3 y 5: IPv6 tiene cabecera base de 40 octetos, MTU de enlace mínimo 1280 octetos y fragmentación de origen con reensamblado en destino.'},
{url:rfc791,referencia:'IETF RFC 791, §§2.3–2.4: cabecera IPv4 variable con mínimo de 20 octetos; destino debe poder recibir datagramas de 576 octetos; routers pueden fragmentar salvo DF.'},
{url:rfc8504,referencia:'IETF RFC 8504, §13.1: IPsec es SHOULD para nodos IPv6, no un MUST general; corrige la antigua idea de que su soporte era obligatorio en IPv6.'},
{url:rfc4291,referencia:'IETF RFC 4291, arquitectura de direccionamiento IPv6: define unicast, anycast y multicast; IPv6 no define broadcast.'},
{url:a1,referencia:'Convocatoria A1 GSI 2025, tema 115: redes IP y transición IPv4/IPv6.'},{url:a2,referencia:'Convocatoria A2 GSI 2025, tema II.8: TCP/IP, OSI, direccionamiento y encaminamiento.'}
],edits[6906],'Corregida C. Se acota la pregunta a hechos vigentes y se sustituyen los enunciados que mezclaban la antigua obligación de implementar IPsec con la recomendación actual RFC 8504. La opción C es la única que no es una diferencia: la cabecera base IPv6 mide 40 octetos, frente al mínimo de 20 octetos de IPv4. En la opción B se distingue MTU mínimo de enlace IPv6 de la capacidad mínima de recepción de datagramas IPv4 (576 octetos), que no es una MTU universal.', 'corregida'],
[6907,[115],['II-8'],['IPv4','subredes','broadcast','máscara /27','prefijo de red'],[
{url:rfc1878,referencia:'IETF RFC 1878, tabla de subredes: un prefijo /27 usa bloques de 32 direcciones; 95.25.46.128/27 termina en el broadcast .159.'},
{url:'https://www.rfc-editor.org/rfc/rfc4632.html',referencia:'IETF RFC 4632, CIDR: expresa redes IPv4 con prefijo y longitud de prefijo.'},
{url:a1,referencia:'Convocatoria A1 GSI 2025, tema 115: redes IP y direccionamiento.'},{url:a2,referencia:'Convocatoria A2 GSI 2025, tema II.8: direccionamiento y encaminamiento TCP/IP.'}
],edits[6907],'Se conserva C. /27 deja cinco bits de host, por lo que cada bloque contiene 32 direcciones. En el último octeto, el bloque 128–159 pertenece a la red 95.25.46.128/27 y su última dirección, .159, es broadcast.', 'vigente'],
[6908,[115],['II-8'],['IPv4','cabecera IP','campo Protocol','encapsulación','fragmentación'],[
{url:rfc791,referencia:'IETF RFC 791, §3.1 y figura 4: Protocol es un campo de 8 bits que identifica el protocolo siguiente/nivel superior en los datos del datagrama; MF pertenece a Flags, TTL es otro campo y Total Length limita la longitud del datagrama.'},
{url:a1,referencia:'Convocatoria A1 GSI 2025, tema 115: arquitectura y protocolos de redes IP.'},{url:a2,referencia:'Convocatoria A2 GSI 2025, tema II.8: modelo TCP/IP, protocolos y direccionamiento.'}
],edits[6908],'Corregida A. El original ofrecía otras tres afirmaciones falsas simultáneamente (MF no impide refragmentar, la MTU es propia del enlace y la reensambladura se hace en destino). Se reescribe como pregunta sobre la función inequívoca del campo Protocol: selector de 8 bits para el protocolo encapsulado de nivel superior.', 'corregida'],
[6909,[108,111],['II-8','IV-6'],['códigos de canal','distancia de Hamming','detección de errores','corrección de errores','CRC','Reed-Solomon'],[
{url:hamming,referencia:'Hamming, R. W. (1950), “Error Detecting and Error Correcting Codes”, Bell System Technical Journal 29(2), pp. 147–160, DOI 10.1002/j.1538-7305.1950.tb00463.x: introduce la teoría de códigos detectores/correctores; con distancia mínima d, detección hasta d−1 o corrección hasta floor((d−1)/2), capacidades elegidas por separado.'},
{url:reed,referencia:'NASA Technical Memorandum 102162, Tutorial on Reed-Solomon Error Correction Coding: códigos Reed–Solomon son códigos correctores de errores, no meros detectores.'},
{url:ieee,referencia:'IEEE 802.3, trama Ethernet: el FCS basado en CRC sirve para detectar errores; la trama defectuosa se descarta, no se corrige mediante el CRC.'},
{url:a1,referencia:'Convocatoria A1 GSI 2025, temas 108/111: telecomunicaciones, transmisión, protocolos y modelo OSI.'},{url:a2,referencia:'Convocatoria A2 GSI 2025, temas II.8 (OSI/TCP-IP) y IV.6 (comunicaciones y transmisión).'}
],edits[6909],'Corregida B. Se delimita «capacidades por separado»: para distancia mínima d=3 el código detecta hasta dos errores si se usa como detector, o corrige hasta uno; no promete simultáneamente ambos alcances en el mismo modo de decodificación. CRC es un mecanismo de detección y Reed–Solomon sí puede corregir errores.', 'corregida'],
[6910,[120],['I-10'],['TESTA','TESTA-ng','infraestructura europea','red privada','interconexión administrativa','EU-IXP'],[
{url:testa,referencia:'Comisión Europea / Interoperable Europe, ficha TESTA (actualización 29-08-2025): servicio de red privada gestionada basado en IP, operado separadamente de Internet, para intercambios entre administraciones, instituciones y agencias participantes.'},
{url:ixp,referencia:'Comisión Europea, EU-IXP Strategy Summary: indica que la infraestructura de red vigente se proporciona bajo TESTA-ng y presenta EU-IXP como infraestructura sucesora en transición, no como sinónimo ya plenamente desplegado.'},
{url:'https://ec.europa.eu/isa2/solutions/testa_en/',referencia:'Comisión Europea, TESTA: red troncal paneuropea para intercambio de datos de administraciones; emplea protocolos IP y está gestionada separadamente de Internet.'},
{url:a1,referencia:'Convocatoria A1 GSI 2025, tema 120: redes públicas de transmisión de datos, Red SARA y sTESTA.'},{url:a2,referencia:'Convocatoria A2 GSI 2025, tema I.10: cooperación, infraestructuras comunes e interconexión de redes.'}
],edits[6910],'Se conserva B con terminología actualizada a TESTA-ng: servicio de red privada gestionada con IP, separado de Internet pública, de alcance transfronterizo para organismos públicos participantes. Se descarta la expansión errónea «Transversal Española» y la descripción como Wi-Fi público. EU-IXP se explica como sucesor en transición, no como infraestructura que haga falsa la función actual de TESTA-ng.', 'corregida']
];
aplicar({numero:'1317',fecha:'2026-11-15',records,edits});
