const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const records=[
[7181,[110,118],['IV-8'],['fibra óptica multimodo','OM5','SWDM','ISO/IEC 11801-1'],[
{url:'https://webstore.iec.ch/en/publication/62020',referencia:'IEC 60793-2-10:2019, ficha y alcance de la subcategoría A1-OM5: multimodo de banda ancha, apta para transmisión de una o varias longitudes de onda en la banda aproximada 850–950 nm.'},
{url:'https://www.itu.int/rec/dologin_pub.asp?id=T-REC-G.Sup40-202407-I%21%21PDF-E&lang=e&type=items',referencia:'UIT-T G Suppl. 40 (07/2024), tabla V.2: correspondencia entre OM5 y las especificaciones ISO/IEC 11801-1 e IEC 60793-2-10.'},
{url:a1,referencia:'Convocatoria A1 GSI 2025, temas 110 (cableado y equipos de interconexión) y 118 (redes LAN y medios de transmisión).'},
{url:a2,referencia:'Convocatoria A2 GSI 2025, tema IV-8: redes locales, medios, protocolos y transmisión.'}
],{texto:'¿Qué categoría de fibra óptica multimodo de banda ancha está especificada para admitir transmisión con una o varias longitudes de onda en torno a 850–950 nm, lo que permite aplicaciones de multiplexación por división de longitud de onda (WDM) de onda corta?',opciones:['OM2','OM3','OM4','OM5'],respuesta_correcta:3},'Corregida la formulación, que mezclaba una pregunta por categoría con la expresión indeterminada «a partir de qué estándar». OM5 es la categoría multimodo de banda ancha asociada a SWDM. IEC 60793-2-10 la especifica para una o varias longitudes de onda en la región 850–950 nm; la UIT recoge su correspondencia con ISO/IEC 11801-1. La transmisión multionda depende también de transceptores compatibles y no es una propiedad automática de todo enlace OM5.','corregida'],
[7182,[115],['IV-8'],['IPv4','CIDR','subred /27','broadcast','direcciones privadas'],[
{url:'https://www.rfc-editor.org/rfc/rfc4632.html',referencia:'IETF RFC 4632, sección 3.1: notación CIDR y prefijos de longitud variable para bloques de direcciones IPv4.'},
{url:'https://www.rfc-editor.org/rfc/rfc1918.html',referencia:'IETF RFC 1918, sección 3: únicos rangos IPv4 reservados para uso privado (10/8, 172.16/12 y 192.168/16); 193.163.14.192/27 no pertenece a ellos.'},
{url:a1,referencia:'Convocatoria A1 GSI 2025, tema 115: arquitectura de redes IP y encaminamiento.'},
{url:a2,referencia:'Convocatoria A2 GSI 2025, tema IV-8: redes locales, direccionamiento, protocolos y transmisión.'}
],{texto:'Dada la subred IPv4 193.163.14.192/27, señale la afirmación correcta:',opciones:['Su dirección de difusión es 193.163.14.255.','Admite hasta 30 direcciones de host utilizables, sin contar la dirección de red ni la de difusión.','La dirección 193.163.14.225 pertenece a esta subred.','Es un bloque de direccionamiento privado definido por RFC 1918.'],respuesta_correcta:1},'Corregidos los octetos erróneos de los distractores A y C para que evalúen la misma subred. Un prefijo /27 deja 5 bits de host: 32 direcciones totales, con dirección de red .192 y difusión .223; quedan 30 utilizables (.193–.222). La .225 cae en la siguiente subred /27 y 193.163.14.192/27 no está dentro de los tres rangos privados de RFC 1918.','corregida'],
[7183,[115],['IV-13'],['IPv6','direccionamiento IP','128 bits'],[
{url:'https://www.rfc-editor.org/rfc/rfc8200.html',referencia:'IETF RFC 8200, sección 2: el tamaño de dirección IPv6 se amplía a 128 bits; §3 representa los campos Source Address y Destination Address con 128 bits cada uno.'},
{url:a1,referencia:'Convocatoria A1 GSI 2025, tema 115: redes IP y funcionalidades específicas de IPv6.'},
{url:a2,referencia:'Convocatoria A2 GSI 2025, tema IV-13: arquitectura y funcionamiento de Internet.'}
],null,'La opción correcta es 128 bits, conforme a la especificación IPv6. Se mantiene el enunciado y las opciones originales.','vigente'],
[7184,[118],['IV-8'],['conmutación Ethernet','cut-through','dirección MAC de destino','latencia'],[
{url:'https://community.cisco.com/t5/networking-knowledge-base/network-switching-operation/ta-p/4193160',referencia:'Cisco Networking Knowledge Base, sección Cut-Through Switching: la decisión se toma tras examinar los seis primeros bytes de la trama Ethernet, que contienen la MAC de destino.'},
{url:'https://standards.ieee.org/ieee/802.1q/10323/',referencia:'IEEE Std 802.1Q-2022, norma activa que especifica la arquitectura de puentes y puentes VLAN sobre la que operan los métodos de reenvío de tramas.'},
{url:a1,referencia:'Convocatoria A1 GSI 2025, tema 118: dispositivos de interconexión y redes LAN.'},
{url:a2,referencia:'Convocatoria A2 GSI 2025, tema IV-8: redes locales y dispositivos de interconexión.'}
],null,'La respuesta correcta es después de recibir los primeros seis bytes de la trama, que forman la dirección MAC de destino. El modo cut-through reduce la latencia porque no espera la trama completa ni valida su FCS antes de iniciar el reenvío; el comportamiento concreto puede depender de la implementación.','vigente'],
[7185,[118],['IV-8'],['VLAN','IEEE 802.1Q','etiquetado de tramas','dominio de difusión','enlace troncal'],[
{url:'https://standards.ieee.org/ieee/802.1q/10323/',referencia:'IEEE Std 802.1Q-2022, norma activa de puentes y redes bridged, que incluye puentes VLAN, su operación, gestión, protocolos y algoritmos.'},
{url:'https://grouper.ieee.org/groups/802/1/files/public/docs2002/bridge-based-ether-prov-2.pdf',referencia:'IEEE 802.1, figura de formato de tramas: el puente puede insertar una etiqueta 802.1Q en la trama Ethernet entre las MAC de origen y el campo longitud/tipo.'},
{url:a1,referencia:'Convocatoria A1 GSI 2025, tema 118: redes LAN y configuración/gestión de VLAN.'},
{url:a2,referencia:'Convocatoria A2 GSI 2025, tema IV-8: redes locales, protocolos y transmisión.'}
],{texto:'Respecto de las redes de área local virtuales (VLAN), señale la afirmación FALSA:',opciones:['IEEE 802.1Q puede insertar una etiqueta en una trama Ethernet para identificar la VLAN por la que se transporta.','Cada VLAN constituye un dominio de difusión de capa 2 separado.','Un enlace troncal puede transportar tráfico de varias VLAN sobre un mismo enlace físico.','La etiqueta VLAN se inserta en el paquete IP de capa 3 y no modifica ni acompaña a la trama Ethernet.'],respuesta_correcta:3},'Corregida para eliminar una ambigüedad del original: llamar «paquetes» a las unidades etiquetadas y ofrecer «todas las anteriores» hacía que hubiera más de una opción falsa. IEEE 802.1Q etiqueta tramas Ethernet (capa de enlace); las VLAN separan dominios de difusión y pueden multiplexarse en enlaces troncales.','corregida']
];
aplicar({numero:'1372',fecha:'2026-11-15',records});
